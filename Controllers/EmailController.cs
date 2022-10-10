//using IntranetAPI.Helpers;
//using IntranetAPI.Models;
//using IntranetAPI.ModelViews;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;
//using System.Web;
//using System.Web.Http.Cors;
//using System.Web.Http.Results;
//using System.Web.Mvc;

//namespace IntranetAPI.Controllers
//{
//    [RoutePrefix("api/Email111")]
//    [EnableCors(origins: "*", headers: "*", methods: "*")]
//    public class EmailController : Controller
//    {
//        HelpService helpService = new HelpService();

//        //[Route("SendEmail111")]
//        //[HttpPost]
//        //public async Task<System.Web.Http.IHttpActionResult> SendEmail(EmployeeVM body)
//        //{
//        //    //string emailsTobeCanceled;

//        //    //emailsTobeCanceled = "This is a test email, Employee Name: " + employee.empFullName + " is disabled successfully, by User: " 
//        //    //    + "<br> Following Emails need to be disabled"
//        //    //    + "<br>  1 - " + employee.empIndividualEmail0.ToString()
//        //    //    + "<br>  2 - " + employee.empIndividualEmail1.ToString()
//        //    //    + "<br>  3 - " + employee.empIndividualEmail2.ToString()
//        //    //    + "<br>  4 - " + employee.empIndividualEmail3.ToString()
//        //    //    ;

//        //    //helpService.SendingEmail("abubakr.fathy@gac.com", "Emails need to be deleted", emailsTobeCanceled);

//        //    EmployeeVM employee = new EmployeeVM();


//        //    return true;
//        //}


//    }
//}