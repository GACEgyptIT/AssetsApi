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
//using Microsoft.Ajax.Utilities;
//using EntityState = System.Data.Entity.EntityState;

//namespace IntranetAPI.Controllers
//{
//    [RoutePrefix("api/Receivings")]
//    [EnableCors(origins: "*", headers: "*", methods: "*")]
//    public class ReceivingsController : ApiController
//    {
//        DBContext db = new DBContext();
//        ReceivingService recSrv = new ReceivingService();

//        [HttpGet]
//        [Route("GetReceivingsByEmpId/{empId}")]
//        public List<ReceivingVM> GetReceivingsByEmpId(int empId)
//        {
//            List<Receiving> recs = new List<Receiving>();
//            List<ReceivingVM> recVMs = new List<ReceivingVM>();

//            recs = recSrv.getReceivingListByEmpId(empId);
//            if (recs.Count > 0)
//            {
//                recVMs = recs.MapToReceivingListVM();
//            }
//            return recVMs;
//        }

//        [ResponseType(typeof(void))]
//        public async Task<IHttpActionResult> PutReceiving(int id, Receiving receiving)
//        {
//            if (!ModelState.IsValid)
//            {
//                return BadRequest(ModelState);
//            }

//            if (id != receiving.ReceivingId)
//            {
//                return BadRequest();
//            }

//            db.Entry(receiving).State = EntityState.Modified;

//            try
//            {
//                await db.SaveChangesAsync();
//            }
//            catch (DbUpdateConcurrencyException)
//            {
//                if (!ReceivingExists(id))
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

//        public ReceivingVM PostReceiving(ReceivingVM receivingVM)
//        {
//            ReceivingService recSrv = new ReceivingService();
//            ReceivingVM recvm = recSrv.AddReceiving(receivingVM);

//            return recvm;
//        }

//        // DELETE: api/Receivings/5
//        [ResponseType(typeof(Receiving))]
//        public async Task<IHttpActionResult> DeleteReceiving(int id)
//        {
//            Receiving receiving = await db.Receivings.FindAsync(id);
//            if (receiving == null)
//            {
//                return NotFound();
//            }

//            db.Receivings.Remove(receiving);
//            await db.SaveChangesAsync();

//            return Ok(receiving);
//        }

//        protected override void Dispose(bool disposing)
//        {
//            if (disposing)
//            {
//                db.Dispose();
//            }
//            base.Dispose(disposing);
//        }

//        private bool ReceivingExists(int id)
//        {
//            return db.Receivings.Count(e => e.ReceivingId == id) > 0;
//        }
//    }
//}