import { sheetsClient } from '@justice/api-client';
import { RegisterForm } from './RegisterForm';

export const revalidate = 0;

export default async function RegisterPage() {
    const settings = await sheetsClient.getSettings('register_settings');
    return <RegisterForm settings={settings} />;
}
