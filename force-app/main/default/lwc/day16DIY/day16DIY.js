import { LightningElement } from 'lwc';
//import showModal from "./showModal.html"

export default class Day16DIY extends LightningElement {
    isShowModal = false;
    
    modalDisplay(){
        this.isShowModal = !this.isShowModal;

        
    }

    // render(){
    //     return showModal;
    // }
}