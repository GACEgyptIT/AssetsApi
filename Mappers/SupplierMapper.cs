using IntranetAPI.Models;
using IntranetAPI.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetAPI.Mappers
{
    public static class SupplierMapper
    {
        public static SupplierVM MapToSupplierVM(this Supplier ast)
        {
            return new SupplierVM
            {
                splId = ast.splId,
                splName = ast.splName
        
            };
        }
        public static List<SupplierVM> MapToAssetListVM(this List<Supplier> asts)
        {
            return asts.Select(ast => new SupplierVM
            {
                splId = ast.splId,
                splName = ast.splName
             
            }).ToList();
        }
    }
}