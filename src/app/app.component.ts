import { Component, OnInit } from '@angular/core';
import {MovieServiceService} from './services/movie-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'movie-app';
  MyMovies:any = [];

constructor(private movieService:MovieServiceService){


}

ngOnInit(){
this.movieService.GetMovieInformation().subscribe((data)=>{
  this.MyMovies = data.Search;
  console.log(this.MyMovies);
})

}



}
