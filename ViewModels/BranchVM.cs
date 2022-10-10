using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetAPI.ViewModels
{
    public class BranchVM
    {
        public int brnId { get; set; }
        public string brnCode { get; set; }
        public string brnName { get; set; }
        public Nullable<float> Cost { get; set; }
        public Nullable<int> Qnt { get; set; }
        public Nullable<float> Price { get; set; }
        public List<ItemVM> ItemVMs { get; set; }
        public List<AssetVM> Assets { get; set; }
    }
}