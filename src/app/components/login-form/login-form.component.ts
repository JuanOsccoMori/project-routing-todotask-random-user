import { AuthService } from './../../services/auth.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

// Importamos lo necesario para construir el formulario
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {


  loginFormValidate: FormGroup = new FormGroup({});
  @Output() loginAction: EventEmitter<{}> = new EventEmitter<{}>();

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {

    this.loginFormValidate = this.formBuilder.group({
        emailValidate: ['', Validators.compose([Validators.required, Validators.email])],
        passwordValidate: ['', Validators.required]
    })
  }

  get emailValidate(){
    return this.loginFormValidate.get('emailValidate');
  }

  get passwordValidate(){
    return this.loginFormValidate.get('passwordValidate');
  }

  submitLogin(){
    if (this.loginFormValidate.valid) {
      // console.table(this.loginFormValidate.value);
      this.loginAction.emit(this.loginFormValidate.value)
      // this.loginFormValidate.reset();
    }
  }

}
