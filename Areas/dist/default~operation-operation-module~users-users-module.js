(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~operation-operation-module~users-users-module"],{

/***/ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm5/ng-select-ng-select.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm5/ng-select-ng-select.js ***!
  \*************************************************************************************/
/*! exports provided: NgSelectComponent, NgSelectConfig, NgSelectModule, SELECTION_MODEL_FACTORY, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn, ɵo, ɵp, ɵq, ɵr, ɵs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSelectComponent", function() { return NgSelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSelectConfig", function() { return NgSelectConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSelectModule", function() { return NgSelectModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTION_MODEL_FACTORY", function() { return SELECTION_MODEL_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return DefaultSelectionModelFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return DefaultSelectionModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return NgDropdownPanelService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return NgItemLabelDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return NgOptionTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return NgOptgroupTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return NgLabelTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return NgMultiLabelTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return NgHeaderTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return NgFooterTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return NgNotFoundTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return NgTypeToSearchTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return NgLoadingTextTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return NgTagTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return NgLoadingSpinnerTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return NgDropdownPanelComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function() { return NgOptionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵs", function() { return ConsoleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");







/**
 * @fileoverview added by tsickle
 * Generated from: lib/value-utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */



var _c0 = ["content"];
var _c1 = ["scroll"];
var _c2 = ["padding"];
var _c3 = function (a0) { return { searchTerm: a0 }; };
function NgDropdownPanelComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](1, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r388 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r388.headerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c3, ctx_r388.filterValue));
} }
function NgDropdownPanelComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](1, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r392 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r392.footerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c3, ctx_r392.filterValue));
} }
var _c4 = ["*"];
var _c5 = ["searchInput"];
function NgSelectComponent_ng_container_4_div_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    var _r406 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgSelectComponent_ng_container_4_div_1_ng_template_1_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r406); var item_r400 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; var ctx_r404 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r404.unselect(item_r400); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 16);
} if (rf & 2) {
    var item_r400 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    var ctx_r402 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngItemLabel", item_r400.label)("escape", ctx_r402.escapeHTML);
} }
function NgSelectComponent_ng_container_4_div_1_ng_template_3_Template(rf, ctx) { }
var _c6 = function (a0, a1, a2) { return { item: a0, clear: a1, label: a2 }; };
function NgSelectComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NgSelectComponent_ng_container_4_div_1_ng_template_1_Template, 3, 2, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NgSelectComponent_ng_container_4_div_1_ng_template_3_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r400 = ctx.$implicit;
    var _r401 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    var ctx_r399 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ng-value-disabled", item_r400.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r399.labelTemplate || _r401)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](4, _c6, item_r400.value, ctx_r399.clearItem, item_r400.label));
} }
function NgSelectComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NgSelectComponent_ng_container_4_div_1_Template, 4, 8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r393 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r393.selectedItems)("ngForTrackBy", ctx_r393.trackByOption);
} }
function NgSelectComponent_5_ng_template_0_Template(rf, ctx) { }
var _c7 = function (a0, a1) { return { items: a0, clear: a1 }; };
function NgSelectComponent_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NgSelectComponent_5_ng_template_0_Template, 0, 0, "ng-template", 14);
} if (rf & 2) {
    var ctx_r394 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r394.multiLabelTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c7, ctx_r394.selectedValues, ctx_r394.clearItem));
} }
function NgSelectComponent_ng_container_9_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 19);
} }
function NgSelectComponent_ng_container_9_ng_template_3_Template(rf, ctx) { }
function NgSelectComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NgSelectComponent_ng_container_9_ng_template_1_Template, 1, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NgSelectComponent_ng_container_9_ng_template_3_Template, 0, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var _r409 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    var ctx_r396 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r396.loadingSpinnerTemplate || _r409);
} }
function NgSelectComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r397 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx_r397.clearAllText);
} }
function NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 27);
} if (rf & 2) {
    var item_r417 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    var ctx_r419 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngItemLabel", item_r417.label)("escape", ctx_r419.escapeHTML);
} }
function NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_3_Template(rf, ctx) { }
var _c8 = function (a0, a1, a2, a3) { return { item: a0, item$: a1, index: a2, searchTerm: a3 }; };
function NgSelectComponent_ng_dropdown_panel_13_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r423 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgSelectComponent_ng_dropdown_panel_13_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r423); var item_r417 = ctx.$implicit; var ctx_r422 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r422.toggleItem(item_r417); })("mouseover", function NgSelectComponent_ng_dropdown_panel_13_div_2_Template_div_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r423); var item_r417 = ctx.$implicit; var ctx_r424 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r424.onItemHover(item_r417); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_1_Template, 1, 2, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_3_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r417 = ctx.$implicit;
    var _r418 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    var ctx_r412 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ng-option-disabled", item_r417.disabled)("ng-option-selected", item_r417.selected)("ng-optgroup", item_r417.children)("ng-option", !item_r417.children)("ng-option-child", !!item_r417.parent)("ng-option-marked", item_r417 === ctx_r412.itemsList.markedItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("role", item_r417.children ? "group" : "option")("aria-selected", item_r417.selected)("id", item_r417 == null ? null : item_r417.htmlId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", item_r417.children ? ctx_r412.optgroupTemplate || _r418 : ctx_r412.optionTemplate || _r418)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction4"](17, _c8, item_r417.value, item_r417, item_r417.index, ctx_r412.searchTerm));
} }
function NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r426 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r426.addTagText);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\"", ctx_r426.searchTerm, "\"");
} }
function NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_3_Template(rf, ctx) { }
function NgSelectComponent_ng_dropdown_panel_13_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r429 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseover", function NgSelectComponent_ng_dropdown_panel_13_div_3_Template_div_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r429); var ctx_r428 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r428.itemsList.unmarkItem(); })("click", function NgSelectComponent_ng_dropdown_panel_13_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r429); var ctx_r430 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r430.selectTag(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_1_Template, 4, 2, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_3_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r425 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    var ctx_r413 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ng-option-marked", !ctx_r413.itemsList.markedItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r413.tagTemplate || _r425)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c3, ctx_r413.searchTerm));
} }
function NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r432 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r432.notFoundText);
} }
function NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_3_Template(rf, ctx) { }
function NgSelectComponent_ng_dropdown_panel_13_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_1_Template, 2, 1, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_3_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var _r431 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    var ctx_r414 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r414.notFoundTemplate || _r431)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c3, ctx_r414.searchTerm));
} }
function NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r435 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r435.typeToSearchText);
} }
function NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_3_Template(rf, ctx) { }
function NgSelectComponent_ng_dropdown_panel_13_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_1_Template, 2, 1, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_3_Template, 0, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var _r434 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    var ctx_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r415.typeToSearchTemplate || _r434);
} }
function NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r438 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r438.loadingText);
} }
function NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_3_Template(rf, ctx) { }
function NgSelectComponent_ng_dropdown_panel_13_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_1_Template, 2, 1, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_3_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var _r437 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    var ctx_r416 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r416.loadingTextTemplate || _r437)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c3, ctx_r416.searchTerm));
} }
function NgSelectComponent_ng_dropdown_panel_13_Template(rf, ctx) { if (rf & 1) {
    var _r441 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-dropdown-panel", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("update", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_update_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r441); var ctx_r440 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r440.viewPortItems = $event; })("scroll", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_scroll_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r441); var ctx_r442 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r442.scroll.emit($event); })("scrollToEnd", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_scrollToEnd_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r441); var ctx_r443 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r443.scrollToEnd.emit($event); })("outsideClick", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_outsideClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r441); var ctx_r444 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r444.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NgSelectComponent_ng_dropdown_panel_13_div_2_Template, 4, 22, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_div_3_Template, 4, 6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NgSelectComponent_ng_dropdown_panel_13_ng_container_4_Template, 4, 4, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, NgSelectComponent_ng_dropdown_panel_13_ng_container_5_Template, 4, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, NgSelectComponent_ng_dropdown_panel_13_ng_container_6_Template, 4, 4, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r398 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ng-select-multiple", ctx_r398.multiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("virtualScroll", ctx_r398.virtualScroll)("bufferAmount", ctx_r398.bufferAmount)("appendTo", ctx_r398.appendTo)("position", ctx_r398.dropdownPosition)("headerTemplate", ctx_r398.headerTemplate)("footerTemplate", ctx_r398.footerTemplate)("filterValue", ctx_r398.searchTerm)("items", ctx_r398.itemsList.filteredItems)("markedItem", ctx_r398.itemsList.markedItem)("ngClass", ctx_r398.appendTo ? ctx_r398.classes : null)("id", ctx_r398.dropdownId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r398.viewPortItems)("ngForTrackBy", ctx_r398.trackByOption);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r398.showAddTag);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r398.showNoItemsFound());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r398.showTypeToSearch());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r398.loading && ctx_r398.itemsList.filteredItems.length === 0);
} }
var unescapedHTMLExp = /[&<>"']/g;
/** @type {?} */
var hasUnescapedHTMLExp = RegExp(unescapedHTMLExp.source);
/** @type {?} */
var htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&#39;'
};
/**
 * @param {?} string
 * @return {?}
 */
function escapeHTML(string) {
    return (string && hasUnescapedHTMLExp.test(string)) ?
        string.replace(unescapedHTMLExp, (/**
         * @param {?} chr
         * @return {?}
         */
        function (chr) { return htmlEscapes[chr]; })) :
        string;
}
/**
 * @param {?} value
 * @return {?}
 */
function isDefined(value) {
    return value !== undefined && value !== null;
}
/**
 * @param {?} value
 * @return {?}
 */
function isObject(value) {
    return typeof value === 'object' && isDefined(value);
}
/**
 * @param {?} value
 * @return {?}
 */
function isPromise(value) {
    return value instanceof Promise;
}
/**
 * @param {?} value
 * @return {?}
 */
function isFunction(value) {
    return value instanceof Function;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-templates.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgItemLabelDirective = /** @class */ (function () {
    function NgItemLabelDirective(element) {
        this.element = element;
        this.escape = true;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    NgItemLabelDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.element.nativeElement.innerHTML = this.escape ?
            escapeHTML(this.ngItemLabel) :
            this.ngItemLabel;
    };
    /** @nocollapse */
    NgItemLabelDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    NgItemLabelDirective.propDecorators = {
        ngItemLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        escape: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
NgItemLabelDirective.ɵfac = function NgItemLabelDirective_Factory(t) { return new (t || NgItemLabelDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
NgItemLabelDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NgItemLabelDirective, selectors: [["", "ngItemLabel", ""]], inputs: { escape: "escape", ngItemLabel: "ngItemLabel" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgItemLabelDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: '[ngItemLabel]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]; }, { escape: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], ngItemLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
    return NgItemLabelDirective;
}());
if (false) {}
var NgOptionTemplateDirective = /** @class */ (function () {
    function NgOptionTemplateDirective(template) {
        this.template = template;
    }
    /** @nocollapse */
    NgOptionTemplateDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }
    ]; };
NgOptionTemplateDirective.ɵfac = function NgOptionTemplateDirective_Factory(t) { return new (t || NgOptionTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])); };
NgOptionTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NgOptionTemplateDirective, selectors: [["", "ng-option-tmp", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgOptionTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: '[ng-option-tmp]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }]; }, null); })();
    return NgOptionTemplateDirective;
}());
if (false) {}
var NgOptgroupTemplateDirective = /** @class */ (function () {
    function NgOptgroupTemplateDirective(template) {
        this.template = template;
    }
    /** @nocollapse */
    NgOptgroupTemplateDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }
    ]; };
NgOptgroupTemplateDirective.ɵfac = function NgOptgroupTemplateDirective_Factory(t) { return new (t || NgOptgroupTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])); };
NgOptgroupTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NgOptgroupTemplateDirective, selectors: [["", "ng-optgroup-tmp", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgOptgroupTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: '[ng-optgroup-tmp]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }]; }, null); })();
    return NgOptgroupTemplateDirective;
}());
if (false) {}
var NgLabelTemplateDirective = /** @class */ (function () {
    function NgLabelTemplateDirective(template) {
        this.template = template;
    }
    /** @nocollapse */
    NgLabelTemplateDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }
    ]; };
NgLabelTemplateDirective.ɵfac = function NgLabelTemplateDirective_Factory(t) { return new (t || NgLabelTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])); };
NgLabelTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NgLabelTemplateDirective, selectors: [["", "ng-label-tmp", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgLabelTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: '[ng-label-tmp]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }]; }, null); })();
    return NgLabelTemplateDirective;
}());
if (false) {}
var NgMultiLabelTemplateDirective = /** @class */ (function () {
    function NgMultiLabelTemplateDirective(template) {
        this.template = template;
    }
    /** @nocollapse */
    NgMultiLabelTemplateDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }
    ]; };
NgMultiLabelTemplateDirective.ɵfac = function NgMultiLabelTemplateDirective_Factory(t) { return new (t || NgMultiLabelTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])); };
NgMultiLabelTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NgMultiLabelTemplateDirective, selectors: [["", "ng-multi-label-tmp", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgMultiLabelTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: '[ng-multi-label-tmp]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }]; }, null); })();
    return NgMultiLabelTemplateDirective;
}());
if (false) {}
var NgHeaderTemplateDirective = /** @class */ (function () {
    function NgHeaderTemplateDirective(template) {
        this.template = template;
    }
    /** @nocollapse */
    NgHeaderTemplateDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }
    ]; };
NgHeaderTemplateDirective.ɵfac = function NgHeaderTemplateDirective_Factory(t) { return new (t || NgHeaderTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])); };
NgHeaderTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NgHeaderTemplateDirective, selectors: [["", "ng-header-tmp", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgHeaderTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: '[ng-header-tmp]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }]; }, null); })();
    return NgHeaderTemplateDirective;
}());
if (false) {}
var NgFooterTemplateDirective = /** @class */ (function () {
    function NgFooterTemplateDirective(template) {
        this.template = template;
    }
    /** @nocollapse */
    NgFooterTemplateDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }
    ]; };
NgFooterTemplateDirective.ɵfac = function NgFooterTemplateDirective_Factory(t) { return new (t || NgFooterTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])); };
NgFooterTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NgFooterTemplateDirective, selectors: [["", "ng-footer-tmp", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgFooterTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: '[ng-footer-tmp]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }]; }, null); })();
    return NgFooterTemplateDirective;
}());
if (false) {}
var NgNotFoundTemplateDirective = /** @class */ (function () {
    function NgNotFoundTemplateDirective(template) {
        this.template = template;
    }
    /** @nocollapse */
    NgNotFoundTemplateDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }
    ]; };
NgNotFoundTemplateDirective.ɵfac = function NgNotFoundTemplateDirective_Factory(t) { return new (t || NgNotFoundTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])); };
NgNotFoundTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NgNotFoundTemplateDirective, selectors: [["", "ng-notfound-tmp", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgNotFoundTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: '[ng-notfound-tmp]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }]; }, null); })();
    return NgNotFoundTemplateDirective;
}());
if (false) {}
var NgTypeToSearchTemplateDirective = /** @class */ (function () {
    function NgTypeToSearchTemplateDirective(template) {
        this.template = template;
    }
    /** @nocollapse */
    NgTypeToSearchTemplateDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }
    ]; };
NgTypeToSearchTemplateDirective.ɵfac = function NgTypeToSearchTemplateDirective_Factory(t) { return new (t || NgTypeToSearchTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])); };
NgTypeToSearchTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NgTypeToSearchTemplateDirective, selectors: [["", "ng-typetosearch-tmp", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgTypeToSearchTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: '[ng-typetosearch-tmp]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }]; }, null); })();
    return NgTypeToSearchTemplateDirective;
}());
if (false) {}
var NgLoadingTextTemplateDirective = /** @class */ (function () {
    function NgLoadingTextTemplateDirective(template) {
        this.template = template;
    }
    /** @nocollapse */
    NgLoadingTextTemplateDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }
    ]; };
NgLoadingTextTemplateDirective.ɵfac = function NgLoadingTextTemplateDirective_Factory(t) { return new (t || NgLoadingTextTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])); };
NgLoadingTextTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NgLoadingTextTemplateDirective, selectors: [["", "ng-loadingtext-tmp", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgLoadingTextTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: '[ng-loadingtext-tmp]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }]; }, null); })();
    return NgLoadingTextTemplateDirective;
}());
if (false) {}
var NgTagTemplateDirective = /** @class */ (function () {
    function NgTagTemplateDirective(template) {
        this.template = template;
    }
    /** @nocollapse */
    NgTagTemplateDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }
    ]; };
NgTagTemplateDirective.ɵfac = function NgTagTemplateDirective_Factory(t) { return new (t || NgTagTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])); };
NgTagTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NgTagTemplateDirective, selectors: [["", "ng-tag-tmp", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgTagTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: '[ng-tag-tmp]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }]; }, null); })();
    return NgTagTemplateDirective;
}());
if (false) {}
var NgLoadingSpinnerTemplateDirective = /** @class */ (function () {
    function NgLoadingSpinnerTemplateDirective(template) {
        this.template = template;
    }
    /** @nocollapse */
    NgLoadingSpinnerTemplateDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }
    ]; };
NgLoadingSpinnerTemplateDirective.ɵfac = function NgLoadingSpinnerTemplateDirective_Factory(t) { return new (t || NgLoadingSpinnerTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])); };
NgLoadingSpinnerTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NgLoadingSpinnerTemplateDirective, selectors: [["", "ng-loadingspinner-tmp", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgLoadingSpinnerTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: '[ng-loadingspinner-tmp]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }]; }, null); })();
    return NgLoadingSpinnerTemplateDirective;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/console.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ConsoleService = /** @class */ (function () {
    function ConsoleService() {
    }
    /**
     * @param {?} message
     * @return {?}
     */
    ConsoleService.prototype.warn = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        console.warn(message);
    };
    /** @nocollapse */ ConsoleService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function ConsoleService_Factory() { return new ConsoleService(); }, token: ConsoleService, providedIn: "root" });
ConsoleService.ɵfac = function ConsoleService_Factory(t) { return new (t || ConsoleService)(); };
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ConsoleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();
    return ConsoleService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/id.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function newId() {
    // First character is an 'a', it's good practice to tag id to begin with a letter
    return 'axxxxxxxxxxx'.replace(/[x]/g, (/**
     * @param {?} _
     * @return {?}
     */
    function (_) {
        // tslint:disable-next-line:no-bitwise
        /** @type {?} */
        var val = Math.random() * 16 | 0;
        return val.toString(16);
    }));
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/search-helper.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var diacritics = {
    '\u24B6': 'A',
    '\uFF21': 'A',
    '\u00C0': 'A',
    '\u00C1': 'A',
    '\u00C2': 'A',
    '\u1EA6': 'A',
    '\u1EA4': 'A',
    '\u1EAA': 'A',
    '\u1EA8': 'A',
    '\u00C3': 'A',
    '\u0100': 'A',
    '\u0102': 'A',
    '\u1EB0': 'A',
    '\u1EAE': 'A',
    '\u1EB4': 'A',
    '\u1EB2': 'A',
    '\u0226': 'A',
    '\u01E0': 'A',
    '\u00C4': 'A',
    '\u01DE': 'A',
    '\u1EA2': 'A',
    '\u00C5': 'A',
    '\u01FA': 'A',
    '\u01CD': 'A',
    '\u0200': 'A',
    '\u0202': 'A',
    '\u1EA0': 'A',
    '\u1EAC': 'A',
    '\u1EB6': 'A',
    '\u1E00': 'A',
    '\u0104': 'A',
    '\u023A': 'A',
    '\u2C6F': 'A',
    '\uA732': 'AA',
    '\u00C6': 'AE',
    '\u01FC': 'AE',
    '\u01E2': 'AE',
    '\uA734': 'AO',
    '\uA736': 'AU',
    '\uA738': 'AV',
    '\uA73A': 'AV',
    '\uA73C': 'AY',
    '\u24B7': 'B',
    '\uFF22': 'B',
    '\u1E02': 'B',
    '\u1E04': 'B',
    '\u1E06': 'B',
    '\u0243': 'B',
    '\u0182': 'B',
    '\u0181': 'B',
    '\u24B8': 'C',
    '\uFF23': 'C',
    '\u0106': 'C',
    '\u0108': 'C',
    '\u010A': 'C',
    '\u010C': 'C',
    '\u00C7': 'C',
    '\u1E08': 'C',
    '\u0187': 'C',
    '\u023B': 'C',
    '\uA73E': 'C',
    '\u24B9': 'D',
    '\uFF24': 'D',
    '\u1E0A': 'D',
    '\u010E': 'D',
    '\u1E0C': 'D',
    '\u1E10': 'D',
    '\u1E12': 'D',
    '\u1E0E': 'D',
    '\u0110': 'D',
    '\u018B': 'D',
    '\u018A': 'D',
    '\u0189': 'D',
    '\uA779': 'D',
    '\u01F1': 'DZ',
    '\u01C4': 'DZ',
    '\u01F2': 'Dz',
    '\u01C5': 'Dz',
    '\u24BA': 'E',
    '\uFF25': 'E',
    '\u00C8': 'E',
    '\u00C9': 'E',
    '\u00CA': 'E',
    '\u1EC0': 'E',
    '\u1EBE': 'E',
    '\u1EC4': 'E',
    '\u1EC2': 'E',
    '\u1EBC': 'E',
    '\u0112': 'E',
    '\u1E14': 'E',
    '\u1E16': 'E',
    '\u0114': 'E',
    '\u0116': 'E',
    '\u00CB': 'E',
    '\u1EBA': 'E',
    '\u011A': 'E',
    '\u0204': 'E',
    '\u0206': 'E',
    '\u1EB8': 'E',
    '\u1EC6': 'E',
    '\u0228': 'E',
    '\u1E1C': 'E',
    '\u0118': 'E',
    '\u1E18': 'E',
    '\u1E1A': 'E',
    '\u0190': 'E',
    '\u018E': 'E',
    '\u24BB': 'F',
    '\uFF26': 'F',
    '\u1E1E': 'F',
    '\u0191': 'F',
    '\uA77B': 'F',
    '\u24BC': 'G',
    '\uFF27': 'G',
    '\u01F4': 'G',
    '\u011C': 'G',
    '\u1E20': 'G',
    '\u011E': 'G',
    '\u0120': 'G',
    '\u01E6': 'G',
    '\u0122': 'G',
    '\u01E4': 'G',
    '\u0193': 'G',
    '\uA7A0': 'G',
    '\uA77D': 'G',
    '\uA77E': 'G',
    '\u24BD': 'H',
    '\uFF28': 'H',
    '\u0124': 'H',
    '\u1E22': 'H',
    '\u1E26': 'H',
    '\u021E': 'H',
    '\u1E24': 'H',
    '\u1E28': 'H',
    '\u1E2A': 'H',
    '\u0126': 'H',
    '\u2C67': 'H',
    '\u2C75': 'H',
    '\uA78D': 'H',
    '\u24BE': 'I',
    '\uFF29': 'I',
    '\u00CC': 'I',
    '\u00CD': 'I',
    '\u00CE': 'I',
    '\u0128': 'I',
    '\u012A': 'I',
    '\u012C': 'I',
    '\u0130': 'I',
    '\u00CF': 'I',
    '\u1E2E': 'I',
    '\u1EC8': 'I',
    '\u01CF': 'I',
    '\u0208': 'I',
    '\u020A': 'I',
    '\u1ECA': 'I',
    '\u012E': 'I',
    '\u1E2C': 'I',
    '\u0197': 'I',
    '\u24BF': 'J',
    '\uFF2A': 'J',
    '\u0134': 'J',
    '\u0248': 'J',
    '\u24C0': 'K',
    '\uFF2B': 'K',
    '\u1E30': 'K',
    '\u01E8': 'K',
    '\u1E32': 'K',
    '\u0136': 'K',
    '\u1E34': 'K',
    '\u0198': 'K',
    '\u2C69': 'K',
    '\uA740': 'K',
    '\uA742': 'K',
    '\uA744': 'K',
    '\uA7A2': 'K',
    '\u24C1': 'L',
    '\uFF2C': 'L',
    '\u013F': 'L',
    '\u0139': 'L',
    '\u013D': 'L',
    '\u1E36': 'L',
    '\u1E38': 'L',
    '\u013B': 'L',
    '\u1E3C': 'L',
    '\u1E3A': 'L',
    '\u0141': 'L',
    '\u023D': 'L',
    '\u2C62': 'L',
    '\u2C60': 'L',
    '\uA748': 'L',
    '\uA746': 'L',
    '\uA780': 'L',
    '\u01C7': 'LJ',
    '\u01C8': 'Lj',
    '\u24C2': 'M',
    '\uFF2D': 'M',
    '\u1E3E': 'M',
    '\u1E40': 'M',
    '\u1E42': 'M',
    '\u2C6E': 'M',
    '\u019C': 'M',
    '\u24C3': 'N',
    '\uFF2E': 'N',
    '\u01F8': 'N',
    '\u0143': 'N',
    '\u00D1': 'N',
    '\u1E44': 'N',
    '\u0147': 'N',
    '\u1E46': 'N',
    '\u0145': 'N',
    '\u1E4A': 'N',
    '\u1E48': 'N',
    '\u0220': 'N',
    '\u019D': 'N',
    '\uA790': 'N',
    '\uA7A4': 'N',
    '\u01CA': 'NJ',
    '\u01CB': 'Nj',
    '\u24C4': 'O',
    '\uFF2F': 'O',
    '\u00D2': 'O',
    '\u00D3': 'O',
    '\u00D4': 'O',
    '\u1ED2': 'O',
    '\u1ED0': 'O',
    '\u1ED6': 'O',
    '\u1ED4': 'O',
    '\u00D5': 'O',
    '\u1E4C': 'O',
    '\u022C': 'O',
    '\u1E4E': 'O',
    '\u014C': 'O',
    '\u1E50': 'O',
    '\u1E52': 'O',
    '\u014E': 'O',
    '\u022E': 'O',
    '\u0230': 'O',
    '\u00D6': 'O',
    '\u022A': 'O',
    '\u1ECE': 'O',
    '\u0150': 'O',
    '\u01D1': 'O',
    '\u020C': 'O',
    '\u020E': 'O',
    '\u01A0': 'O',
    '\u1EDC': 'O',
    '\u1EDA': 'O',
    '\u1EE0': 'O',
    '\u1EDE': 'O',
    '\u1EE2': 'O',
    '\u1ECC': 'O',
    '\u1ED8': 'O',
    '\u01EA': 'O',
    '\u01EC': 'O',
    '\u00D8': 'O',
    '\u01FE': 'O',
    '\u0186': 'O',
    '\u019F': 'O',
    '\uA74A': 'O',
    '\uA74C': 'O',
    '\u01A2': 'OI',
    '\uA74E': 'OO',
    '\u0222': 'OU',
    '\u24C5': 'P',
    '\uFF30': 'P',
    '\u1E54': 'P',
    '\u1E56': 'P',
    '\u01A4': 'P',
    '\u2C63': 'P',
    '\uA750': 'P',
    '\uA752': 'P',
    '\uA754': 'P',
    '\u24C6': 'Q',
    '\uFF31': 'Q',
    '\uA756': 'Q',
    '\uA758': 'Q',
    '\u024A': 'Q',
    '\u24C7': 'R',
    '\uFF32': 'R',
    '\u0154': 'R',
    '\u1E58': 'R',
    '\u0158': 'R',
    '\u0210': 'R',
    '\u0212': 'R',
    '\u1E5A': 'R',
    '\u1E5C': 'R',
    '\u0156': 'R',
    '\u1E5E': 'R',
    '\u024C': 'R',
    '\u2C64': 'R',
    '\uA75A': 'R',
    '\uA7A6': 'R',
    '\uA782': 'R',
    '\u24C8': 'S',
    '\uFF33': 'S',
    '\u1E9E': 'S',
    '\u015A': 'S',
    '\u1E64': 'S',
    '\u015C': 'S',
    '\u1E60': 'S',
    '\u0160': 'S',
    '\u1E66': 'S',
    '\u1E62': 'S',
    '\u1E68': 'S',
    '\u0218': 'S',
    '\u015E': 'S',
    '\u2C7E': 'S',
    '\uA7A8': 'S',
    '\uA784': 'S',
    '\u24C9': 'T',
    '\uFF34': 'T',
    '\u1E6A': 'T',
    '\u0164': 'T',
    '\u1E6C': 'T',
    '\u021A': 'T',
    '\u0162': 'T',
    '\u1E70': 'T',
    '\u1E6E': 'T',
    '\u0166': 'T',
    '\u01AC': 'T',
    '\u01AE': 'T',
    '\u023E': 'T',
    '\uA786': 'T',
    '\uA728': 'TZ',
    '\u24CA': 'U',
    '\uFF35': 'U',
    '\u00D9': 'U',
    '\u00DA': 'U',
    '\u00DB': 'U',
    '\u0168': 'U',
    '\u1E78': 'U',
    '\u016A': 'U',
    '\u1E7A': 'U',
    '\u016C': 'U',
    '\u00DC': 'U',
    '\u01DB': 'U',
    '\u01D7': 'U',
    '\u01D5': 'U',
    '\u01D9': 'U',
    '\u1EE6': 'U',
    '\u016E': 'U',
    '\u0170': 'U',
    '\u01D3': 'U',
    '\u0214': 'U',
    '\u0216': 'U',
    '\u01AF': 'U',
    '\u1EEA': 'U',
    '\u1EE8': 'U',
    '\u1EEE': 'U',
    '\u1EEC': 'U',
    '\u1EF0': 'U',
    '\u1EE4': 'U',
    '\u1E72': 'U',
    '\u0172': 'U',
    '\u1E76': 'U',
    '\u1E74': 'U',
    '\u0244': 'U',
    '\u24CB': 'V',
    '\uFF36': 'V',
    '\u1E7C': 'V',
    '\u1E7E': 'V',
    '\u01B2': 'V',
    '\uA75E': 'V',
    '\u0245': 'V',
    '\uA760': 'VY',
    '\u24CC': 'W',
    '\uFF37': 'W',
    '\u1E80': 'W',
    '\u1E82': 'W',
    '\u0174': 'W',
    '\u1E86': 'W',
    '\u1E84': 'W',
    '\u1E88': 'W',
    '\u2C72': 'W',
    '\u24CD': 'X',
    '\uFF38': 'X',
    '\u1E8A': 'X',
    '\u1E8C': 'X',
    '\u24CE': 'Y',
    '\uFF39': 'Y',
    '\u1EF2': 'Y',
    '\u00DD': 'Y',
    '\u0176': 'Y',
    '\u1EF8': 'Y',
    '\u0232': 'Y',
    '\u1E8E': 'Y',
    '\u0178': 'Y',
    '\u1EF6': 'Y',
    '\u1EF4': 'Y',
    '\u01B3': 'Y',
    '\u024E': 'Y',
    '\u1EFE': 'Y',
    '\u24CF': 'Z',
    '\uFF3A': 'Z',
    '\u0179': 'Z',
    '\u1E90': 'Z',
    '\u017B': 'Z',
    '\u017D': 'Z',
    '\u1E92': 'Z',
    '\u1E94': 'Z',
    '\u01B5': 'Z',
    '\u0224': 'Z',
    '\u2C7F': 'Z',
    '\u2C6B': 'Z',
    '\uA762': 'Z',
    '\u24D0': 'a',
    '\uFF41': 'a',
    '\u1E9A': 'a',
    '\u00E0': 'a',
    '\u00E1': 'a',
    '\u00E2': 'a',
    '\u1EA7': 'a',
    '\u1EA5': 'a',
    '\u1EAB': 'a',
    '\u1EA9': 'a',
    '\u00E3': 'a',
    '\u0101': 'a',
    '\u0103': 'a',
    '\u1EB1': 'a',
    '\u1EAF': 'a',
    '\u1EB5': 'a',
    '\u1EB3': 'a',
    '\u0227': 'a',
    '\u01E1': 'a',
    '\u00E4': 'a',
    '\u01DF': 'a',
    '\u1EA3': 'a',
    '\u00E5': 'a',
    '\u01FB': 'a',
    '\u01CE': 'a',
    '\u0201': 'a',
    '\u0203': 'a',
    '\u1EA1': 'a',
    '\u1EAD': 'a',
    '\u1EB7': 'a',
    '\u1E01': 'a',
    '\u0105': 'a',
    '\u2C65': 'a',
    '\u0250': 'a',
    '\uA733': 'aa',
    '\u00E6': 'ae',
    '\u01FD': 'ae',
    '\u01E3': 'ae',
    '\uA735': 'ao',
    '\uA737': 'au',
    '\uA739': 'av',
    '\uA73B': 'av',
    '\uA73D': 'ay',
    '\u24D1': 'b',
    '\uFF42': 'b',
    '\u1E03': 'b',
    '\u1E05': 'b',
    '\u1E07': 'b',
    '\u0180': 'b',
    '\u0183': 'b',
    '\u0253': 'b',
    '\u24D2': 'c',
    '\uFF43': 'c',
    '\u0107': 'c',
    '\u0109': 'c',
    '\u010B': 'c',
    '\u010D': 'c',
    '\u00E7': 'c',
    '\u1E09': 'c',
    '\u0188': 'c',
    '\u023C': 'c',
    '\uA73F': 'c',
    '\u2184': 'c',
    '\u24D3': 'd',
    '\uFF44': 'd',
    '\u1E0B': 'd',
    '\u010F': 'd',
    '\u1E0D': 'd',
    '\u1E11': 'd',
    '\u1E13': 'd',
    '\u1E0F': 'd',
    '\u0111': 'd',
    '\u018C': 'd',
    '\u0256': 'd',
    '\u0257': 'd',
    '\uA77A': 'd',
    '\u01F3': 'dz',
    '\u01C6': 'dz',
    '\u24D4': 'e',
    '\uFF45': 'e',
    '\u00E8': 'e',
    '\u00E9': 'e',
    '\u00EA': 'e',
    '\u1EC1': 'e',
    '\u1EBF': 'e',
    '\u1EC5': 'e',
    '\u1EC3': 'e',
    '\u1EBD': 'e',
    '\u0113': 'e',
    '\u1E15': 'e',
    '\u1E17': 'e',
    '\u0115': 'e',
    '\u0117': 'e',
    '\u00EB': 'e',
    '\u1EBB': 'e',
    '\u011B': 'e',
    '\u0205': 'e',
    '\u0207': 'e',
    '\u1EB9': 'e',
    '\u1EC7': 'e',
    '\u0229': 'e',
    '\u1E1D': 'e',
    '\u0119': 'e',
    '\u1E19': 'e',
    '\u1E1B': 'e',
    '\u0247': 'e',
    '\u025B': 'e',
    '\u01DD': 'e',
    '\u24D5': 'f',
    '\uFF46': 'f',
    '\u1E1F': 'f',
    '\u0192': 'f',
    '\uA77C': 'f',
    '\u24D6': 'g',
    '\uFF47': 'g',
    '\u01F5': 'g',
    '\u011D': 'g',
    '\u1E21': 'g',
    '\u011F': 'g',
    '\u0121': 'g',
    '\u01E7': 'g',
    '\u0123': 'g',
    '\u01E5': 'g',
    '\u0260': 'g',
    '\uA7A1': 'g',
    '\u1D79': 'g',
    '\uA77F': 'g',
    '\u24D7': 'h',
    '\uFF48': 'h',
    '\u0125': 'h',
    '\u1E23': 'h',
    '\u1E27': 'h',
    '\u021F': 'h',
    '\u1E25': 'h',
    '\u1E29': 'h',
    '\u1E2B': 'h',
    '\u1E96': 'h',
    '\u0127': 'h',
    '\u2C68': 'h',
    '\u2C76': 'h',
    '\u0265': 'h',
    '\u0195': 'hv',
    '\u24D8': 'i',
    '\uFF49': 'i',
    '\u00EC': 'i',
    '\u00ED': 'i',
    '\u00EE': 'i',
    '\u0129': 'i',
    '\u012B': 'i',
    '\u012D': 'i',
    '\u00EF': 'i',
    '\u1E2F': 'i',
    '\u1EC9': 'i',
    '\u01D0': 'i',
    '\u0209': 'i',
    '\u020B': 'i',
    '\u1ECB': 'i',
    '\u012F': 'i',
    '\u1E2D': 'i',
    '\u0268': 'i',
    '\u0131': 'i',
    '\u24D9': 'j',
    '\uFF4A': 'j',
    '\u0135': 'j',
    '\u01F0': 'j',
    '\u0249': 'j',
    '\u24DA': 'k',
    '\uFF4B': 'k',
    '\u1E31': 'k',
    '\u01E9': 'k',
    '\u1E33': 'k',
    '\u0137': 'k',
    '\u1E35': 'k',
    '\u0199': 'k',
    '\u2C6A': 'k',
    '\uA741': 'k',
    '\uA743': 'k',
    '\uA745': 'k',
    '\uA7A3': 'k',
    '\u24DB': 'l',
    '\uFF4C': 'l',
    '\u0140': 'l',
    '\u013A': 'l',
    '\u013E': 'l',
    '\u1E37': 'l',
    '\u1E39': 'l',
    '\u013C': 'l',
    '\u1E3D': 'l',
    '\u1E3B': 'l',
    '\u017F': 'l',
    '\u0142': 'l',
    '\u019A': 'l',
    '\u026B': 'l',
    '\u2C61': 'l',
    '\uA749': 'l',
    '\uA781': 'l',
    '\uA747': 'l',
    '\u01C9': 'lj',
    '\u24DC': 'm',
    '\uFF4D': 'm',
    '\u1E3F': 'm',
    '\u1E41': 'm',
    '\u1E43': 'm',
    '\u0271': 'm',
    '\u026F': 'm',
    '\u24DD': 'n',
    '\uFF4E': 'n',
    '\u01F9': 'n',
    '\u0144': 'n',
    '\u00F1': 'n',
    '\u1E45': 'n',
    '\u0148': 'n',
    '\u1E47': 'n',
    '\u0146': 'n',
    '\u1E4B': 'n',
    '\u1E49': 'n',
    '\u019E': 'n',
    '\u0272': 'n',
    '\u0149': 'n',
    '\uA791': 'n',
    '\uA7A5': 'n',
    '\u01CC': 'nj',
    '\u24DE': 'o',
    '\uFF4F': 'o',
    '\u00F2': 'o',
    '\u00F3': 'o',
    '\u00F4': 'o',
    '\u1ED3': 'o',
    '\u1ED1': 'o',
    '\u1ED7': 'o',
    '\u1ED5': 'o',
    '\u00F5': 'o',
    '\u1E4D': 'o',
    '\u022D': 'o',
    '\u1E4F': 'o',
    '\u014D': 'o',
    '\u1E51': 'o',
    '\u1E53': 'o',
    '\u014F': 'o',
    '\u022F': 'o',
    '\u0231': 'o',
    '\u00F6': 'o',
    '\u022B': 'o',
    '\u1ECF': 'o',
    '\u0151': 'o',
    '\u01D2': 'o',
    '\u020D': 'o',
    '\u020F': 'o',
    '\u01A1': 'o',
    '\u1EDD': 'o',
    '\u1EDB': 'o',
    '\u1EE1': 'o',
    '\u1EDF': 'o',
    '\u1EE3': 'o',
    '\u1ECD': 'o',
    '\u1ED9': 'o',
    '\u01EB': 'o',
    '\u01ED': 'o',
    '\u00F8': 'o',
    '\u01FF': 'o',
    '\u0254': 'o',
    '\uA74B': 'o',
    '\uA74D': 'o',
    '\u0275': 'o',
    '\u01A3': 'oi',
    '\u0223': 'ou',
    '\uA74F': 'oo',
    '\u24DF': 'p',
    '\uFF50': 'p',
    '\u1E55': 'p',
    '\u1E57': 'p',
    '\u01A5': 'p',
    '\u1D7D': 'p',
    '\uA751': 'p',
    '\uA753': 'p',
    '\uA755': 'p',
    '\u24E0': 'q',
    '\uFF51': 'q',
    '\u024B': 'q',
    '\uA757': 'q',
    '\uA759': 'q',
    '\u24E1': 'r',
    '\uFF52': 'r',
    '\u0155': 'r',
    '\u1E59': 'r',
    '\u0159': 'r',
    '\u0211': 'r',
    '\u0213': 'r',
    '\u1E5B': 'r',
    '\u1E5D': 'r',
    '\u0157': 'r',
    '\u1E5F': 'r',
    '\u024D': 'r',
    '\u027D': 'r',
    '\uA75B': 'r',
    '\uA7A7': 'r',
    '\uA783': 'r',
    '\u24E2': 's',
    '\uFF53': 's',
    '\u00DF': 's',
    '\u015B': 's',
    '\u1E65': 's',
    '\u015D': 's',
    '\u1E61': 's',
    '\u0161': 's',
    '\u1E67': 's',
    '\u1E63': 's',
    '\u1E69': 's',
    '\u0219': 's',
    '\u015F': 's',
    '\u023F': 's',
    '\uA7A9': 's',
    '\uA785': 's',
    '\u1E9B': 's',
    '\u24E3': 't',
    '\uFF54': 't',
    '\u1E6B': 't',
    '\u1E97': 't',
    '\u0165': 't',
    '\u1E6D': 't',
    '\u021B': 't',
    '\u0163': 't',
    '\u1E71': 't',
    '\u1E6F': 't',
    '\u0167': 't',
    '\u01AD': 't',
    '\u0288': 't',
    '\u2C66': 't',
    '\uA787': 't',
    '\uA729': 'tz',
    '\u24E4': 'u',
    '\uFF55': 'u',
    '\u00F9': 'u',
    '\u00FA': 'u',
    '\u00FB': 'u',
    '\u0169': 'u',
    '\u1E79': 'u',
    '\u016B': 'u',
    '\u1E7B': 'u',
    '\u016D': 'u',
    '\u00FC': 'u',
    '\u01DC': 'u',
    '\u01D8': 'u',
    '\u01D6': 'u',
    '\u01DA': 'u',
    '\u1EE7': 'u',
    '\u016F': 'u',
    '\u0171': 'u',
    '\u01D4': 'u',
    '\u0215': 'u',
    '\u0217': 'u',
    '\u01B0': 'u',
    '\u1EEB': 'u',
    '\u1EE9': 'u',
    '\u1EEF': 'u',
    '\u1EED': 'u',
    '\u1EF1': 'u',
    '\u1EE5': 'u',
    '\u1E73': 'u',
    '\u0173': 'u',
    '\u1E77': 'u',
    '\u1E75': 'u',
    '\u0289': 'u',
    '\u24E5': 'v',
    '\uFF56': 'v',
    '\u1E7D': 'v',
    '\u1E7F': 'v',
    '\u028B': 'v',
    '\uA75F': 'v',
    '\u028C': 'v',
    '\uA761': 'vy',
    '\u24E6': 'w',
    '\uFF57': 'w',
    '\u1E81': 'w',
    '\u1E83': 'w',
    '\u0175': 'w',
    '\u1E87': 'w',
    '\u1E85': 'w',
    '\u1E98': 'w',
    '\u1E89': 'w',
    '\u2C73': 'w',
    '\u24E7': 'x',
    '\uFF58': 'x',
    '\u1E8B': 'x',
    '\u1E8D': 'x',
    '\u24E8': 'y',
    '\uFF59': 'y',
    '\u1EF3': 'y',
    '\u00FD': 'y',
    '\u0177': 'y',
    '\u1EF9': 'y',
    '\u0233': 'y',
    '\u1E8F': 'y',
    '\u00FF': 'y',
    '\u1EF7': 'y',
    '\u1E99': 'y',
    '\u1EF5': 'y',
    '\u01B4': 'y',
    '\u024F': 'y',
    '\u1EFF': 'y',
    '\u24E9': 'z',
    '\uFF5A': 'z',
    '\u017A': 'z',
    '\u1E91': 'z',
    '\u017C': 'z',
    '\u017E': 'z',
    '\u1E93': 'z',
    '\u1E95': 'z',
    '\u01B6': 'z',
    '\u0225': 'z',
    '\u0240': 'z',
    '\u2C6C': 'z',
    '\uA763': 'z',
    '\u0386': '\u0391',
    '\u0388': '\u0395',
    '\u0389': '\u0397',
    '\u038A': '\u0399',
    '\u03AA': '\u0399',
    '\u038C': '\u039F',
    '\u038E': '\u03A5',
    '\u03AB': '\u03A5',
    '\u038F': '\u03A9',
    '\u03AC': '\u03B1',
    '\u03AD': '\u03B5',
    '\u03AE': '\u03B7',
    '\u03AF': '\u03B9',
    '\u03CA': '\u03B9',
    '\u0390': '\u03B9',
    '\u03CC': '\u03BF',
    '\u03CD': '\u03C5',
    '\u03CB': '\u03C5',
    '\u03B0': '\u03C5',
    '\u03C9': '\u03C9',
    '\u03C2': '\u03C3'
};
/**
 * @param {?} text
 * @return {?}
 */
function stripSpecialChars(text) {
    /** @type {?} */
    var match = (/**
     * @param {?} a
     * @return {?}
     */
    function (a) {
        return diacritics[a] || a;
    });
    return text.replace(/[^\u0000-\u007E]/g, match);
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/items-list.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ItemsList = /** @class */ (function () {
    function ItemsList(_ngSelect, _selectionModel) {
        this._ngSelect = _ngSelect;
        this._selectionModel = _selectionModel;
        this._items = [];
        this._filteredItems = [];
        this._markedIndex = -1;
    }
    Object.defineProperty(ItemsList.prototype, "items", {
        get: /**
         * @return {?}
         */
        function () {
            return this._items;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemsList.prototype, "filteredItems", {
        get: /**
         * @return {?}
         */
        function () {
            return this._filteredItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemsList.prototype, "markedIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this._markedIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemsList.prototype, "selectedItems", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selectionModel.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemsList.prototype, "markedItem", {
        get: /**
         * @return {?}
         */
        function () {
            return this._filteredItems[this._markedIndex];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemsList.prototype, "noItemsToSelect", {
        get: /**
         * @return {?}
         */
        function () {
            return this._ngSelect.hideSelected && this._items.length === this.selectedItems.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemsList.prototype, "maxItemsSelected", {
        get: /**
         * @return {?}
         */
        function () {
            return this._ngSelect.multiple && this._ngSelect.maxSelectedItems <= this.selectedItems.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemsList.prototype, "lastSelectedItem", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var i = this.selectedItems.length - 1;
            for (; i >= 0; i--) {
                /** @type {?} */
                var item = this.selectedItems[i];
                if (!item.disabled) {
                    return item;
                }
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} items
     * @return {?}
     */
    ItemsList.prototype.setItems = /**
     * @param {?} items
     * @return {?}
     */
    function (items) {
        var _this = this;
        this._items = items.map((/**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
        function (item, index) { return _this.mapItem(item, index); }));
        if (this._ngSelect.groupBy) {
            this._groups = this._groupBy(this._items, this._ngSelect.groupBy);
            this._items = this._flatten(this._groups);
        }
        else {
            this._groups = new Map();
            this._groups.set(undefined, this._items);
        }
        this._filteredItems = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this._items);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    ItemsList.prototype.select = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (item.selected || this.maxItemsSelected) {
            return;
        }
        /** @type {?} */
        var multiple = this._ngSelect.multiple;
        if (!multiple) {
            this.clearSelected();
        }
        this._selectionModel.select(item, multiple, this._ngSelect.selectableGroupAsModel);
        if (this._ngSelect.hideSelected) {
            this._hideSelected(item);
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    ItemsList.prototype.unselect = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (!item.selected) {
            return;
        }
        this._selectionModel.unselect(item, this._ngSelect.multiple);
        if (this._ngSelect.hideSelected && isDefined(item.index) && this._ngSelect.multiple) {
            this._showSelected(item);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ItemsList.prototype.findItem = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        /** @type {?} */
        var findBy;
        if (this._ngSelect.compareWith) {
            findBy = (/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return _this._ngSelect.compareWith(item.value, value); });
        }
        else if (this._ngSelect.bindValue) {
            findBy = (/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return !item.children && _this.resolveNested(item.value, _this._ngSelect.bindValue) === value; });
        }
        else {
            findBy = (/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.value === value ||
                !item.children && item.label && item.label === _this.resolveNested(value, _this._ngSelect.bindLabel); });
        }
        return this._items.find((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return findBy(item); }));
    };
    /**
     * @param {?} item
     * @return {?}
     */
    ItemsList.prototype.addItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var option = this.mapItem(item, this._items.length);
        this._items.push(option);
        this._filteredItems.push(option);
        return option;
    };
    /**
     * @param {?=} keepDisabled
     * @return {?}
     */
    ItemsList.prototype.clearSelected = /**
     * @param {?=} keepDisabled
     * @return {?}
     */
    function (keepDisabled) {
        if (keepDisabled === void 0) { keepDisabled = false; }
        this._selectionModel.clear(keepDisabled);
        this._items.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            item.selected = keepDisabled && item.selected && item.disabled;
            item.marked = false;
        }));
        if (this._ngSelect.hideSelected) {
            this.resetFilteredItems();
        }
    };
    /**
     * @param {?} term
     * @return {?}
     */
    ItemsList.prototype.findByLabel = /**
     * @param {?} term
     * @return {?}
     */
    function (term) {
        term = stripSpecialChars(term).toLocaleLowerCase();
        return this.filteredItems.find((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var label = stripSpecialChars(item.label).toLocaleLowerCase();
            return label.substr(0, term.length) === term;
        }));
    };
    /**
     * @param {?} term
     * @return {?}
     */
    ItemsList.prototype.filter = /**
     * @param {?} term
     * @return {?}
     */
    function (term) {
        var e_1, _a;
        if (!term) {
            this.resetFilteredItems();
            return;
        }
        this._filteredItems = [];
        term = this._ngSelect.searchFn ? term : stripSpecialChars(term).toLocaleLowerCase();
        /** @type {?} */
        var match = this._ngSelect.searchFn || this._defaultSearchFn;
        /** @type {?} */
        var hideSelected = this._ngSelect.hideSelected;
        var _loop_1 = function (key) {
            var e_2, _a, _b;
            /** @type {?} */
            var matchedItems = [];
            try {
                for (var _c = (e_2 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this_1._groups.get(key))), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var item = _d.value;
                    if (hideSelected && (item.parent && item.parent.selected || item.selected)) {
                        continue;
                    }
                    /** @type {?} */
                    var searchItem = this_1._ngSelect.searchFn ? item.value : item;
                    if (match(term, searchItem)) {
                        matchedItems.push(item);
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_2) throw e_2.error; }
            }
            if (matchedItems.length > 0) {
                var _e = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(matchedItems.slice(-1), 1), last_1 = _e[0];
                if (last_1.parent) {
                    /** @type {?} */
                    var head = this_1._items.find((/**
                     * @param {?} x
                     * @return {?}
                     */
                    function (x) { return x === last_1.parent; }));
                    this_1._filteredItems.push(head);
                }
                (_b = this_1._filteredItems).push.apply(_b, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(matchedItems));
            }
        };
        var this_1 = this;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Array.from(this._groups.keys())), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                _loop_1(key);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @return {?}
     */
    ItemsList.prototype.resetFilteredItems = /**
     * @return {?}
     */
    function () {
        if (this._filteredItems.length === this._items.length) {
            return;
        }
        if (this._ngSelect.hideSelected && this.selectedItems.length > 0) {
            this._filteredItems = this._items.filter((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return !x.selected; }));
        }
        else {
            this._filteredItems = this._items;
        }
    };
    /**
     * @return {?}
     */
    ItemsList.prototype.unmarkItem = /**
     * @return {?}
     */
    function () {
        this._markedIndex = -1;
    };
    /**
     * @return {?}
     */
    ItemsList.prototype.markNextItem = /**
     * @return {?}
     */
    function () {
        this._stepToItem(+1);
    };
    /**
     * @return {?}
     */
    ItemsList.prototype.markPreviousItem = /**
     * @return {?}
     */
    function () {
        this._stepToItem(-1);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    ItemsList.prototype.markItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this._markedIndex = this._filteredItems.indexOf(item);
    };
    /**
     * @param {?=} markDefault
     * @return {?}
     */
    ItemsList.prototype.markSelectedOrDefault = /**
     * @param {?=} markDefault
     * @return {?}
     */
    function (markDefault) {
        if (this._filteredItems.length === 0) {
            return;
        }
        /** @type {?} */
        var lastMarkedIndex = this._getLastMarkedIndex();
        if (lastMarkedIndex > -1) {
            this._markedIndex = lastMarkedIndex;
        }
        else {
            this._markedIndex = markDefault ? this.filteredItems.findIndex((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return !x.disabled; })) : -1;
        }
    };
    /**
     * @param {?} option
     * @param {?} key
     * @return {?}
     */
    ItemsList.prototype.resolveNested = /**
     * @param {?} option
     * @param {?} key
     * @return {?}
     */
    function (option, key) {
        if (!isObject(option)) {
            return option;
        }
        if (key.indexOf('.') === -1) {
            return option[key];
        }
        else {
            /** @type {?} */
            var keys = key.split('.');
            /** @type {?} */
            var value = option;
            for (var i = 0, len = keys.length; i < len; ++i) {
                if (value == null) {
                    return null;
                }
                value = value[keys[i]];
            }
            return value;
        }
    };
    /**
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    ItemsList.prototype.mapItem = /**
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    function (item, index) {
        /** @type {?} */
        var label = isDefined(item.$ngOptionLabel) ? item.$ngOptionLabel : this.resolveNested(item, this._ngSelect.bindLabel);
        /** @type {?} */
        var value = isDefined(item.$ngOptionValue) ? item.$ngOptionValue : item;
        return {
            index: index,
            label: isDefined(label) ? label.toString() : '',
            value: value,
            disabled: item.disabled,
            htmlId: this._ngSelect.dropdownId + "-" + index,
        };
    };
    /**
     * @return {?}
     */
    ItemsList.prototype.mapSelectedItems = /**
     * @return {?}
     */
    function () {
        var e_3, _a;
        var _this = this;
        /** @type {?} */
        var multiple = this._ngSelect.multiple;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.selectedItems), _c = _b.next(); !_c.done; _c = _b.next()) {
                var selected = _c.value;
                /** @type {?} */
                var value = this._ngSelect.bindValue ? this.resolveNested(selected.value, this._ngSelect.bindValue) : selected.value;
                /** @type {?} */
                var item = isDefined(value) ? this.findItem(value) : null;
                this._selectionModel.unselect(selected, multiple);
                this._selectionModel.select(item || selected, multiple, this._ngSelect.selectableGroupAsModel);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        if (this._ngSelect.hideSelected) {
            this._filteredItems = this.filteredItems.filter((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return _this.selectedItems.indexOf(x) === -1; }));
        }
    };
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    ItemsList.prototype._showSelected = /**
     * @private
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var e_4, _a;
        this._filteredItems.push(item);
        if (item.parent) {
            /** @type {?} */
            var parent_1 = item.parent;
            /** @type {?} */
            var parentExists = this._filteredItems.find((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x === parent_1; }));
            if (!parentExists) {
                this._filteredItems.push(parent_1);
            }
        }
        else if (item.children) {
            try {
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(item.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var child = _c.value;
                    child.selected = false;
                    this._filteredItems.push(child);
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_4) throw e_4.error; }
            }
        }
        this._filteredItems = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this._filteredItems.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) { return (a.index - b.index); })));
    };
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    ItemsList.prototype._hideSelected = /**
     * @private
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this._filteredItems = this._filteredItems.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x !== item; }));
        if (item.parent) {
            /** @type {?} */
            var children = item.parent.children;
            if (children.every((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.selected; }))) {
                this._filteredItems = this._filteredItems.filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return x !== item.parent; }));
            }
        }
        else if (item.children) {
            this._filteredItems = this.filteredItems.filter((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.parent !== item; }));
        }
    };
    /**
     * @private
     * @param {?} search
     * @param {?} opt
     * @return {?}
     */
    ItemsList.prototype._defaultSearchFn = /**
     * @private
     * @param {?} search
     * @param {?} opt
     * @return {?}
     */
    function (search, opt) {
        /** @type {?} */
        var label = stripSpecialChars(opt.label).toLocaleLowerCase();
        return label.indexOf(search) > -1;
    };
    /**
     * @private
     * @param {?} steps
     * @return {?}
     */
    ItemsList.prototype._getNextItemIndex = /**
     * @private
     * @param {?} steps
     * @return {?}
     */
    function (steps) {
        if (steps > 0) {
            return (this._markedIndex === this._filteredItems.length - 1) ? 0 : (this._markedIndex + 1);
        }
        return (this._markedIndex <= 0) ? (this._filteredItems.length - 1) : (this._markedIndex - 1);
    };
    /**
     * @private
     * @param {?} steps
     * @return {?}
     */
    ItemsList.prototype._stepToItem = /**
     * @private
     * @param {?} steps
     * @return {?}
     */
    function (steps) {
        if (this._filteredItems.length === 0 || this._filteredItems.every((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.disabled; }))) {
            return;
        }
        this._markedIndex = this._getNextItemIndex(steps);
        if (this.markedItem.disabled) {
            this._stepToItem(steps);
        }
    };
    /**
     * @private
     * @return {?}
     */
    ItemsList.prototype._getLastMarkedIndex = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._ngSelect.hideSelected) {
            return -1;
        }
        if (this._markedIndex > -1 && this.markedItem === undefined) {
            return -1;
        }
        /** @type {?} */
        var selectedIndex = this._filteredItems.indexOf(this.lastSelectedItem);
        if (this.lastSelectedItem && selectedIndex < 0) {
            return -1;
        }
        return Math.max(this.markedIndex, selectedIndex);
    };
    /**
     * @private
     * @param {?} items
     * @param {?} prop
     * @return {?}
     */
    ItemsList.prototype._groupBy = /**
     * @private
     * @param {?} items
     * @param {?} prop
     * @return {?}
     */
    function (items, prop) {
        var e_5, _a, e_6, _b;
        var _this = this;
        /** @type {?} */
        var groups = new Map();
        if (items.length === 0) {
            return groups;
        }
        // Check if items are already grouped by given key.
        if (Array.isArray(items[0].value[(/** @type {?} */ (prop))])) {
            try {
                for (var items_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                    var item = items_1_1.value;
                    /** @type {?} */
                    var children = (item.value[(/** @type {?} */ (prop))] || []).map((/**
                     * @param {?} x
                     * @param {?} index
                     * @return {?}
                     */
                    function (x, index) { return _this.mapItem(x, index); }));
                    groups.set(item, children);
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
                }
                finally { if (e_5) throw e_5.error; }
            }
            return groups;
        }
        /** @type {?} */
        var isFnKey = isFunction(this._ngSelect.groupBy);
        /** @type {?} */
        var keyFn = (/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var key = isFnKey ? ((/** @type {?} */ (prop)))(item.value) : item.value[(/** @type {?} */ (prop))];
            return isDefined(key) ? key : undefined;
        });
        try {
            // Group items by key.
            for (var items_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(items), items_2_1 = items_2.next(); !items_2_1.done; items_2_1 = items_2.next()) {
                var item = items_2_1.value;
                /** @type {?} */
                var key = keyFn(item);
                /** @type {?} */
                var group = groups.get(key);
                if (group) {
                    group.push(item);
                }
                else {
                    groups.set(key, [item]);
                }
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (items_2_1 && !items_2_1.done && (_b = items_2.return)) _b.call(items_2);
            }
            finally { if (e_6) throw e_6.error; }
        }
        return groups;
    };
    /**
     * @private
     * @param {?} groups
     * @return {?}
     */
    ItemsList.prototype._flatten = /**
     * @private
     * @param {?} groups
     * @return {?}
     */
    function (groups) {
        var e_7, _a;
        /** @type {?} */
        var isGroupByFn = isFunction(this._ngSelect.groupBy);
        /** @type {?} */
        var items = [];
        var _loop_2 = function (key) {
            /** @type {?} */
            var i = items.length;
            if (key === undefined) {
                /** @type {?} */
                var withoutGroup = groups.get(undefined) || [];
                items.push.apply(items, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(withoutGroup.map((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, x), { index: i++ })); }))));
                return "continue";
            }
            /** @type {?} */
            var isObjectKey = isObject(key);
            /** @type {?} */
            var parent_2 = {
                label: isObjectKey ? '' : String(key),
                children: undefined,
                parent: null,
                index: i++,
                disabled: !this_2._ngSelect.selectableGroup,
                htmlId: newId(),
            };
            /** @type {?} */
            var groupKey = isGroupByFn ? this_2._ngSelect.bindLabel : (/** @type {?} */ (this_2._ngSelect.groupBy));
            /** @type {?} */
            var groupValue = this_2._ngSelect.groupValue || ((/**
             * @return {?}
             */
            function () {
                var _a;
                if (isObjectKey) {
                    return ((/** @type {?} */ (key))).value;
                }
                return _a = {}, _a[groupKey] = key, _a;
            }));
            /** @type {?} */
            var children = groups.get(key).map((/**
             * @param {?} x
             * @return {?}
             */
            function (x) {
                x.parent = parent_2;
                x.children = undefined;
                x.index = i++;
                return x;
            }));
            parent_2.children = children;
            parent_2.value = groupValue(key, children.map((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.value; })));
            items.push(parent_2);
            items.push.apply(items, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(children));
        };
        var this_2 = this;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Array.from(groups.keys())), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                _loop_2(key);
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_7) throw e_7.error; }
        }
        return items;
    };
    return ItemsList;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-select.types.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function NgOption() { }
if (false) {}
/** @enum {number} */
var KeyCode = {
    Tab: 9,
    Enter: 13,
    Esc: 27,
    Space: 32,
    ArrowUp: 38,
    ArrowDown: 40,
    Backspace: 8,
};
KeyCode[KeyCode.Tab] = 'Tab';
KeyCode[KeyCode.Enter] = 'Enter';
KeyCode[KeyCode.Esc] = 'Esc';
KeyCode[KeyCode.Space] = 'Space';
KeyCode[KeyCode.ArrowUp] = 'ArrowUp';
KeyCode[KeyCode.ArrowDown] = 'ArrowDown';
KeyCode[KeyCode.Backspace] = 'Backspace';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-dropdown-panel.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ItemsRangeResult() { }
if (false) {}
/**
 * @record
 */
function PanelDimensions() { }
if (false) {}
var NgDropdownPanelService = /** @class */ (function () {
    function NgDropdownPanelService() {
        this._dimensions = {
            itemHeight: 0,
            panelHeight: 0,
            itemsPerViewport: 0
        };
    }
    Object.defineProperty(NgDropdownPanelService.prototype, "dimensions", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dimensions;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} scrollPos
     * @param {?} itemsLength
     * @param {?} buffer
     * @return {?}
     */
    NgDropdownPanelService.prototype.calculateItems = /**
     * @param {?} scrollPos
     * @param {?} itemsLength
     * @param {?} buffer
     * @return {?}
     */
    function (scrollPos, itemsLength, buffer) {
        /** @type {?} */
        var d = this._dimensions;
        /** @type {?} */
        var scrollHeight = d.itemHeight * itemsLength;
        /** @type {?} */
        var scrollTop = Math.max(0, scrollPos);
        /** @type {?} */
        var indexByScrollTop = scrollTop / scrollHeight * itemsLength;
        /** @type {?} */
        var end = Math.min(itemsLength, Math.ceil(indexByScrollTop) + (d.itemsPerViewport + 1));
        /** @type {?} */
        var maxStartEnd = end;
        /** @type {?} */
        var maxStart = Math.max(0, maxStartEnd - d.itemsPerViewport);
        /** @type {?} */
        var start = Math.min(maxStart, Math.floor(indexByScrollTop));
        /** @type {?} */
        var topPadding = d.itemHeight * Math.ceil(start) - (d.itemHeight * Math.min(start, buffer));
        topPadding = !isNaN(topPadding) ? topPadding : 0;
        start = !isNaN(start) ? start : -1;
        end = !isNaN(end) ? end : -1;
        start -= buffer;
        start = Math.max(0, start);
        end += buffer;
        end = Math.min(itemsLength, end);
        return {
            topPadding: topPadding,
            scrollHeight: scrollHeight,
            start: start,
            end: end
        };
    };
    /**
     * @param {?} itemHeight
     * @param {?} panelHeight
     * @return {?}
     */
    NgDropdownPanelService.prototype.setDimensions = /**
     * @param {?} itemHeight
     * @param {?} panelHeight
     * @return {?}
     */
    function (itemHeight, panelHeight) {
        /** @type {?} */
        var itemsPerViewport = Math.max(1, Math.floor(panelHeight / itemHeight));
        this._dimensions = {
            itemHeight: itemHeight,
            panelHeight: panelHeight,
            itemsPerViewport: itemsPerViewport
        };
    };
    /**
     * @param {?} itemTop
     * @param {?} itemHeight
     * @param {?} lastScroll
     * @return {?}
     */
    NgDropdownPanelService.prototype.getScrollTo = /**
     * @param {?} itemTop
     * @param {?} itemHeight
     * @param {?} lastScroll
     * @return {?}
     */
    function (itemTop, itemHeight, lastScroll) {
        var panelHeight = this.dimensions.panelHeight;
        /** @type {?} */
        var itemBottom = itemTop + itemHeight;
        /** @type {?} */
        var top = lastScroll;
        /** @type {?} */
        var bottom = top + panelHeight;
        if (panelHeight >= itemBottom && lastScroll === itemTop) {
            return null;
        }
        if (itemBottom > bottom) {
            return top + itemBottom - bottom;
        }
        else if (itemTop <= top) {
            return itemTop;
        }
        return null;
    };
NgDropdownPanelService.ɵfac = function NgDropdownPanelService_Factory(t) { return new (t || NgDropdownPanelService)(); };
NgDropdownPanelService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NgDropdownPanelService, factory: function (t) { return NgDropdownPanelService.ɵfac(t); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgDropdownPanelService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return []; }, null); })();
    return NgDropdownPanelService;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-dropdown-panel.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var TOP_CSS_CLASS = 'ng-select-top';
/** @type {?} */
var BOTTOM_CSS_CLASS = 'ng-select-bottom';
/** @type {?} */
var SCROLL_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs__WEBPACK_IMPORTED_MODULE_4__["animationFrameScheduler"] : rxjs__WEBPACK_IMPORTED_MODULE_4__["asapScheduler"];
var NgDropdownPanelComponent = /** @class */ (function () {
    function NgDropdownPanelComponent(_renderer, _zone, _panelService, _elementRef, _document) {
        this._renderer = _renderer;
        this._zone = _zone;
        this._panelService = _panelService;
        this._document = _document;
        this.items = [];
        this.position = 'auto';
        this.virtualScroll = false;
        this.filterValue = null;
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.scrollToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.outsideClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._scrollToEndFired = false;
        this._updateScrollHeight = false;
        this._lastScrollPosition = 0;
        this._dropdown = _elementRef.nativeElement;
    }
    Object.defineProperty(NgDropdownPanelComponent.prototype, "currentPosition", {
        get: /**
         * @return {?}
         */
        function () {
            return this._currentPosition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgDropdownPanelComponent.prototype, "itemsLength", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this._itemsLength;
        },
        set: /**
         * @private
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== this._itemsLength) {
                this._itemsLength = value;
                this._onItemsLengthChanged();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgDropdownPanelComponent.prototype, "_startOffset", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            if (this.markedItem) {
                var _a = this._panelService.dimensions, itemHeight = _a.itemHeight, panelHeight = _a.panelHeight;
                /** @type {?} */
                var offset = this.markedItem.index * itemHeight;
                return panelHeight > offset ? 0 : offset;
            }
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} $event
     * @return {?}
     */
    NgDropdownPanelComponent.prototype.handleMousedown = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        /** @type {?} */
        var target = (/** @type {?} */ ($event.target));
        if (target.tagName === 'INPUT') {
            return;
        }
        $event.preventDefault();
    };
    /**
     * @return {?}
     */
    NgDropdownPanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._select = this._dropdown.parentElement;
        this._virtualPadding = this.paddingElementRef.nativeElement;
        this._scrollablePanel = this.scrollElementRef.nativeElement;
        this._contentPanel = this.contentElementRef.nativeElement;
        this._handleScroll();
        this._handleOutsideClick();
        this._appendDropdown();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgDropdownPanelComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.items) {
            /** @type {?} */
            var change = changes.items;
            this._onItemsChange(change.currentValue, change.firstChange);
        }
    };
    /**
     * @return {?}
     */
    NgDropdownPanelComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroy$.next();
        this._destroy$.complete();
        this._destroy$.unsubscribe();
        if (this.appendTo) {
            this._renderer.removeChild(this._dropdown.parentNode, this._dropdown);
        }
    };
    /**
     * @param {?} option
     * @param {?=} startFromOption
     * @return {?}
     */
    NgDropdownPanelComponent.prototype.scrollTo = /**
     * @param {?} option
     * @param {?=} startFromOption
     * @return {?}
     */
    function (option, startFromOption) {
        if (startFromOption === void 0) { startFromOption = false; }
        if (!option) {
            return;
        }
        /** @type {?} */
        var index = this.items.indexOf(option);
        if (index < 0 || index >= this.itemsLength) {
            return;
        }
        /** @type {?} */
        var scrollTo;
        if (this.virtualScroll) {
            /** @type {?} */
            var itemHeight = this._panelService.dimensions.itemHeight;
            scrollTo = this._panelService.getScrollTo(index * itemHeight, itemHeight, this._lastScrollPosition);
        }
        else {
            /** @type {?} */
            var item = this._dropdown.querySelector("#" + option.htmlId);
            /** @type {?} */
            var lastScroll = startFromOption ? item.offsetTop : this._lastScrollPosition;
            scrollTo = this._panelService.getScrollTo(item.offsetTop, item.clientHeight, lastScroll);
        }
        if (isDefined(scrollTo)) {
            this._scrollablePanel.scrollTop = scrollTo;
        }
    };
    /**
     * @return {?}
     */
    NgDropdownPanelComponent.prototype.scrollToTag = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var panel = this._scrollablePanel;
        panel.scrollTop = panel.scrollHeight - panel.clientHeight;
    };
    /**
     * @return {?}
     */
    NgDropdownPanelComponent.prototype.adjustPosition = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var parent = this._parent.getBoundingClientRect();
        /** @type {?} */
        var select = this._select.getBoundingClientRect();
        this._setOffset(parent, select);
    };
    /**
     * @private
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._handleDropdownPosition = /**
     * @private
     * @return {?}
     */
    function () {
        this._currentPosition = this._calculateCurrentPosition(this._dropdown);
        if (this._currentPosition === 'top') {
            this._renderer.addClass(this._dropdown, TOP_CSS_CLASS);
            this._renderer.removeClass(this._dropdown, BOTTOM_CSS_CLASS);
            this._renderer.addClass(this._select, TOP_CSS_CLASS);
            this._renderer.removeClass(this._select, BOTTOM_CSS_CLASS);
        }
        else {
            this._renderer.addClass(this._dropdown, BOTTOM_CSS_CLASS);
            this._renderer.removeClass(this._dropdown, TOP_CSS_CLASS);
            this._renderer.addClass(this._select, BOTTOM_CSS_CLASS);
            this._renderer.removeClass(this._select, TOP_CSS_CLASS);
        }
        if (this.appendTo) {
            this._updatePosition();
        }
        this._dropdown.style.opacity = '1';
    };
    /**
     * @private
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._handleScroll = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(_this.scrollElementRef.nativeElement, 'scroll')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this._destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(0, SCROLL_SCHEDULER))
                .subscribe((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return _this._onContentScrolled(e.target.scrollTop); }));
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._handleOutsideClick = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._document) {
            return;
        }
        this._zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(_this._document, 'touchstart', { capture: true }), Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(_this._document, 'mousedown', { capture: true })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this._destroy$))
                .subscribe((/**
             * @param {?} $event
             * @return {?}
             */
            function ($event) { return _this._checkToClose($event); }));
        }));
    };
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._checkToClose = /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        var _this = this;
        if (this._select.contains($event.target) || this._dropdown.contains($event.target)) {
            return;
        }
        /** @type {?} */
        var path = $event.path || ($event.composedPath && $event.composedPath());
        if ($event.target && $event.target.shadowRoot && path && path[0] && this._select.contains(path[0])) {
            return;
        }
        this._zone.run((/**
         * @return {?}
         */
        function () { return _this.outsideClick.emit(); }));
    };
    /**
     * @private
     * @param {?} items
     * @param {?} firstChange
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._onItemsChange = /**
     * @private
     * @param {?} items
     * @param {?} firstChange
     * @return {?}
     */
    function (items, firstChange) {
        this.items = items || [];
        this._scrollToEndFired = false;
        this.itemsLength = items.length;
        if (this.virtualScroll) {
            this._updateItemsRange(firstChange);
        }
        else {
            this._updateItems(firstChange);
        }
    };
    /**
     * @private
     * @param {?} firstChange
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._updateItems = /**
     * @private
     * @param {?} firstChange
     * @return {?}
     */
    function (firstChange) {
        var _this = this;
        this.update.emit(this.items);
        if (firstChange === false) {
            return;
        }
        this._zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            Promise.resolve().then((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var panelHeight = _this._scrollablePanel.clientHeight;
                _this._panelService.setDimensions(0, panelHeight);
                _this._handleDropdownPosition();
                _this.scrollTo(_this.markedItem, firstChange);
            }));
        }));
    };
    /**
     * @private
     * @param {?} firstChange
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._updateItemsRange = /**
     * @private
     * @param {?} firstChange
     * @return {?}
     */
    function (firstChange) {
        var _this = this;
        this._zone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this._measureDimensions().then((/**
             * @return {?}
             */
            function () {
                if (firstChange) {
                    _this._renderItemsRange(_this._startOffset);
                    _this._handleDropdownPosition();
                }
                else {
                    _this._renderItemsRange();
                }
            }));
        }));
    };
    /**
     * @private
     * @param {?} scrollTop
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._onContentScrolled = /**
     * @private
     * @param {?} scrollTop
     * @return {?}
     */
    function (scrollTop) {
        if (this.virtualScroll) {
            this._renderItemsRange(scrollTop);
        }
        this._lastScrollPosition = scrollTop;
        this._fireScrollToEnd(scrollTop);
    };
    /**
     * @private
     * @param {?} height
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._updateVirtualHeight = /**
     * @private
     * @param {?} height
     * @return {?}
     */
    function (height) {
        if (this._updateScrollHeight) {
            this._virtualPadding.style.height = height + "px";
            this._updateScrollHeight = false;
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._onItemsLengthChanged = /**
     * @private
     * @return {?}
     */
    function () {
        this._updateScrollHeight = true;
    };
    /**
     * @private
     * @param {?=} scrollTop
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._renderItemsRange = /**
     * @private
     * @param {?=} scrollTop
     * @return {?}
     */
    function (scrollTop) {
        var _this = this;
        if (scrollTop === void 0) { scrollTop = null; }
        if (scrollTop && this._lastScrollPosition === scrollTop) {
            return;
        }
        scrollTop = scrollTop || this._scrollablePanel.scrollTop;
        /** @type {?} */
        var range = this._panelService.calculateItems(scrollTop, this.itemsLength, this.bufferAmount);
        this._updateVirtualHeight(range.scrollHeight);
        this._contentPanel.style.transform = "translateY(" + range.topPadding + "px)";
        this._zone.run((/**
         * @return {?}
         */
        function () {
            _this.update.emit(_this.items.slice(range.start, range.end));
            _this.scroll.emit({ start: range.start, end: range.end });
        }));
        if (isDefined(scrollTop) && this._lastScrollPosition === 0) {
            this._scrollablePanel.scrollTop = scrollTop;
            this._lastScrollPosition = scrollTop;
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._measureDimensions = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._panelService.dimensions.itemHeight > 0 || this.itemsLength === 0) {
            return Promise.resolve(this._panelService.dimensions);
        }
        var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(this.items, 1), first = _a[0];
        this.update.emit([first]);
        return Promise.resolve().then((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var option = _this._dropdown.querySelector("#" + first.htmlId);
            /** @type {?} */
            var optionHeight = option.clientHeight;
            _this._virtualPadding.style.height = optionHeight * _this.itemsLength + "px";
            /** @type {?} */
            var panelHeight = _this._scrollablePanel.clientHeight;
            _this._panelService.setDimensions(optionHeight, panelHeight);
            return _this._panelService.dimensions;
        }));
    };
    /**
     * @private
     * @param {?} scrollTop
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._fireScrollToEnd = /**
     * @private
     * @param {?} scrollTop
     * @return {?}
     */
    function (scrollTop) {
        var _this = this;
        if (this._scrollToEndFired || scrollTop === 0) {
            return;
        }
        /** @type {?} */
        var padding = this.virtualScroll ?
            this._virtualPadding :
            this._contentPanel;
        if (scrollTop + this._dropdown.clientHeight >= padding.clientHeight) {
            this._zone.run((/**
             * @return {?}
             */
            function () { return _this.scrollToEnd.emit(); }));
            this._scrollToEndFired = true;
        }
    };
    /**
     * @private
     * @param {?} dropdownEl
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._calculateCurrentPosition = /**
     * @private
     * @param {?} dropdownEl
     * @return {?}
     */
    function (dropdownEl) {
        if (this.position !== 'auto') {
            return this.position;
        }
        /** @type {?} */
        var selectRect = this._select.getBoundingClientRect();
        /** @type {?} */
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        /** @type {?} */
        var offsetTop = selectRect.top + window.pageYOffset;
        /** @type {?} */
        var height = selectRect.height;
        /** @type {?} */
        var dropdownHeight = dropdownEl.getBoundingClientRect().height;
        if (offsetTop + height + dropdownHeight > scrollTop + document.documentElement.clientHeight) {
            return 'top';
        }
        else {
            return 'bottom';
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._appendDropdown = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.appendTo) {
            return;
        }
        this._parent = document.querySelector(this.appendTo);
        if (!parent) {
            throw new Error("appendTo selector " + this.appendTo + " did not found any parent element");
        }
        this._parent.appendChild(this._dropdown);
    };
    /**
     * @private
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._updatePosition = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var select = this._select.getBoundingClientRect();
        /** @type {?} */
        var parent = this._parent.getBoundingClientRect();
        /** @type {?} */
        var offsetLeft = select.left - parent.left;
        this._setOffset(parent, select);
        this._dropdown.style.left = offsetLeft + 'px';
        this._dropdown.style.width = select.width + 'px';
        this._dropdown.style.minWidth = select.width + 'px';
    };
    /**
     * @private
     * @param {?} parent
     * @param {?} select
     * @return {?}
     */
    NgDropdownPanelComponent.prototype._setOffset = /**
     * @private
     * @param {?} parent
     * @param {?} select
     * @return {?}
     */
    function (parent, select) {
        /** @type {?} */
        var delta = select.height;
        if (this._currentPosition === 'top') {
            /** @type {?} */
            var offsetBottom = parent.bottom - select.bottom;
            this._dropdown.style.bottom = offsetBottom + delta + 'px';
            this._dropdown.style.top = 'auto';
        }
        else if (this._currentPosition === 'bottom') {
            /** @type {?} */
            var offsetTop = select.top - parent.top;
            this._dropdown.style.top = offsetTop + delta + 'px';
            this._dropdown.style.bottom = 'auto';
        }
    };
    /** @nocollapse */
    NgDropdownPanelComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: NgDropdownPanelService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] }
    ]; };
    NgDropdownPanelComponent.propDecorators = {
        items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        markedItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        appendTo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        bufferAmount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        virtualScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        headerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        footerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        filterValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        update: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        scroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        scrollToEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        outsideClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        contentElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['content', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: true },] }],
        scrollElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['scroll', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: true },] }],
        paddingElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['padding', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: true },] }],
        handleMousedown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['mousedown', ['$event'],] }]
    };
NgDropdownPanelComponent.ɵfac = function NgDropdownPanelComponent_Factory(t) { return new (t || NgDropdownPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NgDropdownPanelService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8)); };
NgDropdownPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NgDropdownPanelComponent, selectors: [["ng-dropdown-panel"]], viewQuery: function NgDropdownPanelComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c1, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c2, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.contentElementRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.scrollElementRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paddingElementRef = _t.first);
    } }, hostBindings: function NgDropdownPanelComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function NgDropdownPanelComponent_mousedown_HostBindingHandler($event) { return ctx.handleMousedown($event); });
    } }, inputs: { items: "items", position: "position", virtualScroll: "virtualScroll", filterValue: "filterValue", markedItem: "markedItem", appendTo: "appendTo", bufferAmount: "bufferAmount", headerTemplate: "headerTemplate", footerTemplate: "footerTemplate" }, outputs: { update: "update", scroll: "scroll", scrollToEnd: "scrollToEnd", outsideClick: "outsideClick" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()], ngContentSelectors: _c4, decls: 9, vars: 6, consts: [["class", "ng-dropdown-header", 4, "ngIf"], [1, "ng-dropdown-panel-items", "scroll-host"], ["scroll", ""], ["padding", ""], ["content", ""], ["class", "ng-dropdown-footer", 4, "ngIf"], [1, "ng-dropdown-header"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ng-dropdown-footer"]], template: function NgDropdownPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NgDropdownPanelComponent_div_0_Template, 2, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, NgDropdownPanelComponent_div_8_Template, 2, 4, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.headerTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("total-padding", ctx.virtualScroll);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("scrollable-content", ctx.virtualScroll && ctx.items.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.footerTemplate);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgTemplateOutlet"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgDropdownPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                selector: 'ng-dropdown-panel',
                template: "\n        <div *ngIf=\"headerTemplate\" class=\"ng-dropdown-header\">\n            <ng-container [ngTemplateOutlet]=\"headerTemplate\" [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\"></ng-container>\n        </div>\n        <div #scroll class=\"ng-dropdown-panel-items scroll-host\">\n            <div #padding [class.total-padding]=\"virtualScroll\"></div>\n            <div #content [class.scrollable-content]=\"virtualScroll && items.length\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n        <div *ngIf=\"footerTemplate\" class=\"ng-dropdown-footer\">\n            <ng-container [ngTemplateOutlet]=\"footerTemplate\" [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\"></ng-container>\n        </div>\n    "
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: NgDropdownPanelService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
            }] }]; }, { items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], virtualScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], filterValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], update: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], scroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], scrollToEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], outsideClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], handleMousedown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['mousedown', ['$event']]
        }], markedItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], appendTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], bufferAmount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], headerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], footerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], contentElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['content', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: true }]
        }], scrollElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['scroll', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: true }]
        }], paddingElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['padding', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: true }]
        }] }); })();
    return NgDropdownPanelComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-option.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgOptionComponent = /** @class */ (function () {
    function NgOptionComponent(elementRef) {
        this.elementRef = elementRef;
        this.stateChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._disabled = false;
    }
    Object.defineProperty(NgOptionComponent.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () { return this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._disabled = this._isDisabled(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgOptionComponent.prototype, "label", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.elementRef.nativeElement.textContent || '').trim();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    NgOptionComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.disabled) {
            this.stateChange$.next({
                value: this.value,
                disabled: this._disabled
            });
        }
    };
    /**
     * @return {?}
     */
    NgOptionComponent.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        if (this.label !== this._previousLabel) {
            this._previousLabel = this.label;
            this.stateChange$.next({
                value: this.value,
                disabled: this._disabled,
                label: this.elementRef.nativeElement.innerHTML
            });
        }
    };
    /**
     * @return {?}
     */
    NgOptionComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.stateChange$.complete();
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    NgOptionComponent.prototype._isDisabled = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value != null && "" + value !== 'false';
    };
    /** @nocollapse */
    NgOptionComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    NgOptionComponent.propDecorators = {
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
NgOptionComponent.ɵfac = function NgOptionComponent_Factory(t) { return new (t || NgOptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
NgOptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NgOptionComponent, selectors: [["ng-option"]], inputs: { disabled: "disabled", value: "value" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()], ngContentSelectors: _c4, decls: 1, vars: 0, template: function NgOptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgOptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'ng-option',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                template: "<ng-content></ng-content>"
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]; }, { disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
    return NgOptionComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/config.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgSelectConfig = /** @class */ (function () {
    function NgSelectConfig() {
        this.notFoundText = 'No items found';
        this.typeToSearchText = 'Type to search';
        this.addTagText = 'Add item';
        this.loadingText = 'Loading...';
        this.clearAllText = 'Clear all';
        this.disableVirtualScroll = true;
        this.openOnEnter = true;
        this.appearance = 'underline';
    }
    /** @nocollapse */ NgSelectConfig.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function NgSelectConfig_Factory() { return new NgSelectConfig(); }, token: NgSelectConfig, providedIn: "root" });
NgSelectConfig.ɵfac = function NgSelectConfig_Factory(t) { return new (t || NgSelectConfig)(); };
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgSelectConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();
    return NgSelectConfig;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-select.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var SELECTION_MODEL_FACTORY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('ng-select-selection-model');
var NgSelectComponent = /** @class */ (function () {
    function NgSelectComponent(classes, autoFocus, config, newSelectionModel, _elementRef, _cd, _console) {
        var _this = this;
        this.classes = classes;
        this.autoFocus = autoFocus;
        this._cd = _cd;
        this._console = _console;
        this.markFirst = true;
        this.dropdownPosition = 'auto';
        this.loading = false;
        this.closeOnSelect = true;
        this.hideSelected = false;
        this.selectOnTab = false;
        this.bufferAmount = 4;
        this.selectableGroup = false;
        this.selectableGroupAsModel = true;
        this.searchFn = null;
        this.trackByFn = null;
        this.clearOnBackspace = true;
        this.labelForId = null;
        this.inputAttrs = {};
        this.readonly = false;
        this.searchWhileComposing = true;
        this.minTermLength = 0;
        this.editableSearchTerm = false;
        this.keyDownFn = (/**
         * @param {?} _
         * @return {?}
         */
        function (_) { return true; });
        this.multiple = false;
        this.addTag = false;
        this.searchable = true;
        this.clearable = true;
        this.isOpen = false;
        // output events
        this.blurEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.focusEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.openEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.closeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.searchEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.clearEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.addEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.removeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.scrollToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.viewPortItems = [];
        this.searchTerm = null;
        this.dropdownId = newId();
        this.escapeHTML = true;
        this.useDefaultClass = true;
        this._items = [];
        this._defaultLabel = 'label';
        this._pressedKeys = [];
        this._isComposing = false;
        this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._keyPress$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._onChange = (/**
         * @param {?} _
         * @return {?}
         */
        function (_) { });
        this._onTouched = (/**
         * @return {?}
         */
        function () { });
        this.clearItem = (/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var option = _this.selectedItems.find((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.value === item; }));
            _this.unselect(option);
        });
        this.trackByOption = (/**
         * @param {?} _
         * @param {?} item
         * @return {?}
         */
        function (_, item) {
            if (_this.trackByFn) {
                return _this.trackByFn(item.value);
            }
            return item;
        });
        this._mergeGlobalConfig(config);
        this.itemsList = new ItemsList(this, newSelectionModel());
        this.element = _elementRef.nativeElement;
    }
    Object.defineProperty(NgSelectComponent.prototype, "items", {
        get: /**
         * @return {?}
         */
        function () { return this._items; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._itemsAreUsed = true;
            this._items = value;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(NgSelectComponent.prototype, "compareWith", {
        get: /**
         * @return {?}
         */
        function () { return this._compareWith; },
        set: /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            if (!isFunction(fn)) {
                throw Error('`compareWith` must be a function.');
            }
            this._compareWith = fn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSelectComponent.prototype, "clearSearchOnAdd", {
        get: /**
         * @return {?}
         */
        function () { return isDefined(this._clearSearchOnAdd) ? this._clearSearchOnAdd : this.closeOnSelect; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._clearSearchOnAdd = value;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(NgSelectComponent.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () { return this.readonly || this._disabled; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(NgSelectComponent.prototype, "filtered", {
        get: /**
         * @return {?}
         */
        function () { return (!!this.searchTerm && this.searchable || this._isComposing); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(NgSelectComponent.prototype, "_editableSearchTerm", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.editableSearchTerm && !this.multiple;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSelectComponent.prototype, "selectedItems", {
        get: /**
         * @return {?}
         */
        function () {
            return this.itemsList.selectedItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSelectComponent.prototype, "selectedValues", {
        get: /**
         * @return {?}
         */
        function () {
            return this.selectedItems.map((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.value; }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSelectComponent.prototype, "hasValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this.selectedItems.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSelectComponent.prototype, "currentPanelPosition", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.dropdownPanel) {
                return this.dropdownPanel.currentPosition;
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._handleKeyPresses();
        this._setInputAttributes();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgSelectComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.multiple) {
            this.itemsList.clearSelected();
        }
        if (changes.items) {
            this._setItems(changes.items.currentValue || []);
        }
        if (changes.isOpen) {
            this._manualOpen = isDefined(changes.isOpen.currentValue);
        }
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (!this._itemsAreUsed) {
            this.escapeHTML = false;
            this._setItemsFromNgOptions();
        }
        if (isDefined(this.autoFocus)) {
            this.focus();
        }
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroy$.next();
        this._destroy$.complete();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NgSelectComponent.prototype.handleKeyDown = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        /** @type {?} */
        var keyCode = KeyCode[$event.which];
        if (keyCode) {
            if (this.keyDownFn($event) === false) {
                return;
            }
            this.handleKeyCode($event);
        }
        else if ($event.key && $event.key.length === 1) {
            this._keyPress$.next($event.key.toLocaleLowerCase());
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NgSelectComponent.prototype.handleKeyCode = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        switch ($event.which) {
            case KeyCode.ArrowDown:
                this._handleArrowDown($event);
                break;
            case KeyCode.ArrowUp:
                this._handleArrowUp($event);
                break;
            case KeyCode.Space:
                this._handleSpace($event);
                break;
            case KeyCode.Enter:
                this._handleEnter($event);
                break;
            case KeyCode.Tab:
                this._handleTab($event);
                break;
            case KeyCode.Esc:
                this.close();
                $event.preventDefault();
                break;
            case KeyCode.Backspace:
                this._handleBackspace();
                break;
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NgSelectComponent.prototype.handleMousedown = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        /** @type {?} */
        var target = (/** @type {?} */ ($event.target));
        if (target.tagName !== 'INPUT') {
            $event.preventDefault();
        }
        if (target.classList.contains('ng-clear-wrapper')) {
            this.handleClearClick();
            return;
        }
        if (target.classList.contains('ng-arrow-wrapper')) {
            this.handleArrowClick();
            return;
        }
        if (target.classList.contains('ng-value-icon')) {
            return;
        }
        if (!this.focused) {
            this.focus();
        }
        if (this.searchable) {
            this.open();
        }
        else {
            this.toggle();
        }
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.handleArrowClick = /**
     * @return {?}
     */
    function () {
        if (this.isOpen) {
            this.close();
        }
        else {
            this.open();
        }
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.handleClearClick = /**
     * @return {?}
     */
    function () {
        if (this.hasValue) {
            this.itemsList.clearSelected(true);
            this._updateNgModel();
        }
        this._clearSearch();
        this.focus();
        this.clearEvent.emit();
        this._onSelectionChanged();
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.clearModel = /**
     * @return {?}
     */
    function () {
        if (!this.clearable) {
            return;
        }
        this.itemsList.clearSelected();
        this._updateNgModel();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NgSelectComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.itemsList.clearSelected();
        this._handleWriteValue(value);
        this._cd.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NgSelectComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NgSelectComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    /**
     * @param {?} state
     * @return {?}
     */
    NgSelectComponent.prototype.setDisabledState = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this._disabled = state;
        this._cd.markForCheck();
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.toggle = /**
     * @return {?}
     */
    function () {
        if (!this.isOpen) {
            this.open();
        }
        else {
            this.close();
        }
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.open = /**
     * @return {?}
     */
    function () {
        if (this.disabled || this.isOpen || this.itemsList.maxItemsSelected || this._manualOpen) {
            return;
        }
        if (!this._isTypeahead && !this.addTag && this.itemsList.noItemsToSelect) {
            return;
        }
        this.isOpen = true;
        this.itemsList.markSelectedOrDefault(this.markFirst);
        this.openEvent.emit();
        if (!this.searchTerm) {
            this.focus();
        }
        this.detectChanges();
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        if (!this.isOpen || this._manualOpen) {
            return;
        }
        this.isOpen = false;
        if (!this._editableSearchTerm) {
            this._clearSearch();
        }
        else {
            this.itemsList.resetFilteredItems();
        }
        this.itemsList.unmarkItem();
        this._onTouched();
        this.closeEvent.emit();
        this._cd.markForCheck();
    };
    /**
     * @param {?} item
     * @return {?}
     */
    NgSelectComponent.prototype.toggleItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (!item || item.disabled || this.disabled) {
            return;
        }
        if (this.multiple && item.selected) {
            this.unselect(item);
        }
        else {
            this.select(item);
        }
        if (this._editableSearchTerm) {
            this._setSearchTermFromItems();
        }
        this._onSelectionChanged();
    };
    /**
     * @param {?} item
     * @return {?}
     */
    NgSelectComponent.prototype.select = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (!item.selected) {
            this.itemsList.select(item);
            if (this.clearSearchOnAdd && !this._editableSearchTerm) {
                this._clearSearch();
            }
            this._updateNgModel();
            if (this.multiple) {
                this.addEvent.emit(item.value);
            }
        }
        if (this.closeOnSelect || this.itemsList.noItemsToSelect) {
            this.close();
        }
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.searchInput.nativeElement.focus();
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        this.searchInput.nativeElement.blur();
    };
    /**
     * @param {?} item
     * @return {?}
     */
    NgSelectComponent.prototype.unselect = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (!item) {
            return;
        }
        this.itemsList.unselect(item);
        this.focus();
        this._updateNgModel();
        this.removeEvent.emit(item);
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.selectTag = /**
     * @return {?}
     */
    function () {
        var _a;
        var _this = this;
        /** @type {?} */
        var tag;
        if (isFunction(this.addTag)) {
            tag = ((/** @type {?} */ (this.addTag)))(this.searchTerm);
        }
        else {
            tag = this._primitive ? this.searchTerm : (_a = {}, _a[this.bindLabel] = this.searchTerm, _a);
        }
        /** @type {?} */
        var handleTag = (/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return _this._isTypeahead || !_this.isOpen ? _this.itemsList.mapItem(item, null) : _this.itemsList.addItem(item); });
        if (isPromise(tag)) {
            tag.then((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return _this.select(handleTag(item)); })).catch((/**
             * @return {?}
             */
            function () { }));
        }
        else if (tag) {
            this.select(handleTag(tag));
        }
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.showClear = /**
     * @return {?}
     */
    function () {
        return this.clearable && (this.hasValue || this.searchTerm) && !this.disabled;
    };
    Object.defineProperty(NgSelectComponent.prototype, "showAddTag", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this._validTerm) {
                return false;
            }
            /** @type {?} */
            var term = this.searchTerm.toLowerCase().trim();
            return this.addTag &&
                (!this.itemsList.filteredItems.some((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return x.label.toLowerCase() === term; })) &&
                    (!this.hideSelected && this.isOpen || !this.selectedItems.some((/**
                     * @param {?} x
                     * @return {?}
                     */
                    function (x) { return x.label.toLowerCase() === term; })))) &&
                !this.loading;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.showNoItemsFound = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var empty = this.itemsList.filteredItems.length === 0;
        return ((empty && !this._isTypeahead && !this.loading) ||
            (empty && this._isTypeahead && this._validTerm && !this.loading)) &&
            !this.showAddTag;
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.showTypeToSearch = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var empty = this.itemsList.filteredItems.length === 0;
        return empty && this._isTypeahead && !this._validTerm && !this.loading;
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.onCompositionStart = /**
     * @return {?}
     */
    function () {
        this._isComposing = true;
    };
    /**
     * @param {?} term
     * @return {?}
     */
    NgSelectComponent.prototype.onCompositionEnd = /**
     * @param {?} term
     * @return {?}
     */
    function (term) {
        this._isComposing = false;
        if (this.searchWhileComposing) {
            return;
        }
        this.filter(term);
    };
    /**
     * @param {?} term
     * @return {?}
     */
    NgSelectComponent.prototype.filter = /**
     * @param {?} term
     * @return {?}
     */
    function (term) {
        if (this._isComposing && !this.searchWhileComposing) {
            return;
        }
        this.searchTerm = term;
        if (this._isTypeahead && (this._validTerm || this.minTermLength === 0)) {
            this.typeahead.next(term);
        }
        if (!this._isTypeahead) {
            this.itemsList.filter(this.searchTerm);
            if (this.isOpen) {
                this.itemsList.markSelectedOrDefault(this.markFirst);
            }
        }
        this.searchEvent.emit({ term: term, items: this.itemsList.filteredItems.map((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.value; })) });
        this.open();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NgSelectComponent.prototype.onInputFocus = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (this.focused) {
            return;
        }
        if (this._editableSearchTerm) {
            this._setSearchTermFromItems();
        }
        this.element.classList.add('ng-select-focused');
        this.focusEvent.emit($event);
        this.focused = true;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NgSelectComponent.prototype.onInputBlur = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.element.classList.remove('ng-select-focused');
        this.blurEvent.emit($event);
        if (!this.isOpen && !this.disabled) {
            this._onTouched();
        }
        if (this._editableSearchTerm) {
            this._setSearchTermFromItems();
        }
        this.focused = false;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    NgSelectComponent.prototype.onItemHover = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (item.disabled) {
            return;
        }
        this.itemsList.markItem(item);
    };
    /**
     * @return {?}
     */
    NgSelectComponent.prototype.detectChanges = /**
     * @return {?}
     */
    function () {
        if (!((/** @type {?} */ (this._cd))).destroyed) {
            this._cd.detectChanges();
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgSelectComponent.prototype._setSearchTermFromItems = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var selected = this.selectedItems && this.selectedItems[0];
        this.searchTerm = (selected && selected.label) || null;
    };
    /**
     * @private
     * @param {?} items
     * @return {?}
     */
    NgSelectComponent.prototype._setItems = /**
     * @private
     * @param {?} items
     * @return {?}
     */
    function (items) {
        /** @type {?} */
        var firstItem = items[0];
        this.bindLabel = this.bindLabel || this._defaultLabel;
        this._primitive = isDefined(firstItem) ? !isObject(firstItem) : this._primitive || this.bindLabel === this._defaultLabel;
        this.itemsList.setItems(items);
        if (items.length > 0 && this.hasValue) {
            this.itemsList.mapSelectedItems();
        }
        if (this.isOpen && isDefined(this.searchTerm) && !this._isTypeahead) {
            this.itemsList.filter(this.searchTerm);
        }
        if (this._isTypeahead || this.isOpen) {
            this.itemsList.markSelectedOrDefault(this.markFirst);
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgSelectComponent.prototype._setItemsFromNgOptions = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var mapNgOptions = (/**
         * @param {?} options
         * @return {?}
         */
        function (options) {
            _this.items = options.map((/**
             * @param {?} option
             * @return {?}
             */
            function (option) { return ({
                $ngOptionValue: option.value,
                $ngOptionLabel: option.elementRef.nativeElement.innerHTML,
                disabled: option.disabled
            }); }));
            _this.itemsList.setItems(_this.items);
            if (_this.hasValue) {
                _this.itemsList.mapSelectedItems();
            }
            _this.detectChanges();
        });
        /** @type {?} */
        var handleOptionChange = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var changedOrDestroyed = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(_this.ngOptions.changes, _this._destroy$);
            rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"].apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(_this.ngOptions.map((/**
             * @param {?} option
             * @return {?}
             */
            function (option) { return option.stateChange$; })))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(changedOrDestroyed))
                .subscribe((/**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                /** @type {?} */
                var item = _this.itemsList.findItem(option.value);
                item.disabled = option.disabled;
                item.label = option.label || item.label;
                _this._cd.detectChanges();
            }));
        });
        this.ngOptions.changes
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(this.ngOptions), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroy$))
            .subscribe((/**
         * @param {?} options
         * @return {?}
         */
        function (options) {
            _this.bindLabel = _this._defaultLabel;
            mapNgOptions(options);
            handleOptionChange();
        }));
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    NgSelectComponent.prototype._isValidWriteValue = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        if (!isDefined(value) || (this.multiple && value === '') || Array.isArray(value) && value.length === 0) {
            return false;
        }
        /** @type {?} */
        var validateBinding = (/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (!isDefined(_this.compareWith) && isObject(item) && _this.bindValue) {
                _this._console.warn("Binding object(" + JSON.stringify(item) + ") with bindValue is not allowed.");
                return false;
            }
            return true;
        });
        if (this.multiple) {
            if (!Array.isArray(value)) {
                this._console.warn('Multiple select ngModel should be array.');
                return false;
            }
            return value.every((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return validateBinding(item); }));
        }
        else {
            return validateBinding(value);
        }
    };
    /**
     * @private
     * @param {?} ngModel
     * @return {?}
     */
    NgSelectComponent.prototype._handleWriteValue = /**
     * @private
     * @param {?} ngModel
     * @return {?}
     */
    function (ngModel) {
        var _this = this;
        if (!this._isValidWriteValue(ngModel)) {
            return;
        }
        /** @type {?} */
        var select = (/**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            var _a;
            /** @type {?} */
            var item = _this.itemsList.findItem(val);
            if (item) {
                _this.itemsList.select(item);
            }
            else {
                /** @type {?} */
                var isValObject = isObject(val);
                /** @type {?} */
                var isPrimitive = !isValObject && !_this.bindValue;
                if ((isValObject || isPrimitive)) {
                    _this.itemsList.select(_this.itemsList.mapItem(val, null));
                }
                else if (_this.bindValue) {
                    item = (_a = {},
                        _a[_this.bindLabel] = null,
                        _a[_this.bindValue] = val,
                        _a);
                    _this.itemsList.select(_this.itemsList.mapItem(item, null));
                }
            }
        });
        if (this.multiple) {
            ((/** @type {?} */ (ngModel))).forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return select(item); }));
        }
        else {
            select(ngModel);
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgSelectComponent.prototype._handleKeyPresses = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.searchable) {
            return;
        }
        this._keyPress$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((/**
         * @param {?} letter
         * @return {?}
         */
        function (letter) { return _this._pressedKeys.push(letter); })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((/**
         * @return {?}
         */
        function () { return _this._pressedKeys.length > 0; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((/**
         * @return {?}
         */
        function () { return _this._pressedKeys.join(''); })))
            .subscribe((/**
         * @param {?} term
         * @return {?}
         */
        function (term) {
            /** @type {?} */
            var item = _this.itemsList.findByLabel(term);
            if (item) {
                if (_this.isOpen) {
                    _this.itemsList.markItem(item);
                    _this._cd.markForCheck();
                }
                else {
                    _this.select(item);
                }
            }
            _this._pressedKeys = [];
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NgSelectComponent.prototype._setInputAttributes = /**
     * @private
     * @return {?}
     */
    function () {
        var e_1, _a;
        /** @type {?} */
        var input = this.searchInput.nativeElement;
        /** @type {?} */
        var attributes = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ type: 'text', autocorrect: 'off', autocapitalize: 'off', autocomplete: this.labelForId ? 'off' : this.dropdownId }, this.inputAttrs);
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object.keys(attributes)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                input.setAttribute(key, attributes[key]);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgSelectComponent.prototype._updateNgModel = /**
     * @private
     * @return {?}
     */
    function () {
        var e_2, _a;
        /** @type {?} */
        var model = [];
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.selectedItems), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                if (this.bindValue) {
                    /** @type {?} */
                    var value = null;
                    if (item.children) {
                        /** @type {?} */
                        var groupKey = this.groupValue ? this.bindValue : (/** @type {?} */ (this.groupBy));
                        value = item.value[groupKey || (/** @type {?} */ (this.groupBy))];
                    }
                    else {
                        value = this.itemsList.resolveNested(item.value, this.bindValue);
                    }
                    model.push(value);
                }
                else {
                    model.push(item.value);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        /** @type {?} */
        var selected = this.selectedItems.map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.value; }));
        if (this.multiple) {
            this._onChange(model);
            this.changeEvent.emit(selected);
        }
        else {
            this._onChange(isDefined(model[0]) ? model[0] : null);
            this.changeEvent.emit(selected[0]);
        }
        this._cd.markForCheck();
    };
    /**
     * @private
     * @return {?}
     */
    NgSelectComponent.prototype._clearSearch = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.searchTerm) {
            return;
        }
        this._changeSearch(null);
        this.itemsList.resetFilteredItems();
    };
    /**
     * @private
     * @param {?} searchTerm
     * @return {?}
     */
    NgSelectComponent.prototype._changeSearch = /**
     * @private
     * @param {?} searchTerm
     * @return {?}
     */
    function (searchTerm) {
        this.searchTerm = searchTerm;
        if (this._isTypeahead) {
            this.typeahead.next(searchTerm);
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgSelectComponent.prototype._scrollToMarked = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.isOpen || !this.dropdownPanel) {
            return;
        }
        this.dropdownPanel.scrollTo(this.itemsList.markedItem);
    };
    /**
     * @private
     * @return {?}
     */
    NgSelectComponent.prototype._scrollToTag = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.isOpen || !this.dropdownPanel) {
            return;
        }
        this.dropdownPanel.scrollToTag();
    };
    /**
     * @private
     * @return {?}
     */
    NgSelectComponent.prototype._onSelectionChanged = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.isOpen && this.multiple && this.appendTo) {
            // Make sure items are rendered.
            this._cd.detectChanges();
            this.dropdownPanel.adjustPosition();
        }
    };
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    NgSelectComponent.prototype._handleTab = /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (this.isOpen === false && !this.addTag) {
            return;
        }
        if (this.selectOnTab) {
            if (this.itemsList.markedItem) {
                this.toggleItem(this.itemsList.markedItem);
                $event.preventDefault();
            }
            else if (this.showAddTag) {
                this.selectTag();
                $event.preventDefault();
            }
            else {
                this.close();
            }
        }
        else {
            this.close();
        }
    };
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    NgSelectComponent.prototype._handleEnter = /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (this.isOpen || this._manualOpen) {
            if (this.itemsList.markedItem) {
                this.toggleItem(this.itemsList.markedItem);
            }
            else if (this.showAddTag) {
                this.selectTag();
            }
        }
        else if (this.openOnEnter) {
            this.open();
        }
        else {
            return;
        }
        $event.preventDefault();
    };
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    NgSelectComponent.prototype._handleSpace = /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (this.isOpen || this._manualOpen) {
            return;
        }
        this.open();
        $event.preventDefault();
    };
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    NgSelectComponent.prototype._handleArrowDown = /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (this._nextItemIsTag(+1)) {
            this.itemsList.unmarkItem();
            this._scrollToTag();
        }
        else {
            this.itemsList.markNextItem();
            this._scrollToMarked();
        }
        this.open();
        $event.preventDefault();
    };
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    NgSelectComponent.prototype._handleArrowUp = /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (!this.isOpen) {
            return;
        }
        if (this._nextItemIsTag(-1)) {
            this.itemsList.unmarkItem();
            this._scrollToTag();
        }
        else {
            this.itemsList.markPreviousItem();
            this._scrollToMarked();
        }
        $event.preventDefault();
    };
    /**
     * @private
     * @param {?} nextStep
     * @return {?}
     */
    NgSelectComponent.prototype._nextItemIsTag = /**
     * @private
     * @param {?} nextStep
     * @return {?}
     */
    function (nextStep) {
        /** @type {?} */
        var nextIndex = this.itemsList.markedIndex + nextStep;
        return this.addTag && this.searchTerm
            && this.itemsList.markedItem
            && (nextIndex < 0 || nextIndex === this.itemsList.filteredItems.length);
    };
    /**
     * @private
     * @return {?}
     */
    NgSelectComponent.prototype._handleBackspace = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.searchTerm || !this.clearable || !this.clearOnBackspace || !this.hasValue) {
            return;
        }
        if (this.multiple) {
            this.unselect(this.itemsList.lastSelectedItem);
        }
        else {
            this.clearModel();
        }
    };
    Object.defineProperty(NgSelectComponent.prototype, "_isTypeahead", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.typeahead && this.typeahead.observers.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSelectComponent.prototype, "_validTerm", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var term = this.searchTerm && this.searchTerm.trim();
            return term && term.length >= this.minTermLength;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    NgSelectComponent.prototype._mergeGlobalConfig = /**
     * @private
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this.placeholder = this.placeholder || config.placeholder;
        this.notFoundText = this.notFoundText || config.notFoundText;
        this.typeToSearchText = this.typeToSearchText || config.typeToSearchText;
        this.addTagText = this.addTagText || config.addTagText;
        this.loadingText = this.loadingText || config.loadingText;
        this.clearAllText = this.clearAllText || config.clearAllText;
        this.virtualScroll = isDefined(this.virtualScroll)
            ? this.virtualScroll
            : isDefined(config.disableVirtualScroll) ? !config.disableVirtualScroll : false;
        this.openOnEnter = isDefined(this.openOnEnter) ? this.openOnEnter : config.openOnEnter;
        this.appendTo = this.appendTo || config.appendTo;
        this.bindValue = this.bindValue || config.bindValue;
        this.appearance = this.appearance || config.appearance;
    };
    /** @nocollapse */
    NgSelectComponent.ctorParameters = function () { return [
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"], args: ['class',] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"], args: ['autofocus',] }] },
        { type: NgSelectConfig },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [SELECTION_MODEL_FACTORY,] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: ConsoleService }
    ]; };
    NgSelectComponent.propDecorators = {
        bindLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        bindValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        markFirst: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        notFoundText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        typeToSearchText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        addTagText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        loadingText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        clearAllText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        appearance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        dropdownPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        appendTo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        loading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        closeOnSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        hideSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        selectOnTab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        openOnEnter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        maxSelectedItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        groupBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        groupValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        bufferAmount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        virtualScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        selectableGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        selectableGroupAsModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        searchFn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        trackByFn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        clearOnBackspace: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        labelForId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        inputAttrs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        readonly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        searchWhileComposing: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        minTermLength: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        editableSearchTerm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        keyDownFn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        typeahead: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.ng-select-typeahead',] }],
        multiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.ng-select-multiple',] }],
        addTag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.ng-select-taggable',] }],
        searchable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.ng-select-searchable',] }],
        clearable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.ng-select-clearable',] }],
        isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.ng-select-opened',] }],
        items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        compareWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        clearSearchOnAdd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        blurEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['blur',] }],
        focusEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['focus',] }],
        changeEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['change',] }],
        openEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['open',] }],
        closeEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['close',] }],
        searchEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['search',] }],
        clearEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['clear',] }],
        addEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['add',] }],
        removeEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['remove',] }],
        scroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['scroll',] }],
        scrollToEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['scrollToEnd',] }],
        optionTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [NgOptionTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },] }],
        optgroupTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [NgOptgroupTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },] }],
        labelTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [NgLabelTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },] }],
        multiLabelTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [NgMultiLabelTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },] }],
        headerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [NgHeaderTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },] }],
        footerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [NgFooterTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },] }],
        notFoundTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [NgNotFoundTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },] }],
        typeToSearchTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [NgTypeToSearchTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },] }],
        loadingTextTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [NgLoadingTextTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },] }],
        tagTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [NgTagTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },] }],
        loadingSpinnerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [NgLoadingSpinnerTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },] }],
        dropdownPanel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])((/**
                     * @return {?}
                     */
                    function () { return NgDropdownPanelComponent; })),] }],
        searchInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['searchInput', { static: true },] }],
        ngOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [NgOptionComponent, { descendants: true },] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.ng-select-disabled',] }],
        filtered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.ng-select-filtered',] }],
        handleKeyDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['keydown', ['$event'],] }]
    };
NgSelectComponent.ɵfac = function NgSelectComponent_Factory(t) { return new (t || NgSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('class'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('autofocus'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NgSelectConfig), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](SELECTION_MODEL_FACTORY), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ConsoleService)); };
NgSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NgSelectComponent, selectors: [["ng-select"]], contentQueries: function NgSelectComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, NgOptionTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, NgOptgroupTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, NgLabelTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, NgMultiLabelTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, NgHeaderTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, NgFooterTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, NgNotFoundTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, NgTypeToSearchTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, NgLoadingTextTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, NgTagTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, NgLoadingSpinnerTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, NgOptionComponent, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.optionTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.optgroupTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.labelTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.multiLabelTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.headerTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.footerTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.notFoundTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.typeToSearchTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.loadingTextTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.tagTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.loadingSpinnerTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.ngOptions = _t);
    } }, viewQuery: function NgSelectComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](NgDropdownPanelComponent, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c5, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.dropdownPanel = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
    } }, hostAttrs: ["role", "listbox"], hostVars: 20, hostBindings: function NgSelectComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function NgSelectComponent_keydown_HostBindingHandler($event) { return ctx.handleKeyDown($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ng-select", ctx.useDefaultClass)("ng-select-single", !ctx.multiple)("ng-select-multiple", ctx.multiple)("ng-select-taggable", ctx.addTag)("ng-select-searchable", ctx.searchable)("ng-select-clearable", ctx.clearable)("ng-select-opened", ctx.isOpen)("ng-select-disabled", ctx.disabled)("ng-select-filtered", ctx.filtered)("ng-select-typeahead", ctx.typeahead);
    } }, inputs: { markFirst: "markFirst", dropdownPosition: "dropdownPosition", loading: "loading", closeOnSelect: "closeOnSelect", hideSelected: "hideSelected", selectOnTab: "selectOnTab", bufferAmount: "bufferAmount", selectableGroup: "selectableGroup", selectableGroupAsModel: "selectableGroupAsModel", searchFn: "searchFn", trackByFn: "trackByFn", clearOnBackspace: "clearOnBackspace", labelForId: "labelForId", inputAttrs: "inputAttrs", readonly: "readonly", searchWhileComposing: "searchWhileComposing", minTermLength: "minTermLength", editableSearchTerm: "editableSearchTerm", keyDownFn: "keyDownFn", multiple: "multiple", addTag: "addTag", searchable: "searchable", clearable: "clearable", isOpen: "isOpen", items: "items", compareWith: "compareWith", clearSearchOnAdd: "clearSearchOnAdd", bindLabel: "bindLabel", placeholder: "placeholder", notFoundText: "notFoundText", typeToSearchText: "typeToSearchText", addTagText: "addTagText", loadingText: "loadingText", clearAllText: "clearAllText", virtualScroll: "virtualScroll", openOnEnter: "openOnEnter", appendTo: "appendTo", bindValue: "bindValue", appearance: "appearance", maxSelectedItems: "maxSelectedItems", groupBy: "groupBy", groupValue: "groupValue", tabIndex: "tabIndex", typeahead: "typeahead" }, outputs: { blurEvent: "blur", focusEvent: "focus", changeEvent: "change", openEvent: "open", closeEvent: "close", searchEvent: "search", clearEvent: "clear", addEvent: "add", removeEvent: "remove", scroll: "scroll", scrollToEnd: "scrollToEnd" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return NgSelectComponent; })),
                multi: true
            }, NgDropdownPanelService]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()], decls: 14, vars: 18, consts: [[1, "ng-select-container", 3, "mousedown"], [1, "ng-value-container"], [1, "ng-placeholder"], [4, "ngIf"], [1, "ng-input"], ["role", "combobox", 3, "readOnly", "disabled", "value", "input", "compositionstart", "compositionend", "focus", "blur", "change"], ["searchInput", ""], ["class", "ng-clear-wrapper", 3, "title", 4, "ngIf"], [1, "ng-arrow-wrapper"], [1, "ng-arrow"], ["class", "ng-dropdown-panel", 3, "virtualScroll", "bufferAmount", "appendTo", "position", "headerTemplate", "footerTemplate", "filterValue", "items", "markedItem", "ng-select-multiple", "ngClass", "id", "update", "scroll", "scrollToEnd", "outsideClick", 4, "ngIf"], ["class", "ng-value", 3, "ng-value-disabled", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ng-value"], ["defaultLabelTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["aria-hidden", "true", 1, "ng-value-icon", "left", 3, "click"], [1, "ng-value-label", 3, "ngItemLabel", "escape"], ["defaultLoadingSpinnerTemplate", ""], [3, "ngTemplateOutlet"], [1, "ng-spinner-loader"], [1, "ng-clear-wrapper", 3, "title"], ["aria-hidden", "true", 1, "ng-clear"], [1, "ng-dropdown-panel", 3, "virtualScroll", "bufferAmount", "appendTo", "position", "headerTemplate", "footerTemplate", "filterValue", "items", "markedItem", "ngClass", "id", "update", "scroll", "scrollToEnd", "outsideClick"], ["class", "ng-option", 3, "ng-option-disabled", "ng-option-selected", "ng-optgroup", "ng-option", "ng-option-child", "ng-option-marked", "click", "mouseover", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "ng-option", "role", "option", 3, "ng-option-marked", "mouseover", "click", 4, "ngIf"], [1, "ng-option", 3, "click", "mouseover"], ["defaultOptionTemplate", ""], [1, "ng-option-label", 3, "ngItemLabel", "escape"], ["role", "option", 1, "ng-option", 3, "mouseover", "click"], ["defaultTagTemplate", ""], [1, "ng-tag-label"], ["defaultNotFoundTemplate", ""], [1, "ng-option", "ng-option-disabled"], ["defaultTypeToSearchTemplate", ""], ["defaultLoadingTextTemplate", ""]], template: function NgSelectComponent_Template(rf, ctx) { if (rf & 1) {
        var _r445 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function NgSelectComponent_Template_div_mousedown_0_listener($event) { return ctx.handleMousedown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NgSelectComponent_ng_container_4_Template, 2, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, NgSelectComponent_5_Template, 1, 5, undefined, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function NgSelectComponent_Template_input_input_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r445); var _r395 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8); return ctx.filter(_r395.value); })("compositionstart", function NgSelectComponent_Template_input_compositionstart_7_listener() { return ctx.onCompositionStart(); })("compositionend", function NgSelectComponent_Template_input_compositionend_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r445); var _r395 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8); return ctx.onCompositionEnd(_r395.value); })("focus", function NgSelectComponent_Template_input_focus_7_listener($event) { return ctx.onInputFocus($event); })("blur", function NgSelectComponent_Template_input_blur_7_listener($event) { return ctx.onInputBlur($event); })("change", function NgSelectComponent_Template_input_change_7_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, NgSelectComponent_ng_container_9_Template, 4, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, NgSelectComponent_span_10_Template, 3, 1, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, NgSelectComponent_ng_dropdown_panel_13_Template, 7, 19, "ng-dropdown-panel", 10);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ng-appearance-outline", ctx.appearance === "outline")("ng-has-value", ctx.hasValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.placeholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.multiLabelTemplate && ctx.selectedItems.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.multiLabelTemplate && ctx.selectedValues.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readOnly", !ctx.searchable || ctx.itemsList.maxItemsSelected)("disabled", ctx.disabled)("value", ctx.searchTerm ? ctx.searchTerm : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", ctx.labelForId)("tabindex", ctx.tabIndex)("aria-expanded", ctx.isOpen)("aria-owns", ctx.isOpen ? ctx.dropdownId : null)("aria-activedescendant", ctx.isOpen ? ctx.itemsList == null ? null : ctx.itemsList.markedItem == null ? null : ctx.itemsList.markedItem.htmlId : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showClear());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isOpen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgTemplateOutlet"], NgItemLabelDirective,
        NgDropdownPanelComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], styles: [".ng-select{position:relative;display:block;box-sizing:border-box}.ng-select div,.ng-select input,.ng-select span{box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input{opacity:1}.ng-select.ng-select-opened .ng-select-container{z-index:1001}.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-value{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.ng-select.ng-select-disabled .ng-arrow-wrapper{cursor:default}.ng-select.ng-select-filtered .ng-placeholder{display:none}.ng-select .ng-select-container{cursor:default;display:flex;outline:0;overflow:hidden;position:relative;width:100%}.ng-select .ng-select-container .ng-value-container{display:flex;flex:1}.ng-select .ng-select-container .ng-value-container .ng-input{opacity:0}.ng-select .ng-select-container .ng-value-container .ng-input>input{box-sizing:content-box;background:none;border:0;box-shadow:none;outline:0;cursor:default;width:100%}.ng-select .ng-select-container .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select .ng-select-container .ng-value-container .ng-input>input[readonly]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:0;padding:0}.ng-select.ng-select-single.ng-select-filtered .ng-select-container .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container,.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{position:absolute;left:0;width:100%}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:wrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{flex:1;z-index:2}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{position:absolute;z-index:1}.ng-select .ng-clear-wrapper{cursor:pointer;position:relative;width:17px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-clear-wrapper .ng-clear{display:inline-block;font-size:18px;line-height:1;pointer-events:none}.ng-select .ng-spinner-loader{border-radius:50%;width:17px;height:17px;margin-right:5px;font-size:10px;position:relative;text-indent:-9999em;border-top:2px solid rgba(66,66,66,.2);border-right:2px solid rgba(66,66,66,.2);border-bottom:2px solid rgba(66,66,66,.2);border-left:2px solid #424242;transform:translateZ(0);-webkit-animation:.8s linear infinite load8;animation:.8s linear infinite load8}.ng-select .ng-spinner-loader:after{border-radius:50%;width:17px;height:17px}@-webkit-keyframes load8{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes load8{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.ng-select .ng-arrow-wrapper{cursor:pointer;position:relative;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-arrow-wrapper .ng-arrow{pointer-events:none;display:inline-block;height:0;width:0;position:relative}.ng-dropdown-panel{box-sizing:border-box;position:absolute;opacity:0;width:100%;z-index:1050;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .ng-dropdown-panel-items{display:block;height:auto;box-sizing:border-box;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{box-sizing:border-box;cursor:pointer;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:700;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{overflow:hidden;overflow-y:auto;position:relative;display:block;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .scrollable-content{top:0;left:0;width:100%;height:100%;position:absolute}.ng-dropdown-panel .total-padding{width:1px;opacity:0}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgSelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'ng-select',
                template: "<div\n    (mousedown)=\"handleMousedown($event)\"\n    [class.ng-appearance-outline]=\"appearance === 'outline'\"\n    [class.ng-has-value]=\"hasValue\"\n    class=\"ng-select-container\">\n\n    <div class=\"ng-value-container\">\n        <div class=\"ng-placeholder\">{{placeholder}}</div>\n\n        <ng-container *ngIf=\"!multiLabelTemplate && selectedItems.length > 0\">\n            <div [class.ng-value-disabled]=\"item.disabled\" class=\"ng-value\" *ngFor=\"let item of selectedItems; trackBy: trackByOption\">\n                <ng-template #defaultLabelTemplate>\n                    <span class=\"ng-value-icon left\" (click)=\"unselect(item);\" aria-hidden=\"true\">\u00D7</span>\n                    <span class=\"ng-value-label\" [ngItemLabel]=\"item.label\" [escape]=\"escapeHTML\"></span>\n                </ng-template>\n\n                <ng-template\n                    [ngTemplateOutlet]=\"labelTemplate || defaultLabelTemplate\"\n                    [ngTemplateOutletContext]=\"{ item: item.value, clear: clearItem, label: item.label }\">\n                </ng-template>\n            </div>\n        </ng-container>\n\n        <ng-template *ngIf=\"multiLabelTemplate && selectedValues.length > 0\"\n                [ngTemplateOutlet]=\"multiLabelTemplate\"\n                [ngTemplateOutletContext]=\"{ items: selectedValues, clear: clearItem }\">\n        </ng-template>\n\n        <div class=\"ng-input\">\n            <input #searchInput\n                   [attr.id]=\"labelForId\"\n                   [attr.tabindex]=\"tabIndex\"\n                   [readOnly]=\"!searchable || itemsList.maxItemsSelected\"\n                   [disabled]=\"disabled\"\n                   [value]=\"searchTerm ? searchTerm : ''\"\n                   (input)=\"filter(searchInput.value)\"\n                   (compositionstart)=\"onCompositionStart()\"\n                   (compositionend)=\"onCompositionEnd(searchInput.value)\"\n                   (focus)=\"onInputFocus($event)\"\n                   (blur)=\"onInputBlur($event)\"\n                   (change)=\"$event.stopPropagation()\"\n                   role=\"combobox\"\n                   [attr.aria-expanded]=\"isOpen\"\n                   [attr.aria-owns]=\"isOpen ? dropdownId : null\"\n                   [attr.aria-activedescendant]=\"isOpen ? itemsList?.markedItem?.htmlId : null\">\n        </div>\n    </div>\n\n    <ng-container *ngIf=\"loading\">\n        <ng-template #defaultLoadingSpinnerTemplate>\n            <div class=\"ng-spinner-loader\"></div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"loadingSpinnerTemplate || defaultLoadingSpinnerTemplate\">\n        </ng-template>\n    </ng-container>\n\n    <span *ngIf=\"showClear()\" class=\"ng-clear-wrapper\" title=\"{{clearAllText}}\">\n        <span class=\"ng-clear\" aria-hidden=\"true\">\u00D7</span>\n    </span>\n\n    <span class=\"ng-arrow-wrapper\">\n        <span class=\"ng-arrow\"></span>\n    </span>\n</div>\n\n<ng-dropdown-panel *ngIf=\"isOpen\"\n                   class=\"ng-dropdown-panel\"\n                   [virtualScroll]=\"virtualScroll\"\n                   [bufferAmount]=\"bufferAmount\"\n                   [appendTo]=\"appendTo\"\n                   [position]=\"dropdownPosition\"\n                   [headerTemplate]=\"headerTemplate\"\n                   [footerTemplate]=\"footerTemplate\"\n                   [filterValue]=\"searchTerm\"\n                   [items]=\"itemsList.filteredItems\"\n                   [markedItem]=\"itemsList.markedItem\"\n                   (update)=\"viewPortItems = $event\"\n                   (scroll)=\"scroll.emit($event)\"\n                   (scrollToEnd)=\"scrollToEnd.emit($event)\"\n                   (outsideClick)=\"close()\"\n                   [class.ng-select-multiple]=\"multiple\"\n                   [ngClass]=\"appendTo ? classes : null\"\n                   [id]=\"dropdownId\">\n\n    <ng-container>\n        <div class=\"ng-option\" [attr.role]=\"item.children ? 'group' : 'option'\" (click)=\"toggleItem(item)\" (mouseover)=\"onItemHover(item)\"\n                *ngFor=\"let item of viewPortItems; trackBy: trackByOption\"\n                [class.ng-option-disabled]=\"item.disabled\"\n                [class.ng-option-selected]=\"item.selected\"\n                [class.ng-optgroup]=\"item.children\"\n                [class.ng-option]=\"!item.children\"\n                [class.ng-option-child]=\"!!item.parent\"\n                [class.ng-option-marked]=\"item === itemsList.markedItem\"\n                [attr.aria-selected]=\"item.selected\"\n                [attr.id]=\"item?.htmlId\">\n\n            <ng-template #defaultOptionTemplate>\n                <span class=\"ng-option-label\" [ngItemLabel]=\"item.label\" [escape]=\"escapeHTML\"></span>\n            </ng-template>\n\n            <ng-template\n                [ngTemplateOutlet]=\"item.children ? (optgroupTemplate || defaultOptionTemplate) : (optionTemplate || defaultOptionTemplate)\"\n                [ngTemplateOutletContext]=\"{ item: item.value, item$:item, index: item.index, searchTerm: searchTerm }\">\n            </ng-template>\n        </div>\n\n        <div class=\"ng-option\" [class.ng-option-marked]=\"!itemsList.markedItem\" (mouseover)=\"itemsList.unmarkItem()\" role=\"option\" (click)=\"selectTag()\" *ngIf=\"showAddTag\">\n            <ng-template #defaultTagTemplate>\n                <span><span class=\"ng-tag-label\">{{addTagText}}</span>\"{{searchTerm}}\"</span>\n            </ng-template>\n\n            <ng-template\n                [ngTemplateOutlet]=\"tagTemplate || defaultTagTemplate\"\n                [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n            </ng-template>\n        </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"showNoItemsFound()\">\n        <ng-template #defaultNotFoundTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{notFoundText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"notFoundTemplate || defaultNotFoundTemplate\"\n            [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n        </ng-template>\n    </ng-container>\n\n    <ng-container *ngIf=\"showTypeToSearch()\">\n        <ng-template #defaultTypeToSearchTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{typeToSearchText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"typeToSearchTemplate || defaultTypeToSearchTemplate\">\n        </ng-template>\n    </ng-container>\n\n    <ng-container *ngIf=\"loading && itemsList.filteredItems.length === 0\">\n        <ng-template #defaultLoadingTextTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{loadingText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"loadingTextTemplate || defaultLoadingTextTemplate\"\n            [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n        </ng-template>\n    </ng-container>\n\n</ng-dropdown-panel>\n",
                providers: [{
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(( /**
                         * @return {?}
                         */function () { return NgSelectComponent; })),
                        multi: true
                    }, NgDropdownPanelService],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                host: {
                    'role': 'listbox',
                    '[class.ng-select]': 'useDefaultClass',
                    '[class.ng-select-single]': '!multiple'
                },
                styles: [".ng-select{position:relative;display:block;box-sizing:border-box}.ng-select div,.ng-select input,.ng-select span{box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input{opacity:1}.ng-select.ng-select-opened .ng-select-container{z-index:1001}.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-value{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.ng-select.ng-select-disabled .ng-arrow-wrapper{cursor:default}.ng-select.ng-select-filtered .ng-placeholder{display:none}.ng-select .ng-select-container{cursor:default;display:flex;outline:0;overflow:hidden;position:relative;width:100%}.ng-select .ng-select-container .ng-value-container{display:flex;flex:1}.ng-select .ng-select-container .ng-value-container .ng-input{opacity:0}.ng-select .ng-select-container .ng-value-container .ng-input>input{box-sizing:content-box;background:none;border:0;box-shadow:none;outline:0;cursor:default;width:100%}.ng-select .ng-select-container .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select .ng-select-container .ng-value-container .ng-input>input[readonly]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:0;padding:0}.ng-select.ng-select-single.ng-select-filtered .ng-select-container .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container,.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{position:absolute;left:0;width:100%}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:wrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{flex:1;z-index:2}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{position:absolute;z-index:1}.ng-select .ng-clear-wrapper{cursor:pointer;position:relative;width:17px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-clear-wrapper .ng-clear{display:inline-block;font-size:18px;line-height:1;pointer-events:none}.ng-select .ng-spinner-loader{border-radius:50%;width:17px;height:17px;margin-right:5px;font-size:10px;position:relative;text-indent:-9999em;border-top:2px solid rgba(66,66,66,.2);border-right:2px solid rgba(66,66,66,.2);border-bottom:2px solid rgba(66,66,66,.2);border-left:2px solid #424242;transform:translateZ(0);-webkit-animation:.8s linear infinite load8;animation:.8s linear infinite load8}.ng-select .ng-spinner-loader:after{border-radius:50%;width:17px;height:17px}@-webkit-keyframes load8{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes load8{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.ng-select .ng-arrow-wrapper{cursor:pointer;position:relative;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-arrow-wrapper .ng-arrow{pointer-events:none;display:inline-block;height:0;width:0;position:relative}.ng-dropdown-panel{box-sizing:border-box;position:absolute;opacity:0;width:100%;z-index:1050;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .ng-dropdown-panel-items{display:block;height:auto;box-sizing:border-box;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{box-sizing:border-box;cursor:pointer;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:700;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{overflow:hidden;overflow-y:auto;position:relative;display:block;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .scrollable-content{top:0;left:0;width:100%;height:100%;position:absolute}.ng-dropdown-panel .total-padding{width:1px;opacity:0}"]
            }]
    }], function () { return [{ type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
                args: ['class']
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
                args: ['autofocus']
            }] }, { type: NgSelectConfig }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [SELECTION_MODEL_FACTORY]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: ConsoleService }]; }, { markFirst: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], dropdownPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], closeOnSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], hideSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], selectOnTab: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], bufferAmount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], selectableGroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], selectableGroupAsModel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], searchFn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], trackByFn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], clearOnBackspace: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], labelForId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], inputAttrs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], readonly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], searchWhileComposing: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], minTermLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], editableSearchTerm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], keyDownFn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], multiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.ng-select-multiple']
        }], addTag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.ng-select-taggable']
        }], searchable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.ng-select-searchable']
        }], clearable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.ng-select-clearable']
        }], isOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.ng-select-opened']
        }], blurEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ['blur']
        }], focusEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ['focus']
        }], changeEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ['change']
        }], openEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ['open']
        }], closeEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ['close']
        }], searchEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ['search']
        }], clearEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ['clear']
        }], addEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ['add']
        }], removeEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ['remove']
        }], scroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ['scroll']
        }], scrollToEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ['scrollToEnd']
        }], items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], compareWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], clearSearchOnAdd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.ng-select-disabled']
        }], filtered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.ng-select-filtered']
        }], handleKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['keydown', ['$event']]
        }], bindLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], notFoundText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], typeToSearchText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], addTagText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], loadingText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], clearAllText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], virtualScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], openOnEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], appendTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], bindValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], appearance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], maxSelectedItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], groupBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], groupValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], typeahead: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.ng-select-typeahead']
        }], optionTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [NgOptionTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }]
        }], optgroupTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [NgOptgroupTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }]
        }], labelTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [NgLabelTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }]
        }], multiLabelTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [NgMultiLabelTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }]
        }], headerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [NgHeaderTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }]
        }], footerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [NgFooterTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }]
        }], notFoundTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [NgNotFoundTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }]
        }], typeToSearchTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [NgTypeToSearchTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }]
        }], loadingTextTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [NgLoadingTextTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }]
        }], tagTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [NgTagTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }]
        }], loadingSpinnerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [NgLoadingSpinnerTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }]
        }], dropdownPanel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(( /**
                             * @return {?}
                             */function () { return NgDropdownPanelComponent; }))]
        }], searchInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['searchInput', { static: true }]
        }], ngOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [NgOptionComponent, { descendants: true }]
        }] }); })();
    return NgSelectComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/selection-model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function DefaultSelectionModelFactory() {
    return new DefaultSelectionModel();
}
/**
 * @record
 */
function SelectionModel() { }
if (false) {}
var DefaultSelectionModel = /** @class */ (function () {
    function DefaultSelectionModel() {
        this._selected = [];
    }
    Object.defineProperty(DefaultSelectionModel.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selected;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} item
     * @param {?} multiple
     * @param {?} groupAsModel
     * @return {?}
     */
    DefaultSelectionModel.prototype.select = /**
     * @param {?} item
     * @param {?} multiple
     * @param {?} groupAsModel
     * @return {?}
     */
    function (item, multiple, groupAsModel) {
        item.selected = true;
        if (!item.children || (!multiple && groupAsModel)) {
            this._selected.push(item);
        }
        if (multiple) {
            if (item.parent) {
                /** @type {?} */
                var childrenCount = item.parent.children.length;
                /** @type {?} */
                var selectedCount = item.parent.children.filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return x.selected; })).length;
                item.parent.selected = childrenCount === selectedCount;
            }
            else if (item.children) {
                this._setChildrenSelectedState(item.children, true);
                this._removeChildren(item);
                if (groupAsModel && this._activeChildren(item)) {
                    this._selected = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this._selected.filter((/**
                     * @param {?} x
                     * @return {?}
                     */
                    function (x) { return x.parent !== item; })), [item]);
                }
                else {
                    this._selected = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this._selected, item.children.filter((/**
                     * @param {?} x
                     * @return {?}
                     */
                    function (x) { return !x.disabled; })));
                }
            }
        }
    };
    /**
     * @param {?} item
     * @param {?} multiple
     * @return {?}
     */
    DefaultSelectionModel.prototype.unselect = /**
     * @param {?} item
     * @param {?} multiple
     * @return {?}
     */
    function (item, multiple) {
        var _a;
        this._selected = this._selected.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x !== item; }));
        item.selected = false;
        if (multiple) {
            if (item.parent && item.parent.selected) {
                /** @type {?} */
                var children = item.parent.children;
                this._removeParent(item.parent);
                this._removeChildren(item.parent);
                (_a = this._selected).push.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(children.filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return x !== item && !x.disabled; }))));
                item.parent.selected = false;
            }
            else if (item.children) {
                this._setChildrenSelectedState(item.children, false);
                this._removeChildren(item);
            }
        }
    };
    /**
     * @param {?} keepDisabled
     * @return {?}
     */
    DefaultSelectionModel.prototype.clear = /**
     * @param {?} keepDisabled
     * @return {?}
     */
    function (keepDisabled) {
        this._selected = keepDisabled ? this._selected.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.disabled; })) : [];
    };
    /**
     * @private
     * @param {?} children
     * @param {?} selected
     * @return {?}
     */
    DefaultSelectionModel.prototype._setChildrenSelectedState = /**
     * @private
     * @param {?} children
     * @param {?} selected
     * @return {?}
     */
    function (children, selected) {
        var e_1, _a;
        try {
            for (var children_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(children), children_1_1 = children_1.next(); !children_1_1.done; children_1_1 = children_1.next()) {
                var child = children_1_1.value;
                if (child.disabled) {
                    continue;
                }
                child.selected = selected;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (children_1_1 && !children_1_1.done && (_a = children_1.return)) _a.call(children_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        ;
    };
    /**
     * @private
     * @param {?} parent
     * @return {?}
     */
    DefaultSelectionModel.prototype._removeChildren = /**
     * @private
     * @param {?} parent
     * @return {?}
     */
    function (parent) {
        this._selected = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this._selected.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.parent !== parent; })), parent.children.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.parent === parent && x.disabled && x.selected; })));
    };
    /**
     * @private
     * @param {?} parent
     * @return {?}
     */
    DefaultSelectionModel.prototype._removeParent = /**
     * @private
     * @param {?} parent
     * @return {?}
     */
    function (parent) {
        this._selected = this._selected.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x !== parent; }));
    };
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    DefaultSelectionModel.prototype._activeChildren = /**
     * @private
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return item.children.every((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return !x.disabled || x.selected; }));
    };
    return DefaultSelectionModel;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-select.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ɵ0 = DefaultSelectionModelFactory;
var NgSelectModule = /** @class */ (function () {
    function NgSelectModule() {
    }
NgSelectModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NgSelectModule });
NgSelectModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NgSelectModule_Factory(t) { return new (t || NgSelectModule)(); }, providers: [
        { provide: SELECTION_MODEL_FACTORY, useValue: ɵ0 }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgSelectModule, { declarations: function () { return [NgDropdownPanelComponent,
        NgOptionComponent,
        NgSelectComponent,
        NgOptgroupTemplateDirective,
        NgOptionTemplateDirective,
        NgLabelTemplateDirective,
        NgMultiLabelTemplateDirective,
        NgHeaderTemplateDirective,
        NgFooterTemplateDirective,
        NgNotFoundTemplateDirective,
        NgTypeToSearchTemplateDirective,
        NgLoadingTextTemplateDirective,
        NgTagTemplateDirective,
        NgLoadingSpinnerTemplateDirective,
        NgItemLabelDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]]; }, exports: function () { return [NgSelectComponent,
        NgOptionComponent,
        NgOptgroupTemplateDirective,
        NgOptionTemplateDirective,
        NgLabelTemplateDirective,
        NgMultiLabelTemplateDirective,
        NgHeaderTemplateDirective,
        NgFooterTemplateDirective,
        NgNotFoundTemplateDirective,
        NgTypeToSearchTemplateDirective,
        NgLoadingTextTemplateDirective,
        NgTagTemplateDirective,
        NgLoadingSpinnerTemplateDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgSelectModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    NgDropdownPanelComponent,
                    NgOptionComponent,
                    NgSelectComponent,
                    NgOptgroupTemplateDirective,
                    NgOptionTemplateDirective,
                    NgLabelTemplateDirective,
                    NgMultiLabelTemplateDirective,
                    NgHeaderTemplateDirective,
                    NgFooterTemplateDirective,
                    NgNotFoundTemplateDirective,
                    NgTypeToSearchTemplateDirective,
                    NgLoadingTextTemplateDirective,
                    NgTagTemplateDirective,
                    NgLoadingSpinnerTemplateDirective,
                    NgItemLabelDirective
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]
                ],
                exports: [
                    NgSelectComponent,
                    NgOptionComponent,
                    NgOptgroupTemplateDirective,
                    NgOptionTemplateDirective,
                    NgLabelTemplateDirective,
                    NgMultiLabelTemplateDirective,
                    NgHeaderTemplateDirective,
                    NgFooterTemplateDirective,
                    NgNotFoundTemplateDirective,
                    NgTypeToSearchTemplateDirective,
                    NgLoadingTextTemplateDirective,
                    NgTagTemplateDirective,
                    NgLoadingSpinnerTemplateDirective
                ],
                providers: [
                    { provide: SELECTION_MODEL_FACTORY, useValue: ɵ0 }
                ]
            }]
    }], function () { return []; }, null); })();
    return NgSelectModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-select-ng-select.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ng-select-ng-select.js.map

/***/ }),

/***/ "./node_modules/ng-multiselect-dropdown/__ivy_ngcc__/fesm5/ng-multiselect-dropdown.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/ng-multiselect-dropdown/__ivy_ngcc__/fesm5/ng-multiselect-dropdown.js ***!
  \********************************************************************************************/
/*! exports provided: MultiSelectComponent, NgMultiSelectDropDownModule, ɵa, ɵb, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiSelectComponent", function() { return MultiSelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgMultiSelectDropDownModule", function() { return NgMultiSelectDropDownModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DROPDOWN_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return ClickOutsideDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return ListFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");









function MultiSelectComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r516 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r516._placeholder);
} }
function MultiSelectComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    var _r526 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MultiSelectComponent_span_4_Template_a_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r526); var item_r523 = ctx.$implicit; var ctx_r525 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r525.onItemClick($event, item_r523); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r523 = ctx.$implicit;
    var k_r524 = ctx.index;
    var ctx_r517 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", k_r524 > ctx_r517._settings.itemsShowLimit - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r523.text, " ");
} }
function MultiSelectComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r518 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("+", ctx_r518.itemShowRemaining(), "");
} }
function MultiSelectComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    var _r528 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MultiSelectComponent_li_10_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r528); var ctx_r527 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r527.toggleSelectAll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r519 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r519.isAllItemsSelected())("disabled", ctx_r519.disabled || ctx_r519.isLimitSelectionReached());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](!ctx_r519.isAllItemsSelected() ? ctx_r519._settings.selectAllText : ctx_r519._settings.unSelectAllText);
} }
function MultiSelectComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    var _r530 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MultiSelectComponent_li_11_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r530); var ctx_r529 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r529.filter.text = $event; })("ngModelChange", function MultiSelectComponent_li_11_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r530); var ctx_r531 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r531.onFilterTextChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r520 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readOnly", ctx_r520.disabled)("placeholder", ctx_r520._settings.searchPlaceholderText)("ngModel", ctx_r520.filter.text);
} }
function MultiSelectComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    var _r535 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MultiSelectComponent_li_13_Template_li_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r535); var item_r532 = ctx.$implicit; var ctx_r534 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r534.onItemClick($event, item_r532); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r532 = ctx.$implicit;
    var ctx_r521 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r521.isSelected(item_r532))("disabled", ctx_r521.disabled || ctx_r521.isLimitSelectionReached() && !ctx_r521.isSelected(item_r532) || item_r532.isDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r532.text);
} }
function MultiSelectComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r522 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r522._settings.noDataAvailablePlaceholderText);
} }
var ListItem = /** @class */ (function () {
    function ListItem(source) {
        if (typeof source === 'string' || typeof source === 'number') {
            this.id = this.text = source;
            this.isDisabled = false;
        }
        if (typeof source === 'object') {
            this.id = source.id;
            this.text = source.text;
            this.isDisabled = source.isDisabled;
        }
    }
    return ListItem;
}());

var DROPDOWN_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return MultiSelectComponent; }),
    multi: true
};
var noop = function () { };
var ɵ0 = noop;
var MultiSelectComponent = /** @class */ (function () {
    function MultiSelectComponent(cdr) {
        this.cdr = cdr;
        this._data = [];
        this.selectedItems = [];
        this.isDropdownOpen = true;
        this._placeholder = "Select";
        this._sourceDataType = null; // to keep note of the source data type. could be array of string/number/object
        this._sourceDataFields = []; // store source data fields names
        this.filter = new ListItem(this.data);
        this.defaultSettings = {
            singleSelection: false,
            idField: "id",
            textField: "text",
            disabledField: "isDisabled",
            enableCheckAll: true,
            selectAllText: "Select All",
            unSelectAllText: "UnSelect All",
            allowSearchFilter: false,
            limitSelection: -1,
            clearSearchFilter: true,
            maxHeight: 197,
            itemsShowLimit: 999999999999,
            searchPlaceholderText: "Search",
            noDataAvailablePlaceholderText: "No data available",
            closeDropDownOnSelection: false,
            showSelectedItemsAtTop: false,
            defaultOpen: false,
            allowRemoteDataSearch: false
        };
        this.disabled = false;
        this.onFilterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDropDownClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDeSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDeSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
    }
    Object.defineProperty(MultiSelectComponent.prototype, "placeholder", {
        set: function (value) {
            if (value) {
                this._placeholder = value;
            }
            else {
                this._placeholder = "Select";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiSelectComponent.prototype, "settings", {
        set: function (value) {
            if (value) {
                this._settings = Object.assign(this.defaultSettings, value);
            }
            else {
                this._settings = Object.assign(this.defaultSettings);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiSelectComponent.prototype, "data", {
        set: function (value) {
            var _this = this;
            if (!value) {
                this._data = [];
            }
            else {
                var firstItem = value[0];
                this._sourceDataType = typeof firstItem;
                this._sourceDataFields = this.getFields(firstItem);
                this._data = value.map(function (item) {
                    return typeof item === "string" || typeof item === "number"
                        ? new ListItem(item)
                        : new ListItem({
                            id: item[_this._settings.idField],
                            text: item[_this._settings.textField],
                            isDisabled: item[_this._settings.disabledField]
                        });
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    MultiSelectComponent.prototype.onFilterTextChange = function ($event) {
        this.onFilterChange.emit($event);
    };
    MultiSelectComponent.prototype.onItemClick = function ($event, item) {
        if (this.disabled || item.isDisabled) {
            return false;
        }
        var found = this.isSelected(item);
        var allowAdd = this._settings.limitSelection === -1 || (this._settings.limitSelection > 0 && this.selectedItems.length < this._settings.limitSelection);
        if (!found) {
            if (allowAdd) {
                this.addSelected(item);
            }
        }
        else {
            this.removeSelected(item);
        }
        if (this._settings.singleSelection && this._settings.closeDropDownOnSelection) {
            this.closeDropdown();
        }
    };
    MultiSelectComponent.prototype.writeValue = function (value) {
        var _this = this;
        if (value !== undefined && value !== null && value.length > 0) {
            if (this._settings.singleSelection) {
                try {
                    if (value.length >= 1) {
                        var firstItem = value[0];
                        this.selectedItems = [
                            typeof firstItem === "string" || typeof firstItem === "number"
                                ? new ListItem(firstItem)
                                : new ListItem({
                                    id: firstItem[this._settings.idField],
                                    text: firstItem[this._settings.textField],
                                    isDisabled: firstItem[this._settings.disabledField]
                                })
                        ];
                    }
                }
                catch (e) {
                    // console.error(e.body.msg);
                }
            }
            else {
                var _data = value.map(function (item) {
                    return typeof item === "string" || typeof item === "number"
                        ? new ListItem(item)
                        : new ListItem({
                            id: item[_this._settings.idField],
                            text: item[_this._settings.textField],
                            isDisabled: item[_this._settings.disabledField]
                        });
                });
                if (this._settings.limitSelection > 0) {
                    this.selectedItems = _data.splice(0, this._settings.limitSelection);
                }
                else {
                    this.selectedItems = _data;
                }
            }
        }
        else {
            this.selectedItems = [];
        }
        this.onChangeCallback(value);
    };
    // From ControlValueAccessor interface
    MultiSelectComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    // From ControlValueAccessor interface
    MultiSelectComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    // Set touched on blur
    MultiSelectComponent.prototype.onTouched = function () {
        this.closeDropdown();
        this.onTouchedCallback();
    };
    MultiSelectComponent.prototype.trackByFn = function (index, item) {
        return item.id;
    };
    MultiSelectComponent.prototype.isSelected = function (clickedItem) {
        var found = false;
        this.selectedItems.forEach(function (item) {
            if (clickedItem.id === item.id) {
                found = true;
            }
        });
        return found;
    };
    MultiSelectComponent.prototype.isLimitSelectionReached = function () {
        return this._settings.limitSelection === this.selectedItems.length;
    };
    MultiSelectComponent.prototype.isAllItemsSelected = function () {
        // get disabld item count
        var itemDisabledCount = this._data.filter(function (item) { return item.isDisabled; }).length;
        // take disabled items into consideration when checking
        if ((!this.data || this.data.length === 0) && this._settings.allowRemoteDataSearch) {
            return false;
        }
        return this._data.length === this.selectedItems.length + itemDisabledCount;
    };
    MultiSelectComponent.prototype.showButton = function () {
        if (!this._settings.singleSelection) {
            if (this._settings.limitSelection > 0) {
                return false;
            }
            // this._settings.enableCheckAll = this._settings.limitSelection === -1 ? true : false;
            return true; // !this._settings.singleSelection && this._settings.enableCheckAll && this._data.length > 0;
        }
        else {
            // should be disabled in single selection mode
            return false;
        }
    };
    MultiSelectComponent.prototype.itemShowRemaining = function () {
        return this.selectedItems.length - this._settings.itemsShowLimit;
    };
    MultiSelectComponent.prototype.addSelected = function (item) {
        if (this._settings.singleSelection) {
            this.selectedItems = [];
            this.selectedItems.push(item);
        }
        else {
            this.selectedItems.push(item);
        }
        this.onChangeCallback(this.emittedValue(this.selectedItems));
        this.onSelect.emit(this.emittedValue(item));
    };
    MultiSelectComponent.prototype.removeSelected = function (itemSel) {
        var _this = this;
        this.selectedItems.forEach(function (item) {
            if (itemSel.id === item.id) {
                _this.selectedItems.splice(_this.selectedItems.indexOf(item), 1);
            }
        });
        this.onChangeCallback(this.emittedValue(this.selectedItems));
        this.onDeSelect.emit(this.emittedValue(itemSel));
    };
    MultiSelectComponent.prototype.emittedValue = function (val) {
        var _this = this;
        var selected = [];
        if (Array.isArray(val)) {
            val.map(function (item) {
                selected.push(_this.objectify(item));
            });
        }
        else {
            if (val) {
                return this.objectify(val);
            }
        }
        return selected;
    };
    MultiSelectComponent.prototype.objectify = function (val) {
        if (this._sourceDataType === 'object') {
            var obj = {};
            obj[this._settings.idField] = val.id;
            obj[this._settings.textField] = val.text;
            if (this._sourceDataFields.includes(this._settings.disabledField)) {
                obj[this._settings.disabledField] = val.isDisabled;
            }
            return obj;
        }
        if (this._sourceDataType === 'number') {
            return Number(val.id);
        }
        else {
            return val.text;
        }
    };
    MultiSelectComponent.prototype.toggleDropdown = function (evt) {
        evt.preventDefault();
        if (this.disabled && this._settings.singleSelection) {
            return;
        }
        this._settings.defaultOpen = !this._settings.defaultOpen;
        if (!this._settings.defaultOpen) {
            this.onDropDownClose.emit();
        }
    };
    MultiSelectComponent.prototype.closeDropdown = function () {
        this._settings.defaultOpen = false;
        // clear search text
        if (this._settings.clearSearchFilter) {
            this.filter.text = "";
        }
        this.onDropDownClose.emit();
    };
    MultiSelectComponent.prototype.toggleSelectAll = function () {
        if (this.disabled) {
            return false;
        }
        if (!this.isAllItemsSelected()) {
            // filter out disabled item first before slicing
            this.selectedItems = this._data.filter(function (item) { return !item.isDisabled; }).slice();
            this.onSelectAll.emit(this.emittedValue(this.selectedItems));
        }
        else {
            this.selectedItems = [];
            this.onDeSelectAll.emit(this.emittedValue(this.selectedItems));
        }
        this.onChangeCallback(this.emittedValue(this.selectedItems));
    };
    MultiSelectComponent.prototype.getFields = function (inputData) {
        var fields = [];
        if (typeof inputData !== "object") {
            return fields;
        }
        // tslint:disable-next-line:forin
        for (var prop in inputData) {
            fields.push(prop);
        }
        return fields;
    };
    MultiSelectComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MultiSelectComponent.prototype, "placeholder", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MultiSelectComponent.prototype, "disabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MultiSelectComponent.prototype, "settings", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MultiSelectComponent.prototype, "data", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("onFilterChange")
    ], MultiSelectComponent.prototype, "onFilterChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("onDropDownClose")
    ], MultiSelectComponent.prototype, "onDropDownClose", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("onSelect")
    ], MultiSelectComponent.prototype, "onSelect", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("onDeSelect")
    ], MultiSelectComponent.prototype, "onDeSelect", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("onSelectAll")
    ], MultiSelectComponent.prototype, "onSelectAll", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("onDeSelectAll")
    ], MultiSelectComponent.prototype, "onDeSelectAll", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("blur")
    ], MultiSelectComponent.prototype, "onTouched", null);
MultiSelectComponent.ɵfac = function MultiSelectComponent_Factory(t) { return new (t || MultiSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
MultiSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MultiSelectComponent, selectors: [["ng-multiselect-dropdown"]], hostBindings: function MultiSelectComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function MultiSelectComponent_blur_HostBindingHandler() { return ctx.onTouched(); });
    } }, inputs: { disabled: "disabled", placeholder: "placeholder", settings: "settings", data: "data" }, outputs: { onFilterChange: "onFilterChange", onDropDownClose: "onDropDownClose", onSelect: "onSelect", onDeSelect: "onDeSelect", onSelectAll: "onSelectAll", onDeSelectAll: "onDeSelectAll" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([DROPDOWN_CONTROL_VALUE_ACCESSOR])], decls: 16, vars: 17, consts: [["tabindex", "=0", 1, "multiselect-dropdown", 3, "blur", "clickOutside"], ["tabindex", "-1", 1, "dropdown-btn", 3, "click"], [4, "ngIf"], ["class", "selected-item", 3, "hidden", 4, "ngFor", "ngForOf", "ngForTrackBy"], [2, "float", "right !important", "padding-right", "4px"], ["style", "padding-right: 6px;", 4, "ngIf"], [3, "ngClass"], [1, "dropdown-list", 3, "hidden"], [1, "item1"], ["class", "multiselect-item-checkbox", "style", "border-bottom: 1px solid #ccc;padding:10px", 3, "click", 4, "ngIf"], ["class", "filter-textbox", 4, "ngIf"], [1, "item2"], ["class", "multiselect-item-checkbox", 3, "click", 4, "ngFor", "ngForOf"], ["class", "no-data", 4, "ngIf"], [1, "selected-item", 3, "hidden"], [2, "padding-top", "2px", "padding-left", "2px", "color", "white", 3, "click"], [2, "padding-right", "6px"], [1, "multiselect-item-checkbox", 2, "border-bottom", "1px solid #ccc", "padding", "10px", 3, "click"], ["type", "checkbox", "aria-label", "multiselect-select-all", 3, "checked", "disabled"], [1, "filter-textbox"], ["type", "text", "aria-label", "multiselect-search", 3, "readOnly", "placeholder", "ngModel", "ngModelChange"], [1, "multiselect-item-checkbox", 3, "click"], ["type", "checkbox", "aria-label", "multiselect-item", 3, "checked", "disabled"], [1, "no-data"]], template: function MultiSelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function MultiSelectComponent_Template_div_blur_0_listener() { return ctx.onTouched(); })("clickOutside", function MultiSelectComponent_Template_div_clickOutside_0_listener() { return ctx.closeDropdown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MultiSelectComponent_Template_span_click_2_listener($event) { return ctx.toggleDropdown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MultiSelectComponent_span_3_Template, 2, 1, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MultiSelectComponent_span_4_Template, 4, 2, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MultiSelectComponent_span_6_Template, 2, 1, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, MultiSelectComponent_li_10_Template, 4, 3, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, MultiSelectComponent_li_11_Template, 2, 3, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, MultiSelectComponent_li_13_Template, 4, 3, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "multiSelectFilter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, MultiSelectComponent_li_15_Template, 3, 1, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedItems.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.selectedItems)("ngForTrackBy", ctx.trackByFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.itemShowRemaining() > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx._settings.defaultOpen ? "dropdown-up" : "dropdown-down");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx._settings.defaultOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx._data.length > 0 || ctx._settings.allowRemoteDataSearch) && !ctx._settings.singleSelection && ctx._settings.enableCheckAll && ctx._settings.limitSelection === 0 - 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx._data.length > 0 || ctx._settings.allowRemoteDataSearch) && ctx._settings.allowSearchFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("max-height", ctx._settings.maxHeight + "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](14, 14, ctx._data, ctx.filter));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._data.length == 0 && !ctx._settings.allowRemoteDataSearch);
    } }, directives: function () { return [ClickOutsideDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]; }, pipes: function () { return [ListFilterPipe]; }, styles: [".multiselect-dropdown[_ngcontent-%COMP%]{position:relative;width:100%;font-size:inherit;font-family:inherit}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]{display:inline-block;border:1px solid #adadad;width:100%;padding:6px 12px;margin-bottom:0;font-weight:400;line-height:1.52857143;text-align:left;vertical-align:middle;cursor:pointer;background-image:none;border-radius:4px}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%]{border:1px solid #337ab7;margin-right:4px;background:#337ab7;padding:0 5px;color:#fff;border-radius:2px;float:left}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%]:hover{box-shadow:1px 1px #959595}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-down[_ngcontent-%COMP%]{display:inline-block;top:10px;width:0;height:0;border-top:10px solid #adadad;border-left:10px solid transparent;border-right:10px solid transparent}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-up[_ngcontent-%COMP%]{display:inline-block;width:0;height:0;border-bottom:10px solid #adadad;border-left:10px solid transparent;border-right:10px solid transparent}.multiselect-dropdown[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{background-color:#eceeef}.dropdown-list[_ngcontent-%COMP%]{position:absolute;padding-top:6px;width:100%;z-index:9999;border:1px solid #ccc;border-radius:3px;background:#fff;margin-top:10px;box-shadow:0 1px 5px #959595}.dropdown-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:0;list-style:none;overflow:auto;margin:0}.dropdown-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:6px 10px;cursor:pointer;text-align:left}.dropdown-list[_ngcontent-%COMP%]   .filter-textbox[_ngcontent-%COMP%]{border-bottom:1px solid #ccc;position:relative;padding:10px}.dropdown-list[_ngcontent-%COMP%]   .filter-textbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:0;width:100%;padding:0 0 0 26px}.dropdown-list[_ngcontent-%COMP%]   .filter-textbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:0}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:focus + div[_ngcontent-%COMP%]:before, .multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:hover + div[_ngcontent-%COMP%]:before{border-color:#337ab7;background-color:#f2f2f2}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:active + div[_ngcontent-%COMP%]:before{transition-duration:0s}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] + div[_ngcontent-%COMP%]{position:relative;padding-left:2em;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;margin:0;color:#000}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] + div[_ngcontent-%COMP%]:before{box-sizing:content-box;content:\"\";color:#337ab7;position:absolute;top:50%;left:0;width:14px;height:14px;margin-top:-9px;border:2px solid #337ab7;text-align:center;transition:.4s}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] + div[_ngcontent-%COMP%]:after{box-sizing:content-box;content:\"\";position:absolute;transform:scale(0);transform-origin:50%;transition:transform .2s ease-out;background-color:transparent;top:50%;left:4px;width:8px;height:3px;margin-top:-4px;border-style:solid;border-color:#fff;border-width:0 0 3px 3px;-o-border-image:none;border-image:none;transform:rotate(-45deg) scale(0)}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled + div[_ngcontent-%COMP%]:before{border-color:#ccc}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled:focus + div[_ngcontent-%COMP%]:before   .multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled:hover + div[_ngcontent-%COMP%]:before{background-color:inherit}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled:checked + div[_ngcontent-%COMP%]:before{background-color:#ccc}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked + div[_ngcontent-%COMP%]:after{content:\"\";transition:transform .2s ease-out;transform:rotate(-45deg) scale(1)}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked + div[_ngcontent-%COMP%]:before{-webkit-animation:.2s ease-in borderscale;animation:.2s ease-in borderscale;background:#337ab7}@-webkit-keyframes borderscale{50%{box-shadow:0 0 0 2px #337ab7}}@keyframes borderscale{50%{box-shadow:0 0 0 2px #337ab7}}"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MultiSelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "ng-multiselect-dropdown",
                template: "<div tabindex=\"=0\" (blur)=\"onTouched()\" class=\"multiselect-dropdown\" (clickOutside)=\"closeDropdown()\">\r\n  <div [class.disabled]=\"disabled\">\r\n    <span tabindex=\"-1\" class=\"dropdown-btn\" (click)=\"toggleDropdown($event)\">\r\n      <span *ngIf=\"selectedItems.length == 0\">{{_placeholder}}</span>\r\n      <span class=\"selected-item\" *ngFor=\"let item of selectedItems;trackBy: trackByFn;let k = index\" [hidden]=\"k > _settings.itemsShowLimit-1\">\r\n        {{item.text}}\r\n        <a style=\"padding-top:2px;padding-left:2px;color:white\" (click)=\"onItemClick($event,item)\">x</a>\r\n      </span>\r\n      <span style=\"float:right !important;padding-right:4px\">\r\n        <span style=\"padding-right: 6px;\" *ngIf=\"itemShowRemaining()>0\">+{{itemShowRemaining()}}</span>\r\n        <span [ngClass]=\"_settings.defaultOpen ? 'dropdown-up' : 'dropdown-down'\"></span>\r\n      </span>\r\n    </span>\r\n  </div>\r\n  <div class=\"dropdown-list\" [hidden]=\"!_settings.defaultOpen\">\r\n    <ul class=\"item1\">\r\n      <li (click)=\"toggleSelectAll()\" *ngIf=\"(_data.length > 0 || _settings.allowRemoteDataSearch) && !_settings.singleSelection && _settings.enableCheckAll && _settings.limitSelection===-1\" class=\"multiselect-item-checkbox\" style=\"border-bottom: 1px solid #ccc;padding:10px\">\r\n        <input type=\"checkbox\" aria-label=\"multiselect-select-all\" [checked]=\"isAllItemsSelected()\" [disabled]=\"disabled || isLimitSelectionReached()\" />\r\n        <div>{{!isAllItemsSelected() ? _settings.selectAllText : _settings.unSelectAllText}}</div>\r\n      </li>\r\n      <li class=\"filter-textbox\" *ngIf=\"(_data.length>0 || _settings.allowRemoteDataSearch) && _settings.allowSearchFilter\">\r\n        <input type=\"text\" aria-label=\"multiselect-search\" [readOnly]=\"disabled\" [placeholder]=\"_settings.searchPlaceholderText\" [(ngModel)]=\"filter.text\" (ngModelChange)=\"onFilterTextChange($event)\">\r\n      </li>\r\n    </ul>\r\n    <ul class=\"item2\" [style.maxHeight]=\"_settings.maxHeight+'px'\">\r\n      <li *ngFor=\"let item of _data | multiSelectFilter:filter; let i = index;\" (click)=\"onItemClick($event,item)\" class=\"multiselect-item-checkbox\">\r\n        <input type=\"checkbox\" aria-label=\"multiselect-item\" [checked]=\"isSelected(item)\" [disabled]=\"disabled || (isLimitSelectionReached() && !isSelected(item)) || item.isDisabled\" />\r\n        <div>{{item.text}}</div>\r\n      </li>\r\n      <li class='no-data' *ngIf=\"_data.length == 0 && !_settings.allowRemoteDataSearch\">\r\n        <h5>{{_settings.noDataAvailablePlaceholderText}}</h5>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n",
                providers: [DROPDOWN_CONTROL_VALUE_ACCESSOR],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                styles: [".multiselect-dropdown{position:relative;width:100%;font-size:inherit;font-family:inherit}.multiselect-dropdown .dropdown-btn{display:inline-block;border:1px solid #adadad;width:100%;padding:6px 12px;margin-bottom:0;font-weight:400;line-height:1.52857143;text-align:left;vertical-align:middle;cursor:pointer;background-image:none;border-radius:4px}.multiselect-dropdown .dropdown-btn .selected-item{border:1px solid #337ab7;margin-right:4px;background:#337ab7;padding:0 5px;color:#fff;border-radius:2px;float:left}.multiselect-dropdown .dropdown-btn .selected-item a{text-decoration:none}.multiselect-dropdown .dropdown-btn .selected-item:hover{box-shadow:1px 1px #959595}.multiselect-dropdown .dropdown-btn .dropdown-down{display:inline-block;top:10px;width:0;height:0;border-top:10px solid #adadad;border-left:10px solid transparent;border-right:10px solid transparent}.multiselect-dropdown .dropdown-btn .dropdown-up{display:inline-block;width:0;height:0;border-bottom:10px solid #adadad;border-left:10px solid transparent;border-right:10px solid transparent}.multiselect-dropdown .disabled>span{background-color:#eceeef}.dropdown-list{position:absolute;padding-top:6px;width:100%;z-index:9999;border:1px solid #ccc;border-radius:3px;background:#fff;margin-top:10px;box-shadow:0 1px 5px #959595}.dropdown-list ul{padding:0;list-style:none;overflow:auto;margin:0}.dropdown-list li{padding:6px 10px;cursor:pointer;text-align:left}.dropdown-list .filter-textbox{border-bottom:1px solid #ccc;position:relative;padding:10px}.dropdown-list .filter-textbox input{border:0;width:100%;padding:0 0 0 26px}.dropdown-list .filter-textbox input:focus{outline:0}.multiselect-item-checkbox input[type=checkbox]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.multiselect-item-checkbox input[type=checkbox]:focus+div:before,.multiselect-item-checkbox input[type=checkbox]:hover+div:before{border-color:#337ab7;background-color:#f2f2f2}.multiselect-item-checkbox input[type=checkbox]:active+div:before{transition-duration:0s}.multiselect-item-checkbox input[type=checkbox]+div{position:relative;padding-left:2em;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;margin:0;color:#000}.multiselect-item-checkbox input[type=checkbox]+div:before{box-sizing:content-box;content:\"\";color:#337ab7;position:absolute;top:50%;left:0;width:14px;height:14px;margin-top:-9px;border:2px solid #337ab7;text-align:center;transition:.4s}.multiselect-item-checkbox input[type=checkbox]+div:after{box-sizing:content-box;content:\"\";position:absolute;transform:scale(0);transform-origin:50%;transition:transform .2s ease-out;background-color:transparent;top:50%;left:4px;width:8px;height:3px;margin-top:-4px;border-style:solid;border-color:#fff;border-width:0 0 3px 3px;-o-border-image:none;border-image:none;transform:rotate(-45deg) scale(0)}.multiselect-item-checkbox input[type=checkbox]:disabled+div:before{border-color:#ccc}.multiselect-item-checkbox input[type=checkbox]:disabled:focus+div:before .multiselect-item-checkbox input[type=checkbox]:disabled:hover+div:before{background-color:inherit}.multiselect-item-checkbox input[type=checkbox]:disabled:checked+div:before{background-color:#ccc}.multiselect-item-checkbox input[type=checkbox]:checked+div:after{content:\"\";transition:transform .2s ease-out;transform:rotate(-45deg) scale(1)}.multiselect-item-checkbox input[type=checkbox]:checked+div:before{-webkit-animation:.2s ease-in borderscale;animation:.2s ease-in borderscale;background:#337ab7}@-webkit-keyframes borderscale{50%{box-shadow:0 0 0 2px #337ab7}}@keyframes borderscale{50%{box-shadow:0 0 0 2px #337ab7}}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], onFilterChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ["onFilterChange"]
        }], onDropDownClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ["onDropDownClose"]
        }], onSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ["onSelect"]
        }], onDeSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ["onDeSelect"]
        }], onSelectAll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ["onSelectAll"]
        }], onDeSelectAll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ["onDeSelectAll"]
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], settings: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], onTouched: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ["blur"]
        }] }); })();
    return MultiSelectComponent;
}());

var ClickOutsideDirective = /** @class */ (function () {
    function ClickOutsideDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ClickOutsideDirective.prototype.onClick = function (event, targetElement) {
        if (!targetElement) {
            return;
        }
        var clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(event);
        }
    };
    ClickOutsideDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], ClickOutsideDirective.prototype, "clickOutside", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event', '$event.target'])
    ], ClickOutsideDirective.prototype, "onClick", null);
ClickOutsideDirective.ɵfac = function ClickOutsideDirective_Factory(t) { return new (t || ClickOutsideDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
ClickOutsideDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: ClickOutsideDirective, selectors: [["", "clickOutside", ""]], hostBindings: function ClickOutsideDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClickOutsideDirective_click_HostBindingHandler($event) { return ctx.onClick($event, $event.target); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
    } }, outputs: { clickOutside: "clickOutside" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ClickOutsideDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[clickOutside]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]; }, { clickOutside: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['document:click', ['$event', '$event.target']]
        }] }); })();
    return ClickOutsideDirective;
}());

var ListFilterPipe = /** @class */ (function () {
    function ListFilterPipe() {
    }
    ListFilterPipe.prototype.transform = function (items, filter) {
        var _this = this;
        if (!items || !filter) {
            return items;
        }
        return items.filter(function (item) { return _this.applyFilter(item, filter); });
    };
    ListFilterPipe.prototype.applyFilter = function (item, filter) {
        if (typeof item.text === 'string' && typeof filter.text === 'string') {
            return !(filter.text && item.text && item.text.toLowerCase().indexOf(filter.text.toLowerCase()) === -1);
        }
        else {
            return !(filter.text && item.text && item.text.toString().toLowerCase().indexOf(filter.text.toString().toLowerCase()) === -1);
        }
    };
ListFilterPipe.ɵfac = function ListFilterPipe_Factory(t) { return new (t || ListFilterPipe)(); };
ListFilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "multiSelectFilter", type: ListFilterPipe, pure: false });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ListFilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
                name: 'multiSelectFilter',
                pure: false
            }]
    }], function () { return []; }, null); })();
    return ListFilterPipe;
}());

var NgMultiSelectDropDownModule = /** @class */ (function () {
    function NgMultiSelectDropDownModule() {
    }
    NgMultiSelectDropDownModule_1 = NgMultiSelectDropDownModule;
    NgMultiSelectDropDownModule.forRoot = function () {
        return {
            ngModule: NgMultiSelectDropDownModule_1
        };
    };
    var NgMultiSelectDropDownModule_1;
NgMultiSelectDropDownModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NgMultiSelectDropDownModule });
NgMultiSelectDropDownModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NgMultiSelectDropDownModule_Factory(t) { return new (t || NgMultiSelectDropDownModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgMultiSelectDropDownModule, { declarations: function () { return [MultiSelectComponent,
        ClickOutsideDirective,
        ListFilterPipe]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]; }, exports: function () { return [MultiSelectComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgMultiSelectDropDownModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
                declarations: [MultiSelectComponent, ClickOutsideDirective, ListFilterPipe],
                exports: [MultiSelectComponent]
            }]
    }], function () { return []; }, null); })();
    return NgMultiSelectDropDownModule;
}());

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng-multiselect-dropdown.js.map

/***/ })

}]);
//# sourceMappingURL=default~operation-operation-module~users-users-module.js.map