using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace IntranetAPI.Models
{
    public class ADServiceAccount
    {

        [Key]
        public int ADServiceAccountId { get; set; }
        public string saName { get; set; }

    }
}