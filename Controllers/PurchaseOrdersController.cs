//using System;
//using System.Collections.Generic;
//using System.Data;
//using System.Data.Entity;
//using System.Data.Entity.Infrastructure;
//using System.Linq;
//using System.Net;
//using System.Net.Http;
//using System.Threading.Tasks;
//using System.Web.Http;
//using System.Web.Http.Cors;
//using System.Web.Http.Description;
//using IntranetAPI.Mappers;
//using IntranetAPI.Models;
//using IntranetAPI.Services;
//using IntranetAPI.ViewModels;
//using EntityState = System.Data.Entity.EntityState;

//namespace IntranetAPI.Controllers
//{
//    [RoutePrefix("api/POs")]
//    [EnableCors(origins: "*", headers: "*", methods: "*")]
//    public class PurchaseOrdersController : ApiController
//    {
//        DBContext db = new DBContext();
//        PoService poSrv = new PoService();


//        //// GET: api/PurchaseOrders
//        //public List<PurchaseOrderVM> GetPurchaseOrders()
//        //{
//        //    List<PurchaseOrder> pos =  db.PurchaseOrders.ToList();
//        //    List<PurchaseOrderVM> povms = new List<PurchaseOrderVM>();

//        //    if (pos.Count > 0)
//        //    {
//        //        pos.ForEach(po =>
//        //        {
//        //            povms.Add(po.MapToPurchaseOrderVM());
//        //        });
//        //    }
//        //    return povms;
//        //}

//        [HttpGet]
//        [Route("getPOsListByEmpId/{empId}")]
//        public List<PurchaseOrderVM> getPOsListByEmpId(int empId)
//        {
//            PoService poSrv = new PoService();
//            List<PurchaseOrder> pos = new List<PurchaseOrder>();
//            List<PurchaseOrderVM> poVMs = new List<PurchaseOrderVM>();

//            pos = poSrv.getPOsListByEmpId(empId).ToList();

//            pos.ForEach(po =>
//            {
//                poVMs.Add(po.MapToPurchaseOrderVM());
//            });

//            //if (pos != null)
//            //{
//            //    poVMs = pos.MapToPurchaseOrderVMList();
//            //}
//            return poVMs;
//        }

//        //[HttpGet]
//        //[Route("GetPOsForApprovalByEmpId/{empId}")]

//        //public List<PurchaseOrderVM> GetPOsForApprovalByEmpId(int empId)
//        //{
//        //    List<PurchaseOrder> pos = db.PurchaseOrders.ToList();
//        //    List<PurchaseOrderVM> povms = new List<PurchaseOrderVM>();
//        //    pos = poSrv.GetPOsForApprovalByEmpId(empId);
//        //    //pos.ForEach(po =>
//        //    //{
//        //    //    if(po.Status.stsName == "Open")
//        //    //    {
//        //    //        povms.Add(po.MapToPurchaseOrderVM());
//        //    //    }

//        //    //});
//        //    return povms;
//        //}


//        [HttpGet]
//        [Route("GetPOById/{id}")]
//        [ResponseType(typeof(PurchaseOrderVM))]
//        public async Task<IHttpActionResult> GetPOById(int id)
//        {
//            PurchaseOrder purchaseOrder = await db.PurchaseOrders.FindAsync(id);
//            if (purchaseOrder == null)
//            {
//                return NotFound();
//            }

//            return Ok(purchaseOrder.MapToPurchaseOrderVM());
//        }


//        // PUT: api/PurchaseOrders/5
//        [ResponseType(typeof(void))]
//        public async Task<IHttpActionResult> PutPurchaseOrder(int id, PurchaseOrder purchaseOrder)
//        {
//            if (!ModelState.IsValid)
//            {
//                return BadRequest(ModelState);
//            }

//            if (id != purchaseOrder.PurchaseOrderId)
//            {
//                return BadRequest();
//            }

//            db.Entry(purchaseOrder).State = EntityState.Modified;

//            try
//            {
//                await db.SaveChangesAsync();
//            }
//            catch (DbUpdateConcurrencyException)
//            {
//                if (!PurchaseOrderExists(id))
//                {
//                    return NotFound();
//                }
//                else
//                {
//                    throw;
//                }
//            }

//            return StatusCode(HttpStatusCode.NoContent);
//        }

//        // POST: api/PurchaseOrders
//        [ResponseType(typeof(PurchaseOrder))]
//        public async Task<IHttpActionResult> PostPurchaseOrder(PurchaseOrderVM purchaseOrder)
//        {
//            PrService prSrv = new PrService();

//            PurchaseOrder po = purchaseOrder.MapToPurchaseOrder();
//            List<Status> statuss = prSrv.SaveStatusToDB();
//            statuss.ForEach(st =>
//            {
//                if (st.stsRefernce == "Ordered")
//                {
//                    po.StatusId = st.StatusId;
//                }
//            });
//            po.poDate = DateTime.Now;
 
//            db.PurchaseOrders.Add(po);
//            await db.SaveChangesAsync();

//            purchaseOrder.PurchaseRequestes.ForEach(pr =>
//            {
//                prSrv.UpdatePRsWithPOId(pr.PurchaseRequestId, po.PurchaseOrderId);
//            });

//            return CreatedAtRoute("DefaultApi", new { id = purchaseOrder.PurchaseOrderId }, purchaseOrder);
//        }

//        // DELETE: api/PurchaseOrders/5
//        [ResponseType(typeof(PurchaseOrder))]
//        public async Task<IHttpActionResult> DeletePurchaseOrder(int id)
//        {
//            PurchaseOrder purchaseOrder = await db.PurchaseOrders.FindAsync(id);
//            if (purchaseOrder == null)
//            {
//                return NotFound();
//            }

//            db.PurchaseOrders.Remove(purchaseOrder);
//            await db.SaveChangesAsync();

//            return Ok(purchaseOrder);
//        }

//        protected override void Dispose(bool disposing)
//        {
//            if (disposing)
//            {
//                db.Dispose();
//            }
//            base.Dispose(disposing);
//        }

//        private bool PurchaseOrderExists(int id)
//        {
//            return db.PurchaseOrders.Count(e => e.PurchaseOrderId == id) > 0;
//        }

//        [HttpGet]
//        [Route("PurchaseOrdersStatus")]
//        public List<Status> PurchaseRequestsStatus()
//        {
//            return db.Statuss.ToList();
//        }
//    }
//}