import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './components/listing/listing.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';
import {RouterModule, Routes} from "@angular/router";
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireAuthModule} from "angularfire2/auth";
import {FirebaseService} from "./services/firebase.service";
import { FlashMessagesModule } from 'ngx-flash-messages';

export const firebaseConfig = {
  apiKey: "AIzaSyB9q2tIsf869IhZeZjEQ-DzZsW-xhQ45FM",
  authDomain: "propertylistings-ddba3.firebaseapp.com",
  databaseURL: "https://propertylistings-ddba3.firebaseio.com",
  projectId: "propertylistings-ddba3",
  storageBucket: "propertylistings-ddba3.appspot.com",
  messagingSenderId: "398479647447"
};

const appRoutes : Routes = [
  {path:'',component:HomeComponent},
  {path:'listings',component:ListingsComponent},
  {path:'listing/:id',component:ListingComponent},
  {path:'add-listing',component:AddListingComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    ListingComponent,
    AddListingComponent,
    EditListingComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FlashMessagesModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
