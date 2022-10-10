using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace IntranetAPI.Models
{
    public class AssetBrand
    {
        [Key]
        public int AssetBrandId { get; set; }
        public string astBrandName { get; set; }
        public string astBrandCode { get; set; }
        public int AssetTypeId { get; set; }
        public virtual AssetType AssetType { get; set; }
        public virtual ICollection<Asset> Assets { get; set; }
    }
}