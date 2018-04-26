import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch'
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the PokeServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PokeServiceProvider {

  private url: string = "https://pokeapi.co/api/v2/";

  constructor(private http: Http) {
    console.log('Hello PokeServiceProvider Provider');
  }

  getPokemon(){
    return this.http.get(this.url)
    .do((res: Response) => console.log(res))
  }

  getPokemonByName(name){
    return this.http.get(this.url + "pokemon/" + name)
    .map(this.extractData)
    .do(this.logResponse)
    .catch(this.catchError)
  }

  private  catchError(error: Response | any) {
    console.log(error);
    return Observable.throw(error.json().error || "Server Error.");
  }

  private logResponse(res: Response){
    console.log(res);
  }

  private extractData(res: Response){
    return res.json();
  }
}
