using IntranetAPI.Models;
using IntranetAPI.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetAPI.Mappers
{
    public static class DepartmentMapper
    {
        public static DepartmentVM MapToDepartmentVM(this Department dpt)
        {
            return new DepartmentVM
            {
                dptId = dpt.dptId,
                dptName = dpt.dptName,
                dptCode = dpt.dptCode,
            };
        }
        public static List<DepartmentVM> MapToDepartmentListVM(this List<Department> dpts)
        {
            return dpts.Select(dpt => new DepartmentVM
            {
                dptId = dpt.dptId,
                dptName = dpt.dptName,
                dptCode = dpt.dptCode

            }).ToList();
        }
   
    }
}