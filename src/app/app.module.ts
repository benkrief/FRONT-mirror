import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HelloWorldComponent} from './Component/hello-world/hello-world.component';
import {PostListComponent} from './Component/post-list/post-list.component';
import {PostCreateComponent} from './Component/post-create/post-create.component';
import {FormsModule} from "@angular/forms";
import { HomePageComponent } from './home-page/home-page.component';
import { PhotoListComponent } from './Component/photo-list/photo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    PostListComponent,
    PostCreateComponent,
    HomePageComponent,
    PhotoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
