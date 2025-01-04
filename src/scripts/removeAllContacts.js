import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    await writeContacts([]);
    console.log('The contacts were successfully deleted.');
  } catch (error) {
    console.error('Error while deleting the contacts: ', error);
  }
};

removeAllContacts();
