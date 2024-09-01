import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import type { Ticket } from './ticket/ticket.model';
import { TicketComponent } from "./ticket/ticket.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  onAdd(ticketData: { title: string; text: string }) {
    const ticket: Ticket = {
      id: crypto.randomUUID.toString(),
      title: ticketData.text,
      request: ticketData.text,
      status: 'open',
    };

    this.tickets.push(ticket);
  }

  onCloseTicketMethod(id: string){
    this.tickets = this.tickets.map(ticket => {
      if(ticket.id === id){
        return {
          ...ticket,
          status: ticket.status = 'closed'
        }
      }

      return ticket
    }

    )
  }
}
