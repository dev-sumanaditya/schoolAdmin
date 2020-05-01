import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public options = {
    1: false,
    2: false,
    3: false
  };

  constructor() { }

  ngOnInit(): void {
  }

  public expand(id) {
    this.options[id] = !this.options[id];
  }
}
