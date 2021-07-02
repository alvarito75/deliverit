import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  constructor(private alertController: AlertController, private router: Router) {}

  ngOnInit() {
  }

  // Ask confirmation to create a Order.
  async crearOrder() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmación!',
      message: 'Ustede creará una <strong>tienda</strong>!!!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Nothing to do');
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            console.log('Go to another page');
            this.router.navigate(['/create-order']);
          }
        }
      ]
    });

    await alert.present();

  }

}
