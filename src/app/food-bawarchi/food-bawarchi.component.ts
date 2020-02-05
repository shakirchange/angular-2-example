import { Component, OnInit } from '@angular/core';
import { FoodService } from '../foodservice.service';

@Component({
  selector: 'app-food-bawarchi',
  templateUrl: './food-bawarchi.component.html',
  styleUrls: ['./food-bawarchi.component.css']
})
export class FoodBawarchiComponent implements OnInit
 {
  hotelDetails;
  power=2;
   constructor(private fService:FoodService) { }

  ngOnInit() {
    this.fService.getJSON().subscribe(data => {
      console.log("inside function");
      this.hotelDetails = data.json().hotels;
    }, err => console.log(err)
    )
  }
}
