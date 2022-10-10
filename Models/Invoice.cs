using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace IntranetAPI.Models
{
    public class Invoice
    {
        [Key]
        public int InvoiceId { get; set; }
        public string invNumber { get; set; }
        public float invAmount { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime invDate { get; set; }
        public string InvFile { get; set; }
        public bool InvFileAttached { get; set; }
        public string invStatus { get; set; }
        public string Remarks { get; set; }

        public string SupplierName { get; set; }
        public string empHRCode { get; set; }
        public string EmployeeName { get; set; }
        public string CostCenterName { get; set; }
        public string ItemsCategoryName { get; set; }

        //public int? splId { get; set; }
        //public int? icId { get; set; }
        //public int? CostCenterId { get; set; }
        //public Nullable<int> empId { get; set; }

        //public virtual Employee Employee { get; set; }
        //public virtual Supplier Supplier { get; set; }
        //public virtual CostCenter CostCenter { get; set; }
        //public virtual ItemsCategory ItemsCategory { get; set; }


    }
}