(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forms-forms-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/extendedforms/extendedforms.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forms/extendedforms/extendedforms.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n<div class=\"container-fluid\">\n\n    <div class=\"card\">\n        <div class=\"content\">\n\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <h4 class=\"title\">Datetime Picker</h4>\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control datetimepicker\" placeholder=\"Datetime Picker Here\"/>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <h4 class=\"title\">Date Picker</h4>\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control datepicker\" placeholder=\"Date Picker Here\"/>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <h4 class=\"title\">Time Picker</h4>\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control timepicker\" placeholder=\"Time Picker Here\"/>\n                    </div>\n                </div>\n            </div>\n\n            <br /><br />\n\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <legend>Switches</legend>\n\n                    <div class=\"col-md-4\">\n                        <p class=\"category\">Default</p>\n                        <bSwitch\n                            [switch-on-color]=\"'primary'\">\n                        </bSwitch>\n                        <bSwitch\n                            [switch-on-color]=\"'primary'\"\n                            [(ngModel)]=\"state_default\">\n                        </bSwitch>\n                    </div>\n\n                    <div class=\"col-md-4\">\n                        <p class=\"category\">Plain</p>\n                        <bSwitch\n                            [switch-on-color]=\"'primary'\"\n                            [switch-off-text]=\"' '\"\n                            [switch-on-text]=\"' '\">\n                        </bSwitch>\n                        <bSwitch\n                            [switch-on-color]=\"'primary'\"\n                            [switch-off-text]=\"' '\"\n                            [switch-on-text]=\"' '\"\n                            [(ngModel)]=\"state_plain\">\n                        </bSwitch>\n                    </div>\n\n\n                    <div class=\"col-md-4\">\n                        <p class=\"category\">With Icons</p>\n                        <bSwitch\n                            [switch-on-color]=\"'primary'\"\n                            [switch-off-text]=\"'&#x2718;'\"\n                            [switch-on-text]=\"'&#x2714;'\">\n                        </bSwitch>\n                        <bSwitch\n                            [switch-on-color]=\"'primary'\"\n                            [switch-off-text]=\"'&#x2718;'\"\n                            [switch-on-text]=\"'&#x2714;'\"\n                            [(ngModel)]=\"state_with_icons\">\n                        </bSwitch>\n                    </div>\n                </div>\n\n            </div>\n            <br /><br />\n\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <legend>Tags</legend>\n                    Regular: <tag-input [(ngModel)]='regularItems' class=\"tags-azure\"></tag-input>\n                    Filled: <tag-input [(ngModel)]='filledItems' class='tags-azure tags-fill'></tag-input>\n                </div>\n\n                <div class=\"col-md-6\">\n                    <legend>Customisable Select</legend>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <select name=\"cities\" class=\"selectpicker\" data-title=\"Single Select\" data-style=\"btn-default btn-block\" data-menu-style=\"dropdown-blue\">\n                                    <option value=\"id\">Bahasa Indonesia</option>\n                                    <option value=\"ms\">Bahasa Melayu</option>\n                                    <option value=\"ca\">Català</option>\n                                    <option value=\"da\">Dansk</option>\n                                    <option value=\"de\">Deutsch</option>\n                                    <option value=\"en\">English</option>\n                                    <option value=\"es\">Español</option>\n                                    <option value=\"el\">Eλληνικά</option>\n                                    <option value=\"fr\">Français</option>\n                                    <option value=\"it\">Italiano</option>\n                                    <option value=\"hu\">Magyar</option>\n                                    <option value=\"nl\">Nederlands</option>\n                                    <option value=\"no\">Norsk</option>\n                                    <option value=\"pl\">Polski</option>\n                                    <option value=\"pt\">Português</option>\n                                    <option value=\"fi\">Suomi</option>\n                                    <option value=\"sv\">Svenska</option>\n                                    <option value=\"tr\">Türkçe</option>\n                                    <option value=\"is\">Íslenska</option>\n                                    <option value=\"cs\">Čeština</option>\n                                    <option value=\"ru\">Русский</option>\n                                    <option value=\"th\">ภาษาไทย</option>\n                                    <option value=\"zh\">中文 (简体)</option>\n                                    <option value=\"zh-TW\">中文 (繁體)</option>\n                                    <option value=\"ja\">日本語</option>\n                                    <option value=\"ko\">한국어</option>\n                                </select>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <select multiple data-title=\"Multiple Select\" name=\"currency\" class=\"selectpicker\" data-style=\"btn-info btn-fill btn-block\" data-menu-style=\"dropdown-blue\">\n                                    <option value=\"ARS\">ARS</option>\n                                    <option value=\"AUD\">AUD</option>\n                                    <option value=\"BRL\">BRL</option>\n                                    <option value=\"CAD\">CAD</option>\n                                    <option value=\"CHF\">CHF</option>\n                                    <option value=\"CNY\">CNY</option>\n                                    <option value=\"CZK\">CZK</option>\n                                    <option value=\"DKK\">DKK</option>\n                                    <option value=\"EUR\">EUR</option>\n                                    <option value=\"GBP\">GBP</option>\n                                    <option value=\"HKD\">HKD</option>\n                                    <option value=\"HUF\">HUF</option>\n                                    <option value=\"IDR\">IDR</option>\n                                    <option value=\"ILS\">ILS</option>\n                                    <option value=\"INR\">INR</option>\n                                    <option value=\"JPY\">JPY</option>\n                                    <option value=\"KRW\">KRW</option>\n                                    <option value=\"MYR\">MYR</option>\n                                    <option value=\"MXN\">MXN</option>\n                                    <option value=\"NOK\">NOK</option>\n                                    <option value=\"NZD\">NZD</option>\n                                    <option value=\"PHP\">PHP</option>\n                                    <option value=\"PLN\">PLN</option>\n                                    <option value=\"RUB\">RUB</option>\n                                    <option value=\"SEK\">SEK</option>\n                                    <option value=\"SGD\">SGD</option>\n                                    <option value=\"TWD\">TWD</option>\n                                    <option value=\"USD\">USD</option>\n                                    <option value=\"VND\">VND</option>\n                                    <option value=\"ZAR\">ZAR</option>\n                                </select>\n                            </div>\n                        </div>\n                </div>\n            </div>\n\n            <br /><br />\n\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <legend>Progress Bars</legend>\n\n                    <div class=\"progress\">\n                        <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 30%;\">\n                            <span class=\"sr-only\">60% Complete</span>\n                        </div>\n                    </div>\n\n                    <div class=\"progress\">\n                        <div class=\"progress-bar progress-bar-info\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%;\">\n                            <span class=\"sr-only\">60% Complete</span>\n                        </div>\n                    </div>\n\n                    <div class=\"progress\">\n                        <div class=\"progress-bar progress-bar-success\" style=\"width: 35%\">\n                            <span class=\"sr-only\">35% Complete (success)</span>\n                        </div>\n                        <div class=\"progress-bar progress-bar-warning\" style=\"width: 20%\">\n                            <span class=\"sr-only\">20% Complete (warning)</span>\n                        </div>\n                        <div class=\"progress-bar progress-bar-danger\" style=\"width: 10%\">\n                            <span class=\"sr-only\">10% Complete (danger)</span>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-6\">\n                    <legend>Sliders</legend>\n                    <nouislider [connect]=\"false\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"simpleSlider\" [tooltips]=\"true\"></nouislider>\n                    <br>\n                    <nouislider [connect]=\"true\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"doubleSlider\" [tooltips]=\"true\"></nouislider>\n                </div>\n\n            </div>\n\n        </div>\n    </div> <!-- end card -->\n\n</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/regularforms/regularforms.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forms/regularforms/regularforms.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n\n                <div class=\"card\">\n                    <div class=\"header\">Stacked Form</div>\n                    <div class=\"content\">\n                        <form method=\"#\" action=\"#\">\n                            <div class=\"form-group\">\n                                <label>Email address</label>\n                                <input type=\"email\" placeholder=\"Enter email\" class=\"form-control\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Password</label>\n                                <input type=\"password\" placeholder=\"Password\" class=\"form-control\">\n                            </div>\n                            <div class=\"form-group\">\n                                <div class=\"checkbox\">\n                                    <input id=\"checkbox21\" type=\"checkbox\" checked=\"\">\n                                    <label for=\"checkbox21\">\n                                        Subscribe to newsletter\n                                    </label>\n                                </div>\n                            </div>\n\n\n                            <button type=\"submit\" class=\"btn btn-fill btn-info\">Submit</button>\n                        </form>\n                    </div>\n                </div> <!-- end card -->\n\n            </div> <!--  end col-md-6  -->\n\n            <div class=\"col-md-6\">\n\n                <div class=\"card\">\n                    <div class=\"header\">Horizontal Form</div>\n                    <div class=\"content\">\n                        <form class=\"form-horizontal\">\n                            <div class=\"form-group\">\n                                <label class=\"col-md-3 control-label\">Email</label>\n                                <div class=\"col-md-9\">\n                                    <input type=\"email\" placeholder=\"Email\" class=\"form-control\">\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"col-md-3 control-label\">Password</label>\n                                <div class=\"col-md-9\">\n                                    <input type=\"password\" placeholder=\"Password\" class=\"form-control\">\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"col-md-3\"></label>\n                                <div class=\"col-md-9\">\n                                    <div class=\"checkbox\">\n                                        <input id=\"checkbox20\" type=\"checkbox\" unchecked>\n                                        <label for=\"checkbox20\">\n                                            Remember Me\n                                        </label>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"form-group\">\n                                <label class=\"col-md-3\"></label>\n                                <div class=\"col-md-9\">\n                                    <button type=\"submit\" class=\"btn btn-fill btn-info\">Sign in</button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div> <!-- end card -->\n\n            </div> <!--  end col-md-6  -->\n\n            <div class=\"col-md-12\">\n\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <legend>Form Elements</legend>\n                    </div>\n                    <div class=\"content\">\n                        <form method=\"get\" action=\"/\" class=\"form-horizontal\">\n\n                            <fieldset>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\">With help</label>\n                                    <div class=\"col-sm-10\">\n                                        <input type=\"text\" class=\"form-control\">\n                                        <span class=\"help-block\">A block of help text that breaks onto a new line.</span>\n                                    </div>\n                                </div>\n                            </fieldset>\n\n                            <fieldset>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\">Password</label>\n                                    <div class=\"col-sm-10\">\n                                        <input type=\"password\" name=\"password\" class=\"form-control\">\n                                    </div>\n                                </div>\n                            </fieldset>\n\n                            <fieldset>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\">Placeholder</label>\n                                    <div class=\"col-sm-10\">\n                                        <input type=\"text\" placeholder=\"placeholder\" class=\"form-control\">\n                                    </div>\n                                </div>\n                            </fieldset>\n\n                            <fieldset>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\">Disabled</label>\n                                    <div class=\"col-sm-10\">\n                                        <input type=\"text\" placeholder=\"Disabled input here...\" disabled=\"\" class=\"form-control\">\n                                    </div>\n                                </div>\n                            </fieldset>\n\n                            <fieldset>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\">Static control</label>\n                                    <div class=\"col-sm-10\">\n                                        <p class=\"form-control-static\">hello@creative-tim.com</p>\n                                    </div>\n                                </div>\n                            </fieldset>\n\n                            <fieldset>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\">Checkboxes and radios</label>\n                                    <div class=\"col-sm-10\">\n                                        <div class=\"checkbox\">\n                                            <input id=\"checkbox10\" type=\"checkbox\">\n                                            <label for=\"checkbox10\">\n                                                First Checkbox\n                                            </label>\n                                        </div>\n\n                                        <div class=\"checkbox\">\n                                            <input id=\"checkbox11\" type=\"checkbox\">\n                                            <label for=\"checkbox11\">\n                                                Second Checkbox\n                                            </label>\n                                        </div>\n\n                                        <div class=\"radio\">\n                                            <input type=\"radio\" name=\"radio10\" id=\"radio5\" value=\"option5\" checked=\"\">\n                                            <label for=\"radio5\">\n                                                First Radio\n                                            </label>\n                                        </div>\n\n                                        <div class=\"radio\">\n                                            <input type=\"radio\" name=\"radio10\" id=\"radio6\" value=\"option6\">\n                                            <label for=\"radio6\">\n                                                Second Radio\n                                            </label>\n                                        </div>\n                                    </div>\n                                </div>\n                            </fieldset>\n\n                            <fieldset>\n                                <div class=\"form-group\">\n                                   <label class=\"col-sm-2 control-label\">Inline checkboxes</label>\n                                   <div class=\"col-sm-10\">\n                                       <div class=\"checkbox checkbox-inline\">\n                                           <input id=\"checkbox13\" type=\"checkbox\">\n                                           <label for=\"checkbox13\">\n                                               a\n                                           </label>\n                                       </div>\n\n                                       <div class=\"checkbox checkbox-inline\">\n                                           <input id=\"checkbox15\" type=\"checkbox\">\n                                           <label for=\"checkbox15\">\n                                               b\n                                           </label>\n                                       </div>\n\n                                       <div class=\"checkbox checkbox-inline\">\n                                           <input id=\"checkbox19\" type=\"checkbox\">\n                                           <label for=\"checkbox19\">\n                                               c\n                                           </label>\n                                       </div>\n                                   </div>\n                                </div>\n                            </fieldset>\n\n                            <fieldset>\n                                <legend>Input Variants</legend>\n\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\">Custom Checkboxes &amp; radios</label>\n                                    <div class=\"col-sm-4 col-sm-offset-1\">\n                                        <div class=\"checkbox\">\n                                            <input id=\"checkbox1\" type=\"checkbox\">\n                                            <label for=\"checkbox1\">\n                                                Unchecked\n                                            </label>\n                                        </div>\n                                        <div class=\"checkbox\">\n                                            <input id=\"checkbox2\" type=\"checkbox\" checked=\"\">\n                                            <label for=\"checkbox2\">\n                                                Checked\n                                            </label>\n                                        </div>\n                                        <div class=\"checkbox\">\n                                            <input id=\"checkbox3\" type=\"checkbox\" disabled=\"\">\n                                            <label for=\"checkbox3\">\n                                                Disabled unchecked\n                                            </label>\n                                        </div>\n                                        <div class=\"checkbox\">\n                                            <input id=\"checkbox4\" type=\"checkbox\" checked=\"\" disabled=\"\">\n                                            <label for=\"checkbox4\">\n                                                Disabled checked\n                                            </label>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"col-sm-5\">\n                                        <div class=\"radio\">\n                                            <input type=\"radio\" name=\"radio1\" id=\"radio1\" value=\"option1\">\n                                            <label for=\"radio1\">\n                                                Radio is off\n                                            </label>\n                                        </div>\n\n                                        <div class=\"radio\">\n                                            <input type=\"radio\" name=\"radio1\" id=\"radio2\" value=\"option2\" checked=\"\">\n                                            <label for=\"radio2\">\n                                                Radio is on\n                                            </label>\n                                        </div>\n\n                                        <div class=\"radio\">\n                                            <input type=\"radio\" name=\"radio3\" id=\"radio3\" value=\"option3\" disabled=\"\">\n                                            <label for=\"radio3\">\n                                                Disabled radio is off\n                                            </label>\n                                        </div>\n\n                                        <div class=\"radio\">\n                                            <input type=\"radio\" name=\"radio4\" id=\"radio4\" value=\"option4\" checked=\"\" disabled=\"\">\n                                            <label for=\"radio4\">\n                                                Disabled radio is on\n                                            </label>\n                                        </div>\n                                    </div>\n                                </div>\n                            </fieldset>\n\n                            <fieldset>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\">Input with success</label>\n                                    <div class=\"col-sm-10\">\n                                        <input type=\"text\" class=\"form-control valid\">\n                                    </div>\n                                </div>\n                            </fieldset>\n\n                            <fieldset>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\">Input with error</label>\n                                    <div class=\"col-sm-10\">\n                                        <input type=\"text\" class=\"form-control error\">\n                                    </div>\n                                </div>\n                            </fieldset>\n\n                            <fieldset>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\">Column sizing</label>\n                                    <div class=\"col-sm-10\">\n                                        <div class=\"row\">\n                                            <div class=\"col-md-3\">\n                                                <input type=\"text\" placeholder=\".col-md-3\" class=\"form-control\">\n                                            </div>\n\n                                            <div class=\"col-md-4\">\n                                                <input type=\"text\" placeholder=\".col-md-4\" class=\"form-control\">\n                                            </div>\n\n                                            <div class=\"col-md-5\">\n                                                <input type=\"text\" placeholder=\".col-md-5\" class=\"form-control\">\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </fieldset>\n\n                            <fieldset>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\">Input groups</label>\n                                    <div class=\"col-sm-3\">\n                                        <div class=\"input-group\">\n                                            <span class=\"input-group-addon\">@</span>\n                                            <input type=\"text\" placeholder=\"Username\" class=\"form-control\">\n                                        </div>\n                                    </div>\n\n                                    <div class=\"col-sm-3\">\n                                        <div class=\"input-group\">\n                                            <input type=\"text\" class=\"form-control\">\n                                            <span class=\"input-group-addon\">.00</span>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"col-sm-4\">\n                                        <div class=\"input-group\">\n                                            <span class=\"input-group-addon\">$</span>\n                                            <input type=\"text\" class=\"form-control\">\n                                            <span class=\"input-group-addon\">.00</span>\n                                        </div>\n                                    </div>\n                                </div>\n                             </fieldset>\n                        </form>\n\n                    </div>\n                </div>  <!-- end card -->\n\n            </div> <!-- end col-md-12 -->\n        </div> <!-- end row -->\n\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/validationforms/validationforms.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forms/validationforms/validationforms.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <form #f=\"ngForm\" novalidate (ngSubmit)=\"save(f.value, f.valid)\">\n\n                        <div class=\"header\">\n\n                                Register Form\n\n                        </div>\n                        <div class=\"content\">\n                            <div class=\"form-group\">\n                                <label class=\"control-label\" for=\"\">Email Address:\n                                    <span class=\"star\">*</span>\n                                </label>\n                                <input type=\"email\" class=\"form-control\" name=\"email\" [ngModel]=\"register.email\"\n                                  required  #email=\"ngModel\" pattern=\"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$\">\n                                <small [hidden]=\"email.valid || (email.pristine && !f.submitted)\" class=\"text-danger\">\n                                  Email is required and format should be <i>john@doe.com</i>.\n                                </small>\n                            </div>\n                            <div class=\"form-group\">\n                                <label  for=\"\" class=\"control-label\">Password\n                                    <span class=\"star\">*</span>\n                                </label>\n                                <input type=\"password\" class=\"form-control\" name=\"password\" [ngModel]=\"register.password\"\n                                  required validateEqual=\"confirmPassword\" reverse=\"true\" #password=\"ngModel\">\n                                <small [hidden]=\"password.valid || (password.pristine && !f.submitted)\" class=\"text-danger\">\n                                  Password is required\n                                </small>\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"\" class=\"control-label\">Confirm Password\n                                    <span class=\"star\">*</span>\n                                </label>\n\n                                <input type=\"password\" class=\"form-control\" name=\"confirmPassword\" [ngModel]=\"register.confirmPassword\"\n                                  required validateEqual=\"password\" reverse=\"false\" #confirmPassword=\"ngModel\">\n                                <small [hidden]=\"confirmPassword.valid || (confirmPassword.pristine && !f.submitted)\" class=\"text-danger\">\n                                  Password mismatch\n                                </small>\n                            </div>\n                            <div class=\"category\"><span class=\"star\">*</span> Required fields</div>\n                        </div>\n                        <div class=\"footer\">\n                            <button type=\"submit\" class=\"btn btn-info btn-fill pull-right\">Register</button>\n                            <div class=\"form-group pull-left\">\n                                <div class=\"checkbox\">\n                                    <input id=\"checkbox25\" type=\"checkbox\" [ngModel] >\n                                    <label for=\"checkbox25\">\n                                        Subscribe to newsletter\n                                    </label>\n                                </div>\n                            </div>\n                            <div class=\"clearfix\"></div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <form #f1=\"ngForm\" novalidate (ngSubmit)=\"save1(f1.value, f1.valid)\">\n                        <div class=\"header text-center\">\n\n                                Login Form\n\n                        </div>\n                        <div class=\"content\">\n                            <div class=\"form-group\">\n                                <label class=\"control-label\" for=\"\">Email Address:\n                                    <span class=\"star\">*</span>\n                                </label>\n                                <input type=\"email\" class=\"form-control\" name=\"email\" [ngModel]=\"login.email\"\n                                  required  #email=\"ngModel\" pattern=\"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$\">\n                                <small [hidden]=\"email.valid || (email.pristine && !f1.submitted)\" class=\"text-danger\">\n                                  Email is required and format should be <i>john@doe.com</i>.\n                                </small>\n                            </div>\n                            <div class=\"form-group\">\n                                <label  for=\"\" class=\"control-label\">Password\n                                    <span class=\"star\">*</span>\n                                </label>\n                                <input type=\"password\" class=\"form-control\" name=\"password\" [ngModel]=\"login.password\"\n                                  required validateEqual=\"confirmPassword\" reverse=\"true\" #password=\"ngModel\">\n                                <small [hidden]=\"password.valid || (password.pristine && !f1.submitted)\" class=\"text-danger\">\n                                  Password is required\n                                </small>\n                            </div>\n                            <div class=\"category\">    <span class=\"star\">*</span> Required fields</div>\n                        </div>\n                        <div class=\"footer text-center\">\n                            <button type=\"submit\" class=\"btn btn-info btn-fill btn-wd\">Login</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <form #f2=\"ngForm\" class=\"form-horizontal\" novalidate (ngSubmit)=\"save2(f2.value, f2.valid)\">\n                        <div class=\"content\">\n                            <legend>Type Validation</legend>\n                            <fieldset>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\">\n                                        Required Text\n                                    </label>\n                                    <div class=\"col-sm-6\">\n                                        <input class=\"form-control\" type=\"text\" name=\"text\"  [ngModel]=\"typeValidation.text\"\n                                          required  #text=\"ngModel\">\n                                          <small [hidden]=\"text.valid || (text.pristine && !f2.submitted)\" class=\"text-danger\">\n                                          Text is required.\n                                          </small>\n                                    </div>\n                                    <div class=\"col-sm-4\"><code>required</code></div>\n                                </div>\n                            </fieldset>\n\n                            <fieldset>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\">\n                                        Email\n                                    </label>\n                                    <div class=\"col-sm-6\">\n                                        <input type=\"email\" class=\"form-control\" name=\"email\" [ngModel]=\"typeValidation.email\"\n                                          required  #email=\"ngModel\" pattern=\"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$\">\n                                        <small [hidden]=\"email.valid || (email.pristine && !f2.submitted)\" class=\"text-danger\">\n                                          Email is required and format should be <i>john@doe.com</i>.\n                                        </small>\n                                    </div>\n                                    <div class=\"col-sm-4\"><code>email=\"true\"</code></div>\n                                </div>\n                            </fieldset>\n\n                            <fieldset>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\">\n                                        Number\n                                    </label>\n                                    <div class=\"col-sm-6\">\n                                        <input class=\"form-control\" type=\"number\" name=\"number\" number=\"true\" [ngModel]=\"typeValidation.number\"\n                                          required  #number=\"ngModel\">\n                                    </div>\n                                    <div class=\"col-sm-4\"><code>number=\"true\"</code></div>\n                                </div>\n                            </fieldset>\n\n                            <fieldset>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label\">\n                                        Url\n                                    </label>\n                                    <div class=\"col-sm-6\">\n                                        <input class=\"form-control\" type=\"text\" id=\"url\" required pattern=\"https?://.+\" [(ngModel)]=\"typeValidation.url\" name=\"url\" #url=\"ngModel\">\n                                          <small [hidden]=\"url.valid || (url.pristine && !f2.submitted)\" class=\"text-danger\">\n                                            Must be a valid URL!\n                                          </small>\n                                    </div>\n                                    <div class=\"col-sm-4\"><code>url=\"true\"</code></div>\n                                </div>\n                            </fieldset>\n\n                            <fieldset>\n                                <div class=\"form-group column-sizing\">\n                                    <label class=\"col-sm-2 control-label\">\n                                        Equal to\n                                    </label>\n                                    <div class=\"col-sm-3\">\n                                        <input type=\"text\" class=\"form-control\" name=\"idSource\" [ngModel]=\"typeValidation.idSource\" placeholder=\"#idSource\"\n                                          required validateEqual=\"idDestination\" reverse=\"true\" #idSource=\"ngModel\">\n                                        <small [hidden]=\"idSource.valid || (idSource.pristine && !f2.submitted)\" class=\"text-danger\">\n                                          IdSource is required\n                                        </small>\n                                    </div>\n                                    <div class=\"col-sm-3\">\n                                        <input type=\"text\" class=\"form-control\" name=\"idDestination\" [ngModel]=\"typeValidation.idDestination\" placeholder=\"#idDestination\"\n                                          required validateEqual=\"idSource\" reverse=\"false\" #idDestination=\"ngModel\">\n                                        <small [hidden]=\"idDestination.valid || (idDestination.pristine && !f2.submitted)\" class=\"text-danger\">\n                                          IdSource mismatch!\n                                        </small>\n                                    </div>\n                                    <div class=\"col-sm-4\"><code>equalTo=\"#idSource\"</code>\n                                    </div>\n                                </div>\n                            </fieldset>\n                        </div>\n                        <div class=\"footer text-center\">\n                            <button type=\"submit\" class=\"btn btn-info btn-fill\">Validate Inputs</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./src/app/forms/equal-validator.directive.ts":
/*!****************************************************!*\
  !*** ./src/app/forms/equal-validator.directive.ts ***!
  \****************************************************/
/*! exports provided: EqualValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EqualValidator", function() { return EqualValidator; });
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var EqualValidator = /** @class */ (function () {
    function EqualValidator(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    EqualValidator_1 = EqualValidator;
    Object.defineProperty(EqualValidator.prototype, "isReverse", {
        get: function () {
            if (!this.reverse)
                return false;
            return this.reverse === 'true' ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    EqualValidator.prototype.validate = function (c) {
        // self value
        var v = c.value;
        // control vlaue
        var e = c.root.get(this.validateEqual);
        // value not equal
        if (e && v !== e.value && !this.isReverse) {
            return {
                validateEqual: false
            };
        }
        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            if (!Object.keys(e.errors).length)
                e.setErrors(null);
        }
        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({
                validateEqual: false
            });
        }
        return null;
    };
    var EqualValidator_1;
    EqualValidator.ctorParameters = function () { return [
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"], args: ['validateEqual',] }] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"], args: ['reverse',] }] }
    ]; };
    EqualValidator = EqualValidator_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return EqualValidator_1; }), multi: true }
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"])('validateEqual')),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"])('reverse')),
        __metadata("design:paramtypes", [String, String])
    ], EqualValidator);
    return EqualValidator;
}());



/***/ }),

/***/ "./src/app/forms/extendedforms/extendedforms.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/forms/extendedforms/extendedforms.component.ts ***!
  \****************************************************************/
/*! exports provided: ExtendedFormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtendedFormsComponent", function() { return ExtendedFormsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ExtendedFormsComponent = /** @class */ (function () {
    function ExtendedFormsComponent() {
        this.regularItems = ['Pizza', 'Pasta', 'Parmesan'];
        this.filledItems = ['Pizza', 'Pasta', 'Parmesan'];
        this.simpleSlider = 40;
        this.doubleSlider = [20, 60];
        this.state_default = true;
        this.state_plain = true;
        this.state_with_icons = true;
    }
    ExtendedFormsComponent.prototype.ngOnInit = function () {
        //  Activate the tooltips
        $('[rel="tooltip"]').tooltip();
        //  Init Bootstrap Select Picker
        if ($(".selectpicker").length != 0) {
            $(".selectpicker").selectpicker({
                iconBase: "fa",
                tickIcon: "fa-check"
            });
        }
        $('.datetimepicker').datetimepicker({
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
        $('.datepicker').datetimepicker({
            format: 'MM/DD/YYYY',
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
        $('.timepicker').datetimepicker({
            //          format: 'H:mm',    // use this format if you want the 24hours timepicker
            format: 'h:mm A',
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
    };
    ExtendedFormsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'extendedforms-cmp',
            template: __importDefault(__webpack_require__(/*! raw-loader!./extendedforms.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/extendedforms/extendedforms.component.html")).default
        })
    ], ExtendedFormsComponent);
    return ExtendedFormsComponent;
}());



/***/ }),

/***/ "./src/app/forms/forms.module.ts":
/*!***************************************!*\
  !*** ./src/app/forms/forms.module.ts ***!
  \***************************************/
/*! exports provided: Forms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Forms", function() { return Forms; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _equal_validator_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./equal-validator.directive */ "./src/app/forms/equal-validator.directive.ts");
/* harmony import */ var _lbd_lbd_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lbd/lbd.module */ "./src/app/lbd/lbd.module.ts");
/* harmony import */ var _forms_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forms.routing */ "./src/app/forms/forms.routing.ts");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/__ivy_ngcc__/fesm5/ngx-chips.js");
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "./node_modules/jw-bootstrap-switch-ng2/__ivy_ngcc__/fesm5/jw-bootstrap-switch-ng2.js");
/* harmony import */ var _extendedforms_extendedforms_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./extendedforms/extendedforms.component */ "./src/app/forms/extendedforms/extendedforms.component.ts");
/* harmony import */ var _regularforms_regularforms_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./regularforms/regularforms.component */ "./src/app/forms/regularforms/regularforms.component.ts");
/* harmony import */ var _validationforms_validationforms_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./validationforms/validationforms.component */ "./src/app/forms/validationforms/validationforms.component.ts");
/* harmony import */ var _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./wizard/wizard.component */ "./src/app/forms/wizard/wizard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








// import { NouisliderModule } from 'ng2-nouislider/src/nouislider';





var Forms = /** @class */ (function () {
    function Forms() {
    }
    Forms = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_forms_routing__WEBPACK_IMPORTED_MODULE_6__["FormsRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_7__["TagInputModule"],
                // NouisliderModule,
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_8__["JwBootstrapSwitchNg2Module"],
                _lbd_lbd_module__WEBPACK_IMPORTED_MODULE_5__["LbdModule"]
            ],
            declarations: [
                _extendedforms_extendedforms_component__WEBPACK_IMPORTED_MODULE_9__["ExtendedFormsComponent"],
                _regularforms_regularforms_component__WEBPACK_IMPORTED_MODULE_10__["RegularFormsComponent"],
                _validationforms_validationforms_component__WEBPACK_IMPORTED_MODULE_11__["ValidationFormsComponent"],
                _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_12__["WizardComponent"],
                _equal_validator_directive__WEBPACK_IMPORTED_MODULE_4__["EqualValidator"]
            ]
        })
    ], Forms);
    return Forms;
}());



/***/ }),

/***/ "./src/app/forms/forms.routing.ts":
/*!****************************************!*\
  !*** ./src/app/forms/forms.routing.ts ***!
  \****************************************/
/*! exports provided: FormsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsRoutes", function() { return FormsRoutes; });
/* harmony import */ var _extendedforms_extendedforms_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extendedforms/extendedforms.component */ "./src/app/forms/extendedforms/extendedforms.component.ts");
/* harmony import */ var _regularforms_regularforms_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./regularforms/regularforms.component */ "./src/app/forms/regularforms/regularforms.component.ts");
/* harmony import */ var _validationforms_validationforms_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validationforms/validationforms.component */ "./src/app/forms/validationforms/validationforms.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var FormsRoutes = [
    {
        path: '',
        children: [{
                path: 'regular',
                component: _regularforms_regularforms_component__WEBPACK_IMPORTED_MODULE_1__["RegularFormsComponent"]
            }]
    }, {
        path: '',
        children: [{
                path: 'extended',
                component: _extendedforms_extendedforms_component__WEBPACK_IMPORTED_MODULE_0__["ExtendedFormsComponent"]
            }]
    }, {
        path: '',
        children: [{
                path: 'validation',
                component: _validationforms_validationforms_component__WEBPACK_IMPORTED_MODULE_2__["ValidationFormsComponent"]
            }]
    },
];


/***/ }),

/***/ "./src/app/forms/regularforms/regularforms.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/forms/regularforms/regularforms.component.ts ***!
  \**************************************************************/
/*! exports provided: RegularFormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegularFormsComponent", function() { return RegularFormsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var RegularFormsComponent = /** @class */ (function () {
    function RegularFormsComponent() {
    }
    RegularFormsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'regularforms-cmp',
            template: __importDefault(__webpack_require__(/*! raw-loader!./regularforms.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/regularforms/regularforms.component.html")).default
        })
    ], RegularFormsComponent);
    return RegularFormsComponent;
}());



/***/ }),

/***/ "./src/app/forms/validationforms/validationforms.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/forms/validationforms/validationforms.component.ts ***!
  \********************************************************************/
/*! exports provided: ValidationFormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationFormsComponent", function() { return ValidationFormsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ValidationFormsComponent = /** @class */ (function () {
    function ValidationFormsComponent() {
    }
    ValidationFormsComponent.prototype.ngOnInit = function () {
        this.register = {
            email: '',
            password: '',
            confirmPassword: ''
        };
        this.login = {
            email: '',
            password: ''
        };
        this.typeValidation = {
            text: '',
            email: '',
            idSource: '',
            idDestination: '',
            url: ''
        };
    };
    ValidationFormsComponent.prototype.save = function (model, isValid) {
        // call API to save customer
        if (isValid) {
            console.log(model, isValid);
        }
    };
    ValidationFormsComponent.prototype.save1 = function (model, isValid) {
        // call API to save customer
        if (isValid) {
            console.log(model, isValid);
        }
    };
    ValidationFormsComponent.prototype.save2 = function (model, isValid) {
        // call API to save customer
        if (isValid) {
            console.log(model, isValid);
        }
    };
    ValidationFormsComponent.prototype.onSubmit = function (value) {
        console.log(value);
    };
    ValidationFormsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'validationforms-cmp',
            template: __importDefault(__webpack_require__(/*! raw-loader!./validationforms.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/validationforms/validationforms.component.html")).default
        })
    ], ValidationFormsComponent);
    return ValidationFormsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=forms-forms-module.js.map