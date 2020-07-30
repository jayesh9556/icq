import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "./layout.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ServicedetailComponent } from "./servicedetail/servicedetail.component";
import { MybookingComponent } from './mybooking/mybooking.component';
import { ContactComponent } from './contact/contact.component';
import { TermsComponent } from './terms/terms.component';
import { PolicyComponent } from './policy/policy.component';
import { BlogComponent } from './blog/blog.component';
import { ServicedetailinnerComponent } from './servicedetailinner/servicedetailinner.component';
import { DeliveryAddressComponent } from './delivery-address/delivery-address.component';


const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "", redirectTo: "/DeliveryAddress", pathMatch: "full" },
      { path: "home", component: HomeComponent },
      { path: "about", component: AboutComponent },
      { path: "servicedetail", component: ServicedetailComponent },
      { path: "servicedetailinner", component: ServicedetailinnerComponent },
      { path: "mybooking", component: MybookingComponent },
      { path: "contact", component: ContactComponent },
      { path: "terms", component: TermsComponent },
      { path: "policy", component: PolicyComponent },
      { path: 'blog', loadChildren: () => import('./blog/Blog.module').then(m => m.BlogModule) },
      { path: "DeliveryAddress", component: DeliveryAddressComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule { }
