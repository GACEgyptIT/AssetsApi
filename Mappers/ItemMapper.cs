//using IntranetAPI.Models;
//using IntranetAPI.Services;
//using IntranetAPI.ViewModels;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Web;

//namespace IntranetAPI.Mappers
//{
//    public static class ItemMapper
//    {
//        public static ItemVM MapToItemVM(this Item itm)
//        {
//            ItemService itmSrv = new ItemService();

//            List<StoreVM> stores = itmSrv.ConvertItemStorsToStores(itm);

//            return new ItemVM
//            {
//                itmId = itm.itmId,
//                itmName = itm.itmName,
//                itmPrice = itm.itmPrice,
//                Stores = stores
//            };
//        }
//        public static List<ItemVM> MapToItemVMList(this List<Item> itms)
//        {
//            return itms.Select(itm => new ItemVM
//            {
//                itmId = itm.itmId,
//                itmName = itm.itmName,
//                itmPrice = itm.itmPrice,
//                icId = itm.icId,
//                icName = itm.ItemsCategory.icName

//            }).ToList();
//        }
//        public static List<ItemVM> MapToItemVMListWithQnt(this List<Item> itms, int? prId, int? poId, int? recId, int? strId)
//        {
//            return itms.Select(itm => new ItemVM
//            {
//                itmId = itm.itmId,
//                itmName = itm.itmName,
//                itmPrice = itm.itmPrice,
//                ItmQntPR = itm.ItemPRs.Where(i=>i.PurchaseRequestId == prId).Select(i=>i.itmQnt).Sum(),
//                ItmQntPO = itm.ItemPOs.Where(i => i.PurchaseOrderId == poId).Select(i => i.itmQnt).Sum(),
//                ItmQntStore = itm.ItemStores.Where(i => i.StoreId == strId).Select(i => i.itmQnt).Sum(),
//                ItmQntRec = itm.ItemStores.Where(i => i.ReceivingId == recId && i.itmId == itm.itmId).Select(i => i.itmQnt).Sum(),
//                ItmQntRecCons = itm.ItemConsumptions.Where(i => i.ReceivingId == recId && i.itmId == itm.itmId).Select(i => i.itmQnt).Sum(),
//                icId = itm.icId,
//                icName = itm.ItemsCategory.icName

//            }).ToList();
//        }

    



//    }
//}