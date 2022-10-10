import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { AssetTypeModel } from 'app/shared/models/AssetTypeModel';

@Injectable({
  providedIn: 'root'
})
export class AssettypeService {

  constructor(private http: HttpClient) { }

  getAllAssetsTypes() {
  // 
    return this.http.get(environment.apiURL + 'AssetTypes');
  }

  addAssetType(body: AssetTypeModel) {
  //  
    return this.http.post(environment.apiURL + 'AssetTypes', body);
  }

  addMultipleAssetsTypes(body) {
    debugger;
    return this.http.post(environment.apiURL + 'AssetTypes/DBUpdateAssetsTypes', body);
  }
  editAssetType(id: number, body: AssetTypeModel) {
  //  
    return this.http.put(environment.apiURL + 'AssetTypes/' + id, body);
  }
  editMultipleAssetType(id: number, body: AssetTypeModel) {
   // 
   return this.http.put(environment.apiURL + 'AssetTypes/' + id, body);
   // return this.http.put(environment.apiURL + 'Items/' + id, body);

  }

  // deleteAssetType(id: number){
  //   return this.AssetType.delete(environment.apiURL + `AssetTypes/$(id)`);
  // }
  deleteAssetType(id) {
    return this.http.delete(environment.apiURL + 'AssetTypes/' + id);
  }
}
