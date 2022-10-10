using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace IntranetAPI.Models
{
    public class SubCategory
    {
        [Key]
        public int subCatId { get; set; }
        public string subCatName { get; set; }
        public int brndId { get; set; }

        public virtual ItemsCategory ItemsCategory { get; set; }

        public virtual ICollection<Brand> Brands { get; set; }

    }
}