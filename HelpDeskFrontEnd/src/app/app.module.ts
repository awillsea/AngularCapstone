import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { FavortiesDetailComponent } from './favorties-detail/favorties-detail.component';
import { FavortiesListComponent } from './favorties-list/favorties-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketDetailComponent,
    TicketListComponent,
    UserDetailComponent,
    UserListComponent,
    FavortiesDetailComponent,
    FavortiesListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
