using IntranetAPI.Models;
using IntranetAPI.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetAPI.Mappers
{
    public static class ADArchiveAccountMapper
    {
        public static ADArchiveAccountVM MapToADArchiveAccountVM(this ADArchiveAccount arcmail)
        {
            return new ADArchiveAccountVM
            {
                ADArchiveAccountId = arcmail.ADArchiveAccountId,
                archName = arcmail.archName
            };
        }
        public static List<ADArchiveAccountVM> MapToADArchiveAccountVMList(this List<ADArchiveAccount> arcmails)
        {
            return arcmails.Select(arcmail => new ADArchiveAccountVM
            {
                ADArchiveAccountId = arcmail.ADArchiveAccountId,
                archName = arcmail.archName

            }).ToList();
        }
    
    }
}