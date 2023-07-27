import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Event } from 'src/app/interfaces/event';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-events-show',
  templateUrl: './events-show.page.html',
  styleUrls: ['./events-show.page.scss'],
})
export class EventsShowPage implements OnInit {

  event?: Event;
  showQuestion: boolean = false;
  loading = true;

  constructor(
    public eventService: EventService,
    public route: ActivatedRoute,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.getEvent();
  }

  getEvent() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.eventService.show(id).subscribe(
      (event) => {
        console.log(event);
        this.event = event.data;
        if (!this.event.answer)
          this.showQuestion = true;
        this.loading = false;
      }
    );
  }

  sendAnswer(answer: string) {
    const data: any = {
      eventId: this.event!.id,
      answer: answer
    }
    this.eventService.syncAnswer(data).subscribe(
      (res) => {
        if (res.success === true) {
          this.event!.answer = answer;
          this.showQuestion = false;
          this.presentToast('Resposta enviada com sucesso.');
        } else {
          this.presentToast('Erro ao salvar resposta.');
        }
      });
  }

  displayQuestion(display: boolean) {
    this.showQuestion = display;
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
    });
    await toast.present();
  }

}
