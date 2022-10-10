using IntranetAPI.Models;
using IntranetAPI.ViewModels;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace IntranetAPI.ModelViews
{
        public class EmployeeVM
        {
                public Nullable<int> empId { get; set; }
                public Boolean isUsertoLogin { get; set; }
                public int empfavId { get; set; }
                public string empHRCode { get; set; }
                public string empFirstName { get; set; }
                public string empSecondName { get; set; }
                public string empLastName { get; set; }
                public string empFullName { get; set; }
                public string accountName { get; set; }
                public string usrPassword { get; set; }

                public string empExt { get; set; }
                public string empPri { get; set; }
                public string empMobile0 { get; set; }
                public string empMobile1 { get; set; }
                public string empMobile2 { get; set; }
                public string empGender { get; set; }
                public string empAddress { get; set; }
                public DateTime? empBirhtday { get; set; }
                public int? comId { get; set; }
                public int? dptId { get; set; }
                public int? brnId { get; set; }
                public int? posId { get; set; }
                public string directMngHRcode { get; set; }
                public string directMngName { get; set; }

                public Nullable<float> Cost { get; set; }
                public Nullable<int> Qnt { get; set; }
                public Nullable<float> Price { get; set; }

  
                public DateTime? empCreationDate { get; set; }

                public string empImageProfileUrl { get; set; } 
                public string empIndividualEmail0 { get; set; }
                public string empIndividualEmail1 { get; set; }
                public string empIndividualEmail2 { get; set; }
                public string empIndividualEmail3 { get; set; }
                public Boolean? EmployeeActive { get; set; }
                public string userAccName { get; set; }
                public string EmpImg { get; set; }
 
                public string DepartmentName { get; set; }
                public string BranchName { get; set; }
                public string CompanyName { get; set; }
                public string Position { get; set; }  
                public List<emailsINDIVVM> emailsINDIV { get; set; }
                public List<emailsGENVM> emailsGEN { get; set; }
                public List<ADArchiveAccountVM> emailsARCH { get; set; }
                public List<AssignedAsset> assetsCurrent { get; set; }
                public List<AssignedAsset> assetsNew { get; set; }
                public List<ItemVM> ItemVMs { get; set; }

                public List<EmpRole> EmpRoles { get; set; }
                public List<RoleVM> Roles { get; set; }
                public List<string> rolesNames { get; set; }
                public List<string> Privileges { get; set; }
                public Boolean? IsExist { get; set; }
                public Boolean? duplicatHrCode { get; set; }
        }
        public class emailsINDIVVM
        {
            public string emailAddress { get; set; }
        }
        public class emailsGENVM
        {
                public int genEmailId { get; set; }
                public string genEmailAddress { get; set; }
        }
        public class EmpGmailVM
        {
                public int EmpGmailId { get; set; }
                public int empId { get; set; }
                public int genEmailId { get; set; }
        }

    //public class Roles
    //{
    //    public int EmpGmailId { get; set; }
    //    public int empId { get; set; }
    //    public int genEmailId { get; set; }
    //}
    public class AssignedAsset
        {
                public int astId { get; set; }
                public string astDescription { get; set; }
                public string astCode { get; set; }
                public string astSerialNumber { get; set; }
                public string astPartNumber { get; set; }
                public string astDialNumber { get; set; }
                public string astCircuitNumber { get; set; }
                public DateTime? astPurchaseDate { get; set; }
                public string Charging { get; set; }
                public string AccNumber { get; set; }
                public string AssetTypeName { get; set; }
                public string EmployeeName { get; set; }
        }

}