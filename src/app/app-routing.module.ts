import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute, Params} from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { BookPageComponent } from './pages/book-page/book-page.component';
import { HeaderComponent } from './components/header/header.component';

const appRoutes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'orders', component: OrderPageComponent },
    { path: 'trades', component: BookPageComponent },
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