import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { TenantPageComponent } from './component/pages/tenant-page/tenant-page.component';
import { UserPageComponent } from './component/pages/user-page/user-page.component';
import { GroupPageComponent } from './component/pages/group-page/group-page.component';
import { HomePageComponent } from './component/pages/home-page/home-page.component';
import { AuthGuardService as AuthGuard } from './service/auth-guard-service/auth-guard.service';
import {OauthReturnComponent} from './component/auth-return/oauth-return/oauth-return.component';
import {AppPageComponent} from "./component/pages/app-page/app-page.component";


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'return', component: OauthReturnComponent},
  { path: 'home', component: HomePageComponent},
  { path: 'tenant', component: TenantPageComponent, canActivate: [AuthGuard]},
  { path: 'user', component: UserPageComponent, canActivate: [AuthGuard]},
  { path: 'group', component: GroupPageComponent, canActivate: [AuthGuard]},
  { path: 'app', component: AppPageComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
