using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace IntranetAPI.ViewModels
{
    public class TransferVM
    {
        public int TransferId { get; set; }
        public int itmId { get; set; }
        public string itmName { get; set; }
        public int itmQnt { get; set; }
        public Nullable<float> Price { get; set; }
        public  Nullable<float> Cost { get; set; }
        public string ReceiveTo { get; set; }
        public Nullable<int> FromStoreId { get; set; }
        public Nullable<int> ToStoreId { get; set; }
        public Nullable<int> EmpId { get; set; }
        public Nullable<int> DptId { get; set; }
        public Nullable<int> BrnId { get; set; }
        public Nullable<int> ComId { get; set; }
        public string FromStoreName { get; set; }
        public string ToStoreName { get; set; }
        public string EmpName { get; set; }
        public string DptName { get; set; }
        public string BrnName { get; set; }
        public string ComName { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime trnsDate { get; set; }
        //public ItemVM Item { get; set; }

        //public StoreVM FromStore { get; set; }
        //public StoreVM ToStore { get; set; }
    }
}