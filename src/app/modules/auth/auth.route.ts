import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'login', component: LoginComponent, canActivateChild: [AuthGuard]},
  { path: 'home', loadChildren: 'app/modules/home/home.module#HomeModule'},
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
