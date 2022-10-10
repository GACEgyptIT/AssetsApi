namespace IntranetAPI.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Core.Metadata.Edm;
    using System.Linq;

    public class DBContext : DbContext
    {
        // Your context has been configured to use a 'DBContext' connection string from your application's 
        // configuration file (App.config or Web.config). By default, this connection string targets the 
        // 'IntranetAPI.Models.DBContext' database on your LocalDb instance. 
        // 
        // If you wish to target a different database and/or database provider, modify the 'DBContext' 
        // connection string in the application configuration file.
        public DBContext()
            : base("name=DBContext")
        {
        }

        // Add a DbSet for each entity type that you want to include in your model. For more information 
        // on configuring and using a Code First model, see http://go.microsoft.com/fwlink/?LinkId=390109.

        //public virtual DbSet<OperatorRatePlan> OperatorRatePlan { get; set; }
        //public virtual DbSet<OprAccNumber> OprAccNumber { get; set; }
        //public virtual DbSet<Operator> Operator { get; set; }
     //   public virtual DbSet<AssetInvoice> AssetInvoice { get; set; }
        public virtual DbSet<ADArchiveAccount> ADArchiveAccount { get; set; }
        public virtual DbSet<ADServiceAccount> ADServiceAccount { get; set; }
        public virtual DbSet<EmpArchAccount> EmpArchAccount { get; set; }
        public virtual DbSet<ExcelEmployeeUploadAPI> ExcelEmployeeUploadAPI { get; set; }
        public virtual DbSet<EmpGmail> EmpGmails { get; set; }
        public virtual DbSet<RolePrivilege> RolePrivileges { get; set; }
        public virtual DbSet<Supplier> Supplier { get; set; }
        public virtual DbSet<Employee> Employee { get; set; }
        public virtual DbSet<ADImportedAccounts> ADImportedAccounts { get; set; }
        public virtual DbSet<AssetType> AssetType { get; set; }
        public virtual DbSet<Role> Roles { get; set; }
        public virtual DbSet<Asset> Asset { get; set; }

        public virtual DbSet<AssetBrand> AssetBrand { get; set; }
        public virtual DbSet<AssetCategory> AssetCategory { get; set; }
        public virtual DbSet<AssetTracking> AssetTracking { get; set; }

        public virtual DbSet<ItemsCategory> ItemsCategory { get; set; }
//        public virtual DbSet<Item> Item { get; set; }
        public virtual DbSet<Company> Company { get; set; }
        public virtual DbSet<Branch> Branch { get; set; }
        public virtual DbSet<Department> Department { get; set; }
        public virtual DbSet<GenaricEmail> GenaricEmails { get; set; }
        public virtual DbSet<Invoice> Invoice { get; set; }

        public virtual DbSet<ExcelUploadAPI> ExcelUploadAPI { get; set; }
        public virtual DbSet<ExcelAssetsUploadAPI> ExcelAssetsUploadAPI { get; set; }
        public virtual DbSet<PositionTitle> PositionTitles { get; set; }

        public virtual DbSet<Domain> Domains { get; set; }
        public virtual DbSet<Privilege> Privileges { get; set; }

        public System.Data.Entity.DbSet<IntranetAPI.Models.CostCenter> CostCenters { get; set; }

        public System.Data.Entity.DbSet<IntranetAPI.Models.UserActivitiesLog> UserActivitiesLogs { get; set; }


        //public virtual DbSet<PurchaseRequest> PurchaseRequests { get; set; }
        //public virtual DbSet<PurchaseOrder> PurchaseOrders { get; set; }
        //public virtual DbSet<Store> Stores { get; set; }
        //public virtual DbSet<Receiving> Receivings { get; set; }

        //public virtual DbSet<ItemPO> ItemPOs { get; set; }
        //public virtual DbSet<ItemPR> ItemPRs { get; set; }
        //public virtual DbSet<ItemStore> ItemStores { get; set; }
        //public virtual DbSet<ItemConsumption> ItemConsumptions { get; set; }
        public virtual DbSet<EmpRole> EmpRoles { get; set; }

        public virtual DbSet<Status> Statuss { get; set; }

  //      public virtual DbSet<Transfer> Transfers { get; set; }

        public virtual DbSet<InvoicePending> InvoicePendings { get; set; }

        public virtual DbSet<Notification> Notifications { get; set; }

    }

}