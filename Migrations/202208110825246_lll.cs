namespace IntranetAPI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class lll : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Invoices", "CostCenterId", "dbo.CostCenters");
            DropForeignKey("dbo.Invoices", "empId", "dbo.Employees");
            DropForeignKey("dbo.Invoices", "icId", "dbo.ItemsCategories");
            DropForeignKey("dbo.Invoices", "splId", "dbo.Suppliers");
            DropIndex("dbo.Invoices", new[] { "splId" });
            DropIndex("dbo.Invoices", new[] { "icId" });
            DropIndex("dbo.Invoices", new[] { "CostCenterId" });
            DropIndex("dbo.Invoices", new[] { "empId" });
            DropColumn("dbo.Invoices", "splId");
            DropColumn("dbo.Invoices", "icId");
            DropColumn("dbo.Invoices", "CostCenterId");
            DropColumn("dbo.Invoices", "empId");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Invoices", "empId", c => c.Int());
            AddColumn("dbo.Invoices", "CostCenterId", c => c.Int());
            AddColumn("dbo.Invoices", "icId", c => c.Int());
            AddColumn("dbo.Invoices", "splId", c => c.Int());
            CreateIndex("dbo.Invoices", "empId");
            CreateIndex("dbo.Invoices", "CostCenterId");
            CreateIndex("dbo.Invoices", "icId");
            CreateIndex("dbo.Invoices", "splId");
            AddForeignKey("dbo.Invoices", "splId", "dbo.Suppliers", "splId");
            AddForeignKey("dbo.Invoices", "icId", "dbo.ItemsCategories", "icId");
            AddForeignKey("dbo.Invoices", "empId", "dbo.Employees", "empId");
            AddForeignKey("dbo.Invoices", "CostCenterId", "dbo.CostCenters", "CostCenterId");
        }
    }
}
