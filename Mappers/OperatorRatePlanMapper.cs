//using IntranetAPI.Models;
//using IntranetAPI.Services;
//using IntranetAPI.ViewModels;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Web;

//namespace IntranetAPI.Mappers
//{
//    public static class OperatorRatePlanMapper
//    {
//        public static OperatorRatePlanVM MapToAssetRatePlanVM(this OperatorRatePlan rp)
//        {
//            OperatorService oprSrv = new OperatorService();
//            return new OperatorRatePlanVM
//            {
//                OperatorRatePlanId = rp.OperatorRatePlanId,
//                OperatorRatePlanName = rp.OperatorRatePlanName,
//                oprId = rp.oprId,
//                OperatorName = oprSrv.getOperatorNameById(rp.oprId)
//            };
//        }
//        public static List<OperatorRatePlanVM> MapToAssetRatePlanListVM(this List<OperatorRatePlan> rps)
//        {
//            OperatorService oprSrv = new OperatorService();
//            return rps.Select(rp => new OperatorRatePlanVM
//            {
//                OperatorRatePlanId = rp.OperatorRatePlanId,
//                OperatorRatePlanName = rp.OperatorRatePlanName,
//                oprId = rp.oprId,
//                OperatorName = oprSrv.getOperatorNameById(rp.oprId)

//            }).ToList();
//        }
//    }
//}