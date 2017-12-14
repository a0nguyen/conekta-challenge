import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MaterializeModule } from "angular2-materialize";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import "hammerjs";

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";

import { AppComponent } from "./app.component";
import { HomepageComponent } from "./pages/homepage/homepage.component";
import { OrdersPageComponent } from "./pages/orders-page/orders-page.component";
import { TradesPageComponent } from "./pages/trades-page/trades-page.component";
import { HeaderComponent } from "./components/header/header.component";
import { TableComponent } from "./components/table/table.component";
import { DateFormComponent } from './components/date-form/date-form.component';

export const firebaseConfig = {
  apiKey: "AIzaSyBrXrzap-bBiv9mi-EXqfZIW6vBb1eUtB0",
  authDomain: "conketa-c.firebaseapp.com",
  databaseURL: "https://conketa-c.firebaseio.com",
  projectId: "conketa-c",
  storageBucket: "conketa-c.appspot.com",
  messagingSenderId: "475885327723"
};

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    OrdersPageComponent,
    TradesPageComponent,
    HeaderComponent,
    TableComponent,
    DateFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
