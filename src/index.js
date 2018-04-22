import { Contact, ContactList } from './ContactList';

let mohamed = new Contact({
    name: "Mohamed"
});


// console.log(mohamed);

let contacts = new ContactList("./src/contacts.json");

contacts.load()
.then(()=>{
    contacts.addContact(mohamed);
    console.log(contacts);
    
})
// console.log(contacts);
