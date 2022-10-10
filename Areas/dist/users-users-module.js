(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-users-module"],{

/***/ "./node_modules/ngx-select-dropdown/__ivy_ngcc__/dist/components/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/ngx-select-dropdown/__ivy_ngcc__/dist/components/index.js ***!
  \********************************************************************************/
/*! exports provided: SelectDropDownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ngx_select_dropdown_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngx-select-dropdown-component */ "./node_modules/ngx-select-dropdown/__ivy_ngcc__/dist/components/ngx-select-dropdown-component/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectDropDownComponent", function() { return _ngx_select_dropdown_component__WEBPACK_IMPORTED_MODULE_0__["SelectDropDownComponent"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-select-dropdown/__ivy_ngcc__/dist/components/ngx-select-dropdown-component/index.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/ngx-select-dropdown/__ivy_ngcc__/dist/components/ngx-select-dropdown-component/index.js ***!
  \**************************************************************************************************************/
/*! exports provided: SelectDropDownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ngx_select_dropdown_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngx-select-dropdown.component */ "./node_modules/ngx-select-dropdown/__ivy_ngcc__/dist/components/ngx-select-dropdown-component/ngx-select-dropdown.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectDropDownComponent", function() { return _ngx_select_dropdown_component__WEBPACK_IMPORTED_MODULE_0__["SelectDropDownComponent"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-select-dropdown/__ivy_ngcc__/dist/components/ngx-select-dropdown-component/ngx-select-dropdown.component.js":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/ngx-select-dropdown/__ivy_ngcc__/dist/components/ngx-select-dropdown-component/ngx-select-dropdown.component.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: SelectDropDownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectDropDownComponent", function() { return SelectDropDownComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _pipes_limit_to_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/limit-to.pipe */ "./node_modules/ngx-select-dropdown/__ivy_ngcc__/dist/pipes/limit-to.pipe.js");
/* harmony import */ var _pipes_filter_by_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/filter-by.pipe */ "./node_modules/ngx-select-dropdown/__ivy_ngcc__/dist/pipes/filter-by.pipe.js");






var _c0 = ["availableOption"];
var _c1 = function (a0) { return { "active": a0 }; };
function SelectDropDownComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r505 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function SelectDropDownComponent_div_5_div_1_Template_input_input_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r505); var ctx_r504 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r504.searchTextChanged(); })("ngModelChange", function SelectDropDownComponent_div_5_div_1_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r505); var ctx_r506 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r506.searchText = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r499 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("direction", ctx_r499.config.inputDirection);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r499.searchText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx_r499.searchText));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r499.config.searchPlaceholder, "");
} }
function SelectDropDownComponent_div_5_li_3_Template(rf, ctx) { if (rf & 1) {
    var _r510 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectDropDownComponent_div_5_li_3_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r510); var selected_r507 = ctx.$implicit; var i_r508 = ctx.index; var ctx_r509 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r509.deselectItem(selected_r507, i_r508); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var selected_r507 = ctx.$implicit;
    var ctx_r500 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", selected_r507[ctx_r500.config.displayKey] || selected_r507, "");
} }
function SelectDropDownComponent_div_5_hr_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");
} }
function SelectDropDownComponent_div_5_li_6_Template(rf, ctx) { if (rf & 1) {
    var _r515 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectDropDownComponent_div_5_li_6_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r515); var item_r511 = ctx.$implicit; var i_r512 = ctx.index; var ctx_r514 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r514.selectItem(item_r511, i_r512); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r511 = ctx.$implicit;
    var i_r512 = ctx.index;
    var ctx_r502 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r502.focusedItemIndex == i_r512));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r511[ctx_r502.config.displayKey] || item_r511, "");
} }
function SelectDropDownComponent_div_5_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r503 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r503.config.noResultsFound);
} }
function SelectDropDownComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SelectDropDownComponent_div_5_div_1_Template, 5, 7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SelectDropDownComponent_div_5_li_3_Template, 5, 1, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SelectDropDownComponent_div_5_hr_4_Template, 1, 0, "hr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SelectDropDownComponent_div_5_li_6_Template, 3, 4, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "limitTo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "filterBy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SelectDropDownComponent_div_5_li_9_Template, 2, 1, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r498 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-height", ctx_r498.config.height);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r498.config.search);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r498.selectedItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r498.selectedItems.length > 0 && ctx_r498.availableItems.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](8, 10, ctx_r498.availableItems, ctx_r498.searchText, ctx_r498.config.searchOnKey), ctx_r498.config.limitTo));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r498.showNotFound);
} }
var _c2 = function (a0) { return { "disabled": a0 }; };
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



var SelectDropDownComponent = /** @class */ (function () {
    function SelectDropDownComponent(cdref, _elementRef) {
        this.cdref = cdref;
        this._elementRef = _elementRef;
        /**
         * Get the required inputs
         */
        this.options = [];
        /**
         * configuration options
         */
        this.config = {};
        /**
         * Whether multiple selection or single selection allowed
         */
        this.multiple = false;
        /**
         * change event when value changes to provide user to handle things in change event
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * The search text change event emitter emitted when user type in the search input
         */
        this.searchChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event emitted when dropdown is open.
         */
        this.open = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event emitted when dropdown is open.
         */
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Toogle the dropdown list
         */
        this.toggleDropdown = false;
        /**
         * Available items for selection
         */
        this.availableItems = [];
        /**
         * Selected Items
         */
        this.selectedItems = [];
        /**
         * Selection text to be Displayed
         */
        this.selectedDisplayText = "Select";
        /**
         * variable to track if clicked inside or outside of component
         */
        this.clickedInside = false;
        /**
         * variable to track keypress event inside and outsid of component
         */
        this.insideKeyPress = false;
        /**
         * variable to track the focused item whenuser uses arrow keys to select item
         */
        this.focusedItemIndex = null;
        /**
         * element to show not found text when not itmes match the search
         */
        this.showNotFound = false;
        this.onChange = function () {
            // empty
        };
        this.onTouched = function () {
            // empty
        };
        this.multiple = false;
    }
    Object.defineProperty(SelectDropDownComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            this._value = val;
            this.onChange(val);
            this.onTouched();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * click listener for host inside this component i.e
     * if many instances are there, this detects if clicked inside
     * this instance
     */
    SelectDropDownComponent.prototype.clickInsideComponent = function () {
        this.clickedInside = true;
    };
    /**
     * click handler on documnent to hide the open dropdown if clicked outside
     */
    SelectDropDownComponent.prototype.clickOutsideComponent = function () {
        if (!this.clickedInside) {
            this.toggleDropdown = false;
            this.resetArrowKeyActiveElement();
            // clear searh on close
            this.searchText = null;
            this.close.emit();
        }
        this.clickedInside = false;
    };
    /**
     * click handler on documnent to hide the open dropdown if clicked outside
     */
    SelectDropDownComponent.prototype.KeyPressOutsideComponent = function () {
        if (!this.insideKeyPress) {
            this.toggleDropdown = false;
            this.resetArrowKeyActiveElement();
        }
        this.insideKeyPress = false;
    };
    /**
     * Event handler for key up and down event and enter press for selecting element
     * @param event
     */
    SelectDropDownComponent.prototype.handleKeyboardEvent = function ($event) {
        this.insideKeyPress = true;
        if ($event.keyCode === 27 || this.disabled) {
            this.toggleDropdown = false;
            this.insideKeyPress = false;
            return;
        }
        var avaOpts = this.availableOptions.toArray();
        if (avaOpts.length === 0 && !this.toggleDropdown) {
            this.toggleDropdown = true;
        }
        // Arrow Down
        if ($event.keyCode === 40 && avaOpts.length > 0) {
            this.onArrowKeyDown();
            /* istanbul ignore else */
            if (this.focusedItemIndex >= avaOpts.length) {
                this.focusedItemIndex = 0;
            }
            avaOpts[this.focusedItemIndex].nativeElement.focus();
            $event.preventDefault();
        }
        // Arrow Up
        if ($event.keyCode === 38 && avaOpts.length) {
            this.onArrowKeyUp();
            /* istanbul ignore else */
            if (this.focusedItemIndex >= avaOpts.length) {
                this.focusedItemIndex = avaOpts.length - 1;
            }
            avaOpts[this.focusedItemIndex].nativeElement.focus();
            $event.preventDefault();
        }
        // Enter
        if ($event.keyCode === 13 && this.focusedItemIndex !== null) {
            var filteredItems = new _pipes_filter_by_pipe__WEBPACK_IMPORTED_MODULE_4__["ArrayFilterPipe"]().transform(this.availableItems, this.searchText, this.config.searchOnKey);
            this.selectItem(filteredItems[this.focusedItemIndex], this.availableItems.indexOf(filteredItems[this.focusedItemIndex]));
            return false;
        }
    };
    /**
     * Component onInit
     */
    SelectDropDownComponent.prototype.ngOnInit = function () {
        if (typeof this.options !== "undefined" && Array.isArray(this.options)) {
            this.availableItems = this.options.sort(this.config.customComparator).slice();
            this.initDropdownValuesAndOptions();
        }
    };
    /**
     * after view init to subscribe to available option changes
     */
    SelectDropDownComponent.prototype.ngAfterViewInit = function () {
        this.availableOptions.changes.subscribe(this.setNotFoundState.bind(this));
    };
    SelectDropDownComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    SelectDropDownComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    SelectDropDownComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    SelectDropDownComponent.prototype.writeValue = function (value, internal) {
        if (value) {
            if (Array.isArray(value)) {
                if (this.multiple) {
                    this.value = value;
                }
                else {
                    this.value = value[0];
                }
            }
            else {
                this.value = value;
            }
            /* istanbul ignore else */
            if (this.selectedItems.length === 0) {
                if (Array.isArray(value)) {
                    this.selectedItems = value;
                }
                else {
                    this.selectedItems.push(value);
                }
                this.initDropdownValuesAndOptions();
            }
        }
        else {
            // this.value = [];
            /* istanbul ignore else */
            if (!internal) {
                this.reset();
            }
        }
        /* istanbul ignore else */
        if (!internal) {
            this.reset();
        }
    };
    SelectDropDownComponent.prototype.reset = function () {
        this.selectedItems = [];
        this.availableItems = this.options.sort(this.config.customComparator).slice();
        this.initDropdownValuesAndOptions();
    };
    /**
     * function sets whether to show items not found text or not
     */
    SelectDropDownComponent.prototype.setNotFoundState = function () {
        if (this.availableOptions.length === 0) {
            this.showNotFound = true;
        }
        else {
            this.showNotFound = false;
        }
        this.cdref.detectChanges();
    };
    /**
     * Component onchage i.e when any of the input properties change
     * @param changes
     */
    SelectDropDownComponent.prototype.ngOnChanges = function (changes) {
        this.selectedItems = [];
        // this.searchText = null;
        this.options = this.options || [];
        /* istanbul ignore else */
        if (changes.options) {
            this.availableItems = this.options.sort(this.config.customComparator).slice();
            this.config.limitTo = this.options.length;
        }
        /* istanbul ignore else */
        if (changes.value) {
            /* istanbul ignore else */
            if (JSON.stringify(changes.value.currentValue) === JSON.stringify([])) {
                this.availableItems = this.options.sort(this.config.customComparator).slice();
            }
        }
        this.initDropdownValuesAndOptions();
    };
    /**
     * Deselct a selected items
     * @param item:  item to be deselected
     * @param index:  index of the item
     */
    SelectDropDownComponent.prototype.deselectItem = function (item, index) {
        var _this = this;
        this.selectedItems.forEach(function (element, i) {
            /* istanbul ignore else */
            if (item === element) {
                _this.selectedItems.splice(i, 1);
            }
        });
        var sortedItems = this.availableItems.slice();
        /* istanbul ignore else */
        if (!this.availableItems.includes(item)) {
            this.availableItems.push(item);
            sortedItems = this.availableItems.sort(this.config.customComparator);
        }
        this.selectedItems = this.selectedItems.slice();
        this.availableItems = sortedItems.slice();
        this.valueChanged();
        this.resetArrowKeyActiveElement();
    };
    /**
     * Select an item
     * @param item:  item to be selected
     * @param index:  index of the item
     */
    SelectDropDownComponent.prototype.selectItem = function (item, index) {
        var _this = this;
        /* istanbul ignore else */
        if (!this.multiple) {
            /* istanbul ignore else */
            if (this.selectedItems.length > 0) {
                this.availableItems.push(this.selectedItems[0]);
            }
            this.selectedItems = [];
            this.toggleDropdown = false;
        }
        this.availableItems.forEach(function (element, i) {
            /* istanbul ignore else */
            if (item === element) {
                _this.selectedItems.push(item);
                _this.availableItems.splice(i, 1);
            }
        });
        /* istanbul ignore else */
        if (this.config.clearOnSelection) {
            this.searchText = null;
        }
        this.selectedItems = this.selectedItems.slice();
        this.availableItems = this.availableItems.slice();
        this.selectedItems.sort(this.config.customComparator);
        this.availableItems.sort(this.config.customComparator);
        // this.searchText = null;
        this.valueChanged();
        this.resetArrowKeyActiveElement();
    };
    /**
     * When selected items changes trigger the chaange back to parent
     */
    SelectDropDownComponent.prototype.valueChanged = function () {
        this.writeValue(this.selectedItems, true);
        // this.valueChange.emit(this.value);
        this.change.emit({ value: this.value });
        this.setSelectedDisplayText();
    };
    /**
     * Toggle the dropdownlist on/off
     */
    SelectDropDownComponent.prototype.toggleSelectDropdown = function () {
        this.toggleDropdown = !this.toggleDropdown;
        if (this.toggleDropdown) {
            this.open.emit();
        }
        else {
            this.searchText = null;
            this.close.emit();
        }
        this.resetArrowKeyActiveElement();
    };
    /**
     * The change handler for search text
     */
    SelectDropDownComponent.prototype.searchTextChanged = function () {
        this.searchChange.emit(this.searchText);
    };
    /**
     * initialize the config and other properties
     */
    SelectDropDownComponent.prototype.initDropdownValuesAndOptions = function () {
        var _this = this;
        var config = {
            displayKey: "description",
            height: "auto",
            search: false,
            placeholder: "Select",
            searchPlaceholder: "Search...",
            limitTo: this.options.length,
            customComparator: undefined,
            noResultsFound: "No results found!",
            moreText: "more",
            searchOnKey: null,
            clearOnSelection: false,
            inputDirection: 'ltr'
        };
        /* istanbul ignore else */
        if (this.config === "undefined" || Object.keys(this.config).length === 0) {
            this.config = __assign({}, config);
        }
        for (var _i = 0, _a = Object.keys(config); _i < _a.length; _i++) {
            var key = _a[_i];
            this.config[key] = this.config[key] ? this.config[key] : config[key];
        }
        this.config = __assign({}, this.config);
        // Adding placeholder in config as default param
        this.selectedDisplayText = this.config["placeholder"];
        /* istanbul ignore else */
        if (this.value !== "" && typeof this.value !== "undefined") {
            if (Array.isArray(this.value)) {
                this.selectedItems = this.value;
            }
            else {
                this.selectedItems[0] = this.value;
            }
            this.selectedItems.forEach(function (item) {
                var ind = _this.availableItems.findIndex(function (aItem) { return JSON.stringify(item) === JSON.stringify(aItem); });
                if (ind !== -1) {
                    _this.availableItems.splice(ind, 1);
                }
            });
        }
        this.setSelectedDisplayText();
    };
    /**
     * set the text to be displayed
     */
    SelectDropDownComponent.prototype.setSelectedDisplayText = function () {
        var text = this.selectedItems[0];
        /* istanbul ignore else */
        if (typeof this.selectedItems[0] === "object") {
            text = this.selectedItems[0][this.config.displayKey];
        }
        if (this.multiple && this.selectedItems.length > 0) {
            this.selectedDisplayText =
                this.selectedItems.length === 1
                    ? text
                    : text +
                        (" + " + (this.selectedItems.length - 1) + " " + this.config.moreText);
        }
        else {
            this.selectedDisplayText =
                this.selectedItems.length === 0 ? this.config.placeholder : text;
        }
    };
    /**
     * Event handler for arrow key up event thats focuses on a item
     */
    SelectDropDownComponent.prototype.onArrowKeyUp = function () {
        /* istanbul ignore else */
        if (this.focusedItemIndex === 0) {
            this.focusedItemIndex = this.availableItems.length - 1;
            return;
        }
        /* istanbul ignore else */
        if (this.onArrowKey()) {
            this.focusedItemIndex--;
        }
    };
    /**
     * Event handler for arrow key down event thats focuses on a item
     */
    SelectDropDownComponent.prototype.onArrowKeyDown = function () {
        /* istanbul ignore else */
        if (this.focusedItemIndex === this.availableItems.length - 1) {
            this.focusedItemIndex = 0;
            return;
        }
        /* istanbul ignore else */
        if (this.onArrowKey()) {
            this.focusedItemIndex++;
        }
    };
    SelectDropDownComponent.prototype.onArrowKey = function () {
        /* istanbul ignore else */
        if (this.focusedItemIndex === null) {
            this.focusedItemIndex = 0;
            return false;
        }
        return true;
    };
    /**
     * will reset the element that is marked active using arrow keys
     */
    SelectDropDownComponent.prototype.resetArrowKeyActiveElement = function () {
        this.focusedItemIndex = null;
    };
    /** @nocollapse */
    SelectDropDownComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    SelectDropDownComponent.propDecorators = {
        '_value': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'options': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'config': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'multiple': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'disabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'change': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        'searchChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        'open': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        'close': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        'availableOptions': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"], args: ["availableOption",] },],
        'clickInsideComponent': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ["click",] },],
        'clickOutsideComponent': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ["document:click",] },],
        'KeyPressOutsideComponent': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ["document:keydown",] },],
        'handleKeyboardEvent': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ["keydown", ["$event"],] },],
    };
SelectDropDownComponent.ɵfac = function SelectDropDownComponent_Factory(t) { return new (t || SelectDropDownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
SelectDropDownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectDropDownComponent, selectors: [["ngx-select-dropdown"]], viewQuery: function SelectDropDownComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.availableOptions = _t);
    } }, hostBindings: function SelectDropDownComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectDropDownComponent_click_HostBindingHandler() { return ctx.clickInsideComponent(); })("click", function SelectDropDownComponent_click_HostBindingHandler() { return ctx.clickOutsideComponent(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("keydown", function SelectDropDownComponent_keydown_HostBindingHandler() { return ctx.KeyPressOutsideComponent(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("keydown", function SelectDropDownComponent_keydown_HostBindingHandler($event) { return ctx.handleKeyboardEvent($event); });
    } }, inputs: { options: "options", config: "config", multiple: "multiple", disabled: "disabled", _value: "_value" }, outputs: { change: "change", searchChange: "searchChange", open: "open", close: "close" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return SelectDropDownComponent; }),
                multi: true
            }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]()], decls: 6, vars: 6, consts: [["tabindex", "0", 1, "ngx-dropdown-container"], ["type", "button", 1, "ngx-dropdown-button", 3, "ngClass", "disabled", "click"], [1, "nsdicon-angle-down"], ["class", "ngx-dropdown-list-container", 3, "maxHeight", 4, "ngIf"], [1, "ngx-dropdown-list-container"], ["class", "search-container", 4, "ngIf"], [1, "selected-items"], ["tabindex", "-1", 3, "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "available-items"], ["tabindex", "-1", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "search-container"], ["name", "search-text", "autocomplete", "off", 3, "ngModel", "input", "ngModelChange"], [3, "ngClass"], [1, "nsdicon-search"], ["tabindex", "-1", 3, "click"], [1, "nsdicon-close"], ["tabindex", "-1", 3, "ngClass", "click"], ["availableOption", ""]], template: function SelectDropDownComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectDropDownComponent_Template_button_click_1_listener() { return ctx.toggleSelectDropdown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SelectDropDownComponent_div_5_Template, 10, 14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c2, ctx.disabled))("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.selectedDisplayText, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.toggleDropdown);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], pipes: [_pipes_limit_to_pipe__WEBPACK_IMPORTED_MODULE_3__["LimitToPipe"], _pipes_filter_by_pipe__WEBPACK_IMPORTED_MODULE_4__["ArrayFilterPipe"]], styles: [".ngx-dropdown-container[_ngcontent-%COMP%]{width:100%;position:relative}.ngx-dropdown-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:inline-block;margin-bottom:0;font-weight:400;line-height:1.42857143;vertical-align:middle;touch-action:manipulation;cursor:pointer;user-select:none;border:1px solid #ccc;border-radius:4px;color:#333;background-color:#fff;white-space:nowrap;overflow-x:hidden;text-overflow:ellipsis;text-align:left}.ngx-dropdown-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline;vertical-align:middle}.ngx-dropdown-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .nsdicon-angle-down[_ngcontent-%COMP%]{right:5px;position:relative;float:right}.ngx-dropdown-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .nsdicon-angle-down[_ngcontent-%COMP%]::before{border-style:solid;border-width:0.1em 0.1em 0 0;content:'';display:inline-block;height:10px;position:relative;vertical-align:text-top;width:10px;top:0;transform:rotate(135deg)}.ngx-dropdown-container[_ngcontent-%COMP%]   .ngx-dropdown-button[_ngcontent-%COMP%]{width:100%;min-height:30px;padding:5px 10px 5px 10px;background-color:white}.ngx-dropdown-container[_ngcontent-%COMP%]   .ngx-dropdown-list-container[_ngcontent-%COMP%]{box-sizing:border-box;border:1px solid rgba(0,0,0,0.15);border-radius:4px;padding-left:10px;padding-right:10px;z-index:999999999;width:100%;background-clip:padding-box;background:white;position:absolute;-webkit-box-shadow:5px 5px 5px 0px rgba(0,0,0,0.21);-moz-box-shadow:5px 5px 5px 0px rgba(0,0,0,0.21);box-shadow:5px 5px 5px 0px rgba(0,0,0,0.21);overflow-y:auto}.ngx-dropdown-container[_ngcontent-%COMP%]   .ngx-dropdown-list-container[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]{position:relative;padding-top:10px;margin-top:5px}.ngx-dropdown-container[_ngcontent-%COMP%]   .ngx-dropdown-list-container[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:transparent;border:none;border-bottom:1px solid #9e9e9e;border-radius:0;outline:none;height:2rem;width:100%;font-size:13px;margin:0;padding:0;box-shadow:none;box-sizing:content-box;transition:all 0.3s}.ngx-dropdown-container[_ngcontent-%COMP%]   .ngx-dropdown-list-container[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border-bottom:1px solid #26a69a}.ngx-dropdown-container[_ngcontent-%COMP%]   .ngx-dropdown-list-container[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%]{transform:translateY(-2px) scale(0.8);transform-origin:0 0}.ngx-dropdown-container[_ngcontent-%COMP%]   .ngx-dropdown-list-container[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#9e9e9e;position:absolute;top:0;left:0;height:100%;font-size:1rem;cursor:text;-webkit-transition:-webkit-transform 0.2s ease-out;transition:-webkit-transform 0.2s ease-out;transition:transform 0.2s ease-out;transition:transform 0.2s ease-out, -webkit-transform 0.2s ease-out;-webkit-transform-origin:0% 100%;transform-origin:0% 100%;text-align:initial;transform:translateY(12px);pointer-events:none}.ngx-dropdown-container[_ngcontent-%COMP%]   .ngx-dropdown-list-container[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   label.active[_ngcontent-%COMP%]{transform:translateY(-2px) scale(0.8);transform-origin:0 0}.ngx-dropdown-container[_ngcontent-%COMP%]   .ngx-dropdown-list-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-top:1rem;margin-bottom:1rem;list-style-type:none;padding-left:0px}.ngx-dropdown-container[_ngcontent-%COMP%]   .ngx-dropdown-list-container[_ngcontent-%COMP%]   ul.selected-items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{background-color:#337ab7;color:white;margin-bottom:2px}.ngx-dropdown-container[_ngcontent-%COMP%]   .ngx-dropdown-list-container[_ngcontent-%COMP%]   ul.selected-items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .nsdicon-close[_ngcontent-%COMP%]{font-weight:bold;font-size:large}.ngx-dropdown-container[_ngcontent-%COMP%]   .ngx-dropdown-list-container[_ngcontent-%COMP%]   ul.available-items[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{background-color:#337ab7;color:#ffff}.ngx-dropdown-container[_ngcontent-%COMP%]   .ngx-dropdown-list-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:inherit;cursor:pointer;display:block;padding:3px 20px;clear:both;font-weight:400;line-height:1.42857143;color:#333;white-space:normal}.ngx-dropdown-container[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]{pointer-events:none;background-color:#e9ecef;opacity:1;cursor:no-drop}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectDropDownComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "ngx-select-dropdown",
                template: "\n    <div class=\"ngx-dropdown-container\" tabindex=\"0\">\n        <button type=\"button\" class=\"ngx-dropdown-button\" [ngClass]=\"{'disabled':disabled}\" [disabled]=\"disabled\"\n            (click)=\"toggleSelectDropdown()\">\n            <span>{{selectedDisplayText}} </span>\n            <span class=\"nsdicon-angle-down\"></span>\n        </button>\n        <div class=\"ngx-dropdown-list-container\" *ngIf=\"toggleDropdown\" [style.maxHeight]=\"config.height\">\n            <div class=\"search-container\" *ngIf=\"config.search\">\n                <input [style.direction]=\"config.inputDirection\" name=\"search-text\" (input)=\"searchTextChanged()\"\n                    [(ngModel)]=\"searchText\" autocomplete=\"off\" />\n                <label [ngClass]=\"{'active': searchText}\">\n                    <span class=\"nsdicon-search\"></span> {{config.searchPlaceholder}}</label>\n            </div>\n            <ul class=\"selected-items\">\n                <li tabindex=\"-1\" *ngFor=\"let selected of selectedItems;let i = index\" (click)=\"deselectItem(selected,i)\">\n                    <span class=\"nsdicon-close\">x</span>\n                    <span> {{selected[config.displayKey] || selected}}</span>\n                </li>\n            </ul>\n            <hr *ngIf=\"selectedItems.length > 0 && availableItems.length > 0\" />\n            <ul class=\"available-items\">\n                <li #availableOption\n                    *ngFor=\"let item of availableItems| filterBy: searchText : config.searchOnKey | limitTo : config.limitTo;let i = index\"\n                    tabindex=\"-1\" [ngClass]=\"{'active': focusedItemIndex == i}\" (click)=\"selectItem(item,i)\">\n                    {{item[config.displayKey] || item}}</li>\n                <li *ngIf=\"showNotFound\">{{config.noResultsFound}}</li>\n            </ul>\n        </div>\n    </div>\n  ",
                styles: ["\n    .ngx-dropdown-container{width:100%;position:relative}.ngx-dropdown-container button{display:inline-block;margin-bottom:0;font-weight:400;line-height:1.42857143;vertical-align:middle;touch-action:manipulation;cursor:pointer;user-select:none;border:1px solid #ccc;border-radius:4px;color:#333;background-color:#fff;white-space:nowrap;overflow-x:hidden;text-overflow:ellipsis;text-align:left}.ngx-dropdown-container button span{display:inline;vertical-align:middle}.ngx-dropdown-container button .nsdicon-angle-down{right:5px;position:relative;float:right}.ngx-dropdown-container button .nsdicon-angle-down::before{border-style:solid;border-width:0.1em 0.1em 0 0;content:'';display:inline-block;height:10px;position:relative;vertical-align:text-top;width:10px;top:0;transform:rotate(135deg)}.ngx-dropdown-container .ngx-dropdown-button{width:100%;min-height:30px;padding:5px 10px 5px 10px;background-color:white}.ngx-dropdown-container .ngx-dropdown-list-container{box-sizing:border-box;border:1px solid rgba(0,0,0,0.15);border-radius:4px;padding-left:10px;padding-right:10px;z-index:999999999;width:100%;background-clip:padding-box;background:white;position:absolute;-webkit-box-shadow:5px 5px 5px 0px rgba(0,0,0,0.21);-moz-box-shadow:5px 5px 5px 0px rgba(0,0,0,0.21);box-shadow:5px 5px 5px 0px rgba(0,0,0,0.21);overflow-y:auto}.ngx-dropdown-container .ngx-dropdown-list-container .search-container{position:relative;padding-top:10px;margin-top:5px}.ngx-dropdown-container .ngx-dropdown-list-container .search-container input{background-color:transparent;border:none;border-bottom:1px solid #9e9e9e;border-radius:0;outline:none;height:2rem;width:100%;font-size:13px;margin:0;padding:0;box-shadow:none;box-sizing:content-box;transition:all 0.3s}.ngx-dropdown-container .ngx-dropdown-list-container .search-container input:focus{border-bottom:1px solid #26a69a}.ngx-dropdown-container .ngx-dropdown-list-container .search-container input:focus+label{transform:translateY(-2px) scale(0.8);transform-origin:0 0}.ngx-dropdown-container .ngx-dropdown-list-container .search-container label{color:#9e9e9e;position:absolute;top:0;left:0;height:100%;font-size:1rem;cursor:text;-webkit-transition:-webkit-transform 0.2s ease-out;transition:-webkit-transform 0.2s ease-out;transition:transform 0.2s ease-out;transition:transform 0.2s ease-out, -webkit-transform 0.2s ease-out;-webkit-transform-origin:0% 100%;transform-origin:0% 100%;text-align:initial;transform:translateY(12px);pointer-events:none}.ngx-dropdown-container .ngx-dropdown-list-container .search-container label.active{transform:translateY(-2px) scale(0.8);transform-origin:0 0}.ngx-dropdown-container .ngx-dropdown-list-container ul{margin-top:1rem;margin-bottom:1rem;list-style-type:none;padding-left:0px}.ngx-dropdown-container .ngx-dropdown-list-container ul.selected-items li{background-color:#337ab7;color:white;margin-bottom:2px}.ngx-dropdown-container .ngx-dropdown-list-container ul.selected-items li .nsdicon-close{font-weight:bold;font-size:large}.ngx-dropdown-container .ngx-dropdown-list-container ul.available-items li.active{background-color:#337ab7;color:#ffff}.ngx-dropdown-container .ngx-dropdown-list-container ul li{font-size:inherit;cursor:pointer;display:block;padding:3px 20px;clear:both;font-weight:400;line-height:1.42857143;color:#333;white-space:normal}.ngx-dropdown-container .disabled{pointer-events:none;background-color:#e9ecef;opacity:1;cursor:no-drop}\n  "],
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return SelectDropDownComponent; }),
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], multiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], searchChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], open: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], clickInsideComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["click"]
        }], clickOutsideComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["document:click"]
        }], KeyPressOutsideComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["document:keydown"]
        }], handleKeyboardEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["keydown", ["$event"]]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], _value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], availableOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: ["availableOption"]
        }] }); })();
    return SelectDropDownComponent;
}());


//# sourceMappingURL=ngx-select-dropdown.component.js.map

/***/ }),

/***/ "./node_modules/ngx-select-dropdown/__ivy_ngcc__/dist/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ngx-select-dropdown/__ivy_ngcc__/dist/index.js ***!
  \*********************************************************************/
/*! exports provided: SelectDropDownComponent, SelectDropDownModule, ArrayFilterPipe, LimitToPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./node_modules/ngx-select-dropdown/__ivy_ngcc__/dist/components/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectDropDownComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["SelectDropDownComponent"]; });

/* harmony import */ var _ngx_select_dropdown_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngx-select-dropdown.module */ "./node_modules/ngx-select-dropdown/__ivy_ngcc__/dist/ngx-select-dropdown.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectDropDownModule", function() { return _ngx_select_dropdown_module__WEBPACK_IMPORTED_MODULE_1__["SelectDropDownModule"]; });

/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pipes */ "./node_modules/ngx-select-dropdown/__ivy_ngcc__/dist/pipes/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrayFilterPipe", function() { return _pipes__WEBPACK_IMPORTED_MODULE_2__["ArrayFilterPipe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LimitToPipe", function() { return _pipes__WEBPACK_IMPORTED_MODULE_2__["LimitToPipe"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-select-dropdown/__ivy_ngcc__/dist/ngx-select-dropdown.module.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/ngx-select-dropdown/__ivy_ngcc__/dist/ngx-select-dropdown.module.js ***!
  \******************************************************************************************/
/*! exports provided: SelectDropDownModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectDropDownModule", function() { return SelectDropDownModule; });
/* harmony import */ var _pipes_filter_by_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pipes/filter-by.pipe */ "./node_modules/ngx-select-dropdown/__ivy_ngcc__/dist/pipes/filter-by.pipe.js");
/* harmony import */ var _pipes_limit_to_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipes/limit-to.pipe */ "./node_modules/ngx-select-dropdown/__ivy_ngcc__/dist/pipes/limit-to.pipe.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _components_ngx_select_dropdown_component_ngx_select_dropdown_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ngx-select-dropdown-component/ngx-select-dropdown.component */ "./node_modules/ngx-select-dropdown/__ivy_ngcc__/dist/components/ngx-select-dropdown-component/ngx-select-dropdown.component.js");







var SelectDropDownModule = /** @class */ (function () {
    function SelectDropDownModule() {
    }
    /** @nocollapse */
    SelectDropDownModule.ctorParameters = function () { return []; };
SelectDropDownModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SelectDropDownModule });
SelectDropDownModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function SelectDropDownModule_Factory(t) { return new (t || SelectDropDownModule)(); }, providers: [], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SelectDropDownModule, { declarations: function () { return [_components_ngx_select_dropdown_component_ngx_select_dropdown_component__WEBPACK_IMPORTED_MODULE_5__["SelectDropDownComponent"], _pipes_limit_to_pipe__WEBPACK_IMPORTED_MODULE_1__["LimitToPipe"], _pipes_filter_by_pipe__WEBPACK_IMPORTED_MODULE_0__["ArrayFilterPipe"]]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]]; }, exports: function () { return [_components_ngx_select_dropdown_component_ngx_select_dropdown_component__WEBPACK_IMPORTED_MODULE_5__["SelectDropDownComponent"], _pipes_limit_to_pipe__WEBPACK_IMPORTED_MODULE_1__["LimitToPipe"], _pipes_filter_by_pipe__WEBPACK_IMPORTED_MODULE_0__["ArrayFilterPipe"]]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SelectDropDownModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [_components_ngx_select_dropdown_component_ngx_select_dropdown_component__WEBPACK_IMPORTED_MODULE_5__["SelectDropDownComponent"], _pipes_limit_to_pipe__WEBPACK_IMPORTED_MODULE_1__["LimitToPipe"], _pipes_filter_by_pipe__WEBPACK_IMPORTED_MODULE_0__["ArrayFilterPipe"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]],
                exports: [_components_ngx_select_dropdown_component_ngx_select_dropdown_component__WEBPACK_IMPORTED_MODULE_5__["SelectDropDownComponent"], _pipes_limit_to_pipe__WEBPACK_IMPORTED_MODULE_1__["LimitToPipe"], _pipes_filter_by_pipe__WEBPACK_IMPORTED_MODULE_0__["ArrayFilterPipe"]],
                providers: [],
                bootstrap: []
            }]
    }], function () { return []; }, null); })();
    return SelectDropDownModule;
}());


//# sourceMappingURL=ngx-select-dropdown.module.js.map

/***/ }),

/***/ "./node_modules/ngx-select-dropdown/__ivy_ngcc__/dist/pipes/filter-by.pipe.js":
/*!************************************************************************************!*\
  !*** ./node_modules/ngx-select-dropdown/__ivy_ngcc__/dist/pipes/filter-by.pipe.js ***!
  \************************************************************************************/
/*! exports provided: ArrayFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayFilterPipe", function() { return ArrayFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");

/**
 * filters an array based on searctext
 */

var ArrayFilterPipe = /** @class */ (function () {
    function ArrayFilterPipe() {
    }
    ArrayFilterPipe.prototype.transform = function (array, searchText, keyName) {
        if (!array || !searchText || !Array.isArray(array)) {
            return array;
        }
        if (typeof array[0] === 'string') {
            return array.filter(function (item) { return item.toLowerCase().indexOf(searchText.toLowerCase()) > -1; });
        }
        // filter array, items which match and return true will be
        // kept, false will be filtered out
        if (!keyName) {
            return array.filter(function (item) {
                for (var key in item) {
                    if (typeof item[key] !== "object" && item[key].toString().toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
                        return true;
                    }
                }
                return false;
            });
        }
        else {
            return array.filter(function (item) {
                if (typeof item[keyName] !== "object" && item[keyName].toString().toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            });
        }
    };
    /** @nocollapse */
    ArrayFilterPipe.ctorParameters = function () { return []; };
ArrayFilterPipe.ɵfac = function ArrayFilterPipe_Factory(t) { return new (t || ArrayFilterPipe)(); };
ArrayFilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filterBy", type: ArrayFilterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArrayFilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: "filterBy"
            }]
    }], function () { return []; }, null); })();
    return ArrayFilterPipe;
}());


//# sourceMappingURL=filter-by.pipe.js.map

/***/ }),

/***/ "./node_modules/ngx-select-dropdown/__ivy_ngcc__/dist/pipes/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ngx-select-dropdown/__ivy_ngcc__/dist/pipes/index.js ***!
  \***************************************************************************/
/*! exports provided: ArrayFilterPipe, LimitToPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filter_by_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter-by.pipe */ "./node_modules/ngx-select-dropdown/__ivy_ngcc__/dist/pipes/filter-by.pipe.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrayFilterPipe", function() { return _filter_by_pipe__WEBPACK_IMPORTED_MODULE_0__["ArrayFilterPipe"]; });

/* harmony import */ var _limit_to_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./limit-to.pipe */ "./node_modules/ngx-select-dropdown/__ivy_ngcc__/dist/pipes/limit-to.pipe.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LimitToPipe", function() { return _limit_to_pipe__WEBPACK_IMPORTED_MODULE_1__["LimitToPipe"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-select-dropdown/__ivy_ngcc__/dist/pipes/limit-to.pipe.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/ngx-select-dropdown/__ivy_ngcc__/dist/pipes/limit-to.pipe.js ***!
  \***********************************************************************************/
/*! exports provided: LimitToPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LimitToPipe", function() { return LimitToPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var LimitToPipe = /** @class */ (function () {
    function LimitToPipe() {
    }
    LimitToPipe.prototype.transform = function (array, itemsCount, startIndex) {
        if (startIndex === void 0) { startIndex = 0; }
        if (!Array.isArray(array)) {
            return array;
        }
        return array.slice(startIndex, startIndex + itemsCount);
    };
    /** @nocollapse */
    LimitToPipe.ctorParameters = function () { return []; };
LimitToPipe.ɵfac = function LimitToPipe_Factory(t) { return new (t || LimitToPipe)(); };
LimitToPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "limitTo", type: LimitToPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LimitToPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: "limitTo"
            }]
    }], function () { return []; }, null); })();
    return LimitToPipe;
}());


//# sourceMappingURL=limit-to.pipe.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/lock/lock.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/lock/lock.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper wrapper-full-page\">\n\n    <div class=\"full-page lock-page\" data-color=\"gray\" data-image=\"../../../assets/img/full-screen-image-4.jpg\">\n\n    <!--   you can change the color of the filter page using: data-color=\"blue | azure | green | orange | red | purple\" -->\n        <div class=\"content\">\n            <form method=\"#\" action=\"#\">\n                <div class=\"user-profile\">\n                    <div class=\"author\">\n                        <img class=\"avatar\" src=\"../../../assets/img/default-avatar.png\" alt=\"...\">\n                    </div>\n                    <h4>Tania Andrew</h4>\n                    <div class=\"form-group\">\n                        <input type=\"password\" placeholder=\"Enter Password\" class=\"form-control\">\n                    </div>\n                    <button type=\"button\" class=\"btn btn-neutral btn-round btn-fil btn-wd\">Unlock</button>\n                </div>\n            </form>\n        </div>\n\n    \t<footer class=\"footer footer-transparent\">\n            <div class=\"container\">\n                <nav class=\"pull-left\">\n                    <ul>\n                        <li>\n                            <a href=\"#\">\n                                Home\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#\">\n                                Company\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#\">\n                                Portfolio\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#\">\n                               Blog\n                            </a>\n                        </li>\n                    </ul>\n                </nav>\n                <p class=\"copyright pull-right\">\n                    &copy; {{test | date: 'yyyy'}} <a href=\"https://www.creative-tim.com\">Creative Tim</a>, made with love for a better web\n                </p>\n            </div>\n        </footer>\n    </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/login/login.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper wrapper-full-page\">\n    <div class=\"full-page login-page\" data-color=\"gray\" data-image=\"../../../assets/img/full-screen-image-1.jpg\">\n    <!--   you can change the color of the filter page using: data-color=\"blue | azure | green | orange | red | purple\" -->\n        <div class=\"content\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3\">\n                        <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit(loginForm.value)\" >\n                        <!--   if you want to have the card without animation please remove the \".card-hidden\" class   -->\n                            <div class=\"card card-hidden\">\n                                <div class=\"header text-center\">Login</div>\n                                <div class=\"content\">\n                                    <div class=\"text-center\">\n                                        <span style=\"color: red;\"> {{ errorMsg }} </span>  \n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label>Windows User Name</label>\n                                        <input type=\"email\" formControlName=\"UserName\" required placeholder=\"Enter Windows User\" class=\"form-control\" autofocus (keyup.enter)=\"focusablePassword.focus()\">\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label>Password</label>\n                                        <input type=\"password\" formControlName=\"Password\" required placeholder=\"Password\" class=\"form-control\" #focusablePassword (keyup.enter)=\"focusableSubmit.focus()\" >\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <div class=\"checkbox\">\n                                            <input id=\"WindowsUser\" #focusableSubmit type=\"checkbox\" (change)=\"onChangeWindowsUserCheckbox($event)\">\n                                            <label for=\"WindowsUser\">\n                                               Windows User\n                                            </label>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"footer text-center\">\n                                    <button type=\"submit\"  [disabled]=\"!loginForm.valid\" class=\"btn btn-fill btn-danger btn-wd\">Login</button>\n                                    <!-- <button type=\"submit\" *ngIf=\"errorMsg\" class=\"btn btn-fill btn-danger btn-wd\">Invalid UserName or Passeord</button>\n                                   -->\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    \t<footer class=\"footer footer-transparent\">\n            <div class=\"container\">\n                <nav class=\"pull-left\">\n                    <ul>\n                        <li>\n                            <a href=\"#\">\n                                Home\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#\">\n                                Company\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#\">\n                                Portfolio\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#\">\n                               Blog\n                            </a>\n                        </li>\n                    </ul>\n                </nav>\n                <p class=\"copyright pull-right\">\n                    &copy; {{test | date: 'yyyy'}} <a href=\"https://www.creative-tim.com\">Creative Tim</a>, made with love for a better web\n                </p>\n            </div>\n        </footer>\n\n    </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/privilege/privilege.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/privilege/privilege.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px' }\" ></ngx-loading>\n    <ngx-alerts></ngx-alerts>\n      <div class=\"container-fluid\">\n   <div class=\"row\" >\n             <div class=\"card\">\n                    <div class=\"content\">\n                      <h4 class=\"title\">Privileges List</h4> \n                      <form [formGroup]=\"privilegeForm\" (ngSubmit)=\"onSubmit()\">\n                      <button type=\"button\" class=\"btn btn-primary pe-7s-diskette\" (click)=\"onDBUpdate()\"  > DB Update </button> <span style=\"color: red;\">         Privileges are Hard Coded  </span> \n                       </form>          \n                    </div>\n                      <div class=\"fresh-datatables\">\n                        <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n                        <thead>\n                              <tr>\n                                <th >\n                                 #\n                                </th>\n                                <th >\n                                  Page Name\n                                </th>\n                                <th >\n                                  Privilege Path \n                                </th>\n                                <th >\n                                  Actions \n                                </th>\n                              </tr>\n                        </thead>\n                        <tbody  >\n                              <tr  *ngFor=\"let row of PrivilegesDB; let i = index\">\n                                <td>{{ i+1 }}</td>\n                                <td>{{ row?.Page }}</td>\n                                <td>{{ row?.PrivilegeName }}</td>\n                                <td>\n                                  <a (click)=\"onEditPrivilege(row)\" class=\"btn btn-simple btn-warning btn-icon edit\"><i class=\"fa fa-edit\"></i></a>\n                                  <a (click)=\"onDeletePrivilege(row)\" class=\"btn btn-simple btn-danger btn-icon remove \"><i class=\"fa fa-times\"></i></a> </td>\n                              </tr>\n                        </tbody>\n                        </table>\n                      </div>\n              </div>\n \n        </div>\n      </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/register/register.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/register/register.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper wrapper-full-page\">\n    <div class=\"full-page register-page\" data-color=\"gray\" data-image=\"../../../assets/img/full-screen-image-2.jpg\">\n\n    <!--   you can change the color of the filter page using: data-color=\"blue | azure | green | orange | red | purple\" -->\n        <div class=\"content\">\n            <ngx-alerts></ngx-alerts>\n            <div class=\"container\">\n                <div class=\"row\">\n                  <form method=\"#\" action=\"#\"   [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n                    <div class=\"col-md-8 col-md-offset-2\">\n                        <div class=\"header-text\">\n                            <h2>Update Current User Account</h2>\n                            <h4>User must be created in AD first</h4>\n                            ID: <span> {{ registerForm.value | json }}     </span> \n                   \n                            <hr />\n                        </div>\n                    </div>\n                    <div class=\"col-md-4 col-md-offset-2\">\n                            <div class=\"card card-plain\">\n                                    <div class=\"content\">\n                                        <div class=\"form-group\">\n                                            <div class=\"form-group\">\n                                                <div>\n                                                    <img formControlName=\"EmpImg\" [src]=\"getEmpImg.value || '../../../assets/img/profile/ProfilePhoto.png'\" [width]=\"35\" [height]=\"50\" class=\"img-rounded \" >\n                                                    <input id=\"custom-input \" type=\"file\" (change)=\"onChangeChangeProfileImg($event)\">\n                                                    <!-- <span hidden=\"getEmpImg.value == null\"> Uploaded Successfully   </span> -->\n                                                </div>\n                                            </div>\n                                            <div class=\"form-group\">\n                                                <label class=\"control-label\" for=\"\">Login Account: </label> \n                                                <input type=\"text\" placeholder=\"Select Account name\" class=\"form-control\" formControlName=\"usrAccountName\">\n                                            </div>\n                                            <div class=\"form-group\">\n                                                <label class=\"control-label\" for=\"\">Full Name: </label> \n                                                <input type=\"text\" placeholder=\"Your Full Name\" class=\"form-control\" formControlName=\"usrFullName\">\n                                            </div>\n                                            <div class=\"form-group\">\n                                                <label class=\"control-label\" for=\"\">Email Address: </label> \n                                                <input type=\"email\" placeholder=\"Enter email\" class=\"form-control\" formControlName=\"usrEmail\">\n                                            </div>\n                                            <div class=\"row footer col-md-9 col-md-offset-3\">\n                                                <div class=\"footer text-center\">\n                                                    <button type=\"submit\" class=\"btn btn-fill btn-neutral btn-wd\">Cancel</button>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                            </div>\n                    </div>\n                    <div class=\"col-md-4 col-md-offset-s1\">\n                            <div class=\"card card-plain\">\n                                <div class=\"content\">\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"\">Birthday Date: </label> \n                                        <input\n                                        formControlName=\"empBirhtday\"\n                                        class=\"form-control\"\n                                        #datepickerYMD=\"bsDatepicker\"\n                                        bsDatepicker\n                                        [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD HH:mm' }\">\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"\">Gender: </label> \n                                        <input type=\"text\" placeholder=\"Gender\" class=\"form-control\" formControlName=\"usrGender\">\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"\">Password: </label> \n                                        <input type=\"password\" placeholder=\"Password\" class=\"form-control\" formControlName=\"usrPassword\">\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label class=\"control-label\" for=\"\">Confirm Password </label> \n                                        <input type=\"password\" placeholder=\"Password Confirmation\" class=\"form-control\" formControlName=\"usrPassword\">\n                                    </div>\n                                    <div class=\"row footer col-md-9 col-md-offset-3\">\n                                        <div class=\"footer text-center\">\n                                            <button type=\"submit\" class=\"btn btn-fill btn-neutral btn-wd\">Update Account</button>\n                                       \n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                    </div>\n \n                  </form>\n                </div>\n            </div>\n        </div>\n\n        <footer class=\"footer footer-transparent\">\n            <div class=\"container\">\n                <p class=\"copyright text-center\">\n                    &copy; {{test | date: 'yyyy'}} <a href=\"https://www.creative-tim.com\">Creative Tim</a>, made with love for a better web\n                </p>\n            </div>\n        </footer>\n\n    </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/role/role.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/role/role.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px' }\" ></ngx-loading>\n    <ngx-alerts></ngx-alerts>\n      <div class=\"container-fluid\">\n        <div class=\"row\"   >\n              <div class=\"card col-md-12\">\n                <form [formGroup]=\"roleForm\" (ngSubmit)=\"onSubmit()\">\n                <!-- <div class=\"content\"> -->\n          \n                        <div class=\"form-group col-md-12\">\n                              <legend>         \n                                Role ID: {{ getRoleForm.roleId.value }}\n                              </legend>\n                            <div class=\"row\">\n                              <div class=\"form-group col-md-3\">\n                                <label class=\"control-label\" for=\"\">Role Name: <span class=\"star\">*</span> </label>\n                                <input type=\"text\" placeholder=\"Role Name\" formControlName=\"roleName\"  class=\"form-control\" >\n                                <small [hidden]=\"roleForm.controls.roleName.valid || roleForm.controls.roleName.pristine\" class=\"text-danger\">\n                                      Role Name is required.\n                                </small>\n                              </div>\n                              <div class=\"form-group col-md-3\">\n                                <label>Select Privileges </label>\n                                <ng-multiselect-dropdown #multiSelect\n                                [placeholder]=\"'Select Privileges'\" \n                                [data]=\"Privileges\" \n                                [formControl]=\"getRoleForm.PrivilegeName\" \n                                [settings]=\"settings\"\n                                [disabled]=\"false\"\n                                (onFilterChange)=\"onFilterChange($event)\"\n                                (onDropDownClose)=\"onDropDownClose($event)\"\n                                (onSelect)=\"onItemSelect($event)\" \n                                (onDeSelect)=\"onDeSelect($event)\"\n                                (onSelectAll)=\"onSelectAll($event)\"\n                                (onDeSelectAll)=\"onDeSelectAll($event)\"\n                                >\n                        \n                                </ng-multiselect-dropdown>\n                              </div>\n                       \n                            </div>\n                            <div class=\"footer\">\n                        \n                                    <!-- <button type=\"button\" class=\"btn btn-primary pe-7s-diskette\" (click)=\"onSubmit('Add')\" [disabled]=\"roleForm.status == 'INVALID' \"> Add </button>   *ngIf=\"getRoleForm.roleId.value == 0\"  -->\n                                    <button type=\"button\" class=\"btn btn-primary pe-7s-diskette\" (click)=\"onSubmit('Save')\" [disabled]=\"roleForm.status == 'INVALID' \"> Save </button> \n                            </div>\n                        </div>\n          \n                        <!-- <div>\n                          roleForm.value:  {{ roleForm.value | json }}\n                        </div> -->\n                <!-- </div> -->\n              </form>\n        \n              </div>\n        </div>\n        <div class=\"row\" >\n             <div class=\"card\">\n                    <div class=\"content\">\n                      <div class=\"form-group col-md-12\">\n                        <div class=\"form-group col-md-3\">\n    \n                          <h4 class=\"title\">Roles List</h4> \n                        </div>\n                        <div class=\"form-group col-md-3\">\n                          <select  (change)=\"onSelectRolesTemplate($event)\"    class=\"form-control\" data-title=\"Single Select\" data-style=\"btn-default btn-block\" data-menu-style=\"dropdown-blue\">\n                            <option value=\"Templates\">Templates</option>\n                            <option value=\"Roles\">Roles</option>\n                          </select>\n                        </div>\n                      </div>\n        \n                    </div>\n                      <div class=\"fresh-datatables\">\n                        <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n                        <!-- Table Headers -->\n                        <thead>\n                              <tr>\n                                <th >\n                                  ID \n                                </th>\n                                <th >\n                                  Role Name \n                                </th>\n                                <th >\n                                  Privileges \n                                </th>\n                                <th >\n                                  Actions \n                                </th>\n                              </tr>\n                        </thead>\n                        <!-- Table Body -->\n                        <tbody  >\n                              <tr  *ngFor=\"let row of Roles\">\n                                <td>{{ row?.roleId }}</td>\n                                <td>{{ row?.roleName }}</td>\n                                <td> <li *ngFor=\"let p of row?.Privileges\">  {{ p.PrivilegeName }}       </li>   </td>\n                                <td>\n                                  <a (click)=\"onEditRole(row)\" class=\"btn btn-simple btn-warning btn-icon edit\"><i class=\"fa fa-edit\"></i></a>\n                                  <a (click)=\"onDeleteRole(row)\" class=\"btn btn-simple btn-danger btn-icon remove \"><i class=\"fa fa-times\"></i></a> </td>\n                              </tr>\n                        </tbody>\n                        </table>\n                      </div>\n              </div>\n \n        </div>\n      </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/unauthorised/unauthorised.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/unauthorised/unauthorised.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n\n\n                <h4 style=\"color:  red;\">Unauthorised Access!</h4>\n                <span>\n                    <a routerLink=\"/users/login\" routerLinkActive=\"active\" class=\"pull-left\">Login With Another Account</a>\n                </span>\n                <br>\n                <span>\n                    <a routerLink=\"/dashboard\" routerLinkActive=\"active\" class=\"pull-left\">Go To Dashboard</a>\n                </span>\n\n\n\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/user/user.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/user/user.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px' }\" ></ngx-loading>\n    <ngx-alerts></ngx-alerts>\n      <div class=\"container-fluid\">\n        <div class=\"row\">\n          <form [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\" >\n            <div class=\"col-md-1\">\n              <div class=\"form-group col-md-1\">\n                <div class=\"card card-user\">\n                                  <img [src]=\"getEmpImg.value || '../../../assets/img/profile/ProfilePhoto.png'\" [width]=\"110\" [height]=\"140\" class=\"img-rounded\" >\n                                  <br>\n                                  <input id=\"custom-input\" type=\"file\" (change)=\"fileChangeListener($event)\">\n                </div>\n          </div>\n            </div>\n            <div class=\"col-md-4 col-md-offset-2\">\n        <div class=\"card card-plain\">\n                    <div class=\"content\">\n                        <div class=\"form-group\">\n                            <div class=\"form-group\">\n                                <label class=\"control-label\" for=\"\">Account Name (Login Name):   <span class=\"star\">*</span>     </label>\n                                <input type=\"text\" placeholder=\"First.Last\" class=\"form-control\" formControlName=\"usrAccountName\" required>\n                                <small [hidden]=\"userForm.controls.usrAccountName.valid || userForm.controls.usrAccountName.pristine\" class=\"text-danger\">\n                                  Account Name is required.\n                                </small>\n                            </div>\n                                <label class=\"control-label\" for=\"\">Full Name:  <span class=\"star\">*</span> </label>\n                                <input type=\"text\" placeholder=\"User Full Name\" class=\"form-control\" formControlName=\"usrFullName\" required>\n                                <small [hidden]=\"userForm.controls.usrFullName.valid || userForm.controls.usrFullName.pristine\" class=\"text-danger\">\n                                  Full Name is required.\n                                </small>\n                            </div>\n                            <div class=\"form-group\">\n                              <label class=\"control-label\" for=\"\">Email:  </label>\n                                <input type=\"email\" placeholder=\"Email Address\" class=\"form-control\" formControlName=\"usrEmail\">\n                                <small [hidden]=\"userForm.controls.usrEmail.valid || userForm.controls.usrEmail.pristine\" class=\"text-danger\">\n                                  Email format ( somthing@domainname.com ) is required.\n                                </small>\n                            </div>\n                        </div>\n                    </div>\n            </div>\n            <div class=\"col-md-4 col-md-offset-s1\">\n                    <div class=\"card card-plain\">\n                        <div class=\"content\">\n                            <div class=\"form-group\">\n                              <label class=\"control-label\" for=\"\">Role:    <span class=\"star\">*</span>    <!--   {{ userForm.value.userRole | json }} --> \n                            </label>\n                            <select formControlName=\"roleId\" [value]=\"0\" (change)=\"onChangeRoled($event)\"  class=\"form-control\" data-title=\"Single Select\" data-style=\"btn-default btn-block\" data-menu-style=\"dropdown-blue\">\n                              <option value=\"0\" >--Select--</option>\n                              <option *ngFor=\"let rol of Roles\" value={{rol.roleId}} >\n                                  {{rol.roleName}}\n                              </option>\n                            </select> \n                            <small [hidden]=\"userForm.controls.roleId.valid || userForm.controls.roleId.pristine\" class=\"text-danger\">\n                              Company is required.\n                            </small>\n                            </div>\n                            <div class=\"form-group\">\n                              <label class=\"control-label\" for=\"\">Password:   </label>\n                                <input type=\"password\" placeholder=\"Password\" class=\"form-control\" formControlName=\"usrPassword\">\n                                <small [hidden]=\"userForm.controls.usrPassword.valid || userForm.controls.usrPassword.pristine\" class=\"text-danger\">\n                                  Password length 8 required.\n                                </small>\n                            </div>\n                            <div class=\"form-group\">\n                              <label class=\"control-label\" for=\"\">Confirm Password:   </label>\n                                <input type=\"password\" placeholder=\"Confirm Password\" class=\"form-control\" formControlName=\"confirmUsrPassword\" >  \n                                <small [hidden]=\"userForm.controls.confirmUsrPassword.valid || userForm.controls.confirmUsrPassword.pristine\" class=\"text-danger\">\n                                  Password NOT match.\n                                </small>\n                            </div>\n                            <div class=\"footer text-center\">\n                               <button type=\"submit\" *ngIf=\"userForm.controls.usrId.value === null\" [disabled]=\"userForm.status == 'INVALID' \" class=\"btn btn-primary\">Create</button>\n                              <button type=\"submit\" *ngIf=\"userForm.controls.usrId.value != null\" [disabled]=\"userForm.status == 'INVALID' \" class=\"btn btn-primary\">Save</button>\n                          </div>\n                        </div>\n                    </div>\n            </div>\n          </form>\n        </div>\n \n        <div class=\"row\" >\n             <div class=\"card\">\n                    <div class=\"content\">\n                      <h4 class=\"title\">Users List</h4>\n                    </div>\n                      <div class=\"fresh-datatables\">\n                        <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n                        <!-- Table Headers -->\n                        <thead>\n                              <tr>\n                                <th>\n                                    #\n                                </th>\n                                <th>\n                                  Img\n                                </th>\n                                <th >\n                                  Account.Name \n                                </th>\n                                <th >\n                                  User Full Name \n                                </th>\n                                <th >\n                                  Email \n                                </th>\n                                <th >\n                                  Role \n                                </th>\n                                <th >\n                                  Actions \n                                </th>\n                              </tr>\n                        </thead>\n                        <!-- Table Body -->\n                        <tbody  >\n                              <tr  *ngFor=\"let row of Users; let i = index\">\n                                <td>{{i+1}}</td>\n                                <td>    <img [src]=\"row.EmpImg\" width=\"25\" class=\"img-rounded\" > </td>\n                                <td>{{ row?.usrAccountName }}</td>\n                                <td>{{ row?.usrFullName }}</td>\n                                <td>{{ row?.usrEmail }}</td>\n                                <td>{{ row?.userRole }}</td>\n                                <!-- <td  > \n                                  <ul *ngFor=\"let prv of row.Privileges\">\n                                    <li>{{ prv }} </li> \n                                  </ul>\n                                </td> -->\n\n                                <td>\n                                  <a (click)=\"onEditUser(row)\" class=\"btn btn-simple btn-warning btn-icon edit\"><i class=\"fa fa-edit\"></i></a>\n                                  <a (click)=\"onDeleteUser(row)\" class=\"btn btn-simple btn-danger btn-icon remove \"><i class=\"fa fa-times\"></i></a> </td>\n                              </tr>\n                        </tbody>\n                        </table>\n                      </div>\n              </div>\n \n        </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/useractionlog/useractionlog.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/useractionlog/useractionlog.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <!-- <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px' }\" ></ngx-loading> -->\n    <ngx-alerts></ngx-alerts>\n      <div class=\"container-fluid\">\n\n        <div class=\"row\" >\n             <div class=\"card\">\n                    <div class=\"content\">\n                      <h4 class=\"title\">User Action log List</h4> \n               <div class=\"col-md-3\">\n                     <button type=\"button\" class=\"btn btn-primary Refresh\" (click)=\"onGetUserLog()\"  >Refresh </button>  \n               </div>\n               <div class=\"col-md-3\">\n                    <input \n                    placeholder=\"Select Date From - To \"\n                    (bsValueChange)=\"onFilterLogByDate($event, 'fromDate')\"\n                    type=\"text\"\n                    class=\"form-control\"\n                    formControlName=\"dateRange\"\n                    #daterangepicker=\"bsDaterangepicker\"\n                    bsDaterangepicker\n                    [bsConfig]=\"{ rangeInputFormat : 'MMMM Do YYYY, h:mm:ss a', dateInputFormat: 'MMMM Do YYYY, h:mm:ss a', showWeekNumbers: false }\"> \n\n              </div>\n                \n         \n                    </div>\n                      <div class=\"fresh-datatables\">\n                        <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n                        <thead>\n                              <tr>\n                                <th >\n                                 #\n                                </th>\n                                <th >\n                                  User Name\n                                </th>\n                                <th >\n                                  Action \n                                </th>\n                                <th >\n                                   IP Address\n                                  </th>\n                                <th >\n                                  Date/Time \n                                </th>\n                              </tr>\n                        </thead>\n                        <!-- Table Body -->\n                        <tbody  >\n                              <tr  *ngFor=\"let row of Logs; let i = index\">\n                                <td>{{ i+1 }}</td>\n                                <td>{{ row?.usrAccountName }}</td>\n                                <td>{{ row?.Action }}</td>\n                                <td>{{ row?.IP_Address }}</td>\n                                <td>{{ row?.ActionTime }}</td>\n                              </tr>\n                        </tbody>\n                        </table>\n                      </div>\n              </div>\n \n        </div>\n      </div>\n</div>");

/***/ }),

/***/ "./src/app/shared/services/customvalidators.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/services/customvalidators.service.ts ***!
  \*************************************************************/
/*! exports provided: CustomvalidatorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomvalidatorsService", function() { return CustomvalidatorsService; });
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

var CustomvalidatorsService = /** @class */ (function () {
    function CustomvalidatorsService() {
    }
    CustomvalidatorsService.prototype.passwordConfirmValidator = function () {
    };
    CustomvalidatorsService.prototype.MustMatch = function (controlName, matchingControlName) {
        return function (formGroup) {
            var control = formGroup.controls[controlName];
            var matchingControl = formGroup.controls[matchingControlName];
            if (matchingControl.errors && !matchingControl.errors.mustMatch) {
                // return if another validator has already found an error on the matchingControl
                return;
            }
            // set error on matchingControl if validation fails
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ mustMatch: true });
            }
            else {
                matchingControl.setErrors(null);
            }
        };
    };
    CustomvalidatorsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CustomvalidatorsService);
    return CustomvalidatorsService;
}());



/***/ }),

/***/ "./src/app/users/lock/lock.component.css":
/*!***********************************************!*\
  !*** ./src/app/users/lock/lock.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2xvY2svbG9jay5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/users/lock/lock.component.ts":
/*!**********************************************!*\
  !*** ./src/app/users/lock/lock.component.ts ***!
  \**********************************************/
/*! exports provided: LockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockComponent", function() { return LockComponent; });
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

var LockComponent = /** @class */ (function () {
    function LockComponent() {
        this.test = new Date();
    }
    LockComponent.prototype.checkFullPageBackgroundImage = function () {
        var $page = $('.full-page');
        var image_src = $page.data('image');
        if (image_src !== undefined) {
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>';
            $page.append(image_container);
        }
    };
    ;
    LockComponent.prototype.ngOnInit = function () {
        this.checkFullPageBackgroundImage();
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700);
    };
    LockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lock',
            template: __importDefault(__webpack_require__(/*! raw-loader!./lock.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/lock/lock.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./lock.component.css */ "./src/app/users/lock/lock.component.css")).default]
        })
    ], LockComponent);
    return LockComponent;
}());



/***/ }),

/***/ "./src/app/users/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/users/login/login.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/users/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/users/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var app_shared_authentication_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/authentication/service/auth.service */ "./src/app/shared/authentication/service/auth.service.ts");
/* harmony import */ var app_shared_services_appstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/appstorage.service */ "./src/app/shared/services/appstorage.service.ts");
/* harmony import */ var app_shared_services_logs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/logs.service */ "./src/app/shared/services/logs.service.ts");
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





var LoginComponent = /** @class */ (function () {
    function LoginComponent(strSrv, logSrv, authSrv, 
    // private strgSrv: AppstorageService,
    fb) {
        this.strSrv = strSrv;
        this.logSrv = logSrv;
        this.authSrv = authSrv;
        this.fb = fb;
        this.test = new Date();
        this.isAuthorized = false;
        this.isloginfailed = false;
        this.isUserNameExist = false;
        this.errorMsg = '';
        this.windowsUserName = '';
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            UserName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            Password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            appUserCheckbox: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.isloginfailed = this.authSrv.Isloginfailed();
        this.isUserNameExist = this.authSrv.IsUserNameExist();
    }
    LoginComponent.prototype.checkFullPageBackgroundImage = function () {
        var $page = $('.full-page');
        var image_src = $page.data('image');
        if (image_src !== undefined) {
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>';
            $page.append(image_container);
        }
    };
    ;
    LoginComponent.prototype.AddUserLog = function (action) {
        this.logSrv.sendUserLog(action).subscribe(function (res) {
            console.log(res);
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.isloginfailed = this.authSrv.Isloginfailed();
        this.isUserNameExist = this.authSrv.IsUserNameExist();
        this.loginForm = this.fb.group({
            UserName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            WindowsUser: false
        });
        this.checkFullPageBackgroundImage();
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700);
    };
    LoginComponent.prototype.onSubmit = function (e) {
        var _this = this;
        this.errorMsg = '';
        var isWinUsr = this.loginForm.get('WindowsUser').value;
        this.authSrv.getLoginAcount(e.UserName, e.Password, isWinUsr).subscribe(function (usr) {
            console.log(usr);
            if (!isWinUsr) {
                _this.authSrv.isloginfailed = false;
                _this.strSrv.saveObjectToStorage(usr, []);
                if (_this.authSrv.IsAuthorised()) {
                    _this.authSrv.goURLPage();
                }
                else {
                    _this.authSrv.goUnAuthorisedPage();
                }
                _this.authSrv.goURLPage();
            }
            if (isWinUsr) {
                _this.authSrv.loginAD(e.UserName, e.Password, isWinUsr).subscribe(function (usrAD) {
                    _this.authSrv.isloginfailed = false;
                    if (usrAD) {
                        _this.strSrv.saveObjectToStorage(usr, []);
                    }
                    if (_this.authSrv.IsAuthorised()) {
                        _this.authSrv.goURLPage();
                    }
                    else {
                        _this.authSrv.goUnAuthorisedPage();
                    }
                    _this.authSrv.goURLPage();
                }, function (error) {
                    var Unauthorized = "401";
                    var NoConnection = "Unknown";
                    if (error.includes(NoConnection)) {
                        _this.errorMsg = 'No Server Connection (AD-API)';
                    }
                    else if (error.includes(Unauthorized)) {
                        _this.logSrv.sendUserLog("User Account: " + usr.usrAccountName + " Loggin failed ").subscribe(function (res) {
                            _this.errorMsg = 'Windows User Name or Password Incorrect';
                        });
                    }
                });
            }
        }, function (error) {
            console.log(error.statu);
            //  this.errorMsg = error.message;
            // const NotFound = "404";
            // const Unauthorized = "401";
            // const NoConnection = "Unknown";
            if (error.message.includes("Unknown")) {
                _this.logSrv.sendUserLog(" No Server Connection (Local DB) ").subscribe(function (res) {
                    _this.errorMsg = 'No Server Connection (Local DB)';
                });
            }
            if (error.message.includes("404")) {
                _this.logSrv.sendUserLog(" Loggin failed ").subscribe(function (res) {
                    _this.errorMsg = 'Local User Name or Password Incorrect';
                });
            }
        });
    };
    LoginComponent.prototype.onChangeWindowsUserCheckbox = function (e) {
        //
        if (e.target.checked) {
            this.loginForm.get('WindowsUser').setValue(true);
        }
        else {
            this.loginForm.get('WindowsUser').setValue(false);
        }
    };
    LoginComponent.ctorParameters = function () { return [
        { type: app_shared_services_appstorage_service__WEBPACK_IMPORTED_MODULE_3__["AppstorageService"] },
        { type: app_shared_services_logs_service__WEBPACK_IMPORTED_MODULE_4__["LogsService"] },
        { type: app_shared_authentication_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/login/login.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./login.component.css */ "./src/app/users/login/login.component.css")).default]
        }),
        __metadata("design:paramtypes", [app_shared_services_appstorage_service__WEBPACK_IMPORTED_MODULE_3__["AppstorageService"],
            app_shared_services_logs_service__WEBPACK_IMPORTED_MODULE_4__["LogsService"],
            app_shared_authentication_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/users/privilege/privilege.component.css":
/*!*********************************************************!*\
  !*** ./src/app/users/privilege/privilege.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3ByaXZpbGVnZS9wcml2aWxlZ2UuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/users/privilege/privilege.component.ts":
/*!********************************************************!*\
  !*** ./src/app/users/privilege/privilege.component.ts ***!
  \********************************************************/
/*! exports provided: PrivilegeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivilegeComponent", function() { return PrivilegeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _service_privilege_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/privilege.service */ "./src/app/users/privilege/service/privilege.service.ts");
/* harmony import */ var ngx_alerts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-alerts */ "./node_modules/ngx-alerts/__ivy_ngcc__/fesm5/ngx-alerts.js");
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




var PrivilegeComponent = /** @class */ (function () {
    function PrivilegeComponent(alrtSrv, privSrv, fb, alertService) {
        this.alrtSrv = alrtSrv;
        this.privSrv = privSrv;
        this.fb = fb;
        this.alertService = alertService;
        this.loading = false;
        this.notificationMessage = '';
        this.privilegeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            PrivilegeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0),
            PrivilegeName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.onGetAllPrivileges();
    }
    PrivilegeComponent.prototype.ngOnInit = function () {
        this.privilegeForm = this.fb.group({
            PrivilegeId: 0,
            PrivilegeName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    PrivilegeComponent.prototype.fillPrivs = function () {
        this.Privileges = [
            { Page: 'Mng Invoices', PrivilegeName: '/operation/invoicemng' },
            { Page: 'Mng Emails', PrivilegeName: '/operation/emailmng' },
            { Page: 'Requests', PrivilegeName: '/operation/requests' },
            { Page: 'Assets Transfer', PrivilegeName: '/operation/assetmng' },
            { Page: 'Users List', PrivilegeName: '/users/user' },
            { Page: 'Roles', PrivilegeName: '/users/roles' },
            { Page: 'privilege', PrivilegeName: '/users/privilege' },
            { Page: 'Operators', PrivilegeName: '/masterdata/operator' },
            { Page: 'Assets Tracking', PrivilegeName: '/masterdata/assettrackinglog' },
            { Page: 'Assets Upload', PrivilegeName: '/masterdata/assetsupload' },
            { Page: 'Assets Creation', PrivilegeName: '/masterdata/assets' },
            { Page: 'Assets Creation', PrivilegeName: '/masterdata/assettype' },
            { Page: 'Employee', PrivilegeName: '/masterdata/employee' },
            { Page: 'Import Employees', PrivilegeName: '/masterdata/employeeimport' },
            { Page: 'Branch', PrivilegeName: '/masterdata/branch' },
            { Page: 'Company', PrivilegeName: '/masterdata/company' },
            { Page: 'Domain', PrivilegeName: '/masterdata/domain' },
            { Page: 'Supplier', PrivilegeName: '/masterdata/supplier' },
            { Page: 'Genaric Email', PrivilegeName: '/masterdata/genaricemail' },
            { Page: 'Postion', PrivilegeName: '/masterdata/position' },
            { Page: 'Department', PrivilegeName: '/masterdata/department' },
            { Page: 'Item Category', PrivilegeName: '/masterdata/itemscategory' },
            { Page: 'Cost Center', PrivilegeName: '/masterdata/CostCenter' }
        ];
    };
    PrivilegeComponent.prototype.onGetAllPrivileges = function () {
        var _this = this;
        this.loading = true;
        this.privSrv.getAllPrivileges().subscribe(function (rls) {
            _this.PrivilegesDB = rls;
            _this.loading = false;
        }, function (error) {
            _this.loading = false;
            if (error.message.includes('Http failure response for http://')) {
                _this.alrtSrv.danger('Server error');
            }
        });
    };
    PrivilegeComponent.prototype.onSubmit = function (status) {
        var _this = this;
        if (this.privilegeForm.value.PrivilegeId == 0) {
            this.loading = true;
            this.privSrv.addPrivilege(this.privilegeForm.value).subscribe(function (PrivilegeAdded) {
                _this.alrtSrv.success('Privilages updated Successfully');
                _this.privilegeForm.reset();
                _this.privilegeForm.controls['PrivilegeId'].setValue(0);
                _this.loading = false;
                _this.onGetAllPrivileges();
            }, function (error) {
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.alrtSrv.danger('Server error');
                }
            });
        }
        else if (this.privilegeForm.value.PrivilegeId > 0) {
            this.privSrv.editPrivilege(this.privilegeForm.value.PrivilegeId, this.privilegeForm.value).subscribe(function (PrivilegeAdded) {
                _this.privilegeForm.reset();
                _this.privilegeForm.controls['PrivilegeId'].setValue(0);
                _this.onGetAllPrivileges();
            }, function (error) {
                console.log('Data is not Imported ...', error.message);
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.alrtSrv.danger('Server error');
                }
            });
        }
    };
    PrivilegeComponent.prototype.onDBUpdate = function () {
        var _this = this;
        this.fillPrivs();
        this.privSrv.addMultiplePrivilege(this.Privileges).subscribe(function (res) {
            debugger;
            _this.alertService.success('Privileges ( ' + res.length + '  ) Updated Successfully ');
            _this.onGetAllPrivileges();
        }, function (err) {
            _this.alrtSrv.danger('Server Error');
        });
    };
    PrivilegeComponent.prototype.onEditPrivilege = function (rol) {
        this.privilegeForm.reset();
        this.privilegeForm.patchValue(rol);
    };
    PrivilegeComponent.prototype.onDeletePrivilege = function (rol) {
        var _this = this;
        if (confirm("Are you sure to delete Privilege " + rol.PrivilegeName)) {
            this.privSrv.deletePrivilege(rol.PrivilegeId).subscribe(function (roldlt) {
                _this.alertService.success('Privilege: ' + rol.PrivilegeName + ' is deleted');
                _this.onGetAllPrivileges();
            }, function (error) {
                console.log('Data is not Imported ...', error.message);
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.alrtSrv.danger('Server error');
                }
            });
        }
    };
    PrivilegeComponent.prototype.onCancel = function () {
        this.privilegeForm.reset();
    };
    Object.defineProperty(PrivilegeComponent.prototype, "getPrivilegeForm", {
        get: function () { return this.privilegeForm.controls; },
        enumerable: true,
        configurable: true
    });
    PrivilegeComponent.ctorParameters = function () { return [
        { type: ngx_alerts__WEBPACK_IMPORTED_MODULE_3__["AlertService"] },
        { type: _service_privilege_service__WEBPACK_IMPORTED_MODULE_2__["PrivilegeService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: ngx_alerts__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }
    ]; };
    PrivilegeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-privilege',
            template: __importDefault(__webpack_require__(/*! raw-loader!./privilege.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/privilege/privilege.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./privilege.component.css */ "./src/app/users/privilege/privilege.component.css")).default]
        }),
        __metadata("design:paramtypes", [ngx_alerts__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
            _service_privilege_service__WEBPACK_IMPORTED_MODULE_2__["PrivilegeService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_alerts__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
    ], PrivilegeComponent);
    return PrivilegeComponent;
}());



/***/ }),

/***/ "./src/app/users/privilege/service/privilege.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/users/privilege/service/privilege.service.ts ***!
  \**************************************************************/
/*! exports provided: PrivilegeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivilegeService", function() { return PrivilegeService; });
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



var PrivilegeService = /** @class */ (function () {
    // Categorys: any = [];
    function PrivilegeService(http) {
        this.http = http;
    }
    PrivilegeService.prototype.getAllPrivileges = function () {
        //  
        return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'Privileges');
    };
    PrivilegeService.prototype.addPrivilege = function (body) {
        return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'Privileges', body);
    };
    PrivilegeService.prototype.addMultiplePrivilege = function (body) {
        return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'Privileges/DBUpdatePrivileges', body);
    };
    PrivilegeService.prototype.editPrivilege = function (id, body) {
        return this.http.put(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'Privileges/' + id, body);
    };
    // deletePrivilege(id: number){
    //   return this.Privilege.delete(environment.apiURL + `Privileges/$(id)`);
    // }
    PrivilegeService.prototype.deletePrivilege = function (id) {
        return this.http.delete(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'Privileges/' + id);
    };
    PrivilegeService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    PrivilegeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PrivilegeService);
    return PrivilegeService;
}());



/***/ }),

/***/ "./src/app/users/register/register.component.css":
/*!*******************************************************!*\
  !*** ./src/app/users/register/register.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/users/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/users/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _service_register_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/register.service */ "./src/app/users/register/service/register.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var ngx_alerts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-alerts */ "./node_modules/ngx-alerts/__ivy_ngcc__/fesm5/ngx-alerts.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
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





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(route, regSrv, fb, alertService) {
        this.route = route;
        this.regSrv = regSrv;
        this.fb = fb;
        this.alertService = alertService;
        this.test = new Date();
        this.registerForm = this.fb.group({
            usrId: null,
            EmpImg: null,
            usrFullName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            usrAccountName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            usrGender: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            usrBirhtday: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            usrPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            confirmUsrPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            usrEmail: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
        });
    }
    RegisterComponent.prototype.checkFullPageBackgroundImage = function () {
        var $page = $('.full-page');
        var image_src = $page.data('image');
        if (image_src !== undefined) {
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>';
            $page.append(image_container);
        }
    };
    ;
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            if (params != {}) {
                debugger;
                _this.registerForm.patchValue(params);
            }
        });
        this.checkFullPageBackgroundImage();
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700);
    };
    RegisterComponent.prototype.onSubmit = function () {
        this.regSrv.editUser(555, this.registerForm.value).subscribe(function (usr) {
            console.log(usr);
        });
    };
    RegisterComponent.prototype.onChangeChangeProfileImg = function (event) {
        var _this = this;
        var me = this;
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            console.log('reader.result', reader.result);
            // this.imageCropData = reader.result;
            //console.log( 'MY Photo'  ,  reader.result);
            _this.registerForm.get('EmpImg').setValue(reader.result);
            //console.log('  this.employeeForm.value  ', this.employeeForm.value);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    };
    RegisterComponent.prototype.onCancel = function () {
        this.registerForm.reset();
    };
    Object.defineProperty(RegisterComponent.prototype, "getRegisterForm", {
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "getEmpImg", {
        get: function () {
            return this.registerForm.get('EmpImg');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "getUserId", {
        get: function () {
            return this.registerForm.get('usrId');
        },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _service_register_service__WEBPACK_IMPORTED_MODULE_1__["RegisterService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_alerts__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }
    ]; };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __importDefault(__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/register/register.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./register.component.css */ "./src/app/users/register/register.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _service_register_service__WEBPACK_IMPORTED_MODULE_1__["RegisterService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_alerts__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/users/register/service/register.service.ts":
/*!************************************************************!*\
  !*** ./src/app/users/register/service/register.service.ts ***!
  \************************************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
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



var RegisterService = /** @class */ (function () {
    function RegisterService(http) {
        this.http = http;
    }
    RegisterService.prototype.UserAuthentication = function () {
        return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'GetUserLogin/{Username}/{Password}');
    };
    RegisterService.prototype.ImportADUsers = function () {
        // debugger;
        return this.http.get('http://api.adauth.local:1035/api/auth/users');
    };
    RegisterService.prototype.addImportedUsers = function (body) {
        //   debugger;
        return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'Users/addImportedUsers', body);
    };
    RegisterService.prototype.getAllUsers = function () {
        // debugger;
        return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'Users');
    };
    RegisterService.prototype.getAllUsersWithEmails = function () {
        // debugger;
        return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'Users/GetUsersWithEmail');
    };
    RegisterService.prototype.getAllImportedUsers = function () {
        //  debugger;
        return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'Users/GetAllImportedUsers');
    };
    RegisterService.prototype.addUser = function (body) {
        // debugger;
        return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'Users', body);
    };
    RegisterService.prototype.saveUsers = function (body) {
        // debugger;
        return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'Users/SaveUsers', body);
    };
    RegisterService.prototype.editUser = function (id, body) {
        debugger;
        return this.http.put(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'Users/' + id, body);
    };
    RegisterService.prototype.GetUserByCode = function (hrcode) {
        return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'Users/GetUserByCode/' + hrcode);
    };
    // deleteUser(id: number){
    //   return this.User.delete(environment.apiURL + `Users/$(id)`);
    // }
    RegisterService.prototype.deleteUser = function (id) {
        return this.http.delete(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'Users/' + id);
    };
    RegisterService.prototype.deleteALLimportedUsers = function () {
        return this.http.delete(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'Users/DeleteAllImportedUsers');
    };
    RegisterService.prototype.deleteALLUsers = function () {
        return this.http.delete(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'Users/DeleteAllUsers');
    };
    RegisterService.prototype.deleteSelectedImportedUsers = function (body) {
        debugger;
        return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'Users/DeleteSelected/', body);
    };
    RegisterService.prototype.deleteSelectedUsers = function (body) {
        debugger;
        return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'Users/DeleteSelectedUsers/', body);
    };
    // uploadEmplyeeImage(body) {
    //   debugger;
    //   return this.http.post(environment.apiURL + 'Users/UploadEmplyeeImage/', body );
    //   return this.http.post(environment.apiURL + 'ExcelAsset/UploadExcelAsset', formData, httpOptions)
    // }
    RegisterService.prototype.uploadEmplyeeImage = function (formData) {
        debugger;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        var httpOptions = { headers: headers };
        //   debugger;
        return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'Users/UploadEmplyeeImage/', formData, httpOptions);
    };
    RegisterService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    RegisterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "./src/app/users/role/role.component.css":
/*!***********************************************!*\
  !*** ./src/app/users/role/role.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3JvbGUvcm9sZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/users/role/role.component.ts":
/*!**********************************************!*\
  !*** ./src/app/users/role/role.component.ts ***!
  \**********************************************/
/*! exports provided: RoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleComponent", function() { return RoleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _services_role_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/role.service */ "./src/app/users/role/services/role.service.ts");
/* harmony import */ var ngx_alerts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-alerts */ "./node_modules/ngx-alerts/__ivy_ngcc__/fesm5/ngx-alerts.js");
/* harmony import */ var _privilege_service_privilege_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../privilege/service/privilege.service */ "./src/app/users/privilege/service/privilege.service.ts");
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





var RoleComponent = /** @class */ (function () {
    function RoleComponent(rolSrv, privSrv, fb, alertService) {
        this.rolSrv = rolSrv;
        this.privSrv = privSrv;
        this.fb = fb;
        this.alertService = alertService;
        this.loading = false;
        this.notificationMessage = '';
        this.Privileges = [];
        this.settings = {};
        this.Roles = [];
        this.roleForm = this.fb.group({
            roleId: 0,
            roleName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            RolePrivileges: this.fb.array([])
        });
        // this.onGetAllRoles();
        this.onGetAllPrivileges();
        this.fillRoles();
    }
    RoleComponent.prototype.ngOnInit = function () {
        this.settings = {
            singleSelection: false,
            idField: 'PrivilegeId',
            textField: "PrivilegeName",
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
    };
    RoleComponent.prototype.onSelectRolesTemplate = function (e) {
        if (e.target.value == "Roles") {
            this.onGetAllRoles();
        }
        if (e.target.value == "Templates") {
            this.fillRoles();
        }
    };
    RoleComponent.prototype.fillRoles = function () {
        this.Roles = [
            { roleId: 0, roleName: 'IT', Privileges: [] },
            { roleId: 0, roleName: 'Admin-Cairo', Privileges: [] },
            { roleId: 0, roleName: 'Admin-Alex', Privileges: [] },
            { roleId: 0, roleName: 'Admin-DMT', Privileges: [] },
            { roleId: 0, roleName: 'Admin-PSD', Privileges: [] },
            { roleId: 0, roleName: 'Admin-Suez', Privileges: [] },
            { roleId: 0, roleName: 'Admin-Sokh', Privileges: [] },
            { roleId: 0, roleName: 'Admin-Safaga', Privileges: [] },
            { roleId: 0, roleName: 'Admin-AlxPrt', Privileges: [] },
            { roleId: 0, roleName: 'Admin-AirPrt', Privileges: [] },
            { roleId: 0, roleName: 'Admin-Shrm', Privileges: [] },
        ];
    };
    RoleComponent.prototype.onGetAllRoles = function () {
        var _this = this;
        this.loading = true;
        this.rolSrv.getAllRoles().subscribe(function (rls) {
            if (rls.length == 0) {
                _this.alertService.success('No Role in DB to Import');
            }
            else {
                _this.alertService.success('( ' + rls.length + ' ) Roles Imported successfully from DB');
            }
            _this.Roles = rls;
            _this.loading = false;
        }, function (error) {
            console.log('error ...', error.message);
            _this.loading = false;
            if (error.message.includes('Http failure response for http://')) {
                _this.alertService.danger('Server error');
            }
        });
    };
    RoleComponent.prototype.onGetAllPrivileges = function () {
        var _this = this;
        this.loading = true;
        this.privSrv.getAllPrivileges().subscribe(function (rls) {
            _this.Privileges = rls;
            _this.loading = false;
        }, function (error) {
            console.log('error ...', error.message);
            _this.loading = false;
            if (error.message.includes('Http failure response for http://')) {
                _this.alertService.danger('Server error');
            }
        });
    };
    RoleComponent.prototype.onSubmit = function (status) {
        var _this = this;
        if (this.roleForm.value.roleId == 0) {
            this.loading = true;
            this.rolSrv.addRole(this.roleForm.value).subscribe(function (RoleAdded) {
                if (status == 'Add') {
                    _this.roleForm.reset();
                    _this.roleForm.controls['roleId'].setValue(0);
                    _this.loading = false;
                    _this.alertService.success('Role: ' + RoleAdded.roleName + ' Created successfully');
                    _this.onGetAllRoles();
                }
                else if (status == 'Save') {
                    _this.alertService.success('Role: ' + RoleAdded.roleName + ' Saved successfully');
                    _this.loading = false;
                    _this.onGetAllRoles();
                    window.location.reload();
                }
                ;
            }, function (error) {
                console.log('Data is not Imported ...', error.message);
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.alertService.danger('Server error');
                }
            });
        }
        else if (this.roleForm.value.roleId > 0) {
            this.rolSrv.editRole(this.roleForm.value.roleId, this.roleForm.value).subscribe(function (RoleAdded) {
                _this.roleForm.reset();
                _this.roleForm.controls['roleId'].setValue(0);
                _this.onGetAllRoles();
                window.location.reload();
            }, function (error) {
                console.log('Data is not Imported ...', error.message);
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.alertService.danger('Server error');
                }
            });
        }
    };
    RoleComponent.prototype.onEditRole = function (rol) {
        this.roleForm.reset();
        this.roleForm.patchValue(rol);
        // rol.RolePrivileges.forEach(p =>{
        //   
        //   this.onItemSelect(p.Privilege);
        // });
    };
    RoleComponent.prototype.onDeleteRole = function (rol) {
        var _this = this;
        if (confirm("Are you sure to delete Role " + rol.roleName)) {
            this.rolSrv.deleteRole(rol.roleId).subscribe(function (roldlt) {
                //  this.alertService.danger('Role: ' +  rol.roleName + ' is deleted');
                // this.alertService.info('this is an info alert');
                // this.alertService.danger('this is a danger alert');
                _this.alertService.success('Deleted Successfully');
                // this.alertService.warning('this is a warning alert');
                // this.alertService.warning({html: '<a (click)="okAlertFn()"><b>Yes Proceed</b></a> '});
                _this.onGetAllRoles();
            }, function (error) {
                console.log('Data is not Imported ...', error.message);
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.alertService.danger('Server error');
                }
            });
        }
    };
    RoleComponent.prototype.onCancel = function () {
        this.roleForm.reset();
    };
    RoleComponent.prototype.onFilterChange = function (item) {
        console.log(item);
        this.customSearchFn;
    };
    RoleComponent.prototype.customSearchFn = function (term, item) {
        term = term.toLocaleLowerCase();
        return item.astDescription.toLocaleLowerCase().indexOf(term) > -1 || item.astCode.toLocaleLowerCase().indexOf(term) > -1;
    };
    RoleComponent.prototype.onDropDownClose = function (item) {
        console.log(item);
    };
    RoleComponent.prototype.onItemSelect = function (item) {
        console.log('item  .. ', item);
        this.getPrivilegess.push(this.createItem(item));
        console.log('this.getRoleForm...', this.getRoleForm);
    };
    RoleComponent.prototype.onDeSelect = function (item) {
        console.log(item);
        this.getPrivilegess.removeAt(item);
    };
    RoleComponent.prototype.onSelectAll = function (items) {
        var _this = this;
        console.log(items);
        items.forEach(function (itm) {
            _this.getPrivilegess.push(_this.createItem(itm));
        });
    };
    RoleComponent.prototype.onDeSelectAll = function (items) {
        // this.getAssets.value.forEach(itm => {
        //       this.getAssets.removeAt(itm);
        // });
    };
    RoleComponent.prototype.createItem = function (item) {
        return this.fb.group({
            Id: null,
            RoleId: this.roleForm.get('roleId').value,
            PrivilegeId: item.PrivilegeId,
            PrivilegeName: item.PrivilegeName
        });
    };
    Object.defineProperty(RoleComponent.prototype, "getRoleForm", {
        get: function () { return this.roleForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RoleComponent.prototype, "getPrivilegess", {
        get: function () { return this.getRoleForm.RolePrivileges; },
        enumerable: true,
        configurable: true
    });
    RoleComponent.ctorParameters = function () { return [
        { type: _services_role_service__WEBPACK_IMPORTED_MODULE_2__["RoleService"] },
        { type: _privilege_service_privilege_service__WEBPACK_IMPORTED_MODULE_4__["PrivilegeService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: ngx_alerts__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }
    ]; };
    RoleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-role',
            template: __importDefault(__webpack_require__(/*! raw-loader!./role.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/role/role.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./role.component.css */ "./src/app/users/role/role.component.css")).default]
        }),
        __metadata("design:paramtypes", [_services_role_service__WEBPACK_IMPORTED_MODULE_2__["RoleService"],
            _privilege_service_privilege_service__WEBPACK_IMPORTED_MODULE_4__["PrivilegeService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_alerts__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
    ], RoleComponent);
    return RoleComponent;
}());



/***/ }),

/***/ "./src/app/users/role/services/role.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/users/role/services/role.service.ts ***!
  \*****************************************************/
/*! exports provided: RoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleService", function() { return RoleService; });
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



var RoleService = /** @class */ (function () {
    // Categorys: any = [];
    function RoleService(http) {
        this.http = http;
    }
    RoleService.prototype.getAllRoles = function () {
        return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'Roles');
    };
    RoleService.prototype.addRole = function (body) {
        return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'Roles', body);
    };
    RoleService.prototype.editRole = function (id, body) {
        return this.http.put(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'Roles/' + id, body);
    };
    // deleteRole(id: number){
    //   return this.Role.delete(environment.apiURL + `Roles/$(id)`);
    // }
    RoleService.prototype.deleteRole = function (id) {
        return this.http.delete(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'Roles/' + id);
    };
    RoleService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    RoleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RoleService);
    return RoleService;
}());



/***/ }),

/***/ "./src/app/users/unauthorised/unauthorised.component.css":
/*!***************************************************************!*\
  !*** ./src/app/users/unauthorised/unauthorised.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VuYXV0aG9yaXNlZC91bmF1dGhvcmlzZWQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/users/unauthorised/unauthorised.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/users/unauthorised/unauthorised.component.ts ***!
  \**************************************************************/
/*! exports provided: UnauthorisedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnauthorisedComponent", function() { return UnauthorisedComponent; });
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

var UnauthorisedComponent = /** @class */ (function () {
    function UnauthorisedComponent() {
    }
    UnauthorisedComponent.prototype.ngOnInit = function () {
    };
    UnauthorisedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-unauthorised',
            template: __importDefault(__webpack_require__(/*! raw-loader!./unauthorised.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/unauthorised/unauthorised.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./unauthorised.component.css */ "./src/app/users/unauthorised/unauthorised.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], UnauthorisedComponent);
    return UnauthorisedComponent;
}());



/***/ }),

/***/ "./src/app/users/user/user.component.css":
/*!***********************************************!*\
  !*** ./src/app/users/user/user.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/users/user/user.component.ts":
/*!**********************************************!*\
  !*** ./src/app/users/user/user.component.ts ***!
  \**********************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _register_service_register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../register/service/register.service */ "./src/app/users/register/service/register.service.ts");
/* harmony import */ var ngx_alerts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-alerts */ "./node_modules/ngx-alerts/__ivy_ngcc__/fesm5/ngx-alerts.js");
/* harmony import */ var app_masterdata_employee_services_employee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/masterdata/employee/services/employee.service */ "./src/app/masterdata/employee/services/employee.service.ts");
/* harmony import */ var _role_services_role_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../role/services/role.service */ "./src/app/users/role/services/role.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var app_shared_services_customvalidators_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/services/customvalidators.service */ "./src/app/shared/services/customvalidators.service.ts");
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








var UserComponent = /** @class */ (function () {
    // EmpImg = '../../../assets/img/profile/ProfilePhoto.png';
    function UserComponent(valdSrv, regSrv, rolSrv, fb, alertService, empSrv, route) {
        this.valdSrv = valdSrv;
        this.regSrv = regSrv;
        this.rolSrv = rolSrv;
        this.fb = fb;
        this.alertService = alertService;
        this.empSrv = empSrv;
        this.route = route;
        this.config = {};
        this.loading = false;
        this.notificationMessage = '';
        this.Users = [];
        this.Roles = [];
        this.Employees = [];
        this.UsersAccounts = [];
        this.userForm = this.fb.group({
            usrId: null,
            EmpImg: null,
            usrFullName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            usrAccountName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            usrPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            confirmUsrPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            usrEmail: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
            roleId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        }, {
            validator: this.valdSrv.MustMatch('usrPassword', 'confirmUsrPassword')
        });
        this.onGetAllUsers();
        this.onGetAllRolss();
        this.userForm.reset();
    }
    UserComponent.prototype.passwordConfirming = function (c) {
        // 
        if (c.get('password').value !== c.get('confirm_password').value) {
            // debugger
            return { invalid: true };
        }
    };
    UserComponent.prototype.MatchPassword = function (control) {
        var password = control.get('password').value;
        var confirmPassword = control.get('confirm_password').value;
        if (password != confirmPassword) {
            control.get('confirm_password').setErrors({ confirm_password: true });
        }
        else {
            return null;
        }
    };
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            debugger;
            if (params != {}) {
                _this.userForm.get('EmpImg').setValue(params.EmpImg);
                _this.userForm.get('usrFullName').setValue(params.empFullName);
                _this.userForm.get('usrAccountName').setValue(params.accountName);
                //     this.userForm.get('usrEmail').setValue(params.usrEmail);
            }
        });
        this.config = {
            displayKey: "accountName",
            search: true,
            height: 'auto',
            placeholder: 'Select',
            customComparator: function () { },
            limitTo: Option.length,
            moreText: 'more',
            noResultsFound: 'No results found!',
            searchPlaceholder: 'Search',
            searchOnKey: 'name',
            clearOnSelection: false,
            inputDirection: 'ltr' // the direction of the search input can be rtl or ltr(default)
        };
    };
    UserComponent.prototype.fileChangeListener = function (event) {
        var _this = this;
        var me = this;
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            _this.userForm.get('EmpImg').setValue(reader.result);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    };
    UserComponent.prototype.onGetAllUsers = function () {
        var _this = this;
        this.loading = true;
        this.regSrv.getAllUsers().subscribe(function (usrs) {
            _this.Users = usrs;
            _this.loading = false;
        }, function (error) {
            console.log('error ...', error.message);
            _this.loading = false;
            if (error.message.includes('Http failure response for http://')) {
            }
        });
    };
    UserComponent.prototype.onGetAllRolss = function () {
        var _this = this;
        this.loading = true;
        this.rolSrv.getAllRoles().subscribe(function (res) {
            _this.Roles = res;
            _this.loading = false;
        }, function (error) {
            console.log('error ...', error.message);
            _this.loading = false;
            if (error.message.includes('Http failure response for http://')) {
            }
        });
    };
    UserComponent.prototype.onGetAllEmployees = function () {
        var _this = this;
        this.loading = true;
        this.empSrv.getAllEmployeesWithEmails().subscribe(function (emps) {
            _this.Employees = emps;
        }, function (err) {
            _this.alertService.danger('Server error');
        });
    };
    UserComponent.prototype.ImportADEmployees = function () {
        var _this = this;
        this.empSrv.ImportADEmployees().subscribe(function (emps) {
            emps.forEach(function (e) {
                _this.UsersAccounts.push(e);
            });
        });
    };
    UserComponent.prototype.selectionChanged = function (e) {
        console.log(e);
    };
    UserComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.userForm.value.usrId) {
            this.loading = true;
            this.regSrv.addUser(this.userForm.value).subscribe(function (UserAdded) {
                _this.userForm.reset();
                _this.loading = false;
                _this.alertService.success('Created Successfully');
                _this.onGetAllUsers();
            }, function (error) {
                console.log('Data is not Imported ...', error.message);
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.alertService.danger('Server error');
                }
            });
        }
        else if (this.userForm.value.usrId) {
            this.regSrv.editUser(this.userForm.value.usrId, this.userForm.value).subscribe(function (UserAdded) {
                _this.userForm.reset();
                _this.onGetAllUsers();
                _this.alertService.success('Changed Successfully');
            }, function (error) {
                console.log('Data is not Imported ...', error.message);
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.alertService.danger('server error');
                }
            });
        }
    };
    UserComponent.prototype.onEditUser = function (usr) {
        this.userForm.reset();
        this.userForm.patchValue(usr);
    };
    UserComponent.prototype.onDeleteUser = function (dom) {
        var _this = this;
        debugger;
        if (confirm("Are you sure to delete User " + dom.usrFullName)) {
            this.regSrv.deleteUser(dom.usrId).subscribe(function (domdlt) {
                debugger;
                _this.alertService.success('Deleted Successfully');
                _this.onGetAllUsers();
            }, function (error) {
                console.log('Data is not Imported ...', error.message);
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.alertService.danger('Server error');
                }
            });
        }
    };
    UserComponent.prototype.onCancel = function () {
        this.userForm.reset();
    };
    UserComponent.prototype.onChangeRoled = function (e) {
        this.userForm.get('rolId').setValue(e.target.value);
    };
    Object.defineProperty(UserComponent.prototype, "getUserForm", {
        get: function () { return this.userForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserComponent.prototype, "getUserPasswordGroup", {
        get: function () { return this.userForm.get('usrPassword'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserComponent.prototype, "getUserPassword", {
        get: function () { return this.getUserPasswordGroup.get('password'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserComponent.prototype, "getUserConfirmPassword", {
        get: function () { return this.getUserPasswordGroup.get('confirm_password'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserComponent.prototype, "getEmpImg", {
        get: function () { return this.userForm.get('EmpImg'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserComponent.prototype, "getUserId", {
        get: function () { return this.userForm.get('usrId'); },
        enumerable: true,
        configurable: true
    });
    UserComponent.ctorParameters = function () { return [
        { type: app_shared_services_customvalidators_service__WEBPACK_IMPORTED_MODULE_7__["CustomvalidatorsService"] },
        { type: _register_service_register_service__WEBPACK_IMPORTED_MODULE_2__["RegisterService"] },
        { type: _role_services_role_service__WEBPACK_IMPORTED_MODULE_5__["RoleService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: ngx_alerts__WEBPACK_IMPORTED_MODULE_3__["AlertService"] },
        { type: app_masterdata_employee_services_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
    ]; };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __importDefault(__webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/user/user.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./user.component.css */ "./src/app/users/user/user.component.css")).default]
        }),
        __metadata("design:paramtypes", [app_shared_services_customvalidators_service__WEBPACK_IMPORTED_MODULE_7__["CustomvalidatorsService"],
            _register_service_register_service__WEBPACK_IMPORTED_MODULE_2__["RegisterService"],
            _role_services_role_service__WEBPACK_IMPORTED_MODULE_5__["RoleService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_alerts__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
            app_masterdata_employee_services_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/users/useractionlog/service/useractionlog.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/users/useractionlog/service/useractionlog.service.ts ***!
  \**********************************************************************/
/*! exports provided: UseractionlogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UseractionlogService", function() { return UseractionlogService; });
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



var UseractionlogService = /** @class */ (function () {
    function UseractionlogService(http) {
        this.http = http;
    }
    UseractionlogService.prototype.getAllUserLogs = function () {
        //  debugger;
        return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'UserActivitiesLogs');
    };
    UseractionlogService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    UseractionlogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UseractionlogService);
    return UseractionlogService;
}());



/***/ }),

/***/ "./src/app/users/useractionlog/useractionlog.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/users/useractionlog/useractionlog.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJhY3Rpb25sb2cvdXNlcmFjdGlvbmxvZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/users/useractionlog/useractionlog.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/users/useractionlog/useractionlog.component.ts ***!
  \****************************************************************/
/*! exports provided: UseractionlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UseractionlogComponent", function() { return UseractionlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _service_useractionlog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/useractionlog.service */ "./src/app/users/useractionlog/service/useractionlog.service.ts");
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


var UseractionlogComponent = /** @class */ (function () {
    function UseractionlogComponent(logSrv) {
        this.logSrv = logSrv;
        this.Logs = [];
        this.TempLogs = [];
    }
    UseractionlogComponent.prototype.ngOnInit = function () {
        this.onGetUserLog();
    };
    UseractionlogComponent.prototype.onGetUserLog = function () {
        var _this = this;
        //    
        this.logSrv.getAllUserLogs().subscribe(function (rls) {
            _this.Logs = rls;
            _this.TempLogs = rls;
            //   this.loading = false;
        }, function (error) {
            console.log('error ...', error.message);
            //    this.loading = false;
            if (error.message.includes('Http failure response for http://')) {
                //   this.noticationMessegeTimer('Server connection Error / Data is not updated');
            }
        });
    };
    UseractionlogComponent.prototype.onFilterLogByDate = function (e, FromTo) {
        var _this = this;
        var from = new Date(e[0]);
        var to = new Date(e[1]);
        this.Logs = [];
        this.TempLogs.forEach(function (log) {
            var logdate = new Date(log.ActionTime);
            if (logdate > from && logdate < to) {
                _this.Logs.push(log);
            }
        });
    };
    UseractionlogComponent.ctorParameters = function () { return [
        { type: _service_useractionlog_service__WEBPACK_IMPORTED_MODULE_1__["UseractionlogService"] }
    ]; };
    UseractionlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-useractionlog',
            template: __importDefault(__webpack_require__(/*! raw-loader!./useractionlog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/useractionlog/useractionlog.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./useractionlog.component.css */ "./src/app/users/useractionlog/useractionlog.component.css")).default]
        }),
        __metadata("design:paramtypes", [_service_useractionlog_service__WEBPACK_IMPORTED_MODULE_1__["UseractionlogService"]])
    ], UseractionlogComponent);
    return UseractionlogComponent;
}());



/***/ }),

/***/ "./src/app/users/users-routing.ts":
/*!****************************************!*\
  !*** ./src/app/users/users-routing.ts ***!
  \****************************************/
/*! exports provided: UsersRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRoutes", function() { return UsersRoutes; });
/* harmony import */ var _role_role_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./role/role.component */ "./src/app/users/role/role.component.ts");
/* harmony import */ var _privilege_privilege_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./privilege/privilege.component */ "./src/app/users/privilege/privilege.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/users/login/login.component.ts");
/* harmony import */ var _lock_lock_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lock/lock.component */ "./src/app/users/lock/lock.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/users/register/register.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/user.component */ "./src/app/users/user/user.component.ts");
/* harmony import */ var _unauthorised_unauthorised_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./unauthorised/unauthorised.component */ "./src/app/users/unauthorised/unauthorised.component.ts");
/* harmony import */ var _useractionlog_useractionlog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./useractionlog/useractionlog.component */ "./src/app/users/useractionlog/useractionlog.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








var routes = [];
var UsersRoutes = [{
        path: '',
        children: [
            {
                path: 'roles',
                //   canActivate: [AuthGuard],  
                component: _role_role_component__WEBPACK_IMPORTED_MODULE_0__["RoleComponent"]
            },
            {
                path: 'privilege',
                //    canActivate: [AuthGuard],  
                component: _privilege_privilege_component__WEBPACK_IMPORTED_MODULE_1__["PrivilegeComponent"]
            },
            {
                path: 'user',
                //    canActivate: [AuthGuard],  
                component: _user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"]
            },
            {
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
            },
            {
                path: 'lock',
                // canActivate: [AuthGuard],  
                component: _lock_lock_component__WEBPACK_IMPORTED_MODULE_3__["LockComponent"]
            },
            {
                path: 'register',
                component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
            },
            {
                path: 'unauthorised',
                component: _unauthorised_unauthorised_component__WEBPACK_IMPORTED_MODULE_6__["UnauthorisedComponent"]
            }, {
                path: 'useractionlog',
                component: _useractionlog_useractionlog_component__WEBPACK_IMPORTED_MODULE_7__["UseractionlogComponent"]
            }
        ]
    }];


/***/ }),

/***/ "./src/app/users/users.module.ts":
/*!***************************************!*\
  !*** ./src/app/users/users.module.ts ***!
  \***************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _users_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users-routing */ "./src/app/users/users-routing.ts");
/* harmony import */ var _role_role_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./role/role.component */ "./src/app/users/role/role.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-print */ "./node_modules/ngx-print/__ivy_ngcc__/fesm5/ngx-print.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/__ivy_ngcc__/fesm5/ngx-order-pipe.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var ngx_angular_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-angular-autocomplete */ "./node_modules/ngx-angular-autocomplete/__ivy_ngcc__/fesm5/ngx-angular-autocomplete.js");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/__ivy_ngcc__/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var ngx_alerts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-alerts */ "./node_modules/ngx-alerts/__ivy_ngcc__/fesm5/ngx-alerts.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/esm5/ngx-bootstrap.js");
/* harmony import */ var _privilege_privilege_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./privilege/privilege.component */ "./src/app/users/privilege/privilege.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "./src/app/users/login/login.component.ts");
/* harmony import */ var _lock_lock_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lock/lock.component */ "./src/app/users/lock/lock.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./register/register.component */ "./src/app/users/register/register.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user/user.component */ "./src/app/users/user/user.component.ts");
/* harmony import */ var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-select-dropdown */ "./node_modules/ngx-select-dropdown/__ivy_ngcc__/dist/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm5/ng-select-ng-select.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/__ivy_ngcc__/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var _unauthorised_unauthorised_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./unauthorised/unauthorised.component */ "./src/app/users/unauthorised/unauthorised.component.ts");
/* harmony import */ var _users_useractionlog_useractionlog_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../users/useractionlog/useractionlog.component */ "./src/app/users/useractionlog/useractionlog.component.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/datepicker/fesm5/ngx-bootstrap-datepicker.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
























var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_role_role_component__WEBPACK_IMPORTED_MODULE_3__["RoleComponent"], _privilege_privilege_component__WEBPACK_IMPORTED_MODULE_13__["PrivilegeComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"], _lock_lock_component__WEBPACK_IMPORTED_MODULE_15__["LockComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"], _user_user_component__WEBPACK_IMPORTED_MODULE_17__["UserComponent"], _unauthorised_unauthorised_component__WEBPACK_IMPORTED_MODULE_21__["UnauthorisedComponent"], _users_useractionlog_useractionlog_component__WEBPACK_IMPORTED_MODULE_22__["UseractionlogComponent"]],
            imports: [
                ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_18__["SelectDropDownModule"],
                ngx_print__WEBPACK_IMPORTED_MODULE_5__["NgxPrintModule"],
                ngx_angular_autocomplete__WEBPACK_IMPORTED_MODULE_9__["NgxAutocompleteModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                ngx_order_pipe__WEBPACK_IMPORTED_MODULE_7__["OrderModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_users_routing__WEBPACK_IMPORTED_MODULE_2__["UsersRoutes"]),
                ngx_loading__WEBPACK_IMPORTED_MODULE_10__["NgxLoadingModule"].forRoot({
                    animationType: ngx_loading__WEBPACK_IMPORTED_MODULE_10__["ngxLoadingAnimationTypes"].wanderingCubes,
                    backdropBackgroundColour: 'rgba(0,0,0,0.1)',
                    backdropBorderRadius: '4px',
                    primaryColour: '#ffffff',
                    secondaryColour: '#ffffff',
                    tertiaryColour: '#ffffff'
                }),
                // Specify your library as an import (set timeout to -1 for unlimited timeout, the message can only be closed by the user clicking on it)
                ngx_alerts__WEBPACK_IMPORTED_MODULE_11__["AlertModule"].forRoot({ maxMessages: 5, timeout: 5000, position: 'right' }),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["ModalModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_20__["NgMultiSelectDropDownModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__["NgSelectModule"],
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_23__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_23__["DatepickerModule"].forRoot()
            ]
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ })

}]);
//# sourceMappingURL=users-users-module.js.map