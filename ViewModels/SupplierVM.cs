using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetAPI.ViewModels
{
    public class SupplierVM
    {
        public int splId { get; set; }
        public string splName { get; set; }
        public string splInvoiceURL { get; set; }
        public int spOutstanding { get; set; }

        public virtual List<InvoiceVM> InvoiceVMs { get; set; }
    }
}