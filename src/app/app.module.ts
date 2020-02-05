import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { FoodBawarchiComponent } from './food-bawarchi/food-bawarchi.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ShopService } from './shopservice.service';
import { FoodService } from './foodservice.service';
import { MoviesService } from './movies.service';
import { SampleDirective } from './sample.directive';
import { AppHighletDirective } from './app-highlet.directive';
import {ExponentialStrengthPipe} from './food-bawarchi/food-bawarchi.pipe';
import { ShakirComponent } from './shakir/shakir.component';


const appRoutes: Routes = [
  { path: "",
    component:   LoginComponent
  },
  { path: "home",
    component:   HomeComponent,
  
  // {
  //   path: "home/shop",
  //   component: ShopComponent
  // },{
  //   path: "food-bawarchi",
  //   component: FoodBawarchiComponent
  // },{
  //   path: "movie-details",
  //   component: MovieDetailsComponent
  // }
  children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'shop', component: ShopComponent },
    { path: 'food-bawarchi', component: FoodBawarchiComponent },
    { path: 'movie-details', component: MovieDetailsComponent }
  ]}
]
@NgModule({ 
  declarations: [
    AppComponent,
    ShopComponent,
    FoodBawarchiComponent,
    MovieDetailsComponent,
    PageNotFoundComponent,
    HomeComponent,
    LoginComponent,
    SampleDirective,
    AppHighletDirective,
    ExponentialStrengthPipe,
    ShakirComponent
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    ShopService, FoodService, MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
