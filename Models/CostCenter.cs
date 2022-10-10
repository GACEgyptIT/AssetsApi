using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace IntranetAPI.Models
{
    public class CostCenter
    {
        [Key]
        public int CostCenterId { get; set; }
        public string ccName { get; set; }
  //       public virtual ICollection<Invoice> Invoices { get; set; }
    }
}