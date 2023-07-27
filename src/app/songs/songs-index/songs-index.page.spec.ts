import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SongsIndexPage } from './songs-index.page';

describe('SongsIndexPage', () => {
  let component: SongsIndexPage;
  let fixture: ComponentFixture<SongsIndexPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SongsIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
