import { Component, OnInit } from '@angular/core';
import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';

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
}