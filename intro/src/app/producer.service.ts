import { Injectable } from '@angular/core';
import { Producer } from '../models/Producer';

@Injectable({
  providedIn: 'root'
})
export class ProducerService {
  producers: Producer[];
  favoriteProducers: Producer[] = [];

  constructor() { 
    this.producers = [
      new Producer('Bio Coop', 'https://media-cdn.tripadvisor.com/media/photo-s/0f/c9/b1/38/sofi-vera-pizza-napoletana.jpg'),
      new Producer('Pofta mare', 'https://media-cdn.tripadvisor.com/media/photo-s/0f/c9/b1/38/sofi-vera-pizza-napoletana.jpg'),
      new Producer('Giardino delizioso', 'https://media-cdn.tripadvisor.com/media/photo-s/0f/c9/b1/38/sofi-vera-pizza-napoletana.jpg')
    ];

    for(var i=0; i<this.producers.length; i++) {
      this.producers[i]
      .setDescription("Chaîne implantée dans toute l'Alsace depuis 1963");
    }

  }

  getProducers() {
    // généralement: requête http ici
    return this.producers
  }

  getProducerByIndex(index) {
    return this.producers[index]
  }

  toggleFavorite(producer: Producer) {

    let index = -1;
    for (var i=0; i<this.favoriteProducers.length; i++) {
      if (producer.name == this.favoriteProducers[i].name) {
        index = i;
        break;
      }
    }
    if (index == -1) {
      // le producteur recherché n'est pas dans le tableau des favoris
      this.favoriteProducers.push(producer);
      console.log('Producteur ajouté aux favoris');
    } else {
      // le producteur est déjà favori => on le retire du tableau
      this.favoriteProducers.splice(index, 1);
      console.log('Producteur retiré des favoris');
    }

  }
}
