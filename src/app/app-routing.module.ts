import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostCreateComponent} from "./Component/post-create/post-create.component";
import {PhotoListComponent} from "./Component/photo-list/photo-list.component";
import {NotFoundComponent} from "./Component/not-found/not-found.component";
import {HomePageComponent} from "./home-page/home-page.component";

const routes: Routes = [
  {path: 'feed', component: PostCreateComponent},
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
