using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using IntranetAPI.Mappers;
using IntranetAPI.Models;
using IntranetAPI.ModelViews;
using IntranetAPI.Services;
using IntranetAPI.ViewModels;
using EntityState = System.Data.Entity.EntityState;

namespace IntranetAPI.Controllers
{
    [RoutePrefix("api/Users")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class UsersController : ApiController
    {
        private DBContext db = new DBContext();
        EmployeeService  empSrv = new EmployeeService();

        //[HttpGet]
        //[Route("GetUserLogin/{Username}/{Password}")]
        //public User GetEmployeeLogin(string Username, string Password)
        //{
        //    var usr = db.User.Where(data => data.usrName == Username && data.usrPassword == Password).FirstOrDefault();
        //    return usr;
        //}

        [HttpGet]
        [Route("GetUserLogin/{Username}/{Password}/{isWinUsr}")]
        public async Task<IHttpActionResult> GetUserLogin(string Username, string Password, Boolean isWinUsr)
        {
            if (isWinUsr == true)
            {
                //Request by User Only
                var User = db.Employee.Where(cd => cd.accountName == Username).FirstOrDefault();

                if (User == null)
                {
                    return NotFound();
                }
                return Ok(User.MapToEmployeeVM());
            }
            else
            {
                //Request by User and Password for local accounts
                var User = db.Employee.Where(cd => cd.accountName == Username && cd.usrPassword == Password).FirstOrDefault();

                if (User == null)
                {
                    return NotFound();
                }
                var u = User.MapToEmployeeVM();
                return Ok(u);
            }

        }


        // POST: api/Users
        [ResponseType(typeof(EmployeeVM))]
        public async Task<IHttpActionResult> PostUser(EmployeeVM user)
        {
            Employee usr = user.MapToEmployee();

            db.Employee.Add(usr);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = user.empId }, user);
        }



        ////[ResponseType(typeof(void))]
        //[ResponseType(typeof(EmployeeVM))]
        //public async Task<IHttpActionResult> PutEmployee(int id, EmployeeVM employeeVM)
        //{
        //    EmployeeVM empVM = new EmployeeVM();
        //    Employee emp = new Employee();

        //    emp = employeeVM.MapToEmployee();
        //    emp = empSrv.updateEmployee(emp);
        ////    empVM = emp.MapToEmployeeVM();

        //    return CreatedAtRoute("DefaultApi", new { id = empVM.empId }, empVM);
        //}
        // DELETE: api/Users/5
        [ResponseType(typeof(EmployeeVM))]
        public async Task<IHttpActionResult> DeleteUser(int id)
        {
            Employee user = await db.Employee.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }
            if (user != null && user.EmpRoles.Count > 0)
            {
                db.EmpRoles.RemoveRange(db.EmpRoles.Where(e => e.empId == user.empId));
                db.SaveChanges();
            }
            db.Employee.Remove(user);
            await db.SaveChangesAsync();

            return Ok(user);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        //        private bool UserExists(int id)
        //        {
        //            return db.User.Count(e => e.usrId == id) > 0;
        //        }
    }
}