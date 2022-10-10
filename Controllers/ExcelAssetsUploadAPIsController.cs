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
    [RoutePrefix("Api/ExcelAsset")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ExcelAssetsUploadAPIsController : ApiController
    {
        DBContext db = new DBContext();
        EmployeeService empSrv = new EmployeeService();
        AssetService astSrv = new AssetService();

        [Route("GetallUploadedAsset")]
        [HttpGet]
        public List<ExcelAssetsUploadAPI> GetallUploadedAsset()
        {
            astSrv.UpdateUploadedAssetsDuplication();

      //      List<ExcelAssetsUploadAPI> uploadedassets = new List<ExcelAssetsUploadAPI>();
      ////      astSrv.UpdateAssetsAvailabilityStatus();
      //      uploadedassets = db.ExcelAssetsUploadAPI.ToList();
      //      foreach (var ass in uploadedassets)
      //      {
      //          astSrv.IsDuplicatedUploadedAssets(null, ass.SerialNumber, ass.PartNumber);
      //      }

            return db.ExcelAssetsUploadAPI.ToList(); 
        }

        [Route("UploadExcelAsset")]
        [HttpPost]
        public string ExcelAssetUpload()
        {
                DeleteUploadedAsset();

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
                            ExcelAssetsUploadAPI objAsset = new ExcelAssetsUploadAPI();
                            AssetBrand brand = new AssetBrand();
                            AssetType type = new AssetType();
                            AssetCategory cat = new AssetCategory();
               
                    
                            brand = this.astSrv.getBrandByCode(finalRecords.Rows[i][1].ToString().Trim());

                            if (brand != null)
                            {
                                type = this.astSrv.getTypeByBrandCode(brand.astBrandCode);
                                cat = this.astSrv.getCategoryByTypeCode(type.astTypeCode);

                                objAsset.astBrandCode = brand.astBrandCode;
                                objAsset.AssetBrandId = brand.AssetBrandId;
                                objAsset.AssetBrandName = brand.astBrandName;
                            }
                            else
                            {
                                objAsset.astBrandCode = "";
                                objAsset.AssetBrandId = 0;
                                objAsset.AssetBrandName = "";
                                cat.astCategoryName = "";
                                type.astTypeName = "";
                                brand = new AssetBrand();
                                brand.astBrandName = "";

                            }
                            objAsset.Description = cat.astCategoryName + "/" + type.astTypeName + "/" + brand.astBrandName + " :: " + finalRecords.Rows[i][3].ToString().Trim();
                            if (finalRecords.Rows[i][4].ToString().Trim() == "")
                            {
                                objAsset.SerialNumber = null;
                            }
                            else
                            {
                                objAsset.SerialNumber = finalRecords.Rows[i][4].ToString().Trim();  //.ToLower();
                            }
                            if (finalRecords.Rows[i][5].ToString().Trim() == "")
                            {
                                objAsset.PartNumber = null;  //.ToLower();
                            }
                            else
                            {
                                objAsset.PartNumber = finalRecords.Rows[i][5].ToString().Trim();  //.ToLower();
                            }
                            if (finalRecords.Rows[i][6].ToString().Trim() == "")
                            {
                                objAsset.EmpHRCode = null;
                                objAsset.EmpName = null;
                            }
                            else
                            {
                                objAsset.EmpHRCode = finalRecords.Rows[i][6].ToString().Trim();
                                Employee emp = new Employee();
                                emp = db.Employee.Where(e => e.empHRCode == objAsset.EmpHRCode).FirstOrDefault();
                                if (emp != null)
                                {
                                    objAsset.EmpName = emp.empFullName;
                                    objAsset.AssignedToEmpId = emp.empId;
                                    objAsset.EmpHRCode = emp.empHRCode;
                                }
                                else
                                {
                                    objAsset.EmpName = null;
                                    objAsset.AssignedToEmpId = null;
                                    objAsset.EmpHRCode = null;
                                }
                            }

                            //Check Assests duplication
                            objAsset.IsExist = false;
                            objAsset.duplicatSerialNumber = false;
                            objAsset.duplicatPartNumber = false;

                            //if (objAsset.SerialNumber != "" || objAsset.PartNumber != "")
                            //{
                            //    var st = astSrv.IsDuplicatedUploadedAssets(null, objAsset.SerialNumber, objAsset.PartNumber);
                            //    if (st.duplicatedCode)
                            //    {
                            //        //      objAsset.duplicatCode = true;
                            //    }
                            //    if (st.duplicatedSN)
                            //    {
                            //        objAsset.duplicatSerialNumber = true;
                            //        objAsset.IsExist = false;
                            //    }
                            //    if (st.duplicatedDN)
                            //    {
                            //        objAsset.duplicatPartNumber = true;
                            //        objAsset.IsExist = false;
                            //    }

                            db.ExcelAssetsUploadAPI.Add(objAsset);
                            db.SaveChanges();                // save is needed to check AssetCode duplication in next item
                                                             //}
                        }
                        astSrv.UpdateUploadedAssetsDuplication();

                        if (true)
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

        [Route("DeleteAlluploadedAssets")]
        public string DeleteUploadedAsset()
        {
                    DBContext db = new DBContext();
                    List<ExcelAssetsUploadAPI> ass = new List<ExcelAssetsUploadAPI>();
                    ass = db.ExcelAssetsUploadAPI.ToList();
                    if (ass != null)
                    {
                        db.ExcelAssetsUploadAPI.RemoveRange(ass);
                        db.SaveChangesAsync();
                    }
                    var message = "Assets have been successfully deleted";
                    return message;
        }

        [HttpPost]
        [Route("saveuploadedassets")]
        public List<AssetVM> SaveUploadedAssets(List<ExcelAssetsUploadAPI> uploaded)
        {
            List<AssetVM> saved = new List<AssetVM>();

            foreach (var upld in uploaded)
            {
                if (upld.IsExist == true)
                {
                    continue;
                }
                else
                {
                    Asset crnt = new Asset();
                    crnt = astSrv.ConvertUploadedToCurrent(upld);

                    if (crnt != null)
                    {
                        bool t = astSrv.AddCurrentAsset(crnt, upld);

                        if (t)
                        {
                            saved.Add(crnt.MapToAssetVM());
                            astSrv.AssetIsExist(upld);
                        }
                    }
                }
            }
            astSrv.UpdateUploadedAssetsDuplication();
            //List<ExcelAssetsUploadAPI> uploadedassets = new List<ExcelAssetsUploadAPI>();
            //uploadedassets = db.ExcelAssetsUploadAPI.ToList();
            //foreach (var ass in uploadedassets)
            //{
            //    astSrv.IsDuplicatedUploadedAssets(null, ass.SerialNumber, ass.PartNumber);
            //}

            return saved;
        }

        [HttpPost]
        [Route("DeleteSelectedAssets")]
        public async Task<IHttpActionResult> DeleteSelectedEmployees(List<int> selectedIdsAssets)
        {
            selectedIdsAssets.ForEach(id =>
            {
                var i = db.ExcelAssetsUploadAPI.Find(id);
                if (i != null)
                {
                    db.ExcelAssetsUploadAPI.Remove(i);
                }

            });
            db.SaveChanges();

            return Ok(selectedIdsAssets);
        }

        /////////////////////////////////////////////////////////////////////////////////// Upload Employee Excel /////////////////////////////////////////

        //[Route("GetallUploadedEmployees")]
        //[HttpGet]
        //public List<EmployeeVM> GetallUploadedEmployees()
        //{
        //    return empSrv.getAllUploadedEmployees().MapUploadedToEmployeeVMList();
        //}

        //[Route("UploadExcelEmployee")]
        //[HttpPost]
        //public string ExcelEmployeeUpload()
        //{
        //    if (empSrv.deleteAllUploadedEmployees())
        //    {
        //        string message = "";
        //        HttpResponseMessage result = null;
        //        var httpRequest = HttpContext.Current.Request;
        //        using (DBContext db = new DBContext())
        //        {
        //            if (httpRequest.Files.Count > 0)
        //            {
        //                HttpPostedFile file = httpRequest.Files[0];
        //                Stream stream = file.InputStream;

        //                IExcelDataReader reader = null;

        //                if (file.FileName.EndsWith(".xls"))
        //                {
        //                    reader = ExcelReaderFactory.CreateBinaryReader(stream);
        //                }
        //                else if (file.FileName.EndsWith(".xlsx"))
        //                {
        //                    reader = ExcelReaderFactory.CreateOpenXmlReader(stream);
        //                }
        //                else
        //                {
        //                    message = "This file format is not supported";
        //                }

        //                DataSet excelRecords = reader.AsDataSet();
        //                reader.Close();

        //                var finalRecords = excelRecords.Tables[0];
        //                for (int i = 1; i < finalRecords.Rows.Count; i++)
        //                {
        //                    ExcelEmployeeUploadAPI emp = new ExcelEmployeeUploadAPI();

        //                    emp.EmpCode = finalRecords.Rows[i][0].ToString();
        //                    emp.Name = finalRecords.Rows[i][1].ToString();
        //                    emp.Position = finalRecords.Rows[i][2].ToString();
        //                    emp.DirectMngCode = finalRecords.Rows[i][3].ToString();
        //                    emp.DepartmentName = finalRecords.Rows[i][4].ToString();
        //                    emp.BranchName = finalRecords.Rows[i][5].ToString();
        //                    emp.CompanyName = finalRecords.Rows[i][6].ToString();
        //                    emp.EXT = finalRecords.Rows[i][7].ToString();
        //                    emp.PRI = finalRecords.Rows[i][8].ToString();
        //                    emp.Mob1 = finalRecords.Rows[i][9].ToString();
        //                    emp.Mob2 = finalRecords.Rows[i][10].ToString();
        //                    emp.Mob3 = finalRecords.Rows[i][11].ToString();
        //                    emp.IndivEmail1 = finalRecords.Rows[i][12].ToString();
        //                    emp.IndivEmail2 = finalRecords.Rows[i][13].ToString();
        //                    emp.IndivEmail3 = finalRecords.Rows[i][14].ToString();
        //                    emp.IndivEmail4 = finalRecords.Rows[i][15].ToString();
        //                    emp.GenEmail1 = finalRecords.Rows[i][16].ToString();
        //                    emp.GenEmail2 = finalRecords.Rows[i][17].ToString();
        //                    emp.GenEmail3 = finalRecords.Rows[i][18].ToString();
        //                    emp.GenEmail4 = finalRecords.Rows[i][19].ToString();
        //                    emp.GenEmail5 = finalRecords.Rows[i][20].ToString();
        //                    emp.GenEmail6 = finalRecords.Rows[i][21].ToString();
        //                    emp.ArchEmail1 = finalRecords.Rows[i][22].ToString();
        //                    emp.ArchEmail2 = finalRecords.Rows[i][23].ToString();
        //                    emp.ArchEmail3 = finalRecords.Rows[i][24].ToString();
        //                    emp.ArchEmail4 = finalRecords.Rows[i][25].ToString();
        //                    emp.ArchEmail5 = finalRecords.Rows[i][26].ToString();
        //                    emp.ArchEmail6 = finalRecords.Rows[i][27].ToString();

        //                    if (emp.Position != null) { if (empSrv.getPositionIdByName(emp.Position) == 0) { emp.Position = "missing"; }; };
        //                    if (emp.DirectMngCode != null) { if (empSrv.getEmployeeIdByName(emp.DirectMngCode) == 0) { emp.DirectMngCode = "missing"; }; };

        //                    if (emp.DepartmentName != null) { if (empSrv.getDepartmentIdByName(emp.DepartmentName) == 0) { emp.DepartmentName = "missing"; }; };
        //                    if (emp.BranchName != null) { if (empSrv.getBranchtIdByName(emp.BranchName) == 0) { emp.BranchName = "missing"; }; };
        //                    if (emp.CompanyName != null) { if (empSrv.getCompanytIdByName(emp.CompanyName) == 0) { emp.CompanyName = "missing"; }; };

        //                    if (emp.GenEmail1 != null) { if (empSrv.getGenEmailIdByAddress(emp.GenEmail1) == 0) { emp.GenEmail1 = "missing"; }; };
        //                    if (emp.GenEmail2 != null) { if (empSrv.getGenEmailIdByAddress(emp.GenEmail2) == 0) { emp.GenEmail2 = "missing"; }; };
        //                    if (emp.GenEmail3 != null) { if (empSrv.getGenEmailIdByAddress(emp.GenEmail3) == 0) { emp.GenEmail3 = "missing"; }; };
        //                    if (emp.GenEmail4 != null) { if (empSrv.getGenEmailIdByAddress(emp.GenEmail4) == 0) { emp.GenEmail4 = "missing"; }; };
        //                    if (emp.GenEmail5 != null) { if (empSrv.getGenEmailIdByAddress(emp.GenEmail5) == 0) { emp.GenEmail5 = "missing"; }; };
        //                    if (emp.GenEmail6 != null) { if (empSrv.getGenEmailIdByAddress(emp.GenEmail6) == 0) { emp.GenEmail6 = "missing"; }; };

        //                    if (emp.ArchEmail1 != null) { if (empSrv.getArchiveEmailIdByAddress(emp.ArchEmail1) == 0) { emp.ArchEmail1 = "missing"; }; };
        //                    if (emp.ArchEmail2 != null) { if (empSrv.getArchiveEmailIdByAddress(emp.ArchEmail2) == 0) { emp.ArchEmail2 = "missing"; }; };
        //                    if (emp.ArchEmail3 != null) { if (empSrv.getArchiveEmailIdByAddress(emp.ArchEmail3) == 0) { emp.ArchEmail3 = "missing"; }; };
        //                    if (emp.ArchEmail4 != null) { if (empSrv.getArchiveEmailIdByAddress(emp.ArchEmail4) == 0) { emp.ArchEmail4 = "missing"; }; };
        //                    if (emp.ArchEmail5 != null) { if (empSrv.getArchiveEmailIdByAddress(emp.ArchEmail5) == 0) { emp.ArchEmail5 = "missing"; }; };
        //                    if (emp.ArchEmail6 != null) { if (empSrv.getArchiveEmailIdByAddress(emp.ArchEmail6) == 0) { emp.ArchEmail6 = "missing"; }; };

        //                    if (!empSrv.updateDuplicationStatusForUploadedEmployee(emp.EmpCode))
        //                    {
        //                        emp.duplicatHrCode = false;
        //                    }
        //                    this.empSrv.addUploadedEmployee(emp);
        //                }
        //                int output = db.SaveChanges();
        //                if (output > 0)
        //                {
        //                    message = "Excel file has been successfully uploaded";
        //                }
        //                else
        //                {
        //                    message = "Excel file uploaded has fiald";
        //                }
        //            }
        //            else
        //            {
        //                result = Request.CreateResponse(HttpStatusCode.BadRequest);
        //            }
        //        }
        //        return message;
        //    }
        //    return null;
        //}

        //[Route("SaveUploadedEmployees")]
        //[HttpPost]
        //public List<Employee> SaveUploadedEmployees(List<EmployeeVM> uploaded)
        //{
        //    List<Employee> savedEmpsVMs = new List<Employee>();

        //    uploaded.ForEach(upld =>
        //    {
        //        string empName = empSrv.getEmpNameByHrCode(upld.empHRCode);

        //        if (empName == null && upld.duplicatHrCode == false && upld.DepartmentName != "missing" && upld.BranchName != "missing" 
        //        && upld.CompanyName != "missing" && upld.Position != "missing" && upld.DirectMngName != "missing")
        //        {
        //            Employee employee = upld.MapToEmployee();
        //            Employee em = empSrv.addEmployee(employee);
        //            savedEmpsVMs.Add(employee);

        //        } else if (empName != null && upld.duplicatHrCode == false && upld.DepartmentName != "missing" && upld.BranchName != "missing" 
        //        && upld.CompanyName != "missing" && upld.Position != "missing" && upld.DirectMngName != "missing")
        //        {

        //            Employee e = upld.MapToEmployee();
        //            Employee employee = empSrv.updateEmployee(e);
        //        }
        //    });

        //    return savedEmpsVMs;
        //}


    }
}