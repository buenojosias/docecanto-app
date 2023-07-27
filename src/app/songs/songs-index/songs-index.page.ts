import { Component, OnInit } from '@angular/core';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-songs-index',
  templateUrl: './songs-index.page.html',
  styleUrls: ['./songs-index.page.scss'],
})
export class SongsIndexPage implements OnInit {

  categories: any[] = [];
  songs: any[] = [];
  loading = true;

  constructor(
    private songService: SongService
  ) { }

  ngOnInit() {
    this.songService.index().subscribe((items) => {
      this.categories = items.data.categories;
      this.songs = items.data.songs;
      console.log(this.categories, this.songs);
      this.loading = false;
    })
  }

}
