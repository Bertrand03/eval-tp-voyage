import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Trip} from '../../models/trip.model';
import {map} from 'rxjs/operators';
import {AuthService} from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private http: HttpClient, private authService: AuthService) {}

  public static apiUrl = 'https://angular-eval.herokuapp.com/api/v1/';

  /**
   * Method for retrieve all the trips from the API
   */
  getTrips(): Promise<Array<Trip>> {
    let headers = this.getDefaultHeader();
    return this.http
      .get(TripService.apiUrl + 'offers', {headers})
      .pipe(
        map((res: any) => {
          return res.offers.map((item: any) => Trip.fromJSON(item));
        })
      )
      .toPromise();
  }

  /**
   * Method for retrieve one trip from the API
   * @param id id of the trip
   */
  getTrip(id: string): Promise<any> {
    return new Promise(
      (res, rej) => {
        let headers = this.getDefaultHeader();

        this.http
          .get(TripService.apiUrl + 'offers/' + id, {headers})
          .subscribe(
            (trip: any) => {
              res(Trip.fromJSON(trip.offer));
            },
            err => {
              console.error(err);
              rej(err);
            }
          );
      }
    );
  }

    /**
   * Method for update a trip
   * @param trip
   */
  editTrip(trip: Trip): Promise<any> {
    let headers = this.getDefaultHeader();
    return this.http.put(TripService.apiUrl + 'edit/' + trip.id, trip.toJSON(), {headers})
      .pipe(
        map((res: any) => {
          return Trip.fromJSON(res.offers);
        })
      )
      .toPromise();
  }

  /**
   * Method for delete a trip
   * @param id
   */
  deleteTravel(id: string): Promise<any> {

    return this.http.delete(TripService.apiUrl + 'offers/delete/' + id)
      .toPromise();
  }

  /**
   * Return the default header
   */
  private getDefaultHeader(): HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    if (this.authService.token.getValue()) {
      headers = headers.append('Authorization', this.authService.token.getValue());
    }
    return headers;
  }
}
