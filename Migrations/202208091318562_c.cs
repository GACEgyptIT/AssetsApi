namespace IntranetAPI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class c : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Assets", "oprId", "dbo.Operators");
            DropForeignKey("dbo.Assets", "OperatorRatePlanId", "dbo.OperatorRatePlans");
            DropForeignKey("dbo.OperatorRatePlans", "oprId", "dbo.Operators");
            DropForeignKey("dbo.Assets", "OprAccNumberId", "dbo.OprAccNumbers");
            DropForeignKey("dbo.OprAccNumbers", "oprId", "dbo.Operators");
            DropForeignKey("dbo.ItemConsumptions", "brnId", "dbo.Branches");
            DropForeignKey("dbo.ItemConsumptions", "comId", "dbo.Companies");
            DropForeignKey("dbo.ItemConsumptions", "dptId", "dbo.Departments");
            DropForeignKey("dbo.ItemConsumptions", "empId", "dbo.Employees");
            DropForeignKey("dbo.ItemConsumptions", "itmId", "dbo.Items");
            DropForeignKey("dbo.ItemPOes", "itmId", "dbo.Items");
            DropForeignKey("dbo.PurchaseOrders", "empId", "dbo.Employees");
            DropForeignKey("dbo.ItemPOes", "PurchaseOrderId", "dbo.PurchaseOrders");
            DropForeignKey("dbo.PurchaseRequests", "empId", "dbo.Employees");
            DropForeignKey("dbo.ItemPRs", "itmId", "dbo.Items");
            DropForeignKey("dbo.ItemPRs", "PurchaseRequestId", "dbo.PurchaseRequests");
            DropForeignKey("dbo.PurchaseRequests", "PurchaseOrderId", "dbo.PurchaseOrders");
            DropForeignKey("dbo.PurchaseOrders", "StatusId", "dbo.Status");
            DropForeignKey("dbo.PurchaseRequests", "StatusId", "dbo.Status");
            DropForeignKey("dbo.Receivings", "empId", "dbo.Employees");
            DropForeignKey("dbo.ItemConsumptions", "ReceivingId", "dbo.Receivings");
            DropForeignKey("dbo.ItemStores", "itmId", "dbo.Items");
            DropForeignKey("dbo.ItemStores", "ReceivingId", "dbo.Receivings");
            DropForeignKey("dbo.ItemStores", "StoreId", "dbo.Stores");
            DropForeignKey("dbo.Transfers", "empId", "dbo.Employees");
            DropForeignKey("dbo.Transfers", "itmId", "dbo.Items");
            DropForeignKey("dbo.ItemConsumptions", "TransferId", "dbo.Transfers");
            DropForeignKey("dbo.ItemStores", "TransferId", "dbo.Transfers");
            DropForeignKey("dbo.Receivings", "PurchaseOrderId", "dbo.PurchaseOrders");
            DropForeignKey("dbo.Receivings", "StoreId", "dbo.Stores");
            DropForeignKey("dbo.PurchaseOrders", "splId", "dbo.Suppliers");
            DropForeignKey("dbo.Items", "icId", "dbo.ItemsCategories");
            DropIndex("dbo.Assets", new[] { "oprId" });
            DropIndex("dbo.Assets", new[] { "OperatorRatePlanId" });
            DropIndex("dbo.Assets", new[] { "OprAccNumberId" });
            DropIndex("dbo.OperatorRatePlans", new[] { "oprId" });
            DropIndex("dbo.OprAccNumbers", new[] { "oprId" });
            DropIndex("dbo.ItemConsumptions", new[] { "itmId" });
            DropIndex("dbo.ItemConsumptions", new[] { "ReceivingId" });
            DropIndex("dbo.ItemConsumptions", new[] { "TransferId" });
            DropIndex("dbo.ItemConsumptions", new[] { "empId" });
            DropIndex("dbo.ItemConsumptions", new[] { "dptId" });
            DropIndex("dbo.ItemConsumptions", new[] { "brnId" });
            DropIndex("dbo.ItemConsumptions", new[] { "comId" });
            DropIndex("dbo.Items", new[] { "icId" });
            DropIndex("dbo.ItemPOes", new[] { "PurchaseOrderId" });
            DropIndex("dbo.ItemPOes", new[] { "itmId" });
            DropIndex("dbo.PurchaseOrders", new[] { "StatusId" });
            DropIndex("dbo.PurchaseOrders", new[] { "splId" });
            DropIndex("dbo.PurchaseOrders", new[] { "empId" });
            DropIndex("dbo.PurchaseRequests", new[] { "StatusId" });
            DropIndex("dbo.PurchaseRequests", new[] { "empId" });
            DropIndex("dbo.PurchaseRequests", new[] { "PurchaseOrderId" });
            DropIndex("dbo.ItemPRs", new[] { "PurchaseRequestId" });
            DropIndex("dbo.ItemPRs", new[] { "itmId" });
            DropIndex("dbo.Receivings", new[] { "StoreId" });
            DropIndex("dbo.Receivings", new[] { "PurchaseOrderId" });
            DropIndex("dbo.Receivings", new[] { "empId" });
            DropIndex("dbo.ItemStores", new[] { "StoreId" });
            DropIndex("dbo.ItemStores", new[] { "itmId" });
            DropIndex("dbo.ItemStores", new[] { "ReceivingId" });
            DropIndex("dbo.ItemStores", new[] { "TransferId" });
            DropIndex("dbo.Transfers", new[] { "itmId" });
            DropIndex("dbo.Transfers", new[] { "empId" });
            DropTable("dbo.Operators");
            DropTable("dbo.OperatorRatePlans");
            DropTable("dbo.OprAccNumbers");
            DropTable("dbo.ItemConsumptions");
            DropTable("dbo.Items");
            DropTable("dbo.ItemPOes");
            DropTable("dbo.PurchaseOrders");
            DropTable("dbo.PurchaseRequests");
            DropTable("dbo.ItemPRs");
            DropTable("dbo.Receivings");
            DropTable("dbo.ItemStores");
            DropTable("dbo.Stores");
            DropTable("dbo.Transfers");
            DropTable("dbo.CostCenters");
        }
        
        public override void Down()
        {
            CreateTable(
                "dbo.CostCenters",
                c => new
                    {
                        CostCenterId = c.Int(nullable: false, identity: true),
                        ccName = c.String(),
                    })
                .PrimaryKey(t => t.CostCenterId);
            
            CreateTable(
                "dbo.Transfers",
                c => new
                    {
                        TransferId = c.Int(nullable: false, identity: true),
                        itmId = c.Int(nullable: false),
                        itmQnt = c.Int(nullable: false),
                        Price = c.Single(),
                        Cost = c.Single(),
                        FromStoreName = c.String(),
                        ToStoreName = c.String(),
                        EmpName = c.String(),
                        DptName = c.String(),
                        BrnName = c.String(),
                        ComName = c.String(),
                        trnsDate = c.DateTime(nullable: false, precision: 7, storeType: "datetime2"),
                        empId = c.Int(),
                    })
                .PrimaryKey(t => t.TransferId);
            
            CreateTable(
                "dbo.Stores",
                c => new
                    {
                        StoreId = c.Int(nullable: false, identity: true),
                        strName = c.String(),
                    })
                .PrimaryKey(t => t.StoreId);
            
            CreateTable(
                "dbo.ItemStores",
                c => new
                    {
                        ItemStoreId = c.Int(nullable: false, identity: true),
                        StoreId = c.Int(),
                        itmId = c.Int(nullable: false),
                        itmQnt = c.Int(),
                        Price = c.Single(),
                        Cost = c.Single(),
                        ReceivingId = c.Int(),
                        TransferId = c.Int(),
                    })
                .PrimaryKey(t => t.ItemStoreId);
            
            CreateTable(
                "dbo.Receivings",
                c => new
                    {
                        ReceivingId = c.Int(nullable: false, identity: true),
                        ItemId = c.Int(),
                        recDate = c.DateTime(nullable: false, precision: 7, storeType: "datetime2"),
                        ReceiveTo = c.String(),
                        itmQnt = c.Int(nullable: false),
                        FromSuplierName = c.String(),
                        ToStoreName = c.String(),
                        EmployeeRecID = c.Int(),
                        DptID = c.Int(),
                        BrnID = c.Int(),
                        ComID = c.Int(),
                        EmpName = c.String(),
                        DptName = c.String(),
                        BrnName = c.String(),
                        ComName = c.String(),
                        StoreId = c.Int(),
                        PurchaseOrderId = c.Int(nullable: false),
                        empId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.ReceivingId);
            
            CreateTable(
                "dbo.ItemPRs",
                c => new
                    {
                        ItemPRId = c.Int(nullable: false, identity: true),
                        PurchaseRequestId = c.Int(nullable: false),
                        itmId = c.Int(nullable: false),
                        itmQnt = c.Int(),
                    })
                .PrimaryKey(t => t.ItemPRId);
            
            CreateTable(
                "dbo.PurchaseRequests",
                c => new
                    {
                        PurchaseRequestId = c.Int(nullable: false, identity: true),
                        StatusId = c.Int(),
                        prRemarks = c.String(),
                        prDate = c.DateTime(nullable: false, precision: 7, storeType: "datetime2"),
                        AuthLevel1_HD = c.Boolean(nullable: false),
                        HDApproved = c.Boolean(nullable: false),
                        AuthLevel2_OM = c.Boolean(nullable: false),
                        OMApproved = c.Boolean(nullable: false),
                        AuthLevel_HR = c.Boolean(nullable: false),
                        HRApproved = c.Boolean(nullable: false),
                        AuthLevel3_IT = c.Boolean(nullable: false),
                        ITApproved = c.Boolean(nullable: false),
                        AuthLevel4_GM = c.Boolean(nullable: false),
                        GMApproved = c.Boolean(nullable: false),
                        empId = c.Int(),
                        PurchaseOrderId = c.Int(),
                    })
                .PrimaryKey(t => t.PurchaseRequestId);
            
            CreateTable(
                "dbo.PurchaseOrders",
                c => new
                    {
                        PurchaseOrderId = c.Int(nullable: false, identity: true),
                        poRemarks = c.String(),
                        StatusId = c.Int(nullable: false),
                        splId = c.Int(nullable: false),
                        poDate = c.DateTime(nullable: false, precision: 7, storeType: "datetime2"),
                        AuthLevel1_HD = c.Boolean(nullable: false),
                        HDApproved = c.Boolean(nullable: false),
                        AuthLevel2_OM = c.Boolean(nullable: false),
                        OMApproved = c.Boolean(nullable: false),
                        AuthLevel_HR = c.Boolean(nullable: false),
                        HRApproved = c.Boolean(nullable: false),
                        AuthLevel3_IT = c.Boolean(nullable: false),
                        ITApproved = c.Boolean(nullable: false),
                        AuthLevel4_GM = c.Boolean(nullable: false),
                        GMApproved = c.Boolean(nullable: false),
                        empId = c.Int(),
                    })
                .PrimaryKey(t => t.PurchaseOrderId);
            
            CreateTable(
                "dbo.ItemPOes",
                c => new
                    {
                        ItemPOId = c.Int(nullable: false, identity: true),
                        PurchaseOrderId = c.Int(nullable: false),
                        itmId = c.Int(nullable: false),
                        itmQnt = c.Int(),
                        itmPendingQnt = c.Int(),
                        itmPrice = c.Single(),
                    })
                .PrimaryKey(t => t.ItemPOId);
            
            CreateTable(
                "dbo.Items",
                c => new
                    {
                        itmId = c.Int(nullable: false, identity: true),
                        itmName = c.String(),
                        itmPrice = c.Int(nullable: false),
                        icId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.itmId);
            
            CreateTable(
                "dbo.ItemConsumptions",
                c => new
                    {
                        ItemConsumptionId = c.Int(nullable: false, identity: true),
                        consDate = c.DateTime(nullable: false, precision: 7, storeType: "datetime2"),
                        itmQnt = c.Int(),
                        Price = c.Single(),
                        Cost = c.Single(),
                        itmId = c.Int(),
                        ReceivingId = c.Int(),
                        TransferId = c.Int(),
                        empId = c.Int(),
                        dptId = c.Int(),
                        brnId = c.Int(),
                        comId = c.Int(),
                    })
                .PrimaryKey(t => t.ItemConsumptionId);
            
            CreateTable(
                "dbo.OprAccNumbers",
                c => new
                    {
                        OprAccNumberId = c.Int(nullable: false, identity: true),
                        OprAccNumberName = c.String(),
                        oprId = c.Int(),
                    })
                .PrimaryKey(t => t.OprAccNumberId);
            
            CreateTable(
                "dbo.OperatorRatePlans",
                c => new
                    {
                        OperatorRatePlanId = c.Int(nullable: false, identity: true),
                        OperatorRatePlanName = c.String(),
                        MonthlyCharges = c.Single(nullable: false),
                        oprId = c.Int(),
                    })
                .PrimaryKey(t => t.OperatorRatePlanId);
            
            CreateTable(
                "dbo.Operators",
                c => new
                    {
                        oprId = c.Int(nullable: false, identity: true),
                        oprName = c.String(),
                    })
                .PrimaryKey(t => t.oprId);
            
            CreateIndex("dbo.Transfers", "empId");
            CreateIndex("dbo.Transfers", "itmId");
            CreateIndex("dbo.ItemStores", "TransferId");
            CreateIndex("dbo.ItemStores", "ReceivingId");
            CreateIndex("dbo.ItemStores", "itmId");
            CreateIndex("dbo.ItemStores", "StoreId");
            CreateIndex("dbo.Receivings", "empId");
            CreateIndex("dbo.Receivings", "PurchaseOrderId");
            CreateIndex("dbo.Receivings", "StoreId");
            CreateIndex("dbo.ItemPRs", "itmId");
            CreateIndex("dbo.ItemPRs", "PurchaseRequestId");
            CreateIndex("dbo.PurchaseRequests", "PurchaseOrderId");
            CreateIndex("dbo.PurchaseRequests", "empId");
            CreateIndex("dbo.PurchaseRequests", "StatusId");
            CreateIndex("dbo.PurchaseOrders", "empId");
            CreateIndex("dbo.PurchaseOrders", "splId");
            CreateIndex("dbo.PurchaseOrders", "StatusId");
            CreateIndex("dbo.ItemPOes", "itmId");
            CreateIndex("dbo.ItemPOes", "PurchaseOrderId");
            CreateIndex("dbo.Items", "icId");
            CreateIndex("dbo.ItemConsumptions", "comId");
            CreateIndex("dbo.ItemConsumptions", "brnId");
            CreateIndex("dbo.ItemConsumptions", "dptId");
            CreateIndex("dbo.ItemConsumptions", "empId");
            CreateIndex("dbo.ItemConsumptions", "TransferId");
            CreateIndex("dbo.ItemConsumptions", "ReceivingId");
            CreateIndex("dbo.ItemConsumptions", "itmId");
            CreateIndex("dbo.OprAccNumbers", "oprId");
            CreateIndex("dbo.OperatorRatePlans", "oprId");
            CreateIndex("dbo.Assets", "OprAccNumberId");
            CreateIndex("dbo.Assets", "OperatorRatePlanId");
            CreateIndex("dbo.Assets", "oprId");
            AddForeignKey("dbo.Items", "icId", "dbo.ItemsCategories", "icId", cascadeDelete: true);
            AddForeignKey("dbo.PurchaseOrders", "splId", "dbo.Suppliers", "splId", cascadeDelete: true);
            AddForeignKey("dbo.Receivings", "StoreId", "dbo.Stores", "StoreId");
            AddForeignKey("dbo.Receivings", "PurchaseOrderId", "dbo.PurchaseOrders", "PurchaseOrderId", cascadeDelete: true);
            AddForeignKey("dbo.ItemStores", "TransferId", "dbo.Transfers", "TransferId");
            AddForeignKey("dbo.ItemConsumptions", "TransferId", "dbo.Transfers", "TransferId");
            AddForeignKey("dbo.Transfers", "itmId", "dbo.Items", "itmId", cascadeDelete: true);
            AddForeignKey("dbo.Transfers", "empId", "dbo.Employees", "empId");
            AddForeignKey("dbo.ItemStores", "StoreId", "dbo.Stores", "StoreId");
            AddForeignKey("dbo.ItemStores", "ReceivingId", "dbo.Receivings", "ReceivingId");
            AddForeignKey("dbo.ItemStores", "itmId", "dbo.Items", "itmId", cascadeDelete: true);
            AddForeignKey("dbo.ItemConsumptions", "ReceivingId", "dbo.Receivings", "ReceivingId");
            AddForeignKey("dbo.Receivings", "empId", "dbo.Employees", "empId", cascadeDelete: true);
            AddForeignKey("dbo.PurchaseRequests", "StatusId", "dbo.Status", "StatusId");
            AddForeignKey("dbo.PurchaseOrders", "StatusId", "dbo.Status", "StatusId", cascadeDelete: true);
            AddForeignKey("dbo.PurchaseRequests", "PurchaseOrderId", "dbo.PurchaseOrders", "PurchaseOrderId");
            AddForeignKey("dbo.ItemPRs", "PurchaseRequestId", "dbo.PurchaseRequests", "PurchaseRequestId", cascadeDelete: true);
            AddForeignKey("dbo.ItemPRs", "itmId", "dbo.Items", "itmId", cascadeDelete: true);
            AddForeignKey("dbo.PurchaseRequests", "empId", "dbo.Employees", "empId");
            AddForeignKey("dbo.ItemPOes", "PurchaseOrderId", "dbo.PurchaseOrders", "PurchaseOrderId", cascadeDelete: true);
            AddForeignKey("dbo.PurchaseOrders", "empId", "dbo.Employees", "empId");
            AddForeignKey("dbo.ItemPOes", "itmId", "dbo.Items", "itmId", cascadeDelete: true);
            AddForeignKey("dbo.ItemConsumptions", "itmId", "dbo.Items", "itmId");
            AddForeignKey("dbo.ItemConsumptions", "empId", "dbo.Employees", "empId");
            AddForeignKey("dbo.ItemConsumptions", "dptId", "dbo.Departments", "dptId");
            AddForeignKey("dbo.ItemConsumptions", "comId", "dbo.Companies", "comId");
            AddForeignKey("dbo.ItemConsumptions", "brnId", "dbo.Branches", "brnId");
            AddForeignKey("dbo.OprAccNumbers", "oprId", "dbo.Operators", "oprId");
            AddForeignKey("dbo.Assets", "OprAccNumberId", "dbo.OprAccNumbers", "OprAccNumberId");
            AddForeignKey("dbo.OperatorRatePlans", "oprId", "dbo.Operators", "oprId");
            AddForeignKey("dbo.Assets", "OperatorRatePlanId", "dbo.OperatorRatePlans", "OperatorRatePlanId");
            AddForeignKey("dbo.Assets", "oprId", "dbo.Operators", "oprId");
        }
    }
}
