using IntranetAPI.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace IntranetAPI.Services
{
    public class AssetService
    {
        DBContext db = new DBContext();
        public class status
        {
            public bool duplicatedCode { get; set; }
            public bool duplicatedSN { get; set; }
            public bool duplicatedDN { get; set; }

        }
        public Asset AddNewAsset(Asset asset)
        {
            //asset.AssetCategoryName = asset.AssetCategoryName.ToLower();
            //asset.AssetTypeName = asset.AssetTypeName.ToLower();
            //asset.AssetBrandName = asset.AssetBrandName.ToLower();
            //asset.astPartNumber = asset.astPartNumber?.ToLower();

            asset.astPartNumber = asset.astPartNumber?.Trim();
            asset.astSerialNumber = asset.astSerialNumber?.Trim();

            db.Asset.Add(asset);
            db.SaveChanges();

            if (asset != null)
            {
                return asset;
            }
            else
            {
                return asset;
            }
        }
        public Asset UpdateAsset(Asset asset)
        {
            try
            {
                Asset ass = new Asset();
                ass = db.Asset.Find(asset.astId);
                if(ass != null)
                {
                    ass.astId = asset.astId;
                    ass.astDescription = asset.astDescription;
                    ass.astCode = asset.astCode;
                    ass.astSerialNumber = asset.astSerialNumber?.Trim();  //.ToLower();
                    ass.astPartNumber = asset.astPartNumber?.Trim();  //.ToLower();
                    ass.astDialNumber = asset.astDialNumber?.Trim();
                    ass.astCircuitNumber = asset.astCircuitNumber?.Trim();
                    ass.astPurchaseDate = asset.astPurchaseDate;
                    ass.AssetTypeName = asset.AssetTypeName?.Trim();  //.ToLower();
                    ass.AssetCategoryName = asset.AssetCategoryName?.Trim();  //.ToLower();
                    ass.AssetBrandName = asset.AssetBrandName?.Trim();  //.ToLower();
                    ass.AssetBrandId = asset.AssetBrandId;
                    ass.empId = asset.empId;
                    ass.OprAccNumberId = asset.OprAccNumberId;
                    ass.OperatorRatePlanId = asset.OperatorRatePlanId;
                    ass.IsScrap = asset.IsScrap;

                    db.Entry(ass).State = EntityState.Detached;
                    db.Asset.Add(ass);             //Attach the NEW Departmnet
                    db.Entry(ass).State = EntityState.Modified;
                    db.SaveChanges();
                    return ass;
                }
                else
                {
                    return null;
                }
            }
            catch (Exception ex )
            {

                throw;
            }
        }
        public Boolean IsExsitUploadedAssetsALL()
        {
            var asset = db.ExcelAssetsUploadAPI.ToList();

            if (asset.Count == 0)
            {
                return false;
            }
            else
            {
                return true;
            }
        }
        public Boolean IsPNDailNumberSirctExistInMainAssets(string pn)
        {
            Asset asset = new Asset();
            asset = db.Asset.Where(i => i.astPartNumber == pn).FirstOrDefault();

            if (asset == null)
            {
                return false;
            }
            else
            {
                return true;
            }
        }
        public Boolean IsSearialNumberExistInMainAssets(string sn)
        {
            Asset asset = new Asset();
            asset = db.Asset.Where(i => i.astSerialNumber == sn).FirstOrDefault();

            if (asset == null)
            {
                return false;
            }
            else
            {
                return true;
            }
        }

        public Boolean IsPNDailNumberSirctExistInUploadedAssets(string pn)
        {
            ExcelAssetsUploadAPI asset = new ExcelAssetsUploadAPI();
            asset = db.ExcelAssetsUploadAPI.Where(i => i.PartNumber == pn).FirstOrDefault();

            if (asset == null)
            {
                return false;
            }
            else
            {
                return true;
            }
        }
        public Boolean IsSearialNumberExistInUploadedAssets(string sn)
        {
            ExcelAssetsUploadAPI asset = new ExcelAssetsUploadAPI();
            asset = db.ExcelAssetsUploadAPI.Where(i => i.SerialNumber == sn).FirstOrDefault();

            if (asset == null)
            {
                return false;
            }
            else
            {
                return true;
            }
        }
        public status IsDuplicatedUploadedAssets(string code, string sn, string PartNumber)
        {
            ExcelAssetsUploadAPI assetForCode = new ExcelAssetsUploadAPI();
            ExcelAssetsUploadAPI assetForSN = new ExcelAssetsUploadAPI();
            ExcelAssetsUploadAPI assetForDN = new ExcelAssetsUploadAPI();
            Asset assForCode = new Asset();
            Asset assForSN = new Asset();
            Asset asstForDN = new Asset();
            status st = new status();
            st.duplicatedCode = false;
            st.duplicatedSN = false;
            st.duplicatedDN = false;

            if (code != null)
            {
                //assetForCode = db.ExcelAssetsUploadAPI.FirstOrDefault(i => i.astBrandCode == code);
                //if (assetForCode != null)
                //{
                //    db.ExcelAssetsUploadAPI.FirstOrDefault(i => i.astBrandCode == code).duplicatPartNumber = true;
                //    db.SaveChanges();
                //    st.duplicatedCode = true;
                //    assetForCode = null;
                //}
            }
            if (PartNumber != null)
            {
                assetForDN = db.ExcelAssetsUploadAPI.FirstOrDefault(i => i.PartNumber == PartNumber);
                asstForDN = db.Asset.FirstOrDefault(i => i.astPartNumber == PartNumber);
                if (assetForDN != null || asstForDN != null)
                {
                    db.Entry(assetForDN).State = EntityState.Detached;
                    assetForDN.duplicatPartNumber = true;
                    db.ExcelAssetsUploadAPI.Add(assetForDN);           
                    db.Entry(assetForDN).State = EntityState.Modified;
                    db.SaveChanges();

                    st.duplicatedDN = true;
                    assetForDN = null;
                }
                else
                {
                    db.Entry(assetForDN).State = EntityState.Detached;
                    assetForDN.duplicatPartNumber = false;
                    db.ExcelAssetsUploadAPI.Add(assetForDN);
                    db.Entry(assetForDN).State = EntityState.Modified;
                    db.SaveChanges();

                    st.duplicatedDN = true;
                    assetForDN = null;
                }
            }
            if (sn != null)
            {
                assetForSN = db.ExcelAssetsUploadAPI.FirstOrDefault(i => i.SerialNumber == sn);
                assForSN = db.Asset.FirstOrDefault(i => i.astSerialNumber == sn);
                if (assetForSN != null || assForSN != null)
                {
                    db.Entry(assetForSN).State = EntityState.Detached;
                    assetForSN.duplicatSerialNumber = true;
                    db.ExcelAssetsUploadAPI.Add(assetForSN);
                    db.Entry(assetForSN).State = EntityState.Modified;
                    db.SaveChanges();

                    st.duplicatedSN = true;
                    assetForSN = null;
                }
                else
                {
                    db.Entry(assetForSN).State = EntityState.Detached;
                    assetForSN.duplicatSerialNumber = false;
                    db.ExcelAssetsUploadAPI.Add(assetForSN);
                    db.Entry(assetForSN).State = EntityState.Modified;
                    db.SaveChanges();

                    st.duplicatedSN = true;
                    assetForSN = null;
                }
            }
            List<ExcelAssetsUploadAPI> list = new List<ExcelAssetsUploadAPI>();
            list = db.ExcelAssetsUploadAPI.ToList();
            foreach (var a in list)
            {
                ExcelAssetsUploadAPI ass = new ExcelAssetsUploadAPI();
                ass = db.ExcelAssetsUploadAPI.Find(a.astId);
                db.Entry(ass).State = EntityState.Detached;
                if (a.duplicatSerialNumber == true || a.duplicatPartNumber == true)
                {
                    ass.IsExist = true;
                }
                else
                {
                    ass.IsExist = false;
                }
                db.ExcelAssetsUploadAPI.Add(ass);
                db.Entry(ass).State = EntityState.Modified;
                db.SaveChanges();
            }
            return st;
        }
        public Asset ConvertUploadedToCurrent(ExcelAssetsUploadAPI uploaded)
        {
            var current = new Asset();

            current.AssetCategoryName = uploaded.AssetCategoryName;
            current.AssetTypeName = uploaded.AssetTypeName;
            current.AssetBrandName = uploaded.AssetBrandName;
            current.astBrandCode = uploaded.astBrandCode;
            current.astDescription = uploaded.Description;
            current.astCode = incrementAssetCode(uploaded.AssetBrandId, "manual"); 
            current.astSerialNumber = uploaded.SerialNumber;
            current.astPartNumber = uploaded.PartNumber;
            current.astDialNumber = uploaded.DialNumber;
            current.astCircuitNumber = uploaded.CircuitNumber;

            current.AssetBrandId = uploaded.AssetBrandId;
            current.empId = GetIndexIdAssetEmpCompany(null, uploaded.EmpHRCode, null, null);
 
            if (current.AssetBrandId == 0) current.AssetBrandId = null;
            if (current.empId == 0) current.empId = null;

            return current;
        }
        public Nullable<int> GetIndexIdAssetEmpCompany(string astBrandCode, string empHrCode, string CompanyName, string BranchName) // modify to return 0 if the item not exist test
        {
            if (astBrandCode != null && db.AssetBrand.ToList().Count > 0)
            {
                try
                {

                    var assetbrand = db.AssetBrand.FirstOrDefault(e => e.astBrandCode == astBrandCode);

                    if (assetbrand != null)
                    {
                        return assetbrand.AssetBrandId;
                    }

                }
                catch (Exception)
                {
                    return 0;
                    throw;
                }
            }
            else if (empHrCode != null && db.Employee.ToList().Count > 0)
            {
                try
                {
                    if (empHrCode != "")
                    {
                        var emp = db.Employee.FirstOrDefault(e => e.empHRCode == empHrCode);
                        if (emp != null)
                        {
                            return emp.empId;
                        }
                    }
                }
                catch (Exception e)
                {

                    return 0;
                    //throw;
                }

            }
            else if (CompanyName != null && db.Company.ToList().Count > 0)
            {
                try
                {
                    var company = db.Company.FirstOrDefault(e => e.comName == CompanyName);

                    if (company != null)
                    {
                        return company.comId;
                    }
                }
                catch (Exception)
                {
                    return 0;
                    //throw;
                }
            }
            else if (BranchName != null && db.Branch.ToList().Count > 0)
            {
                try
                {
                    var branch = db.Branch.FirstOrDefault(e => e.brnName == BranchName);
                    if (branch != null)
                    {
                        return branch.brnId;
                    }

                }
                catch (Exception)
                {
                    return 0;
                    //throw;
                }
            }
            return 0;
        }
        public void UpdateAssetsAvailabilityStatus()
        {
            List<ExcelAssetsUploadAPI> list = new List<ExcelAssetsUploadAPI>();
            list = db.ExcelAssetsUploadAPI.ToList();


            if (list != null)
            {
                list.ForEach(upld => {

                    if (IsPNDailNumberSirctExistInMainAssets(upld.PartNumber) || IsPNDailNumberSirctExistInUploadedAssets(upld.PartNumber))
                    {
                        db.ExcelAssetsUploadAPI.Find(upld.astId).duplicatPartNumber = true;
                        db.ExcelAssetsUploadAPI.Find(upld.astId).IsExist = true;
                        db.SaveChanges();
                    }
                    else
                    {
                        db.ExcelAssetsUploadAPI.Find(upld.astId).duplicatPartNumber = false;
                        db.ExcelAssetsUploadAPI.Find(upld.astId).IsExist = false;
                        db.SaveChanges();
                    }
                    if (IsSearialNumberExistInMainAssets(upld.SerialNumber) || IsSearialNumberExistInUploadedAssets(upld.SerialNumber))
                    {
                        db.ExcelAssetsUploadAPI.Find(upld.astId).duplicatSerialNumber = true;
                        db.ExcelAssetsUploadAPI.Find(upld.astId).IsExist = true;
                        db.SaveChanges();
                    }
                    else
                    {
                        db.ExcelAssetsUploadAPI.Find(upld.astId).duplicatSerialNumber = false;
                        db.ExcelAssetsUploadAPI.Find(upld.astId).IsExist = false;
                        db.SaveChanges();
                    }
                });
            }
        }
        public Boolean AddCurrentAsset(Asset crnt, ExcelAssetsUploadAPI upld)  // modify to return object
        {
            if (crnt != null)
            {
                try
                {
                    db.Asset.Add(crnt);
                    db.SaveChanges();
                    AssetService astSrv = new AssetService();
                    astSrv.CreateAssetTrackingRecord(crnt.astCode, "Uploaded", upld.EmpName, upld.EmpHRCode);

                    return true;
                }
                catch (Exception ex)
                {
                    return false;
                    throw;
                }
            }
            else
            {
                return false;
            }

        }
        public Boolean DeleteUploadedAsset(int id)
        {
            var asset = db.ExcelAssetsUploadAPI.Find(id);
            if (asset != null)
            {
                db.ExcelAssetsUploadAPI.Remove(asset);
                db.SaveChanges();
                return true;
            }
            return false;
        }
        public bool AssetIsExist(ExcelAssetsUploadAPI upld)
        {
            db.ExcelAssetsUploadAPI.FirstOrDefault(i => i.astId == upld.astId).IsExist = true;
            db.SaveChanges();
            return true;
        }
        public AssetTracking CreateAssetTrackingRecord(string astCode, string fromEmp, string toEmp, string empHRcode)
        {
            try
            {
                AssetTracking assetTracking = new AssetTracking();
                Employee emp = new Employee();
                emp = db.Employee.Where(e => e.empHRCode == empHRcode).FirstOrDefault();
                if (emp != null)
                {
                    assetTracking.astCode = astCode;
                    assetTracking.From = fromEmp;
                    assetTracking.To = toEmp;
                    assetTracking.empHRCode = emp.empHRCode;
                    assetTracking.byUserName = emp.empFullName;

                    assetTracking.DateTime = DateTime.Now;

                    db.AssetTracking.Add(assetTracking);
                    db.SaveChanges();
               
                }
                return assetTracking;
            }
            catch (Exception e)
            {
         
                throw e;
            } 
        }

        public string incrementAssetCode(int brandId, string from)
        {
            List<Asset> assets = new List<Asset>(); 
            List<ExcelAssetsUploadAPI> assetsUpload = new List<ExcelAssetsUploadAPI>();
            AssetCategory category = new AssetCategory();
            List<AssetType> types = new List<AssetType>();
            List<AssetBrand> brands = new List<AssetBrand>();
            AssetBrand brand = new AssetBrand();
            int code = 0;
            // types = db.AssetCategory.Where(cc => cc.astCategoryName == assetCategoryName).Select( tt => tt.AssetTypes).ToList();
            brand = db.AssetBrand.Where(c => c.AssetBrandId == brandId).FirstOrDefault();
            assets.AddRange(db.Asset.Where(a => a.AssetBrandId == brand.AssetBrandId).ToList());

            if (assets != null && assets.Count > 0 && from == "manual")
            {
                foreach (var ass in assets)
                {
                    int c = Int32.Parse(ass.astCode.ToString());
                    if (c >= code)
                    {
                        code = c;
                    }
                }
                code = code + 1;
            }
            else
            {
           //     brand.astBrandCode = Int32.Parse(brand.astBrandCode + 1).ToString() ;
         //       string ccc = brand.astBrandCode.ToString() + "001";
                code = Int32.Parse(brand.astBrandCode ) + 1;

            }
            //if (assetsUpload != null && assetsUpload.Count > 0 && from == "upload")
            //{
            //    foreach (var ass in assetsUpload)
            //    {
            //        int c = Int32.Parse(ass.AssetCode.ToString());
            //        if (c >= code)
            //        {
            //            code = c;
            //        }
            //    }
            //    code = code + 1;
            //}
            //else if (from == "upload")
            //{
            //    //var ccc = category.astCategoryCode + "001";
            //    //code = Int32.Parse(ccc);
            //    code = Int32.Parse(brand.astBrandCode) + 1;

            //}

            return code.ToString();
        }


        public string incrementBrandCode(int typId)
        {
            List<AssetBrand> brands = new List<AssetBrand>();
            AssetType type = new AssetType();
            //      int code = 0;
            string code = "0";
            type = db.AssetType.Where(t => t.AssetTypeId == typId).FirstOrDefault();

            brands.AddRange(db.AssetBrand.Where(b=>b.AssetTypeId == type.AssetTypeId).ToList());

            if (brands != null && brands.Count > 0)
            {
                foreach (var brand in brands)
                {
                    if (brand.astBrandCode != null)
                    {
                        int c = Int32.Parse(brand.astBrandCode.ToString());
                        if (c >= Int32.Parse(code))
                        {
                            code = c.ToString();
                        }
                    }
                }
         //       code = code + 1000;
                code = (Int32.Parse(code) + 1000).ToString();
            }
            else
            {
                code = type.astTypeCode + "1000";
           //     code = Int32.Parse(type.astTypeCode);
          //      code = code + 1;
            }
            return code.ToString();
        }


        public string incrementTypeCode(int catId)
        {
            List<AssetType> types = new List<AssetType>();
      //      AssetType type = new AssetType();
            AssetCategory category = new AssetCategory();
            string codeCatType = "0";
            category = db.AssetCategory.Where(c => c.AssetCategoryId == catId).FirstOrDefault();
            codeCatType = category.astCategoryCode.ToString();
            types = db.AssetType.Where(c => c.AssetCategoryId == catId).ToList();

            if (types != null && types.Count > 0)
            {
                foreach (var type in types)
                {
                    if (type.astTypeCode != null)
                    {
                     //   int c = Int32.Parse(type.astTypeCode.ToString());
                     //   type.astTypeCode.ToString() = type.astTypeCode.ToString() + "0";
                        int c = Int32.Parse(type.astTypeCode.ToString());
                        if (c >= Int32.Parse(codeCatType) )
                        {
                            codeCatType = c.ToString();
                        }
                    }
                }
                codeCatType = (Int32.Parse(codeCatType) + 10).ToString();
            }
            else
            {
                codeCatType = codeCatType + "10";
            }


            return codeCatType.ToString();
        }

        public string incrementCategoryCode()
        {
            List<AssetCategory> cats = new List<AssetCategory>();

            string codeCatType = "0";
            cats = db.AssetCategory.ToList();

            if (cats != null && cats.Count > 0)
            {
                foreach (var cat in cats)
                {
                    if (cat.astCategoryCode != null)
                    {
                        int c = Int32.Parse(cat.astCategoryCode.ToString());
                        if (c >= Int32.Parse(codeCatType))
                        {
                            codeCatType = c.ToString();
                        }
                    }
                }
                codeCatType = (Int32.Parse(codeCatType) + 10).ToString();
            }
            else
            {
                codeCatType = "10";
            }
            return codeCatType.ToString();
        }

        public AssetBrand getBrandByCode(string code)
        {
            AssetBrand brand = new AssetBrand();
            brand = db.AssetBrand.Where(b => b.astBrandCode == code).FirstOrDefault();

            return brand;
        }
        public AssetType getTypeByBrandCode(string code)
        {
            AssetType brand = new AssetType();
            brand = db.AssetBrand.Where(b => b.astBrandCode == code).Select(t=>t.AssetType).FirstOrDefault();

            return brand;
        }
        public AssetCategory getCategoryByTypeCode(string code)
        {
            AssetCategory brand = new AssetCategory();
            brand = db.AssetType.Where(b => b.astTypeCode == code).Select(c=>c.AssetCategory).FirstOrDefault();

            return brand;
        }
        public string getCategoryNameByBrandCode(string code)
        {
           // AssetBrand brand = new AssetBrand();
            string catecoryname = db.AssetBrand.Where(b => b.astBrandCode == code.Trim()).Select(t=>t.AssetType.AssetCategory.astCategoryName).FirstOrDefault();
            if (catecoryname != null)
            {
                return catecoryname;
            }
            else
            {
                return null;
            }
        }

        public void UpdateUploadedAssetsDuplication()
        {
            List<ExcelAssetsUploadAPI> list = new List<ExcelAssetsUploadAPI>();
            List<ExcelAssetsUploadAPI> listTemp = new List<ExcelAssetsUploadAPI>();
            list = db.ExcelAssetsUploadAPI.ToList();
            listTemp = list;
            db.ExcelAssetsUploadAPI.RemoveRange(list);
            db.SaveChanges();

            foreach (var item1 in list)
            {
                int countSN = 0;
                int countPN = 0;
                Asset sn = new Asset();
                Asset pn = new Asset();

                if (item1.SerialNumber == null || item1.SerialNumber == "")
                {
                    sn = null;
                }
                else
                {
                    sn = db.Asset.Where(x => x.astSerialNumber == item1.SerialNumber).FirstOrDefault();
                }
                if (item1.PartNumber == null || item1.PartNumber == "")
                {
                    pn = null;
                }
                else
                {
                    pn = db.Asset.Where(x => x.astPartNumber == item1.PartNumber).FirstOrDefault();
                }

                foreach (var item2 in listTemp)
                {

                    item1.IsExist = false;
                    item1.duplicatSerialNumber = false;
                    item1.duplicatPartNumber = false;

                    if ((item1.SerialNumber == item2.SerialNumber && item2.SerialNumber != null && item2.SerialNumber != "") || sn != null)
                    {
                        countSN++;
                        if(countSN >= 2 || sn != null)
                        {
                            item1.duplicatSerialNumber = true;
                            item1.IsExist = true;
                        }
                    }
                    if (item1.SerialNumber == "" || item1.SerialNumber == null)
                    {
                        item1.SerialNumber = "";
                        item1.IsExist = true;
                    }
                    if ((item1.PartNumber == item2.PartNumber && item2.PartNumber != null && item2.PartNumber != "") || pn != null)
                    {
                        countPN++;
                        if (countPN >= 2 || pn != null)
                        {
                            item1.duplicatPartNumber = true;
                            item1.IsExist = true;
                        }
                    }
                    if (item1.astBrandCode == null || item1.astBrandCode == ""  
                        || item1.EmpHRCode == null || item1.EmpHRCode == "" 
                        || item1.EmpHRCode == "missed"
                        )
                    {
                        countPN++;
                        if (countPN >= 2 || pn != null)
                        {
                            item1.IsExist = true;
                        }
                    }
                    if (item1.EmpHRCode == "3803")
                    {

                    }
                }
                //if (item1.SerialNumber == null || item1.SerialNumber == "")
                //{
                //    item1.SerialNumber = "missed";
                //}
            }

            db.ExcelAssetsUploadAPI.AddRange(list);
            db.SaveChanges();
           
        }
    }
}