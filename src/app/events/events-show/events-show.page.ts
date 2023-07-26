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

  event: any;
  showQuestion: boolean = false;
  loading = true;

  constructor(
    public eventService: EventService,
    public route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getEvent(id);
  }

  getEvent(id: any) {
    this.eventService.show(id).subscribe(
      (event) => {
        console.log(event);
        this.event = event;
        this.loading = false;
        if(!this.event['data']['answer'])
          this.showQuestion = true;
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
