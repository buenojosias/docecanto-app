import { Component, Input, OnInit } from '@angular/core';
import { Song } from 'src/app/interfaces/song';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-events-songs',
  templateUrl: './events-songs.page.html',
  styleUrls: ['./events-songs.page.scss'],
})
export class EventsSongsPage implements OnInit {

  @Input() eventId: number;
  songs: any;
  loading = false;

  constructor(
    private eventService: EventService
  ) { }

  ngOnInit() {
    console.log(this.eventId);
    // this.getSongs();
  }

  getSongs() {
    this.eventService.songs(this.eventId).subscribe(
      (items) => {
        this.songs = items;
        this.loading = false;
        console.log(this.songs);
      }
    );
  }

}
