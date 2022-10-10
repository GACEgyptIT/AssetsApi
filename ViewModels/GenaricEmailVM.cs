using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetAPI.ViewModels
{
    public class GenaricEmailVM
    {

        public int genEmailId { get; set; }
        public string genEmailAddress { get; set; }

        public virtual List<int> empIds { get; set; }

    }
}