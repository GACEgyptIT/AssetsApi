using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace IntranetAPI.ViewModels
{
    public class PurchaseRequestVM
    {
        public int PurchaseRequestId { get; set; }

        public Nullable<int> StatusId { get; set; }

        public Nullable<int> empId { get; set; }
        public string accountName { get; set; }
        public string stsName { get; set; }
        public string stsRefernce { get; set; }

        public string prRemarks { get; set; }

        public Nullable<int> PurchaseOrderId { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime prDate { get; set; }

        public bool HD { get; set; }
        public bool HDApproved { get; set; }
        public bool OM { get; set; }
        public bool OMApproved { get; set; }
        public bool HR { get; set; }
        public bool HRApproved { get; set; }
        public bool IT { get; set; }
        public bool ITApproved { get; set; }
        public bool GM { get; set; }
        public bool GMApproved { get; set; }

        public List<ItemVM> Items { get; set; }
        public List<Authorization> Authorization { get; set; }
    }
    public class Authorization
    {
        public string AuthName { get; set; }
        public bool RequireApproval { get; set; }
        public bool Approved { get; set; }
    }
}