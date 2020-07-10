import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddRequestComponent } from './component/add-request/add-request.component';

const routes: Routes = [
 
  {
    path: 'mamList',
    redirectTo: 'mam/sideNav'    
  },
  {
    path: 'addNewRequest',
    component: AddRequestComponent
  },  
  {
    path: 'mam',
    loadChildren: ()=> import('./modules/mam/mam.module').then(m=>m.MamModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
