using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace IntranetAPI.Models
{
    public class RolePrivilege
    {
        [Key]
        public int Id { get; set; }
        public int RoleId { get; set; }
        public int PrivilegeId { get; set; }

        public virtual Privilege Privilege { get; set; }
        public virtual Role Role { get; set; }
    }
}