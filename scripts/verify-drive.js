const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');

// Load environment variables manually without dotenv
const envPath = path.resolve(process.cwd(), '.env.local');
let envConfig = {};

try {
    const envContent = fs.readFileSync(envPath, 'utf8');
    envContent.split('\n').forEach(line => {
        const match = line.match(/^([^=]+)=(.*)$/);
        if (match) {
            let key = match[1].trim();
            let value = match[2].trim();
            // Remove quotes if present
            if ((value.startsWith("'") && value.endsWith("'")) || (value.startsWith('"') && value.endsWith('"'))) {
                value = value.slice(1, -1);
            }
            // Handle multiline private key (simple fix for standard JSON format in env)
            // Note: The simple split used above breaks on multiline values.
            // But usually GOOGLE_SERVICE_ACCOUNT_KEY is a single line JSON string in verified env files or handle properly.
            // If it was pasted as multiline in .env.local, checking simple split might fail.
            // Let's rely on JSON.parse check later.
            envConfig[key] = value;
        }
    });

    // Re-do parsing for GOOGLE_SERVICE_ACCOUNT_KEY specifically if it's complex
    // Actually, usually it's better to just read the whole file and find the keys.
    // Let's assume the user put it in single line or use a more robust regex if needed.
    // Or just look for the specific keys we need.

    // Simple manual parser for specific keys
    const content = fs.readFileSync(envPath, 'utf8');

    const extract = (key) => {
        const regex = new RegExp(`^${key}='?([\\s\\S]*?)'?$`, 'm');
        const m = content.match(regex);
        return m ? m[1] : null;
    };

    // The key in the file provided earlier was wrapped in single quotes and spanned multiple lines?
    // Looking at the previous view_file output:
    // GOOGLE_SERVICE_ACCOUNT_KEY='{\n  "type": ... \n}'
    // It spans multiple lines. My simple split won't work.

    // Using a more robust match for the key which is bounded by single quotes
    const keyMatch = content.match(/GOOGLE_SERVICE_ACCOUNT_KEY='([\s\S]*?)'/);
    if (keyMatch) {
        envConfig.GOOGLE_SERVICE_ACCOUNT_KEY = keyMatch[1];
    }

    const folderMatch = content.match(/GOOGLE_DRIVE_FOLDER_ID='?([^'\n]+)'?/);
    if (folderMatch) {
        envConfig.GOOGLE_DRIVE_FOLDER_ID = folderMatch[1];
    }

} catch (e) {
    console.error('Error reading .env.local', e);
}

const serviceAccountKey = envConfig.GOOGLE_SERVICE_ACCOUNT_KEY;
const folderId = envConfig.GOOGLE_DRIVE_FOLDER_ID;

console.log('--- Google Drive Verification ---');
console.log('Folder ID:', folderId);
console.log('Service Account Key Found:', !!serviceAccountKey);

if (!serviceAccountKey || !folderId) {
    console.error('Missing environment variables. Check .env.local');
    if (!serviceAccountKey) console.error(' - GOOGLE_SERVICE_ACCOUNT_KEY missing');
    if (!folderId) console.error(' - GOOGLE_DRIVE_FOLDER_ID missing');
    process.exit(1);
}

async function verify() {
    try {
        const auth = new google.auth.GoogleAuth({
            credentials: JSON.parse(serviceAccountKey),
            scopes: ['https://www.googleapis.com/auth/drive.file'],
        });

        const drive = google.drive({ version: 'v3', auth });

        // 1. Check if we can identify our service account email
        const client = await auth.getClient();
        console.log('Service Account Email:', client.email);

        // 2. Try to list file in the folder (requires read permission)
        console.log(`Checking access to folder ${folderId}...`);
        // We verify checking ONLY that folder permissions.
        const res = await drive.files.list({
            q: `'${folderId}' in parents`,
            pageSize: 1,
            fields: 'files(id, name)',
        });

        console.log('Access Success! Files found:', res.data.files.length);

        // 3. Try to create a dummy file (requires write permission)
        console.log('Attempting to create a test file...');
        const createRes = await drive.files.create({
            requestBody: {
                name: 'test-from-script.txt',
                parents: [folderId],
            },
            media: {
                mimeType: 'text/plain',
                body: 'Hello from script!',
            },
        });
        console.log('Write Success! Created file ID:', createRes.data.id);

        // Clean up
        await drive.files.delete({ fileId: createRes.data.id });
        console.log('Cleanup Success! Deleted test file.');

    } catch (error) {
        console.error('Verification Failed!');
        console.error(error.message);
        if (error.errors) {
            console.error('Details:', JSON.stringify(error.errors, null, 2));
        }
    }
}

verify();
