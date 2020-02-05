import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shopservice.service'

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  shopDtails;
  //alert(shopDtails);
  constructor(private sservie: ShopService) { 
    console.log("shop cons");
    
  }

  ngOnInit() {
    console.log("shop");
    this.sservie.getJSON().subscribe(data => {
      console.log("resp : "+data)
      this.shopDtails = data.shop;
    });
  }

  

}
