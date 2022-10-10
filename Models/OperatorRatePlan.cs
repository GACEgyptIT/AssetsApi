//using System;
//using System.Collections.Generic;
//using System.ComponentModel.DataAnnotations;
//using System.Linq;
//using System.Web;

//namespace IntranetAPI.Models
//{
//    public class OperatorRatePlan
//    {
//        [Key]
//        public int OperatorRatePlanId { get; set; }
//        public string OperatorRatePlanName { get; set; }
//        public float MonthlyCharges { get; set; }
//        public Nullable<int> oprId { get; set; }
//        public virtual Operator Operator { get; set; }
//        public virtual ICollection<Asset> Assets { get; set; }
//    }
//}