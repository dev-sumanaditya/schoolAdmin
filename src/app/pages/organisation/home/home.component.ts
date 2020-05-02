import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public options = {
    1: false
  };


  public head = [
    {headerName: 'ID', field: 'index', sortable: true, filter: true, checkboxSelection: true },
    {headerName: 'NAME', field: 'name', sortable: true, filter: true },
    {headerName: 'EMAIL', field: 'email', sortable: true, filter: true},
    {headerName: 'CONTACT', field: 'contact', sortable: true, filter: true},
    {headerName: 'QUERY', field: 'query', sortable: true, filter: true},
    {headerName: 'DATE', field: 'date', sortable: true, filter: true},
    {headerName: 'SOURCE', field: 'source', sortable: true, filter: true},
    {headerName: 'PRIORITY', field: 'priority', sortable: true, filter: true}
  ];

  public url = 'http://localhost:4000/leads';

  public selectedRow = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public expand(id) {
    this.options[id] = !this.options[id];
  }

  public selected(event) {
    if (event) {
      this.selectedRow = event;
    } else {
      this.selectedRow = false;
    }
  }

  public gridLoaded(event) {
    console.log(event);
  }

  public openOrganisation() {
    if (this.selectedRow) {
      this.router.navigate(['/', 'organisation', 'details']);
    }
  }
}
