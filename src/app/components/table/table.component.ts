import { Component, OnInit, Input } from "@angular/core";
import { element } from "protractor";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {
  @Input() elementsToDisplay: any = []

  @Input()
  set timestamp(timestamp: number) {
    if (timestamp) {
      this._timestamp = timestamp;
    } else {
      this._timestamp = 0
    }
  }
  get timestamp(): number {
    return this._timestamp;
  }

  _timestamp: number = 0;

  constructor() {}

  ngOnInit() {}
}
