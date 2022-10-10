//using System;
//using System.Collections.Generic;
//using System.ComponentModel.DataAnnotations;
//using System.ComponentModel.DataAnnotations.Schema;
//using System.Linq;
//using System.Web;

//namespace IntranetAPI.Models
//{
//    public class Transfer
//    {
//        [Key]
//        public int TransferId { get; set; }
//        public int itmId { get; set; }

//        public int itmQnt { get; set; }
//        public Nullable<float> Price { get; set; }
//        public Nullable<float> Cost { get; set; }
//        public string FromStoreName { get; set; }
//        public string ToStoreName { get; set; }
//        public string EmpName { get; set; }
//        public string DptName { get; set; }
//        public string BrnName { get; set; }
//        public string ComName { get; set; }

//        [Column(TypeName = "datetime2")]
//        public DateTime trnsDate { get; set; }

//        public Nullable<int> empId { get; set; }
//        public virtual Employee Employee { get; set; }

//        public virtual Item Item { get; set; }

//        public virtual ICollection<ItemStore> ItemStores { get; set; }
//        public virtual ICollection<ItemConsumption> ItemConsumption { get; set; }
//    }
//}