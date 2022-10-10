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
//    [RoutePrefix("api/PRs")]
//    [EnableCors(origins: "*", headers: "*", methods: "*")]
//    public class PurchaseRequestsController : ApiController
//    {
//        DBContext db = new DBContext();
//        PrService prSrv = new PrService();

//        //for User PR list
//        [HttpGet]
//        [Route("GetPRsForUserListByEmpId/{empId}")]
//        public List<PurchaseRequestVM> GetPRsForUserListByEmpId(int empId)
//        {
//            PrService prSrv = new PrService();
//            List<PurchaseRequest> prs = new List<PurchaseRequest>(); 
//            List<PurchaseRequestVM> prVMs = new List<PurchaseRequestVM>();

//            prs = prSrv.GetPRsForUserListByEmpId(empId).ToList();

//            if (prs != null)
//            {
//              prVMs = prs.MapToPurchaseRequestVMList();
//            }
//            return prVMs;
//        }
//        //for Approval
//        [HttpGet]
//        [Route("getPRsForApprovalByEmpId/{empId}")]
//        public List<PurchaseRequestVM> getPRsForApprovalByEmpId(int empId)
//        {
//            PrService prSrv = new PrService();
//            List<PurchaseRequest> prs = new List<PurchaseRequest>();
//            List<PurchaseRequestVM> prVMs = new List<PurchaseRequestVM>();

//            prs = prSrv.GetPRsForApprovalByEmpId(empId);

//            if (prs != null)
//            {
//                prVMs = prs.MapToPurchaseRequestVMList();
//            }
//            return prVMs;
//        }

//        //for POs
//        [HttpGet]
//        [Route("GetPRsForPOsByEmpId/{empId}")]
//        public List<PurchaseRequestVM> GetPRsForPOsByEmpId(int empId)
//        {
//            PrService prSrv = new PrService();
//            List<PurchaseRequest> prs = new List<PurchaseRequest>();
//            List<PurchaseRequestVM> prVMs = new List<PurchaseRequestVM>();

//            prs = prSrv.GetPRsForPOsByEmpId(empId).ToList();

//            if (prs != null)
//            {
//                prVMs = prs.MapToPurchaseRequestVMList();
//            }
//            return prVMs;
//        }

//        // GET: api/PurchaseRequests/5
//        [ResponseType(typeof(PurchaseRequest))]
//        public async Task<IHttpActionResult> GetPurchaseRequest(int id)
//        {
//            PurchaseRequest purchaseRequest = await db.PurchaseRequests.FindAsync(id);
//            if (purchaseRequest == null)
//            {
//                return NotFound();
//            }

//            return Ok(purchaseRequest);
//        }

//        [HttpGet]
//        [Route("GetPRById/{id}")]
//        [ResponseType(typeof(PurchaseRequestVM))]
//        public async Task<IHttpActionResult> GetPRById(int id)
//        {
//            PurchaseRequest purchaseRequest = await db.PurchaseRequests.FindAsync(id);
//            if (purchaseRequest == null)
//            {
//                return NotFound();
//            }

//            return Ok(purchaseRequest.MapToPurchaseRequestVM());
//        }

//        [HttpPost]
//        [Route("ApproveReject")]
//        [ResponseType(typeof(PurchaseRequestVM))]
//        public async Task<IHttpActionResult> ApproveReject(ApproveReject action)
//        {
//            PurchaseRequest pr = prSrv.UpdatePRStatus(action);
//            PurchaseRequest purchaserequest = prSrv.UpdatePR(pr);

//            return Ok(purchaserequest.MapToPurchaseRequestVM());
//        }

//        [Route("PutPurchaseRequest/{id}")]
//        // PUT: api/PurchaseRequests/5
//        [ResponseType(typeof(void))]
//        public async Task<IHttpActionResult> PutPurchaseRequest(int id, PurchaseRequestVM purchaseRequest)
//        {
//            if (!ModelState.IsValid)
//            {
//                return BadRequest(ModelState);
//            }

//            if (id != purchaseRequest.PurchaseRequestId)
//            {
//                return BadRequest();
//            }

//            db.Entry(purchaseRequest).State = EntityState.Modified;

//            try
//            {
//                await db.SaveChangesAsync();
//            }
//            catch (DbUpdateConcurrencyException)
//            {
//                if (!PurchaseRequestExists(id))
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

//        // POST: api/PurchaseRequests
//        [ResponseType(typeof(PurchaseRequest))]
//        public async Task<IHttpActionResult> PostPurchaseRequest(PurchaseRequestVM purchaseRequest)
//        {
//            PurchaseRequest pr = purchaseRequest.MapToPurchaseRequest();

//            pr = prSrv.SetPRStatus(pr);
//            pr.prDate = DateTime.Now;
           
//            DateTime dt = new DateTime(pr.prDate.Year, pr.prDate.Month, pr.prDate.Day, pr.prDate.Hour, pr.prDate.Minute, 0, DateTimeKind.Utc);
//            pr.prDate = dt;
//            db.PurchaseRequests.Add(pr);
//            await db.SaveChangesAsync();

//            return CreatedAtRoute("DefaultApi", new { id = pr.PurchaseRequestId }, pr);
//        }

//        // DELETE: api/PurchaseRequests/5
//        [ResponseType(typeof(PurchaseRequest))]
//        public async Task<IHttpActionResult> DeletePurchaseRequest(int id)
//        {
//            PurchaseRequest purchaseRequest = await db.PurchaseRequests.FindAsync(id);
//            if (purchaseRequest == null)
//            {
//                return NotFound();
//            }

//            db.PurchaseRequests.Remove(purchaseRequest);
//            await db.SaveChangesAsync();

//            return Ok(purchaseRequest);
//        }

//        protected override void Dispose(bool disposing)
//        {
//            if (disposing)
//            {
//                db.Dispose();
//            }
//            base.Dispose(disposing);
//        }
//        private bool PurchaseRequestExists(int id)
//        {
//            return db.PurchaseRequests.Count(e => e.PurchaseRequestId == id) > 0;
//        }

//        [HttpGet]
//        [Route("PurchaseRequestsStatus")]
//        public List<Status> PurchaseRequestsStatus()
//        {
//            return db.Statuss.ToList(); 
//        }
//    }
//}