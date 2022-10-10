using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace IntranetAPI.Models
{
    public class Domain
    {
        [Key]
        public int domId { get; set; }
        public string domName { get; set; }
    }
}