import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Order } from '../order.model';

@Component({
  selector: 'app-single-order-page',
  templateUrl: './single-order-page.page.html',
  styleUrls: ['./single-order-page.page.scss'],
})
export class SingleOrderPagePage implements OnInit {

  idOrder: string;
  private orders: Order[] = [];

  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    // get the argument from the URL
    this.route.paramMap.subscribe(params2 => {
      console.log(params2);

      // Validate if exists

      this.idOrder = params2.get('idOrder');
    });

    // Get product from Dataservice
    let order = this.dataService.getOrder(this.idOrder);
    console.log(typeof this.orders);
    this.orders.push(order);
    console.log(order);
  }


  // Show product info
  test(idProduct) {
    //console.log('hey showing info');
    this.router.navigate(['/product/' + idProduct]);
  }

}
