import { sheetsClient } from '@justice/api-client';
import { RegisterForm } from './RegisterForm';

export const revalidate = 0;

export default async function RegisterPage() {
    const [settings, cardSettings] = await Promise.all([
        sheetsClient.getSettings('register_settings'),
        sheetsClient.getSettings('card_settings').catch(() => ({} as Record<string, string>)),
    ]);
    return <RegisterForm settings={settings} cardSettings={cardSettings} />;
}
