using IntranetAPI.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using System.Web;
using IntranetAPI.ViewModels;
using IntranetAPI.Mappers;
using IntranetAPI.ModelViews;
using IntranetAPI.Services;

namespace IntranetAPI.Controllers
{
    [RoutePrefix("api/Assets")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class AssetsController : ApiController
    {
        private DBContext db = new DBContext();
        AssetService astSrv = new AssetService();

        // GET: api/Assets
        public List<AssetVM> GetAsset()
        {
            List<Asset> assets = new List<Asset>();
            assets = db.Asset.ToList();

            return assets.MapToAssetListVM();
        }

        [HttpGet]
        [Route("GetAsssetByCode/{AssetCode}")]
        public Asset GetAsssetByCode(string AssetCode)
        {
            Asset asset = db.Asset.Where(cd => cd.astCode == AssetCode).FirstOrDefault();
            return asset;
        }

        [HttpGet]
        [Route("getAsssetByDailNumber/{dailNumber}")]
        public Asset GetAsssetByDailNumber(string dailNumber)
        {
            var res = false;
            Asset asset = db.Asset.Where(cd => cd.astDialNumber == dailNumber).FirstOrDefault();
            if (asset != null)
            {
                res = true;
            }
            return asset;
        }

        [HttpGet]
        [Route("getDailNumber/{dailnumber}")]
        public string getDailNumber(string dailnumber)
        {
            Asset asset = db.Asset.Where(cd => cd.astDialNumber == dailnumber).FirstOrDefault();

            if (asset == null)
            {
                return null;
            }
            return asset.astDialNumber;
        }

        [HttpGet]
        [Route("getSerialNumber/{serialNumber}")]
        public string getSerialNumber(string serialNumber)
        {
            Asset asset = db.Asset.Where(cd => cd.astSerialNumber == serialNumber.Trim()).FirstOrDefault();
            if (asset == null)
            {
                return "";
            }
            return asset.astSerialNumber;
        }

        [HttpGet]
        [Route("getByAssetCode/{astCode}")]
        public Asset getByAssetCode(string astCode)
        {
            return db.Asset.Where(a => a.astCode == astCode.Trim()).FirstOrDefault();
            //if (asset != null)
            //{
            //    if (asset.IsScrap)
            //    {
            //        db.Asset.Where(a => a.astCode == astCode).FirstOrDefault().IsScrap = false;
            //        db.SaveChanges();
            //        return asset;
            //    }
            //    else
            //    {
            //        db.Asset.Where(a => a.astCode == astCode).FirstOrDefault().IsScrap = true;
            //        db.SaveChanges();
            //        return asset;
            //    }
            //}
            //else
            //{
            //    return asset;
            //}
        
        }


        [HttpGet]
        [Route("isAsssetPNExist/{pn}")]
        public bool isAsssetPNExist(string pn)
        {
            var asset = db.Asset.Where(cd => cd.astPartNumber == pn).FirstOrDefault();
            if (asset != null)
            {
                return true;
            }
            else
            {
                return false;
            }
        }


        [HttpGet]
        [Route("isAsssetCodeExist/{AssetCode}")]
        public bool isAsssetCodeExist(string AssetCode)
        {
            var asset = db.Asset.Where(cd => cd.astCode == AssetCode).FirstOrDefault();
            if (asset != null)
            {
                return true;
            }
            else
            {
                return false;
            }
        }


        [HttpGet]
        [Route("isBrandCodeExist/{brandcode}")]
        public bool isBrandCodeExist(string brandcode)
        {
            var brand = db.AssetBrand.Where(cd => cd.astBrandCode == brandcode).FirstOrDefault();
            if (brand != null)
            {
                return true;
            }
            else
            {
                return false;
            }
        }


        [HttpGet]
        [Route("istypeCodeExist/{typecode}")]
        public bool istypeCodeExist(string typecode)
        {
            var type = db.AssetType.Where(cd => cd.astTypeCode == typecode).FirstOrDefault();
            if (type != null)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        [HttpGet]
        [Route("isCategoryCodeExist/{categorycode}")]
        public bool isCategoryCodeExist(string categorycode)
        {
            var cat = db.AssetCategory.Where(cd => cd.astCategoryCode == categorycode).FirstOrDefault();
            if (cat != null)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        [HttpGet]
        [Route("incrementAssetCode/{brandId}")]
        public string incrementAssetCode(int brandId)
        {
            return astSrv.incrementAssetCode(brandId, "manual");
        }

        [HttpGet]
        [Route("incrementBrandCode/{typId}")]
        public string incrementBrandCode(int typId)
        {
            return astSrv.incrementBrandCode(typId);
        }


        [HttpGet]
        [Route("incrementTypeCode/{catId}")]
        public string incrementTypeCode(int catId)
        {
            return astSrv.incrementTypeCode(catId);
        }


        [HttpGet]
        [Route("incrementCategoryCode")]
        public string incrementCategoryCode()
        {
            return astSrv.incrementCategoryCode();
        }

        [HttpPost]
        [Route("editAsset")]
        [ResponseType(typeof(AssetVM))]
        public async Task<IHttpActionResult> editAsset(AssetVM astVM)
        {
            bool isScrap = false;
            AssetVM assVM = new AssetVM();
            Asset ass = new Asset();
            ass = db.Asset.Where(a=> a.astCode.Trim() == astVM.astCode.Trim()).FirstOrDefault();

            if (ass != null)
            {
                ass = astSrv.UpdateAsset(astVM.MapToAsset());
                if (ass.IsScrap)
                {
                    AssetTracking a = astSrv.CreateAssetTrackingRecord(ass.astCode, astVM.FromEmployeeName, "Scrap", astVM.empHRCode);
                }
                else
                {
                    if (astVM.FromEmployeeName != astVM.ToEmployeeName)
                    {
                        AssetTracking a = astSrv.CreateAssetTrackingRecord(ass.astCode, astVM.FromEmployeeName, astVM.ToEmployeeName, astVM.empHRCode);
                    }
                    else if (astVM.FromEmployeeName == astVM.ToEmployeeName && isScrap != ass.IsScrap)
                    {
                        AssetTracking a = astSrv.CreateAssetTrackingRecord(ass.astCode, "Scrap", astVM.ToEmployeeName, astVM.empHRCode);

                    };
                };
                return Ok(ass.MapToAssetVM());
            }
            else
            {
                return Ok(assVM);
            }
        }

        [HttpPost]
        [Route("assignAssetsToEmp")]
        public EmployeeVM assignAssetsToEmp(AssignAssetsToEmpVM employee)
        {
            if(employee.assetsCurrent != null)
            {
                var crntArr = employee.assetsCurrent.ToArray();
            }

            var newArr = employee.assetsNew.ToArray();

            for (int i = 0; i < employee.assetsNew.Count; i++)
            {
                var newId = newArr[i].astId;
                var ass = db.Asset.Where(a => a.astId == newId).FirstOrDefault();

                if (ass != null)
                {
                    ass.empId = employee.empId;
                }  
                ass.empId = employee.empId;
                db.SaveChanges();
            }

            employee.assetsNew.ForEach(ast =>
            {
                AssetTracking rec = astSrv.CreateAssetTrackingRecord(ast.astCode, ast.EmployeeName, employee.empFullName, employee.empHRCode);
            });

            EmployeeVM emp = db.Employee.Where(e => e.empId == employee.empId).FirstOrDefault().MapToEmployeeVM();
            return emp;
        }

        [HttpPost]
        [Route("creatAsset")]
        public Boolean creatAsset(AssetVM astVM)
        {
            Asset ast = new Asset();
            try
            {
                ast = astSrv.AddNewAsset(astVM.MapToAsset());
                if (ast != null)
                {
                    astSrv.CreateAssetTrackingRecord(ast.astCode, astVM.FromEmployeeName, astVM.ToEmployeeName, astVM.empHRCode);
                }
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        // DELETE: Delete Selected Imported Uploaded Assests
        [HttpPost]
        [Route("DeleteSelectedAssets")]
        public async Task<IHttpActionResult> DeleteSelectedAssets(List<int> selectedIdsAssets)
        {
            if (selectedIdsAssets.Count > 0)
            {
                selectedIdsAssets.ForEach(id =>
                {
                    var i = db.Asset.Find(id);
                    if (i != null)
                    {
                        db.Asset.Remove(i);
                    }
                });
                db.SaveChanges();
            }
            return Ok(selectedIdsAssets);
        }


        // DELETE: api/Assets/5
        [ResponseType(typeof(Asset))]
        public async Task<IHttpActionResult> DeleteAsset(int id)
        {
            Asset asset = await db.Asset.FindAsync(id);
            if (asset == null)
            {
                return NotFound();
            }

            db.Asset.Remove(asset);
            await db.SaveChangesAsync();

            return Ok(asset);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AssetExists(string astCode)
        {
            return db.Asset.Count(e => e.astCode == astCode) > 0;
        }

        [Route("GetFile")]
        public HttpResponseMessage GetFile() //string id
        {
            //if (String.IsNullOrEmpty(id))
            //    return Request.CreateResponse(HttpStatusCode.BadRequest);

            string fileName = "UploadAssets.xlsx";
            string localFilePath;
            int fileSize;
 
            localFilePath = @"C:\Data\GAC Work\Application\InHouse Developing\Assets Mng\IntranetAPI\IntranetAPI\Content\files\UploadAssets.xlsx";
      
            HttpResponseMessage response = new HttpResponseMessage(HttpStatusCode.OK);
            response.Content = new StreamContent(new FileStream(localFilePath, FileMode.Open, FileAccess.Read));
            response.Content.Headers.ContentDisposition = new System.Net.Http.Headers.ContentDispositionHeaderValue("attachment");
            response.Content.Headers.ContentDisposition.FileName = fileName;
            response.Content.Headers.ContentType = new MediaTypeHeaderValue("application/octet-stream");

            return response;
        }


        [Route("GetFileEmployee")]
        public HttpResponseMessage GetFileEmployee() //string id
        {
            //if (String.IsNullOrEmpty(id))
            //    return Request.CreateResponse(HttpStatusCode.BadRequest);

            string fileName = "Upload Employees Contacts.xlsx";
            string localFilePath;
            int fileSize;

            localFilePath = @"D:\Private\Novotel\IntranetAPI\Content\files\AssetsUpleadedExcel\UploadEmployees.xlsx";

            HttpResponseMessage response = new HttpResponseMessage(HttpStatusCode.OK);
            response.Content = new StreamContent(new FileStream(localFilePath, FileMode.Open, FileAccess.Read));
            response.Content.Headers.ContentDisposition = new System.Net.Http.Headers.ContentDispositionHeaderValue("attachment");
            response.Content.Headers.ContentDisposition.FileName = fileName;
            response.Content.Headers.ContentType = new MediaTypeHeaderValue("application/octet-stream");

            return response;
        }

    }
}