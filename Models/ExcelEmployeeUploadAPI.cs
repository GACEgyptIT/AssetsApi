using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetAPI.Models
{
    public class ExcelEmployeeUploadAPI
    {
        public int id { get; set; }
        public Boolean isUsertoLogin { get; set; }
        public string EmpCode { get; set; }
        public string Name { get; set; }
        public string accountName { get; set; }
        public string Position { get; set; }
        public string DirectMngHrCode { get; set; }
        public string DirectMngName { get; set; }
        public string DepartmentName { get; set; }
        public string BranchName { get; set; }
        public string CompanyName { get; set; }
        public string EXT { get; set; }
        public string PRI { get; set; }
        public string Mob1 { get; set; }
        public string Mob2 { get; set; }
        public string Mob3 { get; set; }
        public string IndivEmail1 { get; set; }
        public string IndivEmail2 { get; set; }
        public string IndivEmail3 { get; set; }
        public string IndivEmail4 { get; set; }
        public string GenEmail1 { get; set; }
        public string GenEmail2 { get; set; }
        public string GenEmail3 { get; set; }
        public string GenEmail4 { get; set; }
        public string GenEmail5 { get; set; }
        public string GenEmail6 { get; set; }
        public string ArchEmail1 { get; set; }
        public string ArchEmail2 { get; set; }

        public string ArchEmail3 { get; set; }
        public string ArchEmail4 { get; set; }
        public string ArchEmail5 { get; set; }
        public string ArchEmail6 { get; set; }
        public Boolean? IsExist { get; set; }
        public Boolean? duplicatHrCode { get; set; }


    }
}