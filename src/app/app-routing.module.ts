import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TenantPageComponent } from './component/tenant-page/tenant-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/tenant', pathMatch: 'full' },
  { path: 'tenant', component: TenantPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
