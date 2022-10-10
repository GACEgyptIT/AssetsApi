using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetAPI.ViewModels
{
    public class AssetCategoryVM
    {
        public int AssetCategoryId { get; set; }
        public string astCategoryName { get; set; }
        public string astCategoryCode { get; set; }
    //    public List<types> types { get; set; }
         public List<AssetTypeVM> AssetTypeVMs { get; set; }
    }
    public class types
    {
        public string typeName { get; set; }
        public List<string> brands { get; set; }

    }
}