import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from "./Component/not-found/not-found.component";
import {HomePageComponent} from "./Component/home-page/home-page.component";
import {FeedComponent} from "./Component/feed/feed.component";
import {MapComponent} from "./Component/map/map.component";

const routes: Routes = [
  {path: 'feed', component: FeedComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'map', component: MapComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
