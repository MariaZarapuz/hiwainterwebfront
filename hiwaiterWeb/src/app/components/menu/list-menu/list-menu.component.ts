import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu/menu.service';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.css']
})
export class ListMenuComponent implements OnInit {
  // listProducts: any;

  listProducts = {
    plates: [{ name: 'Burger', active: 1, id: 1 }, { name: 'Nuggets', active: 0, id: 2 }],
    drinks: [{ name: 'Coca-cola', active: 1, id: 1 }]
  };
  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    // this.getAllMenu();
  }
  async getAllMenu() {

    // async getAllMenu() {
    //   this.listProducts = await this.menuService.getMenu();
    // }

  }
}
