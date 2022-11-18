import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  UserList:User[] = [];
  constructor(private userSrv:UserService) { }
  ngOnInit(): void {
    this.refresh();
  }
  refresh(){
    this.userSrv.getAll((result:User[])=>{this.UserList= result})
  }
deleteOne(id: number){
  this.userSrv.delete( ()=>{this.refresh()},id)
}
updateOne(user:User){
  this.userSrv.update(()=>{this.refresh()},user)
}
}