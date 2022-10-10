using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace IntranetAPI.ViewModels
{
    public class InvFromToVM
    {
        public int empId { get; set; }
        public DateTime from { get; set; }
        public DateTime to { get; set; }
        //public string ItemCategoryName { get; set; }
        //public string CostCenterName { get; set; }
        //public string SupplierName { get; set; }

    }
        public class InvoiceVM
    {
        public int InvoiceId { get; set; }
        public string invNumber { get; set; }
        public float invAmount { get; set; }
        public string Remarks { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime invDate { get; set; }
        public string InvFile { get; set; }
        public bool InvFileAttached { get; set; }
        public string invStatus { get; set; }

        public string SupplierName { get; set; }
        public string empHRCode { get; set; }
        public string EmployeeName { get; set; }
        public string CostCenterName { get; set; }
        public string ItemsCategoryName { get; set; }

        //public int? empId { get; set; }
        //public int? splId { get; set; }
        //public int? CostCenterId { get; set; }
        //public int? icId { get; set; }
        //public virtual SupplierVM Supplier { get; set; }
        //public virtual CostCenterVM CostCenter { get; set; }
        //public virtual ItemCategoryVM ItemCategoryVM { get; set; }

    }

  
}