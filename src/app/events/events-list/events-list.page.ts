import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/interfaces/event';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events-list.page.html',
  styleUrls: ['./events-list.page.scss'],
})
export class EventsListPage implements OnInit {

  events: Event[] = [];
  loading = true;

  constructor(
    private eventService: EventService
  ) { }

  ngOnInit() {
    this.eventService.list().subscribe((items) => {
      const data = items.data;
      data.map((item) => {
        item.date = new Date(item.date).toLocaleDateString('pt-BR');
      })
      this.events = data;
      this.loading = false;
    })
  }

  getEvents() {
    // this.eventService.list().subscribe(
    //   (items) => {
    //     this.events = items;
    //     this.loading = false;
    //     console.log(this.events);
    //   },
    // (error: any) => {
    //   console.error(error.status)
    // }
    // )
  }

}
