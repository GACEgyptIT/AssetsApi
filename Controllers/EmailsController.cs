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
using IntranetAPI.Helpers;
using IntranetAPI.Models;
using IntranetAPI.ModelViews;

namespace IntranetAPI.Controllers
{
    [RoutePrefix("api/Emails")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class EmailsController : ApiController
    {
        private DBContext db = new DBContext();
        HelpService helpService = new HelpService();

        //Email
        [ResponseType(typeof(EmployeeVM))]
        public async Task<IHttpActionResult> PostEmployee(EmployeeVM employee)
        {
            var valid = true;
            string emailsTobeCanceled;

            if (employee.empIndividualEmail0 == null) { employee.empIndividualEmail0 = ""; }
            if (employee.empIndividualEmail1 == null) { employee.empIndividualEmail1 = ""; }
            if (employee.empIndividualEmail2 == null) { employee.empIndividualEmail2 = ""; }
            if (employee.empIndividualEmail3 == null) { employee.empIndividualEmail3 = ""; }

            emailsTobeCanceled = "This is a test email, Employee Name: " + employee.empFullName + " is disabled successfully, by User Account: " + employee.accountName
                + "<br> Following Emails need to be disabled"
                + "<br>  1 - " + employee.empIndividualEmail0.ToString()
                + "<br>  2 - " + employee.empIndividualEmail1.ToString()
                + "<br>  3 - " + employee.empIndividualEmail2.ToString()
                + "<br>  4 - " + employee.empIndividualEmail3.ToString()
                ;
            if(valid)
            {
                helpService.SendingEmail("abubakr.fathy@gac.com", "Emails need to be deleted", emailsTobeCanceled);
            }
         

           // await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = employee.empId }, employee);
        }



        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool EmployeeExists(int id)
        {
            return db.Employee.Count(e => e.empId == id) > 0;
        }
    }
}