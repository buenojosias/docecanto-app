import { Injectable } from '@angular/core';
import { Network } from '@capacitor/network';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    private alertController: AlertController,
  ) { }

  getToken() {
    this.checkConnection();
    return localStorage.getItem('TOKEN_KEY');
  }

  async checkConnection() {
    const status = await Network.getStatus();
    if (!status.connected) {
      this.presentAlert('Seu dispositivo está desconectado.');
      this.waitConnection();
      return
    }
  };

  waitConnection() {
    Network.addListener('networkStatusChange', status => {
      if (status.connected) {
        window.location.reload()
      }
    });
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      message: message,
      backdropDismiss: false,
      buttons: ['OK']
    });
    await alert.present();
  }

}
