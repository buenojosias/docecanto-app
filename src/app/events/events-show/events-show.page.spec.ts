import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventsShowPage } from './events-show.page';

describe('EventsShowPage', () => {
  let component: EventsShowPage;
  let fixture: ComponentFixture<EventsShowPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EventsShowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
