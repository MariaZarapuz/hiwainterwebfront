import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu/menu.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.css']
})
export class ListMenuComponent implements OnInit {

  faTrash = faTrash;


  listProducts: any;
  activeOrNoActiveDate: any;

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.getAllMenu();
  }
  async getAllMenu() {
    this.listProducts = await this.menuService.getMenu();
  }

  activeOrNoActive(id, status, mode) {
    status = status === 1 ? 0 : 1;
    if (mode === 'drink') {
      this.menuService.activeOrNoActiveDrink(id, status);
    } else {
      this.menuService.activeOrNoActivePlaces(id, status);

    }
  }

  async deleteProduct(id, category) {
    this.listProducts = await this.menuService.deletectProduct(id, category);
  }
}


