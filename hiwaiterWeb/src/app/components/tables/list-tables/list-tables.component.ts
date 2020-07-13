import { Component, OnInit, ɵConsole } from '@angular/core';
import { GlobalConstants, Status, Color } from '../../../constantsGlobal';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-list-tables',
  templateUrl: './list-tables.component.html',
  styleUrls: ['./list-tables.component.css']
})
export class ListTablesComponent implements OnInit {
  ArrayStatusLiteral = [
    { name: 'waiterRequest', translate: 'Solicitan camarero' },
    { name: 'accountRequested', translate: 'Cuenta solicitada' },
    { name: 'kitchenOrder', translate: 'Pedido en cocina' },
    { name: 'orderReceived', translate: 'Pedido recepcionado' },
    { name: 'orderServed', translate: 'Pedido servido' },

  ];
  ArrayStatus = [
    {
      waiterRequest: []
    },
    {
      accountRequested: []
    },
    {
      kitchenOrder: []
    },
    {
      orderReceived: []
    },
    {
      orderServed: []
    },
    {
      emptyTable: []
    }
  ];

  msg = {
    TABLES: GlobalConstants.TABLES,
    TABLE: GlobalConstants.TABLE,
    ORDERSERVED: Status.ORDERSERVED,
    WAITERREQUEST: Status.WAITERREQUEST,
    ACCOUNTREQUESTED: Status.ACCOUNTREQUESTED,
    KITCHENORDER: Status.KITCHENORDER,
    ORDERRECEIVED: Status.ORDERRECEIVED,
    ORANGE: Color.ORANGE,
    RED: Color.RED
  };

  countTableCategory = [];
  listTables: any;

  constructor(private orderService: OrderService) {

  }

  ngOnInit(): void {
    this.getTables();
    this.generateListTable();
    this.countTableByCategory();
  }

  pushTable(position, table, mode) {
    this.ArrayStatus[position][mode].push(table);
  }

  countTableByCategory() {
    for (const tables of this.ArrayStatus) {
      for (const status of this.ArrayStatusLiteral) {
        if (tables[status.name] !== undefined) {
          this.countTableCategory.push(tables[status.name].length);
        }
      }
    }
  }

  getTables() {
    this.listTables = this.orderService.getListTables();
  }

  generateListTable() {
    for (const table of this.listTables) {
      switch (table.state) {
        case 'Solicitan camarero':
          this.pushTable(0, table, 'waiterRequest');
          break;
        case 'Cuenta solicitada':
          this.pushTable(1, table, 'accountRequested');
          break;
        case 'Pedido servido':
          this.pushTable(4, table, 'orderServed');
          break;
        case 'Pedido en cocina':
          this.pushTable(2, table, 'kitchenOrder');
          break;
        case 'Pedido recepcionado':
          this.pushTable(3, table, 'orderReceived');
          break;
        case 'Mesa vacia':
          this.pushTable(5, table, 'emptyTable');
          break;
        default:
          break;
      }
    }
  }


}
