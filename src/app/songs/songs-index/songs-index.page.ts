import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorService } from 'src/app/services/error.service';
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
    private errorService: ErrorService,
    private router: Router
  ) { }

  ngOnInit() {
    this.songService.index().subscribe((items) => {
      this.categories = items.data.categories;
      this.songs = items.data.songs;
      this.loading = false;
    },
    (error: any) => {
      this.loading = false;
      this.errorService.handleError(error);
    })
  }

  goSearch() {
    this.router.navigate(['musicas/busca']);
  }
}
