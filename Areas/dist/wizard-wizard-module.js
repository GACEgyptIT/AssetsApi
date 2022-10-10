(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wizard-wizard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/wizard/wizard/wizard.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wizard/wizard/wizard.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8 col-md-offset-2\">\n                <div class=\"card card-wizard\" id=\"wizardCard\">\n                    <form [formGroup]=\"type\" id=\"wizardForm\" method=\"\" action=\"\">\n\n                        <div class=\"header text-center\">\n                            <h3 class=\"title\">Awesome Wizard</h3>\n                            <p class=\"category\">Split a complicated flow in multiple steps</p>\n                        </div>\n\n                        <div class=\"content\">\n                            <ul class=\"nav\">\n                                <li><a href=\"#tab1\" data-toggle=\"tab\">First Tab</a></li>\n                                <li><a href=\"#tab2\" data-toggle=\"tab\">Second Tab</a></li>\n                                <li><a href=\"#tab3\" data-toggle=\"tab\">Third Tab</a></li>\n                            </ul>\n\n                            <div class=\"tab-content\">\n                                <div class=\"tab-pane\" id=\"tab1\">\n                                    <h5 class=\"text-center\">Please tell us more about yourself.</h5>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5 col-md-offset-1\">\n                                            <div class=\"form-group\" [ngClass]=\"displayFieldCss(type, 'firstName')\">\n                                                <label class=\"control-label\">First Name</label>\n                                                <input class=\"form-control\" type=\"text\" name=\"firstname\"\n                                                    placeholder=\"ex: Mike\" formControlName=\"firstName\" />\n                                            </div>\n                                        </div>\n                                        <div class=\"col-md-5\">\n                                            <div class=\"form-group\" [ngClass]=\"displayFieldCss(type, 'lastName')\">\n                                                <label class=\"control-label\">Last Name</label>\n                                                <input class=\"form-control\" type=\"text\" name=\"lastname\" required=\"true\"\n                                                    placeholder=\"ex: Andrew\" formControlName=\"lastName\" />\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-10 col-md-offset-1\">\n                                            <div class=\"form-group\">\n                                                <label class=\"control-label\">Email<span class=\"star\">*</span></label>\n                                                <input class=\"form-control\" type=\"text\" name=\"email\" email=\"true\"\n                                                    placeholder=\"ex: hello@creative-tim.com\" formControlName=\"email\" />\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                </div>\n\n                                <div class=\"tab-pane\" id=\"tab2\">\n                                    <h5 class=\"text-center\">Please give us more details about your platform.</h5>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-10 col-md-offset-1\">\n                                            <div class=\"form-group\">\n                                                <label class=\"control-label\">Your Website<span\n                                                        class=\"star\">*</span></label>\n                                                <input class=\"form-control\" type=\"text\" name=\"website\" url=\"true\"\n                                                    placeholder=\"ex: http://www.creative-tim.com\" />\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5 col-md-offset-1\">\n                                            <div class=\"form-group\">\n                                                <label class=\"control-label\">Framework Type</label>\n                                                <input class=\"form-control\" type=\"text\" name=\"framework\"\n                                                    placeholder=\"ex: http://www.creative-tim.com\" />\n                                            </div>\n                                        </div>\n\n                                        <div class=\"col-md-5\">\n                                            <div class=\"form-group\">\n                                                <label class=\"control-label\">Language<span class=\"star\">*</span></label>\n\n                                                <!--     IMPORTANT! - the \"bootstrap select picker\" is not compatible with jquery.validation.js, that's why we use the \"default select\" inside this wizard. We will try to contact the guys who are responsibble for the \"bootstrap select picker\" to find a solution. Thank you for your patience.\n                                             -->\n\n                                                <select name=\"cities\" class=\"form-control\">\n                                                    <option selected=\"\" disabled=\"\">- language -</option>\n                                                    <option value=\"ms\">Bahasa Melayu</option>\n                                                    <option value=\"ca\">Català</option>\n                                                    <option value=\"da\">Dansk</option>\n                                                    <option value=\"de\">Deutsch</option>\n                                                    <option value=\"en\">English</option>\n                                                    <option value=\"es\">Español</option>\n                                                    <option value=\"el\">Eλληνικά</option>\n                                                    <option value=\"fr\">Français</option>\n                                                    <option value=\"it\">Italiano</option>\n                                                    <option value=\"hu\">Magyar</option>\n                                                    <option value=\"nl\">Nederlands</option>\n                                                    <option value=\"no\">Norsk</option>\n                                                    <option value=\"pl\">Polski</option>\n                                                    <option value=\"pt\">Português</option>\n                                                    <option value=\"fi\">Suomi</option>\n                                                    <option value=\"sv\">Svenska</option>\n                                                    <option value=\"tr\">Türkçe</option>\n                                                    <option value=\"is\">Íslenska</option>\n                                                    <option value=\"cs\">Čeština</option>\n                                                    <option value=\"ru\">Русский</option>\n                                                    <option value=\"th\">ภาษาไทย</option>\n                                                    <option value=\"zh\">中文 (简体)</option>\n                                                    <option value=\"zh-TW\">中文 (繁體)</option>\n                                                    <option value=\"ja\">日本語</option>\n                                                    <option value=\"ko\">한국어</option>\n                                                </select>\n\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5 col-md-offset-1\">\n                                            <div class=\"form-group\">\n                                                <label class=\"control-label\">Bootstrap Version</label>\n\n                                                <!--     IMPORTANT! - the \"bootstrap select picker\" is not compatible with jquery.validation.js, that's why we use the \"default select\" inside this wizard. We will try to contact the guys who are responsibble for the \"bootstrap select picker\" to find a solution. Thank you for your patience.\n                                             -->\n\n                                                <select name=\"cities\" class=\"form-control\">\n                                                    <option selected=\"\" disabled=\"\">- version -</option>\n                                                    <option value=\"1.1\">Bootstrap 1.1</option>\n                                                    <option value=\"2.0\">Bootstrap 2.0</option>\n                                                    <option value=\"3.0\">Bootstrap 3.0</option>\n                                                    <option value=\"4.0\">Bootstrap 4.0(alpha)</option>\n                                                </select>\n\n                                            </div>\n                                        </div>\n\n                                        <div class=\"col-md-5\">\n                                            <div class=\"form-group\">\n                                                <label class=\"control-label\">Price</label>\n                                                <input class=\"form-control\" type=\"text\" name=\"price\"\n                                                    placeholder=\"ex: 19.00\" />\n                                            </div>\n                                        </div>\n\n                                    </div>\n\n                                </div>\n\n                                <div class=\"tab-pane\" id=\"tab3\">\n                                    <h2 class=\"text-center text-space\">Yuhuuu! <br><small> Click on \"<b>Finish</b>\" to\n                                            join our community</small></h2>\n                                </div>\n\n                            </div>\n                        </div>\n\n                        <div class=\"footer\">\n                            <button type=\"button\"\n                                class=\"btn btn-default btn-fill btn-wd btn-back pull-left\">Back</button>\n\n                            <button type=\"button\" class=\"btn btn-info btn-fill btn-wd btn-next pull-right\">Next</button>\n                            <button type=\"button\" class=\"btn btn-info btn-fill btn-wd btn-finish pull-right\"\n                                click=\"onFinishWizard()\">Finish</button>\n\n                            <div class=\"clearfix\"></div>\n                        </div>\n                    </form>\n\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/wizard/wizard-routing.ts":
/*!******************************************!*\
  !*** ./src/app/wizard/wizard-routing.ts ***!
  \******************************************/
/*! exports provided: WizardRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardRoutes", function() { return WizardRoutes; });
/* harmony import */ var app_forms_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/forms/wizard/wizard.component */ "./src/app/forms/wizard/wizard.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var routes = [];
var WizardRoutes = [{
        path: '',
        children: [
            {
                path: '',
                component: app_forms_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_0__["WizardComponent"]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/wizard/wizard.module.ts":
/*!*****************************************!*\
  !*** ./src/app/wizard/wizard.module.ts ***!
  \*****************************************/
/*! exports provided: WizardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardModule", function() { return WizardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _wizard_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wizard-routing */ "./src/app/wizard/wizard-routing.ts");
/* harmony import */ var _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wizard/wizard.component */ "./src/app/wizard/wizard/wizard.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/__ivy_ngcc__/fesm5/ngx-chips.js");
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "./node_modules/jw-bootstrap-switch-ng2/__ivy_ngcc__/fesm5/jw-bootstrap-switch-ng2.js");
/* harmony import */ var _lbd_lbd_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lbd/lbd.module */ "./src/app/lbd/lbd.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};









var WizardModule = /** @class */ (function () {
    function WizardModule() {
    }
    WizardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_4__["WizardComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_6__["TagInputModule"],
                // NouisliderModule,
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_7__["JwBootstrapSwitchNg2Module"],
                _lbd_lbd_module__WEBPACK_IMPORTED_MODULE_8__["LbdModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(_wizard_routing__WEBPACK_IMPORTED_MODULE_3__["WizardRoutes"])
            ]
        })
    ], WizardModule);
    return WizardModule;
}());



/***/ }),

/***/ "./src/app/wizard/wizard/wizard.component.css":
/*!****************************************************!*\
  !*** ./src/app/wizard/wizard/wizard.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpemFyZC93aXphcmQvd2l6YXJkLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/wizard/wizard/wizard.component.ts":
/*!***************************************************!*\
  !*** ./src/app/wizard/wizard/wizard.component.ts ***!
  \***************************************************/
/*! exports provided: WizardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardComponent", function() { return WizardComponent; });
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



var WizardComponent = /** @class */ (function () {
    function WizardComponent(formBuilder) {
        this.formBuilder = formBuilder;
    }
    WizardComponent.prototype.isFieldValid = function (form, field) {
        return !form.get(field).valid && form.get(field).touched;
    };
    WizardComponent.prototype.displayFieldCss = function (form, field) {
        return {
            'has-error': this.isFieldValid(form, field),
            'has-success': this.isFieldValid(form, field)
        };
    };
    WizardComponent.prototype.onFinishWizard = function () {
        //here you can do something, sent the form to server via ajax and show a success message with swal
        // swal("Good job!", "You clicked the finish button!", "success");
    };
    WizardComponent.prototype.ngOnInit = function () {
        this.type = this.formBuilder.group({
            // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
            firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
        });
        // you can also use the nav-pills-[blue | azure | green | orange | red] for a different color of wizard
        // Code for the Validator
        var $validator = $('.card-wizard form').validate({
            rules: {
                firstname: {
                    required: true,
                    minlength: 3
                },
                lastname: {
                    required: true,
                    minlength: 3
                },
                email: {
                    required: true,
                    minlength: 3,
                }
            },
            highlight: function (element) {
                $(element).parent().addClass('has-error').removeClass('has-success');
            },
            success: function (element) {
                $(element).parent().addClass('has-success').removeClass('has-error');
            }
        });
        $('#wizardCard').bootstrapWizard({
            tabClass: 'nav nav-pills',
            nextSelector: '.btn-next',
            previousSelector: '.btn-back',
            lastSelector: '.btn-finish',
            onNext: function (tab, navigation, index) {
                var $valid = $('.card-wizard form').valid();
                if (!$valid) {
                    $validator.focusInvalid();
                    return false;
                }
            },
            onInit: function (tab, navigation, index) {
                //check number of tabs and fill the entire row
                var $total = navigation.find('li').length;
                var $width = 100 / $total;
                var $display_width = $(document).width();
                if ($display_width < 600 && $total > 3) {
                    $width = 50;
                }
                navigation.find('li').css('width', $width + '%');
            },
            onTabClick: function (tab, navigation, index) {
                // Disable the posibility to click on tabs
                return false;
            },
            onTabShow: function (tab, navigation, index) {
                var $total = navigation.find('li').length;
                var $current = index + 1;
                var wizard = navigation.closest('.card-wizard');
                // If it's the last tab then hide the last button and show the finish instead
                if ($current >= $total) {
                    $(wizard).find('.btn-next').hide();
                    $(wizard).find('.btn-finish').show();
                }
                else if ($current == 1) {
                    $(wizard).find('.btn-back').hide();
                }
                else {
                    $(wizard).find('.btn-back').show();
                    $(wizard).find('.btn-next').show();
                    $(wizard).find('.btn-finish').hide();
                }
            },
            onLast: function (tab, navigation, index) {
                //here you can do something, sent the form to server via ajax and show a success message with swal
                // swal("Good job!", "You clicked the finish button!", "success");
            }
        });
    };
    WizardComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }
    ]; };
    WizardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wizard',
            template: __importDefault(__webpack_require__(/*! raw-loader!./wizard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/wizard/wizard/wizard.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./wizard.component.css */ "./src/app/wizard/wizard/wizard.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], WizardComponent);
    return WizardComponent;
}());



/***/ })

}]);
//# sourceMappingURL=wizard-wizard-module.js.map