import { Component, OnInit } from "@angular/core";
import { FirebaseService } from "../../services/firebase.service";

@Component({
  selector: "app-trades-page",
  templateUrl: "./trades-page.component.html",
  styleUrls: ["./trades-page.component.css"],
  providers: [FirebaseService]
})
export class TradesPageComponent implements OnInit {
  constructor(public db: FirebaseService) {}
  dateToFilterBy: number;

  ngOnInit() {}

  onDateChange(date: number) {
    this.dateToFilterBy = date;
  }
}
