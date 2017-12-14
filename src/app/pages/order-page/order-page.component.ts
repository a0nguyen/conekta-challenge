import { Component, OnInit } from "@angular/core";
import { FirebaseService } from "../../services/firebase.service";

@Component({
  selector: "app-order-page",
  templateUrl: "./order-page.component.html",
  styleUrls: ["./order-page.component.css"],
  providers: [FirebaseService]
})
export class OrderPageComponent implements OnInit {
  constructor(public db: FirebaseService) {}

  ngOnInit() {
  }
}
