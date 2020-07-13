import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/app/constantsGlobal';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  msg = {
    TABLES: GlobalConstants.TABLES,
    LOGIN: GlobalConstants.LOGIN,
    KITCHEN: GlobalConstants.KITCHEN,
    MENU: GlobalConstants.MENU
  }

  constructor() { }

  ngOnInit(): void {
    this.getLocalstorage();

  }

  getLocalstorage() {
    const tokenExist = localStorage.getItem('token');
    return tokenExist;

  }
}
