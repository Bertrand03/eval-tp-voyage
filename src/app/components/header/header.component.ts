import { Component, OnInit } from '@angular/core';
import {TripService} from '../../services/trip/trip.service';
import {Trip} from '../../models/trip.model';
import {AuthService} from '../../services/auth/auth.service';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  trips: Array<Trip>;

  constructor(private tripService: TripService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.tripService.getTrips()
      .then((trips: Array<Trip>) => {
        this.trips = trips;
        console.log('this.trips');
        console.log(this.trips);
      });
  }
  onLogout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }


}
