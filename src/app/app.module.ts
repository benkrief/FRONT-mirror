import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {MaterialModule} from "./material/material.module";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HelloWorldComponent} from './Component/hello-world/hello-world.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PostCreationComponent } from './post-creation/post-creation.component';
import {PostCreationService} from "./Services/post-creation-service/post-creation.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FeedComponent } from './feed/feed.component';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    FeedComponent,
    PostCreationComponent,
    FeedComponent

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
  providers: [PostCreationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
