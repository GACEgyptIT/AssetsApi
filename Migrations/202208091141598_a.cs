namespace IntranetAPI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class a : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.ADArchiveAccounts",
                c => new
                    {
                        ADArchiveAccountId = c.Int(nullable: false, identity: true),
                        archName = c.String(),
                    })
                .PrimaryKey(t => t.ADArchiveAccountId);
            
            CreateTable(
                "dbo.EmpArchAccounts",
                c => new
                    {
                        EmpArchAccountId = c.Int(nullable: false, identity: true),
                        empId = c.Int(),
                        ADArchiveAccountId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.EmpArchAccountId)
                .ForeignKey("dbo.ADArchiveAccounts", t => t.ADArchiveAccountId, cascadeDelete: true)
                .ForeignKey("dbo.Employees", t => t.empId)
                .Index(t => t.empId)
                .Index(t => t.ADArchiveAccountId);
            
            CreateTable(
                "dbo.Employees",
                c => new
                    {
                        empId = c.Int(nullable: false, identity: true),
                        isUsertoLogin = c.Boolean(nullable: false),
                        empHRCode = c.String(),
                        empFirstName = c.String(),
                        empSecondName = c.String(),
                        empLastName = c.String(),
                        empFullName = c.String(),
                        empExt = c.String(),
                        empPri = c.String(),
                        empMobile0 = c.String(),
                        empMobile1 = c.String(),
                        empMobile2 = c.String(),
                        accountName = c.String(),
                        usrPassword = c.String(),
                        empGender = c.String(),
                        companyName = c.String(),
                        branchName = c.String(),
                        departmentName = c.String(),
                        titleName = c.String(),
                        directMngHRcode = c.String(),
                        directMngName = c.String(),
                        empAddress = c.String(),
                        empCreationDate = c.DateTime(precision: 7, storeType: "datetime2"),
                        empBirhtday = c.DateTime(precision: 7, storeType: "datetime2"),
                        empImageProfileUrl = c.String(),
                        empIndividualEmail0 = c.String(),
                        empIndividualEmail1 = c.String(),
                        empIndividualEmail2 = c.String(),
                        empIndividualEmail3 = c.String(),
                        EmployeeActive = c.Boolean(),
                        IsExist = c.Boolean(),
                        EmpImg = c.String(),
                        comId = c.Int(),
                        dptId = c.Int(),
                        brnId = c.Int(),
                        posId = c.Int(),
                    })
                .PrimaryKey(t => t.empId)
                .ForeignKey("dbo.Branches", t => t.brnId)
                .ForeignKey("dbo.Companies", t => t.comId)
                .ForeignKey("dbo.Departments", t => t.dptId)
                .ForeignKey("dbo.PositionTitles", t => t.posId)
                .Index(t => t.comId)
                .Index(t => t.dptId)
                .Index(t => t.brnId)
                .Index(t => t.posId);
            
            CreateTable(
                "dbo.Assets",
                c => new
                    {
                        astId = c.Int(nullable: false, identity: true),
                        astDescription = c.String(),
                        AssetCategoryName = c.String(),
                        AssetTypeName = c.String(),
                        AssetBrandName = c.String(),
                        astBrandCode = c.String(),
                        astCode = c.String(),
                        astSerialNumber = c.String(),
                        astPartNumber = c.String(),
                        astDialNumber = c.String(),
                        astCircuitNumber = c.String(),
                        astPurchaseDate = c.DateTime(precision: 7, storeType: "datetime2"),
                        Charging = c.String(),
                        AccNumber = c.String(),
                        IsScrap = c.Boolean(nullable: false),
                        empId = c.Int(),
                        oprId = c.Int(),
                        OperatorRatePlanId = c.Int(),
                        OprAccNumberId = c.Int(),
                        AssetBrandId = c.Int(),
                    })
                .PrimaryKey(t => t.astId)
                .ForeignKey("dbo.AssetBrands", t => t.AssetBrandId)
                .ForeignKey("dbo.Employees", t => t.empId)
                .ForeignKey("dbo.Operators", t => t.oprId)
                .ForeignKey("dbo.OperatorRatePlans", t => t.OperatorRatePlanId)
                .ForeignKey("dbo.OprAccNumbers", t => t.OprAccNumberId)
                .Index(t => t.empId)
                .Index(t => t.oprId)
                .Index(t => t.OperatorRatePlanId)
                .Index(t => t.OprAccNumberId)
                .Index(t => t.AssetBrandId);
            
            CreateTable(
                "dbo.AssetBrands",
                c => new
                    {
                        AssetBrandId = c.Int(nullable: false, identity: true),
                        astBrandName = c.String(),
                        astBrandCode = c.String(),
                        AssetTypeId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.AssetBrandId)
                .ForeignKey("dbo.AssetTypes", t => t.AssetTypeId, cascadeDelete: true)
                .Index(t => t.AssetTypeId);
            
            CreateTable(
                "dbo.AssetTypes",
                c => new
                    {
                        AssetTypeId = c.Int(nullable: false, identity: true),
                        astTypeName = c.String(),
                        astTypeCode = c.String(),
                        AssetCategoryId = c.Int(),
                    })
                .PrimaryKey(t => t.AssetTypeId)
                .ForeignKey("dbo.AssetCategories", t => t.AssetCategoryId)
                .Index(t => t.AssetCategoryId);
            
            CreateTable(
                "dbo.AssetCategories",
                c => new
                    {
                        AssetCategoryId = c.Int(nullable: false, identity: true),
                        astCategoryName = c.String(),
                        astCategoryCode = c.String(),
                    })
                .PrimaryKey(t => t.AssetCategoryId);
            
            CreateTable(
                "dbo.Operators",
                c => new
                    {
                        oprId = c.Int(nullable: false, identity: true),
                        oprName = c.String(),
                    })
                .PrimaryKey(t => t.oprId);
            
            CreateTable(
                "dbo.OperatorRatePlans",
                c => new
                    {
                        OperatorRatePlanId = c.Int(nullable: false, identity: true),
                        OperatorRatePlanName = c.String(),
                        MonthlyCharges = c.Single(nullable: false),
                        oprId = c.Int(),
                    })
                .PrimaryKey(t => t.OperatorRatePlanId)
                .ForeignKey("dbo.Operators", t => t.oprId)
                .Index(t => t.oprId);
            
            CreateTable(
                "dbo.OprAccNumbers",
                c => new
                    {
                        OprAccNumberId = c.Int(nullable: false, identity: true),
                        OprAccNumberName = c.String(),
                        oprId = c.Int(),
                    })
                .PrimaryKey(t => t.OprAccNumberId)
                .ForeignKey("dbo.Operators", t => t.oprId)
                .Index(t => t.oprId);
            
            CreateTable(
                "dbo.Branches",
                c => new
                    {
                        brnId = c.Int(nullable: false, identity: true),
                        brnCode = c.String(),
                        brnName = c.String(),
                    })
                .PrimaryKey(t => t.brnId);
            
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
                .PrimaryKey(t => t.ItemConsumptionId)
                .ForeignKey("dbo.Branches", t => t.brnId)
                .ForeignKey("dbo.Companies", t => t.comId)
                .ForeignKey("dbo.Departments", t => t.dptId)
                .ForeignKey("dbo.Employees", t => t.empId)
                .ForeignKey("dbo.Items", t => t.itmId)
                .ForeignKey("dbo.Receivings", t => t.ReceivingId)
                .ForeignKey("dbo.Transfers", t => t.TransferId)
                .Index(t => t.itmId)
                .Index(t => t.ReceivingId)
                .Index(t => t.TransferId)
                .Index(t => t.empId)
                .Index(t => t.dptId)
                .Index(t => t.brnId)
                .Index(t => t.comId);
            
            CreateTable(
                "dbo.Companies",
                c => new
                    {
                        comId = c.Int(nullable: false, identity: true),
                        comCode = c.String(),
                        comName = c.String(),
                    })
                .PrimaryKey(t => t.comId);
            
            CreateTable(
                "dbo.Departments",
                c => new
                    {
                        dptId = c.Int(nullable: false, identity: true),
                        dptName = c.String(),
                        dptCode = c.String(),
                    })
                .PrimaryKey(t => t.dptId);
            
            CreateTable(
                "dbo.Items",
                c => new
                    {
                        itmId = c.Int(nullable: false, identity: true),
                        itmName = c.String(),
                        itmPrice = c.Int(nullable: false),
                        icId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.itmId)
                .ForeignKey("dbo.ItemsCategories", t => t.icId, cascadeDelete: true)
                .Index(t => t.icId);
            
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
                .PrimaryKey(t => t.ItemPOId)
                .ForeignKey("dbo.Items", t => t.itmId, cascadeDelete: true)
                .ForeignKey("dbo.PurchaseOrders", t => t.PurchaseOrderId, cascadeDelete: true)
                .Index(t => t.PurchaseOrderId)
                .Index(t => t.itmId);
            
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
                .PrimaryKey(t => t.PurchaseOrderId)
                .ForeignKey("dbo.Employees", t => t.empId)
                .ForeignKey("dbo.Status", t => t.StatusId, cascadeDelete: true)
                .ForeignKey("dbo.Suppliers", t => t.splId, cascadeDelete: true)
                .Index(t => t.StatusId)
                .Index(t => t.splId)
                .Index(t => t.empId);
            
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
                .PrimaryKey(t => t.PurchaseRequestId)
                .ForeignKey("dbo.Employees", t => t.empId)
                .ForeignKey("dbo.PurchaseOrders", t => t.PurchaseOrderId)
                .ForeignKey("dbo.Status", t => t.StatusId)
                .Index(t => t.StatusId)
                .Index(t => t.empId)
                .Index(t => t.PurchaseOrderId);
            
            CreateTable(
                "dbo.ItemPRs",
                c => new
                    {
                        ItemPRId = c.Int(nullable: false, identity: true),
                        PurchaseRequestId = c.Int(nullable: false),
                        itmId = c.Int(nullable: false),
                        itmQnt = c.Int(),
                    })
                .PrimaryKey(t => t.ItemPRId)
                .ForeignKey("dbo.Items", t => t.itmId, cascadeDelete: true)
                .ForeignKey("dbo.PurchaseRequests", t => t.PurchaseRequestId, cascadeDelete: true)
                .Index(t => t.PurchaseRequestId)
                .Index(t => t.itmId);
            
            CreateTable(
                "dbo.Status",
                c => new
                    {
                        StatusId = c.Int(nullable: false, identity: true),
                        stsRefernce = c.String(),
                        stsName = c.String(),
                    })
                .PrimaryKey(t => t.StatusId);
            
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
                .PrimaryKey(t => t.ReceivingId)
                .ForeignKey("dbo.Employees", t => t.empId, cascadeDelete: true)
                .ForeignKey("dbo.PurchaseOrders", t => t.PurchaseOrderId, cascadeDelete: true)
                .ForeignKey("dbo.Stores", t => t.StoreId)
                .Index(t => t.StoreId)
                .Index(t => t.PurchaseOrderId)
                .Index(t => t.empId);
            
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
                .PrimaryKey(t => t.ItemStoreId)
                .ForeignKey("dbo.Items", t => t.itmId, cascadeDelete: true)
                .ForeignKey("dbo.Receivings", t => t.ReceivingId)
                .ForeignKey("dbo.Stores", t => t.StoreId)
                .ForeignKey("dbo.Transfers", t => t.TransferId)
                .Index(t => t.StoreId)
                .Index(t => t.itmId)
                .Index(t => t.ReceivingId)
                .Index(t => t.TransferId);
            
            CreateTable(
                "dbo.Stores",
                c => new
                    {
                        StoreId = c.Int(nullable: false, identity: true),
                        strName = c.String(),
                    })
                .PrimaryKey(t => t.StoreId);
            
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
                .PrimaryKey(t => t.TransferId)
                .ForeignKey("dbo.Employees", t => t.empId)
                .ForeignKey("dbo.Items", t => t.itmId, cascadeDelete: true)
                .Index(t => t.itmId)
                .Index(t => t.empId);
            
            CreateTable(
                "dbo.Suppliers",
                c => new
                    {
                        splId = c.Int(nullable: false, identity: true),
                        splName = c.String(),
                        spOutstanding = c.Int(),
                    })
                .PrimaryKey(t => t.splId);
            
            CreateTable(
                "dbo.ItemsCategories",
                c => new
                    {
                        icId = c.Int(nullable: false, identity: true),
                        icName = c.String(),
                        AuthLevel1_HD = c.Boolean(nullable: false),
                        AuthLevel2_OM = c.Boolean(nullable: false),
                        AuthLevel_HR = c.Boolean(nullable: false),
                        AuthLevel3_IT = c.Boolean(nullable: false),
                        AuthLevel4_GM = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.icId);
            
            CreateTable(
                "dbo.EmpGmails",
                c => new
                    {
                        EmpGmailId = c.Int(nullable: false, identity: true),
                        empId = c.Int(),
                        genEmailId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.EmpGmailId)
                .ForeignKey("dbo.Employees", t => t.empId)
                .ForeignKey("dbo.GenaricEmails", t => t.genEmailId, cascadeDelete: true)
                .Index(t => t.empId)
                .Index(t => t.genEmailId);
            
            CreateTable(
                "dbo.GenaricEmails",
                c => new
                    {
                        genEmailId = c.Int(nullable: false, identity: true),
                        genEmailAddress = c.String(),
                    })
                .PrimaryKey(t => t.genEmailId);
            
            CreateTable(
                "dbo.EmpRoles",
                c => new
                    {
                        EmpRoleId = c.Int(nullable: false, identity: true),
                        roleId = c.Int(nullable: false),
                        empId = c.Int(),
                    })
                .PrimaryKey(t => t.EmpRoleId)
                .ForeignKey("dbo.Employees", t => t.empId)
                .ForeignKey("dbo.Roles", t => t.roleId, cascadeDelete: true)
                .Index(t => t.roleId)
                .Index(t => t.empId);
            
            CreateTable(
                "dbo.Roles",
                c => new
                    {
                        roleId = c.Int(nullable: false, identity: true),
                        roleName = c.String(),
                    })
                .PrimaryKey(t => t.roleId);
            
            CreateTable(
                "dbo.RolePrivileges",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        RoleId = c.Int(nullable: false),
                        PrivilegeId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Privileges", t => t.PrivilegeId, cascadeDelete: true)
                .ForeignKey("dbo.Roles", t => t.RoleId, cascadeDelete: true)
                .Index(t => t.RoleId)
                .Index(t => t.PrivilegeId);
            
            CreateTable(
                "dbo.Privileges",
                c => new
                    {
                        PrivilegeId = c.Int(nullable: false, identity: true),
                        PrivilegeName = c.String(),
                    })
                .PrimaryKey(t => t.PrivilegeId);
            
            CreateTable(
                "dbo.PositionTitles",
                c => new
                    {
                        posId = c.Int(nullable: false, identity: true),
                        posTitleCode = c.String(),
                        posTitle = c.String(),
                    })
                .PrimaryKey(t => t.posId);
            
            CreateTable(
                "dbo.ADImportedAccounts",
                c => new
                    {
                        ADImportedAccountsId = c.Int(nullable: false, identity: true),
                        hrCode = c.String(),
                        accountName = c.String(),
                        firstName = c.String(),
                        lastName = c.String(),
                        displayName = c.String(),
                        email = c.String(),
                        serviceAccount = c.Boolean(nullable: false),
                        archiveAccount = c.Boolean(nullable: false),
                        accountType = c.String(),
                        enabled = c.Boolean(nullable: false),
                        IsExist = c.Boolean(),
                    })
                .PrimaryKey(t => t.ADImportedAccountsId);
            
            CreateTable(
                "dbo.ADServiceAccounts",
                c => new
                    {
                        ADServiceAccountId = c.Int(nullable: false, identity: true),
                        saName = c.String(),
                    })
                .PrimaryKey(t => t.ADServiceAccountId);
            
            CreateTable(
                "dbo.AssetTrackings",
                c => new
                    {
                        AssetTrackingId = c.Int(nullable: false, identity: true),
                        DateTime = c.DateTime(nullable: false, precision: 7, storeType: "datetime2"),
                        From = c.String(),
                        To = c.String(),
                        empHRCode = c.String(),
                        byUserName = c.String(),
                        astCode = c.String(),
                        AssetBrandName = c.String(),
                    })
                .PrimaryKey(t => t.AssetTrackingId);
            
            CreateTable(
                "dbo.CostCenters",
                c => new
                    {
                        CostCenterId = c.Int(nullable: false, identity: true),
                        ccName = c.String(),
                    })
                .PrimaryKey(t => t.CostCenterId);
            
            CreateTable(
                "dbo.Domains",
                c => new
                    {
                        domId = c.Int(nullable: false, identity: true),
                        domName = c.String(),
                    })
                .PrimaryKey(t => t.domId);
            
            CreateTable(
                "dbo.ExcelAssetsUploadAPIs",
                c => new
                    {
                        astId = c.Int(nullable: false, identity: true),
                        AssetCategoryName = c.String(),
                        AssetTypeName = c.String(),
                        AssetBrandName = c.String(),
                        AssetBrandId = c.Int(nullable: false),
                        astBrandCode = c.String(),
                        Description = c.String(),
                        SerialNumber = c.String(),
                        PartNumber = c.String(),
                        DialNumber = c.String(),
                        CircuitNumber = c.String(),
                        EmpHRCode = c.String(),
                        EmpName = c.String(),
                        CompanyName = c.String(),
                        BranchName = c.String(),
                        astPurchaseDate = c.DateTime(precision: 7, storeType: "datetime2"),
                        IsExist = c.Boolean(),
                        duplicatSerialNumber = c.Boolean(),
                        duplicatPartNumber = c.Boolean(),
                        AssignedToEmpId = c.Int(),
                        byUserId = c.Int(),
                    })
                .PrimaryKey(t => t.astId);
            
            CreateTable(
                "dbo.ExcelEmployeeUploadAPIs",
                c => new
                    {
                        id = c.Int(nullable: false, identity: true),
                        isUsertoLogin = c.Boolean(nullable: false),
                        EmpCode = c.String(),
                        Name = c.String(),
                        accountName = c.String(),
                        Position = c.String(),
                        DirectMngCode = c.String(),
                        DepartmentName = c.String(),
                        BranchName = c.String(),
                        CompanyName = c.String(),
                        EXT = c.String(),
                        PRI = c.String(),
                        Mob1 = c.String(),
                        Mob2 = c.String(),
                        Mob3 = c.String(),
                        IndivEmail1 = c.String(),
                        IndivEmail2 = c.String(),
                        IndivEmail3 = c.String(),
                        IndivEmail4 = c.String(),
                        GenEmail1 = c.String(),
                        GenEmail2 = c.String(),
                        GenEmail3 = c.String(),
                        GenEmail4 = c.String(),
                        GenEmail5 = c.String(),
                        GenEmail6 = c.String(),
                        ArchEmail1 = c.String(),
                        ArchEmail2 = c.String(),
                        ArchEmail3 = c.String(),
                        ArchEmail4 = c.String(),
                        ArchEmail5 = c.String(),
                        ArchEmail6 = c.String(),
                        IsExist = c.Boolean(),
                        duplicatHrCode = c.Boolean(),
                    })
                .PrimaryKey(t => t.id);
            
            CreateTable(
                "dbo.ExcelUploadAPIs",
                c => new
                    {
                        UserId = c.Int(nullable: false, identity: true),
                        UserName = c.String(),
                        EmailId = c.String(),
                        Address = c.String(),
                    })
                .PrimaryKey(t => t.UserId);
            
            CreateTable(
                "dbo.Invoices",
                c => new
                    {
                        InvoiceId = c.Int(nullable: false, identity: true),
                        invNumber = c.String(),
                        invAmount = c.Single(nullable: false),
                        invDate = c.DateTime(nullable: false, precision: 7, storeType: "datetime2"),
                        InvFile = c.String(),
                        InvFileAttached = c.Boolean(nullable: false),
                        invStatus = c.String(),
                        Remarks = c.String(),
                        SupplierName = c.String(),
                        empHRCode = c.String(),
                        EmployeeName = c.String(),
                        CostCenterName = c.String(),
                        ItemsCategoryName = c.String(),
                    })
                .PrimaryKey(t => t.InvoiceId);
            
            CreateTable(
                "dbo.InvoicePendings",
                c => new
                    {
                        InvoicePendingId = c.Int(nullable: false, identity: true),
                        InvFile = c.String(),
                    })
                .PrimaryKey(t => t.InvoicePendingId);
            
            CreateTable(
                "dbo.Notifications",
                c => new
                    {
                        NotificationId = c.Int(nullable: false, identity: true),
                        Description = c.String(),
                        Url = c.String(),
                        seen = c.Boolean(nullable: false),
                        itemID = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.NotificationId);
            
            CreateTable(
                "dbo.UserActivitiesLogs",
                c => new
                    {
                        UserActivitiesLogId = c.Int(nullable: false, identity: true),
                        usrAccountName = c.String(),
                        IP_Address = c.String(),
                        ComputerName = c.String(),
                        Action = c.String(),
                        ActionTime = c.DateTime(nullable: false, precision: 7, storeType: "datetime2"),
                    })
                .PrimaryKey(t => t.UserActivitiesLogId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Employees", "posId", "dbo.PositionTitles");
            DropForeignKey("dbo.RolePrivileges", "RoleId", "dbo.Roles");
            DropForeignKey("dbo.RolePrivileges", "PrivilegeId", "dbo.Privileges");
            DropForeignKey("dbo.EmpRoles", "roleId", "dbo.Roles");
            DropForeignKey("dbo.EmpRoles", "empId", "dbo.Employees");
            DropForeignKey("dbo.EmpGmails", "genEmailId", "dbo.GenaricEmails");
            DropForeignKey("dbo.EmpGmails", "empId", "dbo.Employees");
            DropForeignKey("dbo.EmpArchAccounts", "empId", "dbo.Employees");
            DropForeignKey("dbo.Items", "icId", "dbo.ItemsCategories");
            DropForeignKey("dbo.PurchaseOrders", "splId", "dbo.Suppliers");
            DropForeignKey("dbo.Receivings", "StoreId", "dbo.Stores");
            DropForeignKey("dbo.Receivings", "PurchaseOrderId", "dbo.PurchaseOrders");
            DropForeignKey("dbo.ItemStores", "TransferId", "dbo.Transfers");
            DropForeignKey("dbo.ItemConsumptions", "TransferId", "dbo.Transfers");
            DropForeignKey("dbo.Transfers", "itmId", "dbo.Items");
            DropForeignKey("dbo.Transfers", "empId", "dbo.Employees");
            DropForeignKey("dbo.ItemStores", "StoreId", "dbo.Stores");
            DropForeignKey("dbo.ItemStores", "ReceivingId", "dbo.Receivings");
            DropForeignKey("dbo.ItemStores", "itmId", "dbo.Items");
            DropForeignKey("dbo.ItemConsumptions", "ReceivingId", "dbo.Receivings");
            DropForeignKey("dbo.Receivings", "empId", "dbo.Employees");
            DropForeignKey("dbo.PurchaseRequests", "StatusId", "dbo.Status");
            DropForeignKey("dbo.PurchaseOrders", "StatusId", "dbo.Status");
            DropForeignKey("dbo.PurchaseRequests", "PurchaseOrderId", "dbo.PurchaseOrders");
            DropForeignKey("dbo.ItemPRs", "PurchaseRequestId", "dbo.PurchaseRequests");
            DropForeignKey("dbo.ItemPRs", "itmId", "dbo.Items");
            DropForeignKey("dbo.PurchaseRequests", "empId", "dbo.Employees");
            DropForeignKey("dbo.ItemPOes", "PurchaseOrderId", "dbo.PurchaseOrders");
            DropForeignKey("dbo.PurchaseOrders", "empId", "dbo.Employees");
            DropForeignKey("dbo.ItemPOes", "itmId", "dbo.Items");
            DropForeignKey("dbo.ItemConsumptions", "itmId", "dbo.Items");
            DropForeignKey("dbo.ItemConsumptions", "empId", "dbo.Employees");
            DropForeignKey("dbo.ItemConsumptions", "dptId", "dbo.Departments");
            DropForeignKey("dbo.Employees", "dptId", "dbo.Departments");
            DropForeignKey("dbo.ItemConsumptions", "comId", "dbo.Companies");
            DropForeignKey("dbo.Employees", "comId", "dbo.Companies");
            DropForeignKey("dbo.ItemConsumptions", "brnId", "dbo.Branches");
            DropForeignKey("dbo.Employees", "brnId", "dbo.Branches");
            DropForeignKey("dbo.OprAccNumbers", "oprId", "dbo.Operators");
            DropForeignKey("dbo.Assets", "OprAccNumberId", "dbo.OprAccNumbers");
            DropForeignKey("dbo.OperatorRatePlans", "oprId", "dbo.Operators");
            DropForeignKey("dbo.Assets", "OperatorRatePlanId", "dbo.OperatorRatePlans");
            DropForeignKey("dbo.Assets", "oprId", "dbo.Operators");
            DropForeignKey("dbo.Assets", "empId", "dbo.Employees");
            DropForeignKey("dbo.AssetTypes", "AssetCategoryId", "dbo.AssetCategories");
            DropForeignKey("dbo.AssetBrands", "AssetTypeId", "dbo.AssetTypes");
            DropForeignKey("dbo.Assets", "AssetBrandId", "dbo.AssetBrands");
            DropForeignKey("dbo.EmpArchAccounts", "ADArchiveAccountId", "dbo.ADArchiveAccounts");
            DropIndex("dbo.RolePrivileges", new[] { "PrivilegeId" });
            DropIndex("dbo.RolePrivileges", new[] { "RoleId" });
            DropIndex("dbo.EmpRoles", new[] { "empId" });
            DropIndex("dbo.EmpRoles", new[] { "roleId" });
            DropIndex("dbo.EmpGmails", new[] { "genEmailId" });
            DropIndex("dbo.EmpGmails", new[] { "empId" });
            DropIndex("dbo.Transfers", new[] { "empId" });
            DropIndex("dbo.Transfers", new[] { "itmId" });
            DropIndex("dbo.ItemStores", new[] { "TransferId" });
            DropIndex("dbo.ItemStores", new[] { "ReceivingId" });
            DropIndex("dbo.ItemStores", new[] { "itmId" });
            DropIndex("dbo.ItemStores", new[] { "StoreId" });
            DropIndex("dbo.Receivings", new[] { "empId" });
            DropIndex("dbo.Receivings", new[] { "PurchaseOrderId" });
            DropIndex("dbo.Receivings", new[] { "StoreId" });
            DropIndex("dbo.ItemPRs", new[] { "itmId" });
            DropIndex("dbo.ItemPRs", new[] { "PurchaseRequestId" });
            DropIndex("dbo.PurchaseRequests", new[] { "PurchaseOrderId" });
            DropIndex("dbo.PurchaseRequests", new[] { "empId" });
            DropIndex("dbo.PurchaseRequests", new[] { "StatusId" });
            DropIndex("dbo.PurchaseOrders", new[] { "empId" });
            DropIndex("dbo.PurchaseOrders", new[] { "splId" });
            DropIndex("dbo.PurchaseOrders", new[] { "StatusId" });
            DropIndex("dbo.ItemPOes", new[] { "itmId" });
            DropIndex("dbo.ItemPOes", new[] { "PurchaseOrderId" });
            DropIndex("dbo.Items", new[] { "icId" });
            DropIndex("dbo.ItemConsumptions", new[] { "comId" });
            DropIndex("dbo.ItemConsumptions", new[] { "brnId" });
            DropIndex("dbo.ItemConsumptions", new[] { "dptId" });
            DropIndex("dbo.ItemConsumptions", new[] { "empId" });
            DropIndex("dbo.ItemConsumptions", new[] { "TransferId" });
            DropIndex("dbo.ItemConsumptions", new[] { "ReceivingId" });
            DropIndex("dbo.ItemConsumptions", new[] { "itmId" });
            DropIndex("dbo.OprAccNumbers", new[] { "oprId" });
            DropIndex("dbo.OperatorRatePlans", new[] { "oprId" });
            DropIndex("dbo.AssetTypes", new[] { "AssetCategoryId" });
            DropIndex("dbo.AssetBrands", new[] { "AssetTypeId" });
            DropIndex("dbo.Assets", new[] { "AssetBrandId" });
            DropIndex("dbo.Assets", new[] { "OprAccNumberId" });
            DropIndex("dbo.Assets", new[] { "OperatorRatePlanId" });
            DropIndex("dbo.Assets", new[] { "oprId" });
            DropIndex("dbo.Assets", new[] { "empId" });
            DropIndex("dbo.Employees", new[] { "posId" });
            DropIndex("dbo.Employees", new[] { "brnId" });
            DropIndex("dbo.Employees", new[] { "dptId" });
            DropIndex("dbo.Employees", new[] { "comId" });
            DropIndex("dbo.EmpArchAccounts", new[] { "ADArchiveAccountId" });
            DropIndex("dbo.EmpArchAccounts", new[] { "empId" });
            DropTable("dbo.UserActivitiesLogs");
            DropTable("dbo.Notifications");
            DropTable("dbo.InvoicePendings");
            DropTable("dbo.Invoices");
            DropTable("dbo.ExcelUploadAPIs");
            DropTable("dbo.ExcelEmployeeUploadAPIs");
            DropTable("dbo.ExcelAssetsUploadAPIs");
            DropTable("dbo.Domains");
            DropTable("dbo.CostCenters");
            DropTable("dbo.AssetTrackings");
            DropTable("dbo.ADServiceAccounts");
            DropTable("dbo.ADImportedAccounts");
            DropTable("dbo.PositionTitles");
            DropTable("dbo.Privileges");
            DropTable("dbo.RolePrivileges");
            DropTable("dbo.Roles");
            DropTable("dbo.EmpRoles");
            DropTable("dbo.GenaricEmails");
            DropTable("dbo.EmpGmails");
            DropTable("dbo.ItemsCategories");
            DropTable("dbo.Suppliers");
            DropTable("dbo.Transfers");
            DropTable("dbo.Stores");
            DropTable("dbo.ItemStores");
            DropTable("dbo.Receivings");
            DropTable("dbo.Status");
            DropTable("dbo.ItemPRs");
            DropTable("dbo.PurchaseRequests");
            DropTable("dbo.PurchaseOrders");
            DropTable("dbo.ItemPOes");
            DropTable("dbo.Items");
            DropTable("dbo.Departments");
            DropTable("dbo.Companies");
            DropTable("dbo.ItemConsumptions");
            DropTable("dbo.Branches");
            DropTable("dbo.OprAccNumbers");
            DropTable("dbo.OperatorRatePlans");
            DropTable("dbo.Operators");
            DropTable("dbo.AssetCategories");
            DropTable("dbo.AssetTypes");
            DropTable("dbo.AssetBrands");
            DropTable("dbo.Assets");
            DropTable("dbo.Employees");
            DropTable("dbo.EmpArchAccounts");
            DropTable("dbo.ADArchiveAccounts");
        }
    }
}
