import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PostListComponent} from './Component/post-list/post-list.component';
import {PostCreateComponent} from './Component/post-create/post-create.component';
import {FormsModule} from "@angular/forms";
import { HomePageComponent } from './home-page/home-page.component';
import { PhotoListComponent } from './Component/photo-list/photo-list.component';
import { NotFoundComponent } from './Component/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostCreateComponent,
    HomePageComponent,
    PhotoListComponent,
    NotFoundComponent
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
