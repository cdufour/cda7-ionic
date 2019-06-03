import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title: string = 'Titre par défaut'
  count: number = 0

  producers: string[];

  constructor(public alertCtrl: AlertController) {
    //this.test()
    this.producers = ['Bio Coop', 'Mihaela Miam Miam', 'Jardin des délices'];
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

}
