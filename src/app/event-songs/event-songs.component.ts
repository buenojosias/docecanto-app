import { Component, Input, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-event-songs',
  templateUrl: './event-songs.component.html',
  styleUrls: ['./event-songs.component.scss'],
})
export class EventSongsComponent  implements OnInit {

  @Input() eventId: any;
  songs: any;
  loaded = false;
  loading = false;

  constructor(
    private eventService: EventService
  ) { }

  ngOnInit() { }

  accordionGroupChange = (ev: any) => {
    if(!this.loaded) {
      this.getSongs();
    }
  };

  getSongs() {
    this.loading = true;
    this.eventService.songs(this.eventId).subscribe(
      (items) => {
        this.songs = items;
        this.loaded = true;
        this.loading = false;
      }
    );
  }

}
