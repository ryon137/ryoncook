import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { Blog1Component } from './blog/blog1/blog1.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [{path:'', component: HomepageComponent},{path:'blog', component: BlogComponent},
{path:'blog/internship-report', component: Blog1Component},
{path:'about', component: AboutComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }