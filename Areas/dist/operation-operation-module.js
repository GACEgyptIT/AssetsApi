(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["operation-operation-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/operation/assetmng/assetmng.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/operation/assetmng/assetmng.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <ngx-alerts></ngx-alerts>\n    <div class=\"content\" >\n        <form [formGroup]=\"assignForm\" (ngSubmit)=\"onSubmit()\" > \n                <div class=\" row card col-md-12\">\n                  <div class=\"content\" >\n                    <div class=\"row card col-md-12\" style=\"background-color: #f9f9f9;  position: static;\">\n                        <br>  \n                        <div class=\"col-md-4\">\n                                <label>Select Employee:   {{ assignForm.controls.empFullName.value }} </label>\n                                <ngx-autocomplete\n                                    formControlName=\"empId\"\n                                    [searchKeyword]=\"'EmpCode'\" \n                                    [inputId]=\"'searchEmployee'\" \n                                    [placeholderValue]=\"'Enter the Employee Name'\" \n                                    [entries]=\"EmployeesList\" \n                                    (selectedValue)=\"selectEvent($event)\">\n                                </ngx-autocomplete>\n                        </div>\n                        <div class=\"col-md-8\">\n                                <label> Multiselect Assets </label>\n                                <ng-multiselect-dropdown #multiSelect\n                                    [placeholder]=\"'Enter Asset code'\" \n                                    [data]=\"Assets\" \n                                    [formControl]=\"getAssignForm.astDescription\" \n                                    [settings]=\"settings\"\n                                    [disabled]=\"false\"\n                                    (onFilterChange)=\"onFilterChange($event)\"\n                                    (onDropDownClose)=\"onDropDownClose($event)\"\n                                    (onSelect)=\"onItemSelect($event)\" \n                                    (onDeSelect)=\"onDeSelect($event)\"\n                                    (onSelectAll)=\"onSelectAllAssets($event)\"\n                                    (onDeSelectAll)=\"onDeSelectAll($event)\"  >\n                                </ng-multiselect-dropdown>\n                        </div>\n                        <br><br>\n                    </div>\n                    <div class=\"row col-md-12\">\n                      <!-- (click)=\"onSubmit('Save')\"  -->\n                        <button type=\"submit\"  class=\"btn btn-primary \" > Assign </button>\n                        <button type=\"button\" (click)=\"onCancel()\" class=\"btn btn-primary pull-right\" > Cancel </button>\n                        <br><br>\n                    </div>\n                    <br>\n                  </div>\n                </div>\n                <br>       \n                <div class=\"row card col-md-12\" >  \n                  <div class=\"content\" >\n                      <h4 class=\"title\"> Movement Details </h4> \n                      <div class=\"row card col-md-12\" style=\"background-color: #f9f9f9;  position: static;\" >      \n                              <div class=\" col-md-6\">\n                                <h4> Current Assets with : {{ assignForm.controls.empFullName.value }}  </h4>\n                              </div>\n                              <div class=\" col-md-6\">\n                                <h4>New Assets List</h4>\n                              </div>\n                              <div class=\" col-md-6\">\n                                <legend></legend>\n                                    <li *ngFor=\"let ast of assignForm.controls.assetsCurrent.value; let i = index\">\n                                        <span> {{i+1}} :</span>\n                                        <span>Code:  {{ast?.astCode}}     </span>\n                                        <span> Description: {{ast?.astDescription}}</span> \n                                    </li>\n                              </div>\n                              <div class=\" col-md-6\">\n                                <legend></legend>\n                                <li *ngFor=\"let ast of assignForm.controls.assetsNew.value; let i = index\">\n                                    <!-- <span> {{i+1}} :</span>\n                                    <span>Code:  {{ast?.astCode}}     </span>\n                                    <span> Description: {{ast?.astDescription}}</span>  -->\n                                    <span> {{ast?.astCodeDescEmp}}     </span>\n                                </li>\n                              </div>\n                      </div>\n                  </div>\n                </div>\n         \n        </form>\n\n        <!-- Assets List -->\n        <div class=\"row card col-md-12  \" >\n          <div class=\"content\">\n                                <br>\n                                <div class=\"row card col-md-12 toolbarCard\" >\n                                    <div class=\" col-md-2\" >\n                                      <i class=\"pe-7s-refresh-2 toolbarIcon\" (click)=\"onGetAllAssets()\" ></i>\n                                      <i class=\"pe-7s-print toolbarIcon\"  printTitle=\"Assets-List\" printSectionId=\"print-section\" ngxPrint ></i>     \n                                      <i class=\"pe-7s-cloud-download toolbarIcon\"  (click)=\"onExportExcel()\"></i>  \n                                    \n                                    </div>\n                                    <div class=\" col-md-1\">\n                                      <select id=\"PerPage\" (change)=\"onChangeRowsPerPage($event)\" class=\"marginsDropdownList\" class=\"form-control\" >\n                                        <option value=\"5\">Rows</option>\n                                        <option value=\"5\">5</option>\n                                        <option value=\"10\">10</option>\n                                        <option value=\"25\">25</option>\n                                        <option value=\"50\">50</option>\n                                        <option value=\"100\">100</option>\n                                        <option value=\"9999\">All</option>\n                                        </select> \n                                    </div>\n                                    <div class=\" col-md-5 marginsPaging\" >\n                                      <pagination-controls  (pageChange)=\"pageIndex = $event\" > </pagination-controls>\n\n                                    </div>\n                                    <div class=\"col-md-2\">\n                                      <select \n                                        (change)=\"onFilterByAssetType($event)\" class=\"form-control\" data-title=\"Single Select\" \n                                        data-style=\"btn-default btn-block\" data-menu-style=\"dropdown-blue\">\n                                        <option value=\"0\"> Show All </option>\n                                        <option value=\"1\"> Show By Employees </option>\n                                        <option *ngFor=\"let a of AssetTypes\" value={{a.asttypId}} > {{a.asttypName}} </option>\n                                      </select>\n                                    </div>\n                                    <div class=\" col-md-2 marginsSearch \">\n                                      <input #search id=\"search\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\" aria-describedby=\"basic-addon1\" class=\"form-control\" >       \n                                    </div>\n                                </div>\n                                <br><br><br>\n                                <!--  Show By Assets-->\n                                <div class=\"content\" *ngIf=\"!showByEmployees\">\n                                  By Assets\n                                <div id=\"print-section\"  class=\"row card col-md-12\" style=\"overflow-x:auto;\" >\n                                  <div class=\"content\">\n                                        <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n                                        <thead>\n                                              <tr>\n                                                <th> \n                                                  <div class=\" form-check\">\n                                                    <label class=\" form-check-label\">\n                                                      <input id=\"assetItemALL--\" (change)=\"onSelectAllCheckboxAST($event)\" class=\" form-check-input\"  type=\"checkbox\" value=\"\" />\n                                                      <span class=\" form-check-sign\">\n                                                        <span class=\" check\"> </span>\n                                                      </span>\n                                                    </label>\n                                                  </div>\n                                                </th>\n                                                <th>\n                                                  #\n                                                </th>\n                                                <th [class.active]=\"order === 'astId'\" (click)=\"setOrder('id')\">\n                                                  ID <span [hidden]=\"reverse\">▼</span><span [hidden]=\"!reverse\">▲</span>\n                                                </th>\n                                                <th [class.active]=\"order === 'info.astDescription'\" (click)=\"setOrder('astDescription')\"\n                                                  class=\"mdl-data-table__cell--non-numeric\">\n                                                  Description <span [hidden]=\"reverse\">▼</span><span [hidden]=\"!reverse\">▲</span>\n                                                </th>\n                                                <th [class.active]=\"order === 'astCode'\" (click)=\"setOrder('astCode')\">\n                                                  Code <span [hidden]=\"reverse\">▼</span>\n                                                  <span [hidden]=\"!reverse\">▲</span>\n                                                </th>\n                                                <th [class.active]=\"order === 'astSerialNumber'\" (click)=\"setOrder('astSerialNumber')\" >\n                                                  SN <span [hidden]=\"reverse\">▼</span>\n                                                  <span [hidden]=\"!reverse\">▲</span>\n                                                </th>\n                                                <th [class.active]=\"order === 'astPartNumber'\" (click)=\"setOrder('astPartNumber')\">\n                                                  PN <span [hidden]=\"reverse\">▼</span>\n                                                  <span [hidden]=\"!reverse\">▲</span>\n                                                </th>\n                                                <th [class.active]=\"order === 'astDialNumber'\" (click)=\"setOrder('astDialNumber')\" *ngIf=\"IsDailNumberExist()\" >\n                                                  Dial Number <span [hidden]=\"reverse\">▼</span>\n                                                  <span [hidden]=\"!reverse\">▲</span>\n                                                </th>\n                                                <th [class.active]=\"order === 'astCircuitNumber'\" (click)=\"setOrder('astCircuitNumber')\" *ngIf=\"IsCircuitNumberExist()\">\n                                                  Circuit Number <span [hidden]=\"reverse\">▼</span>\n                                                  <span [hidden]=\"!reverse\">▲</span>\n                                                </th>\n                                                <th [class.active]=\"order === 'astPurchaseDate'\" (click)=\"setOrder('astPurchaseDate')\">\n                                                  Purchase Date <span [hidden]=\"reverse\">▼</span>\n                                                  <span [hidden]=\"!reverse\">▲</span>\n                                                </th>\n                                                <th [class.active]=\"order === 'AssetType'\" (click)=\"setOrder('AssetType')\">\n                                                  Asset Type <span [hidden]=\"reverse\">▼</span>\n                                                  <span [hidden]=\"!reverse\">▲</span>\n                                                </th>\n                                                <th [class.active]=\"order === 'Employee'\" (click)=\"setOrder('Employee')\">\n                                                  Employee <span [hidden]=\"reverse\">▼</span>\n                                                  <span [hidden]=\"!reverse\">▲</span>\n                                                </th>\n                                                <th [class.active]=\"order === 'Department'\" (click)=\"setOrder('Department')\">\n                                                  Deparment <span [hidden]=\"reverse\">▼</span>\n                                                  <span [hidden]=\"!reverse\">▲</span>\n                                                </th>\n                                                <th [class.active]=\"order === 'Branch'\" (click)=\"setOrder('Branch')\">\n                                                  Branch <span [hidden]=\"reverse\">▼</span>\n                                                  <span [hidden]=\"!reverse\">▲</span>\n                                                </th>\n                                                <th [class.active]=\"order === 'Company'\" (click)=\"setOrder('Company')\">\n                                                  Company <span [hidden]=\"reverse\">▼</span>\n                                                  <span [hidden]=\"!reverse\">▲</span>\n                                                </th>\n                                                <!-- <th >\n                                                  Scrap \n                                                </th> -->\n                                              </tr>\n                                        </thead>\n                                        <tbody>\n                                              <tr  *ngFor=\"let row of Assets | orderBy: order:reverse:'case-insensitive' | paginate: { itemsPerPage: pageSize, currentPage: pageIndex }; let i = index\">\n                                                <td>\n                                                  <div class=\"form-check\">\n                                                    <label class=\" form-check-label\">\n                                                      <input id=\"assetItem--{{i}}\" class=\" form-check-input\" (change)=\"onSelectCheckboxAST($event, row)\" [(ngModel)]=\"row.checkbox\" [value]=\"row.checkbox\" type=\"checkbox\" value=\"\" />\n                                                      <span class=\" form-check-sign\">\n                                                        <span class=\" check\"> </span>\n                                                      </span>\n                                                    </label>\n                                                  </div>\n                                                  <!-- <div *ngFor=\"let checkbox of checkboxes\">\n                                                    <input type=\"checkbox\" [(ngModel)]=\"checkbox.checked\" [value]=\"checkbox.value\"><span>{{checkbox.name}}</span>\n                                                </div> -->\n                        \n                                                </td>\n                                                <td>\n                                                    {{ i+1 }}\n                                                </td>\n                                                <td>{{ row?.astId }}</td>\n                                                <td>{{ row?.astDescription }}</td>\n                                                <td>{{ row?.astCode }}</td>\n                                                <td>{{ row?.astSerialNumber }}</td>\n                                                \n                                                <td>{{ row?.astPartNumber }}</td>\n                                                <td *ngIf=\"IsDailNumberExist()\">{{ row?.astDialNumber ? row?.astDialNumber : 'N/A' }}</td>\n                                                <td *ngIf=\"IsCircuitNumberExist()\">{{ row?.astCircuitNumber ? row?.astCircuitNumber : 'N/A' }}</td>\n                                                <td>{{ row?.astPurchaseDate }}</td>\n                                                <td>{{ row?.AssetTypeName }}</td>\n                                                <td>{{ row?.EmployeeName }}</td>\n                                                <td>{{ row?.DepartmentName }}</td>\n                                                <td>{{ row?.BranchName }}</td>\n                                                <td>{{ row?.CompanyName }}</td>\n                                                <!-- <td>\n                                                  <a (click)=\"onScrap(row)\" class=\"btn btn-simple btn-warning \"><i>Scrap</i></a> \n                                                </td> -->\n                                              </tr>\n                                        </tbody>\n                                        </table>\n                                  </div>\n                                </div> \n                                </div>\n                                <!-- end content By Assets-->\n\n                                <!--  Show By Employee-->\n                                <div class=\"content\" *ngIf=\"showByEmployees\">\n                                  By Employee\n                                  <div id=\"print-section\"  class=\"row card col-md-12\" style=\"overflow-x:auto;\" >\n                                    <div class=\"content\">\n                                          <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n                                     <thead>\n                                           <tr>\n                                             <th> \n                                               <div class=\" form-check\">\n                                                 <label class=\" form-check-label\">\n                                                   <input id=\"employeeItemALL--\" (change)=\"onSelectAllCheckboxEMP($event)\" class=\" form-check-input\"  type=\"checkbox\" value=\"\" />\n                                                   <span class=\" form-check-sign\">\n                                                     <span class=\" check\"> </span>\n                                                   </span>\n                                                 </label>\n                                               </div>\n                                             </th>\n                                             <th >\n                                               # \n                                             </th>\n                                             <th [class.active]=\"order === 'empHRCode'\" (click)=\"setOrder('empHRCode')\"\n                                               class=\"mdl-data-table__cell--non-numeric\">\n                                               HR Code <span [hidden]=\"reverse\">▼</span><span [hidden]=\"!reverse\">▲</span>\n                                             </th>\n                                             <th [class.active]=\"order === 'empFullName'\" (click)=\"setOrder('empFullName')\">\n                                              Full Name <span [hidden]=\"reverse\">▼</span>\n                                               <span [hidden]=\"!reverse\">▲</span>\n                                             </th>\n                                             <th>\n                                               Assets\n                                             </th>\n                                             <th [class.active]=\"order === 'Department'\" (click)=\"setOrder('Department')\">\n                                              Department <span [hidden]=\"reverse\">▼</span>\n                                              <span [hidden]=\"!reverse\">▲</span>\n                                            </th>\n                                             <th [class.active]=\"order === 'Branch'\" (click)=\"setOrder('Branch')\">\n                                               Branch <span [hidden]=\"reverse\">▼</span>\n                                               <span [hidden]=\"!reverse\">▲</span>\n                                             </th>\n                                             <th [class.active]=\"order === 'Company'\" (click)=\"setOrder('Company')\">\n                                               Company <span [hidden]=\"reverse\">▼</span>\n                                               <span [hidden]=\"!reverse\">▲</span>\n                                             </th>\n                                           </tr>\n                                     </thead>\n                                     <tbody>\n                                           <tr *ngFor=\"let row of Employees | orderBy: order:reverse:'case-insensitive' | paginate: { itemsPerPage: pageSize, currentPage: pageIndex }; let i = index\">\n                                             <td>\n                                               <div class=\"form-check\">\n                                                 <label class=\" form-check-label\">\n                                                   <input id=\"employeeItem--{{i}}\" class=\" form-check-input\" (change)=\"onSelectCheckboxEMP($event, row)\" [(ngModel)]=\"row.checkbox\" [value]=\"row.checkbox\" type=\"checkbox\" value=\"\" />\n                                                   <span class=\" form-check-sign\">\n                                                     <span class=\"check\"> </span>\n                                                   </span>\n                                                 </label>\n                                               </div>                     \n                                             </td>\n                                             <td>{{ i+1 }}</td>\n                                             <td>{{ row?.empHRCode }}</td>\n                                             <td>{{ row?.empFullName }}</td>\n                                             <td>\n                                                 <ul>\n                                                      <li *ngFor=\"let ast of row.assetsCurrent; let i = index\">\n                                                        <span>( {{ast?.astCode}}  )  </span>\n                                                        <span>  {{ast?.AssetType}}  - </span>\n                                                        <span>  {{ast?.astDescription}}</span> \n                                                      </li>\n                                                 </ul>\n                                             </td>\n                                             <td>{{ row?.Department }}</td>\n                                             <td>{{ row?.Branch }}</td>\n                                             <td>{{ row?.Company }}</td>\n                                           </tr>\n                                     </tbody>\n                                     </table>\n                                   </div>\n                                  </div> \n                                </div>\n                                <!-- end content By Employee-->\n           \n                                <div class=\"col-md-12\">\n                                  <div class=\"col-md-1\">\n                                    <select class=\"col-md-1\" id=\"PerPage\" (change)=\"onChangeRowsPerPage($event)\" class=\"form-control col-sm-1\" >\n                                      <option value=\"5\">#Rows</option>\n                                      <option value=\"5\">5</option>\n                                      <option value=\"10\">10</option>\n                                      <option value=\"25\">25</option>\n                                      <option value=\"50\">50</option>\n                                      <option value=\"100\">100</option>\n                                      <option value=\"9999\">All</option>\n                                      </select> \n                                  </div>\n                                  <div class=\"col-md-3\">\n                                    <pagination-controls (pageChange)=\"pageIndex = $event\">    </pagination-controls>\n                                  </div>\n                                </div>\n          </div>\n        </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/operation/dynamicemails/dynamicemails.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/operation/dynamicemails/dynamicemails.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <button (click)=\"showEmailSectionFn()\" >Show Emails</button><br>   <br>\n\n    <form [formGroup]=\"employeeForm\" (submit)=\"Submit()\">\n        <div  class=\"card col-md-12\"  [hidden]=\"!showEmailSection\">\n            <br>\n            <legend> Emails Details</legend>\n\n            <div formArrayName=\"emailsINDIV\" class=\"col-md-4\">\n                <button (click)=\"onAddIndividualEmail(employeeForm.controls.emailsINDIV)\">Add Individual Email</button><br>\n                <div *ngFor=\"let mail of getIndividualEmailsForm.controls; let i = index\" >\n                    <div [formGroupName]=\"i\" class=\"col-md-4\" >\n                        <label> Email {{i+1 }} : </label>\n                        <input  formControlName=\"emailAddress\" placeholder=\"Email Address\" />  <a (click)=\"deleteIndividualEmail(i)\" routerLink=\"active\" style=\"color: crimson;\" >   X </a>  \n                    </div>\n                </div>\n            </div>\n\n\n\n            <div formArrayName=\"emailsGEN\" class=\"col-md-4\">\n                <button (click)=\"onAddGenaricEmail(employeeForm.controls.emailsGEN)\">Add Genaric Email</button><br>\n                <div *ngFor=\"let mail of getGenaricEmailsForm.controls; let i = index\" >\n\n                    <div [formGroupName]=\"i\" class=\"col-md-4\" >\n                        <label> Email {{i+1 }}:</label>\n                        <ngx-autocomplete\n                        formControlName=\"genEmailId\"\n                        [searchKeyword]=\"'genEmailAddress'\" \n                        [inputId]=\"'searchGmail'\" \n                        [placeholderValue]=\"'Enter the Employee Name'\" \n                        [entries]=\"Emails\" \n                        (selectedValue)=\"onSelectGenaricEmail($event)\"\n                        >\n                    </ngx-autocomplete>\n                    <a (click)=\"deleteGenaricEmail(i)\" routerLink=\"active\" style=\"color: crimson;\" >   X </a>  \n                    </div>\n                </div>\n  \n                <div class=\"footer\" class=\"col-md-12\">\n                    <button type=\"submit\"   >Submit</button>\n                </div>\n                <br>\n            </div>\n  \n        </div>\n\n\n    </form>\n    <!-- <div>\n        <h4>  employeeForm.value  </h4>\n        {{ employeeForm.value | json }}\n    </div> -->\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/operation/dynamicform/dynamicform.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/operation/dynamicform/dynamicform.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <button (click)=\"addNewEmail()\">Add new Individual Email</button><br><br>\n    <form [formGroup]=\"myForm\">\n      <div formArrayName=\"emails\">\n          \n        <div *ngFor=\"let eml of myForm.get('emails'); let i=index\">\n        <fieldset>\n          <legend><h3>Individual {{i+1}}: </h3></legend>\n          <div [formGroupName]=\"i\">\n            <label>Email Title: </label>\n            <input formControlName=\"individualEmailsTitle\" /><span><button (click)=\"deleteEmail(i)\">Delete Email</button></span>\n            <div formArrayName=\"individualEmailsAddress\">\n              <div *ngFor=\"let esddre of eml.get('individualEmailsAddress').controls; let j=index\">\n                <fieldset>\n                <legend><h4>ADDRESS {{j+1}}</h4></legend>\n                <div [formGroupName]=\"j\">\n                  <label>Address Name:</label>\n                  <input formControlName=\"emailAddress\" /><span><button (click)=\"deleteIndvAddress(eml.controls.individualEmailsAddress, j)\">Delete Email</button></span>\n                </div>\n                </fieldset>\n              </div>\n              <button (click)=\"addNewIndvAddress(eml.controls.individualEmailsAddress)\">Add new Address</button>\n            </div>\n          </div>\n        </fieldset>\n        </div>\n      </div><br>\n      \n    </form>\n  \n    <pre>{{myForm.value | json}}</pre>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/operation/emailmng/emailmng.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/operation/emailmng/emailmng.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <ngx-alerts></ngx-alerts>\n    <div class=\"container-fluid\" >\n        <form [formGroup]=\"emailForm\" (ngSubmit)=\"onSubmit()\" > \n\n\n                <div class=\"card col-md-12\">\n                    <div class=\"col-md-12\">\n                      <br>  \n                        <div class=\"col-md-4\">\n                            <label>Select Genaric Email </label>\n                                <ngx-autocomplete\n                                formControlName=\"genEmailId\"\n                                [searchKeyword]=\"'genEmailAddress'\" \n                                [inputId]=\"'searchGmail'\" \n                                [placeholderValue]=\"'Enter the Employee Name'\" \n                                [entries]=\"Emails\" \n                                (selectedValue)=\"selectEmpEvent($event)\"\n                            \n                                >\n                            </ngx-autocomplete>\n                        \n                        </div>\n                        <div class=\"col-md-8\">\n                            <label>Select Employees </label>\n                            <ng-multiselect-dropdown #multiSelect\n                            [placeholder]=\"'Select Employees'\" \n                            [data]=\"EmployeesList\" \n                            [formControl]=\"getEmployees\" \n                            [settings]=\"settings\"\n                            [disabled]=\"false\"\n                            (onFilterChange)=\"onFilterChange($event)\"\n                            (onDropDownClose)=\"onDropDownClose($event)\"\n                            (onSelect)=\"onItemSelect($event)\" \n                            (onDeSelect)=\"onDeSelect($event)\"\n                            (onSelectAll)=\"onSelectAll($event)\"\n                            (onDeSelectAll)=\"onDeSelectAll($event)\"\n                        \n                            >\n                    \n                            </ng-multiselect-dropdown>\n\n                        </div>\n                        <!-- <div class=\"col-md-3\">\n                            <label>Multiselect astDescription or astCode </label>\n                            \n                            <ng-select class=\"btn \"\n                                    [items]=\"Assets\"\n                                    bindLabel=\"astDescription\"\n                                    bindValue=\"astCode\"\n                                    [multiple]=\"true\"\n                                    (onSelectAll)=\"onChangeAssets($event)\"\n                                    formControlName=\"getAssets\"\n                                    \n                                    [searchFn]=\"customSearchFn\"\n                                    >\n                            </ng-select>\n                        </div> -->\n                        <br>   <br>\n                    </div>\n                    <div class=\"row col-md-12\">\n                        <button type=\"submit\" class=\"btn btn-primary \" > Assign </button>\n                        <button type=\"button\" (click)=\"onCancel()\" class=\"btn btn-primary pull-right\" > Cancel </button>\n                        <!-- Form is:  {{ assetForm.status }} -->\n                        <br>   <br>\n                    </div>\n                    <br>\n                </div>\n                <br>       \n                <div class=\"card col-md-12\" >  <!--  [hidden]=\"getAssets.length == 0\" -->\n                    <h4> Movment Details</h4>\n                    <div class=\"row\">\n                            <!-- Move assets to: {{ getToEmp.value }}\n\n                            <h4>Assets To Move</h4>\n                            <ul >\n                            <li *ngFor=\"let ast of getAssets.value\">\n                                <span>Description: {{ast?.astDescription}}</span>\n                                <span>Code:  {{ast?.astCode}}</span>\n                                <span> <font color=\"red\">Remove from: </font>  {{ast?.EmployeeName}}</span>\n                            </li>\n                            </ul> -->\n                    <!-- <table>\n                        <tr class=\"col-md-12\">\n                            <th class=\"col-md-3\">\n                                Description\n                            </th>\n                            <th class=\"col-md-3\">\n                                Code\n                            </th>\n                            <th class=\"col-md-3\">\n                                Move from Emp\n                            </th>\n                        </tr>\n                        <tbody>\n                                <tr *ngFor=\"let ast of getAssets.value\" class=\"col-md-12\">\n                                    <td class=\"col-md-3\">\n                                        {{ast?.astDescription}}\n                                    </td>\n                                    <td class=\"col-md-3\">\n                                        {{ast?.astCode}}\n                                    </td>\n                                    <td class=\"col-md-3\">\n                                        {{ast?.EmployeeName}}\n                                    </td>\n                                </tr>\n                        </tbody>\n                    </table> -->\n                            {{ emailForm.value | json  }}\n                    </div>\n                </div>\n         \n        </form>\n        <!-- <br> -->\n      \n        <div class=\"row\" >\n            <div class=\"col-md-12\">\n            <br>\n            <div class=\"card\">\n                <div class=\"content\">\n                  <h4 class=\"title\">Genaric Emails List</h4>\n                  <!--           Toolbar        -->\n                  <div class=\"toolbar col-md-12\" >\n          \n                      <div class=\"col-md-2\">\n                        <button class=\"btn btn-primary\" (click)=\"onGetAllGenaricEmails()\">Refresh</button>\n                      </div>\n                      <div class=\"col-md-1\">\n                        <button class=\"btn btn-primary\"  printTitle=\"MyTitle\" printSectionId=\"print-section\" [useExistingCss]=\"true\" ngxPrint>Print</button>\n\n                      </div >\n                      <div class=\"col-md-1\">\n                        <button class=\"btn btn-primary\" (click)=\"onExportExcel()\">Export</button> \n                      </div>\n                     <!--        Here you can write extra buttons/actions for the toolbar              -->\n                  </div>\n                  <div class=\"toolbar col-md-12\" >\n                    <div class=\"col-md-2\">\n                      <select id=\"PerPage\" (change)=\"onChangeRowsPerPage($event)\" class=\"form-control col-sm-1\" >\n                        <option value=\"5\">Rows</option>\n                        <option value=\"5\">5</option>\n                        <option value=\"10\">10</option>\n                        <option value=\"25\">25</option>\n                        <option value=\"50\">50</option>\n                        <option value=\"100\">100</option>\n                        <option value=\"9999\">All</option>\n                        </select> \n                    </div>\n                    <div class=\"col-md-4\">\n                      <pagination-controls  (pageChange)=\"p = $event\"> </pagination-controls>\n                    </div>\n                    <div class=\"col-md-1\">   Filter:</div>\n                    <div class=\"col-md-2\">\n                      \n                \n                        <select formControlName=\"asttypId\" required\n                          (change)=\"onFilterByAssetType($event)\" class=\"form-control\" data-title=\"Single Select\" \n                          data-style=\"btn-default btn-block\" data-menu-style=\"dropdown-blue\">\n                          <option value=\"\"> Show All </option>\n                          <!-- <option *ngFor=\"let a of Emails\" value={{a.asttypId}} > {{a.asttypName}} </option> -->\n                        </select>\n                    </div>\n                    <div class=\"col-md-3\">\n                      <input #search id=\"search\" type=\"text\" class=\"form-control\" placeholder=\"Search\" aria-label=\"Search\" aria-describedby=\"basic-addon1\">\n                    </div>\n\n                  <!--        Here you can write extra buttons/actions for the toolbar              -->\n                 </div>\n\n                  <div id=\"print-section\" >\n                  <div class=\"fresh-datatables\">\n                    <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n                    <!-- Table Headers -->\n                    <thead>\n                          <tr>\n                            <th> \n                              <div class=\" form-check\">\n                                <label class=\" form-check-label\">\n                                  <input id=\"assetItemALL--\" (change)=\"onSelectAll()\" class=\" form-check-input\"  type=\"checkbox\" value=\"\" />\n                                  <span class=\" form-check-sign\">\n                                    <span class=\" check\"> </span>\n                                  </span>\n                                </label>\n                              </div>\n                              <!-- <div class=\" form-check\">\n                                <button type=\"button\" (click)=\"CheckAllOptions()\">Toggle</button>\n                              </div> -->\n                            </th>\n                            <th [class.active]=\"order === 'astId'\" (click)=\"setOrder('id')\">\n                              Employee <span [hidden]=\"reverse\">▼</span><span [hidden]=\"!reverse\">▲</span>\n                            </th>\n                            <th [class.active]=\"order === 'info.astDescription'\" (click)=\"setOrder('astDescription')\"\n                              class=\"mdl-data-table__cell--non-numeric\">\n                              Individual Emails <span [hidden]=\"reverse\">▼</span><span [hidden]=\"!reverse\">▲</span>\n                            </th>\n                            <th [class.active]=\"order === 'astCode'\" (click)=\"setOrder('astCode')\">\n                              Genaric Emails <span [hidden]=\"reverse\">▼</span>\n                              <span [hidden]=\"!reverse\">▲</span>\n                            </th>\n          \n                            <th >\n                              Actions \n                            </th>\n\n                          </tr>\n                    </thead>\n                    <!-- Table Body -->\n                    <tbody>\n                          <tr  *ngFor=\"let emp of Employees | orderBy: order:reverse:'case-insensitive' | paginate: { itemsPerPage: pageSize, currentPage: 1 }; let i = index\">\n                            <td>\n                              <div class=\"form-check\">\n                                <label class=\" form-check-label\">\n                                  <input id=\"assetItem--{{i}}\" class=\" form-check-input\" (change)=\"onSelect($event, emp)\" [(ngModel)]=\"emp.checkbox\" [value]=\"emp.checkbox\" type=\"checkbox\" value=\"\" />\n                                  <span class=\" form-check-sign\">\n                                    <span class=\" check\"> </span>\n                                  </span>\n                                </label>\n                              </div>\n                              <!-- <div *ngFor=\"let checkbox of checkboxes\">\n                                <input type=\"checkbox\" [(ngModel)]=\"checkbox.checked\" [value]=\"checkbox.value\"><span>{{checkbox.name}}</span>\n                            </div> -->\n    \n                            </td>\n                            <td>{{ emp?.empFullName }}</td>\n                            <td > \n                              <ul >\n                                <li >     {{ emp?.empIndividualEmail0 }}  </li>\n                                <li >     {{ emp?.empIndividualEmail1 }}  </li>\n                                <li *ngIf=\"emp?.empIndividualEmail2 != ''\">     {{ emp?.empIndividualEmail2 }}  </li>\n                                <li >     {{ emp?.empIndividualEmail3 }}  </li>\n                              </ul>\n                            </td>\n                            <td>\n                              <ul *ngFor=\"let mail of emp.GenaricEmailsAddress\">\n                                <li >     {{ mail }}  </li>\n                              </ul>\n                            </td>\n                            <td>\n                              <!-- <a (click)=\"onEditAsset(row)\" class=\"btn btn-simple btn-warning btn-icon edit\"><i class=\"fa fa-edit\"></i></a>\n                              <a (click)=\"onDeleteAsset(row?.astId)\" class=\"btn btn-simple btn-danger btn-icon remove \"><i class=\"fa fa-times\"></i></a> </td>\n                         -->  </tr>\n                    </tbody>\n                    </table>\n                  </div>\n                 </div> \n                 <!-- endprintsection -->\n                </div>\n                <!-- end content-->\n            </div>\n            <!--  end card  -->\n            </div>\n          <!-- end col-md-12 -->\n          <div class=\"col-md-12\">\n            <div class=\"col-md-1\">\n              <select class=\"col-md-1\" id=\"PerPage\" (change)=\"onChangeRowsPerPage($event)\" class=\"form-control col-sm-1\" >\n                <option value=\"5\">#Rows</option>\n                <option value=\"5\">5</option>\n                <option value=\"10\">10</option>\n                <option value=\"25\">25</option>\n                <option value=\"50\">50</option>\n                <option value=\"100\">100</option>\n                <option value=\"9999\">All</option>\n                </select> \n            </div>\n            <div class=\"col-md-3\">\n              <pagination-controls (pageChange)=\"p = $event\">    </pagination-controls>\n            </div>\n           </div>\n      </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/operation/invoicelines/invoicelines.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/operation/invoicelines/invoicelines.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>invoicelines works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/operation/invoicemng/invoicemng.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/operation/invoicemng/invoicemng.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"main-content\">\n  <ngx-alerts></ngx-alerts>\n  <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px' }\" ></ngx-loading>\n    <div class=\"container-fluid\" >\n        <form [formGroup]=\"invoiceForm\" (ngSubmit)=\"onSubmit()\" > \n            <div class=\"row card col-md-12\"  >\n              <div class=\"content\">\n                <div class=\"row card col-md-12\" style=\"background-color:  #f9f9f9;\" >\n                  <br>\n                  <div class=\"col-md-12\" >\n                            <div class=\"col-md-6\"  >\n                                    <label  for=\"\" class=\"control-label\">From Supplier: <span *ngIf=\"getSupplierName.value\" >  {{ getSupplierName.value | json }}   </span> \n                                      <span class=\"star\">*</span> \n                                    </label>\n                                    <ngx-autocomplete autofocus (keyup.enter)=\"focusableCategory.focus()\"\n                                    required\n                \n                                    id=\"splId--\"\n                                    formControlName=\"splId\"\n                                    [searchKeyword]=\"'splName'\" \n                                    [inputId]=\"'searchEmployee'\"\n                                    [placeholderValue]=\"'Enter Supplier'\" \n                                    [entries]=\"Suppliers\" \n                                    (selectedValue)=\"selectSupplierEvent($event)\">\n                                    </ngx-autocomplete>\n                                    <small [hidden]=\"invoiceForm.controls.splId.valid || invoiceForm.controls.splId.pristine\" class=\"text-danger\">\n                                      Supplier is required\n                                    </small>\n                            </div>\n                            <div class=\"col-md-2\">\n                              <label class=\"control-label\" for=\"\">Invoice #:\n                                <span class=\"star\">*</span>\n                            </label>\n                            <input type=\"text\" placeholder=\"Inv Number\" required formControlName=\"invNumber\" class=\"form-control\" #focusableInvNumber (keyup.enter)=\"focusableAmount.focus()\" >\n                            <small [hidden]=\"invoiceForm.controls.invNumber.valid || invoiceForm.controls.invNumber.pristine\" class=\"text-danger\">\n                              Inv number is required\n                            </small>\n                            </div>\n                            <div class=\"col-md-2\">\n                                \n                              <label class=\"control-label\" for=\"\">Amount:\n                                <span class=\"star\">*</span>\n                            </label>\n                            <input type=\"text\" (blur)=\"formatCurrency_TaxableValue($event)\" placeholder=\"Inv Amount\" required formControlName=\"invAmount\" class=\"form-control\" #focusableAmount (keyup.enter)=\"focusableCategory.focus()\" >\n                            <small [hidden]=\"invoiceForm.controls.invAmount.valid || invoiceForm.controls.invAmount.pristine\" class=\"text-danger\">\n                              Inv Amount is required\n                            </small>\n                            </div>\n                            <div class=\"col-md-2\">\n                              \n                              <label class=\"control-label\" for=\"\">Category:\n                                <span class=\"star\">*</span>\n                            </label>\n                            <select value=\"0\" required  formControlName=\"icId\" class=\"form-control\" data-title=\"Single Select\" data-style=\"btn-default btn-block\" data-menu-style=\"dropdown-blue\" #focusableCategory (keyup.enter)=\"focusablePaid.focus()\" >\n                            <option value=\"0\" selected>-- Select--</option>\n                              <option *ngFor=\"let ic of ItemsCategorys\" value={{ic.icId}} >\n                                  {{ic.icName}}\n                              </option>\n\n                            </select> \n                            <small [hidden]=\"invoiceForm.controls.icId.valid || invoiceForm.controls.icId.pristine\" class=\"text-danger\">\n                              Inv category is required\n                            </small>\n                        </div>\n                  </div>\n                  <div class=\"col-md-12\" >\n                    <div class=\"col-md-6\">\n                      <label  for=\"\" class=\"control-label\">To Cost Center: <span *ngIf=\"invoiceForm.value.CostCenterName\" >   {{ invoiceForm.value.CostCenterName | json }}      </span>\n                        <span class=\"star\">*</span>\n                      </label>\n                      <ngx-autocomplete  \n                          #focusableCostCenter\n                          required\n                          (keyup.enter)=\"focusableUpload.focus()\"\n                          formControlName=\"CostCenterId\"\n                          [searchKeyword]=\"'ccName'\" \n                          [inputId]=\"'searchEmployee'\"\n                          [placeholderValue]=\"'Enter Cost Center'\" \n                          [entries]=\"CostCenters\" \n                          (selectedValue)=\"selectCostCenterEvent($event)\">\n                      </ngx-autocomplete>\n                      <small [hidden]=\"invoiceForm.controls.CostCenterId.valid || invoiceForm.controls.CostCenterId.pristine\" class=\"text-danger\">\n                        Cost Ceneter is required\n                      </small>\n                    </div>\n                    <div class=\"col-md-2\">\n                      <label class=\"control-label\" for=\"\">   Paid :\n                        <span class=\"star\">*</span>\n                    </label>\n                    <select value=\"Paid\" required  formControlName=\"invStatus\" #focusablePaid  (keyup.enter)=\"focusableInvDate.focus()\"\n                    class=\"form-control\" data-title=\"Single Select\" data-style=\"btn-default btn-block\" data-menu-style=\"dropdown-blue\">\n                      <option value=\"Paid\" selected >Paid</option>\n                      <option value=\"UnPaid\" >UnPaid</option>\n\n                    </select> \n                    <small [hidden]=\"invoiceForm.controls.invStatus.valid || invoiceForm.controls.invStatus.pristine\" class=\"text-danger\">\n                      Status is required\n                    </small>\n                    </div>\n                      <!--  <span >   {{ invoiceForm.value.invDate | json }} </span> -->\n                            <div class=\"col-md-4\" >\n                              <label class=\"control-label\" for=\"\"> Invoice Date:   \n                                <span class=\"star\">*</span>  \n                            </label>\n                            \n                            <div class=\"form-group\">\n                              <input\n                              #focusableInvDate\n                              required\n                              (keyup.enter)=\"focusableRemarks.focus()\"\n                              focusableInvNumber\n                              formControlName=\"invDate\"\n                              class=\"form-control\"\n                              #datepickerYMD=\"bsDatepicker\"\n                              bsDatepicker\n                              [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD HH:mm' }\">\n                            </div> \n                            <small [hidden]=\"invoiceForm.controls.invDate.valid || invoiceForm.controls.invDate.pristine\" class=\"text-danger\">\n                             Inv Date is required\n                            </small>\n                            </div>\n                  </div>\n                  <div class=\"col-md-12\">\n                    <div class=\"col-md-6\">\n                      <label class=\"control-label\" for=\"\"> Upload Invoice:\n                        <span *ngIf=\"getInvFile.value == null\" > No Attachment</span>\n                        <span *ngIf=\"getInvFile.value != null\" style=\"color: green;\" >File Attached</span>\n                      </label>\n                      <input id=\"custom-input\" type=\"file\" formControlName=\"InvFile\" (change)=\"fileChangeListener($event)\"  class=\"form-control\" #focusableUpload  (keyup.enter)=\"focusableInvNumber.focus()\" >  \n                      <small [hidden]=\"invoiceForm.controls.InvFile.valid || invoiceForm.controls.InvFile.pristine\" class=\"text-danger\">\n                        Upload Invoice please\n                      </small>\n                    </div>\n                    <div class=\"col-md-6\">\n                            <label class=\"control-label\" for=\"\"> Remarks:\n\n                            </label>\n                            <input type=\"text\" placeholder=\"Remarks\" formControlName=\"Remarks\" class=\"form-control\" #focusableRemarks  (keyup.enter)=\"focusableSubmit.focus()\" >\n\n                    </div>\n                    <br><br> <br><br>\n                  </div>\n                </div>\n                <div class=\"footer col-md-12\">\n                    <button type=\"submit\" #focusableSubmit (keyup.enter)=\"focusableCancel.focus()\" class=\"btn btn-primary pe-7s-diskette\"  *ngIf=\"getInvoiceForm.InvoiceId.value == null\" [disabled]=\"invoiceForm.status == 'INVALID' \"   > Add </button> \n                    <button type=\"submit\" #focusableSubmit (keyup.enter)=\"focusableCancel.focus()\" class=\"btn btn-primary pe-7s-diskette\"  *ngIf=\"getInvoiceForm.InvoiceId.value != null\" [disabled]=\"invoiceForm.status == 'INVALID' \"   > Save </button> \n                    <button type=\"button\" #focusableCancel (click)=\"onCancel()\" class=\"btn btn-primary pull-right\" > Cancel </button>\n                </div>\n                <div class=\"col-md-12\">\n              \n                </div>\n            </div>\n          </div>\n        </form>\n<!-- <div>\n  {{ invoiceForm.value | json }}\n</div> -->\n        <div class=\"row card col-md-12\">\n          <br>\n          <h4 class=\"title\">Invoices List</h4>  \n\n         <!-- Toolbar -->\n         <form novalidate [formGroup]=\"searchForm\"> \n          <div class=\"card col-md-12 toolbarCard\" >\n            <div class=\" col-md-12\">\n              <div class=\" col-md-2\" >\n                <i class=\"pe-7s-refresh-2 toolbarIcon\" (click)=\"onGetAllInvoices()\" ></i>\n                <i class=\"pe-7s-trash toolbarIcon\" (click)=\"onDeleteAllSellected()\" ></i>  \n                <i class=\"pe-7s-print toolbarIcon\"  printTitle=\"Invoices\" printSectionId=\"print-section\" ngxPrint ></i>     \n                <i class=\"pe-7s-cloud-download toolbarIcon\" (click)=\"onExportExcel()\"></i>  \n              \n              </div>\n              <div class=\" col-md-2 marginsPaging\">\n                <a routerLink=\"/operation/reports\" routerLinkActive=\"active\" class=\"pull-left\">Invoices Tables-Charts</a> \n              </div>\n              <div class=\" col-md-2\">\n                <select id=\"PerPage\" (change)=\"onChangeRowsPerPage($event)\" class=\"marginsDropdownList form-control\" value=\"5\">\n                  <option value=\"5\">Rows</option>\n                  <option value=\"5\">5</option>\n                  <option value=\"10\">10</option>\n                  <option value=\"25\">25</option>\n                  <option value=\"50\">50</option>\n                  <option value=\"100\">100</option>\n                  <option value=\"9999\">All</option>\n                  </select> \n              </div>\n              <div class=\" col-md-2\">\n                From: {{FromDateString}}    <br>   To: {{ToDateString}} \n              </div>\n              <div class=\" col-md-4 marginsPaging\" >\n                <pagination-controls  (pageChange)=\"pageIndex = $event\" > </pagination-controls>\n              </div>\n              <br>\n            </div>\n            <div class=\" col-md-12\">\n              <div class=\" col-md-2\">\n                <select formControlName=\"ItemCategoryName\"    [ngStyle]=\"{'background-color': searchForm.controls.ItemCategoryName.value ? 'gray' : 'white'}\"\n                class=\"form-control\" data-title=\"Single Select\" placeholder=\"Categories\"\n                data-style=\"btn-default btn-block\" data-menu-style=\"dropdown-blue\">\n                <option value=\"\" >All-Categories</option>\n                <option *ngFor=\"let a of ItemsCategorys\" value={{a.icName}} > {{a.icName}} </option>\n              </select>\n              </div>\n              <div class=\"col-md-2\">\n\n                <select value=\"0\"  formControlName=\"CostCenterName\"  [ngStyle]=\"{'background-color': searchForm.controls.CostCenterName.value ? 'gray' : 'white'}\"\n                  class=\"form-control\" data-title=\"Single Select\" \n                  data-style=\"btn-default btn-block\" data-menu-style=\"dropdown-blue\">\n                  <option value=\"\">All-Cost Centers</option>\n                  <option *ngFor=\"let a of CostCenters\" value={{a.ccName}} > {{a.ccName}} </option>\n                </select>\n              </div>\n              <div class=\"col-md-2\">\n                <select value=\"0\"  formControlName=\"SupplierName\"   [ngStyle]=\"{'background-color': searchForm.controls.SupplierName.value ? 'gray' : 'white'}\"\n                  class=\"form-control\" data-title=\"Single Select\" \n                  data-style=\"btn-default btn-block\" data-menu-style=\"dropdown-blue\">\n                  <option value=\"\">All-Suppliers</option>\n                  <option *ngFor=\"let a of Suppliers\" value={{a.splName}} > {{a.splName}} </option>\n                </select>\n              </div>\n              <div class=\"col-md-2\">\n                    <title>Filter Dates </title>\n                    <input \n      \n                    (bsValueChange)=\"onFilterInvoicesByDate($event)\"\n                    type=\"text\"\n                    class=\"form-control\"\n                    #daterangepicker=\"bsDaterangepicker\"\n                    placeholder=\"Select Date Range\"\n                    bsDaterangepicker\n                    [bsConfig]=\"{ rangeInputFormat : 'MMMM Do YYYY, h:mm:ss a', dateInputFormat: 'MMMM Do YYYY, h:mm:ss a', showWeekNumbers: false }\">\n              </div> \n              <div class=\"col-md-2\">\n                  <button type=\"button\" class=\"btn btn-primary pe-7s-search\"  (click)=\"searchFilter(searchForm.value)\"> Search </button> \n              </div>\n              <div class=\" col-md-2 marginsSearch \">\n                <input #search id=\"search\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\" aria-describedby=\"basic-addon1\" class=\"form-control\" >       \n              </div>\n            </div>\n          </div>\n        </form>\n         <br><br><br><br><br>\n                  <div class=\"content\"> \n                    <div id=\"print-section\" >\n                    <div class=\"fresh-datatables\" style=\"overflow-x:auto;\" >\n                      <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n                      <thead>\n                            <tr>\n                              <th> \n                                <div class=\" form-check\">\n                                  <label class=\" form-check-label\">\n                                    <input id=\"assetItemALL--\" (change)=\"onSelectAll($event)\" class=\" form-check-input\"  type=\"checkbox\" value=\"\" />\n                                    <span class=\" form-check-sign\">\n                                      <span class=\" check\"> </span>\n                                    </span>\n                                  </label>\n                                </div>\n                               </th>\n                              <th >\n                                #\n                              </th> \n                              <th [class.active]=\"order === 'astCode'\" (click)=\"setOrder('astCode')\">\n                                invNumber <span [hidden]=\"reverse\">▼</span>\n                                <span [hidden]=\"!reverse\">▲</span>\n                              </th>\n                              <th [class.active]=\"order === 'astSerialNumber'\" (click)=\"setOrder('astSerialNumber')\" >\n                                invAmount <span [hidden]=\"reverse\">▼</span>\n                                <span [hidden]=\"!reverse\">▲</span>\n                              </th>\n                              <th [class.active]=\"order === 'astPartNumber'\" (click)=\"setOrder('astPartNumber')\">\n                                invDate <span [hidden]=\"reverse\">▼</span>\n                                <span [hidden]=\"!reverse\">▲</span>\n                              </th>\n                              <th [class.active]=\"order === 'astDialNumber'\" (click)=\"setOrder('astDialNumber')\" >\n                                invStatus <span [hidden]=\"reverse\">▼</span>\n                                <span [hidden]=\"!reverse\">▲</span>\n                              </th>\n                              <th [class.active]=\"order === 'astCircuitNumber'\" (click)=\"setOrder('astCircuitNumber')\" >\n                                Remarks <span [hidden]=\"reverse\">▼</span>\n                                <span [hidden]=\"!reverse\">▲</span>\n                              </th>\n                              <th [class.active]=\"order === 'ItemCategoryName'\" (click)=\"setOrder('ItemCategoryName')\">\n                                Category <span [hidden]=\"reverse\">▼</span>\n                                <span [hidden]=\"!reverse\">▲</span>\n                              </th>\n                              <th [class.active]=\"order === 'astPurchaseDate'\" (click)=\"setOrder('astPurchaseDate')\">\n                                Supplier <span [hidden]=\"reverse\">▼</span>\n                                <span [hidden]=\"!reverse\">▲</span>\n                              </th>\n                              <th [class.active]=\"order === 'asttypName'\" (click)=\"setOrder('asttypName')\">\n                                CostCenter <span [hidden]=\"reverse\">▼</span>\n                                <span [hidden]=\"!reverse\">▲</span>\n                              </th>\n                              <th>\n                                Download \n                              </th>\n                      \n                              <th >\n                                Actions \n                              </th>\n        \n                            </tr>\n                      </thead>\n                      <tbody>\n                            <tr  *ngFor=\"let row of Invoices | orderBy: order:reverse:'case-insensitive' | paginate: { itemsPerPage: pageSize, currentPage: pageIndex }; let i = index\">\n                              <td>\n                                <div class=\"form-check\">\n                                  <label class=\" form-check-label\">\n                                    <input id=\"assetItem--{{i}}\" class=\" form-check-input\" (change)=\"onSelect($event, row)\" [(ngModel)]=\"row.checkbox\" [value]=\"row.checkbox\" type=\"checkbox\" value=\"\" />\n                                    <span class=\" form-check-sign\">\n                                      <span class=\" check\"> </span>\n                                    </span>\n                                  </label>\n                                </div>\n                              </td>\n                              <td>{{ i+1 }}</td>\n                              <td>{{ row?.invNumber }}</td>\n                              <td>{{ row?.invAmount }}</td>\n                              <td>{{ row?.invDate }}</td> \n                              <td >{{ row?.invStatus }}</td>\n                              <td >{{ row?.Remarks }}</td>\n                              <td>{{ row?.ItemCategoryName }}</td>\n                              <td>{{ row?.SupplierName }}</td>\n                              <td>{{ row?.CostCenterName }}</td>\n                              <td> \n                                <!-- *ngIf=\"IsInvFileExist(row?.InvFile)\" *ngIf=\"!IsInvFileExist(row?.InvFile)\" -->\n                                <a  *ngIf=\"row.InvFileAttached\"  (click)=\"downloadInvoice(row.InvoiceId, row?.invNumber, row?.SupplierName )\" routerLink > Download </a>\n                                <span *ngIf=\"!row.InvFileAttached\"  > No File</span>\n                              </td>\n                              <td>\n                                <a (click)=\"onEditInvoice(row)\" class=\"btn btn-simple btn-warning btn-icon edit\"><i class=\"fa fa-edit\"></i></a>\n                                <a (click)=\"onDeleteInvoice(row)\" class=\"btn btn-simple btn-danger btn-icon remove \"><i class=\"fa fa-times\"></i></a> </td>\n                            </tr>\n                            <tr>\n                              <td>\n                                    <div  class=\"text-center\" style=\"color: red; width: auto\">\n                                      <p *ngIf=\"Invoices.length === 0\">\n                                          No Entry found\n                                      </p>\n                                    </div>\n                              </td>\n                            </tr>\n                            <tr>\n                              <td>\n                              </td>\n                              <td>Total Amounts</td>\n                              <td> = </td>\n                              <td>{{ TotalInvoicesAmount }}</td>\n                              <td></td> \n                              <td ></td>\n                              <td ></td>\n                              <td></td>\n                              <td></td>\n                              <td> </td>\n                              <td>\n                            </tr>\n                      </tbody>\n                      </table>\n                    </div>\n                   </div> \n                   <!-- endprintsection -->\n                  </div>\n            <div class=\"col-md-12\">\n              <div class=\"col-md-1\">\n                <select class=\"col-md-1\" id=\"PerPage\" (change)=\"onChangeRowsPerPage($event)\" class=\"form-control col-sm-1\" >\n                  <option value=\"5\">#Rows</option>\n                  <option value=\"5\">5</option>\n                  <option value=\"10\">10</option>\n                  <option value=\"25\">25</option>\n                  <option value=\"50\">50</option>\n                  <option value=\"100\">100</option>\n                  <option value=\"9999\">All</option>\n                  </select> \n              </div>\n              <div class=\"col-md-3\">\n                <pagination-controls (pageChange)=\"pageIndex = $event\">    </pagination-controls>\n              </div>\n            </div>\n        </div>\n\n\n    </div>\n</div>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/operation/invoicemng/reports/lbd-chartBranchs/lbd-chartBranch.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/operation/invoicemng/reports/lbd-chartBranchs/lbd-chartBranch.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n  <div class=\"header\">\n    <h4 class=\"title\">{{ title }}</h4>\n    <p class=\"category\">{{ subtitle }}</p>\n  </div>\n  <div class=\"content\">\n    <div [attr.id]=\"chartId\" class=\"ct-chart {{ chartClass }}\"></div>\n\n    <div class=\"footer\">\n      <div class=\"legend\">\n        <span *ngFor=\"let item of legendItemsBranchs\">\n          <i [ngClass]=\"item.imageClass\"></i> {{ item.title }}\n        </span>\n      </div>\n      <hr *ngIf=\"withHr\">\n      <div class=\"stats\">\n        <i [ngClass]=\"footerIconClass\"></i> {{ footerText }}\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/operation/invoicemng/reports/lbd-chartMonths/lbd-chartMonth.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/operation/invoicemng/reports/lbd-chartMonths/lbd-chartMonth.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n  <div class=\"header\">\n    <h4 class=\"title\">{{ title }}</h4>\n    <p class=\"category\">{{ subtitle }}</p>\n  </div>\n  <div class=\"content\">\n    <div [attr.id]=\"chartId\" class=\"ct-chart {{ chartClass }}\"></div>\n\n    <div class=\"footer\">\n      <div class=\"legend\">\n        <span *ngFor=\"let item of legendItemsMonths\">\n          <i [ngClass]=\"item.imageClass\"></i> {{ item.title }}\n        </span>\n      </div>\n      <hr *ngIf=\"withHr\">\n      <div class=\"stats\">\n        <i [ngClass]=\"footerIconClass\"></i> {{ footerText }}\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/operation/invoicemng/reports/reports.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/operation/invoicemng/reports/reports.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <ngx-alerts></ngx-alerts>\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px' }\" ></ngx-loading>\n      <div class=\"container-fluid\" >\n\n            <div class=\"row card col-md-12\"  >\n                <a routerLink=\"/operation/invoicemng\" routerLinkActive=\"active\" class=\"pull-left\">Back to Invoices Management</a> \n                <div class=\"content\">\n                  <div class=\"row card col-md-12\" style=\"background-color:  #f9f9f9;\" >\n                    <br>\n                    <div class=\"col-md-6\">\n                      <div class=\" row \">\n                        <form novalidate [formGroup]=\"filterByMonthForm\"> \n                          \n                        <div class=\"col-md-2\">\n\n                              <select formControlName=\"ItemCategoryName1\"    [ngStyle]=\"{'background-color': filterByMonthForm.controls.ItemCategoryName1.value ? 'gray' : 'white'}\"\n                              (change)=\"onFilterChange(filterByMonthForm.value, 'forMonths')\" \n                              class=\"form-control\" data-title=\"Single Select\" placeholder=\"Categories\"\n                              data-style=\"btn-default btn-block\" data-menu-style=\"dropdown-blue\">\n                              <option value=\"\" >Cat - 1</option>\n                              <option *ngFor=\"let a of ItemsCategorys\" value={{a.icName}} > {{a.icName}} </option>\n                              </select>\n                        </div>\n                        <div class=\"col-md-2\">\n\n                              <select formControlName=\"ItemCategoryName2\"   [ngStyle]=\"{'background-color': filterByMonthForm.controls.ItemCategoryName2.value ? 'gray' : 'white'}\"\n                               (change)=\"onFilterChange(filterByMonthForm.value, 'forMonths')\" \n                              class=\"form-control\" data-title=\"Single Select\" placeholder=\"Categories\"\n                              data-style=\"btn-default btn-block\" data-menu-style=\"dropdown-blue\">\n                              <option value=\"\" >Cat - 2</option>\n                              <option *ngFor=\"let a of ItemsCategorys\" value={{a.icName}} > {{a.icName}} </option>\n                              </select>\n\n                        </div>\n                        <div class=\"col-md-2\">\n\n                              <select formControlName=\"ItemCategoryName3\"  [ngStyle]=\"{'background-color': filterByMonthForm.controls.ItemCategoryName3.value ? 'gray' : 'white'}\"\n                               (change)=\"onFilterChange(filterByMonthForm.value, 'forMonths')\" \n                              class=\"form-control\" data-title=\"Single Select\" placeholder=\"Categories\"\n                              data-style=\"btn-default btn-block\" data-menu-style=\"dropdown-blue\">\n                              <option value=\"\" >Cat - 3</option>\n                              <option *ngFor=\"let a of ItemsCategorys\" value={{a.icName}} > {{a.icName}} </option>\n                              </select>\n                        </div>\n                        <div class=\"col-md-2\">\n                          <select formControlName=\"ItemCategoryName4\"   [ngStyle]=\"{'background-color': filterByMonthForm.controls.ItemCategoryName4.value ? 'gray' : 'white'}\"\n                          (change)=\"onFilterChange(filterByMonthForm.value, 'forMonths' )\" \n                          class=\"form-control\" data-title=\"Single Select\" placeholder=\"Categories\"\n                          data-style=\"btn-default btn-block\" data-menu-style=\"dropdown-blue\">\n                          <option value=\"\" >Cat - 4</option>\n                          <option *ngFor=\"let a of ItemsCategorys\" value={{a.icName}} > {{a.icName}} </option>\n                          </select>\n                    </div>\n                        <div>\n                          <i class=\"pe-7s-refresh-2 toolbarIcon\" (click)=\"onGetAllInvoices(filterByMonthForm, 'forMonths')\" ></i>\n                        </div>\n                      </form>\n                      </div>\n                      <div class=\"row \">\n                          <br>\n                          <lbd-chartMonth\n                          [title]=\"'Monthly Purchasing'\"\n                          [subtitle]=\"'All invoices including Taxes'\"\n                          [chartTypeMonth]=\"activityChartTypeMonth\"\n                          [chartDataForMonths]=\"activityChartDataForMonths\"\n                          [chartOptions]=\"activityChartOptions\"\n                          [chartResponsive]=\"activityChartResponsive\"\n                          [legendItemsMonths]=\"activityChartLegendItemsMonth\"\n                          [withHr]=\"true\"\n                          [footerIconClass]=\"'fa fa-check'\"\n                          [footerText]=\"'Data information certified'\">\n                          </lbd-chartMonth>\n\n                      </div>\n\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"row \">\n                        <form novalidate [formGroup]=\"filterByBranchForm\"> \n                        <div class=\"col-md-2\">\n                          <select formControlName=\"ItemCategoryName1\"  [ngStyle]=\"{'background-color': filterByBranchForm.controls.ItemCategoryName1.value ? 'gray' : 'white'}\"\n                            (change)=\"onFilterChange(filterByBranchForm.value, 'forBranchs')\" \n                          class=\"form-control\" data-title=\"Single Select\" placeholder=\"Categories\"\n                          data-style=\"btn-default btn-block\" data-menu-style=\"dropdown-blue\">\n                          <option value=\"\" >Category</option>\n                          <option *ngFor=\"let a of ItemsCategorys\" value={{a.icName}} > {{a.icName}} </option>\n                        </select>\n                        </div>\n                        <div class=\"col-md-2\">\n                          <!-- <select formControlName=\"ItemCategoryName2\"  [ngStyle]=\"{'background-color': filterByBranchForm.controls.ItemCategoryName2.value ? 'gray' : 'white'}\"\n                           (change)=\"onFilterChange(filterByBranchForm.value, 'forBranchs')\" \n                          class=\"form-control\" data-title=\"Single Select\" placeholder=\"Categories\"\n                          data-style=\"btn-default btn-block\" data-menu-style=\"dropdown-blue\">\n                          <option value=\"\" >Cat - 2</option>\n                          <option *ngFor=\"let a of ItemsCategorys\" value={{a.icName}} > {{a.icName}} </option>\n                        </select> -->\n\n                        </div>\n                        <div class=\"col-md-2\">\n\n                          <!-- <select formControlName=\"ItemCategoryName3\"  [ngStyle]=\"{'background-color': filterByBranchForm.controls.ItemCategoryName3.value ? 'gray' : 'white'}\"\n                           (change)=\"onFilterChange(filterByBranchForm.value, 'forBranchs')\" \n                          class=\"form-control\" data-title=\"Single Select\" placeholder=\"Categories\"\n                          data-style=\"btn-default btn-block\" data-menu-style=\"dropdown-blue\">\n                          <option value=\"\" >Cat - 3</option>\n                          <option *ngFor=\"let a of ItemsCategorys\" value={{a.icName}} > {{a.icName}} </option>\n                        </select> -->\n                        </div>\n                        <div class=\"col-md-3\">\n                          <title>Filter Dates </title>\n                            <input  \n                            (bsValueChange)=\"onFilterInvoicesByDate($event, filterByBranchForm.value, 'forBranchs')\"\n                            type=\"text\"\n                            class=\"form-control\"\n                            #daterangepicker=\"bsDaterangepicker\"\n                            placeholder=\"Select Date Range\"\n                            bsDaterangepicker\n                            [bsConfig]=\"{ rangeInputFormat : 'MMMM Do YYYY, h:mm:ss a', dateInputFormat: 'MMMM Do YYYY, h:mm:ss a', showWeekNumbers: false }\">\n                         \n                        </div> \n                        <div>\n                          <!-- <i class=\"pe-7s-refresh-2 toolbarIcon\" (click)=\"onGetAllInvoices(filterByMonthForm, 'forMonths')\" ></i> -->\n                          From: {{FromDateString}}    <br>   To: {{ToDateString}} \n                        </div>\n\n                        </form>\n                      </div>      \n                      <div class=\"row \">\n                        <br>\n                        <lbd-chartBranch\n                        [title]=\"'Branchs Purchasing'\"\n                        [subtitle]=\"'All invoices including Taxes'\"\n                        [chartTypeBranch]=\"activityChartTypeBranch\"\n                        [chartDataForBranchs]=\"activityChartDataForBranchs\"\n                        [chartOptions]=\"activityChartOptions\"\n                        [chartResponsive]=\"activityChartResponsive\"\n                        [legendItemsBranchs]=\"activityChartLegendItemsBranchs\"\n                        [withHr]=\"true\"\n                        [footerIconClass]=\"'fa fa-check'\"\n                        [footerText]=\"'Data information certified'\">\n                      </lbd-chartBranch>\n                                                   <!-- From:  {{dateFrom}} To:   {{dateTo}} -->\n                      </div>\n                    </div>             \n                  </div>\n                  <div class=\"row card col-md-12\" style=\"background-color:  #f9f9f9;\" >\n                    <br>\n                    <div class=\"col-md-6\">\n                      <div class=\" row \">\n                       <title> Monthly Table </title> \n                      </div>\n                      <div class=\"row \">\n                        <div id=\"print-section\" >\n                          <div class=\"fresh-datatables\"  >\n                            <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">                     \n                            <thead>\n                                  <tr>\n                                    <th style=\"color: green;\">Categories</th>\n                                    <th> Jan </th>\n                                    <th> Feb </th>\n                                    <th> March </th>\n                                    <th> April </th>\n                                    <th> May </th>\n                                    <th> June </th>\n                                    <th> July </th>\n                                    <th> Aug </th>\n                                    <th> Sep </th>\n                                    <th> Oct </th>\n                                    <th> Nov </th>\n                                    <th> Dec </th>\n                                    <th style=\"color: green;\">Total</th>              \n                                  </tr>\n                            </thead>\n                            <tbody>\n                                  <tr *ngFor=\"let row of activityChartDataForMonths.series\">\n                                    <td style=\"color: green;\">{{ row[12] }}</td>\n                                    <td>{{ row[0] }}</td>\n                                    <td>{{ row[1] }}</td>\n                                    <td>{{ row[2] }}</td>\n                                    <td>{{ row[3] }}</td>\n                                    <td>{{ row[4] }}</td> \n                                    <td>{{ row[5] }}</td>\n                                    <td>{{ row[6] }}</td>\n                                    <td>{{ row[7] }}</td>\n                                    <td>{{ row[8] }}</td>\n                                    <td>{{ row[9] }}</td>\n                                    <td>{{ row[10] }}</td>\n                                    <td>{{ row[11] }}</td> \n                                    <td style=\"color: green;\">{{ row[13] }}</td>                       \n                                  </tr>                      \n                            </tbody>\n                            </table>\n                          </div>\n                         </div>\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <div class=\"row \">\n                        <title>Branchs Table  </title> \n                      </div>\n          \n                      <div class=\"row \">\n                        <div id=\"print-section\" >\n                          <div class=\"fresh-datatables\"  >\n                            <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\"> \n                            <thead>\n                                  <tr >\n                                    <th style=\"color: green;\">Cost Centers</th>\n                                    <th> Amounts  </th>\n                                    <th style=\"color: green;\">Total</th>        \n                                  </tr>\n                            </thead>\n                            <tbody>\n                              <!-- *ngFor=\"let row of activityChartDataForBranchs?.labels; let i = index;\" -->\n                                  <tr >\n                                    <td>{{ activityChartDataForBranchs?.labels }}</td>\n                                    <td style=\"color: green;\">{{ activityChartDataForBranchs.series }} </td>\n                                    <td style=\"color: green;\"> {{ totalByCC }}</td>                       \n                                  </tr>\n                            </tbody>\n                            </table>\n                          </div>\n                         </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n            </div>\n \n  \n      </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/operation/mulipleselectbox/mulipleselectbox.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/operation/mulipleselectbox/mulipleselectbox.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<title > {{ name }}</title>\n<p>\n  Clicking on items toggles their selection, single arrow buttons move the selected items, double-arrows move all items\n</p>\n<div class=\"container\">\n  <ul>\n    LIST 1\n    <li   *ngFor=\"let item of list1\" [class.item-selected]=\"item.selected\"   (click)=\"toggleSelection(item, 1)\">{{item.text}}</li>\n  </ul>\n  <div class=\"buttons-container\">\n  <button class=\"pe-7s-angle-right-circle\" (click)=\"moveSelected('right')\"></button>\n  <button class=\"pe-7s-angle-right-circle\" (click)=\"moveAll('right')\"></button>\n  <button class=\"pe-7s-angle-left-circle\" (click)=\"moveSelected('left')\"></button>\n  <button class=\"pe-7s-angle-left-circle\" (click)=\"moveAll('left')\"></button>\n  </div>\n  <ul>\n    LIST 2\n    <li   *ngFor=\"let item of list2\"    [class.item-selected]=\"item.selected\"    (click)=\"toggleSelection(item, 2)\">{{item.text}}</li>\n  </ul>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/operation/requestmng/requestmng.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/operation/requestmng/requestmng.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>requestmng works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/operation/testautocomplete/testautocomplete.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/operation/testautocomplete/testautocomplete.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>testautocomplete works!</p>\n\n\n<h3 style=\"text-align: center\">{{title}}</h3>\n\n<div style=\"width: 50%;position: absolute;left: 25%;top: 12%\">\n  <ngx-autocomplete [searchKeyword]=\"'name'\" [inputId]=\"'searchEmployee'\"\n    [placeholderValue]=\"'Enter the Employee Name'\" [entries]=\"employees\" (selectedValue)=\"selectEvent($event)\">\n  </ngx-autocomplete>\n</div>\n\n<div style=\"margin-top: 50%; font-weight: bold\">\n    Selected Employee: {{ selected_employee}}\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/operation/testlogin/testlogin.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/operation/testlogin/testlogin.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <p>You Logged In Successfully </p>\n\n    </div>\n</div>\n");

/***/ }),

/***/ "./src/app/operation/assetmng/assetmng.component.css":
/*!***********************************************************!*\
  !*** ./src/app/operation/assetmng/assetmng.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n.toolbarIcon{\r\n  font-size: 25px;\r\n  color: black;\r\n  padding-top: 10px;\r\n  padding-bottom: 7px;\r\n  padding-right: 7px;\r\n  padding-left: 7px;\r\n  cursor: pointer;\r\n  /* box-shadow: 1px 2px grey; */\r\n}\r\n.toolbarIcon:hover {\r\n  margin-top: 2px;\r\n  font-size: 28px;\r\n  color: blue;\r\n  padding-top: 10px;\r\n  padding-bottom: 7px;\r\n  padding-right: 10px;\r\n  padding-left: 10px;\r\n  cursor: pointer;\r\n  border: 1px solid #f9f9f900;\r\n  background-color: white;\r\n}\r\n.marginsDropdownList{\r\n  margin-top: 8px;\r\n  padding-top: 7px;\r\n  padding-bottom: 7px;\r\n}\r\n.marginsPaging{\r\n  margin-top: 2px;\r\n  padding-top: 7px;\r\n  padding-bottom: 7px;\r\n}\r\n.marginsSearch{\r\n  /* margin-right: 10px; */\r\n  padding-top: 7px;\r\n  padding-bottom: 7px;\r\n}\r\n.toolbarCard{\r\n  box-shadow: 1px 1px 1px 1px grey; \r\n  /* margin: auto; */\r\n  /* height: 40px; */\r\n  background-color: #f9f9f9;\r\n  border: 1px solid rgb(212, 212, 212);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3BlcmF0aW9uL2Fzc2V0bW5nL2Fzc2V0bW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLG9DQUFvQztBQUN0QyIsImZpbGUiOiJzcmMvYXBwL29wZXJhdGlvbi9hc3NldG1uZy9hc3NldG1uZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4udG9vbGJhckljb257XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogN3B4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDdweDtcclxuICBwYWRkaW5nLWxlZnQ6IDdweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLyogYm94LXNoYWRvdzogMXB4IDJweCBncmV5OyAqL1xyXG59XHJcbi50b29sYmFySWNvbjpob3ZlciB7XHJcbiAgbWFyZ2luLXRvcDogMnB4O1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBjb2xvcjogYmx1ZTtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogN3B4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjlmOWY5MDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLm1hcmdpbnNEcm9wZG93bkxpc3R7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIHBhZGRpbmctdG9wOiA3cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDdweDtcclxufVxyXG4ubWFyZ2luc1BhZ2luZ3tcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgcGFkZGluZy10b3A6IDdweDtcclxuICBwYWRkaW5nLWJvdHRvbTogN3B4O1xyXG59XHJcbi5tYXJnaW5zU2VhcmNoe1xyXG4gIC8qIG1hcmdpbi1yaWdodDogMTBweDsgKi9cclxuICBwYWRkaW5nLXRvcDogN3B4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA3cHg7XHJcbn1cclxuLnRvb2xiYXJDYXJke1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDFweCBncmV5OyBcclxuICAvKiBtYXJnaW46IGF1dG87ICovXHJcbiAgLyogaGVpZ2h0OiA0MHB4OyAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxMiwgMjEyLCAyMTIpO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/operation/assetmng/assetmng.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/operation/assetmng/assetmng.component.ts ***!
  \**********************************************************/
/*! exports provided: AssetmngComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetmngComponent", function() { return AssetmngComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var app_masterdata_asset_services_asset_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/masterdata/asset/services/asset.service */ "./src/app/masterdata/asset/services/asset.service.ts");
/* harmony import */ var app_masterdata_employee_services_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/masterdata/employee/services/employee.service */ "./src/app/masterdata/employee/services/employee.service.ts");
/* harmony import */ var app_masterdata_branch_services_branch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/masterdata/branch/services/branch.service */ "./src/app/masterdata/branch/services/branch.service.ts");
/* harmony import */ var app_masterdata_company_services_company_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/masterdata/company/services/company.service */ "./src/app/masterdata/company/services/company.service.ts");
/* harmony import */ var app_shared_services_exportexcel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/exportexcel.service */ "./src/app/shared/services/exportexcel.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/__ivy_ngcc__/fesm5/ngx-order-pipe.js");
/* harmony import */ var app_masterdata_assettype_services_assettype_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/masterdata/assettype/services/assettype.service */ "./src/app/masterdata/assettype/services/assettype.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var app_shared_services_sweetalert_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/shared/services/sweetalert.service */ "./src/app/shared/services/sweetalert.service.ts");
/* harmony import */ var ngx_alerts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-alerts */ "./node_modules/ngx-alerts/__ivy_ngcc__/fesm5/ngx-alerts.js");
/* harmony import */ var app_shared_services_logs_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/shared/services/logs.service */ "./src/app/shared/services/logs.service.ts");
/* harmony import */ var app_shared_services_shareddata_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/shared/services/shareddata.service */ "./src/app/shared/services/shareddata.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
















var AssetmngComponent = /** @class */ (function () {
    function AssetmngComponent(swalSrv, logSrv, alertService, shrdSrv, astSrv, astTypeSrv, empSrv, brnSrv, comSrv, expExcelSrv, orderPipe, fb, route) {
        this.swalSrv = swalSrv;
        this.logSrv = logSrv;
        this.alertService = alertService;
        this.shrdSrv = shrdSrv;
        this.astSrv = astSrv;
        this.astTypeSrv = astTypeSrv;
        this.empSrv = empSrv;
        this.brnSrv = brnSrv;
        this.comSrv = comSrv;
        this.expExcelSrv = expExcelSrv;
        this.orderPipe = orderPipe;
        this.fb = fb;
        this.route = route;
        this.showByEmployees = false;
        this.pageIndex = 1;
        this.pageSize = 5;
        this.settings = {};
        this.asset = {};
        this.CodeExist = false;
        this.AssetTemp = {};
        this.temp = [];
        this.Assets = [];
        this.order = "info.name";
        this.reverse = false;
        this.SelectedAssets = [];
        this.SelectedEmployees = [{ empFullName: '', empHRCode: '', assets: '' }];
        this.AssetTypes = [];
        this.Branchs = [];
        this.Employees = [];
        this.EmployeesList = [];
        this.Companys = [];
        this.sortedCollection = orderPipe.transform(this.Assets, 'astDescription');
        // ////console.log('sortedCollection....' , this.sortedCollection);
        // for (let i = 1; i <= this.Assets.length; i++) {
        //   this.Assets.push();
        // }
        this.assignForm = this.fb.group({
            empId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            empFullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            currentUserId: null,
            assetsCurrent: [],
            assetsNew: this.fb.array([])
        });
        this.onGetAllEmployees();
        this.onGetAllAssetsTypes();
        this.onGetAllAssets();
        this.onGetAllBranchs();
        this.onGetAllCompanys();
    }
    AssetmngComponent.prototype.AddUserLog = function (action) {
        this.logSrv.sendUserLog(action).subscribe(function (res) {
            //console.log(res);
        });
    };
    AssetmngComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.settings = {
            singleSelection: false,
            idField: 'astId',
            textField: "astCodeDescEmp",
            enableCheckAll: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            limitSelection: -1,
            clearSearchFilter: true,
            maxHeight: 197,
            itemsShowLimit: 6,
            searchPlaceholderText: 'Search by Code / Description / Empoyee',
            noDataAvailablePlaceholderText: 'No Data Available',
            closeDropDownOnSelection: false,
            showSelectedItemsAtTop: false,
            defaultOpen: false
        };
        this.route.queryParams.subscribe(function (params) {
            debugger;
            if (params != {}) {
                _this.assignForm.get('empId').setValue(params.empId);
                _this.assignForm.get('empFullName').setValue(params.empFullName);
                _this.assignForm.get('assetsCurrent').setValue(JSON.parse(params.assetsCurrent)); // incase the assets ent from the Emplyee page
                var id = params.empId;
                debugger;
                _this.empSrv.GetEmployeeById(id).subscribe(function (e) {
                    debugger;
                    _this.assignForm.get('assetsCurrent').patchValue(e.assetsCurrent);
                    debugger;
                });
            }
        });
    };
    AssetmngComponent.prototype.onSubmit = function (status) {
        var _this = this;
        debugger;
        this.shrdSrv.getCurrentUser().subscribe(function (res) {
            _this.assignForm.get('currentUserId').setValue(res.usrId);
        });
        this.astSrv.assignAssetToEmp(this.assignForm.value).subscribe(function (emp) {
            debugger;
            _this.swalSrv.showSwal('basic-success', "( " + emp.assetsCurrent.length + " )Assets assigned successfully to: " + emp.empFullName + ".");
            _this.onGetAllAssets();
            _this.assignForm.reset();
            _this.onDeSelectAll();
        });
    };
    AssetmngComponent.prototype.onCancel = function () {
        this.assignForm.reset();
    };
    // onScrap(row){
    //   Swal.fire({
    //     title: 'This Asset Will Be Removed from The Operation as a Scrap</h4>',
    //     icon: 'info',
    //     // html: ' <ul *ngFor=" let a of assets "> <li> a.astCode  </li>   </ul> ',
    //     showCloseButton: true,
    //     showCancelButton: true,
    //     focusConfirm: false,
    //     confirmButtonText:  '<i class="fa "></i>Yes Remove',
    //     confirmButtonAriaLabel: '',
    //     cancelButtonText:  '<i class="fa "> Cancel</i>',
    //     cancelButtonAriaLabel: ''
    //   }).then(res => {
    //     if(res.value){
    //       this.astSrv.getAssetId(row.astId).subscribe((a: AssetModel) =>{
    //           this.onGetAllAssets();
    //           this.swalSrv.showSwal('basic-success', "Asset with code( " + a.astCode + " ) Added to the Scrap Successfully ");
    //           this.AddUserLog( "Asset with code( " + a.astCode + " ) Added to the Scrap Successfully ");
    //           // this.AddAssetTrackingLog(a, "Scrap", a.EmployeeName); 
    //           this.logSrv.sendAssetTrackingLog(a, a.EmployeeName, "Scrap").subscribe(logged=>{ 
    //             // this.onGetAllAssets();
    //           }); 
    //       }, error => {
    //         // this.loading = false;
    //         if(error.message.includes('Http failure response for http://')){
    //           this.swalSrv.showSwal('basic-error', " Server connection Error / Data is not updated ");
    //           this.AddUserLog( "Server connection Error ( " + error + " )" );
    //         }
    //       });
    //     }
    //   })
    //   // 
    //   // this.astSrv.getAssetId(row.astId).subscribe(a=>{
    //   //   // this.onGetAllAssets();
    //   // })
    // }
    AssetmngComponent.prototype.customSearchFn = function (term, item) {
        term = term.toLocaleLowerCase();
        return item.astDescription.toLocaleLowerCase().indexOf(term) > -1 ||
            item.astCode.toLocaleLowerCase().indexOf(term) > -1;
    };
    AssetmngComponent.prototype.createItem = function (item) {
        return this.fb.group({
            astId: item.astId,
            astCode: item.astCode,
            astCodeDescEmp: item.astCodeDescEmp,
            EmployeeId: this.Assets.find(function (x) { return x.astId === item.astId; }).empId,
            EmployeeName: this.Assets.find(function (x) { return x.astId === item.astId; }).EmployeeName
        });
    };
    AssetmngComponent.prototype.onChangeAssets = function (e) {
        var numberOfAssets = e.target.value || 0;
        if (this.getAssetsNew.length < numberOfAssets) {
            for (var i = this.getAssetsNew.length; i < numberOfAssets; i++) {
                this.getAssetsNew.push(this.fb.group({
                    astCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                    astDescription: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email]]
                }));
            }
        }
        else {
            for (var i = this.getAssetsNew.length; i >= numberOfAssets; i--) {
                this.getAssetsNew.removeAt(i);
            }
        }
    };
    AssetmngComponent.prototype.onGetAllAssets = function () {
        var _this = this;
        this.astSrv.getAllAssets().subscribe(function (asts) {
            debugger;
            _this.Assets = [];
            asts.forEach(function (a) {
                if (!a.IsScrap) {
                    _this.Assets.push(a);
                }
            });
            _this.Assets.forEach(function (x) {
                x.astCodeDescEmp = x.astCode + " - " + x.AssetTypeName + " - " + x.astDescription + " - " + x.astCircuitNumber + " - " + x.astDialNumber + "  ( Current Emp:  " + x.EmployeeName + " ).";
            });
            _this.temp = _this.Assets; // for search
        }, function (err) {
            _this.alertService.danger('Server Error');
        });
    };
    AssetmngComponent.prototype.onGetAllAssetsTypes = function () {
        var _this = this;
        this.astTypeSrv.getAllAssetsTypes().subscribe(function (astTypes) {
            _this.AssetTypes = astTypes;
        });
    };
    AssetmngComponent.prototype.onGetAllEmployees = function () {
        var _this = this;
        this.empSrv.getAllEmployees().subscribe(function (emps) {
            debugger;
            _this.Employees = emps;
            emps.forEach(function (e) {
                var employee = { empId: 0, empFullName: '', empHRCode: '', EmpCode: '', DepartmentName: '' };
                employee.empId = e.empId;
                employee.empFullName = e.empFullName;
                employee.DepartmentName = e.DepartmentName;
                employee.EmpCode = e.empHRCode + " - " + e.DepartmentName + " - " + e.empFullName + ".";
                if (employee.EmpCode != null) {
                    _this.EmployeesList.push(employee);
                }
            });
        });
    };
    AssetmngComponent.prototype.onGetAllBranchs = function () {
        var _this = this;
        this.brnSrv.getAllBranchs().subscribe(function (brns) {
            _this.Branchs = brns;
        });
    };
    AssetmngComponent.prototype.onGetAllCompanys = function () {
        var _this = this;
        //    
        this.comSrv.getAllCompanys().subscribe(function (coms) {
            ////console.log(this.Companys);
            //console.log(coms);
            //      
            _this.Companys = coms;
        });
    };
    AssetmngComponent.prototype.selectEvent = function (event) {
        var _this = this;
        debugger;
        this.assignForm.controls['empId'].setValue(event.empId);
        this.assignForm.controls['empFullName'].setValue(event.empFullName);
        this.empSrv.GetEmployeeById(event.empId).subscribe(function (e) {
            _this.assignForm.get('assetsCurrent').patchValue(e.assetsCurrent);
        });
    };
    AssetmngComponent.prototype.IsCircuitNumberExist = function () {
        return this.Assets.find(function (ast) {
            //  
            if (ast.astCircuitNumber) {
                //    //console.log(ast.astCircuitNumber)
                return true;
            }
            return false;
        });
    };
    AssetmngComponent.prototype.IsDailNumberExist = function () {
        return this.Assets.find(function (ast) {
            //  
            if (ast.astDialNumber) {
                //console.log(ast.astDialNumber)
                return true;
            }
            return false;
        });
    };
    AssetmngComponent.prototype.onFilterByAssetType = function (e) {
        this.pageIndex = 1;
        this.pageSize = 5;
        if (e.target.selectedOptions[0].text.toString() == 'Show All') {
            this.showByEmployees = false;
            this.onGetAllAssets();
        }
        else if (e.target.selectedOptions[0].text.toString() == 'Show By Employees') {
            this.showByEmployees = true;
            this.onGetAllEmployees();
        }
        else {
            this.showByEmployees = false;
            //  this.onGetAllAssets();
            var val = e.target.selectedOptions[0].text.toString();
            // //console.log(Object.keys(this.temp[0]).length);
            var value_1 = val.toString().toLowerCase().trim();
            // get the amount of columns in the table
            var count_1 = Object.keys(this.temp[0]).length;
            // get the key names of each column in the dataset
            var keys_1 = Object.keys(this.temp[0]);
            // assign filtered matches to the active datatable
            this.Assets = this.temp.filter(function (item) {
                // iterate through each row's column data
                for (var i = 0; i < count_1; i++) {
                    // check for a match
                    if ((item[keys_1[i]] &&
                        item[keys_1[i]]
                            .toString()
                            .toLowerCase()
                            .indexOf(value_1) !== -1) ||
                        !value_1) {
                        // found match, return true to add to result set
                        // //console.log(item, 1);
                        return true;
                    }
                }
            });
        }
    };
    AssetmngComponent.prototype.resetForm = function () {
        // beacuse i need select all crickter by default when i click on reset button.
        // this.setForm();
        // this.multiSelect.toggleSelectAll();
        // i try below variable isAllItemsSelected reference from your  repository but still not working
        // this.multiSelect.isAllItemsSelected = true;
    };
    AssetmngComponent.prototype.onFilterChange = function (item) {
        //console.log(item);
        this.customSearchFn;
    };
    AssetmngComponent.prototype.onDropDownClose = function (item) {
        //console.log(item);
    };
    AssetmngComponent.prototype.onItemSelect = function (item) {
        //console.log('item  .. ', item);
        this.getAssetsNew.push(this.createItem(item));
        // this.getAssetIds.push(new FormControl(item.astId));
        //console.log('this.getAssignForm...' ,  this.getAssignForm);
    };
    AssetmngComponent.prototype.onDeSelect = function (item) {
        //console.log(item);
        this.getAssetsNew.removeAt(item);
    };
    AssetmngComponent.prototype.onSelectAllAssets = function (items) {
        var _this = this;
        //console.log(items);
        items.forEach(function (itm) {
            _this.getAssetsNew.push(_this.createItem(itm));
        });
    };
    AssetmngComponent.prototype.onDeSelectAll = function (items) {
        var _this = this;
        this.getAssetsNew.value.forEach(function (itm) {
            _this.getAssetsNew.removeAt(itm);
        });
    };
    AssetmngComponent.prototype.onSelectCheckboxAST = function (e, ast) {
        var _this = this;
        if (e.target.checked) {
            this.SelectedAssets.push(ast);
            var allChecked_1 = true;
            this.Assets.forEach(function (asset, index) {
                var assetItemHTMLelemnt = document.getElementById('assetItem--' + index);
                if (!assetItemHTMLelemnt.checked)
                    allChecked_1 = false;
                // //console.log(this.SelectedAssets);
            });
            if (allChecked_1)
                var assetItemALLHTMLelemnt = document.getElementById("assetItemALL--");
            assetItemALLHTMLelemnt.checked = true;
            // //console.log('Selected Assets:  ' ,  this.SelectedAssets);
        }
        else if (!e.target.checked) {
            var assetItemALLHTMLelemnt = document.getElementById("assetItemALL--");
            if (assetItemALLHTMLelemnt.checked)
                assetItemALLHTMLelemnt.checked = false;
            this.SelectedAssets.filter(function (asset, selectedIndex) {
                if (asset.astId === ast.astId) {
                    _this.SelectedAssets.splice(selectedIndex, 1);
                }
            });
        }
        // //console.log('Selected Assets:  ' ,  this.SelectedAssets);
        // //console.log(' Assets:  ' ,  this.Assets);
        // 
    };
    AssetmngComponent.prototype.onSelectCheckboxEMP = function (e, emp) {
        var _this = this;
        if (e.target.checked) {
            if (emp.assetsCurrent) {
                emp.assetsCurrent.forEach(function (a, index) {
                    var _a;
                    var assetIndex = "Asset " + (index + 1);
                    a = (_a = {}, _a[assetIndex] = a.astCode + "-" + a.astDescription, _a);
                    Object.assign(emp, a);
                });
            }
            this.SelectedEmployees.push(emp);
            var allChecked_2 = true;
            this.Employees.forEach(function (em, index) {
                var assetItemHTMLelemnt = document.getElementById('employeeItem--' + index);
                if (!assetItemHTMLelemnt.checked)
                    allChecked_2 = false;
                // //console.log(this.SelectedAssets);
            });
            if (allChecked_2)
                var assetItemALLHTMLelemnt = document.getElementById("employeeItemALL--");
            assetItemALLHTMLelemnt.checked = true;
            // //console.log('Selected Assets:  ' ,  this.SelectedAssets);
        }
        else if (!e.target.checked) {
            var assetItemALLHTMLelemnt = document.getElementById("employeeItemALL--");
            if (assetItemALLHTMLelemnt.checked)
                assetItemALLHTMLelemnt.checked = false;
            this.SelectedAssets.filter(function (em, selectedIndex) {
                if (em.empId === emp.empId) {
                    _this.SelectedEmployees.splice(selectedIndex, 1);
                }
            });
        }
        // //console.log('Selected Assets:  ' ,  this.SelectedAssets);
        // //console.log(' Assets:  ' ,  this.Assets);
        // 
    };
    AssetmngComponent.prototype.onSelectAllCheckboxAST = function (e) {
        var _this = this;
        this.SelectedAssets = [];
        if (e.target.checked) {
            this.Assets.forEach(function (val) {
                val.checkbox = true;
                _this.SelectedAssets.push(val);
            });
        }
        else if (!e.target.checked) {
            this.Assets.forEach(function (val) { val.checkbox = false; });
        }
    };
    AssetmngComponent.prototype.onSelectAllCheckboxEMP = function (e) {
        var _this = this;
        this.SelectedEmployees = [];
        if (e.target.checked) {
            this.Employees.forEach(function (val) {
                val.checkbox = true;
                _this.SelectedEmployees.push(val);
            });
        }
        else if (!e.target.checked) {
            this.Employees.forEach(function (val) { val.checkbox = false; });
        }
    };
    AssetmngComponent.prototype.onExportExcel = function () {
        if (this.showByEmployees) {
            this.expExcelSrv.exportAsExcelFile(this.SelectedEmployees, 'Employees');
        }
        if (!this.showByEmployees) {
            this.expExcelSrv.exportAsExcelFile(this.SelectedAssets, 'Assets');
        }
    };
    AssetmngComponent.prototype.onPrintPreviewSelectedAssets = function () {
        // //console.log(ast);
        // 
        // this.bsModaleRef = this.modalService.show(AddeditasstComponent, {initialState: {ast}});
        // this.bsModaleRef.content.onClose = (updated) => {
        //   if (updated) {
        //     this.onGetAllAssets();
        //     //console.log('Edit clicked inside');
        //   }
        // };
        // //console.log('Edit clicked');
    };
    AssetmngComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    };
    AssetmngComponent.prototype.onSort = function (event) {
        // //console.log(event);
    };
    AssetmngComponent.prototype.updateFilter = function (val) {
        // //console.log(Object.keys(this.temp[0]).length);
        var value = val.toString().toLowerCase().trim();
        // get the amount of columns in the table
        var count = Object.keys(this.temp[0]).length;
        // get the key names of each column in the dataset
        var keys = Object.keys(this.temp[0]);
        // assign filtered matches to the active datatable
        this.Assets = this.temp.filter(function (item) {
            // iterate through each row's column data
            for (var i = 0; i < count; i++) {
                // check for a match
                if ((item[keys[i]] &&
                    item[keys[i]]
                        .toString()
                        .toLowerCase()
                        .indexOf(value) !== -1) ||
                    !value) {
                    // found match, return true to add to result set
                    // //console.log(item, 1);
                    return true;
                }
            }
        });
        //Whenever the filter changes, always go back to the first page
    };
    AssetmngComponent.prototype.OnCodeChange = function (e) {
        var _this = this;
        //console.log(e);
        this.CodeExist = false;
        if (e.target.value.length >= 6) {
            this.astSrv.GetAsssetByCode(e.target.value).subscribe(function (ast) {
                if (ast) {
                    _this.CodeExist = true;
                    _this.AssetTemp = ast;
                }
                else if (!ast) {
                    _this.CodeExist = false;
                }
                //console.log(ast);
            });
        }
    };
    AssetmngComponent.prototype.onBringExistingAsset = function () {
        this.assignForm.patchValue(this.AssetTemp);
        this.assignForm.controls.AssetTypes.get('asttypName').patchValue(this.AssetTemp.AssetType.asttypName);
    };
    AssetmngComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        //  
        // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        // Add 'implements AfterViewInit' to the class.
        Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["fromEvent"])(this.search.nativeElement, 'keydown')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["debounceTime"])(550), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (x) { return x['target']['value']; }))
            .subscribe(function (value) {
            _this.updateFilter(value);
        });
    };
    AssetmngComponent.prototype.onChangeRowsPerPage = function (event) {
        // //console.log(event);
        // //console.log(event.target.value);
        this.pageSize = event.target.value;
        this.pageIndex = 1;
    };
    Object.defineProperty(AssetmngComponent.prototype, "getAssignForm", {
        get: function () { return this.assignForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssetmngComponent.prototype, "getToEmp", {
        get: function () { return this.getAssignForm.toEmpName; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssetmngComponent.prototype, "getAssetsCurrent", {
        get: function () { return this.getAssignForm.assetsCurrent; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssetmngComponent.prototype, "getAssetsNew", {
        get: function () { return this.getAssignForm.assetsNew; },
        enumerable: true,
        configurable: true
    });
    AssetmngComponent.ctorParameters = function () { return [
        { type: app_shared_services_sweetalert_service__WEBPACK_IMPORTED_MODULE_12__["SweetalertService"] },
        { type: app_shared_services_logs_service__WEBPACK_IMPORTED_MODULE_14__["LogsService"] },
        { type: ngx_alerts__WEBPACK_IMPORTED_MODULE_13__["AlertService"] },
        { type: app_shared_services_shareddata_service__WEBPACK_IMPORTED_MODULE_15__["ShareddataService"] },
        { type: app_masterdata_asset_services_asset_service__WEBPACK_IMPORTED_MODULE_1__["AssetService"] },
        { type: app_masterdata_assettype_services_assettype_service__WEBPACK_IMPORTED_MODULE_8__["AssettypeService"] },
        { type: app_masterdata_employee_services_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"] },
        { type: app_masterdata_branch_services_branch_service__WEBPACK_IMPORTED_MODULE_3__["BranchService"] },
        { type: app_masterdata_company_services_company_service__WEBPACK_IMPORTED_MODULE_4__["CompanyService"] },
        { type: app_shared_services_exportexcel_service__WEBPACK_IMPORTED_MODULE_5__["ExportexcelService"] },
        { type: ngx_order_pipe__WEBPACK_IMPORTED_MODULE_7__["OrderPipe"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('search'),
        __metadata("design:type", Object)
    ], AssetmngComponent.prototype, "search", void 0);
    AssetmngComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assetmng',
            template: __importDefault(__webpack_require__(/*! raw-loader!./assetmng.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/operation/assetmng/assetmng.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./assetmng.component.css */ "./src/app/operation/assetmng/assetmng.component.css")).default]
        }),
        __metadata("design:paramtypes", [app_shared_services_sweetalert_service__WEBPACK_IMPORTED_MODULE_12__["SweetalertService"],
            app_shared_services_logs_service__WEBPACK_IMPORTED_MODULE_14__["LogsService"],
            ngx_alerts__WEBPACK_IMPORTED_MODULE_13__["AlertService"],
            app_shared_services_shareddata_service__WEBPACK_IMPORTED_MODULE_15__["ShareddataService"],
            app_masterdata_asset_services_asset_service__WEBPACK_IMPORTED_MODULE_1__["AssetService"],
            app_masterdata_assettype_services_assettype_service__WEBPACK_IMPORTED_MODULE_8__["AssettypeService"],
            app_masterdata_employee_services_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"],
            app_masterdata_branch_services_branch_service__WEBPACK_IMPORTED_MODULE_3__["BranchService"],
            app_masterdata_company_services_company_service__WEBPACK_IMPORTED_MODULE_4__["CompanyService"],
            app_shared_services_exportexcel_service__WEBPACK_IMPORTED_MODULE_5__["ExportexcelService"],
            ngx_order_pipe__WEBPACK_IMPORTED_MODULE_7__["OrderPipe"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"]])
    ], AssetmngComponent);
    return AssetmngComponent;
}());



/***/ }),

/***/ "./src/app/operation/dynamicemails/dynamicemails.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/operation/dynamicemails/dynamicemails.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXJhdGlvbi9keW5hbWljZW1haWxzL2R5bmFtaWNlbWFpbHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/operation/dynamicemails/dynamicemails.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/operation/dynamicemails/dynamicemails.component.ts ***!
  \********************************************************************/
/*! exports provided: DynamicemailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicemailsComponent", function() { return DynamicemailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var app_masterdata_genaricemail_service_genaricemail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/masterdata/genaricemail/service/genaricemail.service */ "./src/app/masterdata/genaricemail/service/genaricemail.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var DynamicemailsComponent = /** @class */ (function () {
    function DynamicemailsComponent(fb, gmlSrv) {
        this.fb = fb;
        this.gmlSrv = gmlSrv;
        this.showEmailSection = false;
        this.Emails = [];
        this.dataContainer = {
            emailsINDIV: [{ emailAddress: "", }],
            emailsGEN: [{ genEmailId: 0, genEmailAddress: "" }],
        };
        this.employeeForm = this.fb.group({
            emailsINDIV: this.fb.array([]),
            emailsGEN: this.fb.array([])
        });
        this.setEmails();
        console.log(this.employeeForm.value);
        this.onGetAllGenaricEmails();
    }
    DynamicemailsComponent.prototype.onGetAllGenaricEmails = function () {
        var _this = this;
        //    
        this.gmlSrv.getAllGenaricemails().subscribe(function (mls) {
            // console.log('this.Emails....' , this.Emails);
            //       
            _this.Emails = mls;
            // this.temp = mls;  // for search
            //  console.log('this.Emails....' , this.Emails);
            //  
        });
    };
    DynamicemailsComponent.prototype.ngOnInit = function () {
    };
    DynamicemailsComponent.prototype.Submit = function () {
        console.log(this.employeeForm.value);
    };
    DynamicemailsComponent.prototype.showEmailSectionFn = function () {
        this.showEmailSection = true;
    };
    DynamicemailsComponent.prototype.onAddIndividualEmail = function (control) {
        control.push(this.fb.group({
            emailAddress: ['']
        }));
    };
    DynamicemailsComponent.prototype.onAddGenaricEmail = function (control) {
        control.push(this.fb.group({
            genEmailId: 0,
            genEmailAddress: ['']
        }));
    };
    DynamicemailsComponent.prototype.deleteIndividualEmail = function (index) {
        var control = this.employeeForm.controls.emailsINDIV;
        control.removeAt(index);
    };
    DynamicemailsComponent.prototype.deleteGenaricEmail = function (index) {
        var control = this.employeeForm.controls.emailsGEN;
        control.removeAt(index);
    };
    // deleteIndvAddress(control, index) {
    //   
    //   control.removeAt(index)
    // }
    DynamicemailsComponent.prototype.setEmails = function () {
        var _this = this;
        var indivCtl = this.employeeForm.controls.emailsINDIV;
        var genCtl = this.employeeForm.controls.emailsGEN;
        this.dataContainer.emailsINDIV.forEach(function (x) {
            indivCtl.push(_this.fb.group({
                emailAddress: x.emailAddress
            }));
        });
        this.dataContainer.emailsGEN.forEach(function (x) {
            genCtl.push(_this.fb.group({
                genEmailId: x.genEmailId,
                genEmailAddress: x.genEmailAddress
            }));
        });
    };
    DynamicemailsComponent.prototype.onSelectGenaricEmail = function (control, event) {
        this.getGenaricEmailsForm.controls['genEmailId'].setValue(event.genEmailId);
        this.getGenaricEmailsForm.controls['genEmailAddress'].setValue(event.genEmailAddress);
    };
    Object.defineProperty(DynamicemailsComponent.prototype, "getIndividualEmailsForm", {
        get: function () {
            return this.employeeForm.get('emailsINDIV');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicemailsComponent.prototype, "getGenaricEmailsForm", {
        get: function () {
            return this.employeeForm.get('emailsGEN');
        },
        enumerable: true,
        configurable: true
    });
    DynamicemailsComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: app_masterdata_genaricemail_service_genaricemail_service__WEBPACK_IMPORTED_MODULE_2__["GenaricemailService"] }
    ]; };
    DynamicemailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dynamicemails',
            template: __importDefault(__webpack_require__(/*! raw-loader!./dynamicemails.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/operation/dynamicemails/dynamicemails.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./dynamicemails.component.css */ "./src/app/operation/dynamicemails/dynamicemails.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            app_masterdata_genaricemail_service_genaricemail_service__WEBPACK_IMPORTED_MODULE_2__["GenaricemailService"]])
    ], DynamicemailsComponent);
    return DynamicemailsComponent;
}());



/***/ }),

/***/ "./src/app/operation/dynamicform/dynamicform.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/operation/dynamicform/dynamicform.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXJhdGlvbi9keW5hbWljZm9ybS9keW5hbWljZm9ybS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/operation/dynamicform/dynamicform.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/operation/dynamicform/dynamicform.component.ts ***!
  \****************************************************************/
/*! exports provided: DynamicformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicformComponent", function() { return DynamicformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var DynamicformComponent = /** @class */ (function () {
    // get getMyForm() {
    //   return this.myForm.controls;
    // }
    // get getMyEmails() {
    //   return this.getMyForm.emails as FormArray;
    // }
    function DynamicformComponent(fb) {
        this.fb = fb;
        this.data = {
            emails: [
                {
                    individualEmailsTitle: "example Email Title",
                    individualEmailsAddress: [
                        {
                            indvAddress: "example Email Address",
                        }
                    ]
                }
                // ,{
                //   genaricEmailsTitle: "example Email Title Gen",
                //   genaricEmailsAddress: [
                //     {
                //       genAddress: "example Email Address Gen",
                //     }
                //   ]
                // }
            ]
        };
        this.myForm = this.fb.group({
            emails: this.fb.array([])
        });
        this.setEmails();
    }
    DynamicformComponent.prototype.addNewEmail = function () {
        var control = this.myForm.controls.emails;
        control.push(this.fb.group({
            individualEmailsTitle: [''],
            individualEmailsAddress: this.fb.array([])
        }));
    };
    DynamicformComponent.prototype.deleteEmail = function (index) {
        var control = this.myForm.controls.emails;
        control.removeAt(index);
    };
    DynamicformComponent.prototype.addNewIndvAddress = function (control) {
        control.push(this.fb.group({
            projectName: ['']
        }));
    };
    DynamicformComponent.prototype.deleteIndvAddress = function (control, index) {
        control.removeAt(index);
    };
    DynamicformComponent.prototype.setEmails = function () {
        var _this = this;
        var control = this.myForm.controls.emails;
        this.data.emails.forEach(function (x) {
            control.push(_this.fb.group({
                individualEmailsTitle: x.individualEmailsTitle,
                individualEmailsAddress: _this.setIndvAddress(x)
            }));
        });
    };
    DynamicformComponent.prototype.setIndvAddress = function (x) {
        var _this = this;
        var arr = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([]);
        x.individualEmailsAddress.forEach(function (y) {
            arr.push(_this.fb.group({
                indvAddress: y.indvAddress
            }));
        });
        return arr;
    };
    DynamicformComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }
    ]; };
    DynamicformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dynamicform',
            template: __importDefault(__webpack_require__(/*! raw-loader!./dynamicform.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/operation/dynamicform/dynamicform.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./dynamicform.component.css */ "./src/app/operation/dynamicform/dynamicform.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], DynamicformComponent);
    return DynamicformComponent;
}());



/***/ }),

/***/ "./src/app/operation/emailmng/emailmng.component.css":
/*!***********************************************************!*\
  !*** ./src/app/operation/emailmng/emailmng.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXJhdGlvbi9lbWFpbG1uZy9lbWFpbG1uZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/operation/emailmng/emailmng.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/operation/emailmng/emailmng.component.ts ***!
  \**********************************************************/
/*! exports provided: EmailmngComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailmngComponent", function() { return EmailmngComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var app_masterdata_employee_services_employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/masterdata/employee/services/employee.service */ "./src/app/masterdata/employee/services/employee.service.ts");
/* harmony import */ var app_masterdata_branch_services_branch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/masterdata/branch/services/branch.service */ "./src/app/masterdata/branch/services/branch.service.ts");
/* harmony import */ var app_masterdata_company_services_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/masterdata/company/services/company.service */ "./src/app/masterdata/company/services/company.service.ts");
/* harmony import */ var app_shared_services_exportexcel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/exportexcel.service */ "./src/app/shared/services/exportexcel.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/__ivy_ngcc__/fesm5/ngx-order-pipe.js");
/* harmony import */ var app_masterdata_assettype_services_assettype_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/masterdata/assettype/services/assettype.service */ "./src/app/masterdata/assettype/services/assettype.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var app_masterdata_genaricemail_service_genaricemail_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/masterdata/genaricemail/service/genaricemail.service */ "./src/app/masterdata/genaricemail/service/genaricemail.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};











var EmailmngComponent = /** @class */ (function () {
    function EmailmngComponent(gmlSrv, astTypeSrv, empSrv, brnSrv, comSrv, expExcelSrv, orderPipe, fb) {
        this.gmlSrv = gmlSrv;
        this.astTypeSrv = astTypeSrv;
        this.empSrv = empSrv;
        this.brnSrv = brnSrv;
        this.comSrv = comSrv;
        this.expExcelSrv = expExcelSrv;
        this.orderPipe = orderPipe;
        this.fb = fb;
        this.settings = {};
        this.emailForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            genEmailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](0),
            genEmailAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            EmpGmails: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormArray"]([]),
        });
        this.emailTemp = {};
        this.temp = [];
        this.Emails = [];
        this.pageSize = 10;
        this.order = "info.name";
        this.reverse = false;
        this.SelectedEmails = [];
        this.Branchs = [];
        this.Employees = [];
        this.EmployeesList = [];
        this.Companys = [];
        this.sortedCollection = orderPipe.transform(this.Emails, 'astDescription');
        // console.log('sortedCollection....' , this.sortedCollection);
        // for (let i = 1; i <= this.Emails.length; i++) {
        //   this.Emails.push();
        // }
        this.onGetAllEmployees();
        this.onGetAllGenaricEmails();
        this.onGetAllBranchs();
        this.onGetAllCompanys();
    }
    EmailmngComponent.prototype.ngOnInit = function () {
        this.settings = {
            singleSelection: false,
            idField: 'empId',
            textField: "EmpData",
            enableCheckAll: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: true,
            limitSelection: -1,
            clearSearchFilter: true,
            maxHeight: 197,
            itemsShowLimit: 6,
            searchPlaceholderText: 'Search',
            noDataAvailablePlaceholderText: 'No Data Available',
            closeDropDownOnSelection: false,
            showSelectedItemsAtTop: false,
            defaultOpen: false
        };
        this.onGetAllGenaricEmails();
        this.emailForm = this.fb.group({
            genEmailId: null,
            genEmailAddress: null,
            EmpGmails: this.fb.array([])
            // empIds: this.fb.array([])
            // Employees: this.fb.array([])
        });
    };
    // employee: EmployeeModel = { empId: 0, empFullName: '', Emails: []}
    EmailmngComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.emailForm.value);
        //   this.employee.empId = this.emailForm.controls.empId.value;
        //   this.employee.empFullName = this.emailForm.controls.empFullName.value;
        //  this.employee.Emails = this.getEmployees.value;
        this.gmlSrv.assignEmployeestoGmail(this.emailForm.value).subscribe(function (gmail) {
            _this.onGetAllGenaricEmails();
            // this.emailForm.reset();
            // this.onDeSelectAll();
        });
    };
    EmailmngComponent.prototype.onCancel = function () {
        this.emailForm.reset();
    };
    EmailmngComponent.prototype.customSearchFn = function (term, item) {
        term = term.toLocaleLowerCase();
        return item.astDescription.toLocaleLowerCase().indexOf(term) > -1 ||
            item.astCode.toLocaleLowerCase().indexOf(term) > -1;
    };
    EmailmngComponent.prototype.createItem = function (item) {
        return this.fb.group({
            empId: item.empId,
            genEmailId: 999
            // empFullName: item.empFullName
            // EmployeeId: this.Emails.find(x => x.astId === item.astId).Employee.empId,
            // EmployeeName: this.Emails.find(x => x.astId === item.astId).Employee.empFullName
        });
    };
    EmailmngComponent.prototype.createItemEmpId = function (item) {
        //   
        var id = item.empId;
        return this.fb.control({
            id: id
        });
    };
    EmailmngComponent.prototype.onChangeEmails = function (e) {
        var numberOfEmails = e.target.value || 0;
        if (this.getEmployees.length < numberOfEmails) {
            for (var i = this.getEmployees.length; i < numberOfEmails; i++) {
                this.getEmployees.push(this.fb.group({
                    astCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                    astDescription: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]]
                }));
            }
        }
        else {
            for (var i = this.getEmployees.length; i >= numberOfEmails; i--) {
                this.getEmployees.removeAt(i);
            }
        }
    };
    EmailmngComponent.prototype.onGetAllGenaricEmails = function () {
        var _this = this;
        //    
        this.gmlSrv.getAllGenaricemails().subscribe(function (mls) {
            // console.log('this.Emails....' , this.Emails);
            //       
            _this.Emails = mls;
            _this.temp = mls; // for search
            //  console.log('this.Emails....' , this.Emails);
            //  
        });
    };
    EmailmngComponent.prototype.onGetAllEmployees = function () {
        var _this = this;
        this.empSrv.getAllEmployeesWithEmails().subscribe(function (emps) {
            _this.Employees = emps;
            console.log(' this.Employees....', _this.Employees);
            debugger;
            _this.EmployeesList = [];
            //  this.Employees = [];
            emps.forEach(function (e) {
                debugger;
                var employee = { empId: 0, empFullName: '', DepartmentName: '', BranchName: '', CompanyName: '', EmpData: '' };
                employee.empId = e.empId;
                employee.EmpData = "(" + e.empHRCode + " )" + e.DepartmentName + " - " + e.empFullName + ". ";
                if (employee.empFullName != null) {
                    _this.EmployeesList.push(employee);
                    //   this.Employees.push(employee);
                }
            });
        });
    };
    EmailmngComponent.prototype.onGetAllBranchs = function () {
        var _this = this;
        //     
        this.brnSrv.getAllBranchs().subscribe(function (brns) {
            //        
            _this.Branchs = brns;
        });
    };
    EmailmngComponent.prototype.onGetAllCompanys = function () {
        var _this = this;
        //    
        this.comSrv.getAllCompanys().subscribe(function (coms) {
            console.log(_this.Companys);
            console.log(coms);
            //      
            _this.Companys = coms;
        });
    };
    EmailmngComponent.prototype.selectEmpEvent = function (event) {
        this.emailForm.controls['genEmailId'].setValue(event.genEmailId);
        this.emailForm.controls['genEmailAddress'].setValue(event.genEmailAddress);
    };
    EmailmngComponent.prototype.onFilterByAssetType = function (e) {
        if (e.target.selectedOptions[0].text.toString() == '--All--') {
            this.onGetAllGenaricEmails();
        }
        else {
            //  this.onGetAllEmails();
            var val = e.target.selectedOptions[0].text.toString();
            // console.log(Object.keys(this.temp[0]).length);
            var value_1 = val.toString().toLowerCase().trim();
            // get the amount of columns in the table
            var count_1 = Object.keys(this.temp[0]).length;
            // get the key names of each column in the dataset
            var keys_1 = Object.keys(this.temp[0]);
            // email filtered matches to the active datatable
            this.Emails = this.temp.filter(function (item) {
                // iterate through each row's column data
                for (var i = 0; i < count_1; i++) {
                    // check for a match
                    if ((item[keys_1[i]] &&
                        item[keys_1[i]]
                            .toString()
                            .toLowerCase()
                            .indexOf(value_1) !== -1) ||
                        !value_1) {
                        // found match, return true to add to result set
                        // console.log(item, 1);
                        return true;
                    }
                }
            });
        }
    };
    EmailmngComponent.prototype.resetForm = function () {
        // beacuse i need select all crickter by default when i click on reset button.
        // this.setForm();
        // this.multiSelect.toggleSelectAll();
        // i try below variable isAllItemsSelected reference from your  repository but still not working
        // this.multiSelect.isAllItemsSelected = true;
    };
    EmailmngComponent.prototype.onFilterChange = function (item) {
        console.log(item);
        this.customSearchFn;
    };
    EmailmngComponent.prototype.onDropDownClose = function (item) {
        console.log(item);
    };
    EmailmngComponent.prototype.onItemSelect = function (item) {
        console.log('item  .. ', item);
        this.getEmployees.push(this.createItem(item));
        // this.getAssetIds.push(new FormControl(item.astId));
        console.log('this.getEmailForm...', this.getEmailForm);
    };
    EmailmngComponent.prototype.onDeSelect = function (item) {
        console.log(item);
        this.getEmployees.removeAt(item);
    };
    EmailmngComponent.prototype.onSelectAll = function (items) {
        // items.forEach(itm => {
        //   this.getEmpIds.push(this.createItemEmpId(itm));
        // });
        var _this = this;
        items.forEach(function (itm) {
            _this.getEmpGmails.push(_this.createItem(itm));
            console.log('this.getEmpGmails ...', _this.getEmpGmails);
            console.log('this.getEmpGmails.value ...', _this.getEmpGmails.value);
        });
    };
    EmailmngComponent.prototype.onDeSelectAll = function (items) {
        var _this = this;
        this.getEmployees.value.forEach(function (itm) {
            _this.getEmployees.removeAt(itm);
        });
    };
    EmailmngComponent.prototype.onSelect = function (e, ast) {
        // 
        // console.log(e);
        if (e.target.checked) {
            this.SelectedEmails.push(ast);
            var allChecked_1 = true;
            this.Emails.forEach(function (asset, index) {
                var assetItemHTMLelemnt = document.getElementById('assetItem--' + index);
                if (!assetItemHTMLelemnt.checked)
                    allChecked_1 = false;
                // console.log(this.SelectedEmails);
            });
            if (allChecked_1)
                var assetItemALLHTMLelemnt = document.getElementById("assetItemALL--");
            assetItemALLHTMLelemnt.checked = true;
            // console.log('Selected Emails:  ' ,  this.SelectedEmails);
        }
        else if (!e.target.checked) {
            var assetItemALLHTMLelemnt = document.getElementById("assetItemALL--");
            if (assetItemALLHTMLelemnt.checked)
                assetItemALLHTMLelemnt.checked = false;
            this.SelectedEmails.filter(function (asset, selectedIndex) {
                //  if (asset.astId === ast.astId) {
                //    this.SelectedEmails.splice(selectedIndex, 1);
                //  }
            });
        }
        // console.log('Selected Emails:  ' ,  this.SelectedEmails);
        // console.log(' Emails:  ' ,  this.Emails);
        // 
    };
    EmailmngComponent.prototype.onExportExcel = function () {
        this.expExcelSrv.exportAsExcelFile(this.SelectedEmails, 'Hello');
    };
    EmailmngComponent.prototype.onPrintPreviewSelectedEmails = function () {
        // console.log(ast);
        // 
        // this.bsModaleRef = this.modalService.show(AddeditasstComponent, {initialState: {ast}});
        // this.bsModaleRef.content.onClose = (updated) => {
        //   if (updated) {
        //     this.onGetAllEmails();
        //     console.log('Edit clicked inside');
        //   }
        // };
        // console.log('Edit clicked');
    };
    EmailmngComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    };
    EmailmngComponent.prototype.onSort = function (event) {
        // console.log(event);
    };
    EmailmngComponent.prototype.updateFilter = function (val) {
        // console.log(Object.keys(this.temp[0]).length);
        var value = val.toString().toLowerCase().trim();
        // get the amount of columns in the table
        var count = Object.keys(this.temp[0]).length;
        // get the key names of each column in the dataset
        var keys = Object.keys(this.temp[0]);
        // email filtered matches to the active datatable
        this.Emails = this.temp.filter(function (item) {
            // iterate through each row's column data
            for (var i = 0; i < count; i++) {
                // check for a match
                if ((item[keys[i]] &&
                    item[keys[i]]
                        .toString()
                        .toLowerCase()
                        .indexOf(value) !== -1) ||
                    !value) {
                    // found match, return true to add to result set
                    // console.log(item, 1);
                    return true;
                }
            }
        });
        //Whenever the filter changes, always go back to the first page
    };
    EmailmngComponent.prototype.onGetCurrentEmails = function () {
        //  this.emailForm.patchValue(this.AssetTemp);
        //  this.emailForm.controls.AssetTypes.get('asttypName').patchValue(this.AssetTemp.AssetType.asttypName);
    };
    EmailmngComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        //  
        // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        // Add 'implements AfterViewInit' to the class.
        Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(this.search.nativeElement, 'keydown')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(550), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (x) { return x['target']['value']; }))
            .subscribe(function (value) {
            _this.updateFilter(value);
        });
    };
    EmailmngComponent.prototype.onChangeRowsPerPage = function (event) {
        // 
        // console.log(event);
        // console.log(event.target.value);
        this.pageSize = event.target.value;
    };
    Object.defineProperty(EmailmngComponent.prototype, "getEmailForm", {
        // convenience getters for easy access to form fields
        // get getEmailFormTEST() { return this.emailForm; }
        get: function () { return this.emailForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmailmngComponent.prototype, "getEmpIds", {
        get: function () { return this.getEmailForm.empIds; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmailmngComponent.prototype, "getEmployees", {
        get: function () { return this.getEmailForm.Employees; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmailmngComponent.prototype, "getEmpGmails", {
        get: function () { return this.getEmailForm.EmpGmails; },
        enumerable: true,
        configurable: true
    });
    EmailmngComponent.ctorParameters = function () { return [
        { type: app_masterdata_genaricemail_service_genaricemail_service__WEBPACK_IMPORTED_MODULE_10__["GenaricemailService"] },
        { type: app_masterdata_assettype_services_assettype_service__WEBPACK_IMPORTED_MODULE_7__["AssettypeService"] },
        { type: app_masterdata_employee_services_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"] },
        { type: app_masterdata_branch_services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"] },
        { type: app_masterdata_company_services_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"] },
        { type: app_shared_services_exportexcel_service__WEBPACK_IMPORTED_MODULE_4__["ExportexcelService"] },
        { type: ngx_order_pipe__WEBPACK_IMPORTED_MODULE_6__["OrderPipe"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('search'),
        __metadata("design:type", Object)
    ], EmailmngComponent.prototype, "search", void 0);
    EmailmngComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-emailmng',
            template: __importDefault(__webpack_require__(/*! raw-loader!./emailmng.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/operation/emailmng/emailmng.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./emailmng.component.css */ "./src/app/operation/emailmng/emailmng.component.css")).default]
        }),
        __metadata("design:paramtypes", [app_masterdata_genaricemail_service_genaricemail_service__WEBPACK_IMPORTED_MODULE_10__["GenaricemailService"],
            app_masterdata_assettype_services_assettype_service__WEBPACK_IMPORTED_MODULE_7__["AssettypeService"],
            app_masterdata_employee_services_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"],
            app_masterdata_branch_services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"],
            app_masterdata_company_services_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"],
            app_shared_services_exportexcel_service__WEBPACK_IMPORTED_MODULE_4__["ExportexcelService"],
            ngx_order_pipe__WEBPACK_IMPORTED_MODULE_6__["OrderPipe"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], EmailmngComponent);
    return EmailmngComponent;
}());



/***/ }),

/***/ "./src/app/operation/invoicelines/invoicelines.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/operation/invoicelines/invoicelines.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXJhdGlvbi9pbnZvaWNlbGluZXMvaW52b2ljZWxpbmVzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/operation/invoicelines/invoicelines.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/operation/invoicelines/invoicelines.component.ts ***!
  \******************************************************************/
/*! exports provided: InvoicelinesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicelinesComponent", function() { return InvoicelinesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var InvoicelinesComponent = /** @class */ (function () {
    function InvoicelinesComponent() {
    }
    InvoicelinesComponent.prototype.ngOnInit = function () {
    };
    InvoicelinesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invoicelines',
            template: __importDefault(__webpack_require__(/*! raw-loader!./invoicelines.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/operation/invoicelines/invoicelines.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./invoicelines.component.css */ "./src/app/operation/invoicelines/invoicelines.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], InvoicelinesComponent);
    return InvoicelinesComponent;
}());



/***/ }),

/***/ "./src/app/operation/invoicemng/invoicemng.component.css":
/*!***************************************************************!*\
  !*** ./src/app/operation/invoicemng/invoicemng.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\r\n    font-family: Lato;\r\n  }\r\n\r\n.toolbarIcon{\r\n  font-size: 25px;\r\n  color: black;\r\n  padding-top: 10px;\r\n  padding-bottom: 7px;\r\n  padding-right: 5px;\r\n  padding-left: 4px;\r\n  cursor: pointer;\r\n  /* box-shadow: 1px 2px grey; */\r\n}\r\n\r\n.toolbarIcon:hover {\r\n  margin-top: 2px;\r\n  font-size: 28px;\r\n  color: blue;\r\n  padding-top: 10px;\r\n  padding-bottom: 7px;\r\n  padding-right: 7px;\r\n  padding-left: 5px;\r\n  cursor: pointer;\r\n  border: 1px solid #f9f9f900;\r\n  background-color: white;\r\n}\r\n\r\n.marginsDropdownList{\r\n  margin-top: 11px;\r\n  padding-top: 7px;\r\n  padding-bottom: 7px;\r\n}\r\n\r\n.marginsPaging{\r\n  margin-top: 2px;\r\n  padding-top: 7px;\r\n  padding-bottom: 7px;\r\n}\r\n\r\n.marginsSearch{\r\n  /* margin-right: 10px; */\r\n  padding-top: 7px;\r\n  padding-bottom: 7px;\r\n}\r\n\r\n.toolbarCard{\r\n  box-shadow: 1px 1px 1px 1px grey; \r\n  margin: auto;\r\n  /* height: 40px; */\r\n  background-color: #f9f9f9;\r\n  border: 1px solid rgb(212, 212, 212);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3BlcmF0aW9uL2ludm9pY2VtbmcvaW52b2ljZW1uZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0VBQ25COztBQUVGO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLDhCQUE4QjtBQUNoQzs7QUFDQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixvQ0FBb0M7QUFDdEMiLCJmaWxlIjoic3JjL2FwcC9vcGVyYXRpb24vaW52b2ljZW1uZy9pbnZvaWNlbW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gIH1cclxuXHJcbi50b29sYmFySWNvbntcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA3cHg7XHJcbiAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAvKiBib3gtc2hhZG93OiAxcHggMnB4IGdyZXk7ICovXHJcbn1cclxuLnRvb2xiYXJJY29uOmhvdmVyIHtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGNvbG9yOiBibHVlO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA3cHg7XHJcbiAgcGFkZGluZy1yaWdodDogN3B4O1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjlmOWY5MDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLm1hcmdpbnNEcm9wZG93bkxpc3R7XHJcbiAgbWFyZ2luLXRvcDogMTFweDtcclxuICBwYWRkaW5nLXRvcDogN3B4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA3cHg7XHJcbn1cclxuLm1hcmdpbnNQYWdpbmd7XHJcbiAgbWFyZ2luLXRvcDogMnB4O1xyXG4gIHBhZGRpbmctdG9wOiA3cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDdweDtcclxufVxyXG4ubWFyZ2luc1NlYXJjaHtcclxuICAvKiBtYXJnaW4tcmlnaHQ6IDEwcHg7ICovXHJcbiAgcGFkZGluZy10b3A6IDdweDtcclxuICBwYWRkaW5nLWJvdHRvbTogN3B4O1xyXG59XHJcbi50b29sYmFyQ2FyZHtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAxcHggZ3JleTsgXHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIC8qIGhlaWdodDogNDBweDsgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTIsIDIxMiwgMjEyKTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/operation/invoicemng/invoicemng.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/operation/invoicemng/invoicemng.component.ts ***!
  \**************************************************************/
/*! exports provided: InvoicemngComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicemngComponent", function() { return InvoicemngComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var app_masterdata_supplier_service_supplier_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/masterdata/supplier/service/supplier.service */ "./src/app/masterdata/supplier/service/supplier.service.ts");
/* harmony import */ var app_masterdata_costcenter_Services_costcenter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/masterdata/costcenter/Services/costcenter.service */ "./src/app/masterdata/costcenter/Services/costcenter.service.ts");
/* harmony import */ var app_shared_services_downloadfile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/downloadfile.service */ "./src/app/shared/services/downloadfile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var ngx_alerts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-alerts */ "./node_modules/ngx-alerts/__ivy_ngcc__/fesm5/ngx-alerts.js");
/* harmony import */ var app_sweetalert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/sweetalert.service */ "./src/app/sweetalert.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var app_masterdata_itemscategory_service_itemcategory_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/masterdata/itemscategory/service/itemcategory.service */ "./src/app/masterdata/itemscategory/service/itemcategory.service.ts");
/* harmony import */ var _service_invoicemng_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service/invoicemng.service */ "./src/app/operation/invoicemng/service/invoicemng.service.ts");
/* harmony import */ var app_shared_services_exportexcel_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/shared/services/exportexcel.service */ "./src/app/shared/services/exportexcel.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var app_shared_services_appstorage_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/shared/services/appstorage.service */ "./src/app/shared/services/appstorage.service.ts");
/* harmony import */ var app_shared_services_shareddata_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/shared/services/shareddata.service */ "./src/app/shared/services/shareddata.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


















var InvoicemngComponent = /** @class */ (function () {
    function InvoicemngComponent(sharedDataSrv, strSrv, sanitizer, http, spltSrv, ccSrv, icSrv, invSrv, fileService, router, swalSrv, alertService, fb, expExcelSrv) {
        this.sharedDataSrv = sharedDataSrv;
        this.strSrv = strSrv;
        this.sanitizer = sanitizer;
        this.http = http;
        this.spltSrv = spltSrv;
        this.ccSrv = ccSrv;
        this.icSrv = icSrv;
        this.invSrv = invSrv;
        this.fileService = fileService;
        this.router = router;
        this.swalSrv = swalSrv;
        this.alertService = alertService;
        this.fb = fb;
        this.expExcelSrv = expExcelSrv;
        // invoice: InvoicesModel;
        this.InvDateNgModel = "";
        this.TotalInvoicesAmount = 0;
        this.totalLaptops = 0;
        this.totalDesktops = 0;
        this.totalMobiles = 0;
        this.totalInvoices = 0;
        this.totalScreens = 0;
        this.totalPrinters = 0;
        this.totalServers = 0;
        this.totalDataLines = 0;
        this.selectedInvoices = 0;
        this.noCompany = 0;
        this.noBranch = 0;
        this.noEmployee = 0;
        this.totalVoiceLines = 0;
        this.noAssetType = 0;
        this.CostCenters = [];
        this.Suppliers = [];
        this.ItemsCategorys = [];
        this.SelectedInvoices = [];
        this.Invoices = [];
        this.TempInvoices = [];
        this.pageIndex = 1;
        this.pageSize = 10;
        this.loading = false;
        this.showStatistics = false;
        this.order = "info.name";
        this.reverse = false;
        this.minDate = new Date('01.01.2019');
        this.maxDate = new Date();
        this.currentDate = new Date();
        this.dateFrom = new Date('02.01.2020');
        this.dateTo = new Date();
        this.FromDateString = '';
        this.ToDateString = '';
        this.invoiceForm = this.fb.group({
            InvoiceId: null,
            invNumber: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            invAmount: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            invDate: [this.currentDate, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            Remarks: null,
            InvFile: null,
            InvFileAttached: false,
            invStatus: ['Paid', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            ItemCategoryName: null,
            CostCenterName: null,
            SupplierName: null,
            splId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            CostCenterId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            icId: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
        });
        this.onGetAllItemsCategorys();
        this.onGetAllCostCenters();
        this.onGetAllSuppliers();
        this.onGetAllInvoices();
    }
    InvoicemngComponent.prototype.ngOnInit = function () {
        this.buildSearchForm();
        this.setOneMonthDate();
    };
    InvoicemngComponent.prototype.setOneMonthDate = function () {
        debugger;
        var month = this.dateTo.getMonth();
        this.ToDateString = this.dateTo.getDate() + " / " + this.dateTo.getMonth() + " / " + this.dateTo.getFullYear();
        // let pastmonth = month - 1;
        // this.dateFrom.setMonth(pastmonth);
        this.FromDateString = this.dateFrom.getDate() + " / " + this.dateFrom.getMonth() + " / " + this.dateFrom.getFullYear();
    };
    InvoicemngComponent.prototype.formatCurrency_TaxableValue = function (event) {
        var uy = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(event.target.value);
        // this.tax = event.target.value;
        // this.taxableValue = uy;
    };
    InvoicemngComponent.prototype.getCurrentUser = function () {
        var _this = this;
        // this.sharedDataSrv.getCurrentUser().subscribe( res=>{
        //       
        //       this.usr = res;
        // })
        this.strSrv.getUserFromStorage().subscribe(function (usr) {
            _this.usr = usr;
        });
    };
    InvoicemngComponent.prototype.onUpdatestatistics = function () {
        var _this = this;
        this.TotalInvoicesAmount = 0;
        this.pageIndex = 1;
        this.Invoices.forEach(function (i) {
            _this.TotalInvoicesAmount += i.invAmount;
        });
    };
    InvoicemngComponent.prototype.onGetAllInvoices = function () {
        var _this = this;
        this.Invoices = [];
        this.TempInvoices = [];
        this.loading = true;
        debugger;
        this.invSrv.getAllInvoices(this.dateFrom, this.dateTo).subscribe(function (invs) {
            debugger;
            _this.usr = _this.strSrv.getUserFromStorage();
            invs.forEach(function (inv) {
                if (_this.usr.userRole.includes("IT")) {
                    _this.Invoices.push(inv);
                    //   this.TempInvoices.push(inv);
                }
                if (_this.usr.userRole.includes("Cairo")) {
                    _this.Invoices.push(inv);
                    //    this.TempInvoices.push(inv);
                }
                if (_this.usr.userRole.includes("AirPort") && inv.CostCenterName.includes('AirPort')) {
                    _this.Invoices.push(inv);
                    //  this.TempInvoices.push(inv);
                }
                if (_this.usr.userRole.includes("Alex") && inv.CostCenterName.includes('Alex')) {
                    _this.Invoices.push(inv);
                    //      this.TempInvoices.push(inv);
                }
                if (_this.usr.userRole.includes("Alex-Port") && inv.CostCenterName.includes('Alex-Port')) {
                    _this.Invoices.push(inv);
                    //      this.TempInvoices.push(inv);
                }
                if (_this.usr.userRole.includes("Kader") && inv.CostCenterName.includes('Kader')) {
                    _this.Invoices.push(inv);
                    //   this.TempInvoices.push(inv);
                }
                if (_this.usr.userRole.includes("Zegiew") && inv.CostCenterName.includes('Zegiew')) {
                    _this.Invoices.push(inv);
                    //        this.TempInvoices.push(inv);
                }
                if (_this.usr.userRole.includes("DMT") && inv.CostCenterName.includes('DMT')) {
                    _this.Invoices.push(inv);
                    //      this.TempInvoices.push(inv);
                }
                if (_this.usr.userRole.includes("PSD") && inv.CostCenterName.includes('PSD')) {
                    _this.Invoices.push(inv);
                    //   this.TempInvoices.push(inv);
                }
                if (_this.usr.userRole.includes("Sokhna") && inv.CostCenterName.includes('Sokhna')) {
                    _this.Invoices.push(inv);
                    _this.TempInvoices.push(inv);
                }
                if (_this.usr.userRole.includes("Sharm") && inv.CostCenterName.includes('Sharm')) {
                    _this.Invoices.push(inv);
                    //      this.TempInvoices.push(inv);
                }
                if (_this.usr.userRole.includes("Safaga") && inv.CostCenterName.includes('Safaga')) {
                    _this.Invoices.push(inv);
                    //    this.TempInvoices.push(inv);
                }
                if (_this.usr.userRole.includes("Free") && inv.CostCenterName.includes('Free')) {
                    _this.Invoices.push(inv);
                    //     this.TempInvoices.push(inv);
                }
            });
            _this.loading = false;
            _this.onUpdatestatistics();
        }, function (err) {
            _this.alertService.danger('Server Error');
            _this.loading = false;
        });
    };
    InvoicemngComponent.prototype.onGetAllSuppliers = function () {
        var _this = this;
        //  
        this.spltSrv.getAllSuppliers().subscribe(function (spls) {
            _this.Suppliers = spls;
        });
    };
    InvoicemngComponent.prototype.onGetAllCostCenters = function () {
        var _this = this;
        this.ccSrv.getAllCostCenters().subscribe(function (ccs) {
            var usr = _this.strSrv.getUserFromStorage();
            if (usr.userRole == "IT") {
                _this.CostCenters = ccs;
            }
            if (usr.userRole.includes("Cairo")) {
                _this.CostCenters = ccs;
            }
            if (usr.userRole.includes("Suez")) {
                ccs.forEach(function (cc) {
                    if (cc.ccName.includes('Suez')) {
                        _this.CostCenters.push(cc);
                    }
                });
            }
            if (usr.userRole.includes("Alex")) {
                ccs.forEach(function (cc) {
                    if (cc.ccName.includes('Alex')) {
                        _this.CostCenters.push(cc);
                    }
                });
            }
            if (usr.userRole.includes("Airport")) {
                ccs.forEach(function (cc) {
                    if (cc.ccName.includes('Airport')) {
                        _this.CostCenters.push(cc);
                    }
                });
            }
            if (usr.userRole.includes("Alex-Port")) {
                ccs.forEach(function (cc) {
                    if (cc.ccName.includes('Alex-Port')) {
                        _this.CostCenters.push(cc);
                    }
                });
            }
            if (usr.userRole.includes("Kader")) {
                ccs.forEach(function (cc) {
                    if (cc.ccName.includes('Kader')) {
                        _this.CostCenters.push(cc);
                    }
                });
            }
            if (usr.userRole.includes("Zeghiew")) {
                ccs.forEach(function (cc) {
                    if (cc.ccName.includes('Zeghiew')) {
                        _this.CostCenters.push(cc);
                    }
                });
            }
            if (usr.userRole.includes("Free")) {
                ccs.forEach(function (cc) {
                    if (cc.ccName.includes('Free')) {
                        _this.CostCenters.push(cc);
                    }
                });
            }
            if (usr.userRole.includes("DMT")) {
                ccs.forEach(function (cc) {
                    if (cc.ccName.includes('DMT')) {
                        _this.CostCenters.push(cc);
                    }
                });
            }
            if (usr.userRole.includes("PSD")) {
                ccs.forEach(function (cc) {
                    if (cc.ccName.includes('PSD')) {
                        _this.CostCenters.push(cc);
                    }
                });
            }
            if (usr.userRole.includes("Sharm")) {
                ccs.forEach(function (cc) {
                    if (cc.ccName.includes('Sharm')) {
                        _this.CostCenters.push(cc);
                    }
                });
            }
            if (usr.userRole.includes("Sokhna")) {
                ccs.forEach(function (cc) {
                    if (cc.ccName.includes('Sokhna')) {
                        _this.CostCenters.push(cc);
                    }
                });
            }
            if (usr.userRole.includes("Safaga")) {
                ccs.forEach(function (cc) {
                    if (cc.ccName.includes('Safaga')) {
                        _this.CostCenters.push(cc);
                    }
                });
            }
        });
    };
    InvoicemngComponent.prototype.onGetAllItemsCategorys = function () {
        var _this = this;
        //  
        this.icSrv.getAllItemsCategorys().subscribe(function (ics) {
            //    
            _this.ItemsCategorys = ics;
        });
    };
    InvoicemngComponent.prototype.selectSupplierEvent = function (event) {
        this.invoiceForm.controls['splId'].setValue(event.splId);
    };
    InvoicemngComponent.prototype.selectCostCenterEvent = function (event) {
        this.invoiceForm.controls['CostCenterId'].setValue(event.CostCenterId);
    };
    InvoicemngComponent.prototype.onSubmit = function (status) {
        var _this = this;
        if (!this.invoiceForm.value.InvoiceId) {
            this.loading = true;
            var finalDate = new Date(this.getInvdate.value).toLocaleString();
            this.invoiceForm.get('invDate').setValue(finalDate);
            this.invSrv.addInvoice(this.invoiceForm.value).subscribe(function (ItemsCategoryAdded) {
                _this.alertService.success('Invoice Uploaded Successfully');
                _this.invoiceForm.reset();
                // var supplierHTMLelemnt = <HTMLInputElement> document.getElementById('splId--');
                // supplierHTMLelemnt.value = '';
                _this.loading = false;
                _this.onGetAllInvoices();
            }, function (error) {
                console.log('Data is not Imported ...', error.message);
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.alertService.danger('Server error');
                }
            });
        }
        else if (this.invoiceForm.value.InvoiceId) {
            this.invSrv.editInvoice(this.invoiceForm.value.InvoiceId, this.invoiceForm.value).subscribe(function (ItemsCategoryAdded) {
                _this.invoiceForm.reset();
                _this.onGetAllInvoices();
                _this.alertService.success('Invoice Changed Successfully');
            }, function (error) {
                console.log('Data is not Imported ...', error.message);
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.alertService.danger('Server error');
                }
            });
        }
    };
    InvoicemngComponent.prototype.onCancel = function () {
        this.invoiceForm.reset();
    };
    InvoicemngComponent.prototype.onChangeDate = function (e) {
        if (this.checkDateInRange(e)) {
            this.invoiceForm.get('invDate').setValue(e.target.value);
        }
    };
    InvoicemngComponent.prototype.checkDateInRange = function (dateToCheck) {
        //Console examples
        if (this.minDate < dateToCheck && dateToCheck < this.maxDate) {
            //console.log('the date : ', dateToCheck, ' is more than', minInput, ' is less than', maxInput);
            return true;
        }
        else {
            return false;
        }
    };
    InvoicemngComponent.prototype.fileChangeListener = function (event) {
        var _this = this;
        debugger;
        var me = this;
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            _this.invoiceForm.get('InvFile').setValue(reader.result);
        };
        this.invoiceForm.get('InvFileAttached').setValue(true);
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    };
    //////////////////////////////////// Invoices List //////////////////////////////
    InvoicemngComponent.prototype.onSelectAll = function (e) {
        var _this = this;
        // 
        this.SelectedInvoices = [];
        if (e.target.checked) {
            this.Invoices.forEach(function (val) {
                val.checkbox = true;
                _this.SelectedInvoices.push(val);
            });
        }
        else if (!e.target.checked) {
            this.Invoices.forEach(function (val) { val.checkbox = false; });
        }
        // this.onUpdatestatistics();
    };
    InvoicemngComponent.prototype.onSelect = function (e, ast) {
        var _this = this;
        // 
        // console.log(e);
        if (e.target.checked) {
            this.SelectedInvoices.push(ast);
            var allChecked_1 = true;
            this.Invoices.forEach(function (invoice, index) {
                var invoiceItemHTMLelemnt = document.getElementById('invoiceItem--' + index);
                if (!invoiceItemHTMLelemnt.checked)
                    allChecked_1 = false;
                // this.onUpdatestatistics();
            });
            if (allChecked_1)
                var invoiceItemALLHTMLelemnt = document.getElementById("invoiceItemALL--");
            invoiceItemALLHTMLelemnt.checked = true;
            // this.onUpdatestatistics();
        }
        else if (!e.target.checked) {
            var invoiceItemALLHTMLelemnt = document.getElementById("invoiceItemALL--");
            if (invoiceItemALLHTMLelemnt.checked)
                invoiceItemALLHTMLelemnt.checked = false;
            this.SelectedInvoices.filter(function (invoice, selectedIndex) {
                if (invoice.InvoiceId === ast.InvoiceId) {
                    _this.SelectedInvoices.splice(selectedIndex, 1);
                    //  this.onUpdatestatistics();
                }
            });
        }
        // this.onUpdatestatistics();
    };
    InvoicemngComponent.prototype.onExportExcel = function () {
        if (this.SelectedInvoices.length == 0) {
            this.alertService.danger('No Invoice Selected');
        }
        else {
            this.expExcelSrv.exportAsExcelFile(this.SelectedInvoices, 'Invoices List');
        }
    };
    InvoicemngComponent.prototype.onPrintPreviewSelectedInvoices = function () {
        // console.log(ast);
        // 
        // this.bsModaleRef = this.modalService.show(AddeditasstComponent, {initialState: {ast}});
        // this.bsModaleRef.content.onClose = (updated) => {
        //   if (updated) {
        //     this.onGetAllInvoices();
        //     console.log('Edit clicked inside');
        //   }
        // };
        // console.log('Edit clicked');
    };
    InvoicemngComponent.prototype.setOrder = function (value) {
        // 
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    };
    InvoicemngComponent.prototype.onSort = function (event) {
        // console.log(event);
    };
    InvoicemngComponent.prototype.onShowHideStatistics = function () {
        this.showStatistics = !this.showStatistics;
    };
    InvoicemngComponent.prototype.onChangeRowsPerPage = function (event) {
        this.pageSize = event.target.value;
        this.pageIndex = 1;
        this.onUpdatestatistics();
    };
    InvoicemngComponent.prototype.onEditInvoice = function (inv) {
        this.invoiceForm.get('InvoiceId').patchValue(inv.InvoiceId);
        this.invoiceForm.get('invNumber').patchValue(inv.invNumber);
        this.invoiceForm.get('invAmount').patchValue(inv.invAmount);
        this.invoiceForm.get('Remarks').patchValue(inv.Remarks);
        this.invoiceForm.get('invDate').patchValue(inv.invDate);
        this.invoiceForm.get('invStatus').patchValue(inv.invStatus);
        this.invoiceForm.get('icId').patchValue(inv.icId);
        this.invoiceForm.get('ItemCategoryName').patchValue(inv.ItemCategoryName);
        this.invoiceForm.get('CostCenterId').patchValue(inv.CostCenterId);
        this.invoiceForm.get('CostCenterName').patchValue(inv.CostCenterName);
        this.invoiceForm.get('splId').patchValue(inv.splId);
        this.invoiceForm.get('SupplierName').patchValue(inv.SupplierName);
        // this.invoiceForm.get('InvFile').patchValue(inv.InvFile);
        // this.invoiceForm.get('InvFileAttached').patchValue(false);
        this.invoiceForm.patchValue(inv);
        var file = inv.InvFile.toString();
        this.invoiceForm.get('InvFile').setValue(file);
    };
    InvoicemngComponent.prototype.onDeleteInvoice = function (inv) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_14___default.a.fire({
            title: 'Invoice # ( ' + inv.invNumber + ' ) Will be deleted permanently</h4>',
            icon: 'info',
            // html: ' <ul *ngFor=" let a of assets "> <li> a.invCode  </li>   </ul> ',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: '<i class="fa "></i>Yes Delete It',
            confirmButtonAriaLabel: '',
            cancelButtonText: '<i class="fa ">Cancel</i>',
            cancelButtonAriaLabel: ''
        }).then(function (res) {
            if (res.value) {
                //    
                _this.invSrv.deleteInvoice(inv.InvoiceId).subscribe(function (inv) {
                    _this.alertService.success('Deleted Successfully');
                    _this.onGetAllInvoices();
                }, function (error) {
                    _this.loading = false;
                    if (error.message.includes('Http failure response for http://')) {
                        _this.alertService.danger('Server error');
                    }
                });
            }
        });
    };
    InvoicemngComponent.prototype.onDeleteAllSellected = function () {
        var _this = this;
        //  
        this.loading = true;
        if (this.SelectedInvoices.length == 0) {
            //   this.swalSrv.showSwal('basic-info', 'At leinv one invoice must be selected');
        }
        else {
            var ids_1 = [];
            this.SelectedInvoices.forEach(function (em) {
                ids_1.push(em.InvoiceId);
            });
            sweetalert2__WEBPACK_IMPORTED_MODULE_14___default.a.fire({
                title: this.SelectedInvoices.length + 'Invoices Will be deleted permanently</h4>',
                icon: 'info',
                // html: ' <ul *ngFor=" let a of invoices "> <li> a.invCode  </li>   </ul> ',
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText: '<i class="fa "></i>Yes Delete',
                confirmButtonAriaLabel: '',
                cancelButtonText: '<i class="fa "> Cancel</i>',
                cancelButtonAriaLabel: ''
            }).then(function (res) {
                if (res.value) {
                    //     
                    _this.invSrv.deleteSelectedInvoices(ids_1).subscribe(function (dltinv) {
                        _this.onGetAllInvoices();
                        //   this.swalSrv.showSwal('basic-success', "( " + dltAsts.length + " ) Invoices have been deleted successfully ");
                        _this.SelectedInvoices = [];
                        // this.onget();
                        _this.loading = false;
                    }, function (error) {
                        _this.loading = false;
                        if (error.message.includes('Http failure response for http://')) {
                            //      this.swalSrv.showSwal('basic-error', " Server connection Error / Data is not updated ");
                        }
                    });
                }
            });
        }
    };
    InvoicemngComponent.prototype.downloadInvoice = function (invId, invNumber, SupplierName) {
        debugger;
        var downloadLink = document.createElement("a");
        var fileName = "Inv-" + invNumber + "-" + SupplierName + ".pdf";
        this.invSrv.getInvoiceById(invId).subscribe(function (inv) {
            debugger;
            downloadLink.href = inv.InvFile;
            downloadLink.download = fileName;
            downloadLink.click();
        });
    };
    /////////// Filters ////////////////////
    InvoicemngComponent.prototype.buildSearchForm = function () {
        this.searchForm = this.fb.group({
            ItemCategoryName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            CostCenterName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            SupplierName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('')
        });
    };
    InvoicemngComponent.prototype.searchFilter = function (filters) {
        var _this = this;
        this.loading = true;
        //   this.setOneMonthDate();
        this.invSrv.getAllInvoices(this.dateFrom, this.dateTo).subscribe(function (invoices) {
            debugger;
            _this.Invoices = [];
            _this.TempInvoices = [];
            _this.usr = _this.strSrv.getUserFromStorage();
            invoices.forEach(function (inv) {
                if (_this.usr.userRole.includes("IT")) {
                    _this.TempInvoices.push(inv);
                }
                if (_this.usr.userRole.includes("Cairo")) {
                    _this.TempInvoices.push(inv);
                }
                if (_this.usr.userRole.includes("AirPort") && inv.CostCenterName.includes('AirPort')) {
                    _this.TempInvoices.push(inv);
                }
                if (_this.usr.userRole.includes("Alex") && inv.CostCenterName.includes('Alex')) {
                    _this.TempInvoices.push(inv);
                }
                if (_this.usr.userRole.includes("Alex-Port") && inv.CostCenterName.includes('Alex-Port')) {
                    _this.TempInvoices.push(inv);
                }
                if (_this.usr.userRole.includes("Kader") && inv.CostCenterName.includes('Kader')) {
                    _this.TempInvoices.push(inv);
                }
                if (_this.usr.userRole.includes("Zegiew") && inv.CostCenterName.includes('Zegiew')) {
                    _this.TempInvoices.push(inv);
                }
                if (_this.usr.userRole.includes("DMT") && inv.CostCenterName.includes('DMT')) {
                    _this.TempInvoices.push(inv);
                }
                if (_this.usr.userRole.includes("PSD") && inv.CostCenterName.includes('PSD')) {
                    _this.TempInvoices.push(inv);
                }
                if (_this.usr.userRole.includes("Sokhna") && inv.CostCenterName.includes('Sokhna')) {
                    _this.TempInvoices.push(inv);
                }
                if (_this.usr.userRole.includes("Sharm") && inv.CostCenterName.includes('Sharm')) {
                    _this.TempInvoices.push(inv);
                }
                if (_this.usr.userRole.includes("Safaga") && inv.CostCenterName.includes('Safaga')) {
                    _this.TempInvoices.push(inv);
                }
                if (_this.usr.userRole.includes("Free") && inv.CostCenterName.includes('Free')) {
                    _this.TempInvoices.push(inv);
                }
            });
            _this.loading = false;
            Object.keys(filters).forEach(function (key) { return filters[key] === '' ? delete filters[key] : key; });
            var keys = Object.keys(filters);
            keys.forEach(function (k) { return console.log(k); });
            var filterInvoice = function (invoice) { return keys.every(function (key) { return invoice[key] === filters[key]; }); };
            var invs = _this.TempInvoices.filter(filterInvoice);
            invs.forEach(function (inv) {
                var invdate = new Date(inv.invDate);
                if (invdate > _this.dateFrom && invdate < _this.dateTo) {
                    _this.Invoices.push(inv);
                }
            });
            _this.loading = false;
            _this.onUpdatestatistics();
        });
    };
    // filterUserList(filters: any): void {
    // }
    InvoicemngComponent.prototype.updateFilter = function (val) {
        if (this.TempInvoices.length > 0) {
            // console.log(Object.keys(this.temp[0]).length);
            var value_1 = val.toString().toLowerCase().trim();
            // get the amount of columns in the table
            var count_1 = Object.keys(this.TempInvoices[0]).length;
            // get the key names of each column in the dataset
            var keys_1 = Object.keys(this.TempInvoices[0]);
            // assign filtered matches to the active datatable
            this.Invoices = this.TempInvoices.filter(function (item) {
                // iterate through each row's column data
                for (var i = 0; i < count_1; i++) {
                    // check for a match
                    if ((item[keys_1[i]] &&
                        item[keys_1[i]]
                            .toString()
                            .toLowerCase()
                            .indexOf(value_1) !== -1) ||
                        !value_1) {
                        // found match, return true to add to result set
                        // console.log(item, 1);
                        return true;
                    }
                }
            });
            this.TempInvoices = this.Invoices;
        }
        else {
            this.TempInvoices = this.Invoices;
            // console.log(Object.keys(this.temp[0]).length);
            var value_2 = val.toString().toLowerCase().trim();
            // get the amount of columns in the table
            var count_2 = Object.keys(this.TempInvoices[0]).length;
            // get the key names of each column in the dataset
            var keys_2 = Object.keys(this.TempInvoices[0]);
            // assign filtered matches to the active datatable
            this.Invoices = this.TempInvoices.filter(function (item) {
                // iterate through each row's column data
                for (var i = 0; i < count_2; i++) {
                    // check for a match
                    if ((item[keys_2[i]] &&
                        item[keys_2[i]]
                            .toString()
                            .toLowerCase()
                            .indexOf(value_2) !== -1) ||
                        !value_2) {
                        // found match, return true to add to result set
                        // console.log(item, 1);
                        return true;
                    }
                }
            });
        }
        this.onUpdatestatistics();
        //Whenever the filter changes, always go back to the first page
    };
    InvoicemngComponent.prototype.onFilterByCostCenter = function (e) {
        var _this = this;
        this.pageIndex = 1;
        this.pageSize = 5;
        if (e.target.selectedOptions[0].text.toString() == 'Show All') {
            this.onGetAllInvoices();
        }
        else {
            if (this.TempInvoices.length > 0) {
                var val = e.target.selectedOptions[0].text.toString().trim();
                // console.log(Object.keys(this.temp[0]).length);
                var value_3 = val.toString().toLowerCase().trim();
                // get the amount of columns in the table
                var count_3 = Object.keys(this.TempInvoices[0]).length;
                // get the key names of each column in the dataset
                var keys_3 = Object.keys(this.TempInvoices[0]);
                // assign filtered matches to the active datatable
                this.Invoices = this.TempInvoices.filter(function (item) {
                    // iterate through each row's column data
                    for (var i = 0; i < count_3; i++) {
                        // check for a match
                        if ((item[keys_3[i]] &&
                            item[keys_3[i]]
                                .toString()
                                .toLowerCase()
                                .indexOf(value_3) !== -1) ||
                            !value_3) {
                            // found match, return true to add to result set
                            // console.log(item, 1);
                            return true;
                        }
                    }
                    console.log(_this.Invoices);
                    console.log(_this.TempInvoices);
                    _this.onUpdatestatistics();
                });
                this.TempInvoices = this.Invoices;
            }
            else {
                this.TempInvoices = this.Invoices;
                var val = e.target.selectedOptions[0].text.toString().trim();
                // console.log(Object.keys(this.temp[0]).length);
                var value_4 = val.toString().toLowerCase().trim();
                // get the amount of columns in the table
                var count_4 = Object.keys(this.TempInvoices[0]).length;
                // get the key names of each column in the dataset
                var keys_4 = Object.keys(this.TempInvoices[0]);
                // assign filtered matches to the active datatable
                this.Invoices = this.TempInvoices.filter(function (item) {
                    // iterate through each row's column data
                    for (var i = 0; i < count_4; i++) {
                        // check for a match
                        if ((item[keys_4[i]] &&
                            item[keys_4[i]]
                                .toString()
                                .toLowerCase()
                                .indexOf(value_4) !== -1) ||
                            !value_4) {
                            // found match, return true to add to result set
                            // console.log(item, 1);
                            return true;
                        }
                    }
                });
                this.TempInvoices = this.Invoices;
            }
        }
        this.onUpdatestatistics();
    };
    InvoicemngComponent.prototype.onFilterByCategory = function (e) {
        // if(e.target.value == null){
        //   this.
        // }
        // this.pageIndex = 1;
        // this.pageSize = 5;
        // if(e.target.selectedOptions[0].text.toString() == 'Show All') {
        //       this.onGetAllInvoices();
        // } else{
        //       this.Invoices = [];
        //       this.TempInvoices.forEach(inv =>{
        //         if(inv.ItemCategoryName == e.target.selectedOptions[0].text.toString().trim()){
        //           this.Invoices.push(inv);
        //         }
        //       });
        //       this.onUpdatestatistics();
        //}
    };
    InvoicemngComponent.prototype.onFilterInvoicesByDate = function (e) {
        this.dateFrom = new Date(e[0]);
        this.dateTo = new Date(e[1]);
    };
    InvoicemngComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        // Add 'implements AfterViewInit' to the class.
        Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["fromEvent"])(this.search.nativeElement, 'keydown')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["debounceTime"])(550), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(function (x) { return x['target']['value']; }))
            .subscribe(function (value) {
            _this.updateFilter(value);
        });
        this.onUpdatestatistics();
    };
    Object.defineProperty(InvoicemngComponent.prototype, "getInvoiceForm", {
        get: function () { return this.invoiceForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InvoicemngComponent.prototype, "getInvoiceId", {
        get: function () { return this.invoiceForm.get('InvoiceId'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InvoicemngComponent.prototype, "getInvdate", {
        get: function () { return this.invoiceForm.get('invDate'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InvoicemngComponent.prototype, "getSupplierName", {
        get: function () { return this.invoiceForm.get('SupplierName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InvoicemngComponent.prototype, "getInvFile", {
        get: function () { return this.invoiceForm.get('InvFile'); },
        enumerable: true,
        configurable: true
    });
    InvoicemngComponent.prototype.IsInvFileExist = function (invFile) {
        var is = false;
        if (invFile != null) {
            is = true;
        }
        ;
        return is;
    };
    InvoicemngComponent.ctorParameters = function () { return [
        { type: app_shared_services_shareddata_service__WEBPACK_IMPORTED_MODULE_17__["ShareddataService"] },
        { type: app_shared_services_appstorage_service__WEBPACK_IMPORTED_MODULE_16__["AppstorageService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["DomSanitizer"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: app_masterdata_supplier_service_supplier_service__WEBPACK_IMPORTED_MODULE_2__["SupplierService"] },
        { type: app_masterdata_costcenter_Services_costcenter_service__WEBPACK_IMPORTED_MODULE_3__["CostcenterService"] },
        { type: app_masterdata_itemscategory_service_itemcategory_service__WEBPACK_IMPORTED_MODULE_9__["ItemcategoryService"] },
        { type: _service_invoicemng_service__WEBPACK_IMPORTED_MODULE_10__["InvoicemngService"] },
        { type: app_shared_services_downloadfile_service__WEBPACK_IMPORTED_MODULE_4__["FileService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: app_sweetalert_service__WEBPACK_IMPORTED_MODULE_7__["SweetalertService"] },
        { type: ngx_alerts__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
        { type: app_shared_services_exportexcel_service__WEBPACK_IMPORTED_MODULE_11__["ExportexcelService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('search'),
        __metadata("design:type", Object)
    ], InvoicemngComponent.prototype, "search", void 0);
    InvoicemngComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invoicemng',
            template: __importDefault(__webpack_require__(/*! raw-loader!./invoicemng.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/operation/invoicemng/invoicemng.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./invoicemng.component.css */ "./src/app/operation/invoicemng/invoicemng.component.css")).default]
        }),
        __metadata("design:paramtypes", [app_shared_services_shareddata_service__WEBPACK_IMPORTED_MODULE_17__["ShareddataService"],
            app_shared_services_appstorage_service__WEBPACK_IMPORTED_MODULE_16__["AppstorageService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["DomSanitizer"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            app_masterdata_supplier_service_supplier_service__WEBPACK_IMPORTED_MODULE_2__["SupplierService"],
            app_masterdata_costcenter_Services_costcenter_service__WEBPACK_IMPORTED_MODULE_3__["CostcenterService"],
            app_masterdata_itemscategory_service_itemcategory_service__WEBPACK_IMPORTED_MODULE_9__["ItemcategoryService"],
            _service_invoicemng_service__WEBPACK_IMPORTED_MODULE_10__["InvoicemngService"],
            app_shared_services_downloadfile_service__WEBPACK_IMPORTED_MODULE_4__["FileService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            app_sweetalert_service__WEBPACK_IMPORTED_MODULE_7__["SweetalertService"],
            ngx_alerts__WEBPACK_IMPORTED_MODULE_6__["AlertService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
            app_shared_services_exportexcel_service__WEBPACK_IMPORTED_MODULE_11__["ExportexcelService"]])
    ], InvoicemngComponent);
    return InvoicemngComponent;
}());



/***/ }),

/***/ "./src/app/operation/invoicemng/reports/lbd-chartBranchs/lbd-chartBranch.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/operation/invoicemng/reports/lbd-chartBranchs/lbd-chartBranch.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ChartTypeBranch, LbdChartBranchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartTypeBranch", function() { return ChartTypeBranch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LbdChartBranchComponent", function() { return LbdChartBranchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chartist */ "./node_modules/chartist/dist/chartist.js");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chartist__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

//import * as Chartist from 'app/operation/invoicemng/reports/lbd-chartMonths/node_modules/chartist';


var ChartTypeBranch;
(function (ChartTypeBranch) {
    ChartTypeBranch[ChartTypeBranch["Pie"] = 0] = "Pie";
    ChartTypeBranch[ChartTypeBranch["Line"] = 1] = "Line";
    ChartTypeBranch[ChartTypeBranch["Bar"] = 2] = "Bar";
})(ChartTypeBranch || (ChartTypeBranch = {}));
// export enum ChartBy {
//   Months,
//   Branchs
// }
var LbdChartBranchComponent = /** @class */ (function () {
    function LbdChartBranchComponent(router) {
        this.router = router;
    }
    LbdChartBranchComponent_1 = LbdChartBranchComponent;
    ;
    LbdChartBranchComponent.prototype.ngOnInit = function () {
        // ;
        this.chartId = "lbd-chartBranch-" + LbdChartBranchComponent_1.currentId++;
    };
    LbdChartBranchComponent.prototype.ngAfterViewInit = function () {
        new chartist__WEBPACK_IMPORTED_MODULE_1__["Bar"]("#" + this.chartId, this.chartDataForBranchs, this.chartOptions, this.chartResponsive);
        ;
    };
    LbdChartBranchComponent.prototype.ngOnChanges = function (changes) {
        new chartist__WEBPACK_IMPORTED_MODULE_1__["Bar"]("#" + this.chartId, this.chartDataForBranchs, this.chartOptions, this.chartResponsive);
        ;
    };
    var LbdChartBranchComponent_1;
    LbdChartBranchComponent.currentId = 1;
    LbdChartBranchComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LbdChartBranchComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LbdChartBranchComponent.prototype, "subtitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LbdChartBranchComponent.prototype, "chartClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], LbdChartBranchComponent.prototype, "chartTypeBranch", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LbdChartBranchComponent.prototype, "chartDataForBranchs", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LbdChartBranchComponent.prototype, "chartOptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], LbdChartBranchComponent.prototype, "chartResponsive", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LbdChartBranchComponent.prototype, "footerIconClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LbdChartBranchComponent.prototype, "footerText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], LbdChartBranchComponent.prototype, "legendItemsBranchs", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], LbdChartBranchComponent.prototype, "withHr", void 0);
    LbdChartBranchComponent = LbdChartBranchComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'lbd-chartBranch',
            template: __importDefault(__webpack_require__(/*! raw-loader!./lbd-chartBranch.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/operation/invoicemng/reports/lbd-chartBranchs/lbd-chartBranch.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LbdChartBranchComponent);
    return LbdChartBranchComponent;
}());



/***/ }),

/***/ "./src/app/operation/invoicemng/reports/lbd-chartMonths/lbd-chartMonth.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/operation/invoicemng/reports/lbd-chartMonths/lbd-chartMonth.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ChartTypeMonth, LbdChartMonthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartTypeMonth", function() { return ChartTypeMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LbdChartMonthComponent", function() { return LbdChartMonthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chartist */ "./node_modules/chartist/dist/chartist.js");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chartist__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var ChartTypeMonth;
(function (ChartTypeMonth) {
    ChartTypeMonth[ChartTypeMonth["Pie"] = 0] = "Pie";
    ChartTypeMonth[ChartTypeMonth["Line"] = 1] = "Line";
    ChartTypeMonth[ChartTypeMonth["Bar"] = 2] = "Bar";
})(ChartTypeMonth || (ChartTypeMonth = {}));
var LbdChartMonthComponent = /** @class */ (function () {
    function LbdChartMonthComponent(router) {
        this.router = router;
    }
    LbdChartMonthComponent_1 = LbdChartMonthComponent;
    ;
    LbdChartMonthComponent.prototype.ngOnInit = function () {
        this.chartId = "lbd-chartMonth-" + LbdChartMonthComponent_1.currentId++;
        ;
    };
    LbdChartMonthComponent.prototype.ngAfterViewInit = function () {
        new chartist__WEBPACK_IMPORTED_MODULE_1__["Bar"]("#" + this.chartId, this.chartDataForMonths, this.chartOptions, this.chartResponsive);
        ;
    };
    LbdChartMonthComponent.prototype.ngOnChanges = function (changes) {
        new chartist__WEBPACK_IMPORTED_MODULE_1__["Bar"]("#" + this.chartId, this.chartDataForMonths, this.chartOptions, this.chartResponsive);
        ;
    };
    var LbdChartMonthComponent_1;
    LbdChartMonthComponent.currentId = 1;
    LbdChartMonthComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LbdChartMonthComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LbdChartMonthComponent.prototype, "subtitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LbdChartMonthComponent.prototype, "chartClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], LbdChartMonthComponent.prototype, "chartTypeMonth", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LbdChartMonthComponent.prototype, "chartDataForMonths", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LbdChartMonthComponent.prototype, "chartOptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], LbdChartMonthComponent.prototype, "chartResponsive", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LbdChartMonthComponent.prototype, "footerIconClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LbdChartMonthComponent.prototype, "footerText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], LbdChartMonthComponent.prototype, "legendItemsMonths", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], LbdChartMonthComponent.prototype, "withHr", void 0);
    LbdChartMonthComponent = LbdChartMonthComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'lbd-chartMonth',
            template: __importDefault(__webpack_require__(/*! raw-loader!./lbd-chartMonth.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/operation/invoicemng/reports/lbd-chartMonths/lbd-chartMonth.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LbdChartMonthComponent);
    return LbdChartMonthComponent;
}());



/***/ }),

/***/ "./src/app/operation/invoicemng/reports/reports.component.css":
/*!********************************************************************!*\
  !*** ./src/app/operation/invoicemng/reports/reports.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mypurple{\r\n    color: #800080 !important ;\r\n    /* text-emphasis-color:  purple  ; */\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3BlcmF0aW9uL2ludm9pY2VtbmcvcmVwb3J0cy9yZXBvcnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsb0NBQW9DO0FBQ3hDIiwiZmlsZSI6InNyYy9hcHAvb3BlcmF0aW9uL2ludm9pY2VtbmcvcmVwb3J0cy9yZXBvcnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXlwdXJwbGV7XHJcbiAgICBjb2xvcjogIzgwMDA4MCAhaW1wb3J0YW50IDtcclxuICAgIC8qIHRleHQtZW1waGFzaXMtY29sb3I6ICBwdXJwbGUgIDsgKi9cclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/operation/invoicemng/reports/reports.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/operation/invoicemng/reports/reports.component.ts ***!
  \*******************************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var app_masterdata_supplier_service_supplier_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/masterdata/supplier/service/supplier.service */ "./src/app/masterdata/supplier/service/supplier.service.ts");
/* harmony import */ var app_masterdata_costcenter_Services_costcenter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/masterdata/costcenter/Services/costcenter.service */ "./src/app/masterdata/costcenter/Services/costcenter.service.ts");
/* harmony import */ var app_shared_services_downloadfile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/downloadfile.service */ "./src/app/shared/services/downloadfile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var ngx_alerts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-alerts */ "./node_modules/ngx-alerts/__ivy_ngcc__/fesm5/ngx-alerts.js");
/* harmony import */ var app_sweetalert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/sweetalert.service */ "./src/app/sweetalert.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var app_masterdata_itemscategory_service_itemcategory_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/masterdata/itemscategory/service/itemcategory.service */ "./src/app/masterdata/itemscategory/service/itemcategory.service.ts");
/* harmony import */ var _service_invoicemng_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../service/invoicemng.service */ "./src/app/operation/invoicemng/service/invoicemng.service.ts");
/* harmony import */ var app_shared_services_exportexcel_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/shared/services/exportexcel.service */ "./src/app/shared/services/exportexcel.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var app_shared_services_appstorage_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/shared/services/appstorage.service */ "./src/app/shared/services/appstorage.service.ts");
/* harmony import */ var app_shared_services_shareddata_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/shared/services/shareddata.service */ "./src/app/shared/services/shareddata.service.ts");
/* harmony import */ var _lbd_chartMonths_lbd_chartMonth_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lbd-chartMonths/lbd-chartMonth.component */ "./src/app/operation/invoicemng/reports/lbd-chartMonths/lbd-chartMonth.component.ts");
/* harmony import */ var _lbd_chartBranchs_lbd_chartBranch_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./lbd-chartBranchs/lbd-chartBranch.component */ "./src/app/operation/invoicemng/reports/lbd-chartBranchs/lbd-chartBranch.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


















var ReportsComponent = /** @class */ (function () {
    function ReportsComponent(sharedDataSrv, strSrv, sanitizer, http, spltSrv, ccSrv, icSrv, invSrv, fileService, router, swalSrv, alertService, fb, expExcelSrv) {
        this.sharedDataSrv = sharedDataSrv;
        this.strSrv = strSrv;
        this.sanitizer = sanitizer;
        this.http = http;
        this.spltSrv = spltSrv;
        this.ccSrv = ccSrv;
        this.icSrv = icSrv;
        this.invSrv = invSrv;
        this.fileService = fileService;
        this.router = router;
        this.swalSrv = swalSrv;
        this.alertService = alertService;
        this.fb = fb;
        this.expExcelSrv = expExcelSrv;
        ////////////////////
        this.InvDateNgModel = "";
        this.TotalInvoicesAmount = 0;
        this.totalLaptops = 0;
        this.totalDesktops = 0;
        this.totalMobiles = 0;
        this.totalInvoices = 0;
        this.totalScreens = 0;
        this.totalPrinters = 0;
        this.totalServers = 0;
        this.totalDataLines = 0;
        this.selectedInvoices = 0;
        this.noCompany = 0;
        this.noBranch = 0;
        this.noEmployee = 0;
        this.totalVoiceLines = 0;
        this.noAssetType = 0;
        this.CostCenters = [];
        this.Suppliers = [];
        this.ItemsCategorys = [];
        this.SelectedInvoices = [];
        this.InvoicesMonths = [];
        this.TempInvoicesMonths = [];
        this.InvoicesBranches = [];
        this.TempInvoicesBranches = [];
        this.pageIndex = 1;
        this.pageSize = 10;
        this.loading = false;
        this.showStatistics = false;
        this.order = "info.name";
        this.reverse = false;
        this.minDate = new Date('01.01.2019');
        this.maxDate = new Date();
        this.currentDate = new Date();
        this.dateFrom = new Date('02.01.2020');
        this.dateTo = new Date();
        this.FromDateString = '';
        this.ToDateString = '';
        this.totalByCC = 0;
        this.invoiceForm = this.fb.group({
            InvoiceId: null,
            invNumber: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            invAmount: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            invDate: [this.currentDate, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            Remarks: null,
            InvFile: null,
            invStatus: ['Paid', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            ItemCategoryName: null,
            CostCenterName: null,
            SupplierName: null,
            splId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            CostCenterId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            icId: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
        });
        this.onGetAllItemsCategorys();
        this.onGetAllCostCenters();
        this.onGetAllSuppliers();
        this.onGetAllInvoices();
    }
    ReportsComponent.prototype.ngOnInit = function () {
        this.buildFilterByBranchForm();
        this.buildFilterbyMonthForm();
        this.loadChartMonths();
        this.loadChartBranchs();
        this.setOneMonthDate();
    };
    ReportsComponent.prototype.ngOnChanges = function () {
    };
    ReportsComponent.prototype.loadChartMonths = function (records) {
        this.activityChartTypeMonth = _lbd_chartMonths_lbd_chartMonth_component__WEBPACK_IMPORTED_MODULE_16__["ChartTypeMonth"].Bar;
        this.activityChartDataForMonths = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', ' Sept', ' Oct', ' Nov', ' Dec', '-', 'Total'],
            series: records
        };
        debugger;
        this.activityChartOptions = {
            seriesBarDistance: 10,
            axisX: {
                showGrid: false
            },
            height: '245px'
        };
        this.activityChartResponsive = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        var cat1 = 'No-Info';
        var cat2 = 'No-Info';
        var cat3 = 'No-Info';
        var cat4 = 'No-Info';
        if (records != undefined && records[0] != null) {
            cat1 = records[0][12];
        }
        if (records != undefined && records[1] != null) {
            cat2 = records[1][12];
        }
        if (records != undefined && records[2] != null) {
            cat3 = records[2][12];
        }
        if (records != undefined && records[3] != null) {
            cat4 = records[3][12];
        }
        this.activityChartLegendItemsMonth = [
            { title: cat1, imageClass: 'fa fa-circle text-info' },
            { title: cat2, imageClass: 'fa fa-circle text-danger' },
            { title: cat3, imageClass: 'fa fa-circle text-warning' },
            { title: cat4, imageClass: 'fa fa-circle color-purple' }
            // color:#800080
        ];
    };
    ReportsComponent.prototype.loadChartBranchs = function (records) {
        var _this = this;
        debugger;
        var cat1 = 'No Info';
        var cat2 = 'No-Info';
        var cat3 = 'No-Info';
        this.activityChartTypeBranch = _lbd_chartBranchs_lbd_chartBranch_component__WEBPACK_IMPORTED_MODULE_17__["ChartTypeBranch"].Bar;
        this.activityChartDataForBranchs = {
            labels: [],
            series: [
            // [10,10],
            // [20,20],
            // [30,30]
            ]
        };
        if (records != undefined) {
            records.forEach(function (rec, index) {
                if (!_this.activityChartDataForBranchs.labels.includes(rec.ccName)) {
                    _this.activityChartDataForBranchs.labels.push(rec.ccName);
                }
            });
        }
        this.totalByCC = 0;
        this.activityChartDataForBranchs.labels.forEach(function (cc, index) {
            var srs = [];
            records.forEach(function (rec, iCat) {
                debugger;
                cat1 = rec.catName;
                if (rec.ccName == cc) {
                    srs.push(rec.catTotal);
                    _this.totalByCC += rec.catTotal;
                    if (_this.activityChartDataForBranchs.series.length != 0 && rec.ccName == cc) {
                        _this.activityChartDataForBranchs.series[0].push(rec.catTotal);
                        srs = [];
                        debugger;
                    }
                }
            });
            if (_this.activityChartDataForBranchs.series.length == 0) {
                _this.activityChartDataForBranchs.series.push(srs);
                srs = [];
                debugger;
            }
        });
        // let lnthCC = this.activityChartDataForBranchs.labels.length;
        // let lnthCat = records.length;
        // let srsArray = [];
        //     this.activityChartDataForBranchs.labels.forEach(cc=>{
        //   srsArray.push([]);
        // });
        // srsArray.forEach(arr => {
        //   debugger;
        //   this.activityChartDataForBranchs.labels.forEach(cc=>{
        //     arr.push(0);
        //   });
        // });
        // debugger;  
        // records.forEach((rec, iCat)=>{
        //   let series: any[] = [];
        //   debugger;
        //   this.activityChartDataForBranchs.labels.forEach((lb, iCC) => {
        //       if(rec.ccName == lb){
        //                 series.push(rec.catTotal);
        //                 if(iCC == 0){
        //                   cat1 = rec.catName
        //                 }
        //                 if(iCC == 1){
        //                   cat2 = rec.catName
        //                 }
        //                 if(iCC == 2){
        //                   cat3 = rec.catName
        //                 }
        //                 debugger;
        //       } 
        //   });
        //   this.activityChartDataForBranchs.series.push(series);
        //   debugger;
        // });
        //   this.activityChartDataForBranchs.series.forEach((cat: any[])=>{
        //     debugger;
        //     let lnthCC = this.activityChartDataForBranchs.labels.length
        //     let lnthCat = cat.length;
        //     if(lnthCat < lnthCC){
        //       var i;
        //       for (i = 0; i < lnthCat; i++) {
        //         cat.push(0);
        //         debugger;
        //       }
        //     }
        // });
        ////////////////////
        this.activityChartOptions = {
            seriesBarDistance: 10,
            axisX: {
                showGrid: false
            },
            height: '245px'
        };
        this.activityChartResponsive = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        this.activityChartLegendItemsBranchs = [
            { title: 'braaaaanch', imageClass: 'fa fa-circle text-info' },
            { title: 'BMW 5 Series', imageClass: 'fa fa-circle text-danger' }
        ];
        // if(records != undefined && records.labels[0] != null){ cat1 = records.labels[0]; }
        // if(records != undefined && records.labels[1] != null){ cat2 = records.labels[1]; }
        // if(records != undefined && records.labels[2] != null){ cat3 = records.labels[2]; }
        this.activityChartLegendItemsBranchs = [
            { title: cat1, imageClass: 'fa fa-circle text-info' },
        ];
    };
    ReportsComponent.prototype.loadSeriesForMonths = function (records) {
        //  ;
        var series = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        if (records != null) {
            series = records;
        }
        return series;
    };
    ReportsComponent.prototype.loadSeriesForBranchs = function (records) {
        //   ;
        var series = [];
        this.CostCenters.forEach(function (cc) {
            //   ;
            series.push(cc.ccName.toString());
        });
        return series;
    };
    ReportsComponent.prototype.setOneMonthDate = function () {
        var month = this.dateTo.getMonth();
        //  let pastmonth = month-1;
        //  this.dateFrom.setMonth(pastmonth);
        this.ToDateString = this.dateTo.getDate() + " / " + this.dateTo.getMonth() + " / " + this.dateTo.getFullYear();
        this.FromDateString = this.dateFrom.getDate() + " / " + this.dateFrom.getMonth() + " / " + this.dateFrom.getFullYear();
    };
    //////////////////////   /////////////////////////////
    ReportsComponent.prototype.formatCurrency_TaxableValue = function (event) {
        var uy = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(event.target.value);
        // this.tax = event.target.value;
        // this.taxableValue = uy;
    };
    ReportsComponent.prototype.getCurrentUser = function () {
        var _this = this;
        // this.sharedDataSrv.getCurrentUser().subscribe( res=>{
        //       
        //       this.usr = res;
        // })
        this.strSrv.getUserFromStorage().subscribe(function (usr) {
            _this.usr = usr;
        });
    };
    ReportsComponent.prototype.onUpdatestatistics = function () {
        var _this = this;
        this.TotalInvoicesAmount = 0;
        this.pageIndex = 1;
        this.InvoicesMonths.forEach(function (i) {
            _this.TotalInvoicesAmount += i.invAmount;
        });
    };
    ReportsComponent.prototype.onGetAllInvoices = function () {
        var _this = this;
        this.InvoicesMonths = [];
        this.TempInvoicesMonths = [];
        this.InvoicesBranches = [];
        this.TempInvoicesBranches = [];
        this.loading = true;
        this.invSrv.getAllInvoices(this.dateFrom, this.dateTo).subscribe(function (invs) {
            _this.usr = _this.strSrv.getUserFromStorage();
            invs.forEach(function (inv) {
                if (_this.usr.userRole.includes("IT")) {
                    _this.InvoicesMonths.push(inv);
                    //    this.InvoicesBranches.push(inv);
                }
                if (_this.usr.userRole.includes("Cairo")) {
                    _this.InvoicesMonths.push(inv);
                    //    this.TempInvoices.push(inv);
                }
                if (_this.usr.userRole.includes("AirPort") && inv.CostCenterName.includes('AirPort')) {
                    _this.InvoicesMonths.push(inv);
                    //  this.TempInvoices.push(inv);
                }
                if (_this.usr.userRole.includes("Alex") && inv.CostCenterName.includes('Alex')) {
                    _this.InvoicesMonths.push(inv);
                    //      this.TempInvoices.push(inv);
                }
                if (_this.usr.userRole.includes("Alex-Port") && inv.CostCenterName.includes('Alex-Port')) {
                    _this.InvoicesMonths.push(inv);
                    //      this.TempInvoices.push(inv);
                }
                if (_this.usr.userRole.includes("Kader") && inv.CostCenterName.includes('Kader')) {
                    _this.InvoicesMonths.push(inv);
                    //   this.TempInvoices.push(inv);
                }
                if (_this.usr.userRole.includes("Zegiew") && inv.CostCenterName.includes('Zegiew')) {
                    _this.InvoicesMonths.push(inv);
                    //        this.TempInvoices.push(inv);
                }
                if (_this.usr.userRole.includes("DMT") && inv.CostCenterName.includes('DMT')) {
                    _this.InvoicesMonths.push(inv);
                    //      this.TempInvoices.push(inv);
                }
                if (_this.usr.userRole.includes("PSD") && inv.CostCenterName.includes('PSD')) {
                    _this.InvoicesMonths.push(inv);
                    //   this.TempInvoices.push(inv);
                }
                if (_this.usr.userRole.includes("Sokhna") && inv.CostCenterName.includes('Sokhna')) {
                    _this.InvoicesMonths.push(inv);
                    //  this.TempInvoices.push(inv);
                }
                if (_this.usr.userRole.includes("Sharm") && inv.CostCenterName.includes('Sharm')) {
                    _this.InvoicesMonths.push(inv);
                    //      this.TempInvoices.push(inv);
                }
                if (_this.usr.userRole.includes("Safaga") && inv.CostCenterName.includes('Safaga')) {
                    _this.InvoicesMonths.push(inv);
                    //    this.TempInvoices.push(inv);
                }
                if (_this.usr.userRole.includes("Free") && inv.CostCenterName.includes('Free')) {
                    _this.InvoicesMonths.push(inv);
                    //     this.TempInvoices.push(inv);
                }
            });
            _this.loading = false;
            _this.onUpdatestatistics();
        }, function (err) {
            _this.alertService.danger('Server Error');
            _this.loading = false;
        });
    };
    ReportsComponent.prototype.onGetAllSuppliers = function () {
        var _this = this;
        //  
        this.spltSrv.getAllSuppliers().subscribe(function (spls) {
            _this.Suppliers = spls;
        });
    };
    ReportsComponent.prototype.onGetAllCostCenters = function () {
        var _this = this;
        this.ccSrv.getAllCostCenters().subscribe(function (ccs) {
            var usr = _this.strSrv.getUserFromStorage();
            if (usr.userRole == "IT") {
                _this.CostCenters = ccs;
            }
            if (usr.userRole.includes("Cairo")) {
                _this.CostCenters = ccs;
            }
            if (usr.userRole.includes("Suez")) {
                ccs.forEach(function (cc) {
                    if (cc.ccName.includes('Suez')) {
                        _this.CostCenters.push(cc);
                    }
                });
            }
            if (usr.userRole.includes("Alex")) {
                ccs.forEach(function (cc) {
                    if (cc.ccName.includes('Alex')) {
                        _this.CostCenters.push(cc);
                    }
                });
            }
            if (usr.userRole.includes("Airport")) {
                ccs.forEach(function (cc) {
                    if (cc.ccName.includes('Airport')) {
                        _this.CostCenters.push(cc);
                    }
                });
            }
            if (usr.userRole.includes("Alex-Port")) {
                ccs.forEach(function (cc) {
                    if (cc.ccName.includes('Alex-Port')) {
                        _this.CostCenters.push(cc);
                    }
                });
            }
            if (usr.userRole.includes("Kader")) {
                ccs.forEach(function (cc) {
                    if (cc.ccName.includes('Kader')) {
                        _this.CostCenters.push(cc);
                    }
                });
            }
            if (usr.userRole.includes("Zeghiew")) {
                ccs.forEach(function (cc) {
                    if (cc.ccName.includes('Zeghiew')) {
                        _this.CostCenters.push(cc);
                    }
                });
            }
            if (usr.userRole.includes("Free")) {
                ccs.forEach(function (cc) {
                    if (cc.ccName.includes('Free')) {
                        _this.CostCenters.push(cc);
                    }
                });
            }
            if (usr.userRole.includes("DMT")) {
                ccs.forEach(function (cc) {
                    if (cc.ccName.includes('DMT')) {
                        _this.CostCenters.push(cc);
                    }
                });
            }
            if (usr.userRole.includes("PSD")) {
                ccs.forEach(function (cc) {
                    if (cc.ccName.includes('PSD')) {
                        _this.CostCenters.push(cc);
                    }
                });
            }
            if (usr.userRole.includes("Sharm")) {
                ccs.forEach(function (cc) {
                    if (cc.ccName.includes('Sharm')) {
                        _this.CostCenters.push(cc);
                    }
                });
            }
            if (usr.userRole.includes("Sokhna")) {
                ccs.forEach(function (cc) {
                    if (cc.ccName.includes('Sokhna')) {
                        _this.CostCenters.push(cc);
                    }
                });
            }
            if (usr.userRole.includes("Safaga")) {
                ccs.forEach(function (cc) {
                    if (cc.ccName.includes('Safaga')) {
                        _this.CostCenters.push(cc);
                    }
                });
            }
        });
    };
    ReportsComponent.prototype.onGetAllItemsCategorys = function () {
        var _this = this;
        //  
        this.icSrv.getAllItemsCategorys().subscribe(function (ics) {
            //    
            _this.ItemsCategorys = ics;
        });
    };
    ReportsComponent.prototype.selectSupplierEvent = function (event) {
        this.invoiceForm.controls['splId'].setValue(event.splId);
    };
    ReportsComponent.prototype.selectCostCenterEvent = function (event) {
        this.invoiceForm.controls['CostCenterId'].setValue(event.CostCenterId);
    };
    ReportsComponent.prototype.onSubmit = function (status) {
        var _this = this;
        if (!this.invoiceForm.value.InvoiceId) {
            this.loading = true;
            var finalDate = new Date(this.getInvdate.value).toLocaleString();
            this.invoiceForm.get('invDate').setValue(finalDate);
            this.invSrv.addInvoice(this.invoiceForm.value).subscribe(function (ItemsCategoryAdded) {
                _this.alertService.success('Invoice Uploaded Successfully');
                _this.invoiceForm.reset();
                // var supplierHTMLelemnt = <HTMLInputElement> document.getElementById('splId--');
                // supplierHTMLelemnt.value = '';
                _this.loading = false;
                _this.onGetAllInvoices();
            }, function (error) {
                console.log('Data is not Imported ...', error.message);
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.alertService.danger('Server error');
                }
            });
        }
        else if (this.invoiceForm.value.InvoiceId) {
            this.invSrv.editInvoice(this.invoiceForm.value.InvoiceId, this.invoiceForm.value).subscribe(function (ItemsCategoryAdded) {
                _this.invoiceForm.reset();
                _this.onGetAllInvoices();
                _this.alertService.success('Invoice Changed Successfully');
            }, function (error) {
                console.log('Data is not Imported ...', error.message);
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.alertService.danger('Server error');
                }
            });
        }
    };
    ReportsComponent.prototype.onCancel = function () {
        this.invoiceForm.reset();
    };
    ReportsComponent.prototype.onChangeDate = function (e) {
        if (this.checkDateInRange(e)) {
            this.invoiceForm.get('invDate').setValue(e.target.value);
        }
    };
    ReportsComponent.prototype.checkDateInRange = function (dateToCheck) {
        //Console examples
        if (this.minDate < dateToCheck && dateToCheck < this.maxDate) {
            //console.log('the date : ', dateToCheck, ' is more than', minInput, ' is less than', maxInput);
            return true;
        }
        else {
            return false;
        }
    };
    ReportsComponent.prototype.fileChangeListener = function (event) {
        var _this = this;
        var me = this;
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            console.log('reader.result', reader.result);
            //  this.imageCropData = reader.result;
            //console.log( 'MY Photo'  ,  reader.result);
            _this.invoiceForm.get('InvFile').setValue(reader.result);
            //console.log('  this.userForm.value  ', this.userForm.value);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    };
    //////////////////////////////////// Invoices List //////////////////////////////
    ReportsComponent.prototype.onSelectAll = function (e) {
        var _this = this;
        // 
        this.SelectedInvoices = [];
        if (e.target.checked) {
            this.InvoicesMonths.forEach(function (val) {
                val.checkbox = true;
                _this.SelectedInvoices.push(val);
            });
        }
        else if (!e.target.checked) {
            this.InvoicesMonths.forEach(function (val) { val.checkbox = false; });
        }
        // this.onUpdatestatistics();
    };
    ReportsComponent.prototype.onSelect = function (e, ast) {
        var _this = this;
        // 
        // console.log(e);
        if (e.target.checked) {
            this.SelectedInvoices.push(ast);
            var allChecked_1 = true;
            this.InvoicesMonths.forEach(function (invoice, index) {
                var invoiceItemHTMLelemnt = document.getElementById('invoiceItem--' + index);
                if (!invoiceItemHTMLelemnt.checked)
                    allChecked_1 = false;
                // this.onUpdatestatistics();
            });
            if (allChecked_1)
                var invoiceItemALLHTMLelemnt = document.getElementById("invoiceItemALL--");
            invoiceItemALLHTMLelemnt.checked = true;
            // this.onUpdatestatistics();
        }
        else if (!e.target.checked) {
            var invoiceItemALLHTMLelemnt = document.getElementById("invoiceItemALL--");
            if (invoiceItemALLHTMLelemnt.checked)
                invoiceItemALLHTMLelemnt.checked = false;
            this.SelectedInvoices.filter(function (invoice, selectedIndex) {
                if (invoice.InvoiceId === ast.InvoiceId) {
                    _this.SelectedInvoices.splice(selectedIndex, 1);
                    //  this.onUpdatestatistics();
                }
            });
        }
        // this.onUpdatestatistics();
    };
    ReportsComponent.prototype.onExportExcel = function () {
        if (this.SelectedInvoices.length == 0) {
            this.alertService.danger('No Invoice Selected');
        }
        else {
            this.expExcelSrv.exportAsExcelFile(this.SelectedInvoices, 'Invoices List');
        }
    };
    ReportsComponent.prototype.onPrintPreviewSelectedInvoices = function () {
        // console.log(ast);
        // 
        // this.bsModaleRef = this.modalService.show(AddeditasstComponent, {initialState: {ast}});
        // this.bsModaleRef.content.onClose = (updated) => {
        //   if (updated) {
        //     this.onGetAllInvoices();
        //     console.log('Edit clicked inside');
        //   }
        // };
        // console.log('Edit clicked');
    };
    ReportsComponent.prototype.setOrder = function (value) {
        // 
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    };
    ReportsComponent.prototype.onSort = function (event) {
        // console.log(event);
    };
    ReportsComponent.prototype.onShowHideStatistics = function () {
        this.showStatistics = !this.showStatistics;
    };
    ReportsComponent.prototype.onChangeRowsPerPage = function (event) {
        this.pageSize = event.target.value;
        this.pageIndex = 1;
        this.onUpdatestatistics();
    };
    ReportsComponent.prototype.onEditInvoice = function (inv) {
        //   this.invoiceForm.reset();
        // this.invoiceForm.setValue(inv);
        this.invoiceForm.get('InvoiceId').patchValue(inv.InvoiceId);
        this.invoiceForm.get('invNumber').patchValue(inv.invNumber);
        this.invoiceForm.get('invAmount').patchValue(inv.invAmount);
        this.invoiceForm.get('Remarks').patchValue(inv.Remarks);
        this.invoiceForm.get('invDate').patchValue(inv.invDate);
        this.invoiceForm.get('invStatus').patchValue(inv.invStatus);
        this.invoiceForm.get('icId').patchValue(inv.icId);
        this.invoiceForm.get('ItemCategoryName').patchValue(inv.ItemCategoryName);
        this.invoiceForm.get('CostCenterId').patchValue(inv.CostCenterId);
        this.invoiceForm.get('CostCenterName').patchValue(inv.CostCenterName);
        this.invoiceForm.get('splId').patchValue(inv.splId);
        this.invoiceForm.get('SupplierName').patchValue(inv.SupplierName);
        this.invoiceForm.get('InvFile').patchValue(inv.InvFile);
        this.invoiceForm.patchValue(inv);
        var file = inv.InvFile.toString();
        this.invoiceForm.get('InvFile').setValue(file);
    };
    ReportsComponent.prototype.onDeleteInvoice = function (inv) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
            title: 'Invoice # ( ' + inv.invNumber + ' ) Will be deleted permanently</h4>',
            icon: 'info',
            // html: ' <ul *ngFor=" let a of assets "> <li> a.invCode  </li>   </ul> ',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: '<i class="fa "></i>Yes Delete It',
            confirmButtonAriaLabel: '',
            cancelButtonText: '<i class="fa ">Cancel</i>',
            cancelButtonAriaLabel: ''
        }).then(function (res) {
            if (res.value) {
                //    
                _this.invSrv.deleteInvoice(inv.InvoiceId).subscribe(function (inv) {
                    _this.alertService.success('Deleted Successfully');
                    _this.onGetAllInvoices();
                }, function (error) {
                    _this.loading = false;
                    if (error.message.includes('Http failure response for http://')) {
                        _this.alertService.danger('Server error');
                    }
                });
            }
        });
    };
    ReportsComponent.prototype.onDeleteAllSellected = function () {
        var _this = this;
        //  
        this.loading = true;
        if (this.SelectedInvoices.length == 0) {
            //   this.swalSrv.showSwal('basic-info', 'At leinv one invoice must be selected');
        }
        else {
            var ids_1 = [];
            this.SelectedInvoices.forEach(function (em) {
                ids_1.push(em.InvoiceId);
            });
            sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
                title: this.SelectedInvoices.length + 'Invoices Will be deleted permanently</h4>',
                icon: 'info',
                // html: ' <ul *ngFor=" let a of invoices "> <li> a.invCode  </li>   </ul> ',
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText: '<i class="fa "></i>Yes Delete',
                confirmButtonAriaLabel: '',
                cancelButtonText: '<i class="fa "> Cancel</i>',
                cancelButtonAriaLabel: ''
            }).then(function (res) {
                if (res.value) {
                    //     
                    _this.invSrv.deleteSelectedInvoices(ids_1).subscribe(function (dltinv) {
                        _this.onGetAllInvoices();
                        //   this.swalSrv.showSwal('basic-success', "( " + dltAsts.length + " ) Invoices have been deleted successfully ");
                        _this.SelectedInvoices = [];
                        // this.onget();
                        _this.loading = false;
                    }, function (error) {
                        _this.loading = false;
                        if (error.message.includes('Http failure response for http://')) {
                            //      this.swalSrv.showSwal('basic-error', " Server connection Error / Data is not updated ");
                        }
                    });
                }
            });
        }
    };
    ReportsComponent.prototype.downloadInvoice = function (invFile, invNumber, SupplierName) {
        var downloadLink = document.createElement("a");
        var fileName = "Inv-" + invNumber + "-" + SupplierName + ".pdf";
        downloadLink.href = invFile;
        downloadLink.download = fileName;
        downloadLink.click();
    };
    /////////// Filters ////////////////////
    ReportsComponent.prototype.onFilterChange = function (filters, filterBy) {
        // this.setOneMonthDate();
        var _this = this;
        this.loading = true;
        this.invSrv.getAllInvoices(this.dateFrom, this.dateTo).subscribe(function (invoices) {
            _this.TempInvoicesMonths = [];
            _this.TempInvoicesBranches = [];
            _this.usr = _this.strSrv.getUserFromStorage();
            invoices.forEach(function (inv) {
                if (_this.usr.userRole.includes("IT")) {
                    _this.TempInvoicesMonths.push(inv);
                    _this.TempInvoicesBranches.push(inv);
                }
                if (_this.usr.userRole.includes("Cairo")) {
                    _this.TempInvoicesMonths.push(inv);
                    _this.TempInvoicesBranches.push(inv);
                }
                if (_this.usr.userRole.includes("AirPort") && inv.CostCenterName.includes('AirPort')) {
                    _this.TempInvoicesMonths.push(inv);
                    _this.TempInvoicesBranches.push(inv);
                }
                if (_this.usr.userRole.includes("Alex") && inv.CostCenterName.includes('Alex')) {
                    _this.TempInvoicesMonths.push(inv);
                    _this.TempInvoicesBranches.push(inv);
                }
                if (_this.usr.userRole.includes("Alex-Port") && inv.CostCenterName.includes('Alex-Port')) {
                    _this.TempInvoicesMonths.push(inv);
                    _this.TempInvoicesBranches.push(inv);
                }
                if (_this.usr.userRole.includes("Kader") && inv.CostCenterName.includes('Kader')) {
                    _this.TempInvoicesMonths.push(inv);
                    _this.TempInvoicesBranches.push(inv);
                }
                if (_this.usr.userRole.includes("Zegiew") && inv.CostCenterName.includes('Zegiew')) {
                    _this.TempInvoicesMonths.push(inv);
                    _this.TempInvoicesBranches.push(inv);
                }
                if (_this.usr.userRole.includes("DMT") && inv.CostCenterName.includes('DMT')) {
                    _this.TempInvoicesMonths.push(inv);
                    _this.TempInvoicesBranches.push(inv);
                }
                if (_this.usr.userRole.includes("PSD") && inv.CostCenterName.includes('PSD')) {
                    _this.TempInvoicesMonths.push(inv);
                    _this.TempInvoicesBranches.push(inv);
                }
                if (_this.usr.userRole.includes("Sokhna") && inv.CostCenterName.includes('Sokhna')) {
                    _this.TempInvoicesMonths.push(inv);
                    _this.TempInvoicesBranches.push(inv);
                }
                if (_this.usr.userRole.includes("Sharm") && inv.CostCenterName.includes('Sharm')) {
                    _this.TempInvoicesMonths.push(inv);
                    _this.TempInvoicesBranches.push(inv);
                }
                if (_this.usr.userRole.includes("Safaga") && inv.CostCenterName.includes('Safaga')) {
                    _this.TempInvoicesMonths.push(inv);
                    _this.TempInvoicesBranches.push(inv);
                }
                if (_this.usr.userRole.includes("Free") && inv.CostCenterName.includes('Free')) {
                    _this.TempInvoicesMonths.push(inv);
                    _this.TempInvoicesBranches.push(inv);
                }
            });
            _this.loading = false;
            if (filterBy == 'forBranchs') {
                _this.InvoicesBranches = [];
                _this.TempInvoicesBranches.forEach(function (inv) {
                    //  ;
                    if (inv.ItemCategoryName == filters.ItemCategoryName1 ||
                        inv.ItemCategoryName == filters.ItemCategoryName2 ||
                        inv.ItemCategoryName == filters.ItemCategoryName3 ||
                        inv.ItemCategoryName == filters.ItemCategoryName4) {
                        _this.InvoicesBranches.push(inv);
                    }
                });
                _this.TempInvoicesBranches = _this.InvoicesBranches;
                _this.InvoicesBranches = [];
                _this.TempInvoicesBranches.forEach(function (inv) {
                    var invdate = new Date(inv.invDate);
                    if (invdate > _this.dateFrom && invdate < _this.dateTo) {
                        _this.InvoicesBranches.push(inv);
                    }
                });
                if (_this.activityChartDataForBranchs != null) {
                    _this.activityChartDataForBranchs.labels = [];
                    _this.activityChartDataForBranchs.series = [];
                }
                //  debugger;
                var ChartDataForBranchs = _this.invSrv.calculateByCategoriesForCC(_this.InvoicesBranches, _this.dateFrom, _this.dateTo);
                //  debugger;
                _this.loadChartBranchs(ChartDataForBranchs);
                _this.activityChartDataForBranchs;
            }
            else if (filterBy == 'forMonths') {
                ;
                _this.InvoicesMonths = [];
                _this.TempInvoicesMonths.forEach(function (inv) {
                    if (inv.ItemCategoryName == filters.ItemCategoryName1 ||
                        inv.ItemCategoryName == filters.ItemCategoryName2 ||
                        inv.ItemCategoryName == filters.ItemCategoryName3 ||
                        inv.ItemCategoryName == filters.ItemCategoryName4) {
                        _this.InvoicesMonths.push(inv);
                    }
                });
                _this.activityChartDataForMonths.series = [];
                var series = _this.invSrv.calculateByCategories(_this.InvoicesMonths);
                //debugger;
                _this.loadChartMonths(series);
                _this.activityChartDataForMonths;
            }
            ;
            _this.loading = false;
            _this.onUpdatestatistics();
        });
    };
    ReportsComponent.prototype.buildFilterbyMonthForm = function () {
        this.filterByMonthForm = this.fb.group({
            ItemCategoryName1: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            ItemCategoryName2: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            ItemCategoryName3: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            ItemCategoryName4: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('')
        });
    };
    ReportsComponent.prototype.buildFilterByBranchForm = function () {
        this.filterByBranchForm = this.fb.group({
            ItemCategoryName1: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            ItemCategoryName2: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            ItemCategoryName3: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            FromDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            ToDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('')
        });
    };
    ReportsComponent.prototype.onFilterInvoicesByDate = function (e, form, chart) {
        this.dateFrom = new Date(e[0]);
        this.dateTo = new Date(e[1]);
        this.ToDateString = this.dateTo.getDate() + " / " + this.dateTo.getMonth() + " / " + this.dateTo.getFullYear();
        this.FromDateString = this.dateFrom.getDate() + " / " + this.dateFrom.getMonth() + " / " + this.dateFrom.getFullYear();
        this.onFilterChange(form, chart);
    };
    Object.defineProperty(ReportsComponent.prototype, "getInvoiceForm", {
        get: function () { return this.invoiceForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReportsComponent.prototype, "getInvoiceId", {
        get: function () { return this.invoiceForm.get('InvoiceId'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReportsComponent.prototype, "getInvdate", {
        get: function () { return this.invoiceForm.get('invDate'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReportsComponent.prototype, "getSupplierName", {
        get: function () { return this.invoiceForm.get('SupplierName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReportsComponent.prototype, "getInvFile", {
        get: function () { return this.invoiceForm.get('InvFile'); },
        enumerable: true,
        configurable: true
    });
    ReportsComponent.prototype.IsInvFileExist = function (invFile) {
        var is = false;
        if (invFile != null) {
            is = true;
        }
        ;
        return is;
    };
    ReportsComponent.ctorParameters = function () { return [
        { type: app_shared_services_shareddata_service__WEBPACK_IMPORTED_MODULE_15__["ShareddataService"] },
        { type: app_shared_services_appstorage_service__WEBPACK_IMPORTED_MODULE_14__["AppstorageService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["DomSanitizer"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: app_masterdata_supplier_service_supplier_service__WEBPACK_IMPORTED_MODULE_2__["SupplierService"] },
        { type: app_masterdata_costcenter_Services_costcenter_service__WEBPACK_IMPORTED_MODULE_3__["CostcenterService"] },
        { type: app_masterdata_itemscategory_service_itemcategory_service__WEBPACK_IMPORTED_MODULE_9__["ItemcategoryService"] },
        { type: _service_invoicemng_service__WEBPACK_IMPORTED_MODULE_10__["InvoicemngService"] },
        { type: app_shared_services_downloadfile_service__WEBPACK_IMPORTED_MODULE_4__["FileService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: app_sweetalert_service__WEBPACK_IMPORTED_MODULE_7__["SweetalertService"] },
        { type: ngx_alerts__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
        { type: app_shared_services_exportexcel_service__WEBPACK_IMPORTED_MODULE_11__["ExportexcelService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('search'),
        __metadata("design:type", Object)
    ], ReportsComponent.prototype, "search", void 0);
    ReportsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            providers: [_lbd_chartMonths_lbd_chartMonth_component__WEBPACK_IMPORTED_MODULE_16__["LbdChartMonthComponent"], _lbd_chartBranchs_lbd_chartBranch_component__WEBPACK_IMPORTED_MODULE_17__["LbdChartBranchComponent"]],
            selector: 'app-reports',
            template: __importDefault(__webpack_require__(/*! raw-loader!./reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/operation/invoicemng/reports/reports.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./reports.component.css */ "./src/app/operation/invoicemng/reports/reports.component.css")).default]
        }),
        __metadata("design:paramtypes", [app_shared_services_shareddata_service__WEBPACK_IMPORTED_MODULE_15__["ShareddataService"],
            app_shared_services_appstorage_service__WEBPACK_IMPORTED_MODULE_14__["AppstorageService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["DomSanitizer"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            app_masterdata_supplier_service_supplier_service__WEBPACK_IMPORTED_MODULE_2__["SupplierService"],
            app_masterdata_costcenter_Services_costcenter_service__WEBPACK_IMPORTED_MODULE_3__["CostcenterService"],
            app_masterdata_itemscategory_service_itemcategory_service__WEBPACK_IMPORTED_MODULE_9__["ItemcategoryService"],
            _service_invoicemng_service__WEBPACK_IMPORTED_MODULE_10__["InvoicemngService"],
            app_shared_services_downloadfile_service__WEBPACK_IMPORTED_MODULE_4__["FileService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            app_sweetalert_service__WEBPACK_IMPORTED_MODULE_7__["SweetalertService"],
            ngx_alerts__WEBPACK_IMPORTED_MODULE_6__["AlertService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
            app_shared_services_exportexcel_service__WEBPACK_IMPORTED_MODULE_11__["ExportexcelService"]])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "./src/app/operation/invoicemng/service/invoicemng.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/operation/invoicemng/service/invoicemng.service.ts ***!
  \********************************************************************/
/*! exports provided: InvoicemngService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicemngService", function() { return InvoicemngService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



// import { LegendItem, ChartType, LbdChartComponent } from '../reports/lbd-chart/lbd-chart.component';    //lbd-chart/lbd-chart.component';      
var InvoicemngService = /** @class */ (function () {
    function InvoicemngService(http) {
        this.http = http;
    }
    InvoicemngService.prototype.ngOnInit = function () {
    };
    InvoicemngService.prototype.getAllInvoices = function (from, to) {
        debugger;
        var body = {
            from: from,
            to: to
        };
        return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'Invoices/GetInvoicesFromToDate', body);
    };
    InvoicemngService.prototype.getInvoiceById = function (id) {
        debugger;
        return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'Invoices/getInvoiceById/' + id);
    };
    InvoicemngService.prototype.addInvoice = function (body) {
        debugger;
        return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'Invoices/AddInvoices', body);
    };
    InvoicemngService.prototype.editInvoice = function (id, body) {
        debugger;
        return this.http.put(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'Invoices/' + id, body);
    };
    InvoicemngService.prototype.deleteInvoice = function (id) {
        return this.http.delete(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'Invoices/' + id);
    };
    InvoicemngService.prototype.deleteSelectedInvoices = function (body) {
        debugger;
        return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'Invoices/DeleteSelectedInvoices/', body);
    };
    InvoicemngService.prototype.calculateByCategories = function (invs) {
        var _this = this;
        this.invoices = invs;
        var JanTotal = 0;
        var FebTotal = 0;
        var MarTotal = 0;
        var AprTotal = 0;
        var MaiTotal = 0;
        var JunTotal = 0;
        var JulTotal = 0;
        var AugTotal = 0;
        var SepTotal = 0;
        var OctTotal = 0;
        var NovTotal = 0;
        var DecTotal = 0;
        var series = [];
        var categories = [];
        invs.forEach(function (inv, index) {
            // debugger;
            if (!categories.includes(inv.ItemCategoryName)) {
                categories.push(inv.ItemCategoryName);
                // debugger;
                JanTotal += _this.CalculateMonthTotalByCategory(inv.ItemCategoryName, '01');
                FebTotal += _this.CalculateMonthTotalByCategory(inv.ItemCategoryName, '02');
                MarTotal += _this.CalculateMonthTotalByCategory(inv.ItemCategoryName, '03');
                AprTotal += _this.CalculateMonthTotalByCategory(inv.ItemCategoryName, '04');
                MaiTotal += _this.CalculateMonthTotalByCategory(inv.ItemCategoryName, '05');
                JunTotal += _this.CalculateMonthTotalByCategory(inv.ItemCategoryName, '06');
                JulTotal += _this.CalculateMonthTotalByCategory(inv.ItemCategoryName, '07');
                AugTotal += _this.CalculateMonthTotalByCategory(inv.ItemCategoryName, '08');
                SepTotal += _this.CalculateMonthTotalByCategory(inv.ItemCategoryName, '09');
                OctTotal += _this.CalculateMonthTotalByCategory(inv.ItemCategoryName, '10');
                NovTotal += _this.CalculateMonthTotalByCategory(inv.ItemCategoryName, '11');
                DecTotal += _this.CalculateMonthTotalByCategory(inv.ItemCategoryName, '12');
                var Total = JanTotal + FebTotal + MarTotal + AprTotal + MaiTotal + MaiTotal + JunTotal + JunTotal + JulTotal + AugTotal + SepTotal + OctTotal + NovTotal + DecTotal;
                series.push([JanTotal, FebTotal, MarTotal, AprTotal, MaiTotal, JunTotal, JulTotal, AugTotal, SepTotal, OctTotal, NovTotal, DecTotal, inv.ItemCategoryName, Total]);
                JanTotal = 0;
                FebTotal = 0;
                MarTotal = 0;
                AprTotal = 0;
                MaiTotal = 0;
                JunTotal = 0;
                JulTotal = 0;
                AugTotal = 0;
                SepTotal = 0;
                OctTotal = 0;
                NovTotal = 0;
                DecTotal = 0;
            }
        });
        return series;
    };
    InvoicemngService.prototype.CalculateMonthTotalByCategory = function (cat, month) {
        var amount = 0;
        this.invoices.forEach(function (inv) {
            if (inv.ItemCategoryName == cat) {
                var invdate = new Date(inv.invDate);
                var invMonth = ("0" + (invdate.getMonth() + 1)).slice(-2);
                if (inv.invAmount !== undefined && invMonth == month) {
                    amount += inv.invAmount;
                }
            }
        });
        return amount;
    };
    /////////// by Cost Center ///////////
    InvoicemngService.prototype.calculateByCategoriesForCC = function (invs, from, to) {
        var _this = this;
        this.invoices = invs;
        var records = [];
        invs.forEach(function (inv, index) {
            var record = { catName: '', ccName: '', catTotal: 0 };
            record.catTotal = _this.CalculateCCTotalByCategory(inv.ItemCategoryName, inv.CostCenterName, from, to);
            record.catName = inv.ItemCategoryName;
            record.ccName = inv.CostCenterName;
            if ((!records.some(function (item) { return item.ccName == inv.CostCenterName; })) || (!records.some(function (item) { return item.catName == inv.ItemCategoryName; }))) {
                records.push(record);
            }
        });
        //  debugger;
        return records;
    };
    InvoicemngService.prototype.CalculateCCTotalByCategory = function (cat, cc, from, to) {
        var amount = 0;
        this.invoices.forEach(function (inv) {
            if (inv.ItemCategoryName == cat && inv.CostCenterName == cc) {
                var invdate = new Date(inv.invDate);
                if (inv.CostCenterName === cc && invdate >= from && invdate <= to) {
                    amount += inv.invAmount;
                }
            }
        });
        return amount;
    };
    InvoicemngService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    InvoicemngService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], InvoicemngService);
    return InvoicemngService;
}());



/***/ }),

/***/ "./src/app/operation/mulipleselectbox/mulipleselectbox.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/operation/mulipleselectbox/mulipleselectbox.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\r\n    font-family: Lato;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3BlcmF0aW9uL211bGlwbGVzZWxlY3Rib3gvbXVsaXBsZXNlbGVjdGJveC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0VBQ25CIiwiZmlsZSI6InNyYy9hcHAvb3BlcmF0aW9uL211bGlwbGVzZWxlY3Rib3gvbXVsaXBsZXNlbGVjdGJveC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/operation/mulipleselectbox/mulipleselectbox.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/operation/mulipleselectbox/mulipleselectbox.component.ts ***!
  \**************************************************************************/
/*! exports provided: MulipleselectboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MulipleselectboxComponent", function() { return MulipleselectboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

var MulipleselectboxComponent = /** @class */ (function () {
    function MulipleselectboxComponent() {
        this.name = 'Bakkar';
        this.list1 = [
            { text: 'item 1', selected: false },
            { text: 'item 2', selected: false },
            { text: 'item 3', selected: false },
            { text: 'item 4', selected: false },
            { text: 'item 5', selected: false }
        ];
        this.list2 = [
            { text: 'item 6', selected: false },
            { text: 'item 7', selected: false }
        ];
    }
    MulipleselectboxComponent.prototype.ngOnInit = function () {
    };
    MulipleselectboxComponent.prototype.toggleSelection = function (item, list) {
        item.selected = !item.selected;
    };
    MulipleselectboxComponent.prototype.moveSelected = function (direction) {
        var _this = this;
        if (direction === 'left') {
            this.list2.forEach(function (item) {
                if (item.selected) {
                    _this.list1.push(item);
                }
            });
            this.list2 = this.list2.filter(function (i) { return !i.selected; });
        }
        else {
            this.list1.forEach(function (item) {
                if (item.selected) {
                    _this.list2.push(item);
                }
            });
            this.list1 = this.list1.filter(function (i) { return !i.selected; });
        }
    };
    MulipleselectboxComponent.prototype.moveAll = function (direction) {
        if (direction === 'left') {
            this.list1 = __spreadArrays(this.list1, this.list2);
            this.list2 = [];
        }
        else {
            this.list2 = __spreadArrays(this.list2, this.list1);
            this.list1 = [];
        }
    };
    MulipleselectboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mulipleselectbox',
            template: __importDefault(__webpack_require__(/*! raw-loader!./mulipleselectbox.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/operation/mulipleselectbox/mulipleselectbox.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./mulipleselectbox.component.css */ "./src/app/operation/mulipleselectbox/mulipleselectbox.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], MulipleselectboxComponent);
    return MulipleselectboxComponent;
}());



/***/ }),

/***/ "./src/app/operation/operation-routing.ts":
/*!************************************************!*\
  !*** ./src/app/operation/operation-routing.ts ***!
  \************************************************/
/*! exports provided: OperationRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationRoutes", function() { return OperationRoutes; });
/* harmony import */ var _assetmng_assetmng_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assetmng/assetmng.component */ "./src/app/operation/assetmng/assetmng.component.ts");
/* harmony import */ var _invoicemng_invoicemng_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoicemng/invoicemng.component */ "./src/app/operation/invoicemng/invoicemng.component.ts");
/* harmony import */ var _requestmng_requestmng_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./requestmng/requestmng.component */ "./src/app/operation/requestmng/requestmng.component.ts");
/* harmony import */ var _emailmng_emailmng_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emailmng/emailmng.component */ "./src/app/operation/emailmng/emailmng.component.ts");
/* harmony import */ var _dynamicform_dynamicform_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dynamicform/dynamicform.component */ "./src/app/operation/dynamicform/dynamicform.component.ts");
/* harmony import */ var _dynamicemails_dynamicemails_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dynamicemails/dynamicemails.component */ "./src/app/operation/dynamicemails/dynamicemails.component.ts");
/* harmony import */ var _uploadimg_uploadimg_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./uploadimg/uploadimg.component */ "./src/app/operation/uploadimg/uploadimg.component.ts");
/* harmony import */ var _testlogin_testlogin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./testlogin/testlogin.component */ "./src/app/operation/testlogin/testlogin.component.ts");
/* harmony import */ var app_shared_authentication_service_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/authentication/service/auth.guard */ "./src/app/shared/authentication/service/auth.guard.ts");
/* harmony import */ var _mulipleselectbox_mulipleselectbox_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mulipleselectbox/mulipleselectbox.component */ "./src/app/operation/mulipleselectbox/mulipleselectbox.component.ts");
/* harmony import */ var _testautocomplete_testautocomplete_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./testautocomplete/testautocomplete.component */ "./src/app/operation/testautocomplete/testautocomplete.component.ts");
/* harmony import */ var _invoicelines_invoicelines_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./invoicelines/invoicelines.component */ "./src/app/operation/invoicelines/invoicelines.component.ts");
/* harmony import */ var _invoicemng_reports_reports_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./invoicemng/reports/reports.component */ "./src/app/operation/invoicemng/reports/reports.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};











//import { SearchpageComponent } from './searchpage/searchpage.component';


// import { LbdChartMonthComponent } from './invoicemng/reports/lbd-chartMonths/lbd-chartMonth.component';
// import { LbdChartBranchComponent } from './invoicemng/reports/lbd-chartBranchs/lbd-chartBranch.component';
// import { DashboardComponent } from 'app/dashboard/dashboard.component';
//import { InvoicedashboardComponent } from './invoicedashboard/invoicedashboard.component';
var routes = [];
var OperationRoutes = [{
        path: '',
        children: [
            {
                path: 'assetmng',
                canActivate: [app_shared_authentication_service_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
                component: _assetmng_assetmng_component__WEBPACK_IMPORTED_MODULE_0__["AssetmngComponent"]
            }, {
                path: 'reports',
                //  canActivate: [AuthGuard],
                component: _invoicemng_reports_reports_component__WEBPACK_IMPORTED_MODULE_12__["ReportsComponent"]
                // },{
                //   path: 'Invoicedashboard',
                //   component: InvoicedashboardComponent
            }, {
                path: 'invoicelines',
                //  canActivate: [AuthGuard],
                component: _invoicelines_invoicelines_component__WEBPACK_IMPORTED_MODULE_11__["InvoicelinesComponent"]
            }, {
                path: 'invoicemng',
                canActivate: [app_shared_authentication_service_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
                component: _invoicemng_invoicemng_component__WEBPACK_IMPORTED_MODULE_1__["InvoicemngComponent"]
            }, {
                path: 'requestmng',
                canActivate: [app_shared_authentication_service_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
                component: _requestmng_requestmng_component__WEBPACK_IMPORTED_MODULE_2__["RequestmngComponent"]
            }, {
                path: 'emailmng',
                canActivate: [app_shared_authentication_service_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
                component: _emailmng_emailmng_component__WEBPACK_IMPORTED_MODULE_3__["EmailmngComponent"]
            }, {
                path: 'dynamicform',
                canActivate: [app_shared_authentication_service_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
                component: _dynamicform_dynamicform_component__WEBPACK_IMPORTED_MODULE_4__["DynamicformComponent"]
            }, {
                path: 'dynamicemails',
                canActivate: [app_shared_authentication_service_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
                component: _dynamicemails_dynamicemails_component__WEBPACK_IMPORTED_MODULE_5__["DynamicemailsComponent"]
            }, {
                path: 'uploadimg',
                canActivate: [app_shared_authentication_service_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
                component: _uploadimg_uploadimg_component__WEBPACK_IMPORTED_MODULE_6__["UploadimgComponent"]
            }, {
                path: 'testlogin',
                canActivate: [app_shared_authentication_service_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
                component: _testlogin_testlogin_component__WEBPACK_IMPORTED_MODULE_7__["TestloginComponent"]
            }, {
                path: 'mulipleselectbox',
                canActivate: [app_shared_authentication_service_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
                component: _mulipleselectbox_mulipleselectbox_component__WEBPACK_IMPORTED_MODULE_9__["MulipleselectboxComponent"]
            }, {
                path: 'testautocomplete',
                canActivate: [app_shared_authentication_service_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
                component: _testautocomplete_testautocomplete_component__WEBPACK_IMPORTED_MODULE_10__["TestautocompleteComponent"]
            }
            // ,{
            //   path: 'searchpage',
            //   component: SearchpageComponent
            // }
        ]
    }];


/***/ }),

/***/ "./src/app/operation/operation.module.ts":
/*!***********************************************!*\
  !*** ./src/app/operation/operation.module.ts ***!
  \***********************************************/
/*! exports provided: OperationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationModule", function() { return OperationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _operation_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./operation-routing */ "./src/app/operation/operation-routing.ts");
/* harmony import */ var _assetmng_assetmng_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assetmng/assetmng.component */ "./src/app/operation/assetmng/assetmng.component.ts");
/* harmony import */ var _invoicemng_invoicemng_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./invoicemng/invoicemng.component */ "./src/app/operation/invoicemng/invoicemng.component.ts");
/* harmony import */ var _requestmng_requestmng_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./requestmng/requestmng.component */ "./src/app/operation/requestmng/requestmng.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-print */ "./node_modules/ngx-print/__ivy_ngcc__/fesm5/ngx-print.js");
/* harmony import */ var ngx_angular_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-angular-autocomplete */ "./node_modules/ngx-angular-autocomplete/__ivy_ngcc__/fesm5/ngx-angular-autocomplete.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/__ivy_ngcc__/fesm5/ngx-order-pipe.js");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/__ivy_ngcc__/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_alerts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-alerts */ "./node_modules/ngx-alerts/__ivy_ngcc__/fesm5/ngx-alerts.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm5/ng-select-ng-select.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/__ivy_ngcc__/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var _emailmng_emailmng_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./emailmng/emailmng.component */ "./src/app/operation/emailmng/emailmng.component.ts");
/* harmony import */ var _dynamicform_dynamicform_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dynamicform/dynamicform.component */ "./src/app/operation/dynamicform/dynamicform.component.ts");
/* harmony import */ var _dynamicemails_dynamicemails_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dynamicemails/dynamicemails.component */ "./src/app/operation/dynamicemails/dynamicemails.component.ts");
/* harmony import */ var _uploadimg_uploadimg_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./uploadimg/uploadimg.component */ "./src/app/operation/uploadimg/uploadimg.component.ts");
/* harmony import */ var _testlogin_testlogin_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./testlogin/testlogin.component */ "./src/app/operation/testlogin/testlogin.component.ts");
/* harmony import */ var _mulipleselectbox_mulipleselectbox_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./mulipleselectbox/mulipleselectbox.component */ "./src/app/operation/mulipleselectbox/mulipleselectbox.component.ts");
/* harmony import */ var _testautocomplete_testautocomplete_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./testautocomplete/testautocomplete.component */ "./src/app/operation/testautocomplete/testautocomplete.component.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var _invoicelines_invoicelines_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./invoicelines/invoicelines.component */ "./src/app/operation/invoicelines/invoicelines.component.ts");
/* harmony import */ var _invoicemng_reports_reports_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./invoicemng/reports/reports.component */ "./src/app/operation/invoicemng/reports/reports.component.ts");
/* harmony import */ var _invoicemng_reports_lbd_chartMonths_lbd_chartMonth_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./invoicemng/reports/lbd-chartMonths/lbd-chartMonth.component */ "./src/app/operation/invoicemng/reports/lbd-chartMonths/lbd-chartMonth.component.ts");
/* harmony import */ var _invoicemng_reports_lbd_chartBranchs_lbd_chartBranch_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./invoicemng/reports/lbd-chartBranchs/lbd-chartBranch.component */ "./src/app/operation/invoicemng/reports/lbd-chartBranchs/lbd-chartBranch.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





















// import { ImageCropperComponent } from 'ngx-img-cropper';




//import { SearchpageComponent } from './searchpage/searchpage.component';




//import { InvoicedashboardComponent } from './invoicedashboard/invoicedashboard.component';
// import { DatafilterPipe } from 'app/shared/pipes/datafilter.pipe';
var OperationModule = /** @class */ (function () {
    function OperationModule() {
    }
    OperationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _invoicemng_reports_lbd_chartMonths_lbd_chartMonth_component__WEBPACK_IMPORTED_MODULE_27__["LbdChartMonthComponent"],
                _invoicemng_reports_lbd_chartBranchs_lbd_chartBranch_component__WEBPACK_IMPORTED_MODULE_28__["LbdChartBranchComponent"],
                _assetmng_assetmng_component__WEBPACK_IMPORTED_MODULE_3__["AssetmngComponent"],
                _invoicemng_invoicemng_component__WEBPACK_IMPORTED_MODULE_4__["InvoicemngComponent"],
                _requestmng_requestmng_component__WEBPACK_IMPORTED_MODULE_5__["RequestmngComponent"],
                _emailmng_emailmng_component__WEBPACK_IMPORTED_MODULE_17__["EmailmngComponent"],
                _dynamicform_dynamicform_component__WEBPACK_IMPORTED_MODULE_18__["DynamicformComponent"],
                _dynamicemails_dynamicemails_component__WEBPACK_IMPORTED_MODULE_19__["DynamicemailsComponent"],
                _uploadimg_uploadimg_component__WEBPACK_IMPORTED_MODULE_20__["UploadimgComponent"],
                _testlogin_testlogin_component__WEBPACK_IMPORTED_MODULE_21__["TestloginComponent"],
                _mulipleselectbox_mulipleselectbox_component__WEBPACK_IMPORTED_MODULE_22__["MulipleselectboxComponent"],
                _testautocomplete_testautocomplete_component__WEBPACK_IMPORTED_MODULE_23__["TestautocompleteComponent"], _invoicelines_invoicelines_component__WEBPACK_IMPORTED_MODULE_25__["InvoicelinesComponent"], _invoicemng_reports_reports_component__WEBPACK_IMPORTED_MODULE_26__["ReportsComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_16__["NgMultiSelectDropDownModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__["NgSelectModule"],
                ngx_print__WEBPACK_IMPORTED_MODULE_7__["NgxPrintModule"],
                ngx_angular_autocomplete__WEBPACK_IMPORTED_MODULE_8__["NgxAutocompleteModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"],
                ngx_order_pipe__WEBPACK_IMPORTED_MODULE_11__["OrderModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(_operation_routing__WEBPACK_IMPORTED_MODULE_2__["OperationRoutes"]),
                ngx_loading__WEBPACK_IMPORTED_MODULE_12__["NgxLoadingModule"].forRoot({
                    animationType: ngx_loading__WEBPACK_IMPORTED_MODULE_12__["ngxLoadingAnimationTypes"].wanderingCubes,
                    backdropBackgroundColour: 'rgba(0,0,0,0.1)',
                    backdropBorderRadius: '4px',
                    primaryColour: '#ffffff',
                    secondaryColour: '#ffffff',
                    tertiaryColour: '#ffffff'
                }),
                // Specify your library as an import (set timeout to -1 for unlimited timeout, the message can only be closed by the user clicking on it)
                ngx_alerts__WEBPACK_IMPORTED_MODULE_14__["AlertModule"].forRoot({ maxMessages: 5, timeout: 5000, position: 'right' }),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__["ModalModule"],
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_24__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_24__["DatepickerModule"].forRoot()
            ]
        })
    ], OperationModule);
    return OperationModule;
}());



/***/ }),

/***/ "./src/app/operation/requestmng/requestmng.component.css":
/*!***************************************************************!*\
  !*** ./src/app/operation/requestmng/requestmng.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXJhdGlvbi9yZXF1ZXN0bW5nL3JlcXVlc3RtbmcuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/operation/requestmng/requestmng.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/operation/requestmng/requestmng.component.ts ***!
  \**************************************************************/
/*! exports provided: RequestmngComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestmngComponent", function() { return RequestmngComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var RequestmngComponent = /** @class */ (function () {
    function RequestmngComponent() {
    }
    RequestmngComponent.prototype.ngOnInit = function () {
    };
    RequestmngComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-requestmng',
            template: __importDefault(__webpack_require__(/*! raw-loader!./requestmng.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/operation/requestmng/requestmng.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./requestmng.component.css */ "./src/app/operation/requestmng/requestmng.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], RequestmngComponent);
    return RequestmngComponent;
}());



/***/ }),

/***/ "./src/app/operation/testautocomplete/testautocomplete.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/operation/testautocomplete/testautocomplete.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\r\n    font-family: Lato;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3BlcmF0aW9uL3Rlc3RhdXRvY29tcGxldGUvdGVzdGF1dG9jb21wbGV0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0VBQ25CIiwiZmlsZSI6InNyYy9hcHAvb3BlcmF0aW9uL3Rlc3RhdXRvY29tcGxldGUvdGVzdGF1dG9jb21wbGV0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/operation/testautocomplete/testautocomplete.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/operation/testautocomplete/testautocomplete.component.ts ***!
  \**************************************************************************/
/*! exports provided: TestautocompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestautocompleteComponent", function() { return TestautocompleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var TestautocompleteComponent = /** @class */ (function () {
    function TestautocompleteComponent() {
        this.title = "Ngx Angular AutoComplete";
        this.employees = [
            {
                id: 1,
                name: "Byram",
                gender: "Male"
            },
            {
                id: 2,
                name: "Jeniffer",
                gender: "Female"
            },
            {
                id: 3,
                name: "Gerda",
                gender: "Female"
            },
            {
                id: 4,
                name: "Ferrell",
                gender: "Male"
            },
            {
                id: 5,
                name: "Rowe",
                gender: "Female"
            },
            {
                id: 6,
                name: "Josephine",
                gender: "Female"
            },
            {
                id: 7,
                name: "Alfons",
                gender: "Male"
            },
            {
                id: 8,
                name: "Rycca",
                gender: "Female"
            },
            {
                id: 9,
                name: "Mandy",
                gender: "Female"
            },
            {
                id: 10,
                name: "Bunni",
                gender: "Female"
            },
            {
                id: 11,
                name: "Stepha",
                gender: "Female"
            },
            {
                id: 12,
                name: "Pete",
                gender: "Male"
            },
            {
                id: 13,
                name: "Keary",
                gender: "Male"
            },
            {
                id: 14,
                name: "Esme",
                gender: "Female"
            },
            {
                id: 15,
                name: "Juieta",
                gender: "Female"
            }
        ];
    }
    TestautocompleteComponent.prototype.ngOnInit = function () {
    };
    TestautocompleteComponent.prototype.selectEvent = function (event) {
        this.selected_employee = JSON.stringify(event);
    };
    TestautocompleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-testautocomplete',
            template: __importDefault(__webpack_require__(/*! raw-loader!./testautocomplete.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/operation/testautocomplete/testautocomplete.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./testautocomplete.component.css */ "./src/app/operation/testautocomplete/testautocomplete.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], TestautocompleteComponent);
    return TestautocompleteComponent;
}());



/***/ }),

/***/ "./src/app/operation/testlogin/testlogin.component.css":
/*!*************************************************************!*\
  !*** ./src/app/operation/testlogin/testlogin.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wZXJhdGlvbi90ZXN0bG9naW4vdGVzdGxvZ2luLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/operation/testlogin/testlogin.component.ts":
/*!************************************************************!*\
  !*** ./src/app/operation/testlogin/testlogin.component.ts ***!
  \************************************************************/
/*! exports provided: TestloginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestloginComponent", function() { return TestloginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var TestloginComponent = /** @class */ (function () {
    function TestloginComponent() {
    }
    TestloginComponent.prototype.ngOnInit = function () {
    };
    TestloginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-testlogin',
            template: __importDefault(__webpack_require__(/*! raw-loader!./testlogin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/operation/testlogin/testlogin.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./testlogin.component.css */ "./src/app/operation/testlogin/testlogin.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], TestloginComponent);
    return TestloginComponent;
}());



/***/ }),

/***/ "./src/app/sweetalert.service.ts":
/*!***************************************!*\
  !*** ./src/app/sweetalert.service.ts ***!
  \***************************************/
/*! exports provided: SweetalertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SweetalertService", function() { return SweetalertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var SweetalertService = /** @class */ (function () {
    function SweetalertService() {
    }
    SweetalertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SweetalertService);
    return SweetalertService;
}());



/***/ })

}]);
//# sourceMappingURL=operation-operation-module.js.map