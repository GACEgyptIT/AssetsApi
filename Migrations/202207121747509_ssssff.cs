namespace IntranetAPI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ssssff : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.ExcelAssetsUploadAPIs", "AssetTypeName", c => c.String());
            AddColumn("dbo.ExcelAssetsUploadAPIs", "AssetBrandName", c => c.String());
            DropColumn("dbo.ExcelAssetsUploadAPIs", "TypeName");
        }
        
        public override void Down()
        {
            AddColumn("dbo.ExcelAssetsUploadAPIs", "TypeName", c => c.String());
            DropColumn("dbo.ExcelAssetsUploadAPIs", "AssetBrandName");
            DropColumn("dbo.ExcelAssetsUploadAPIs", "AssetTypeName");
        }
    }
}
