using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HelpDeskBackEnd.Controllers
{
    [Route("ticket")]
    [ApiController]
    public class TicketController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<Ticket> GetAll()
        {
            return DAL.GetAllTickets();
        }

        [HttpPost]
        public Ticket Add(Ticket Ticket)
        {
            return DAL.AddTicket(Ticket);
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            DAL.Delete(id);
        }

        [HttpPut]
        public void Update(Ticket Ticket)
        {
            DAL.Update(Ticket);
        }

        [HttpGet("bookmarks")]
        public List<Ticket> GetFavorites()
        {
            return DAL.GetAllFavorites();
        }
    }
}
