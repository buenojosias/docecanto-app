import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Location } from '@angular/common'

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(
    private alertController: AlertController,
    private router: Router,
    private location: Location
  ) { }

  handleError(error: any) {
    switch (error.status) {
      case 401:
        this.unauthorizedAlert();
        break;
      case 404:
        this.notFoundAlert();
        break;
      case 500:
        this.commonAlert('Ocorreu um erro no servidor. Já estamos trabalhando para resolver o problema.')
        break;
      default:
        this.commonAlert('Ocorreu um erro desconhecido.')
        break;
    }
  }

  async commonAlert(message: string) {
    const alert = await this.alertController.create({
      message: message,
      backdropDismiss: false,
      buttons: ['OK']
    });
    await alert.present();
  }

  async notFoundAlert() {
    const alert = await this.alertController.create({
      message: 'O registro que você está tentando acessar não foi encontrado.',
      backdropDismiss: false,
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.location.back();
          },
        },
      ]
    });
    await alert.present();
  }

  async unauthorizedAlert() {
    const alert = await this.alertController.create({
      message: 'Sua sessão expirou. Por fazer, faça o login novamente.',
      backdropDismiss: false,
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.logout();
          },
        },
      ]
    });
    await alert.present();
  }

  async logout() {
    localStorage.removeItem('USER_NAME');
    localStorage.removeItem('USER_ID');
    localStorage.removeItem('TOKEN_KEY');
    this.router.navigate(['auth/login']);
  }
}
