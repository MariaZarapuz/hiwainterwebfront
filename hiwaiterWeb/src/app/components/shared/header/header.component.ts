import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/app/constantsGlobal';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getLocalstorage();

  }

  getLocalstorage() {
    const tokenExist = localStorage.getItem('token');
    return tokenExist;
  }

  navigate() {
    if (this.getLocalstorage()) {
      this.router.navigate(['/space']);
    } else {
      this.router.navigate(['/home']);
    }
  }

}
