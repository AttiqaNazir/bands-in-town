import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  @Input() artist = null;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  getEvents(name){
    this.router.navigate(['events',name]);
  }

}
