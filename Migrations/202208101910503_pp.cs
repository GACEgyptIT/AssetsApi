namespace IntranetAPI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class pp : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Invoices", "splId", c => c.Int());
            AddColumn("dbo.Invoices", "icId", c => c.Int());
            AddColumn("dbo.Invoices", "CostCenterId", c => c.Int());
            AddColumn("dbo.Invoices", "empId", c => c.Int());
            CreateIndex("dbo.Invoices", "splId");
            CreateIndex("dbo.Invoices", "icId");
            CreateIndex("dbo.Invoices", "CostCenterId");
            CreateIndex("dbo.Invoices", "empId");
            AddForeignKey("dbo.Invoices", "CostCenterId", "dbo.CostCenters", "CostCenterId");
            AddForeignKey("dbo.Invoices", "empId", "dbo.Employees", "empId");
            AddForeignKey("dbo.Invoices", "icId", "dbo.ItemsCategories", "icId");
            AddForeignKey("dbo.Invoices", "splId", "dbo.Suppliers", "splId");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Invoices", "splId", "dbo.Suppliers");
            DropForeignKey("dbo.Invoices", "icId", "dbo.ItemsCategories");
            DropForeignKey("dbo.Invoices", "empId", "dbo.Employees");
            DropForeignKey("dbo.Invoices", "CostCenterId", "dbo.CostCenters");
            DropIndex("dbo.Invoices", new[] { "empId" });
            DropIndex("dbo.Invoices", new[] { "CostCenterId" });
            DropIndex("dbo.Invoices", new[] { "icId" });
            DropIndex("dbo.Invoices", new[] { "splId" });
            DropColumn("dbo.Invoices", "empId");
            DropColumn("dbo.Invoices", "CostCenterId");
            DropColumn("dbo.Invoices", "icId");
            DropColumn("dbo.Invoices", "splId");
        }
    }
}
