import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private us: UserService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    if (this.us.isLoggedIn()) {
      this.router.navigateByUrl('/login');
    }
  }

}
