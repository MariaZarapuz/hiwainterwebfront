import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-tables',
  templateUrl: './list-tables.component.html',
  styleUrls: ['./list-tables.component.css']
})
export class ListTablesComponent implements OnInit {
  ArrayStatusLiteral = [
    { name: 'waiterRequest', translate: 'Solicitan camarero' },
    { name: 'accountRequested', translate: 'Cuenta solicitada' },
    { name: 'orderReceived', translate: 'Pedido recepcionado' },
    { name: 'kitchenOrder', translate: 'Pedido en cocina' },
    { name: 'orderServed', translate: 'Pedido servido' },

  ]
  listTables = [
    {
      number: 1,
      state: 'Pedido recepcionado'
    },
    {
      number: 2,
      state: 'Pedido en cocina'
    },
    {
      number: 3,
      state: 'Pedido servido'
    },
    {
      number: 4,
      state: 'Cuenta solicitada'
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
    }];
  ArrayStatus = [
    {
      emptyTable: []
    },
    {
      waiterRequest: []
    },
    {
      orderServed: []
    },
    {
      accountRequested: []
    },
    {
      kitchenOrder: []
    },
    {
      orderReceived: []
    }
  ];

  constructor() {

  }

  ngOnInit(): void {
    for (const table of this.listTables) {
      switch (table.state) {
        case 'Mesa vacia':
          this.pushTable(0, table, 'emptyTable');
          break;
        case 'Solicitan camarero':
          this.pushTable(1, table, 'waiterRequest');
          break;
        case 'Pedido servido':
          this.pushTable(2, table, 'orderServed');
          break;
        case 'Cuenta solicitada':
          this.pushTable(3, table, 'accountRequested');
          break;
        case 'Pedido en cocina':
          this.pushTable(4, table, 'kitchenOrder');
          break;
        case 'Pedido recepcionado':
          this.pushTable(5, table, 'orderReceived');
          break;
        default:
          break;
      }
    }
  }

  pushTable(position, table, mode) {
    this.ArrayStatus[position][mode].push(table);
    console.log(this.ArrayStatus);
  }

}
