import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      'username': ['', [Validators.required]],
      'password': ['', [Validators.required]]
    });
  }

  public loginForm: FormGroup;

  ngOnInit(

  ) { }

  submit() {
    if(this.loginForm.invalid)
      return;

    this.authService.doLogin(this.loginForm.value).subscribe(
      (res: any) => {
        if(res['login']) {
          localStorage.setItem('USER_NAME', res['data']['name'])
          localStorage.setItem('USER_ID', res['data']['id'])
          localStorage.setItem('TOKEN_KEY', res['token'])
          this.router.navigate(['/']);
        }
      });
  }

  // getLoginStatus = () => this.authService.checkLogin() ? "Logado" : "Deslogado";

  // loginClick() {
  //   if(this.authService.checkLogin())
  //     this.authService.doLogout();
  //   else
  //     this.authService.doLogin();
  // }

}
