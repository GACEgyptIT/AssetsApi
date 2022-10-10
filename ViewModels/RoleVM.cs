using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetAPI.ViewModels
{
    public class RoleVM
    {
        public int roleId { get; set; }
        public string roleName { get; set; }

        public List<PrivilegeVM> Privileges { get; set; }

       // public List<UserVM> Users { get; set; }
    }
}