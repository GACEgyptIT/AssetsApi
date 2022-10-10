using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace IntranetAPI.ViewModels
{
    public class ItemVM
    {
        public int itmId { get; set; }
        public string itmName { get; set; }

        public string ConsumtionName { get; set; }
        public Nullable<float> itmPrice { get; set; }
        public Nullable<int> ItmQnt { get; set; }
        //public Nullable<float> itmTotalValue { get; set; }
        public Nullable<int> ItmQntPR { get; set; }
        public Nullable<int> ItmQntPO { get; set; }
        public Nullable<int> ItmQntRec { get; set; }
        public Nullable<int> ItmQntRecCons { get; set; }
        public Nullable<int> ItmQntStore { get; set; }
        public Nullable<int> ItmQntConsumption { get; set; }
        public Nullable<float> ItmCost { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime Date { get; set; }
        public int icId { get; set; }
        public string icName { get; set; }
        public List<int> PRsIds { get; set; }
        public List<int> POsIds { get; set; }
        public List<StoreVM> Stores { get; set; }
        public List<ReceivingVM> Receivings { get; set; }
        public List<TransferVM> Transfers { get; set; }
    }
}