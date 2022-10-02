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
        redirectTo:"super-admin",
        pathMatch:"full"
      },
      {
        path:"add-admin",
        loadChildren: () => import('./add-admin/add-admin.module').then(m => m.AddAdminModule)
      },
      {
        path:"list-admin",
        loadChildren: () => import('./list-admin/list-admin.module').then(m => m.ListAdminModule)
      },
      {
        path:"dashboard",
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
