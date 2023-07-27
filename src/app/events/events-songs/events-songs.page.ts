import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Song } from 'src/app/interfaces/song';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-events-songs',
  templateUrl: './events-songs.page.html',
  styleUrls: ['./events-songs.page.scss'],
})
export class EventsSongsPage implements OnInit {

  songs: any;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService
  ) { }

  ngOnInit() {
    this.getSongs();
  }

  getSongs() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.eventService.songs(id).subscribe(
      (items) => {
        this.songs = items;
        this.loading = false;
        console.log(this.songs);
      }
    );
  }

}
