import { LoginService } from './../../services/login/login.service';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
declare var $;

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {
  faLock = faLock;
  faUser = faUser;
  form: FormGroup;
  display: boolean;


  constructor(private loginService: LoginService, private router: Router) {
    this.form = new FormGroup({
      cif: new FormControl(''),
      password: new FormControl('')

    });
  }

  ngOnInit(): void {
  }
  async onSubmit() {
    console.log(this.form.value)
    const result = await this.loginService.login(this.form.value);
    $('[data-dismiss = modal]').trigger({ type: 'click' });
    console.log(result)
    this.router.navigate(['/space']);
  }

}
