namespace IntranetAPI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class o : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.ExcelEmployeeUploadAPIs", "isUsertoLogin", c => c.Boolean(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.ExcelEmployeeUploadAPIs", "isUsertoLogin");
        }
    }
}
