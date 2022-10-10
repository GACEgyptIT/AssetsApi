using IntranetAPI.Models;
using IntranetAPI.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetAPI.Mappers
{
    public static class CostCenterMapper
    {
        public static CostCenterVM MapToCostCenterVM(this CostCenter cc)
        {
            return new CostCenterVM
            {
                CostCenterId = cc.CostCenterId,
                ccName = cc.ccName,
                //Invoices = cc.Invoices.MapToInvoicesListVM()
            };
        }
        public static List<CostCenterVM> MapToCostCenterListVM(this List<CostCenter> ccs)
        {
            return ccs.Select(cc => new CostCenterVM
            {
                CostCenterId = cc.CostCenterId,
                ccName = cc.ccName,
                //Invoices = cc.Invoices.

            }).ToList();
        }
    }
}