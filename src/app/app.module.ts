import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { AgGridModule } from 'ag-grid-angular';



@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
