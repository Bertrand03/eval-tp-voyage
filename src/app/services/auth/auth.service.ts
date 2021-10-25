import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {User} from '../../models/user.model';
import {TripService} from '../trip/trip.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: BehaviorSubject<string>;

  constructor(private http: HttpClient, private router: Router) {
    this.token = new BehaviorSubject<string>('');
  }

  /**
   * Method for log the user
   * @param user
   */
  login(user: User): Promise<any> {
    return new Promise<any>(
      (res, rej) => {

        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');

        this.http
          .post(TripService.apiUrl + 'login', user.toJSON(), {headers})
          .subscribe(
            (info: any) => {

              this.token.next(info.token);
              res();
            },
            err => {
              console.error(err);
              rej(err.error?.errorMsg);
            }
          );

      }
    );
  }

  /**
   * Method for logout the user
   */
  logout(): Promise<void> {
    return new Promise<void>(
      (res) => {
        this.token.next(null);
      }
    );
    this.router.navigate(['/login']);
  }

}
