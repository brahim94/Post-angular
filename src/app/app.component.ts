import { Component } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    const config = {
      apiKey: "AIzaSyB9DHgEyjXjBWwW5E-9G9naonLW8VmfHX0",
      authDomain: "posts-78b9e.firebaseapp.com",
      databaseURL: "https://posts-78b9e.firebaseio.com",
      projectId: "posts-78b9e",
      storageBucket: "",
      messagingSenderId: "488086188598",
      appId: "1:488086188598:web:08439f32a11907b9"
    };
    // Initialize Firebase
    firebase.initializeApp(config);

    }
  }






