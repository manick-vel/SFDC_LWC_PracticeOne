import { LightningElement } from 'lwc';

export default class Day15ProgressBarParent extends LightningElement {
    startProgress(){
        this.template.querySelector("c-day15-progress-bar-child").progressValue();
        this.template.querySelector("lightning-button").disabled=true;
    }

    finishStart(){
        this.template.querySelector("lightning-button").disabled=false;
        this.template.querySelector("c-day15-progress-bar-child").resetProgress();
    }
}