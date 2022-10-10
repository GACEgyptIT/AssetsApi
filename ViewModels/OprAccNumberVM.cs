using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetAPI.ViewModels
{
    public class OprAccNumberVM
    {
        public int OprAccNumberId { get; set; }
        public string OprAccNumberName { get; set; }

        public Nullable<int> oprId { get; set; }
        public string OperatorName { get; set; }
    }
}