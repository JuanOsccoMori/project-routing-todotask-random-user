import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit{

  constructor(private router: Router, private authService: AuthService){}

  ngOnInit(): void {
    let token = sessionStorage.getItem('token')

    if (token) {
      this.router.navigate(['dashboard']);
    }
  }

  loginUser(value: any){
    let { emailValidate, passwordValidate } = value;
    // login and pass: 'eve.holt@reqres.in', 'cityslicka'
    this.authService.loginUserValidate(emailValidate, passwordValidate).subscribe(
      (response) => {
        if (response.token) {
          sessionStorage.setItem('token', response.token);
          this.router.navigate(['dashboard'])
        }
      },
      (error) => console.log('Ha habido un error al hacer login: ',error),
      () => ('esto siempre se ejecutara cada vez que acabe mi app!')
    )
  }

}
