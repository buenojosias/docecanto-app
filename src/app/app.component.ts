import { Component } from '@angular/core';
import { StatusBar } from '@capacitor/status-bar';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.setStatusBar();
    })
  }

  async setStatusBar() {
    // await console.log(StatusBar.getInfo());
    await StatusBar.setBackgroundColor({
      color: '#780c6f'
    })
  };
}
