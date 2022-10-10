//using System;
//using System.Collections.Generic;
//using System.ComponentModel.DataAnnotations;
//using System.Linq;
//using System.Web;

//namespace IntranetAPI.Models
//{
//    public class ItemPR
//    {
//        [Key]
//        public int ItemPRId { get; set; }
//        public int PurchaseRequestId { get; set; }
//        public int itmId { get; set; }
//        public Nullable<int> itmQnt { get; set; }

//        public virtual Item Item { get; set; }
//        public virtual PurchaseRequest PurchaseRequest { get; set; }
//    }
//}