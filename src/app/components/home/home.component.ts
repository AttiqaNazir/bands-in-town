import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  result = null;
  ngOnInit(): void {
  }

  // get artist data from child componenet and display on home page
  showArtist(data){
    this.result = data;
  }

}
