using IntranetAPI.Models;
using IntranetAPI.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetAPI.Mappers
{
    public static class ADServiceAccountMapper
    {
        public static ADServiceAccountVM MapToADServiceAccountVM(this ADServiceAccount srvacc)
        {
            return new ADServiceAccountVM
            {
                ADServiceAccountId = srvacc.ADServiceAccountId,
                saName = srvacc.saName
            };
        }
        public static List<ADServiceAccountVM> MapToADServiceAccountVMList(this List<ADServiceAccount> srvaccs)
        {
            return srvaccs.Select(srvacc => new ADServiceAccountVM
            {
                ADServiceAccountId = srvacc.ADServiceAccountId,
                saName = srvacc.saName

            }).ToList();
        }

    }
}