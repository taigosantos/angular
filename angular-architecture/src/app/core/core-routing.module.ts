import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageLayoutComponent } from './page-layout/page-layout.component';
import { PanelLayoutComponent } from './panel-layout/panel-layout.component';

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
    { path: 'page-not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: 'internal-error', loadChildren: './internal-error/internal-error.module#InternalErrorModule' },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: 'page-not-found', pathMatch: 'full' }
  ]
}];

// { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
// { path: 'page-not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
// { path: 'internal-error', loadChildren: './internal-error/internal-error.module#InternalErrorModule' },

// { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
// { path: '**', redirectTo: 'page-not-found', pathMatch: 'full' }

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
