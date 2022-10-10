//using IntranetAPI.Models;
//using IntranetAPI.ViewModels;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Web;

//namespace IntranetAPI.Mappers
//{
  
//    public static class UserMapper
//    {

//        public static UserVM MapToUserVM(this User usr)
//        {
//            DBContext db = new DBContext();

//            return new UserVM
//            {
//                usrId = usr.usrId,
//                EmpImg = usr.EmpImg,
//                usrAccountName = usr.usrAccountName,
//                usrFullName = usr.usrFullName,
//                usrEmail = usr.usrEmail,
//                usrGender = usr.usrGender,
//                usrProfileURL = usr.usrProfileURL,
//                roleId = usr.Role.roleId,
//                userRole = usr.Role.roleName,
//                IP_Address = "Local_IP",
//                Privileges =  db.RolePrivileges.Where(r=>r.RoleId == usr.roleId).Select(p=>p.Privilege.PrivilegeName).ToList()

//            };
//        }

//        public static User MapToUser(this UserVM usr)
//        {
//            DBContext db = new DBContext();

//            return new User
//            {
//                EmpImg = usr.EmpImg,
//                usrAccountName = usr.usrAccountName,
//                usrFullName = usr.usrFullName,
//                usrEmail = usr.usrEmail,
//                usrProfileURL = usr.usrProfileURL
//                //roleId = usr.Role.roleId,
//                //userRole = usr.Role.roleName,
//                //Privileges = db.RolePrivileges.Where(r => r.RoleId == usr.roleId).Select(p => p.Privilege.PrivilegeName).ToList()

//            };
//        }

//    }
//}