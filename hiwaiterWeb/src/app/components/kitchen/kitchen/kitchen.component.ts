import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/app/constantsGlobal';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {

  msg = {
    TABLE: GlobalConstants.TABLE,
  };
  order: any;
  arrayTableString: any[];
  array: any[];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.order = this.orderService.getOrder();
    this.createArrayTableString();
    this.createArrayOrder();
  }

  createArrayTableString() {
    const tables = this.order;
    this.arrayTableString = [];

    for (const table of tables) {
      const tableKey = Object.keys(table);
      this.arrayTableString.push(tableKey[0]);
    }
  }

  createArrayOrder() {
    this.array = [];
    for (const order of this.order) {
      this.array.push(order);
    }
  }
}


