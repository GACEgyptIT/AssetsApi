using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetAPI.Models
{
    public class EmpRole
    {
        public int EmpRoleId { get; set; }
        public int roleId { get; set; }
        public Nullable<int> empId { get; set; }
        public virtual Employee Employee { get; set; }
        public virtual Role Role { get; set; }


    }
}