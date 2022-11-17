using MySql.Data.MySqlClient;
using Dapper.Contrib.Extensions;
using Dapper;
namespace HelpDeskBackEnd
{
    [Table("favorites")]
    public class Favorite
    {
        [Key]
        public int favorite_id { get; set; }
        public int ticketid { get; set; }
        public int personid { get; set; }
    }
}
