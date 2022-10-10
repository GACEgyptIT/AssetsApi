//using IntranetAPI.Mappers;
//using IntranetAPI.Models;
//using IntranetAPI.ViewModels;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Web;

//namespace IntranetAPI.Services
//{
//    public class TransferService
//    {
//        private DBContext db = new DBContext();

//        public TransferVM AddTransfer(TransferVM trnsVM)
//        {
//            ItemStore itmstr = new ItemStore();
//            Transfer trn = trnsVM.MapToTransfer();
//            db.Transfers.Add(trn);
//            db.SaveChanges();

//                if (trnsVM.ReceiveTo == "Store")
//                {
//                    itmstr.TransferId = trn.TransferId;
//                    itmstr.itmId = trn.itmId;
//                    itmstr.StoreId = trnsVM.FromStoreId;
//                    itmstr.itmQnt = -trn.itmQnt;
//                    itmstr.Price = trn.Price;
//                    itmstr.Cost = -trn.Cost;
//                    db.ItemStores.Add(itmstr);
//                    db.SaveChanges();

//                    itmstr.TransferId = trn.TransferId;
//                    itmstr.itmId = trn.itmId;
//                    itmstr.StoreId = trnsVM.ToStoreId;
//                    itmstr.itmQnt = trn.itmQnt;
//                    itmstr.Price = trn.Price;
//                    itmstr.Cost = trn.Cost;
//                    db.ItemStores.Add(itmstr);
//                    db.SaveChanges();

//                }
//                else
//                {
//                    itmstr.TransferId = trn.TransferId;
//                    itmstr.itmId = trn.itmId;
//                    itmstr.StoreId = trnsVM.FromStoreId;
//                    itmstr.itmQnt = -trn.itmQnt;
//                    itmstr.Price = trn.Price;
//                    itmstr.Cost = -trn.Cost;
//                    db.ItemStores.Add(itmstr);
//                    db.SaveChanges();

//                    ItemConsumption to = new ItemConsumption();
//                    to.consDate = DateTime.Now;
//                    to.TransferId = trn.TransferId;
//                    to.itmId = trn.itmId;
//                    to.itmQnt = trn.itmQnt;
//                    to.Price = trn.Price;
//                    to.Cost = trn.Cost;

//                if (trnsVM.EmpId != null)
//                    {
//                        to.empId = trnsVM.EmpId;
//                        db.ItemConsumptions.Add(to);
//                        db.SaveChanges();
//                    }
//                    else if (trnsVM.DptId != null)
//                    {
//                        to.dptId = trnsVM.DptId;
//                        db.ItemConsumptions.Add(to);
//                        db.SaveChanges();
//                    }
//                    else if (trnsVM.BrnId != null)
//                    {
//                        to.brnId = trnsVM.BrnId;
//                        db.ItemConsumptions.Add(to);
//                        db.SaveChanges();
//                    }
//                    else if (trnsVM.ComId != null)
//                    {
//                        to.comId = trnsVM.ComId;
//                        db.ItemConsumptions.Add(to);
//                        db.SaveChanges();
//                    }
//                }

//            return trnsVM;
//        }

//    }
//}