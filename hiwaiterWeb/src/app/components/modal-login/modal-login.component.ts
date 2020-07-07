import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      cif: new FormControl(''),
      password: new FormControl('')

      });
   }

  ngOnInit(): void {
  }
  onSubmit() { console.log(this.form.value); }

}
