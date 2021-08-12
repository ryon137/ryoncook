import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { Blog1Component } from './blog/blog1/blog1.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [{path:'', component: HomepageComponent},{path:'blog', component: BlogComponent},{path:'blog/blog1', component: Blog1Component}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }