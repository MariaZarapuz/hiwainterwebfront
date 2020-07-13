import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalConstants, Status, Color } from '../../../constantsGlobal';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-table-detail',
  templateUrl: './table-detail.component.html',
  styleUrls: ['./table-detail.component.css']
})
export class TableDetailComponent implements OnInit {

  id: number;
  served = false;
  noServed = true;

  msg = {
    ORDER: GlobalConstants.ORDER,
    TABLE: GlobalConstants.TABLE,
    ORDERRECEIVED: Status.ORDERRECEIVED,
    PREPARED: Status.PREPARED,
    NOPREPARED: Status.NOPREPARED,
    NOSERVED: Status.NOSERVED,
    SERVED: Status.SERVED
  };
  orderData: any;
  table: any;
  listTables: any;
  listOrderData: any;

  constructor(
    private activatedRouter: ActivatedRoute,
    private orderService: OrderService) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params => this.id = params.id);
    this.getOrder();
    this.filterId();
  }

  haveClass(e, state) {
    const element = state === 'noServed' ? 1 : 3;
    const haveClass = e.target.parentNode.childNodes[element].classList[0];
    this.removeClass(e, haveClass, element);
  }

  removeClass(e, haveClass, element) {
    if (haveClass === 'none') {
      e.target.parentNode.childNodes[element].classList.remove('none');
    } else {
      e.target.parentNode.childNodes[element].classList.add('none');
    }
  }
  getOrder() {
    this.listOrderData = this.orderService.getOrder();
  }

  filterId() {
    const tableId = `mesa${this.id}`;
    this.listTables = this.listOrderData;
    for (const table of this.listTables) {
      if (table[tableId] !== undefined) {
        this.orderData = table[tableId][0];
      }
    }

  }

}
