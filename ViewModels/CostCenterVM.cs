using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetAPI.ViewModels
{
    public class CostCenterVM
    {
        public int CostCenterId { get; set; }
        public string ccName { get; set; }
        public virtual List<InvoiceVM> Invoices { get; set; }
    }
}