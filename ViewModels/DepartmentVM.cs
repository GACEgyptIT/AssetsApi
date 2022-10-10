using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetAPI.ViewModels
{
    public class DepartmentVM
    {
        public int? dptId { get; set; }
        public string dptName { get; set; }

        public string dptCode { get; set; }

        public Nullable<float> Cost { get; set; }
        public Nullable<int> Qnt { get; set; }
        public Nullable<float> Price { get; set; }

        public List<ItemVM> ItemVMs { get; set; }

    }
}