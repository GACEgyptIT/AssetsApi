using IntranetAPI.ModelViews;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetAPI.ViewModels
{
    public class AssetVM
    {
        public int astId { get; set; }

        public string AssetCategoryName { get; set; }
        public string AssetTypeName { get; set; }
        public string AssetBrandName { get; set; }
        public string astBrandCode { get; set; }
        public string astDescription { get; set; }
        public string astCode { get; set; }
        public string astSerialNumber { get; set; }
        public string astPartNumber { get; set; }
        public string astDialNumber { get; set; }
        public string astCircuitNumber { get; set; }
        public DateTime? astPurchaseDate { get; set; }
        public string Charging { get; set; }
        public string AccNumber { get; set; }
        public Boolean IsScrap { get; set; }
        public Nullable<int> AssetBrandId { get; set; }
        public Nullable<int> empId { get; set; }
        public Nullable<int> oprId { get; set; }
        public Nullable<int> OprAccNumberId { get; set; }
        public Nullable<int> OperatorRatePlanId { get; set; }

        public float amount { get; set; }


        //   public string EmpHrCode { get; set; }
        public string EmployeeName { get; set; }
        public string FromEmployeeName { get; set; }
        public string ToEmployeeName { get; set; }
        public string empHRCode { get; set; }
  //      public string empHRCode { get; set; }
        public string CompanyName { get; set; }
        public string BranchName { get; set; }
        public string DepartmentName { get; set; }
        public string OperatorRatePlanName { get; set; }
        public string OprAccNumberName { get; set; }


        public List<string> AssetTrackingVMs { get; set; }
        public EmployeeForAsset Employee { get; set; }

    }
    public class EmployeeForAsset
    {
        public string empHRCode { get; set; }
        public string empFullName { get; set; }
    }


}