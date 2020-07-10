import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPersonsComponent } from 'src/app/component/list-persons/list-persons.component';
import { AddPersonComponent } from 'src/app/component/add-person/add-person.component';
import { SideNavComponent } from 'src/app/component/side-nav/side-nav.component';


const routes: Routes = [{
    path: 'sideNav',
    component: SideNavComponent,
    children: [{
      path: '',
      component: ListPersonsComponent,
      outlet: 'mainPanel'
    },
    {
      path: 'addPerson',
      component: AddPersonComponent,
      outlet: 'mainPanel'
    },
    {
      path: 'listPersons',
      component: ListPersonsComponent,
      outlet: 'mainPanel'
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MamRoutingModule { }
