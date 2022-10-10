using IntranetAPI.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace IntranetAPI.ViewModels
{
    public class ReceivingVM
    {
        public int ReceivingId { get; set; }
        public string poRemarks { get; set; }
        public string splName { get; set; }
        public string ReceiveTo { get; set; }
        public string strName { get; set; }
        public int ItmQnt { get; set; }
        public Nullable<float> RecTotalCost { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime recDate { get; set; }
        public int PurchaseOrderId { get; set; }
        public Nullable<int> StoreId { get; set; }
        public Nullable<int> EmployeeRecID { get; set; }
        public Nullable<int> DptId { get; set; }
        public Nullable<int> BrnId { get; set; }
        public Nullable<int> ComId { get; set; }

        public string EmpName { get; set; }
        public string DptName { get; set; }
        public string BrnName { get; set; }
        public string ComName { get; set; }
        public int userId { get; set; }
        public List<ItemVM> Items { get; set; }
        public PurchaseOrderVM PO { get; set; }
        public StoreVM Store { get; set; }

        public int empId { get; set; }
    }
}