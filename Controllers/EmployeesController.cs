using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using IntranetAPI.Models;
using IntranetAPI.Services;
using IntranetAPI.Mappers;
using IntranetAPI.ModelViews;
using Microsoft.Ajax.Utilities;
using IntranetAPI.ViewModels;
using IntranetAPI.Helpers;

namespace IntranetAPI.Controllers
{
    [RoutePrefix("api/Employees")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]

    public class EmployeesController : ApiController
    {
        private DBContext db = new DBContext();
        EmployeeService empSrv = new EmployeeService();
        HelpService helpService = new HelpService();

        
        [HttpGet]
        [Route("GetEmployeesNameOnly")]
        public List<EmployeeVM> GetEmployee()
        {
            var employees = db.Employee.ToList();
            Employee newEmployee = new Employee();
            List<EmployeeVM> newEmployees = new List<EmployeeVM>();

            if (employees != null)
            {
                return employees.MapToEmployeeNamesOnlyVMList();
            }
            return newEmployees;
        }

        [HttpGet]
        [Route("GetEmployeesWithAssets")]
        public List<EmployeeVM> GetEmployeesWithAssets()
        {
            List<EmployeeVM> empVMs = new List<EmployeeVM>();
            List<Employee> emps = new List<Employee>();
            emps = db.Employee.ToList();
            empVMs = emps.MapToEmployeeVMList();

            return empVMs;
        }

        [HttpGet]
        [Route("GetEmployeesWithEmails")]
        public List<EmployeeVM> GetEmployeesWithEmails()
        {
            List<EmployeeVM> empVMS = new List<EmployeeVM>();
            List<Employee> emps = new List<Employee>();
            emps = db.Employee.ToList();
            empVMS = emps.MapToEmployeeVMListWithEmail();
            return empVMS;  
        }

        [HttpPost]
        [Route("GetSelectedEmployeesWithEmails")]
        public List<EmployeeVM> GetSelectedEmployeesWithEmails(List<EmployeeVM> empIds)
        {
            List<EmployeeVM> empVMS = new List<EmployeeVM>();
            List<Employee> emps = new List<Employee>();
            if (empIds.Count>0)
            {
                foreach (var em in empIds)
                {
                    emps.Add(db.Employee.Where(e=>e.empId == em.empId).FirstOrDefault());
                }
            }
            empVMS = emps.MapToEmployeeVMListWithEmail();
            return empVMS;
        }


        [HttpGet]
        [Route("GetAllImportedEmployees")]
        public List<ADImportedAccounts> GetAllImportedEmployees()
        {
            List<ADImportedAccounts> importedAccounts = db.ADImportedAccounts.ToList();

            if(importedAccounts.Count > 0)
            {
                importedAccounts = this.empSrv.UpdateImportedAccounts(importedAccounts);

                return importedAccounts;
            } else {
                return importedAccounts;
            }
        }

        [ResponseType(typeof(EmployeeVM))]
        public async Task<IHttpActionResult> GetEmployee(int id)
        {
            Employee employee = await db.Employee.FindAsync(id);

            if (employee == null)
            {
                return NotFound();
            }

            return Ok(employee.MapToEmployeeVM());
        }

        [HttpGet]
        [Route("GetEmployeeByCode/{EmployeeCode}")]
        public string GetEmployeeByCode(string EmployeeCode)
        {
            Employee employee = db.Employee.Where(cd => cd.empHRCode == EmployeeCode).FirstOrDefault();

            if (employee == null)
            {
                return "";
            }
            return employee.empHRCode;
          //  return db.Employee.Where(cd => cd.empHRCode == EmployeeCode).FirstOrDefault().empHRCode;
        }

        [HttpGet]
        [Route("GetEmployeeById/{EmployeeId}")]
        public async Task<IHttpActionResult> GetEmployeeById(int EmployeeId)
        {
            Employee employee = new Employee();
            employee = db.Employee.Where(cd => cd.empId == EmployeeId).FirstOrDefault();

            if (employee == null)
            {
                return NotFound();
            } else
            {
                return Ok(employee.MapToEmployeeVM());
            }  
        }

        [HttpGet]
        [Route("changeEmployeeActivation/{empId}")]
        public EmployeeVM changeEmployeeInActive(int empId)
        {

            Employee employee = new Employee();
            employee = db.Employee.Where(a => a.empId == empId).FirstOrDefault();
            if (employee != null)
            {
                if (employee.EmployeeActive == true)
                {
                    db.Employee.Where(a => a.empId == empId).FirstOrDefault().EmployeeActive = false;
                    db.SaveChanges();

                    var mail0 = true; var mail1 = true; var mail2 = true; var mail3 = true;
                    string emailsTobeCanceled;

                    if (employee.empIndividualEmail0 == null) { employee.empIndividualEmail0 = ""; mail0 = false; }
                    if (employee.empIndividualEmail1 == null) { employee.empIndividualEmail1 = ""; mail1 = false; }
                    if (employee.empIndividualEmail2 == null) { employee.empIndividualEmail2 = ""; mail2 = false; }
                    if (employee.empIndividualEmail3 == null) { employee.empIndividualEmail3 = ""; mail3 = false; }

                    emailsTobeCanceled = "This is a test email, Employee Name: " + employee.empFullName + " is disabled successfully, by User Account: " + employee.accountName
                        + "<br> Following Emails need to be disabled"
                        + "<br>  1 - " + employee.empIndividualEmail0.ToString()
                        + "<br>  2 - " + employee.empIndividualEmail1.ToString()
                        + "<br>  3 - " + employee.empIndividualEmail2.ToString()
                        + "<br>  4 - " + employee.empIndividualEmail3.ToString()
                        ;
                    if (mail0 || mail1 || mail2 || mail3)
                    {
              //          helpService.SendingEmail("abubakr.fathy@gac.com", "Emails need to be deleted", emailsTobeCanceled);
                    }

                    return employee.MapToEmployeeVM();
                }
                else
                {
                    db.Employee.Where(a => a.empId == empId).FirstOrDefault().EmployeeActive = true;
                    db.SaveChanges();
                    return employee.MapToEmployeeVM();
                }
            }
            else
            {
                return employee.MapToEmployeeVM();
            }

        }

        [HttpPost]
        [Route("createEmployeeUser/{id}")]
        public async Task<IHttpActionResult> createEmployeeUser(int id, EmployeeVM empvm)
        {
            Employee employee = empvm.MapToEmployee();
            Employee emp = empSrv.updateEmployeeToUser(employee);
         //   EmployeeVM empvm2 = emp.MapToEmployeeVM();

           //   return CreatedAtRoute("DefaultApi", new { id = empvm2.empId }, empvm2);

              return StatusCode(HttpStatusCode.NoContent);
        }

        [HttpPost]
        [Route("PutEmployee/{id}")]
        public async Task<IHttpActionResult> PutEmployee(int id, EmployeeVM empvm)
        {
            Employee employee = empvm.MapToEmployee();
            Employee emp = empSrv.updateEmployee(employee);
            //   EmployeeVM empvm2 = emp.MapToEmployeeVM();

            //   return CreatedAtRoute("DefaultApi", new { id = empvm2.empId }, empvm2);

            return StatusCode(HttpStatusCode.NoContent);
        }


        [ResponseType(typeof(Employee))]
        public async Task<IHttpActionResult> PostEmployee(EmployeeVM empVM)
        {
            var emp = empVM.MapToEmployee();
       //     int id = Convert.ToInt32(emp.directMngHRcode) ;
            emp.directMngName = empSrv.getEmpNameByHRcode(emp.directMngHRcode).ToString();

            empSrv.addEmployee(emp);

     //       EmployeeVM e = emp.MapToEmployeeVM();

            return CreatedAtRoute("DefaultApi", new { id = emp.empId }, emp);
        }
        
        [HttpPost]
        [Route("SaveAccounts")]
        public async Task<IHttpActionResult> SaveAccounts(List<ADImportedAccounts> accounts)
        {
            List<ADImportedAccounts> updatesImportedAccs = empSrv.UpdateImportedAccounts(accounts);
            List<ADImportedAccounts> savedImportedAccs = empSrv.saveDistributeAccounts(updatesImportedAccs);

            return Ok(savedImportedAccs);
        }

        [HttpPost]
        [Route("UpdateEmployeesFromHRMS")]
        public async Task<IHttpActionResult> UpdateEmployeesFromHRMS(List<EmployeeHRMSVM> employees)
        {
            try
            {
                empSrv.updateEmployeeFromHRMS(employees);
            }
            catch (Exception ex)
            {

                throw;
            }
    
            List<EmployeeHRMSVM> emps = new List<EmployeeHRMSVM>();
            return Ok(emps);
        }

        //[HttpPost]
        //[Route("addEmpToFavourite")]
        //public async Task<IHttpActionResult> addEmpToFavourite(EmployeeVM emp)
        //{

        //    DbContext db = new DbContext();
        //    db.


        //    return Ok(savedImportedAccs);
        //}

        List<Employee> getCurrntEmployees()
        {
            return db.Employee.ToList();
        }

        [HttpPost]
        [Route("AddNewEmployee")]
        public async Task<IHttpActionResult> AddNewEmployee(Employee employee)
        {
            
            db.Employee.Add(employee);
            db.SaveChanges();
           

            return Ok(employee);
        }

        [HttpPost]
        [Route("addImportedAccounts")]
        public async Task<IHttpActionResult> addImportedAccounts(List<ADImportedAccounts> employees)
        {
            return Ok(empSrv.addImportedAccounts(empSrv.UpdateImportedAccounts(employees)));
        }

        [ResponseType(typeof(Boolean))]
        public Boolean DeleteEmployee(int id)
        {
            //    List<Asset> assets = new List<Asset>();
            //    List<AssetVM> assetsVM = new List<AssetVM>();


            //    //if (employee == null)
            //    //{
            //    //    return NotFound();
            //    //}
            //    if (employee.Assets.Count > 0)
            //    {
            //            employee.Assets.ForEach(a =>
            //            {
            //                assets.Add(a);
            //            });
            //            assetsVM = assets.MapToAssetListVM();
            //            return assetsVM;
            //    }
            try
            {

                Employee employee = db.Employee.Find(id);
                db.Employee.Remove(employee);
                db.SaveChanges();

                return true;


            }
            catch (Exception)
            {

                throw;
            }
 
        }

        [Route("DeleteAllEmployees")]
        public string DeleteAllEmployees()
        {
            db.Employee.RemoveRange(db.Employee.ToList());
            db.SaveChanges();

            var employeeeeees = db.Employee.ToList();
            var message = "All Employees have been successfully deleted";
            return message;
        }

        [Route("DeleteAllImportedEmployees")]
        public string DeleteAllImportedEmployees()
        {
            db.ADImportedAccounts.RemoveRange(db.ADImportedAccounts.ToList());
            db.SaveChanges();

            var employeeeeees = db.ADImportedAccounts.ToList();
            var message = "All imported Employees have been successfully deleted";
            return message;
        }
       
        [HttpPost]
        [Route("DeleteSelectedEmployees")]
        public async Task<IHttpActionResult> DeleteSelectedEmployees(List<int> selectedIdsEmps)
        {
            int count = 0;
            selectedIdsEmps.ForEach(id =>
            {
                Employee emp = new Employee();
                emp  = db.Employee.Find(id);
                if (emp != null)
                {
                    var assets = db.Asset.Where(a => a.empId == emp.empId).ToList();
                    if (assets.Count == 0)
                    {
                        try
                        {
                            db.Employee.Remove(emp);
                            db.SaveChanges();
                            count += 1;
                        }
                        catch (Exception ex)
                        {

                      //      throw;
                        }

                    }
                }
            });
 
            return Ok(count);
        }

        [HttpPost]
        [Route("DeleteSelectedUploadedEmployees")]
        public async Task<IHttpActionResult> DeleteSelectedUploadedEmployees(List<int> selectedIdsEmps)
        {
            var qnt = empSrv.deleteSelectedUploadedEmployees(selectedIdsEmps);

            return Ok(qnt);
        }

        [HttpPost]
        [Route("DeleteSelected")]
        public async Task<IHttpActionResult> DeleteSelected(List<ADImportedAccounts> selectedemps)
        {
            selectedemps.ForEach(emp =>
            {
                var employee = db.ADImportedAccounts.Find(emp.ADImportedAccountsId);
                if(employee != null)
                {
                    db.ADImportedAccounts.Remove(employee);
                }
              
            });
            db.SaveChanges();

            return Ok(selectedemps);
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

        [Route("UploadEmplyeeImage")]
        [HttpPost]
        public HttpResponseMessage UploadEmplyeeImage()
        {
            HttpResponseMessage response = new HttpResponseMessage();
            var httpRequest = HttpContext.Current.Request;
            if (httpRequest.Files.Count > 0)
            {
                foreach (string file in httpRequest.Files)
                {
                    var postedFile = httpRequest.Files[file];
                    var localFilePath = @"C:\Data\Development Work\GAC\Projects\IntranetV8\src\assets\img\profile";   //C:\Data\Development Work\GAC\Projects\IntranetV8\src\assets\img\profile        ~/Content/Img/
                    var filePath = HttpContext.Current.Server.MapPath("~/Content/Img/" + postedFile.FileName);
                    postedFile.SaveAs(filePath);
                }
  
            }
            return response; // need to respond with URL
        }

    }

}