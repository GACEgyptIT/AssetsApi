using IntranetAPI.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;

namespace IntranetAPI.Services
{
    public class InvoiceService
    {
        private DBContext db = new DBContext();
        public void UploadFTPPdfFile(string ftpServer, string ftpFolder, string user, string passward, string NewName, HttpPostedFile file)
        {
            string fileName = NewName;
            System.Net.FtpWebRequest rq = (System.Net.FtpWebRequest)System.Net.FtpWebRequest.Create(ftpServer + ftpFolder + fileName);
            rq.Credentials = new System.Net.NetworkCredential(user, passward);
            rq.Method = System.Net.WebRequestMethods.Ftp.UploadFile;
            Stream stream = file.InputStream;
            System.IO.Stream fs = stream;
            byte[] buffer = new byte[fs.Length];
            fs.Read(buffer, 0, buffer.Length);
            fs.Close();
            System.IO.Stream ftpstream = rq.GetRequestStream();
            ftpstream.Write(buffer, 0, buffer.Length);
            ftpstream.Close();
          
        }

        public void DeleteTempInvoice(int id)
        {
            string fileName = db.Invoice.Find(id).InvFile;
            string localFilePath = @"D:\Down\" + fileName;

            FileInfo file = new FileInfo(localFilePath);
            if (file.Exists)
            {
                var myFile = File.Create(localFilePath);
                myFile.Close();
               
                file.Delete();
            }
        }
        //public void DownloadFTPFile(string filename)
        //{
        //    string ftpsrv = "ftp://ftp.gacegy.local/";
        //    string folder = "Uploads/";
        //    string usr = "user";
        //    string psw = "Admin@123";
        //    string fName = "Cairo-Future-88888.pdf";

        //    try
        //    {
        //        /* Create an FTP Request */
        //        var ftpRequest = (FtpWebRequest)FtpWebRequest.Create(ftpsrv + folder);
        //        /* Log in to the FTP Server with the User Name and Password Provided */
        //        ftpRequest.Credentials = new NetworkCredential(usr, psw);
        //        /* When in doubt, use these options */
        //        ftpRequest.UseBinary = true;
        //        ftpRequest.UsePassive = true;
        //        ftpRequest.KeepAlive = true;
        //        /* Specify the Type of FTP Request */
        //        ftpRequest.Method = WebRequestMethods.Ftp.DownloadFile;
        //        /* Establish Return Communication with the FTP Server */
        //        var ftpResponse = (FtpWebResponse)ftpRequest.GetResponse();
        //        /* Get the FTP Server's Response Stream */
        //        var ftpStream = ftpResponse.GetResponseStream();

        //        // TODO: you might need to extract these settings from the FTP response
        //        const string contentType = "application/zip";
        //        const string fileNameDisplayedToUser = "Cairo-Future-88888.pdf";


        //        return File(ftpStream, contentType, fileNameDisplayedToUser);
        //    }
        //    catch (Exception ex)
        //    {
        //        //  _logger.Error(ex);
        //    }
        //}


        //public void TempFnUpdateInvociesData()
        //{
        //    DBContext db = new DBContext();

        //    List<Invoice> invs = new List<Invoice>();
        //    try
        //    {
        //        invs = db.Invoice.ToList();
        //    }
        //    catch (Exception ex)
        //    {

        //        throw;
        //    }
 

        //    foreach (var inv in invs)
        //    {
        //        Invoice i = new Invoice();
        //        db.Invoice.Where(ii => ii.InvoiceId == inv.InvoiceId).FirstOrDefault().empHRCode = inv.Employee?.empHRCode;
        //        db.Invoice.Where(ii => ii.InvoiceId == inv.InvoiceId).FirstOrDefault().EmployeeName = inv.Employee?.empFullName;
        //        db.Invoice.Where(ii => ii.InvoiceId == inv.InvoiceId).FirstOrDefault().SupplierName = inv.Supplier?.splName;
        //        db.Invoice.Where(ii => ii.InvoiceId == inv.InvoiceId).FirstOrDefault().CostCenterName = inv.CostCenter?.ccName;
        //        db.Invoice.Where(ii => ii.InvoiceId == inv.InvoiceId).FirstOrDefault().ItemsCategoryName = inv.ItemsCategory?.icName;
        //        db.SaveChanges();
        //    }
        //}

    }
}