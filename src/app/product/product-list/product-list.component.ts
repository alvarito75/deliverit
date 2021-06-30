import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {

  @Input() products: Product[];

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    // Load products from Service.
    this.products = this.dataService.getProductsData();
  }

  showInfo(idPeople) {
    console.log(idPeople);
    this.router.navigate(['/product/' + idPeople]);
  }

}
