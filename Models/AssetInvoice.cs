//using System;
//using System.Collections.Generic;
//using System.ComponentModel.DataAnnotations;
//using System.Linq;
//using System.Web;

//namespace IntranetAPI.Models
//{
//    public class AssetInvoice
//    {
//        [Key]
//        public int AssetInvoiceId { get; set; }
//        public int astId { get; set; }
//        public Nullable<int> InvoiceId { get; set; }
//        public float NationalCharges { get; set; }
//        public float InternationalCharges { get; set; }
//        public float InternetCharges { get; set; }
//        public float RoamingCharges { get; set; }
//        public float OtherCharges { get; set; }
//        public float TotalBeforeTaxs { get; set; }
//        public float NonTaxedCharges { get; set; }
//        public float TotalAfterTaxs { get; set; }
//        public float PersonalCharge { get; set; }
//        public float BusinessCharge { get; set; }

 //       public virtual Asset Asset { get; set; }
//        public virtual Invoice Invoice { get; set; }


//    }
//}