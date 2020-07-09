import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-table-detail',
  templateUrl: './table-detail.component.html',
  styleUrls: ['./table-detail.component.css']
})
export class TableDetailComponent implements OnInit {

  id: number;
  served = false;
  noServed = true;

  orderData = [
    {
      stateOrder: 'Pedido Recibido',
      table: 1,
      totalPrice: 50
    },
    {
      listOrder: [
        {
          order: {
            inbound: [
              { name: 'Alitas', quantity: 1, price: 5, state: 'Preparado', served: 'Servido' },
              { name: 'Nugetts', quantity: 1, price: 5, state: 'Preparado', served: 'Servido' }
            ],
            burger: [
              { name: 'La cerda', quantity: 2, price: 5, state: 'Preparado', served: 'Servido' }
            ],
            sandwich: [
              { name: 'Breton', quantity: 2, price: 5, state: 'No preparado', served: 'No servido' }
            ],
            drink: [
              { name: 'Coca-Cola', quantity: 2, price: 5, state: 'No preparado', served: 'No servido' },
              { name: 'Radler', quantity: 1, price: 5, state: 'Preparado', served: 'Servido' }
            ]
          }
        },
        {
          order: {
            inbound: [
              { name: 'Tabla de patatas', quantity: 1, price: 5, state: 'Preparado', served: 'No servido' },
              { name: 'Croquetas', quantity: 1, price: 5, state: 'Preparado', served: 'No servido' }
            ],
            burger: [
              { name: 'La grandiosa', quantity: 2, price: 5, state: 'No preparado', served: 'No servido' }
            ],
            dessert: [
              { name: 'Frozen', quantity: 2, price: 5, state: 'Preparado', served: 'Servido' }
            ],
            drink: [
              { name: 'Fanta de Naranja', quantity: 2, price: 5, state: 'Preparado', served: 'Servido' },
              { name: 'Heineken', quantity: 1, price: 5, state: 'Preparado', served: 'Servido' }
            ]
          },
        }
      ]
    }
  ];

  constructor(private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params => this.id = params.id);
    console.log(this.orderData);
  }

  servedOrNotServed(e, state) {
    const haveClass = e.target.parentNode.childNodes[1].classList[0];
    console.log(e)
    this.removeClass(state, e, haveClass)

  }

  removeClass(state, e, haveClass) {
    const element = state === 'noServed' ? 1 : 3;

    if (haveClass === 'none') {
      e.target.parentNode.childNodes[element].classList.remove('none');
    } else {
      e.target.parentNode.childNodes[element].classList.add('none');
    }
  }

}
