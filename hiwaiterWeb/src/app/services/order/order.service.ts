import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Status, GlobalConstants } from 'src/app/constantsGlobal';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  urlTable = 'http://localhost:3000/api/tables';
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




  constructor(private httpClient: HttpClient) { }

  getOrder() {
    return this.orderData;
  }

  getListTables() {
    return this.httpClient.get(`${this.urlTable}`).toPromise();

  }
}


