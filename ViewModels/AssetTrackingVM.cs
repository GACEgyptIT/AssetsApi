using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetAPI.ViewModels
{
    public class AssetTrackingVM
    {
            public string AssetLogDetails { get; set; }
            public int AssetTrackingId { get; set; }
            public DateTime DateTime { get; set; }
            public string From { get; set; }
            public string To { get; set; }
        //public int astId { get; set; }
        //public Nullable<int> empId { get; set; }


            public string astCode { get; set; }
            public string AssetTypeName { get; set; }
            public string astDescription { get; set; }
            public string EmployeeName { get; set; }
            //public AssetVM AssetVM { get; set; }
            //public UserVM UserVM { get; set; }

    }
}