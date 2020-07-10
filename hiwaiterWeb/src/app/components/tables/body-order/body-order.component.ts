import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-body-order',
  templateUrl: './body-order.component.html',
  styleUrls: ['./body-order.component.css']
})
export class BodyOrderComponent implements OnInit {

  @Input() served;
  @Input() item;

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
