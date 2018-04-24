import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TenantPageComponent } from './component/pages/tenant-page/tenant-page.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {TablesModule} from 'xynga-table';
import {FormsModule} from '@angular/forms';
import {ContainersModule} from 'xynga-containers';
import {HttpClientModule} from '@angular/common/http';
import {TenantService} from './service/tenant-service/tenant.service';
import {TenantDisplayAppsComponent} from './component/tenant-display-apps/tenant-display-apps.component';
import { PageHeaderComponent } from './component/page-header/page-header.component';
import { TabListComponent} from 'xynga-navigation';
import { UserPageComponent} from './component/pages/user-page/user-page.component';
import { HomePageComponent } from './component/pages/home-page/home-page.component';
import { AuthGuardService} from './service/auth-guard-service/auth-guard.service';
import { AuthService } from './service/auth-service/auth.service';
import { OauthReturnComponent } from './component/auth-return/oauth-return/oauth-return.component';
import { AppPageComponent } from './component/pages/app-page/app-page.component';
import { GroupPageComponent } from './component/pages/group-page/group-page.component';
import {WebService} from "xynga-web-services";


@NgModule({
  declarations: [
    AppComponent,
    TenantPageComponent,
    UserPageComponent,
    TenantDisplayAppsComponent,
    PageHeaderComponent,
    TabListComponent,
    UserPageComponent,
    HomePageComponent,
    OauthReturnComponent,
    AppPageComponent,
    GroupPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    TablesModule,
    FormsModule,
    ContainersModule,
    HttpClientModule
  ],
  providers: [TenantService, AuthGuardService, AuthService, WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
