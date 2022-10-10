using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using ExcelDataReader;
using IntranetAPI.Mappers;
using IntranetAPI.Models;
using IntranetAPI.ViewModels;
using Microsoft.Ajax.Utilities;
using EntityState = System.Data.Entity.EntityState;

namespace IntranetAPI.Controllers
{
    [RoutePrefix("api/GenaricEmails")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class GenaricEmailsController : ApiController
    {
        private DBContext db = new DBContext();

        // GET: api/GenaricEmails
        public List<GenaricEmailVM> GetGenaricEmails()
        {
            List < GenaricEmailVM > gmVMs  = new List<GenaricEmailVM>();
            List<GenaricEmail> gms = new List<GenaricEmail>();
            gms = db.GenaricEmails.ToList();
            gmVMs = gms.MapToGenaricMailVMList();

            return gmVMs;
        }

        // GET: api/GenaricEmails/5
        [ResponseType(typeof(GenaricEmail))]
        public async Task<IHttpActionResult> GetGenaricEmail(int id)
        {
            GenaricEmail genaricEmail = await db.GenaricEmails.FindAsync(id);
            if (genaricEmail == null)
            {
                return NotFound();
            }

            return Ok(genaricEmail);
        }

        // PUT: api/GenaricEmails/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutGenaricEmail(int id, GenaricEmail genaricEmail)
        {
            GenaricEmail pos = db.GenaricEmails.Where(p => p.genEmailId == id).FirstOrDefault();
            pos.genEmailAddress = genaricEmail.genEmailAddress;

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != genaricEmail.genEmailId)
            {
                return BadRequest();
            }

            db.Entry(pos).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GenaricEmailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/GenaricEmails
        [ResponseType(typeof(GenaricEmail))]
        public async Task<IHttpActionResult> PostGenaricEmail(GenaricEmail genaricEmail)
        {
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}

            db.GenaricEmails.Add(genaricEmail);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = genaricEmail.genEmailId }, genaricEmail);
        }

        // DELETE: api/GenaricEmails/5
        [ResponseType(typeof(GenaricEmail))]
        public async Task<IHttpActionResult> DeleteGenaricEmail(int id)
        {
            GenaricEmail genaricEmail = await db.GenaricEmails.FindAsync(id);
            if (genaricEmail == null)
            {
                return NotFound();
            }

            db.GenaricEmails.Remove(genaricEmail);
            await db.SaveChangesAsync();

            return Ok(genaricEmail);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool GenaricEmailExists(int id)
        {
            return db.GenaricEmails.Count(e => e.genEmailId == id) > 0;
        }

        // POST: assignGmailToEmp
        [HttpPost]
        [Route("AssignEmployeestoGmail")]
        public GenaricEmail AssignEmployeestoGmail(GenaricEmail gmail)
        {
            List<EmpGmail> empGmails = new List<EmpGmail>();
            //  EmpGmail empGmail = new EmpGmail();

            //  empGmails = db.EmpGmails.Where(mail => mail.empId == emp.empId).ToList();
            //if (empGmails.Count > 0)
            //{
            //    db.EmpGmails.RemoveRange(empGmails);
            //    db.SaveChanges();

            gmail.EmpGmails.ForEach(emp =>
            {
                empGmails = db.EmpGmails.Where(mail => mail.empId == emp.empId).ToList();
                empGmails.ForEach(record =>
                    {
                      if (record.genEmailId != emp.genEmailId)
                      {
                          EmpGmail rec = new EmpGmail();
                          rec.empId = emp.empId;
                          rec.genEmailId = gmail.genEmailId;
                          db.EmpGmails.Add(rec);
                      }
                  });


                var genEmailId = db.EmpGmails.Where(mail => mail.empId == emp.empId).FirstOrDefault();
                if (genEmailId != null)
                {
                    db.EmpGmails.Where(mail => mail.empId == emp.empId).FirstOrDefault().genEmailId = gmail.genEmailId;
                }
                else if (genEmailId == null)
                {
                    emp.genEmailId = gmail.genEmailId;
                    db.EmpGmails.Add(emp);
                }

                    // emp.genEmailId = gmail.genEmailId;
                    // empGmails.Add(emp);

                });
            //db.EmpGmails.AddRange(empGmails);
            db.SaveChanges();

            //} else if(empGmails.Count == 0)
            //{
            //    gmail.EmpGmails.ForEach(emp =>
            //    {
            //        empGmails.ForEach(em =>
            //        {
            //            em.empId = emp.empId;
            //       //     em.genEmailId = gmail.genEmailId;
            //            empGmails.Add(em);
            //        });
            //    });
            //}




            //var Arr = employee.Assets.ToArray();
            //for (int i = 0; i < employee.Assets.Count; i++)
            //{
            //    var newId = Arr[i].astId;
            //    db.Asset.Where(a => a.astId == newId).FirstOrDefault().empId = employee.empId;
            //}
            //db.SaveChanges();

            return gmail;
        }

        //File Upload
        [Route("UploadExcelGEmails")]
        [HttpPost]
        public string ExcelAssetUpload()
        {
          //  DeleteUploadedAsset();

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
                        GenaricEmail gmail = new GenaricEmail();

                      //  gmail.genEmailId = finalRecords.Rows[i][0].ToString();
                        gmail.genEmailAddress = finalRecords.Rows[i][0].ToString();

                        db.GenaricEmails.Add(gmail);
                        db.SaveChanges();                // save is needed to check AssetCode duplication in next item
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


        [Route("GetFile")]
        public HttpResponseMessage GetFile() //string id
        {
            //if (String.IsNullOrEmpty(id))
            //    return Request.CreateResponse(HttpStatusCode.BadRequest);

            string fileName = "UploadGmails.xlsx";
            string localFilePath;
            int fileSize;

            localFilePath = @"C:\Data\Development Work\GAC\Projects\IntranetAPI\Content\files\AssetsUpleadedExcel\UploadGmails.xlsx";

            HttpResponseMessage response = new HttpResponseMessage(HttpStatusCode.OK);
            response.Content = new StreamContent(new FileStream(localFilePath, FileMode.Open, FileAccess.Read));
            response.Content.Headers.ContentDisposition = new System.Net.Http.Headers.ContentDispositionHeaderValue("attachment");
            response.Content.Headers.ContentDisposition.FileName = fileName;
            response.Content.Headers.ContentType = new MediaTypeHeaderValue("application/octet-stream");

            return response;
        }

    }

}