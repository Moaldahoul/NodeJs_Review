import * as fs from "fs";
import * as util from "util";

const readFile = util.promisify(fs.readFile);

class Contact {
    constructor(obj){
        console.log("New Contact");

        this.name = obj.name;
        this.phone = obj.phone;
        
    }
};

class ContactList{
    constructor(filename){
        this.list = [];
        this.filename = filename;
    }

    addContact(Contact){
        this.list.push(Contact);
    }

    load(){
        return readFile(this.filename, "utf8")
        .then(fileString => {
            // console.log(fileString);
            JSON.parse(fileString)
            .forEach(contact => this.addContact(
                contact));
            
        })
    }
};

export { Contact, ContactList };