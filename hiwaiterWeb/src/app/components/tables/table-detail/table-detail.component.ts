import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalConstants, Status, Color } from '../../../constantsGlobal';

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

  orderData = [
    {
      stateOrder: this.msg.ORDERRECEIVED,
      table: 1,
      totalPrice: 50
    },
    {
      listOrder: [
        {
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
        }
      ]
    }
  ];

  constructor(private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params => this.id = params.id);
    console.log(this.orderData);
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

}
