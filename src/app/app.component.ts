import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  public open: boolean;
  public mask: boolean;

  ngOnInit() {
    this.open = true;
    this.mask = null;
  }

  public menuToggle(): void {
    this.open = !this.open;

    if (!this.mask) {
      this.mask = true;
    } else {
      this.mask = !this.mask;
    }
  }
}
