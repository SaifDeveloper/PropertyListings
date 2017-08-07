import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';


@Injectable()
export class FirebaseService {

  listings: FirebaseListObservable<any[]>;
  listing: FirebaseObjectObservable<any[]>;

  constructor(private af: AngularFireDatabase) { }

  getListings(){
    this.listings = this.af.list('/listings') as FirebaseListObservable<Listing[]>;
    return this.listings;
  }

  getListingDetails(id){
    this.listing = this.af.object('/listings/'+id) as FirebaseObjectObservable<Listing>;
    return this.listing;

  }

}

interface Listing{
  $key?:string;
  title?:string;
  type?:string;
  image?:string;
  city?:string;
  owner?:string;
  bedrooms?:string;
}

