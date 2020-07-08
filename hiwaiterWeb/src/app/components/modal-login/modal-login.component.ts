import { LoginService } from './../../services/login/login.service';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {
  faLock = faLock;
  faUser = faUser;
  form: FormGroup;

  constructor(private loginService: LoginService, private router: Router) {
    this.form = new FormGroup({
      cif: new FormControl(''),
      password: new FormControl('')

    });
  }

  ngOnInit(): void {
  }
  onSubmit() {
    this.loginService.login(this.form.value);
    this.router.navigate(['/space']);
  }

}
