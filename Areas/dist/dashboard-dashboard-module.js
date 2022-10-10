(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid backgroundGAC\">\n        <a routerLink=\"/users/login\" routerLinkActive=\"active\" style=\"color: green;\" >Go to Login Page </a>\n           \n        <div class=\"backgroundGAC\" >\n            <div class=\"col-md-12\">\n                <div class=\"card \">\n                    <div class=\"header\">\n                        <h4 class=\"title\">Assets Management</h4>\n                    </div>\n                    <!-- <div [ngStyle]=\"{background-image: 'url(src\\assets\\img\\full-screen-image-4.jpg)'}\">\n                        <img src=\"../../assets/img/GAC_BackGround.jpg\">\n\n                        <div [ngStyle]=\"{background: 'url( src\\assets\\img\\full-screen-image-4.jpg)'}\"></div>\n\n                    </div> -->\n\n<!-- \n                    <style type=\"text/css\">\n                        .bgimg {\n                            background-image: url('src\\assets\\img\\full-screen-image-4.jpg');\n                        }\n                        </style>\n                        \n                        ...\n                        \n                        <div class=\"bgimg\">\n                            div with background\n                        </div> -->\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _lbd_lbd_chart_lbd_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lbd/lbd-chart/lbd-chart.component */ "./src/app/lbd/lbd-chart/lbd-chart.component.ts");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chartist */ "./node_modules/chartist/dist/chartist.js");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chartist__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


//import * as Chartist from 'app/operation/invoicemng/reports/lbd-chartMonths/node_modules/chartist';

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.tableData = {
            headerRow: ['ID', 'Name', 'Salary', 'Country', 'City'],
            dataRows: [
                ['US', 'USA', '2.920	', '53.23%'],
                ['DE', 'Germany', '1.300', '20.43%'],
                ['AU', 'Australia', '760', '10.35%'],
                ['GB', 'United Kingdom	', '690', '7.87%'],
                ['RO', 'Romania', '600', '5.94%'],
                ['BR', 'Brasil', '550', '4.34%']
            ]
        };
        var mapData = {
            "AU": 760,
            "BR": 550,
            "CA": 120,
            "DE": 1300,
            "FR": 540,
            "GB": 690,
            "GE": 200,
            "IN": 200,
            "RO": 600,
            "RU": 300,
            "US": 2920,
        };
        $('#worldMap').vectorMap({
            map: 'world_mill_en',
            backgroundColor: "transparent",
            zoomOnScroll: false,
            regionStyle: {
                initial: {
                    fill: '#e4e4e4',
                    "fill-opacity": 0.9,
                    stroke: 'none',
                    "stroke-width": 0,
                    "stroke-opacity": 0
                }
            },
            series: {
                regions: [{
                        values: mapData,
                        scale: ["#AAAAAA", "#444444"],
                        normalizeFunction: 'polynomial'
                    }]
            },
        });
        this.emailChartType = _lbd_lbd_chart_lbd_chart_component__WEBPACK_IMPORTED_MODULE_1__["ChartType"].Pie;
        this.emailChartData = {
            labels: ['62%', '32%', '6%'],
            series: [62, 32, 6]
        };
        this.emailChartLegendItems = [
            { title: 'Open', imageClass: 'fa fa-circle text-info' },
            { title: 'Bounce', imageClass: 'fa fa-circle text-danger' },
            { title: 'Unsubscribe', imageClass: 'fa fa-circle text-warning' }
        ];
        this.hoursChartType = _lbd_lbd_chart_lbd_chart_component__WEBPACK_IMPORTED_MODULE_1__["ChartType"].Line;
        this.hoursChartData = {
            labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
            series: [
                [287, 385, 490, 492, 554, 586, 698, 695, 752, 788, 846, 944],
                [67, 152, 143, 240, 287, 335, 435, 437, 539, 542, 544, 647],
                [23, 113, 67, 108, 190, 239, 307, 308, 439, 410, 410, 509]
            ]
        };
        this.hoursChartOptions = {
            low: 0,
            high: 800,
            showArea: false,
            height: '245px',
            axisX: {
                showGrid: false,
            },
            lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_2__["Interpolation"].simple({
                divisor: 3
            }),
            showLine: true,
            showPoint: true,
        };
        this.hoursChartResponsive = [
            ['screen and (max-width: 640px)', {
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        this.hoursChartLegendItems = [
            { title: 'Open', imageClass: 'fa fa-circle text-info' },
            { title: 'Click', imageClass: 'fa fa-circle text-danger' },
            { title: 'Click Second Time', imageClass: 'fa fa-circle text-warning' }
        ];
        this.activityChartType = _lbd_lbd_chart_lbd_chart_component__WEBPACK_IMPORTED_MODULE_1__["ChartType"].Bar;
        this.activityChartData = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
                [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
                [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
            ]
        };
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
        this.activityChartLegendItems = [
            { title: 'Tesla Model S', imageClass: 'fa fa-circle text-info' },
            { title: 'BMW 5 Series', imageClass: 'fa fa-circle text-danger' }
        ];
        this.tasks = [
            { title: 'Sign contract for \'What are conference organizers afraid of?\'', checked: false, check_number: 'checkbox1' },
            { title: 'Lines From Great Russian Literature? Or E-mails From My Boss?', checked: true, check_number: 'checkbox2' },
            {
                title: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
                checked: true, check_number: 'checkbox3'
            },
            { title: 'Create 4 Invisible User Experiences you Never Knew About', checked: false, check_number: 'checkbox4' },
            { title: 'Read \'Following makes Medium better\'', checked: false, check_number: 'checkbox5' },
            { title: 'Unfollow 5 enemies from twitter', checked: false, check_number: 'checkbox6' },
        ];
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dashboard-cmp',
            template: __importDefault(__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _lbd_lbd_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lbd/lbd.module */ "./src/app/lbd/lbd.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.routing */ "./src/app/dashboard/dashboard.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_dashboard_routing__WEBPACK_IMPORTED_MODULE_6__["DashboardRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _lbd_lbd_module__WEBPACK_IMPORTED_MODULE_4__["LbdModule"]
            ],
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.routing.ts":
/*!************************************************!*\
  !*** ./src/app/dashboard/dashboard.routing.ts ***!
  \************************************************/
/*! exports provided: DashboardRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutes", function() { return DashboardRoutes; });
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var DashboardRoutes = [{
        path: '',
        children: [{
                path: 'dashboard',
                component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"]
            }]
    }];


/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map