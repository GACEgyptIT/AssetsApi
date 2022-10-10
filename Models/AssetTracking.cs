using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace IntranetAPI.Models
{
    public class AssetTracking
    {
        [Key]
        public int AssetTrackingId { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime DateTime { get; set; }
        public string From { get; set; }
        public string To { get; set; }

        public string empHRCode { get; set; }
        public string byUserName { get; set; }
        public string astCode { get; set; }
        public string AssetBrandName { get; set; }


        //public int astId { get; set; }
        //public Nullable<int> empId { get; set; }
        //public virtual Asset Asset { get; set; }

        ////public virtual User User { get; set; }
        //public virtual Employee Employee { get; set; }

    }
}