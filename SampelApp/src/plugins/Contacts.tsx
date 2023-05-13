import { registerPlugin } from '@capacitor/core';

export interface ContactsPlugin {
    getContacts(): Promise<{ results: string[] }>;
}

const Contacts = registerPlugin<ContactsPlugin>('Contacts');

export default Contacts;