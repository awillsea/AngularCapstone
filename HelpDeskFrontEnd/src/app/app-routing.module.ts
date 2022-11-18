import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { FavortiesListComponent } from './favorties-list/favorties-list.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';

const routes: Routes = [

  {path:'',component:UserListComponent},

  {path:'tickets',component:TicketListComponent},

  {path:'favorites',component:FavortiesListComponent}

];


@NgModule({   imports: [RouterModule.forRoot(routes)],   exports: [RouterModule] })
export class AppRoutingModule { }
