using IntranetAPI.Models;
using IntranetAPI.ModelViews;
using IntranetAPI.Services;
using IntranetAPI.ViewModels;
using Microsoft.Ajax.Utilities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetAPI.Mappers
{
    public static class AssetMapper
    {
        public static Asset MapToAsset(this AssetVM astVM)
        {
            EmployeeService empSrv = new EmployeeService();
            List<string> list = new List<string>();

            return new Asset
            {
                astId = astVM.astId,
                astDescription = astVM.astDescription,
                astCode = astVM.astCode,
                astSerialNumber = astVM.astSerialNumber,
                astPartNumber = astVM.astPartNumber,
                astDialNumber = astVM.astDialNumber,
                astCircuitNumber = astVM.astCircuitNumber,
                astPurchaseDate = astVM.astPurchaseDate,
                Charging = astVM.Charging,
                AccNumber = astVM.AccNumber,
                IsScrap = astVM.IsScrap,
                AssetBrandName = astVM.AssetBrandName,
                AssetTypeName = astVM.AssetTypeName,
                AssetCategoryName = astVM.AssetCategoryName,
                AssetBrandId = astVM.AssetBrandId,
                empId = astVM.empId,
                oprId = astVM.oprId,
                OprAccNumberId = astVM.OprAccNumberId,
                OperatorRatePlanId = astVM.OperatorRatePlanId
            //  EmployeeName = astVM.EmployeeName

            //AssetTypeName = astVM.AssetType?.asttypName,
            //BranchName = empSrv.getBranchNameByEmpId(ast.empId),
            //EmployeeName = astVM.Employee?.empFullName,
            //empHRCode = astVM.Employee?.empHRCode,
            //CompanyName = empSrv.getCompanyNameByEmpId(ast.empId),

            ////Employee = ast.Employee.,

            //AssetTrackingVMs = list
        };
        }
        public static AssetVM MapToAssetVM(this Asset ast)
        {
            EmployeeService empSrv = new EmployeeService();
       //     OperatorService oprSrv = new OperatorService();
            List<string> list = new List<string>();

            //if (ast.AssetTrackings != null)
            //{
            //    list = ast.AssetTrackings.ToList().MapToAssetLogsVM();  /// MapToAssetLogsVM(ast.AssetTrackings);
            //}

            return new AssetVM
            {
                astId = ast.astId,
                astDescription = ast.astDescription,
                astCode = ast.astCode,
                astSerialNumber = ast.astSerialNumber,
                astPartNumber = ast.astPartNumber,
                astDialNumber = ast.astDialNumber,
                astCircuitNumber = ast.astCircuitNumber,
                astPurchaseDate = ast.astPurchaseDate,
                Charging = ast.Charging,
                AccNumber = ast.AccNumber,
                IsScrap = ast.IsScrap,
                empId = ast.empId,
                oprId = ast.oprId,
                OprAccNumberId = ast.OprAccNumberId,
                OperatorRatePlanId = ast.OperatorRatePlanId,
                AssetBrandName = ast.AssetBrand.astBrandName,
                AssetTypeName = ast.AssetBrand.AssetType.astTypeName,
                AssetCategoryName = ast.AssetBrand.AssetType.AssetCategory.astCategoryName,
                astBrandCode = ast.AssetBrand.astBrandCode,

                AssetBrandId = ast.AssetBrandId,

     //           BranchName = empSrv.getBranchNameByEmpId(ast.empId),
                EmployeeName = ast.Employee?.empFullName,
                empHRCode = ast.Employee?.empHRCode,
                CompanyName = empSrv.getCompanyNameByEmpId(ast.empId),
         //       OperatorRatePlanName = oprSrv.getOperatorRatePlanNameById(ast.OperatorRatePlanId),
         //       OprAccNumberName = oprSrv.getOperatorAccountNumNameById(ast.OprAccNumberId),

       //         AssetTrackingVMs = list
            };
        }
         public static List<AssetVM> MapToAssetListVM(this List<Asset> asts)
        {
            EmployeeService empSrv = new EmployeeService();
            return asts.Select(ast => new AssetVM
            {
                astId = ast.astId,
                astDescription = ast.astDescription,
                astCode = ast.astCode,
                astSerialNumber = ast.astSerialNumber,
                astPartNumber = ast.astPartNumber,
                astDialNumber = ast.astDialNumber,
                astCircuitNumber = ast.astCircuitNumber,
                IsScrap = ast.IsScrap,
                astPurchaseDate = ast.astPurchaseDate,
                Charging = ast.Charging,
                AccNumber =ast.AccNumber,

                AssetBrandName = ast.AssetBrand.astBrandName,
                AssetTypeName = ast.AssetBrand.AssetType.astTypeName,
                AssetCategoryName = ast.AssetBrand.AssetType.AssetCategory.astCategoryName,
           
                astBrandCode = ast.AssetBrand.astBrandCode,

                AssetBrandId = ast.AssetBrandId,

                empId = ast.empId,
                oprId = ast.oprId,
                OprAccNumberId = ast.OprAccNumberId,
                OperatorRatePlanId = ast.OperatorRatePlanId,
          //      AssetTypeName = ast.AssetType?.asttypName,
         
                EmployeeName = ast.Employee?.empFullName,
                empHRCode = ast.Employee?.empHRCode,
                CompanyName =  ast.Employee?.Company?.comName,   // empSrv.getCompanyNameByEmpId(ast.empId),
                BranchName = ast.Employee?.Branch?.brnName,    //empSrv.getBranchNameByEmpId(ast.empId),  //ast.Employee?.Branch?.brnName,  //
                DepartmentName = ast.Employee?.Department?.dptName,
            }).ToList();
        }
        public static List<AssignedAsset> MapToAssignedAssetListVM(this List<Asset> asts)
        {
            return asts.Select(ast => new AssignedAsset
            {
                astId = ast.astId,
                astDescription = ast.astDescription,
                astCode = ast.astCode,
                astSerialNumber = ast.astSerialNumber,
                astPartNumber = ast.astPartNumber,
                astDialNumber = ast.astDialNumber,
                astCircuitNumber = ast.astCircuitNumber,
                astPurchaseDate = ast.astPurchaseDate,
                Charging = ast.Charging,
                AccNumber = ast.AccNumber,

          //      AssetBrandName = ast.AssetBrandName,
                AssetTypeName = ast.AssetTypeName,
          //      AssetCategoryName = ast.AssetCategoryName,
           //     AssetBrandId = ast.AssetBrandId,

                EmployeeName = ast.Employee?.empFullName

            }).ToList();
        }
        public static List<AssetCategoryVM> MapToAssetCategorysListVM(this List<AssetCategory> cats)
        {
            return cats.Select(ccc => new AssetCategoryVM
            {
                AssetCategoryId = ccc.AssetCategoryId,
                astCategoryName = ccc.astCategoryName,
                astCategoryCode = ccc.astCategoryCode,
                AssetTypeVMs = ccc.AssetTypes.Where(a=>a.AssetCategoryId == ccc.AssetCategoryId).ToList().MapToAssetTypeVMList()
            }).ToList();
        }
        public static List<AssetTypeVM> MapToAssetTypeVMList(this List<AssetType> types)
        {
            return types.Select(ttt => new AssetTypeVM
            {
                AssetTypeId = ttt.AssetTypeId,
                astTypeName = ttt.astTypeName,
                astTypeCode = ttt.astTypeCode,
                AssetBrandVMs = ttt.AssetBrands.Where(a => a.AssetTypeId == ttt.AssetTypeId).ToList().MapToAssetBrandVMList()

            }).ToList();
        }
        public static List<AssetBrandVM> MapToAssetBrandVMList(this List<AssetBrand> brands)
        {
            return brands.Select(bbb => new AssetBrandVM
            {
                AssetBrandId = bbb.AssetBrandId,
                astBrandName = bbb.astBrandName,
                astBrandCode = bbb.astBrandCode

            }).ToList();
        }
        public static AssetBrandVM MapToAssetBrandVM(this AssetBrand astBrand)
        {
            return new AssetBrandVM
            {
                AssetBrandId = astBrand.AssetBrandId,
                astBrandName = astBrand.astBrandName,


                AssetVMs = astBrand.Assets.Where(t => t.AssetBrandId == astBrand.AssetBrandId).ToList().MapToAssetListVM()
            };
        }

    


    }
}