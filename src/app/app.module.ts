import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsTripComponent } from './views/details-trip/details-trip.component';
import { EditTripComponent } from './views/edit-trip/edit-trip.component';
import { DeleteTripComponent } from './views/delete-trip/delete-trip.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './views/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {TripService} from './services/trip/trip.service';
import {AuthService} from './services/auth/auth.service';
import { AuthComponent } from './components/auth/auth.component';
import { TripHomeComponent } from './views/trip-home/trip-home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ErrorsComponent } from './components/errors/errors.component';
import { CreateTripComponent } from './components/create-trip/create-trip.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsTripComponent,
    EditTripComponent,
    DeleteTripComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    AuthComponent,
    TripHomeComponent,
    ErrorsComponent,
    CreateTripComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, // Need to get formBuilder
    ReactiveFormsModule // Need to have Reactive Method and use FormGroup
  ],
  providers: [TripService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
