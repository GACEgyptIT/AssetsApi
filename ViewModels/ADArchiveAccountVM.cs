using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetAPI.ViewModels
{
    public class ADArchiveAccountVM
    {

        public int ADArchiveAccountId { get; set; }
        public string archName { get; set; }
        public virtual List<EmpArchAccountVM> EmpArchAccountVM { get; set; }

    }
}