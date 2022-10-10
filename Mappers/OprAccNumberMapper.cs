//using IntranetAPI.Models;
//using IntranetAPI.Services;
//using IntranetAPI.ViewModels;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Web;

//namespace IntranetAPI.Mappers
//{
//    public static class OprAccNumberMapper
//    {
//        public static OprAccNumberVM MapToOprAccNumberVM(this OprAccNumber oan)
//        {
//            OperatorService oprSrv = new OperatorService();
//            return new OprAccNumberVM
//            {
//                OprAccNumberId = oan.OprAccNumberId,
//                OprAccNumberName = oan.OprAccNumberName,
//                oprId = oan.oprId,
//                OperatorName = oprSrv.getOperatorNameById(oan.oprId)

//            };
//        }
//        public static List<OprAccNumberVM> MapToOprAccNumberListVM(this List<OprAccNumber> oans)
//        {
//            OperatorService oprSrv = new OperatorService();
//            return oans.Select(oan => new OprAccNumberVM
//            {
//                OprAccNumberId = oan.OprAccNumberId,
//                OprAccNumberName = oan.OprAccNumberName,
//                oprId = oan.oprId,
//                OperatorName = oprSrv.getOperatorNameById(oan.oprId)

//            }).ToList();
//        }
//    }
//}