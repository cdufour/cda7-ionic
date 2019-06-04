import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  api: string = "https://api.myjson.com/bins/hk0uv";

  constructor(private http: HttpClient) {}

  getFruits() {
    // ATTENTION: asynchronie. getFruits() retourne toujours
    // avant la requête asynchrone this.http.get

    // this.http.get(this.api).subscribe((fruits) => {
    //   console.log(fruits)
    //   return fruits;
    // })
    // return 'blabla';

    // on retourne la source observable, le composant consommateur
    // devra souscrire à cette source
    return this.http.get(this.api);

  }
}
