import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shopservice.service'
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private toggle : boolean = false;
  constructor() { }
  ngOnInit() {
     $(document).ready(function(){
       $("button").click(function(){
           $("#navbarNavAltMarkup").slideToggle("show");
       });
  });
  }
//   clickEvent(event){
//     //if you just want to toggle the class; change toggle variable.
//     this.toggle != this.toggle;       
//  }


}
