import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path:"",
    component:PagesComponent,
    children:[
      {
        path:'',
        redirectTo:"super-admin",
        pathMatch:"full"
      },
      // {
      //   path:"super-admin",
      //   loadChildren: () => import('./super-admin/super-admin-components/sp-admin/sp-admin.module').then(m => m.SpAdminModule)
      // },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
