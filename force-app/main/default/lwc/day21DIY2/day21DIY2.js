import { LightningElement, wire } from 'lwc';

import {updateRecord} from 'lightning/uiRecordApi';

export default class Day21DIY2 extends LightningElement {

    formData={};
    recordId;
    
    // updateRecord
    changeHandler(event){
        const {name, value} = event.target
        this.formData[name] = value
    }

    getRecordId(event){
        this.formData['Id'] = event.target.value;
    }

    submitHandler(){
        updateRecord({fields: this.formData})
        .then(response=>{
            this.formData = {};
        })
    }

}