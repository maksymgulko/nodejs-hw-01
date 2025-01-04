import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const existingContacts = await readContacts();
    const updatedContacts = existingContacts.slice(0, -1);
    await writeContacts(updatedContacts);
  } catch (error) {
    console.error('Error while removing the last contact: ', error);
  }
};

removeLastContact();
