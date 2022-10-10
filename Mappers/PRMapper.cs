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
//    public static class PRMapper
//    {
  
//        public static PurchaseRequestVM MapToPurchaseRequestVM(this PurchaseRequest pr)
//        {
//            ItemService itmSrv = new ItemService();
//            PrService prSrv = new PrService();
//            List<Item> items = new List<Item>();

//            pr.ItemPRs.ForEach(rec =>
//            {
//                Item item = itmSrv.GetItemById(rec.itmId);
//                items.Add(item);
//            });

//            return new PurchaseRequestVM
//            {
//                PurchaseRequestId = pr.PurchaseRequestId,
//                prRemarks = pr.prRemarks,
//                empId = pr.empId,
//                accountName = pr.Employee.accountName,
//                prDate = pr.prDate,
//                stsName = pr.Status.stsName,
//                stsRefernce = pr.Status.stsRefernce,
//                HD = pr.AuthLevel1_HD,
//                OM = pr.AuthLevel2_OM,
//                IT = pr.AuthLevel3_IT,
//                GM = pr.AuthLevel4_GM,
//                HR = pr.AuthLevel_HR,
//                HRApproved = pr.HRApproved,
//                HDApproved = pr.HDApproved,
//                GMApproved = pr.GMApproved,
//                OMApproved = pr.OMApproved,
//                ITApproved = pr.ITApproved,
//                Items = items.MapToItemVMListWithQnt(pr.PurchaseRequestId, null, null, null),
//                Authorization = prSrv.AuthorisationConverter(pr)
//            };
//        }
//        public static List<Item> ConvertItemPrToItems(List<ItemPR> itempr)
//        {
//            // ItemPR itempr = new ItemPR();
//            List<Item> items = new List<Item>();
//            //items.ForEach(item =>
//            //{
//            //    itempr.itmId = item.itmId;
//            //    itempr.itmQnt = item.ItmQnt;
//            //    itemprs.Add(itempr);
//            //});
//            return items;
//        }
//        public static List<PurchaseRequestVM> MapToPurchaseRequestVMList(this List<PurchaseRequest> prs)
//        {
//            ItemService itmSrv = new ItemService();
//            PrService prSrv = new PrService();
//            List<Item> items = new List<Item>();

//            return prs.Select(pr => new PurchaseRequestVM
//            {
//                PurchaseRequestId = pr.PurchaseRequestId,
//                prRemarks = pr.prRemarks,
//                empId = pr.empId,
//                accountName = pr.Employee.accountName,
//                prDate = pr.prDate,
//                PurchaseOrderId = pr.PurchaseOrderId,
//                stsName = pr.Status.stsName,
//                stsRefernce = pr.Status.stsRefernce,
//                Items = pr.ItemPRs.Where(i=>i.PurchaseRequestId == pr.PurchaseRequestId).Select(i=>i.Item).ToList().MapToItemVMListWithQnt(pr.PurchaseRequestId, null, null, null),
//                HD = pr.AuthLevel1_HD,
//                OM = pr.AuthLevel2_OM,
//                IT = pr.AuthLevel3_IT,
//                GM = pr.AuthLevel4_GM,
//                HR = pr.AuthLevel_HR,
//                HRApproved = pr.HRApproved,
//                HDApproved = pr.HDApproved,
//                GMApproved = pr.GMApproved,
//                OMApproved = pr.OMApproved,
//                ITApproved = pr.ITApproved,
//                Authorization = prSrv.AuthorisationConverter(pr)

//            }).ToList();
//        }

//        private static List<ItemVM> itemsMapToItemVMListWithQnt(IEnumerable<Item> enumerable, int purchaseRequestId, object p1, object p2, object p3)
//        {
//            throw new NotImplementedException();
//        }

//        public static PurchaseRequest MapToPurchaseRequest(this PurchaseRequestVM pr)
//        {
//            PrService prSrv = new PrService();
//            List<ItemPR> itempr = prSrv.GetItemPRRecords(pr.Items);

//            return new PurchaseRequest
//            {
//                PurchaseRequestId = pr.PurchaseRequestId,
//                prRemarks = pr.prRemarks,
//                ItemPRs = itempr,
//                empId = pr.empId,
//                AuthLevel1_HD = pr.HD,
//                AuthLevel2_OM = pr.OM,
//                AuthLevel3_IT = pr.IT,
//                AuthLevel4_GM = pr.GM,
//                AuthLevel_HR = pr.HR,
//                HRApproved = pr.HRApproved,
//                HDApproved = pr.HDApproved,
//                GMApproved = pr.GMApproved,
//                OMApproved = pr.OMApproved,
//                ITApproved = pr.ITApproved
//            };
//        }
//    }
//}