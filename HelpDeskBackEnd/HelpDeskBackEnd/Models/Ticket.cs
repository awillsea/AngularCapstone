using MySql.Data.MySqlClient;
using Dapper.Contrib.Extensions;
using Dapper;

namespace HelpDeskBackEnd
{
    [Table("ticket")]
    public class Ticket
    {
        [Key]
        public int ticket_id { get; set; }
        public string requester { get; set; }
        public string problemdetails { get; set; }
        public string phone { get; set; }
        public string email { get; set; }
        public bool resolved { get; set; }
        public string resolvedby { get; set; }
        public string resnotes { get; set; }
        public bool isfavorite { get; set; }
     }
}
