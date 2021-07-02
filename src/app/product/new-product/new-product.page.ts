import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.page.html',
  styleUrls: ['./new-product.page.scss'],
})
export class NewProductPage implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  addProduct() {
    console.log('Add product');
  }

  // Register a product
  registerProduct() {
    console.log('creating product');

    // Register the user
    this.dataService.registerProduct();
    // Reset the form
    //this.form.reset();

    // Redirect to home
    //this.router.navigate(['/home']);
  }
}
