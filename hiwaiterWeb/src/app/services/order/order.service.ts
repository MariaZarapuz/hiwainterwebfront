import { Injectable } from '@angular/core';
import { Status, GlobalConstants } from 'src/app/constantsGlobal';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  msg = {
    ORDER: GlobalConstants.ORDER,
    TABLE: GlobalConstants.TABLE,
    ORDERRECEIVED: Status.ORDERRECEIVED,
    PREPARED: Status.PREPARED,
    NOPREPARED: Status.NOPREPARED,
    NOSERVED: Status.NOSERVED,
    SERVED: Status.SERVED
  };

  orderData = [
    {
      'mesa1': [
        [
          [{
            order: {
              inbound: [
                { name: 'Alitas', quantity: 1, price: 5, state: this.msg.PREPARED, served: this.msg.SERVED },
                { name: 'Nugetts', quantity: 1, price: 5, state: this.msg.PREPARED, served: this.msg.SERVED }
              ],
              burger: [
                { name: 'La cerda', quantity: 2, price: 5, state: this.msg.PREPARED, served: this.msg.SERVED }
              ],
              sandwich: [
                { name: 'Breton', quantity: 2, price: 5, state: this.msg.NOPREPARED, served: this.msg.NOSERVED }
              ],
              drink: [
                { name: 'Coca-Cola', quantity: 2, price: 5, state: this.msg.NOPREPARED, served: this.msg.NOSERVED },
                { name: 'Radler', quantity: 1, price: 5, state: this.msg.PREPARED, served: this.msg.SERVED }
              ]
            }
          },
          {
            totalPrice: 50,
          }
          ],
          [{
            order: {
              inbound: [
                { name: 'Tabla de patatas', quantity: 1, price: 5, state: this.msg.PREPARED, served: this.msg.NOSERVED },
                { name: 'Croquetas', quantity: 1, price: 5, state: this.msg.PREPARED, served: this.msg.NOSERVED }
              ],
              burger: [
                { name: 'La grandiosa', quantity: 2, price: 5, state: this.msg.NOPREPARED, served: this.msg.NOSERVED }
              ],
              dessert: [
                { name: 'Frozen', quantity: 2, price: 5, state: this.msg.PREPARED, served: this.msg.SERVED }
              ],
              drink: [
                { name: 'Fanta de Naranja', quantity: 2, price: 5, state: this.msg.PREPARED, served: this.msg.SERVED },
                { name: 'Heineken', quantity: 1, price: 5, state: this.msg.PREPARED, served: this.msg.SERVED }
              ]
            },
          },
          {
            totalPrice: 50
          }]
        ]
      ]
    },
    {
      'mesa2': [
        [
          [{
            order: {
              inbound: [
                { name: 'Alitas', quantity: 1, price: 5, state: this.msg.PREPARED, served: this.msg.SERVED },
                { name: 'Nugetts', quantity: 1, price: 5, state: this.msg.PREPARED, served: this.msg.SERVED }
              ],
              burger: [
                { name: 'La cerda', quantity: 2, price: 5, state: this.msg.PREPARED, served: this.msg.SERVED }
              ],
              sandwich: [
                { name: 'Breton', quantity: 2, price: 5, state: this.msg.NOPREPARED, served: this.msg.NOSERVED }
              ],
              drink: [
                { name: 'Coca-Cola', quantity: 2, price: 5, state: this.msg.NOPREPARED, served: this.msg.NOSERVED },
                { name: 'Radler', quantity: 1, price: 5, state: this.msg.PREPARED, served: this.msg.SERVED }
              ]
            }
          },
          {
            totalPrice: 50,
          }
          ]
        ]
      ]
    }
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

  constructor() { }

  getOrder() {
    return this.orderData;
  }

  getListTables() {
    return this.listTables;
  }
}


