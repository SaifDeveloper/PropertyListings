import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Observable} from "rxjs/Observable";
import { FlashMessagesService } from 'ngx-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  ngOnInit() {
  }

  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth, public flashMessagesService: FlashMessagesService) {
    this.user = afAuth.authState;
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
    this.flashMessagesService.show('You are logged out!', {
      classes: ['alert', 'alert-success'], // You can pass as many classes as you need
      timeout: 3000, // Default is 3000
    });
  }

}
