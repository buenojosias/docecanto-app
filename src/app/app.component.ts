import { Component } from '@angular/core';
import { StatusBar } from '@capacitor/status-bar';
import { Platform } from '@ionic/angular';
import { Device } from '@capacitor/device';
import { App } from '@capacitor/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
  ) {
    // this.checkVersion();
    this.initializeApp();
  }

  async initializeApp() {
    const deviceInfo = await Device.getInfo();
    const isAndroid = deviceInfo.platform === 'android';
    this.platform.ready().then(() => {
      if(isAndroid) {
        this.setStatusBar();
      }
    })
  }

  // async checkVersion() {
  //   const appInfo = (await App.getInfo()).version;
  //   console.log('Versão:', appInfo);
  // }

  async setStatusBar() {
    // await console.log(StatusBar.getInfo());
    await StatusBar.setBackgroundColor({
      color: '#780c6f'
    })
  };
}
