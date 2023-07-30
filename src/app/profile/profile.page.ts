import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
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
