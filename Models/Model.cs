using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace IntranetAPI.Models
{
    public class Model
    {
        [Key]
        public int mdlId { get; set; }
        public string mdlName { get; set; }

        public virtual Brand Brand { get; set; }
    }
}