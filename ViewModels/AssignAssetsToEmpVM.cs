using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetAPI.ViewModels
{
    public class AssignAssetsToEmpVM
    {
        public int empId { get; set; }
        public string empFullName { get; set; }
        public string empHRCode { get; set; }

        public List<AssetVM> assetsCurrent { get; set; }
        public List<AssetVM> assetsNew { get; set; }
    }
}