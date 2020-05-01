import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelComponent } from './panel/panel.component';


const routes: Routes = [
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: '', component: PanelComponent, children: [
    {path: 'organisation', loadChildren: () => import('./pages/organisation/organisation.module').then(m => m.OrganisationModule)},
    {path: '', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
