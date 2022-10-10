import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { AssetModel } from 'app/shared/models/AssetModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AssetsUploadModel } from 'app/shared/models/AssetsUploadModel';
import { AppstorageService } from 'app/shared/services/appstorage.service';
//import { HttpClientModule } from '@angular/common/http'; import { HttpModule } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AssetService {


  constructor(
    private http: HttpClient, private strgSrv: AppstorageService
    ) { }

  getAllAssets() {
  //  
    return this.http.get(environment.apiURL + 'Assets');
  }
  getLogsByAssetId(astId: number) {
      
      return this.http.get(environment.apiURL + 'AssetTrackingss/getLogsByAssetId/' + astId);
  }
  getAssetId(astId: number) {
    
    return this.http.get(environment.apiURL + 'Assetss/getByAssetId/' + astId);
  }

  GetAsssetByCode(assetcode) {
    return this.http.get(environment.apiURL + 'Assetss/GetAsssetByCode/' + assetcode);
  }

  GetAsssetByDailNumber(dailNumber) {
    return this.http.get(environment.apiURL + 'Assetss/GetAsssetByDailNumber/' + dailNumber);
  }
  
  GetOperatorPlansByOpId(oprId) {
    return this.http.get(environment.apiURL + 'OperatorRatePlans/GetOperatorPlansByOpId/' + oprId);
  }
  GetAccountsNumbersByOpId(oprId) {
    return this.http.get(environment.apiURL + 'OprAccNumbers/GetAccountsNumbersByOpId/' + oprId);
  }
  isAsssetCodeExist(assetcode) {
    return this.http.get(environment.apiURL + 'Assetss/isAsssetCodeExist/' + assetcode);
  }
  GetDailNumber(dailnumber) {
    debugger;
    return this.http.get(environment.apiURL + 'Assetss/getDailNumber/' + dailnumber);
  }
  GetSerialNumber(serialnumber) {
    debugger;
    return this.http.get(environment.apiURL + 'Assetss/getSerialNumber/' + serialnumber);
  }

  addAsset(body: AssetModel) {
   //   
    return this.http.post(environment.apiURL + 'Assets', body);
  }

  editAsset(id: number, body: AssetModel) {
     
    return this.http.put(environment.apiURL + 'Assets/' + id, body);
  }
  editMultipleAsset(id: number, body: AssetModel) {
   return this.http.put(environment.apiURL + 'Assets/' + id, body);
  }

  deleteAsset(id) {
    return this.http.delete(environment.apiURL + 'Assets/' + id);
  }
  assignAssetToEmp(body) {
    debugger;
    return this.http.post(environment.apiURL + 'Assetss/assignAssetsToEmp', body);
  }
    // upload excel
    UploadExcel(file: FormData) {

      let headers = new HttpHeaders();
      // let body = {
      //   file: file,
      //   usr: this.usr
      // }

      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
    //  headers.append('usr', this.usr)

      const httpOptions = { headers: headers };
      

      // this.sendUserLog();

      return this.http.post(environment.apiURL + 'ExcelAsset/UploadExcelAsset', file, httpOptions)
    }
    getAllUploadedAssets() {
      return this.http.get<AssetsUploadModel[]>(environment.apiURL + 'ExcelAsset/GetallUploadedAsset');
    }
    saveUploadedAssets(body: AssetsUploadModel[]) {
         return this.http.post(environment.apiURL + 'ExcelAsset/saveuploadedassets', body);
    }
    deleteAllUploadedAssets( body) {
 //   
    return this.http.delete(environment.apiURL + 'ExcelAsset/DeleteAlluploadedAssets', body);
    }
    deleteSelectedUploadedAssets(body) {
      return this.http.post(environment.apiURL + 'ExcelAsset/DeleteSelectedAssets/', body );
    }
    
    deleteSelectedAssets(body) {
   //   
      return this.http.post(environment.apiURL + 'Assetss/DeleteSelectedAssets/', body );
    }
}
