import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Product } from '../product.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.page.html',
  styleUrls: ['./single-product.page.scss'],
})
export class SingleProductPage implements OnInit {
  idProduct: string;
  private products: Product[] = [];

  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute, private alertController: AlertController) { }

  ngOnInit() {

    // get the argument from the URL
    this.route.paramMap.subscribe(params2 => {
      console.log(params2);

      // Validate if exists

      this.idProduct = params2.get('idProduct');
    });

    // Get product from Dataservice
    let product = this.dataService.getProduct(this.idProduct);
    console.log(typeof this.products);
    this.products.push(product);
    console.log(product);
  }

  // Ask confirmation to edit a Product.
  async editProduct() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmación!',
      message: 'Editar <strong>producto</strong>???',
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
            this.router.navigate(['/product']);
          }
        }
      ]
    });

    await alert.present();

  }

}
