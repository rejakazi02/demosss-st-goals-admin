import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path:"",
    component:AppComponent,
    children:[
      {
        path:'',
        redirectTo:"admin",
        pathMatch:"full"
      },
      {
        path:"admin",
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
      },

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {

  scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'legacy',
    // initialNavigation: 'enabled',
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
