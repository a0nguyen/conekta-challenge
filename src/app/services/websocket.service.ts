import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { Observer } from "rxjs/Observer";
import { start } from "repl";

@Injectable()
export class WebSocketService {
  get orders(): any[]{
    if(!this.started){
      this.start()
    }
    return this._orders
  }

  get trades(): any[]{
    if(!this.started){
      this.start()
    }
    return this._trades
  }
  
  _orders: any[] = []
  _trades: any[] = []
  started: boolean = false

  start() {
    var websocket = new WebSocket("wss://ws.bitso.com");
    websocket.onopen = function() {
      websocket.send(
        JSON.stringify({ action: "subscribe", book: "btc_mxn", type: "orders" })
      );
    };
    websocket.onmessage = message => {
      var data = JSON.parse(message.data);
      if (data.type == "trades" && data.payload) {
        data.payload.forEach(element => {
          this.createElements(element, "trades");
        });
        if (data.type == "orders" && data.payload) {
          data.payload.bids.forEach(element => {
            debugger
            this.createElements(element, "orders");
          });
        }
      }
    };
  }

  createElements(element, array) {
    this[array] = [];
    var formatedElement = {
      id: element.id,
      rate: element.r,
      amount: element.a,
      value: element.v,
      pushedAt: Date.now()
    };
    this[array].push(formatedElement);
  }
}
