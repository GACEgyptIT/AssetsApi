using IntranetAPI.Models;
using IntranetAPI.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetAPI.Mappers
{
    public static class GenaricEmailMapper
    {
        public static GenaricEmailVM MapToGenaricEmailVM(this GenaricEmail gnrc)
        {
            return new GenaricEmailVM
            {
                genEmailId = gnrc.genEmailId,
                genEmailAddress = gnrc.genEmailAddress,
                empIds = gnrc.empIds
            };
        }
        public static List<GenaricEmailVM> MapToGenaricMailVMList(this List<GenaricEmail> gnrcs)
        {
            return gnrcs.Select(gnrc => new GenaricEmailVM
            {
                genEmailId = gnrc.genEmailId,
                genEmailAddress = gnrc.genEmailAddress,
                empIds = gnrc.empIds

            }).ToList();
        }




    }
}