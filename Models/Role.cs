using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetAPI.Models
{
    public class Role
    {
        public int roleId { get; set; }
        public string roleName { get; set; }

        public virtual ICollection<RolePrivilege> RolePrivileges { get; set; }
        public virtual ICollection<EmpRole> EmpRoles { get; set; }

        //public virtual ICollection<User> Users { get; set; }
    }
}