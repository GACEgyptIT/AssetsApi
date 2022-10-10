using IntranetAPI.ModelViews;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetAPI.ViewModels
{
    public class SOH
    {
        public DateTime FromDate { get; set; }
        public DateTime ToDate { get; set; }
        public string ItemName { get; set; }
        public string StoreName { get; set; }
        public string EmpName { get; set; }
        public string DptName { get; set; }
        public string BrnName { get; set; }
        public string ComName { get; set; }

        public Nullable<int> itmId { get; set; }
        public Nullable<int> strId { get; set; }
        public Nullable<int> empId { get; set; }
        public Nullable<int> dptId { get; set; }
        public Nullable<int> brnId { get; set; }
        public Nullable<int> comId { get; set; }


        public ItemVM itemVM { get; set; }
        public StoreVM storeVM { get; set; }
        public EmployeeVM employeeVM { get; set; }
        public DepartmentVM departmentVM { get; set; }
        public BranchVM branchVM { get; set; }
        public CompanyVM companyVM { get; set; }


        public List<ItemVM> ItemVMs { get; set; }
        public List<StoreVM> StoreVMs { get; set; }
        public List<EmployeeVM> EmployeeVMs { get; set; }
        public List<DepartmentVM> DepartmentVMs { get; set; }
        public List<BranchVM> BranchVMs { get; set; }
        public List<CompanyVM> CompanyVMs { get; set; }

    }

    //class store
    //{
    //    public string StoreName { get; set; }
    //    public List<item> items { get; set; }
    //}
    //class item
    //{
    //    public string ItemName { get; set; }
    //    public Nullable<int> Qnt { get; set; }
    //    store store { get; set; }
    //}
}