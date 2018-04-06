import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routing } from './app.route';
import { AuthModule } from './modules/auth/auth.module';
import { AuthGuard } from './modules/auth.guard';
import { UserService } from './modules/user.service';

import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    routing,
    AuthModule,
    SharedModule.forRoot()
  ],
  providers: [ AuthGuard, UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
