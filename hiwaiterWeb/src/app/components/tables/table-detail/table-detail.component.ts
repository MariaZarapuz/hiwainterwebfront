import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-table-detail',
  templateUrl: './table-detail.component.html',
  styleUrls: ['./table-detail.component.css']
})
export class TableDetailComponent implements OnInit {

  id: number;
  listOrder = [
    {
      pedido: {
        entrantes: [
          { Nombre: 'Tabla de patatas', Cantidad: 1 },
          { Nombre: 'Croquetas', Cantidad: 1 }
        ],

      }
    }
  ];

  constructor(private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params => this.id = params.id);
    console.log(this.listOrder);
  }

}
