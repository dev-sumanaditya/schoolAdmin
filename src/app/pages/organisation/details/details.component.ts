import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public options = {
    1: false,
    2: false
  };



  constructor() { }

  ngOnInit(): void {
  }

  public expand(id) {
    this.options[id] = !this.options[id];
  }

  sectionSelected(e) {
    console.log(e);
  }

}
