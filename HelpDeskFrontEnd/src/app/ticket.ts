export interface Ticket {
    ticket_id: number,
    requester: string, 
    problemdetails: string,
    phone: string,
    email: string,
    resolved: boolean,
    resolvedby: string,
    resnotes: string,
    isfavorite: boolean
}
