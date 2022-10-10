using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace IntranetAPI.Models
{
    public class Employee
    {
        [Key]
        public Nullable<int> empId { get; set; }
        public Boolean isUsertoLogin { get; set; }
        public string empHRCode { get; set; }
        public string empFirstName { get; set; }
        public string empSecondName { get; set; }
        public string empLastName { get; set; }
        public string empFullName { get; set; }
        public string empExt { get; set; }
        public string empPri { get; set; }
        public string empMobile0 { get; set; }
        public string empMobile1 { get; set; }
        public string empMobile2 { get; set; }
        public string accountName { get; set; }
        public string usrPassword { get; set; }
        public string empGender { get; set; }

        public string companyName { get; set; }
        public string branchName { get; set; }
        public string departmentName { get; set; }
        public string titleName { get; set; }

        //public Nullable<int> directMngId { get; set; }
        public string directMngHRcode { get; set; }
        public string directMngName { get; set; }
        public string empAddress { get; set; }
        [Column(TypeName = "datetime2")]
        public DateTime? empCreationDate { get; set; }
        [Column(TypeName = "datetime2")]
        public DateTime? empBirhtday { get; set; }
        public string empImageProfileUrl { get; set; }
        public string empIndividualEmail0 { get; set; }
        public string empIndividualEmail1 { get; set; }
        public string empIndividualEmail2 { get; set; }
        public string empIndividualEmail3 { get; set; }
        public Boolean? EmployeeActive { get; set; }
        public Boolean? IsExist { get; set; }
        public string EmpImg { get; set; }
        public int? comId { get; set; }
        public int? dptId { get; set; }
        public int? brnId { get; set; }
        public int? posId { get; set; }

        public virtual Department Department { get; set; }
        public virtual Branch Branch { get; set; }
        public virtual Company Company { get; set; }
        public virtual PositionTitle PositionTitle { get; set; }

        //public virtual ICollection<PurchaseRequest> PurchaseRequests { get; set; }
        //public virtual ICollection<PurchaseOrder> PurchaseOrders { get; set; }
        //public virtual ICollection<Receiving> Receivings { get; set; }
        //public virtual ICollection<Transfer> Transfers { get; set; }

        public virtual ICollection<Asset> Assets { get; set; }
        public virtual ICollection<EmpGmail> EmpGmails { get; set; }
        public virtual ICollection<EmpArchAccount> EmpArchives { get; set; }
        //public virtual ICollection<ItemConsumption> ItemConsumptions { get; set; }

 //       public virtual ICollection<AssetTracking> AssetTrackings { get; set; }
        public virtual ICollection<EmpRole> EmpRoles { get; set; }

  //      public virtual ICollection<Invoice> Invoices { get; set; }

   //     public virtual ICollection<DirectoryFavourite> DirectoryFavourites { get; set; }

    }
}