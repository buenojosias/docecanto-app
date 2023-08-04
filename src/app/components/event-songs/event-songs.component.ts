import { Component, Input, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-event-songs',
  templateUrl: './event-songs.component.html',
  styleUrls: ['./event-songs.component.scss'],
})
export class EventSongsComponent implements OnInit {

  @Input() eventId: any;
  songs: any;
  loaded = false;
  loading = false;

  constructor(
    private eventService: EventService,
    private errorService: ErrorService
  ) { }

  ngOnInit() { }

  accordionGroupChange = (ev: any) => {
    if (!this.loaded) {
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
      },
      (error: any) => {
        this.loading = false;
        this.errorService.handleError(error);
      }
    );
  }

}
