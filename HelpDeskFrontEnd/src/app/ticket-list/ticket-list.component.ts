import { Component, OnInit } from '@angular/core';
import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';
import { FavoritesService } from '../favorites.service';

@Component({
	selector: 'app-ticket-list',
	templateUrl: './ticket-list.component.html',
	styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
	TicketList: Ticket[] = [];
	
	constructor(private ticketSrv:TicketService) { }

	ngOnInit(): void {
		this.refresh();
	}

	refresh(){
		this.ticketSrv.getAll((result:Ticket[])=>{this.TicketList= result});
	}

	deleteOne(id: number){
		this.ticketSrv.delete( ()=>{this.refresh()},id);
	}

	updateOne(ticket:Ticket){
		this.ticketSrv.update(()=>{this.refresh()},ticket);
	}

	addMode:boolean = false;
	turnOnAddMode(){
  		this.addMode = true;
	}

	turnOffAddMode(){
		  		this.addMode = false;
			}


	newTicket:Ticket ={ ticket_id: 0, requester: '', problemdetails: '', phone: '', email: '', resolved: false, resolvedby: '',
	resnotes: '', isfavorite: false,};

	addTicket(){
  		this.ticketSrv.add(()=>{this.refresh()},this.newTicket)

	}

	


}