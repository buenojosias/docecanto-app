import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, IonModal, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private errorService: ErrorService,
  ) {
    this.loginForm = this.fb.group({
      'username': ['', [Validators.required]],
      'password': ['', [Validators.required]]
    });
  }

  @ViewChild(IonModal) modal: IonModal;
  public loginForm: FormGroup;

  ngOnInit(

  ) { }

  submit() {
    if(this.loginForm.invalid)
      return;
    this.showLoading();
    this.authService.doLogin(this.loginForm.value).subscribe(
      (res: any) => {
        this.loadingController.dismiss();
        if(res['login']) {
          localStorage.setItem('USER_NAME', res['data']['name'])
          localStorage.setItem('USER_ID', res['data']['id'])
          localStorage.setItem('TOKEN_KEY', res['token'])
          this.router.navigate(['/']);
        } else {
          this.presentAlert(res['message']);
        }
      },
      (error: any) => {
        this.alertController.dismiss();
        this.errorService.handleError(error);
      }
    );
  }

  async showLoading() {
    const loading = await this.loadingController.create({
      message: 'Autenticando',
    });
    loading.present();
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  closeModal() {
    this.modal.dismiss(null, 'cancel');
  }

  // getLoginStatus = () => this.authService.checkLogin() ? "Logado" : "Deslogado";

  // loginClick() {
  //   if(this.authService.checkLogin())
  //     this.authService.doLogout();
  //   else
  //     this.authService.doLogin();
  // }

}
