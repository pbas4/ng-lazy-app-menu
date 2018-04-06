import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Comp2HomeComponent } from './components/comp2-home/comp2-home.component';

import { routing } from './comp2.router';

@NgModule({
  declarations: [ Comp2HomeComponent ],
  imports: [ CommonModule, routing ],
  providers: [],
})
export class Comp2Module {}
