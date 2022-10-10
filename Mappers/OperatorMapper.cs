//using IntranetAPI.Models;
//using IntranetAPI.ViewModels;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Web;

//namespace IntranetAPI.Mappers
//{
//    public static class OperatorMapper
//    {
//        public static OperatorVM MapToOperatorVM(this Operator opr)
//        {
//            return new OperatorVM
//            {
//                oprId = opr.oprId,
//                oprName = opr.oprName
//            };
//        }
//        public static List<OperatorVM> MapToOperatorListVM(this List<Operator> oprs)
//        {
//            return oprs.Select(opr => new OperatorVM
//            {
//                oprId = opr.oprId,
//                oprName = opr.oprName,

//            }).ToList();
//        }

//    }
//}