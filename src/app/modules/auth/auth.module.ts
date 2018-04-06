import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/login/login.component';

import { routing } from './auth.route';

@NgModule({
  declarations: [ AuthComponent, LoginComponent ],
  imports: [ CommonModule, routing ],
  providers: [],
})
export class AuthModule {}
