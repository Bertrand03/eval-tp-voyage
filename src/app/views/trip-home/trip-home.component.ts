import {Component, OnInit, Output} from '@angular/core';
import {TripService} from '../../services/trip/trip.service';
import {Trip} from '../../models/trip.model';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-trip-home',
  templateUrl: './trip-home.component.html',
  styleUrls: ['./trip-home.component.css']
})
export class TripHomeComponent implements OnInit {

  trips: Array<Trip>;

  constructor(private tripService: TripService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.tripService.getTrips()
      .then((trips: Array<Trip>) => {
        this.trips = trips;
        console.log('this.trips');
        console.log(trips);
      });
  }

  onDelete(id: string) {
    this.tripService.deleteTravel(id);
  }
}

