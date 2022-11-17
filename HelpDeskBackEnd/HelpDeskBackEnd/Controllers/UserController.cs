using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HelpDeskBackEnd
{
    [Route("user")]
    [ApiController]
    public class UserController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<User> GetAll()
        {
            return DAL.GetAllUsers();
        }

        [HttpPost]
        public User AddUser(User user)
        {
            return DAL.AddUser(user);
        }

        [HttpDelete("{id}")]
        public void DeleteUser(int id)
        {
            DAL.DeleteUser(id);
        }

        [HttpPut]
        public void UpdateUser(User user)
        {
            DAL.UpdateUser(user);
        }
    }
}
