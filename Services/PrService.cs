//using IntranetAPI.Models;
//using IntranetAPI.ModelViews;
//using IntranetAPI.ViewModels;
//using System;
//using System.Collections.Generic;
//using System.Data.Entity;
//using System.Linq;
//using System.Web;
//using System.Web.Razor.Parser.SyntaxTree;

//namespace IntranetAPI.Services
//{
//    public class PrService
//    {
//        private DBContext db = new DBContext();
//        public List<PurchaseRequest> GetPRsForUserListByEmpId(int empid)
//        {
//            Employee emp = new Employee();
//            List<Role> roles = new List<Role>();
//            var AuthHDL1 = false;
//            var AuthITL2 = false;
//            var AuthOML2 = false;
//            var AuthHRL2 = false;
//            var AuthGML3 = false;
//            var User = false;

//            emp = db.Employee.Where(e => e.empId == empid).FirstOrDefault();
//            List<PurchaseRequest> PurchaseRequests = new List<PurchaseRequest>();
//            roles = db.EmpRoles.Where(e => e.empId == empid).Select(r => r.Role).ToList();
//            if (roles.Count > 0)
//            {
//                roles.ForEach(r =>
//                {
//                    if (r.roleName == "HeadDept") { AuthHDL1 = true; };
//                    if (r.roleName == "OfficeMngr") { AuthOML2 = true; };
//                    if (r.roleName == "IT") { AuthITL2 = true; };
//                    if (r.roleName == "Admin") { AuthHRL2 = true; };
//                    if (r.roleName == "GM") { AuthGML3 = true; };
//                    if (r.roleName == "User") { User = true; };
//                });
//            }

//            if (User == true && AuthHDL1 == true && AuthOML2 == false && AuthITL2 == false && AuthHRL2 == false && AuthGML3 == false)
//            {
//                int dptID = emp.Department.dptId;
//                List<Employee> emps = db.Employee.Where(e => e.dptId == dptID).ToList();
//                emps.ForEach(e =>
//                {
//                    PurchaseRequests.AddRange(db.PurchaseRequests.Where(i => i.empId == e.empId).ToList());
//                });
//            }
//            else if (User == true && AuthHDL1 == false && AuthOML2 == true && AuthITL2 == false && AuthHRL2 == false && AuthGML3 == false)
//            {
//                int brnID = emp.Branch.brnId;
//                PurchaseRequests.AddRange(db.PurchaseRequests.Where(i => i.Employee.brnId == brnID && i.AuthLevel2_OM == true).ToList());
//            }
//            else if (User == true && AuthHDL1 == false && AuthOML2 == false && AuthITL2 == false && AuthHRL2 == false && AuthGML3 == false)
//            {
//                PurchaseRequests.AddRange(db.PurchaseRequests.Where(i => i.empId == empid).ToList());
//            }
//            return PurchaseRequests;
//        }
//        public List<PurchaseRequest> GetPRsForApprovalByEmpId(int empid)
//        {
//            Employee emp = new Employee();
//            List<Role> roles = new List<Role>();
//            var AuthHDL1 = false;
//            var AuthITL2 = false;
//            var AuthOML2 = false;
//            var AuthHRL2 = false;
//            var AuthGML3 = false;
//            var User = false;

//            emp = db.Employee.Where(e => e.empId == empid).FirstOrDefault();
//            List<PurchaseRequest> PurchaseRequests = new List<PurchaseRequest>();
//            roles = db.EmpRoles.Where(e => e.empId == empid).Select(r => r.Role).ToList();
//            if (roles.Count > 0)
//            {
//                roles.ForEach(r =>
//                {
//                    if (r.roleName == "HeadDept") { AuthHDL1 = true; };
//                    if (r.roleName == "OfficeMngr") { AuthOML2 = true; };
//                    if (r.roleName == "IT") { AuthITL2 = true; };
//                    if (r.roleName == "Admin") { AuthHRL2 = true; };
//                    if (r.roleName == "GM") { AuthGML3 = true; };
//                });
//            }

//            if (AuthHDL1 == true)
//            {
//                int dptID = emp.Department.dptId;
//                List<Employee> emps = db.Employee.Where(e => e.dptId == dptID).ToList();
//                emps.ForEach(e =>
//                {
//                    List<PurchaseRequest> prs = db.PurchaseRequests.Where(i => i.empId == e.empId && i.Status.stsRefernce == "WFHDA").ToList();
//                    if (prs.Count > 0)
//                    {
//                        PurchaseRequests.AddRange(prs);
//                    }
//                });
//            }
//            if (AuthITL2 == true)
//            {
//                List<PurchaseRequest> prs = db.PurchaseRequests.Where(i => i.Status.stsRefernce == "WFITA").ToList();
//                if (prs.Count > 0)
//                {
//                    PurchaseRequests.AddRange(prs);
//                }
//            }
//            if (AuthOML2 == true)
//            {
//                List<PurchaseRequest> prs = db.PurchaseRequests.Where(i => i.Status.stsRefernce == "WFOMA").ToList();
//                if (prs.Count > 0)
//                {
//                    PurchaseRequests.AddRange(prs);
//                }
//            }
//            if (AuthGML3 == true)
//            {
//                List<PurchaseRequest> prs = db.PurchaseRequests.Where(i => i.Status.stsRefernce == "WFGMA").ToList();
//                if (prs.Count > 0)
//                {
//                    PurchaseRequests.AddRange(prs);
//                }
//            }
//            return PurchaseRequests;
//        }
//        public List<PurchaseRequest> GetPRsForPOsByEmpId(int empid)
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
//                else if (r.roleName == "BranchAdmin")
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
//        public PurchaseRequest GetPRById(int id)
//        {
//            return db.PurchaseRequests.Where(i => i.PurchaseRequestId == id).FirstOrDefault();
//        }
//        public List<ItemPR> GetItemPRRecords(List<ItemVM> itemsVMs)
//        {
//            List<ItemPR> itemprs = new List<ItemPR>();
//            itemsVMs.ForEach(item => {
//                ItemPR itempr = new ItemPR();
//                itempr.itmId = item.itmId;
//                itempr.itmQnt = item.ItmQnt;
//                itemprs.Add(itempr);
//            });
//            return itemprs;
//        }
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
//        public List<ItemVM> GetItemItemsVM(List<ItemPR> itemspr)
//        {
//            ItemVM item = new ItemVM();
//            List<ItemVM> itemsVMs = new List<ItemVM>();

//            itemspr.ForEach(rec => {
//                item.itmId = rec.itmId;
//                item.ItmQntPR = rec.itmQnt;
//                itemsVMs.Add(item);
//            });
//            return itemsVMs;
//        }
//        public List<Status> SaveStatusToDB()
//        {
//            if(db.Statuss.ToList().Count == 0)
//            {
//                Status status = new Status();
//                //Level1
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
//                //Level2
//                status.stsRefernce = "WFITP";
//                status.stsName = "Waiting For IT Purchasing";
//                db.Statuss.Add(status);
//                db.SaveChanges();
//                status.stsRefernce = "WFAP";
//                status.stsName = "Waiting For Admin Purchasing";
//                db.Statuss.Add(status);
//                db.SaveChanges();
//                status.stsRefernce = "WFBP";
//                status.stsName = "Waiting For Branch Purchasing";
//                db.Statuss.Add(status);
//                db.SaveChanges();
//                //Level3
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
//                status.stsRefernce = "RBHRD";
//                status.stsName = "Rejected by Admin Department";
//                db.Statuss.Add(status);
//                db.SaveChanges();
//                status.stsRefernce = "RBOM";
//                status.stsName = "Rejected by Office Manager";
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

//        public PurchaseRequest SetPRStatus(PurchaseRequest pr)
//        {
//            Status status = new Status();
//            PurchaseRequestVM prVM = new PurchaseRequestVM();
//            List<Authorization> Authorization = new List<Authorization>();
//            Employee emp = new Employee();
//            List<Role> roles = new List<Role>();
//            var AuthHDL1 = false;
//            var AuthITL2 = false;
//            var AuthOML2 = false;
//            var AuthHRL2 = false;
//            var AuthGML3 = false;

//            Authorization = AuthorisationConverter(pr);
//            emp = db.Employee.Find(pr.empId);
//            roles = db.EmpRoles.Where(e => e.empId == emp.empId).Select(r => r.Role).ToList();
            
//            if (roles.Count > 0)
//            {
//                roles.ForEach(r =>
//                {
//                    if (r.roleName == "HeadDept") { AuthHDL1 = true; };
//                    if (r.roleName == "OfficeMngr") { AuthOML2 = true; };
//                    if (r.roleName == "IT") { AuthITL2 = true; };
//                    if (r.roleName == "Admin") { AuthHRL2 = true; };
//                    if (r.roleName == "GM") { AuthGML3 = true; };
//                });
//            }

//            if (Authorization.Count > 0)
//            {
//                foreach (var a in Authorization)
//                {
//                    //Case1  HD
//                    if (a.AuthName == "HD" && pr.HDApproved == false)
//                    {
//                        status = db.Statuss.Where(s => s.stsRefernce == "WFHDA").FirstOrDefault();
//                        pr.StatusId = status.StatusId;
//                        break;
//                    }
//                    //Case2  OM
//                    else if (a.AuthName == "OM" && pr.OMApproved == false)
//                    {
//                        status = db.Statuss.Where(s => s.stsRefernce == "WFOMA").FirstOrDefault();
//                        pr.StatusId = status.StatusId;
//                        break;
//                    }
//                    //Case3  IT
//                    else if (a.AuthName == "IT" && pr.ITApproved == false)
//                    {
//                        status = db.Statuss.Where(s => s.stsRefernce == "WFITA").FirstOrDefault();
//                        pr.StatusId = status.StatusId;
//                        break;
//                    }
//                    //Case4  HR
//                    else if (a.AuthName == "HR" && pr.HRApproved == false)
//                    {
//                        status = db.Statuss.Where(s => s.stsRefernce == "WFHRA").FirstOrDefault();
//                        pr.StatusId = status.StatusId;
//                        break;
//                    }
//                    //Case5  GM
//                    else if (a.AuthName == "GM" && pr.GMApproved == false)
//                    {
//                        status = db.Statuss.Where(s => s.stsRefernce == "WFGMA").FirstOrDefault();
//                        pr.StatusId = status.StatusId;
//                        break;
//                    }
//                }
//            }
//            return pr;
//        }

//        public PurchaseRequest UpdatePRStatus(ApproveReject apprej)
//        {
//            Status status = new Status();
//            List<Status> statuses = new List<Status>();
//            List<Authorization> Authorization = new List<Authorization>();
//            PurchaseRequest pr = new PurchaseRequest();
//            Employee emp = new Employee();
//            List<Role> roles = new List<Role>();
//            var AuthHDL1 = false;
//            var AuthITL2 = false;
//            var AuthOML2 = false;
//            var AuthHRL2 = false;
//            var AuthGML3 = false;

//            pr = db.PurchaseRequests.Find(apprej.PrId);
//            Authorization = AuthorisationConverter(pr);
//            int stId = WhatStatus(Authorization);

//            emp = db.Employee.Find(apprej.ActionByEmpId);
//            roles = db.EmpRoles.Where(e => e.empId == emp.empId).Select(r => r.Role).ToList();

//            if (roles.Count > 0)
//            {
//                roles.ForEach(r =>
//                {
//                    if (r.roleName == "HeadDept") { AuthHDL1 = true; };
//                    if (r.roleName == "OfficeMngr") { AuthOML2 = true; };
//                    if (r.roleName == "IT") { AuthITL2 = true; };
//                    if (r.roleName == "Admin") { AuthHRL2 = true; };
//                    if (r.roleName == "GM") { AuthGML3 = true; };
//                });
//            }

//            if (Authorization.Count > 0)
//            {
//                foreach (var a in Authorization)
//                {
//                    if (apprej.ActionType == "Approve")
//                    {
//                        //Case1  HD
//                        if (a.AuthName == "HD" && pr.HDApproved == false)
//                        {
//                            if (AuthHDL1 == true && pr.HDApproved == false)
//                            {
//                                pr.HDApproved = true;
//                                foreach (var ath in Authorization)
//                                {
//                                    if (ath.AuthName != "HD")
//                                    { 
//                                        if (ath.AuthName == "HR" && pr.HRApproved == false)
//                                        {
//                                            status = db.Statuss.Where(s => s.stsRefernce == "WFHRA").FirstOrDefault();
//                                            pr.StatusId = status.StatusId;
//                                            break;
//                                        }
//                                        else if (ath.AuthName == "OM" && pr.OMApproved == false)
//                                        {
//                                            status = db.Statuss.Where(s => s.stsRefernce == "WFOMA").FirstOrDefault();
//                                            pr.StatusId = status.StatusId;
//                                            break;
//                                        }
//                                        else if (ath.AuthName == "IT" && pr.ITApproved == false)
//                                        {
//                                            status = db.Statuss.Where(s => s.stsRefernce == "WFITA").FirstOrDefault();
//                                            pr.StatusId = status.StatusId;
//                                            break;
//                                        }
//                                        else if (ath.AuthName == "GM" && pr.GMApproved == false)
//                                        {

//                                            status = db.Statuss.Where(s => s.stsRefernce == "WFGMA").FirstOrDefault();
//                                            pr.StatusId = status.StatusId;
//                                            break;
//                                        }
//                                    }
//                                };

//                                //Status status = db.Statuss.Where(s => s.stsRefernce == "WFAP").FirstOrDefault();
//                                //pr.StatusId = status.StatusId;
//                            }

//                        }
//                        //else if (AuthHRL2 == true && pr.HRApproved == false)
//                        //{
//                        //    pr.HRApproved = true;
//                        //    Status status = db.Statuss.Where(s => s.stsRefernce == "WFAP").FirstOrDefault();
//                        //    pr.StatusId = status.StatusId;
//                        //}
//                        //Case2  OM
//                        //else if (a.AuthName == "OM" && pr.OMApproved == false)
//                        //{
//                        //    if (AuthHDL1 == true && pr.HDApproved == false)
//                        //    {
//                        //        pr.OMApproved = true;
//                        //        Status status = db.Statuss.Where(s => s.stsRefernce == "WFBP").FirstOrDefault();
//                        //        pr.StatusId = status.StatusId;
//                        //    }
//                        //    else if (AuthITL2 == true && pr.ITApproved == false)
//                        //    {
//                        //        pr.ITApproved = true;
//                        //        Status status = db.Statuss.Where(s => s.stsRefernce == "WFITP").FirstOrDefault();
//                        //        pr.StatusId = status.StatusId;
//                        //    }
//                        //}
//                        //Case3  IT
//                        //else if (a.AuthName == "IT" && pr.ITApproved == false)
//                        //{
//                        //    if (AuthHDL1 == true && pr.HDApproved == false)
//                        //    {
//                        //        pr.HDApproved = true;
//                        //        Status status = db.Statuss.Where(s => s.stsRefernce == "WFHRA").FirstOrDefault();
//                        //        pr.StatusId = status.StatusId;
//                        //    }
//                        //    else if (AuthHRL2 == true && pr.HRApproved == false)
//                        //    {
//                        //        pr.HRApproved = true;
//                        //        Status status = db.Statuss.Where(s => s.stsRefernce == "WFGMA").FirstOrDefault();
//                        //        pr.StatusId = status.StatusId;
//                        //    }
//                        //    else if (AuthGML3 == true && pr.GMApproved == false)
//                        //    {
//                        //        pr.GMApproved = true;
//                        //        Status status = db.Statuss.Where(s => s.stsRefernce == "WFAP").FirstOrDefault();
//                        //        pr.StatusId = status.StatusId;
//                        //    }
//                        //}
//                        //Case4  HR
//                        //else if (a.AuthName == "HR" && pr.HRApproved == false)
//                        //{
//                        //    if (AuthHDL1 == true && pr.HDApproved == false)
//                        //    {
//                        //        pr.HRApproved = true;
//                        //        Status status = db.Statuss.Where(s => s.stsRefernce == "WFHRA").FirstOrDefault();
//                        //        pr.StatusId = status.StatusId;
//                        //    }
//                        //    else if (AuthITL2 == true && pr.ITApproved == false)
//                        //    {
//                        //        pr.ITApproved = true;
//                        //        Status status = db.Statuss.Where(s => s.stsRefernce == "WFGMA").FirstOrDefault();
//                        //        pr.StatusId = status.StatusId;
//                        //    }
//                        //    else if (AuthGML3 == true && pr.GMApproved == false)
//                        //    {
//                        //        pr.GMApproved = true;
//                        //        Status status = db.Statuss.Where(s => s.stsRefernce == "WFITP").FirstOrDefault();
//                        //        pr.StatusId = status.StatusId;
//                        //    }
//                        //}
//                        //Case5  GM
//                        //else if (a.AuthName == "GM" && pr.GMApproved == false)
//                        //{
//                        //    if (AuthOML2 == true && pr.OMApproved == false)
//                        //    {
//                        //        pr.OMApproved = true;
//                        //        Status status = db.Statuss.Where(s => s.stsRefernce == "WFGMA").FirstOrDefault();
//                        //        pr.StatusId = status.StatusId;
//                        //    }
//                        //    else if (AuthGML3 == true && pr.GMApproved == false)
//                        //    {
//                        //        pr.GMApproved = true;
//                        //        Status status = db.Statuss.Where(s => s.stsRefernce == "WFBP").FirstOrDefault();
//                        //        pr.StatusId = status.StatusId;
//                        //    }
//                        //}

//                    }
//                    //else if (apprej.ActionType == "Reject")
//                    //{
//                    //    if (AuthHDL1 == true)
//                    //    {
//                    //        Status status = db.Statuss.Where(s => s.stsRefernce == "RBHD").FirstOrDefault();
//                    //        pr.StatusId = status.StatusId;
//                    //    }
//                    //    else if (AuthHRL2 == true)
//                    //    {
//                    //        Status status = db.Statuss.Where(s => s.stsRefernce == "RBHRD").FirstOrDefault();
//                    //        pr.StatusId = status.StatusId;
//                    //    }
//                    //    else if (AuthITL2 == true)
//                    //    {
//                    //        Status status = db.Statuss.Where(s => s.stsRefernce == "RBIT").FirstOrDefault();
//                    //        pr.StatusId = status.StatusId;
//                    //    }
//                    //    else if (AuthOML2 == true)
//                    //    {
//                    //        Status status = db.Statuss.Where(s => s.stsRefernce == "RBOM").FirstOrDefault();
//                    //        pr.StatusId = status.StatusId;
//                    //    }
//                    //    else if (AuthGML3 == true)
//                    //    {
//                    //        Status status = db.Statuss.Where(s => s.stsRefernce == "RBGM").FirstOrDefault();
//                    //        pr.StatusId = status.StatusId;
//                    //    }
//                    //}
//                    //else if (apprej.ActionType == "Canceled" && pr.empId == emp.empId)
//                    //{
//                    //    Status status = db.Statuss.Where(s => s.stsRefernce == "Canceled").FirstOrDefault();
//                    //    pr.StatusId = status.StatusId;
//                    //}


//                }
//            }
//            return pr;
//        }
//        public PurchaseRequest AddPR(PurchaseRequest purchaserequest)
//        {
//            PurchaseRequest pr = new PurchaseRequest();
//            return pr;
//        }
//        public PurchaseRequest UpdatePR(PurchaseRequest purchaserequest)
//        {
//            PurchaseRequest pr = db.PurchaseRequests.Where(p => p.PurchaseRequestId == purchaserequest.PurchaseRequestId).FirstOrDefault();
//          //  PurchaseRequest pr = new PurchaseRequest();
//            if (pr != null && db.Entry(pr).State != EntityState.Detached) ;
//            {
//                db.Entry(pr).State = EntityState.Detached;
//            }
//            db.PurchaseRequests.Add(pr);
//            db.Entry(pr).State = EntityState.Modified;
//            db.SaveChanges();

//            return pr;
//        }
//        public void UpdatePRsWithPOId(int? prId, int? poId)
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
//        public List<Authorization> AuthorisationConverter(PurchaseRequest pr)
//        {
//            List<Authorization> auths = new List<Authorization>();
         

//            if (pr.AuthLevel1_HD == true)
//            {
//                Authorization auth = new Authorization();
//                auth.AuthName = "HD";
//                auth.RequireApproval = true;
//                auth.Approved = pr.HDApproved;
//                auths.Add(auth);
//            }
//            if (pr.AuthLevel2_OM == true)
//            {
//                Authorization auth = new Authorization();
//                auth.AuthName = "OM";
//                auth.RequireApproval = true;
//                auth.Approved = pr.OMApproved;
//                auths.Add(auth);
//            }
//            if (pr.AuthLevel_HR == true)
//            {
//                Authorization auth = new Authorization();
//                auth.AuthName = "HR";
//                auth.RequireApproval = true;
//                auth.Approved = pr.HRApproved;
//                auths.Add(auth);
//            }
//            if (pr.AuthLevel3_IT == true)
//            {
//                Authorization auth = new Authorization();
//                auth.AuthName = "IT";
//                auth.RequireApproval = true;
//                auth.Approved = pr.ITApproved;
//                auths.Add(auth);
//            }
//            if (pr.AuthLevel4_GM == true)
//            {
//                Authorization auth = new Authorization();
//                auth.AuthName = "GM";
//                auth.RequireApproval = true;
//                auth.Approved = pr.GMApproved;
//                auths.Add(auth);
//            }

//            auths.ForEach(a =>
//            {

//            });

//            return auths;
//        }

//        public int WhatStatus(List<Authorization> auths)
//        {
//            Status status = new Status();
//            List<Status> Statuss = new List<Status>();
//            Statuss = db.Statuss.ToList();

//            foreach (var a in auths)
//            {
//                //Case1  HD
//                if (a.AuthName == "HD" && a.Approved == false)
//                {
//                    status = db.Statuss.Where(s => s.stsRefernce == "WFHDA").FirstOrDefault();
//                    status.StatusId = status.StatusId;
//                    break;
//                }
//                //Case2  OM
//                else if (a.AuthName == "OM" && a.Approved == false)
//                {
//                    status = db.Statuss.Where(s => s.stsRefernce == "WFOMA").FirstOrDefault();
//                    status.StatusId = status.StatusId;
//                    break;
//                }
//                //Case3  IT
//                else if (a.AuthName == "IT" && a.Approved == false)
//                {
//                    status = db.Statuss.Where(s => s.stsRefernce == "WFITA").FirstOrDefault();
//                    status.StatusId = status.StatusId;
//                    break;
//                }
//                //Case4  HR
//                else if (a.AuthName == "HR" && a.Approved == false)
//                {
//                    status = db.Statuss.Where(s => s.stsRefernce == "WFHRA").FirstOrDefault();
//                    status.StatusId = status.StatusId;
//                    break;
//                }
//                //Case5  GM
//                else if (a.AuthName == "GM" && a.Approved == false)
//                {
//                    status = db.Statuss.Where(s => s.stsRefernce == "WFGMA").FirstOrDefault();
//                    status.StatusId = status.StatusId;
//                    break;
//                }
//            }

//            return status.StatusId;
//        }
//    }
//}