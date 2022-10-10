using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Web;

namespace IntranetAPI.Helpers
{
    public class HelpService
    {

        //public bool SendingEmail(string toEmail, string subject, string emailBody)
        //{
        //    try
        //    {
        //        String userName = "abubakr.fathy@gac.com";
        //        String password = "Laserjet4";
        //        MailMessage msg = new MailMessage();
        //        msg.To.Add(new MailAddress("abubakr.fathy@gac.com"));
        //        msg.CC.Add(new MailAddress("abubakr.fathy@gac.com"));
        //        msg.From = new MailAddress("abubakr.fathy@gac.com");
        //        msg.Subject = "Test Office 365 Account";
        //        msg.Body = "My body"; //createBody(payertype, payerid, AgencyRef, RevCode, EntryDate, Webg, fullname, email, amount);//"Testing email using Office 365 account.";
        //        msg.IsBodyHtml = true;
        //        SmtpClient client = new SmtpClient();
        //        client.Host = "emapp2.gwnoc.com";
        //        client.Credentials = new System.Net.NetworkCredential(userName, password);
        //        client.Port = 587;
        //        client.EnableSsl = true;
        //        client.Send(msg);

        //        return true;
        //    }
        //    catch (Exception ex)
        //    {
        //        return false;
        //    }
        //}

        public bool SendingEmail(string toEmail, string subject, string emailBody)
        {
            try
            {
                string senderEmail = System.Configuration.ConfigurationManager.AppSettings["senderEmail"].ToString();
                string senderPassword = System.Configuration.ConfigurationManager.AppSettings["senderPassword"].ToString();

                //  SmtpClient client = new SmtpClient("smtp.gmail.com", 587);  
                SmtpClient client = new SmtpClient("smtp.office365.com", 587);

                client.EnableSsl = true;
                client.Timeout = 100000;
                client.DeliveryMethod = SmtpDeliveryMethod.Network;
                client.UseDefaultCredentials = true;
                client.Credentials = new NetworkCredential(senderEmail, senderPassword);

                MailMessage mailMessage = new MailMessage(senderEmail, toEmail, subject, emailBody);
                mailMessage.IsBodyHtml = true;
                mailMessage.BodyEncoding = UTF8Encoding.UTF8;
                client.Send(mailMessage);

                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
    }
}