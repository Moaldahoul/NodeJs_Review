import { Contact, ContactList } from './ContactList';

let mohamed = new Contact({
    name: "Mohamed"
});


// console.log(mohamed);

let contacts = new ContactList("./src/contacts.json");

let validContact = new Contact({
    name: " Someone Name",
    phone: 3234526
});
// validContact.name = 535;
console.log(JSON.stringify(validContact));



// contacts.load()
// .then(()=>{
//     contacts.addContact(mohamed);
//     // console.log(contacts);
//     return contacts.save();
    
// })
// .then(() => {
//     console.log("Contacts save successfully!");
// })
// .catch(console.log);

// console.log(contacts);
