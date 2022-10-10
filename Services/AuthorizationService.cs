//using IntranetAPI.Models;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Web;

//namespace IntranetAPI.Services
//{
//    public class AuthorizationService
//    {
//        public List<PurchaseRequest> FilterPRs(int? prId, int? poId)
//        {
//            List<PurchaseRequest> filteredPRs = new List<PurchaseRequest>();

//            //if (db.PurchaseRequests.ToList().Count != 0)
//            //{
//            //    PurchaseRequest pr = db.PurchaseRequests.Where(p => p.PurchaseRequestId == prId).FirstOrDefault();
//            //    if (pr != null)
//            //    {
//            //        db.PurchaseRequests.Where(p => p.PurchaseRequestId == prId).FirstOrDefault().PurchaseOrderId = poId;
//            //        db.PurchaseRequests.Where(p => p.PurchaseRequestId == prId).FirstOrDefault().StatusId = db.Statuss.Where(s => s.stsName == "Ordered").Select(st => st.StatusId).FirstOrDefault();
//            //        db.SaveChanges();
//            //    }
//            //}

//            return filteredPRs;

//        }

//    }
//}