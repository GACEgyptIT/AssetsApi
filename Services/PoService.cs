//using IntranetAPI.Models;
//using IntranetAPI.ViewModels;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Web;

//namespace IntranetAPI.Services
//{
//    public class PoService
//    {
//        private DBContext db = new DBContext();
//        public List<PurchaseOrder> getPOsListByEmpId(int empid)
//        {
//            Employee emp = db.Employee.Where(e => e.empId == empid).FirstOrDefault();
//            List<PurchaseOrder> PurchaseOrders = new List<PurchaseOrder>();
//            PurchaseOrders.AddRange(db.PurchaseOrders.Where(i => i.empId == empid).ToList());
 
//            return PurchaseOrders;
//        }

//        public List<PurchaseRequest> GetPOsForApprovalByEmpId(int empid)
//        {
//            Employee emp = db.Employee.Where(e => e.empId == empid).FirstOrDefault();
//            List<PurchaseRequest> PurchaseRequests = new List<PurchaseRequest>();
//            List<Role> roles = db.EmpRoles.Where(e => e.empId == empid).Select(r => r.Role).ToList();
//            roles.ForEach(r =>
//            {
//                if (r.roleName == "HeadDept")
//                {
//                    int dptID = emp.Department.dptId;
//                    List<Employee> emps = db.Employee.Where(e => e.dptId == dptID).ToList();
//                    emps.ForEach(e =>
//                    {
//                        List<PurchaseRequest> prs = db.PurchaseRequests.Where(i => i.empId == e.empId && i.HDApproved == false).ToList();
//                        if (prs.Count > 0)
//                        {
//                            PurchaseRequests.AddRange(prs);
//                        }
//                    });
//                }
//                else if (r.roleName == "IT")
//                {
//                    List<PurchaseRequest> prs = db.PurchaseRequests.Where(i => i.Status.stsRefernce == "WFITA").ToList();
//                    if (prs.Count > 0)
//                    {
//                    PurchaseRequests.AddRange(prs);
//                    }
//                }
//                else if(r.roleName == "GM")
//                {
//                    List<PurchaseRequest> prs = db.PurchaseRequests.Where(i => i.Status.stsRefernce == "WFGMA").ToList();
//                    if (prs.Count > 0)
//                    {
//                        PurchaseRequests.AddRange(prs);
//                    }
//                }
//                else if (r.roleName == "OM")
//                {
//                    List<PurchaseRequest> prs = db.PurchaseRequests.Where(i => i.Status.stsRefernce == "WFOMA").ToList();
//                    if (prs.Count > 0)
//                    {
//                        PurchaseRequests.AddRange(prs);
//                    }
//                }
//            });
//            return PurchaseRequests;
//        }


        
//        public List<PurchaseRequest> getReadyPOsByEmpId(int empid)
//        {
//            Employee emp = db.Employee.Where(e => e.empId == empid).FirstOrDefault();
//            List<PurchaseRequest> PurchaseRequests = new List<PurchaseRequest>();
//            List<Role> roles = db.EmpRoles.Where(e => e.empId == empid).Select(r => r.Role).ToList();
//            roles.ForEach(r =>
//            {
//                if (r.roleName == "IT")
//                {
//                    List<PurchaseRequest> prs = db.PurchaseRequests.Where(i => i.Status.stsRefernce == "WFITP").ToList();
//                    if (prs.Count > 0)
//                    {
//                        PurchaseRequests.AddRange(prs);
//                    }
//                }
//                else if (r.roleName == "HR")
//                {
//                    List<PurchaseRequest> prs = db.PurchaseRequests.Where(i => i.Status.stsRefernce == "WFAP").ToList();
//                    if (prs.Count > 0)
//                    {
//                        PurchaseRequests.AddRange(prs);
//                    }
//                }
//                else if (r.roleName == "OM")
//                {
//                    List<PurchaseRequest> prs = db.PurchaseRequests.Where(i => i.Status.stsRefernce == "WFBP").ToList();
//                    if (prs.Count > 0)
//                    {
//                        PurchaseRequests.AddRange(prs);
//                    }
//                }
//            });
//            return PurchaseRequests;
//        }

//        public PurchaseRequest GetPOById(int id)
//        {
//            return db.PurchaseRequests.Where(i => i.PurchaseRequestId == id).FirstOrDefault();
//        }
//        //public List<ItemPO> GetItemPORecords(List<ItemVM> itemsVMs)
//        //{
//        //    List<ItemPO> itemprs = new List<ItemPO>();
//        //    itemsVMs.ForEach(item => {
//        //        ItemPO itempr = new ItemPO();
//        //        itempr.itmId = item.itmId;
//        //        itempr.itmQnt = item.ItmQnt;
//        //        itemprs.Add(itempr);
//        //    });
//        //    return itemprs;
//        //}

//        public List<ItemPO> GetItemPORecords(List<ItemVM> itemsVMs)
//        {

//            List<ItemPO> itempos = new List<ItemPO>();
//            itemsVMs.ForEach(item => {
//                ItemPO itempo = new ItemPO();
//                itempo.itmId = item.itmId;
//                itempo.itmQnt = item.ItmQntPO;
//                itempo.itmPrice = item.itmPrice;
//                itempos.Add(itempo);
//            });
//            return itempos;
//        }

//        public List<ItemVM> GetItemItemsVM(List<ItemPO> itemspr)
//        {
//            ItemVM item = new ItemVM();
//            List<ItemVM> itemsVMs = new List<ItemVM>();

//            itemspr.ForEach(rec => {
//                item.itmId = rec.itmId;
//                item.ItmQntPO = rec.itmQnt;
//                itemsVMs.Add(item);
//            });
//            return itemsVMs;
//        }
 
//        public List<Status> UpdatePOStatus()
//        {
//            if(db.Statuss.ToList().Count == 0)
//            {
//                Status status = new Status();

//                status.stsRefernce = "WFHDA";
//                status.stsName = "Waiting For Head Department Approval";
//                db.Statuss.Add(status);
//                db.SaveChanges();
//                status.stsRefernce = "WFGMA";
//                status.stsName = "Waiting For GM Approval";
//                db.Statuss.Add(status);
//                db.SaveChanges();
//                status.stsRefernce = "WFITA";
//                status.stsName = "Waiting For IT Approval";
//                db.Statuss.Add(status);
//                db.SaveChanges();
//                status.stsRefernce = "WFHRA";
//                status.stsName = "Waiting For HR Approval";
//                db.Statuss.Add(status);
//                db.SaveChanges();
//                status.stsRefernce = "WFOMA";
//                status.stsName = "Waiting For OM Approval";
//                db.Statuss.Add(status);
//                db.SaveChanges();

//                status.stsRefernce = "WFITP";
//                status.stsName = "Approved, Waiting For IT Purchasing";
//                db.Statuss.Add(status);
//                db.SaveChanges();
//                status.stsRefernce = "WFAP";
//                status.stsName = "Approved, Waiting For Admin Purchasing";
//                db.Statuss.Add(status);
//                db.SaveChanges();
//                status.stsRefernce = "WFBP";
//                status.stsName = "Approved, Waiting For Branch Purchasing";
//                db.Statuss.Add(status);
//                db.SaveChanges();
                
//                status.stsRefernce = "Ordered";
//                status.stsName = "Ordered";
//                db.Statuss.Add(status);
//                db.SaveChanges();
//                status.stsRefernce = "Received";
//                status.stsName = "Received";
//                db.Statuss.Add(status);
//                db.SaveChanges();
//                status.stsRefernce = "Canceled";
//                status.stsName = "Canceled";
//                db.Statuss.Add(status);
//                db.SaveChanges();
//                status.stsRefernce = "RBHD";
//                status.stsName = "Rejected by Head Department";
//                db.Statuss.Add(status);
//                db.SaveChanges();
//                status.stsRefernce = "RBIT";
//                status.stsName = "Rejected by IT";
//                db.Statuss.Add(status);
//                db.SaveChanges();
//                status.stsRefernce = "RBGM";
//                status.stsName = "Rejected by GM";
//                db.Statuss.Add(status);
//                db.SaveChanges();
//            }



//            return db.Statuss.ToList();
//        }

//        //public PurchaseRequest AuthorizationPOStatusUpdates(PurchaseRequest pr, string approvedBy)
//        //{
//        //    PurchaseRequest pRequest = new PurchaseRequest();

//        //    if (pr.AuthLevel1_HD == true && pr.HDApproved == false)
//        //    {

//        //    } else if (pr.AuthLevel3_IT == true && pr.ITApproved == false)
//        //    {

//        //    } else if ()
//        //    {

//        //    } else if ()
//        //    {

//        //    } else if ()
//        //    {

//        //    }



//        //    if (db.Statuss.ToList().Count == 0)
//        //    {
//        //        Status status = new Status();

//        //        status.stsRefernce = "WFHDA";
//        //        status.stsName = "Waiting For Head Department Approval";
//        //        db.Statuss.Add(status);
//        //        db.SaveChanges();
//        //        status.stsRefernce = "WFGMA";
//        //        status.stsName = "Waiting For GM Approval";
//        //        db.Statuss.Add(status);
//        //        db.SaveChanges();
//        //        status.stsRefernce = "WFITA";
//        //        status.stsName = "Waiting For IT Approval";
//        //        db.Statuss.Add(status);
//        //        db.SaveChanges();
//        //        status.stsRefernce = "WFITP";
//        //        status.stsName = "Approved, Waiting For IT Purchasing";
//        //        db.Statuss.Add(status);
//        //        db.SaveChanges();
//        //        status.stsRefernce = "WFAP";
//        //        status.stsName = "Approved, Waiting For Admin Purchasing";
//        //        db.Statuss.Add(status);
//        //        db.SaveChanges();
//        //        status.stsRefernce = "Ordered";
//        //        status.stsName = "Ordered";
//        //        db.Statuss.Add(status);
//        //        db.SaveChanges();
//        //        status.stsRefernce = "Received";
//        //        status.stsName = "Received";
//        //        db.Statuss.Add(status);
//        //        db.SaveChanges();
//        //        status.stsRefernce = "Canceled";
//        //        status.stsName = "Canceled";
//        //        db.Statuss.Add(status);
//        //        db.SaveChanges();
//        //        status.stsRefernce = "RBHD";
//        //        status.stsName = "Rejected by Head Department";
//        //        db.Statuss.Add(status);
//        //        db.SaveChanges();
//        //        status.stsRefernce = "RBIT";
//        //        status.stsName = "Rejected by IT";
//        //        db.Statuss.Add(status);
//        //        db.SaveChanges();
//        //        status.stsRefernce = "RBGM";
//        //        status.stsName = "Rejected by GM";
//        //        db.Statuss.Add(status);
//        //        db.SaveChanges();
//        //    }
//        //    return pRequest;
//        //}
//        public void UpdatePOsWithPOId(int? prId, int? poId)
//        {
//            if (db.PurchaseRequests.ToList().Count != 0)
//            {
//                PurchaseRequest pr = db.PurchaseRequests.Where(p => p.PurchaseRequestId == prId).FirstOrDefault();
//                if (pr != null)
//                {
//                    db.PurchaseRequests.Where(p => p.PurchaseRequestId == prId).FirstOrDefault().PurchaseOrderId = poId;
//                    db.PurchaseRequests.Where(p => p.PurchaseRequestId == prId).FirstOrDefault().StatusId = db.Statuss.Where(s => s.stsRefernce == "Ordered").Select(st => st.StatusId).FirstOrDefault();
//                    db.SaveChanges();
//                }
//            }

//        }

//    }
//}