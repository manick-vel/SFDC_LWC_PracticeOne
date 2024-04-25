import { LightningElement, api, wire } from 'lwc';

// import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import { getObjectInfo, getObjectInfos } from 'lightning/uiObjectInfoApi';

export default class Day20DIY extends LightningElement {
    
    @api objectApiName;
    recordData;

    totalFieldsCount=0;
    customFieldsCount=0;
    picklistFieldsCount=0
    recordTypesCount=0;

    @wire(getObjectInfo,{objectApiName: '$objectApiName'})
    displayObjectInfo({data, error}){
        if(data){
            this.recordData = data;
            var recordFields = this.recordData.fields
            
            if (recordFields){
                this.totalFieldsCount = parseInt(Object.keys(this.recordData.fields).length);
                
                for (const recordField in recordFields){

                    if(recordFields[recordField].custom){
                        this.customFieldsCount += 1;
                    }

                    if(recordFields[recordField].dataType == 'Picklist'){
                        this.picklistFieldsCount += 1;
                    }
                }
            }

            if(this.recordData.recordTypeInfos){
                this.recordTypesCount = parseInt(Object.keys(this.recordData.recordTypeInfos).length);
            }
        }

        if(error){
            console.log(error)
        }
    }
}