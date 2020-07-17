import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-modify',
  templateUrl: './form-modify.component.html',
  styleUrls: ['./form-modify.component.css']
})
export class FormModifyComponent implements OnInit {
  category: any;


  constructor(private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params => this.category = params.category);
    console.log(this.category)

  }

}
