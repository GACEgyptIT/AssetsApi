using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace IntranetAPI.Models
{
    public class EmpGmail
    {
        [Key]
        public int EmpGmailId { get; set; }
        public Nullable<int> empId { get; set; }
        public int genEmailId { get; set; }
        public virtual Employee Employee { get; set; }
        public virtual GenaricEmail GenaricEmail { get; set; }
    }
}