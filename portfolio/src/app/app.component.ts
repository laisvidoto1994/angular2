import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'portfolio';


  isMouseOver: boolean = false;
  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }


  showSpinner: boolean = true;
  constructor() {
    setTimeout(() => {
      this.showSpinner = false;
    }, 1500);

  }

}  