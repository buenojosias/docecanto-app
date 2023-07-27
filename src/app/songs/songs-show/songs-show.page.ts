import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Song } from 'src/app/interfaces/song';
import { SongService } from 'src/app/services/song.service';
import { ViewEncapsulation } from '@angular/core'
import { Category } from 'src/app/interfaces/category';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-songs-show',
  templateUrl: './songs-show.page.html',
  styleUrls: ['./songs-show.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SongsShowPage implements OnInit {

  song?: Song;
  categories: any;
  isFavorite?: boolean;
  loading = true;

  constructor(
    private songService: SongService,
    private route: ActivatedRoute,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.getSong();
  }

  getSong() {
    const id = Number(this.route.snapshot.paramMap.get('number'));
    this.songService.show(id).subscribe(
      (item) => {
        console.log(item);
        this.song = item.data;
        this.categories = this.song.categories;
        this.isFavorite = this.song.isFavorite;
        this.loading = false;
      }
    );
  }

  syncFavorite() {
    const data: any = {
      songId: this.song!.id,
      action: this.isFavorite ? 'detach' : 'attach'
    }
    this.songService.syncFavorite(data).subscribe(
      (res) => {
        if(res.success === true) {
          if(data.action === 'attach') {
            this.isFavorite = true;
            const msg = 'Música adicionada às favoritas.'
            this.presentToast(msg)
          } else {
            this.isFavorite = false;
            const msg = 'Música removida das favoritas.'
            this.presentToast(msg)
          }
        } else {
          const msg = data.action === 'attach' ? 'Erro ao adicionar às favoritas' : 'Erro ao remover das favoritas';
          this.presentToast(msg)
        }
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
