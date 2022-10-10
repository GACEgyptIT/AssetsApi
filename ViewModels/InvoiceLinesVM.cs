using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Permissions;
using System.Web;

namespace IntranetAPI.ViewModels
{
    public class InvoiceLinesVM
    {
        public int id { get; set; }
        public string invNumber { get; set; }
        public DateTime invDate { get; set; }
        public string Remarks { get; set; }
        public string invStatus { get; set; }
        public string InvFile { get; set; }
        public int icId { get; set; }
        public int CostCenterId { get; set; }
        public int splId { get; set; }
        public float NationalCharges { get; set; }
        public float InternationalCharges { get; set; }
        public float RoamingCharges { get; set; }
        public float OtherCharges { get; set; }
        public float TotalBeforeTaxs { get; set; }
        public float NonTaxedCharges { get; set; }
        public float TotalAfterTaxs { get; set; }
        public float PersonalCharge { get; set; }
        public float BusinessCharge { get; set; }
        public List<Line> Lines { get; set; }
    }

    public class Line
    {
        public int assetCode { get; set; }
        public int lineNumber { get; set; }
        public int simNumber { get; set; }
        public int empName { get; set; }
        public int dptName { get; set; }
        public int brnName { get; set; }
        public int comName { get; set; }
        public int empAmounts { get; set; }
        public int dptAmounts { get; set; }
        public int brnAmounts { get; set; }
        public int comAmounts { get; set; }
    }
}