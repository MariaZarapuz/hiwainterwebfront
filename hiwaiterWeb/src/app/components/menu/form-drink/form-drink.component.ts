import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MenuService } from 'src/app/services/menu/menu.service';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';


@Component({
  selector: 'app-form-drink',
  templateUrl: './form-drink.component.html',
  styleUrls: ['./form-drink.component.css']
})
export class FormDrinkComponent implements OnInit {

  @Input() modify;
  @Input() id;
  formDrink: FormGroup;

  arrayTypeDrink = [
    'Refresco', 'Cerveza', 'Vino', 'Coctel'
  ];
  dataProduct: any;
  category: any;

  constructor(
    private router: Router,
    private menuService: MenuService,
    private activatedRouter: ActivatedRoute) {

    this.formDrink = new FormGroup({
      name: new FormControl(''),
      price: new FormControl(''),
      category: new FormControl('drink'),
      description: new FormControl(''),
      type: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params => {
      this.id = params.id;
      this.category = params.category;
    });
    if (this.modify === 'modify') {
      this.getFormDrinkModify(this.id, this.category);
    }

  }

  sendFormDrink() {
    const drink = this.formDrink.value;
    this.menuService.insertDrink(drink);
  }

  async getFormDrinkModify(id, category) {
    this.dataProduct = await this.menuService.getFormModify(id, category);
    console.log(this.dataProduct)
    this.formDrink = new FormGroup({
      name: new FormControl(this.dataProduct[0].name),
      price: new FormControl(this.dataProduct[0].price),
      category: new FormControl('drink'),
      description: new FormControl(this.dataProduct[0].description),
      type: new FormControl(this.dataProduct[0].type)
    });
  }

  formModify() {
    const form = this.formDrink.value;
    this.menuService.formModify(this.id, form);
    this.router.navigate(['/menu']);
  }
}
