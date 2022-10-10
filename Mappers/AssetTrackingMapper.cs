using IntranetAPI.Models;
using IntranetAPI.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IntranetAPI.Mappers
{
    public static class AssetTrackingMapper
    {

        public static List<string> MapToAssetLogsVM(this List<AssetTracking> AssetTracking)
        {
            List<string> list = new List<string>();

            AssetTracking.ForEach(record =>
            {
                string From = record.From;
                string To = record.To;
                string AssetCode = record.astCode;
                string AssetDesc = record.AssetBrandName;
                string AccountName = record.byUserName;
                string datetime = "My Date/Time";  // record.DateTime;
                string recordFull = AssetCode + "-" + AssetDesc + "  Action From: " + From + "  To: " + To + "   Action by User : " + AccountName + "  Date/Time: " + datetime + ". ";

                list.Add(recordFull);
            });
            return list;
        }
        public static List<AssetTrackingVM> MapToAssetTrackingVMList(this List<AssetTracking> ats)
        {
            return ats.Select(a => new AssetTrackingVM
            {
                AssetTrackingId = a.AssetTrackingId,
                DateTime = a.DateTime,
                From = a.From,
                To = a.To,
                astCode = a.astCode,
                AssetTypeName = a.AssetBrandName,
                EmployeeName = a.byUserName
                //astId = a.astId,
                //empId = a.empId,
                //EmployeeName = a.byUserName,
                ////AssetVM = a.Asset.MapToAssetVM(),
                //usrAccountName = a.byUserName

            }).ToList();
        }

        public static AssetTracking MapToAssetTracking(this AssetTrackingVM at)
        {
            return new AssetTracking
            {
                AssetTrackingId = at.AssetTrackingId,
                DateTime = at.DateTime,
                From = at.From,
                To = at.To,
                astCode = at.astCode,
                AssetBrandName = at.AssetTypeName,
                byUserName = at.EmployeeName
                //empId = at.empId,
                //astId = at.astId

            };
        }

    }
}