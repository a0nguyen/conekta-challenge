import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute, Params} from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { TradesPageComponent } from './pages/trades-page/trades-page.component';
import { HeaderComponent } from './components/header/header.component';

const appRoutes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'orders', component: OrdersPageComponent },
    { path: 'trades', component: TradesPageComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }