namespace IntranetAPI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class oooo : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Assets", "asttypId", "dbo.AssetTypes");
            DropIndex("dbo.Assets", new[] { "asttypId" });
            DropPrimaryKey("dbo.AssetTypes");
            DropPrimaryKey("dbo.AssetBrands");
            CreateTable(
                "dbo.AssetCategories",
                c => new
                    {
                        AssetCategoryId = c.Int(nullable: false, identity: true),
                        astCategoryName = c.String(),
                        astCategoryCode = c.String(),
                    })
                .PrimaryKey(t => t.AssetCategoryId);
            
            AddColumn("dbo.Employees", "isUsertoLogin", c => c.Boolean(nullable: false));
            AddColumn("dbo.Assets", "AssetCategoryName", c => c.String());
            AddColumn("dbo.Assets", "AssetBrandName", c => c.String());
            AddColumn("dbo.Assets", "astBrandCode", c => c.String());
            AddColumn("dbo.Assets", "AssetBrandId", c => c.Int());
            AddColumn("dbo.AssetTypes", "AssetTypeId", c => c.Int(nullable: false, identity: true));
            AddColumn("dbo.AssetTypes", "astTypeName", c => c.String());
            AddColumn("dbo.AssetTypes", "astTypeCode", c => c.String());
            AddColumn("dbo.AssetTypes", "AssetCategoryId", c => c.Int());
            AddColumn("dbo.AssetBrands", "AssetBrandId", c => c.Int(nullable: false, identity: true));
            AddColumn("dbo.AssetBrands", "astBrandName", c => c.String());
            AddColumn("dbo.AssetBrands", "astBrandCode", c => c.String());
            AddColumn("dbo.AssetBrands", "AssetTypeId", c => c.Int(nullable: false));
            AddColumn("dbo.ExcelAssetsUploadAPIs", "AssetCategoryName", c => c.String());
            AddColumn("dbo.ExcelAssetsUploadAPIs", "AssetTypeName", c => c.String());
            AddColumn("dbo.ExcelAssetsUploadAPIs", "AssetBrandName", c => c.String());
            AddColumn("dbo.ExcelAssetsUploadAPIs", "AssetBrandId", c => c.Int(nullable: false));
            AddColumn("dbo.ExcelAssetsUploadAPIs", "astBrandCode", c => c.String());
            AddColumn("dbo.ExcelAssetsUploadAPIs", "duplicatPartNumber", c => c.Boolean());
            AddColumn("dbo.ExcelAssetsUploadAPIs", "AssignedToEmpId", c => c.Int());
            AddColumn("dbo.ExcelAssetsUploadAPIs", "byUserId", c => c.Int());
            AddColumn("dbo.ExcelEmployeeUploadAPIs", "isUsertoLogin", c => c.Boolean(nullable: false));
            AddPrimaryKey("dbo.AssetTypes", "AssetTypeId");
            AddPrimaryKey("dbo.AssetBrands", "AssetBrandId");
            CreateIndex("dbo.Assets", "AssetBrandId");
            CreateIndex("dbo.AssetBrands", "AssetTypeId");
            CreateIndex("dbo.AssetTypes", "AssetCategoryId");
            AddForeignKey("dbo.Assets", "AssetBrandId", "dbo.AssetBrands", "AssetBrandId");
            AddForeignKey("dbo.AssetBrands", "AssetTypeId", "dbo.AssetTypes", "AssetTypeId", cascadeDelete: true);
            AddForeignKey("dbo.AssetTypes", "AssetCategoryId", "dbo.AssetCategories", "AssetCategoryId");
            DropColumn("dbo.Assets", "asttypId");
            DropColumn("dbo.AssetTypes", "asttypId");
            DropColumn("dbo.AssetTypes", "asttypName");
            DropColumn("dbo.AssetBrands", "astbndId");
            DropColumn("dbo.AssetBrands", "astbndName");
            DropColumn("dbo.ExcelAssetsUploadAPIs", "AssetCode");
            DropColumn("dbo.ExcelAssetsUploadAPIs", "TypeName");
            DropColumn("dbo.ExcelAssetsUploadAPIs", "duplicatCode");
            DropColumn("dbo.ExcelAssetsUploadAPIs", "duplicatDailNumber");
            DropColumn("dbo.ExcelAssetsUploadAPIs", "ByEmpId");
        }
        
        public override void Down()
        {
            AddColumn("dbo.ExcelAssetsUploadAPIs", "ByEmpId", c => c.Int(nullable: false));
            AddColumn("dbo.ExcelAssetsUploadAPIs", "duplicatDailNumber", c => c.Boolean());
            AddColumn("dbo.ExcelAssetsUploadAPIs", "duplicatCode", c => c.Boolean());
            AddColumn("dbo.ExcelAssetsUploadAPIs", "TypeName", c => c.String());
            AddColumn("dbo.ExcelAssetsUploadAPIs", "AssetCode", c => c.String());
            AddColumn("dbo.AssetBrands", "astbndName", c => c.String());
            AddColumn("dbo.AssetBrands", "astbndId", c => c.Int(nullable: false, identity: true));
            AddColumn("dbo.AssetTypes", "asttypName", c => c.String());
            AddColumn("dbo.AssetTypes", "asttypId", c => c.Int(nullable: false, identity: true));
            AddColumn("dbo.Assets", "asttypId", c => c.Int());
            DropForeignKey("dbo.AssetTypes", "AssetCategoryId", "dbo.AssetCategories");
            DropForeignKey("dbo.AssetBrands", "AssetTypeId", "dbo.AssetTypes");
            DropForeignKey("dbo.Assets", "AssetBrandId", "dbo.AssetBrands");
            DropIndex("dbo.AssetTypes", new[] { "AssetCategoryId" });
            DropIndex("dbo.AssetBrands", new[] { "AssetTypeId" });
            DropIndex("dbo.Assets", new[] { "AssetBrandId" });
            DropPrimaryKey("dbo.AssetBrands");
            DropPrimaryKey("dbo.AssetTypes");
            DropColumn("dbo.ExcelEmployeeUploadAPIs", "isUsertoLogin");
            DropColumn("dbo.ExcelAssetsUploadAPIs", "byUserId");
            DropColumn("dbo.ExcelAssetsUploadAPIs", "AssignedToEmpId");
            DropColumn("dbo.ExcelAssetsUploadAPIs", "duplicatPartNumber");
            DropColumn("dbo.ExcelAssetsUploadAPIs", "astBrandCode");
            DropColumn("dbo.ExcelAssetsUploadAPIs", "AssetBrandId");
            DropColumn("dbo.ExcelAssetsUploadAPIs", "AssetBrandName");
            DropColumn("dbo.ExcelAssetsUploadAPIs", "AssetTypeName");
            DropColumn("dbo.ExcelAssetsUploadAPIs", "AssetCategoryName");
            DropColumn("dbo.AssetBrands", "AssetTypeId");
            DropColumn("dbo.AssetBrands", "astBrandCode");
            DropColumn("dbo.AssetBrands", "astBrandName");
            DropColumn("dbo.AssetBrands", "AssetBrandId");
            DropColumn("dbo.AssetTypes", "AssetCategoryId");
            DropColumn("dbo.AssetTypes", "astTypeCode");
            DropColumn("dbo.AssetTypes", "astTypeName");
            DropColumn("dbo.AssetTypes", "AssetTypeId");
            DropColumn("dbo.Assets", "AssetBrandId");
            DropColumn("dbo.Assets", "astBrandCode");
            DropColumn("dbo.Assets", "AssetBrandName");
            DropColumn("dbo.Assets", "AssetCategoryName");
            DropColumn("dbo.Employees", "isUsertoLogin");
            DropTable("dbo.AssetCategories");
            AddPrimaryKey("dbo.AssetBrands", "astbndId");
            AddPrimaryKey("dbo.AssetTypes", "asttypId");
            CreateIndex("dbo.Assets", "asttypId");
            AddForeignKey("dbo.Assets", "asttypId", "dbo.AssetTypes", "asttypId");
        }
    }
}
