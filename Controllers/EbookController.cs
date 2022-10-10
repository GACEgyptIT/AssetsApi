using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;

namespace IntranetAPI.Controllers
{
    [RoutePrefix("api/Ebook")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class EbookController : ApiController
    {
        //string bookPath_Pdf = @"C:\Data\Development Work\GAC\Projects\WebAPIfileDownload\FilesForDownloads\sample.pdf";
        //string bookPath_xls = @"C:\MyWorkSpace\SelfDev\UserAPI\UserAPI\Books\sample.xls";
        //string bookPath_doc = @"C:\MyWorkSpace\SelfDev\UserAPI\UserAPI\Books\sample.doc";
        //string bookPath_zip = @"C:\MyWorkSpace\SelfDev\UserAPI\UserAPI\Books\sample.zip";

        //string filsPath = @"~/UploadedInvoices/";

        [HttpGet]
        [Route("Ebook/GetBookFor/{fileName}/{fileType}")]
     
        public IHttpActionResult GetbookFor(string fileName, string fileType)
        {
       //     string reqBook = fileType.ToLower() == "pdf" ? bookPath_Pdf : (fileType.ToLower() == "xls" ? bookPath_xls : (fileType.ToLower() == "doc" ? bookPath_doc : bookPath_zip));
       //     string bookName = "sample." + fileType.ToLower();

         //   string selectedFile = filsPath + fileName;
            var reqFile = HttpContext.Current.Server.MapPath("~/UploadedInvoices/" + fileName);

            //converting Pdf file into bytes array  
            var dataBytes = File.ReadAllBytes(reqFile);
            //adding bytes to memory stream   
            var dataStream = new MemoryStream(dataBytes);
            return new eBookResult(dataStream, Request, fileName);
        }
        [HttpGet]
        [Route("Ebook/GetBookForHRM/{fileName}/{fileType}")]
        public HttpResponseMessage GetBookForHRM(string fileName, string fileType)
        {
            //     string reqBook = fileType.ToLower() == "pdf" ? bookPath_Pdf : (fileType.ToLower() == "xls" ? bookPath_xls : (fileType.ToLower() == "doc" ? bookPath_doc : bookPath_zip));
            //    string bookName = "sample." + fileType.ToLower();
            var reqFile = HttpContext.Current.Server.MapPath("~/UploadedInvoices/" + fileName);
            //converting Pdf file into bytes array  
            var dataBytes = File.ReadAllBytes(reqFile);
            //adding bytes to memory stream   
            var dataStream = new MemoryStream(dataBytes);

            HttpResponseMessage httpResponseMessage = Request.CreateResponse(HttpStatusCode.OK);
            httpResponseMessage.Content = new StreamContent(dataStream);
            httpResponseMessage.Content.Headers.ContentDisposition = new System.Net.Http.Headers.ContentDispositionHeaderValue("attachment");
            httpResponseMessage.Content.Headers.ContentDisposition.FileName = fileName;
            httpResponseMessage.Content.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue("application/octet-stream");

            return httpResponseMessage;
        }
    }

    public class eBookResult : IHttpActionResult
    {
        MemoryStream bookStuff;
        string PdfFileName;
        HttpRequestMessage httpRequestMessage;
        HttpResponseMessage httpResponseMessage;
        public eBookResult(MemoryStream data, HttpRequestMessage request, string filename)
        {
            bookStuff = data;
            httpRequestMessage = request;
            PdfFileName = filename;
        }
        public System.Threading.Tasks.Task<HttpResponseMessage> ExecuteAsync(System.Threading.CancellationToken cancellationToken)
        {
            httpResponseMessage = httpRequestMessage.CreateResponse(HttpStatusCode.OK);
            httpResponseMessage.Content = new StreamContent(bookStuff);
            //httpResponseMessage.Content = new ByteArrayContent(bookStuff.ToArray());  
            httpResponseMessage.Content.Headers.ContentDisposition = new System.Net.Http.Headers.ContentDispositionHeaderValue("attachment");
            httpResponseMessage.Content.Headers.ContentDisposition.FileName = PdfFileName;
            httpResponseMessage.Content.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue("application/octet-stream");

            return System.Threading.Tasks.Task.FromResult(httpResponseMessage);
        }
    }
}
