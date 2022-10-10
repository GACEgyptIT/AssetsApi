import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { CostCenterModel } from 'app/shared/models/CostCenterModel';

@Injectable({
  providedIn: 'root'
})
export class CostcenterService {

 

  // Categorys: any = [];
  constructor(private http: HttpClient) { }

  getAllCostCenters() {
  //  
    return this.http.get(environment.apiURL + 'CostCenters');
  }

  addCostCenter(body: CostCenterModel) {
    
    return this.http.post(environment.apiURL + 'CostCenters', body);
  }

  editCostCenter(id: number, body: CostCenterModel) {
    return this.http.put(environment.apiURL + 'CostCenters/' + id, body);
  }

  // deleteCostCenter(id: number){
  //   return this.CostCenter.delete(environment.apiURL + `CostCenters/$(id)`);
  // }
  deleteCostCenter(id) {
    return this.http.delete(environment.apiURL + 'CostCenters/' + id);
  }
}
