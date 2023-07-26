import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { Event } from '../interfaces/event';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  events: any = [];

  constructor(
    private eventService: EventService
  ) { }

  ngOnInit() {
    this.getEvents();
    // this.eventService.list()
    //   .subscribe(items => {
    //     const data = items;
    //     data.map((item) => {
    //       item.date = new Date(item.date).toLocaleDateString('pt-BR')
    //     })
    //     this.events = items;
    //   }
    // )
  }

  getEvents() {
    this.eventService.list().subscribe(
      (items) => {
        this.events = items;
      },
      (error: any) => {
        console.error(error.status)
      }
    )
  }

}
