import { Injectable } from "@angular/core";
import {
  AngularFireDatabase,
  AngularFireList
} from "angularfire2/database";
import { database } from "firebase/app";

@Injectable()
export class FirebaseService {
  orders: any[] = [];
  trades: any[] = [];

  constructor(public firebaseDb: AngularFireDatabase) {
    this.getData("orders");
    this.getData("trades");
  }

  getData(dataname: string) {
    this[dataname]  = this.firebaseDb.list(dataname).snapshotChanges();
  }
}
