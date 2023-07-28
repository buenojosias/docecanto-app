import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private songService: SongService,
    private router: Router
  ) { }

  ngOnInit() {
    this.songService.index().subscribe((items) => {
      this.categories = items.data.categories;
      this.songs = items.data.songs;
      this.loading = false;
    })
  }

  goSearch() {
    this.router.navigate(['musicas/busca']);
  }
}
