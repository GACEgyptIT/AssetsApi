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
    [RoutePrefix("api/CostCenters")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class CostCentersController : ApiController
    {
        private DBContext db = new DBContext();

        // GET: api/CostCenters
        public List<CostCenterVM> GetCostCenters()
        {
            return db.CostCenters.ToList().MapToCostCenterListVM();
        }

        [HttpGet]
        [Route("getCostCentersByEmpId/{empId}")]
        public List<CostCenterVM> getCostCentersByEmpId(int empId)
        {
            Employee emp = new Employee();
            List<Role> roles = new List<Role>();
            List<CostCenterVM> ccs = new List<CostCenterVM>();

            emp = db.Employee.Where(e => e.empId == empId).FirstOrDefault();
            roles = db.EmpRoles.Where(e => e.empId == empId).Select(r => r.Role).ToList();
            if (roles.Count > 0)
            {
                roles.ForEach(r =>
                {
                    if (r.roleName == "BranchAdmin")
                    {
                        string b = emp.Branch.brnName;
                        ccs = db.CostCenters.Where(i => i.ccName.Contains(emp.Branch.brnName)).ToList().MapToCostCenterListVM();
                    };
                    if (r.roleName == "Admin" || r.roleName == "IT")
                    {
                        ccs = db.CostCenters.ToList().MapToCostCenterListVM();
                    };
                });
            }
            return ccs;
        }

        // GET: api/CostCenters/5
        [ResponseType(typeof(CostCenter))]
        public async Task<IHttpActionResult> GetCostCenter(int id)
        {
            CostCenter costCenter = await db.CostCenters.FindAsync(id);
            if (costCenter == null)
            {
                return NotFound();
            }

            return Ok(costCenter);
        }

        // PUT: api/CostCenters/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutCostCenter(int id, CostCenter costCenter)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != costCenter.CostCenterId)
            {
                return BadRequest();
            }

            db.Entry(costCenter).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CostCenterExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/CostCenters
        [ResponseType(typeof(CostCenter))]
        public async Task<IHttpActionResult> PostCostCenter(CostCenter costCenter)
        {
            //  if (!ModelState.IsValid)
            //  {
            //      return BadRequest(ModelState);
            //    }

            db.CostCenters.Add(costCenter);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = costCenter.CostCenterId }, costCenter);
        }

        // DELETE: api/CostCenters/5
        [ResponseType(typeof(CostCenter))]
        public async Task<IHttpActionResult> DeleteCostCenter(int id)
        {
            CostCenter costCenter = await db.CostCenters.FindAsync(id);
            if (costCenter == null)
            {
                return NotFound();
            }

            db.CostCenters.Remove(costCenter);
            await db.SaveChangesAsync();

            return Ok(costCenter);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CostCenterExists(int id)
        {
            return db.CostCenters.Count(e => e.CostCenterId == id) > 0;
        }
    }
}