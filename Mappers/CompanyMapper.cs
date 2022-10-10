using IntranetAPI.Models;
using IntranetAPI.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetAPI.Mappers
{
    public static class CompanyMapper
    {
        public static CompanyVM MapToCompanyVM(this Company com)
        {
            return new CompanyVM
            {
                comId = com.comId,
                comCode = com.comCode,
                comName = com.comName,
            };
        }
        public static List<CompanyVM> MapToCompanyListVM(this List<Company> coms)
        {
            return coms.Select(com => new CompanyVM
            {
                comId = com.comId,
                comCode = com.comCode,
                comName = com.comName,
         //       Assets = com.Assets.Where(a => a.comId == com.comId).ToList().MapToAssetListVM()

            }).ToList();
        }
    }
}