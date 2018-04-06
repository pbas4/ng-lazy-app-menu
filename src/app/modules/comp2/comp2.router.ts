import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { Comp2HomeComponent } from './components/comp2-home/comp2-home.component';


const routes: Routes = [
  { path: '', component: Comp2HomeComponent },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
