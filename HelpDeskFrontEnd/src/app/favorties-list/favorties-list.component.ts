import { Component, OnInit } from '@angular/core';
import { Favorites } from '../favorites';
import { FavoritesService } from '../favorites.service';
import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';
@Component({
  selector: 'app-favorties-list',
  templateUrl: './favorties-list.component.html',
  styleUrls: ['./favorties-list.component.css']
})
export class FavortiesListComponent implements OnInit {
  FavList:Ticket[]=[];
  constructor(private TicketSrv: TicketService) { }
  
  
  ngOnInit(): void {
    this.refresh();
  }

   refresh(){
    this.TicketSrv.getfavorites((result:Ticket[])=>{this.FavList= result})
  }

  /*
  deleteOne(id: number){
  this.favSrv.delete( ()=>{this.refresh()},id)
  }

  updateOne(favorite:Favorites){
    this.favSrv.update(()=>{this.refresh()},favorite)
  } */
}