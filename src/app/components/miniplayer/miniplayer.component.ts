import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { IonRange } from '@ionic/angular';
import * as moment from 'moment';
import { Audio } from 'src/app/interfaces/audio';

@Component({
  selector: 'app-miniplayer',
  templateUrl: './miniplayer.component.html',
  styleUrls: ['./miniplayer.component.scss'],
})
export class MiniplayerComponent implements OnInit {

  @Input() songUrl: any;

  ngOnInit() { }

  ngOnDestroy() {
    if(this.isPlaying) {
      this.pause();
    }
  }

  @ViewChild("range", { static: false }) range: IonRange;
  ready = false;
  buffering = false;
  progress = 0; //progress bar value
  isPlaying = false; //toggle for play/pause button
  isTouched = false; //track of ion-range touch
  currSecsText: any; //ion range texts
  durationText: any;
  currRangeTime: any = 0; //ion range value
  maxRangeValue: any;
  currSong: HTMLAudioElement; //Current song
  play() {
    if (!this.currSong) {
      this.buffering = true;
      console.log('buffering:', this.buffering);
      this.currSong = new Audio(this.songUrl);
    }
    this.playSong();
    // this.currSong.play();
    // this.isPlaying = true;
  }
  pause() {
    this.currSong.pause();
    this.isPlaying = false;
  }
  playSong() {
    if (this.currSong != null) {
      this.currSong.pause();
    }
    this.currSong.play().then(() => {
      this.buffering = false;
      this.ready = true;
      this.durationText = this.sToTime(this.currSong.duration);
      this.maxRangeValue = Number(this.currSong.duration.toFixed(2).toString().substring(0, 5));
      this.isPlaying = true;
    })
    this.currSong.addEventListener("timeupdate", () => {
      if (!this.isTouched && this.currSong) {
        this.currRangeTime = Number(this.currSong.currentTime.toFixed(2).toString().substring(0, 5));
        this.currSecsText = this.sToTime(this.currSong.currentTime);
        this.progress = (Math.floor(this.currSong.currentTime) / Math.floor(this.currSong.duration));
        if (this.currSong.currentTime == this.currSong.duration) {
          this.currSong.currentTime = 0;
          this.pause();
        }
      }
    });
  }
  sToTime(t: any) {
    return parseInt(String((t / (60)) % 60)) + ":" +
      this.padZero(parseInt(String((t) % 60)));
  }
  padZero(v: any) {
    return (v < 10) ? "0" + v : v;
  }

  durationSlider(value: any) {
    this.currSong.currentTime = value;
  }

  forward() {
    this.currSong.currentTime += 5;
    console.log(this.currSong.currentTime);
  }

  back() {
    this.currSong.currentTime -= 5;
  }
}
