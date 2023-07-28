import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSearchbar } from '@ionic/angular';
import { Song } from 'src/app/interfaces/song';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-songs-search',
  templateUrl: './songs-search.page.html',
  styleUrls: ['./songs-search.page.scss'],
})
export class SongsSearchPage implements OnInit {

  songs: Song[] = [];
  searched = false;
  searching = false;

  constructor(
    private songService: SongService,
  ) { }

  @ViewChild('searchbar') searchbar?: IonSearchbar;

  ionViewDidEnter() {
    this.searchbar!.setFocus();
  }

  ngOnInit() {
  }

  handleChange(event: any) {
    const query = event.target.value.toLowerCase();
    const data: any = {
      query: query,
    }
    if(this.countWords(query) < 3)
      return;

    this.searching = true;
    this.songService.search(data).subscribe((items) => {
      this.songs = items;
      this.searching = false;
      this.searched = true;
      console.log(this.songs);
    });
  }

  clearSearch() {
    this.songs = [];
    this.searched = false;
  }

  countWords(query: string) {
    query.replace(/(\r\n|\n|\r)/g, " ").trim();
    return query.split(/\s+/g).length;
  }

}
