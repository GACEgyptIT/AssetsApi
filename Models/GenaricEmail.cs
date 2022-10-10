using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace IntranetAPI.Models
{
    public class GenaricEmail
    {
        [Key]
        public int genEmailId { get; set; }
        public string genEmailAddress { get; set; }

        public virtual List<int> empIds { get; set; }

        //public virtual List<Employee> Employees { get; set; }

        public virtual ICollection<EmpGmail> EmpGmails { get; set; }

    }
}