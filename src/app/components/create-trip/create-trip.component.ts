import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Trip} from '../../models/trip.model';
import {TripService} from '../../services/trip/trip.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css']
})
export class CreateTripComponent implements OnInit {

  formGroup: FormGroup;

  trip: Trip;

  clearName: string;
  clearDescr: string;
  clearStartDate: string;
  clearEndDate: string;

  constructor(private fb: FormBuilder, private tripService: TripService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.trip = new Trip('', '', '', '', '', '', null , null , ' ');
    this.formGroup = this.fb.group(
      {
        tripName: new FormControl(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
        tripDescription: new FormControl(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(1000)]),
        tripStartDate: [],
        tripEndDate: []
      }
    );
  }

  onCreate() {

    this.trip.name = this.formGroup.value.tripName;
    this.trip.description = this.formGroup.value.tripDescription;
    this.trip.dateBegin = this.formGroup.value.tripStartDate;
    this.trip.dateEnd = this.formGroup.value.tripEndDate;

    this.tripService.createTrip(this.trip);
  }

  onClearPlaceHolder() {
    this.clearName = ' ';
    this.clearDescr = ' ';
    this.clearStartDate = ' ';
    this.clearEndDate = ' ';
  }


}
