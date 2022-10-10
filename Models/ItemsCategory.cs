using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace IntranetAPI.Models
{
    public class ItemsCategory
    {
        [Key]
        public int icId { get; set; }
        public string icName { get; set; }
        public bool AuthLevel1_HD { get; set; }
        public bool AuthLevel2_OM { get; set; }
        public bool AuthLevel_HR { get; set; }
        public bool AuthLevel3_IT { get; set; }
        public bool AuthLevel4_GM { get; set; }
  //      public virtual ICollection<Invoice> Invoices { get; set; }



    }
}