import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-body-menu',
  templateUrl: './body-menu.component.html',
  styleUrls: ['./body-menu.component.css']
})
export class BodyMenuComponent implements OnInit {
  arrayAllergens = [
    {
      name: 'Gluten',
      icon: '../../../../assets/imagenes/gluten .png'
    },
    {
      name: 'Crustáceo',
      icon: '../../../../assets/imagenes/crustaceo.png'
    },
    {
      name: 'Huevos',
      icon: '../../../../assets/imagenes/huevo.png'
    },
    {
      name: 'Pescado',
      icon: '../../../../assets/imagenes/fish.png'
    },
    {
      name: 'Cacahuete',
      icon: '../../../../assets/imagenes/peanut.png'
    },
    {
      name: 'Soja',
      icon: '../../../../assets/imagenes/soja.png'
    },
    {
      name: 'Lacteos',
      icon: '../../../../assets/imagenes/lacteos.png'
    },
    {
      name: 'Frutos cascara',
      icon: '../../../../assets/imagenes/nut.png'
    },
    {
      name: 'Apio',
      icon: '../../../../assets/imagenes/apio.png'
    },
    {
      name: 'Mostaza',
      icon: '../../../../assets/imagenes/mostaza.png'
    },
    {
      name: 'Granos de sésamo',
      icon: '../../../../assets/imagenes/sesamo.png'
    },
    {
      name: 'Dióxido de azufre y sulfito',
      icon: '../../../../assets/imagenes/gmo.png'
    },
    {
      name: 'Moluscos',
      icon: '../../../../assets/imagenes/moluscos.png'
    },
    {
      name: 'Altramuces',
      icon: '../../../../assets/imagenes/lupin.png'
    }

  ];

  url: string;

  @Input() mode;
  constructor() { }

  ngOnInit(): void {
  }

}
