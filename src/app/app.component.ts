import { Component } from '@angular/core';
import { configList } from './lists';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent { 
  lists: configList[];

  listA: configList = {
    listItems: [
      { name: 'A', index: 0 },
      { name: 'B', index: 1 },
      { name: 'C', index: 2 },
    ],
    showDivider: true,
  };

  listB: configList = {
    listItems: [
      { name: 'X', index: 3 },
      { name: 'Y', index: 4 },
      { name: 'Z', index: 5 },
    ],
    showDivider: false,
  };

  constructor() {
    this.lists = [this.listA, this.listB];
  }
}
