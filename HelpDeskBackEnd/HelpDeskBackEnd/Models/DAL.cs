using MySql.Data.MySqlClient;
using Dapper.Contrib.Extensions;
using Dapper;

namespace HelpDeskBackEnd
{
    public class DAL
    {

        //Conection stuff
        public static MySqlConnection DB;

        // Ticket table methods

        public static IEnumerable<Ticket> GetAllTickets()
        {
            return DB.GetAll<Ticket>();
        }

        public static IEnumerable<User> GetAllUsers()  // users
        {
            return DB.GetAll<User>();
        }

        public static IEnumerable<Favorite> GetAllFavorites()  // favorites
        {
            return DB.GetAll<Favorite>();
        }


        public static Ticket AddTicket(Ticket ticket)
        {
            DB.Insert(ticket);
            return ticket;
        }

        public static User AddUser(User user)  // users
        {
            DB.Insert(user);
            return user;
        }

        public static Favorite AddFavorite(Favorite favorite)  //favorites
        {
            DB.Insert(favorite);
            return favorite;
        }

        //For this example we'll have the Delete and Update just return nothing
        public static void Delete(int id)
        {
            DB.Delete(new Ticket { ticket_id = id });
        }

        public static void DeleteUser(int id)  // users
        {
            DB.Delete(new User { user_id = id });
        }

        public static void DeleteFavorite(int id)   //favorites
        {
            DB.Delete(new Favorite { favorite_id = id });
        }

        public static void Update(Ticket Ticket)
        {
            DB.Update(Ticket);
        }

        public static void UpdateUser(User user)  //users
        {
            DB.Update(user);
        }

        public static void UpdateFavorite(Favorite favorite)  //favorites 
        {
            DB.Update(favorite);
        }

    }
}
