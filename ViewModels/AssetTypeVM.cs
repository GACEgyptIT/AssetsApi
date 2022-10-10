using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetAPI.ViewModels
{
    public class AssetTypeVM
    {
        public int AssetTypeId { get; set; }
        public string astTypeName { get; set; }
        public string astTypeCode { get; set; }
        public List<AssetBrandVM> AssetBrandVMs { get; set; }
    }
}