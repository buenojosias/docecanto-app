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

  // VERSÃO 1
  @ViewChild("range", { static: false }) range: IonRange;
  ready = false;
  buffering = false;
  progress = 0; //progress bar value
  isPlaying = false; //toggle for play/pause button
  isTouched = false; //track of ion-range touch
  currSecsText: any; //ion range texts
  durationText: any;
  currRangeTime: any; //ion range value
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
    // this.currSong = new Audio(this.songUrl);
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
  touchStart() {
    this.isTouched = true;
    this.currSecsText = this.sToTime(this.range.value);
    this.currRangeTime = Number(this.range.value); console.log(this.currRangeTime);
    this.currSong.currentTime = Number(this.currRangeTime); console.log(this.currSong.currentTime);
  }
  touchMove() {
    this.currSecsText = this.sToTime(this.range.value);
  }
  touchEnd() {
    this.isTouched = false;
    this.currSong.currentTime = Number(this.range.value);
    this.currSecsText = this.sToTime(this.currSong.currentTime);
    this.currRangeTime = this.currSong.currentTime;
    if (this.isPlaying) {
      this.currSong.play();
    }
  }
  // FIM DA VERSÃO 1


  // VERSÃO 2
  /*audio = new Audio();
  musicLength: string = '0:00';
  duration: number = 1;
  currentTime: string = '0:00';
  constructor() {
    this.audio.ondurationchange = () => {
      const totalSeconds = Math.floor(this.audio.duration),
        duration = moment.duration(totalSeconds, 'seconds');
      this.musicLength = duration.seconds() < 10 ?
        `${Math.floor(duration.asMinutes())}:0${duration.seconds()}` :
        `${Math.floor(duration.asMinutes())}:${duration.seconds()}`;
      this.duration = totalSeconds;
    }
    this.audio.ontimeupdate = () => {
      const duration = moment.duration(
        Math.floor(this.audio.currentTime), 'seconds');
      this.currentTime = duration.seconds() < 10 ?
        `${Math.floor(duration.asMinutes())}:0${duration.seconds()}` :
        `${Math.floor(duration.asMinutes())}:${duration.seconds()}`;
    }
  }
  play() {
    if(this.audio.paused) {
      if(this.audio.readyState === 0) {
        this.audio.src = this.songUrl;
      }
      this.audio.play();
    } else {
      this.audio.pause();
    }
  }
  durationSlider(event: any) {
    var range = event.timeStamp;
    console.log(range);
    this.audio.currentTime = range;
  }*/
  // FIM DA VERSÃO 2


}
