import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[] = [
    new Place('p1',
      'New York Mansion',
      'The best place in NY',
      'https://thenypost.files.wordpress.com/2019/07/03a.real_.tri1_.c.ta_rr.jpg?quality=80&strip=all&strip=all',
      2899.99
    ),
    new Place(
      'p2',
      'Malibu Apartment',
      'Chilling out with magnificent sea view',
      'https://r-cf.bstatic.com/images/hotel/max1024x768/159/159940127.jpg',
      479.99
    ),
    new Place(
      'p3',
      'Abandoned House',
      'You will never go back - In all senses',
      'https://www.leggotenerife.com/wp-content/uploads/2016/10/immagine-da-revistavocesdelmisterio.wordpress.com_.png',
      49.99
    )
  ];

  constructor() { }

  get places() {
    return [...this._places];
  }

  getPlace(id:string){
    return {...this._places.find(p => p.id === id)};
  }
}
