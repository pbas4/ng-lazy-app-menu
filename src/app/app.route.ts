import { AuthComponent } from './modules/auth/components/auth/auth.component';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: 'app/modules/auth/auth.module#AuthModule' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules });
