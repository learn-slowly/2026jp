import { google } from 'googleapis';
import { Readable } from 'stream';

export class GoogleDriveClient {
    private drive;
    private folderId: string;

    constructor() {
        const serviceAccountKey = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
        this.folderId = process.env.GOOGLE_DRIVE_FOLDER_ID || '';

        if (!serviceAccountKey) {
            throw new Error('GOOGLE_SERVICE_ACCOUNT_KEY is missing');
        }

        const auth = new google.auth.GoogleAuth({
            credentials: JSON.parse(serviceAccountKey),
            scopes: ['https://www.googleapis.com/auth/drive.file'],
        });

        this.drive = google.drive({ version: 'v3', auth });
    }

    async uploadImage(file: File): Promise<string> {
        if (!this.folderId) {
            throw new Error('GOOGLE_DRIVE_FOLDER_ID is missing');
        }

        try {
            // Convert File to Stream
            const buffer = Buffer.from(await file.arrayBuffer());
            const stream = new Readable();
            stream.push(buffer);
            stream.push(null);

            const response = await this.drive.files.create({
                requestBody: {
                    name: file.name,
                    parents: [this.folderId],
                    mimeType: file.type,
                },
                media: {
                    mimeType: file.type,
                    body: stream,
                },
                fields: 'id, webViewLink, webContentLink',
            });

            const fileId = response.data.id;
            if (!fileId) throw new Error('File upload failed: No ID returned');

            // Make file public
            await this.drive.permissions.create({
                fileId: fileId,
                requestBody: {
                    role: 'reader',
                    type: 'anyone',
                },
            });

            // Return direct link format which is more reliable for <img> tags
            // using the lh3.googleusercontent.com/d/ pattern
            return `https://lh3.googleusercontent.com/d/${fileId}`;

        } catch (error) {
            console.error('Google Drive Upload Error:', error);
            throw error;
        }
    }
}

export const driveClient = new GoogleDriveClient();
