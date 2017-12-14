import { Component, OnInit } from "@angular/core";
import { FirebaseService } from "../../services/firebase.service";

@Component({
  selector: "app-orders-page",
  templateUrl: "./orders-page.component.html",
  styleUrls: ["./orders-page.component.css"],
  providers: [FirebaseService]
})
export class OrdersPageComponent implements OnInit {
  constructor(public db: FirebaseService) {}
  dateToFilterBy: number

  ngOnInit() {
  }

  onDateChange(date: number){
    this.dateToFilterBy = date
  }
}
