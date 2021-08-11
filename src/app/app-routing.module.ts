import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [{path:'', component: HomepageComponent},{path:'blog', component: BlogComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }