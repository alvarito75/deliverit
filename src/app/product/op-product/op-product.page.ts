import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-op-product',
  templateUrl: './op-product.page.html',
  styleUrls: ['./op-product.page.scss'],
})
export class OpProductPage implements OnInit {

  idProduct: string;
  name: string;
  type: string;
  imageUrl: string;
  quantity: number;
  id: any;

  isEdit: boolean;
  loading: boolean;

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe((data: any) => {
      console.log(data.type);
      if(data.type == 'add') {
        this.isEdit = false;
      }
      else {
        this.isEdit = true;
        this.dataService.getSingleProduct(data.type).subscribe((dataProduct: any) => {
          console.log('edit page');
          console.log(data);
          this.id = data.type;
          this.idProduct = dataProduct.idProduct;
          this.name = dataProduct.name;
          this.type = dataProduct.type;
          this.imageUrl = dataProduct.imageUrl;
          this.quantity = dataProduct.quantity;
        });
      }
    });
  }

  ngOnInit() {
  }

  // Add a product to Firebase
  addProduct() {
    this.loading = true;

    if(this.isEdit) {
      this.updateProduct();
      return;
    }

    let data = {
      idProduct: this.idProduct,
      name: this.name,
      type: this.type,
      imageUrl: 'https://pilandina.com.bo/wp-content/uploads/2019/06/Leche-Light-sachet-800-ml-600x600.jpg',
      quantity: this.quantity
    };
    
    // Ask the Service to add the product in Firebase
    this.dataService.addProductToFirebase(data)
      .then((res: any) => {
        console.log(res);
        this.loading = false;
        this.router.navigateByUrl('/product');
      });
  }

  // Add a product to Firebase
  updateProduct() {
    this.loading = true;

    let data = {
      idProduct: this.idProduct,
      name: this.name,
      type: this.type,
      imageUrl: 'https://pilandina.com.bo/wp-content/uploads/2019/06/Leche-Light-sachet-800-ml-600x600.jpg',
      quantity: this.quantity
    };
    
    // Ask the Service to add the product in Firebase
    this.dataService.updateProductToFirebase(this.id, data)
      .then((res: any) => {
        console.log(res);
        this.loading = false;
        this.router.navigateByUrl('/product');
      });
  }
 
}