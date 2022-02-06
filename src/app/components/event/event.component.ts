import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {


  events = [];
  artist = null;
  searched = "";
  constructor(private route:ActivatedRoute, private apiService:ApiService) { }

  ngOnInit(): void {
  }
  ngAfterViewInit():void {
    this.route.params.subscribe(e=>{
      this.searched = e.name;
      this.loadEvents(e.name);
    })
  }

  loadEvents(name){
    this.apiService.getEvent(name).subscribe(e=>{
      this.events = e;
    },res=>{
      alert("Server is not responding");
    })

    this.apiService.searchArtist(name).subscribe(data=>{
      this.artist = data;
    },res=>{
  
    })
  }

  

}
