using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetAPI.ViewModels
{
    public class ItemCategoryVM
    {
        public int icId { get; set; }
        public string icName { get; set; }

        public bool HD { get; set; }
        public bool OM { get; set; }
        public bool HR { get; set; }
        public bool IT { get; set; }
        public bool GM { get; set; }
        public List<InvoiceVM> Invoices { get; set; }

        //public List<Authorization> Authorization { get; set; }
    }

    //public class Authorization
    //{
    //    public string AuthName { get; set; }
    //    public bool state { get; set; }
    //}
}