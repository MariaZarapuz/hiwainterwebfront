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
    { name: 'waiterRequest', translate: 'solicita camarero' },
    { name: 'accountRequested', translate: 'cuenta solicitada' },
    { name: 'occupy', translate: 'ocupada' },
    { name: 'kitchenOrder', translate: 'pedido en cocina' },
    { name: 'orderReceived', translate: 'pedido recepcionado' },
    { name: 'orderServed', translate: 'pedido servido' },


  ];
  ArrayStatus = [
    {
      waiterRequest: []
    },
    {
      accountRequested: []
    },
    {
      occupy: []
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
    OCCUPY: Status.OCCUPY,
    ORANGE: Color.ORANGE,
    RED: Color.RED
  };

  countTableCategory = [];
  listTables: any;

  constructor(private orderService: OrderService) {

  }

  ngOnInit(): void {
    this.getTables();

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

  async getTables() {
    this.listTables = await this.orderService.getListTables();
    console.log(this.listTables)
    this.generateListTable();
    this.countTableByCategory();
  }

  generateListTable() {
    for (const table of this.listTables) {
      console.log(table.state)
      switch (table.state) {
        case 'solicita camarero':
          this.pushTable(0, table, 'waiterRequest');
          break;
        case 'cuenta solicitada':
          this.pushTable(1, table, 'accountRequested');
          break;
        case 'pedido servido':
          this.pushTable(5, table, 'orderServed');
          break;
        case 'pedido en cocina':
          this.pushTable(3, table, 'kitchenOrder');
          break;
        case 'pedido recepcionado':
          this.pushTable(4, table, 'orderReceived');
          break;
        case 'mesa vacia':
          this.pushTable(6, table, 'emptyTable');
          break;
        case 'ocupada':
          this.pushTable(2, table, 'occupy');
          break;
        default:
          break;
      }
    }
    console.log(this.ArrayStatus)
  }


}
