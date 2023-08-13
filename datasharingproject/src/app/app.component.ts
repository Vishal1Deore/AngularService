import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'datasharingproject';
  whatToShow:number=0;
  showData(val:number){
    this.whatToShow=val;
  }
}
