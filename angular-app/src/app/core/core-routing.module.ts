import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageLayoutComponent } from './../shared/components/page-layout/page-layout.component';
import { PanelLayoutComponent } from './../shared/components/panel-layout/panel-layout.component';

const routes: Routes = [{
  path: 'dashboard',
  component: PanelLayoutComponent,
  children: [
    { path: '', loadChildren: './dashboard/dashboard.module#DashboardModule' }
  ]
}, {
  path: '',
  component: PageLayoutComponent,
  children: [
    { path: 'account', loadChildren: './account/account.module#AccountModule' },
    { path: 'page-not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: 'internal-error', loadChildren: './internal-error/internal-error.module#InternalErrorModule' },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: '/page-not-found' }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
