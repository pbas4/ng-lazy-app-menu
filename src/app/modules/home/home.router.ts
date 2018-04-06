import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './components/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: 'comp1', loadChildren: 'app/modules/comp1/comp1.module#Comp1Module' },
    { path: 'comp2', loadChildren: 'app/modules/comp2/comp2.module#Comp2Module' }
  ]},
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
