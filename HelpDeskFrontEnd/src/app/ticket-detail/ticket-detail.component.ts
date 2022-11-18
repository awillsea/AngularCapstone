import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ticket } from '../ticket';
@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
})
export class TicketDetailComponent implements OnInit {
  constructor() { }
  @Input() ticket: Ticket = {
    ticket_id: 0, requester: '', problemdetails: '', phone: '', email: '', resolved: false, resolvedby: '',
    resnotes: '', isfavorite: false,
  }


  @Output() delete: EventEmitter<number> = new EventEmitter<number>();
  @Output() update: EventEmitter<Ticket> = new EventEmitter<Ticket>();


  editMode:boolean = false;
  showMore:boolean = false;

  details() {
    this.showMore=true;
  }
  showLess() {
    this.showMore = false;
  }


  editObj:Ticket ={
    ticket_id: 0, requester: '', problemdetails: '', phone: '', email: '', resolved: false, resolvedby: '',
    resnotes: '', isfavorite: false,
  };

  turnOnEdit(){
    this.editObj.ticket_id = this.ticket.ticket_id,
    this.editObj.requester = this.ticket.requester,
    this.editObj.problemdetails = this.ticket.problemdetails,
    this.editObj.phone = this.ticket.phone,
    this.editObj.email = this.ticket.email,
    this.editObj.resolved = this.ticket.resolved,
    this.editObj.resolvedby = this.ticket.resolvedby,
    this.editObj.resnotes = this.ticket.resnotes,
    this.editObj.isfavorite = this.ticket.isfavorite,
    this.editMode = true;
  }

  deleteMe(){
    this.delete.emit(this.ticket.ticket_id);
  }

  saveChanges(){
    this.editObj.ticket_id = this.ticket.ticket_id;
    this.update.emit(this.editObj);
  }

  cancel(){
      this.editMode = false;
  }

  ngOnInit(): void {
  }
}