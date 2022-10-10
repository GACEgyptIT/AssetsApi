using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace IntranetAPI.Models
{
    public class PositionTitle
    {
        [Key]
        public int posId { get; set; }
        public string posTitleCode { get; set; }
        public string posTitle { get; set; }

        public virtual ICollection<Employee> Employees { get; set; }
    }
}