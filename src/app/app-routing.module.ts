import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PhotoListComponent} from "./Component/photo-list/photo-list.component";
import {NotFoundComponent} from "./Component/not-found/not-found.component";
import {HomePageComponent} from "./Component/home-page/home-page.component";
import {FeedComponent} from "./Component/feed/feed.component";

const routes: Routes = [
  {path: 'feed', component: FeedComponent},
  {path: 'create', component: PhotoListComponent},
  {path: 'home', component: HomePageComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
