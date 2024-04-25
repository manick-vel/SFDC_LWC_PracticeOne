import { LightningElement, api } from 'lwc';

export default class Day15ProgressBarChild extends LightningElement {
    progress = 0;
    intervalID;
    
    @api progressValue(){
        this.intervalID = setInterval(() => {
                                this.progress += 10;
                                if(this.progress >=100){
                                    const eventFinish = new CustomEvent("progressfinished");
                                    this.dispatchEvent(eventFinish);
                                }
                            }, 1000);
        
    }

    @api resetProgress(){
        this.progress=0;
        clearInterval(this.intervalID);
    }
}