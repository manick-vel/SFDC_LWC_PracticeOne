import { LightningElement, api } from 'lwc';

export default class Day14SliderChild extends LightningElement {
    @api sliderValue;

    @api resetSliderValue(){
        this.sliderValue = 0
    }
}