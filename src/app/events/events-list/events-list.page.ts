import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/interfaces/event';
import { ErrorService } from 'src/app/services/error.service';
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
    private eventService: EventService,
    private errorService: ErrorService
  ) { }

  ngOnInit() {
    this.getEvents()
  }

  getEvents(event?: any) {
    this.eventService.list().subscribe((items) => {
      this.events = items.data;
      event?.target.complete();
      this.loading = false;
    },
    (error: any) => {
      this.loading = false;
      this.errorService.handleError(error);
    })
  }

}
