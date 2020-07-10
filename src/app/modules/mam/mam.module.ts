import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPersonComponent } from 'src/app/component/add-person/add-person.component';
import { ListPersonsComponent } from 'src/app/component/list-persons/list-persons.component';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatDialogModule } from '@angular/material/dialog'
import { MatMenuModule } from '@angular/material/menu'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SideNavComponent } from 'src/app/component/side-nav/side-nav.component';
import { MamRoutingModule } from './mam-routing.module';
import {MatDividerModule} from '@angular/material/divider';
@NgModule({
  declarations: [
    AddPersonComponent, 
    ListPersonsComponent,
    SideNavComponent],
  imports: [
    MamRoutingModule,
    CommonModule,
    MatSidenavModule,
    MatDialogModule,
    MatMenuModule,
    MatDividerModule ,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MamModule { }
