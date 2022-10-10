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
//using IntranetAPI.Models;
//using IntranetAPI.ViewModels;
//using IntranetAPI.Mappers;
//using EntityState = System.Data.Entity.EntityState;
//using IntranetAPI.Services;

//namespace IntranetAPI.Controllers
//{
//    [RoutePrefix("api/OprAccNumbers")]
//    [EnableCors(origins: "*", headers: "*", methods: "*")]
//    public class OprAccNumbersController : ApiController
//    {
//        private DBContext db = new DBContext();
//        OperatorService oprSr = new OperatorService();

//        // GET: api/OprAccNumbers
//        public List<OprAccNumberVM> GetOprAccNumber()
//        {
//            return db.OprAccNumber.ToList().MapToOprAccNumberListVM();
//        }

//        [HttpGet]
//        [Route("GetAccountsNumbersByOpId/{id}")]
//        public List<OprAccNumberVM> GetAccountsNumbersByOpId(int id)
//        {
//            return oprSr.getOperatorAccountsByOperatorId(id).MapToOprAccNumberListVM();
//        }

//        // GET: api/OprAccNumbers/5
//        [ResponseType(typeof(OprAccNumber))]
//        public async Task<IHttpActionResult> GetOprAccNumber(int id)
//        {
//            OprAccNumber oprAccNumber = await db.OprAccNumber.FindAsync(id);
//            if (oprAccNumber == null)
//            {
//                return NotFound();
//            }

//            return Ok(oprAccNumber);
//        }

//        // PUT: api/OprAccNumbers/5
//        [ResponseType(typeof(void))]
//        public async Task<IHttpActionResult> PutOprAccNumber(int id, OprAccNumber oprAccNumber)
//        {
//            //if (!ModelState.IsValid)
//            //{
//            //    return BadRequest(ModelState);
//            //}

//            //if (id != oprAccNumber.OprAccNumberId)
//            //{
//            //    return BadRequest();
//            //}

//            db.Entry(oprAccNumber).State = EntityState.Modified;

//            try
//            {
//                await db.SaveChangesAsync();
//            }
//            catch (DbUpdateConcurrencyException)
//            {
//                if (!OprAccNumberExists(id))
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

//        // POST: api/OprAccNumbers
//        [ResponseType(typeof(OprAccNumber))]
//        public async Task<IHttpActionResult> PostOprAccNumber(OprAccNumber oprAccNumber)
//        {
//            //if (!ModelState.IsValid)
//            //{
//            //    return BadRequest(ModelState);
//            //}

//            db.OprAccNumber.Add(oprAccNumber);
//            await db.SaveChangesAsync();

//            return CreatedAtRoute("DefaultApi", new { id = oprAccNumber.OprAccNumberId }, oprAccNumber);
//        }

//        // DELETE: api/OprAccNumbers/5
//        [ResponseType(typeof(OprAccNumber))]
//        public async Task<IHttpActionResult> DeleteOprAccNumber(int id)
//        {
//            OprAccNumber oprAccNumber = await db.OprAccNumber.FindAsync(id);
//            if (oprAccNumber == null)
//            {
//                return NotFound();
//            }

//            db.OprAccNumber.Remove(oprAccNumber);
//            await db.SaveChangesAsync();

//            return Ok(oprAccNumber);
//        }

//        protected override void Dispose(bool disposing)
//        {
//            if (disposing)
//            {
//                db.Dispose();
//            }
//            base.Dispose(disposing);
//        }

//        private bool OprAccNumberExists(int id)
//        {
//            return db.OprAccNumber.Count(e => e.OprAccNumberId == id) > 0;
//        }
//    }
//}