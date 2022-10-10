using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetAPI.ViewModels
{
    public class EmployeeHRMSVM
    {
            public Int64 Id { get; set; }
            public string Code { get; set; }
            public string FirstName { get; set; }
            public string LastName { get; set; }
            public string Name { get; set; }
            public string DMCode { get; set; }
            public string DirectManager { get; set; }
            public int CompanyId { get; set; }
            public string Company { get; set; }
            public string BranchId { get; set; }
            public string Branch { get; set; }
            public int DepartmentId { get; set; }
            public string Department { get; set; }
            public int JobTitleId { get; set; }
            public string JobTitle { get; set; }
            public string Extension { get; set; }
            public string PRI { get; set; }
            public string mobile1 { get; set; }
            public string mobile2 { get; set; }
            public string mobile3 { get; set; }
            public string Email1 { get; set; }
            public string Email2 { get; set; }
            public string Email3 { get; set; }
            public byte[] Photo { get; set; }

            public string PhotoString { get; set; }

    }
}