using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace IntranetAPI.Models
{
    public class Company
    {
        [Key]
        public int comId { get; set; }

        public string comCode { get; set; }
        public string comName { get; set; }

        public virtual ICollection<Employee> Employees { get; set; }

 //       public virtual ICollection<ItemConsumption> ItemConsumptions { get; set; }
    }
}