using IntranetAPI.Models;
using IntranetAPI.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetAPI.Mappers
{
    public static class ItemsCategoryMapper
    {
        public static ItemCategoryVM MapToItemCategoryVM(this ItemsCategory cat)
        {
            return new ItemCategoryVM
            {
                icId = cat.icId,
                icName = cat.icName,
                HD = cat.AuthLevel1_HD,
                OM = cat.AuthLevel2_OM,
                HR = cat.AuthLevel_HR,
                IT = cat.AuthLevel3_IT,
                GM = cat.AuthLevel4_GM
            };
        }
        public static List<ItemCategoryVM> MapToItemCategoryVMList(this List<ItemsCategory> cats)
        {
            return cats.Select(cat => new ItemCategoryVM
            {
                icId = cat.icId,
                icName = cat.icName,
                HD = cat.AuthLevel1_HD,
                OM = cat.AuthLevel2_OM,
                HR = cat.AuthLevel_HR,
                IT = cat.AuthLevel3_IT,
                GM = cat.AuthLevel4_GM

            }).ToList();
        }

        public static ItemsCategory MapToItemCategory(this ItemCategoryVM cat)
        {
           //if( cat.Authorization.Count > 0)
           //{

           //}

            return new ItemsCategory
            {
                icId = cat.icId,
                icName = cat.icName,
                AuthLevel1_HD =cat.HD,
                AuthLevel_HR = cat.HR,
                AuthLevel2_OM = cat.OM,
                AuthLevel3_IT = cat.IT,
                AuthLevel4_GM = cat.GM
            };
        }



    }
}