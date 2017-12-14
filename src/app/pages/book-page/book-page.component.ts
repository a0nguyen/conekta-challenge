import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "../../services/firebase.service";


@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css'],
  providers: [FirebaseService]  
})
export class BookPageComponent implements OnInit {

  constructor(public db: FirebaseService){}

  ngOnInit() {
  }

}
