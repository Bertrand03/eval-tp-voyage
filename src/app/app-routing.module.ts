import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './views/login/login.component';
import {GuardService} from './services/guard/guard.service';
import {TripHomeComponent} from './views/trip-home/trip-home.component';
import {DetailsTripComponent} from './views/details-trip/details-trip.component';
import {EditTripComponent} from './views/edit-trip/edit-trip.component';


const routes: Routes = [
  {path: '', canActivate: [GuardService], component: TripHomeComponent}, // Check in first position if the user is connected or not
  {path: 'details-trip', canActivate: [GuardService], component: DetailsTripComponent},
  {path: 'details-trip/:id', canActivate: [GuardService], component: DetailsTripComponent},
  {path: 'details-trip/edit/:id', canActivate: [GuardService], component: EditTripComponent},
  {path: 'details-trip/delete/:id', canActivate: [GuardService], component: EditTripComponent},
  {path: 'posts', canActivate: [GuardService], component: TripHomeComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: ''}, // Last choice if any paths above have been detected before
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
