import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperAdminComponent } from './super-admin.component';
const routes: Routes = [
  {
    path:"",
    component:SuperAdminComponent,
    children:[
      {
        path:'',
        redirectTo:"",
        pathMatch:"full"
      },
      {
        path:"add-admin",
        loadChildren: () => import('./add-admin/add-admin.module').then(m => m.AddAdminModule)
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
