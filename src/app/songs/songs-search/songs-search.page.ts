import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSearchbar } from '@ionic/angular';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';
import { Song } from 'src/app/interfaces/song';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-songs-search',
  templateUrl: './songs-search.page.html',
  styleUrls: ['./songs-search.page.scss'],
})
export class SongsSearchPage implements OnInit {

  query?: string;
  queryUpdate = new Subject<string>();
  songs: Song[] = [];
  searched = false;
  searching = false;

  constructor(
    private songService: SongService,
  ) {
    this.queryUpdate.pipe(
      debounceTime(600),
      distinctUntilChanged())
      .subscribe(() => this.doSearch());
  }

  @ViewChild('searchbar') searchbar?: IonSearchbar;

  ionViewDidEnter() {
    this.searchbar!.setFocus();
  }

  ngOnInit() {
  }

  doSearch() {
    const query = this.query;
    const data: any = {
      query: query,
    }
    if(this.countWords(query!) < 3)
      return;

    this.searching = true;
    this.songService.search(data).subscribe((items) => {
      this.songs = items;
      this.searching = false;
      this.searched = true;
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
