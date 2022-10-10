using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace IntranetAPI.Models
{
    public class Status
    {
        [Key]
        public int StatusId { get; set; }
        public string stsRefernce { get; set; }
        public string stsName { get; set; }
        //public virtual ICollection<PurchaseOrder> PurchaseOrder { get; set; }
        //public virtual ICollection<PurchaseRequest> PurchaseRequest { get; set; }

    }
}