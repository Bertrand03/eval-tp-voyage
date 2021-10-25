import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Trip} from '../../models/trip.model';
import {TripService} from '../../services/trip/trip.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-trip',
  templateUrl: './edit-trip.component.html',
  styleUrls: ['./edit-trip.component.css']
})
export class EditTripComponent implements OnInit {
  formGroup: FormGroup;

  nameEdited: string;
  descrEdited: string;
  BeginDateEdited: string;
  EndDateEdited: string;

  trip: Trip;

  clearName: string;
  clearDescr: string;
  clearStartDate: string;
  clearEndDate: string;

  constructor(private fb: FormBuilder, private tripService: TripService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group(
      {
        tripName: new FormControl(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
        tripDescription: new FormControl(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(1000)]),
        tripStartDate: [],
        tripEndDate: []
      }
    );

    let id = this.route.snapshot.params.id;
    console.log('id vaut : ' + id);
    this.tripService.getTrip(id)
      .then(
        (trip: Trip) => {
          this.trip = trip;
        }
      );
  }

  onEdit() {
    // this.nameEdited = this.formGroup.value.tripName;
    // this.descrEdited = this.formGroup.value.tripDescription;
    // this.BeginDateEdited = this.formGroup.value.tripStartDate;
    // this.EndDateEdited = this.formGroup.value.tripEndDate;

    this.trip.name = this.formGroup.value.tripName;
    this.trip.description = this.formGroup.value.tripDescription;
    this.trip.dateBegin = this.formGroup.value.tripStartDate;
    this.trip.dateEnd = this.formGroup.value.tripEndDate;

    console.log('this trip : ');
    console.log(this.trip);

    this.tripService.editTrip(this.trip);
  }

  onClearPlaceHolder() {
    this.clearName = ' ';
    this.clearDescr = ' ';
    this.clearStartDate = ' ';
    this.clearEndDate = ' ';
  }

}
