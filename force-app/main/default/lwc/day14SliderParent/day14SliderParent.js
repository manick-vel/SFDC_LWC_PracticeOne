import { LightningElement } from 'lwc';

export default class Day14SliderParent extends LightningElement {
    sliderValue;

    changeSlider(event){
        this.sliderValue = parseInt(event.target.value);
    }

    resetSlider(){
        this.template.querySelector('c-day14-slider-child').resetSliderValue();
        this.template.querySelector('lightning-input').value = '';
    }
}