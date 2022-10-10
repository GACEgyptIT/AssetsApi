using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Runtime.InteropServices;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using ExcelDataReader;
using IntranetAPI.Mappers;
using IntranetAPI.Models;
using IntranetAPI.ModelViews;
using IntranetAPI.Services;
using IntranetAPI.ViewModels;

namespace IntranetAPI.Controllers
{
    [RoutePrefix("Api/ExcelEmployee")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ExcelEmployeesUploadAPIsController : ApiController
    {
        DBContext db = new DBContext();
        EmployeeService empSrv = new EmployeeService();

        [Route("GetallUploadedEmployees")]
        [HttpGet]
        public List<EmployeeVM> GetallUploadedEmployees()
        {
            return empSrv.getAllUploadedEmployees().MapUploadedToEmployeeVMList();
        }

        [Route("UploadExcelEmployee")]
        [HttpPost]
        public string ExcelEmployeeUpload()
        {
            if (empSrv.deleteAllUploadedEmployees())
            {
                string message = "";
                HttpResponseMessage result = null;
                var httpRequest = HttpContext.Current.Request;
                using (DBContext db = new DBContext())
                {
                    if (httpRequest.Files.Count > 0)
                    {
                        HttpPostedFile file = httpRequest.Files[0];
                        Stream stream = file.InputStream;

                        IExcelDataReader reader = null;

                        if (file.FileName.EndsWith(".xls"))
                        {
                            reader = ExcelReaderFactory.CreateBinaryReader(stream);
                        }
                        else if (file.FileName.EndsWith(".xlsx"))
                        {
                            reader = ExcelReaderFactory.CreateOpenXmlReader(stream);
                        }
                        else
                        {
                            message = "This file format is not supported";
                        }

                        DataSet excelRecords = reader.AsDataSet();
                        reader.Close();

                        var finalRecords = excelRecords.Tables[0];
                        for (int i = 1; i < finalRecords.Rows.Count; i++)
                        {
                            ExcelEmployeeUploadAPI emp = new ExcelEmployeeUploadAPI();

                            emp.EmpCode = finalRecords.Rows[i][0].ToString().Trim();
                            emp.Name = finalRecords.Rows[i][1].ToString().Trim();
                            emp.Position = finalRecords.Rows[i][2].ToString().Trim();

                            emp.DepartmentName = finalRecords.Rows[i][3].ToString().Trim();
                            emp.BranchName = finalRecords.Rows[i][4].ToString().Trim();
                            emp.CompanyName = finalRecords.Rows[i][5].ToString().Trim();
                            emp.DirectMngHrCode = finalRecords.Rows[i][6].ToString().Trim();
                            emp.DirectMngName = finalRecords.Rows[i][7].ToString().Trim();

                            emp.EXT = finalRecords.Rows[i][8].ToString().Trim();
                            emp.PRI = finalRecords.Rows[i][9].ToString().Trim();
                            emp.Mob1 = finalRecords.Rows[i][10].ToString().Trim();
                            emp.Mob2 = finalRecords.Rows[i][11].ToString().Trim();
                            emp.Mob3 = finalRecords.Rows[i][12].ToString().Trim();
                            emp.IndivEmail1 = finalRecords.Rows[i][13].ToString().Trim();
                            emp.IndivEmail2 = finalRecords.Rows[i][14].ToString().Trim();
                            emp.IndivEmail3 = finalRecords.Rows[i][15].ToString().Trim();
                            emp.IndivEmail4 = finalRecords.Rows[i][16].ToString().Trim();

                            emp.GenEmail1 = finalRecords.Rows[i][17].ToString().Trim();
                            emp.GenEmail2 = finalRecords.Rows[i][18].ToString().Trim();
                            emp.GenEmail3 = finalRecords.Rows[i][19].ToString().Trim();
                            emp.GenEmail4 = finalRecords.Rows[i][20].ToString().Trim();
                            emp.GenEmail5 = finalRecords.Rows[i][21].ToString().Trim();
                            emp.GenEmail6 = finalRecords.Rows[i][22].ToString().Trim();
                            emp.ArchEmail1 = finalRecords.Rows[i][23].ToString().Trim();
                            emp.ArchEmail2 = finalRecords.Rows[i][24].ToString().Trim();
                            emp.ArchEmail3 = finalRecords.Rows[i][25].ToString().Trim();
                            emp.ArchEmail4 = finalRecords.Rows[i][26].ToString().Trim();
                            emp.ArchEmail5 = finalRecords.Rows[i][27].ToString().Trim();
                            emp.ArchEmail6 = finalRecords.Rows[i][28].ToString().Trim();

                            if (emp.Position != null) { if (empSrv.getPositionIdByName(emp.Position) == 0) { emp.Position = "missing"; }; };
                            if (emp.DirectMngHrCode != null) { if (empSrv.getEmployeeIdByName(emp.DirectMngHrCode) == 0) { emp.DirectMngHrCode = "missing"; }; };

                            if (emp.DepartmentName != null) { if (empSrv.getDepartmentIdByName(emp.DepartmentName) == 0) { emp.DepartmentName = "missing"; }; };
                            if (emp.BranchName != null) { if (empSrv.getBranchtIdByName(emp.BranchName) == 0) { emp.BranchName = "missing"; }; };
                            if (emp.CompanyName != null) { if (empSrv.getCompanytIdByName(emp.CompanyName) == 0) { emp.CompanyName = "missing"; }; };

                            if (emp.GenEmail1 != null) { if (empSrv.getGenEmailIdByAddress(emp.GenEmail1) == 0) { emp.GenEmail1 = "missing"; }; };
                            if (emp.GenEmail2 != null) { if (empSrv.getGenEmailIdByAddress(emp.GenEmail2) == 0) { emp.GenEmail2 = "missing"; }; };
                            if (emp.GenEmail3 != null) { if (empSrv.getGenEmailIdByAddress(emp.GenEmail3) == 0) { emp.GenEmail3 = "missing"; }; };
                            if (emp.GenEmail4 != null) { if (empSrv.getGenEmailIdByAddress(emp.GenEmail4) == 0) { emp.GenEmail4 = "missing"; }; };
                            if (emp.GenEmail5 != null) { if (empSrv.getGenEmailIdByAddress(emp.GenEmail5) == 0) { emp.GenEmail5 = "missing"; }; };
                            if (emp.GenEmail6 != null) { if (empSrv.getGenEmailIdByAddress(emp.GenEmail6) == 0) { emp.GenEmail6 = "missing"; }; };

                            if (emp.ArchEmail1 != null) { if (empSrv.getArchiveEmailIdByAddress(emp.ArchEmail1) == 0) { emp.ArchEmail1 = "missing"; }; };
                            if (emp.ArchEmail2 != null) { if (empSrv.getArchiveEmailIdByAddress(emp.ArchEmail2) == 0) { emp.ArchEmail2 = "missing"; }; };
                            if (emp.ArchEmail3 != null) { if (empSrv.getArchiveEmailIdByAddress(emp.ArchEmail3) == 0) { emp.ArchEmail3 = "missing"; }; };
                            if (emp.ArchEmail4 != null) { if (empSrv.getArchiveEmailIdByAddress(emp.ArchEmail4) == 0) { emp.ArchEmail4 = "missing"; }; };
                            if (emp.ArchEmail5 != null) { if (empSrv.getArchiveEmailIdByAddress(emp.ArchEmail5) == 0) { emp.ArchEmail5 = "missing"; }; };
                            if (emp.ArchEmail6 != null) { if (empSrv.getArchiveEmailIdByAddress(emp.ArchEmail6) == 0) { emp.ArchEmail6 = "missing"; }; };

                            bool isDuplicated = empSrv.updateDuplicationStatusForUploadedEmployee(emp.EmpCode);
                            if (isDuplicated)
                            {
                                emp.duplicatHrCode = true;
                            }
                            else
                            {
                                emp.duplicatHrCode = false;
                            }
                        
                            this.empSrv.addUploadedEmployee(emp);
                        }
                        int output = db.SaveChanges();
                        if (output > 0)
                        {
                            message = "Excel file has been successfully uploaded";
                        }
                        else
                        {
                            message = "Excel file uploaded has fiald";
                        }
                    }
                    else
                    {
                        result = Request.CreateResponse(HttpStatusCode.BadRequest);
                    }
                }
                return message;
            }
            return null;
        }

        [HttpPost]
        [Route("SaveUploadedEmployees")]
        public List<Employee> SaveUploadedEmployees(List<EmployeeVM> uploaded)
        {
            List<Employee> savedEmps = new List<Employee>();

            uploaded.ForEach(upld =>
            {
                Employee emp = empSrv.getEmpByHrCode(upld.empHRCode);

                if (emp == null && upld.duplicatHrCode == false && upld.DepartmentName != "missing" && upld.BranchName != "missing"
                && upld.CompanyName != "missing" && upld.Position != "missing")  //&& upld.DirectMngName != "missing"
                {
                    Employee employee = upld.MapToEmployee();
                    Employee em = empSrv.addEmployee(employee);
                    savedEmps.Add(employee);

                }
                else if (
                emp != null  && upld.DepartmentName != "missing" 
                && upld.BranchName != "missing" && upld.CompanyName != "missing" && upld.Position != "missing" 
                ) 
                {
                    Employee e = upld.MapToEmployee();
                    Employee employee = empSrv.updateEmployeeFromUploadedFile(e);
                    savedEmps.Add(employee);
                }
            });
            return savedEmps;
        }


    }
}