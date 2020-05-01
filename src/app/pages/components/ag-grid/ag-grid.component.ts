import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';


@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss']
})
export class AgGridComponent implements OnInit {

  public columnDefs = [
    {headerName: 'ID', field: 'index', sortable: true, filter: true, checkboxSelection: true },
    {headerName: 'NAME', field: 'name', sortable: true, filter: true },
    {headerName: 'EMAIL', field: 'email', sortable: true, filter: true},
    {headerName: 'CONTACT', field: 'contact', sortable: true, filter: true},
    {headerName: 'QUERY', field: 'query', sortable: true, filter: true},
    {headerName: 'DATE', field: 'date', sortable: true, filter: true},
    {headerName: 'SOURCE', field: 'source', sortable: true, filter: true},
    {headerName: 'PRIORITY', field: 'priority', sortable: true, filter: true}
  ];

  public rowData;
  public dataUrl = 'http://localhost:4000/leads';
  public loaded = false;
  public selectedRow;

  @ViewChild('agGrid') agGrid: AgGridAngular;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.dataUrl).subscribe((data) => {
      this.rowData = data;
      this.loaded = true;
    });
  }

  public onSelectionChanged() {
    this.getSelectedRows();
  }

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map( node => node.data );
    this.selectedRow = selectedData[0];
  }
}
