import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { User } from '../user';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  @Input() user: User = {
   user_id:0,user_name:'',user_email:'',
  }
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();
  @Output() update: EventEmitter<User> = new EventEmitter<User>();
  editMode:boolean = false;
  editObj:User ={
    user_id:0,user_name:'',user_email:'',
  };
  turnOnEdit(){
    this.editObj.user_id = this.user.user_id,
    this.editObj.user_name = this.user.user_name,
    this.editObj.user_email = this.user.user_email,
    this.editMode = true;
  }
  deleteMe(){
    this.delete.emit(this.user.user_id);
  }
  saveChanges(){
    this.editObj.user_id = this.user.user_id;
    this.update.emit(this.editObj);
  }
  cancel(){
      this.editMode = false;
  }
}