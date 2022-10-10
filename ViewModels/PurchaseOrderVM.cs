using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace IntranetAPI.ViewModels
{
    public class PurchaseOrderVM
    {
        public int PurchaseOrderId { get; set; }
        public string poRemarks { get; set; }
        public Nullable<int> empId { get; set; }
        public string accountName { get; set; }

        public Nullable<float> poTotalAmount { get; set; }
        public string stsName { get; set; }
        public int splId { get; set; }
        public string splName { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime poDate { get; set; }
        public List<PurchaseRequestVM> PurchaseRequestes { get; set; }
        public List<ItemVM> Items { get; set; }

        public bool AuthLevel1_HD { get; set; }
        public bool HDApproved { get; set; }
        public bool AuthLevel2_OM { get; set; }
        public bool OMApproved { get; set; }
        public bool AuthLevel_HR { get; set; }
        public bool HRApproved { get; set; }
        public bool AuthLevel3_IT { get; set; }
        public bool ITApproved { get; set; }
        public bool AuthLevel4_GM { get; set; }
        public bool GMApproved { get; set; }

    }
}