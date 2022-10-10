//using IntranetAPI.Models;
//using IntranetAPI.Services;
//using IntranetAPI.ViewModels;
//using Microsoft.Ajax.Utilities;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Web;

//namespace IntranetAPI.Mappers
//{
//    public static class ReceivingMapper
//    {
//        public static ReceivingVM MapToReceivingVM(this Receiving rec)
//        {
//            ItemService itmSrv = new ItemService();

//            return new ReceivingVM
//            {
//                ReceivingId = rec.ReceivingId,
//                poRemarks = rec.PO.poRemarks,
//                ReceiveTo = rec.ReceiveTo,
//                StoreId = rec.StoreId,
//                strName = rec.Store?.strName,
//                splName = rec.PO.Supplier?.splName,
//                recDate = rec.recDate,
//                ItmQnt = rec.itmQnt,
//                EmpName = rec.EmpName,
//                DptName = rec.DptName,
//                BrnName = rec.BrnName,
//                ComName = rec.ComName,
//                Items = itmSrv.GetItemsByRecId(rec.ReceivingId, rec.ReceiveTo).MapToItemVMListWithQnt(null,null,rec.ReceivingId,null)
//            };
//        }
//        public static List<ReceivingVM> MapToReceivingListVM(this List<Receiving> recs)
//        {
//            ItemService itmSrv = new ItemService();

//            return recs.Select(rec => new ReceivingVM
//            {
//                ReceivingId = rec.ReceivingId,
//                poRemarks = rec.PO.poRemarks,
//                strName = rec.Store?.strName,
//                recDate = rec.recDate,
//                ReceiveTo = rec.ReceiveTo,
//                splName = rec.PO.Supplier?.splName,
//                StoreId = rec.StoreId,
//                ItmQnt = rec.itmQnt,
//                EmpName = rec.EmpName,
//                DptName = rec.DptName,
//                BrnName = rec.BrnName,
//                ComName = rec.ComName,
//                Items = itmSrv.GetItemsByRecId(rec.ReceivingId, rec.ReceiveTo).MapToItemVMListWithQnt(null, null, rec.ReceivingId, null),
//                RecTotalCost = itmSrv.CalculatReceivingCost(rec)

//            }).ToList();
//        }
//        public static Receiving MapToReceiving(this ReceivingVM rec)
//        {
//            ItemService itmSrv = new ItemService();

//            if (rec.ReceiveTo == "Store")
//            {
//                return new Receiving
//                {
//                    ReceivingId = rec.ReceivingId,
//                    StoreId = rec.StoreId,
//                    empId = rec.empId,
//                    PurchaseOrderId = rec.PurchaseOrderId,
//                    ReceiveTo = rec.ReceiveTo,
//                    ToStoreName = rec.Store?.strName,

//                    FromSuplierName = rec.strName,
//                    recDate = rec.recDate,
//                    itmQnt = rec.ItmQnt,

//           //         ItemStores = itmSrv.ConvertRecItemsToItemStors(rec)
  
//                };
//            } else
//            {
//                return new Receiving
//                {
//                    ReceivingId = rec.ReceivingId,
//                    StoreId = rec.StoreId,
//                    PurchaseOrderId = rec.PurchaseOrderId,
//                    FromSuplierName = rec.strName,
//                    ReceiveTo = rec.ReceiveTo,

//                    EmployeeRecID = rec.EmployeeRecID,
//                    BrnID = rec.BrnId,
//                    DptID = rec.DptId,
//                    ComID = rec.ComId,
//                    EmpName = rec.EmpName,
//                    DptName = rec.DptName,
//                    BrnName = rec.BrnName,
//                    ComName = rec.ComName,
//          //          ItemConsumption = itmSrv.ConvertRecItemsToItemConsumption(rec)
//                };
//            }

  
//        }



//        //public static Receiving MapToReceivingItemStore(this ReceivingVM rec, ItemVM i)
//        //{
//        //    ItemService itmSrv = new ItemService();

//        //    if (rec.ReceiveTo == "Store")
//        //    {
//        //        return new Receiving
//        //        {
//        //            //ReceivingId = rec.ReceivingId,
//        //            //StoreId = rec.StoreId,
//        //            //PurchaseOrderId = rec.PurchaseOrderId,
//        //            //ReceiveTo = rec.ReceiveTo,
//        //            //ToStoreName = rec.Store?.strName,
//        //            //FromSuplierName = rec.strName,
//        //            //recDate = rec.recDate,
//        //            //itmQnt = rec.ItmQnt,

//        //            ItemStore = itmSrv.ConvertRecItemsToItemStors(rec, i)

//        //        };
//        //    }
//        //    else
//        //    {
//        //        return new Receiving
//        //        {
//        //            //ReceivingId = rec.ReceivingId,
//        //            //StoreId = rec.StoreId,
//        //            //PurchaseOrderId = rec.PurchaseOrderId,
//        //            //FromSuplierName = rec.strName,
//        //            //ReceiveTo = rec.ReceiveTo,
//        //            //EmpName = rec.EmpName,
//        //            //DptName = rec.DptName,
//        //            //BrnName = rec.BrnName,
//        //            //ComName = rec.ComName,

//        //            ItemConsumption = itmSrv.ConvertRecItemsToItemConsumption(rec)
//        //        };
//        //    }


//        //}


//    }
//}