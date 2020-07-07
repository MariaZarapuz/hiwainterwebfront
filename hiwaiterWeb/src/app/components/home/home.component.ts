import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  msg = {
    what: '¿Que es Hi Wainter?',
    whatDescription: 'Con Hi Wainter queremos facilitar la comunicacion entre los comensales y el camarero, suprimiendo tiempo de espera ya que podras ver tanto la carta, como pedir la cuenta y saber en todo momento el gasto que llevas realizado.',
    how: '¿Como funciona Hi Wainter?',
    howDescription1: 'Es muy sencillo solo tendras que leer el codigo QR con la camara de movil que encontraras en la mesa de tu bar o restaurante.',
    howDescription2: 'Inmediatamente tu movil abrira una pagina web donde podras ver la carta del bar en el que te encuentras.',
    howDescription3: 'Desde esa web podras realizar tu pedido sin necesidad de esperas y sabiendo el importe en cada momento ademas si quieres consultar algo al camararero tambien podras llamarle desde la web.',
    howDescription4: 'Despues de haber disfrutado de tu pedido, podras pedir la cuenta y si te hiciera falta parte la el total de la cuenta en partes iguales.',
    whyUser: '¿Por que utilizar Hi Wainter como usuario?',
    whyDescriptionUser1: 'Ayudamanos a eliminar las cartas y asi posibilidad de evitar la transimision de Covid entre clientes.',
    whyDescriptionUser2: 'Disminuimos tiempo de espera ya que tu mismo generaras tu pedido y no tendras que esperar a ningun camarero.',
    whyDescriptionUser3: 'Pedido actualizado en todo momento ademas podras controlar el gasto.',
    whyDescriptionUser4: 'Pide la cuenta cuando tu quieras.',
    whyDescriptionUser5: 'Tendras la carta siempre actualizada con fotos.',
    whyAdmin: '¿Por que utilizar Hi Wainter como administrador?',
    whyAdminDescription1: 'Te actualizamos tu carta a la era digital.',
    whyAdminDescription2: 'Ganaras tiempo ya que no tendras que tomar nota de los pedidos',
    whyAdminDescription3: 'Te organizamos los pedidos por mesas sin posibilidad de fallos,',
    whyAdminDescription4: 'Podras imprimir el ticket desde la propia web',
    whyAdminDescription5: 'Tu carta siempre actualizada, nunca volveras a decir "No nos queda", podras modificar tu diaramente tu carta ademas de añadir productos y modificarlos.'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
