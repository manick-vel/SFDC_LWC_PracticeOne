import { LightningElement } from 'lwc';
// import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name'
// import ACCOUNT_EMAIL_FIELD from '@salesforce/schema/Account.Email'
// import ACCOUNT_PHONE_FIELD from '@salesforce/schema/Account.Phone'

// import CONTACT_FIRST_NAME_FIELD from '@salesforce/schema/Contact.FirstName'
// import CONTACT_LAST_NAME_FIELD from '@salesforce/schema/Contact.LastName'
// import CONTACT_CITY_FIELD from '@salesforce/schema/Contact.City'


export default class Day16DIY2 extends LightningElement {
    isShowAccount = false;

    isShowContact = false;

    showAccount(){
        this.isShowAccount = !this.isShowAccount;
    }

    showContact(){
        this.isShowContact = !this.isShowContact;
    }
}