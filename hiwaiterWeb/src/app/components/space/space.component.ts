import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/app/constantsGlobal';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.css']
})
export class SpaceComponent implements OnInit {
  msg = {
    WELCOME: 'Bienvenido a tu espacio',
    DESCRIPTION: 'Aqui podras encontrar una seccion dedicada a las MESAS para poder ver los pedidos, la cuenta de esa mesa, si necesitan que un camarero les atienda o si te han pedido la cuenta, ademas tambien tendras otra seccion con tu CARTA donde podras añadir productos nuevos, modificar los ya existentes, activar unos productos u otros todo depende de ti.',
    TABLES: GlobalConstants.TABLES,
    KITCHEN: GlobalConstants.KITCHEN,
    MENU: GlobalConstants.MENU
  }

  constructor() { }

  ngOnInit(): void {
  }

}
