using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using IntranetAPI.Mappers;
using IntranetAPI.Models;
using IntranetAPI.ViewModels;
using EntityState = System.Data.Entity.EntityState;

namespace IntranetAPI.Controllers
{
    [RoutePrefix("api/AssetCatTypBrnd")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class AssetCatTypBrndController : ApiController
    {
        private DBContext db = new DBContext();
        //////////////////////////////////////////////////////////// Categories
        [HttpGet]
        [Route("GetAssetCategory")]
        public List<AssetCategoryVM> GetAssetCategory()
        {
            List<AssetCategoryVM> categories = new List<AssetCategoryVM>();
            List<AssetCategory> cats = new List<AssetCategory>();

            cats = db.AssetCategory.ToList();
            categories = cats.MapToAssetCategorysListVM();
            return categories;
        }
        [HttpPost]
        [Route("addAssetCategory")]
        [ResponseType(typeof(List<AssetCategory>))]
        public AssetCategory addAssetCategory(AssetCategory assetCategory)
        {
            //     assetCategory.astCategoryName = assetCategory.astCategoryName.ToLower();
            try
            {
                assetCategory.astCategoryName = assetCategory.astCategoryName.Trim();

                db.AssetCategory.Add(assetCategory);
                db.SaveChanges();

                return assetCategory;
            }
            catch (Exception ex)
            {
                return null;
                throw;
            }

        }

        [HttpPost]
        [Route("updateAssetCategory/{id}")]
        [ResponseType(typeof(List<AssetCategory>))]
        public AssetCategory updateAssetCategory(int id, AssetCategory AssetCategory)
        {
            AssetCategory cat = new AssetCategory();
            cat = db.AssetCategory.Find(AssetCategory.AssetCategoryId);
            db.Entry(cat).State = EntityState.Detached;
            cat.AssetCategoryId = AssetCategory.AssetCategoryId;
            cat.astCategoryName = AssetCategory.astCategoryName;
            cat.astCategoryCode = AssetCategory.astCategoryCode;
            db.AssetCategory.Add(cat);             //Attach the NEW Departmnet
            db.Entry(cat).State = EntityState.Modified;
            db.SaveChanges();

            return cat;
        }

        [HttpGet]
        [Route("deleteAssetCategory/{id}")]
        public Boolean deleteAssetCategory(int id)
        {
            try
            {
                AssetType ass = new AssetType();
                ass = db.AssetType.Where(a => a.AssetCategoryId == id).FirstOrDefault();
                if (ass == null)
                {
                    AssetCategory cat = new AssetCategory();
                    cat = db.AssetCategory.Find(id);
                    db.AssetCategory.Remove(cat);
                    db.SaveChanges();
                    return true;
                }
                else
                {
                    return false;
                }

            }
            catch (Exception ex)
            {
  
                throw;
            }
        }

        ///////////////////////////////////////////////////////////////////////// Asset Types
        [HttpGet]
        [Route("GetAssetTypes")]
        public List<AssetTypeVM> GetAssetTypes()
        {
            List<AssetTypeVM> types = new List<AssetTypeVM>();

            types = db.AssetType.ToList().MapToAssetTypeVMList();

            return types;
        }
        [HttpPost]
        [Route("addAssetType")]
        [ResponseType(typeof(List<AssetType>))]
        public AssetType addAssetType(AssetType assetType)
        {
     //       assetType.astTypeName = assetType.astTypeName.ToLower();
 
            assetType.astTypeName = assetType.astTypeName.Trim();
            assetType.astTypeCode = assetType.astTypeCode.Trim();
            db.AssetType.Add(assetType);
            db.SaveChanges();

            return assetType;
        }

        [HttpPost]
        [Route("updateAssetType/{id}")]
        [ResponseType(typeof(List<AssetType>))]
        public AssetType updateAssetType(int id, AssetType AssetType)
        {
            AssetType typ = new AssetType();
            typ = db.AssetType.Find(AssetType.AssetTypeId);
            db.Entry(typ).State = EntityState.Detached;
            typ.AssetTypeId = AssetType.AssetTypeId;
            typ.astTypeName = AssetType.astTypeName;
            typ.AssetCategoryId = AssetType.AssetCategoryId;
            db.AssetType.Add(typ);             //Attach the NEW Departmnet
            db.Entry(typ).State = EntityState.Modified;
            db.SaveChanges();

            return typ;
        }

        [HttpGet]
        [Route("deleteAssetType/{id}")]
        public Boolean deleteAssetType(int id)
        {
            try
            {
                AssetBrand brand = new AssetBrand();
                brand = db.AssetBrand.Where(b => b.AssetTypeId == id).FirstOrDefault();
                if (brand == null)
                {
                    AssetType typ = new AssetType();
                    typ = db.AssetType.Find(id);
                    db.AssetType.Remove(typ);
                    db.SaveChanges();
                    return true;
                }
                else
                {
                    return false;
                }

            }
            catch (Exception ex)
            {
                return false;
                throw;
            }
        }

        ///////////////////////////////////////////////////////////////////////////// Asset Brand
        [HttpGet]
        [Route("GetAssetBrands")]
        public List<AssetBrandVM> GetAssetBrands()
        {
            List<AssetBrandVM> brands = new List<AssetBrandVM>();

            brands = db.AssetBrand.ToList().MapToAssetBrandVMList();

            return brands;
        }
   
        [HttpPost]
        [Route("addAssetBrand")]
     //   [ResponseBrand(typeof(List<AssetBrand>))]
        public AssetBrand addAssetBrand(AssetBrand assetBrand)
        {
            //     assetBrand.astBrandName = assetBrand.astBrandName.ToLower();
            assetBrand.astBrandName = assetBrand.astBrandName.Trim();
            assetBrand.astBrandCode = assetBrand.astBrandCode.Trim();

            db.AssetBrand.Add(assetBrand);
            db.SaveChanges();

            return assetBrand;
        }

        [HttpPost]
        [Route("updateAssetBrand/{id}")]
     //   [ResponseBrand(typeof(List<AssetBrand>))]
        public AssetBrand updateAssetBrand(int id, AssetBrand AssetBrand)
        {
            AssetBrand typ = new AssetBrand();
            typ = db.AssetBrand.Find(AssetBrand.AssetBrandId);
            db.Entry(typ).State = EntityState.Detached;
            typ.AssetBrandId = AssetBrand.AssetBrandId;
            typ.astBrandName = AssetBrand.astBrandName;
      //      typ.AssetCategoryId = AssetBrand.AssetCategoryId;
            db.AssetBrand.Add(typ);             //Attach the NEW Departmnet
            db.Entry(typ).State = EntityState.Modified;
            db.SaveChanges();

            return typ;
        }

        [HttpGet]
        [Route("deleteAssetBrand/{id}")]
        public Boolean deleteAssetBrand(int id)
        {
            try
            {
                Asset aset = new Asset();
                aset = db.Asset.Where(a => a.AssetBrandId == id).FirstOrDefault();
                if (aset == null)
                {
                    AssetBrand typ = new AssetBrand();
                    typ = db.AssetBrand.Find(id);
                    db.AssetBrand.Remove(typ);
                    db.SaveChanges();
                    return true;
                }
                else
                {
                    return false;
                }

            }
            catch (Exception ex)
            {
                return false;
                throw;
            }
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AssetTypeExists(int id)
        {
            return db.AssetType.Count(e => e.AssetTypeId == id) > 0;
        }
    }
}