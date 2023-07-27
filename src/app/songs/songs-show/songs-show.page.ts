import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Song } from 'src/app/interfaces/song';
import { SongService } from 'src/app/services/song.service';
import { ViewEncapsulation } from '@angular/core'
import { Category } from 'src/app/interfaces/category';

@Component({
  selector: 'app-songs-show',
  templateUrl: './songs-show.page.html',
  styleUrls: ['./songs-show.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SongsShowPage implements OnInit {

  song?: Song;
  categories: any;
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
        this.categories = this.song.categories;
        this.loading = false;
      }
    );
  }

}
