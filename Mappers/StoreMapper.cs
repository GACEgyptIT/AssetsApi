//using IntranetAPI.Models;
//using IntranetAPI.ViewModels;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Web;

//namespace IntranetAPI.Mappers
//{
//    public static class StoreMapper
//    {
//        public static StoreVM MapToStoreVM(this Store dpt)
//        {
//            return new StoreVM
//            {
//                StoreId = dpt.StoreId,
//                strName = dpt.strName
        
//            };
//        }
//        public static List<StoreVM> MapToStoreListVM(this List<Store> strs)
//        {
//            return strs.Select(dpt => new StoreVM
//            {
//                StoreId = dpt.StoreId,
//                strName = dpt.strName

//            }).ToList();
//        }
//    }
//}