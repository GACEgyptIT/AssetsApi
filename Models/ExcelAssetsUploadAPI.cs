using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace IntranetAPI.Models
{
    public class ExcelAssetsUploadAPI
    {
        [Key]
        public int astId { get; set; }
        public string AssetCategoryName { get; set; }
        public string AssetTypeName { get; set; }
        public string AssetBrandName { get; set; }

        public int AssetBrandId { get; set; }
        public string astBrandCode { get; set; }
        public string Description { get; set; }

        public string SerialNumber { get; set; }
        public string PartNumber { get; set; }
        public string DialNumber { get; set; }
        public string CircuitNumber { get; set; }

        public string EmpHRCode { get; set; }
        public string EmpName { get; set; }
        public string CompanyName { get; set; }
        public string BranchName { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime? astPurchaseDate { get; set; }
        public Boolean? IsExist { get; set; }
        public Boolean? duplicatSerialNumber { get; set; }
        public Boolean? duplicatPartNumber { get; set; }

        public Nullable<int> AssignedToEmpId { get; set; }
        public Nullable<int> byUserId { get; set; }


    }
}