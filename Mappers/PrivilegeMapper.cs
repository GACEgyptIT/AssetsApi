using IntranetAPI.Models;
using IntranetAPI.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetAPI.Mappers
{
    public static class PrivilegeMapper
    {
        public static PrivilegeVM MapToPrivilegeVM(this Privilege p)
        {
            return new PrivilegeVM
            {
                PrivilegeId = p.PrivilegeId,
                PrivilegeName = p.PrivilegeName
            };
        }
        public static List<PrivilegeVM> MapToPrivilegeListVM(this List<Privilege> ps)
        {
            return ps.Select(p => new PrivilegeVM
            {
                PrivilegeId = p.PrivilegeId,
                PrivilegeName = p.PrivilegeName

            }).ToList();
        }



    }
}