using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace IntranetAPI.Models
{
    public class EmpArchAccount
    {
        [Key]
        public int EmpArchAccountId { get; set; }
        public Nullable<int> empId { get; set; }
        public int ADArchiveAccountId { get; set; }
        public virtual Employee Employee { get; set; }
        public virtual ADArchiveAccount ADArchiveAccount { get; set; }
    }
}