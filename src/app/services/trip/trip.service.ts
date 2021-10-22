import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Trip} from '../../models/trip.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private httpClient: HttpClient) {}


    getTrips(): Promise<Array<Trip>> {

    // return null;
      return this.httpClient
        .get('https://angular-eval.herokuapp.com/api/v1/')
        .pipe(
          map((result: any) => {
            return result.map((item: any) => Trip.fromJSON(item));
          })
        )
        .toPromise();
     }
  }
