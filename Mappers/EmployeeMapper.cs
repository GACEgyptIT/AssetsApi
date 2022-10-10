using IntranetAPI.Models;
using IntranetAPI.ModelViews;
using IntranetAPI.Services;
using IntranetAPI.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using IntranetAPI.Services;
//using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace IntranetAPI.Mappers
{
    public static class EmployeeMapper
    {
        public static EmployeeVM MapToEmployeeVM(this Employee emp)
        {
            DBContext db = new DBContext();
            List<string> Privileges = new List<string>();
            List<string> rolesNames = new List<string>();
            List<RoleVM> rolvms = new List<RoleVM>();
            List<EmpRole> EmpRoles = emp.EmpRoles.Where(p => p.empId == emp.empId).ToList();
            if (EmpRoles != null)
            {
                EmpRoles.ForEach(er =>
                {
                    rolesNames.Add(db.EmpRoles.Where(r => r.roleId == er.roleId).Select(p => p.Role.roleName).FirstOrDefault());
                    rolvms.Add(db.EmpRoles.Where(r => r.roleId == er.roleId).Select(p => p.Role).FirstOrDefault().MapToRoleVM());
                    Privileges.AddRange(db.RolePrivileges.Where(r => r.RoleId == er.roleId).Select(p => p.Privilege.PrivilegeName).ToList());
                });
            }
        
            return new EmployeeVM
            {
                empId = emp.empId,
                isUsertoLogin = emp.isUsertoLogin,
                empFirstName = emp.empFirstName,
                empSecondName = emp.empSecondName,
                empLastName = emp.empLastName,
                empFullName = emp.empFullName,
                usrPassword = emp.usrPassword,
                accountName = emp.accountName,
                empHRCode = emp.empHRCode,
                empGender = emp.empGender,
                empAddress = emp.empAddress,
                empExt = emp.empExt,
                empPri = emp.empPri,
                empMobile0 = emp.empMobile0,
                empMobile1 = emp.empMobile1,
                empMobile2 = emp.empMobile2,
                empIndividualEmail0 = emp.empIndividualEmail0,
                empIndividualEmail1 = emp.empIndividualEmail1,
                empIndividualEmail2 = emp.empIndividualEmail2,
                empIndividualEmail3 = emp.empIndividualEmail3,
                empCreationDate = emp.empCreationDate,
                empBirhtday = emp.empBirhtday,
                EmployeeActive = emp.EmployeeActive,
                IsExist = emp.IsExist,
                comId = emp.comId,
                dptId = emp.dptId,
                brnId = emp.brnId,
                posId = emp.posId,
                EmpImg = emp.EmpImg,
                Position = emp.PositionTitle?.posTitle,
                DepartmentName = emp.Department?.dptName,
                BranchName = emp.Branch?.brnName,
                CompanyName = emp.Company?.comName,
                directMngHRcode = emp.directMngHRcode,
                directMngName = emp.directMngName,

                emailsINDIV = MapToemailsINDIVList(emp),
                emailsGEN = emp.EmpGmails.Select(e => e.GenaricEmail).ToList().MapToemailsGENList(),
                emailsARCH = emp.EmpArchives.Select(e => e.ADArchiveAccount).ToList().MapToADArchiveAccList(),
                assetsCurrent = emp.Assets.Where(a=> a.empId == emp.empId).ToList().MapToAssignedAssetListVM(),
                Privileges = Privileges,
                rolesNames = rolesNames,
                Roles = rolvms
            };
        }
        public static List<EmployeeVM> MapToEmployeeVMList(this List<Employee> emps)
        {
            return emps.Select(emp => new EmployeeVM
            {
                empId = emp.empId,
                isUsertoLogin = emp.isUsertoLogin,
                empFirstName = emp.empFirstName,
                empSecondName = emp.empSecondName,
                empLastName = emp.empLastName,
                empFullName = emp.empFullName,
                accountName = emp.accountName,
                usrPassword = emp.usrPassword,
                empHRCode = emp.empHRCode,
                empGender = emp.empGender,
                empAddress = emp.empAddress,
                empExt = emp.empExt,
                empPri = emp.empPri,
                empMobile0 = emp.empMobile0,
                empMobile1 = emp.empMobile1,
                empMobile2 = emp.empMobile2,
                empIndividualEmail0 = emp.empIndividualEmail0,
                empIndividualEmail1 = emp.empIndividualEmail1,
                empIndividualEmail2 = emp.empIndividualEmail2,
                empIndividualEmail3 = emp.empIndividualEmail3,
                empCreationDate = emp.empCreationDate,
                empBirhtday = emp.empBirhtday,
                EmployeeActive = emp.EmployeeActive,
                IsExist = emp.IsExist,
                comId = emp.comId,
                dptId = emp.dptId,
                brnId = emp.brnId,
                posId = emp.posId,
                EmpImg = emp.EmpImg,
                Position = emp.PositionTitle?.posTitle,
                DepartmentName = emp.Department?.dptName,
                BranchName = emp.Branch?.brnName,
                CompanyName = emp.Company?.comName,
                directMngHRcode = emp.directMngHRcode,
                directMngName = emp.directMngName,
                assetsCurrent = emp.Assets.Where(a => a.empId == emp.empId).ToList().MapToAssignedAssetListVM()

            }).ToList();
        }
        public static List<EmployeeVM> MapToEmployeeVMListWithEmail(this List<Employee> emps)
        {
            //DBContext db = new DBContext();
            //List<string> Privileges = new List<string>();
            //List<EmpRole> EmpRoles = emp.EmpRoles.Where(p => p.empId == emp.empId).ToList();
            //if (EmpRoles != null)
            //{
            //    EmpRoles.ForEach(er =>
            //    {
            //        Privileges.AddRange(db.RolePrivileges.Where(r => r.RoleId == er.roleId).Select(p => p.Privilege.PrivilegeName).ToList());
            //    });
            //}
            return emps.Select(emp => new EmployeeVM
            {
                empId = emp.empId,
                isUsertoLogin = emp.isUsertoLogin,
                empFirstName = emp.empFirstName,
                empSecondName = emp.empSecondName,
                empLastName = emp.empLastName,
                empFullName = emp.empFullName,
                accountName = emp.accountName,
                usrPassword = emp.usrPassword,
                empHRCode = emp.empHRCode,
                empGender = emp.empGender,
                empAddress = emp.empAddress,
                empExt = emp.empExt,
                empPri = emp.empPri,
                empMobile0 = emp.empMobile0,
                empMobile1 = emp.empMobile1,
                empMobile2 = emp.empMobile2,
                empIndividualEmail0 = emp.empIndividualEmail0,
                empIndividualEmail1 = emp.empIndividualEmail1,
                empIndividualEmail2 = emp.empIndividualEmail2,
                empIndividualEmail3 = emp.empIndividualEmail3,
                empCreationDate = emp.empCreationDate,
                empBirhtday = emp.empBirhtday,
                EmployeeActive = emp.EmployeeActive,
                IsExist = emp.IsExist,
                comId = emp.comId,
                dptId = emp.dptId,
                brnId = emp.brnId,
                posId = emp.posId,
                EmpImg = emp.EmpImg,
                Position = emp.PositionTitle?.posTitle,
                DepartmentName = emp.Department?.dptName,
                BranchName = emp.Branch?.brnName,
                CompanyName = emp.Company?.comName,
                directMngHRcode = emp.directMngHRcode,
                directMngName = emp.directMngName,
                emailsINDIV = MapToemailsINDIVList(emp),
                emailsGEN = emp.EmpGmails.Select(e => e.GenaricEmail).ToList().MapToemailsGENList(),
                emailsARCH = emp.EmpArchives.Select(e => e.ADArchiveAccount).ToList().MapToADArchiveAccList(),
                Roles = emp.EmpRoles.Where(r => r.empId == emp.empId).Select(r => r.Role).ToList().MapToRoleListVM()
             //   Privileges = Privileges

            }).ToList();
        }
        public static List<EmployeeVM> MapUploadedToEmployeeVMList(this List<ExcelEmployeeUploadAPI> emps)
        {
            EmployeeService empSrv = new EmployeeService();

            return emps.Select(emp => new EmployeeVM
            {
                empId = emp.id,
                isUsertoLogin = emp.isUsertoLogin,
                empHRCode = emp.EmpCode,
                empFullName = emp.Name,
                Position = emp.Position,
                directMngHRcode = emp.DirectMngHrCode.ToString(),
                directMngName = empSrv.getEmpNameByHrCode(emp.DirectMngHrCode).ToString(),
                DepartmentName = emp.DepartmentName,
                BranchName = emp.BranchName,
                CompanyName = emp.CompanyName,
                empExt = emp.EXT,
                empPri = emp.PRI,
                empMobile0 = emp.Mob1,
                empMobile1 = emp.Mob2,
                empMobile2 = emp.Mob3,
                IsExist = emp.IsExist,
                duplicatHrCode = emp.duplicatHrCode,
                emailsINDIV = collectINDIVemails(emp).emailsINDIV,
                emailsGEN = collectGENemails(emp).emailsGEN,
                emailsARCH = collectARCHemails(emp).emailsARCH 

            }).ToList();
        }
        public static EmployeeVM collectINDIVemails(ExcelEmployeeUploadAPI e)
        {
            EmployeeVM emp = new EmployeeVM();
            List<emailsINDIVVM> emailsINDIVs = new List<emailsINDIVVM>();

            if (e.IndivEmail1 != null) { emailsINDIVVM emailsINDIV = new emailsINDIVVM(); emailsINDIV.emailAddress = e.IndivEmail1; emailsINDIVs.Add(emailsINDIV); }
            if (e.IndivEmail2 != null) { emailsINDIVVM emailsINDIV = new emailsINDIVVM(); emailsINDIV.emailAddress = e.IndivEmail2; emailsINDIVs.Add(emailsINDIV); }
            if (e.IndivEmail3 != null) { emailsINDIVVM emailsINDIV = new emailsINDIVVM(); emailsINDIV.emailAddress = e.IndivEmail3; emailsINDIVs.Add(emailsINDIV); }
            if (e.IndivEmail4 != null) { emailsINDIVVM emailsINDIV = new emailsINDIVVM(); emailsINDIV.emailAddress = e.IndivEmail4; emailsINDIVs.Add(emailsINDIV); }
            emp.emailsINDIV = emailsINDIVs;

            return emp;
        }
        public static EmployeeVM collectGENemails(ExcelEmployeeUploadAPI e)
        {
            EmployeeVM emp = new EmployeeVM();
            List<emailsGENVM> emailsGENs = new List<emailsGENVM>();

            if (e.GenEmail1 != null) { emailsGENVM emailsGEN = new emailsGENVM(); emailsGEN.genEmailAddress = e.GenEmail1; emailsGENs.Add(emailsGEN); }
            if (e.GenEmail2 != null) { emailsGENVM emailsGEN = new emailsGENVM(); emailsGEN.genEmailAddress = e.GenEmail2; emailsGENs.Add(emailsGEN); }
            if (e.GenEmail3 != null) { emailsGENVM emailsGEN = new emailsGENVM(); emailsGEN.genEmailAddress = e.GenEmail3; emailsGENs.Add(emailsGEN); }
            if (e.GenEmail4 != null) { emailsGENVM emailsGEN = new emailsGENVM(); emailsGEN.genEmailAddress = e.GenEmail4; emailsGENs.Add(emailsGEN); }
            if (e.GenEmail5 != null) { emailsGENVM emailsGEN = new emailsGENVM(); emailsGEN.genEmailAddress = e.GenEmail5; emailsGENs.Add(emailsGEN); }
            if (e.GenEmail6 != null) { emailsGENVM emailsGEN = new emailsGENVM(); emailsGEN.genEmailAddress = e.GenEmail6; emailsGENs.Add(emailsGEN); }
            emp.emailsGEN = emailsGENs;

            return emp;
        }
        public static EmployeeVM collectARCHemails(ExcelEmployeeUploadAPI e)
        {
            EmployeeVM emp = new EmployeeVM();
            List<ADArchiveAccountVM> emailsARCHs = new List<ADArchiveAccountVM>();

            if (e.ArchEmail1 != null) { ADArchiveAccountVM emailsARCH = new ADArchiveAccountVM(); emailsARCH.archName = e.ArchEmail1; emailsARCHs.Add(emailsARCH); }
            if (e.ArchEmail2 != null) { ADArchiveAccountVM emailsARCH = new ADArchiveAccountVM(); emailsARCH.archName = e.ArchEmail2; emailsARCHs.Add(emailsARCH); }
            if (e.ArchEmail3 != null) { ADArchiveAccountVM emailsARCH = new ADArchiveAccountVM(); emailsARCH.archName = e.ArchEmail3; emailsARCHs.Add(emailsARCH); }
            if (e.ArchEmail4 != null) { ADArchiveAccountVM emailsARCH = new ADArchiveAccountVM(); emailsARCH.archName = e.ArchEmail4; emailsARCHs.Add(emailsARCH); }
            if (e.ArchEmail5 != null) { ADArchiveAccountVM emailsARCH = new ADArchiveAccountVM(); emailsARCH.archName = e.ArchEmail5; emailsARCHs.Add(emailsARCH); }
            if (e.ArchEmail6 != null) { ADArchiveAccountVM emailsARCH = new ADArchiveAccountVM(); emailsARCH.archName = e.ArchEmail6; emailsARCHs.Add(emailsARCH); }
            emp.emailsARCH = emailsARCHs;

            return emp;
        }
        public static List<EmployeeVM> MapToEmployeeNamesOnlyVMList(this List<Employee> emps)
        {
            return emps.Select(emp => new EmployeeVM
            {
                empId = emp.empId,
                isUsertoLogin = emp.isUsertoLogin,
                empFullName = emp.empFullName,
                empHRCode = emp.empHRCode,
                DepartmentName = emp.Department?.dptName,
                BranchName = emp.Branch?.brnName

            }).ToList();
        }
        public static List<emailsINDIVVM> MapToemailsINDIVList(this Employee employee)
        {
            List<emailsINDIVVM> emailsIndiv = new List<emailsINDIVVM>();

            emailsINDIVVM email0 = new emailsINDIVVM();
            emailsINDIVVM email1 = new emailsINDIVVM();
            emailsINDIVVM email2 = new emailsINDIVVM();
            emailsINDIVVM email3 = new emailsINDIVVM();

            if (employee.empIndividualEmail0 == null || employee.empIndividualEmail0 == "") { } else { email0.emailAddress = employee.empIndividualEmail0; emailsIndiv.Add(email0); };       
            if (employee.empIndividualEmail1 == null || employee.empIndividualEmail1 == "") { } else { email1.emailAddress = employee.empIndividualEmail1; emailsIndiv.Add(email1); }; 
            if (employee.empIndividualEmail2 == null || employee.empIndividualEmail2 == "") { } else { email2.emailAddress = employee.empIndividualEmail2; emailsIndiv.Add(email2); }; 
            if (employee.empIndividualEmail3 == null || employee.empIndividualEmail3 == "") { } else { email3.emailAddress = employee.empIndividualEmail3; emailsIndiv.Add(email3); };

            return emailsIndiv;
        }
        public static List<emailsGENVM> MapToemailsGENList(this List<GenaricEmail> GenaricEmail)
        {
            return GenaricEmail.Select(g => new emailsGENVM
            {
                genEmailId = g.genEmailId,
                genEmailAddress = g.genEmailAddress

            }).ToList();
        }
        public static List<ADArchiveAccountVM> MapToADArchiveAccList(this List<ADArchiveAccount> ADArchiveAccount)
        {
            return ADArchiveAccount.Select(g => new ADArchiveAccountVM
            {
                ADArchiveAccountId = g.ADArchiveAccountId,
                archName = g.archName

            }).ToList();
        }
        public static List<EmpGmailVM> MapToEmpGmailVMList(this int empID)
        {
            List<EmpGmailVM> empgmailList = new List<EmpGmailVM>();

            DBContext db = new DBContext();
            List<int> ids = new List<int>();
            ids = db.EmpGmails.Where(e => e.empId == empID).Select(em => em.EmpGmailId).ToList();
            ids.ForEach(id =>
            {
                EmpGmailVM empgmail = new EmpGmailVM();
                empgmail.empId = empID;
                empgmail.genEmailId = id;
                empgmailList.Add(empgmail);
            });

            return empgmailList;
        }
        public static Employee MapToEmployee(this EmployeeVM emp)
        {
            List<EmpGmail> empGmail = new List<EmpGmail>();
            List<EmpArchAccount> emparchacc = new List<EmpArchAccount>();
            EmployeeService empSrv = new EmployeeService();
            List<EmpRole> rmproles = new List<EmpRole>();

            // in case Postion / DepartmntName / BranchName /CompanyName are commimg from Uploade Employees
            if (emp.Position != null) { emp.posId = empSrv.getPositionIdByName(emp.Position); }
            if (emp.DepartmentName != null) { emp.dptId = empSrv.getDepartmentIdByName(emp.DepartmentName); }
            if (emp.BranchName != null)     { emp.brnId = empSrv.getBranchtIdByName(emp.BranchName); }
            if (emp.CompanyName != null)    { emp.comId = empSrv.getCompanytIdByName(emp.CompanyName); }
            // emailsGEN
            if (emp.emailsGEN?.Count > 0) {
                empGmail = ConvertEmailGmailToEmpGmailList(emp.emailsGEN, emp.empId);
            } else if (emp.emailsGEN?.Count == 0)
            {
                empGmail = new List<EmpGmail>();
            }
            //  emailsARCH
            if (emp.emailsARCH?.Count > 0) {
                emparchacc = ConvertEmailArchivesToEmpArchiveList(emp.emailsARCH, emp.empId);
            } else if (emp.emailsARCH?.Count == 0)
            {
                emparchacc = new List<EmpArchAccount>();
            }

            if (emp.emailsINDIV?.Count == 0) {

                    emp.empIndividualEmail0 = null;
                    emp.empIndividualEmail1 = null;
                    emp.empIndividualEmail2 = null;
                    emp.empIndividualEmail3 = null;
            }

            else if(emp.emailsINDIV?.Count > 0)
            {
                     if (emp.emailsINDIV.Count == 1) { emp.empIndividualEmail0 = emp.emailsINDIV[0].emailAddress; };
                     if (emp.emailsINDIV.Count == 2) { emp.empIndividualEmail1 = emp.emailsINDIV[1].emailAddress; };
                     if (emp.emailsINDIV.Count == 3) { emp.empIndividualEmail2 = emp.emailsINDIV[2].emailAddress; };
                     if (emp.emailsINDIV.Count == 4) { emp.empIndividualEmail3 = emp.emailsINDIV[3].emailAddress; };
            }

            if (emp.Roles == null || emp.Roles.Count == 0 )
            {
                DBContext db = new DBContext();
                Role rol = db.Roles.Where(r => r.roleName == "User").FirstOrDefault();
                if (rol != null)
                {
                    EmpRole rmprole = new EmpRole();
                    rmprole.roleId = rol.roleId;
                    rmprole.empId = emp.empId;
                    rmproles.Add(rmprole);
                }

            } else if (emp.Roles.Count > 0)
            {
                emp.Roles.ForEach(r =>
                {
                    EmpRole rmprole = new EmpRole();
                    rmprole.roleId = r.roleId;
                    rmprole.empId = emp.empId;
                    rmproles.Add(rmprole);
                });
            }

            return new Employee
            {
                empId = emp.empId,
                isUsertoLogin = emp.isUsertoLogin,
                empFirstName = emp.empFirstName,
                empSecondName = emp.empSecondName,
                empLastName = emp.empLastName,
                empFullName = emp.empFullName,
                accountName = emp.accountName,
                usrPassword = emp.usrPassword,
                empHRCode = emp.empHRCode,
                empGender = emp.empGender,
                empAddress = emp.empAddress,
                empExt = emp.empExt,
                empPri = emp.empPri,
                empMobile0 = emp.empMobile0,
                empMobile1 = emp.empMobile1,
                empMobile2 = emp.empMobile2,
                empIndividualEmail0 = emp.empIndividualEmail0,
                empIndividualEmail1 = emp.empIndividualEmail1,
                empIndividualEmail2 = emp.empIndividualEmail2,
                empIndividualEmail3 = emp.empIndividualEmail3,
                empCreationDate = emp.empCreationDate,
                empBirhtday = emp.empBirhtday,
                directMngHRcode = emp.directMngHRcode,
                directMngName = emp.directMngName,
                EmployeeActive = emp.EmployeeActive,
                IsExist = emp.IsExist,
                comId = emp.comId,
                dptId = emp.dptId,
                brnId = emp.brnId,
                posId = emp.posId,
                EmpImg = emp.EmpImg,

                EmpGmails = empGmail,
                EmpArchives = emparchacc,
                EmpRoles = rmproles
            };
        }
        public static List<EmpGmail> ConvertEmailGmailToEmpGmailList(List<emailsGENVM> emailsGEN, Nullable<int> empid)
        {
            List<EmpGmail> empgmailList = new List<EmpGmail>();
            EmployeeService empSrv = new EmployeeService();

            emailsGEN.ForEach(ml =>
            {
                if(ml.genEmailAddress != "missing")
                {
                    EmpGmail empgmail = new EmpGmail();
                    empgmail.EmpGmailId = 0;
                    empgmail.empId = empid;
                    empgmail.genEmailId = empSrv.getGenEmailIdByAddress(ml.genEmailAddress);
                    empgmailList.Add(empgmail);
                }
            });
            return empgmailList;
        }
        public static List<EmpArchAccount> ConvertEmailArchivesToEmpArchiveList(List<ADArchiveAccountVM> emailsARCH, int? empid)
        {
            List<EmpArchAccount> emparchivesList = new List<EmpArchAccount>();
            EmployeeService empSrv = new EmployeeService();

            emailsARCH.ForEach(ml =>
            {
                if (ml.archName != "missing")
                {
                    EmpArchAccount emparchive = new EmpArchAccount();
                    emparchive.EmpArchAccountId = 0;
                    emparchive.empId = empid;
                    emparchive.ADArchiveAccountId = empSrv.getArchiveEmailIdByAddress(ml.archName);  //   (ml.genEmailAddress);
                    emparchivesList.Add(emparchive);
                }
            });
            return emparchivesList;
        }
    }
}