import {NgModule} from "@angular/core";
import {IonicApp, IonicModule} from "ionic-angular";
import {BrowserModule} from '@angular/platform-browser';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Keyboard} from '@ionic-native/keyboard';

import {HotelService} from "../services/hotel-service";
import {PlaceService} from "../services/place-service";
import {ActivityService} from "../services/activity-service";
import {TripService} from "../services/trip-service";

import {MyApp} from "./app.component";

import {AccountPage} from "../pages/account/account";
import {CheckoutHotelPage} from "../pages/checkout-hotel/checkout-hotel";
import {CheckoutTripPage} from "../pages/checkout-trip/checkout-trip";
import {HomePage} from "../pages/home/home";
import {HotelPage} from "../pages/hotel/hotel";
import {HotelDetailPage} from "../pages/hotel-detail/hotel-detail";
import {LoginPage} from "../pages/login/login";
import {NotificationsPage} from "../pages/notifications/notifications";
import {RegisterPage} from "../pages/register/register";
import {ReviewsPage} from "../pages/reviews/reviews";
import {SearchLocationPage} from "../pages/search-location/search-location";
import {SearchTripsPage} from "../pages/search-trips/search-trips";
import {TabReviewsPage} from "../pages/tab-reviews/tab-reviews";
import {TripDetailPage} from "../pages/trip-detail/trip-detail";
import {TripsPage} from "../pages/trips/trips";

// import services
// end import services
// end import services

// import pages
// end import pages

@NgModule({
  declarations: [
    MyApp,
    AccountPage,
    CheckoutHotelPage,
    CheckoutTripPage,
    HomePage,
    HotelPage,
    HotelDetailPage,
    LoginPage,
    NotificationsPage,
    RegisterPage,
    ReviewsPage,
    SearchLocationPage,
    SearchTripsPage,
    TabReviewsPage,
    TripDetailPage,
    TripsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      // mode: 'md', --> uncomment in case you'll do an Web App (PWA) build.
      scrollPadding: false,
      scrollAssist: true, 
      autoFocusAssist: false
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AccountPage,
    CheckoutHotelPage,
    CheckoutTripPage,
    HomePage,
    HotelPage,
    HotelDetailPage,
    LoginPage,
    NotificationsPage,
    RegisterPage,
    ReviewsPage,
    SearchLocationPage,
    SearchTripsPage,
    TabReviewsPage,
    TripDetailPage,
    TripsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    HotelService,
    PlaceService,
    ActivityService,
    TripService,
    TripService
  ]
})

export class AppModule {
}
