using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace IntranetAPI.Models
{
    public class ADArchiveAccount
    {
        [Key]
        public int ADArchiveAccountId { get; set; }
        public string archName { get; set; }
        public virtual ICollection<EmpArchAccount> EmpArchAccounts { get; set; }
    }
}