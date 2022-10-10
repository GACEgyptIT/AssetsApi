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
//using IntranetAPI.ViewModels;
//using EntityState = System.Data.Entity.EntityState;

//namespace IntranetAPI.Controllers
//{
//    [RoutePrefix("api/Operators")]
//    [EnableCors(origins: "*", headers: "*", methods: "*")]
//    public class OperatorsController : ApiController
//    {
//        private DBContext db = new DBContext();

//        // GET: api/Operators
//        public List<OperatorVM> GetOperator()
//        {
//            List<Operator> oprs = new List<Operator>();
//            List < OperatorVM> oprVMs = new List<OperatorVM>();
//            oprs = db.Operator.ToList();
//            if (oprs.Count > 0)
//            {
//                oprVMs = oprs.MapToOperatorListVM();
//            }
//            return oprVMs;  
//        }

//        // GET: api/Operators/5
//        [ResponseType(typeof(Operator))]
//        public async Task<IHttpActionResult> GetOperator(int id)
//        {
//            Operator @operator = await db.Operator.FindAsync(id);
//            if (@operator == null)
//            {
//                return NotFound();
//            }

//            return Ok(@operator);
//        }

//        // PUT: api/Operators/5
//        [ResponseType(typeof(void))]
//        public async Task<IHttpActionResult> PutOperator(int id, Operator @operator)
//        {
//            Operator pos = db.Operator.Where(p => p.oprId == id).FirstOrDefault();
//            pos.oprName = @operator.oprName;

//            if (!ModelState.IsValid)
//            {
//                return BadRequest(ModelState);
//            }

//            if (id != @operator.oprId)
//            {
//                return BadRequest();
//            }

//            db.Entry(pos).State = EntityState.Modified;

//            try
//            {
//                await db.SaveChangesAsync();
//            }
//            catch (DbUpdateConcurrencyException)
//            {
//                if (!OperatorExists(id))
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

//        // POST: api/Operators
//        [ResponseType(typeof(Operator))]
//        public async Task<IHttpActionResult> PostOperator(Operator @operator)
//        {
//            //if (!ModelState.IsValid)
//            //{
//            //    return BadRequest(ModelState);
//            //}

//            db.Operator.Add(@operator);
//            await db.SaveChangesAsync();

//            return CreatedAtRoute("DefaultApi", new { id = @operator.oprId }, @operator);
//        }

//        // DELETE: api/Operators/5
//        [ResponseType(typeof(Operator))]
//        public async Task<IHttpActionResult> DeleteOperator(int id)
//        {
//            Operator @operator = await db.Operator.FindAsync(id);
//            if (@operator == null)
//            {
//                return NotFound();
//            }

//            db.Operator.Remove(@operator);
//            await db.SaveChangesAsync();

//            return Ok(@operator);
//        }

//        protected override void Dispose(bool disposing)
//        {
//            if (disposing)
//            {
//                db.Dispose();
//            }
//            base.Dispose(disposing);
//        }

//        private bool OperatorExists(int id)
//        {
//            return db.Operator.Count(e => e.oprId == id) > 0;
//        }
//    }
//}