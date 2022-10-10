using IntranetAPI.Models;
using IntranetAPI.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetAPI.Mappers
{
    public static class InvoiceMapper
    {
        public static Invoice MapToInvoice(this InvoiceVM inv)
        {
            return new Invoice
            {
                InvoiceId = inv.InvoiceId,
                invAmount = inv.invAmount,
                invNumber = inv.invNumber,
                invDate = inv.invDate,
                Remarks = inv.Remarks,
                invStatus = inv.invStatus,
                InvFile = inv.InvFile,
                InvFileAttached = inv.InvFileAttached,
                empHRCode = inv.empHRCode,
                EmployeeName = inv.EmployeeName,
                ItemsCategoryName = inv.ItemsCategoryName,
                SupplierName = inv.SupplierName,
                CostCenterName = inv.CostCenterName
            };
        }

        public static Invoice MapToInvoiceLine(this InvoiceLinesVM inv)
        {
         //   List<AssetInvoice> assetInv = new List<AssetInvoice>();

            return new Invoice
            {
                InvoiceId = inv.id,
                invAmount = inv.TotalAfterTaxs,
                invNumber = inv.invNumber,
                invDate = inv.invDate,
                Remarks = inv.Remarks,
                invStatus = inv.invStatus,
                InvFile = inv.InvFile,
                //icId = inv.icId,
                //CostCenterId = inv.CostCenterId,
                //splId = inv.splId,
          //      AssetInvoices = assetInv
            };
        }
        public static List<InvoiceVM> MapToInvoicesListVM(this List<Invoice> invs)
        {
            return invs.Select(inv => new InvoiceVM
            {
                InvoiceId = inv.InvoiceId,
                invNumber = inv.invNumber,
                invAmount = inv.invAmount,
                invStatus = inv.invStatus,
                Remarks = inv.Remarks,
                invDate = inv.invDate,
                InvFile = inv.InvFile,
                InvFileAttached = inv.InvFileAttached,
                empHRCode = inv.empHRCode,
                EmployeeName = inv.EmployeeName,
                ItemsCategoryName = inv.ItemsCategoryName,
                SupplierName = inv.SupplierName,
                CostCenterName = inv.CostCenterName

            }).ToList();
        }


        public static InvoiceVM MapToInvoicesVM(this Invoice inv)
        {
            return new InvoiceVM
            {
                InvoiceId = inv.InvoiceId,
                invNumber = inv.invNumber,
                invAmount = inv.invAmount,
                invStatus = inv.invStatus,
                Remarks = inv.Remarks,
                invDate = inv.invDate,
                InvFile = inv.InvFile,
                InvFileAttached = inv.InvFileAttached,
         
                empHRCode = inv.empHRCode,
                EmployeeName = inv.EmployeeName,
                ItemsCategoryName = inv.ItemsCategoryName,
                SupplierName = inv.SupplierName,
                CostCenterName = inv.CostCenterName

            };
        }


    }
}