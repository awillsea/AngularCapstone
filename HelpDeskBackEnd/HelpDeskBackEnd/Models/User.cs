using MySql.Data.MySqlClient;
using Dapper.Contrib.Extensions;
using Dapper;
namespace HelpDeskBackEnd
{
    [Table("user")]
    public class User
    {
        [Key]
        public int user_id { get; set; }
        public string user_name { get; set; }
        public string user_email { get; set; }
    }
}
