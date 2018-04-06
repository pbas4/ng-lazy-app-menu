import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { Comp1HomeComponent } from './components/comp1-home/comp1-home.component';


const routes: Routes = [
  { path: '', component: Comp1HomeComponent },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
