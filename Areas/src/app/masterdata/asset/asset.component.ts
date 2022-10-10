import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { AssetService} from './services/asset.service';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray, AbstractControl, ValidatorFn } from '@angular/forms';
import { PasswordValidation } from '../../forms/validationforms/password-validator.component';
import { AssetModel } from 'app/shared/models/AssetModel';
import { EmployeeService } from '../employee/services/employee.service';
import { Observable } from 'rxjs';
import { EmployeeModel } from 'app/shared/models/EmployeeModel';
import { AssettypeService } from '../assettype/services/assettype.service';
import { AssetTypeModel } from 'app/shared/models/AssetTypeModel';
import { RouterLinkWithHref, Router } from '@angular/router';
import { OrderPipe } from "ngx-order-pipe";
import { fromEvent } from "rxjs";
import { map, debounceTime } from 'rxjs/operators';
import { ExportexcelService } from '../../shared/services/exportexcel.service';
// import swal from 'sweetalert2';
import { BranchsModel } from 'app/shared/models/BrachModel';
import { BranchService } from '../branch/services/branch.service';
import { CompanyModel } from 'app/shared/models/CompanyModel';
import { CompanyService } from '../company/services/company.service';
import { AlertService } from 'ngx-alerts';
import { SweetalertService } from 'app/shared/services/sweetalert.service';
import Swal from 'sweetalert2';
import { AppstorageService } from 'app/shared/services/appstorage.service';
import { AssetTrackingModel } from 'app/shared/models/AssetTrackingModel';
import { OperatorModel } from 'app/shared/models/OperatorModel';
import { OperatorService } from '../operator/services/operator.service';
import { LogsService } from 'app/shared/services/logs.service';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { ShareddataService } from 'app/shared/services/shareddata.service';
import { UserModel } from 'app/shared/models/UserModel';
import { DepartmentService } from '../department/services/department.service';
import { DepartmentModel } from 'app/shared/models/DepartmentModel';
import { OperatorRatePlanModel } from 'app/shared/models/OperatorRatePlanModel';
import { OprAccNumberModel } from 'app/shared/models/OprAccNumberModel';

declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'app-assets',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css']
})
export class AssetComponent implements OnInit, AfterViewInit {

    totalLaptops = 0; totalDesktops = 0 ;  totalMiFis = 0;   totalMobiles = 0; totalAssets = 0; totalScreens = 0; totalPrinters = 0; totalServers = 0;  
    totalDataLines = 0;  selectedAssets =0; noCompany = 0; noBranch = 0; noEmployee = 0; totalVoiceLines=0; noAssetType=0;
 
    hideAssetTypeLaptop = true;
    hideAssetTypeDesktop = true;
    hideAssetTypeServer = true;
    hideAssetTypeStorage = true;
    hideAssetTypeMobile = true;
    hideAssetTypeMiFi = true;
    hideAssetTypeOthers = true;
    hideAssetTypeVoiceLine = true;
    hideAssetTypeDataLine = true;
    IsScrap = false;
    comIdValue =0;
    showCodeGuide = false;
    showStatistics = false;
    CodeExist = false;
    DailNumberExist = false;
    DailNumberUnValid = false
    SerialNumberExist = false;
    SerialNumberUnValid = false;
    AssetTemp: AssetModel = {};
    assetForm: FormGroup;
    public loading = false;
    pageIndex: number = 1;
    pageSize: number = 10;
    fullNameKeyword = 'empFullName'; 
    @ViewChild('search') search: any;
    public temp: AssetModel[] = [];
    public Assets: AssetModel[] = [];
    public columns: Array<object>;
    order: string = "info.name";
    reverse: boolean = false;
    sortedCollection: any[];
    Plans: OperatorRatePlanModel[] = [];
    Accounts: OprAccNumberModel[] = [];
    SelectedAssets: AssetModel[] = [];
    AssetTypes: AssetTypeModel[] = [];
    Branchs: BranchsModel[] = [];
    Departments: DepartmentModel[] = [];
    Operators: OperatorModel[] = [];
    Employees: EmployeeModel[] = [];
    EmployeesList: EmployeeModel[] = [];
    Companys: CompanyModel[] = [];
    currentDate: Date = new Date();
    notificationMessage = '';
    searchForm: FormGroup;

    notifcationMessegeTimer(messege : string) {
    //   
    var x  = setInterval(() => 
     {
          return this.notificationMessage = '';
     },10000);
          return this.notificationMessage = messege;
    }
    onUpdatestatistics() {
        debugger
          this.totalLaptops = 0;
          this.totalDesktops = 0;
          this.totalMobiles = 0;
          this.totalMiFis = 0;
          this.noBranch = 0;
          this.totalScreens = 0;
          this.totalPrinters = 0;
          this.totalServers = 0;
          this.totalDataLines = 0;
          this.totalVoiceLines = 0;
          this.selectedAssets = 0;
          this.noCompany = 0;
          this.noEmployee = 0;

          this.selectedAssets = this.SelectedAssets.length;
          this.totalAssets = this.Assets.length;
      

          this.Assets.forEach(a => {
          // 
              if(a.AssetTypeName == "Laptop"){
                this.totalLaptops += 1;
              } if (a.AssetTypeName == 'Desktop') {
                this.totalDesktops += 1;
              } if (a.AssetTypeName == 'Mobile') {
                this.totalMobiles += 1;
              } if (a.AssetTypeName == 'MiFi') {
                this.totalMiFis += 1;
              } if (a.AssetTypeName == 'Desktop') {
                this.totalDesktops += 1;
              } if (a.AssetTypeName == 'Screen') {
                this.totalScreens += 1;
              } if (a.AssetTypeName == 'DataLine') {   // need review
                this.totalDataLines += 1;
              } if (a.AssetTypeName == 'VoiceLine') {
                this.totalVoiceLines += 1;
              } if (a.EmployeeName == null) {
                this.noEmployee += 1;
              } if (a.BranchName == null) {
                this.noBranch += 1;
              } if (a.CompanyName == null) {
                this.noCompany += 1;
              } 
              ;
          });
    }
    onAssetCodePatternValidation(){

    }
    getCodePattern(AssetTypeName?) {
      if(AssetTypeName == 'Laptop' || AssetTypeName == 'Desktop' || AssetTypeName == 'Server' || AssetTypeName == 'Storage' ) {
          this.assetForm.get('astCode').clearValidators();
          this.assetForm.get('astCode').setValidators([Validators.minLength(6), Validators.maxLength(6), Validators.pattern(/^(100)?[0-9]{3}$/)]);
          this.assetForm.get('astCode').updateValueAndValidity();
      } else if(AssetTypeName == 'Mobile' || AssetTypeName == 'MiFi') {
          this.assetForm.get('astCode').clearValidators();
          this.assetForm.get('astCode').setValidators([Validators.minLength(6), Validators.maxLength(6), Validators.pattern(/^(200)?[0-9]{3}$/)]);
          this.assetForm.get('astCode').updateValueAndValidity();
      } else if(AssetTypeName == 'DataLine' || AssetTypeName == 'VoiceLine' ) {
          this.assetForm.get('astCode').clearValidators();
          this.assetForm.get('astCode').setValidators([Validators.minLength(6), Validators.maxLength(6), Validators.pattern(/^(300)?[0-9]{3}$/)]);
          this.assetForm.get('astCode').updateValueAndValidity();
        } else if(AssetTypeName == 'Others') {
          this.assetForm.get('astCode').clearValidators();
          this.assetForm.get('astCode').setValidators([Validators.minLength(6), Validators.maxLength(6), Validators.pattern(/^(400)?[0-9]{3}$/)]);
          this.assetForm.get('astCode').updateValueAndValidity();
      }
    }

    constructor(
        private router: Router,
        private dptSrv: DepartmentService,
        private brnSrv: BranchService,
        private comSrv: CompanyService,
        private shrdSrv: ShareddataService,
        private logSrv: LogsService,
        private astSrv: AssetService,
        private astTypeSrv: AssettypeService,
        private empSrv: EmployeeService,
        private oprSrv: OperatorService,
        private expExcelSrv: ExportexcelService,
        private orderPipe: OrderPipe,
        private fb: FormBuilder,
        private alrtSrv: AlertService,
        private swalSrv: SweetalertService
      ) {
        this.sortedCollection = orderPipe.transform(this.Assets, 'astDescription');


    }
    ngOnInit() {
        this.buildAssetForm();
        this.buildSearchForm();
        this.onGetAllEmployees();
        this.onGetAllDepartments();
        this.onGetAllBranchs();
        this.onGetAllCompanys();
        this.onGetAllAssetsTypes();
        this.onGetAllAssets();
        this.onGetAllOperators();
        this.getCodePattern('Laptop');
          $('.datepicker').datetimepicker({
            format: 'MM/DD/YYYY',    //use this format if you want the 12hours timpiecker with AM/PM toggle
            icons: {
                time: "fa fa-clock-o",
                date: "fa fa-calendar",
                up: "fa fa-chevron-up",
                down: "fa fa-chevron-down",
                previous: 'fa fa-chevron-left',
                next: 'fa fa-chevron-right',
                today: 'fa fa-screenshot',
                clear: 'fa fa-trash',
                close: 'fa fa-remove'
            }
          });
    }

    buildAssetForm(): void {
      this.assetForm = this.fb.group({
        astId: null ,
        astDescription: [null, Validators.required],
        astCode: [null, [Validators.minLength(6), Validators.pattern(/^(100)?[0-9]{3}$/) ]],    // Validators.pattern(/^(100)?[0-9]{3}$/)   this.CodePattern      Validators.maxLength(6),
        astSerialNumber: null,
        astPartNumber: null,
        astDialNumber: null, //  [null, [ Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern(/^(01)?[0-9]{8}$/)]],
        astCircuitNumber: null,
        astPurchaseDate: this.currentDate,
        Charging: 'Business',
        IsScrap: false,
        asttypId: [null, Validators.required],
        empId: [1, Validators.required],
        oprId: null,
        OprAccNumberId: null,
        OperatorRatePlanId: null,
        checkbox:  false,
        assignedToEmp: false,
        AssetTypeName: null,
        AssetTypeCode: null,
        EmployeeName: null,
        FromEmployeeName: "Created",
        ToEmployeeName: null,
        currentUserId: null

      });
    }
     /////////// Filters ////////////////////
    AssetTypeNameIsSelected = false;
    CompanyNameIsSelected = false;
    BranchNameIsSelected = false;
    DepartmentNameIsSelected = false;

    checkTypeFilterSelection(e){
      debugger;
        if(e != ""){
          this.AssetTypeNameIsSelected = true;
        } if(e == ""){
          this.AssetTypeNameIsSelected = false;
        }
    }
    checkCompanyFilterSelection(e){
      debugger;
        if(e != ""){
          this.CompanyNameIsSelected = true;
        } if(e == ""){
          this.CompanyNameIsSelected = false;
        }
    }
    checkBranchFilterSelection(e){
      debugger;
        if(e != "" ){
          this.BranchNameIsSelected = true;
        } if(e == ""){
          this.BranchNameIsSelected = false;
        }
    }
    checkDepartmentFilterSelection(e){
      debugger;
        if(e != "" ){
          this.DepartmentNameIsSelected = true;
        } if(e == ""){
          this.DepartmentNameIsSelected = false;
        }
    }
    buildSearchForm(): void {
            this.searchForm = this.fb.group({
              DepartmentName: new FormControl(''),
              BranchName: new FormControl(''),
              CompanyName: new FormControl(''),
              AssetTypeName: new FormControl('')
            });
    }
    searchFilter(filters: any): void {
      this.loading = true;
      this.astSrv.getAllAssets().subscribe((assets: AssetModel[]) => {
            debugger;
            this.Employees = [];
            this.Assets = assets;

            Object.keys(filters).forEach(key => filters[key] === '' ? delete filters[key] : key);
            const keys = Object.keys(filters);
            const filterEmps = ass => keys.every(key => ass[key] === filters[key]);     
            const asses = this.Assets.filter(filterEmps);
            this.Assets = asses;
            this.loading = false;
            this.onUpdatestatistics();
            this.pageIndex = 1;
      });
    }
    onChangeComId(e) {
      // 
      this.assetForm.get('comId').setValue(e.target.value);
    }
    onChangeBrnId(e) {
      this.assetForm.get('brnId').setValue(e.target.value);
    }
    onChangeOperatorId(e){
      debugger;
      this.assetForm.get('oprId').setValue(e.target.value);
      this.astSrv.GetOperatorPlansByOpId(e.target.value).subscribe((res: OperatorRatePlanModel[])=>{
        debugger;
            this.Plans = res;
      });
      this.astSrv.GetAccountsNumbersByOpId(e.target.value).subscribe((res: OprAccNumberModel[])=>{
              this.Accounts = res;
              debugger;
      });
    }
    onGetAllAssets() {
            this.loading = true;
            this.astSrv.getAllAssets().subscribe((asts: AssetModel[]) => {
              debugger;
              this.loading = false; 
              this.Assets = asts;
              this.temp = asts; 
              
              this.pageIndex = 1;
              this.onUpdatestatistics();
             }, err=>{
              this.alrtSrv.danger('Server Error');
              this.loading = false;
             });
    }
    onGetAllAssetsTypes() {
       //    
            this.astTypeSrv.getAllAssetsTypes().subscribe((astTypes: AssetTypeModel[]) => {
                this.AssetTypes = []; 
                this.AssetTypes = astTypes;
            });
    }
    onGetAllEmployees() {
           this.empSrv.getAllEmployees().subscribe((emps: EmployeeModel[]) => {
              this.Employees = emps;
              emps.forEach(e => {
                    const employee: EmployeeModel = { empId: 0, empFullName: '' };
                    employee.empId = e.empId;
                    employee.empFullName = e.empFullName;
                    if(employee.empFullName != null) {
                      this.EmployeesList.push(employee);
                    }
              });
           });
    }
    onGetAllOperators(){
      this.oprSrv.getAllOperators().subscribe((oprs: OperatorModel[]) => {
        this.Operators = oprs;
       });
    }
    onGetAllCompanys() {
      this.loading = true;
      this.comSrv.getAllCompanys().subscribe((coms: CompanyModel[]) => {
              this.Companys = coms;
       }, error => {
              this.loading = false;
              if(error.message.includes('Http failure response for http://')) {
                this.alrtSrv.danger('Server error');
              }
      });
    }
    onGetAllDepartments() {
          this.dptSrv.getAllDepartments().subscribe((dpts: DepartmentModel[]) => {
            this.Departments = dpts;
           });
    }
    onGetAllBranchs() {
           this.brnSrv.getAllBranchs().subscribe((brns: BranchsModel[]) => {
             this.Branchs = brns;
            });
    }
    onAssignToEmp(e) {
      if(e.target.checked) {
        this.assetForm.controls.assignedToEmp.setValue(true);
      } else if (!e.target.checked) {
        this.assetForm.controls.assignedToEmp.setValue(false);
        this.assetForm.controls.empId.setValue('');
      }
    }
    selectEmployeeEvent(event) {
      this.assetForm.controls['empId'].setValue(event.empId);
      this.assetForm.controls['EmployeeName'].setValue(event.empFullName);
      this.assetForm.controls['ToEmployeeName'].setValue(event.empFullName);
    }
    onFocused(e){
    //
       // do something when input is focused
    }
    onSubmit(status): void {
        
        this.loading = true;
     //   debugger;
        this.shrdSrv.getCurrentUser().subscribe((res: UserModel) =>{
          this.assetForm.get('currentUserId').setValue(res.usrId);
        });
        if (this.assetForm.value.astId == 0) {
                let finalDate = new Date(this.getPRDate.value).toLocaleString();
                this.assetForm.get('astPurchaseDate').setValue(finalDate);
                this.astSrv.addAsset(this.assetForm.value).subscribe((ast: AssetModel) => {
                        this.onGetAllAssets();
                        if (status == 'AddAndClose') {
                            this.assetForm.reset();
                            this.CodeExist = false;
                            this.loading = false;
                            this.alrtSrv.success('Asset Created Successfully');
                            // this.logSrv.sendUserLog('Asset Created Successfully').subscribe(res=>{
                            //   this.logSrv.sendAssetTrackingLog(ast,  "Created", ast.EmployeeName).subscribe(res=>{
                            //   });
                            // });
                        } else if (status == 'AddAndAddAnother') {
                            this.CodeExist = false;
                            this.loading = false;
                            this.alrtSrv.success('Asset Created Successfully');
                            this.assetForm.controls['astCode'].setValue('');
                            // this.logSrv.sendUserLog('Asset Created Successfully').subscribe(res=>{
                            //   debugger;
                            //   this.logSrv.sendAssetTrackingLog(ast,  "Created", ast.EmployeeName).subscribe(res=>{
                            //   });
                            // });
                        } 
                }, err => {
                        this.alrtSrv.danger('Server Error');
                        this.loading = false;
                });

        } else if (this.assetForm.value.astId > 0) {
                this.astSrv.editAsset(this.assetForm.controls.astId.value, this.assetForm.value).subscribe(ast => {
                   debugger;
                   console.log(ast);
                   this.loading = false;
                   this.onGetAllAssets();
                   this.alrtSrv.success('Asset Saved Successfully');
                  // let to = this.getEmployeeName.value;
                  // if(ast){
                  //   this.assetForm.reset();
                  //   this.CodeExist = false;
                  //   this.onGetAllAssets();
                  //   // this.logSrv.sendUserLog('Asset Saved Successfully').subscribe(res=>{
                  //   //     if(this.AssetTemp.EmployeeName != to){
                  //   //       this.logSrv.sendAssetTrackingLog(ast, this.AssetTemp.EmployeeName, to).subscribe(res=>{
                  //   //         this.onGetAllAssets();
                  //   //       });
                  //   //     }
                  //   //     this.onGetAllAssets();
                  //   // });
                  // }
                }, err => {
                  debugger;
                  this.logSrv.sendUserLog( "Server connection Error ( " + err + " )" );
                  this.loading = false;
                });
        }
    }
    IsDialNumberExist() {
      let is = false
      this.Assets.forEach(x=>{ if(x.astDialNumber != '') { is = true } });
      return is;
    }
    IsCircuitNumberExist() {
      let is = false
      this.Assets.forEach(x=>{ if(x.astCircuitNumber != '') { is = true } });
      return is;
    }
    IsSerialNumberExist() {
     // debugger;
      let is = false
      this.Assets.forEach(x=>{ if(x.astSerialNumber != '') { is = true } });
      return is;
    }
    IsPartNumberExist() {
      let is = false
      this.Assets.forEach(x=>{ if(x.astPartNumber != '') { is = true } });
      return is;
    }
    onSelectAssetType(e) {
      
        var index = e.target.options.selectedIndex;
      var assetTypeName = e.target.options[index].label;

      // this.assetForm.reset(); //////////////////////////////////////////////////////
      this.assetForm.controls['astCode'].setValue(null);
      this.assetForm.controls['astSerialNumber'].setValue(null);
      this.assetForm.controls['astPartNumber'].setValue(null);
      this.assetForm.controls['astDialNumber'].setValue(null);
      this.assetForm.controls['astCircuitNumber'].setValue(null);

      this.assetForm.get('asttypId').patchValue(e.target.value);

      this.CodeExist = false;
      this.hideAssetTypeLaptop = false;
      this.hideAssetTypeDesktop = false;
      this.hideAssetTypeServer = false;
      this.hideAssetTypeStorage  = false;
      this.hideAssetTypeMobile = false;
      this.hideAssetTypeVoiceLine = false;
      this.hideAssetTypeDataLine = false;
      this.hideAssetTypeOthers = false;
      this.hideAssetTypeMiFi = false;

      if(assetTypeName == 'Laptop') this.hideAssetTypeLaptop = true;
      if(assetTypeName == 'Desktop') this.hideAssetTypeDesktop = true;
      if(assetTypeName == 'Server') this.hideAssetTypeServer = true;
      if(assetTypeName == 'Storage') this.hideAssetTypeStorage = true;
      if(assetTypeName == 'Mobile') this.hideAssetTypeMobile = true;
      if(assetTypeName == 'MiFi') this.hideAssetTypeMiFi = true;
      if(assetTypeName == 'Others') this.hideAssetTypeOthers = true;
      if(assetTypeName == 'VoiceLine') this.hideAssetTypeVoiceLine = true;
      if(assetTypeName == 'DataLine') this.hideAssetTypeDataLine = true;

     this.assetForm.get('AssetTypeName').setValue(assetTypeName);
     
     this.getCodePattern(assetTypeName);

    }
    onFilterByAssetType(e) {
    //  
        if(e.target.selectedOptions[0].text.toString() == '--All--') {
              this.onGetAllAssets();
        } else {
              //  this.onGetAllAssets();
              let val = e.target.selectedOptions[0].text.toString();

              const value = val.toString().toLowerCase().trim();
         //     
              // get the amount of columns in the table
              const count = Object.keys(this.temp[0]).length;
          //    
              // get the key names of each column in the dataset
              const keys = Object.keys(this.temp[0]);
          //    
              // assign filtered matches to the active datatable
              this.Assets = this.temp.filter(item => {
         //       
                // iterate through each row's column data
                for (let i = 0; i < count; i++) {
                  // check for a match
                  if (
                    (item[keys[i]] &&
                      item[keys[i]]
                        .toString()
                        .toLowerCase()
                        .indexOf(value) !== -1) ||
                    !value
                  ) {
                    // found match, return true to add to result set
                    // console.log(item, 1);
                    return true;
                  }
                }
              });
        }

    }
    onShowAddEdit() {
        this.assetForm.reset();
        this.assetForm.controls['astId'].setValue(0);
        this.assetForm.get('FromEmployeeName').patchValue('Created');
    }
    onGetAssetLog(ast: AssetModel) {
      // let newemp = {empFullName: emp.empFullName, empHRCode: emp.empHRCode, assetsCurrent: JSON.stringify(emp.assetsCurrent)  }
      // this.router.navigate(['/operation/assetmng'], { queryParams: newemp });
      
      let a = {astId: ast.astId, astCode: ast.astCode, astDescription: ast.astDescription, AssetTypeName: ast.AssetTypeName, EmployeeName: JSON.stringify(ast.EmployeeName)  }

      this.router.navigate(['/masterdata/assettrackinglog'], { queryParams: a } );
    }
    onEditAsset(ast) {
        debugger;
        this.AssetTemp = ast;
        this.assetForm.reset();
        this.assetForm.patchValue(ast);
        this.assetForm.get('asttypId').patchValue(ast.asttypId);
        this.assetForm.get('oprId').patchValue(ast.oprId);
        this.assetForm.get('OperatorRatePlanId').patchValue(ast.OperatorRatePlanId);
        this.assetForm.get('OprAccNumberId').patchValue(ast.OprAccNumberId);
        this.assetForm.get('FromEmployeeName').patchValue(ast.EmployeeName);
        this.assetForm.get('ToEmployeeName').patchValue(ast.EmployeeName);
        this.assetForm.get('EmployeeName').patchValue(ast.EmployeeName);
        this.CodeExist = false;
        this.DailNumberExist = false;
        this.DailNumberUnValid = false
        this.SerialNumberExist = false;
        this.SerialNumberUnValid = false;

        this.hideAssetTypeLaptop = false;
        this.hideAssetTypeDesktop = false;
        this.hideAssetTypeServer = false;
        this.hideAssetTypeStorage  = false;
        this.hideAssetTypeMobile = false;
        this.hideAssetTypeVoiceLine = false;
        this.hideAssetTypeDataLine = false;
        this.hideAssetTypeMiFi = false;
        this.hideAssetTypeOthers = false;
  
        if(ast.AssetTypeName == 'Laptop') this.hideAssetTypeLaptop = true;
        if(ast.AssetTypeName == 'Desktop') this.hideAssetTypeDesktop = true;
        if(ast.AssetTypeName == 'Server') this.hideAssetTypeServer = true;
        if(ast.AssetTypeName == 'Storage') this.hideAssetTypeStorage = true;
        if(ast.AssetTypeName == 'Mobile') this.hideAssetTypeMobile = true;
        if(ast.AssetTypeName == 'VoiceLine') this.hideAssetTypeVoiceLine = true;
        if(ast.AssetTypeName == 'DataLine') this.hideAssetTypeDataLine = true;
        if(ast.AssetTypeName == 'MiFi') this.hideAssetTypeDataLine = true;
        if(ast.AssetTypeName == 'Others') this.hideAssetTypeDataLine = true;

        if(ast.empId != null){
          // this.assetForm.get('assignedToEmp').setValue(true);
          // this.getEmployeeId.patchValue(ast.empId);

        } if(ast.IsScrap){
          var ScrapCheckbox = <HTMLInputElement> document.getElementById('ScrapCheckbox');
          ScrapCheckbox.checked = true;
          this.IsScrap = true;
          this.assetForm.get('IsScrap').setValue(true);
        } if(!ast.IsScrap){
          var ScrapCheckbox = <HTMLInputElement> document.getElementById('ScrapCheckbox');
          ScrapCheckbox.checked = false;
          this.IsScrap = false;
          this.assetForm.get('IsScrap').setValue(false);
        }
        this.assetForm.updateValueAndValidity();
    }
    onDeleteAsset(ast: AssetModel) {

      Swal.fire({
        title: '( ' + ast.astCode + ' ) Will be deleted permanently</h4>',
        icon: 'info',
        // html: ' <ul *ngFor=" let a of assets "> <li> a.astCode  </li>   </ul> ',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:  '<i class="fa "></i>Yes Delete It',
        confirmButtonAriaLabel: '',
        cancelButtonText:  '<i class="fa ">Cancel</i>',
        cancelButtonAriaLabel: ''
      }).then(res => {
        if(res.value){
          
          this.astSrv.deleteAsset(ast.astId).subscribe((Assetdlt: AssetModel) => {
            this.onGetAllAssets();
            this.swalSrv.showSwal('basic-success', "Asset with code( " + Assetdlt.astCode + " ) has been deleted successfully ");

            this.logSrv.sendUserLog("( " +  Assetdlt.astCode + "-" + ast.astDescription + " ) Deleted Successfully").subscribe(res=>{
              this.logSrv.sendAssetTrackingLog(Assetdlt, ast.EmployeeName, "Deleted");
            });
            // this.logSrv.sendUserLog( "( " +  Assetdlt.astCode + "-" + ast.astDescription + " ) Deleted Successfully");
            // this.strSrv.sendAssetTrackingLog(Assetdlt, ast.EmployeeName, "Deleted").subscribe(logged=>{
              
           
            // }); 
      
          }, error => {
            this.loading = false;
            if(error.message.includes('Http failure response for http://')){
              this.swalSrv.showSwal('basic-error', " Server connection Error / Data is not updated ");
            }
          });
        }
      })
    }
    onCancel() {
       this.assetForm.reset();
       this.CodeExist = false;
    }
    onSelectAll(e) {
      
      this.SelectedAssets = [];
      if(e.target.checked){
          this.Assets.forEach(val => { 
            val.checkbox = true;
            this.SelectedAssets.push(val);
          });
      } else if(!e.target.checked){
        this.Assets.forEach(val => { val.checkbox = false });
      }
        this.onUpdatestatistics();
    }
    onSelect(e, ast) {
      // 
      // console.log(e);
      if(e.target.checked)
      {
        this.SelectedAssets.push(ast);
        let allChecked = true;
        this.Assets.forEach((asset, index) => {
          var assetItemHTMLelemnt = <HTMLInputElement> document.getElementById('assetItem--' + index);
          if(!assetItemHTMLelemnt.checked) allChecked = false;
          this.onUpdatestatistics();
        });
        if(allChecked) 
        var assetItemALLHTMLelemnt = <HTMLInputElement> document.getElementById("assetItemALL--");
        assetItemALLHTMLelemnt.checked = true;
        // this.onUpdatestatistics();
      }
      else if (!e.target.checked){
        var assetItemALLHTMLelemnt = <HTMLInputElement> document.getElementById("assetItemALL--");
        if(assetItemALLHTMLelemnt.checked) assetItemALLHTMLelemnt.checked = false;
        this.SelectedAssets.filter((asset, selectedIndex) => {
          if (asset.astId === ast.astId) {
            this.SelectedAssets.splice(selectedIndex, 1);
            this.onUpdatestatistics();
          }
        });
      }
      this.onUpdatestatistics();
    }
    onSelectScrap(e){
      if(e.target.checked == true){
        Swal.fire({
          title: '<h4>Assets Will be out of Operation</h4>',
          icon: 'info',
          // html: ' <ul *ngFor=" let a of assets "> <li> a.astCode  </li>   </ul> ',
          showCloseButton: true,
          showCancelButton: true,
          focusConfirm: false,
          confirmButtonText:  '<i class="fa "></i>Yes Proceed',
          confirmButtonAriaLabel: '',
          cancelButtonText:  '<i class="fa "> Cancel</i>',
          cancelButtonAriaLabel: ''
          }).then(res => {
          if(res.value){
            debugger;
            // this.astSrv.getAssetId(this.getAssetId.value).subscribe((a: AssetModel)=>{
            //   debugger;
              this.IsScrap = true;
              this.assetForm.get('IsScrap').setValue(true);
              this.swalSrv.showSwal('basic-success', "Done, Please Save to apply Changes ");
            //  this.swalSrv.showSwal('basic-success', "Asset with code( " + this.assetForm.get('astCode').value + " ) went to scrap successfully ");
              this.logSrv.sendUserLog( "Asset with code( " + this.assetForm.get('astCode').value + " ) went to scrap successfully ");

              // this.logSrv.sendAssetTrackingLog(this.assetForm.value, this.assetForm.get('EmployeeName').value, "Scrap").subscribe(logged=>{

              // }, error => {
              //   this.loading = false;
              //   if(error.message.includes('Http failure response for http://')){
              //     this.swalSrv.showSwal('basic-error', " Server connection Error / Data is not updated ");
              //     this.logSrv.sendUserLog( "Server connection Error ( " + error + " )" );
              //   }
              // });
          }
          })
      } if(e.target.checked == false){
        Swal.fire({
          title: 'Assets Will Back to Operate</h4>',
          icon: 'info',
          // html: ' <ul *ngFor=" let a of assets "> <li> a.astCode  </li>   </ul> ',
          showCloseButton: true,
          showCancelButton: true,
          focusConfirm: false,
          confirmButtonText:  '<i class="fa "></i>Yes Proceed',
          confirmButtonAriaLabel: '',
          cancelButtonText:  '<i class="fa "> Cancel</i>',
          cancelButtonAriaLabel: ''
          }).then(res => {
          if(res.value){
         //   this.astSrv.getAssetId(this.getAssetId.value).subscribe((a: AssetModel)=>{
              this.IsScrap = false;
              this.assetForm.get('IsScrap').setValue(false);
              this.swalSrv.showSwal('basic-success', "Done, Please Save to apply Changes" );
              this.logSrv.sendUserLog( "Asset with code( " + this.assetForm.get('astCode').value + " ) Back to operation successfully ");
          //     this.logSrv.sendAssetTrackingLog(this.assetForm.value, 'Scrap', this.assetForm.get('EmployeeName').value).subscribe(logged=>{
                
          //   //    this.onGetAllAssets();
          //  //   }); 
          // //    this.onGetAllAssets();
          //     }, error => {
          //     this.loading = false;
          //     if(error.message.includes('Http failure response for http://')){
          //       this.swalSrv.showSwal('basic-error', " Server connection Error / Data is not updated ");
          //       this.logSrv.sendUserLog( "Server connection Error ( " + error + " )" );
          //     }
          //     });
          }
          })
      }
   
    }
    onExportExcel() {
      if(this.SelectedAssets.length == 0){
        this.swalSrv.showSwal('basic-info', 'At least one asset must be selected');
      } else{
        this.expExcelSrv.exportAsExcelFile(this.SelectedAssets, 'Assets List');
      }

    }
    onPrintPreviewSelectedAssets() {
      // console.log(ast);
      // 
      // this.bsModaleRef = this.modalService.show(AddeditasstComponent, {initialState: {ast}});
      // this.bsModaleRef.content.onClose = (updated) => {
      //   if (updated) {
      //     this.onGetAllAssets();
      //     console.log('Edit clicked inside');
      //   }
      // };
      // console.log('Edit clicked');
    }
    setOrder(value: string) {
     // 
      if (this.order === value) {
        this.reverse = !this.reverse;
      }
  
      this.order = value;
    }
    onSort(event) {
      // console.log(event);
    }
    onShowHideStatistics() {
      this.showStatistics = !this.showStatistics;
    }
    onShowHideCodeGuide() {
        this.showCodeGuide = !this.showCodeGuide;
    }
    updateFilter(val: any) {
      // console.log(Object.keys(this.temp[0]).length);
      const value = val.toString().toLowerCase().trim();
      // get the amount of columns in the table
      const count = Object.keys(this.temp[0]).length;
      // get the key names of each column in the dataset
      const keys = Object.keys(this.temp[0]);
      // assign filtered matches to the active datatable
      this.Assets = this.temp.filter(item => {
        // iterate through each row's column data
        for (let i = 0; i < count; i++) {
          // check for a match
          if (
            (item[keys[i]] &&
              item[keys[i]]
                .toString()
                .toLowerCase()
                .indexOf(value) !== -1) ||
            !value
          ) {
            // found match, return true to add to result set
            // console.log(item, 1);
            return true;
          }
        }
      });
  
      //Whenever the filter changes, always go back to the first page
    }
    OnCodeChange(e) {
      this.loading = true;
      let assetTypeName = this.getAssetTypeName.value;
      this.getCodePattern(assetTypeName);
      this.CodeExist = false;
      if (e.target.value.length == 6) {
        debugger;
        this.astSrv.isAsssetCodeExist(e.target.value).subscribe(res => {
          debugger;
          this.CodeExist = false;
          if((res && this.AssetTemp.astCode != e.target.value) || (res && this.assetForm.get('astId').value == 0) ){
            debugger;
            this.CodeExist = true;
            this.assetForm.get('astCode').setErrors({'incorrect': true});
            this.assetForm.get('astCode').updateValueAndValidity();
            this.loading = false;
          } else if(!res || (res && this.AssetTemp.astCode == e.target.value)) {
            debugger;
            this.CodeExist = false;
            this.assetForm.get('astCode').setErrors({'incorrect': false});
            this.assetForm.get('astCode').updateValueAndValidity();
            this.loading = false;
          }
          // this.loading = false;
        });
      } else if(e.target.value.length != 6){
        this.getCodePattern(assetTypeName);
        this.loading = false;
      }
    }
    OnSerialNumberChange(e) { 
      debugger;
      this.loading = true;
      if(e.target.value != null && e.target.value.length < 3 ){
        this.SerialNumberExist = false;
        this.SerialNumberUnValid = true;
        this.loading = false;
      } else if(e.target.value.length >= 3){
            this.SerialNumberUnValid = false;
            this.astSrv.GetSerialNumber(e.target.value).subscribe((num: string) => {
              debugger;
            if((num && this.AssetTemp.astSerialNumber != num) || (num && this.assetForm.get('astId').value == 0 )){
              this.SerialNumberExist = true;
            } if(num == '' || num && this.AssetTemp.astSerialNumber == num){
              this.SerialNumberExist = false;
            }
            this.loading = false;
          });
      }
    }

    
    OnDailNumberChange(e) { 
      debugger;
      this.loading = true;
      if(e.target.value != null && e.target.value.length != 11 ){
        this.DailNumberExist = false;
        this.DailNumberUnValid = true;
        this.loading = false;
      } else if(e.target.value.length == 11){
            this.DailNumberUnValid = false;
            this.astSrv.GetDailNumber(e.target.value).subscribe((num: string) => {
              debugger;
            if((num && this.AssetTemp.astDialNumber != num) || (num && this.assetForm.get('astId').value == 0 )){
              this.DailNumberExist = true;
            } if(num == null || num && this.AssetTemp.astDialNumber == num){
              this.DailNumberExist = false;
            }
            this.loading = false;
          });
      }
    }
    onBringExistingAsset() {
      this.astSrv.GetAsssetByCode(this.assetForm.get('astCode').value).subscribe(res => {
        debugger;
      });
    //  this.astSrv.GetAsssetByCode(this.assetForm.get('astCode').value).subscribe(res=>{
    //            console.log(res);
    //  });
    // //  .subscribe(re=>{
    // //         debugger;
    // //         console.log(re);
    // //   });
    //   debugger;
      // this.astSrv.GetAsssetByCode(existingCode).subscribe((as: any) => {
      //   debugger;
      //   console.log(as);
      //   this.assetForm.patchValue(as);
      // });
    }
    ngAfterViewInit(): void {
    //  
      // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
      // Add 'implements AfterViewInit' to the class.
      fromEvent(this.search.nativeElement, 'keydown')
        .pipe(
          debounceTime(550),
          map(x => x['target']['value'])
        )
        .subscribe(value => {
          
          this.updateFilter(value);
        });
    }
    onChangeRowsPerPage(event) {
      this.pageSize = event.target.value;
      this.pageIndex = 1;
    }
    onDeleteAllSellected() {

      if(this.SelectedAssets.length == 0) {
        this.swalSrv.showSwal('basic-info', 'At least one asset must be selected');

      } else {
        let ids = [];
        this.SelectedAssets.forEach(em => {
          ids.push(em.astId);
        });

        Swal.fire({
          title: this.SelectedAssets.length + 'Assets Will be deleted permanently</h4>',
          icon: 'info',
          // html: ' <ul *ngFor=" let a of assets "> <li> a.astCode  </li>   </ul> ',
          showCloseButton: true,
          showCancelButton: true,
          focusConfirm: false,
          confirmButtonText:  '<i class="fa "></i>Yes Delete',
          confirmButtonAriaLabel: '',
          cancelButtonText:  '<i class="fa "> Cancel</i>',
          cancelButtonAriaLabel: ''
        }).then(res => {
          if(res.value){
            this.loading = true;
            this.astSrv.deleteSelectedAssets(ids).subscribe((ast: AssetModel[]) => {
              this.onUpdatestatistics();
              this.loading = false;
              this.swalSrv.showSwal('basic-success', "( " + ast.length + " ) Assets have been deleted successfully ");
              this.logSrv.sendUserLog( "( " +  ast.length + " )Deleted Successfully");
              this.SelectedAssets = [];
              this.onGetAllAssets();
            }, error => {
              this.loading = false;
              if(error.message.includes('Http failure response for http://')){
                this.swalSrv.showSwal('basic-error', " Server connection Error / Data is not updated ");
                this.logSrv.sendUserLog( "Server connection Error ( " + error + " )" );
              }
            });

          }

        })

      }
    }

    get getAssetForm() {
      return this.assetForm.value.controls as FormGroup;
    }
    get getAssetTypeName() {
      return this.assetForm.get('AssetTypeName') as FormControl;
    }
    get getEmployeeName() {
      return this.assetForm.get('EmployeeName') as FormControl;
    }
    get getAssetTypeId() {
      return this.assetForm.get('asttypId') as FormControl;
    //  return this.assetForm.controls.AssetTypes.get('asttypName') as FormControl;
    }
    get getDescription() {
      return this.assetForm.get('astDescription') as FormControl;
    }
    get getSN() {
      return this.assetForm.get('astSerialNumber') as FormControl;
    }
    get getPN() {
      return this.assetForm.get('astPartNumber') as FormControl;
    }
    // get getCode() {
    //   return this.assetForm.get('astCode') as FormControl;
    // }
    get getDN() {
      return this.assetForm.get('astDialNumber') as FormControl;
    }
    get getCN() {
      return this.assetForm.get('astCircuitNumber') as FormControl;
    }
    get getAssetId() {
      return this.assetForm.get('astId') as FormControl;
    }
    get getastCode() {
       return this.assetForm.get('astCode') as FormControl;
    }
    get getDailNumber() {
      return this.assetForm.get('astDialNumber') as FormControl;
   }
    get getEmployeeId() {
      return this.assetForm.get('empId') as FormControl;
    }
    get getBranchId() {
      return this.assetForm.get('brnId') as FormControl;
    }
    get getCompanyId() {
      return this.assetForm.get('comId') as FormControl;
    }
    get getPRDate() {
      return this.assetForm.get('astPurchaseDate') as FormControl;
    }

}
