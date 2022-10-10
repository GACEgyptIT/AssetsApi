//using System;
//using System.Collections.Generic;
//using System.ComponentModel.DataAnnotations;
//using System.ComponentModel.DataAnnotations.Schema;
//using System.Linq;
//using System.Web;

//namespace IntranetAPI.Models
//{
//    public class Receiving
//    {
//        [Key]
//        public int ReceivingId { get; set; }

//        public Nullable<int> ItemId { get; set; }

//       [Column(TypeName = "datetime2")]
//        public DateTime recDate { get; set; }

//        public string ReceiveTo { get; set; }
//        public int itmQnt { get; set; }
//        public string FromSuplierName { get; set; }
//        public string ToStoreName { get; set; }

//        public Nullable<int> EmployeeRecID { get; set; }
//        public Nullable<int> DptID { get; set; }
//        public Nullable<int> BrnID { get; set; }
//        public Nullable<int> ComID { get; set; }

//        public string EmpName { get; set; }
//        public string DptName { get; set; }
//        public string BrnName { get; set; }
//        public string ComName { get; set; }

//        public Nullable<int> StoreId { get; set; }
//        public int PurchaseOrderId { get; set; }

//        public int empId { get; set; }
//        public virtual Employee Employee { get; set; }

//        public virtual PurchaseOrder PO { get; set; }
//        public virtual Store Store { get; set; }
//        //public virtual User User { get; set; }
//        public virtual ICollection<ItemStore> ItemStores { get; set; }
//        public virtual ICollection<ItemConsumption> ItemConsumption { get; set; }

//    }
//}

