import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { InvoicesModel } from 'app/shared/models/InvoicesModel';
import { CostCenterModel } from 'app/shared/models/CostCenterModel';
// import { LegendItem, ChartType, LbdChartComponent } from '../reports/lbd-chart/lbd-chart.component';    //lbd-chart/lbd-chart.component';      

@Injectable({
  providedIn: 'root'
})
export class InvoicemngService implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(){
  }

  getAllInvoices(from: Date, to: Date) {
     debugger;
    const body = { 
      from: from,
      to: to
    } 
    return this.http.post(environment.apiURL + 'Invoices/GetInvoicesFromToDate', body);
  }
  getInvoiceById(id: number) {
      debugger;
     return this.http.get(environment.apiURL + 'Invoices/getInvoiceById/' + id);
   }
  addInvoice(body: InvoicesModel) {
    debugger;
    return this.http.post(environment.apiURL + 'Invoices/AddInvoices', body);
  }
  editInvoice(id: number, body: InvoicesModel) {
    debugger;
    return this.http.put(environment.apiURL + 'Invoices/' + id, body);
  }
  deleteInvoice(id) {
    return this.http.delete(environment.apiURL + 'Invoices/' + id);
  }
  deleteSelectedInvoices(body) {
    debugger;
    return this.http.post(environment.apiURL + 'Invoices/DeleteSelectedInvoices/', body );
  }
  invoices: InvoicesModel[];
  calculateByCategories(invs: InvoicesModel[]){
    this.invoices = invs;
    let JanTotal = 0; let FebTotal = 0; let MarTotal = 0; let AprTotal = 0; let MaiTotal = 0; let JunTotal = 0; 
    let JulTotal = 0; let AugTotal = 0; let SepTotal = 0; let OctTotal = 0; let NovTotal = 0 ; let DecTotal = 0;
    const series = [];
    const categories = [];

    invs.forEach((inv, index) => {
     // debugger;
      if(!categories.includes(inv.ItemCategoryName)){

        categories.push(inv.ItemCategoryName);
        // debugger;
        JanTotal += this.CalculateMonthTotalByCategory(inv.ItemCategoryName, '01');
        FebTotal += this.CalculateMonthTotalByCategory(inv.ItemCategoryName, '02');
        MarTotal += this.CalculateMonthTotalByCategory(inv.ItemCategoryName, '03');
        AprTotal += this.CalculateMonthTotalByCategory(inv.ItemCategoryName, '04');
        MaiTotal += this.CalculateMonthTotalByCategory(inv.ItemCategoryName, '05');
        JunTotal += this.CalculateMonthTotalByCategory(inv.ItemCategoryName, '06');
        JulTotal += this.CalculateMonthTotalByCategory(inv.ItemCategoryName, '07');
        AugTotal += this.CalculateMonthTotalByCategory(inv.ItemCategoryName, '08');
        SepTotal += this.CalculateMonthTotalByCategory(inv.ItemCategoryName, '09');
        OctTotal += this.CalculateMonthTotalByCategory(inv.ItemCategoryName, '10');
        NovTotal += this.CalculateMonthTotalByCategory(inv.ItemCategoryName, '11');
        DecTotal += this.CalculateMonthTotalByCategory(inv.ItemCategoryName, '12');
        let Total = JanTotal + FebTotal + MarTotal + AprTotal + MaiTotal + MaiTotal + JunTotal + JunTotal + JulTotal + AugTotal +  SepTotal +  OctTotal + NovTotal + DecTotal ;

        series.push([ JanTotal, FebTotal, MarTotal, AprTotal, MaiTotal, JunTotal, JulTotal, AugTotal, SepTotal, OctTotal, NovTotal, DecTotal, inv.ItemCategoryName, Total ]);

        JanTotal = 0; FebTotal = 0; MarTotal = 0; AprTotal = 0; MaiTotal = 0; JunTotal = 0; 
        JulTotal = 0; AugTotal = 0; SepTotal = 0; OctTotal = 0; NovTotal = 0 ; DecTotal = 0;
     
      } 
    });
    return series;
  }
  CalculateMonthTotalByCategory(cat, month: String): number{
    let amount = 0;
    this.invoices.forEach(inv =>{
      if(inv.ItemCategoryName == cat){
        let invdate = new Date(inv.invDate);
        const invMonth = ("0" + (invdate.getMonth() + 1)).slice(-2);
        if(inv.invAmount !== undefined && invMonth == month){
            amount += inv.invAmount;
        }
      }
    });
    return amount;
  }
  /////////// by Cost Center ///////////

  calculateByCategoriesForCC(invs: InvoicesModel[], from, to){
    this.invoices = invs;
    const records = []; 

    invs.forEach((inv: InvoicesModel, index) => {
        let record = { catName: '', ccName: '', catTotal: 0 }; 

        record.catTotal = this.CalculateCCTotalByCategory(inv.ItemCategoryName, inv.CostCenterName, from, to);
        record.catName = inv.ItemCategoryName;
        record.ccName = inv.CostCenterName;
        if((!records.some((item) => item.ccName == inv.CostCenterName)) || (!records.some((item) => item.catName == inv.ItemCategoryName)) ){
          records.push(record);
        }
    });
  //  debugger;
    return records;
  }

  CalculateCCTotalByCategory(cat, cc, from,to): number{
    let amount = 0;
    this.invoices.forEach((inv: InvoicesModel) =>{
      if(inv.ItemCategoryName == cat && inv.CostCenterName == cc){
        let invdate = new Date(inv.invDate);
        if(inv.CostCenterName === cc  && invdate >= from && invdate <= to){
            amount += inv.invAmount;
        }
      }
    });
    return amount;
  }
}
