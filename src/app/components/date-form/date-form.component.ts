import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-date-form",
  templateUrl: "./date-form.component.html",
  styleUrls: ["./date-form.component.css"]
})
export class DateFormComponent implements OnInit {
  constructor() {}

  dateToFilterBy: number;
  @Output() dateChanged = new EventEmitter<number>();

  ngOnInit() {}

  submit() {
    this.dateChanged.emit(this.dateToFilterBy);
  }
}
