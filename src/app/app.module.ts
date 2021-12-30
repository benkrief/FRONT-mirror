import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PostListComponent} from './Component/post-list/post-list.component';
import {PostCreateComponent} from './Component/post-create/post-create.component';
import {HomePageComponent} from './Component/home-page/home-page.component';
import {NotFoundComponent} from './Component/not-found/not-found.component';

import {ModalPostCreationComponent} from './Component/modal-post-creation/modal-post-creation.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BtnCreatePostComponent} from './Component/btn-create-post/btn-create-post.component';
import {MatButtonModule} from "@angular/material/button";
import {FeedComponent} from './Component/feed/feed.component';
import {MaterialModule} from "./Material/material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NavigationBarComponent} from './Component/navigation-bar/navigation-bar.component';
import { MapComponent } from './Component/map/map.component';
import { MyItineraryComponent } from './Component/my-itinerary/my-itinerary.component';
import { BtnPlanMyTripComponent } from './Component/btn-plan-my-trip/btn-plan-my-trip.component';
import { PlanMyTripPopUpComponent } from './Component/plan-my-trip-pop-up/plan-my-trip-pop-up.component';
import {MatStepperModule} from "@angular/material/stepper";

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostCreateComponent,
    HomePageComponent,
    NotFoundComponent,
    BtnCreatePostComponent,
    ModalPostCreationComponent,
    FeedComponent,
    NavigationBarComponent,
    MapComponent,
    MyItineraryComponent,
    BtnPlanMyTripComponent,
    PlanMyTripPopUpComponent
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      BrowserAnimationsModule,
      MaterialModule,
      ReactiveFormsModule,
      MatButtonModule,
      MatStepperModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
