import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-tables',
  templateUrl: './list-tables.component.html',
  styleUrls: ['./list-tables.component.css']
})
export class ListTablesComponent implements OnInit {

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
  constructor() { }

  ngOnInit(): void {
  }

}
