import { LightningElement, wire } from 'lwc';

import getAccountList from '@salesforce/apex/AccountController.getAccountList'

//import structuredClone from "@ungap/structured-clone";
export default class AccountContactDataTable extends LightningElement {

    accountsData = [];

    columnsList=[
        {   label: 'Account', fieldName: 'Name'},
        {   label: 'Contact', fieldName: 'ContactsName'},
       // {   label: 'Industry', fieldName: 'Industry'},
        //{   label: 'Revenue', fieldName: 'AnnualRevenue'}
    ]

    @wire(getAccountList)
    //accounts
    wiredAccount({data, error}){
        if(data){
            //console.log(data)
            //this.accountsData = data;

            // data.map(x => {
            //     {
            //         Name: x.map(x=>x.Name),
            //         Contact: x.contacts.map(con => con.name),
            //     }
            // })

            data.forEach(element => {
                // console.log("**************")
                // console.log(element)
                // console.log(element.Contacts)

                // var contactsName;
                // element.Contacts.forEach(con => {
                //     contactsName.conncat(con.Name + ';');
                // })

                var accDetails = {
                    Name: element.Name,
                    //ContactsName: contactsName,
                }

                console.log(JSON.stringify(accDetails));
                this.accountsData.push(accDetails);
                console.log(JSON.stringify(this.accountsData));
                
            });
        }

        if(error){
            console.log('error retrieving data')
        }
         
    }
}