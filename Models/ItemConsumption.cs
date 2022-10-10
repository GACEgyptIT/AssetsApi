//using System;
//using System.Collections.Generic;
//using System.ComponentModel.DataAnnotations.Schema;
//using System.Linq;
//using System.Web;

//namespace IntranetAPI.Models
//{
//    public class ItemConsumption
//    {
//        public int ItemConsumptionId { get; set; }


//        [Column(TypeName = "datetime2")]
//        public DateTime consDate { get; set; }
//        public Nullable<int> itmQnt { get; set; }
//        public Nullable<float> Price { get; set; }
//        public Nullable<float> Cost { get; set; }

//        public Nullable<int> itmId { get; set; }
//        public Nullable<int> ReceivingId { get; set; }
//        public Nullable<int> TransferId { get; set; }
//        public Nullable<int> empId { get; set; }
//        public Nullable<int> dptId { get; set; }
//        public Nullable<int> brnId { get; set; }
//        public Nullable<int> comId { get; set; }


//        public virtual Item Item { get; set; }
//        public virtual Receiving Receiving { get; set; }
//        public virtual Transfer Transfer { get; set; }
//        public virtual Employee Employee { get; set; }
//        public virtual Department Department { get; set; }
//        public virtual Branch Branch { get; set; }
//        public virtual Company Company { get; set; }




//    }
//}