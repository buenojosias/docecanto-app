import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Song } from 'src/app/interfaces/song';
import { ErrorService } from 'src/app/services/error.service';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-songs-favorite',
  templateUrl: './songs-favorite.page.html',
  styleUrls: ['./songs-favorite.page.scss'],
})
export class SongsFavoritePage implements OnInit {

  songs: any;
  loading = true;

  constructor(
    private songService: SongService,
    private errorService: ErrorService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.getFavorites()
  }

  getFavorites(event?: any) {
    this.songService.listFavorites().subscribe(
      (items) => {
        this.songs = items;
        event?.target.complete();
        this.loading = false;
      }
    );
  }

  removeFavorite(songId: number) {
    const data: any = {
      songId: songId,
      action: 'detach'
    }
    const index = this.songs.findIndex((song: Song) => song.id === songId);
    this.songService.syncFavorite(data).subscribe(
      (res) => {
        if (res.success === true) {
          const msg = 'Música removida das favoritas.'
          this.presentToast(msg)
          this.songs.splice(index, 1);
        } else {
          const msg = 'Erro ao remover das favoritas';
          this.presentToast(msg)
        }
      },
      (error: any) => {
        this.loading = false;
        this.errorService.handleError(error);
      }
    );
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
    });
    await toast.present();
  }
}
