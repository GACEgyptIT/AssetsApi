using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace IntranetAPI.Models
{
    public class Brand
    {
        [Key]
        public int brndId { get; set; }
        public string brndName { get; set; }

        public int mdlId { get; set; }

        public virtual SubCategory SubCategory { get; set; }

        public virtual ICollection<Model> Models { get; set; }
    }
}