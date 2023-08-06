import { Component, OnInit } from '@angular/core';
import { BirthService } from '../services/birth.service';
import { ErrorService } from '../services/error.service';

@Component({
  selector: 'app-births',
  templateUrl: './births.page.html',
  styleUrls: ['./births.page.scss'],
})
export class BirthsPage implements OnInit {

  period: string = 'week';
  births: any[];
  loading = false;

  constructor(
    private birthService: BirthService,
    private errorService: ErrorService
  ) { }

  ngOnInit() {
    this.getBirths();
  }

  changeSegment(event: any) {
    this.period = event.detail.value;
    this.getBirths();
  }

  getBirths() {
    this.loading = true;
    this.birthService.list(this.period).subscribe((items) => {
      console.log(items);

      this.births = items;
      this.loading = false;
    },
      (error: any) => {
        this.loading = false;
        this.errorService.handleError(error);
      }
    )
  }

}
