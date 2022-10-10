//using IntranetAPI.Mappers;
//using IntranetAPI.Models;
//using IntranetAPI.ModelViews;
//using IntranetAPI.ViewModels;
//using Microsoft.Ajax.Utilities;
//using System;
//using System.Collections.Generic;
//using System.Data.Entity;
//using System.Linq;
//using System.Web;

//namespace IntranetAPI.Services
//{
//    public class ItemService
//    {
//        private DBContext db = new DBContext();

//        public Item GetItemById(int id)
//        {
//            return db.Item.Where(i=>i.itmId == id).FirstOrDefault();
//        }
//        public List<Item> GetItemsByRecId(int? id, string recTo)
//        {
//            List<Item> items = new List<Item>();

//            if (recTo == "Store")
//            {
//                items = db.ItemStores.Where(r => r.ReceivingId == id).Select(i => i.Item).ToList();
//            }
//            else if (recTo == "Consumption")
//            {
//                items = db.ItemConsumptions.Where(r => r.ReceivingId == id).Select(i => i.Item).ToList();
//            }
//            return items;
//        }
//        public SOH getSOHItem(SOH sohSearch)
//        {
//            SOH soh = new SOH();
            
//            if(sohSearch.itmId != null && sohSearch.strId == null) 
//            {
//                var records = db.ItemStores.Where(r => r.itmId == sohSearch.itmId).ToList();
//                List<StoreVM> strs = new List<StoreVM>();
//                records.ForEach(rec =>
//                {
//                    StoreVM str = new StoreVM();
//                    ItemVM itm = new ItemVM();
//                    bool exsit = false;
//                    str = rec.Store.MapToStoreVM();
//                    str.ItemQnt = rec.itmQnt;

//                    soh.StoreVMs?.ForEach(s =>
//                    {
//                        if (s != null && s.strName == rec.Store.strName) { exsit = true; }
//                    });
//                    if (!exsit)
//                    {
//                        strs.Add(str);
//                        soh.StoreVMs = strs;
//                    }
//                    else if (exsit)
//                    {
//                        soh.StoreVMs.Where(st => st.strName == rec.Store.strName).FirstOrDefault().ItemQnt += rec.itmQnt;
//                    }
//                });
//            } 
//            else if (sohSearch.itmId == null && sohSearch.strId != null)
//            {
//                var records = db.ItemStores.Where(r => r.StoreId == sohSearch.strId).ToList();
//                List<ItemVM> itms = new List<ItemVM>();
//                records.ForEach(rec =>
//                {
//                    ItemVM itm = new ItemVM();
//                    bool exsit = false;
//                    itm = rec.Item.MapToItemVM();
//                    itm.ItmQnt = rec.itmQnt;
//                    itm.itmPrice = rec.Price;
//                    itm.ItmCost = rec.itmQnt * rec.Price;

//                    soh.ItemVMs?.ForEach(i =>
//                    {
//                        if (i != null && i.itmName == rec.Item.itmName) { exsit = true; }
//                    });
//                    if (!exsit)
//                    {
//                        itms.Add(itm);
//                        soh.ItemVMs = itms;
//                    }
//                    else if (exsit)
//                    {
//                        soh.ItemVMs.Where(st => st.itmName == rec.Item.itmName).FirstOrDefault().ItmQnt += rec.itmQnt;
//                    }
//                });
//            }
//            else if (sohSearch.itmId != null && sohSearch.strId != null)
//            {
//                var records = db.ItemStores.Where(r => r.StoreId == sohSearch.strId && r.itmId == sohSearch.itmId).ToList();
//                List<StoreVM> strs = new List<StoreVM>();
//                records.ForEach(rec =>
//                {
//                    StoreVM str = new StoreVM();
//                    bool exsit = false;
//                    str = rec.Store.MapToStoreVM();
//                    str.ItemQnt = rec.itmQnt;

//                    soh.StoreVMs?.ForEach(s =>
//                    {
//                        if (s != null && s.strName == rec.Store.strName) { exsit = true; }
//                    });
//                    if (!exsit)
//                    {
//                        strs.Add(str);
//                        soh.StoreVMs = strs;
//                    }
//                    else if (exsit)
//                    {
//                        soh.StoreVMs.Where(st => st.strName == rec.Store.strName).FirstOrDefault().ItemQnt += rec.itmQnt;
//                    }
//                });
//            }
//            soh.itmId = sohSearch.itmId;
//            soh.strId = sohSearch.strId;
//            soh.ItemName = db.Item.Where(i => i.itmId == sohSearch.itmId).Select(it => it.itmName).FirstOrDefault();
//            soh.StoreName = db.Stores.Where(i => i.StoreId == sohSearch.strId).Select(it => it.strName).FirstOrDefault();
//            return soh;
//        }

//        public SOH getConsumptionItem(SOH sohSearch)
//        {
//            SOH soh = new SOH();
//            List<ItemConsumption> ItemConsumptions = new List<ItemConsumption>();

//            if (sohSearch.empId != null)
//            {
//                if (sohSearch.itmId != null)
//                {
//                    ItemConsumptions = db.ItemConsumptions.Where(r => r.itmId == sohSearch.itmId && r.empId == sohSearch.empId && r.consDate >= sohSearch.FromDate && r.consDate <= sohSearch.ToDate).ToList();
//                    soh = ConcertItemConsumptionToSOH(ItemConsumptions);
//                }
//                else
//                {
//                    ItemConsumptions = db.ItemConsumptions.Where(r => r.empId == sohSearch.empId && r.consDate >= sohSearch.FromDate && r.consDate <= sohSearch.ToDate).ToList();
//                    soh = ConcertItemConsumptionToSOH(ItemConsumptions);
//                }

//                EmployeeVM employee = db.Employee.Where(e=>e.empId == sohSearch.empId).FirstOrDefault().MapToEmployeeVM();
//                soh.EmpName = employee.empFullName;

//            } 
//            else if (sohSearch.dptId != null)
//            {
//                if (sohSearch.itmId != null)
//                {
//                    ItemConsumptions = db.ItemConsumptions.Where(r => r.itmId == sohSearch.itmId && r.dptId == sohSearch.dptId && r.consDate >= sohSearch.FromDate && r.consDate <= sohSearch.ToDate).ToList();
//                    soh = ConcertItemConsumptionToSOH(ItemConsumptions);
//                }
//                else
//                {
//                    ItemConsumptions = db.ItemConsumptions.Where(r => r.dptId == sohSearch.dptId && r.consDate >= sohSearch.FromDate && r.consDate <= sohSearch.ToDate).ToList();
//                    soh = ConcertItemConsumptionToSOH(ItemConsumptions);
//                }

//                DepartmentVM department = db.Department.Where(e => e.dptId == sohSearch.dptId).FirstOrDefault().MapToDepartmentVM();
//                soh.DptName = department.dptName;
//            }
//            else if (sohSearch.brnId != null)
//            {
//                if (sohSearch.itmId != null)
//                {
//                    ItemConsumptions = db.ItemConsumptions.Where(r => r.itmId == sohSearch.itmId && r.brnId == sohSearch.brnId && r.consDate >= sohSearch.FromDate && r.consDate <= sohSearch.ToDate).ToList();
//                    soh = ConcertItemConsumptionToSOH(ItemConsumptions);
//                }
//                else
//                {
//                    ItemConsumptions = db.ItemConsumptions.Where(r => r.brnId == sohSearch.brnId && r.consDate >= sohSearch.FromDate && r.consDate <= sohSearch.ToDate).ToList();
//                    soh = ConcertItemConsumptionToSOH(ItemConsumptions);
//                }

//                BranchVM branch = db.Branch.Where(e => e.brnId == sohSearch.brnId).FirstOrDefault().MapToBranchVM();
//                soh.BrnName = branch.brnName;
//            }
//            else if (sohSearch.comId != null)
//            {
//                if (sohSearch.itmId != null)
//                {
//                    ItemConsumptions = db.ItemConsumptions.Where(r => r.itmId == sohSearch.itmId && r.comId == sohSearch.comId).ToList();
//                    soh = ConcertItemConsumptionToSOH(ItemConsumptions);
//                }
//                else
//                {
//                    ItemConsumptions = db.ItemConsumptions.Where(r => r.comId == sohSearch.comId).ToList();
//                    soh = ConcertItemConsumptionToSOH(ItemConsumptions);
//                }

//                CompanyVM company = db.Company.Where(e => e.comId == sohSearch.comId).FirstOrDefault().MapToCompanyVM();
//                soh.ComName = company.comName;
//            }
//            else if (sohSearch.itmId != null)
//            {
//                if (sohSearch.itmId != null )
//                {
//                    ItemConsumptions = db.ItemConsumptions.Where(r => r.itmId == sohSearch.itmId && r.consDate >= sohSearch.FromDate && r.consDate <= sohSearch.ToDate).ToList();
//                    soh = ConcertItemConsumptionToSOH(ItemConsumptions);
//                } 
//                ItemVM item = db.Item.Where(e => e.itmId == sohSearch.itmId).FirstOrDefault().MapToItemVM();
//                soh.ItemName = item.itmName;
//            }

//            return soh;
//        }

//        public SOH ConcertItemConsumptionToSOH(List<ItemConsumption> ItemConsumptions)
//        {
//            SOH soh = new SOH();

//            if (ItemConsumptions.Count != 0)
//            {
//                List<EmployeeVM> empVMs = new List<EmployeeVM>();
//                List<DepartmentVM> dptVMs = new List<DepartmentVM>();
//                List<BranchVM> brnVMs = new List<BranchVM>();
//                List<CompanyVM> comVMs = new List<CompanyVM>();
//                List<ItemVM> itms = new List<ItemVM>();

//                ItemConsumptions.ForEach(rec =>
//                {
//                    EmployeeVM emp = new EmployeeVM();
//                    DepartmentVM dpt = new DepartmentVM();
//                    BranchVM brn = new BranchVM();
//                    CompanyVM com = new CompanyVM();

//                    ItemVM itm = new ItemVM();

//                    if (rec.itmId != null)
//                    {
//                        itm = rec.Item.MapToItemVM();
                        
//                        if (rec.Employee?.empFullName != null) { itm.ConsumtionName = rec.Employee.empFullName; };
//                        if (rec.Department?.dptName != null) { itm.ConsumtionName = rec.Department.dptName; };
//                        if (rec.Branch?.brnName != null) { itm.ConsumtionName = rec.Branch.brnName; };
//                        if (rec.Company?.comName != null) { itm.ConsumtionName = rec.Company.comName; };

//                        itm.itmPrice = rec.Price;
//                        itm.ItmQnt = rec.itmQnt;
//                        itm.Date = rec.consDate;
//                        itm.ItmCost = rec.Price * rec.itmQnt;
//                        itms.Add(itm);
//                    }
//                    if (rec.dptId != null)
//                    {
//                        dpt = rec.Department.MapToDepartmentVM();
//                        soh.departmentVM = dpt;

//                        dpt.Qnt = rec.itmQnt;
//                        dpt.Price = rec.Price;
//                        dpt.Cost = rec.Cost;
//                        dptVMs.Add(dpt);
//                    }
//                    if (rec.brnId != null)
//                    {
//                        brn = rec.Branch.MapToBranchVM();
//                        soh.branchVM = brn;

//                        brn.Qnt = rec.itmQnt;
//                        brn.Price = rec.Price;
//                        brn.Cost = rec.Cost;
//                        brnVMs.Add(brn);
//                    }
//                    if (rec.comId != null)
//                    {
//                        com = rec.Company.MapToCompanyVM();
//                        soh.companyVM = com;

//                        com.Qnt = rec.itmQnt;
//                        com.Price = rec.Price;
//                        com.Cost = rec.Cost;
//                        comVMs.Add(com);
//                    }
//                    if (rec.empId != null)
//                    {
//                        emp = rec.Employee.MapToEmployeeVM();
//                        soh.employeeVM = emp;

//                        emp = rec.Employee.MapToEmployeeVM();
//                        emp.empFullName = rec.Employee.empFullName;
//                        emp.Qnt = rec.itmQnt;
//                        emp.Price = rec.Price;
//                        emp.Cost = rec.Cost;
//                        empVMs.Add(emp);
//                    }
//                });
               
//                if (itms != null) { soh.ItemVMs = itms; };
//                if (empVMs != null) { soh.EmployeeVMs = empVMs; };
//                if (dptVMs != null) { soh.DepartmentVMs = dptVMs; };
//                if (brnVMs != null) { soh.BranchVMs = brnVMs; };
//                if (comVMs != null) { soh.CompanyVMs = comVMs; };
//            }
//            return soh;
//        }

//        public List<ItemStore> ConvertRecItemsToItemStors(ReceivingVM rec)
//        {
//            List<ItemStore> itemstors = new List<ItemStore>();
//            rec.Items.ForEach(i =>
//            {
//                ItemStore itemstor = new ItemStore();

//                float cost = (float)(i.ItmQntPO.Value * i.itmPrice.Value);

//                itemstor.itmId = i.itmId;
//                itemstor.itmQnt = i.ItmQntPO;
//                itemstor.Price = i.itmPrice;
//                itemstor.Cost = cost;
//                itemstor.ReceivingId = rec.ReceivingId;
//                itemstor.StoreId = rec.StoreId;

//                itemstors.Add(itemstor);
//            });

//            return itemstors;
//        }
//        public List<ItemConsumption> ConvertRecItemsToItemConsumption(ReceivingVM rec)
//        {
//            List<ItemConsumption> itemconsumps = new List<ItemConsumption>();
//            rec.Items.ForEach(i =>
//            {
//                ItemConsumption itemconmp = new ItemConsumption();
//                float cost = (float)(i.ItmQntPO * i.itmPrice);

//                if (i.ItmQntPO != null && i.itmPrice != null)
//                {
//                    cost = cost;
//                }


//                itemconmp.itmId = i.itmId;
//                itemconmp.itmQnt = i.ItmQntPO;
//                itemconmp.Price = i.itmPrice;
//                itemconmp.Cost = cost;
//                itemconmp.ReceivingId = rec.ReceivingId;
//                itemconmp.empId = rec.EmployeeRecID;
//                itemconmp.dptId = rec.DptId;
//                itemconmp.brnId = rec.BrnId;
//                itemconmp.comId = rec.ComId;

//                itemconsumps.Add(itemconmp);
//            });

//            return itemconsumps;
//        }
//        public List<StoreVM> ConvertItemStorsToStores(Item item)
//        {
//            List<ItemStore> itemStores = new List<ItemStore>();
//            itemStores = db.ItemStores.Where(i => i.itmId == item.itmId).ToList();
//            List<StoreVM> stores = new List<StoreVM>();

//            itemStores.ForEach(rec =>
//            {
//                var exsit = false;

//                stores.ForEach(s =>
//                {
//                    if(s?.StoreId == rec.StoreId)
//                    {
//                        exsit = true;
//                        s.ItemQnt += rec.itmQnt;
//                    }

//                });
//                if (!exsit)
//                {
//                    StoreVM store = new StoreVM();

//                    store.StoreId = rec.StoreId;
//                    store.ItemQnt = rec.itmQnt;
//                    store.strName = rec.Store?.strName;
//                    store.ItemPrice = rec.Price;
//                    store.ItemCost = rec.Cost;

//                    stores.Add(store);
//                }
//            });
//            return stores;
//        }
//        public List<ItemStore> UpdateItemReceivingStoreOrConcumtionQnt(Receiving receive)
//        {
//            List<ItemStore> itemStores = new List<ItemStore>();
//            List<ItemConsumption> itemConcumtions = new List<ItemConsumption>();

//            if (receive.ReceiveTo == "Store")
//            {
//                receive.ItemStores.ForEach(rec =>
//                {
//                    ItemStore itmstr = db.ItemStores.Where(i => i.itmId == rec.itmId && i.StoreId == receive.StoreId).FirstOrDefault();

//                    if (itmstr == null)
//                    {
//                        itmstr.ReceivingId = rec.ReceivingId;
//                        db.ItemStores.Add(itmstr);
//                        db.SaveChanges();
//                    }
//                    else if (itmstr != null && db.Entry(itmstr).State != EntityState.Detached)
//                    {
//                        db.Entry(itmstr).State = EntityState.Detached;
//                        try
//                        {
//                            itmstr.itmQnt += rec.itmQnt;

//                            db.ItemStores.Add(itmstr);
//                            db.Entry(itmstr).State = EntityState.Modified;
//                            db.SaveChanges();
//                            itemStores.Add(itmstr);
//                        }
//                        catch
//                        {

//                        }
//                    }
//                });
//            }
//            else if (receive.ReceiveTo == "Consumption")
//            {
//                receive.ItemConsumption.ForEach(ic =>
//                {
//                    ItemConsumption to = new ItemConsumption();

//                    if (receive.EmployeeRecID != null) {
//                        to = db.ItemConsumptions.Where(i => i.itmId == ic.itmId && i.empId == ic.empId).FirstOrDefault();
//                       if(to != null){

//                            //db.Entry(to).State = EntityState.Detached;

//                            //to.empId = ic.empId;
//                            //to.itmId = ic.itmId;
//                            //to.itmQnt = ic.itmQnt;
//                            //to.Price = ic.Price;
//                            //to.Cost = ic.itmQnt * ic.Price;

//                            //db.Entry(to).State = EntityState.Modified;
//                            //db.SaveChanges();
//                            //db.ItemConsumptions.Add(to);
//                            //db.SaveChanges();
//                        } else {
//                            to.empId = ic.empId;
//                            to.itmId = ic.itmId;
//                            to.itmQnt = ic.itmQnt;
//                            to.Price = ic.Price;
//                            to.Cost = ic.itmQnt * ic.Price;

//                            db.ItemConsumptions.Add(to);
//                            db.SaveChanges();
//                       }
//                    }
//                    if (receive.DptID != null)
//                    {
//                        to = db.ItemConsumptions.Where(i => i.itmId == ic.itmId && i.dptId == ic.dptId).FirstOrDefault();
//                        if (to != null)
//                        {
//                            to.dptId = ic.dptId;
//                            to.itmId = ic.itmId;
//                            to.itmQnt = ic.itmQnt;
//                            to.Price = ic.Price;
//                            to.Cost = ic.itmQnt * ic.Price;

//                            db.ItemConsumptions.Add(to);
//                            db.SaveChanges();
//                        } else {
//                            to.empId = ic.empId;
//                            to.itmId = ic.itmId;
//                            to.itmQnt = ic.itmQnt;
//                            to.Price = ic.Price;
//                            to.Cost = ic.itmQnt * ic.Price;

//                            db.ItemConsumptions.Add(to);
//                            db.SaveChanges();
//                        }
//                    }
//                    if (receive.BrnID != null)
//                    {
//                        to = db.ItemConsumptions.Where(i => i.itmId == ic.itmId && i.brnId == ic.brnId).FirstOrDefault();
//                        if (to != null)
//                        {
//                            to.brnId = ic.brnId;
//                            to.itmId = ic.itmId;
//                            to.itmQnt = ic.itmQnt;
//                            to.Price = ic.Price;
//                            to.Cost = ic.itmQnt * ic.Price;

//                            db.ItemConsumptions.Add(to);
//                            db.SaveChanges();
//                        } else {
//                            to.empId = ic.empId;
//                            to.itmId = ic.itmId;
//                            to.itmQnt = ic.itmQnt;
//                            to.Price = ic.Price;
//                            to.Cost = ic.itmQnt * ic.Price;

//                            db.ItemConsumptions.Add(to);
//                            db.SaveChanges();
//                        }
//                    }
//                    if (receive.ComID != null)
//                    {
//                        to = db.ItemConsumptions.Where(i => i.itmId == ic.itmId && i.comId == ic.comId).FirstOrDefault();
//                        if (to != null)
//                        {
//                            to.comId = ic.comId;
//                            to.itmId = ic.itmId;
//                            to.itmQnt = ic.itmQnt;
//                            to.Price = ic.Price;
//                            to.Cost = ic.itmQnt * ic.Price;

//                            db.ItemConsumptions.Add(to);
//                            db.SaveChanges();
//                        }  else {
//                            to.empId = ic.empId;
//                            to.itmId = ic.itmId;
//                            to.itmQnt = ic.itmQnt;
//                            to.Price = ic.Price;
//                            to.Cost = ic.itmQnt * ic.Price;

//                            db.ItemConsumptions.Add(to);
//                            db.SaveChanges();
//                        }
//                    }
//                });
//            }

//            return itemStores;
//        }
//         public Nullable<float> CalculatReceivingCost(Receiving rec)
//        {
//                Nullable<float> RecTotalAmount = 0;

//                if (rec.ItemStores.Count != 0)
//                {
//                    rec.ItemStores.ForEach(i =>
//                    {
//                        i.Cost = i.Price * i.itmQnt;
//                        RecTotalAmount += i.Cost;
//                    });

//                }
//                else if (rec.ItemConsumption.Count != 0)
//                {
//                    rec.ItemConsumption.ForEach(i =>
//                    {
//                        i.Cost = i.Price * i.itmQnt;
//                        RecTotalAmount += i.Cost;
//                    });
//                }
  
//            return RecTotalAmount;
//        }


//    }
//}
