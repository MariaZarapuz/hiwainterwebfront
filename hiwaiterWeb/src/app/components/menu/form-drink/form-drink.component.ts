import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MenuService } from 'src/app/services/menu/menu.service';


@Component({
  selector: 'app-form-drink',
  templateUrl: './form-drink.component.html',
  styleUrls: ['./form-drink.component.css']
})
export class FormDrinkComponent implements OnInit {

  @Input() modify;

  formDrink: FormGroup;

  arrayTypeDrink = [
    'Refresco', 'Cerveza', 'Vino', 'Coctel'
  ];

  constructor(private menuService: MenuService) {
    this.formDrink = new FormGroup({
      name: new FormControl(''),
      price: new FormControl(''),
      category: new FormControl('drink'),
      description: new FormControl(''),
      type: new FormControl('')
    });
  }

  ngOnInit(): void {
    console.log(this.modify)
  }

  sendFormDrink() {
    const drink = this.formDrink.value;
    this.menuService.insertDrink(drink);
  }

}
