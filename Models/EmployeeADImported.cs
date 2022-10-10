using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace IntranetAPI.Models
{
    public class ADImportedAccounts
    {
        [Key]
        public int ADImportedAccountsId { get; set; }
        public string hrCode { get; set; }
        public string accountName { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string displayName { get; set; }
        public string email { get; set; }
        public Boolean serviceAccount { get; set; }
        public Boolean archiveAccount { get; set; }
        public string accountType { get; set; }
        public Boolean enabled { get; set; }
        public bool? IsExist { get; set; }
    }
}