import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Order } from '../order.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {

  @Input() orders: Order[];

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    // Load products from Service.
    this.orders = this.dataService.getOrdersData();
  }

  showOrderInfo(idOrder) {
    console.log(idOrder);
    this.router.navigate(['/order/' + idOrder]);
  }

}
