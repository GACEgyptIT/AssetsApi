namespace IntranetAPI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ssss : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.ExcelAssetsUploadAPIs", "AssetCategoryName", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.ExcelAssetsUploadAPIs", "AssetCategoryName");
        }
    }
}
