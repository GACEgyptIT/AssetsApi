//using System;
//using System.Collections.Generic;
//using System.ComponentModel.DataAnnotations;
//using System.ComponentModel.DataAnnotations.Schema;
//using System.Linq;
//using System.Web;

//namespace IntranetAPI.Models
//{
//    public class PurchaseOrder
//    {
//           [Key]
//            public int PurchaseOrderId { get; set; }
//            public string poRemarks { get; set; }
//            public int StatusId { get; set; }
//            public int splId { get; set; }

//            [Column(TypeName = "datetime2")]
//            public DateTime poDate { get; set; }

//        public bool AuthLevel1_HD { get; set; }
//        public bool HDApproved { get; set; }
//        public bool AuthLevel2_OM { get; set; }
//        public bool OMApproved { get; set; }

//        public bool AuthLevel_HR { get; set; }
//        public bool HRApproved { get; set; }
//        public bool AuthLevel3_IT { get; set; }
//        public bool ITApproved { get; set; }
//        public bool AuthLevel4_GM { get; set; }
//        public bool GMApproved { get; set; }

//        public Nullable<int> empId { get; set; }
//            public virtual Employee Employee { get; set; }

//            public virtual ICollection<ItemPO> ItemPOs { get; set; }
//            public virtual ICollection<PurchaseRequest> PurchaseRequests { get; set; }
//            public virtual ICollection<Receiving> Receivings { get; set; }
//            public virtual Supplier Supplier { get; set; }
//            public virtual Status Status { get; set; }
//    }
//}