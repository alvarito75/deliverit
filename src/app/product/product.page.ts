import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  constructor(private dataService: DataService, private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  // Ask confirmation to create a Product.
  async crearOrder() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmación!',
      message: 'Ustede creará un <strong>producto</strong>!!!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            console.log('Confirm Okay');
            //this.removeAndBack();
          }
        }
      ]
    });

    await alert.present();

  }

  crearProduct() {
    console.log('test');
    this.router.navigate(['/create-product']);
  }

}
