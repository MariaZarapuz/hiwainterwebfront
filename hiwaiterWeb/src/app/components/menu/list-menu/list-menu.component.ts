import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu/menu.service';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.css']
})
export class ListMenuComponent implements OnInit {
  listProducts: any;

  // listProducts = {
  //   plate: [{ name: 'burger', active: 0 }],
  //   drinks: [{ name: 'Coca-cola', active: 1 }]
  // };
  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.getAllMenu();
  }
  async getAllMenu() {
    this.listProducts = await this.menuService.getMenu();
    console.log(this.listProducts)

  }

}
