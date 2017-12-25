import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {routing} from './auth.routes';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { TableComponent } from './table/table.component';
import { ChartComponent } from './chart/chart.component';
import { BlankComponent } from './blank/blank.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardsComponent } from './cards/cards.component';
import { IndexComponent } from './index/index.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        routing,
    ],
    declarations:
    [
        RegisterComponent,
        LoginComponent,
        ForgotComponent,
        TableComponent,
        ChartComponent,
        BlankComponent,
        NavbarComponent,
        CardsComponent,
        IndexComponent,
        ],
    providers: [],
})
export class AuthModule {}
