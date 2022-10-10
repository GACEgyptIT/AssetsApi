using IntranetAPI.Models;
using IntranetAPI.ModelViews;
using IntranetAPI.ViewModels;
using Microsoft.Ajax.Utilities;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using EntityState = System.Data.Entity.EntityState;

namespace IntranetAPI.Services
{
    public class EmployeeService
    {
        private DBContext db = new DBContext();

        // GET
        public Role GetRoleById(int id)
        {
            return db.Roles.Find(id);
        }
        public string getEmpNameByHRcode(string code)
        {
            Employee emp = new Employee();

            emp = db.Employee.Where(e => e.empHRCode == code.Trim()).FirstOrDefault();
            string name = "No Entry";
            if (emp != null)
            {
                name = emp.empFullName;
            }
            return name;
        }
        public string getEmpNameByEmpId(int? id)
        {
            Employee emp = new Employee();

            emp = db.Employee.Where(e => e.empId == id).FirstOrDefault();
            string name = "No Entry";
            if (emp != null)
            {
                name = emp.empFullName;
            }
            return name;
        }
        public string getBranchNameByEmpId(int? id)
        {
            Employee emp = new Employee();

            emp = db.Employee.Where(e => e.empId == id).FirstOrDefault();
            string name = "No Entry";
            if (emp != null)
            {
                name = emp.Branch?.brnName;
            }
            return name;
        }
        public string getCompanyNameByEmpId(int? id)
        {
            Employee emp = new Employee();

            emp = db.Employee.Where(e => e.empId == id).FirstOrDefault();
            string name = "No Entry";
            if (emp != null)
            {
                name = emp.Company?.comName;
            }
            return name;
        }
        public Employee getEmpByHrCode(string HrCode)
        {
            Employee emp = db.Employee.Where(e => e.empHRCode == HrCode).FirstOrDefault();
            if (emp != null)
            {
                return emp;
            }
            else
            {
                return emp;
            }

        }
        public string getEmpNameByHrCode(string HrCode)
        {
            Employee emp = db.Employee.Where(e => e.empHRCode == HrCode).FirstOrDefault();
            if (emp != null)
            {
                return emp.empFullName;
            }
            else
            {
                Employee e = new Employee();
                e.empFullName = "missing";
                return e.empFullName;
            }
        }

        public List<Employee> getAllEmployees()
        {
            return db.Employee.ToList();
        }
        public List<ADImportedAccounts> getAllImportedEmployees()
        {
            return db.ADImportedAccounts.ToList();
        }
        public List<ExcelEmployeeUploadAPI> getAllUploadedEmployees()
        {
            return db.ExcelEmployeeUploadAPI.ToList();
        }
        public ExcelEmployeeUploadAPI getUploadedEmpByHrCode(string HrCode)
        {
            ExcelEmployeeUploadAPI emp = db.ExcelEmployeeUploadAPI.Where(e => e.EmpCode == HrCode).FirstOrDefault();
            if (emp != null)
            {
                return emp;
            }
            else
            {
                return emp;
            }

        }
        public int getGenEmailIdByAddress(string address)
        {
            int id = 0;
            id = db.GenaricEmails.Where(e => e.genEmailAddress == address).Select(em => em.genEmailId).FirstOrDefault();
            if (id != null)
            {
                return id;
            }
            return id;
        }
        public int getArchiveEmailIdByAddress(string address)
        {
            int id = 0;
            id = db.ADArchiveAccount.Where(e => e.archName == address).Select(em => em.ADArchiveAccountId).FirstOrDefault();
            if (id != null)
            {
                return id;
            }
            return id;
        }
        public int getPositionIdByName(string name)
        {
            int id = 0;
            id = db.PositionTitles.Where(e => e.posTitle == name).Select(em => em.posId).FirstOrDefault();
            if (id != null)
            {
                return id;
            }
            return id;
        }
        public Nullable<int> getEmployeeIdByName(string name)
        {
            Nullable<int> id = 0;
            id = db.Employee.Where(e => e.empHRCode == name).Select(em => em.empId).FirstOrDefault();
            if (id != null)
            {
                return id;
            }
            return id;
        }
        public int getDepartmentIdByName(string name)
        {
            int id = 0;
            id = db.Department.Where(e => e.dptName == name).Select(em => em.dptId).FirstOrDefault();
            if (id != null)
            {
                return id;
            }
            return id;
        }
        public int getBranchtIdByName(string name)
        {
            int id = 0;
            id = db.Branch.Where(e => e.brnName == name).Select(em => em.brnId).FirstOrDefault();
            if (id != null)
            {
                return id;
            }
            return id;
        }
        public int getCompanytIdByName(string name)
        {
            int id = 0;
            id = db.Company.Where(e => e.comName == name).Select(em => em.comId).FirstOrDefault();
            if (id != null)
            {
                return id;
            }
            return id;
        }

        //ADD
        public Employee addEmployee(Employee employee)
        {
            try
            {
                db.Employee.Add(employee);
                db.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }

            return employee;
        }
        public List<Employee> addEmployeeList(List<Employee> employees)
        {
            db.Employee.AddRange(employees);
            db.SaveChanges();
            return employees;
        }
        public List<ADImportedAccounts> addImportedAccounts(List<ADImportedAccounts> accounts)
        {
            db.ADImportedAccounts.RemoveRange(db.ADImportedAccounts.ToList());
            db.SaveChanges();

            db.ADImportedAccounts.AddRange(accounts);
            db.SaveChanges();
            return accounts;
        }
        public ExcelEmployeeUploadAPI addUploadedEmployee(ExcelEmployeeUploadAPI employee)
        {
            db.ExcelEmployeeUploadAPI.Add(employee);
            db.SaveChanges();
            return employee;
        }
        public List<ADArchiveAccount> addArchiveAccs(List<ADArchiveAccount> arcAccounts)
        {
            db.ADArchiveAccount.AddRange(arcAccounts);
            db.SaveChanges();
            return arcAccounts;
        }
        public List<ADServiceAccount> addServiceAccs(List<ADServiceAccount> srvAccounts)
        {
            db.ADServiceAccount.AddRange(srvAccounts);
            db.SaveChanges();
            return srvAccounts;
        }
  
        //UPDATE
        public List<ADImportedAccounts> saveDistributeAccounts(List<ADImportedAccounts> accounts)
        {
            List<Employee> newEmployees = new List<Employee>();
            List<ADArchiveAccount> newArchiveAccs = new List<ADArchiveAccount>();
            List<ADServiceAccount> newServiceAccs = new List<ADServiceAccount>();

            accounts.ForEach(acc =>
            {
                Employee newEmployee = new Employee();
                ADArchiveAccount newArchive = new ADArchiveAccount();
                ADServiceAccount newService = new ADServiceAccount();

                if (acc.IsExist == false)
                {
                    if (acc.accountType == "Archive")
                    {
                        newArchive.archName = acc.accountName;
                        newArchiveAccs.Add(newArchive);
                    }
                    if (acc.accountType == "Service")
                    {
                        newService.saName = acc.accountName;
                        newServiceAccs.Add(newService);
                    }
                    if (acc.accountType == "Employee")
                    {
                        newEmployee.accountName = acc.accountName;
                        newEmployee.empFullName = acc.displayName;
                        if (acc.email != "")
                        {
                            newEmployee.empIndividualEmail1 = null;
                        }
                        else
                        {
                            newEmployee.empIndividualEmail1 = acc.email;
                        }
             
                        newEmployee.empHRCode = acc.hrCode;
                        newEmployees.Add(newEmployee);
                    }
                }
            });

            var addedEmp = addEmployeeList(newEmployees);
            var addedArch = addArchiveAccs(newArchiveAccs);
            var addedSrv = addServiceAccs(newServiceAccs);

            return accounts;
        }
        public List<ADImportedAccounts> UpdateImportedAccounts(List<ADImportedAccounts> accounts)
        {
            List<ADImportedAccounts> updatedImportedAccs = new List<ADImportedAccounts>();

            accounts.ForEach(acc =>
            {
                if (acc.archiveAccount)
                {
                    acc.accountType = "Archive";
                    ADArchiveAccount arc = db.ADArchiveAccount.Where(e => e.archName == acc.accountName.Trim()).FirstOrDefault();
                    if (arc != null)
                    {
                        acc.IsExist = true;
                    }
                    else
                    {
                        acc.IsExist = false;
                    }
                }
                if (acc.serviceAccount)
                {
                    acc.accountType = "Service";
                    ADServiceAccount srv = db.ADServiceAccount.Where(e => e.saName == acc.accountName.Trim()).FirstOrDefault();
                    if (srv != null)
                    {
                        acc.IsExist = true;
                    }
                    else
                    {
                        acc.IsExist = false;
                    }
                }
                if (!acc.archiveAccount && !acc.serviceAccount && acc.enabled)
                {
                    acc.accountType = "Employee";
                    Employee emp = db.Employee.Where(e => e.accountName == acc.accountName.Trim() || e.empHRCode == acc.hrCode.Trim()).FirstOrDefault();
                    if (emp != null)
                    {
                        acc.IsExist = true;
                    }
                    else
                    {
                        acc.IsExist = false;
                    }
                }
                if (acc.enabled == false)
                {
                    acc.accountType = "disEmp";
                    Employee emp = db.Employee.Where(e => e.accountName == acc.accountName).FirstOrDefault();
                    if (emp != null)
                    {
                        acc.IsExist = true;
                    }
                    else
                    {
                        acc.IsExist = false;
                    }
                }
                updatedImportedAccs.Add(acc);
                //if (acc.hrCode == "9872")
                //{

                //}
            });
  
            return updatedImportedAccs;
        }

        //public Boolean isHRCodeExist(Employee employee)
        //{
        //    Employee EmployeeEntity = new Employee();
        //    EmployeeEntity = db.Employee.Where(e => e.empHRCode == employee.empHRCode).FirstOrDefault();
        //    if (EmployeeEntity != null)
        //    {
        //        return true;
        //    }
        //    else
        //    {
        //        return false;
        //    }
        //}

        public Employee updateEmployeeToUser(Employee employee)
        {
            Employee EmployeeEntity = new Employee();
            EmployeeEntity = db.Employee.Where(e => e.empId == employee.empId).FirstOrDefault();

            if (EmployeeEntity != null && EmployeeEntity.EmpRoles.Count > 0)
            {
                db.EmpRoles.RemoveRange(db.EmpRoles.Where(e => e.empId == EmployeeEntity.empId));
                db.SaveChanges();

            }
            if (EmployeeEntity != null && db.Entry(EmployeeEntity).State != EntityState.Detached)   //Framwaork EntityState needs refrance (using System.Data.Entity;)
            {
                db.Entry(EmployeeEntity).State = EntityState.Detached;  //Detach the OLD Employee  

                EmployeeEntity.isUsertoLogin = true;
                EmployeeEntity.accountName = employee.accountName;
                EmployeeEntity.empFullName = employee.empFullName;
                EmployeeEntity.usrPassword = employee.usrPassword;
                EmployeeEntity.EmpImg = employee.EmpImg;
                EmployeeEntity.brnId = employee.brnId;
                EmployeeEntity.dptId = employee.dptId;
                EmployeeEntity.EmpRoles = employee.EmpRoles;

                db.Employee.Add(EmployeeEntity);             //Attach the NEW Departmnet
                db.Entry(EmployeeEntity).State = EntityState.Modified;
                db.SaveChanges();
            }

            return employee;
        }
        public Employee updateEmployee(Employee employee)
        {
            Employee EmployeeEntity = new Employee();
            EmployeeEntity = db.Employee.Where(e=> e.empHRCode == employee.empHRCode.Trim()).FirstOrDefault();

            if (EmployeeEntity != null && EmployeeEntity.EmpGmails.Count > 0)
            {
                db.EmpGmails.RemoveRange(db.EmpGmails.Where(e => e.empId == EmployeeEntity.empId));
                db.SaveChanges();
            }
            if (EmployeeEntity != null &&  EmployeeEntity.EmpArchives.Count > 0)
            {
                db.EmpArchAccount.RemoveRange(db.EmpArchAccount.Where(e => e.empId == EmployeeEntity.empId));
                db.SaveChanges();
         
            }
            if (EmployeeEntity != null && EmployeeEntity.EmpRoles.Count > 0)
            {
                db.EmpRoles.RemoveRange(db.EmpRoles.Where(e => e.empId == EmployeeEntity.empId));
                db.SaveChanges();
           
            }
            if (EmployeeEntity != null && db.Entry(EmployeeEntity).State != EntityState.Detached)   //Framwaork EntityState needs refrance (using System.Data.Entity;)
            {
                db.Entry(EmployeeEntity).State = EntityState.Detached;  //Detach the OLD Employee

                EmployeeEntity.accountName = employee.accountName;
                EmployeeEntity.usrPassword = employee.usrPassword;
                EmployeeEntity.Assets = employee.Assets;
                //     EmployeeEntity.Branch = employee.Branch;
                //      EmployeeEntity.Company = employee.Company;
                //      EmployeeEntity.Department = employee.Department;
                EmployeeEntity.dptId = employee.dptId;
                EmployeeEntity.brnId = employee.brnId;
                EmployeeEntity.comId = employee.comId;
                EmployeeEntity.posId = employee.posId;
                EmployeeEntity.directMngHRcode = employee.directMngHRcode;
                EmployeeEntity.directMngName = employee.directMngName;
                EmployeeEntity.empAddress = employee.empAddress;
                EmployeeEntity.empBirhtday = employee.empBirhtday;
                EmployeeEntity.empCreationDate = employee.empCreationDate;
                EmployeeEntity.empExt = employee.empExt;
                EmployeeEntity.empFirstName = employee.empFirstName;
                EmployeeEntity.empFullName = employee.empFullName;
                EmployeeEntity.empGender = employee.empGender;
                EmployeeEntity.empHRCode = employee.empHRCode;
                EmployeeEntity.empImageProfileUrl = employee.empImageProfileUrl;
                EmployeeEntity.empIndividualEmail0 = employee.empIndividualEmail0;
                EmployeeEntity.empIndividualEmail1 = employee.empIndividualEmail1;
                EmployeeEntity.empIndividualEmail2 = employee.empIndividualEmail2;
                EmployeeEntity.empIndividualEmail3 = employee.empIndividualEmail3;
                EmployeeEntity.empLastName = employee.empLastName;
                EmployeeEntity.empMobile0 = employee.empMobile0;
                EmployeeEntity.empMobile1 = employee.empMobile1;
                EmployeeEntity.empMobile2 = employee.empMobile2;
                EmployeeEntity.empPri = employee.empPri;
                EmployeeEntity.empSecondName = employee.empSecondName;
        //        EmployeeEntity.EmpArchives = employee.EmpArchives;
                EmployeeEntity.EmpImg = employee.EmpImg;
                EmployeeEntity.EmployeeActive = employee.EmployeeActive;
                EmployeeEntity.EmpGmails = employee.EmpGmails;
                EmployeeEntity.EmpArchives = employee.EmpArchives;
                EmployeeEntity.EmpRoles = employee.EmpRoles;

                try
                {
                    db.Employee.Add(EmployeeEntity);             //Attach the NEW Departmnet
                    db.Entry(EmployeeEntity).State = EntityState.Modified;
                    db.SaveChanges();
                }
                catch (Exception ex)
                {

                    throw;
                }

            }

            return employee;
        }

        public Employee updateEmployeeFromUploadedFile(Employee employee)
        {
            Employee EmployeeEntity = new Employee();
            EmployeeEntity = db.Employee.Where(e => e.empHRCode == employee.empHRCode.Trim()).FirstOrDefault();

            if (EmployeeEntity != null && EmployeeEntity.EmpGmails.Count > 0)
            {
                db.EmpGmails.RemoveRange(db.EmpGmails.Where(e => e.empId == EmployeeEntity.empId));
                db.SaveChanges();

            }
            if (EmployeeEntity != null && EmployeeEntity.EmpArchives.Count > 0)
            {
                db.EmpArchAccount.RemoveRange(db.EmpArchAccount.Where(e => e.empId == EmployeeEntity.empId));
                db.SaveChanges();

            }
            //if (EmployeeEntity != null && EmployeeEntity.EmpRoles.Count > 0)
            //{
            //    db.EmpRoles.RemoveRange(db.EmpRoles.Where(e => e.empId == EmployeeEntity.empId));
            //    db.SaveChanges();

            //}
            if (EmployeeEntity != null && db.Entry(EmployeeEntity).State != EntityState.Detached)   //Framwaork EntityState needs refrance (using System.Data.Entity;)
            {
                db.Entry(EmployeeEntity).State = EntityState.Detached;  //Detach the OLD Employee

                EmployeeEntity.accountName = employee.accountName;
                EmployeeEntity.usrPassword = employee.usrPassword;
                EmployeeEntity.Assets = employee.Assets;
                //     EmployeeEntity.Branch = employee.Branch;
                //      EmployeeEntity.Company = employee.Company;
                //      EmployeeEntity.Department = employee.Department;
                EmployeeEntity.dptId = employee.dptId;
                EmployeeEntity.brnId = employee.brnId;
                EmployeeEntity.comId = employee.comId;
                EmployeeEntity.posId = employee.posId;
                EmployeeEntity.directMngHRcode = employee.directMngHRcode;
                EmployeeEntity.directMngName = employee.directMngName;
                EmployeeEntity.empAddress = employee.empAddress;
                EmployeeEntity.empBirhtday = employee.empBirhtday;
                EmployeeEntity.empCreationDate = employee.empCreationDate;
                EmployeeEntity.empExt = employee.empExt;
                EmployeeEntity.empFirstName = employee.empFirstName;
                EmployeeEntity.empFullName = employee.empFullName;
                EmployeeEntity.empGender = employee.empGender;
                EmployeeEntity.empHRCode = employee.empHRCode;
                EmployeeEntity.empImageProfileUrl = employee.empImageProfileUrl;
                EmployeeEntity.empIndividualEmail0 = employee.empIndividualEmail0;
                EmployeeEntity.empIndividualEmail1 = employee.empIndividualEmail1;
                EmployeeEntity.empIndividualEmail2 = employee.empIndividualEmail2;
                EmployeeEntity.empIndividualEmail3 = employee.empIndividualEmail3;
                EmployeeEntity.empLastName = employee.empLastName;
                EmployeeEntity.empMobile0 = employee.empMobile0;
                EmployeeEntity.empMobile1 = employee.empMobile1;
                EmployeeEntity.empMobile2 = employee.empMobile2;
                EmployeeEntity.empPri = employee.empPri;
                EmployeeEntity.empSecondName = employee.empSecondName;
                //        EmployeeEntity.EmpArchives = employee.EmpArchives;
                EmployeeEntity.EmpImg = employee.EmpImg;
         //       EmployeeEntity.EmployeeActive = employee.EmployeeActive;
                EmployeeEntity.EmpGmails = employee.EmpGmails;
                EmployeeEntity.EmpArchives = employee.EmpArchives;
          //      EmployeeEntity.EmpRoles = employee.EmpRoles;

                db.Employee.Add(EmployeeEntity);             //Attach the NEW Departmnet
                db.Entry(EmployeeEntity).State = EntityState.Modified;
                db.SaveChanges();
            }

            return EmployeeEntity;
        }

        // Get Employees from HRMS
        //    public async Task<string> GetAccessToken(string clientId, string clientSecret, string authenticationUrl)
        //    {
        //        try
        //        {
        //            var postData = new StringBuilder();
        //            postData.Append(string.Format("{0}={1}&", Uri.EscapeDataString("client_id"), Uri.EscapeDataString(clientId)));
        //            postData.Append(string.Format("{0}={1}&", Uri.EscapeDataString("grant_type"), Uri.EscapeDataString("client_credentials")));
        //            postData.Append(string.Format("{0}={1}", Uri.EscapeDataString("client_secret"), Uri.EscapeDataString(clientSecret)));

        //            using (HttpClient httpClient = new HttpClient())
        //            using (var request = new HttpRequestMessage(HttpMethod.Post, authenticationUrl))
        //            using (var httpContent = new StringContent(postData.ToString(), Encoding.UTF8))
        //            {
        //                request.Headers.Clear();
        //                httpContent.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue("application/x-www-form-urlencoded");
        //                request.Content = httpContent;
        //                try
        //                {
        //                    using (var response = await
        //                    httpClient
        //                    .SendAsync(request, HttpCompletionOption.ResponseHeadersRead)
        //                    .ConfigureAwait(false))
        //                    {
        //                        response.EnsureSuccessStatusCode();
        //                        var responseResult = response.Content.ReadAsStringAsync().GetAwaiter().GetResult();
        //                        var responseJObject = JObject.Parse(responseResult);
        //                        var accessToken = (string)responseJObject["access_token"];
        //                        return accessToken;
        //                    }
        //                }
        //                catch (HttpRequestException ex)
        //                {
        //                    //ErrorLogs err = new ErrorLogs();
        //                    //err.Description = ex.Message.ToString();
        //                    //err.Source = "GetAccessToken()";
        //                    //addErrorLog(err);
        //                    throw new Exception(($"Error: {authenticationUrl} \n {ex.Message}"));
        //                }
        //                catch (Exception ex)
        //                {
        //                    throw new Exception(($"Error: {authenticationUrl} \n {ex.Message}"));
        //                }
        //            }
        //        }
        //        catch (Exception ex)
        //        {
        //            throw new Exception(($"Error: {authenticationUrl} \n {ex.Message}"));
        //        }
        //    }
        //    public async Task<List<EmployeeHRMSVM>> importEmployeesFromHRMS()
        //    {
        //        List<EmployeeHRMSVM> emps = new List<EmployeeHRMSVM>();
        //     //   List<Tax_Invoice> invs = new List<Tax_Invoice>();

        //        string clientId = "abubakr.fathy@gacegy.local";
        //        string clientSecret = "Admin@123";
        //        string authenticationUrl = "https://authapi.gacegy.local/api/login";
        //        string token = GetAccessToken(clientId, clientSecret, authenticationUrl).GetAwaiter().GetResult();
        //    //    string token = "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWJ1YmFrci5mYXRoeSIsIkNvZGUiOiI1NjA5IiwiRmlyc3ROYW1lIjoiQWJvdWJha3IgRmF0aHkgUmFnaGViIiwiTGFzdE5hbWUiOiJBYnViYWtyIiwiQXJjaGl2ZUFjY291bnQiOiJGYWxzZSIsIlNlcnZpY2VBY2NvdW50IjoiRmFsc2UiLCJEb21haW5BZG1pbiI6dHJ1ZSwiQXBwbGljYXRpb25zIjoiW1wiRGlyZWN0b3J5XCIsXCJIUk1TXCIsXCJDcmV3XCJdIiwiZXhwIjoxNjU5OTA1ODA1LCJpc3MiOiJodHRwczovL2dhY2VneXB0LmNvbSIsImF1ZCI6Imh0dHBzOi8vZ2FjZWd5cHQuY29tIn0.JEK4TGkh5_RIuYhPSW5QmbWdIrL - 0D9vBHLyKIxaV64";
        //       // string invoiceNumber = fromto.invNumber; // "";  // "1211303";
        //        string instanceCode = "GAEG03";
        //        //string invoiceStartDate = fromto.from; // "01-01-2021";
        //       // string invoiceEndDate = fromto.to; // "06-06-2021";

        //        //      string createEndPointURL = "https://api-beta-testing.gac.com/external/shipping/dev/v1/GetInvoiceDetailsInJson?instanceCode=GAEG04&invoiceNumber=1211303&invoiceStartDate='01-01-2021'&invoiceEndDate='06-06-2021'";
        //        string createEndPointURL = "https://directoryapi.gacegy.local/Employee/GetAllEmployeeData";

        //     //   List<EmployeeHRMSVM> gacaginvs = new List<EmployeeHRMSVM>();
        //        HttpClientHandler handler = new HttpClientHandler() { UseDefaultCredentials = false };
        //        HttpClient client = new HttpClient(handler);

        //        client.BaseAddress = new Uri(createEndPointURL);
        //        client.DefaultRequestHeaders.Add("Authorization", "Bearer " + token);
        ////        client.DefaultRequestHeaders.Add("Applicationinstancecode", instanceCode);
        //        client.DefaultRequestHeaders.Add("Ocp-Apim-Subscription-Key", "a64dff36e363463d815dc839c1b69998");
        //        client.DefaultRequestHeaders.Add("Ocp-Apim-Trace", "true");

        //        try
        //        {
        //            HttpResponseMessage tokenResponse = client.GetAsync(Uri.EscapeUriString(client.BaseAddress.ToString())).Result;
        //            if (tokenResponse.IsSuccessStatusCode)
        //            {
        //                emps = await tokenResponse.Content.ReadAsAsync<List<EmployeeHRMSVM>>(new[] { new JsonMediaTypeFormatter() });
        //            }
        //            else
        //            {
        //                //GeneralInvsService gnrlSrv = new GeneralInvsService();
        //                //ErrorLogs errlog = new ErrorLogs();
        //                //errlog.Source = "Import GAC AG PortCall invoices API";
        //                //errlog.Description = tokenResponse.ReasonPhrase;
        //                //errlog.UserName = "not set";
        //                //gnrlSrv.addErrorLog(errlog);
        //            }
        //        }
        //        catch (Exception ex)
        //        {
        //            //GeneralInvsService gnrlSrv = new GeneralInvsService();
        //            //ErrorLogs errlog = new ErrorLogs();
        //            //errlog.Source = "Import GAC AG PortCall invoices API";
        //            //errlog.Description = ex.Message;
        //            //errlog.UserName = "not set";
        //            //gnrlSrv.addErrorLog(errlog);
        //            throw;
        //        }
        //        try
        //        {
        //            //if (gacaginvs.Count > 0)
        //            //{
        //            //    gacaginvs.ForEach(i =>
        //            //    {
        //            //        Tax_Invoice inv = new Tax_Invoice();
        //            //        Tax_Invoice _inv = new Tax_Invoice();

        //            //        _inv = invSrv.getInvoiceByByInvNumber(i.InvoiceNumber);
        //            //        if (_inv == null)
        //            //        {
        //            //            try
        //            //            {

        //            //                _inv = invSrv.ConvertPortCallInvToTaxInv(i);
        //            //            }
        //            //            catch (Exception ex)
        //            //            {
        //            //                GeneralInvsService gnrlSrv = new GeneralInvsService();
        //            //                ErrorLogs errlog = new ErrorLogs();
        //            //                errlog.Source = "Converting PortCall invoices ";
        //            //                errlog.Description = ex.Message;
        //            //                errlog.UserName = "not set";
        //            //                gnrlSrv.addErrorLog(errlog);
        //            //                throw;
        //            //            }
        //            //            try
        //            //            {
        //            //                inv = invSrv.saveTaxInvoice(_inv);
        //            //            }
        //            //            catch (Exception ex)
        //            //            {
        //            //                GeneralInvsService gnrlSrv = new GeneralInvsService();
        //            //                ErrorLogs errlog = new ErrorLogs();
        //            //                errlog.Source = "Save PortCall invoices ";
        //            //                errlog.Description = ex.Message;
        //            //                errlog.UserName = "not set";
        //            //                gnrlSrv.addErrorLog(errlog);
        //            //                throw;
        //            //            }
        //            //            try
        //            //            {

        //            //                invVMs.Add(inv.MapTaxInvoiceToTaxInvoiceVMONLY());
        //            //            }
        //            //            catch (Exception ex)
        //            //            {
        //            //                GeneralInvsService gnrlSrv = new GeneralInvsService();
        //            //                ErrorLogs errlog = new ErrorLogs();
        //            //                errlog.Source = "Mapping PortCall invoices ";
        //            //                errlog.Description = ex.Message;
        //            //                errlog.UserName = "not set";
        //            //                gnrlSrv.addErrorLog(errlog);
        //            //                throw;
        //            //            }


        //            //        }
        //            //    });
        //            //}

        //        }
        //        catch (Exception ex)
        //        {
        //            //GeneralInvsService gnrlSrv = new GeneralInvsService();
        //            //ErrorLogs errlog = new ErrorLogs();
        //            //errlog.Source = "Mapping PortCall invoices ";
        //            //errlog.Description = ex.Message;
        //            //errlog.UserName = "not set";
        //            //gnrlSrv .addErrorLog(errlog);
        //            throw;
        //        }

        //        return emps;
        //    }
        public async Task<List<EmployeeHRMSVM>> updateEmployeeFromHRMS(List<EmployeeHRMSVM> employees)
        {
            foreach (var emp in employees)
            {
                if (emp.Code == "5609")
                {

                }
                Company com = new Company();
                Branch brn = new Branch();
                Department dpt = new Department();
                PositionTitle pos = new PositionTitle();

                com = db.Company.Where(c => c.comCode == emp.CompanyId.ToString()).FirstOrDefault();
                brn = db.Branch.Where(c => c.brnCode == emp.BranchId.ToString()).FirstOrDefault();
                dpt = db.Department.Where(c => c.dptCode == emp.DepartmentId.ToString()).FirstOrDefault();
                pos = db.PositionTitles.Where(c => c.posTitleCode == emp.JobTitleId.ToString()).FirstOrDefault();

                var comId = 0;
                var companyName = "";
                var brnId = 0;
                var branchName = "";
                var dptId = 0;
                var departmentName = "";
                var posId =0;
                var titleName = "";

                if (com == null)
                {
                    com = new Company();
                    com.comId = 0;
                    com.comCode = emp.CompanyId.ToString();
                    com.comName = emp.Company.ToString();
                    db.Company.Add(com);
                    db.SaveChanges();

                    comId = db.Company.Where(c => c.comCode == emp.CompanyId.ToString()).FirstOrDefault().comId;
                    companyName = emp.Company.ToString();
                }
                else
                {
                    db.Entry(com).State = EntityState.Detached;
                    com.comCode = emp.CompanyId.ToString();
                    com.comName = emp.Company.ToString();
                    db.Company.Add(com);
                    db.Entry(com).State = EntityState.Modified;
                    db.SaveChanges();

                    comId = com.comId;
                    companyName = emp.Company.ToString();
                }

                if (brn == null)
                {
                    brn = new Branch();
                    brn.brnId = 0;
                    brn.brnCode = emp.BranchId.ToString();
                    brn.brnName = emp.Branch.ToString();
                    db.Branch.Add(brn);
                    db.SaveChanges();

                    brnId = db.Branch.Where(c => c.brnCode == emp.BranchId.ToString()).FirstOrDefault().brnId;
                    branchName = emp.Branch.ToString();
                }
                else
                {
                    db.Entry(brn).State = EntityState.Detached;
                    brn.brnCode = emp.BranchId.ToString();
                    brn.brnName = emp.Branch.ToString();
                    db.Branch.Add(brn);
                    db.Entry(brn).State = EntityState.Modified;
                    db.SaveChanges();

                     brnId = brn.brnId;
                     branchName = emp.Branch.ToString();
                }

                if (dpt == null)
                {
                    dpt = new Department();
                    dpt.dptId = 0;
                    dpt.dptCode = emp.DepartmentId.ToString();
                    dpt.dptName = emp.Department.ToString();
                    db.Department.Add(dpt);
                    db.SaveChanges();

                    dptId = db.Department.Where(c => c.dptCode == dpt.dptCode.ToString()).FirstOrDefault().dptId;
                    departmentName = emp.Department.ToString();
                }
                else
                {
                    db.Entry(dpt).State = EntityState.Detached;
                    dpt.dptCode = emp.DepartmentId.ToString();
                    dpt.dptName = emp.Department.ToString();
                    db.Department.Add(dpt);
                    db.Entry(dpt).State = EntityState.Modified;
                    db.SaveChanges();

                    dptId = dpt.dptId;
                    departmentName = emp.Department.ToString();
                }

                if (pos == null)
                {
                    pos = new PositionTitle();
                    pos.posId = 0;
                    pos.posTitleCode = emp.JobTitleId.ToString();
                    pos.posTitle = emp.JobTitle.ToString();
                    db.PositionTitles.Add(pos);
                    db.SaveChanges();

                    posId = db.PositionTitles.Where(c => c.posTitleCode == emp.JobTitleId.ToString()).FirstOrDefault().posId;
                    titleName = emp.JobTitle.ToString();
                }
                else
                {
                    db.Entry(pos).State = EntityState.Detached;
                    pos.posTitleCode = emp.JobTitleId.ToString();
                    pos.posTitle = emp.JobTitle.ToString();
                    db.PositionTitles.Add(pos);
                    db.Entry(pos).State = EntityState.Modified;
                    db.SaveChanges();

                    posId = pos.posId;
                    titleName = emp.JobTitle.ToString();
                }


                Employee EmployeeEntity = new Employee();

                EmployeeEntity = db.Employee.Where(e => e.empHRCode == emp.Code.Trim()).FirstOrDefault();
                if (EmployeeEntity != null)
                {
                    db.Entry(EmployeeEntity).State = EntityState.Detached;
                    if (emp.Photo != null)
                    {
                        EmployeeEntity.EmpImg = emp.PhotoString;
                    }

                    EmployeeEntity.empBirhtday = DateTime.Now;
                    EmployeeEntity.empCreationDate = DateTime.Now;
                    EmployeeEntity.EmployeeActive = true;
                    EmployeeEntity.empFirstName = emp.FirstName;
                    EmployeeEntity.empHRCode = emp.Code;
                    EmployeeEntity.empLastName = emp.LastName;
                    EmployeeEntity.empFullName = emp.Name;
                    EmployeeEntity.directMngHRcode = emp.DMCode;
                    EmployeeEntity.directMngName = emp.DirectManager;
                    EmployeeEntity.empExt = emp.Extension;
                    EmployeeEntity.empPri = emp.PRI;
                    EmployeeEntity.empMobile0 = emp.mobile1;
                    EmployeeEntity.empMobile1 = emp.mobile2;
                    EmployeeEntity.empMobile2 = emp.mobile3;
                    EmployeeEntity.empIndividualEmail0 = emp.Email1;
                    EmployeeEntity.empIndividualEmail1 = emp.Email2;
                    EmployeeEntity.empIndividualEmail2 = emp.Email3;
                    EmployeeEntity.comId = comId;
                    EmployeeEntity.companyName = companyName;
                    EmployeeEntity.brnId = brnId;
                    EmployeeEntity.branchName = branchName;
                    EmployeeEntity.dptId = dptId;
                    EmployeeEntity.departmentName = departmentName;
                    EmployeeEntity.posId = posId;
                    EmployeeEntity.titleName = titleName;

                    try
                    {
                        db.Employee.Add(EmployeeEntity);
                        db.Entry(EmployeeEntity).State = EntityState.Modified;
                     //   db.Employee.Attach(EmployeeEntity);
                        db.SaveChanges();

                    }
                    catch (Exception ex)
                    {

                    }
                }
                else
                {
                    EmployeeEntity = new Employee();
                    EmployeeEntity.empId = 0;
                    if (emp.Photo != null)
                    {
                        EmployeeEntity.EmpImg = emp.PhotoString;
                    }

                    EmployeeEntity.empBirhtday = DateTime.Now;
                    EmployeeEntity.empCreationDate = DateTime.Now;
                    EmployeeEntity.EmployeeActive = true;
                    EmployeeEntity.empFirstName = emp.FirstName;
                    EmployeeEntity.empHRCode = emp.Code;
                    EmployeeEntity.empLastName = emp.LastName;
                    EmployeeEntity.empFullName = emp.Name;
                    EmployeeEntity.directMngHRcode = emp.DMCode;
                    EmployeeEntity.directMngName = emp.DirectManager;
                    EmployeeEntity.empExt = emp.Extension;
                    EmployeeEntity.empPri = emp.PRI;
                    EmployeeEntity.empMobile0 = emp.mobile1;
                    EmployeeEntity.empMobile1 = emp.mobile2;
                    EmployeeEntity.empMobile2 = emp.mobile3;
                    EmployeeEntity.empIndividualEmail0 = emp.Email1;
                    EmployeeEntity.empIndividualEmail1 = emp.Email2;
                    EmployeeEntity.empIndividualEmail2 = emp.Email3;
                    EmployeeEntity.comId = comId;
                    EmployeeEntity.companyName = companyName;
                    EmployeeEntity.brnId = brnId;
                    EmployeeEntity.branchName = branchName;
                    EmployeeEntity.dptId = dptId;
                    EmployeeEntity.departmentName = departmentName;
                    EmployeeEntity.posId = posId;
                    EmployeeEntity.titleName = titleName;

                    db.Employee.Add(EmployeeEntity);
                    db.SaveChanges();
                }
            }
            return employees;
        }
        public bool updateDuplicationStatusForUploadedEmployee(string hrCode)
        {
            ExcelEmployeeUploadAPI uplEmp = getUploadedEmpByHrCode(hrCode);
            if (uplEmp != null)
            {
                db.ExcelEmployeeUploadAPI.Where(e => e.EmpCode == uplEmp.EmpCode).ToList().ForEach(e=>e.duplicatHrCode = true);
                db.SaveChanges();
                return true;
            }
            else
            {
                return false;
            }
        }
        //DELETE
        public bool deleteAllUploadedEmployees()
        {
            db.ExcelEmployeeUploadAPI.RemoveRange(db.ExcelEmployeeUploadAPI.ToList());
            db.SaveChanges();
            return true;
        }
        public int deleteSelectedUploadedEmployees(List<int> ids)
        {
            ids.ForEach(id =>
            {
                    db.ExcelEmployeeUploadAPI.Remove(db.ExcelEmployeeUploadAPI.Where(e=>e.id == id).FirstOrDefault());
            });
            db.SaveChanges();

            return ids.Count;
        }
        //Check
        public Boolean IsExsitUploadedEmployee(string code)
        {
            var emp = db.ExcelEmployeeUploadAPI.FirstOrDefault(i => i.EmpCode == code);

            if (emp == null)
            {
                return false;
            }
            else
            {
                return true;
            }
        }
    }

}