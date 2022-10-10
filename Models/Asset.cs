using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace IntranetAPI.Models
{
    public class AssignAssets
    {
        public int toEmpId { get; set; }
        public string toEmpName { get; set; }
        public List<int> assetIds { get; set; }

    }
    public class Asset
    {
        [Key]
        public int astId { get; set; }
        public string astDescription { get; set; }

        public string AssetCategoryName { get; set; }
        public string AssetTypeName { get; set; }
        public string AssetBrandName { get; set; }
        public string astBrandCode { get; set; }
        public string astCode { get; set; }  
        public string astSerialNumber { get; set; }
        public string astPartNumber { get; set; }
        public string astDialNumber { get; set; }
        public string astCircuitNumber { get; set; }
        [Column(TypeName = "datetime2")]
        public DateTime? astPurchaseDate { get; set; }
        public string Charging { get; set; }
        public string AccNumber { get; set; }
        public Boolean IsScrap { get; set; }

        public Nullable<int> empId { get; set; }
        public Nullable<int> oprId { get; set; }
        public Nullable<int> OperatorRatePlanId { get; set; }
        public Nullable<int> OprAccNumberId { get; set; }
        public Nullable<int> AssetBrandId { get; set; }

        public virtual AssetBrand AssetBrand { get; set; }
        public virtual Employee Employee { get; set; }
        //public virtual Operator Operator { get; set; }
        //public virtual OperatorRatePlan OperatorRatePlan { get; set; }
        //public virtual OprAccNumber OprAccNumber { get; set; }


  //      public virtual ICollection<AssetTracking> AssetTrackings { get; set; }


        //public virtual ICollection<AssetInvoice> AssetInvoices { get; set; }

    }

}