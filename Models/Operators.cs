//using System;
//using System.Collections.Generic;
//using System.ComponentModel.DataAnnotations;
//using System.Linq;
//using System.Web;

//namespace IntranetAPI.Models
//{
//    public class Operator
//    {
//        [Key]
//        public int oprId { get; set; }
//        public string oprName { get; set; }
//        public virtual ICollection<Asset> Assets { get; set; }
//        public virtual ICollection<OperatorRatePlan> OperatorRatePlans { get; set; }
//        public virtual ICollection<OprAccNumber> OprAccNumbers { get; set; }
//    }
//}