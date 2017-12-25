import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {ForgotComponent} from './forgot/forgot.component';
import {ChartComponent} from './chart/chart.component';
import {TableComponent} from './table/table.component';
import {BlankComponent} from './blank/blank.component';
import {CardsComponent} from './cards/cards.component';
import {NavbarComponent} from './navbar/navbar.component';
import {IndexComponent} from './index/index.component';
const routes: Routes = [
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent},
    {path: 'forgot', component: ForgotComponent},
    { path: 'charts', component: ChartComponent},
    {path: 'tables', component: TableComponent},
    {path: 'blank', component: BlankComponent},
    { path: 'cards', component: CardsComponent},
    { path: 'navbar', component: NavbarComponent},
    { path: 'index', component: IndexComponent},
    // miss else paths
];

export const routing = RouterModule.forChild(routes);
