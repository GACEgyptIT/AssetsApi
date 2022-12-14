import { Component, OnInit, AfterViewInit, ViewChild, TemplateRef, Input } from '@angular/core';
import { AssetService} from '../asset/services/asset.service';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { EmployeeService } from '../employee/services/employee.service';
import { EmployeeModel } from 'app/shared/models/EmployeeModel';
import { OrderPipe } from "ngx-order-pipe";
import { fromEvent } from "rxjs";
import { map, debounceTime } from 'rxjs/operators';
import { ExportexcelService } from '../../shared/services/exportexcel.service';
import { BranchsModel } from 'app/shared/models/BrachModel';
import { BranchService } from '../branch/services/branch.service';
import { CompanyModel } from 'app/shared/models/CompanyModel';
import { CompanyService } from '../company/services/company.service';
import { PositionModel } from 'app/shared/models/PositionModel';
import { GenaricEmailModel } from 'app/shared/models/GenaricEmailModel';
import { GenaricemailService } from '../genaricemail/service/genaricemail.service';
import { DepartmentService } from '../department/services/department.service';
import { DepartmentModel } from 'app/shared/models/DepartmentModel';
import { PositionService } from '../position/service/position.service';
import { AlertService } from 'ngx-alerts';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { UploadimgComponent } from 'app/operation/uploadimg/uploadimg.component';
import { ImageCropperComponent, CropperSettings } from "ngx-img-cropper";
import { Router } from '@angular/router';
// import swal from 'sweetalert2';
import Swal from 'sweetalert2';
import { DomainModel } from 'app/shared/models/DomainModel';
import { DomainService } from '../domain/services/domain.service';
import { AppstorageService } from 'app/shared/services/appstorage.service';
import { SweetalertService } from 'app/shared/services/sweetalert.service';
import { UserModel } from 'app/shared/models/UserModel';
import { EmailService } from 'app/shared/services/email.service';
import { ShowadaccountsService } from './showadaccounts/services/showadaccounts.service';
import { ADArchiveAccModel } from 'app/shared/models/ADArchiveAccModel';
import { AssetModel } from 'app/shared/models/AssetModel';
import { LogsService } from 'app/shared/services/logs.service';
import { ShareddataService } from 'app/shared/services/shareddata.service';

declare var $: any;

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, AfterViewInit {

  searchForm: FormGroup;
  public loading = false;
  showEmailDetails = false
  totalEmplyees: number = 0;
  noHrCode: number = 0; noDepartment: number = 0;  noCompany: number = 0;  noBranch: number = 0;
  newEmplyees: number = 0;
  selectedEmployess = 0;
  EmployeeActive = true;
  CodeExist = false;
  CodePatternNotValid = false;
  EmployeeTemp: any = {};
  EmpTemp: EmployeeModel = {};
  employeeForm: FormGroup;
  fullNameKeyword = 'empFullName';
  @ViewChild('search') search: any;
  public temp: EmployeeModel[] = [];
  public EmployeesList: EmployeeModel[] = [];
  public Employees: EmployeeModel[] = [];
  public Positions: PositionModel[] = [];
  public Gemails: GenaricEmailModel[] = [];
  public ArchiveEmails: ADArchiveAccModel[] = [];
  public Departments: DepartmentModel[] = [];
  public Domains: DomainModel[] = [];
  public columns: Array<object>;
  pageSize: number = 5;
  pageIndex: number = 1;
  order: string = "info.name";
  reverse: boolean = false;
  sortedCollection: any[];
  SelectedEmployees: EmployeeModel[] = [];
  Branchs: BranchsModel[] = [];
  Companys: CompanyModel[] = [];
  date: Date = new Date();
  defaulProfiletImg: string;

  // AddUserLog(action: string) {
  //   this.strSrv.sendUserLog(action).subscribe(res=>{
  //   });
  // }

    /////////////////////////////////////////////////////////////// constructor()  ngOnInit()  //////////////////////////////////////////////////////////////////////////
    constructor(
                private showSrv: ShowadaccountsService,
                private shrdSrv: ShareddataService,
                private emlSrv: EmailService,
                private swalSrv: SweetalertService,
                private logSrv: LogsService,
                private astSrv: AssetService,
                private gemailSrv: GenaricemailService,
                private dptSrv: DepartmentService,
                private posSrv: PositionService,
                private empSrv: EmployeeService,
                private brnSrv: BranchService,
                private domSrv: DomainService,
                private comSrv: CompanyService,
                private expExcelSrv: ExportexcelService,
                private orderPipe: OrderPipe,
                private fb: FormBuilder,
                private alertService: AlertService,
                private modalService: BsModalService,
                private router: Router
      ) { 

        this.employeeForm = this.fb.group({
          empId: null,
          empHRCode: [null, [ Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
          empFirstName: null,
          empSecondName: null,
          empLastName: null,
          empFullName: [null, Validators.required],
          accountName: null , 
          empAddress: null,
          empBirhtday:  null,
          empGender: Date(),
          comId: null,
          dptId: null,
          brnId: null,
          posId: null,
          directMngId: null,
          DirectMngName: null,
          mailCheckBox: false,
          EmployeeActive: true,
          empExt: null,
          empPri: null,
          empMobile0: null,
          empMobile1: null,
          empMobile2: null,
          empIndividualEmail0:null,
          empIndividualEmail1:null,
          empIndividualEmail2: null,
          empIndividualEmail3: null,
          emailsINDIV: this.fb.array([]),
          emailsGEN: this.fb.array([]),
          emailsARCH: this.fb.array([]),
          EmpGmails: this.fb.array([]),
          EmpArchives: this.fb.array([]),
          EmpImg: null,
        });

        this.onGetAllEmployees();
         //this.onGetAllEmployeesNamesOnly();
        this.onGetAllPositions();
        this.onGetAllGEmails();
        this.onGetAllArchiveEmails();
        this.onGetAllDepartments();
        this.onGetAllCompanys();
        this.onGetAllBranchs();
        this.onGetAllDomains();

        this.sortedCollection = orderPipe.transform(this.Employees, 'astDescription');
        // console.log('sortedCollection....' , this.sortedCollection);
        // for (let i = 1; i <= this.Employees.length; i++) {
        //   this.Employees.push();
        // }

        this.cropperSettings = new CropperSettings();
        this.cropperSettings.noFileInput = true;
        this.cropperSettings.width = 50;
        this.cropperSettings.height = 50;
        this.cropperSettings.croppedWidth = 150;
        this.cropperSettings.croppedHeight = 150;
        this.cropperSettings.canvasWidth = 250;
        this.cropperSettings.canvasHeight = 300;

    }
    ngOnInit() {
      this.buildSearchForm();
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

      /////////// Filters ////////////////////
    buildSearchForm(): void {
      this.searchForm = this.fb.group({
        DepartmentName: new FormControl(''),
        BranchName: new FormControl(''),
        CompanyName: new FormControl('')
      });
    }
    searchFilter(filters: any): void {
      this.loading = true;
      this.empSrv.getAllEmployeesWithAssets().subscribe((employees: EmployeeModel[]) => {
            debugger;
            this.Employees = [];
            this.Employees = employees;

            Object.keys(filters).forEach(key => filters[key] === '' ? delete filters[key] : key);
            const keys = Object.keys(filters);
            const filterEmps = invoice => keys.every(key => invoice[key] === filters[key]);     
            const emps = this.Employees.filter(filterEmps);
            this.Employees = emps;
            this.loading = false;
            this.onUpdatestatistics();
            this.pageIndex = 1;
      });
    }

    /////////////////////////////////////////////////////////////   Email Section  ///////////////////////////////////////////////////
    onAddIndividualEmail(indivCtl, status: string, e?) {
      debugger;
      let lnth = indivCtl.length;
      if(lnth >= 4 && status == 'onAdd') {
        this.alertService.danger('Maximum Individual Emails are 4');
      } else if(status == 'onEdit') {
        let indivCtlArr = <FormArray>this.employeeForm.controls.emailsINDIV;
        indivCtl.forEach(e  =>{
            if(e.emailAddress != null) { indivCtlArr.push(this.fb.group({emailAddress: e.emailAddress })); }
          });
      } else {
        let fName = this.employeeForm.get('empFirstName').value;
        let lName = this.employeeForm.get('empLastName').value;
        let domName = e.target.selectedOptions[0].text.toString();
        if(fName == null ) {
          fName = "FirstName";
        }
        if(lName == null) {
          lName = "LastName";
        }
        if(domName != "-- Add Individual Email --") {
          let fullemail = fName.trim() + "." + lName.trim() + domName;
          indivCtl.push(  this.fb.group({  emailAddress: [ fullemail , [Validators.required, Validators.email, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]]  }));
        }
        if(domName == "-- Add Individual Email --") { 
          domName = "@DomainName.com";
          let fullemail = fName + "." + lName.trim() + domName.trim(); 
          indivCtl.push(  this.fb.group({  emailAddress:  [ fullemail , [Validators.required, Validators.email, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]]  })); 
        }
      }
    }
    onAddGenaricEmail(emailsGENCtrl, getEmpGmailsCtl, status: string) {
            let lnth = emailsGENCtrl.length;
            if(lnth >= 6 && status == 'onAdd') {
              this.alertService.danger('Maximum Individual Emails are 4');
              } else if(status == 'onEdit') {
              let genCtl = <FormArray>this.employeeForm.controls.emailsGEN;
              genCtl.removeAt(0);
              genCtl.reset();
              emailsGENCtrl.forEach(e  =>{
                    genCtl.push(this.fb.group({genEmailId: e.genEmailId, genEmailAddress: e.genEmailAddress}));
                });
                let empgenCtl = <FormArray>this.employeeForm.controls.EmpGmails;
                empgenCtl.removeAt(0);
                empgenCtl.reset();
                emailsGENCtrl.forEach(e  =>{
                  empgenCtl.push(this.fb.group({EmpGmailId: 0, empId: 0, genEmailId: e.genEmailId}));
              });
            } else {
              emailsGENCtrl.push(this.fb.group({genEmailId: 0, genEmailAddress: []}));
              getEmpGmailsCtl.push(this.fb.group({EmpGmailId: 0, empId: 0, genEmailId: 0}));
      }
    }
    onAddArchiveEmail(emailsARCCtrl, getEmpArchivesCtl, status: string) {
        let lnth = emailsARCCtrl.length;
        if(lnth >= 6 && status == 'onAdd') {
          this.alertService.danger('Maximum Archives Emails are 6');
          } else if(status == 'onEdit') {
          let archCtl = <FormArray>this.employeeForm.controls.emailsARCH;
          archCtl.removeAt(0);
          archCtl.reset();
          emailsARCCtrl.forEach(e  =>{
                archCtl.push(this.fb.group({ADArchiveAccountId: e.ADArchiveAccountId, archName: e.archName}));
            });
            let emparchCtl = <FormArray>this.employeeForm.controls.EmpArchives;
            emparchCtl.removeAt(0);
            emparchCtl.reset();
            emailsARCCtrl.forEach(e  =>{
              emparchCtl.push(this.fb.group({EmpArchAccountId: 0, empId: 0, ADArchiveAccountId: e.ADArchiveAccountId}));
          });
        } else {
          emailsARCCtrl.push(this.fb.group({ADArchiveAccountId: 0, archName: []}));
          getEmpArchivesCtl.push(this.fb.group({EmpArchAccountId: 0, empId: 0, ADArchiveAccountId: 0}));
  }

    }
    deleteIndividualEmail(index) {
      let control = <FormArray>this.employeeForm.controls.emailsINDIV;
      control.removeAt(index);
    }
    deleteGenaricEmail(index) {
      let control = <FormArray>this.employeeForm.controls.emailsGEN;
      control.removeAt(index);
      let empGmailCtl = <FormArray>this.employeeForm.controls.EmpGmails;
      empGmailCtl.removeAt(index);
    }
    deleteArchiveEmail(index) {
      let control = <FormArray>this.employeeForm.controls.emailsARCH;
      control.removeAt(index);
      let emparchCtl = <FormArray>this.employeeForm.controls.EmpArchives;
      emparchCtl.removeAt(index);
    }
   
    setEmails() { 
      // var mailCheckBox = <HTMLInputElement> document.getElementById('mailCheckBox');
      // mailCheckBox.checked = false;
      let indivCtl = <FormArray>this.employeeForm.controls.emailsINDIV;
      let genCtl = <FormArray>this.employeeForm.controls.emailsGEN;
      let empGmailsCtl = <FormArray>this.employeeForm.controls.EmpGmails;
      let archCtl = <FormArray>this.employeeForm.controls.emailsARCH;
      let emparchCtl = <FormArray>this.employeeForm.controls.EmpArchives;

      this.employeeForm.setControl('emailsINDIV', this.fb.array([]));
      this.employeeForm.setControl('emailsGEN', this.fb.array([]));
      this.employeeForm.setControl('EmpGmails', this.fb.array([]));
      this.employeeForm.setControl('emailsARCH', this.fb.array([]));
      this.employeeForm.setControl('EmpArchives', this.fb.array([]));

      this.employeeForm.controls.emailsINDIV.value.forEach((x, index) => {
          indivCtl.push(this.fb.group({
          emailAddress: x.emailAddress
        }));  // 
      });
      this.employeeForm.controls.emailsGEN.value.forEach((x, index) => {
          genCtl.push(this.fb.group({
          genEmailId: x.genEmailId,
          genEmailAddress: x.genEmailAddress
        }));
      });
      this.employeeForm.controls.EmpGmails.value.forEach((x, index) => {
          empGmailsCtl.push(this.fb.group({
          EmpGmailId: x.EmpGmailId,
          empId: x.empId,
          genEmailId: x.genEmailId
        }));
      });
      this.employeeForm.controls.emailsARCH.value.forEach((x, index) => {
          archCtl.push(this.fb.group({
          ADArchiveAccountId: x.ADArchiveAccountId,
          archName: x.archName
        }));
      });
      this.employeeForm.controls.EmpArchives.value.forEach((x, index) => {
          emparchCtl.push(this.fb.group({
          EmpArchAccountId: x.EmpArchAccountId,
          empId: x.empId,
          ADArchiveAccountId: x.ADArchiveAccountId
        }));
      });
    }
    onSelectGenaricEmail(index, event) {
     
      let genEmalCtl = <FormArray>this.getGenaricEmailsForm.at(index);
      genEmalCtl.controls['genEmailId'].setValue(event.genEmailId);
      genEmalCtl.controls['genEmailAddress'].setValue(event.genEmailAddress);

      let empGmailsCtl = <FormArray>this.getEmpGmailsForm.at(index);
      empGmailsCtl.controls['empId'].setValue(this.getEmployeeForm.empId.value);
      empGmailsCtl.controls['genEmailId'].setValue(event.genEmailId);     
    
    }
    onSelectArchiveEmail(index, event) {
      
       let archEmalCtl = <FormArray>this.getArchiveEmailsForm.at(index);
       archEmalCtl.controls['ADArchiveAccountId'].setValue(event.ADArchiveAccountId);
       archEmalCtl.controls['archName'].setValue(event.archName);
 
       let empArchivesCtl = <FormArray>this.getEmpArchivesForm.at(index);
       empArchivesCtl.controls['empId'].setValue(this.getEmployeeForm.empId.value);
       empArchivesCtl.controls['ADArchiveAccountId'].setValue(event.ADArchiveAccountId);
    }
    onGetAllEmployees() {
            this.loading = true;
            this.empSrv.getAllEmployeesWithAssets().subscribe((emps: EmployeeModel[]) => { 
              debugger ;
                    this.Employees = emps;
                    this.temp = emps; 
                    this.pageIndex = 1;
                    this.loading = false;
                    emps.forEach(e=>{
                        let em = new EmployeeModel();
                        em.empId = e.empId;
                        em.empFullName = e.empFullName;
                        this.EmployeesList.push(em);
                    })
                    this.onUpdatestatistics(); 
             }, error => {
                    this.loading = false;
                    if(error.message.includes('Http failure response for http://')) {
                      this.alertService.danger('Server Error');
                    }
            });
    }
    onGetAllPositions() {
            this.posSrv.getAllpositions().subscribe((poss: PositionModel[]) => {
                this.Positions = poss;
            });
    }
    onGetAllGEmails() {
        //   
           this.gemailSrv.getAllGenaricemails().subscribe((gmails: GenaricEmailModel[]) => {
         //         
               this.Gemails = gmails;
     
            });
    }
    onGetAllArchiveEmails() {
          this.showSrv.getAllArchives().subscribe((arcs: ADArchiveAccModel[]) => {
             this.ArchiveEmails = arcs;
          });
    }
    onGetAllCompanys() {
      this.loading = true;
      this.comSrv.getAllCompanys().subscribe((coms: CompanyModel[]) => {
              this.Companys = coms;
       }, error => {
              this.loading = false;
              if(error.message.includes('Http failure response for http://')) {
                this.alertService.danger('Server error');
              }
      });
    }
    onGetAllDepartments() {
     //  
          this.dptSrv.getAllDepartments().subscribe((dpts: DepartmentModel[]) => {
       //    
            this.Departments = dpts;
           
           });
    }
    onGetAllBranchs() {
      //  
           this.brnSrv.getAllBranchs().subscribe((brns: BranchsModel[]) => {
        //    
             this.Branchs = brns;
            
            });
    }
    onGetAllDomains() {
      //  
           this.domSrv.getAllDomains().subscribe((doms: DomainModel[]) => {
        //    
             this.Domains = doms;
            
            });
    }

    ////////////////////////////////////////////////////////////  Create New Employee Functions  ////////////////////////////////////////////////////////////////
    status= '';
    setStatus(st){
      this.status = st;
    }
    updateEmployeesObj(e){
      let emp = this.Employees.find(e);
      if(emp == null){
          this.Employees.push(e);
          this.temp.push(e);
          let em = new EmployeeModel();
          em.empId = e.empId;
          em.empFullName = e.empFullName;
          this.EmployeesList.push(e);
          debugger
      } else if(emp){
          this.Employees.splice(emp.empId);
          this.temp.splice(emp.empId);
          this.Employees.push(e);
          this.temp.push(e);
          let em = new EmployeeModel();
          em.empId = e.empId;
          em.empFullName = e.empFullName;
          this.EmployeesList.push(e);
          debugger
      }
    }
    onSubmit(): void {
         debugger;
         let indivCtl = <FormArray>this.employeeForm.controls.emailsINDIV;
         indivCtl.value.forEach((mail, index) => {

          if(index == 0) { this.employeeForm.get('empIndividualEmail0').setValue(mail.emailAddress); }
          if(index == 1) { this.employeeForm.get('empIndividualEmail1').setValue(mail.emailAddress); }
          if(index == 2) { this.employeeForm.get('empIndividualEmail2').setValue(mail.emailAddress); }
          if(index == 3) { this.employeeForm.get('empIndividualEmail3').setValue(mail.emailAddress); }
        });

        if (this.employeeForm.value.empId == 0) {
                this.loading = true;
                this.empSrv.addEmployee(this.employeeForm.value).subscribe((EmployeeAdded: EmployeeModel) => {

                      this.onGetAllEmployees();
                      this.onUpdatestatistics();
                  if (this.status == 'AddAndClose') {
                      this.employeeForm.reset();
                      this.alertService.success('Created Successfully');
                      this.logSrv.sendUserLog( "( " +  EmployeeAdded.empFullName + " ) Employee Successfully");
                  } else if (this.status == 'AddAndAddAnother') {
                      this.employeeForm.get('empHRCode').patchValue('');
                      this.alertService.success('Created Successfully');
                      this.logSrv.sendUserLog( "( " +  EmployeeAdded.empFullName + " ) Employee Successfully");
                  };
                      this.CodeExist = false;
                      this.loading = false;
                }, error => {
                  this.loading = false;
                  if(error.message.includes('Http failure response for http://')) {
                    this.logSrv.sendUserLog( "( " +  error + " ) Http error");
                    this.alertService.danger('Server error');
                  }
                });
                this.loading = false;
        } else if (this.employeeForm.value.empId > 0) {
          
                this.empSrv.editEmployee(this.employeeForm.value.empId, this.employeeForm.value).subscribe((EmployeeAdded: EmployeeModel) => {
                  debugger;
                      this.onGetAllEmployees();
                  //  this.IsHRCodeExist(this.employeeForm.get('empHRCode').value);
                      this.employeeForm.reset();
                      this.employeeForm.get('empId').patchValue(null);
                //    this.IsHRCodeExist(this.employeeForm.get('empHRCode').value);
                      this.CodeExist = false;
                      this.alertService.success('Saved Successfully');
                      this.onUpdatestatistics();
                      this.logSrv.sendUserLog( "( " +  EmployeeAdded.empFullName + " ) Saved Successfully");
                }, error => {
                      this.loading = false;
                      if(error.message.includes('Http failure response for http://')) {
                        this.alertService.danger('Server error');
                      }
                });
         
        }
        this.loading = false;  //test
    }
    onUpdatestatistics() {
          // 
          this.totalEmplyees = 0;
          this.noHrCode = 0;
          this.noBranch = 0;
          this.noDepartment = 0;
          this.noCompany = 0;
          this.newEmplyees = 0;
          this.selectedEmployess = 0;
          this.selectedEmployess = this.SelectedEmployees.length;
          this.totalEmplyees = this.Employees.length;
          this.Employees.forEach(e => {
              // 
              if(e.empHRCode == "No-Hr-Code"){
                this.noHrCode += 1;
              } if (e.DepartmentName == null) {
                this.noDepartment += 1;
              } if (e.BranchName == null) {
                this.noBranch += 1;
              } if (e.CompanyName == null) {
                this.noCompany += 1;
              };
          });
    }
    onFillFullName(){
      let fName = this.employeeForm.get('empFirstName').value;
      let sName = this.employeeForm.get('empSecondName').value;
      let lName = this.employeeForm.get('empLastName').value;
      if(fName == null ) {fName = "FirstName";}
      if(sName == null ) {sName = "SecondtName";}
      if(lName == null ) {lName = "LastName";}
      const fullName = fName + " " + sName +" " + lName;
      
      this.employeeForm.get('empFullName').setValue(fullName);
    }
    onChangeEmpGender(e) {
      // 
      this.employeeForm.get('empGender').setValue(e.target.value);
    }
    onChangeCompanyId(e) {
      // 
      this.employeeForm.get('comId').setValue(e.target.value);
    }
    onChangeDepartmentId(e) {
      // 
      this.employeeForm.get('dptId').setValue(e.target.value);
    }
    onChangeBranchId(e) {
      // 
      this.employeeForm.get('brnId').setValue(e.target.value);
    }
    onChangePositionId(e) {
      // 
      this.employeeForm.get('posId').setValue(e.target.value);
    }
    //////////////////////////////////////////////////////////////  Profile Picture Upload ////////////////////////////////////////////////////
     @Input() name: string;
    cropperSettings: CropperSettings;  
    // imageCropData: any;
    @ViewChild('cropper', undefined)
    cropper:UploadimgComponent;
    myFile: File;
    employeeImg: string;

    onChangeChangeProfileImg(event) {
        
        let me = this;
        
        let file = event.target.files[0];
        let reader = new FileReader();
        
        reader.readAsDataURL(file);
        reader.onload = () => {

          this.employeeForm.get('EmpImg').setValue(reader.result);
        };
        reader.onerror = function (error) {
        };
    }
    setImage(image: any) {
        // 
        throw new Error("Method not implemented.");
    }
    @ViewChild('fileInput') fileInput;
      
    onUploadEmployeeImage(fd) {
        this.empSrv.uploadEmplyeeImage(fd).subscribe(res => {
        });
    }
    IsHRCodeExist(e) { 
    debugger;
    if(e.target.value != null && e.target.value.length != 4 ){
      this.CodePatternNotValid = true;
      this.CodeExist = false;
    } else if(e.target.value.length == 4){
      this.CodePatternNotValid = false;
          this.empSrv.GetEmployeeByCode(e.target.value).subscribe((code: string) => {
            debugger;
          if((code && this.EmpTemp.empHRCode != code) || (code && this.employeeForm.get('empId').value == 0 )){
            this.CodeExist = true;
          } if(code == null || code && this.EmpTemp.empHRCode == code){
            this.CodeExist = false;
          }
        });
    }
    }
    onSelectEmployeeType(e) {
      this.employeeForm.controls['empId'].setValue(null);
    }
    onFilterByEmployeeType(e) {
        if(e.target.selectedOptions[0].text.toString() == '--All--') {
          debugger;
              // this.onGetAllEmployees();
        } else {
              //  this.onGetAllEmployees();
              let val = e.target.selectedOptions[0].text.toString();
              // 
              // console.log(Object.keys(this.temp[0]).length);
              const value = val.toString().toLowerCase().trim();
              // 
              // get the amount of columns in the table
              const count = Object.keys(this.temp[0]).length;
              // 
              // get the key names of each column in the dataset
              const keys = Object.keys(this.temp[0]);
              // 
              // assign filtered matches to the active datatable
              this.Employees = this.temp.filter(item => {
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
        this.employeeForm.reset();
        this.employeeForm.controls['empId'].setValue(0);
        this.setEmails();
        this.showEmailDetails = false;
      
    }
    onEditEmployee(e: EmployeeModel) {
      debugger;
      this.empSrv.GetEmployeeById(e.empId).subscribe((emp: EmployeeModel) => {
        this.EmpTemp = emp;
        this.employeeForm.patchValue(emp);
        
        this.employeeForm.get('comId').setValue(emp.comId);
        this.employeeForm.get('brnId').setValue(emp.brnId);
        this.employeeForm.get('dptId').setValue(emp.dptId);
        this.employeeForm.get('posId').setValue(emp.posId);
        this.employeeForm.get('EmpImg').setValue(emp.EmpImg);
        this.employeeForm.setControl('emailsINDIV', this.fb.array([]));
        this.employeeForm.setControl('emailsGEN', this.fb.array([]));
        this.employeeForm.setControl('EmpGmails', this.fb.array([]));
        this.employeeForm.setControl('emailsARCH', this.fb.array([]));
        this.employeeForm.setControl('EmpArchives', this.fb.array([]));
        debugger;
        this.onAddIndividualEmail(emp.emailsINDIV, 'onEdit');
        this.onAddGenaricEmail(emp.emailsGEN, emp.EmpGmails , 'onEdit');
        this.onAddArchiveEmail(emp.emailsARCH, emp.EmpArchives , 'onEdit');
        this.showEmailDetails = true; 

        if(emp.emailsARCH.length > 0 || emp.emailsGEN.length > 0 || (emp.emailsINDIV[0].emailAddress != null || emp.emailsINDIV[1].emailAddress != null ||emp.emailsINDIV[2].emailAddress != null ||emp.emailsINDIV[3].emailAddress != null )) {
          this.employeeForm.get('mailCheckBox').patchValue(true);
        } else {
          this.employeeForm.get('mailCheckBox').patchValue(false);
        }

        var EmployeeActiveBox = <HTMLInputElement> document.getElementById('EmployeeActive');
        if(emp.EmployeeActive == true){
          EmployeeActiveBox.checked = true;
          this.EmployeeActive = true;
        } if(emp.EmployeeActive == false){
          EmployeeActiveBox.checked = false;
          this.EmployeeActive = false;
        }

      });
    }
    // options = {
    //   words: ["chuck", "norris", "vs", "keanu", "reeves"]
    // }
    onRegisterEmployee(emp){
        debugger
        this.router.navigate(['/users/user'], { queryParams: emp });
    }
    emailsToBeCanceled: [] = [];
    currentuser: string;
    onActivate(e){
      if(!e.target.checked){
          //
          Swal.fire({
          title: 'Employee Will be Disabled</h4>',
          icon: 'info',
          html:  '<span style="color= red"> A ticket will be oppened for attached emails accounts </span>',        // ' <ul *ngFor=" let a of assets "> <li> a.astCode  </li>   </ul> ',
          showCloseButton: true,
          showCancelButton: true,
          focusConfirm: false,
          confirmButtonText:  '<i class="fa "></i>Yes Disable',
          confirmButtonAriaLabel: '',
          cancelButtonText:  '<i class="fa "> Cancel</i>',
          cancelButtonAriaLabel: ''
          }).then(res => {
          if(res.value){
                  // let usr =  this.shrdSrv.getCurrentUser();
                  this.empSrv.changeEmployeeActivation(this.getEmployeeId.value).subscribe((emp: EmployeeModel)=>{

                  if(!emp.EmployeeActive){
                    
                //    this.sendEmail(emp);
                  //   this.emlSrv.sendEmailEmployeeActivation(emp).subscribe(res => {
                  // //     
                  //   });
                    
                    this.EmployeeActive = false;
                    this.employeeForm.get('EmployeeActive').setValue(false);
                    this.swalSrv.showSwal('basic-success', " Employee ( " + emp.empFullName + " ) Disabled successfully ");
                    this.logSrv.sendUserLog( " Employee ( " + emp.empFullName + " ) Disabled successfully  ");
              }
              debugger;
              this.onGetAllEmployees();
            }, error => {
                  
                  this.loading = false;
                  if(error.message.includes('Http failure response for http://')){
                    this.swalSrv.showSwal('basic-error', " Server connection Error / Data is not updated ");
                    this.logSrv.sendUserLog( "Server connection Error ( " + error + " )" );
              }
            });
  
          }
  
          })
      } else {
        
        Swal.fire({
          title: 'Employee Will be Enabled</h4>',
          icon: 'info',
          // html: ' <ul *ngFor=" let a of assets "> <li> a.astCode  </li>   </ul> ',
          showCloseButton: true,
          showCancelButton: true,
          focusConfirm: false,
          confirmButtonText:  '<i class="fa "></i>Yes Enable',
          confirmButtonAriaLabel: '',
          cancelButtonText:  '<i class="fa "> Cancel</i>',
          cancelButtonAriaLabel: ''
          }).then(res => {
          if(res.value){
            
            
            this.empSrv.changeEmployeeActivation(this.getEmployeeId.value).subscribe((a: EmployeeModel)=>{
              
              // this.sendEmail(a);
              this.EmployeeActive = true;
              this.employeeForm.get('EmployeeActive').setValue(true);
              this.swalSrv.showSwal('basic-success', " Employee ( " + a.empFullName + " ) Enabled successfully ");
              this.logSrv.sendUserLog( " Employee ( " + a.empFullName + " ) Enabled successfully  ");
              debugger;
              this.onGetAllEmployees();
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
    onCancel() {
       this.employeeForm.reset();
       this.CodeExist = false;
    }
    onSelectAll() {
      var assetItemALLHTMLelemnt = <HTMLInputElement> document.getElementById("assetItemALL--");
      this.SelectedEmployees = [];
      if(assetItemALLHTMLelemnt.checked) {
           this.Employees.forEach(val => { val.checkbox = true });
           this.Employees.forEach(emp => { this.SelectedEmployees.push(emp) });
           this.onUpdatestatistics();
      } else if (!assetItemALLHTMLelemnt.checked) {
           this.Employees.forEach(val => { val.checkbox = false });
           this.onUpdatestatistics();
      }
    }
    onSelect(e, emp) {
      if(e.target.checked)
      {
        this.SelectedEmployees.push(emp);
        let allChecked = true;
        this.onUpdatestatistics();
        this.Employees.forEach((asset, index) => {
          var assetItemHTMLelemnt =     <HTMLInputElement> document.getElementById('assetItem--' + index);
          if(!assetItemHTMLelemnt.checked) allChecked = false;
        });
        if(allChecked) 
        var assetItemALLHTMLelemnt = <HTMLInputElement> document.getElementById("assetItemALL--");
        assetItemALLHTMLelemnt.checked = true;
        // this.onUpdatestatistics();
      }
      else if (!e.target.checked){
        var assetItemALLHTMLelemnt = <HTMLInputElement> document.getElementById("assetItemALL--");
        if(assetItemALLHTMLelemnt.checked) assetItemALLHTMLelemnt.checked = false;
        this.SelectedEmployees.filter((asset, selectedIndex) => {
          if (asset.empId === emp.empId) {
            this.SelectedEmployees.splice(selectedIndex, 1);
            this.onUpdatestatistics();
          }
        });
      }
      // console.log('Selected Employees:  ' ,  this.SelectedEmployees);
      // console.log(' Employees:  ' ,  this.Employees);
      // 
    }
    goTransferAssetPage() {
      
      this.router.navigate(['/operation/assetmng']);
    }
    showSwal(emp, res){

      Swal.fire({
        title: '<h4>Employee Can NOT be deleted</h4>',
        icon: 'info',
        html:
        '{{ assetsAssigned.value }}' +
          '<a href="//sweetalert2.github.io">links</a> ' +
          'and other HTML tags',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa "></i>Transfer Assets',
        confirmButtonAriaLabel: '',
        cancelButtonText:
          '<i class="fa "> Cancel</i>',
        cancelButtonAriaLabel: ''
      }).then(res =>{

        return res.value;
        // console.log(res);
        // if(res.value == true){
        //   

        // //  this.goTransferAssetPage();
        // //  this.router.navigate(['/operation/assetmng'], { queryParams: emp });
        //  } if( res.value == false){

        // }
      })
      return res.value;
    }
    assetsAssigned: any;

    onDeleteEmployee(emp : EmployeeModel) {

      // let prince = 24;
    //  let list = $(`<table> <tr>  <th>Asset Code</th>  </tr>  <tr > <td> ${prince} </td>  </tr>    </table>`);  //  $

      Swal.fire({
        title: '<h4> Employee Will be deleted Permanently!!</h4>',
        icon: 'info',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:  '<i class="fa "></i>Yes, Delete it',
        confirmButtonAriaLabel: '',
        cancelButtonText:  '<i class="fa ">Cancel</i>',
        cancelButtonAriaLabel: ''
      }).then(res => {

        this.empSrv.deleteEmployee(emp.empId).subscribe( (assets: AssetModel[]) => {
            
            let list = $('<ul></ul>');
            assets.forEach((x, index) => {
                list.append(`<ul> <tr>  <th> ${index+1} - Asset Code: </th>  </tr>  <tr > <td> ${x.astCode} </td>  </tr>    </ul>`);
            });
              if(assets.length > 0){

                  Swal.fire({
                    title: '<h4>Employee Can NOT be Deleted <br> Unless Asstes are Transfered</h4>',
                    icon: 'info',
                    html: list,
                    showCloseButton: true,
                    showCancelButton: true,
                    focusConfirm: false,
                    confirmButtonText:  '<i class="fa "></i>Go Assets Transfer',
                    confirmButtonAriaLabel: '',
                    cancelButtonText:  '<i class="fa ">Cancel</i>',
                    cancelButtonAriaLabel: ''
                  }).then(res => {
                    let newemp = {empId: emp.empId, empFullName: emp.empFullName, empHRCode: emp.empHRCode, assetsCurrent: JSON.stringify(emp.assetsCurrent)  }
                    this.router.navigate(['/operation/assetmng'], { queryParams: newemp });
                  })
            } else if(assets.length == 0){
                  this.alertService.success('Deleted Successfully');
                  this.logSrv.sendUserLog( "( " +  assets.length + " )  deleted Successfully");
            }
            this.onGetAllEmployees();

        }, error => {
          this.loading = false;
          if(error.message.includes('Http failure response for http://')) {
            this.logSrv.sendUserLog( "( " +  error  + " )  Http error");
            this.alertService.danger('Server error');
          }
        });
      });
    
    }
    onDeleteAllSellected() {
      if(this.SelectedEmployees.length == 0) {
        this.alertService.danger('No Record Sellected');
      } else {
        this.loading = true;
        let ids = [];
        this.SelectedEmployees.forEach(em => {
          ids.push(em.empId);
        });
        debugger;
        this.empSrv.deleteSelectedEmployees(ids).subscribe(count => {
          this.onUpdatestatistics();
          this.swalSrv.showSwal('basic-success', "( " + count + " ) Employees Deleted out of  " + ids.length);
          this.SelectedEmployees = [];
          this.onGetAllEmployees();
          this.loading = false;
        }, error => {
          this.loading = false;
          if(error.message.includes('Http failure response for http://')){
            this.alertService.danger('Server error');
          }
        });
      }
    }
    onClear() {
      this.empSrv.deleteALLEmployees().subscribe(res => {
        this.onGetAllEmployees();
        this.alertService.success('Cleared Successfully');
      });
    }
    onExportExcel() {
      this.expExcelSrv.exportAsExcelFile(this.SelectedEmployees, 'Employees List');
    }
    onPrintPreviewSelectedEmployees() {
      // console.log(emp);
      // 
      // this.bsModaleRef = this.modalService.show(AddeditasstComponent, {initialState: {emp}});
      // this.bsModaleRef.content.onClose = (updated) => {
      //   if (updated) {
      //     this.onGetAllEmployees();
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
    updateFilter(val: any) {
      // console.log(Object.keys(this.temp[0]).length);
      const value = val.toString().toLowerCase().trim();
      // get the amount of columns in the table
      const count = Object.keys(this.temp[0]).length;
      // get the key names of each column in the dataset
      const keys = Object.keys(this.temp[0]);
      // assign filtered matches to the active datatable
      this.Employees = this.temp.filter(item => {
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
      this.pageIndex = 1;
    }
    onBringExistingEmployee() {
      this.employeeForm.patchValue(this.EmployeeTemp);
      this.employeeForm.controls.EmployeeTypes.get('emptypName').patchValue(this.EmployeeTemp.EmployeeType.emptypName);

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
    selectDirectMngEvent(event) {
      debugger;
      this.employeeForm.controls['directMngId'].setValue(event.empId);
      this.employeeForm.controls['DirectMngName'].setValue(event.empFullName);
      this.fullNameKeyword =  event.target.value.empFullName;
    }
    onFilterByNoHrCode(e) {
      debugger;
        if(e.target.selectedOptions[0].text.toString() == 'Show All') {

                this.onGetAllEmployees();
        } else if(e.target.selectedOptions[0].text.toString() == 'No-Hr-Code') {
    
              // this.showByEmployees = false;
              //  this.onGetAllAssets();
              let val = e.target.selectedOptions[0].text.toString();
              
              // console.log(Object.keys(this.temp[0]).length);
              const value = val.toString().toLowerCase().trim();
              
              // get the amount of columns in the table
              const count = Object.keys(this.temp[0]).length;
              
              // get the key names of each column in the dataset
              const keys = Object.keys(this.temp[0]);
              
              // assign filtered matches to the active datatable
              this.Employees = this.temp.filter(item => {
                
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
        this.pageIndex = 1;
    }

    get getCode() {
      return this.employeeForm.get('empHRCode') as FormControl;
    }
    get getFullName() {
      return this.employeeForm.get('empFullName') as FormControl;
    }
    get getEmployeeId() {
      return this.employeeForm.get('empId') as FormControl;
    }
    get getBranchId() {
      return this.employeeForm.get('brnId') as FormControl;
    }
    get getCompanyId() {
      return this.employeeForm.get('comId') as FormControl;
    }
    get getPRDate() {
      return this.employeeForm.get('empPurchaseDate') as FormControl;
    }
    get getIndividualEmailsForm(){
      return this.employeeForm.get('emailsINDIV') as FormArray;
    }
    get getGenaricEmailsForm(){
      return this.employeeForm.get('emailsGEN') as FormArray;
    }
    get getArchiveEmailsForm(){
      return this.employeeForm.get('emailsARCH') as FormArray;
    }
    get getEmpGmailsForm(){
      return this.employeeForm.get('EmpGmails') as FormArray;
    }
    get getEmpArchivesForm(){
      return this.employeeForm.get('EmpArchives') as FormArray;
    }
    get getEmployeeForm() { 
      return this.employeeForm.controls; 
    }
    get getEmpImg() { 
      return this.employeeForm.get('EmpImg') as FormControl; 
    }
    get IsEmployeeActive(){
      return this.employeeForm.get('EmployeeActive') as FormControl;
    }
    get getEmailCheckBox(){
      return this.employeeForm.get('mailCheckBox') as FormControl;
    }

}
