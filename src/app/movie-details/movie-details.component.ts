import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service'

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movieDetails;
  constructor(private mService:MoviesService) { }

  ngOnInit() {
    this.mService.getJSON().subscribe(data => {
      console.log("aaa");
      this.movieDetails = data.json().theaters;
    });
  }

}
