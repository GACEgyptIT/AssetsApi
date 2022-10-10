using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using IntranetAPI.Mappers;
using IntranetAPI.Models;
using IntranetAPI.Services;
using IntranetAPI.ViewModels;
using EntityState = System.Data.Entity.EntityState;

namespace IntranetAPI.Controllers
{
    [RoutePrefix("api/Invoices")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class InvoicesController : ApiController
    {
        private DBContext db = new DBContext();
        NotificationService ntSrv = new NotificationService();
        InvoiceService invSrv = new InvoiceService();

        [HttpGet]
        [Route("getInvoiceById/{id}")]
        public InvoiceVM getInvoiceById(int id)
        {
            return db.Invoice.Where(i => i.InvoiceId == id).FirstOrDefault().MapToInvoicesVM();
        }

        [Route("GetFileInvoice/{id}")]
        public HttpResponseMessage GetFileInvoice(int id) //string id
        {
            string fileName = db.Invoice.Find(id).InvFile;
            string localFilePath = @"D:\Down\" + fileName;
            string ftpSrv = "ftp://ftp.gacegy.local/Uploads/" + fileName;

            WebClient client = new WebClient();
            client.Credentials = new NetworkCredential("user", "Admin@123");
            client.DownloadFile(ftpSrv, localFilePath);

            HttpResponseMessage response = new HttpResponseMessage(HttpStatusCode.OK);
            response.Content = new StreamContent(new FileStream(localFilePath, FileMode.Open, FileAccess.Read));
            response.Content.Headers.ContentDisposition = new System.Net.Http.Headers.ContentDispositionHeaderValue("attachment");
            response.Content.Headers.ContentDisposition.FileName = fileName;
            response.Content.Headers.ContentType = new MediaTypeHeaderValue("application/pdf");

            return response;
        }

        [HttpGet]
        [Route("DeleteTempInvoice/{id}")]
        public void DeleteTempInvoice(int id) 
        {
            string fileName = db.Invoice.Find(id).InvFile;
            string localFilePath = @"D:\Down\" + fileName;

            var file = new FileInfo(localFilePath);

            if (file.Exists)
            {
                file.Delete();
            }
        }

        //[HttpGet]
        //[Route("download")]
        //public async HttpResponseMessage Download(int id)
        //{
        //    string file =  "";
        //    var uploads = Path.Combine(_hostingEnvironment.WebRootPath, "uploads");
        //    var filePath = Path.Combine(uploads, file);
        //    if (!System.IO.File.Exists(filePath))
        //        return NotFound();

        //    var memory = new MemoryStream();
        //    using (var stream = new FileStream(filePath, FileMode.Open))
        //    {
        //        await stream.CopyToAsync(memory);
        //    }
        //    memory.Position = 0;

        //    //      return File(memory, GetContentType(filePath), file);

        //    HttpResponseMessage response = new HttpResponseMessage(HttpStatusCode.OK);
        //    response.Content = new StreamContent(new FileStream(localFilePath, FileMode.Open, FileAccess.Read));
        //    response.Content.Headers.ContentDisposition = new System.Net.Http.Headers.ContentDispositionHeaderValue("attachment");
        //    response.Content.Headers.ContentDisposition.FileName = fileName;
        //    response.Content.Headers.ContentType = new MediaTypeHeaderValue("application/pdf");

        //    return response;
        //}

        [HttpPost]
        [Route("GetInvoicesFromToDate")]
        public List<InvoiceVM> GetInvoicesFromToDate(InvFromToVM FromTo)
        {
      
       //     invSrv.TempFnUpdateInvociesData();

            DateTime to = new DateTime(FromTo.to.Year, FromTo.to.Month, FromTo.to.Day, FromTo.to.Hour + 2, FromTo.to.Minute, FromTo.to.Second, DateTimeKind.Utc);
            //     DateTime from = new DateTime(FromTo.from.Year, FromTo.from.Month, FromTo.from.Day, FromTo.from.Hour + 2, FromTo.from.Minute, FromTo.from.Second, DateTimeKind.Utc);

            Employee emp = new Employee();
            List<Role> roles = new List<Role>();
            List<InvoiceVM> invoices = new List<InvoiceVM>();

            emp = db.Employee.Where(e => e.empId == FromTo.empId).FirstOrDefault();
            roles = db.EmpRoles.Where(e => e.empId == FromTo.empId).Select(r => r.Role).ToList();
            if (roles.Count > 0)
            {
                roles.ForEach(r =>
                {
                    if (r.roleName == "BranchAdmin")
                    {
                       invoices = db.Invoice.Where(i => i.invDate >= FromTo.from && i.invDate <= to && i.CostCenterName.Contains(emp.Branch.brnName)).ToList().MapToInvoicesListVM();
                    };
                    if (r.roleName == "Admin") 
                    {
                        invoices = db.Invoice.Where(i => i.invDate >= FromTo.from && i.invDate <= to).ToList().MapToInvoicesListVM();

                    };
                });
            }
            return invoices;
        }


        //// Get: File Download from the web 1 
        //public async Task<FileStream> DownloadFile(string fileName)
        //{
        //    var currentDirectory = System.IO.Directory.GetCurrentDirectory();
        //    currentDirectory = currentDirectory + "\\src\\assets";
        //    var file = Path.Combine(Path.Combine(currentDirectory, "attachments"), fileName);
        //    return new FileStream(file, FileMode.Open, FileAccess.Read);
        //}

        //// GET: FileDetails from the web 2
        //[HttpGet]
        //public HttpResponseMessage GetFileDetail(int id)
        //{
        //    //Create HTTP Response.
        //    HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK);
        //    string fileName;
        //    //Fetch the File data from Database.
        //    Dictionary<string, object> rec;
        //    DbConnection conn = CommonFunction.GetDBConnection();
        //    conn.Open();
        //    string qrystr = "SELECT FileName,FileType,FileContent "
        //        + " FROM tFileData "
        //        + " where ID = " + id;
        //    rec = CommonFunction.GetSingleRecord(qrystr, conn);
        //    if (rec.Count != 0)
        //    {
        //        Byte[] data = (Byte[])rec["FileContent"];
        //        string Type = rec["FileType"].ToString();
        //        fileName = rec["FileName"].ToString();
        //        MemoryStream ms = new MemoryStream(data);

        //        //Set the Response Content.
        //        response.Content = new StreamContent(ms);
        //        //Set the Content Disposition Header Value and FileName.
        //        response.Content.Headers.ContentLength = data.LongLength;
        //        response.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment");
        //        response.Content.Headers.ContentDisposition.FileName = fileName;
        //        response.Content.Headers.ContentType = new MediaTypeHeaderValue("application/octet-stream");
        //    }
        //    return response;
        //}

        //// GET : File download from web API 3
        //[HttpPost]
        //public async Task<IActionResult> Post([FromBody] DataRequestDto dto)
        //{

        //    var dtos = new List<MyDto>();

        //    var bytes = _dataExtractService.ExportToWorkbook(dtos);

        //    return File(bytes, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
        
        //}

        //// GET : File download from web API 4
        [HttpGet]
        [Route("api/FileDownloading/download")]
        public HttpResponseMessage GetMyFile()
        {
            var result =
                new HttpResponseMessage(HttpStatusCode.OK);

            // 1)Get File Bytes
            var fileName = "DogPgoto.jpg";
            var filePath = HttpContext.Current.Server
                .MapPath($"~/UploadedInvoices/{fileName}");
            var fileBytes = File.ReadAllBytes(filePath);

            //2) Add bytes to a memory stream
            var fileMemStream =
                new MemoryStream(fileBytes);

            //3) Add memory stream to response
                result.Content = new StreamContent(fileMemStream);

            //4) build response headers
            var headers = result.Content.Headers;
            headers.ContentDisposition = 
                new ContentDispositionHeaderValue("attachment");

            headers.ContentDisposition.FileName = fileName;

            headers.ContentType =
                new MediaTypeHeaderValue("application/jpg");
            headers.ContentLength = fileMemStream.Length;

            return result;

        }

        // GET: api/Invoices/5
        [ResponseType(typeof(Invoice))]
        public async Task<IHttpActionResult> GetInvoice(int id)
        {
            Invoice invoice = await db.Invoice.FindAsync(id);
            if (invoice == null)
            {
                return NotFound();
            }

            return Ok(invoice);
        }

        // POST: api/Invoice
    
        [HttpPost]
        [Route("AddInvoices")]
        public Invoice AddInvoices(InvoiceVM invoice)
        {
            Invoice inv = new Invoice();
            try
            {
                inv = invoice.MapToInvoice();
                inv.InvFile = invoice.CostCenterName + "-" + invoice.SupplierName + "-" + invoice.invNumber + ".pdf";
                db.Invoice.Add(inv);
                db.SaveChanges();

                Notification nt = new Notification();
                nt.seen = false;
                nt.Description = "Invoice created" + inv.invNumber;
                nt.Url = "/operation/invoicemng";


                this.ntSrv.AddNotification(nt);
            }
            catch (Exception ex)
            {

                throw;
            }


            return  inv;
        }

        [Route("UploadInvoice")]
        [HttpPost]
        public string UploadInvoice()
        {
            string message = "";
            HttpResponseMessage result = null;
            var httpRequest = HttpContext.Current.Request;
   
                if (httpRequest.Files.Count > 0)
                {
                    HttpPostedFile file = httpRequest.Files[0];
                    Stream stream = file.InputStream;
                }
                return "";
        }

        // raaaaaaaaaaaaaaaaaaaaaaaaaamy
        //[ResponseType(typeof(Invoice))]
        //public async Task<IHttpActionResult> PostInvoice(InvoiceLinesVM invoice)
        //{
        //    Invoice inv = invoice.MapToInvoiceLine();

        //    db.Invoice.Add(inv);
        //    await db.SaveChangesAsync();

        //    return CreatedAtRoute("DefaultApi", new { id = inv.InvoiceId }, inv);
        //}


        // PUT: api/Invoices/5
        [HttpPost]
        [Route("EditInvoice")]
        public Boolean EditInvoice(Invoice invoice)
        {
            Invoice inv = new Invoice();
            try
            {
                inv = db.Invoice.Where(p => p.InvoiceId == invoice.InvoiceId).FirstOrDefault();

                db.Entry(inv).State = EntityState.Detached;

                inv.invAmount = invoice.invAmount;
                inv.invDate = invoice.invDate;
                inv.invNumber = invoice.invNumber;
                inv.invStatus = invoice.invStatus;
                inv.InvFile = invoice.InvFile;
                inv.SupplierName = invoice.SupplierName;
                inv.CostCenterName = invoice.CostCenterName;
                inv.ItemsCategoryName = invoice.ItemsCategoryName;
                inv.empHRCode = invoice.empHRCode;
                inv.EmployeeName = invoice.EmployeeName;
                inv.Remarks = invoice.Remarks;
                db.Invoice.Add(inv);
                db.Entry(inv).State = EntityState.Modified;
                db.SaveChanges();

                return true;
            }
            catch (Exception ex)
            {

                return false;
            }

        }
        //File Up
        [HttpPost]
        [Route("PostFileUpload")]
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public HttpResponseMessage PostFileUpload()
        {
            InvoiceService invSrv = new InvoiceService();
            HttpResponseMessage result = null;
            var httpRequest = HttpContext.Current.Request;
            
            if (httpRequest.Files.Count > 0)
            {
                var docfiles = new List<string>();

                foreach (string fileName in httpRequest.Files)
                {
                    try
                    {
                        HttpPostedFile _file = httpRequest.Files[0];
                        var postedFile = httpRequest.Files[0];
                        var filename = postedFile.FileName;
                        invSrv.UploadFTPPdfFile("ftp://ftp.gacegy.local/", "Uploads/", "user", "Admin@123", fileName, _file);
                    }
                    catch (WebException ex)
                    {
                        throw new Exception((ex.Response as FtpWebResponse).StatusDescription);
                    }
                    result = Request.CreateResponse(HttpStatusCode.Created, docfiles);
                }
             }
            else
            {
                result = Request.CreateResponse(HttpStatusCode.BadRequest);
            }
            return result;

        }

        //Local server file saving
        //public HttpResponseMessage Post()
        //{
        //    HttpResponseMessage result = null;
        //    var httpRequest = HttpContext.Current.Request;
        //    if (httpRequest.Files.Count > 0)
        //    {
        //        var docfiles = new List<string>();
        //        foreach (string file in httpRequest.Files)
        //        {
        //            var postedFile = httpRequest.Files[file];
        //            var filePath = HttpContext.Current.Server.MapPath("~/" + postedFile.FileName);
        //            postedFile.SaveAs(filePath);
        //            docfiles.Add(filePath);
        //        }
        //        result = Request.CreateResponse(HttpStatusCode.Created, docfiles);
        //    }
        //    else
        //    {
        //        result = Request.CreateResponse(HttpStatusCode.BadRequest);
        //    }
        //    return result;
        //}




        // DELETE: api/Invoices/5
        //  [ResponseType(typeof(Invoice))]
        [HttpGet]
        [Route("DeleteInvoice/{id}")]
        public Invoice DeleteInvoice(int id)
        {
            Invoice invoice = new Invoice();
            invoice = db.Invoice.Find(id);
            if (invoice == null)
            {
                return invoice;
            }

            db.Invoice.Remove(invoice);
            db.SaveChanges();

            return invoice;
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool InvoiceExists(int id)
        {
            return db.Invoice.Count(e => e.InvoiceId == id) > 0;
        }
        ////////////////////////////////////////
        // DELETE: Delete Selected Imported Uploaded Assests
        [HttpPost]
        [Route("DeleteSelectedInvoices")]
        public async Task<IHttpActionResult> DeleteSelectedInvoices(List<int> selectedIdsInvoices)
        {
            selectedIdsInvoices.ForEach(id =>
            {
                var i = db.Invoice.Find(id);
                if (i != null)
                {
                    db.Invoice.Remove(i);
                }
            });
            db.SaveChanges();

            return Ok(selectedIdsInvoices);
        }


    }
}