import { Component, OnInit } from '@angular/core';

import { SharedService } from './../../../shared/shared.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-comp1-home',
  templateUrl: './comp1-home.component.html',
  styleUrls: ['./comp1-home.component.css']
})
export class Comp1HomeComponent implements OnInit {

  public array$: Observable<number[]>;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {

    this.array$ = this.sharedService.getArray();

  }

}
