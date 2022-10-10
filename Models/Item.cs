//using System;
//using System.Collections.Generic;
//using System.ComponentModel.DataAnnotations;
//using System.Linq;
//using System.Web;

//namespace IntranetAPI.Models
//{
//    public class Item
//    {
//        [Key]
//        public int itmId { get; set; }
//        public string itmName { get; set; }
//        public int itmPrice { get; set; }
//        public int icId { get; set; }
//        public virtual ItemsCategory ItemsCategory { get; set; }
//        public virtual ICollection<ItemPR> ItemPRs { get; set; }
//        public virtual ICollection<ItemPO> ItemPOs { get; set; }
//        public virtual ICollection<ItemStore> ItemStores { get; set; }
//        public virtual ICollection<ItemConsumption> ItemConsumptions { get; set; }
//        public virtual ICollection<Transfer> Transfers { get; set; }

//    }
//}