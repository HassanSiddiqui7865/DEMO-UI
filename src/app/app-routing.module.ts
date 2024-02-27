import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PackagesComponent } from './packages/packages.component';
import { ServicesComponent } from './services/services.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"packages",component:PackagesComponent},
  {path:"service",component:ServicesComponent},
  {path:"showcase",component:ShowcaseComponent},
  {path:'contact',component:ContactComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration:"top",
  })],
  exports: [RouterModule]
})

export class AppRoutingModule 
{ 
}
