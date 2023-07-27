import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { Song } from '../interfaces/song';
import { Event } from '../interfaces/event';

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

  constructor(
    private homeService: HomeService
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
        this.event = data. event;
        this.songs= data.songs;
      }
    );
  }

}
