import { LightningElement } from 'lwc';

export default class Day13DIY extends LightningElement {
    players =[];

    async getPlayers(){
        try{
            let url = "https://www.bcci.tv/players/men";
            let response = await fetch(url, {method: 'GET'});
            this.players = await response.json();

            console.log(this.players);

        }catch(e){
            console.log(e)
        }
    }
}