import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component';
import {HttpClientModule  } from "@angular/common/http";
import { NewsapiservicesService } from './services/newsapiservices.service';
import { TechnwesComponent } from './technwes/technwes.component';
import { BusinessnewsComponent } from './businessnews/businessnews.component';


@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    TechnwesComponent,
    BusinessnewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [NewsapiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
