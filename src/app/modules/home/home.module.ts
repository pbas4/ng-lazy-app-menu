import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './home.router';

import { HomeComponent } from './components/home.component';

@NgModule({
  declarations: [ HomeComponent ],
  imports: [ CommonModule, routing ],
  providers: [],
})
export class HomeModule {}
