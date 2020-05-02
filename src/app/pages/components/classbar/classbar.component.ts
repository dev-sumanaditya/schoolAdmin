import { Component, OnInit, Output, EventEmitter, Input, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-classbar',
  templateUrl: './classbar.component.html',
  styleUrls: ['./classbar.component.scss']
})
export class ClassbarComponent implements OnInit, OnDestroy {

  @Output() selected = new EventEmitter();

  public Classes = [
    {
      name: 'Class 6',
      id: '6',
      sections : [
        {name: ' Section A'},
        {name: ' Section B'},
        {name: ' Section C'},
        {name: ' Section D'},
      ]
    },
    {
      name: 'Class 7',
      id: '7',
      sections : [
        {name: ' Section A'},
        {name: ' Section B'},
        {name: ' Section C'},
        {name: ' Section D'},
      ]
    },
    {
      name: 'Class 8',
      id: '8',
      sections : [
        {name: ' Section A'},
        {name: ' Section B'},
        {name: ' Section C'},
        {name: ' Section D'},
      ]
    },
    {
      name: 'Class 9',
      id: '9',
      sections : [
        {name: ' Section A'},
        {name: ' Section B'},
        {name: ' Section C'},
        {name: ' Section D'},
      ]
    }
  ];

  public checked = null;
  public section = null;

  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      section: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  public check() {
    const Data = {
      class: this.checked,
      section: this.form.value.section
    };

    if (this.checked) {
      this.selected.emit(Data);
    } else {
      this.selected.emit(false);
    }
  }

  reset() {
    this.form.value.section = null;
  }

  ngOnDestroy() {
  }

}
