import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {MaterialModule} from "./material/material.module";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HelloWorldComponent} from './Component/hello-world/hello-world.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ModalPostCreationComponent } from './modal-post-creation/modal-post-creation.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BtnCreatePostComponent } from './btn-create-post/btn-create-post.component';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    BtnCreatePostComponent,
    ModalPostCreationComponent,
    BtnCreatePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
