import { Component, OnInit } from '@angular/core';
import { Favorites } from '../favorites';
import { FavoritesService } from '../favorites.service';
@Component({
  selector: 'app-favorties-list',
  templateUrl: './favorties-list.component.html',
  styleUrls: ['./favorties-list.component.css']
})
export class FavortiesListComponent implements OnInit {
  FavList:Favorites[]=[];
  constructor(private favSrv:FavoritesService) { }
  ngOnInit(): void {
    this.refresh();
  }

  refresh(){
    this.favSrv.getAll((result:Favorites[])=>{this.FavList= result})
  }

  deleteOne(id: number){
  this.favSrv.delete( ()=>{this.refresh()},id)
  }

  updateOne(favorite:Favorites){
    this.favSrv.update(()=>{this.refresh()},favorite)
  }
}