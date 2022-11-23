import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatListComponent } from './Components/cat-list/cat-list.component';
import { CatPostComponent } from './Components/cat-post/cat-post.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cat-list/:id', component: CatListComponent },
  { path: 'cat-post', component: CatPostComponent },
  { path: 'cat-list', component: CatListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }