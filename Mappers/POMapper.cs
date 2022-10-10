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
//    public static class POMapper
//    {
//        public static PurchaseOrderVM MapToPurchaseOrderVM(this PurchaseOrder po)
//        {
//            ItemService itmSrv = new ItemService();
//            PrService prSrv = new PrService();
//            List<Item> items = new List<Item>();
//            List<PurchaseRequest> prs = new List<PurchaseRequest>();

//            po.ItemPOs.ForEach(rec =>
//            {
//                Item item = itmSrv.GetItemById(rec.itmId);
//                items.Add(item);
//            });
//            po.PurchaseRequests.ForEach(pr =>
//            {
//                PurchaseRequest p = prSrv.GetPRById(pr.PurchaseRequestId);
//                prs.Add(p);
//            });

//            Nullable<float> PoTotalAmount = 0;

//            List<ItemVM> itms = items.MapToItemVMListWithQnt(null, po.PurchaseOrderId, null, null);
//            itms.ForEach(i =>
//            {
//                i.ItmCost = i.itmPrice * i.ItmQntPO;
//                PoTotalAmount += i.ItmCost;
//            });

//            return new PurchaseOrderVM
//            {
//                PurchaseOrderId = po.PurchaseOrderId,
//                poRemarks = po.poRemarks,
//                empId = po.empId,
//                accountName = po.Employee.accountName,
//                poDate = po.poDate,
//                stsName = po.Status.stsName,
//                splName = po.Supplier.splName,
//                PurchaseRequestes = prs.MapToPurchaseRequestVMList(),
//                Items = items.MapToItemVMListWithQnt(null, po.PurchaseOrderId, null, null),
//                poTotalAmount = PoTotalAmount,
//                AuthLevel1_HD = po.AuthLevel1_HD,
//                AuthLevel2_OM = po.AuthLevel2_OM,
//                AuthLevel3_IT = po.AuthLevel3_IT,
//                AuthLevel4_GM = po.AuthLevel4_GM,
//                AuthLevel_HR = po.AuthLevel_HR,
//                HRApproved = po.HRApproved,
//                HDApproved = po.HDApproved,
//                GMApproved = po.GMApproved,
//                OMApproved = po.OMApproved,
//                ITApproved = po.ITApproved
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
//        public static List<PurchaseOrderVM> MapToPurchaseOrderVMList(this List<PurchaseOrder> pos)
//        {
//            DBContext db = new DBContext();
//            PrService prSrv = new PrService();
//            ItemService itmSrv = new ItemService();

//            PurchaseRequest purchaserequest = new PurchaseRequest();
//            List<PurchaseRequest> purchaserequests = new List<PurchaseRequest>();

//            pos.ForEach(po =>
//            {
//                List<Item> items = new List<Item>();

//                purchaserequest = db.PurchaseRequests.Where(p => p.PurchaseOrderId == po.PurchaseOrderId).FirstOrDefault();
//                //purchaserequest.PurchaseOrderId = po.PurchaseOrderId;
//                //purchaserequest.prRemarks = db.PurchaseRequests.Where(p=>p.PurchaseOrderId == po.PurchaseOrderId).Select(p=>p.prRemarks).ToString();

//                po.ItemPOs.ForEach(rec =>
//                {
//                    //Item item = new Item();
//                    //item = rec.Item;
//                    items.Add(rec.Item);
//                });
//                //Nullable<float> PoTotalAmount = 0;
//                //items.ForEach(i =>
//                //{
//                //    i.ItmCost = i.itmPrice * i.ItmQntPO;
//                //    PoTotalAmount += i.ItmCost;
//                //});
//                purchaserequests.Add(purchaserequest);
//            });

//            List<PurchaseRequestVM> prs = purchaserequests.MapToPurchaseRequestVMList();

//            //Nullable<float> PoTotalAmount = 0;

//            //List<Item> items = new List<Item>();

//            //List<ItemVM> itms = items.MapToItemVMListWithQnt(null, po.PurchaseOrderId, null, null);
//            //itms.ForEach(i =>
//            //{
//            //    i.ItmCost = i.itmPrice * i.ItmQntPO;
//            //    PoTotalAmount += i.ItmCost;
//            //});

//            return pos.Select(po => new PurchaseOrderVM
//            {
//                PurchaseOrderId = po.PurchaseOrderId,
//                poRemarks = po.poRemarks,
//                empId = po.empId,
//                splName = po.Supplier.splName,
//          //      poTotalAmount = PoTotalAmount,
//                PurchaseRequestes = prs,
//                accountName = po.Employee.accountName,
//                AuthLevel1_HD = po.AuthLevel1_HD,
//                AuthLevel2_OM = po.AuthLevel2_OM,
//                AuthLevel3_IT = po.AuthLevel3_IT,
//                AuthLevel4_GM = po.AuthLevel4_GM,
//                AuthLevel_HR = po.AuthLevel_HR,
//                HRApproved = po.HRApproved,
//                HDApproved = po.HDApproved,
//                GMApproved = po.GMApproved,
//                OMApproved = po.OMApproved,
//                ITApproved = po.ITApproved

//            }).ToList();
//        }

//        public static PurchaseOrder MapToPurchaseOrder(this PurchaseOrderVM po)
//        {
//            PrService prSrv = new PrService();
//            List<ItemPO> itempo = prSrv.GetItemPORecords(po.Items);

//            return new PurchaseOrder
//            {
//                PurchaseOrderId = po.PurchaseOrderId,
//                poRemarks = po.poRemarks,
//                empId = po.empId,
//                splId = po.splId,
//                ItemPOs = itempo,
//                AuthLevel1_HD = po.AuthLevel1_HD,
//                AuthLevel2_OM = po.AuthLevel2_OM,
//                AuthLevel3_IT = po.AuthLevel3_IT,
//                AuthLevel4_GM = po.AuthLevel4_GM,
//                AuthLevel_HR = po.AuthLevel_HR,
//                HRApproved = po.HRApproved,
//                HDApproved = po.HDApproved,
//                GMApproved = po.GMApproved,
//                OMApproved = po.OMApproved,
//                ITApproved = po.ITApproved

//            };
//        }
//    }
//}