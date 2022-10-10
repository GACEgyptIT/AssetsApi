using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace IntranetAPI.Models
{
    public class Privilege
    {
        [Key]
        public int PrivilegeId { get; set; }
        public string PrivilegeName { get; set; }

        public virtual ICollection<RolePrivilege> RolePrivileges { get; set; }
    }
}