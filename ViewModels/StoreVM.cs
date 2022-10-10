using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetAPI.ViewModels
{
    public class StoreVM
    {
        public Nullable<int> StoreId { get; set; }
        public string strName { get; set; }
        public Nullable<int> ItemQnt { get; set; }
        public Nullable<float> ItemPrice { get; set; }
        public Nullable<float> ItemCost { get; set; }
        public List<ItemVM> Items { get; set; }
    }
}