using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetAPI.ViewModels
{
    public class CompanyVM
    {
        public int comId { get; set; }
        public string comCode { get; set; }
        public string comName { get; set; }
        public Nullable<float> Cost { get; set; }
        public Nullable<int> Qnt { get; set; }
        public Nullable<float> Price { get; set; }
        public List<ItemVM> ItemVMs { get; set; }
        public List<AssetVM> Assets { get; set; }
    }
}