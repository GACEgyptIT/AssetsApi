using IntranetAPI.Models;
using IntranetAPI.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetAPI.Mappers
{
    public static class DomainMapper
    {
        public static DomainVM MapToDomainVM(this Domain dom)
        {
            return new DomainVM
            {
                domId = dom.domId,
                domName = dom.domName
            };
        }
        public static List<DomainVM> MapToDomainListVM(this List<Domain> doms)
        {
            return doms.Select(dom => new DomainVM
            {
                domId = dom.domId,
                domName = dom.domName,

            }).ToList();
        }

    }
}