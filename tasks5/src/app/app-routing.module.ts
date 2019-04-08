import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from './main/main.component';
import { Show404Component } from './show404/show404.component';
import { AboutComponent } from './about/about.component';
const appRoutes: Routes = [
  {
    path: "",
    component: MainComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
   {
    path: "**",
    component: Show404Component
  }
  
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)
    
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
