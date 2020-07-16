import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu/menu.service';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.css']
})
export class ListMenuComponent implements OnInit {

  // listProducts = {
  //   plate: [{ name: 'burger', active: 0 }],
  //   drinks: [{ name: 'Coca-cola', active: 1 }]
  // };
  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
  }

  getAllMenu() {
    this.listProducts = this.menuService.getMenu();
  }

}
