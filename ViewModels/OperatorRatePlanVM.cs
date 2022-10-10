using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetAPI.ViewModels
{
    public class OperatorRatePlanVM
    {
        public int OperatorRatePlanId { get; set; }
        public string OperatorRatePlanName { get; set; }
        public float MonthlyCharges { get; set; }

        public Nullable<int> oprId { get; set; }
        public string OperatorName { get; set; }
    }
}