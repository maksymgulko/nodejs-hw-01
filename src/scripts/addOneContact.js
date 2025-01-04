import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const existingContacts = await readContacts();
    const newContact = createFakeContact();
    existingContacts.push(newContact);

    await writeContacts(existingContacts);
    console.log('One contact added successfully.');
  } catch (error) {
    console.error('Error while adding one contact:', error);
  }
};

addOneContact();
