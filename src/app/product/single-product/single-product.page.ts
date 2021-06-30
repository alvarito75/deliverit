import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.page.html',
  styleUrls: ['./single-product.page.scss'],
})
export class SingleProductPage implements OnInit {
  idProduct: string;
  private products: Product[] = [];

  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) { }

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

}
