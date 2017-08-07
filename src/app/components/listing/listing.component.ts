import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {FirebaseService} from "../../services/firebase.service";
import {ActivatedRoute, Router, Params} from "@angular/router";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  id:any;
  listing:any;
  imageUrl:any;

  constructor(private firebaseService : FirebaseService,
  private router:Router,
  private route:ActivatedRoute) { }

  ngOnInit() {

    //Get ID
    this.id = this.route.snapshot.params['id'];
    this.firebaseService.getListingDetails(this.id).subscribe(listing =>{
      this.listing = listing;
      console.log(listing);

      //TODO storage ref
    });
  }

}
