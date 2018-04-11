import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TenantPageComponent } from './component/tenant-page/tenant-page.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {TablesModule} from 'xynga-table';
import {FormsModule} from '@angular/forms';
import {ContainersModule} from 'xynga-containers';
import {HttpClientModule} from '@angular/common/http';
import {TenantService} from './service/tenant-service/tenant.service';
import {TenantDisplayAppsComponent} from './component/tenant-display-apps/tenant-display-apps.component';


@NgModule({
  declarations: [
    AppComponent,
    TenantPageComponent,
    TenantDisplayAppsComponent
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
  providers: [TenantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
