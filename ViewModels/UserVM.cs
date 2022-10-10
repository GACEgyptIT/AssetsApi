using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace IntranetAPI.ViewModels
{
    public class UserVM
    {
        public int usrId { get; set; }
        public string EmpImg { get; set; }
        public string usrAccountName { get; set; }
        public string usrFullName { get; set; }
        public string usrEmail { get; set; }
        public string usrGender { get; set; }
        public string IP_Address { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime LoginTime { get; set; }
        public string usrProfileURL { get; set; }
        public int roleId { get; set; }
        public string userRole { get; set; }
        public List<string> Privileges { get; set; }

    }
}