(function () {
    "use strict";

    angular.module("Contacts").
        service('ContactService', ['$localStorage', function ($localStorage) {
            var savedStuff = $localStorage.$default({
                contacts: []
            }),
            contacts = savedStuff.contacts;

            return {
                getContacts: getContacts,
                getContact: getContact,
                deleteContact: deleteContact,
                addContact: addContact,
                updateContact: updateContact
            };

            // returns all of the contacts
            function getContacts() {
                return contacts;
            }

            // returns a single contact
            function getContact(id) {
                return contacts[id];
            }

            // deletes a single contact
            function deleteContact(id) {
                contacts.splice(id, 1);
                $localStorage.contacts = contacts;
            }

            // adds a new contact
            function addContact(contact) {
                contacts.push(contact);
                $localStorage.contacts = contacts;
            }

            // update a contact
            function updateContact(id, contact) {
                contacts[id] = contact;
                $localStorage.contacts = contacts;
            }
        }]);
}());