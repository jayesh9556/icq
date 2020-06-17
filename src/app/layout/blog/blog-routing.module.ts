import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog.component';
import { BlogCategoryComponent } from './blog-category/blog-category.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogdetailComponent } from './blogdetail/blogdetail.component';


const routes: Routes = [
  {
    path: "", component: BlogComponent,
    children: [
      { path: "", component: BlogCategoryComponent },
      { path: "blog-list", component: BlogListComponent },
      { path: "blog-detail", component: BlogdetailComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
