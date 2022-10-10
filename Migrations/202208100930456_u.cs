namespace IntranetAPI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class u : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.CostCenters",
                c => new
                    {
                        CostCenterId = c.Int(nullable: false, identity: true),
                        ccName = c.String(),
                    })
                .PrimaryKey(t => t.CostCenterId);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.CostCenters");
        }
    }
}
