using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace IntranetAPI.Models
{
    public class Branch
    {
        [Key]
        public int brnId { get; set; }
        public string brnCode { get; set; }
        public string brnName { get; set; }

        public virtual ICollection<Employee> Employees { get; set; }
 //       public virtual ICollection<ItemConsumption> ItemConsumptions { get; set; }


    }
}