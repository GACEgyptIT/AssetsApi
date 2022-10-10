using IntranetAPI.Models;
using IntranetAPI.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetAPI.Mappers
{
    public static class RoleMapper
    {
        public static RoleVM MapToRoleVM(this Role rol)
        {
            return new RoleVM
            {
                roleId = rol.roleId,
                roleName = rol.roleName

            };
        }
        public static List<RoleVM> MapToRoleListVM(this List<Role> rols)
        {
            return rols.Select(rol => new RoleVM
            {
                roleId = rol.roleId,
                roleName = rol.roleName,
                Privileges = rol.RolePrivileges.Where(p => p.RoleId == rol.roleId).Select(p=>p.Privilege).ToList().MapToPrivilegeListVM()

            }).ToList();
        }

    }
}