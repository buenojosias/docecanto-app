import { Component, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  activeTab?: string;

  @ViewChild('myTabs') tabs?: IonTabs;

  getSelected(): void {
    this.activeTab = this.tabs!.getSelected();
  }

  constructor() {}

}
