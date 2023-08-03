import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/interfaces/category';
import { Song } from 'src/app/interfaces/song';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.page.html',
  styleUrls: ['./songs-list.page.scss'],
})
export class SongsListPage implements OnInit {

  category?: Category;
  songs: any;
  loading = true;

  constructor(
    private songServive: SongService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getSongs();
  }

  getSongs(event?: any) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.songServive.list(id).subscribe(
      (category) => {
        this.category = category.data;
        this.songs = this.category.songs;
        event?.target.complete();
        this.loading = false;
      });
  }

}
