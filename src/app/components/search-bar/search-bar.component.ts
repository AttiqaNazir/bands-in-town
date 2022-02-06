import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  
  constructor(private apiService: ApiService) { }


  @Output() artist = new EventEmitter<any>();
  search:any;
  ngOnInit(): void {
  }
  searchArtist(args){

    this.apiService.searchArtist(this.search ).subscribe(data=>{
      this.artist.emit(data);
    },res=>{
  
    })

  }
}
