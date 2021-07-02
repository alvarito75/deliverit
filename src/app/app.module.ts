import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Geolocation } from '@ionic-native/geolocation/ngx';
//import { NativeGeocoder } from '@ionic-native/native-geocoder';
import { NativeGeocoder } from "@ionic-native/native-geocoder/ngx";

// Import HttpClientModule
import { HttpClientModule } from '@angular/common/http'

// Import Firebase dependencies
import { AngularFireModule } from '@angular/fire';

import { AngularFirestore } from '@angular/fire/firestore';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(environment.firebaseConfig)],
  providers: [
    Geolocation,
    NativeGeocoder,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
