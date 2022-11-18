import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Favorites } from '../favorites';
@Component({
  selector: 'app-favorties-detail',
  templateUrl: './favorties-detail.component.html',
  styleUrls: ['./favorties-detail.component.css']
})
export class FavortiesDetailComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  @Input() favorite: Favorites = {
    favorite_id:0,ticketid:0,personid:0
   }
   @Output() delete: EventEmitter<number> = new EventEmitter<number>();
   @Output() update: EventEmitter<Favorites> = new EventEmitter<Favorites>();
   editMode:boolean = false;
   editObj:Favorites ={
    favorite_id:0,ticketid:0,personid:0
   };
   turnOnEdit(){
     this.editObj.favorite_id = this.favorite.favorite_id,
     this.editObj.ticketid = this.favorite.ticketid,
     this.editObj.personid = this.favorite.personid,
     this.editMode = true;
   }
   deleteMe(){
     this.delete.emit(this.favorite.favorite_id);
   }
   saveChanges(){
     this.editObj.favorite_id = this.favorite.favorite_id;
     this.update.emit(this.editObj);
   }
   cancel(){
       this.editMode = false;
   }
}