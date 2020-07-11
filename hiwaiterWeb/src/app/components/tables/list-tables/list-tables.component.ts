import { Component, OnInit } from '@angular/core';
import { GlobalConstants, Status, Color } from '../../../constantsGlobal';

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
  listTables = [
    {
      number: 1,
      state: 'Pedido servido'
    },
    {
      number: 2,
      state: 'Cuenta solicitada'
    },
    {
      number: 3,
      state: 'Pedido en cocina'
    },
    {
      number: 4,
      state: 'Pedido en cocina'
    },
    {
      number: 5,
      state: 'Solicitan camarero'
    },
    {
      number: 6,
      state: 'Mesa vacia'
    },
    {
      number: 7,
      state: 'Mesa vacia'
    },
    {
      number: 8,
      state: 'Solicitan camarero'
    },
    {
      number: 9,
      state: 'Pedido servido'
    },
    {
      number: 10,
      state: 'Cuenta solicitada'
    },
    {
      number: 11,
      state: 'Pedido en cocina'
    },
    {
      number: 12,
      state: 'Pedido en cocina'
    },
    {
      number: 13,
      state: 'Pedido recepcionado'
    },
    {
      number: 14,
      state: 'Mesa vacia'
    },
    {
      number: 15,
      state: 'Mesa vacia'
    },
    {
      number: 16,
      state: 'Pedido recepcionado'
    },
    {
      number: 17,
      state: 'Cuenta solicitada'
    },
    {
      number: 18,
      state: 'Pedido en cocina'
    },
    {
      number: 19,
      state: 'Pedido en cocina'
    },
    {
      number: 20,
      state: 'Solicitan camarero'
    },
    {
      number: 21,
      state: 'Mesa vacia'
    },
    {
      number: 22,
      state: 'Mesa vacia'
    },
    {
      number: 23,
      state: 'Solicitan camarero'
    },
    {
      number: 24,
      state: 'Pedido servido'
    },
    {
      number: 25,
      state: 'Cuenta solicitada'
    },
    {
      number: 26,
      state: 'Pedido en cocina'
    },
    {
      number: 27,
      state: 'Pedido en cocina'
    },
    {
      number: 28,
      state: 'Pedido recepcionado'
    },
    {
      number: 29,
      state: 'Mesa vacia'
    },
    {
      number: 30,
      state: 'Mesa vacia'
    },
    {
      number: 31,
      state: 'Pedido recepcionado'
    }];
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

  constructor() {

  }

  ngOnInit(): void {
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
