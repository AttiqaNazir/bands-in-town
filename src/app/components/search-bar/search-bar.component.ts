import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  
  constructor(private apiService: ApiService, private route:ActivatedRoute) { }


  @Output() artist = new EventEmitter<any>();
  search:any;
  ngOnInit(): void {
  }
  ngAfterViewInit():void {
    this.route.params.subscribe(e=>{
      if(e.name){
        this.search = e.name;
        this.searchArtist(e.name);
      }
    })
  }
  searchArtist(args){

    this.apiService.searchArtist(this.search).subscribe(data=>{
      this.artist.emit(data);
    },res=>{
  
    })

  }
}
