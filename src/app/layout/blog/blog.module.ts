import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguCarouselModule } from "@ngu/carousel";

import { BlogRoutingModule } from './blog-routing.module';
import { BlogCategoryComponent } from './blog-category/blog-category.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogdetailComponent } from './blogdetail/blogdetail.component';


@NgModule({
  declarations: [BlogCategoryComponent, BlogListComponent, BlogdetailComponent],
  imports: [
    CommonModule,
    NguCarouselModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
