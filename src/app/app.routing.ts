import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthModule} from './admin/auth/auth.module';
import { IndexComponent } from './admin/auth/index/index.component';

import {AppModule} from './app.module';
const appRoutes: Routes =
    [
        { path: '', redirectTo: 'admin/index', pathMatch: 'full' },
        {path: 'admin/index', component: IndexComponent},
        { path: 'admin', loadChildren: 'app/admin/auth/auth.module#AuthModule' }
    ];

    @NgModule({
        imports: [
            RouterModule.forRoot(appRoutes),
            AuthModule
        ],
        exports: [
            RouterModule
        ],
        providers: [
        ]
    })

    export class AppRoutingModule {}