import { Component, OnInit } from '@angular/core';
import {TripService} from '../../services/trip/trip.service';
import {Trip} from '../../models/trip.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  trips: Array<Trip>;

  constructor(private tripService: TripService) { }

  ngOnInit(): void {
    this.tripService.getTrips()
      .then((trips: Array<Trip>) => {
        this.trips = trips;
        console.log(this.trips);
      });
  }

}
