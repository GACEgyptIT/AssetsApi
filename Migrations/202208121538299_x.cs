namespace IntranetAPI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class x : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.ExcelEmployeeUploadAPIs", "DirectMngHrCode", c => c.String());
            AddColumn("dbo.ExcelEmployeeUploadAPIs", "DirectMngName", c => c.String());
            DropColumn("dbo.ExcelEmployeeUploadAPIs", "DirectMngCode");
        }
        
        public override void Down()
        {
            AddColumn("dbo.ExcelEmployeeUploadAPIs", "DirectMngCode", c => c.String());
            DropColumn("dbo.ExcelEmployeeUploadAPIs", "DirectMngName");
            DropColumn("dbo.ExcelEmployeeUploadAPIs", "DirectMngHrCode");
        }
    }
}
