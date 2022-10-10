using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace IntranetAPI.Models
{
    public class AssetCategory
    {
        [Key]
        public int AssetCategoryId { get; set; }
        public string astCategoryName { get; set; }
        public string astCategoryCode { get; set; }
        public virtual ICollection<AssetType> AssetTypes { get; set; }
    }
}