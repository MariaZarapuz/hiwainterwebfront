import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  msg = {
    WHAT: '¿Que es Hi Wainter?',
    WHATDESCRIPTION: 'Con Hi Wainter queremos facilitar la comunicacion entre los comensales y el camarero, suprimiendo tiempo de espera ya que podras ver tanto la carta, como pedir la cuenta y saber en todo momento el gasto que llevas realizado.',
    HOW: '¿Como funciona Hi Wainter?',
    HOWDESCRIPTION1: 'Es muy sencillo solo tendras que leer el codigo QR con la camara de movil que encontraras en la mesa de tu bar o restaurante.',
    HOWDESCRIPTION2: 'Inmediatamente tu movil abrira una pagina web donde podras ver la carta del bar en el que te encuentras.',
    HOWDESCRIPTION3: 'Desde esa web podras realizar tu pedido sin necesidad de esperas y sabiendo el importe en cada momento ademas si quieres consultar algo al camararero tambien podras llamarle desde la web.',
    HOWDESCRIPTION4: 'Despues de haber disfrutado de tu pedido, podras pedir la cuenta y si te hiciera falta parte la el total de la cuenta en partes iguales.',
    WHYUSER: '¿Por que utilizar Hi Wainter como usuario?',
    WHYDESCRIPTIONUSER1: 'Ayudamanos a eliminar las cartas y asi posibilidad de evitar la transimision de Covid entre clientes.',
    WHYDESCRIPTIONUSER2: 'Disminuimos tiempo de espera ya que tu mismo generaras tu pedido y no tendras que esperar a ningun camarero.',
    WHYDESCRIPTIONUSER3: 'Pedido actualizado en todo momento ademas podras controlar el gasto.',
    WHYDESCRIPTIONUSER4: 'Pide la cuenta cuando tu quieras.',
    WHYDESCRIPTIONUSER5: 'Tendras la carta siempre actualizada con fotos.',
    WHYADMIN: '¿Por que utilizar Hi Wainter como administrador?',
    WHYADMINDESCRIPTION1: 'Te actualizamos tu carta a la era digital.',
    WHYADMINDESCRIPTION2: 'Ganaras tiempo ya que no tendras que tomar nota de los pedidos',
    WHYADMINDESCRIPTION3: 'Te organizamos los pedidos por mesas sin posibilidad de fallos,',
    WHYADMINDESCRIPTION4: 'Podras imprimir el ticket desde la propia web',
    WHYADMINDESCRIPTION5: 'Tu carta siempre actualizada, nunca volveras a decir "No nos queda", podras modificar tu diaramente tu carta ademas de añadir productos y modificarlos.',
    YET: '¿Todavia no lo tienes claro?',
    DEMO: 'Aqui te dejamos unos videos de demostracion.',
    LIKE: '¿Te gusta la idea?',
    CONTACT: 'Contactanos:',
    MOBILE: 'Telefono: 666462692',
    EMAIL: 'Email: mariazarapuz@gmail.com'
  };

  arrayHowdescription = [
    this.msg.HOWDESCRIPTION1, this.msg.HOWDESCRIPTION2,
    this.msg.HOWDESCRIPTION3, this.msg.HOWDESCRIPTION4,
  ];

  arrayWhydescriptonuser = [
    this.msg.WHYDESCRIPTIONUSER1, this.msg.WHYDESCRIPTIONUSER2, this.msg.WHYDESCRIPTIONUSER3, this.msg.WHYDESCRIPTIONUSER4, this.msg.WHYDESCRIPTIONUSER5
  ];

  arrayWhyAdminDescription = [
    this.msg.WHYADMINDESCRIPTION1, this.msg.WHYADMINDESCRIPTION2, this.msg.WHYADMINDESCRIPTION3, this.msg.WHYADMINDESCRIPTION4, this.msg.WHYADMINDESCRIPTION5
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
