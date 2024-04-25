import { LightningElement, track } from 'lwc';

export default class Day9DIY extends LightningElement {

    //Variables
    
    answerUpper = '';
    @track product = {
        name: 'Stock One',
        price: '$20',
        stock: 10
    }

    isShowStock = true;

    @track employees = [
        {
            name: 'Ram',
            salary: 20000,
            position: 'Senior Engineer'
        },
        
        {
            name: 'Sam',
            salary: 10000,
            position: 'Junior Engineer'
        },

        {
            name: 'Guru',
            salary: 5000,
            position: 'Intern'
        }
    ]


    //Functions

    convertUpperCase(event){
        this.answerUpper = event.target.value.toUpperCase();
    }

    displayProductOnStock(event){
        var stockEntered = parseInt(event.target.value);

        if (stockEntered <= 0 || isNaN(stockEntered)){
            this.isShowStock = false;
        } 
        else {
            this.product.stock = stockEntered;
            this.isShowStock = true;
        }
        
    }

    displayEmployeeOnSalary(event){
        var salaryRange = parseInt(event.target.value);

        var filteredEmployees = [];
        if( salaryRange >= 0 || !isNaN(salaryRange)){
            this.employees.forEach(function(employee){
                if (employee.salary >= salaryRange){
                    filteredEmployees.push(employee);
                }
            })
            
            this.employees = filteredEmployees;
        }
    }
}