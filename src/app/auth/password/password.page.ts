import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {

  passwordForm: FormGroup;
  saving = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastController: ToastController
  ) {
    this.passwordForm = this.fb.group({
      'current': ['', [Validators.required, Validators.minLength(6)]],
      'new': ['', [Validators.required, Validators.minLength(6)]],
      'confirm': ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {
  }

  submit() {
    if (this.passwordForm.invalid)
      return;

    this.saving = true;
    this.authService.changePassword(this.passwordForm.value).subscribe((res) => {
      this.presentToast(res.message);
      if (res.success) {
        setTimeout(() => {
          this.router.navigateByUrl('/menu')
        }, 3500);
      } else {
        this.saving = false
      }
    });
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3500,
    });
    await toast.present();
  }

}
