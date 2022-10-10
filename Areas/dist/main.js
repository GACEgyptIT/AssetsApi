(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sweetalert/sweetalert.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sweetalert/sweetalert.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n<div class=\"container-fluid\">\n    <div class=\"card card-plain\">\n        <h4 class=\"title\">Sweet Alert 2</h4>\n        <p class=\"category\">A beautiful plugin, that replace the classic alert, Handcrafted by our friend <a target=\"_blank\" href=\"https://twitter.com/t4t5\">Tristan Edwards</a>. Please check out the <a href=\"https://sweetalert2.github.io/\" target=\"_blank\">full documentation.</a></p>\n\n        <br><br>\n        <div class=\"places-sweet-alerts\">\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n                    <div class=\"card\">\n                        <div class=\"content text-center\">\n                            <h5>Basic example</h5>\n                            <button class=\"btn btn-default btn-fill\" (click)=\"showSwal('basic')\">Try me!</button>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-3\">\n                    <div class=\"card\">\n                        <div class=\"content text-center\">\n                            <h5>A title with a text under</h5>\n                            <button class=\"btn btn-default btn-fill\" (click)=\"showSwal('title-and-text')\">Try me!</button>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-3\">\n                    <div class=\"card\">\n                        <div class=\"content text-center\">\n                            <h5>A success message</h5>\n                            <button class=\"btn btn-default btn-fill\" (click)=\"showSwal('success-message')\">Try me!</button>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-3\">\n                    <div class=\"card\">\n                        <div class=\"content text-center\">\n                            <h5>Custom HTML description</h5>\n                            <button class=\"btn btn-default btn-fill\" (click)=\"showSwal('custom-html')\">Try me!</button>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-3\">\n                    <div class=\"card\">\n                        <div class=\"content text-center\">\n                            <h5>A warning message, with a function attached to the \"Confirm\" Button...</h5>\n                            <button class=\"btn btn-default btn-fill\" (click)=\"showSwal('warning-message-and-confirmation')\">Try me!</button>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-3\">\n                    <div class=\"card\">\n                        <div class=\"content text-center\">\n                            <h5>...and by passing a parameter, you can execute something else for \"Cancel\"</h5>\n                            <button class=\"btn btn-default btn-fill\" (click)=\"showSwal('warning-message-and-cancel')\">Try me!</button>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-3\">\n                    <div class=\"card\">\n                        <div class=\"content text-center\">\n                            <h5>A message with auto close timer set to 2 seconds</h5>\n                            <button class=\"btn btn-default btn-fill\" (click)=\"showSwal('auto-close')\">Try me!</button>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-3\">\n                    <div class=\"card\">\n                        <div class=\"content text-center\">\n                            <h5>Modal window with input field</h5>\n                            <button class=\"btn btn-default btn-fill\" (click)=\"showSwal('input-field')\">Try me!</button>\n                        </div>\n                    </div>\n                </div>\n\n\n            </div>\n        </div>\n\n    </div>\n</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n\n      <a routerLink=\"/users/login\" routerLinkActive=\"active\" style=\"color: green;\" >Go to Login Page </a>\n                                  \n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin/admin-layout.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin/admin-layout.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color=\"gray\" data-image=\"\">\n        <sidebar-cmp></sidebar-cmp>\n        <div class=\"sidebar-background\" style=\"background-image: url(assets/img/full-screen-image-3.jpg)\"></div>\n    </div>\n    <div class=\"main-panel\">\n        <navbar-cmp></navbar-cmp>\n        <router-outlet></router-outlet>\n        <div *ngIf=\"!isMap()\">\n          <footer-cmp></footer-cmp>\n        </div>\n    </div>\n</div>\n<fixedplugin-cmp></fixedplugin-cmp>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth/auth-layout.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth/auth-layout.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <pagesnavbar-cmp></pagesnavbar-cmp>\n  <router-outlet></router-outlet>\n  <fixedplugin-cmp></fixedplugin-cmp>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/fixedplugin/fixedplugin.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/fixedplugin/fixedplugin.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"fixed-plugin\">\n    <div class=\"dropdown\">\n        <a href=\"#\" data-toggle=\"dropdown\">\n        <i class=\"fa fa-cog fa-2x\"> </i>\n        </a>\n        <ul class=\"dropdown-menu\">\n            <li class=\"header-title\">Configuration</li>\n            <li class=\"adjustments-line\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger\">\n                    <p *ngIf=\"isPages()\">Sidebar Image</p>\n                    <p *ngIf=\"!isPages()\"> Background Image</p>\n                    <bSwitch\n                      [switch-on-color]=\"'primary'\"\n                      [(ngModel)]=\"state\"\n                      [ngClass]=\"['switch','switch-sidebar-image']\"\n                      (changeState)=\"onChange($event)\">\n                    </bSwitch>\n                    <div class=\"clearfix\"></div>\n                </a>\n            </li>\n\t\t\t<li class=\"adjustments-line\" *ngIf=\"isPages()\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger\">\n                    <p>Sidebar Mini</p>\n                    <bSwitch\n                      [switch-on-color]=\"'primary'\"\n                      [ngClass]=\"['switch','switch-sidebar-mini']\"\n                      (changeState)=\"onChange1($event)\">\n                    </bSwitch>\n                    <div class=\"clearfix\"></div>\n                </a>\n            </li>\n\t\t\t<li class=\"adjustments-line\" *ngIf=\"isPages()\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger\">\n                    <p>Fixed Navbar</p>\n                    <bSwitch\n                      [switch-on-color]=\"'primary'\"\n                      [ngClass]=\"['switch','switch-navbar-fixed']\"\n                      (changeState)=\"onChange2($event)\">\n                    </bSwitch>\n                    <div class=\"clearfix\"></div>\n                </a>\n            </li>\n            <li class=\"adjustments-line\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger\">\n                    <p>Filters</p>\n                    <div class=\"pull-right\">\n                        <span class=\"badge filter\" data-color=\"black\"></span>\n                        <span class=\"badge filter badge-azure\" data-color=\"azure\"></span>\n                        <span class=\"badge filter badge-green\" data-color=\"green\"></span>\n                        <span class=\"badge filter badge-orange\" data-color=\"orange\"></span>\n                        <span class=\"badge filter badge-red active\" data-color=\"red\"></span>\n                        <span class=\"badge filter badge-purple\" data-color=\"purple\"></span>\n                    </div>\n                    <div class=\"clearfix\"></div>\n                </a>\n            </li>\n            <li class=\"header-title\">Sidebar Images</li>\n            <li>\n                <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                    <img src=\"../../../assets/img/full-screen-image-1.jpg\">\n                </a>\n            </li>\n            <li>\n                <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                    <img src=\"../../../assets/img/full-screen-image-2.jpg\">\n                </a>\n            </li>\n            <li class=\"active\">\n                <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                    <img src=\"../../../assets/img/full-screen-image-3.jpg\">\n                </a>\n            </li>\n            <li>\n                <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                    <img src=\"../../../assets/img/full-screen-image-4.jpg\">\n                </a>\n            </li>\n\n        </ul>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<footer class=\"footer\">\n    <div class=\"container-fluid\">\n        <nav class=\"pull-left\">\n            <ul>\n                <li>\n                    <a href=\"#\">\n                        Home\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        Company\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        Portfolio\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                       Blog\n                    </a>\n                </li>\n            </ul>\n        </nav>\n        <p class=\"copyright pull-right\">\n            &copy; {{test | date: 'yyyy'}} <a href=\"https://www.creative-tim.com\">Creative Tim</a>, made with love for a better web\n        </p>\n    </div>\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<nav #navbar class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-minimize\">\n            <button id=\"minimizeSidebar\" class=\"btn btn-danger btn-fill btn-round btn-icon\">\n                <i class=\"fa fa-ellipsis-v visible-on-sidebar-regular\"></i>\n                <i class=\"fa fa-navicon visible-on-sidebar-mini\"></i>\n            </button>\n        </div>\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" (click)=\"sidebarToggle()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\">{{getTitle()}}</a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <div class=\"\" *ngIf=\"isMobileMenu()\">\n                <form class=\"navbar-form navbar-left navbar-search-form\" role=\"search\">\n                    <div class=\"input-group\">\n                        <span class=\"input-group-addon\"><i class=\"fa fa-search\"></i></span>\n                        <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\n                    </div>\n                </form>\n\n                <ul class=\"nav navbar-nav navbar-right\">\n                    <li>\n                        <a ruterLinkActive = \"active\" [routerLink]=\"['/charts']\">\n                            <i class=\"fa fa-line-chart\"></i>\n                            <p>Stats</p>\n                        </a>\n                    </li>\n\n                    <!-- <li class=\"dropdown\">\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                            <i class=\"fa fa-gavel\"></i>\n                            <p class=\"hidden-md hidden-lg\">\n                                Actions\n                                <b class=\"caret\"></b>\n                            </p>\n                        </a>\n                        <ul class=\"dropdown-menu\">\n                            <li><a href=\"#\">Create New Post</a></li>\n                            <li><a href=\"#\">Manage Something</a></li>\n                            <li><a href=\"#\">Do Nothing</a></li>\n                            <li><a href=\"#\">Submit to live</a></li>\n                            <li class=\"divider\"></li>\n                            <li><a href=\"#\">Another Action</a></li>\n                        </ul>\n                    </li> -->\n\n                    <li class=\"dropdown\">\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                            <i class=\"fa fa-bell-o\"></i>\n                            <span class=\"notification\">5</span>\n                            <p class=\"hidden-md hidden-lg\">\n                                Notifications\n                                <b class=\"caret\"></b>\n                            </p>\n                        </a>\n                        <ul class=\"dropdown-menu\">\n                            <li><a href=\"#\">Notification 1</a></li>\n                            <li><a href=\"#\">Notification 2</a></li>\n                            <li><a href=\"#\">Notification 3</a></li>\n                            <li><a href=\"#\">Notification 4</a></li>\n                            <li><a href=\"#\">Another notification</a></li>\n                        </ul>\n                    </li>\n\n                    <li class=\"dropdown dropdown-with-icons\">\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                            <i class=\"fa fa-list\"></i>\n                            <p class=\"hidden-md hidden-lg\">\n                                More\n                                <b class=\"caret\"></b>\n                            </p>\n                        </a>\n                        <ul class=\"dropdown-menu dropdown-with-icons\">\n                            <!-- <li>\n                                <a href=\"#\">\n                                    <i class=\"pe-7s-mail\"></i> Messages\n                                </a>\n                            </li>\n                            <li>\n                                <a href=\"#\">\n                                    <i class=\"pe-7s-help1\"></i> Help Center\n                                </a>\n                            </li>\n                            <li>\n                                <a href=\"#\">\n                                    <i class=\"pe-7s-tools\"></i> Settings\n                                </a>\n                            </li> -->\n                            <li class=\"divider\"></li>\n                            <!-- <li>\n                                <a href=\"#\">\n                                    <i class=\"pe-7s-lock\"></i> Lock Screen\n                                </a>\n                            </li> -->\n                            <li>\n                                <a href=\"#\" >\n                                    <i class=\"pe-7s-user\" *ngIf=\"!isLogin\" >  </i>\n                                    <a routerLink=\"/users/login\" routerLinkActive=\"active\" *ngIf=\"!isLogin\" style=\"color: green;\" >  Login </a>\n                                    <!-- <i class=\"pe-7s-lock\" *ngIf=\"isLogin\" >  </i> -->\n                                    <!-- <a (click)=\"onLoc()\" *ngIf=\"isLogin\" >  Lock Screen </a> <br> -->\n                                    <i class=\"pe-7s-close-circle\" *ngIf=\"isLogin\" >  </i>\n                                    <a (click)=\"onLogout()\" *ngIf=\"isLogin\" style=\"color: red;\">  Logout </a>\n                             \n                                </a>\n                            </li>\n                        </ul>\n                    </li>\n\n                </ul>\n            </div>\n        </div>\n    </div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/pagesnavbar/pagesnavbar.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/pagesnavbar/pagesnavbar.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav #pagesnavbar class=\"navbar navbar-primary navbar-transparent navbar-absolute\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navigation-example-2\" (click)=\"sidebarToggle()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">Light Bootstrap Dashboard PRO Angular</a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">\n                        <i class=\"fa fa-tachometer\" aria-hidden=\"true\"></i>\n                        <p>Dashboard</p>\n                    </a>\n                </li>\n                <li>\n                    <a routerLinkActive=\"active\" [routerLink]=\"['/pages/login']\">\n                        <i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i>\n                        <p>Login</p>\n                    </a>\n                </li>\n                <li>\n                    <a routerLinkActive=\"active\" [routerLink]=\"['/pages/register']\">\n                        <i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i>\n                        <p>Register</p>\n                    </a>\n                </li>\n                <li>\n                    <a routerLinkActive=\"active\" [routerLink]=\"['/pages/lock']\">\n                        <i class=\"fa fa-lock\" aria-hidden=\"true\"></i>\n                        <p>Lock Screen</p>\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"logo\">\n\t<a href=\"http://www.gac.com\" class=\"simple-text logo-mini\">\n\t\t<div class=\"logo-img\">\n\t\t\t<img src=\"../../assets/img/GACLogo.png\"/>\n\t\t</div>\n\t</a>\n\t<a href=\"http://www.gac.com\" class=\"simple-text logo-normal\">\n\t\tAssets Mng\n\t</a>\n</div>\n\n<div class=\"sidebar-wrapper\">\n\t<div class=\"user\">\n\t\t<div class=\"info\">\n\t\t\t<div class=\"photo\">\n                <img [src]=\"usr?.EmpImg ? usr?.EmpImg : defaultEmpImg\" />  \n\t\t\t</div>\n\t\t\t<a data-toggle=\"collapse\" href=\"#collapseExample\" class=\"collapsed\">\n\t\t\t\t<span>\n                   <span style=\"color: white;\">  <a (click)=\"onProfileEdit()\">{{usr?.usrAccountName}} ({{usr?.userRole}}) </a>  </span> \n\n\t\t\t\t</span>\n            </a>\n            <!-- <div class=\"collapse\" id=\"collapseExample\">\n\t\t\t\t<ul class=\"nav\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t<span class=\"sidebar-mini\">EP</span>\n\t\t\t\t\t\t\t<span class=\"sidebar-normal\">Edit Profile</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div> -->\n\t\t</div>\n\t</div>\n\t<div *ngIf=\"isNotMobileMenu()\">\n\t\t<form class=\"navbar-form navbar-left navbar-search-form\" role=\"search\">\n            <div class=\"input-group\">\n                <span class=\"input-group-addon\"><i class=\"fa fa-search\"></i></span>\n                <input class=\"form-control\" placeholder=\"Search...\" type=\"text\" value=\"\">\n            </div>\n        </form>\n\t\t<ul class=\"nav nav-mobile-menu\">\n            <li>\n                <a routerLinkActive = \"active\" [routerLink]=\"['/charts']\">\n                    <i class=\"fa fa-line-chart\"></i>\n                    <p>Stats</p>\n                </a>\n            </li>\n\n            <li class=\"dropdown\">\n                <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" aria-expanded=\"false\">\n                    <i class=\"fa fa-gavel\"></i>\n                    <p class=\"hidden-md hidden-lg\">\n                        Actions\n                        <b class=\"caret\"></b>\n                    </p>\n                </a>\n                <!-- <ul class=\"dropdown-menu\">\n                    <li><a href=\"#\">Create New Post</a></li>\n                    <li><a href=\"#\">Manage Something</a></li>\n                    <li><a href=\"#\">Do Nothing</a></li>\n                    <li><a href=\"#\">Submit to live</a></li>\n                    <li class=\"divider\"></li>\n                    <li><a href=\"#\">Another Action</a></li>\n                </ul> -->\n            </li>\n            <li class=\"dropdown\">\n                <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" aria-expanded=\"false\">\n                    <i class=\"fa fa-bell-o\"></i>\n                    <span class=\"notification\">1977</span>\n                    <p class=\"hidden-md hidden-lg\">\n                        Notifications\n                        <b class=\"caret\"></b>\n                    </p>\n                </a>\n                <ul class=\"dropdown-menu\">\n                    <li><a href=\"#\">MyNotification 1</a></li>\n                    <li><a href=\"#\">Notification 2</a></li>\n                    <li><a href=\"#\">Notification 3</a></li>\n                    <li><a href=\"#\">Notification 4</a></li>\n                    <li><a href=\"#\">Another notification</a></li>\n                </ul>\n            </li>\n\n            <li class=\"dropdown dropdown-with-icons\">\n                <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" aria-expanded=\"false\">\n                    <i class=\"fa fa-list\"></i>\n                    <p class=\"hidden-md hidden-lg\">\n                        More\n                        <b class=\"caret\"></b>\n                    </p>\n                </a>\n                <ul class=\"dropdown-menu dropdown-with-icons\">\n                    <!-- <li>\n                        <a href=\"#\">\n                            <i class=\"pe-7s-mail\"></i> Messages\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"#\">\n                            <i class=\"pe-7s-help1\"></i> Help Center\n                        </a>\n                    </li> -->\n                    <!-- <li>\n                        <a href=\"#\">\n                            <i class=\"pe-7s-tools\"></i> Settings\n                        </a>\n                    </li> -->\n                    <!-- <li class=\"divider\"></li>\n                    <li>\n                        <a href=\"#\">\n                            <i class=\"pe-7s-lock\"></i> Lock Screen\n                        </a>\n                    </li> -->\n                    <li>\n                        <a class=\"text-danger\" href=\"#\">\n                            <i class=\"pe-7s-close-circle\"></i>\n                            Log out\n                        </a>\n                    </li>\n                </ul>\n            </li>\n\n        </ul>\n    </div>\n        <ul class=\"nav\">\n            <li routerLinkActive=\"active\" *ngFor=\"let menuitem of menuItems\">\n                <!--If is a single link-->\n                <a [routerLink]=\"[menuitem.path]\" *ngIf=\"menuitem.type === 'link'\">\n                    <i class=\"{{menuitem.icontype}}\"></i>\n                    <p>{{menuitem.title}}</p>\n                </a>\n                <!--If it have a submenu-->\n                <a data-toggle=\"collapse\" href=\"#{{menuitem.title}}\" *ngIf=\"menuitem.type === 'sub'\">\n                    <i class=\"{{menuitem.icontype}}\"></i>\n                    <p>{{menuitem.title}}<b class=\"caret\"></b></p>\n                </a>\n\n                <!--Display the submenu items-->\n                <div id=\"{{menuitem.title}}\" class=\"collapse\" *ngIf=\"menuitem.type === 'sub'\">\n                    <ul class=\"nav\">\n                        <li routerLinkActive=\"active\" *ngFor=\"let childitem of menuitem.children\">\n                            <a [routerLink]=\"[menuitem.path, childitem.path]\">\n                                <span class=\"sidebar-mini\">{{childitem.ab}}</span>\n                                <span class=\"sidebar-normal\">{{childitem.title}}</span>\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n            </li>\n\t\t\t<!-- <li>\n\t\t\t\t<a href=\"http://lbd-pro-angular2.creative-tim.com/documentation/tutorial?ref=lbd-pro-archive\">\n\t\t\t\t\t<i class=\"pe-7s-study\"></i>\n\t\t\t\t\t<p>Documentation</p>\n\t\t\t\t</a>\n\t\t\t</li> -->\n        </ul>\n\n</div>\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./components/components.module": [
		"./src/app/components/components.module.ts",
		"components-components-module"
	],
	"./dashboard/dashboard.module": [
		"./src/app/dashboard/dashboard.module.ts",
		"default~dashboard-dashboard-module~forms-forms-module~operation-operation-module~wizard-wizard-module",
		"default~dashboard-dashboard-module~forms-forms-module~wizard-wizard-module",
		"dashboard-dashboard-module"
	],
	"./forms/forms.module": [
		"./src/app/forms/forms.module.ts",
		"default~dashboard-dashboard-module~forms-forms-module~operation-operation-module~wizard-wizard-module",
		"default~dashboard-dashboard-module~forms-forms-module~wizard-wizard-module",
		"default~forms-forms-module~wizard-wizard-module",
		"forms-forms-module"
	],
	"./masterdata/masterdata.module": [
		"./src/app/masterdata/masterdata.module.ts",
		"default~masterdata-masterdata-module~operation-operation-module~users-users-module",
		"default~masterdata-masterdata-module~operation-operation-module",
		"masterdata-masterdata-module"
	],
	"./operation/operation.module": [
		"./src/app/operation/operation.module.ts",
		"default~dashboard-dashboard-module~forms-forms-module~operation-operation-module~wizard-wizard-module",
		"default~masterdata-masterdata-module~operation-operation-module~users-users-module",
		"default~masterdata-masterdata-module~operation-operation-module",
		"default~operation-operation-module~users-users-module",
		"operation-operation-module"
	],
	"./shared/authentication/authentication.module": [
		"./src/app/shared/authentication/authentication.module.ts",
		"shared-authentication-authentication-module"
	],
	"./users/users.module": [
		"./src/app/users/users.module.ts",
		"default~masterdata-masterdata-module~operation-operation-module~users-users-module",
		"default~operation-operation-module~users-users-module",
		"users-users-module"
	],
	"./wizard/wizard.module": [
		"./src/app/wizard/wizard.module.ts",
		"default~dashboard-dashboard-module~forms-forms-module~operation-operation-module~wizard-wizard-module",
		"default~dashboard-dashboard-module~forms-forms-module~wizard-wizard-module",
		"default~forms-forms-module~wizard-wizard-module",
		"wizard-wizard-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* \r\n.backgroundGAC{\r\n    background: red url(../assets/img/GAC_BackGround.jpg) no-repeat fixed center;\r\n\r\n    background-image: url(../assets/img/GAC_BackGround.jpg);\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7R0FPRyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogXHJcbi5iYWNrZ3JvdW5kR0FDe1xyXG4gICAgYmFja2dyb3VuZDogcmVkIHVybCguLi9hc3NldHMvaW1nL0dBQ19CYWNrR3JvdW5kLmpwZykgbm8tcmVwZWF0IGZpeGVkIGNlbnRlcjtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL2ltZy9HQUNfQmFja0dyb3VuZC5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbn0gKi8iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar/sidebar.module */ "./src/app/sidebar/sidebar.module.ts");
/* harmony import */ var _shared_fixedplugin_fixedplugin_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/fixedplugin/fixedplugin.module */ "./src/app/shared/fixedplugin/fixedplugin.module.ts");
/* harmony import */ var _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/footer/footer.module */ "./src/app/shared/footer/footer.module.ts");
/* harmony import */ var _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/navbar/navbar.module */ "./src/app/shared/navbar/navbar.module.ts");
/* harmony import */ var _shared_pagesnavbar_pagesnavbar_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/pagesnavbar/pagesnavbar.module */ "./src/app/shared/pagesnavbar/pagesnavbar.module.ts");
/* harmony import */ var _layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layouts/admin/admin-layout.component */ "./src/app/layouts/admin/admin-layout.component.ts");
/* harmony import */ var _layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layouts/auth/auth-layout.component */ "./src/app/layouts/auth/auth-layout.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/__ivy_ngcc__/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_store__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-store */ "./node_modules/ngx-store/__ivy_ngcc__/esm5/ngx-store.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _components_sweetalert_sweetalert_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/sweetalert/sweetalert.component */ "./src/app/components/sweetalert/sweetalert.component.ts");
/* harmony import */ var ngx_img_cropper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-img-cropper */ "./node_modules/ngx-img-cropper/__ivy_ngcc__/fesm5/ngx-img-cropper.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

 // this is needed!



















// import { DatafilterPipe } from './shared/pipes/datafilter.pipe';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                ngx_store__WEBPACK_IMPORTED_MODULE_17__["WebStorageModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_13__["AppRoutes"], {
                    useHash: true
                }),
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_6__["SidebarModule"],
                _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_9__["NavbarModule"],
                _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_8__["FooterModule"],
                _shared_fixedplugin_fixedplugin_module__WEBPACK_IMPORTED_MODULE_7__["FixedPluginModule"],
                _shared_pagesnavbar_pagesnavbar_module__WEBPACK_IMPORTED_MODULE_10__["PagesnavbarModule"],
                ngx_loading__WEBPACK_IMPORTED_MODULE_15__["NgxLoadingModule"].forRoot({
                    animationType: ngx_loading__WEBPACK_IMPORTED_MODULE_15__["ngxLoadingAnimationTypes"].wanderingCubes,
                    backdropBackgroundColour: 'rgba(0,0,0,0.1)',
                    backdropBorderRadius: '4px',
                    primaryColour: '#ffffff',
                    secondaryColour: '#ffffff',
                    tertiaryColour: '#ffffff'
                }),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_16__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_16__["AlertModule"].forRoot()
            ],
            declarations: [
                ngx_img_cropper__WEBPACK_IMPORTED_MODULE_20__["ImageCropperComponent"],
                _components_sweetalert_sweetalert_component__WEBPACK_IMPORTED_MODULE_19__["SweetAlertComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_11__["AdminLayoutComponent"],
                _layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_12__["AuthLayoutComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/admin/admin-layout.component */ "./src/app/layouts/admin/admin-layout.component.ts");
/* harmony import */ var _layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/auth/auth-layout.component */ "./src/app/layouts/auth/auth-layout.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var AppRoutes = [{
        path: 'home',
        // redirectTo: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
    }, {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    }, {
        path: '',
        component: _layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__["AuthLayoutComponent"],
        children: [{
                path: 'shared/authentication',
                loadChildren: './shared/authentication/authentication.module#AuthenticationModule'
            }]
    }, {
        path: '',
        component: _layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__["AdminLayoutComponent"],
        children: [{
                path: '',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            }, {
                path: 'wizard',
                loadChildren: './wizard/wizard.module#WizardModule'
            }, {
                path: 'masterdata',
                loadChildren: './masterdata/masterdata.module#MasterdataModule'
            }, {
                path: 'operation',
                loadChildren: './operation/operation.module#OperationModule'
            }, {
                path: 'users',
                loadChildren: './users/users.module#UsersModule'
            }, {
                path: 'components',
                loadChildren: './components/components.module#ComponentsModule'
            }, {
                path: 'forms',
                loadChildren: './forms/forms.module#Forms'
            }
            // ,{
            //     path: 'tables',
            //     loadChildren: './tables/tables.module#TablesModule'
            // },{
            //     path: 'maps',
            //     loadChildren: './maps/maps.module#MapsModule'
            // },{
            //     path: 'charts',
            //     loadChildren: './charts/charts.module#ChartsModule'
            // },{
            //     path: 'calendar',
            //     loadChildren: './calendar/calendar.module#CalendarModule'
            // },{
            //     path: '',
            //     loadChildren: './userpage/user.module#UserModule'
            // }
        ]
    }
    // ,{
    //     path: '',
    //     component: AuthLayoutComponent,
    //     children: [{
    //         path: 'pages',
    //         loadChildren: './pages/pages.module#PagesModule'
    //     }]
    // }
];


/***/ }),

/***/ "./src/app/components/sweetalert/sweetalert.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/sweetalert/sweetalert.component.ts ***!
  \***************************************************************/
/*! exports provided: SweetAlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SweetAlertComponent", function() { return SweetAlertComponent; });
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

var SweetAlertComponent = /** @class */ (function () {
    function SweetAlertComponent() {
    }
    SweetAlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sweetalert-cmp',
            template: __importDefault(__webpack_require__(/*! raw-loader!./sweetalert.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sweetalert/sweetalert.component.html")).default
        })
    ], SweetAlertComponent);
    return SweetAlertComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/layouts/admin/admin-layout.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layouts/admin/admin-layout.component.ts ***!
  \*********************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
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





var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(router, location) {
        this.router = router;
        this.yScrollStack = [];
        this.location = location;
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }).subscribe(function (event) {
            //   this.url = event.url;
            _this.navbar.sidebarClose();
        });
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows) {
            // if we are on windows OS we activate the perfectScrollbar function
            var $main_panel = $('.main-panel');
            $main_panel.perfectScrollbar();
        }
    };
    AdminLayoutComponent.prototype.isMap = function () {
        if (this.location.prepareExternalUrl(this.location.path()) == '#/maps/fullscreen') {
            return true;
        }
        else {
            return false;
        }
    };
    AdminLayoutComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidebar'),
        __metadata("design:type", Object)
    ], AdminLayoutComponent.prototype, "sidebar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]),
        __metadata("design:type", _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"])
    ], AdminLayoutComponent.prototype, "navbar", void 0);
    AdminLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __importDefault(__webpack_require__(/*! raw-loader!./admin-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin/admin-layout.component.html")).default
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/auth/auth-layout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layouts/auth/auth-layout.component.ts ***!
  \*******************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _shared_pagesnavbar_pagesnavbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/pagesnavbar/pagesnavbar.component */ "./src/app/shared/pagesnavbar/pagesnavbar.component.ts");
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





var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent(router, location) {
        this.router = router;
        this.location = location;
    }
    AuthLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }).subscribe(function (event) {
            //   this.url = event.url;
            _this.pagesnavbar.sidebarClose();
        });
    };
    AuthLayoutComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_pagesnavbar_pagesnavbar_component__WEBPACK_IMPORTED_MODULE_4__["PagesnavbarComponent"]),
        __metadata("design:type", _shared_pagesnavbar_pagesnavbar_component__WEBPACK_IMPORTED_MODULE_4__["PagesnavbarComponent"])
    ], AuthLayoutComponent.prototype, "pagesnavbar", void 0);
    AuthLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __importDefault(__webpack_require__(/*! raw-loader!./auth-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth/auth-layout.component.html")).default
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());



/***/ }),

/***/ "./src/app/shared/authentication/service/auth.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/authentication/service/auth.service.ts ***!
  \***************************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var app_shared_services_appstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/appstorage.service */ "./src/app/shared/services/appstorage.service.ts");
/* harmony import */ var ngx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-store */ "./node_modules/ngx-store/__ivy_ngcc__/esm5/ngx-store.js");
/* harmony import */ var app_shared_services_shareddata_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/services/shareddata.service */ "./src/app/shared/services/shareddata.service.ts");
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









var AuthService = /** @class */ (function () {
    function AuthService(http, router, strSrv, shrdSrv) {
        this.http = http;
        this.router = router;
        this.strSrv = strSrv;
        this.shrdSrv = shrdSrv;
        //storage Variables
        this.name = 'Angular 6';
        // it will be stored under ${prefix}viewCounts name
        this.viewCounts = 0;
        // this under name: ${prefix}differentLocalStorageKey
        this.userName = '';
        // it will be stored under ${prefix}itWillBeRemovedAfterBrowserClose in session storage
        this.previousUserNames = [];
        // it will be read from cookie 'user_id' (can be shared with backend) and saved to localStorage and cookies after change
        this.userId = '';
        // it will be stored in a cookie named ${prefix}user_workspaces for 24 hours
        this.userWorkspaces = [];
        //////////////////
        // isAuthorized: boolean = false;
        this.isloginfailed = false;
        this.isUserNameExist = false;
        this.isAuthorized = false;
        this.url = '';
        //Storage
        this.viewCounts++;
        this.userName = 'some name stored in localstorage';
        this.previousUserNames.push(this.userName);
        for (var _i = 0, _a = this.previousUserNames; _i < _a.length; _i++) {
            var userName = _a[_i];
            console.log(userName);
        }
        this.previousUserNames.map(function (userName) { return userName.split('').reverse().join(''); });
    }
    AuthService.prototype.getLoginAcount = function (UserName, Password, isWinUsr) {
        // 
        return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'Users/GetUserLogin/' + UserName + '/' + Password + '/' + isWinUsr);
    };
    AuthService.prototype.loginAD = function (UserName, Password, isWinUsr) {
        // 
        var loginUser = { username: UserName, password: Password };
        return this.http.post('http://api.adauth.local:1035/api/auth/login', loginUser).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    AuthService.prototype.handleError = function (error) {
        // 
        var errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = "Error: " + error.error.message;
        }
        else {
            // server-side error 
            errorMessage = "Error Code: " + error.status + "\nMessage: " + error.message;
        }
        // window.alert(errorMessage);
        // this.isUserNameExist = true;
        // this.isAuthorized = false;
        // this.isloginfailed = true;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(errorMessage);
    };
    AuthService.prototype.goLoginPage = function () {
        //  
        this.router.navigate(['/users/login']);
    };
    AuthService.prototype.goURLPage = function () {
        // 
        this.router.navigate([this.url]).then(function () { window.location.reload(); });
    };
    AuthService.prototype.goUnAuthorisedPage = function () {
        // 
        this.router.navigate(['/users/unauthorised']);
    };
    AuthService.prototype.Isloginfailed = function () {
        //  
        return this.isloginfailed;
    };
    AuthService.prototype.IsUserNameExist = function () {
        //  
        return this.isUserNameExist;
    };
    AuthService.prototype.IsUserAccountStored = function () {
        //  
        var user = this.strSrv.getUserFromStorage();
        if (user != null) {
            this.shrdSrv.setCurrentUser(user);
            return true;
        }
        else if (user == null) {
            return false;
        }
    };
    AuthService.prototype.IsAuthorised = function () {
        var _this = this;
        // 
        var user = this.strSrv.getUserFromStorage();
        if (user != null) {
            this.isAuthorized = false;
            user.Privileges.forEach(function (privilege) {
                // 
                if (_this.url.includes(privilege)) {
                    _this.isAuthorized = true;
                    if (_this.isAuthorized) {
                        return _this.isAuthorized;
                    }
                }
            });
        }
        else if (user == null) {
            this.isAuthorized = false;
        }
        return this.isAuthorized;
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: app_shared_services_appstorage_service__WEBPACK_IMPORTED_MODULE_6__["AppstorageService"] },
        { type: app_shared_services_shareddata_service__WEBPACK_IMPORTED_MODULE_8__["ShareddataService"] }
    ]; };
    __decorate([
        Object(ngx_store__WEBPACK_IMPORTED_MODULE_7__["LocalStorage"])(),
        __metadata("design:type", Number)
    ], AuthService.prototype, "viewCounts", void 0);
    __decorate([
        Object(ngx_store__WEBPACK_IMPORTED_MODULE_7__["LocalStorage"])('differentLocalStorageKey'),
        __metadata("design:type", String)
    ], AuthService.prototype, "userName", void 0);
    __decorate([
        Object(ngx_store__WEBPACK_IMPORTED_MODULE_7__["SessionStorage"])({ key: 'itWillBeRemovedAfterBrowserClose' }),
        __metadata("design:type", Array)
    ], AuthService.prototype, "previousUserNames", void 0);
    __decorate([
        Object(ngx_store__WEBPACK_IMPORTED_MODULE_7__["LocalStorage"])(), Object(ngx_store__WEBPACK_IMPORTED_MODULE_7__["CookieStorage"])({ prefix: '', key: 'user_id' }),
        __metadata("design:type", String)
    ], AuthService.prototype, "userId", void 0);
    __decorate([
        Object(ngx_store__WEBPACK_IMPORTED_MODULE_7__["CookieStorage"])({ key: 'user_workspaces', expires: new Date(new Date().getTime() + 24 * 60 * 60 * 1000) }),
        __metadata("design:type", Object)
    ], AuthService.prototype, "userWorkspaces", void 0);
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            app_shared_services_appstorage_service__WEBPACK_IMPORTED_MODULE_6__["AppstorageService"],
            app_shared_services_shareddata_service__WEBPACK_IMPORTED_MODULE_8__["ShareddataService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/fixedplugin/fixedplugin.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/fixedplugin/fixedplugin.component.ts ***!
  \*************************************************************/
/*! exports provided: FixedPluginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedPluginComponent", function() { return FixedPluginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
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


var misc = {
    navbar_menu_visible: 0,
    active_collapse: true,
    disabled_collapse_init: 0
};
var FixedPluginComponent = /** @class */ (function () {
    function FixedPluginComponent(location) {
        this.background_image = true;
        this.state = true;
        this.location = location;
    }
    FixedPluginComponent.prototype.ngOnInit = function () {
        var $sidebar = $('.sidebar');
        var $sidebar_img_container = $sidebar.find('.sidebar-background');
        var $full_page = $('.full-page');
        var $sidebar_responsive = $('body > .navbar-collapse');
        var window_width = $(window).width();
        if (window_width > 767) {
            if ($('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
                $('.fixed-plugin .dropdown').addClass('open');
            }
        }
        $('.fixed-plugin a').click(function (event) {
            // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
            if ($(this).hasClass('switch-trigger')) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                else if (window.event) {
                    window.event.cancelBubble = true;
                }
            }
        });
        $('.fixed-plugin .badge').click(function () {
            var $full_page_background = $('.full-page-background');
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            var new_color = $(this).data('color');
            if ($sidebar.length != 0) {
                $sidebar.attr('data-color', new_color);
            }
            if ($full_page.length != 0) {
                $full_page.attr('data-color', new_color);
            }
            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.attr('data-color', new_color);
            }
        });
        $('.fixed-plugin .img-holder').click(function () {
            var $full_page_background = $('.full-page-background');
            $(this).parent('li').siblings().removeClass('active');
            $(this).parent('li').addClass('active');
            var new_image = $(this).find("img").attr('src');
            if ($sidebar_img_container.length != 0) {
                $sidebar_img_container.fadeOut('fast', function () {
                    $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
                    $sidebar_img_container.fadeIn('fast');
                });
            }
            if ($full_page_background.length != 0) {
                $full_page_background.fadeOut('fast', function () {
                    $full_page_background.css('background-image', 'url("' + new_image + '")');
                    $full_page_background.fadeIn('fast');
                });
            }
            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.css('background-image', 'url("' + new_image + '")');
            }
        });
    };
    FixedPluginComponent.prototype.onChange = function ($event) {
        var $sidebar = $('.sidebar');
        var $sidebar_img_container = $sidebar.find('.sidebar-background');
        var $full_page = $('.full-page');
        var $full_page_background = $('.full-page-background');
        var $sidebar_responsive = $('body > .navbar-collapse');
        if ($event.currentValue) {
            if ($sidebar_img_container.length != 0) {
                $sidebar_img_container.fadeIn('fast');
                $sidebar.attr('data-image', '#');
            }
            if ($full_page_background.length != 0) {
                $full_page_background.fadeIn('fast');
                $full_page.attr('data-image', '#');
            }
            this.background_image = true;
        }
        else {
            if ($sidebar_img_container.length != 0) {
                $sidebar.removeAttr('data-image');
                $sidebar_img_container.fadeOut('fast');
            }
            if ($full_page_background.length != 0) {
                $full_page.removeAttr('data-image', '#');
                $full_page_background.fadeOut('fast');
            }
            this.background_image = false;
        }
    };
    FixedPluginComponent.prototype.onChange1 = function ($event) {
        var $body = $('body');
        if (misc.sidebar_mini_active == true) {
            $('body').removeClass('sidebar-mini');
            misc.sidebar_mini_active = false;
        }
        else {
            $('.sidebar .collapse').collapse('hide').on('hidden.bs.collapse', function () {
                $(this).css('height', 'auto');
            });
            setTimeout(function () {
                $('body').addClass('sidebar-mini');
                $('.sidebar .collapse').css('height', 'auto');
                misc.sidebar_mini_active = true;
            }, 300);
        }
        // we simulate the window Resize so the charts will get updated in realtime.
        var simulateWindowResize = setInterval(function () {
            window.dispatchEvent(new Event('resize'));
        }, 180);
        // we stop the simulation of Window Resize after the animations are completed
        setTimeout(function () {
            clearInterval(simulateWindowResize);
        }, 1000);
    };
    FixedPluginComponent.prototype.onChange2 = function ($event) {
        var $nav = $('nav.navbar').first();
        if ($nav.hasClass('navbar-fixed')) {
            $nav.removeClass('navbar-fixed').prependTo('.main-panel');
        }
        else {
            $nav.prependTo('.wrapper').addClass('navbar-fixed');
        }
    };
    FixedPluginComponent.prototype.isPages = function () {
        if (this.location.prepareExternalUrl(this.location.path()) == '/pages/login' || this.location.prepareExternalUrl(this.location.path()) == '/pages/register' ||
            this.location.prepareExternalUrl(this.location.path()) == '/pages/lock') {
            return false;
        }
        else {
            return true;
        }
    };
    FixedPluginComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }
    ]; };
    FixedPluginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fixedplugin-cmp',
            template: __importDefault(__webpack_require__(/*! raw-loader!./fixedplugin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/fixedplugin/fixedplugin.component.html")).default
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], FixedPluginComponent);
    return FixedPluginComponent;
}());



/***/ }),

/***/ "./src/app/shared/fixedplugin/fixedplugin.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/fixedplugin/fixedplugin.module.ts ***!
  \**********************************************************/
/*! exports provided: FixedPluginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedPluginModule", function() { return FixedPluginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _fixedplugin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fixedplugin.component */ "./src/app/shared/fixedplugin/fixedplugin.component.ts");
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "./node_modules/jw-bootstrap-switch-ng2/__ivy_ngcc__/fesm5/jw-bootstrap-switch-ng2.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var FixedPluginModule = /** @class */ (function () {
    function FixedPluginModule() {
    }
    FixedPluginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_4__["JwBootstrapSwitchNg2Module"]],
            declarations: [_fixedplugin_component__WEBPACK_IMPORTED_MODULE_3__["FixedPluginComponent"]],
            exports: [_fixedplugin_component__WEBPACK_IMPORTED_MODULE_3__["FixedPluginComponent"]]
        })
    ], FixedPluginModule);
    return FixedPluginModule;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'footer-cmp',
            template: __importDefault(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html")).default
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.module.ts":
/*!************************************************!*\
  !*** ./src/app/shared/footer/footer.module.ts ***!
  \************************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.component */ "./src/app/shared/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    FooterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
            exports: [_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]]
        })
    ], FooterModule);
    return FooterModule;
}());



/***/ }),

/***/ "./src/app/shared/models/AssetTrackingModel.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/models/AssetTrackingModel.ts ***!
  \*****************************************************/
/*! exports provided: AssetTrackingModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetTrackingModel", function() { return AssetTrackingModel; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var AssetTrackingModel = /** @class */ (function () {
    function AssetTrackingModel() {
    }
    return AssetTrackingModel;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.././sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _authentication_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../authentication/service/auth.service */ "./src/app/shared/authentication/service/auth.service.ts");
/* harmony import */ var _services_appstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/appstorage.service */ "./src/app/shared/services/appstorage.service.ts");
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






var misc = {
    navbar_menu_visible: 0,
    active_collapse: true,
    disabled_collapse_init: 0,
};
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element, authSrv, router, strgSrv) {
        this.element = element;
        this.authSrv = authSrv;
        this.router = router;
        this.strgSrv = strgSrv;
        // isLogin: boolean = this.authSrv.isAuthorized;
        this.isLogin = false;
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
        // this.isLogin = this.authSrv.isAuthorized;
        //debugger;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        //   debugger;
        this.isLogin = this.authSrv.IsUserAccountStored();
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        if ($('body').hasClass('sidebar-mini')) {
            misc.sidebar_mini_active = true;
        }
        $('#minimizeSidebar').click(function () {
            var $btn = $(this);
            if (misc.sidebar_mini_active == true) {
                $('body').removeClass('sidebar-mini');
                misc.sidebar_mini_active = false;
            }
            else {
                setTimeout(function () {
                    $('body').addClass('sidebar-mini');
                    misc.sidebar_mini_active = true;
                }, 300);
            }
            // we simulate the window Resize so the charts will get updated in realtime.
            var simulateWindowResize = setInterval(function () {
                window.dispatchEvent(new Event('resize'));
            }, 180);
            // we stop the simulation of Window Resize after the animations are completed
            setTimeout(function () {
                clearInterval(simulateWindowResize);
            }, 1000);
        });
    };
    NavbarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() < 991) {
            return false;
        }
        return true;
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    NavbarComponent.prototype.sidebarToggle = function () {
        if (this.sidebarVisible == false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        for (var i = 0; i < this.listTitles.length; i++) {
            if (this.listTitles[i].type === "link" && this.listTitles[i].path === titlee) {
                return this.listTitles[i].title;
            }
            else if (this.listTitles[i].type === "sub") {
                for (var j = 0; j < this.listTitles[i].children.length; j++) {
                    var subtitle = this.listTitles[i].path + '/' + this.listTitles[i].children[j].path;
                    // console.log(subtitle)
                    // console.log(titlee)
                    if (subtitle === titlee) {
                        return this.listTitles[i].children[j].title;
                    }
                }
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.prototype.getPath = function () {
        // console.log(this.location);
        return this.location.prepareExternalUrl(this.location.path());
    };
    NavbarComponent.prototype.onLogin = function () {
        this.authSrv.goLoginPage();
    };
    NavbarComponent.prototype.onLogout = function () {
        this.strgSrv.clearSomeDataFromStorage();
        this.router.navigate(['/dashboard']).then(function () { window.location.reload(); });
    };
    NavbarComponent.prototype.IsLogin = function () {
        this.isLogin = this.authSrv.IsUserAccountStored();
        return this.authSrv.IsUserAccountStored();
    };
    NavbarComponent.prototype.onLoc = function () {
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _authentication_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_appstorage_service__WEBPACK_IMPORTED_MODULE_5__["AppstorageService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("navbar-cmp"),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "button", void 0);
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'navbar-cmp',
            template: __importDefault(__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html")).default
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _authentication_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_appstorage_service__WEBPACK_IMPORTED_MODULE_5__["AppstorageService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.module.ts":
/*!************************************************!*\
  !*** ./src/app/shared/navbar/navbar.module.ts ***!
  \************************************************/
/*! exports provided: NavbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarModule", function() { return NavbarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var NavbarModule = /** @class */ (function () {
    function NavbarModule() {
    }
    NavbarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]],
            exports: [_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]]
        })
    ], NavbarModule);
    return NavbarModule;
}());



/***/ }),

/***/ "./src/app/shared/pagesnavbar/pagesnavbar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/pagesnavbar/pagesnavbar.component.ts ***!
  \*************************************************************/
/*! exports provided: PagesnavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesnavbarComponent", function() { return PagesnavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
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


var PagesnavbarComponent = /** @class */ (function () {
    function PagesnavbarComponent(location, element) {
        this.element = element;
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    PagesnavbarComponent.prototype.ngOnInit = function () {
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        console.log(this.location.prepareExternalUrl(this.location.path()));
    };
    PagesnavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    PagesnavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    PagesnavbarComponent.prototype.sidebarToggle = function () {
        // var toggleButton = this.toggleButton;
        // var body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible == false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    PagesnavbarComponent.prototype.isLogin = function () {
        if (this.location.prepareExternalUrl(this.location.path()) === '#/pages/login') {
            return true;
        }
        return false;
    };
    PagesnavbarComponent.prototype.isLock = function () {
        if (this.location.prepareExternalUrl(this.location.path()) === '#/pages/lock') {
            return true;
        }
        return false;
    };
    PagesnavbarComponent.prototype.isRegister = function () {
        if (this.location.prepareExternalUrl(this.location.path()) === '#/pages/register') {
            return true;
        }
        return false;
    };
    PagesnavbarComponent.prototype.getPath = function () {
        // console.log(this.location);
        return this.location.prepareExternalUrl(this.location.path());
    };
    PagesnavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("pagesnavbar-cmp"),
        __metadata("design:type", Object)
    ], PagesnavbarComponent.prototype, "button", void 0);
    PagesnavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pagesnavbar-cmp',
            template: __importDefault(__webpack_require__(/*! raw-loader!./pagesnavbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/pagesnavbar/pagesnavbar.component.html")).default
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], PagesnavbarComponent);
    return PagesnavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/pagesnavbar/pagesnavbar.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/pagesnavbar/pagesnavbar.module.ts ***!
  \**********************************************************/
/*! exports provided: PagesnavbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesnavbarModule", function() { return PagesnavbarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _pagesnavbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagesnavbar.component */ "./src/app/shared/pagesnavbar/pagesnavbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var PagesnavbarModule = /** @class */ (function () {
    function PagesnavbarModule() {
    }
    PagesnavbarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_pagesnavbar_component__WEBPACK_IMPORTED_MODULE_2__["PagesnavbarComponent"]],
            exports: [_pagesnavbar_component__WEBPACK_IMPORTED_MODULE_2__["PagesnavbarComponent"]]
        })
    ], PagesnavbarModule);
    return PagesnavbarModule;
}());



/***/ }),

/***/ "./src/app/shared/services/appstorage.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/appstorage.service.ts ***!
  \*******************************************************/
/*! exports provided: AppstorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppstorageService", function() { return AppstorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var ngx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-store */ "./node_modules/ngx-store/__ivy_ngcc__/esm5/ngx-store.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _shareddata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shareddata.service */ "./src/app/shared/services/shareddata.service.ts");
/* harmony import */ var _logs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logs.service */ "./src/app/shared/services/logs.service.ts");
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





var AppstorageService = /** @class */ (function () {
    function AppstorageService(sharddataSrv, logSrv, localStorageService, sessionStorageService, cookiesStorageService, sharedStorageService, http) {
        this.sharddataSrv = sharddataSrv;
        this.logSrv = logSrv;
        this.localStorageService = localStorageService;
        this.sessionStorageService = sessionStorageService;
        this.cookiesStorageService = cookiesStorageService;
        this.sharedStorageService = sharedStorageService;
        this.http = http;
        this.ipAddress = "LocalIP";
        console.log('all cookies:');
        cookiesStorageService.utility.forEach(function (value, key) { return console.log(key + '=', value); });
        //   
        // this.usr = this.getUserFromStorage();
        this.getIPAddress();
    }
    AppstorageService.prototype.getIPAddress = function () {
        var _this = this;
        this.http.get("http://api.ipify.org/?format=json").subscribe(function (res) {
            //   
            _this.ipAddress = res.ip;
        });
    };
    // body;
    AppstorageService.prototype.saveObjectToStorage = function (usr, array) {
        debugger;
        console.log(this.ipAddress);
        usr.IP_Address = this.ipAddress;
        this.clearSomeDataFromStorage();
        this.localStorageService.set('usrObject', usr);
        this.sessionStorageService.set('someArray', array);
        var user = this.localStorageService.get('usrObject');
        if (usr != null) {
            this.logSrv.sendUserLog("User Account: " + usr.usrAccountName + " has Logged in Successfully ").subscribe(function (res) {
            });
        }
        this.sharddataSrv.setCurrentUser(usr);
        return user;
    };
    AppstorageService.prototype.getUserFromStorage = function () {
        // 
        return this.localStorageService.get('usrObject');
    };
    AppstorageService.prototype.clearSomeDataFromStorage = function () {
        var usr = this.localStorageService.get('usrObject');
        if (usr != null) {
            this.logSrv.sendUserLog("User Account: " + usr.usrAccountName + "  has Logged out Successfully ").subscribe(function (res) {
            });
        }
        this.localStorageService.clear('decorators'); // removes only variables created by decorating functions
        this.localStorageService.clear('prefix'); // removes variables starting with set prefix (including decorators)
        this.sessionStorageService.clear('all'); // removes all session storage data
        // console.log(this.getUserFromStorage());
        // 
    };
    AppstorageService.ctorParameters = function () { return [
        { type: _shareddata_service__WEBPACK_IMPORTED_MODULE_3__["ShareddataService"] },
        { type: _logs_service__WEBPACK_IMPORTED_MODULE_4__["LogsService"] },
        { type: ngx_store__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"] },
        { type: ngx_store__WEBPACK_IMPORTED_MODULE_1__["SessionStorageService"] },
        { type: ngx_store__WEBPACK_IMPORTED_MODULE_1__["CookiesStorageService"] },
        { type: ngx_store__WEBPACK_IMPORTED_MODULE_1__["SharedStorageService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AppstorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shareddata_service__WEBPACK_IMPORTED_MODULE_3__["ShareddataService"],
            _logs_service__WEBPACK_IMPORTED_MODULE_4__["LogsService"],
            ngx_store__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"],
            ngx_store__WEBPACK_IMPORTED_MODULE_1__["SessionStorageService"],
            ngx_store__WEBPACK_IMPORTED_MODULE_1__["CookiesStorageService"],
            ngx_store__WEBPACK_IMPORTED_MODULE_1__["SharedStorageService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AppstorageService);
    return AppstorageService;
}());



/***/ }),

/***/ "./src/app/shared/services/logs.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/logs.service.ts ***!
  \*************************************************/
/*! exports provided: LogsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogsService", function() { return LogsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _models_AssetTrackingModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/AssetTrackingModel */ "./src/app/shared/models/AssetTrackingModel.ts");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _shareddata_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shareddata.service */ "./src/app/shared/services/shareddata.service.ts");
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





var LogsService = /** @class */ (function () {
    //   EmpImg: "../../assets/files/profileImg/default-face.jpg",
    //   usrFullName: 'User Full Name',
    //   usrAccountName: 'User Name',
    //   userRole: 'Role'
    // }
    function LogsService(http, shrdSrv) {
        this.http = http;
        this.shrdSrv = shrdSrv;
        this.usr = {};
    }
    LogsService.prototype.sendAssetTrackingLog = function (ast, from, to) {
        var _this = this;
        var assetTracking = new _models_AssetTrackingModel__WEBPACK_IMPORTED_MODULE_1__["AssetTrackingModel"]();
        this.shrdSrv.getCurrentUser().subscribe(function (res) {
            _this.usr = res;
        });
        console.log('User: ', this.usr);
        debugger;
        assetTracking.From = from;
        assetTracking.To = to;
        assetTracking.astId = ast.astId;
        assetTracking.usrId = this.usr.usrId;
        return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'AssetTrackings/AssetTrackings', assetTracking);
    };
    LogsService.prototype.sendUserLog = function (action) {
        var body;
        this.shrdSrv.getCurrentUser().subscribe(function (usr) {
            body = usr;
            if (body == null) {
                body = [{}]; // { usrAccountName: "No User Stored", ActionTime: ""};
            }
        });
        Object.assign(body, { Action: action });
        return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'UserActivitiesLogs/UserActivitiesLogs', body);
    };
    LogsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _shareddata_service__WEBPACK_IMPORTED_MODULE_4__["ShareddataService"] }
    ]; };
    LogsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _shareddata_service__WEBPACK_IMPORTED_MODULE_4__["ShareddataService"]])
    ], LogsService);
    return LogsService;
}());



/***/ }),

/***/ "./src/app/shared/services/shareddata.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/shareddata.service.ts ***!
  \*******************************************************/
/*! exports provided: ShareddataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareddataService", function() { return ShareddataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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


var ShareddataService = /** @class */ (function () {
    function ShareddataService() {
        this.currentUser = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
    }
    ShareddataService.prototype.getCurrentUser = function () {
        return this.currentUser.asObservable();
    };
    ShareddataService.prototype.setCurrentUser = function (newuserdata) {
        this.currentUser.next(newuserdata);
    };
    ShareddataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ShareddataService);
    return ShareddataService;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var app_shared_services_appstorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/services/appstorage.service */ "./src/app/shared/services/appstorage.service.ts");
/* harmony import */ var app_shared_services_shareddata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/shareddata.service */ "./src/app/shared/services/shareddata.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
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




//Menu Items
var ROUTES = [{
        //     path: '/dashboard',
        //     title: 'Dashboard',
        //     type: 'link',
        //     icontype: 'pe-7s-graph'
        // },{
        //     path: '/wizard',
        //     title: 'Wizard',
        //     type: 'link',
        //     icontype: 'pe-7s-magic-wand'
        // },{
        path: '/operation',
        title: 'Operation',
        type: 'sub',
        icontype: 'pe-7s-plugin',
        children: [
            // {path: 'Invoicedashboard', title: 'Dashboard', ab: '*'},
            { path: 'invoicemng', title: 'Invoices General', ab: '*' },
            { path: 'invoicelines', title: 'Invoices Operators', ab: '*' },
            { path: 'assetmng', title: 'Asset Transfer', ab: '*' },
            { path: 'emailmng', title: 'Mng Emails ', ab: '*' }
        ]
    },
    {
        path: '/masterdata',
        title: 'MasterData',
        type: 'sub',
        icontype: 'pe-7s-plugin',
        children: [
            { path: 'assets', title: 'Assets', ab: '*' },
            { path: 'employee', title: 'Employees', ab: '*' },
            { path: 'empdirectory', title: 'Emp Directory', ab: '*' },
            { path: 'department', title: 'Departments', ab: '*' },
            { path: 'branch', title: 'Branch', ab: '*' },
            { path: 'company', title: 'Company', ab: '*' },
            { path: 'position', title: 'Position', ab: '*' },
            { path: 'assettype', title: 'Asset Type', ab: '*' },
            { path: 'genaricemail', title: 'Genaric Email', ab: '*' },
            { path: 'domain', title: 'Domain', ab: '*' },
            { path: 'supplier', title: 'Supplier', ab: '*' },
            { path: 'operator', title: 'Operator', ab: '*' },
            { path: 'opraccnumber', title: 'Operator Acc Number', ab: '*' },
            { path: 'operatorrateplan', title: 'Operator Rate Plan', ab: '*' },
            { path: 'CostCenter', title: 'Cost Center', ab: '*' },
            { path: 'itemscategory', title: 'Items Category', ab: '*' },
        ]
    }, {
        path: '/users',
        title: 'UsersMng',
        type: 'sub',
        icontype: 'pe-7s-plugin',
        children: [
            { path: 'user', title: 'Users List', ab: '*' },
            { path: 'privilege', title: 'Privileges', ab: '*' },
            { path: 'roles', title: 'Roles', ab: '*' },
            { path: 'login', title: 'Login', ab: '*' },
            { path: 'useractionlog', title: 'User Log', ab: '*' }
        ]
    }
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router, strgSrv, shareddataSrv) {
        this.router = router;
        this.strgSrv = strgSrv;
        this.shareddataSrv = shareddataSrv;
        this.defaultEmpImg = "../../assets/files/profileImg/default-face.jpg";
        this.usr = {
            EmpImg: "../../assets/files/profileImg/default-face.jpg",
            usrFullName: 'User Full Name',
            usrAccountName: 'User Name',
            userRole: 'Role'
        };
        //  this.usr = this.strgSrv.getUserFromStorage();
    }
    SidebarComponent.prototype.onProfileEdit = function () {
        // let user = {EmpImg: this.usr.EmpImg, usrFullName: this.usr.usrFullName, usrAccountName:  this.usr.usrAccountName, userRole: this.usr.userRole,
        //     usrEmail: this.usr.usrEmail,  usrBirhtday: this.usr.usrBirhtday,  usrGender: this.usr.usrGender   }
        this.router.navigate(['/users/register'], { queryParams: this.usr });
    };
    SidebarComponent.prototype.showCurrentUser = function () {
        var _this = this;
        this.shareddataSrv.getCurrentUser().subscribe(function (res) {
            _this.usr = res;
        });
    };
    SidebarComponent.prototype.isNotMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    SidebarComponent.prototype.ngOnInit = function () {
        this.showCurrentUser();
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
        isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows) {
            // if we are on windows OS we activate the perfectScrollbar function
            $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar();
            $('html').addClass('perfect-scrollbar-on');
        }
        else {
            $('html').addClass('perfect-scrollbar-off');
        }
    };
    SidebarComponent.prototype.ngAfterViewInit = function () {
        var $sidebarParent = $('.sidebar .nav > li.active .collapse li.active > a').parent().parent().parent();
        var collapseId = $sidebarParent.siblings('a').attr("href");
        $(collapseId).collapse("show");
        this.usr = this.strgSrv.getUserFromStorage();
    };
    SidebarComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: app_shared_services_appstorage_service__WEBPACK_IMPORTED_MODULE_1__["AppstorageService"] },
        { type: app_shared_services_shareddata_service__WEBPACK_IMPORTED_MODULE_2__["ShareddataService"] }
    ]; };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sidebar-cmp',
            template: __importDefault(__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html")).default,
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            app_shared_services_appstorage_service__WEBPACK_IMPORTED_MODULE_1__["AppstorageService"],
            app_shared_services_shareddata_service__WEBPACK_IMPORTED_MODULE_2__["ShareddataService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.module.ts":
/*!*******************************************!*\
  !*** ./src/app/sidebar/sidebar.module.ts ***!
  \*******************************************/
/*! exports provided: SidebarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarModule", function() { return SidebarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var SidebarModule = /** @class */ (function () {
    function SidebarModule() {
    }
    SidebarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]],
            exports: [_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]]
        })
    ], SidebarModule);
    return SidebarModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
    // apiURL: 'http://testapp.gacegy.local/api/',
    apiURL: 'http://assetmngapi.gacegy.local/api/',
    //      apiURL: 'https://localhost:44373/api/',
    authURL: 'http://api.adauth.local:1035/api/auth/login/',
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/*!

=========================================================
* Light Bootstrap Dashboard Pro Angular - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-pro-angular2
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Data\Development Work\GAC\Projects\Intranet - InvDownload\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map