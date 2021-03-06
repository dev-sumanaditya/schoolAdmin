import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganisationRoutingModule } from './organisation-routing.module';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    OrganisationRoutingModule,
    ComponentsModule
  ]
})
export class OrganisationModule { }
