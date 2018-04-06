import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Comp1HomeComponent } from './components/comp1-home/comp1-home.component';
import { Comp1HeaderComponent } from './components/comp1-header/comp1-header.component';
import { Comp1FooterComponent } from './components/comp1-footer/comp1-footer.component';
import { SharedModule } from './../shared/shared.module';

import { routing } from './comp1.router';

@NgModule({
  declarations: [ Comp1FooterComponent, Comp1HeaderComponent, Comp1HomeComponent ],
  imports: [ CommonModule, routing, SharedModule ],
  providers: [],
})
export class Comp1Module {}
