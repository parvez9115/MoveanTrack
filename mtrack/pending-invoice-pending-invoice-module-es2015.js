(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pending-invoice-pending-invoice-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/pending-invoice/confirm-popup/confirm-popup.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/pending-invoice/confirm-popup/confirm-popup.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <form [formGroup]=\"confirmform\">\n    <ion-row>\n      <ion-col\n        style=\"\n          text-align: center;\n          margin-top: 15px;\n          font-size: 20px;\n          color: red;\n        \"\n      >\n        Confirmation Delete\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top: 15px\">\n      <ion-col style=\"padding: 10px\" size=\"12\">\n        <ion-item>\n          <ion-input\n            label=\"User Name\"\n            labelPlacement=\"floating\"\n            placeholder=\"Enter the User Name\"\n            formControlName=\"username\"\n            [clearInput]=\"true\"\n          ></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col style=\"padding: 10px\" size=\"12\">\n        <ion-item>\n          <ion-input\n            label=\"Password\"\n            labelPlacement=\"floating\"\n            placeholder=\"Enter the Password\"\n            formControlName=\"password\"\n            type=\"password\"\n          ></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top: 25px\">\n      <ion-col style=\"text-align: center\">\n        <ion-button size=\"small\" (click)=\"submit()\">Submit</ion-button>\n        <ion-button size=\"small\" (click)=\"cancel()\">Cancel</ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/pending-invoice/pending-invoice.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/pending-invoice/pending-invoice.page.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"goback()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px; cursor: pointer\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-row>\n      <ion-title>Pending Invoice</ion-title>\n      <ion-col size=\"4\" style=\"text-align: right\"> </ion-col>\n    </ion-row> </ion-toolbar\n></ion-header>\n\n<ion-content>\n  <ion-row style=\"margin-top: 10px; padding: 10px\">\n    <ion-col\n      size=\"2\"\n      (mouseover)=\"pendinginvoicecount()\"\n      (click)=\"getdatas('Pending')\"\n      style=\"cursor: pointer\"\n    >\n      <ion-label\n        [ngClass]=\"{selectedUpperCol:'true',selected:status == 'Pending'  }\"\n      >\n        Pending Invoice\n        <span\n          *ngIf=\"color != 'red'\"\n          style=\"\n            background-color: #28e070;\n            padding: 1px;\n            padding-left: 5px;\n            padding-right: 5px;\n            border-radius: 20px;\n            color: #000;\n            font-weight: bold;\n            font-size: 16px;\n          \"\n          >{{invoices.pending}}</span\n        >\n        <span\n          *ngIf=\"color == 'red'\"\n          style=\"\n            background-color: red;\n            padding: 1px;\n            padding-left: 5px;\n            padding-right: 5px;\n            border-radius: 20px;\n            color: #fff;\n            font-weight: bold;\n            font-size: 16px;\n          \"\n          >{{invoices.pending}}</span\n        ></ion-label\n      >\n    </ion-col>\n\n    <ion-col\n      size=\"2\"\n      z\n      (click)=\"getdatas('Close')\"\n      (mouseover)=\"closeinvoicecount()\"\n      style=\"cursor: pointer\"\n    >\n      <ion-label\n        [ngClass]=\"{selectedUpperCol:'true',selected:status == 'Close'  }\"\n      >\n        Closed Invoice\n        <span\n          *ngIf=\"closecolor != 'red'\"\n          style=\"\n            background-color: #28e070;\n            padding: 1px;\n            padding-left: 5px;\n            padding-right: 5px;\n            border-radius: 20px;\n            color: #000;\n            font-weight: bold;\n            font-size: 16px;\n          \"\n          >{{closeinvoices.pending}}</span\n        >\n        <span\n          *ngIf=\"closecolor == 'red'\"\n          style=\"\n            background-color: red;\n            padding: 1px;\n            padding-left: 5px;\n            padding-right: 5px;\n            border-radius: 20px;\n            color: #fff;\n            font-weight: bold;\n            font-size: 16px;\n          \"\n          >{{closeinvoices.pending}}</span\n        ></ion-label\n      >\n    </ion-col>\n\n    <ion-col\n      size=\"2\"\n      (click)=\"getdatas('Deleted')\"\n      (mouseover)=\"deleteinvoicecount()\"\n      style=\"cursor: pointer\"\n    >\n      <ion-label\n        [ngClass]=\"{selectedUpperCol:'true',selected:status == 'Deleted' }\"\n      >\n        Deleted Invoice\n        <span\n          *ngIf=\"deletecolor != 'red'\"\n          style=\"\n            background-color: #28e070;\n            padding: 1px;\n            padding-left: 5px;\n            padding-right: 5px;\n            border-radius: 20px;\n            color: #000;\n            font-weight: bold;\n            font-size: 16px;\n          \"\n          >{{deleteinvoices.pending}}</span\n        >\n        <span\n          *ngIf=\"deletecolor == 'red'\"\n          style=\"\n            background-color: red;\n            padding: 1px;\n            padding-left: 5px;\n            padding-right: 5px;\n            border-radius: 20px;\n            color: #fff;\n            font-weight: bold;\n            font-size: 16px;\n          \"\n          >{{deleteinvoices.pending}}</span\n        ></ion-label\n      >\n    </ion-col>\n  </ion-row>\n\n  <ion-row style=\"margin-top: 10px\"\n    ><ion-col>\n      <jqxGrid\n        #myGrid\n        (onRowclick)=\"myGridOnRowSelect($event)\"\n        [theme]=\"'material'\"\n        [width]=\"'99%'\"\n        [autoheight]=\"true\"\n        [source]=\"dataAdapter\"\n        [columns]=\"columns\"\n        [sortable]=\"true\"\n        [filterable]=\"true\"\n        [columnsresize]=\"true\"\n        [enablebrowserselection]=\"true\"\n        [enabletooltips]=\"true\"\n        [pagesizeoptions]=\"page\"\n        [pageable]=\"true\"\n        [showfilterrow]=\"true\"\n        style=\"\n          font-size: 16px;\n          text-align: center !important;\n          margin: auto;\n          cursor: pointer;\n        \"\n      >\n      </jqxGrid> </ion-col\n  ></ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/pending-invoice/view-details/view-details.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/pending-invoice/view-details/view-details.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"cancelBtn()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>View Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row style=\"margin-top: 10px\">\n    <ion-col size=\"12\">\n      <jqxGrid\n        #myGrid\n        [theme]=\"'material'\"\n        [width]=\"'99%'\"\n        [autoheight]=\"true\"\n        [source]=\"dataAdapter\"\n        [columns]=\"columns\"\n        [pagesizeoptions]=\"page\"\n        [enablebrowserselection]=\"true\"\n        [sortable]=\"true\"\n        [filterable]=\"true\"\n        [columns]=\"columns\"\n        [columnsresize]=\"true\"\n        [enabletooltips]=\"true\"\n        [pageable]=\"true\"\n        [showfilterrow]=\"true\"\n        style=\"\n          font-size: 16px;\n          text-align: center !important;\n          margin: auto;\n          cursor: pointer;\n        \"\n      >\n      </jqxGrid>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/pending-invoice/view-invoice/view-invoice.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/pending-invoice/view-invoice/view-invoice.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\" class=\"dealerHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        (click)=\"cancelBtn()\"\n        name=\"arrow-back\"\n        style=\"padding: 10px\"\n        slot=\"start\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>Invoice Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"generateForm\">\n    <ion-row style=\"margin-top: 5px\">\n      <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n        <ion-label class=\"dealer-label\">User ID :</ion-label>\n        <ion-input\n          placeholder=\"Enter the User Id\"\n          formControlName=\"userid\"\n          class=\"input\"\n        ></ion-input>\n      </ion-col>\n\n      <ion-col size=\"12\" size-lg=\"2.4\" size-md=\"2.4\">\n        <ion-label class=\"dealer-label\">Password :</ion-label>\n        <ion-input\n          type=\"password\"\n          placeholder=\"Enter the Password\"\n          formControlName=\"password\"\n          class=\"input\"\n        ></ion-input>\n      </ion-col>\n\n      <!-- <ion-col style=\"text-align: end; margin-right: 10px\"\n        ><span\n          ><ion-icon\n            class=\"dismiss\"\n            name=\"trash\"\n            (click)=\"deleteModel()\"\n          ></ion-icon\n        ></span>\n      </ion-col> -->\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\" size-lg=\"3.5\" size-md=\"3.5\" style=\"margin-left: 10px\">\n        <ion-label>\n          <span class=\"dealer-label\">Dealer :</span>\n          <span class=\"dealer-data\">{{ value.dealername }}</span>\n        </ion-label>\n      </ion-col>\n\n      <ion-col>\n        <ion-label>\n          <span class=\"dealer-label\">Invoice Date :</span>\n          <span class=\"dealer-data\">{{ invoicedate }}</span>\n        </ion-label>\n      </ion-col>\n      <ion-col style=\"text-align: end !important\">\n        <ion-button\n          class=\"button\"\n          size=\"small\"\n          type=\"submit\"\n          (click)=\"confirmModel()\"\n          [disabled]=\"!generateForm.valid\"\n          >Approve\n        </ion-button>\n        <ion-button\n          class=\"button\"\n          size=\"small\"\n          type=\"cancel\"\n          (click)=\"cancelBtn()\"\n          >Cancel</ion-button\n        >\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf=\"visible\">\n      <ion-col\n        *ngIf=\"pagetitle != 'Sales'\"\n        size=\"12\"\n        size-lg=\"2.2\"\n        size-md=\"2.2\"\n        style=\"margin-left: 10px\"\n      >\n        <ion-label>\n          <span class=\"dealer-label\">IMEI No :</span>\n        </ion-label>\n        <ion-input formControlName=\"imei\" class=\"input\" disabled></ion-input>\n      </ion-col>\n\n      <ion-col\n        *ngIf=\"pagetitle == 'Sales'\"\n        size=\"12\"\n        size-lg=\"2.2\"\n        size-md=\"2.2\"\n      >\n        <ion-label>\n          <span class=\"dealer-label\">No of Units :</span>\n        </ion-label>\n        <ion-input formControlName=\"noofunits\" class=\"input\"></ion-input>\n      </ion-col>\n\n      <ion-col\n        *ngIf=\"pagetitle != 'Sales'\"\n        size=\"12\"\n        size-lg=\"4.5\"\n        size-md=\"4.5\"\n      >\n        <ion-label>\n          <span class=\"dealer-label\">Product Name :</span>\n        </ion-label>\n        <ionic-selectable\n          class=\"input selectable-input\"\n          formControlName=\"productnamelist\"\n          [(ngModel)]=\"product\"\n          [items]=\"productnamelist\"\n          [canSearch]=\"true\"\n          [hasVirtualScroll]=\"true\"\n          itemValueField=\"itemname\"\n          itemTextField=\"itemname\"\n        >\n        </ionic-selectable>\n      </ion-col>\n      <ion-col\n        size=\"12\"\n        size-lg=\"2\"\n        size-md=\"2\"\n        style=\"text-align: end; margin-top: 27px\"\n      >\n        <ion-button size=\"small\" (click)=\"save()\">Save</ion-button>\n        <ion-button size=\"small\" (click)=\"dismiss()\">Clear</ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n\n  <ion-row style=\"margin-top: 10px\">\n    <ion-col size=\"12\">\n      <jqxGrid\n        #myGrid\n        (onRowclick)=\"myGridOnRowSelect($event)\"\n        [theme]=\"'material'\"\n        [width]=\"'99%'\"\n        [autoheight]=\"true\"\n        [source]=\"dataAdapter\"\n        [columns]=\"columns\"\n        [sortable]=\"true\"\n        [filterable]=\"true\"\n        [columns]=\"columns\"\n        [enablebrowserselection]=\"true\"\n        [pagesizeoptions]=\"page\"\n        [columnsresize]=\"true\"\n        [enabletooltips]=\"true\"\n        [showfilterrow]=\"true\"\n        [pageable]=\"true\"\n        style=\"\n          font-size: 16px;\n          text-align: center !important;\n          margin: auto;\n          cursor: pointer;\n        \"\n      >\n      </jqxGrid>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/delar-application/pending-invoice/confirm-popup/confirm-popup.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/delar-application/pending-invoice/confirm-popup/confirm-popup.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL3BlbmRpbmctaW52b2ljZS9jb25maXJtLXBvcHVwL2NvbmZpcm0tcG9wdXAuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/delar-application/pending-invoice/confirm-popup/confirm-popup.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/delar-application/pending-invoice/confirm-popup/confirm-popup.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ConfirmPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPopupComponent", function() { return ConfirmPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let ConfirmPopupComponent = class ConfirmPopupComponent {
    constructor(formBuilder, modalController) {
        this.formBuilder = formBuilder;
        this.modalController = modalController;
    }
    createForm() {
        this.confirmform = this.formBuilder.group({
            username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    clear() {
        this.confirmform.patchValue({
            username: "",
            password: "",
        });
    }
    cancel() {
        this.modalController.dismiss();
    }
    submit() {
        var data;
        data = {
            username: this.confirmform.value.username,
            password: this.confirmform.value.password,
        };
        this.modalController.dismiss({ value: data });
    }
    ngOnInit() {
        this.createForm();
        this.clear();
    }
};
ConfirmPopupComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
ConfirmPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-confirm-popup",
        template: __webpack_require__(/*! raw-loader!./confirm-popup.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/pending-invoice/confirm-popup/confirm-popup.component.html"),
        styles: [__webpack_require__(/*! ./confirm-popup.component.scss */ "./src/app/delar-application/pending-invoice/confirm-popup/confirm-popup.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
], ConfirmPopupComponent);



/***/ }),

/***/ "./src/app/delar-application/pending-invoice/pending-invoice.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/delar-application/pending-invoice/pending-invoice.module.ts ***!
  \*****************************************************************************/
/*! exports provided: PendingInvoicePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingInvoicePageModule", function() { return PendingInvoicePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pending_invoice_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pending-invoice.page */ "./src/app/delar-application/pending-invoice/pending-invoice.page.ts");
/* harmony import */ var _view_details_view_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view-details/view-details.component */ "./src/app/delar-application/pending-invoice/view-details/view-details.component.ts");
/* harmony import */ var src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared-mod/shared-mod.module */ "./src/app/shared-mod/shared-mod.module.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");
/* harmony import */ var _view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view-invoice/view-invoice.component */ "./src/app/delar-application/pending-invoice/view-invoice/view-invoice.component.ts");
/* harmony import */ var _confirm_popup_confirm_popup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./confirm-popup/confirm-popup.component */ "./src/app/delar-application/pending-invoice/confirm-popup/confirm-popup.component.ts");












const routes = [
    {
        path: "",
        component: _pending_invoice_page__WEBPACK_IMPORTED_MODULE_6__["PendingInvoicePage"],
    },
    {
        path: "view-details",
        component: _view_details_view_details_component__WEBPACK_IMPORTED_MODULE_7__["ViewDetailsComponent"],
    },
    {
        path: "view-invoice",
        component: _view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_10__["ViewInvoiceComponent"],
    },
    {
        path: "confirm-popup",
        component: _confirm_popup_confirm_popup_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmPopupComponent"],
    },
];
let PendingInvoicePageModule = class PendingInvoicePageModule {
};
PendingInvoicePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_app_shared_mod_shared_mod_module__WEBPACK_IMPORTED_MODULE_8__["SharedModModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ionic_selectable__WEBPACK_IMPORTED_MODULE_9__["IonicSelectableModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
        ],
        declarations: [
            _pending_invoice_page__WEBPACK_IMPORTED_MODULE_6__["PendingInvoicePage"],
            _view_details_view_details_component__WEBPACK_IMPORTED_MODULE_7__["ViewDetailsComponent"],
            _view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_10__["ViewInvoiceComponent"],
            _confirm_popup_confirm_popup_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmPopupComponent"],
        ],
    })
], PendingInvoicePageModule);



/***/ }),

/***/ "./src/app/delar-application/pending-invoice/pending-invoice.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/delar-application/pending-invoice/pending-invoice.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".selectedUpperCol {\n  padding: 8px;\n  border: 1px solid black;\n  background-color: #f59e0b;\n  border-radius: 5px;\n  color: #fff;\n  font-weight: 400;\n}\n\n.selected {\n  padding: 8px;\n  background-color: #f59e0b;\n  border-radius: 5px;\n  color: #fff;\n  font-weight: 400;\n  box-shadow: 0px 0px 0px 2px black;\n  border: 2px solid #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vcGVuZGluZy1pbnZvaWNlL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXHBlbmRpbmctaW52b2ljZVxccGVuZGluZy1pbnZvaWNlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vcGVuZGluZy1pbnZvaWNlL3BlbmRpbmctaW52b2ljZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBRUEseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0Esc0JBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL3BlbmRpbmctaW52b2ljZS9wZW5kaW5nLWludm9pY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdGVkVXBwZXJDb2wge1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjU5ZTBiO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4uc2VsZWN0ZWQge1xyXG4gIHBhZGRpbmc6IDhweDtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1OWUwYjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAycHggYmxhY2s7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxufVxyXG4iLCIuc2VsZWN0ZWRVcHBlckNvbCB7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNTllMGI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5zZWxlY3RlZCB7XG4gIHBhZGRpbmc6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1OWUwYjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMnB4IGJsYWNrO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/delar-application/pending-invoice/pending-invoice.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/delar-application/pending-invoice/pending-invoice.page.ts ***!
  \***************************************************************************/
/*! exports provided: PendingInvoicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingInvoicePage", function() { return PendingInvoicePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _view_details_view_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view-details/view-details.component */ "./src/app/delar-application/pending-invoice/view-details/view-details.component.ts");
/* harmony import */ var _view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view-invoice/view-invoice.component */ "./src/app/delar-application/pending-invoice/view-invoice/view-invoice.component.ts");
/* harmony import */ var _confirm_popup_confirm_popup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./confirm-popup/confirm-popup.component */ "./src/app/delar-application/pending-invoice/confirm-popup/confirm-popup.component.ts");











let PendingInvoicePage = class PendingInvoicePage {
    constructor(loadingController, ajaxService, router, modalController, alertController, route, commonService, formBuilder, platform) {
        this.loadingController = loadingController;
        this.ajaxService = ajaxService;
        this.router = router;
        this.modalController = modalController;
        this.alertController = alertController;
        this.route = route;
        this.commonService = commonService;
        this.formBuilder = formBuilder;
        this.platform = platform;
        this.invoices = [];
        this.color = "";
        this.closecolor = "";
        this.deletecolor = "";
        this.closeinvoices = [];
        this.deleteinvoices = [];
        this.status = "Pending";
        this.route.queryParams.subscribe((params) => {
            this.pageName = params["pageName"];
        });
    }
    goback() {
        if (this.pageName == "Sales") {
            this.router.navigateByUrl("/tabs-login/sales-invoice-details");
        }
        else if (this.pageName == "Renewal") {
            this.router.navigateByUrl("/tabs-login/renewal-invoice-details");
        }
        else if (this.pageName == "Topup") {
            this.router.navigateByUrl("/tabs-login/topup-invoice-details");
        }
        else if (this.pageName == "Extend") {
            this.router.navigateByUrl("/tabs-login/extend-oneyear-invoice-details");
        }
        else if (this.pageName == "BSNL Certificate") {
            this.router.navigateByUrl("/tabs-login/certificate-invoice-details");
        }
        else if (this.pageName == "Sensorise") {
            this.router.navigateByUrl("/tabs-login/sensorise-invoice-detail-new");
        }
    }
    pendinginvoicecount() {
        if (this.pageName == "Sensorise") {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + "//sensorise/getSensoriseBillsCount?status=Pending";
            this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
                this.invoices = res;
                if (res.pending != 0) {
                    this.color = "green";
                }
                else {
                    this.color = "red";
                }
            });
        }
        else {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
                "/esim/getesimInvoiceCount?pagename=" +
                this.pageName +
                "&status=Pending";
            this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
                this.invoices = res;
                if (res.pending != 0) {
                    this.color = "green";
                }
                else {
                    this.color = "red";
                }
            });
        }
    }
    closeinvoicecount() {
        if (this.pageName == "Sensorise") {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + "/sensorise/getSensoriseBillsCount?status=Close";
            this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
                this.closeinvoices = res;
                if (res.pending != 0) {
                    this.closecolor = "green";
                }
                else {
                    this.closecolor = "red";
                }
            });
        }
        else {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
                "/esim/getesimInvoiceCount?pagename=" +
                this.pageName +
                "&status=Close";
            this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
                this.closeinvoices = res;
                if (res.pending != 0) {
                    this.closecolor = "green";
                }
                else {
                    this.closecolor = "red";
                }
            });
        }
    }
    deleteinvoicecount() {
        if (this.pageName == "Sensorise") {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web + "/sensorise/getSensoriseBillsCount?status=Deleted";
            this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
                this.deleteinvoices = res;
                if (res.pending != 0) {
                    this.deletecolor = "green";
                }
                else {
                    this.deletecolor = "red";
                }
            });
        }
        else {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
                "/esim/getesimInvoiceCount?pagename=" +
                this.pageName +
                "&status=Deleted";
            this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
                this.deleteinvoices = res;
                if (res.pending != 0) {
                    this.deletecolor = "green";
                }
                else {
                    this.deletecolor = "red";
                }
            });
        }
    }
    getdatas(d) {
        if (this.pageName == "Sensorise") {
            if (d == undefined) {
                this.status = "Pending";
            }
            else {
                this.status = d;
            }
            this.commonService.presentLoader();
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
                `/sensorise/getSensorisePendingBills?status=${this.status}`;
            this.ajaxService.ajaxGet(url).subscribe((res) => {
                this.commonService.dismissLoader();
                this.tableData = res;
                this.renderer = (row, column, value) => {
                    if (value == "") {
                        return "--";
                    }
                    else if (value == "0.0") {
                        return ('<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;">' +
                            0.0 +
                            "</span>");
                    }
                    else {
                        return ('<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;">' +
                            value +
                            "</span>");
                    }
                };
                this.pendinginvoicecount();
                this.closeinvoicecount();
                this.deleteinvoicecount();
                this.source = { localdata: this.tableData };
                this.dataAdapter = new jqx.dataAdapter(this.source);
                if (this.status == "Deleted") {
                    this.columns = [
                        {
                            text: "Approved ID",
                            datafield: "approvedid",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 110,
                            editable: true,
                        },
                        {
                            text: "Bill No",
                            datafield: "billno",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 110,
                            editable: true,
                        },
                        {
                            text: "Bill Date",
                            datafield: "billdate",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 110,
                        },
                        {
                            text: "Action Name",
                            datafield: "actionname",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 110,
                        },
                        {
                            text: "Product Name",
                            datafield: "productname",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 350,
                        },
                        {
                            text: "No of Units",
                            datafield: "noofunits",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 100,
                        },
                        {
                            text: "Username",
                            datafield: "username",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 100,
                        },
                        {
                            text: "Approved by",
                            datafield: "approvedby",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 110,
                        },
                        {
                            text: "Approved Date",
                            datafield: "approveddate",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 110,
                        },
                        {
                            text: "",
                            datafield: "restore",
                            columntype: "button",
                            cellsalign: "center",
                            align: "center",
                            width: 60,
                            cellsrenderer: () => {
                                return this.myPlatform == "desktop"
                                    ? "Restore"
                                    : "<button>Restore</button>";
                            },
                            buttonclick: (row) => {
                                this.restoreModel();
                            },
                        },
                    ];
                }
                else if (this.status == "Close") {
                    this.columns = [
                        {
                            text: "Approved ID",
                            datafield: "approvedid",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 110,
                            editable: true,
                        },
                        {
                            text: "Bill No",
                            datafield: "billno",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 110,
                            editable: true,
                        },
                        {
                            text: "Bill Date",
                            datafield: "billdate",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 110,
                        },
                        {
                            text: "Action Name",
                            datafield: "actionname",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 110,
                        },
                        {
                            text: "Product Name",
                            datafield: "productname",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 350,
                        },
                        {
                            text: "No of Units",
                            datafield: "noofunits",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 100,
                        },
                        {
                            text: "Username",
                            datafield: "username",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 100,
                        },
                        {
                            text: "Approved by",
                            datafield: "approvedby",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 110,
                        },
                        {
                            text: "Approved Date",
                            datafield: "approveddate",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 110,
                        },
                    ];
                }
                else {
                    this.columns = [
                        {
                            text: "Approved ID",
                            datafield: "approvedid",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 110,
                            editable: true,
                        },
                        {
                            text: "Bill No",
                            datafield: "billno",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 110,
                            editable: true,
                        },
                        {
                            text: "Bill Date",
                            datafield: "billdate",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 110,
                        },
                        {
                            text: "Action Name",
                            datafield: "actionname",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 110,
                        },
                        {
                            text: "Product Name",
                            datafield: "productname",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 350,
                        },
                        {
                            text: "No of Units",
                            datafield: "noofunits",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 100,
                        },
                        {
                            text: "Username",
                            datafield: "username",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 100,
                        },
                        {
                            text: "Approved by",
                            datafield: "approvedby",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 110,
                        },
                        {
                            text: "Approved Date",
                            datafield: "approveddate",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 110,
                        },
                        {
                            text: "",
                            datafield: "invoice",
                            columntype: "button",
                            cellsalign: "center",
                            align: "center",
                            width: 130,
                            cellsrenderer: () => {
                                return this.myPlatform == "desktop"
                                    ? "Generate Invoice"
                                    : "<button>Generate Invoice</button>";
                            },
                            buttonclick: (row) => {
                                this.Generateinvoice();
                            },
                        },
                        {
                            text: "",
                            datafield: "delete",
                            columntype: "button",
                            cellsalign: "center",
                            align: "center",
                            width: 60,
                            cellsrenderer: () => {
                                return this.myPlatform == "desktop"
                                    ? "Delete"
                                    : "<button>Delete</button>";
                            },
                            buttonclick: (row) => {
                                this.deleteModel();
                            },
                        },
                    ];
                }
            });
        }
        else {
            if (d == undefined) {
                this.status = "Pending";
            }
            else {
                this.status = d;
            }
            this.commonService.presentLoader();
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
                `/esim/getesimInvoiceDetail?pagename=${this.pageName}&status=${this.status}`;
            this.ajaxService.ajaxGet(url).subscribe((res) => {
                this.commonService.dismissLoader();
                this.tableData = res;
                this.renderer = (row, column, value) => {
                    if (value == "") {
                        return "--";
                    }
                    else if (value == "0.0") {
                        return ('<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;">' +
                            0.0 +
                            "</span>");
                    }
                    else {
                        return ('<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;">' +
                            value +
                            "</span>");
                    }
                };
                this.pendinginvoicecount();
                this.closeinvoicecount();
                this.deleteinvoicecount();
                this.source = { localdata: this.tableData };
                this.dataAdapter = new jqx.dataAdapter(this.source);
                if (this.status == "Deleted") {
                    this.columns = [
                        {
                            text: "Approved ID",
                            datafield: "approvedid",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 110,
                            editable: true,
                        },
                        {
                            text: "Dealer",
                            datafield: "dealername",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 110,
                            editable: true,
                        },
                        {
                            text: "Invoice No",
                            datafield: "invoiceno",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 110,
                        },
                        {
                            text: "Invoice Date",
                            datafield: "invoicedate",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 110,
                        },
                        {
                            text: "Total Item",
                            datafield: "totalitem",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 100,
                        },
                        {
                            text: "User Name",
                            datafield: "username",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 150,
                        },
                        {
                            text: "Approved by",
                            datafield: "approvedby",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 100,
                        },
                        {
                            text: "Approved Date",
                            datafield: "approveddate",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 110,
                        },
                        {
                            text: "",
                            datafield: "View Detail",
                            columntype: "button",
                            cellsalign: "center",
                            align: "center",
                            width: 60,
                            cellsrenderer: () => {
                                return this.myPlatform == "desktop"
                                    ? "View"
                                    : "<button>View</button>";
                            },
                            buttonclick: (row) => {
                                this.view();
                            },
                        },
                        {
                            text: "",
                            datafield: "restore",
                            columntype: "button",
                            cellsalign: "center",
                            align: "center",
                            width: 60,
                            cellsrenderer: () => {
                                return this.myPlatform == "desktop"
                                    ? "Restore"
                                    : "<button>Restore</button>";
                            },
                            buttonclick: (row) => {
                                this.restoreModel();
                            },
                        },
                    ];
                }
                else if (this.status == "Close") {
                    this.columns = [
                        {
                            text: "Approved ID",
                            datafield: "approvedid",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 110,
                            editable: true,
                        },
                        {
                            text: "Dealer",
                            datafield: "dealername",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 110,
                            editable: true,
                        },
                        {
                            text: "Invoice No",
                            datafield: "invoiceno",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 110,
                        },
                        {
                            text: "Invoice Date",
                            datafield: "invoicedate",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 110,
                        },
                        {
                            text: "Total Item",
                            datafield: "totalitem",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 100,
                        },
                        {
                            text: "User Name",
                            datafield: "username",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 150,
                        },
                        {
                            text: "Approved by",
                            datafield: "approvedby",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 100,
                        },
                        {
                            text: "Approved Date",
                            datafield: "approveddate",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 110,
                        },
                        {
                            text: "",
                            datafield: "View Detail",
                            columntype: "button",
                            cellsalign: "center",
                            align: "center",
                            width: 60,
                            cellsrenderer: () => {
                                return this.myPlatform == "desktop"
                                    ? "View"
                                    : "<button>View</button>";
                            },
                            buttonclick: (row) => {
                                this.view();
                            },
                        },
                    ];
                }
                else {
                    this.columns = [
                        {
                            text: "Approved ID",
                            datafield: "approvedid",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 90,
                            editable: true,
                        },
                        {
                            text: "Dealer",
                            datafield: "dealername",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 100,
                            editable: true,
                        },
                        {
                            text: "Invoice No",
                            datafield: "invoiceno",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 110,
                        },
                        {
                            text: "Invoice Date",
                            datafield: "invoicedate",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 100,
                        },
                        {
                            text: "Total Item",
                            datafield: "totalitem",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 80,
                        },
                        {
                            text: "User Name",
                            datafield: "username",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 120,
                        },
                        {
                            text: "Approved by",
                            datafield: "approvedby",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 100,
                        },
                        {
                            text: "Approved Date",
                            datafield: "approveddate",
                            cellsrenderer: this.renderer,
                            cellsalign: "center",
                            align: "center",
                            width: 100,
                        },
                        {
                            text: "",
                            datafield: "View Detail",
                            columntype: "button",
                            cellsalign: "center",
                            align: "center",
                            width: 55,
                            cellsrenderer: () => {
                                return this.myPlatform == "desktop"
                                    ? "View"
                                    : "<button>View</button>";
                            },
                            buttonclick: (row) => {
                                this.view();
                            },
                        },
                        {
                            text: "",
                            datafield: "invoice",
                            columntype: "button",
                            cellsalign: "center",
                            align: "center",
                            width: 130,
                            cellsrenderer: () => {
                                return this.myPlatform == "desktop"
                                    ? "Generate Invoice"
                                    : "<button>Generate Invoice</button>";
                            },
                            buttonclick: (row) => {
                                this.pendinginvoice();
                            },
                        },
                        {
                            text: "",
                            datafield: "delete",
                            columntype: "button",
                            cellsalign: "center",
                            align: "center",
                            width: 60,
                            cellsrenderer: () => {
                                return this.myPlatform == "desktop"
                                    ? "Delete"
                                    : "<button>Delete</button>";
                            },
                            buttonclick: (row) => {
                                this.deleteModel();
                            },
                        },
                    ];
                }
            });
        }
    }
    view() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _view_details_view_details_component__WEBPACK_IMPORTED_MODULE_8__["ViewDetailsComponent"],
                cssClass: "invoiceform",
                componentProps: {
                    value: this.selectedRow,
                    pagetitle: this.pageName,
                },
            });
            modal.onDidDismiss().then(() => {
                this.selectedRow = undefined;
            });
            return yield modal.present();
        });
    }
    pendinginvoice() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _view_invoice_view_invoice_component__WEBPACK_IMPORTED_MODULE_9__["ViewInvoiceComponent"],
                cssClass: "invoiceform",
                componentProps: {
                    value: this.selectedRow,
                    pagetitle: this.pageName,
                },
            });
            modal.onDidDismiss().then((data) => {
                if (data.data.data == "Invoice Details Saved Successfully") {
                    this.getdatas();
                    this.commonService.showConfirm("Invoice Details Saved Successfully");
                }
            });
            return yield modal.present();
        });
    }
    // Only For Sensorise
    Generateinvoice() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _confirm_popup_confirm_popup_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmPopupComponent"],
                cssClass: "confirmdelete",
                componentProps: {
                    value: this.selectedRow,
                },
            });
            modal.onDidDismiss().then((data) => {
                data.data.value;
                this.confirmvalue = data.data.value;
                this.api();
            });
            return yield modal.present();
        });
    }
    api() {
        var data;
        data = {
            actionname: this.selectedRow.actionname,
            productname: this.selectedRow.productname,
            quantity: this.selectedRow.noofunits.toString(),
        };
        this.commonService.presentLoader();
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
            "/sensorise/saveZohoSensoriseInvoiceDetails?billno=" +
            this.selectedRow.billno +
            "&billdate=" +
            this.selectedRow.billdate +
            "&approveid=" +
            this.selectedRow.approvedid +
            "&username=" +
            this.confirmvalue.username +
            "&password=" +
            this.confirmvalue.password;
        this.ajaxService.ajaxPostWithBody(url, data).subscribe((res) => {
            this.commonService.dismissLoader();
            if (res.message == "Sensorise Invoice Saved Successfully") {
                this.commonService.showConfirm(res.message);
                this.getdatas();
            }
            else {
                this.commonService.showConfirm(res.message);
            }
        });
    }
    deleteModel() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: " Delete",
                backdropDismiss: false,
                message: "Are you sure you want to Delete?",
                buttons: [
                    {
                        text: "Cancel",
                        role: "cancel",
                        handler: (data) => {
                            this.myGrid.clearselection();
                            this.selectedRow = "";
                        },
                    },
                    {
                        text: "Ok",
                        handler: (data) => {
                            this.confirmdelete();
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    confirmdelete() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _confirm_popup_confirm_popup_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmPopupComponent"],
                cssClass: "confirmdelete",
                componentProps: {
                    value: this.selectedRow,
                },
            });
            modal.onDidDismiss().then((data) => {
                data.data.value;
                this.confirmvalue = data.data.value;
                this.deleteinvoice();
            });
            return yield modal.present();
        });
    }
    deleteinvoice() {
        if (this.pageName == "Sensorise") {
            this.commonService.presentLoader();
            const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
                "/sensorise/deletePendingSensoriseBills?approveid=" +
                this.selectedRow.approvedid +
                "&username=" +
                this.confirmvalue.username +
                "&password=" +
                this.confirmvalue.password;
            this.ajaxService.ajaxDeleteWithString(url).subscribe((res) => {
                this.commonService.dismissLoader();
                if (res.message == "Pending Bills Deleted Successfully") {
                    this.getdatas();
                    this.commonService.showConfirm(res.message);
                }
                else {
                    this.commonService.showConfirm(res.message);
                }
            });
        }
        else {
            this.commonService.presentLoader();
            const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
                "/esim/deletePendingZohoInvoice?approveid=" +
                this.selectedRow.approvedid +
                "&username=" +
                this.confirmvalue.username +
                "&password=" +
                this.confirmvalue.password;
            this.ajaxService.ajaxDeleteWithString(url).subscribe((res) => {
                this.commonService.dismissLoader();
                if (res.message == "Pending Invoice Deleted Successfully") {
                    this.getdatas();
                    this.commonService.showConfirm(res.message);
                }
                else {
                    this.commonService.showConfirm(res.message);
                }
            });
        }
    }
    restoreModel() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: " Delete",
                backdropDismiss: false,
                message: "Are you sure you want to Restore?",
                buttons: [
                    {
                        text: "Cancel",
                        role: "cancel",
                        handler: (data) => {
                            this.myGrid.clearselection();
                            this.selectedRow = "";
                        },
                    },
                    {
                        text: "Ok",
                        handler: (data) => {
                            this.restore();
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    restore() {
        if (this.pageName == "Sensorise") {
            const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
                "/sensorise/restoredeleteSensoriseBills?approveid=" +
                this.selectedRow.approvedid;
            this.ajaxService.ajaxDeleteWithString(url).subscribe((res) => {
                if (res.message == "Deleted Bills Restored Successfully") {
                    this.commonService.showConfirm(res.message);
                    this.getdatas();
                }
                else {
                    this.commonService.showConfirm(res.message);
                }
            });
        }
        else {
            const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
                "/esim/restoredeleteZohoInvoice?approveid=" +
                this.selectedRow.approvedid;
            this.ajaxService.ajaxDeleteWithString(url).subscribe((res) => {
                if (res.message == "Deleted Invoice Restored Successfully") {
                    this.commonService.showConfirm(res.message);
                    this.getdatas();
                }
                else {
                    this.commonService.showConfirm(res.message);
                }
            });
        }
    }
    myGridOnRowSelect(event) {
        this.selectedRow = event.args.row.bounddata;
    }
    ngAfterViewInit() {
        this.myGrid.pagesizeoptions(["100", "200", "500", "1000"]);
    }
    ngOnInit() {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
    }
    ionViewWillEnter() {
        this.getdatas();
    }
};
PendingInvoicePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PendingInvoicePage.prototype, "myGrid", void 0);
PendingInvoicePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-pending-invoice",
        template: __webpack_require__(/*! raw-loader!./pending-invoice.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/pending-invoice/pending-invoice.page.html"),
        styles: [__webpack_require__(/*! ./pending-invoice.page.scss */ "./src/app/delar-application/pending-invoice/pending-invoice.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
], PendingInvoicePage);



/***/ }),

/***/ "./src/app/delar-application/pending-invoice/view-details/view-details.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/delar-application/pending-invoice/view-details/view-details.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGFyLWFwcGxpY2F0aW9uL3BlbmRpbmctaW52b2ljZS92aWV3LWRldGFpbHMvdmlldy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/delar-application/pending-invoice/view-details/view-details.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/delar-application/pending-invoice/view-details/view-details.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ViewDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewDetailsComponent", function() { return ViewDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");








let ViewDetailsComponent = class ViewDetailsComponent {
    constructor(ajaxService, router, formBuilder, commonService, modalController) {
        this.ajaxService = ajaxService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.modalController = modalController;
        this.page = [];
        this.show = false;
    }
    cancelBtn() {
        this.modalController.dismiss();
    }
    getdatas() {
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
            "/esim/getesimInvoiceDetails?pagename=" +
            this.pagetitle +
            "&approvedid=" +
            this.value.approvedid;
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            this.tableData = res;
            this.page = ["100", "200", "500", "1000"];
            this.renderer = (row, column, value) => {
                if (value == "") {
                    return ('<span style="line-height:32px;font-size:11px;color:darkblue;margin:auto;">' +
                        0 +
                        "</span>");
                }
                else {
                    return ('<span style="line-height:32px;font-size:11px;color:darkblue;margin:auto;">' +
                        value +
                        "</span>");
                }
            };
            this.source = { localdata: this.tableData };
            this.dataAdapter = new jqx.dataAdapter(this.source);
            if (this.pagetitle == "Sales") {
                this.columns = [
                    {
                        text: "Service Provider",
                        datafield: "serviceprovider",
                        cellsrenderer: this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 110,
                    },
                    {
                        text: "Product Id",
                        datafield: "productid",
                        cellsrenderer: this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 130,
                    },
                    {
                        text: "Product Name",
                        datafield: "productname",
                        cellsrenderer: this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 280,
                    },
                    {
                        text: "No of Units",
                        datafield: "noofunits",
                        cellsrenderer: this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 110,
                    },
                    {
                        text: "Purchase Rate",
                        datafield: "purchaserate",
                        cellsrenderer: this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 120,
                    },
                    {
                        text: "Rate",
                        datafield: "rate",
                        cellsrenderer: this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 120,
                    },
                ];
            }
            else if (this.pagetitle == "Renewal") {
                this.columns = [
                    {
                        text: "Service Provider",
                        datafield: "serviceprovider",
                        cellsrenderer: this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 110,
                    },
                    {
                        text: "IMEI",
                        datafield: "imei",
                        cellsrenderer: this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 110,
                    },
                    {
                        text: "Validity Period",
                        datafield: "validityperiod",
                        cellsrenderer: this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 110,
                    },
                    {
                        text: "Card Status",
                        datafield: "cardstatus",
                        cellsrenderer: this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 90,
                    },
                    {
                        text: "Product Id",
                        datafield: "productid",
                        cellsrenderer: this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 130,
                    },
                    {
                        text: "Product Name",
                        datafield: "productname",
                        cellsrenderer: this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 280,
                    },
                    {
                        text: "Purchase Rate",
                        datafield: "purchaserate",
                        cellsrenderer: this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 120,
                    },
                    {
                        text: "Rate",
                        datafield: "rate",
                        cellsrenderer: this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 120,
                    },
                ];
            }
            else {
                this.columns = [
                    {
                        text: "Service Provider",
                        datafield: "serviceprovider",
                        cellsrenderer: this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 110,
                    },
                    {
                        text: "IMEI",
                        datafield: "imei",
                        cellsrenderer: this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 110,
                    },
                    {
                        text: "Validity Period",
                        datafield: "validityperiod",
                        cellsrenderer: this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 110,
                    },
                    {
                        text: "Product Id",
                        datafield: "productid",
                        cellsrenderer: this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 130,
                    },
                    {
                        text: "Product Name",
                        datafield: "productname",
                        cellsrenderer: this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 280,
                    },
                    {
                        text: "Purchase Rate",
                        datafield: "purchaserate",
                        cellsrenderer: this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 120,
                    },
                    {
                        text: "Rate",
                        datafield: "rate",
                        cellsrenderer: this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 120,
                    },
                ];
            }
        });
    }
    myGridOnRowSelect(event) {
        this.selectedRow = event.args.row;
        this.show = true;
    }
    ngOnInit() {
        this.getdatas();
    }
};
ViewDetailsComponent.ctorParameters = () => [
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ViewDetailsComponent.prototype, "value", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ViewDetailsComponent.prototype, "pagetitle", void 0);
ViewDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-view-details",
        template: __webpack_require__(/*! raw-loader!./view-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/pending-invoice/view-details/view-details.component.html"),
        styles: [__webpack_require__(/*! ./view-details.component.scss */ "./src/app/delar-application/pending-invoice/view-details/view-details.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
], ViewDetailsComponent);



/***/ }),

/***/ "./src/app/delar-application/pending-invoice/view-invoice/view-invoice.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/delar-application/pending-invoice/view-invoice/view-invoice.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  font-size: 16px;\n  color: white;\n}\n\n.arrow-back {\n  color: white;\n}\n\n.dismiss {\n  font-size: 25px;\n  cursor: pointer;\n}\n\n.dismiss:hover {\n  color: red;\n}\n\n.dealer-label {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px;\n}\n\n.imei-content {\n  text-align: right;\n  align-self: center;\n  font-size: 18px;\n}\n\n.input {\n  border: 1px solid #e5e5e5;\n  height: 42px;\n  line-height: 18px;\n  --padding-start: 15px;\n  background: #e8e8e8;\n  margin: 7px;\n}\n\n.selectable-input {\n  padding: 8px 11px 4px 8px;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vcGVuZGluZy1pbnZvaWNlL3ZpZXctaW52b2ljZS9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXGRlbGFyLWFwcGxpY2F0aW9uXFxwZW5kaW5nLWludm9pY2VcXHZpZXctaW52b2ljZVxcdmlldy1pbnZvaWNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9wZW5kaW5nLWludm9pY2Uvdmlldy1pbnZvaWNlL3ZpZXctaW52b2ljZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxZQUFBO0FDRUY7O0FEQUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQ0dGOztBRERBO0VBQ0UsVUFBQTtBQ0lGOztBREZBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0tGOztBREhBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNNRjs7QURKQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNPRjs7QURMQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQ1FGIiwiZmlsZSI6InNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vcGVuZGluZy1pbnZvaWNlL3ZpZXctaW52b2ljZS92aWV3LWludm9pY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5hcnJvdy1iYWNrIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmRpc21pc3Mge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmRpc21pc3M6aG92ZXIge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuLmRlYWxlci1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4uaW1laS1jb250ZW50IHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5pbnB1dCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcclxuICBoZWlnaHQ6IDQycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XHJcbiAgbWFyZ2luOiA3cHg7XHJcbn1cclxuLnNlbGVjdGFibGUtaW5wdXQge1xyXG4gIHBhZGRpbmc6IDhweCAxMXB4IDRweCA4cHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbiIsIi5oZWFkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmFycm93LWJhY2sge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5kaXNtaXNzIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kaXNtaXNzOmhvdmVyIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmRlYWxlci1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmltZWktY29udGVudCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgaGVpZ2h0OiA0MnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICBtYXJnaW46IDdweDtcbn1cblxuLnNlbGVjdGFibGUtaW5wdXQge1xuICBwYWRkaW5nOiA4cHggMTFweCA0cHggOHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/delar-application/pending-invoice/view-invoice/view-invoice.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/delar-application/pending-invoice/view-invoice/view-invoice.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ViewInvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewInvoiceComponent", function() { return ViewInvoiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "./node_modules/jqwidgets-ng/fesm2015/jqwidgets-ng-jqxgrid.js");
/* harmony import */ var src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");








let ViewInvoiceComponent = class ViewInvoiceComponent {
    constructor(ajaxService, modalController, platform, alertController, commonService, formBuilder) {
        this.ajaxService = ajaxService;
        this.modalController = modalController;
        this.platform = platform;
        this.alertController = alertController;
        this.commonService = commonService;
        this.formBuilder = formBuilder;
        this.page = [];
        this.visible = false;
        this.noofunits = [];
    }
    cancelBtn() {
        this.modalController.dismiss();
    }
    createForm() {
        this.generateForm = this.formBuilder.group({
            userid: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            imei: [""],
            noofunits: [""],
            productnamelist: [""],
        });
    }
    clear() {
        this.generateForm.patchValue({
            userid: "",
            password: "",
            noofunits: "",
        });
    }
    // date() {
    //   var now = new Date();
    //   var day = ("0" + now.getDate()).slice(-2);
    //   var month = ("0" + (now.getMonth() + 1)).slice(-2);
    //   var today = now.getFullYear() + "-" + month + "-" + day;
    //   var todaytime = now.getHours() + ":" + now.getMinutes();
    //   this.invoicedate = today;
    // }
    dismiss() {
        this.visible = false;
        this.generateForm.patchValue({
            imei: "",
            productnamelist: "",
        });
    }
    getdatas() {
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
            "/esim/generateZohoInvoice?pagename=" +
            this.pagetitle +
            "&dealername=" +
            this.value.dealername +
            "&approveid=" +
            this.value.approvedid;
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            this.tableData = res;
            console.log(this.tableData);
            this.page = ["100", "200", "500", "1000"];
            this.renderer = (row, column, value) => {
                if (value == "") {
                    return "--";
                }
                else if (value == "0") {
                    return ('<span style="line-height:32px;font-size:11px;color:darkblue;margin:auto;">' +
                        0 +
                        "</span>");
                }
                else {
                    return ('<span style="line-height:32px;font-size:11px;color:darkblue;margin:auto;">' +
                        value +
                        "</span>");
                }
            };
            this.source = { localdata: this.tableData };
            console.log(this.tableData);
            this.dataAdapter = new jqx.dataAdapter(this.source);
            if (this.pagetitle == "Sales") {
                this.columns = [
                    {
                        text: "Service Provider",
                        datafield: "serviceprovider",
                        cellsrenderer: this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 120,
                    },
                    {
                        text: "Product Name",
                        datafield: "productname",
                        cellsrenderer: this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 300,
                    },
                    {
                        text: "No of Units",
                        datafield: "noofunits",
                        cellsrenderer: this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 100,
                    },
                    {
                        text: "Purchase Rate",
                        datafield: "purchaserate",
                        cellsrenderer: this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 105,
                    },
                    {
                        text: "Rate",
                        datafield: "rate",
                        cellsrenderer: this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 100,
                    },
                    {
                        text: "Total Rate",
                        datafield: "totalrate",
                        cellsrenderer: this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 100,
                    },
                ];
            }
            else if (this.pagetitle == "Renewal") {
                this.columns = [
                    {
                        text: "IMEI",
                        datafield: "imei",
                        cellsrenderer: this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 110,
                    },
                    {
                        text: "Service Provider",
                        datafield: "serviceprovider",
                        cellsrenderer: this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 120,
                    },
                    {
                        text: "Validity Period",
                        datafield: "validityperiod",
                        cellsrenderer: this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 110,
                    },
                    {
                        text: "Card Status",
                        datafield: "cardstatus",
                        cellsrenderer: this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 90,
                    },
                    {
                        text: "Product Name",
                        datafield: "productname",
                        cellsrenderer: this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 300,
                    },
                    {
                        text: "Purchase Rate",
                        datafield: "purchaserate",
                        cellsrenderer: this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 105,
                    },
                    {
                        text: "Rate",
                        datafield: "rate",
                        cellsrenderer: this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 100,
                    },
                    {
                        text: "",
                        datafield: "Edit",
                        columntype: "button",
                        cellsalign: "center",
                        align: "center",
                        width: 60,
                        cellsrenderer: () => {
                            return this.myPlatform == "desktop"
                                ? "Edit"
                                : "<button>Edit</button>";
                        },
                        buttonclick: (row) => {
                            this.setValue();
                        },
                    },
                    {
                        text: "",
                        datafield: "delete",
                        columntype: "button",
                        cellsalign: "center",
                        align: "center",
                        width: 60,
                        cellsrenderer: () => {
                            return this.myPlatform == "desktop"
                                ? "Delete"
                                : "<button>Delete</button>";
                        },
                        buttonclick: (row) => {
                            this.deleteModel(row);
                        },
                    },
                ];
            }
            else if (this.pagetitle == "BSNL Certificate") {
                this.columns = [
                    {
                        text: "IMEI",
                        datafield: "imei",
                        cellsrenderer: this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 110,
                    },
                    {
                        text: "Service Provider",
                        datafield: "serviceprovider",
                        cellsrenderer: this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 120,
                    },
                    {
                        text: "Validity Period",
                        datafield: "validityperiod",
                        cellsrenderer: this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 110,
                    },
                    {
                        text: "Product Name",
                        datafield: "productname",
                        cellsrenderer: this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 300,
                    },
                    {
                        text: "Purchase Rate",
                        datafield: "purchaserate",
                        cellsrenderer: this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 105,
                    },
                    {
                        text: "Rate",
                        datafield: "rate",
                        cellsrenderer: this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 100,
                    },
                    {
                        text: "",
                        datafield: "delete",
                        columntype: "button",
                        cellsalign: "center",
                        align: "center",
                        width: 60,
                        cellsrenderer: () => {
                            return this.myPlatform == "desktop"
                                ? "Delete"
                                : "<button>Delete</button>";
                        },
                        buttonclick: (row) => {
                            this.deleteModel(row);
                        },
                    },
                ];
            }
            else {
                this.columns = [
                    {
                        text: "IMEI",
                        datafield: "imei",
                        cellsrenderer: this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 110,
                    },
                    {
                        text: "Service Provider",
                        datafield: "serviceprovider",
                        cellsrenderer: this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 120,
                    },
                    {
                        text: "Validity Period",
                        datafield: "validityperiod",
                        cellsrenderer: this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 110,
                    },
                    {
                        text: "Product Name",
                        datafield: "productname",
                        cellsrenderer: this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 300,
                    },
                    {
                        text: "Purchase Rate",
                        datafield: "purchaserate",
                        cellsrenderer: this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 105,
                    },
                    {
                        text: "Rate",
                        datafield: "rate",
                        cellsrenderer: this.renderer,
                        cellsalign: "center",
                        align: "center",
                        width: 100,
                    },
                    {
                        text: "",
                        datafield: "Edit",
                        columntype: "button",
                        cellsalign: "center",
                        align: "center",
                        width: 60,
                        cellsrenderer: () => {
                            return this.myPlatform == "desktop"
                                ? "Edit"
                                : "<button>Edit</button>";
                        },
                        buttonclick: (row) => {
                            this.setValue();
                        },
                    },
                    {
                        text: "",
                        datafield: "delete",
                        columntype: "button",
                        cellsalign: "center",
                        align: "center",
                        width: 60,
                        cellsrenderer: () => {
                            return this.myPlatform == "desktop"
                                ? "Delete"
                                : "<button>Delete</button>";
                        },
                        buttonclick: (row) => {
                            this.deleteModel(row);
                        },
                    },
                ];
            }
        });
    }
    setValue() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
            "/esim/getDealerProduct?dealername=" +
            this.value.dealername +
            "&serviceprovider=" +
            this.selectedRow.serviceprovider;
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            this.productnamelist = res;
            this.visible = true;
            this.generateForm.patchValue({
                imei: this.selectedRow.imei,
            });
            let data = this.productnamelist.filter((f) => f.itemname == this.selectedRow.productname);
            this.product = data[0];
        });
    }
    deleteModel(row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.selectedRow) {
                const alert = yield this.alertController.create({
                    header: " Delete",
                    backdropDismiss: false,
                    message: "Are you sure you want to remove?",
                    buttons: [
                        {
                            text: "Cancel",
                            role: "cancel",
                            handler: (data) => {
                                this.myGrid.clearselection();
                                this.selectedRow = "";
                            },
                        },
                        {
                            text: "Ok",
                            handler: (data) => {
                                this.deleteAnalogRow(row);
                            },
                        },
                    ],
                });
                yield alert.present();
            }
            else {
                this.commonService.showConfirm("Please select a row to remove");
            }
        });
    }
    deleteAnalogRow(row) {
        this.tableData.splice(row, 1);
        this.noofunits = this.tableData.length;
        this.myGrid.updatebounddata();
        this.myGrid.clearselection();
        this.selectedRow = "";
    }
    myGridOnRowSelect(event) {
        this.selectedRow = event.args.row.bounddata;
    }
    save() {
        const productValue = this.generateForm.get("productnamelist").value;
        const selectedIndex = this.tableData.findIndex((row) => row.imei === this.selectedRow.imei);
        this.tableData[selectedIndex].validityperiod = productValue.validityperiod;
        this.tableData[selectedIndex].productid = productValue.itemid;
        this.tableData[selectedIndex].productname = productValue.itemname;
        this.tableData[selectedIndex].rate = productValue.rate;
        this.tableData[selectedIndex].purchaserate = productValue.purchaserate;
        this.tableData[selectedIndex].description = productValue.description;
        this.dismiss();
        this.myGrid.updatebounddata();
        console.log(this.tableData);
    }
    submitBtn() {
        if (this.pagetitle == "Sales") {
            if (this.tableData) {
                this.noofunits = this.tableData.length;
            }
            else {
                this.noofunits;
            }
            let data = this.tableData;
            let arr = [];
            for (let i = 0; i < data.length; i++) {
                arr.push({
                    serviceprovider: this.myGrid["attrSource"]["originaldata"][i].serviceprovider,
                    noofunits: parseInt(this.myGrid["attrSource"]["originaldata"][i].noofunits),
                    cardstatus: this.myGrid["attrSource"]["originaldata"][i].cardstatus,
                    productid: this.myGrid["attrSource"]["originaldata"][i].productid,
                    productname: this.myGrid["attrSource"]["originaldata"][i].productname,
                    purchaserate: parseInt(this.myGrid["attrSource"]["originaldata"][i].purchaserate),
                    rate: parseInt(this.myGrid["attrSource"]["originaldata"][i].rate),
                    description: this.myGrid["attrSource"]["originaldata"][i].description,
                    pagename: this.pagetitle,
                });
            }
            this.commonService.presentLoader();
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
                "/esim/saveZohoSalesInvoiceHeader?dealerid=" +
                this.value.dealername +
                "&headerid=" +
                "&invoicedate=" +
                this.invoicedate +
                "&noofunits=" +
                this.noofunits +
                "&createdby=" +
                localStorage.getItem("userName") +
                "&approveid=" +
                this.value.approvedid +
                "&userid=" +
                this.generateForm.value.userid +
                "&password=" +
                this.generateForm.value.password;
            this.ajaxService.ajaxPostWithBody(url, arr).subscribe((res) => {
                this.commonService.dismissLoader();
                if (res.message == "Invoice Details Saved Successfully") {
                    this.clear();
                    this.modalController.dismiss({
                        data: "Invoice Details Saved Successfully",
                    });
                }
                else {
                    this.commonService.showConfirm(res.message);
                }
            });
        }
        else {
            if (this.tableData) {
                this.noofunits = this.tableData.length;
            }
            else {
                this.noofunits;
            }
            let data = this.tableData;
            let arr = [];
            for (let i = 0; i < data.length; i++) {
                arr.push({
                    serviceprovider: this.myGrid["attrSource"]["originaldata"][i].serviceprovider,
                    imei: this.myGrid["attrSource"]["originaldata"][i].imei,
                    renewalno: this.myGrid["attrSource"]["originaldata"][i].renewalno,
                    cardstatus: this.myGrid["attrSource"]["originaldata"][i].cardstatus,
                    productid: this.myGrid["attrSource"]["originaldata"][i].productid,
                    productname: this.myGrid["attrSource"]["originaldata"][i].productname,
                    purchaserate: parseInt(this.myGrid["attrSource"]["originaldata"][i].purchaserate),
                    rate: parseInt(this.myGrid["attrSource"]["originaldata"][i].rate),
                    description: this.myGrid["attrSource"]["originaldata"][i].description,
                    validityperiod: this.myGrid["attrSource"]["originaldata"][i].validityperiod,
                    pagename: this.pagetitle,
                });
            }
            this.commonService.presentLoader();
            if (this.pagetitle == "Renewal") {
                var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
                    "/esim/saveZohoRenewalInvoiceHeader?dealerid=" +
                    this.value.dealername +
                    "&headerid=" +
                    "&invoicedate=" +
                    this.invoicedate +
                    "&noofunits=" +
                    this.noofunits +
                    "&createdby=" +
                    localStorage.getItem("userName") +
                    "&approveid=" +
                    this.value.approvedid +
                    "&userid=" +
                    this.generateForm.value.userid +
                    "&password=" +
                    this.generateForm.value.password;
            }
            else if (this.pagetitle == "Topup") {
                var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
                    "/esim/saveZohoTopupInvoiceHeader?dealerid=" +
                    this.value.dealername +
                    "&headerid=" +
                    "&invoicedate=" +
                    this.invoicedate +
                    "&noofunits=" +
                    this.noofunits +
                    "&createdby=" +
                    localStorage.getItem("userName") +
                    "&approveid=" +
                    this.value.approvedid +
                    "&userid=" +
                    this.generateForm.value.userid +
                    "&password=" +
                    this.generateForm.value.password;
            }
            else if (this.pagetitle == "Extend") {
                var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
                    "/esim/saveZohoExtendOneYearInvoiceHeader?dealerid=" +
                    this.value.dealername +
                    "&headerid=" +
                    "&invoicedate=" +
                    this.invoicedate +
                    "&noofunits=" +
                    this.noofunits +
                    "&createdby=" +
                    localStorage.getItem("userName") +
                    "&approveid=" +
                    this.value.approvedid +
                    "&userid=" +
                    this.generateForm.value.userid +
                    "&password=" +
                    this.generateForm.value.password;
            }
            else if (this.pagetitle == "BSNL Certificate") {
                var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["serverUrl"].web +
                    "/esim/saveZohoCertificateInvoiceHeader?dealerid=" +
                    this.value.dealername +
                    "&headerid=" +
                    "&invoicedate=" +
                    this.invoicedate +
                    "&noofunits=" +
                    this.noofunits +
                    "&createdby=" +
                    localStorage.getItem("userName") +
                    "&approveid=" +
                    this.value.approvedid +
                    "&userid=" +
                    this.generateForm.value.userid +
                    "&password=" +
                    this.generateForm.value.password;
            }
            this.ajaxService.ajaxPostWithBody(url, arr).subscribe((res) => {
                this.commonService.dismissLoader();
                if (res.message == "Invoice Details Saved Successfully") {
                    this.clear();
                    this.modalController.dismiss({
                        data: "Invoice Details Saved Successfully",
                    });
                }
                else {
                    this.commonService.showConfirm(res.message);
                }
            });
        }
    }
    confirmModel() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: "Confirm",
                backdropDismiss: false,
                message: "Are you sure want to Submit?",
                buttons: [
                    {
                        text: "Cancel",
                        role: "cancel",
                        handler: (data) => { },
                    },
                    {
                        text: "Ok",
                        handler: (data) => {
                            this.submitBtn();
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    ngOnInit() {
        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var today = now.getFullYear() + "-" + month + "-" + day;
        this.invoicedate = today;
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        this.createForm();
        this.getdatas();
    }
};
ViewInvoiceComponent.ctorParameters = () => [
    { type: src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("myGrid", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_4__["jqxGridComponent"])
], ViewInvoiceComponent.prototype, "myGrid", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ViewInvoiceComponent.prototype, "value", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ViewInvoiceComponent.prototype, "pagetitle", void 0);
ViewInvoiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-view-invoice",
        template: __webpack_require__(/*! raw-loader!./view-invoice.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/pending-invoice/view-invoice/view-invoice.component.html"),
        styles: [__webpack_require__(/*! ./view-invoice.component.scss */ "./src/app/delar-application/pending-invoice/view-invoice/view-invoice.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ajax_service__WEBPACK_IMPORTED_MODULE_5__["AjaxService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], ViewInvoiceComponent);



/***/ })

}]);
//# sourceMappingURL=pending-invoice-pending-invoice-module-es2015.js.map