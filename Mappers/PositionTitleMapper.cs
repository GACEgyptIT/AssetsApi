using IntranetAPI.Models;
using IntranetAPI.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetAPI.Mappers
{
    public static class PositionTitleMapper
    {
        public static PositionTitleVM MapToPositionTitleVM(this PositionTitle pos)
        {
            return new PositionTitleVM
            {
                posId = pos.posId,
                posTitle = pos.posTitle,
 
            };
        }
        public static List<PositionTitleVM> MapToPositionTitleListVM(this List<PositionTitle> poss)
        {
            return poss.Select(pos => new PositionTitleVM
            {
                posId = pos.posId,
                posTitle = pos.posTitle,

            }).ToList();
        }

    }
}