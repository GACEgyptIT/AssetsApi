//using IntranetAPI.Models;
//using IntranetAPI.ViewModels;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Web;

//namespace IntranetAPI.Mappers
//{
//    public static class TransferMapper
//    {
//        public static TransferVM MapToTransferVM(this Transfer tr)
//        {
//            return new TransferVM
//            {
//                TransferId = tr.TransferId,
//                trnsDate = tr.trnsDate,
//                itmId = tr.itmId,
//                itmName = tr.Item.itmName,
//                itmQnt = tr.itmQnt,
//                FromStoreName = tr.FromStoreName,
//                ToStoreName = tr.FromStoreName,
//                EmpName = tr.EmpName,
//                DptName = tr.DptName,
//                BrnName = tr.BrnName,
//                ComName = tr.ComName
//            };
//        }
//        public static List<TransferVM> MapToTransferListVM(this List<Transfer> trnss)
//        {
//            return trnss.Select(tr => new TransferVM
//            {
//                TransferId = tr.TransferId,
//                itmId = tr.itmId,
//                itmName = tr.Item.itmName,
//                itmQnt = tr.itmQnt,
//                Price = tr.Price,
//                Cost = tr.Cost,
//                trnsDate = tr.trnsDate,
//                FromStoreName = tr.FromStoreName,
//                ToStoreName = tr.ToStoreName,
//                EmpName = tr.EmpName,
//                DptName = tr.DptName,
//                BrnName = tr.BrnName,
//                ComName = tr.ComName

//            }).ToList();
//        }

//        public static Transfer MapToTransfer(this TransferVM tr)
//        {
//            return new Transfer
//            {
//                itmId = tr.itmId,
//                itmQnt = tr.itmQnt,
//                Price = tr.Price,
//                Cost = tr.itmQnt * tr.Price,
//                trnsDate = DateTime.Now,
//                TransferId = tr.TransferId,
//                FromStoreName = tr.FromStoreName,
//                ToStoreName = tr.ToStoreName,
//                EmpName = tr.EmpName,
//                DptName = tr.DptName,
//                BrnName = tr.BrnName,
//                ComName = tr.ComName
//            };
//        }
//    }
//}