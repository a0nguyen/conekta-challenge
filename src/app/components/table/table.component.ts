import { Component, OnInit, Input } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() set elementsToDisplay(elements: any){
    if(elements){
      this._elementsToDisplay = elements      
    }
  }
  get elementsToDisplay(): any{
    return this._elementsToDisplay
  }

  @Input() timestamp: number = 0 // for 10minutes -> date.now() - 60 * 60 * 10 * 1000

  fitWithDate(element){
    if(element.payload.val().d > this.timestamp){
      return true
    }
  }

  _elementsToDisplay: any[] = []
  

  constructor() { }

  ngOnInit() {
  }

}
