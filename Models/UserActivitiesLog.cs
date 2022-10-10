using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace IntranetAPI.Models
{
    public class UserActivitiesLog
    {
        [Key]
        public int UserActivitiesLogId { get; set; }
        public string usrAccountName { get; set; }
        public string IP_Address { get; set; }
        public string ComputerName { get; set; }
        public string Action { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime ActionTime { get; set; }
    }
}