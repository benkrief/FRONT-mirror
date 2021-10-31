import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {MaterialModule} from "./material/material.module";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HelloWorldComponent} from './Component/hello-world/hello-world.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PostCreationComponent } from './post-creation/post-creation.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    PostCreationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
