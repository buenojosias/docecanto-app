import { Component } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(homeService: HomeService) {
    homeService.getHome().subscribe(res => {
      console.log(res);
    });
  }

}
