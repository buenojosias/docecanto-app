import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  ) { }

  ngOnInit() {
    this.getEvent();
  }

  getEvent() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.eventService.show(id).subscribe(
      (event) => {
        this.event = event.data;
        this.loading = false;
        console.log(event);
        // if(!this.event?['data'])
        //   this.showQuestion = true;
      }
    );
  }

  sendAnswer(answer: string) {
    const data: any = {
      event: this.event,
      answer: answer
    }
    this.eventService.syncAnswer(data).subscribe(res => {
      console.log(res);
    });
  }

}
