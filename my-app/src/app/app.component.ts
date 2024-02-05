import { Component } from '@angular/core';
import { timestamp } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    h3 {
    color: rgb(30, 128, 241);
  }

    .blue {
      background-color: blue;
      color: white;
    }

    .white {
      background-color: white;
      color: black;
    }
  `]
})
export class AppComponent {
  title = 'my-app';
  isDisplayed = true;
  clicksRegistered: number[] = [];
  styleStatus = 'white';

  constructor() {
  }

  displayDetails() {
    this.isDisplayed === true ? this.isDisplayed = false : this.isDisplayed = true;
    const timestamp: number = new Date().getTime();
    this.clicksRegistered.push(timestamp);
    console.log('timestamp ' + timestamp);
  }

  getColor() {
   this.clicksRegistered.length > 4 ? this.styleStatus = 'blue' : this.styleStatus = 'white';
  }
}
