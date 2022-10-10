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
//    [RoutePrefix("api/OperatorRatePlans")]
//    [EnableCors(origins: "*", headers: "*", methods: "*")]
//    public class OperatorRatePlansController : ApiController
//    {
//        private DBContext db = new DBContext();
//        OperatorService oprSr = new OperatorService();

//        // GET: api/OperatorRatePlans
//        public List<OperatorRatePlanVM> GetOperatorRatePlan()
//        {
//            return db.OperatorRatePlan.ToList().MapToAssetRatePlanListVM();
//        }

//        [HttpGet]
//        [Route("GetOperatorPlansByOpId/{id}")]
//        public List<OperatorRatePlanVM> GetOperatorPlansByOpId(int id)
//        {
//            return this.oprSr.getPlansByOperatorId(id).MapToAssetRatePlanListVM();
//        }

//        // GET: api/OperatorRatePlans/5
//        [ResponseType(typeof(OperatorRatePlan))]
//        public async Task<IHttpActionResult> GetOperatorRatePlan(int id)
//        {
//            OperatorRatePlan operatorRatePlan = await db.OperatorRatePlan.FindAsync(id);
//            if (operatorRatePlan == null)
//            {
//                return NotFound();
//            }

//            return Ok(operatorRatePlan);
//        }

//        // PUT: api/OperatorRatePlans/5
//        [ResponseType(typeof(void))]
//        public async Task<IHttpActionResult> PutOperatorRatePlan(int id, OperatorRatePlan operatorRatePlan)
//        {
//            //if (!ModelState.IsValid)
//            //{
//            //    return BadRequest(ModelState);
//            //}

//            //if (id != operatorRatePlan.OperatorRatePlanId)
//            //{
//            //    return BadRequest();
//            //}

//            db.Entry(operatorRatePlan).State = EntityState.Modified;

//            try
//            {
//                await db.SaveChangesAsync();
//            }
//            catch (DbUpdateConcurrencyException)
//            {
//                if (!OperatorRatePlanExists(id))
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

//        // POST: api/OperatorRatePlans
//        [ResponseType(typeof(OperatorRatePlan))]
//        public async Task<IHttpActionResult> PostOperatorRatePlan(OperatorRatePlan operatorRatePlan)
//        {
//            //if (!ModelState.IsValid)
//            //{
//            //    return BadRequest(ModelState);
//            //}

//            db.OperatorRatePlan.Add(operatorRatePlan);
//            await db.SaveChangesAsync();

//            return CreatedAtRoute("DefaultApi", new { id = operatorRatePlan.OperatorRatePlanId }, operatorRatePlan);
//        }

//        // DELETE: api/OperatorRatePlans/5
//        [ResponseType(typeof(OperatorRatePlan))]
//        public async Task<IHttpActionResult> DeleteOperatorRatePlan(int id)
//        {
//            OperatorRatePlan operatorRatePlan = await db.OperatorRatePlan.FindAsync(id);
//            if (operatorRatePlan == null)
//            {
//                return NotFound();
//            }

//            db.OperatorRatePlan.Remove(operatorRatePlan);
//            await db.SaveChangesAsync();

//            return Ok(operatorRatePlan);
//        }

//        protected override void Dispose(bool disposing)
//        {
//            if (disposing)
//            {
//                db.Dispose();
//            }
//            base.Dispose(disposing);
//        }

//        private bool OperatorRatePlanExists(int id)
//        {
//            return db.OperatorRatePlan.Count(e => e.OperatorRatePlanId == id) > 0;
//        }
//    }
//}