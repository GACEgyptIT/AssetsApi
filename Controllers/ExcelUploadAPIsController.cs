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
using ExcelDataReader;
using IntranetAPI.Models;

namespace IntranetAPI.Controllers
{
    [RoutePrefix("Api/Excel")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ExcelUploadAPIsController : ApiController
    {
            [Route("UploadExcel")]
            [HttpPost]
            public string ExcelUpload()
            {
                string message = "";
                HttpResponseMessage result = null;
                var httpRequest = HttpContext.Current.Request;
                using (DBContext objEntity = new DBContext())
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
                        for (int i = 0; i < finalRecords.Rows.Count; i++)
                        {
                            ExcelUploadAPI objUser = new ExcelUploadAPI();
                            objUser.UserName = finalRecords.Rows[i][0].ToString();
                            objUser.EmailId = finalRecords.Rows[i][1].ToString();
                            objUser.Address = finalRecords.Rows[i][3].ToString();
                        

                            objEntity.ExcelUploadAPI.Add(objUser);

                        }

                        int output = objEntity.SaveChanges();
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

            [Route("ExcelUploadBindUser")]
            [HttpGet]
            public List<ExcelUploadAPI> BindUser()
            {
                List<ExcelUploadAPI> lstUser = new List<ExcelUploadAPI>();
                using (DBContext objEntity = new DBContext())
                {
                    lstUser = objEntity.ExcelUploadAPI.ToList();
                }
                return lstUser;
            }

    }
}