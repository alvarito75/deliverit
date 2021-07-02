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

  products: any;

  constructor(private dataService: DataService, private router: Router, private alertController: AlertController, public dataservice: DataService) { 

    this.dataservice.getProducts().subscribe((res: any) => {
      this.products = res.map(e => {
        return {
          id: e.payload.doc.id,
          name: e.payload.doc.data()['name'],
          type: e.payload.doc.data()['type'],
          imageUrl: e.payload.doc.data()['imageUrl'],
          quantity: e.payload.doc.data()['quantity'],
        }
      })
      console.log(this.products);
    }, (err: any) => {
      console.log(err);
    });
  }

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
            this.router.navigate(['/product/add-edit-product/add']);
          }
        }
      ]
    });

    await alert.present();
  }

}
