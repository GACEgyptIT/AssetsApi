import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { AssetTypeModel } from 'app/shared/models/AssetTypeModel';
import { AssettypeService } from './services/assettype.service';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-assettype',
  templateUrl: './assettype.component.html',
  styleUrls: ['./assettype.component.css']
})
export class AssettypeComponent implements OnInit {

  public loading = false;
  notificationMessage = '';

  astTyForm: FormGroup;

  public AssetTypes: AssetTypeModel[] = [];

  showAssetTypeCodeGuide(){
    return this.showAsTypCodGuid
  }
  showAsTypCodGuid = false;

    constructor(

        private astTySrv: AssettypeService,
        private fb: FormBuilder,
        private alertService: AlertService
      ) {
        this.onGetAllAssetTypes();
  
    }
    ngOnInit() {

      this.astTyForm = this.fb.group({
        asttypId: 0,
        // AssetTypeCode: [null, Validators.required],
        asttypName: [null, Validators.required]
      });
    }

    fillAssetType(){

      this.AssetTypes = [
        {asttypName: 'Laptop' },
        {asttypName: 'Desktop' },
        {asttypName: 'Server' },
        {asttypName: 'Storage' },
        {asttypName: 'Mobile' },
        {asttypName: 'MiFi' },
        {asttypName: 'USB' },
        {asttypName: 'VoiceLine' },
        {asttypName: 'DataLine' },
        {asttypName: 'DataLine-ADSL'},
        {asttypName: 'Stamp'},
        {asttypName: 'Others' }
      ];
    }
    onDBUpdate(){
      
      this.fillAssetType();
      this.astTySrv.addMultipleAssetsTypes(this.AssetTypes).subscribe(res=>{
        
        this.onGetAllAssetTypes();
      })
    }
    
    onGetAllAssetTypes() {
           
            this.loading = true;
            this.astTySrv.getAllAssetsTypes().subscribe((astTys: AssetTypeModel[]) => {
                    
                    this.AssetTypes = astTys;
                    this.loading = false;
              }, error => {
                    this.loading = false;
                    if(error.message.includes('Http failure response for http://')) {
                  }
            });
    }
    onSubmit(status): void {
        
        if (this.astTyForm.value.asttypId == 0) {
        //  
          this.loading = true;
                this.astTySrv.addAssetType(this.astTyForm.value).subscribe(AssetTypeAdded => {
                  if (status == 'Add') {
                      this.astTyForm.reset();
                      this.astTyForm.controls['asttypId'].setValue(0);
                      this.loading = false;
                 //     this.noticationMessegeTimer('AssetType Added Successfully');
                      this.alertService.success('Added Successfully');
                      this.onGetAllAssetTypes();
                  } else if (status == 'Save') {
 
                    this.loading = false;
                    this.alertService.success('Saved Successfully');
                 //   this.noticationMessegeTimer('AssetType Added Successfully');
                    this.onGetAllAssetTypes();
                  };
                 
                }, error => {
                  this.alertService.danger('Server Error, data has not been saved');
            //       console.log('Data is not Imported ...' ,  error.message);
                  this.loading = false;
            //       if(error.message.includes('Http failure response for http://')) {
            //  //       this.noticationMessegeTimer('Server connection Error / Data has NOT been saved to the DB');
            //       }
                });

        } else if (this.astTyForm.value.asttypId > 0) {
                 
                this.astTySrv.editAssetType(this.astTyForm.value.asttypId, this.astTyForm.value).subscribe(AssetTypeAdded => {
                      this.astTyForm.reset();
                      this.astTyForm.controls['asttypId'].setValue(0);
                      this.onGetAllAssetTypes();
             //         this.noticationMessegeTimer('AssetType Saved Successfully');
                }, error => {
                      this.loading = false;
                      if(error.message.includes('Http failure response for http://')) {
              //          this.noticationMessegeTimer('Server connection Error / Data has NOT been saved to the DB') ;
                      }
                });
         
        }
    }
    onEditAssetType(emp) {
    //  
        this.astTyForm.reset();
        this.astTyForm.patchValue(emp);
      //  this.astTyForm.controls.AssetTypeTypes.get('emptypName').patchValue(emp.AssetTypeType.emptypName);

    }
    onDeleteAssetType(emp : AssetTypeModel) {
     //   if(confirm("Are you sure to delete AssetType " + emp.astTyName)){
       //   
          this.astTySrv.deleteAssetType(emp.asttypId).subscribe((empdlt: AssetTypeModel) => {

          this.alertService.success('AssetType: ' +  empdlt.asttypName + ' is deleted');
          // this.alertService.info('this is an info alert');
            //this.alertService.danger('this is a danger alert');
          // this.alertService.success('this is a success alert');
          // this.alertService.warning('this is a warning alert');
          // this.alertService.warning({html: '<a (click)="okAlertFn()"><b>Yes Proceed</b></a> '});
            this.onGetAllAssetTypes();

          }, error => {
            this.alertService.danger('Server Error, Operation Apported ');
            this.loading = false;
          //   if(error.message.includes('Http failure response for http://')) {
          //  //  this.noticationMessegeTimer('Server connection Error / Data has NOT been saved to the DB');
          //   }
          });
      
    }
    onCancel() {
       this.astTyForm.reset();
    }
    
    get getAssetTypeForm() { return this.astTyForm.controls; }


}
