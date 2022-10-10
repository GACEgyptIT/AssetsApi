//using IntranetAPI.Mappers;
//using IntranetAPI.Models;
//using IntranetAPI.ViewModels;
//using Microsoft.Ajax.Utilities;
//using System;
//using System.Collections.Generic;
//using System.Data.Entity;
//using System.Linq;
//using System.Web;

//namespace IntranetAPI.Services
//{
//    public class ReceivingService
//    {
//        private DBContext db = new DBContext();
//        ItemService itmSrv = new ItemService();

//        public List<Receiving> getReceivingListByEmpId(int empid)
//        {
//            Employee emp = db.Employee.Where(e => e.empId == empid).FirstOrDefault();
//            List<Receiving> recs = new List<Receiving>();
//            recs.AddRange(db.Receivings.Where(i => i.empId == empid).ToList());

//            return recs;
//        }

//        public List<ItemStore> GetItemStorsByItemsIds(ReceivingVM rec)
//        {
//            List<ItemStore> itemsstors = new List<ItemStore>();
//            rec.Items.ForEach(itm => {
//                ItemStore itemsstor = new ItemStore();

//                itemsstor.itmId = itm.itmId;
//                itemsstor.itmQnt = itm.ItmQntRec;
//                itemsstor.StoreId = rec.StoreId;

//                itemsstors.Add(itemsstor);

//            });
//            return itemsstors;
//        }
//        public ReceivingVM AddReceiving(ReceivingVM recVM)
//        {
//                Receiving rec = recVM.MapToReceiving();
//                db.Receivings.Add(rec);
//                db.SaveChanges();

//                recVM.Items.ForEach(itm =>
//                {
//                    if (recVM.ReceiveTo == "Store")
//                    {
//                        ItemStore itmstr = new ItemStore();

//                        itmstr.ReceivingId = rec.ReceivingId;
//                        itmstr.itmId = itm.itmId;
//                        itmstr.StoreId = recVM.StoreId;
//                        itmstr.itmQnt = itm.ItmQntPO;
//                        itmstr.Price = itm.itmPrice;
//                        itmstr.Cost = (float)(itm.ItmQntPO * itm.itmPrice);
//                        db.ItemStores.Add(itmstr);
//                        db.SaveChanges();

//                    } else
//                    {
//                        ItemConsumption to = new ItemConsumption();
//                        to.consDate = DateTime.Now;
//                        to.ReceivingId = rec.ReceivingId;
//                        to.itmId = itm.itmId;
//                        to.itmQnt = itm.ItmQntPO;
//                        to.Price = itm.itmPrice;
//                        to.Cost = (float)(itm.ItmQntPO * itm.itmPrice);  

//                        if (recVM.EmployeeRecID != null) {
//                            to.empId = recVM.EmployeeRecID;
//                            db.ItemConsumptions.Add(to);
//                            db.SaveChanges();
//                        } else if (recVM.DptId != null) {
//                            to.dptId = recVM.DptId;
//                            db.ItemConsumptions.Add(to);
//                            db.SaveChanges();
//                        } else if (recVM.BrnId != null) {
//                            to.brnId = recVM.BrnId;
//                            db.ItemConsumptions.Add(to);
//                            db.SaveChanges();
//                        } else if (recVM.ComId != null) {
//                            to.comId = recVM.ComId;
//                            db.ItemConsumptions.Add(to);
//                            db.SaveChanges();
//                        }
//                    }
//                });

//                UpdatePosPrsStatus(recVM.MapToReceiving());

//            return recVM;
//        }   
//        public void UpdatePosPrsStatus(Receiving rec)
//        {

//         //   empId

//                if (db.PurchaseOrders.ToList().Count != 0)
//                {
//                    PurchaseOrder po = db.PurchaseOrders.Where(p => p.PurchaseOrderId == rec.PurchaseOrderId).FirstOrDefault();
//                    if (po != null)
//                    {
//                        po.PurchaseRequests.ForEach(pr => {
//                            db.PurchaseRequests.Where(p => p.PurchaseOrderId == pr.PurchaseOrderId).FirstOrDefault().StatusId = db.Statuss.Where(s => s.stsRefernce == "Received").Select(st => st.StatusId).FirstOrDefault();
//                            db.SaveChanges();
//                        });
//                        db.PurchaseOrders.Where(p => p.PurchaseOrderId == rec.PurchaseOrderId).FirstOrDefault().StatusId = db.Statuss.Where(s => s.stsRefernce == "Received").Select(st => st.StatusId).FirstOrDefault();
//                        db.SaveChanges();
//                    }
//                }
//        }



//    }
//}
