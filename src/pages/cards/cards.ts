import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the CardsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html',
})
export class CardsPage {
  
  results = new Array();
  name;
  image;
  type;

  // pokemon: Observable<any>;
  // constructor(public navCtrl: NavController, public navParams: NavParams, public HttpClient: HttpClient) {
  //   var rand = Math.floor(Math.random()*950);
  //   this.pokemon = this.HttpClient.get('http://pokeapi.co/api/v2/pokemon/1');
  //   this.pokemon.subscribe(data => {console.log('data', data)})
  // }

  constructor(public navCtrl: NavController, public navParams: NavParams){
    this.navCtrl = navCtrl;
    this.results = this.getResults();
  }

  getResults() {
    return [
      {"name":"Butterfree", "image":"assets/imgs/butterfree.png","type":"Flying-Type"},
      {"name":"Charmander", "image":"assets/imgs/charmander.png","type":"Fire-Type"},
      {"name":"Pikachu", "image":"assets/imgs/pikachu.png","type":"Electric-Type"}      
    ];
  }

  // getPokemonCards(){
  //    var rand = Math.floor(Math.random()*950);
  //    var cardArray = [];
  //    for (var i = 0; i < 5; i++){
  //      cardArray.push (this.getPokemonInfo(rand));
  //    }    
  // }

  // getPokemonObj(int){
  //    var obj = null;
  //    var request = new HttpRequest("GET", 'http://pokeapi.co/api/v2/pokemon/' + int, {"responseType": "JSON"})
  //    return request
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardsPage');
  }

}
