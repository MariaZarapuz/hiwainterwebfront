import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-menu',
  templateUrl: './form-menu.component.html',
  styleUrls: ['./form-menu.component.css']
})
export class FormMenuComponent implements OnInit {

  mode: any;

  constructor() { }

  ngOnInit(): void {
  }
  showDrinkOrPlate(mode, e) {
    console.log(e);
    e.path[0].parentElement.children[0].style.margin = '0px auto';
    e.path[0].parentElement.children[1].style.margin = '0px auto';
    e.path[1].style.transform = ' scale(0.5)';
    e.path[3].style.margin = '0px auto';

    this.mode = mode;
  }
}
