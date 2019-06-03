import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Producer } from '../../models/Producer';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title: string = 'Titre par défaut'
  count: number = 0

  producers: Producer[];

  constructor(
    public alertCtrl: AlertController,
    public router: Router
    ) {
    //this.test()
    //this.producers = ['Bio Coop', 'Mihaela Miam Miam', 'Jardin des délices'];
  
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

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      message: 'BRAVO !',
      buttons: ['OK']
    });

    await alert.present()
  }

  test() {
    this.title = 'Nouveau titre'
  }

  increment() {
    this.count += 1;
    if (this.count == 15) {
      this.presentAlert()
    }
  }

  decrement() {
    this.count -= 1;
    if (this.count == 15) {
      this.presentAlert()
    }
  }

  goTo() {
    // Utiliser le router angular pour charger la page help
    this.router.navigate(['/help'])
  }

}
