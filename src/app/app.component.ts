import { Component, ElementRef, ViewChild } from '@angular/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Platform } from '@ionic/angular';
import { Device } from '@capacitor/device';
import { App } from '@capacitor/app';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  isDarkMode: boolean;
  routerHidden = true;

  @ViewChild('splash', { static: false }) splash: ElementRef;
  constructor(
    private platform: Platform,
  ) {
    // this.checkVersion();
    this.initializeApp();
  }

  async initializeApp() {
    const deviceInfo = await Device.getInfo();
    this.checkDarkMode();
    const isAndroid = deviceInfo.platform === 'android';
    if (isAndroid) {
      StatusBar.setBackgroundColor({ color: '#780c6f' })
      StatusBar.setStyle({ style: Style.Dark })
    }
    this.platform.ready().then(() => {
      SplashScreen.hide();
      setTimeout(() => {
        this.setStatusBar();
        this.routerHidden = false;
        this.splash.nativeElement.style.display = 'none';
      }, 4000)
    });
  }

  // async checkVersion() {
  //   const appInfo = (await App.getInfo()).version;
  //   console.log('Versão:', appInfo);
  // }

  checkDarkMode() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.isDarkMode = prefersDark.matches;
  }

  setStatusBar() {
    StatusBar.setBackgroundColor({ color: this.isDarkMode ? '#121212' : '#FFFFFF' })
    StatusBar.setStyle({ style: this.isDarkMode ? Style.Dark : Style.Light });
  };
}
