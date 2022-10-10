using IntranetAPI.Models;
using IntranetAPI.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetAPI.Mappers
{
    public static class BranchMapper
    {

        public static BranchVM MapToBranchVM(this Branch brn)
        {
            return new BranchVM
            {
                brnId = brn.brnId,
                brnCode = brn.brnCode,
                brnName = brn.brnName

            };
        }
        public static List<BranchVM> MapToBranchListVM(this List<Branch> brns)
        {
            return brns.Select(brn => new BranchVM
            {
                brnId = brn.brnId,
                brnCode = brn.brnCode,
                brnName = brn.brnName

            }).ToList();
        }

    }
}