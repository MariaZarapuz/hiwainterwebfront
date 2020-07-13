import { Component, OnInit, Input } from '@angular/core';
import { Status } from 'src/app/constantsGlobal';

@Component({
  selector: 'app-body-order',
  templateUrl: './body-order.component.html',
  styleUrls: ['./body-order.component.css']
})
export class BodyOrderComponent implements OnInit {

  msg = {
    PREPARED: Status.PREPARED,
    NOPREPARED: Status.NOPREPARED,
  };

  @Input() served;
  @Input() item;
  @Input() mode;

  arrayCategory = [
    { name: 'inbound', icons: 'entrantes' },
    { name: 'salad', icons: 'ensalada' },
    { name: 'burger', icons: 'hamburgesa' },
    { name: 'sandwich', icons: 'sandwich' },
    { name: 'dessert', icons: 'postre' },
    { name: 'drink', icons: 'bebida' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

