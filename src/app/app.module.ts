import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TenantPageComponent } from './component/tenant-page/tenant-page.component';


@NgModule({
  declarations: [
    AppComponent,
    TenantPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
