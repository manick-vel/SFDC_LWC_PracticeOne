import { LightningElement } from 'lwc';

export default class Day11DIY extends LightningElement {
    employees =[];

    // posts =[]
    // async getPosts(){
    //     try{
    //         let url = "https://jsonplaceholder.typicode.com/posts";
    //         let response = await fetch(url, {method: 'GET'});
    //         this.employees = await response.json();
    //         console.log(this.employees);
    //     } catch(e){
    //         console.log(e);
    //     }
    // }

    async getEmployees(){
        try{
            let url = "https://sfdev36-dev-ed.my.salesforce-sites.com/services/apexrest/employees";
            let response = await fetch(url, {method: 'GET'});
            this.employees = await response.json();

            console.log(this.employees);
        } catch(e){
            console.log(e);
        }
    }
}