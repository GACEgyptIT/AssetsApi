using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace IntranetAPI.Models
{
    public class AssetType
    {
        public int AssetTypeId { get; set; }
        public string astTypeName { get; set; }
        public string astTypeCode { get; set; }
        public virtual ICollection<AssetBrand> AssetBrands { get; set; }
        public Nullable<int> AssetCategoryId { get; set; }
        public virtual AssetCategory AssetCategory { get; set; }

    }
}