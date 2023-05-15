import { registerPlugin } from '@capacitor/core';
import { Contact } from '../types/Contact';

export interface ContactsPlugin {
    getContacts(): Promise<{ results: Contact[] }>;
}

const Contacts = registerPlugin<ContactsPlugin>('Contacts');

export default Contacts;