import { Component, OnInit , ViewChild, ElementRef,NgZone,} from '@angular/core';
import {NgModule} from '@angular/core';
import{FormsModule} from '@angular/forms';
import { Observable } from 'rxjs/Observable'; 
import { Injectable } from '@angular/core';
import{ICountry} from './country';
import {MapsAPILoader} from '@agm/core';
import {} from '@tpes/googlemaps';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  @ViewChild("search")public searchElement: ElementRef;

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone:NgZone){}

  ngOnInit() {
           this.mapsAPILoader.load().then(
        () => {
         let autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement, { types:["address"] });

         autocomplete.addListener("place_changed", () => {
          this.ngZone.run(() => {
           let place: google.maps.places.PlaceResult = autocomplete.getPlace();
           if(place.geometry === undefined || place.geometry === null ){
            return;
           }
          });
          });
        }
           );
             }

             
}
    

