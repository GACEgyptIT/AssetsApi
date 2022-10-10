using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetAPI.ViewModels
{
    public class AssetBrandVM
    {
        public int AssetBrandId { get; set; }
        public string astBrandName { get; set; }

        public string astBrandCode { get; set; }
        public List<AssetVM> AssetVMs { get; set; }
    }
}