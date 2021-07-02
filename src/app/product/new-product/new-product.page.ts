import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.page.html',
  styleUrls: ['./new-product.page.scss'],
})
export class NewProductPage implements OnInit {

  id: string;
  type: string;
  title: string;
  subTitle: string;

  constructor(private dataService: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe((data: any) => {
      
    });
  }

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
