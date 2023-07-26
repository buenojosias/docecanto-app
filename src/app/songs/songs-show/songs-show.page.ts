import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Song } from 'src/app/interfaces/song';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-songs-show',
  templateUrl: './songs-show.page.html',
  styleUrls: ['./songs-show.page.scss'],
})
export class SongsShowPage implements OnInit {

  song?: Song;
  loading = true;

  constructor(
    private songService: SongService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getSong();
  }

  getSong() {
    const id = Number(this.route.snapshot.paramMap.get('number'));
    this.songService.show(id).subscribe(
      (item) => {
        this.song = item.data;
        this.loading = false;
        console.log(item, this.song);
      }
    );
  }

}
