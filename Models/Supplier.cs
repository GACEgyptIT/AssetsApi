using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace IntranetAPI.Models
{
    public class Supplier
    {
        [Key]
        public int splId { get; set; }
        public string splName { get; set; }
        public  Nullable<int> spOutstanding { get; set; }
 //     public virtual ICollection<Invoice> Invoice { get; set; }
   

    }
}