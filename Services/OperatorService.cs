//using IntranetAPI.Models;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Web;

//namespace IntranetAPI.Services
//{
//    public class OperatorService
//    {
//        DBContext db = new DBContext();
//        public string getOperatorNameById(int? id)
//        {
//            Operator opr = new Operator();

//            Operator op = db.Operator.Where(e => e.oprId == id).FirstOrDefault();
//            string name = "No Entry";
//            if (op != null)
//            {
//                name = op.oprName;
//            }
//            return name;
//        }
//        public string getOperatorAccountNumNameById(int? id)
//        {
//            OprAccNumber opr = new OprAccNumber();

//            OprAccNumber op = db.OprAccNumber.Where(e => e.OprAccNumberId == id).FirstOrDefault();
//            string name = "No Entry";
//            if (op != null)
//            {
//                name = op.OprAccNumberName;
//            }
//            return name;
//        }
//        public string getOperatorRatePlanNameById(int? id)
//        {
//            OperatorRatePlan opr = new OperatorRatePlan();

//            OperatorRatePlan op = db.OperatorRatePlan.Where(e => e.OperatorRatePlanId == id).FirstOrDefault();
//            string name = "No Entry";
//            if (op != null)
//            {
//                name = op.OperatorRatePlanName;
//            }
//            return name;
//        }
//        public List<OprAccNumber> getOperatorAccountsByOperatorId(int? id)
//        {
//            return db.OprAccNumber.Where(e => e.oprId == id).ToList();
//        }
//        public List<OperatorRatePlan> getPlansByOperatorId(int? id)
//        {
//            return db.OperatorRatePlan.Where(e => e.oprId == id).ToList();
//        }

//    }
//}