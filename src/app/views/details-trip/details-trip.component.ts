import { Component, OnInit } from '@angular/core';
import {Trip} from '../../models/trip.model';
import {ActivatedRoute} from '@angular/router';
import {TripService} from '../../services/trip/trip.service';

@Component({
  selector: 'app-details-trip',
  templateUrl: './details-trip.component.html',
  styleUrls: ['./details-trip.component.css']
})
export class DetailsTripComponent implements OnInit {

  trip: Trip;

  constructor(private route: ActivatedRoute, private tripService: TripService) { }

  /**
   * Return the trip selected in "trip-home" thanks to the id passed in url
   */
  ngOnInit(): void {

    let id = this.route.snapshot.params.id;
    console.log('id vaut : ' + id);

    this.tripService.getTrip(id)
      .then(
        (trip: Trip) => {
          this.trip = trip;
        }
      );
  }

}
