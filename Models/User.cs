//using System;
//using System.Collections.Generic;
//using System.ComponentModel.DataAnnotations;
//using System.ComponentModel.DataAnnotations.Schema;
//using System.Linq;
//using System.Web;

//namespace IntranetAPI.Models
//{
//    public class User
//    {
//        [Key]
//        public int usrId { get; set; }
//        public string EmpImg { get; set; }
//        public string usrFirstName { get; set; }
//        public string usrSecondName { get; set; }
//        public string usrFullName { get; set; }

//        public string usrAccountName { get; set; }
//        public string usrPassword { get; set; }
//        public string usrEmail { get; set; }
//        public string usrProfileURL { get; set; }

//        [Column(TypeName = "datetime2")]
//        public DateTime LoginTime { get; set; }

//        [Column(TypeName = "datetime2")]
//        public DateTime? usrBirhtday { get; set; }
//        public string usrGender { get; set; }
//        public int? roleId { get; set; }
//        public virtual Role Role { get; set; }
//        public virtual ICollection<AssetTracking> AssetTrackings { get; set; }
   
//    }
//}