import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { AppLauncher } from '@capacitor/app-launcher';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private platform: Platform
  ) { }

  ngOnInit() {
  }

  async openFacebook() {
    const { value } = await AppLauncher.canOpenUrl({ url: 'com.facebook.katana' });
    console.log('Can open url: ', value);
    await AppLauncher.openUrl({ url: 'com.facebook.katana://page?id=1446618195568418' });
  }

  async openInstagram() {
    const { value } = await AppLauncher.canOpenUrl({ url: 'com.instagram.android' });
    console.log('Can open url: ', value);
  }

  async openYoutube() {
    const { value } = await AppLauncher.canOpenUrl({ url: 'com.google.android.youtube' });
    console.log('Can open url: ', value);
  }

  async logout() {
    await this.authService.doLogout().subscribe(
      (res: any) => {
        if (res['status'] == 'success') {
          localStorage.clear();
          this.router.navigate(['auth/login'], {replaceUrl: true});
        }
      },
      (error: any) => {
        if(error.status == 401)
        {
          localStorage.clear();
          this.router.navigate(['auth/login'], {replaceUrl: true});
        }
      }
    );
  }

}
