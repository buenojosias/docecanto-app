import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { Song } from '../interfaces/song';
import { Event } from '../interfaces/event';
import { ErrorService } from '../services/error.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  name?: string = '';
  birthday?: any;
  event?: Event;
  songs: Song[] = [];
  loading = true;

  constructor(
    private homeService: HomeService,
    private errorService: ErrorService
  ) { }

  ngOnInit() {
    this.getName();
    this.getHome();
  }

  getName() {
    const fullname = localStorage.getItem('USER_NAME');
    const name = fullname!.split(' ')[0];
    this.name = name;
  }

  getHome() {
    this.homeService.getHome().subscribe(
      (data) => {
        this.birthday = data.birthday;
        this.event = data.event;
        this.songs = data.songs;
        this.loading = false;
      },
      (error: any) => {
        this.loading = false;
        this.errorService.handleError(error);
      }
    );
  }

}
