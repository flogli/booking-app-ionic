import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  offersPlaces: Place[];

  constructor(private placesService: PlacesService) { }

  ngOnInit() {
    this.offersPlaces = this.placesService.places;
  }

}
