using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace IntranetAPI.Models
{
    public class Department
    {
        [Key]
        public int dptId { get; set; }
        public string dptName { get; set; }
        public string dptCode { get; set; }

        public virtual ICollection<Employee> Employees { get; set; }

        //public virtual ICollection<ItemConsumption> ItemConsumptions { get; set; }
    }
}