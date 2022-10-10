using IntranetAPI.Models;
using IntranetAPI.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetAPI.Mappers
{
    public static class ItemCategoryMapper
    {



        public static ItemCategoryVM MapToItemCategoryVM(this ItemsCategory ic)
        {
            return new ItemCategoryVM
            {
                icId = ic.icId,
                icName = ic.icName,
                HD = ic.AuthLevel1_HD,
                OM = ic.AuthLevel2_OM,
                HR = ic.AuthLevel_HR,
                IT = ic.AuthLevel3_IT,
                GM = ic.AuthLevel4_GM
            };
        }
        public static List<ItemCategoryVM> MapToItemCategoryListVM(this List<ItemsCategory> ics)
        {
            return ics.Select(ic => new ItemCategoryVM
            {
                icId = ic.icId,
                icName = ic.icName,
                HD = ic.AuthLevel1_HD,
                OM = ic.AuthLevel2_OM,
                HR = ic.AuthLevel_HR,
                IT = ic.AuthLevel3_IT,
                GM = ic.AuthLevel4_GM

            }).ToList();
        }
    }
}