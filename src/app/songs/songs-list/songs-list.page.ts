import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/interfaces/song';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.page.html',
  styleUrls: ['./songs-list.page.scss'],
})
export class SongsListPage implements OnInit {

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
      // const data = items.data;
      // this.songs = data;
      this.loading = false;

      // console.log(data);
    })
  }

}
