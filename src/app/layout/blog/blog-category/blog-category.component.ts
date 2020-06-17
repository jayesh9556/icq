import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';

import blogArray from "../../../resources/blog.json";

@Component({
  selector: 'app-blog-category',
  templateUrl: './blog-category.component.html',
  styleUrls: ['./blog-category.component.css']
})
export class BlogCategoryComponent implements OnInit, AfterViewInit {

  public categorys: { category_img: string; category_titel: string; category_desc: string; }[] = blogArray;

  name = 'Angular';
  slideNo = 0;
  withAnim = true;
  resetAnim = true;


  @ViewChild("myCarousel", { static: false }) myCarousel: NguCarousel<any>;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 3, md: 4, lg: 4, all: 0 },
    load: 1,
    interval: { timing: 4000, initialDelay: 999000 },
    loop: true,
    touch: true,
    velocity: 0.2,
  };

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  reset() {
    this.myCarousel.reset(!this.resetAnim);
  }

  moveTo(slide) {
    this.myCarousel.moveTo(slide, !this.withAnim);
  }


}
