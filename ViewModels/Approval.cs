using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetAPI.ViewModels
{
    public class ApproveReject
    {
        public int PrId { get; set; }
        public int PoId { get; set; }

        public string ActionType { get; set; }
        public int ActionByEmpId { get; set; }
    }
}