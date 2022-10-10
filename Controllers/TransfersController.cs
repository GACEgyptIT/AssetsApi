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
//    [RoutePrefix("api/Transfers")]
//    [EnableCors(origins: "*", headers: "*", methods: "*")]
//    public class TransfersController : ApiController
//    {
//        private DBContext db = new DBContext();
//        TransferService trnsSrv = new TransferService();

        
//        [HttpGet]
//        [Route("GetTransfersList")]
//        public List<TransferVM> GetTransfersList()
//        {
//            return db.Transfers.ToList().MapToTransferListVM();
//        }

//        // GET: api/Transfers/5
//        [ResponseType(typeof(Transfer))]
//        public async Task<IHttpActionResult> GetTransfer(int id)
//        {
//            Transfer transfer = await db.Transfers.FindAsync(id);
//            if (transfer == null)
//            {
//                return NotFound();
//            }

//            return Ok(transfer);
//        }

//        // PUT: api/Transfers/5
//        [ResponseType(typeof(void))]
//        public async Task<IHttpActionResult> PutTransfer(int id, Transfer transfer)
//        {
//            if (!ModelState.IsValid)
//            {
//                return BadRequest(ModelState);
//            }

//            if (id != transfer.TransferId)
//            {
//                return BadRequest();
//            }

//            db.Entry(transfer).State = EntityState.Modified;

//            try
//            {
//                await db.SaveChangesAsync();
//            }
//            catch (DbUpdateConcurrencyException)
//            {
//                if (!TransferExists(id))
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

//        // POST: api/Transfers
//        [ResponseType(typeof(TransferVM))]
//        public async Task<IHttpActionResult> PostTransfer(TransferVM transfer)
//        {
//            TransferVM trn = trnsSrv.AddTransfer(transfer);

//            if (trn != null)
//            {
//                return CreatedAtRoute("DefaultApi", new { id = transfer.TransferId }, transfer);
//            }
//            else
//            {
//                TransferVM tr = new TransferVM();
//                return  CreatedAtRoute("DefaultApi", new { id = tr.TransferId }, tr);
//            }
//        }

//        // DELETE: api/Transfers/5
//        [ResponseType(typeof(Transfer))]
//        public async Task<IHttpActionResult> DeleteTransfer(int id)
//        {
//            Transfer transfer = await db.Transfers.FindAsync(id);
//            if (transfer == null)
//            {
//                return NotFound();
//            }

//            db.Transfers.Remove(transfer);
//            await db.SaveChangesAsync();

//            return Ok(transfer);
//        }

//        protected override void Dispose(bool disposing)
//        {
//            if (disposing)
//            {
//                db.Dispose();
//            }
//            base.Dispose(disposing);
//        }

//        private bool TransferExists(int id)
//        {
//            return db.Transfers.Count(e => e.TransferId == id) > 0;
//        }
//    }
//}