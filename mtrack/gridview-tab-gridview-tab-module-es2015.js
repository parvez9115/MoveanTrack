(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gridview-tab-gridview-tab-module"],{

/***/ "./node_modules/ionic-swipe-all/dist/index.js":
/*!****************************************************!*\
  !*** ./node_modules/ionic-swipe-all/dist/index.js ***!
  \****************************************************/
/*! exports provided: IonicSwipeAllModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module */ "./node_modules/ionic-swipe-all/dist/module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IonicSwipeAllModule", function() { return _module__WEBPACK_IMPORTED_MODULE_0__["IonicSwipeAllModule"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ionic-swipe-all/dist/ionic.swipe.all.js":
/*!**************************************************************!*\
  !*** ./node_modules/ionic-swipe-all/dist/ionic.swipe.all.js ***!
  \**************************************************************/
/*! exports provided: IonicSwipeAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicSwipeAll", function() { return IonicSwipeAll; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let IonicSwipeAll = class IonicSwipeAll extends _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HammerGestureConfig"] {
    constructor(elem) {
        super();
        this.elem = elem;
        this.swipe = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.swipeup = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.swipedown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hammer = hammerjs__WEBPACK_IMPORTED_MODULE_2__;
    }
    ngOnInit() {
        const instance = new hammerjs__WEBPACK_IMPORTED_MODULE_2__(this.elem.nativeElement);
        instance.get('swipe').set({ direction: this.hammer.DIRECTION_VERTICAL });
        instance.on('swipe', event => this.swipe.emit(event));
        instance.on('swipeup', event => this.swipeup.emit(event));
        instance.on('swipedown', event => this.swipedown.emit(event));
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], IonicSwipeAll.prototype, "swipe", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], IonicSwipeAll.prototype, "swipeup", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], IonicSwipeAll.prototype, "swipedown", void 0);
IonicSwipeAll = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
        selector: '[swipeAll]',
    }),
    __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
], IonicSwipeAll);

//# sourceMappingURL=ionic.swipe.all.js.map

/***/ }),

/***/ "./node_modules/ionic-swipe-all/dist/module.js":
/*!*****************************************************!*\
  !*** ./node_modules/ionic-swipe-all/dist/module.js ***!
  \*****************************************************/
/*! exports provided: IonicSwipeAllModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicSwipeAllModule", function() { return IonicSwipeAllModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_swipe_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ionic.swipe.all */ "./node_modules/ionic-swipe-all/dist/ionic.swipe.all.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let IonicSwipeAllModule = class IonicSwipeAllModule {
};
IonicSwipeAllModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_ionic_swipe_all__WEBPACK_IMPORTED_MODULE_1__["IonicSwipeAll"]],
        exports: [_ionic_swipe_all__WEBPACK_IMPORTED_MODULE_1__["IonicSwipeAll"]],
    })
], IonicSwipeAllModule);

//# sourceMappingURL=module.js.map

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/gridview-tab/alerts-modal/alerts-modal.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/gridview-tab/alerts-modal/alerts-modal.page.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-grid [ngClass]=\"{'appHeaderTitle' : appName != 'Armoron' , 'header-color': appName == 'Armoron'}\" style=\"padding-bottom:0px\">\r\n    <ion-row [@inOutAnimation] *ngIf=\"!showSearch\">\r\n      <ion-col size=\"2\">\r\n        <ion-icon style=\"font-size: x-large;\" name=\"arrow-back\" (click)=\"getBack()\"></ion-icon>\r\n      </ion-col>\r\n      <ion-col size=\"7\"><ion-title [ngClass]=\"{'appHeader' : appName != 'Armoron' , 'header-color': appName == 'Armoron'}\" style=\"padding-top: 6px;text-align: center;\">Alerts</ion-title></ion-col>\r\n      <ion-col size='1.5' class=\"ion-align-self-end\" (click)=\"searchActivity('open')\">\r\n        <ion-icon class=\"iconSize\" name=\"search\"></ion-icon>\r\n      </ion-col>\r\n      <ion-col size='1.5' class=\"ion-align-self-end\">\r\n        <ion-img src=\"assets/dashboard_background/bell.png\" style=\"height: 22px;width: 22px;\">\r\n        </ion-img>\r\n          <!-- <ion-badge color=\"danger\">{{totalAlert}}</ion-badge> -->\r\n         </ion-col>\r\n    </ion-row>\r\n    <ion-row [@inOutAnimation] *ngIf=\"showSearch\">\r\n      <ion-col size=\"2\" (click)=\"searchActivity('close')\">\r\n        <ion-row>\r\n          <ion-icon class=\"iconSize\" name=\"md-arrow-back\"></ion-icon>\r\n        </ion-row>\r\n      </ion-col>\r\n      <ion-col size=\"10\" class=\"botNoPad\">\r\n        <ion-searchbar [(ngModel)]=\"searchInput\" debounce=\"500\" placeholder=\"Search\" animated class=\"noPad\">\r\n        </ion-searchbar>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <!-- <ion-grid class=\"appHeaderTitle ion-padding\" [@inOutAnimation] *ngIf=\"!initialHeader\" style=\"padding-bottom:8px\">\r\n    <ion-row [@inOutAnimation] *ngIf=\"!showSearch\">\r\n      <ion-col size=\"2\">\r\n        <ion-icon style=\"font-size: x-large;\" name=\"arrow-back\" (click)=\"getBack()\"></ion-icon>\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n        <ion-title class=\"appHeaderTitle\" style=\"padding-top: 6px;text-align: center;\">Alerts</ion-title>\r\n      </ion-col>\r\n      <ion-col class=\"ion-align-self-end\" (click)=\"searchActivity('open')\">\r\n        <ion-icon class=\"iconSize\" name=\"search\"></ion-icon>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row [@inOutAnimation] *ngIf=\"showSearch\">\r\n      <ion-col size=\"2\" (click)=\"searchActivity('close')\">\r\n        <ion-row>\r\n          <ion-icon class=\"iconSize\" name=\"md-arrow-back\"></ion-icon>\r\n        </ion-row>\r\n      </ion-col>\r\n      <ion-col size=\"10\" class=\"botNoPad\">\r\n        <ion-searchbar [(ngModel)]=\"searchInput\" debounce=\"500\" placeholder=\"Search\" animated class=\"noPad\">\r\n        </ion-searchbar>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid> -->\r\n  <ion-row style=\"border-top: 1px solid\" *ngIf=\"mode!='all'\" class=\"ion-text-center ion-justify-content-center\">\r\n    <span class=\"roundedPlate\">{{currentPlateno}}</span>\r\n  </ion-row>\r\n</ion-header>\r\n<ion-content (ionScroll)=\"scroll($event)\" [scrollEvents]=\"true\">\r\n  <app-alerts [searchInput]=\"searchInput\" mode=\"vin\" (total)=\"totalAlerts($event)\"></app-alerts>\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/gridview-tab/grid-filter/grid-filter.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/gridview-tab/grid-filter/grid-filter.page.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class='header'>\r\n    <ion-toolbar>\r\n        <ion-grid>\r\n            <ion-row>\r\n                <ion-col style=\"    text-align: center;\" size='2'>\r\n                    <ion-icon style=\"font-size: 22px;\" ios=\"ios-arrow-back\" md=\"md-arrow-back\" (click)=\"getBack('close')\"></ion-icon>\r\n                </ion-col>\r\n                <ion-col size='10' style='align-self: center;'>\r\n                    <ion-row>\r\n                        <ion-label> GRID VIEW | SORT&FILTER </ion-label>\r\n                    </ion-row>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <app-gridfilter></app-gridfilter>\r\n    <app-grid-sort></app-grid-sort>\r\n\r\n    <ion-row>\r\n        <ion-col style=\"margin: auto;text-align: center;\">\r\n            <ion-button shape=\"round\" color=\"medium\" class=\"clearBtn\" (click)=\"getBack('close')\">Close</ion-button>\r\n            <ion-button shape=\"round\" class=\"applyBtn\" (click)=\"getBack('apply')\">Apply</ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/gridview-tab/gridview-tab.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/gridview-tab/gridview-tab.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-row *ngIf=\"myPlatform!='desktop' && appName != 'Armoron'\">\r\n        <ion-grid style=\"padding: 0px;\" class=\"appHeaderTitle ion-padding\">\r\n            <ion-row [@inOutAnimation] *ngIf=\"!showSearch\">\r\n                <ion-col size=\"2\">\r\n                    <ion-menu-button></ion-menu-button>\r\n                </ion-col>\r\n                <ion-col size=\"10\" style=\"align-self: center;\" [@fade]>\r\n                    <ion-searchbar [(ngModel)]=\"searchInput\" placeholder=\"Search\">\r\n                    </ion-searchbar>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n        <ion-card style=\"background: white;\" class=\"statusBarCard\">\r\n            <ion-card-content class=\"statusBarPad\" style=\"background: white; padding: 0px;\">\r\n                <ion-row style=\"background: white;\" *ngIf=\"statusBarOthers.length > 0\">\r\n                    <ion-segment style=\"width:100%\" scrollable>\r\n                        <ion-col size=\"2\">\r\n                            <ion-row style=\"font-size: xx-small; place-content: center;\">ALL</ion-row>\r\n                            <ion-row class=\"statusBar\" style=\"background-color:#989aa2 ;\"\r\n                                (click)=\"changeGridView({'type':'All', 'count': vehicleCount.Total})\">\r\n                                {{vehicleCount.Total}}\r\n                            </ion-row>\r\n                        </ion-col>\r\n                        <ion-col size=\"2\" *ngIf=\"loginData.includes('Running')\">\r\n                            <ion-row style=\"font-size: xx-small; place-content: center;\">RUNNING</ion-row>\r\n                            <ion-row class=\"statusBar\" style=\"background-color:#1eb15d;\"\r\n                                (click)=\"changeGridView({'type':'Running', 'count': vehicleCount.Running})\">\r\n                                {{vehicleCount.Running}}</ion-row>\r\n                        </ion-col>\r\n\r\n                        <!-- <ion-col size=\"2\"  *ngIf= \"loginData.includes('Good')\">  \r\n                        <ion-row style=\"font-size: xx-small; place-content: center;\">GOOD</ion-row>\r\n                        <ion-row class=\"statusBar\" style=\"background-color:#1eb15d;\"\r\n                            (click)=\"changeGridView({'type':'Good', 'count': vehicleCount.good})\">\r\n                            {{vehicleCount.Good}}</ion-row>\r\n                    </ion-col> -->\r\n\r\n                        <ion-col size=\"2\" *ngIf=\"loginData.includes('Stop')\">\r\n                            <ion-row style=\"font-size: xx-small; place-content: center;\">STOP</ion-row>\r\n                            <ion-row class=\"statusBar\" style=\"background-color:#FF0000 ;\"\r\n                                (click)=\"changeGridView({'type':'Stop', 'count': vehicleCount.Stop})\">\r\n                                {{vehicleCount.Stop}}\r\n                            </ion-row>\r\n                        </ion-col>\r\n\r\n                        <ion-col size=\"2\" *ngIf=\"loginData.includes('HighTemp')\">\r\n                            <ion-row style=\"font-size: xx-small; place-content: center;\">HIGTEMP</ion-row>\r\n                            <ion-row class=\"statusBar\" style=\"background-color:#FF0000 ;\"\r\n                                (click)=\"changeGridView({'type':'HighTemp', 'count': vehicleCount.HighTemp})\">\r\n                                {{vehicleCount.HighTemp}}\r\n                            </ion-row>\r\n                        </ion-col>\r\n\r\n                        <ion-col size=\"2\" *ngIf=\"loginData.includes('Idle')\">\r\n                            <ion-row style=\"font-size: xx-small; place-content: center;\">IDLE</ion-row>\r\n                            <ion-row class=\"statusBar\" style=\"background-color:#1f5baa ;\"\r\n                                (click)=\"changeGridView({'type':'Idle', 'count': vehicleCount.Idle})\">\r\n                                {{vehicleCount.Idle}}\r\n                            </ion-row>\r\n                        </ion-col>\r\n\r\n                        <ion-col size=\"2\" *ngIf=\"loginData.includes('Geofence')\">\r\n                            <ion-row style=\"font-size: xx-small; place-content: center;\">GEOFENCE</ion-row>\r\n                            <ion-row class=\"statusBar\" style=\"background-color:#1f5baa ;\"\r\n                                (click)=\"changeGridView({'type':'Geofence', 'count': vehicleCount.Geofence})\">\r\n                                {{vehicleCount.Geofence}}\r\n                            </ion-row>\r\n                        </ion-col>\r\n\r\n                        <ion-col size=\"2\" *ngIf=\"loginData.includes('No Transmission')\">\r\n                            <ion-row style=\"font-size: xx-small; place-content: center;\">NOTRANSMIT</ion-row>\r\n                            <ion-row class=\"statusBar\" style=\"background-color:#000000 ;\"\r\n                                (click)=\"changeGridView({'type':'No Transmission', 'count': vehicleCount['No Transmission']})\">\r\n                                {{vehicleCount['No Transmission']}}</ion-row>\r\n                        </ion-col>\r\n\r\n                        <ion-col size=\"2\" *ngIf=\"loginData.includes('PowerFail')\">\r\n                            <ion-row style=\"font-size: xx-small; place-content: center;\">POWERFAIL</ion-row>\r\n                            <ion-row class=\"statusBar\" style=\"background-color:#724040 ;\"\r\n                                (click)=\"changeGridView({'type':'PowerFail', 'count': vehicleCount['PowerFail']})\">\r\n                                {{vehicleCount['PowerFail']}}</ion-row>\r\n                        </ion-col>\r\n\r\n                        <ion-col size=\"2\" *ngIf=\"loginData.includes('Overspeed')\">\r\n                            <ion-row style=\"font-size: xx-small; place-content: center;\">OVERSPEED</ion-row>\r\n                            <ion-row class=\"statusBar\" style=\"background-color:#f28918 ;\"\r\n                                (click)=\"changeGridView({'type':'Overspeed', 'count': vehicleCount.Overspeed})\">\r\n                                {{vehicleCount.Overspeed}}</ion-row>\r\n                        </ion-col>\r\n                        <ion-col size=\"2\" *ngIf=\"loginData.includes('DoorOpen')\">\r\n                            <ion-row style=\"font-size: xx-small; place-content: center;\">DOOROPEN</ion-row>\r\n                            <ion-row class=\"statusBar\" style=\"background-color:#f28918 ;\"\r\n                                (click)=\"changeGridView({'type':'DoorOpen', 'count': vehicleCount.DoorOpen})\">\r\n                                {{vehicleCount.DoorOpen}}</ion-row>\r\n                        </ion-col>\r\n                        <ion-col size=\"2\">\r\n                            <ion-row style=\"font-size: xx-small; place-content: center;\"\r\n                                *ngIf=\"loginData.includes('Towed')\">TOWED</ion-row>\r\n                            <ion-row class=\"statusBar\" style=\"background-color:#c200b8 ;\"\r\n                                (click)=\"changeGridView({'type':'Towed', 'count': vehicleCount.Towed})\">\r\n                                {{vehicleCount.Towed}}</ion-row>\r\n                        </ion-col>\r\n                        <ion-col size=\"2\">\r\n                            <ion-row style=\"font-size: xx-small; place-content: center;\">YETTOTRANS</ion-row>\r\n                            <ion-row class=\"statusBar\" style=\"background-color:#7d410f ;\"\r\n                                (click)=\"changeGridView({'type':'Yet_to_transmit', 'count': vehicleCount.Yet_to_transmit})\">\r\n                                {{vehicleCount.Yet_to_transmit}}</ion-row>\r\n                        </ion-col>\r\n                        <ion-col size=\"2\">\r\n                            <ion-row style=\"font-size: xx-small; place-content: center;\">ONLINE</ion-row>\r\n                            <ion-row class=\"statusBar\" style=\"background-color:#00E1BC ;\"\r\n                                (click)=\"changeGridView({'type':'Online', 'count': vehicleCount.Online})\">\r\n                                {{vehicleCount.Online}}</ion-row>\r\n                        </ion-col>\r\n                    </ion-segment>\r\n                </ion-row>\r\n\r\n            </ion-card-content>\r\n        </ion-card>\r\n    </ion-row>\r\n\r\n    <ion-row *ngIf=\"myPlatform!='desktop' && appName == 'Armoron'\">\r\n        <ion-header>\r\n            <ion-toolbar class=\"header-background-color\">\r\n                <ion-buttons slot=\"start\">\r\n                    <ion-menu-button></ion-menu-button>\r\n                </ion-buttons>\r\n                <ion-title>\r\n                    <ion-title style=\"text-align: center;\">ASSETS</ion-title>\r\n                </ion-title>\r\n                <ion-button slot=\"secondary\" color=\"dark\" size=\"small\" (click)=\"openModalAddAsset()\">+ Add</ion-button>\r\n            </ion-toolbar>\r\n        </ion-header>\r\n    </ion-row>\r\n    <!-- <ion-row style=\"    padding: 8px;\" *ngIf=\"myPlatform=='desktop'\">\r\n        <ion-col size=10.5>\r\n\r\n        </ion-col>\r\n        <ion-col style=\"align-self: center;\" size=0.5>\r\n            <ion-row style=\"align-self: center;     float: right;\">\r\n                <ion-img src=\"/assets/dashboard_background/bell.png\" style=\"width:40px; height:30px\"></ion-img>\r\n                <ion-badge color=\"danger\"\r\n                    style=\"position: absolute; align-self: center; font-size: 13px; left: 76px; color: white; font-weight: bold;  top: 3px;\">\r\n                    {{totalAlertCount}}\r\n                </ion-badge>\r\n            </ion-row>\r\n        </ion-col>\r\n        <ion-col style=\"text-align: -webkit-center;\" size=1>\r\n                <ion-img class=\"logo\" [src]=\"app.logo\"></ion-img>\r\n        </ion-col>\r\n    </ion-row> -->\r\n</ion-header>\r\n<ion-content (ionScroll)=\"scroll($event)\" [scrollEvents]=\"true\">\r\n    <app-vtsgrid *ngIf=\"entryPoint == 'VTS' || entryPoint == 'TTS' || entryPoint == 'vts' || entryPoint == 'tts'\" [searchTerm]=\"searchInput\" [filterValue]=\"data\"\r\n        [manualFilter]='filter' [temperatureView]=\"temperatureData\" [(ngModel)]=\"searchInput\"\r\n        (headerValue)='dashboardCountLoader()' (vehicleAlertCount)=\"vehicleAlert($event)\" ngDefaultControl>\r\n    </app-vtsgrid>\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/gridview-tab/vtsgrid/vtsgrid.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/gridview-tab/vtsgrid/vtsgrid.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-refresher\r\n  *ngIf=\"showSwipeModal === 'false' && myPlatform != 'desktop'\"\r\n  slot=\"fixed\"\r\n  (ionRefresh)=\"doRefresh($event)\"\r\n>\r\n  <ion-refresher-content> </ion-refresher-content>\r\n</ion-refresher>\r\n<ion-refresher\r\n  *ngIf=\"showSwipeModal === 'false' && myPlatform == 'desktop'\"\r\n  slot=\"fixed\"\r\n  (ionRefresh)=\"doRefresh($event)\"\r\n>\r\n  <ion-refresher-content> </ion-refresher-content>\r\n</ion-refresher>\r\n<ion-content>\r\n  <ion-fab\r\n    *ngIf=\"\r\n      showSwipeModal === 'false' &&\r\n      myPlatform != 'desktop' &&\r\n      appName != 'Armoron'\r\n    \"\r\n    horizontal=\"end\"\r\n    vertical=\"bottom\"\r\n    slot=\"fixed\"\r\n  >\r\n    <ion-fab-button color=\"light\">\r\n      <ion-icon name=\"funnel\"></ion-icon>\r\n    </ion-fab-button>\r\n    <ion-fab-list side=\"start\" size=\"small\"> </ion-fab-list>\r\n    <ion-fab-list side=\"top\">\r\n      <ion-fab-button color=\"light\" (click)=\"filterPage('watchMode')\">\r\n        <svg\r\n          width=\"35\"\r\n          height=\"35\"\r\n          viewBox=\"0 0 800 800\"\r\n          style=\"\r\n            shape-rendering: geometricPrecision;\r\n            text-rendering: geometricPrecision;\r\n            image-rendering: optimizeQuality;\r\n            fill-rule: evenodd;\r\n            clip-rule: evenodd;\r\n          \"\r\n        >\r\n          <path\r\n            attr.fill=\"{{ watchFilter == true ? '#1d93ed' : 'black' }}\"\r\n            d=\"M430 586.53c-38.76,0 -72.57,-8.35 -101.64,-30.26 -23.48,-17.69 -42.12,-38.46 -54.23,-65.66 -25.5,-57.32 -16.5,-119.47 21.29,-169.22 5.71,-7.52 14.31,-14.96 20.32,-20.98 3.66,-3.66 6.82,-5.64 11.1,-8.87 45.82,-34.58 114.25,-42.08 166.23,-15.87 26.01,13.11 22.96,12.83 41.25,28.02 2.68,2.23 3.36,2.15 5.71,4.95 21.61,25.86 34.09,41.43 42.37,77.52 6.04,26.29 6.13,44.87 0.72,71.06 -5.44,26.3 -15.66,47.2 -32.06,67.85 -3.66,4.61 -6.09,6.85 -9.91,11.41 -4.97,5.94 -14.96,13.85 -21.32,18.65 -8.52,6.42 -15.1,9.99 -24.99,14.97 -16.11,8.1 -41.32,16.43 -64.84,16.43zm-99.92 -203.83c6.3,3.33 13.53,5.52 20.45,8.87 6.9,3.34 13.46,5.7 19.95,9.35l38.2 21.74c-7.98,10.9 -69.47,36.48 -78.6,41.3 4.87,20.89 32.99,45.12 56.14,54.44 25.57,10.31 56.37,9.23 80.65,-2.91 50.26,-25.13 71.85,-78.41 50.51,-132.25 -9.01,-22.73 -28.38,-40.94 -49.62,-51.62 -42.27,-21.25 -92.62,-9.51 -123.98,27.48 -3.87,4.57 -12.27,17.49 -13.7,23.6zm-247.79 41.3l14.63 18.67c4.77,6.26 10.17,11.51 15.24,18.07 22.98,29.66 86.65,83.79 113.99,101.83l53.31 30.62c34.19,17.15 88.84,34.64 131.89,34.64 55.33,0 83.37,-4.63 132.85,-24.35 23.09,-9.21 55.22,-26.56 75.53,-40.37l47.71 -36.22c28.49,-25.39 34.46,-31.2 58.63,-57.28l30.51 -36.1c2.23,-2.99 5.13,-7.56 7.8,-9.51 -2.05,-3.07 -4.1,-6.53 -6.46,-9.53 -15.48,-19.68 -54.17,-64.69 -72.14,-78.4l-36.15 -30.46c-6.52,-5.21 -11.83,-9.35 -19,-14.3 -22.47,-15.51 -37.38,-24.8 -62.53,-37.39 -34.95,-17.51 -88.82,-35.08 -132.77,-35.08 -55.33,0 -83.37,4.62 -132.86,24.34 -8.3,3.32 -15.62,6.58 -23.01,10.29 -32.56,16.33 -73.09,42.11 -100.23,66.3 -43.92,39.15 -55.7,51.86 -89.88,93.97 -2.86,3.52 -4.72,6.76 -7.06,10.26z\"\r\n          />\r\n        </svg>\r\n      </ion-fab-button>\r\n      <ion-fab-button color=\"light\" (click)=\"filterPage('battery')\">\r\n        <svg\r\n          width=\"25\"\r\n          height=\"25\"\r\n          viewBox=\"0 0 800 800\"\r\n          style=\"\r\n            shape-rendering: geometricPrecision;\r\n            text-rendering: geometricPrecision;\r\n            image-rendering: optimizeQuality;\r\n            fill-rule: evenodd;\r\n            clip-rule: evenodd;\r\n          \"\r\n        >\r\n          <path\r\n            attr.fill=\"{{ batteryStatusFilter == true ? '#1d93ed' : 'black' }}\"\r\n            d=\"M-0 248.48l0 486.31 846.66 -0.01 0 -486.3 -846.66 0zm87.77 -55.22l205.61 0 0 -81.39 -205.61 0 0 81.39zm465.53 0l205.61 0 0 -81.39 -205.61 0 0 81.39zm-297.64 259.53l0 0 -37.49 0 0 37.48 -55.21 0.01 0 -37.48 -37.49 -0.01 0 -55.22 37.49 0 0 -37.48 55.21 0 0 37.48 37.49 0 0 55.22zm193.28 199.43l-51.22 -20.62 37.76 -93.8 -106.05 0 68.29 -169.63 51.22 20.62 -37.76 93.8 106.05 -0.01 -68.29 169.64zm272.25 -199.43l-130.19 0 0 -55.22 130.19 0 0 55.22z\"\r\n          />\r\n        </svg>\r\n      </ion-fab-button>\r\n      <ion-fab-button color=\"light\" (click)=\"filterPage('gsm')\">\r\n        <svg\r\n          xmlns=\"http://www.w3.org/2000/svg\"\r\n          xml:space=\"preserve\"\r\n          width=\"7mm\"\r\n          height=\"7mm\"\r\n          version=\"1.1\"\r\n          style=\"\r\n            shape-rendering: geometricPrecision;\r\n            text-rendering: geometricPrecision;\r\n            image-rendering: optimizeQuality;\r\n            fill-rule: evenodd;\r\n            clip-rule: evenodd;\r\n          \"\r\n          viewBox=\"0 0 846.66 846.66\"\r\n          xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n        >\r\n          <path\r\n            attr.fill=\"{{ gsmStatusFilter == true ? '#1d93ed' : 'black' }}\"\r\n            d=\"M273.84 700.03c0,10.28 3.11,13.39 13.38,13.39l124.95 0 0 -98.17 -138.33 0 0 84.78zm182.96 -232.05l0 232.05c0,10.28 3.1,13.39 13.39,13.39l124.95 0 0 -258.82 -124.95 0c-10.29,0 -13.39,3.1 -13.39,13.38zm-254.36 245.44l40.16 0 0 -374.85c0,-24.95 99.44,-157.07 124.95,-205.27l-298.98 0 104.46 163.29c21.32,30.97 16.17,25.19 16.03,73.22l-0.39 312.76c-0.13,16.63 -3.44,30.85 13.77,30.85zm21.17 -403.47l-111.3 -159.72 203.51 0 -92.21 159.72zm420.61 403.47l133.87 0 0 -401.62c0,-10.29 -3.1,-13.39 -13.37,-13.39l-120.5 0 0 415.01z\"\r\n          />\r\n        </svg>\r\n      </ion-fab-button>\r\n      <ion-fab-button color=\"light\" (click)=\"filterPage('gps')\">\r\n        <ion-icon\r\n          style=\"font-size: 25px\"\r\n          [ngClass]=\"{\r\n            selecedFabIcon: gpsFilter === true,\r\n            notSelecedFabIcon: gpsFilter === false\r\n          }\"\r\n          name=\"md-locate\"\r\n        ></ion-icon>\r\n      </ion-fab-button>\r\n      <ion-fab-button color=\"light\" (click)=\"filterPage('subscription')\">\r\n        <ion-icon\r\n          style=\"font-size: 25px\"\r\n          [ngClass]=\"{\r\n            selecedFabIcon: subscriptionFilter === true,\r\n            notSelecedFabIcon: subscriptionFilter === false\r\n          }\"\r\n          name=\"logo-usd\"\r\n        ></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab-list>\r\n  </ion-fab>\r\n\r\n  <!-- Mobile MVT -->\r\n  <div *ngIf=\"myPlatform != 'desktop' && appName != 'Armoron'\">\r\n    <!-- search and filter are customized based on pipe refer search.pipe and filter.pipe -->\r\n    <!-- <ion-virtual-scroll\r\n            [items]=\"dashboardData | search:searchTerm | status: filterValue : count : statusGrid: manualFilter\"\r\n            [trackBy]=\"identify\" approxItemHeight=\"320px\" [itemHeight]=\"itemHeightFn\" [approxHeaderHeight]=\"1\"\r\n            [approxFooterHeight]=\"1\">\r\n            <ion-card *virtualItem=\"let data;\" style=\"padding:0px;\" disabled='{{data.warrantyExpiry}}'\r\n                [ngClass]='{\"runningCardBorder\": data.status === \"Running\" || data.status === \"Good\",\"stopCardBorder\":data.status === \"Stop\" || data.status === \"HighTemp\" , \"idleCardBorder\":data.status === \"Idle\" || data.status === \"Geofence\", \"noTransCardBorder\":data.status === \"No Transmission\" ,\"powerFail\": data.status === \"PowerFail\",\"doorOpen\": data.status === \"DoorOpen\", \"overspeedCardBorder\": data.status === \"Overspeed\", \"towedCardBorder\": data.status === \"Towed\",\"yetToTransmitCardBorder\": data.status === \"Yet_to_transmit\", \"onlineCardBorder\": data.status === \"Online\" }'>\r\n                <ion-card-content style=\"padding:0px;\">\r\n                    <app-gridview-card (click)='showModal(data)' [commonData]='data'\r\n                        [temperatureView]='temperatureView'></app-gridview-card>\r\n                    <ion-row (click)='showLocation(data)' class=\"address\">\r\n                        <ion-col size=12 style=\"padding-top: 0px; padding-bottom: 0px;\">\r\n                            <ion-row *ngIf=\"data.location\">\r\n                                {{data.location}}\r\n                            </ion-row>\r\n                            <ion-row *ngIf=\"!data.location\">\r\n                             \r\n                                Click for location\r\n                            </ion-row>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-card-content>\r\n\r\n            </ion-card>\r\n        </ion-virtual-scroll> -->\r\n    <ion-row style=\"padding: 8px; margin: 0px 0px 0px 0px\">\r\n      <!-- <ion-virtual-scroll\r\n                [items]=\"dashboardData | search:searchTerm | status: filterValue : count : statusGrid: manualFilter\"\r\n                [trackBy]=\"identify\" approxItemHeight=\"320px\" [itemHeight]=\"itemHeightFn\" [approxHeaderHeight]=\"1\"\r\n                [approxFooterHeight]=\"1\"> -->\r\n      <ion-card\r\n        *ngFor=\"\r\n          let data of dashboardData\r\n            | search : searchTerm\r\n            | status : filterValue : count : statusGrid : manualFilter\r\n        \"\r\n        style=\"\r\n          padding: 0px;\r\n          margin: 10px 3px 0px 2px;\r\n          width: -webkit-fill-available;\r\n        \"\r\n        disabled=\"{{ data.warrantyExpiry }}\"\r\n        [ngClass]=\"{\r\n          runningCardBorder:\r\n            data.status === 'Running' || data.status === 'Good',\r\n          stopCardBorder: data.status === 'Stop' || data.status === 'HighTemp',\r\n          idleCardBorder: data.status === 'Idle' || data.status === 'Geofence',\r\n          noTransCardBorder: data.status === 'No Transmission',\r\n          powerFail: data.status === 'PowerFail',\r\n          doorOpen: data.status === 'DoorOpen',\r\n          overspeedCardBorder: data.status === 'Overspeed',\r\n          towedCardBorder: data.status === 'Towed',\r\n          yetToTransmitCardBorder: data.status === 'Yet_to_transmit',\r\n          onlineCardBorder: data.status === 'Online'\r\n        }\"\r\n      >\r\n        <ion-card-content style=\"padding: 0px\">\r\n          <app-gridview-card\r\n            (click)=\"showModal(data)\"\r\n            [commonData]=\"data\"\r\n            [temperatureView]=\"temperatureView\"\r\n          ></app-gridview-card>\r\n          <ion-row (click)=\"showLocation(data)\" class=\"address\">\r\n            <ion-col size=\"12\" style=\"padding-top: 0px; padding-bottom: 0px\">\r\n              <ion-row *ngIf=\"data.location\">\r\n                {{ data.location }}\r\n              </ion-row>\r\n              <ion-row *ngIf=\"!data.location\">\r\n                <!-- <ion-spinner name=\"dots\"></ion-spinner> -->\r\n                Click for location\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card-content>\r\n        <!-- <app-gridview-card [commonData]='data' [temperatureView]='temperatureView'></app-gridview-card> -->\r\n      </ion-card>\r\n      <!-- </ion-virtual-scroll> -->\r\n    </ion-row>\r\n\r\n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadMoreData($event)\">\r\n      <ion-infinite-scroll-content\r\n        loadingSpinne\r\n        r=\"bubbles\"\r\n        loadingText=\"Loading more data...\"\r\n      >\r\n      </ion-infinite-scroll-content>\r\n    </ion-infinite-scroll>\r\n\r\n    <div\r\n      class=\"modal\"\r\n      [ngClass]=\"{\r\n        dragDown: showSwipeModal === 'false',\r\n        dragUp: showSwipeModal === 'true',\r\n        dragUpIos: showSwipeModal === 'iOS'\r\n      }\"\r\n      swipeAll\r\n      (swipedown)=\"hideModal()\"\r\n    >\r\n      <ion-grid style=\"padding: 0px\">\r\n        <ion-row>\r\n          <ion-col size=\"2\"></ion-col>\r\n          <ion-col style=\"padding: 0px\" size=\"8\" class=\"ion-text-center\">\r\n            <div class=\"semiCircle\">\r\n              <ion-ripple-effect></ion-ripple-effect>\r\n              <ion-label class=\"alertsStyle\">{{ plateNo }} </ion-label>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"2\"></ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col\r\n            *ngIf=\"vehicleActivity.includes('Live Track')\"\r\n            size=\"4\"\r\n            class=\"ion-align-items-center ion-justify-content-center displayType\"\r\n            [routerLink]=\"['/livetrack', selectedVin.plateNo]\"\r\n          >\r\n            <ion-row\r\n              class=\"ion-align-items-center ion-justify-content-center imgSize\"\r\n            >\r\n              <ion-img src=\"assets/icon/livetrack.svg\"></ion-img>\r\n            </ion-row>\r\n            <ion-row class=\"ion-text-center\">Live track</ion-row>\r\n          </ion-col>\r\n          <ion-col\r\n            *ngIf=\"vehicleActivity.includes('Track History')\"\r\n            size=\"4\"\r\n            class=\"ion-align-items-center ion-justify-content-center displayType\"\r\n            [routerLink]=\"['/trackhistory']\"\r\n          >\r\n            <ion-row\r\n              class=\"ion-align-items-center ion-justify-content-center imgSize\"\r\n            >\r\n              <ion-img src=\"assets/icon/trackhistory.svg\"></ion-img>\r\n            </ion-row>\r\n            <ion-row class=\"ion-text-center\">Track history</ion-row>\r\n          </ion-col>\r\n          <ion-col\r\n            *ngIf=\"vehicleActivity.includes('Reports')\"\r\n            size=\"4\"\r\n            class=\"ion-align-items-center ion-justify-content-center displayType\"\r\n            [routerLink]=\"['/reports', selectedVin.plateNo]\"\r\n          >\r\n            <ion-row\r\n              class=\"ion-align-items-center ion-justify-content-center imgSize\"\r\n            >\r\n              <ion-img src=\"assets/icon/reports.svg\"></ion-img>\r\n            </ion-row>\r\n            <ion-row>Reports</ion-row>\r\n          </ion-col>\r\n\r\n          <ion-col\r\n            *ngIf=\"vehicleActivity.includes('Nearby')\"\r\n            size=\"4\"\r\n            class=\"ion-align-items-center ion-justify-content-center displayType\"\r\n            [routerLink]=\"['/nearby']\"\r\n          >\r\n            <ion-row\r\n              class=\"ion-align-items-center ion-justify-content-center imgSize\"\r\n            >\r\n              <ion-img src=\"assets/icon/nearby.svg\"></ion-img>\r\n            </ion-row>\r\n            <ion-row>Near by</ion-row>\r\n          </ion-col>\r\n\r\n          <ion-col\r\n            *ngIf=\"vehicleActivity.includes('Alerts')\"\r\n            size=\"4\"\r\n            class=\"ion-align-items-center ion-justify-content-center displayType\"\r\n            (click)=\"openAlertsModal()\"\r\n          >\r\n            <ion-row\r\n              class=\"ion-align-items-center ion-justify-content-center imgSize\"\r\n            >\r\n              <ion-img src=\"assets/icon/alerts.svg\"></ion-img>\r\n            </ion-row>\r\n            <ion-row>Alerts</ion-row>\r\n          </ion-col>\r\n          <ion-col\r\n            *ngIf=\"vehicleActivity.includes('GeoFence')\"\r\n            size=\"4\"\r\n            class=\"ion-align-items-center ion-justify-content-center displayType\"\r\n            [routerLink]=\"['/geofence', 'vin', 'null']\"\r\n          >\r\n            <ion-row\r\n              class=\"ion-align-items-center ion-justify-content-center imgSize\"\r\n            >\r\n              <ion-img src=\"assets/icon/geofence.svg\"></ion-img>\r\n            </ion-row>\r\n            <ion-row>Geofence</ion-row>\r\n          </ion-col>\r\n\r\n          <ion-col\r\n            *ngIf=\"vehicleActivity.includes('Detail View')\"\r\n            size=\"4\"\r\n            class=\"ion-align-items-center ion-justify-content-center displayType\"\r\n            [routerLink]=\"['/detail-view']\"\r\n          >\r\n            <ion-row\r\n              class=\"ion-align-items-center ion-justify-content-center imgSize\"\r\n            >\r\n              <!-- <ion-img src=\"assets/icon/nearby.svg\"></ion-img> -->\r\n              <ion-icon\r\n                style=\"font-size: 32px\"\r\n                ios=\"ios-pie\"\r\n                md=\"md-pie\"\r\n              ></ion-icon>\r\n            </ion-row>\r\n            <ion-row>Detail view</ion-row>\r\n          </ion-col>\r\n\r\n          <ion-col\r\n            *ngIf=\"vehicleActivity.includes('Immobilize')\"\r\n            size=\"4\"\r\n            class=\"ion-align-items-center ion-justify-content-center displayType\"\r\n            (click)=\"openActionModal('Immobilize')\"\r\n          >\r\n            <ion-row\r\n              class=\"ion-align-items-center ion-justify-content-center imgSize\"\r\n            >\r\n              <ion-img src=\"assets/icon/immobilize.svg\"></ion-img>\r\n            </ion-row>\r\n            <ion-row>Immobilize</ion-row>\r\n          </ion-col>\r\n          <ion-col\r\n            *ngIf=\"vehicleActivity.includes('Trip')\"\r\n            size=\"4\"\r\n            class=\"ion-align-items-center ion-justify-content-center displayType\"\r\n            [routerLink]=\"['/trip-summary', 'vin', 'null']\"\r\n          >\r\n            <ion-row\r\n              class=\"ion-align-items-center ion-justify-content-center imgSize\"\r\n            >\r\n              <ion-img src=\"assets/triproute.svg\" style=\"width: 28px\"></ion-img>\r\n            </ion-row>\r\n            <ion-row>Trip</ion-row>\r\n          </ion-col>\r\n          <!--  (click)=\"eventEmmiter('trip')\" -->\r\n          <ion-col\r\n            *ngIf=\"vehicleActivity.includes('Settings')\"\r\n            size=\"4\"\r\n            class=\"ion-align-items-center ion-justify-content-center displayType\"\r\n            [routerLink]=\"['/settings', 'Vin']\"\r\n          >\r\n            <ion-row\r\n              class=\"ion-align-items-center ion-justify-content-center imgSize\"\r\n              style=\"font-size: 30px\"\r\n            >\r\n              <ion-icon ios=\"ios-settings\" md=\"md-settings\"></ion-icon>\r\n            </ion-row>\r\n            <ion-row>Settings</ion-row>\r\n          </ion-col>\r\n\r\n          <ion-col\r\n            *ngIf=\"vehicleActivity.includes('Share')\"\r\n            size=\"4\"\r\n            class=\"ion-align-items-center ion-justify-content-center displayType\"\r\n            (click)=\"shareLocation()\"\r\n          >\r\n            <ion-row\r\n              class=\"ion-align-items-center ion-justify-content-center imgSize\"\r\n            >\r\n              <ion-img src=\"assets/icon/share.svg\"></ion-img>\r\n            </ion-row>\r\n            <ion-row>Share</ion-row>\r\n          </ion-col>\r\n          <ion-col\r\n            *ngIf=\"vehicleActivity.includes('Link')\"\r\n            size=\"4\"\r\n            class=\"ion-align-items-center ion-justify-content-center displayType\"\r\n            (click)=\"copyLinkClip()\"\r\n          >\r\n            <ion-row\r\n              class=\"ion-align-items-center ion-justify-content-center imgSize\"\r\n            >\r\n              <ion-img src=\"assets/icon/link.svg\"></ion-img>\r\n            </ion-row>\r\n            <ion-row>Link</ion-row>\r\n          </ion-col>\r\n          <ion-col\r\n            *ngIf=\"vehicleActivity.includes('Navigation')\"\r\n            size=\"4\"\r\n            class=\"ion-align-items-center ion-justify-content-center displayType\"\r\n            (click)=\"navigateToGoogle()\"\r\n          >\r\n            <ion-row\r\n              class=\"ion-align-items-center ion-justify-content-center imgSize\"\r\n            >\r\n              <!-- <ion-img src=\"assets/icon/geofence.svg\"></ion-img> -->\r\n              <ion-icon style=\"font-size: 32px\" name=\"ios-navigate\"></ion-icon>\r\n            </ion-row>\r\n            <ion-row>Navigation</ion-row>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Mobile Armoron -->\r\n  <div *ngIf=\"myPlatform != 'desktop' && appName == 'Armoron'\">\r\n    <div\r\n      style=\"background-color: rgb(59, 59, 59); margin: 5px\"\r\n      *ngFor=\"let data of dashboardData\"\r\n    >\r\n      <ion-card (click)=\"showModal(data)\" disabled=\"{{ data.warrantyExpiry }}\">\r\n        <ion-row>\r\n          <ion-col\r\n            size=\"7.5\"\r\n            style=\"\r\n              color: aliceblue;\r\n              font-size: 17px;\r\n              font-family: Adobe Garamond Pro Bold;\r\n              left: 10px;\r\n              top: 5px;\r\n            \"\r\n          >\r\n            {{ data.plateNo }}</ion-col\r\n          >\r\n\r\n          <ion-col\r\n            size=\"1.5\"\r\n            style=\"color: aliceblue; font-size: 25px; text-align: left\"\r\n          >\r\n            <ion-icon\r\n              name=\"battery-full\"\r\n              *ngIf=\"\r\n                data.batteryvoltage != null && data.batteryvoltage != 'No Power'\r\n              \"\r\n              [ngStyle]=\"{\r\n                color:\r\n                  data.batteryvoltage == 'Very High' ||\r\n                  data.batteryvoltage == 'High' ||\r\n                  data.batteryvoltage == 'Medium'\r\n                    ? 'green'\r\n                    : 'red'\r\n              }\"\r\n            >\r\n            </ion-icon>\r\n            <ion-icon\r\n              name=\"battery-dead\"\r\n              *ngIf=\"data.batteryvoltage == 'No Power'\"\r\n              style=\"color: red\"\r\n            >\r\n            </ion-icon>\r\n          </ion-col>\r\n          <ion-col\r\n            size=\"1.5\"\r\n            style=\"color: aliceblue; font-size: 25px; text-align: left\"\r\n          >\r\n            <ion-icon\r\n              name=\"cellular\"\r\n              *ngIf=\"data.gsmSignalStrength != null\"\r\n              [ngStyle]=\"{\r\n                color: data.gsmSignalStrength == 1 ? 'grey' : 'white'\r\n              }\"\r\n            ></ion-icon>\r\n          </ion-col>\r\n          <ion-col\r\n            size=\"1.5\"\r\n            style=\"color: aliceblue; font-size: 25px; text-align: left\"\r\n          >\r\n            <ion-icon\r\n              name=\"locate\"\r\n              *ngIf=\"data.gsmSignalStrength != null\"\r\n              [ngStyle]=\"{ color: data.gps == true ? 'white' : 'grey' }\"\r\n            ></ion-icon>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"2\" style=\"left: 15px\">\r\n            <ion-row>\r\n              <svg\r\n                xmlns=\"http://www.w3.org/2000/svg\"\r\n                xml:space=\"preserve\"\r\n                width=\"0.323in\"\r\n                height=\"0.39in\"\r\n                version=\"1.1\"\r\n                style=\"\r\n                  width: 100%;\r\n                  height: 100%;\r\n                  padding-top: 50%;\r\n                  shape-rendering: geometricPrecision;\r\n                  text-rendering: geometricPrecision;\r\n                  image-rendering: optimizeQuality;\r\n                  fill-rule: evenodd;\r\n                  clip-rule: evenodd;\r\n                \"\r\n                viewBox=\"0 0 323 390\"\r\n                xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n              >\r\n                <g id=\"Layer_x0020_1\">\r\n                  <metadata id=\"CorelCorpID_0Corel-Layer\" />\r\n                  <circle fill=\"#FEFEFE\" cx=\"161.5\" cy=\"161.51\" r=\"161.35\" />\r\n                  <circle fill=\"#848688\" cx=\"161.5\" cy=\"161.51\" r=\"146.24\" />\r\n                  <text\r\n                    x=\"105.75\"\r\n                    y=\"128.29\"\r\n                    fill=\"#fbfbfb \"\r\n                    style=\"\r\n                      font-weight: 500;\r\n                      font-size: 90px;\r\n                      font-family: 'digital-clock-font';\r\n                    \"\r\n                  >\r\n                    {{ data.speed || \"00\" }}\r\n                  </text>\r\n                  <path\r\n                    fill=\"#FEFEFE\"\r\n                    d=\"M280.8 246.11c-30.82,-25.51 -72.9,-41.21 -119.3,-41.21 -46.4,0 -88.48,15.7 -119.3,41.21 26.5,37.3 70.06,61.63 119.3,61.63 49.24,0 92.8,-24.33 119.3,-61.63z\"\r\n                  />\r\n                  <text\r\n                    x=\"103.75\"\r\n                    y=\"270.93\"\r\n                    fill=\"#373435 \"\r\n                    style=\"\r\n                      font-weight: 500;\r\n                      font-size: 41.67px;\r\n                      font-family: 'Roboto Lt';\r\n                    \"\r\n                  >\r\n                    km/hr\r\n                  </text>\r\n                  <text\r\n                    x=\"84.42\"\r\n                    y=\"378.55\"\r\n                    fill=\"#FEFEFE \"\r\n                    style=\"\r\n                      font-weight: 500;\r\n                      font-size: 55.56px;\r\n                      font-family: 'Roboto Lt';\r\n                    \"\r\n                  >\r\n                    speed\r\n                  </text>\r\n                </g>\r\n              </svg>\r\n            </ion-row>\r\n            <ion-row\r\n              style=\"color: rgb(254, 254, 254); font-size: 10px\"\r\n              no-padding\r\n              align-items-center\r\n              (click)=\"showModal(data)\"\r\n            >\r\n              <!-- <svg xmlns=\"http://www.w3.org/2000/svg\" xml:space=\"preserve\" width=\"0.323in\" height=\"0.39in\"\r\n                                version=\"1.1\"    [routerLink]=\"['/odometer-history']\"\r\n                                style=\"width:100%;height:100%;padding-top:50%;shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd\"\r\n                                viewBox=\"0 0 323 390\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n                                *ngIf=\"data.model !== 'Person'\">\r\n                                <g id=\"Layer_x0020_1\">\r\n                                    <metadata id=\"CorelCorpID_0Corel-Layer\" />\r\n                                    <circle fill=\"#FEFEFE\" cx=\"161.5\" cy=\"166.87\" r=\"161.35\" />\r\n                                    <circle fill=\"#848688\" cx=\"161.5\" cy=\"166.87\" r=\"146.24\" />\r\n                                    <text x=\"80\" y=\"128.29\" fill=\"#fbfbfb \"\r\n                                        style=\"font-weight:500;font-size:50px;font-family:'Roboto Lt'\"></text>\r\n                                        <path fill=\"#E6E7E8\"\r\n                                            d=\"M281 246c-31,-26 -73,-41 -120,-41 -46,0 -88,15 -119,41 27,37 70,62 119,62 50,0 93,-25 120,-62z\" />\r\n                                    <path fill=\"#E6E7E8\"\r\n                                        d=\"M280.8 251.47c-30.82,-25.51 -72.9,-41.21 -119.3,-41.21 -46.4,0 -88.48,15.7 -119.3,41.21 26.5,37.3 70.06,61.63 119.3,61.63 49.24,0 92.8,-24.33 119.3,-61.63z\" />\r\n                                    <text x=\"120.75\" y=\"270.93\" fill=\"#373435 \"\r\n                                        style=\"font-weight:500;font-size:41.67px;font-family:'Roboto Lt'\"></text>\r\n                                    <text x=\"37.3\" y=\"383.91\" fill=\"#FEFEFE \"\r\n                                        style=\"font-weight:500;font-size:55.56px;font-family:'Roboto Lt'\">odometer</text>\r\n                                </g>\r\n                            </svg>  -->\r\n\r\n              <ion-col\r\n                style=\"margin: 0px; padding: 0px\"\r\n                class=\"ion-text-center\"\r\n              >\r\n                <img\r\n                  src=\"assets/icon/odometer.svg\"\r\n                  class=\"day\"\r\n                  [routerLink]=\"['/odometer-history']\"\r\n                  *ngIf=\"data.model !== 'Person'\"\r\n                  style=\"padding-top: 50%\"\r\n                />odometer</ion-col\r\n              >\r\n\r\n              <!-- <svg xmlns=\"http://www.w3.org/2000/svg\" xml:space=\"preserve\" \r\n                             version=\"1.1\"\r\n                        \r\n                             class=\"ionicon\" viewBox=\"0 0 512 512\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n                            [routerLink]=\"['/odometer-history']\"\r\n                            *ngIf=\"data.model !== 'Person'\"><title>Speedometer</title><path d=\"M326.1 231.9l-47.5 75.5a31 31 0 01-7 7 30.11 30.11 0 01-35-49l75.5-47.5a10.23 10.23 0 0111.7 0 10.06 10.06 0 012.3 14z\"/><path d=\"M256 64C132.3 64 32 164.2 32 287.9a223.18 223.18 0 0056.3 148.5c1.1 1.2 2.1 2.4 3.2 3.5a25.19 25.19 0 0037.1-.1 173.13 173.13 0 01254.8 0 25.19 25.19 0 0037.1.1l3.2-3.5A223.18 223.18 0 00480 287.9C480 164.2 379.7 64 256 64z\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\"/><path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" stroke-width=\"32\" d=\"M256 128v32M416 288h-32M128 288H96M165.49 197.49l-22.63-22.63M346.51 197.49l22.63-22.63\"/></svg> -->\r\n              <!-- <img  src=\"assets/icon/odometer.svg\" class=\"day\">  -->\r\n              <!-- <svg xmlns=\"http://www.w3.org/2000/svg\" xml:space=\"preserve\" width=\"0.323in\" height=\"0.39in\"\r\n                                version=\"1.1\"\r\n                                style=\"width: 100%;height: 100%;padding-top: 50%;shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd\"\r\n                                viewBox=\"0 0 323 390\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n                                (click)=\"setCommonAlert(data.vin,data.plateNo,'SOS')\"\r\n                                *ngIf=\"data.geoCnt != 1 && data.model == 'Person'\">\r\n                                <g id=\"Layer_x0020_1\">\r\n                                    <metadata id=\"CorelCorpID_0Corel-Layer\" />\r\n                                    <circle fill=\"#FEFEFE\" cx=\"161.5\" cy=\"166.7\" r=\"161.35\" />\r\n                                    <circle [attr.fill]=\"data.watchStatusColor\" cx=\"161.5\" cy=\"166.7\" r=\"146.24\" />\r\n                                    <path fill=\"#E6E7E8\"\r\n                                        d=\"M280.8 251.3c-30.82,-25.5 -72.9,-41.21 -119.3,-41.21 -46.4,0 -88.48,15.71 -119.3,41.21 26.5,37.3 70.06,61.63 119.3,61.63 49.24,0 92.8,-24.33 119.3,-61.63z\" />\r\n                                    <text x=\"81.77\" y=\"384.08\" fill=\"#FEFEFE\"\r\n                                        style=\"font-weight:500;font-size:55.56px;font-family:'Roboto Lt'\">{{'SOS'\r\n                                        }}</text>\r\n                                    <path fill=\"#FEFEFE\"\r\n                                        d=\"M130.35 51.98l15.07 32.32c-9.6,4.12 -17.28,11.81 -21.41,21.41l-32.32 -15.07c-2.07,4.65 -3.69,9.54 -4.83,14.61 5.27,-23.86 21.67,-43.51 43.48,-53.27zm17.23 36.94c4.28,-1.82 8.98,-2.83 13.92,-2.83 4.94,0 9.64,1.01 13.92,2.82 8.52,3.61 15.33,10.43 18.95,18.95 1.81,4.28 2.82,8.98 2.82,13.92 0,4.94 -1.01,9.64 -2.82,13.92 -3.61,8.52 -10.43,15.33 -18.95,18.94 -4.28,1.82 -8.98,2.83 -13.92,2.83 -4.94,0 -9.64,-1.01 -13.92,-2.82 -8.52,-3.61 -15.33,-10.43 -18.94,-18.95 -1.82,-4.28 -2.83,-8.98 -2.83,-13.92 0,-4.94 1.01,-9.64 2.83,-13.92 3.61,-8.52 10.43,-15.33 18.94,-18.94zm45.06 -36.94c-4.65,-2.07 -9.54,-3.69 -14.61,-4.83 5.08,1.13 9.96,2.76 14.61,4.83zm-15.07 32.32l15.07 -32.32c17.18,7.68 30.99,21.49 38.67,38.65l-32.32 15.08c-4.12,-9.6 -11.82,-17.29 -21.41,-21.41zm60.4 37.48c0,-2.74 -0.16,-5.44 -0.44,-8.11 0.29,2.67 0.44,5.37 0.44,8.11zm-0.95 -11.78c-0.22,-1.45 -0.47,-2.89 -0.78,-4.32 0.31,1.42 0.56,2.86 0.78,4.32zm-5.59 -19.06c-0.04,-0.09 -0.08,-0.18 -0.12,-0.27 0.04,0.09 0.08,0.18 0.12,0.27zm-60.35 -44.98c-0.11,-0.01 -0.22,-0.03 -0.33,-0.04 0.11,0.01 0.22,0.03 0.33,0.04zm-19.28 0.02c-2.15,0.27 -4.3,0.61 -6.39,1.06 2.09,-0.46 4.24,-0.79 6.39,-1.06zm-6.83 1.17c-5.06,1.13 -9.94,2.75 -14.57,4.82 4.63,-2.07 9.5,-3.69 14.57,-4.82zm-59.27 64.98c-0.02,0.13 -0.03,0.27 -0.05,0.41 0.02,-0.13 0.03,-0.27 0.05,-0.41zm6 40.8l32.32 -15.07c4.12,9.6 11.82,17.28 21.41,21.4l-15.07 32.33c-17.17,-7.68 -30.97,-21.48 -38.66,-38.65zm-6.05 -21.92c0.28,2.32 0.64,4.62 1.11,6.87 -0.49,-2.25 -0.84,-4.55 -1.11,-6.87zm59.76 65.51c2.23,0.49 4.53,0.84 6.84,1.11 -2.31,-0.28 -4.6,-0.63 -6.84,-1.11zm-15.01 -4.93c4.62,2.06 9.49,3.67 14.54,4.81 -5.06,-1.12 -9.92,-2.75 -14.54,-4.81zm31.1 6.66c2.74,0 5.44,-0.16 8.11,-0.44 -2.67,0.29 -5.37,0.44 -8.11,0.44zm69.8 -45.33c2.07,-4.65 3.69,-9.54 4.83,-14.61 -1.11,5.08 -2.75,9.96 -4.83,14.61zm-53.73 6.33c9.6,-4.12 17.29,-11.81 21.41,-21.4l32.32 15.06c-7.68,17.18 -21.48,30.98 -38.65,38.67l-15.08 -32.33zm7.79 35.15c2.47,-0.81 4.88,-1.75 7.24,-2.8 -2.36,1.06 -4.77,1.99 -7.24,2.8zm50.88 -56.52c0.49,-2.25 0.83,-4.55 1.13,-6.86 -0.29,2.32 -0.64,4.61 -1.13,6.86zm-74.74 -97.67c-45.04,0 -81.57,36.52 -81.57,81.57 0,45.04 36.52,81.57 81.57,81.57 45.05,0 81.57,-36.52 81.57,-81.57 0,-45.05 -36.52,-81.57 -81.57,-81.57zm76.04 89.67c0.28,-2.67 0.44,-5.37 0.44,-8.1 0,2.74 -0.15,5.43 -0.44,8.1zm-0.18 -17.35c-0.1,-0.85 -0.21,-1.69 -0.33,-2.52 0.12,0.84 0.23,1.68 0.33,2.52zm-1.23 -7.32c-1.11,-4.95 -2.69,-9.73 -4.69,-14.27 2,4.54 3.59,9.31 4.69,14.27zm-58.52 -58.17c-2.14,-0.45 -4.32,-0.8 -6.52,-1.07 2.2,0.27 4.38,0.61 6.52,1.07zm-25.34 -1.11c-0.15,0.02 -0.31,0.04 -0.46,0.06 0.15,-0.02 0.31,-0.04 0.46,-0.06zm-65.5 59.75c-0.45,2.12 -0.8,4.27 -1.07,6.45 0.27,-2.18 0.61,-4.34 1.07,-6.45zm0.1 32.61c1.13,5.09 2.77,9.98 4.84,14.64 -2.07,-4.66 -3.7,-9.56 -4.84,-14.64zm66.54 59.52c2.67,0.29 5.37,0.44 8.1,0.44 -2.74,0 -5.43,-0.16 -8.1,-0.44z\" />\r\n                                    <text x=\"123.68\" y=\"281.26\" fill=\"#373435\"\r\n                                        style=\"font-weight:500;font-size:41.67px;font-family:'Roboto Lt'\">{{data.watchmode}}</text>\r\n                                </g>\r\n                            </svg> -->\r\n              <!-- <img  src=\"assets/icon/odometer.svg\" class=\"day\"> -->\r\n            </ion-row>\r\n          </ion-col>\r\n          <ion-col size=\"8\" align-self-center>\r\n            <!-- <ion-img src=\"assets/Armoron/BIKE.png\" alt=\"\" style=\"width: 100%; height: 150px;background-repeat: no-repeat;background-size: cover;\"></ion-img> -->\r\n            <app-model-status\r\n              [paint]=\"armoronVehiclePaint(data)\"\r\n              [model]=\"armoronVehicleModal(data)\"\r\n              [status]=\"data.status\"\r\n              [color]=\"vehicleColor[data.status]\"\r\n            ></app-model-status>\r\n          </ion-col>\r\n          <ion-col size=\"2\" style=\"right: 15px\">\r\n            <ion-row>\r\n              <svg\r\n                xmlns=\"http://www.w3.org/2000/svg\"\r\n                xml:space=\"preserve\"\r\n                width=\"0.322709in\"\r\n                height=\"0.379331in\"\r\n                version=\"1.1\"\r\n                style=\"\r\n                  width: 100%;\r\n                  height: 100%;\r\n                  padding-top: 50%;\r\n                  shape-rendering: geometricPrecision;\r\n                  text-rendering: geometricPrecision;\r\n                  image-rendering: optimizeQuality;\r\n                  fill-rule: evenodd;\r\n                  clip-rule: evenodd;\r\n                \"\r\n                viewBox=\"0 0 323 379\"\r\n                xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n                (click)=\"openActionModal('Immobilize', data)\"\r\n                *ngIf=\"data.model !== 'Person'\"\r\n              >\r\n                <g id=\"Layer_x0020_1\">\r\n                  <metadata id=\"CorelCorpID_0Corel-Layer\" />\r\n                  <g id=\"_879281518880\">\r\n                    <circle fill=\"#FEFEFE\" cx=\"161\" cy=\"161\" r=\"161\" />\r\n                    <circle\r\n                      [attr.fill]=\"data.lockstatus == 0 ? '#848688' : '#1eb15d'\"\r\n                      cx=\"161\"\r\n                      cy=\"161\"\r\n                      r=\"146\"\r\n                    />\r\n                    <path\r\n                      fill=\"#E6E7E8\"\r\n                      d=\"M281 246c-31,-26 -73,-41 -120,-41 -46,0 -88,15 -119,41 27,37 70,62 119,62 50,0 93,-25 120,-62z\"\r\n                    />\r\n                    <g transform=\"matrix(1 0 0 1 -134.165 189.059)\">\r\n                      <text\r\n                        x=\"161\"\r\n                        y=\"190\"\r\n                        fill=\"#FEFEFE\"\r\n                        style=\"\r\n                          font-weight: normal;\r\n                          font-size: 55.5591px;\r\n                          font-family: 'Arial';\r\n                        \"\r\n                      >\r\n                        {{ \"immobilize\" }}\r\n                      </text>\r\n                    </g>\r\n                    <g transform=\"matrix(1 0 0 1 -38.7441 86.2402)\">\r\n                      <text\r\n                        x=\"161\"\r\n                        y=\"190\"\r\n                        fill=\"#373435\"\r\n                        style=\"\r\n                          font-weight: 500;\r\n                          font-size: 41.67px;\r\n                          font-family: 'Roboto Lt';\r\n                        \"\r\n                      >\r\n                        {{ data.immobilizeStatus }}\r\n                      </text>\r\n                    </g>\r\n                    <path\r\n                      fill=\"#FEFEFE\"\r\n                      d=\"M170 146c-6,-2 -8,-7 -8,-16 1,-8 1,-16 1,-24l-68 0c2,-6 5,-16 8,-22 3,-7 8,-12 16,-13 12,-1 33,0 46,0 2,0 3,-1 5,-2 4,-1 4,0 4,-4 -3,-1 -50,0 -56,0 -19,3 -21,22 -25,31 -7,1 -13,1 -16,5 -5,6 2,9 6,11 -10,9 -7,23 -7,34 -1,5 -5,6 -3,22 1,9 13,7 27,7 16,0 130,1 133,-1 5,-1 5,-6 5,-12 0,-9 0,-8 -4,-14 -11,-1 -58,1 -64,-2l0 0zm24 -70l32 0c0,-7 1,-14 -2,-19 -6,-11 -21,-11 -28,-1 -3,5 -2,13 -2,20l0 0zm12 38c-1,3 -2,9 -2,12 3,1 8,1 12,0 0,-3 0,-4 -1,-7 -3,-10 2,-5 3,-12 1,-9 -10,-11 -15,-5 -3,5 1,9 3,12zm7 52l1 0c6,0 8,-2 5,-7l-4 -1c-11,-1 -12,8 -2,8l0 0zm-121 -7c-7,3 3,10 10,6 3,-1 4,-5 0,-6 -2,-1 -8,-1 -10,0l0 0zm42 0c0,3 2,3 5,3l30 0c5,0 7,1 8,-3 -10,-1 -32,-1 -43,0l0 0zm43 -7c-4,-3 -18,-1 -24,-1 -4,0 -14,-1 -17,0 -3,0 -4,2 0,3l38 0c4,-1 2,0 3,-2l0 0zm-91 -30c-4,2 -4,4 -3,8 0,5 1,6 5,6 3,0 21,0 23,0 4,-1 3,-7 -7,-11 -4,-1 -14,-5 -18,-3zm29 63l1 -8 -37 0c0,16 0,13 21,13 15,0 13,1 15,-5zm117 0l0 -8 -37 0c0,5 0,9 2,12 4,2 28,1 32,1l3 -5 0 0zm-62 -105c-1,13 0,35 0,50 0,8 1,10 8,10 11,0 23,0 34,0 11,0 24,0 35,0 5,-5 3,-8 3,-16 0,-7 0,-13 0,-20 0,-31 2,-27 -11,-29 -1,-13 1,-18 -6,-28 -4,-5 -12,-11 -23,-11 -11,0 -19,5 -23,11 -7,11 -5,15 -6,29 -6,0 -9,-1 -11,4l0 0z\"\r\n                    />\r\n                    <!-- <path fill=\"white\" d=\"M231.53 354.07c0,44.17 12.66,76.97 34.32,109.75 3.44,5.21 6.18,8.49 9.89,13.09 3.84,4.75 9.25,7.15 10.96,13.56 5.72,-1.52 27.05,-23.74 30.66,-29.12 -19.54,-22.47 -31.66,-37.58 -39.55,-69.27 -2.33,-9.35 -4.9,-20.75 -4.9,-31.88 15.78,0 29.12,3.1 29.12,-9.2 0,-3.68 -2.48,-4.5 -4.6,-7.66l-24.52 0c5.46,-23.46 0.43,-19.33 12.46,-48.85 4.1,-10.07 16.18,-31.53 24.32,-36.98 7.39,4.94 15.14,18.37 23.36,15.71 17.14,-5.56 -9.13,-24.27 -12.63,-29.5 7.11,-4.76 11.98,-9.49 19.28,-14.44 20.5,-13.91 50.97,-24.86 75.75,-25.41 0,13.19 -1.04,15.01 1.53,26.05 18.37,4.28 14.29,-3.75 13.79,-26.05 16.66,0.37 42.14,7.41 54.18,13.25 7.97,3.87 14.62,7.18 21.78,11.94 6.02,4.01 15.51,10.88 19.07,16.19 -7.11,10.61 -26.56,19.12 -7.66,29.12 13.05,-6.91 12.6,-14.5 21.45,-16.86 1.31,4.89 6.01,8.33 11.62,17.5 11.05,18.07 22.1,45.48 22.1,68.33 -16.88,0 -30.65,-3.24 -30.65,9.2 0,10.65 18.21,7.66 30.65,7.66 0,31.79 -11.28,57.37 -26.65,80.63l-16.26 20.52c9.08,13.56 12.65,12.32 20.06,21.32l7.52 7.8c12.51,-8.37 31.31,-39.72 37.81,-52.61 31.92,-63.33 23.06,-138.36 -17.24,-196.32 -29.83,-42.9 -89.45,-79.06 -155.44,-79.06 -104.99,0 -191.58,86.54 -191.58,191.59zm173.19 12.26c0,11.77 8.87,18.39 21.46,18.39 6.36,0 37.6,-43.84 41.59,-48.83l29.39 -38.05c3.16,-3.85 16.23,-20.41 2.58,-20.41 -7.93,0 -20.89,13.99 -26.43,19.55l-59.4 55.55c-4.35,3.26 -9.19,6.2 -9.19,13.8z\"/> -->\r\n                  </g>\r\n                </g>\r\n              </svg>\r\n              <svg\r\n                xmlns=\"http://www.w3.org/2000/svg\"\r\n                xml:space=\"preserve\"\r\n                width=\"8.1968mm\"\r\n                height=\"9.635mm\"\r\n                version=\"1.1\"\r\n                style=\"\r\n                  width: 100%;\r\n                  height: 100%;\r\n                  padding-top: 50%;\r\n                  shape-rendering: geometricPrecision;\r\n                  text-rendering: geometricPrecision;\r\n                  image-rendering: optimizeQuality;\r\n                  fill-rule: evenodd;\r\n                  clip-rule: evenodd;\r\n                \"\r\n                viewBox=\"0 0 819.68 963.5\"\r\n                xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n                *ngIf=\"data.geoCnt != 1 && data.model == 'Person'\"\r\n              >\r\n                <g id=\"Layer_x0020_1\">\r\n                  <metadata id=\"CorelCorpID_0Corel-Layer\" />\r\n                  <circle fill=\"#FEFEFE\" cx=\"409.85\" cy=\"409.83\" r=\"409.83\" />\r\n                  <circle fill=\"green\" cx=\"409.85\" cy=\"409.83\" r=\"371.45\" />\r\n                  <path\r\n                    fill=\"#E6E7E8\"\r\n                    d=\"M712.86 624.71c-78.28,-64.77 -185.17,-104.67 -303.02,-104.67 -117.86,0 -224.74,39.9 -303.02,104.67 67.31,94.73 177.95,156.53 303.02,156.53 125.07,0 235.71,-61.8 303.02,-156.53z\"\r\n                  />\r\n                  <g transform=\"matrix(0.999993 0 0 0.999993 -188.559 480.217)\">\r\n                    <text\r\n                      x=\"409.84\"\r\n                      y=\"481.75\"\r\n                      fill=\"#FEFEFE\"\r\n                      style=\"\r\n                        font-weight: normal;\r\n                        font-size: 141.12px;\r\n                        font-family: 'Arial';\r\n                      \"\r\n                    >\r\n                      Call\r\n                    </text>\r\n                  </g>\r\n                  <path\r\n                    fill=\"white\"\r\n                    d=\"M499.55 341.52c-11.26,-11.12 -25.32,-11.12 -36.51,0 -8.53,8.46 -17.07,16.93 -25.46,25.54 -2.3,2.36 -4.24,2.87 -7.03,1.29 -5.53,-3.02 -11.41,-5.45 -16.72,-8.75 -24.75,-15.57 -45.48,-35.58 -63.84,-58.11 -9.11,-11.19 -17.22,-23.17 -22.88,-36.65 -1.15,-2.73 -0.94,-4.52 1.29,-6.75 8.53,-8.25 16.85,-16.71 25.25,-25.18 11.69,-11.76 11.69,-25.53 -0.07,-37.37 -6.68,-6.74 -13.35,-13.34 -20.02,-20.09 -6.88,-6.88 -13.7,-13.84 -20.66,-20.65 -11.26,-10.98 -25.32,-10.98 -36.51,0.07 -8.61,8.46 -16.86,17.14 -25.61,25.46 -8.11,7.68 -12.19,17.08 -13.06,28.05 -1.36,17.86 3.02,34.72 9.19,51.15 12.62,34 31.85,64.2 55.16,91.89 31.49,37.44 69.08,67.07 113.05,88.45 19.8,9.61 40.32,17 62.63,18.22 15.35,0.86 28.69,-3.02 39.38,-15 7.32,-8.17 15.57,-15.63 23.31,-23.45 11.48,-11.62 11.55,-25.68 0.15,-37.16 -13.63,-13.7 -27.33,-27.33 -41.04,-40.96z\"\r\n                  />\r\n                  <g transform=\"matrix(0.999993 0 0 0.999993 -77.5693 219.058)\">\r\n                    <text\r\n                      x=\"409.84\"\r\n                      y=\"481.75\"\r\n                      style=\"\r\n                        font-weight: normal;\r\n                        font-size: 105.84px;\r\n                        font-family: 'Arial';\r\n                      \"\r\n                    >\r\n                      ON\r\n                    </text>\r\n                  </g>\r\n                </g>\r\n              </svg>\r\n            </ion-row>\r\n            <ion-row>\r\n              <svg\r\n                xmlns=\"http://www.w3.org/2000/svg\"\r\n                xml:space=\"preserve\"\r\n                width=\"0.323in\"\r\n                height=\"0.39in\"\r\n                version=\"1.1\"\r\n                style=\"\r\n                  width: 100%;\r\n                  height: 100%;\r\n                  padding-top: 50%;\r\n                  shape-rendering: geometricPrecision;\r\n                  text-rendering: geometricPrecision;\r\n                  image-rendering: optimizeQuality;\r\n                  fill-rule: evenodd;\r\n                  clip-rule: evenodd;\r\n                \"\r\n                viewBox=\"0 0 323 390\"\r\n                xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n                (click)=\"armoronFunctionality('settings', data)\"\r\n                *ngIf=\"data.model !== 'Person'\"\r\n              >\r\n                <g id=\"Layer_x0020_1\">\r\n                  <metadata id=\"CorelCorpID_0Corel-Layer\" />\r\n                  <circle fill=\"#FEFEFE\" cx=\"161.5\" cy=\"166.7\" r=\"161.35\" />\r\n                  <circle\r\n                    [attr.fill]=\"data.watchmode != 0 ? '#1eb15d' : '#838688'\"\r\n                    cx=\"161.5\"\r\n                    cy=\"166.7\"\r\n                    r=\"146.24\"\r\n                  />\r\n                  <path\r\n                    fill=\"#E6E7E8\"\r\n                    d=\"M280.8 251.3c-30.82,-25.5 -72.9,-41.21 -119.3,-41.21 -46.4,0 -88.48,15.71 -119.3,41.21 26.5,37.3 70.06,61.63 119.3,61.63 49.24,0 92.8,-24.33 119.3,-61.63z\"\r\n                  />\r\n                  <text\r\n                    x=\"81.77\"\r\n                    y=\"384.08\"\r\n                    fill=\"#FEFEFE\"\r\n                    style=\"\r\n                      font-weight: 500;\r\n                      font-size: 55.56px;\r\n                      font-family: 'Roboto Lt';\r\n                    \"\r\n                  >\r\n                    {{ \"watch\" }}\r\n                  </text>\r\n                  <path\r\n                    fill=\"#FEFEFE\"\r\n                    d=\"M161.5 86.05c-54.54,0 -83.13,40.18 -83.13,46.55 0,6.37 28.59,46.55 83.13,46.55 54.53,0 83.13,-40.18 83.13,-46.55 0,-6.37 -28.59,-46.55 -83.13,-46.55zm0 82.36c-20.41,0 -36.95,-16.03 -36.95,-35.81 0,-19.78 16.54,-35.81 36.95,-35.81 20.4,0 36.94,16.03 36.94,35.81 0,19.78 -16.54,35.81 -36.94,35.81zm18.47 -35.81c0,9.89 -8.27,17.91 -18.47,17.91 -10.2,0 -18.47,-8.02 -18.47,-17.91 0,-9.89 8.27,-17.91 18.47,-17.91 5.51,0 -3.39,14.19 0,17.91 2.87,3.16 18.47,-4.54 18.47,0z\"\r\n                  />\r\n                  <text\r\n                    x=\"123.68\"\r\n                    y=\"281.26\"\r\n                    fill=\"#373435\"\r\n                    style=\"\r\n                      font-weight: 500;\r\n                      font-size: 41.67px;\r\n                      font-family: 'Roboto Lt';\r\n                    \"\r\n                  >\r\n                    {{ data.watch }}\r\n                  </text>\r\n                </g>\r\n              </svg>\r\n              <svg\r\n                xmlns=\"http://www.w3.org/2000/svg\"\r\n                xml:space=\"preserve\"\r\n                width=\"0.323in\"\r\n                height=\"0.39in\"\r\n                version=\"1.1\"\r\n                style=\"\r\n                  width: 100%;\r\n                  height: 100%;\r\n                  padding-top: 50%;\r\n                  shape-rendering: geometricPrecision;\r\n                  text-rendering: geometricPrecision;\r\n                  image-rendering: optimizeQuality;\r\n                  fill-rule: evenodd;\r\n                  clip-rule: evenodd;\r\n                \"\r\n                viewBox=\"0 0 323 390\"\r\n                xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n                *ngIf=\"data.geoCnt != 1 && data.model == 'Person'\"\r\n              >\r\n                <g id=\"Layer_x0020_1\">\r\n                  <metadata id=\"CorelCorpID_0Corel-Layer\" />\r\n                  <circle fill=\"#FEFEFE\" cx=\"161.5\" cy=\"166.7\" r=\"161.35\" />\r\n                  <circle\r\n                    [attr.fill]=\"data.watchStatusColor\"\r\n                    cx=\"161.5\"\r\n                    cy=\"166.7\"\r\n                    r=\"146.24\"\r\n                  />\r\n                  <path\r\n                    fill=\"#E6E7E8\"\r\n                    d=\"M280.8 251.3c-30.82,-25.5 -72.9,-41.21 -119.3,-41.21 -46.4,0 -88.48,15.71 -119.3,41.21 26.5,37.3 70.06,61.63 119.3,61.63 49.24,0 92.8,-24.33 119.3,-61.63z\"\r\n                  />\r\n                  <text\r\n                    x=\"81.77\"\r\n                    y=\"384.08\"\r\n                    fill=\"#FEFEFE\"\r\n                    style=\"\r\n                      font-weight: 500;\r\n                      font-size: 55.56px;\r\n                      font-family: 'Roboto Lt';\r\n                    \"\r\n                  >\r\n                    {{ \"Listen\" }}\r\n                  </text>\r\n                  <path\r\n                    fill=\"#FEFEFE\"\r\n                    d=\"M 7.464844 2.828125 C 7.390625 2.828125 7.328125 2.855469 7.273438 2.90625 L 5.851562 4.273438 L 4.730469 4.273438 C 4.65625 4.273438 4.59375 4.296875 4.539062 4.351562 C 4.484375 4.402344 4.457031 4.464844 4.457031 4.535156 L 4.457031 6.109375 C 4.457031 6.179688 4.484375 6.242188 4.539062 6.292969 C 4.59375 6.34375 4.65625 6.371094 4.730469 6.371094 L 5.851562 6.371094 L 7.273438 7.738281 C 7.328125 7.789062 7.390625 7.816406 7.464844 7.816406 C 7.539062 7.816406 7.601562 7.789062 7.65625 7.738281 C 7.710938 7.683594 7.738281 7.625 7.738281 7.550781 L 7.738281 3.09375 C 7.738281 3.019531 7.710938 2.960938 7.65625 2.90625 C 7.601562 2.855469 7.539062 2.828125 7.464844 2.828125 Z M 11.023438 3.589844 C 10.664062 3.0625 10.179688 2.675781 9.582031 2.429688 C 9.542969 2.414062 9.507812 2.40625 9.46875 2.40625 C 9.394531 2.40625 9.332031 2.433594 9.277344 2.484375 C 9.222656 2.539062 9.195312 2.597656 9.195312 2.671875 C 9.195312 2.769531 9.25 2.847656 9.363281 2.910156 C 9.382812 2.921875 9.414062 2.9375 9.457031 2.953125 C 9.503906 2.972656 9.535156 2.988281 9.554688 2.996094 C 9.683594 3.066406 9.800781 3.136719 9.90625 3.207031 C 10.253906 3.457031 10.527344 3.765625 10.726562 4.136719 C 10.921875 4.507812 11.019531 4.902344 11.019531 5.320312 C 11.019531 5.738281 10.921875 6.136719 10.726562 6.507812 C 10.527344 6.878906 10.253906 7.1875 9.90625 7.4375 C 9.800781 7.507812 9.683594 7.578125 9.554688 7.648438 C 9.535156 7.65625 9.503906 7.671875 9.457031 7.6875 C 9.414062 7.707031 9.382812 7.722656 9.363281 7.734375 C 9.25 7.796875 9.195312 7.875 9.195312 7.972656 C 9.195312 8.046875 9.222656 8.105469 9.277344 8.160156 C 9.332031 8.210938 9.394531 8.238281 9.46875 8.238281 C 9.507812 8.238281 9.542969 8.230469 9.582031 8.214844 C 10.179688 7.96875 10.664062 7.582031 11.023438 7.054688 C 11.386719 6.527344 11.566406 5.949219 11.566406 5.320312 C 11.566406 4.695312 11.386719 4.117188 11.023438 3.589844 Z M 10.109375 6.480469 C 10.351562 6.125 10.472656 5.742188 10.472656 5.324219 C 10.472656 4.902344 10.351562 4.519531 10.109375 4.164062 C 9.867188 3.808594 9.546875 3.550781 9.148438 3.390625 C 9.113281 3.378906 9.074219 3.371094 9.039062 3.371094 C 8.964844 3.371094 8.898438 3.398438 8.84375 3.449219 C 8.792969 3.5 8.765625 3.5625 8.765625 3.632812 C 8.765625 3.738281 8.820312 3.820312 8.929688 3.875 C 9.089844 3.953125 9.199219 4.015625 9.253906 4.054688 C 9.464844 4.203125 9.628906 4.386719 9.75 4.609375 C 9.867188 4.832031 9.925781 5.070312 9.925781 5.324219 C 9.925781 5.574219 9.867188 5.8125 9.75 6.035156 C 9.628906 6.257812 9.464844 6.441406 9.253906 6.589844 C 9.199219 6.628906 9.089844 6.691406 8.929688 6.769531 C 8.820312 6.824219 8.765625 6.90625 8.765625 7.011719 C 8.765625 7.082031 8.792969 7.144531 8.84375 7.195312 C 8.898438 7.246094 8.964844 7.273438 9.042969 7.273438 C 9.074219 7.273438 9.113281 7.265625 9.148438 7.253906 C 9.546875 7.089844 9.867188 6.835938 10.109375 6.480469 Z M 9.199219 5.902344 C 9.320312 5.722656 9.378906 5.53125 9.378906 5.324219 C 9.378906 5.113281 9.320312 4.921875 9.199219 4.738281 C 9.078125 4.558594 8.917969 4.433594 8.71875 4.359375 C 8.6875 4.34375 8.652344 4.339844 8.609375 4.339844 C 8.535156 4.339844 8.472656 4.363281 8.417969 4.414062 C 8.363281 4.464844 8.335938 4.527344 8.335938 4.601562 C 8.335938 4.65625 8.355469 4.707031 8.386719 4.746094 C 8.421875 4.785156 8.464844 4.820312 8.511719 4.847656 C 8.558594 4.878906 8.609375 4.910156 8.65625 4.941406 C 8.707031 4.976562 8.746094 5.027344 8.78125 5.089844 C 8.816406 5.152344 8.832031 5.230469 8.832031 5.320312 C 8.832031 5.414062 8.816406 5.492188 8.78125 5.554688 C 8.746094 5.617188 8.707031 5.667969 8.65625 5.703125 C 8.609375 5.734375 8.558594 5.765625 8.511719 5.796875 C 8.464844 5.824219 8.421875 5.859375 8.386719 5.898438 C 8.355469 5.9375 8.335938 5.984375 8.335938 6.042969 C 8.335938 6.117188 8.363281 6.179688 8.417969 6.230469 C 8.472656 6.28125 8.535156 6.304688 8.609375 6.304688 C 8.652344 6.304688 8.6875 6.300781 8.71875 6.285156 C 8.917969 6.207031 9.078125 6.082031 9.199219 5.902344 Z M 9.199219 5.902344 \"\r\n                  />\r\n                  <text\r\n                    x=\"123.68\"\r\n                    y=\"281.26\"\r\n                    fill=\"#373435\"\r\n                    style=\"\r\n                      font-weight: 500;\r\n                      font-size: 41.67px;\r\n                      font-family: 'Roboto Lt';\r\n                    \"\r\n                  >\r\n                    ON\r\n                  </text>\r\n                </g>\r\n              </svg>\r\n              <svg\r\n                xmlns=\"http://www.w3.org/2000/svg\"\r\n                xml:space=\"preserve\"\r\n                width=\"0.323in\"\r\n                height=\"0.39in\"\r\n                version=\"1.1\"\r\n                style=\"\r\n                  width: 100%;\r\n                  height: 100%;\r\n                  padding-top: 50%;\r\n                  shape-rendering: geometricPrecision;\r\n                  text-rendering: geometricPrecision;\r\n                  image-rendering: optimizeQuality;\r\n                  fill-rule: evenodd;\r\n                  clip-rule: evenodd;\r\n                \"\r\n                viewBox=\"0 0 323 390\"\r\n                xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n                *ngIf=\"data.geoCnt != 1 && data.model == 'Person'\"\r\n                (click)=\"listenFromDevice(data.imeiNo, data.simCardNumber)\"\r\n              >\r\n                <circle fill=\"#FEFEFE\" cx=\"161.5\" cy=\"166.7\" r=\"161.35\" />\r\n                <circle fill=\"green\" cx=\"161.5\" cy=\"166.7\" r=\"146.24\" />\r\n                <path\r\n                  fill=\"#E6E7E8\"\r\n                  d=\"M280.8 251.3c-30.82,-25.5 -72.9,-41.21 -119.3,-41.21 -46.4,0 -88.48,15.71 -119.3,41.21 26.5,37.3 70.06,61.63 119.3,61.63 49.24,0 92.8,-24.33 119.3,-61.63z\"\r\n                />\r\n                <g transform=\"matrix(0.999993 0 0 0.999993 -188.559 480.217)\">\r\n                  <text\r\n                    x=\"81.77\"\r\n                    y=\"384.08\"\r\n                    fill=\"#FEFEFE\"\r\n                    style=\"\r\n                      font-weight: 500;\r\n                      font-size: 55.56px;\r\n                      font-family: 'Roboto Lt';\r\n                    \"\r\n                  >\r\n                    {{ \"Listen\" }}\r\n                  </text>\r\n                </g>\r\n                <path\r\n                  fill=\"white\"\r\n                  d=\"M381.86 150.85c-3.77,0 -7.05,1.39 -9.82,4.15l-72.77 72.77 -57.26 0c-3.79,0 -7.06,1.38 -9.84,4.14 -2.76,2.78 -4.14,6.06 -4.14,9.85l0 83.91c0,3.79 1.38,7.07 4.14,9.84 2.78,2.76 6.05,4.14 9.84,4.14l57.26 0 72.77 72.79c2.77,2.76 6.04,4.14 9.82,4.14 3.8,0 7.08,-1.38 9.85,-4.14 2.77,-2.78 4.14,-6.05 4.14,-9.84l0 -237.77c0,-3.79 -1.37,-7.06 -4.14,-9.84 -2.77,-2.76 -6.04,-4.14 -9.85,-4.14l0 0zm182.05 40.54c-18.5,-28.04 -43.13,-48.7 -73.86,-61.96 -1.9,-0.73 -3.79,-1.08 -5.68,-1.08 -3.79,0 -7.08,1.38 -9.84,4.14 -2.77,2.78 -4.16,6.05 -4.16,9.84 0,5.25 2.85,9.55 8.54,12.89 1.02,0.59 2.65,1.36 4.91,2.3 2.26,0.94 3.9,1.71 4.91,2.29 6.71,3.63 12.69,7.36 17.93,11.15 17.92,13.26 31.91,29.79 41.96,49.6 10.05,19.82 15.07,40.86 15.07,63.16 0,22.28 -5.02,43.34 -15.07,63.16 -10.05,19.82 -24.05,36.35 -41.96,49.6 -5.24,3.8 -11.22,7.5 -17.93,11.15 -1.01,0.58 -2.65,1.34 -4.91,2.28 -2.27,0.95 -3.89,1.72 -4.91,2.31 -5.69,3.35 -8.54,7.64 -8.54,12.88 0,3.79 1.39,7.06 4.16,9.85 2.76,2.76 6.05,4.14 9.84,4.14 1.89,0 3.78,-0.36 5.68,-1.09 30.73,-13.26 55.37,-33.91 73.86,-61.96 18.5,-28.04 27.75,-58.82 27.75,-92.32 0,-33.52 -9.25,-64.29 -27.75,-92.33zm-46.77 154.06c12.39,-18.86 18.58,-39.44 18.58,-61.72 0,-22.3 -6.19,-42.89 -18.58,-61.76 -12.38,-18.86 -28.78,-32.59 -49.17,-41.19 -1.88,-0.72 -3.78,-1.09 -5.67,-1.09 -3.78,0 -7.07,1.38 -9.84,4.16 -2.76,2.76 -4.15,6.03 -4.15,9.83 0,5.69 2.85,9.98 8.52,12.9 8.17,4.22 13.7,7.43 16.62,9.6 10.78,7.88 19.19,17.74 25.24,29.62 6.04,11.88 9.07,24.51 9.07,37.93 0,13.39 -3.02,26.03 -9.07,37.9 -6.05,11.88 -14.47,21.75 -25.24,29.61 -2.92,2.2 -8.45,5.4 -16.62,9.61 -5.67,2.93 -8.52,7.22 -8.52,12.91 0,3.78 1.39,7.07 4.15,9.83 2.77,2.77 6.11,4.16 10.05,4.16 1.76,0 3.58,-0.37 5.46,-1.1 20.39,-8.6 36.79,-22.33 49.17,-41.2zm-46.65 -30.81c6.19,-9.54 9.28,-19.85 9.28,-30.91 0,-11.09 -3.1,-21.43 -9.28,-31.05 -6.19,-9.61 -14.38,-16.39 -24.59,-20.33 -1.45,-0.72 -3.28,-1.09 -5.46,-1.09 -3.79,0 -7.07,1.35 -9.83,4.04 -2.77,2.7 -4.16,6.02 -4.16,9.95 0,3.05 0.88,5.63 2.63,7.76 1.73,2.12 3.86,3.94 6.34,5.46 2.46,1.53 4.95,3.2 7.43,5.03 2.48,1.82 4.59,4.4 6.34,7.75 1.73,3.36 2.62,7.51 2.62,12.47 0,4.95 -0.87,9.1 -2.62,12.45 -1.75,3.35 -3.86,5.93 -6.34,7.76 -2.48,1.82 -4.96,3.5 -7.43,5.02 -2.48,1.54 -4.6,3.36 -6.34,5.47 -1.75,2.11 -2.63,4.7 -2.63,7.77 0,3.92 1.39,7.24 4.16,9.93 2.76,2.7 6.04,4.04 9.83,4.04 2.18,0 4.01,-0.36 5.46,-1.08 10.21,-4.09 18.4,-10.89 24.59,-20.44l0 0z\"\r\n                />\r\n                <g transform=\"matrix(0.999993 0 0 0.999993 -77.5693 219.058)\">\r\n                  <text x=\"123.68\" y=\"281.26\" fill=\"#373435\">ON</text>\r\n                </g>\r\n              </svg>\r\n              <svg\r\n                xmlns=\"http://www.w3.org/2000/svg\"\r\n                xml:space=\"preserve\"\r\n                width=\"8.1968mm\"\r\n                height=\"9.635mm\"\r\n                version=\"1.1\"\r\n                style=\"\r\n                  shape-rendering: geometricPrecision;\r\n                  text-rendering: geometricPrecision;\r\n                  image-rendering: optimizeQuality;\r\n                  fill-rule: evenodd;\r\n                  clip-rule: evenodd;\r\n                \"\r\n                viewBox=\"0 0 819.68 963.5\"\r\n                xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n                *ngIf=\"data.geoCnt != 1 && data.model == 'Person'\"\r\n              >\r\n                <g id=\"Layer_x0020_1\">\r\n                  <metadata id=\"CorelCorpID_0Corel-Layer\" />\r\n                  <circle fill=\"#FEFEFE\" cx=\"409.85\" cy=\"409.83\" r=\"409.83\" />\r\n                  <circle fill=\"green\" cx=\"409.85\" cy=\"409.83\" r=\"371.45\" />\r\n                  <path\r\n                    fill=\"#E6E7E8\"\r\n                    d=\"M712.86 624.71c-78.28,-64.77 -185.17,-104.67 -303.02,-104.67 -117.86,0 -224.74,39.9 -303.02,104.67 67.31,94.73 177.95,156.53 303.02,156.53 125.07,0 235.71,-61.8 303.02,-156.53z\"\r\n                  />\r\n                  <g transform=\"matrix(0.999993 0 0 0.999993 -188.559 480.217)\">\r\n                    <text\r\n                      x=\"409.84\"\r\n                      y=\"481.75\"\r\n                      fill=\"#666666\"\r\n                      style=\"\r\n                        font-weight: normal;\r\n                        font-size: 141.12px;\r\n                        font-family: 'Arial';\r\n                      \"\r\n                    >\r\n                      {{ \"Listen\" }}\r\n                    </text>\r\n                  </g>\r\n                  <path\r\n                    fill=\"white\"\r\n                    d=\"M381.86 150.85c-3.77,0 -7.05,1.39 -9.82,4.15l-72.77 72.77 -57.26 0c-3.79,0 -7.06,1.38 -9.84,4.14 -2.76,2.78 -4.14,6.06 -4.14,9.85l0 83.91c0,3.79 1.38,7.07 4.14,9.84 2.78,2.76 6.05,4.14 9.84,4.14l57.26 0 72.77 72.79c2.77,2.76 6.04,4.14 9.82,4.14 3.8,0 7.08,-1.38 9.85,-4.14 2.77,-2.78 4.14,-6.05 4.14,-9.84l0 -237.77c0,-3.79 -1.37,-7.06 -4.14,-9.84 -2.77,-2.76 -6.04,-4.14 -9.85,-4.14l0 0zm182.05 40.54c-18.5,-28.04 -43.13,-48.7 -73.86,-61.96 -1.9,-0.73 -3.79,-1.08 -5.68,-1.08 -3.79,0 -7.08,1.38 -9.84,4.14 -2.77,2.78 -4.16,6.05 -4.16,9.84 0,5.25 2.85,9.55 8.54,12.89 1.02,0.59 2.65,1.36 4.91,2.3 2.26,0.94 3.9,1.71 4.91,2.29 6.71,3.63 12.69,7.36 17.93,11.15 17.92,13.26 31.91,29.79 41.96,49.6 10.05,19.82 15.07,40.86 15.07,63.16 0,22.28 -5.02,43.34 -15.07,63.16 -10.05,19.82 -24.05,36.35 -41.96,49.6 -5.24,3.8 -11.22,7.5 -17.93,11.15 -1.01,0.58 -2.65,1.34 -4.91,2.28 -2.27,0.95 -3.89,1.72 -4.91,2.31 -5.69,3.35 -8.54,7.64 -8.54,12.88 0,3.79 1.39,7.06 4.16,9.85 2.76,2.76 6.05,4.14 9.84,4.14 1.89,0 3.78,-0.36 5.68,-1.09 30.73,-13.26 55.37,-33.91 73.86,-61.96 18.5,-28.04 27.75,-58.82 27.75,-92.32 0,-33.52 -9.25,-64.29 -27.75,-92.33zm-46.77 154.06c12.39,-18.86 18.58,-39.44 18.58,-61.72 0,-22.3 -6.19,-42.89 -18.58,-61.76 -12.38,-18.86 -28.78,-32.59 -49.17,-41.19 -1.88,-0.72 -3.78,-1.09 -5.67,-1.09 -3.78,0 -7.07,1.38 -9.84,4.16 -2.76,2.76 -4.15,6.03 -4.15,9.83 0,5.69 2.85,9.98 8.52,12.9 8.17,4.22 13.7,7.43 16.62,9.6 10.78,7.88 19.19,17.74 25.24,29.62 6.04,11.88 9.07,24.51 9.07,37.93 0,13.39 -3.02,26.03 -9.07,37.9 -6.05,11.88 -14.47,21.75 -25.24,29.61 -2.92,2.2 -8.45,5.4 -16.62,9.61 -5.67,2.93 -8.52,7.22 -8.52,12.91 0,3.78 1.39,7.07 4.15,9.83 2.77,2.77 6.11,4.16 10.05,4.16 1.76,0 3.58,-0.37 5.46,-1.1 20.39,-8.6 36.79,-22.33 49.17,-41.2zm-46.65 -30.81c6.19,-9.54 9.28,-19.85 9.28,-30.91 0,-11.09 -3.1,-21.43 -9.28,-31.05 -6.19,-9.61 -14.38,-16.39 -24.59,-20.33 -1.45,-0.72 -3.28,-1.09 -5.46,-1.09 -3.79,0 -7.07,1.35 -9.83,4.04 -2.77,2.7 -4.16,6.02 -4.16,9.95 0,3.05 0.88,5.63 2.63,7.76 1.73,2.12 3.86,3.94 6.34,5.46 2.46,1.53 4.95,3.2 7.43,5.03 2.48,1.82 4.59,4.4 6.34,7.75 1.73,3.36 2.62,7.51 2.62,12.47 0,4.95 -0.87,9.1 -2.62,12.45 -1.75,3.35 -3.86,5.93 -6.34,7.76 -2.48,1.82 -4.96,3.5 -7.43,5.02 -2.48,1.54 -4.6,3.36 -6.34,5.47 -1.75,2.11 -2.63,4.7 -2.63,7.77 0,3.92 1.39,7.24 4.16,9.93 2.76,2.7 6.04,4.04 9.83,4.04 2.18,0 4.01,-0.36 5.46,-1.08 10.21,-4.09 18.4,-10.89 24.59,-20.44l0 0z\"\r\n                  />\r\n                  <g transform=\"matrix(0.999993 0 0 0.999993 -77.5693 219.058)\">\r\n                    <text\r\n                      x=\"409.84\"\r\n                      y=\"481.75\"\r\n                      style=\"\r\n                        font-weight: normal;\r\n                        font-size: 105.84px;\r\n                        font-family: 'Arial';\r\n                      \"\r\n                    >\r\n                      ON\r\n                    </text>\r\n                  </g>\r\n                </g>\r\n              </svg>\r\n            </ion-row>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <div class=\"col timediff ng-binding\">{{ data.timeDifference }}</div>\r\n        </ion-row>\r\n        <ion-row align-items-center *ngIf=\"data.model !== 'Person'\">\r\n          <ion-col\r\n            size=\"3\"\r\n            class=\"DashboardButtons\"\r\n            *ngIf=\"data.model != 'Person'\"\r\n            routerDirection=\"forward\"\r\n          >\r\n            <ion-img\r\n              (click)=\"armoronFunctionality('livetrack', data)\"\r\n              class=\"imgbuttons\"\r\n              src=\"assets/Armoron/track.svg\"\r\n              style=\"left: 35%\"\r\n            ></ion-img>\r\n            <br />Live Track\r\n          </ion-col>\r\n\r\n          <ion-col size=\"3\" class=\"DashboardButtons\" routerDirection=\"forward\">\r\n            <ion-img\r\n              class=\"imgbuttons\"\r\n              (click)=\"armoronFunctionality('trackHistory', data)\"\r\n              src=\"assets/Armoron/track.svg\"\r\n              style=\"left: 34%\"\r\n              *ngIf=\"data.geoCnt != 1\"\r\n            ></ion-img>\r\n            <br />Track History\r\n          </ion-col>\r\n\r\n          <ion-col size=\"3\" class=\"DashboardButtons\">\r\n            <ion-img\r\n              (click)=\"armoronFunctionality('alerts', data)\"\r\n              class=\"imgbuttons\"\r\n              src=\"assets/Armoron/alerts.svg\"\r\n              style=\"left: 36%\"\r\n              *ngIf=\"data.geoCnt != 1\"\r\n            ></ion-img>\r\n            <br />{{ \"Alerts\" }}\r\n          </ion-col>\r\n          <!-- <ion-col size=\"3\" class=\"DashboardButtons\">\r\n                        <ion-img [routerLink]=\"['/reports',data.plateNo]\" class=\"imgbuttons\" src=\"assets/Armoron/Diagnosis.svg\" style=\"left:34%\"\r\n                            *ngIf=\"data.geoCnt != 1\"></ion-img>\r\n                        <br>Reports\r\n                    </ion-col> -->\r\n          <ion-col size=\"3\" class=\"DashboardButtons\">\r\n            <ion-img\r\n              [routerLink]=\"['/maintanence']\"\r\n              class=\"imgbuttons\"\r\n              src=\"assets/Armoron/workshop.svg\"\r\n              style=\"left: 34%\"\r\n              *ngIf=\"data.geoCnt != 1\"\r\n            ></ion-img>\r\n            <br />Maintentance\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row *ngIf=\"data.model !== 'Person'\">\r\n          <ion-col\r\n            size=\"3\"\r\n            class=\"DashboardButtons\"\r\n            (click)=\"armoronFunctionality('settings', data)\"\r\n          >\r\n            <ion-img\r\n              class=\"imgbuttons\"\r\n              src=\"assets/Armoron/setting.svg\"\r\n              style=\"left: 35%\"\r\n              *ngIf=\"data.geoCnt != 1\"\r\n            ></ion-img>\r\n            <ion-img\r\n              class=\"imgbuttons\"\r\n              src=\"assets/Armoron/settingDisabled.svg\"\r\n              style=\"left: 35%\"\r\n              *ngIf=\"data.geoCnt == 1\"\r\n            ></ion-img>\r\n            <br />Settings\r\n          </ion-col>\r\n          <ion-col\r\n            size=\"3\"\r\n            class=\"DashboardButtons\"\r\n            (click)=\"armoronFunctionality('station', data)\"\r\n            [routerLink]=\"['/stations', 'Fuel']\"\r\n          >\r\n            <ion-img\r\n              class=\"imgbuttons\"\r\n              src=\"assets/Armoron/fuel station.svg\"\r\n              style=\"left: 39%\"\r\n            ></ion-img>\r\n            <br />Fuel station\r\n          </ion-col>\r\n          <ion-col\r\n            size=\"3\"\r\n            class=\"DashboardButtons\"\r\n            (click)=\"armoronFunctionality('workshop', data)\"\r\n            [routerLink]=\"['/stations', 'Vehicle Repair']\"\r\n          >\r\n            <ion-img\r\n              class=\"imgbuttons\"\r\n              src=\"assets/Armoron/workshop.svg\"\r\n              style=\"left: 34%\"\r\n            ></ion-img>\r\n            <br />Workshop\r\n          </ion-col>\r\n          <ion-col size=\"3\" class=\"DashboardButtons\" routerDirection=\"forward\">\r\n            <ion-img\r\n              (click)=\"armoronFunctionality('geofence', data)\"\r\n              class=\"imgbuttons\"\r\n              src=\"assets/Armoron/geoFence.svg\"\r\n              style=\"left: 37%\"\r\n            ></ion-img>\r\n            <br />Geofence\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row align-items-center *ngIf=\"data.model == 'Person'\">\r\n          <ion-col\r\n            size=\"2.4\"\r\n            class=\"DashboardButtons\"\r\n            [attr.disabled]=\"\r\n              data.status == 'Yet_to_transmit' || data.geoCnt == 1\r\n            \"\r\n            [routerLink]=\"['/track-tabs/track', data.vin]\"\r\n            routerDirection=\"forward\"\r\n          >\r\n            <ion-img\r\n              class=\"imgbuttons\"\r\n              src=\"assets/Armoron/track.svg\"\r\n              style=\"left: 35%\"\r\n              *ngIf=\"data.geoCnt != 1 && data.status != 'Yet_to_transmit'\"\r\n            ></ion-img>\r\n            <ion-img\r\n              class=\"imgbuttons\"\r\n              src=\"assets/Armoron/trackDisabled.svg\"\r\n              style=\"left: 35%\"\r\n              *ngIf=\"data.geoCnt == 1 || data.status == 'Yet_to_transmit'\"\r\n            ></ion-img>\r\n            <br />Live track\r\n          </ion-col>\r\n          <ion-col\r\n            size=\"2.4\"\r\n            class=\"DashboardButtons\"\r\n            [attr.disabled]=\"data.geoCnt == 1\"\r\n            [routerLink]=\"['/alerts/', data.vin]\"\r\n          >\r\n            <ion-img\r\n              class=\"imgbuttons\"\r\n              src=\"assets/Armoron/alerts.svg\"\r\n              style=\"left: 36%\"\r\n              *ngIf=\"data.geoCnt != 1\"\r\n            ></ion-img>\r\n            <ion-img\r\n              class=\"imgbuttons\"\r\n              src=\"assets/Armoron/alertsDisabled.svg\"\r\n              style=\"left: 36%\"\r\n              *ngIf=\"data.geoCnt == 1\"\r\n            ></ion-img>\r\n            <br />Alerts\r\n          </ion-col>\r\n          <ion-col\r\n            size=\"2.4\"\r\n            class=\"DashboardButtons\"\r\n            [attr.disabled]=\"data.geoCnt == 1\"\r\n            [routerLink]=\"[\r\n              '/nearby/',\r\n              'Police Station',\r\n              data.latitude,\r\n              data.longitude,\r\n              data.vin\r\n            ]\"\r\n            routerDirection=\"forward\"\r\n          >\r\n            <ion-img\r\n              class=\"imgbuttons\"\r\n              src=\"assets/Armoron/Armoron/policeStation.svg\"\r\n              style=\"left: 34%\"\r\n              *ngIf=\"data.geoCnt != 1\"\r\n            ></ion-img>\r\n            <ion-img\r\n              class=\"imgbuttons\"\r\n              src=\"assets/Armoron/Armoron/policeStationDisabled.svg\"\r\n              style=\"left: 34%\"\r\n              *ngIf=\"data.geoCnt == 1\"\r\n            ></ion-img>\r\n            <br />{{ \"Police\" }}\r\n          </ion-col>\r\n          <ion-col\r\n            size=\"2.4\"\r\n            class=\"DashboardButtons\"\r\n            [attr.disabled]=\"data.geoCnt == 1\"\r\n            [routerLink]=\"['/setting/', data.vin, data.model]\"\r\n          >\r\n            <ion-img\r\n              class=\"imgbuttons\"\r\n              src=\"assets/Armoron/Armoron/setting.svg\"\r\n              style=\"left: 35%\"\r\n              *ngIf=\"data.geoCnt != 1\"\r\n            ></ion-img>\r\n            <ion-img\r\n              class=\"imgbuttons\"\r\n              src=\"assets/Armoron/Armoron/settingDisabled.svg\"\r\n              style=\"left: 35%\"\r\n              *ngIf=\"data.geoCnt == 1\"\r\n            ></ion-img>\r\n            <br />{{ \"Settings\" }}\r\n          </ion-col>\r\n          <ion-col\r\n            size=\"2.4\"\r\n            class=\"DashboardButtons\"\r\n            [attr.disabled]=\"\r\n              data.status == 'Yet_to_transmit' || data.geoCnt == 1\r\n            \"\r\n            [routerLink]=\"['/geo-fence/', data.vin]\"\r\n            routerDirection=\"forward\"\r\n          >\r\n            <ion-img\r\n              class=\"imgbuttons\"\r\n              src=\"assets/Armoron/Armoron/geoFence.svg\"\r\n              style=\"left: 37%\"\r\n              *ngIf=\"data.geoCnt != 1 && data.status != 'Yet_to_transmit'\"\r\n            ></ion-img>\r\n            <ion-img\r\n              class=\"imgbuttons\"\r\n              src=\"assets/Armoron/Armoron/geoFenceDisabled.svg\"\r\n              style=\"left: 37%\"\r\n              *ngIf=\"data.geoCnt == 1 || data.status == 'Yet_to_transmit'\"\r\n            ></ion-img>\r\n            <br />{{ \"Geo_Fence\" }}\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row style=\"margin-top: 3%; margin-left: 2%\">\r\n          <p\r\n            style=\"color: white; font-size: 3vw; text-decoration: underline\"\r\n            (click)=\"showLocation(data)\"\r\n          >\r\n            {{ \"Location\" }} : {{ data.location }}\r\n          </p>\r\n          <p\r\n            style=\"color: white; font-size: 3vw; text-decoration: underline\"\r\n            *ngIf=\"!data.location\"\r\n            (click)=\"showLocation(data)\"\r\n          >\r\n            {{ \"click here to locate address\" }}\r\n          </p>\r\n        </ion-row>\r\n      </ion-card>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Web  -->\r\n  <!-- <div *ngIf=\"myPlatform == 'desktop'\">\r\n        <ion-row style=\"height: 35px;\">\r\n            <ion-col size=10.5 style=\"text-align: center;     background: white;\r\n                position: fixed;\r\n                z-index: 11;\r\n                height: 43px;\">\r\n           \r\n\r\n            </ion-col>\r\n            <ion-col style=\"align-self: center; position: fixed;\r\n                right: 117px; z-index: 12;\" size=0.5>\r\n                <ion-row style=\"align-self: center;     float: right;\">\r\n                    <ion-img src=\"assets/dashboard_background/bell.png\" style=\"width:22px; height:22px;\"></ion-img>\r\n                    <ion-badge color=\"danger\"\r\n                        style=\"position: absolute; align-self: center;margin-left: -35px; font-size: 9px; left: 76px; color: white; font-weight: bold;  top: 0px;\">\r\n                        {{alertCount}}\r\n                    </ion-badge>\r\n                </ion-row>\r\n            </ion-col>\r\n            <ion-col style=\"text-align: -webkit-center; position: fixed; right: 5px; z-index: 15;\" size=1>\r\n                <ion-img class=\"logo\" [src]=\"app.logo\"></ion-img>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row style=\"    margin-top: 7px;\">\r\n            <ion-col size=\"2.5\" style=\"   margin-top: 7px;max-width: 20%; margin: 0px;padding: 0px;\">\r\n                <ion-row>\r\n                    <div style=\"position:absolute;top: 2%;left: 0px;font-size: 25px;z-index: 16;\"\r\n                        (click)=\"swipePrevious()\">\r\n                        <div class=\"arrowPrevious\">\r\n                        </div>\r\n                    </div>\r\n                    <div (click)=\"swipeNext()\">\r\n                        <div class=\"arrowNext\">\r\n                        </div>\r\n                    </div>\r\n                 \r\n                    <div class=\"emptyClearleft\">\r\n                    </div>\r\n                    <div class=\"emptyClear\">\r\n                    </div>\r\n                  <ion-slides [options]=\"slideOpts\" #mySlider\r\n                  style=\"text-align: -webkit-center;\r\n            position: fixed;left: 13px;z-index: 12;background: white;width:19%;border-top:5px solid rgb(108, 42, 132)\">\r\n                        <ion-slide class=\"tooltip statusBar\" style=\"background-color:#989aa2 ; \"\r\n                            (click)=\"changeGridView({'type':'All', 'count': vehicleCount.Total})\">\r\n                            {{vehicleCount.Total}}\r\n                            <span class=\"tooltiptextinitial\">Total</span>\r\n                        </ion-slide>\r\n                        <ion-slide *ngIf=\"loginData.includes('Running')\" class=\"tooltip statusBar\"\r\n                            style=\"background-color:#1eb15d;\"\r\n                            (click)=\"changeGridView({'type':'Running', 'count': vehicleCount.Running})\">\r\n                            {{vehicleCount.Running}}\r\n                            <span class=\"tooltiptext\">Running</span>\r\n                        </ion-slide>\r\n                        <ion-slide *ngIf=\"loginData.includes('Stop')\" class=\"tooltip statusBar\"\r\n                            style=\"background-color:#FF0000 ;\"\r\n                            (click)=\"changeGridView({'type':'Stop', 'count': vehicleCount.Stop})\">\r\n                            {{vehicleCount.Stop}}\r\n                            <span class=\"tooltiptext\">Stop</span>\r\n                        </ion-slide>\r\n                        <ion-slide *ngIf=\"loginData.includes('HighTemp')\" class=\"tooltip statusBar\"\r\n                            style=\"background-color:#FF0000 ;\"\r\n                            (click)=\"changeGridView({'type':'HighTemp', 'count': vehicleCount.HighTemp})\">\r\n                            {{vehicleCount.HighTemp}}\r\n                            <span class=\"tooltiptext\">High temperature</span>\r\n                        </ion-slide>\r\n                        <ion-slide *ngIf=\"loginData.includes('Idle')\" class=\"tooltip statusBar\"\r\n                            style=\"background-color:#1f5baa ;\"\r\n                            (click)=\"changeGridView({'type':'Idle', 'count': vehicleCount.Idle})\">\r\n                            {{vehicleCount.Idle}}\r\n                            <span class=\"tooltiptext\">Idle</span>\r\n                        </ion-slide>\r\n                        <ion-slide *ngIf=\"loginData.includes('Geofence')\" class=\"tooltip statusBar\"\r\n                            style=\"background-color:#1f5baa ;\"\r\n                            (click)=\"changeGridView({'type':'Geofence', 'count': vehicleCount.Geofence})\">\r\n                            {{vehicleCount.Geofence}}\r\n                            <span class=\"tooltiptext\">Geofence</span>\r\n                        </ion-slide>\r\n                        <ion-slide *ngIf=\"loginData.includes('PowerFail')\" class=\"tooltip statusBar\"\r\n                            style=\"background-color:#724040 ;\"\r\n                            (click)=\"changeGridView({'type':'PowerFail', 'count': vehicleCount['PowerFail']})\">\r\n                            {{vehicleCount['PowerFail']}}\r\n                            <span class=\"tooltiptext\">Power fail</span>\r\n                        </ion-slide>\r\n                        <ion-slide *ngIf=\"loginData.includes('No Transmission')\" class=\"tooltip statusBar\"\r\n                            style=\"background-color:#000000 ;\"\r\n                            (click)=\"changeGridView({'type':'No Transmission', 'count': vehicleCount['No Transmission']})\">\r\n                            {{vehicleCount['No Transmission']}}\r\n                            <span class=\"tooltiptext\">No Transmit</span>\r\n                        </ion-slide>\r\n                        <ion-slide *ngIf=\"loginData.includes('Overspeed')\" class=\"tooltip statusBar\"\r\n                            style=\"background-color:#f28918 ;\"\r\n                            (click)=\"changeGridView({'type':'Overspeed', 'count': vehicleCount.Overspeed})\">\r\n                            {{vehicleCount.Overspeed}}\r\n                            <span class=\"tooltiptext\">Overspeed</span>\r\n                        </ion-slide>\r\n                        <ion-slide *ngIf=\"loginData.includes('DoorOpen')\" class=\"tooltip statusBar\"\r\n                            style=\"background-color:#FF851B ;\"\r\n                            (click)=\"changeGridView({'type':'DoorOpen', 'count': vehicleCount.DoorOpen})\">\r\n                            {{vehicleCount.DoorOpen}}\r\n                            <span class=\"tooltiptext\">Door open</span>\r\n                        </ion-slide>\r\n                        <ion-slide *ngIf=\"loginData.includes('Towed')\" class=\"tooltip statusBar\"\r\n                            style=\"background-color:#c200b8;\"\r\n                            (click)=\"changeGridView({'type':'Towed', 'count': vehicleCount.Towed})\">\r\n                            {{vehicleCount.Towed}}\r\n                            <span class=\"tooltiptext\">Towed</span>\r\n                        </ion-slide>\r\n                        <ion-slide *ngIf=\"loginData.includes('Yet_to_transmit')\" class=\"tooltip statusBar\"\r\n                            style=\"background-color:#7d410f;\"\r\n                            (click)=\"changeGridView({'type':'Yet_to_transmit', 'count': vehicleCount.Yet_to_transmit})\">\r\n                            {{vehicleCount.Yet_to_transmit}}\r\n                            <span class=\"tooltiptext\">Yet to transmit</span>\r\n                        </ion-slide>\r\n                        <ion-slide *ngIf=\"loginData.includes('Online')\" class=\"tooltip statusBar\"\r\n                            style=\"background-color:#00E1BC;\"\r\n                            (click)=\"changeGridView({'type':'Online', 'count': vehicleCount.Online})\">\r\n                            {{vehicleCount.Online}}\r\n                            <span class=\"tooltiptext\">Online</span>\r\n                        </ion-slide>\r\n                    </ion-slides>\r\n                </ion-row>\r\n\r\n                <ion-row style=\"width: 20.9%;\r\n                        position: fixed;\r\n                        padding: 2px;\r\n                        z-index: 1;\r\n                        top: 86px;\r\n                        background: white;\">\r\n                    <ion-col style=\"padding: 0px; \" size=10>\r\n                        <ion-searchbar [(ngModel)]=\"searchInput\" placeholder=\"Search\">\r\n                        </ion-searchbar>\r\n                    </ion-col>\r\n                    <ion-col size=1 style=\"align-self: center;\r\n                            text-align: center; padding: 0px;\">\r\n                        <ion-icon style=\"font-size: 25px;\" (click)=\"openFilter()\" [name]=\"filterIcon\"></ion-icon>\r\n                    </ion-col>\r\n                    <ion-col (click)=\"doRefresh($event)\" size=1 style=\"align-self: center;\r\n                            text-align: center; padding: 0px;\">\r\n                        <ion-icon style=\"\r\n                                     font-size: 25px;\" name=\"md-refresh\"></ion-icon>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row style=\"width: 21%;\r\n                        position: fixed;\r\n                        z-index: 1;\r\n                        top: 129px;\r\n                        background: white;\" *ngIf=\"filterIcon == 'md-close'\">\r\n\r\n                    <ion-col color=\"light\" (click)=\"filterPage('watchMode')\">\r\n                        <svg width=\"35\" height=\"35\" viewBox=\"0 0 800 800\"\r\n                            style=\"shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd\">\r\n                            <path attr.fill=\"{{watchFilter==true ? '#1d93ed' : 'black'}}\"\r\n                                d=\"M430 586.53c-38.76,0 -72.57,-8.35 -101.64,-30.26 -23.48,-17.69 -42.12,-38.46 -54.23,-65.66 -25.5,-57.32 -16.5,-119.47 21.29,-169.22 5.71,-7.52 14.31,-14.96 20.32,-20.98 3.66,-3.66 6.82,-5.64 11.1,-8.87 45.82,-34.58 114.25,-42.08 166.23,-15.87 26.01,13.11 22.96,12.83 41.25,28.02 2.68,2.23 3.36,2.15 5.71,4.95 21.61,25.86 34.09,41.43 42.37,77.52 6.04,26.29 6.13,44.87 0.72,71.06 -5.44,26.3 -15.66,47.2 -32.06,67.85 -3.66,4.61 -6.09,6.85 -9.91,11.41 -4.97,5.94 -14.96,13.85 -21.32,18.65 -8.52,6.42 -15.1,9.99 -24.99,14.97 -16.11,8.1 -41.32,16.43 -64.84,16.43zm-99.92 -203.83c6.3,3.33 13.53,5.52 20.45,8.87 6.9,3.34 13.46,5.7 19.95,9.35l38.2 21.74c-7.98,10.9 -69.47,36.48 -78.6,41.3 4.87,20.89 32.99,45.12 56.14,54.44 25.57,10.31 56.37,9.23 80.65,-2.91 50.26,-25.13 71.85,-78.41 50.51,-132.25 -9.01,-22.73 -28.38,-40.94 -49.62,-51.62 -42.27,-21.25 -92.62,-9.51 -123.98,27.48 -3.87,4.57 -12.27,17.49 -13.7,23.6zm-247.79 41.3l14.63 18.67c4.77,6.26 10.17,11.51 15.24,18.07 22.98,29.66 86.65,83.79 113.99,101.83l53.31 30.62c34.19,17.15 88.84,34.64 131.89,34.64 55.33,0 83.37,-4.63 132.85,-24.35 23.09,-9.21 55.22,-26.56 75.53,-40.37l47.71 -36.22c28.49,-25.39 34.46,-31.2 58.63,-57.28l30.51 -36.1c2.23,-2.99 5.13,-7.56 7.8,-9.51 -2.05,-3.07 -4.1,-6.53 -6.46,-9.53 -15.48,-19.68 -54.17,-64.69 -72.14,-78.4l-36.15 -30.46c-6.52,-5.21 -11.83,-9.35 -19,-14.3 -22.47,-15.51 -37.38,-24.8 -62.53,-37.39 -34.95,-17.51 -88.82,-35.08 -132.77,-35.08 -55.33,0 -83.37,4.62 -132.86,24.34 -8.3,3.32 -15.62,6.58 -23.01,10.29 -32.56,16.33 -73.09,42.11 -100.23,66.3 -43.92,39.15 -55.7,51.86 -89.88,93.97 -2.86,3.52 -4.72,6.76 -7.06,10.26z\" />\r\n                        </svg>\r\n                    </ion-col>\r\n                    <ion-col color=\"light\" (click)=\"filterPage('battery')\" style=\"align-self: center;\">\r\n                        <svg width=\"25\" height=\"25\" viewBox=\"0 0 800 800\"\r\n                            style=\"shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd\">\r\n                            <path attr.fill=\"{{batteryStatusFilter == true ? '#1d93ed' : 'black'}}\"\r\n                                d=\"M-0 248.48l0 486.31 846.66 -0.01 0 -486.3 -846.66 0zm87.77 -55.22l205.61 0 0 -81.39 -205.61 0 0 81.39zm465.53 0l205.61 0 0 -81.39 -205.61 0 0 81.39zm-297.64 259.53l0 0 -37.49 0 0 37.48 -55.21 0.01 0 -37.48 -37.49 -0.01 0 -55.22 37.49 0 0 -37.48 55.21 0 0 37.48 37.49 0 0 55.22zm193.28 199.43l-51.22 -20.62 37.76 -93.8 -106.05 0 68.29 -169.63 51.22 20.62 -37.76 93.8 106.05 -0.01 -68.29 169.64zm272.25 -199.43l-130.19 0 0 -55.22 130.19 0 0 55.22z\" />\r\n                        </svg>\r\n                    </ion-col>\r\n                    <ion-col color=\"light\" (click)=\"filterPage('gsm')\" style=\"align-self: center;\">\r\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" xml:space=\"preserve\" width=\"7mm\" height=\"7mm\"\r\n                            version=\"1.1\"\r\n                            style=\"shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd\"\r\n                            viewBox=\"0 0 846.66 846.66\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n                            <path attr.fill=\"{{gsmStatusFilter == true ? '#1d93ed' : 'black'}}\"\r\n                                d=\"M273.84 700.03c0,10.28 3.11,13.39 13.38,13.39l124.95 0 0 -98.17 -138.33 0 0 84.78zm182.96 -232.05l0 232.05c0,10.28 3.1,13.39 13.39,13.39l124.95 0 0 -258.82 -124.95 0c-10.29,0 -13.39,3.1 -13.39,13.38zm-254.36 245.44l40.16 0 0 -374.85c0,-24.95 99.44,-157.07 124.95,-205.27l-298.98 0 104.46 163.29c21.32,30.97 16.17,25.19 16.03,73.22l-0.39 312.76c-0.13,16.63 -3.44,30.85 13.77,30.85zm21.17 -403.47l-111.3 -159.72 203.51 0 -92.21 159.72zm420.61 403.47l133.87 0 0 -401.62c0,-10.29 -3.1,-13.39 -13.37,-13.39l-120.5 0 0 415.01z\" />\r\n                        </svg>\r\n                    </ion-col>\r\n                    <ion-col color=\"light\" (click)=\"filterPage('gps')\" style=\"align-self: center;\">\r\n                        <ion-icon style='font-size: 25px;'\r\n                            [ngClass]=\"{selecedFabIcon : gpsFilter === true, notSelecedFabIcon : gpsFilter === false}\"\r\n                            name=\"md-locate\"></ion-icon>\r\n                    </ion-col>\r\n                    <ion-col color=\"light\" (click)=\"filterPage('subscription')\" style=\"align-self: center;\">\r\n                        <ion-icon style='font-size: 25px;'\r\n                            [ngClass]=\"{selecedFabIcon : subscriptionFilter === true, notSelecedFabIcon : subscriptionFilter === false}\"\r\n                            name=\"logo-usd\"></ion-icon>\r\n                    </ion-col>\r\n\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-virtual-scroll style=\"top: 88px;\"\r\n                        [items]=\"dashboardData | search:searchInput | status: filterValue : count : statusGrid: manualFilter\"\r\n                        [trackBy]=\"identify\"  [itemHeight]=\"itemHeightFn\"\r\n                       >\r\n                        <ion-card *virtualItem=\"let data;\" style=\"padding:0px; margin: 10px 3px 12px 2px;\"\r\n                            disabled='{{data.warrantyExpiry}}'\r\n                            [ngClass]='{\"runningCardBorder\": data.status === \"Running\" || data.status === \"Good\", \"stopCardBorder\":data.status === \"Stop\" || data.status === \"HighTemp\", \"idleCardBorder\":data.status === \"Idle\" || data.status === \"Geofence\" ,\"doorOpen\": data.status === \"DoorOpen\", \"noTransCardBorder\":data.status === \"No Transmission\",\"powerFail\": data.status === \"PowerFail\" , \"overspeedCardBorder\": data.status === \"Overspeed\" , \"towedCardBorder\": data.status === \"Towed\",\"yetToTransmitCardBorder\": data.status === \"Yet_to_transmit\", \"onlineCardBorder\": data.status === \"Online\", \"active\": data.vin === selectedVin.vin}'>\r\n                            <ion-card-content style=\"padding:0px;\">\r\n                                <app-gridview-card (click)=\"showModal(data)\" [commonData]='data'></app-gridview-card>\r\n\r\n                                <ion-row>\r\n\r\n                                    <ion-row (click)='showLocation(data)' class=\"address\">\r\n                                        <ion-col size=12 style=\"padding-top: 0px; padding-bottom: 0px;\">\r\n                                            <ion-row *ngIf=\"data.location\">\r\n                                                {{data.location}}\r\n                                            </ion-row>\r\n                                            <ion-row *ngIf=\"!data.location\">\r\n                                                Click For Location\r\n                                            </ion-row>\r\n                                        </ion-col>\r\n                                    </ion-row>\r\n                                </ion-row>\r\n                            </ion-card-content>\r\n\r\n                        </ion-card>\r\n                    </ion-virtual-scroll>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadMoreData($event)\">\r\n                        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\r\n                        </ion-infinite-scroll-content>\r\n                    </ion-infinite-scroll>\r\n                </ion-row>\r\n\r\n\r\n            </ion-col> -->\r\n  <div *ngIf=\"myPlatform == 'desktop'\">\r\n    <ion-row style=\"height: 35px\">\r\n      <ion-col\r\n        size=\"10.5\"\r\n        style=\"\r\n          text-align: left;\r\n          background: white;\r\n          position: fixed;\r\n          z-index: 11;\r\n          height: 43px;\r\n        \"\r\n      >\r\n        <ion-row>\r\n          <ion-col style=\"align-self: start; margin-left: 24%\">\r\n            <ion-label class=\"headercolour\"> Grid view </ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <div id=\"filter-row\" *ngIf=\"filterIconClose\">\r\n          <ion-button class=\"filter-btn\" (click)=\"filterPage('watchMode')\">\r\n            <svg\r\n              width=\"35\"\r\n              height=\"35\"\r\n              viewBox=\"0 0 800 800\"\r\n              style=\"\r\n                shape-rendering: geometricPrecision;\r\n                text-rendering: geometricPrecision;\r\n                image-rendering: optimizeQuality;\r\n                fill-rule: evenodd;\r\n                clip-rule: evenodd;\r\n              \"\r\n            >\r\n              <path\r\n                attr.fill=\"{{ watchFilter == true ? '#1d93ed' : 'black' }}\"\r\n                d=\"M430 586.53c-38.76,0 -72.57,-8.35 -101.64,-30.26 -23.48,-17.69 -42.12,-38.46 -54.23,-65.66 -25.5,-57.32 -16.5,-119.47 21.29,-169.22 5.71,-7.52 14.31,-14.96 20.32,-20.98 3.66,-3.66 6.82,-5.64 11.1,-8.87 45.82,-34.58 114.25,-42.08 166.23,-15.87 26.01,13.11 22.96,12.83 41.25,28.02 2.68,2.23 3.36,2.15 5.71,4.95 21.61,25.86 34.09,41.43 42.37,77.52 6.04,26.29 6.13,44.87 0.72,71.06 -5.44,26.3 -15.66,47.2 -32.06,67.85 -3.66,4.61 -6.09,6.85 -9.91,11.41 -4.97,5.94 -14.96,13.85 -21.32,18.65 -8.52,6.42 -15.1,9.99 -24.99,14.97 -16.11,8.1 -41.32,16.43 -64.84,16.43zm-99.92 -203.83c6.3,3.33 13.53,5.52 20.45,8.87 6.9,3.34 13.46,5.7 19.95,9.35l38.2 21.74c-7.98,10.9 -69.47,36.48 -78.6,41.3 4.87,20.89 32.99,45.12 56.14,54.44 25.57,10.31 56.37,9.23 80.65,-2.91 50.26,-25.13 71.85,-78.41 50.51,-132.25 -9.01,-22.73 -28.38,-40.94 -49.62,-51.62 -42.27,-21.25 -92.62,-9.51 -123.98,27.48 -3.87,4.57 -12.27,17.49 -13.7,23.6zm-247.79 41.3l14.63 18.67c4.77,6.26 10.17,11.51 15.24,18.07 22.98,29.66 86.65,83.79 113.99,101.83l53.31 30.62c34.19,17.15 88.84,34.64 131.89,34.64 55.33,0 83.37,-4.63 132.85,-24.35 23.09,-9.21 55.22,-26.56 75.53,-40.37l47.71 -36.22c28.49,-25.39 34.46,-31.2 58.63,-57.28l30.51 -36.1c2.23,-2.99 5.13,-7.56 7.8,-9.51 -2.05,-3.07 -4.1,-6.53 -6.46,-9.53 -15.48,-19.68 -54.17,-64.69 -72.14,-78.4l-36.15 -30.46c-6.52,-5.21 -11.83,-9.35 -19,-14.3 -22.47,-15.51 -37.38,-24.8 -62.53,-37.39 -34.95,-17.51 -88.82,-35.08 -132.77,-35.08 -55.33,0 -83.37,4.62 -132.86,24.34 -8.3,3.32 -15.62,6.58 -23.01,10.29 -32.56,16.33 -73.09,42.11 -100.23,66.3 -43.92,39.15 -55.7,51.86 -89.88,93.97 -2.86,3.52 -4.72,6.76 -7.06,10.26z\"\r\n              />\r\n            </svg>\r\n          </ion-button>\r\n          <ion-button\r\n            class=\"filter-btn\"\r\n            (click)=\"filterPage('battery')\"\r\n            style=\"align-self: center\"\r\n          >\r\n            <svg\r\n              width=\"25\"\r\n              height=\"25\"\r\n              viewBox=\"0 0 800 800\"\r\n              style=\"\r\n                shape-rendering: geometricPrecision;\r\n                text-rendering: geometricPrecision;\r\n                image-rendering: optimizeQuality;\r\n                fill-rule: evenodd;\r\n                clip-rule: evenodd;\r\n              \"\r\n            >\r\n              <path\r\n                attr.fill=\"{{\r\n                  batteryStatusFilter == true ? '#1d93ed' : 'black'\r\n                }}\"\r\n                d=\"M-0 248.48l0 486.31 846.66 -0.01 0 -486.3 -846.66 0zm87.77 -55.22l205.61 0 0 -81.39 -205.61 0 0 81.39zm465.53 0l205.61 0 0 -81.39 -205.61 0 0 81.39zm-297.64 259.53l0 0 -37.49 0 0 37.48 -55.21 0.01 0 -37.48 -37.49 -0.01 0 -55.22 37.49 0 0 -37.48 55.21 0 0 37.48 37.49 0 0 55.22zm193.28 199.43l-51.22 -20.62 37.76 -93.8 -106.05 0 68.29 -169.63 51.22 20.62 -37.76 93.8 106.05 -0.01 -68.29 169.64zm272.25 -199.43l-130.19 0 0 -55.22 130.19 0 0 55.22z\"\r\n              />\r\n            </svg>\r\n          </ion-button>\r\n          <ion-button\r\n            class=\"filter-btn\"\r\n            (click)=\"filterPage('gsm')\"\r\n            style=\"align-self: center\"\r\n          >\r\n            <svg\r\n              xmlns=\"http://www.w3.org/2000/svg\"\r\n              xml:space=\"preserve\"\r\n              width=\"7mm\"\r\n              height=\"7mm\"\r\n              version=\"1.1\"\r\n              style=\"\r\n                shape-rendering: geometricPrecision;\r\n                text-rendering: geometricPrecision;\r\n                image-rendering: optimizeQuality;\r\n                fill-rule: evenodd;\r\n                clip-rule: evenodd;\r\n              \"\r\n              viewBox=\"0 0 846.66 846.66\"\r\n              xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n            >\r\n              <path\r\n                attr.fill=\"{{ gsmStatusFilter == true ? '#1d93ed' : 'black' }}\"\r\n                d=\"M273.84 700.03c0,10.28 3.11,13.39 13.38,13.39l124.95 0 0 -98.17 -138.33 0 0 84.78zm182.96 -232.05l0 232.05c0,10.28 3.1,13.39 13.39,13.39l124.95 0 0 -258.82 -124.95 0c-10.29,0 -13.39,3.1 -13.39,13.38zm-254.36 245.44l40.16 0 0 -374.85c0,-24.95 99.44,-157.07 124.95,-205.27l-298.98 0 104.46 163.29c21.32,30.97 16.17,25.19 16.03,73.22l-0.39 312.76c-0.13,16.63 -3.44,30.85 13.77,30.85zm21.17 -403.47l-111.3 -159.72 203.51 0 -92.21 159.72zm420.61 403.47l133.87 0 0 -401.62c0,-10.29 -3.1,-13.39 -13.37,-13.39l-120.5 0 0 415.01z\"\r\n              />\r\n            </svg>\r\n          </ion-button>\r\n          <ion-button\r\n            class=\"filter-btn\"\r\n            (click)=\"filterPage('gps')\"\r\n            style=\"align-self: center\"\r\n          >\r\n            <ion-icon\r\n              style=\"font-size: 25px\"\r\n              [ngClass]=\"{\r\n                selecedFabIcon: gpsFilter === true,\r\n                notSelecedFabIcon: gpsFilter === false\r\n              }\"\r\n              name=\"md-locate\"\r\n            ></ion-icon>\r\n          </ion-button>\r\n          <ion-button\r\n            class=\"filter-btn\"\r\n            (click)=\"filterPage('subscription')\"\r\n            style=\"align-self: center\"\r\n          >\r\n            <ion-icon\r\n              style=\"font-size: 25px\"\r\n              [ngClass]=\"{\r\n                selecedFabIcon: subscriptionFilter === true,\r\n                notSelecedFabIcon: subscriptionFilter === false\r\n              }\"\r\n              name=\"logo-usd\"\r\n            ></ion-icon>\r\n          </ion-button>\r\n          <ion-button\r\n            class=\"filter-btn\"\r\n            (click)=\"doRefresh($event)\"\r\n            style=\"align-self: center\"\r\n          >\r\n            <ion-icon\r\n              style=\"font-size: 25px\"\r\n              name=\"refresh-circle-outline\"\r\n            ></ion-icon>\r\n          </ion-button>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col\r\n        style=\"align-self: center; position: fixed; right: 124px; z-index: 12\"\r\n        size=\"0.5\"\r\n      >\r\n        <ion-row\r\n          style=\"align-self: center; float: right\"\r\n          (click)=\"bellRouter()\"\r\n        >\r\n          <ion-img\r\n            src=\"assets/dashboard_background/bell.png\"\r\n            style=\"width: 22px; height: 22px\"\r\n          ></ion-img>\r\n          <ion-badge\r\n            color=\"danger\"\r\n            style=\"\r\n              position: absolute;\r\n              align-self: center;\r\n              margin-left: -38px;\r\n              font-size: 9px;\r\n              left: 76px;\r\n              color: white;\r\n              font-weight: bold;\r\n              top: 0px;\r\n            \"\r\n          >\r\n            {{ alertCount }}\r\n          </ion-badge>\r\n        </ion-row>\r\n      </ion-col>\r\n      <ion-col\r\n        style=\"\r\n          text-align: -webkit-center;\r\n          position: fixed;\r\n          right: 12px;\r\n          top: -5px;\r\n          z-index: 15;\r\n        \"\r\n        size=\"1\"\r\n      >\r\n        <ion-img class=\"logo\" [src]=\"app.logo\"></ion-img>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row style=\"margin-top: 7px\">\r\n      <ion-col\r\n        size=\"2.5\"\r\n        style=\"margin-top: 7px; max-width: 20%; margin: 0px; padding: 0px\"\r\n      >\r\n        <div class=\"search-bar\">\r\n          <ion-searchbar\r\n            [(ngModel)]=\"searchInput\"\r\n            placeholder=\"Search\"\r\n            style=\"width: 84%; padding: 2px 5px; display: inline-block\"\r\n            (click)=\"filterIconClose = false\"\r\n          >\r\n          </ion-searchbar>\r\n          <ion-fab-button\r\n            *ngIf=\"!filterIconClose\"\r\n            size=\"small\"\r\n            class=\"filter-fabs\"\r\n            (click)=\"openFilter('funnel')\"\r\n          >\r\n            <ion-icon class=\"filter-icons\" name=\"md-funnel\"></ion-icon>\r\n          </ion-fab-button>\r\n\r\n          <ion-fab-button\r\n            *ngIf=\"filterIconClose\"\r\n            size=\"small\"\r\n            class=\"filter-fabs\"\r\n            (click)=\"openFilter('close')\"\r\n          >\r\n            <ion-icon class=\"filter-icons\" name=\"md-close\"></ion-icon>\r\n          </ion-fab-button>\r\n          <!-- <ion-icon class=\"filter-icons\" name=\"md-refresh\" (click)=\"doRefresh($event)\"></ion-icon> -->\r\n        </div>\r\n        <ion-row id=\"status-row\">\r\n          <ion-col>\r\n            <!-- <ion-col style=\"position: relative;\r\n                            top: -9px;\"> -->\r\n            <ion-row *ngIf=\"statusBarOthers.length > 0\">\r\n              <ion-col\r\n                size=\"2\"\r\n                class=\"ion-activatable statusBar\"\r\n                style=\"\r\n                  background: #989aa2;\r\n                  margin: 13px 0 0px;\r\n                  border-radius: 5px;\r\n                  height: 50px;\r\n                \"\r\n              >\r\n                <ion-row>\r\n                  <ion-col style=\"padding-left: 8px\">\r\n                    <ion-row\r\n                      (click)=\"\r\n                        changeGridView({\r\n                          type: 'All',\r\n                          count: vehicleCount.Total\r\n                        })\r\n                      \"\r\n                    >\r\n                      {{ vehicleCount.Total }}\r\n                      <ion-row class=\"status-head\">ALL</ion-row>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\r\n              </ion-col>\r\n              <ion-col size=\"10\">\r\n                <ion-row style=\"height: 32px\">\r\n                  <ion-col size=\"3\" *ngIf=\"loginData.includes('Running')\">\r\n                    <ion-row\r\n                      class=\"ion-activatable statusBar\"\r\n                      style=\"background-color: #1eb15d\"\r\n                      (click)=\"\r\n                        changeGridView({\r\n                          type: 'Running',\r\n                          count: vehicleCount.Running\r\n                        })\r\n                      \"\r\n                    >\r\n                      {{ vehicleCount.Running }}\r\n                      <ion-row class=\"status-head\">RUNNING</ion-row>\r\n                      <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" *ngIf=\"loginData.includes('Stop')\">\r\n                    <ion-row\r\n                      class=\"ion-activatable statusBar\"\r\n                      style=\"background-color: #ff0000\"\r\n                      (click)=\"\r\n                        changeGridView({\r\n                          type: 'Stop',\r\n                          count: vehicleCount.Stop\r\n                        })\r\n                      \"\r\n                    >\r\n                      {{ vehicleCount.Stop }}\r\n                      <ion-row class=\"status-head\">STOP</ion-row>\r\n                      <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" *ngIf=\"loginData.includes('HighTemp')\">\r\n                    <ion-row\r\n                      class=\"ion-activatable statusBar\"\r\n                      style=\"background-color: #ff0000\"\r\n                      (click)=\"\r\n                        changeGridView({\r\n                          type: 'HighTemp',\r\n                          count: vehicleCount.HighTemp\r\n                        })\r\n                      \"\r\n                    >\r\n                      {{ vehicleCount.HighTemp }}\r\n                      <ion-row class=\"status-head\">HIGTEMP</ion-row>\r\n                      <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" *ngIf=\"loginData.includes('Idle')\">\r\n                    <ion-row\r\n                      class=\"ion-activatable statusBar\"\r\n                      style=\"background-color: #1f5baa\"\r\n                      (click)=\"\r\n                        changeGridView({\r\n                          type: 'Idle',\r\n                          count: vehicleCount.Idle\r\n                        })\r\n                      \"\r\n                    >\r\n                      {{ vehicleCount.Idle }}\r\n                      <ion-row class=\"status-head\">IDLE</ion-row>\r\n                      <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" *ngIf=\"loginData.includes('Geofence')\">\r\n                    <ion-row\r\n                      class=\"ion-activatable statusBar\"\r\n                      style=\"background-color: #1f5baa\"\r\n                      (click)=\"\r\n                        changeGridView({\r\n                          type: 'Geofence',\r\n                          count: vehicleCount.Geofence\r\n                        })\r\n                      \"\r\n                    >\r\n                      {{ vehicleCount.Geofence }}\r\n                      <ion-row class=\"status-head\">GEOFENCE</ion-row>\r\n                      <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                  <ion-col\r\n                    size=\"3\"\r\n                    *ngIf=\"loginData.includes('No Transmission')\"\r\n                  >\r\n                    <ion-row\r\n                      class=\"ion-activatable statusBar\"\r\n                      style=\"background-color: #000000\"\r\n                      (click)=\"\r\n                        changeGridView({\r\n                          type: 'No Transmission',\r\n                          count: vehicleCount['No Transmission']\r\n                        })\r\n                      \"\r\n                    >\r\n                      {{ vehicleCount[\"No Transmission\"] }}\r\n                      <ion-row class=\"status-head\">NOTRANSMIT</ion-row>\r\n                      <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" *ngIf=\"loginData.includes('PowerFail')\">\r\n                    <ion-row\r\n                      class=\"ion-activatable statusBar\"\r\n                      style=\"background-color: #724040\"\r\n                      (click)=\"\r\n                        changeGridView({\r\n                          type: 'PowerFail',\r\n                          count: vehicleCount['PowerFail']\r\n                        })\r\n                      \"\r\n                    >\r\n                      {{ vehicleCount[\"PowerFail\"] }}\r\n                      <ion-row class=\"status-head\">POWERFAIL</ion-row>\r\n                      <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                  <!----New***---->\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col size=\"3\" *ngIf=\"loginData.includes('Overspeed')\">\r\n                    <ion-row\r\n                      class=\"ion-activatable statusBar\"\r\n                      style=\"background-color: #f28918\"\r\n                      (click)=\"\r\n                        changeGridView({\r\n                          type: 'Overspeed',\r\n                          count: vehicleCount.Overspeed\r\n                        })\r\n                      \"\r\n                    >\r\n                      {{ vehicleCount.Overspeed }}\r\n                      <ion-row class=\"status-head\">OVERSPEED</ion-row>\r\n                      <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\" *ngIf=\"loginData.includes('DoorOpen')\">\r\n                    <ion-row\r\n                      class=\"ion-activatable statusBar\"\r\n                      style=\"background-color: #f28918\"\r\n                      (click)=\"\r\n                        changeGridView({\r\n                          type: 'DoorOpen',\r\n                          count: vehicleCount.DoorOpen\r\n                        })\r\n                      \"\r\n                    >\r\n                      {{ vehicleCount.DoorOpen }}\r\n                      <ion-row class=\"status-head\">DOOROPEN</ion-row>\r\n                      <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\">\r\n                    <ion-row\r\n                      class=\"ion-activatable statusBar\"\r\n                      style=\"background-color: #c200b8\"\r\n                      (click)=\"\r\n                        changeGridView({\r\n                          type: 'Towed',\r\n                          count: vehicleCount.Towed\r\n                        })\r\n                      \"\r\n                    >\r\n                      {{ vehicleCount.Towed }}\r\n                      <ion-row\r\n                        *ngIf=\"loginData.includes('Towed')\"\r\n                        class=\"status-head\"\r\n                        >TOWED</ion-row\r\n                      >\r\n                      <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\">\r\n                    <ion-row\r\n                      class=\"ion-activatable statusBar\"\r\n                      style=\"background-color: #7d410f\"\r\n                      (click)=\"\r\n                        changeGridView({\r\n                          type: 'Yet_to_transmit',\r\n                          count: vehicleCount.Yet_to_transmit\r\n                        })\r\n                      \"\r\n                    >\r\n                      {{ vehicleCount.Yet_to_transmit }}\r\n                      <ion-row class=\"status-head\">YETTOTRANS</ion-row>\r\n                      <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\">\r\n                    <ion-row\r\n                      class=\"ion-activatable statusBar\"\r\n                      style=\"background-color: #00e1bc\"\r\n                      (click)=\"\r\n                        changeGridView({\r\n                          type: 'Online',\r\n                          count: vehicleCount.Online\r\n                        })\r\n                      \"\r\n                    >\r\n                      {{ vehicleCount.Online }}\r\n                      <ion-row class=\"status-head\">ONLINE</ion-row>\r\n                      <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row style=\"padding: 0px; margin: 101px 0px 0px 0px\">\r\n          <!-- <ion-virtual-scroll style=\"top: 101px;\"\r\n                                    [items]=\"dashboardData | search:searchInput | status: filterValue : count : statusGrid: manualFilter\"\r\n                                    [trackBy]=\"identify\"  [itemHeight]=\"itemHeightFn\"\r\n                                   > -->\r\n          <ion-card\r\n            *ngFor=\"\r\n              let data of dashboardData\r\n                | search : searchInput\r\n                | status : filterValue : count : statusGrid : manualFilter\r\n            \"\r\n            style=\"\r\n              padding: 0px;\r\n              margin: 10px 3px 0px 2px;\r\n              width: -webkit-fill-available;\r\n            \"\r\n            disabled=\"{{ data.warrantyExpiry }}\"\r\n            [ngClass]=\"{\r\n              runningCardBorder:\r\n                data.status === 'Running' || data.status === 'Good',\r\n              stopCardBorder:\r\n                data.status === 'Stop' || data.status === 'HighTemp',\r\n              idleCardBorder:\r\n                data.status === 'Idle' || data.status === 'Geofence',\r\n              doorOpen: data.status === 'DoorOpen',\r\n              noTransCardBorder: data.status === 'No Transmission',\r\n              powerFail: data.status === 'PowerFail',\r\n              overspeedCardBorder: data.status === 'Overspeed',\r\n              towedCardBorder: data.status === 'Towed',\r\n              yetToTransmitCardBorder: data.status === 'Yet_to_transmit',\r\n              onlineCardBorder: data.status === 'Online',\r\n              active: data.vin === selectedVin.vin\r\n            }\"\r\n          >\r\n            <ion-card-content style=\"padding: 0px\">\r\n              <app-gridview-card\r\n                (click)=\"showModal(data)\"\r\n                [commonData]=\"data\"\r\n              ></app-gridview-card>\r\n\r\n              <ion-row>\r\n                <ion-row (click)=\"showLocation(data)\" class=\"address\">\r\n                  <ion-col\r\n                    size=\"12\"\r\n                    style=\"padding-top: 0px; padding-bottom: 0px\"\r\n                  >\r\n                    <ion-row *ngIf=\"data.location\">\r\n                      {{ data.location }}\r\n                    </ion-row>\r\n                    <ion-row *ngIf=\"!data.location\">\r\n                      Click For Location\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-row>\r\n            </ion-card-content>\r\n          </ion-card>\r\n          <!-- </ion-virtual-scroll> -->\r\n        </ion-row>\r\n\r\n        <!-- <ion-row>\r\n                            <ion-virtual-scroll style=\"top: 101px;\"\r\n                                [items]=\"dashboardData | search:searchInput | status: filterValue : count : statusGrid: manualFilter\"\r\n                                [trackBy]=\"identify\"  [itemHeight]=\"itemHeightFn\"\r\n                               >\r\n                                <ion-card *virtualItem=\"let data;\" style=\"padding:0px; margin: 10px 3px 12px 2px;\"\r\n                                    disabled='{{data.warrantyExpiry}}'\r\n                                    [ngClass]='{\"runningCardBorder\": data.status === \"Running\" || data.status === \"Good\", \"stopCardBorder\":data.status === \"Stop\" || data.status === \"HighTemp\", \"idleCardBorder\":data.status === \"Idle\" || data.status === \"Geofence\" ,\"doorOpen\": data.status === \"DoorOpen\", \"noTransCardBorder\":data.status === \"No Transmission\",\"powerFail\": data.status === \"PowerFail\" , \"overspeedCardBorder\": data.status === \"Overspeed\" , \"towedCardBorder\": data.status === \"Towed\",\"yetToTransmitCardBorder\": data.status === \"Yet_to_transmit\", \"onlineCardBorder\": data.status === \"Online\", \"active\": data.vin === selectedVin.vin}'>\r\n                                    <ion-card-content style=\"padding:0px;\">\r\n                                        <app-gridview-card (click)=\"showModal(data)\" [commonData]='data'></app-gridview-card>\r\n        \r\n                                        <ion-row>\r\n        \r\n                                            <ion-row (click)='showLocation(data)' class=\"address\">\r\n                                                <ion-col size=12 style=\"padding-top: 0px; padding-bottom: 0px;\">\r\n                                                    <ion-row *ngIf=\"data.location\">\r\n                                                        {{data.location}}\r\n                                                    </ion-row>\r\n                                                    <ion-row *ngIf=\"!data.location\">\r\n                                                        Click For Location\r\n                                                    </ion-row>\r\n                                                </ion-col>\r\n                                            </ion-row>\r\n                                        </ion-row>\r\n                                    </ion-card-content>\r\n        \r\n                                </ion-card> \r\n                            </ion-virtual-scroll>\r\n                        </ion-row> -->\r\n        <ion-row>\r\n          <ion-infinite-scroll\r\n            threshold=\"100px\"\r\n            (ionInfinite)=\"loadMoreData($event)\"\r\n          >\r\n            <ion-infinite-scroll-content\r\n              loadingSpinner=\"bubbles\"\r\n              loadingText=\"Loading more data...\"\r\n            >\r\n            </ion-infinite-scroll-content>\r\n          </ion-infinite-scroll>\r\n        </ion-row>\r\n      </ion-col>\r\n      <ion-col\r\n        style=\"\r\n          max-width: 80%;\r\n          overflow-y: hidden;\r\n          margin-top: -7px;\r\n          position: fixed;\r\n          max-width: 80%;\r\n          left: 20.2%;\r\n        \"\r\n        size=\"9.5\"\r\n        id=\"mapv\"\r\n      >\r\n        <ion-row *ngIf=\"pageSeleter == 'gridview'\" style=\"height: 53vh\">\r\n          <ion-col style=\"max-width: 50%\">\r\n            <ion-row class=\"heading\"> Map View </ion-row>\r\n            <ion-row>\r\n              <div class=\"map\" #mapElement></div>\r\n            </ion-row>\r\n          </ion-col>\r\n          <ion-col style=\"max-width: 26%\" id=\"alert\">\r\n            <ion-card style=\"margin: 0px; height: 100%\">\r\n              <ion-card-content style=\"margin: 0px; padding: 0px\">\r\n                <ion-row class=\"heading\">\r\n                  <span class=\"margin\"> Alert</span>\r\n                </ion-row>\r\n                <ion-row [ngClass]=\"{ alertCardGreater: alertCount >= 3 }\">\r\n                  <ion-img\r\n                    src=\"assets/background_img/NoData.svg\"\r\n                    *ngIf=\"NoDataImage\"\r\n                    style=\"height: 45.5vh; bottom: 0px; left: 120px\"\r\n                  ></ion-img>\r\n                  <ion-card\r\n                    style=\"width: 100%\"\r\n                    *ngFor=\"let alertDataCard of alertData\"\r\n                  >\r\n                    <app-alert-card [data]=\"alertDataCard\"></app-alert-card>\r\n                  </ion-card>\r\n                </ion-row>\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-col>\r\n          <ion-col style=\"max-width: 24%\" class=\"vehicleInfo\">\r\n            <ion-card style=\"margin: 0px; height: 70%\">\r\n              <ion-card-content style=\"margin: 0px; padding: 0px\">\r\n                <ion-row class=\"heading\">\r\n                  <span class=\"margin\"> Vehicle Info</span>\r\n                </ion-row>\r\n                <ion-row\r\n                  *ngIf=\"selectedVin.vin\"\r\n                  class=\"alertCardGreater\"\r\n                  style=\"margin: 0px\"\r\n                >\r\n                  <app-vts-info\r\n                    style=\"width: 100%\"\r\n                    [gridView]=\"selectedVin.vin\"\r\n                  ></app-vts-info>\r\n                </ion-row>\r\n              </ion-card-content>\r\n            </ion-card>\r\n            <!-- <ion-card style=\"margin: 3px 0 0; height: 29%;\"  *ngIf=\"entryPoint == 'VTS'\" >\r\n                            <ion-card-content style=\"margin: 0px; padding: 0px;\">\r\n                                <ion-row class=\"heading\">\r\n                                    <span class=\"margin\">Preventive Maintenance</span>\r\n                                </ion-row>\r\n                                <ion-row  class='alertCardGreater' style=\"margin: 0px;\">\r\n                                    <app-schedule-maintenance style=\"width: 100%;\" [scheduleMaintenance]=\"selectedVin.vin\" ></app-schedule-maintenance>\r\n                                </ion-row>\r\n                            </ion-card-content>\r\n                        </ion-card> -->\r\n          </ion-col>\r\n          <!-- <ion-col style=\"max-width: 24%;\" id=\"vehicleInfo\">\r\n                        <ion-card style=\"margin: 0px; height: 100%;\">\r\n                            <ion-card-content style=\"margin: 0px; padding: 0px;\">\r\n                                <ion-row class=\"heading\">\r\n                                    <span class=\"margin\"> Vehicle Info</span>\r\n                                </ion-row>\r\n                                <ion-row *ngIf=\"selectedVin.vin\" class='alertCardGreater' style=\"margin: 0px;\">\r\n                                    <app-vts-info style=\"width: 100%;\" [gridView]=\"selectedVin.vin\"></app-vts-info>\r\n                                </ion-row>\r\n                            </ion-card-content>\r\n                        </ion-card>\r\n                    </ion-col> -->\r\n        </ion-row>\r\n\r\n        <ion-row\r\n          *ngIf=\"\r\n            pageSeleter == 'gridview' &&\r\n            gridCardOption[selectedVin.icon] == null\r\n          \"\r\n        >\r\n          <ion-col style=\"max-width: 33%\">\r\n            <ion-card class=\"cardStyle\" id=\"yesterdayStatus\">\r\n              <ion-card-content style=\"margin: 0px; padding: 0px\">\r\n                <ion-row class=\"heading\">\r\n                  <span class=\"margin\"> Yesterday Status</span>\r\n                </ion-row>\r\n                <ion-row\r\n                  style=\"margin: 0px\"\r\n                  *ngIf=\"\r\n                    executiveCard != {} ||\r\n                    executiveCard != null ||\r\n                    executiveCard != undefined\r\n                  \"\r\n                >\r\n                  <canvas id=\"barChart\" #barChart height=\"170\"></canvas>\r\n                </ion-row>\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-col>\r\n\r\n          <ion-col style=\"max-width: 33%\">\r\n            <ion-card class=\"cardStyle\" id=\"executiveSummary\">\r\n              <ion-card-content style=\"margin: 0px; padding: 0px\">\r\n                <ion-row class=\"heading\">\r\n                  <span class=\"margin\">Executive Summary</span>\r\n                </ion-row>\r\n                <ion-row style=\"margin: 0px\" class=\"executiveGreater\">\r\n                  <app-executive-summary-card\r\n                    *ngIf=\"executiveCard\"\r\n                    style=\"width: 100%\"\r\n                    [commonData]=\"executiveCard\"\r\n                  >\r\n                  </app-executive-summary-card>\r\n                </ion-row>\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-col>\r\n\r\n          <ion-col style=\"max-width: 43%\">\r\n            <ion-card\r\n              class=\"cardStyle\"\r\n              id=\"odometer\"\r\n              style=\"overflow-y: scroll\"\r\n            >\r\n              <ion-card-content style=\"margin: 0px; padding: 0px\">\r\n                <ion-row class=\"heading\">\r\n                  <span class=\"margin\"> Vehicle Overview</span>\r\n                </ion-row>\r\n                <ion-row\r\n                  *ngIf=\"vehicleInfo\"\r\n                  style=\"margin: 0px; justify-content: center\"\r\n                >\r\n                  <app-week-odometer\r\n                    [gridView]=\"vehicleInfo\"\r\n                    style=\"width: 100%\"\r\n                  ></app-week-odometer>\r\n                </ion-row>\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row\r\n          *ngIf=\"\r\n            pageSeleter == 'gridview' &&\r\n            gridCardOption[this.selectedVin.icon] != null\r\n          \"\r\n        >\r\n          <ion-col style=\"max-width: 76%\">\r\n            <ion-card class=\"cardStyle\" id=\"odometer\">\r\n              <ion-card-content style=\"margin: 0px; padding: 0px\">\r\n                <ion-row class=\"heading\">\r\n                  <span class=\"margin\"> Temprature Range</span>\r\n                </ion-row>\r\n                <ion-row style=\"margin: 0px; justify-content: center\">\r\n                  <app-temprature-range\r\n                    [gridView]=\"selectedVin.vin\"\r\n                    style=\"width: 100%\"\r\n                  >\r\n                  </app-temprature-range>\r\n                </ion-row>\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-col>\r\n          <ion-col style=\"max-width: 33%\">\r\n            <ion-card class=\"cardStyle\" id=\"odometer\">\r\n              <ion-card-content style=\"margin: 0px; padding: 0px\">\r\n                <ion-row class=\"heading\">\r\n                  <span class=\"margin\"> No Of Counts</span>\r\n                </ion-row>\r\n                <ion-row style=\"justify-content: center\">\r\n                  <app-temperature-grid-view\r\n                    style=\"width: 100%\"\r\n                    [gridView]=\"selectedVin.vin\"\r\n                  >\r\n                  </app-temperature-grid-view>\r\n                </ion-row>\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row *ngIf=\"pageSeleter == 'livetrack'\" style=\"padding: 5px\">\r\n          <ion-row class=\"heading\">\r\n            <span class=\"margin\"> Live Tracking</span>\r\n          </ion-row>\r\n          <app-vtslivetrack\r\n            [liveTrackChanging]=\"liveTrackingChanges\"\r\n            [gridLiveChange]=\"liveChange\"\r\n            (gridView)=\"livetrackWeb($event)\"\r\n            style=\"width: 100%\"\r\n          >\r\n          </app-vtslivetrack>\r\n        </ion-row>\r\n        <ion-row *ngIf=\"pageSeleter == 'trackhistory'\" style=\"padding: 5px\">\r\n          <ion-row class=\"heading\">\r\n            <span class=\"margin\"> Track History</span>\r\n          </ion-row>\r\n          <app-vts-trackhistory\r\n            [gridLiveChange]=\"liveChange\"\r\n            style=\"width: 100%\"\r\n          ></app-vts-trackhistory>\r\n        </ion-row>\r\n        <ion-row *ngIf=\"pageSeleter == 'nearby'\" style=\"padding: 5px\">\r\n          <ion-row class=\"heading\">\r\n            <span class=\"margin\"> Near By Vehicle</span>\r\n          </ion-row>\r\n          <app-vts-nearby\r\n            [gridLiveChange]=\"liveChange\"\r\n            style=\"width: 100%\"\r\n          ></app-vts-nearby>\r\n        </ion-row>\r\n        <ion-row *ngIf=\"pageSeleter == 'geofence'\" style=\"padding: 5px\">\r\n          <ion-row class=\"heading\">\r\n            <span class=\"margin\"> Geo Fence</span>\r\n          </ion-row>\r\n          <ion-row\r\n            style=\"height: 83vh; padding: 5px; overflow: auto; width: 100%\"\r\n          >\r\n            <ion-col size=\"12\" style=\"padding: 0px\">\r\n              <app-vts-geofence\r\n                [vinGrid]=\"pageSeleter\"\r\n                [gridLiveChange]=\"selectedVin.plateNo\"\r\n                style=\"width: 100%; height: 100vh\"\r\n              >\r\n              </app-vts-geofence>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-row>\r\n        <ion-row *ngIf=\"pageSeleter == 'trip'\" style=\"padding: 5px\">\r\n          <ion-row class=\"heading\">\r\n            <span class=\"margin\">Trip Summary</span>\r\n          </ion-row>\r\n          <ion-row\r\n            style=\"height: 83vh; padding: 5px; overflow: auto; width: 100%\"\r\n          >\r\n            <ion-col size=\"12\" style=\"padding: 0px\">\r\n              <app-vts-trip-summary\r\n                [vinGrid]=\"pageSeleter\"\r\n                [gridLiveChange]=\"selectedVin\"\r\n                style=\"width: 100%; height: 100vh\"\r\n              >\r\n              </app-vts-trip-summary>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-row>\r\n        <ion-row *ngIf=\"pageSeleter == 'settings'\" style=\"padding: 5px\">\r\n          <ion-row class=\"heading\">\r\n            <span class=\"margin\"> Settings </span>\r\n          </ion-row>\r\n          <ion-row style=\"height: 83vh; overflow: auto; width: 100%\">\r\n            <ion-col size=\"12\" style=\"padding: 0px\">\r\n              <app-overall-settings\r\n                [gridLiveChange]=\"selectedVin.plateNo\"\r\n                [pageType]=\"state\"\r\n                style=\"width: 100%\"\r\n              ></app-overall-settings>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-row>\r\n\r\n        <ion-row *ngIf=\"pageSeleter == 'reports'\">\r\n          <ion-row class=\"heading\">\r\n            <span class=\"margin\"> Reports </span>\r\n          </ion-row>\r\n          <ion-row style=\"height: 100%; overflow: auto; width: 100%\">\r\n            <ion-col size=\"12\" style=\"padding: 0px\">\r\n              <app-vts-reports\r\n                [plateNo]=\"selectedVin.plateNo\"\r\n                style=\"width: 100%\"\r\n              ></app-vts-reports>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-row>\r\n        <ion-row\r\n          class=\"botmRow\"\r\n          style=\"\r\n            width: 77.3%;\r\n            justify-content: center;\r\n            border-top: 1px solid #eceaea;\r\n            background-color: white;\r\n          \"\r\n        >\r\n          <app-vehicle-function\r\n            [plateNo]=\"selectedVin.plateNo\"\r\n            (gridView)=\"vehicleFunctionClick($event)\"\r\n          >\r\n          </app-vehicle-function>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/gridview-tab/alerts-modal/alerts-modal.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/gridview-tab/alerts-modal/alerts-modal.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-badge {\n  --padding-top: 5px;\n  --padding-bottom: 5px;\n  --padding-start: 5px;\n  --padding-end: 5px;\n  border-radius: 20px;\n}\n\n.noPad {\n  padding: 0;\n}\n\n.botNoPad {\n  padding-bottom: 0;\n}\n\n.iconSize {\n  width: 22px;\n  height: 22px;\n}\n\n.fontLabel {\n  font-size: 12px;\n}\n\n.roundedPlate {\n  padding: 2px 8px 7px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  border-top: 1px solid;\n  background: black;\n  color: white;\n}\n\n.header-color {\n  background: #F6b221;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JpZHZpZXctdGFiL2FsZXJ0cy1tb2RhbC9EOlxcQVRTLUZyb250ZW5kLVdlYi1HaXQvc3JjXFxhcHBcXGdyaWR2aWV3LXRhYlxcYWxlcnRzLW1vZGFsXFxhbGVydHMtbW9kYWwucGFnZS5zY3NzIiwic3JjL2FwcC9ncmlkdmlldy10YWIvYWxlcnRzLW1vZGFsL2FsZXJ0cy1tb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUU7RUFDRSxVQUFBO0FDQ0o7O0FERUU7RUFDRSxpQkFBQTtBQ0NKOztBREVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFRTtFQUNFLGVBQUE7QUNDSjs7QURDRTtFQUNFLG9CQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQUU7RUFDRSxtQkFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvZ3JpZHZpZXctdGFiL2FsZXJ0cy1tb2RhbC9hbGVydHMtbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJhZGdlIHtcclxuICAgIC0tcGFkZGluZy10b3A6IDVweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNXB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLm5vUGFkIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3ROb1BhZCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICB9XHJcbiAgXHJcbiAgLmljb25TaXplIHtcclxuICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG4gIH1cclxuICBcclxuICAuZm9udExhYmVse1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICAucm91bmRlZFBsYXRlIHtcclxuICAgIHBhZGRpbmc6IDJweCA4cHggN3B4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkO1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5oZWFkZXItY29sb3J7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjZiMjIxO1xyXG4gIH1cclxuICAiLCJpb24tYmFkZ2Uge1xuICAtLXBhZGRpbmctdG9wOiA1cHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDVweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA1cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLm5vUGFkIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmJvdE5vUGFkIHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5pY29uU2l6ZSB7XG4gIHdpZHRoOiAyMnB4O1xuICBoZWlnaHQ6IDIycHg7XG59XG5cbi5mb250TGFiZWwge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5yb3VuZGVkUGxhdGUge1xuICBwYWRkaW5nOiAycHggOHB4IDdweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZDtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmhlYWRlci1jb2xvciB7XG4gIGJhY2tncm91bmQ6ICNGNmIyMjE7XG59Il19 */"

/***/ }),

/***/ "./src/app/gridview-tab/alerts-modal/alerts-modal.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/gridview-tab/alerts-modal/alerts-modal.page.ts ***!
  \****************************************************************/
/*! exports provided: AlertsModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsModalPage", function() { return AlertsModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





let AlertsModalPage = class AlertsModalPage {
    constructor(modalController) {
        this.modalController = modalController;
        this.totalAlert = 0;
        this.showSearch = false;
        this.initialHeader = true;
    }
    searchActivity(task) {
        if (task == "open") {
            this.showSearch = true;
        }
        else {
            this.showSearch = false;
            this.searchInput = '';
        }
    }
    totalAlerts(event) {
        this.totalAlert = event;
    }
    scroll(event) {
        if (event.detail.scrollTop > 0) {
            this.initialHeader = false;
        }
        else {
            this.initialHeader = true;
        }
    }
    getBack() {
        this.modalController.dismiss();
    }
    ngOnInit() {
        this.currentPlateno = JSON.parse(localStorage.selectedVin).plateNo;
        this.appName = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["app"].appName;
    }
};
AlertsModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
AlertsModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-alerts-modal',
        template: __webpack_require__(/*! raw-loader!./alerts-modal.page.html */ "./node_modules/raw-loader/index.js!./src/app/gridview-tab/alerts-modal/alerts-modal.page.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('inOutAnimation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0.7 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('0.7s ease-out')
                ])
            ])
        ],
        styles: [__webpack_require__(/*! ./alerts-modal.page.scss */ "./src/app/gridview-tab/alerts-modal/alerts-modal.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], AlertsModalPage);



/***/ }),

/***/ "./src/app/gridview-tab/grid-filter/grid-filter.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/gridview-tab/grid-filter/grid-filter.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".statusLabel {\n  font-size: 11px;\n  text-align: center;\n}\n\n.filterPad {\n  padding: 5px 1px;\n}\n\n.filterPad .ion-activatable .grayBackground {\n  background-color: #cacaca;\n}\n\n.filter {\n  position: fixed;\n  width: 100%;\n  z-index: 12;\n}\n\n.searchBackground {\n  background: #32384b;\n}\n\n.card {\n  top: 10vh;\n}\n\n.modal {\n  background-color: white;\n  color: #202020;\n  z-index: 12;\n  position: fixed;\n  right: 0px;\n  width: 100%;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  border-top-left-radius: 40px;\n  border-top-right-radius: 40px;\n}\n\n.dragDown {\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  bottom: -280px;\n}\n\n.dragUp {\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  bottom: 0px;\n}\n\n.dragUpIos {\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  bottom: 50px;\n}\n\n.displayType {\n  display: grid;\n}\n\n.semiCircle {\n  background: black;\n  width: 100%;\n  padding: 2%;\n  border-radius: 0px 0px 20px 18px;\n}\n\n.alertsStyle {\n  color: white;\n  font-size: 16px;\n  font-weight: 700;\n}\n\n.borderRight {\n  border-right: 1px solid #dedede;\n}\n\n.imgSize {\n  height: 30px;\n}\n\n.cardContentPad {\n  padding-top: 6px;\n  padding-bottom: 0px;\n}\n\n.cardMargin {\n  margin-top: 6px;\n  margin-bottom: 6px;\n  border-radius: 10px;\n}\n\n.running {\n  background-color: #1eb15d;\n}\n\n.idle {\n  background-color: #1f5baa;\n}\n\n.stop {\n  background-color: #FF0000;\n}\n\n.overspeed {\n  background-color: #f28918;\n}\n\n.notransmission {\n  background-color: #000000;\n}\n\n.all {\n  background-color: #989aa2;\n}\n\n/*******New Design ****/\n\n/*******Side Border****/\n\n.runningCardBorder {\n  border-left: 6px solid #1eb15d;\n}\n\n.idleCardBorder {\n  border-left: 6px solid #1f5baa;\n}\n\n.noTransCardBorder {\n  border-left: 6px solid #000000;\n}\n\n.overspeedCardBorder {\n  border-left: 6px solid #f28918;\n}\n\n.stopCardBorder {\n  border-left: 6px solid red;\n}\n\n/*******driver bg****/\n\n.runningDriverBg {\n  background-color: #1eb15d;\n}\n\n.idleDriverBg {\n  background-color: #1f5baa;\n}\n\n.noTransDriverBg {\n  background-color: #000000;\n}\n\n.overspeedDriverBg {\n  background-color: #f28918;\n}\n\n.stopDriverBg {\n  background-color: red;\n}\n\n/*******Address broder****/\n\n.runningAddressBorder {\n  border: 2px solid #1eb15d;\n}\n\n.idleAddressBorder {\n  border: 2px solid #1f5baa;\n}\n\n.noTransAddressBorder {\n  border: 2px solid #000000;\n}\n\n.overspeedAddressBorder {\n  border: 2px solid #f28918;\n}\n\n.stopAddressBorder {\n  border: 2px solid red;\n}\n\n/*******text cooor****/\n\n.runningText {\n  color: #1eb15d;\n}\n\n.idleText {\n  color: #1f5baa;\n}\n\n.noTransText {\n  color: #000000;\n}\n\n.overspeedText {\n  color: #f28918;\n}\n\n.stopText {\n  color: red;\n}\n\n.selecedFabIcon {\n  color: #1d93ed;\n}\n\n.notSelecedFabIcon {\n  color: #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JpZHZpZXctdGFiL2dyaWQtZmlsdGVyL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZ3JpZHZpZXctdGFiXFxncmlkLWZpbHRlclxcZ3JpZC1maWx0ZXIucGFnZS5zY3NzIiwic3JjL2FwcC9ncmlkdmlldy10YWIvZ3JpZC1maWx0ZXIvZ3JpZC1maWx0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDYztFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ3ZDaEI7O0FEMENjO0VBQ0UsZ0JBQUE7QUN2Q2hCOztBRDBDYztFQUNFLHlCQUFBO0FDdkNoQjs7QUQwQ2M7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUN2Q2hCOztBRDBDYztFQUNFLG1CQUFBO0FDdkNoQjs7QUQwQ2M7RUFDRSxTQUFBO0FDdkNoQjs7QUQwQ2M7RUFDRSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBRUEsd0JBQUE7RUFBQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUN4Q2hCOztBRDJDYztFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxjQUFBO0FDeENoQjs7QUQyQ2M7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsV0FBQTtBQ3hDaEI7O0FEMENjO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtFQUNBLFlBQUE7QUN2Q2hCOztBRHlDYztFQUNFLGFBQUE7QUN0Q2hCOztBRHlDYztFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtBQ3RDaEI7O0FEeUNjO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ3RDaEI7O0FEeUNjO0VBQ0UsK0JBQUE7QUN0Q2hCOztBRHlDYztFQUNFLFlBQUE7QUN0Q2hCOztBRHlDYztFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUN0Q2hCOztBRHlDYztFQUVFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDdkNoQjs7QUQwQ2M7RUFDRSx5QkFBQTtBQ3ZDaEI7O0FEeUNjO0VBQ0UseUJBQUE7QUN0Q2hCOztBRHdDYztFQUNFLHlCQUFBO0FDckNoQjs7QUR1Q2M7RUFDRSx5QkFBQTtBQ3BDaEI7O0FEc0NjO0VBQ0UseUJBQUE7QUNuQ2hCOztBRHFDYztFQUNFLHlCQUFBO0FDbENoQjs7QURvQ2MsdUJBQUE7O0FBQ0EsdUJBQUE7O0FBQ0E7RUFDRSw4QkFBQTtBQ2pDaEI7O0FEbUNjO0VBQ0UsOEJBQUE7QUNoQ2hCOztBRGtDYztFQUNFLDhCQUFBO0FDL0JoQjs7QURpQ2M7RUFDRSw4QkFBQTtBQzlCaEI7O0FEZ0NjO0VBQ0UsMEJBQUE7QUM3QmhCOztBRGdDYyxxQkFBQTs7QUFDQTtFQUNFLHlCQXZLTjtBQzBJVjs7QUQrQmM7RUFDRSx5QkF6S1Q7QUM2SVA7O0FEOEJjO0VBQ0UseUJBMUtDO0FDK0lqQjs7QUQ2QmM7RUFDRSx5QkE5S0o7QUNvSlo7O0FENEJjO0VBQ0UscUJBcExUO0FDMkpQOztBRDZCYywwQkFBQTs7QUFDQTtFQUNFLHlCQUFBO0FDMUJoQjs7QUQ0QmM7RUFDRSx5QkFBQTtBQ3pCaEI7O0FEMkJjO0VBQ0UseUJBQUE7QUN4QmhCOztBRDBCYztFQUNFLHlCQUFBO0FDdkJoQjs7QUR5QmM7RUFDRSxxQkFBQTtBQ3RCaEI7O0FEeUJjLHNCQUFBOztBQUNBO0VBQ0UsY0ExTU47QUNvTFY7O0FEd0JjO0VBQ0UsY0E1TVQ7QUN1TFA7O0FEdUJjO0VBQ0UsY0E3TUM7QUN5TGpCOztBRHNCYztFQUNFLGNBak5KO0FDOExaOztBRHFCYztFQUNFLFVBdk5UO0FDcU1QOztBRG9CYztFQUNFLGNBQUE7QUNqQmhCOztBRG1CYztFQUNFLGNBQUE7QUNoQmhCIiwiZmlsZSI6InNyYy9hcHAvZ3JpZHZpZXctdGFiL2dyaWQtZmlsdGVyL2dyaWQtZmlsdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRzdG9wOiByZWQ7XHJcbiRydW5uaW5nOiAjMWViMTVkO1xyXG4kaWRsZTogIzFmNWJhYTtcclxuJG92ZXJzcGVlZDogI2YyODkxODtcclxuJG5vVHJhbnNtaXNzaW9uOiAjMDAwMDAwO1xyXG5cclxuLy8gLmFkZHJlc3Mge1xyXG4gIC8vICAgZm9udC1zaXplOiAxMXB4O1xyXG4gIC8vICAgbGluZS1oZWlnaHQ6IGluaXRpYWw7XHJcbiAgLy8gICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgLy8gfVxyXG4gIFxyXG4gIC8vIC5kYXRlIHtcclxuICAgIC8vICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgLy8gICBmb250LWZhbWlseTogXCJMdWNpZGEgU2Fuc1wiLCBcIkx1Y2lkYSBTYW5zIFJlZ3VsYXJcIiwgXCJMdWNpZGEgR3JhbmRlXCIsIFwiTHVjaWRhIFNhbnMgVW5pY29kZVwiLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgICAvLyB9XHJcbiAgICBcclxuICAgIC8vIC52ZWhpY2xlTmFtZSB7XHJcbiAgICAgIC8vICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgICAgLy8gICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgLy8gfVxyXG4gICAgICBcclxuICAgICAgLy8gLnNwZWVkIHtcclxuICAgICAgICAvLyAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAvLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gLnNwZWVkVW5pdCB7XHJcbiAgICAgICAgICAvLyAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgIC8vIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gLmZpbHRlck5hbWUge1xyXG4gICAgICAgICAgICAvLyAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgICAgICAgICAvLyAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gLmZpbHRlclZhbHVlIHtcclxuICAgICAgICAgICAgICAvLyAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLnN0YXR1c0xhYmVsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLmZpbHRlclBhZCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMXB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAuZmlsdGVyUGFkIC5pb24tYWN0aXZhdGFibGUgLmdyYXlCYWNrZ3JvdW5kIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjYWNhY2E7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC5maWx0ZXIge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxMjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLnNlYXJjaEJhY2tncm91bmQge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzMyMzg0YjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLmNhcmQge1xyXG4gICAgICAgICAgICAgICAgdG9wOiAxMHZoO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAubW9kYWwge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDMyLCAzMiwgMzIpO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogMTI7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAvL2JvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDQwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC5kcmFnRG93biB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAtMjgwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC5kcmFnVXAge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuZHJhZ1VwSW9ze1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogNTBweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmRpc3BsYXlUeXBlIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC5zZW1pQ2lyY2xlIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyJTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMjBweCAxOHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAuYWxlcnRzU3R5bGUge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLmJvcmRlclJpZ2h0IHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZWRlZGU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC5pbWdTaXplIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLmNhcmRDb250ZW50UGFkIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA2cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAuY2FyZE1hcmdpbiB7XHJcbiAgICAgICAgICAgICAgICAvLyBib3JkZXItbGVmdDogNnB4IHNvbGlkICRzdG9wO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLnJ1bm5pbmd7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWViMTVkO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuaWRsZXtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjViYWE7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5zdG9we1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMDAwMDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLm92ZXJzcGVlZHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMjg5MTg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5ub3RyYW5zbWlzc2lvbntcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5hbGx7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTg5YWEyO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvKioqKioqKk5ldyBEZXNpZ24gKioqKi9cclxuICAgICAgICAgICAgICAvKioqKioqKlNpZGUgQm9yZGVyKioqKi9cclxuICAgICAgICAgICAgICAucnVubmluZ0NhcmRCb3JkZXJ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkICRydW5uaW5nO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuaWRsZUNhcmRCb3JkZXJ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkICRpZGxlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAubm9UcmFuc0NhcmRCb3JkZXJ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkICRub1RyYW5zbWlzc2lvbjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLm92ZXJzcGVlZENhcmRCb3JkZXJ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkICRvdmVyc3BlZWQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5zdG9wQ2FyZEJvcmRlcntcclxuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgJHN0b3A7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC8qKioqKioqZHJpdmVyIGJnKioqKi9cclxuICAgICAgICAgICAgICAucnVubmluZ0RyaXZlckJne1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJ1bm5pbmc7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5pZGxlRHJpdmVyQmd7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaWRsZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLm5vVHJhbnNEcml2ZXJCZ3tcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRub1RyYW5zbWlzc2lvbjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLm92ZXJzcGVlZERyaXZlckJne1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG92ZXJzcGVlZDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnN0b3BEcml2ZXJCZ3tcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzdG9wO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAvKioqKioqKkFkZHJlc3MgYnJvZGVyKioqKi9cclxuICAgICAgICAgICAgICAucnVubmluZ0FkZHJlc3NCb3JkZXJ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkcnVubmluZztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmlkbGVBZGRyZXNzQm9yZGVye1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGlkbGU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5ub1RyYW5zQWRkcmVzc0JvcmRlcntcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRub1RyYW5zbWlzc2lvbjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLm92ZXJzcGVlZEFkZHJlc3NCb3JkZXJ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkb3ZlcnNwZWVkO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuc3RvcEFkZHJlc3NCb3JkZXJ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkc3RvcDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLyoqKioqKip0ZXh0IGNvb29yKioqKi9cclxuICAgICAgICAgICAgICAucnVubmluZ1RleHR7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHJ1bm5pbmc7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5pZGxlVGV4dHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkaWRsZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLm5vVHJhbnNUZXh0e1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRub1RyYW5zbWlzc2lvbjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLm92ZXJzcGVlZFRleHR7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJG92ZXJzcGVlZDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnN0b3BUZXh0e1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRzdG9wO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuc2VsZWNlZEZhYkljb257XHJcbiAgICAgICAgICAgICAgICBjb2xvciA6ICMxZDkzZWRcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLm5vdFNlbGVjZWRGYWJJY29ue1xyXG4gICAgICAgICAgICAgICAgY29sb3IgOiAjMDAwMDAwXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICIsIi5zdGF0dXNMYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZmlsdGVyUGFkIHtcbiAgcGFkZGluZzogNXB4IDFweDtcbn1cblxuLmZpbHRlclBhZCAuaW9uLWFjdGl2YXRhYmxlIC5ncmF5QmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjYWNhY2E7XG59XG5cbi5maWx0ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxMjtcbn1cblxuLnNlYXJjaEJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiAjMzIzODRiO1xufVxuXG4uY2FyZCB7XG4gIHRvcDogMTB2aDtcbn1cblxuLm1vZGFsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiAjMjAyMDIwO1xuICB6LWluZGV4OiAxMjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNDBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDQwcHg7XG59XG5cbi5kcmFnRG93biB7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGJvdHRvbTogLTI4MHB4O1xufVxuXG4uZHJhZ1VwIHtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgYm90dG9tOiAwcHg7XG59XG5cbi5kcmFnVXBJb3Mge1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBib3R0b206IDUwcHg7XG59XG5cbi5kaXNwbGF5VHlwZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG59XG5cbi5zZW1pQ2lyY2xlIHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyJTtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAyMHB4IDE4cHg7XG59XG5cbi5hbGVydHNTdHlsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYm9yZGVyUmlnaHQge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGVkZWRlO1xufVxuXG4uaW1nU2l6ZSB7XG4gIGhlaWdodDogMzBweDtcbn1cblxuLmNhcmRDb250ZW50UGFkIHtcbiAgcGFkZGluZy10b3A6IDZweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuLmNhcmRNYXJnaW4ge1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnJ1bm5pbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWViMTVkO1xufVxuXG4uaWRsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZjViYWE7XG59XG5cbi5zdG9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMDAwMDtcbn1cblxuLm92ZXJzcGVlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMjg5MTg7XG59XG5cbi5ub3RyYW5zbWlzc2lvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG59XG5cbi5hbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTg5YWEyO1xufVxuXG4vKioqKioqKk5ldyBEZXNpZ24gKioqKi9cbi8qKioqKioqU2lkZSBCb3JkZXIqKioqL1xuLnJ1bm5pbmdDYXJkQm9yZGVyIHtcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAjMWViMTVkO1xufVxuXG4uaWRsZUNhcmRCb3JkZXIge1xuICBib3JkZXItbGVmdDogNnB4IHNvbGlkICMxZjViYWE7XG59XG5cbi5ub1RyYW5zQ2FyZEJvcmRlciB7XG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgIzAwMDAwMDtcbn1cblxuLm92ZXJzcGVlZENhcmRCb3JkZXIge1xuICBib3JkZXItbGVmdDogNnB4IHNvbGlkICNmMjg5MTg7XG59XG5cbi5zdG9wQ2FyZEJvcmRlciB7XG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgcmVkO1xufVxuXG4vKioqKioqKmRyaXZlciBiZyoqKiovXG4ucnVubmluZ0RyaXZlckJnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlYjE1ZDtcbn1cblxuLmlkbGVEcml2ZXJCZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZjViYWE7XG59XG5cbi5ub1RyYW5zRHJpdmVyQmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xufVxuXG4ub3ZlcnNwZWVkRHJpdmVyQmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjI4OTE4O1xufVxuXG4uc3RvcERyaXZlckJnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4vKioqKioqKkFkZHJlc3MgYnJvZGVyKioqKi9cbi5ydW5uaW5nQWRkcmVzc0JvcmRlciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMxZWIxNWQ7XG59XG5cbi5pZGxlQWRkcmVzc0JvcmRlciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMxZjViYWE7XG59XG5cbi5ub1RyYW5zQWRkcmVzc0JvcmRlciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDAwMDA7XG59XG5cbi5vdmVyc3BlZWRBZGRyZXNzQm9yZGVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgI2YyODkxODtcbn1cblxuLnN0b3BBZGRyZXNzQm9yZGVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xufVxuXG4vKioqKioqKnRleHQgY29vb3IqKioqL1xuLnJ1bm5pbmdUZXh0IHtcbiAgY29sb3I6ICMxZWIxNWQ7XG59XG5cbi5pZGxlVGV4dCB7XG4gIGNvbG9yOiAjMWY1YmFhO1xufVxuXG4ubm9UcmFuc1RleHQge1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLm92ZXJzcGVlZFRleHQge1xuICBjb2xvcjogI2YyODkxODtcbn1cblxuLnN0b3BUZXh0IHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnNlbGVjZWRGYWJJY29uIHtcbiAgY29sb3I6ICMxZDkzZWQ7XG59XG5cbi5ub3RTZWxlY2VkRmFiSWNvbiB7XG4gIGNvbG9yOiAjMDAwMDAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/gridview-tab/grid-filter/grid-filter.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/gridview-tab/grid-filter/grid-filter.page.ts ***!
  \**************************************************************/
/*! exports provided: GridFilterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridFilterPage", function() { return GridFilterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let GridFilterPage = class GridFilterPage {
    constructor(platform, modalController, menuController) {
        this.platform = platform;
        this.modalController = modalController;
        this.menuController = menuController;
    }
    getBack(final) {
        if (final == 'close') {
            localStorage.removeItem('modalFilterData');
        }
        this.modalController.dismiss();
    }
    ionViewWillLeave() {
        this.subscription.unsubscribe();
    }
    ngOnInit() {
        this.subscription = this.platform.backButton.subscribe(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.menuController.isOpen()) {
                this.menuController.close();
            }
        }));
    }
};
GridFilterPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
];
GridFilterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-grid-filter',
        template: __webpack_require__(/*! raw-loader!./grid-filter.page.html */ "./node_modules/raw-loader/index.js!./src/app/gridview-tab/grid-filter/grid-filter.page.html"),
        styles: [__webpack_require__(/*! ./grid-filter.page.scss */ "./src/app/gridview-tab/grid-filter/grid-filter.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
], GridFilterPage);



/***/ }),

/***/ "./src/app/gridview-tab/gridview-tab.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/gridview-tab/gridview-tab.module.ts ***!
  \*****************************************************/
/*! exports provided: GridviewTabPageModule, ActionModePageModule, AlertsModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridviewTabPageModule", function() { return GridviewTabPageModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionModePageModule", function() { return ActionModePageModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsModalPageModule", function() { return AlertsModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ionic_swipe_all__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-swipe-all */ "./node_modules/ionic-swipe-all/dist/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _gridview_tab_vtsgrid_vtsgrid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../gridview-tab/vtsgrid/vtsgrid.component */ "./src/app/gridview-tab/vtsgrid/vtsgrid.component.ts");
/* harmony import */ var _gridview_tab_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gridview-tab.page */ "./src/app/gridview-tab/gridview-tab.page.ts");
/* harmony import */ var _services_search_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/search.pipe */ "./src/app/services/search.pipe.ts");
/* harmony import */ var _services_filter_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/filter.pipe */ "./src/app/services/filter.pipe.ts");
/* harmony import */ var _action_mode_action_mode_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./action-mode/action-mode.page */ "./src/app/gridview-tab/action-mode/action-mode.page.ts");
/* harmony import */ var _alerts_modal_alerts_modal_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./alerts-modal/alerts-modal.page */ "./src/app/gridview-tab/alerts-modal/alerts-modal.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _grid_filter_grid_filter_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./grid-filter/grid-filter.page */ "./src/app/gridview-tab/grid-filter/grid-filter.page.ts");















const alertsModalPage = [
    {
        path: '',
        component: _alerts_modal_alerts_modal_page__WEBPACK_IMPORTED_MODULE_12__["AlertsModalPage"]
    }
];
const routes = [
    {
        path: '',
        component: _gridview_tab_page__WEBPACK_IMPORTED_MODULE_8__["GridviewTabPage"]
    }
];
const actionModePage = [
    {
        path: '',
        component: _action_mode_action_mode_page__WEBPACK_IMPORTED_MODULE_11__["ActionModePage"]
    }
];
const gridFilterPage = [
    {
        path: '',
        component: _grid_filter_grid_filter_page__WEBPACK_IMPORTED_MODULE_14__["GridFilterPage"]
    }
];
let GridviewTabPageModule = class GridviewTabPageModule {
    constructor() { }
    // async openModalAddAsset(type) {
    //   const modal = await this.modalController.create({
    //     component: liveTrack
    //   });
    //   modal.onDidDismiss().then((detail: OverlayEventDetail) => {
    //     //  this.getLiveVariableData();
    //   });
    //   return await modal.present();
    // }
    ngOnInit() {
        console.warn("Gridview tab on Init");
    }
};
GridviewTabPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(actionModePage),
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(alertsModalPage),
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(gridFilterPage),
            ionic_swipe_all__WEBPACK_IMPORTED_MODULE_5__["IonicSwipeAllModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_13__["ComponentsModule"]
        ],
        declarations: [_gridview_tab_page__WEBPACK_IMPORTED_MODULE_8__["GridviewTabPage"], _gridview_tab_vtsgrid_vtsgrid_component__WEBPACK_IMPORTED_MODULE_7__["VtsgridComponent"], _services_search_pipe__WEBPACK_IMPORTED_MODULE_9__["SearchPipe"], _services_filter_pipe__WEBPACK_IMPORTED_MODULE_10__["FilterPipe"], _action_mode_action_mode_page__WEBPACK_IMPORTED_MODULE_11__["ActionModePage"], _alerts_modal_alerts_modal_page__WEBPACK_IMPORTED_MODULE_12__["AlertsModalPage"], _grid_filter_grid_filter_page__WEBPACK_IMPORTED_MODULE_14__["GridFilterPage"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], GridviewTabPageModule);

class ActionModePageModule {
}
class AlertsModalPageModule {
}


/***/ }),

/***/ "./src/app/gridview-tab/gridview-tab.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/gridview-tab/gridview-tab.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search {\n  bottom: 1vh;\n}\n\n.ion-padding,\n[padding] {\n  padding-left: unset;\n  padding-right: unset;\n  -webkit-padding-start: var(--ion-padding, 16px);\n  padding-inline-start: var(--ion-padding, 0px);\n  -webkit-padding-end: var(--ion-padding, -16px);\n  padding-inline-end: var(--ion-padding, 13px);\n  padding-bottom: 8px;\n}\n\n.noPad {\n  padding: 0;\n}\n\n.botNoPad {\n  padding-bottom: 0;\n}\n\n.iconSize {\n  width: 22px;\n  height: 22px;\n}\n\n.running {\n  background-color: #1eb15d;\n}\n\n.idle {\n  background-color: #1f5baa;\n}\n\n.stop {\n  background-color: #ff0000;\n}\n\n.overspeed {\n  background-color: #f28918;\n}\n\n.notransmission {\n  background-color: #000000;\n}\n\n.all {\n  background-color: #989aa2;\n}\n\n.header-md:after {\n  left: 0;\n  bottom: -5px;\n  background-position: left 0 top -2px;\n  position: absolute;\n  width: 100%;\n  height: 5px;\n  background-image: none;\n  background-repeat: repeat-x;\n  content: \"\";\n}\n\n.statusBar {\n  padding: 2px;\n  border-radius: 5px;\n  font-weight: bold;\n  -webkit-box-pack: center;\n          justify-content: center;\n  font-size: 15px;\n  color: white;\n  padding-top: 5px;\n  border-radius: 5px;\n  font-weight: bold;\n}\n\n.logo {\n  width: 100px;\n  height: 45px;\n}\n\n.statusBarCard {\n  margin: 0px;\n  width: 100%;\n  padding: 0px;\n  box-shadow: none;\n}\n\n.statusBarPad {\n  padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JpZHZpZXctdGFiL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZ3JpZHZpZXctdGFiXFxncmlkdmlldy10YWIucGFnZS5zY3NzIiwic3JjL2FwcC9ncmlkdmlldy10YWIvZ3JpZHZpZXctdGFiLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURDQTs7RUFFRSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsK0NBQUE7RUFDQSw2Q0FBQTtFQUNBLDhDQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtBQ0VGOztBRENBO0VBQ0UsVUFBQTtBQ0VGOztBRENBO0VBQ0UsaUJBQUE7QUNFRjs7QURDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDRUY7O0FEQUE7RUFDRSx5QkFBQTtBQ0dGOztBRERBO0VBQ0UseUJBQUE7QUNJRjs7QURGQTtFQUNFLHlCQUFBO0FDS0Y7O0FESEE7RUFDRSx5QkFBQTtBQ01GOztBREpBO0VBQ0UseUJBQUE7QUNPRjs7QURMQTtFQUNFLHlCQUFBO0FDUUY7O0FETkE7RUFDRSxPQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0FDU0Y7O0FETkE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1NGOztBRE5BO0VBQ0UsWUFBQTtFQUNFLFlBQUE7QUNTSjs7QURQQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDVUY7O0FEUEE7RUFFRSxZQUFBO0FDU0YiLCJmaWxlIjoic3JjL2FwcC9ncmlkdmlldy10YWIvZ3JpZHZpZXctdGFiLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gge1xyXG4gIGJvdHRvbTogMXZoO1xyXG59XHJcbi5pb24tcGFkZGluZyxcclxuW3BhZGRpbmddIHtcclxuICBwYWRkaW5nLWxlZnQ6IHVuc2V0O1xyXG4gIHBhZGRpbmctcmlnaHQ6IHVuc2V0O1xyXG4gIC13ZWJraXQtcGFkZGluZy1zdGFydDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xyXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMHB4KTtcclxuICAtd2Via2l0LXBhZGRpbmctZW5kOiB2YXIoLS1pb24tcGFkZGluZywgLTE2cHgpO1xyXG4gIHBhZGRpbmctaW5saW5lLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDEzcHgpO1xyXG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi5ub1BhZCB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmJvdE5vUGFkIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmljb25TaXplIHtcclxuICB3aWR0aDogMjJweDtcclxuICBoZWlnaHQ6IDIycHg7XHJcbn1cclxuLnJ1bm5pbmcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZWIxNWQ7XHJcbn1cclxuLmlkbGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZjViYWE7XHJcbn1cclxuLnN0b3Age1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XHJcbn1cclxuLm92ZXJzcGVlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyODkxODtcclxufVxyXG4ubm90cmFuc21pc3Npb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuLmFsbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk4OWFhMjtcclxufVxyXG4uaGVhZGVyLW1kOmFmdGVyIHtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogLTVweDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IDAgdG9wIC0ycHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNXB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbn1cclxuXHJcbi5zdGF0dXNCYXIge1xyXG4gIHBhZGRpbmc6IDJweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmxvZ297XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG59XHJcbi5zdGF0dXNCYXJDYXJkIHtcclxuICBtYXJnaW46IDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLnN0YXR1c0JhclBhZCB7XHJcbiAgLy9wYWRkaW5nOiAwcHggMTZweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuIiwiLnNlYXJjaCB7XG4gIGJvdHRvbTogMXZoO1xufVxuXG4uaW9uLXBhZGRpbmcsXG5bcGFkZGluZ10ge1xuICBwYWRkaW5nLWxlZnQ6IHVuc2V0O1xuICBwYWRkaW5nLXJpZ2h0OiB1bnNldDtcbiAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMHB4KTtcbiAgLXdlYmtpdC1wYWRkaW5nLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIC0xNnB4KTtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTNweCk7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG5cbi5ub1BhZCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5ib3ROb1BhZCB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4uaWNvblNpemUge1xuICB3aWR0aDogMjJweDtcbiAgaGVpZ2h0OiAyMnB4O1xufVxuXG4ucnVubmluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZWIxNWQ7XG59XG5cbi5pZGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFmNWJhYTtcbn1cblxuLnN0b3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xufVxuXG4ub3ZlcnNwZWVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyODkxODtcbn1cblxuLm5vdHJhbnNtaXNzaW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbn1cblxuLmFsbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5ODlhYTI7XG59XG5cbi5oZWFkZXItbWQ6YWZ0ZXIge1xuICBsZWZ0OiAwO1xuICBib3R0b206IC01cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgMCB0b3AgLTJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgY29udGVudDogXCJcIjtcbn1cblxuLnN0YXR1c0JhciB7XG4gIHBhZGRpbmc6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubG9nbyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA0NXB4O1xufVxuXG4uc3RhdHVzQmFyQ2FyZCB7XG4gIG1hcmdpbjogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMHB4O1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uc3RhdHVzQmFyUGFkIHtcbiAgcGFkZGluZzogMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/gridview-tab/gridview-tab.page.ts":
/*!***************************************************!*\
  !*** ./src/app/gridview-tab/gridview-tab.page.ts ***!
  \***************************************************/
/*! exports provided: GridviewTabPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridviewTabPage", function() { return GridviewTabPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _subscription_alert_subscription_alert_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./subscription-alert/subscription-alert.component */ "./src/app/gridview-tab/subscription-alert/subscription-alert.component.ts");
/* harmony import */ var _components_fleet_form_fleet_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/fleet-form/fleet-form.component */ "./src/app/components/fleet-form/fleet-form.component.ts");
/* harmony import */ var _services_websocket_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/websocket.service */ "./src/app/services/websocket.service.ts");










//gokul



// import { url } from 'inspector';
let GridviewTabPage = class GridviewTabPage {
    constructor(router, ajaxService, commonService, activatedRoute, menuController, modalController, platform, websocketService) {
        this.router = router;
        this.ajaxService = ajaxService;
        this.commonService = commonService;
        this.activatedRoute = activatedRoute;
        this.menuController = menuController;
        this.modalController = modalController;
        this.platform = platform;
        this.websocketService = websocketService;
        this.filter = [];
        this.initialHeader = true;
        this.showSearch = false;
        this.gridViewData = [];
        this.vehicleCount = { All: 0, Running: 0, Stop: 0, Idle: 0, NoTransmit: 0 };
        this.statusBarVehicle = [
            "All",
            "Running",
            "Idle",
            "Overspeed",
            "No Transmission",
            "Stop",
            "Overspeed",
            "Door Open",
            "Geofence Voilation",
            "Power Fail",
            "High Temp",
        ];
        this.statusBarOthers = [
            "All",
            "Door Open",
            "Geofence Voilation",
            "Power Fail",
            "No Trans, High Temp",
        ];
        this.totalAlertCount = 0;
        this.app = {};
        this.temperatureData = false;
        this.loginData = [];
    }
    showModal(data) {
        if (document.getElementById("modal").style.bottom == "0px") {
            document.getElementById("modal").style.bottom = "-280px";
        }
        else {
            localStorage.setItem("selectedVin", JSON.stringify(data));
            document.getElementById("modal").style.bottom = "0px";
        }
    }
    hideModal() {
        document.getElementById("modal").style.bottom = "-280px";
    }
    scroll(event) {
        if (event.detail.scrollTop > 0) {
            this.initialHeader = false;
        }
        else {
            this.initialHeader = true;
        }
    }
    searchActivity(task) {
        if (task == "open") {
            this.showSearch = true;
        }
        else {
            this.showSearch = false;
            this.searchInput = "";
        }
    }
    handleChange(value) {
        this.searchInput = value.detail.value;
    }
    dashboardCountLoader() {
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["storageVariable"].upDatedJsonData) {
            let data = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["storageVariable"].upDatedJsonData;
            this.vehicleCount = data.statusCount;
            this.statusBarOthers = Object.keys(this.vehicleCount);
        }
    }
    vehicleAlert(event) {
        this.totalAlertCount = event;
    }
    openModalAddAsset() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _components_fleet_form_fleet_form_component__WEBPACK_IMPORTED_MODULE_9__["FleetFormComponent"],
                cssClass: "custome_fleet",
            });
            modal.onDidDismiss().then(() => {
                this.websocketService.reSendRequest(JSON.parse(localStorage.dashboardWebSocketData));
            });
            return yield modal.present();
        });
    }
    changeGridView(data) {
        this.filter = [];
        if (data) {
            if (data.count > 0) {
                localStorage.removeItem("modalFilterData");
                if (data.type === "Notransmit") {
                    this.data = "No Transmission";
                    localStorage.setItem("statusChanger", "No Transmission");
                }
                else {
                    this.data = data.type;
                    localStorage.setItem("statusChanger", data.type);
                }
            }
            else if (data.count == 0) {
                this.commonService.presentToast("You didn't have any vehicle to show");
            }
        }
    }
    //gokul model
    openModel() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var today = new Date();
            var hours = today.getHours();
            localStorage.setItem("SubscriptionDate", JSON.stringify(hours));
            const modal = yield this.modalController.create({
                component: _subscription_alert_subscription_alert_component__WEBPACK_IMPORTED_MODULE_8__["SubscriptionAlertComponent"],
                cssClass: "custom-modaladv",
                componentProps: {
                    value: this.VehicleDetails,
                },
            });
            modal.onDidDismiss().then(() => { });
            return yield modal.present();
        });
    }
    ionViewWillEnter() {
        this.dashboardCountLoader();
        //gokul
        var today = new Date();
        var hours = today.getHours();
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["serverUrl"].web +
            "/device/expiry?companyId=" +
            this.companyDetail.companyID +
            "&userId=" +
            this.companyDetail.userId;
        this.ajaxService.ajaxGet(url).subscribe((res) => {
            console.log(res);
            this.VehicleDetails = res;
            var oldHours = JSON.parse(localStorage.getItem("SubscriptionDate"));
            var hour = today.getHours();
            var currenttime = hour - oldHours;
            if (!JSON.parse(localStorage.getItem("SubscriptionDate")) &&
                this.VehicleDetails.message == "Expired") {
                this.openModel();
            }
            else if (currenttime >= parseInt(this.VehicleDetails.interval)) {
                //  var oldDate = JSON.parse(localStorage.getItem('SubscriptionDate'));
                this.openModel();
            }
        });
    }
    temperature() {
        this.filter = [];
        this.temperatureData = !this.temperatureData;
        this.data = localStorage.getItem("statusChanger");
    }
    ngOnInit() {
        this.companyDetail = {
            branchID: localStorage.getItem("corpId"),
            companyID: localStorage.getItem("corpId"),
            userId: localStorage.getItem("userName"),
        };
        this.loginData = Object.keys(JSON.parse(localStorage.getItem("loginData"))[0]);
        this.appName = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["app"].appName;
        this.app["logo"] = localStorage.companyLogo;
        this.applicationSettings = JSON.parse(localStorage.appSettings);
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        this.statusColor = this.applicationSettings.statusColor;
        this.entryPoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["app"].entryPoint;
    }
};
GridviewTabPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _services_websocket_service__WEBPACK_IMPORTED_MODULE_10__["WebsocketService"] }
];
GridviewTabPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-gridview-tab",
        template: __webpack_require__(/*! raw-loader!./gridview-tab.page.html */ "./node_modules/raw-loader/index.js!./src/app/gridview-tab/gridview-tab.page.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])("inOutAnimation", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0.8 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])("0.7s ease-out")]),
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])("fade", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])("void => *", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0.3 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 1 })),
                ]),
            ]),
        ],
        styles: [__webpack_require__(/*! ./gridview-tab.page.scss */ "./src/app/gridview-tab/gridview-tab.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _services_websocket_service__WEBPACK_IMPORTED_MODULE_10__["WebsocketService"]])
], GridviewTabPage);



/***/ }),

/***/ "./src/app/gridview-tab/vtsgrid/vtsgrid.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/gridview-tab/vtsgrid/vtsgrid.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n#gridView {\n  height: 124vh !important;\n  overflow-y: scroll;\n}\n#alert {\n  height: 53vh !important;\n}\n.active {\n  --background: rgb(211, 211, 211);\n}\n.botmRow {\n  position: fixed;\n  left: 21%;\n  bottom: 0px;\n  right: 0;\n}\n.vehicleInfo {\n  height: 75vh !important;\n}\n.vehicleInfoTts {\n  height: 75vh !important;\n}\n#preventive {\n  margin-top: 0px;\n}\n#yesterdayStatus {\n  height: 33vh !important;\n}\n#executiveSummary {\n  height: 33vh !important;\n}\n.executiveGreater {\n  overflow-y: scroll;\n  height: 30vh;\n}\n#odometer {\n  height: 33vh !important;\n}\n.address {\n  font-size: 10px;\n}\n.gridviewMargin {\n  margin-top: 8px;\n}\n.livetrackMargin {\n  margin-top: 85px;\n}\n.cardStyle {\n  height: 342px;\n  margin: 0px;\n}\n.blockDisplay {\n  display: block;\n}\n.noneDisplay {\n  display: none;\n}\n.statusLabel {\n  font-size: 11px;\n  text-align: center;\n}\n.filterPad {\n  padding: 5px 1px;\n}\n.filterPad .ion-activatable .grayBackground {\n  background-color: #cacaca;\n}\n.filter {\n  position: fixed;\n  width: 100%;\n  z-index: 12;\n}\n.searchBackground {\n  background: #32384b;\n}\n.card {\n  top: 10vh;\n}\n.modal {\n  background-color: white;\n  color: #202020;\n  z-index: 12;\n  position: fixed;\n  right: 0px;\n  width: 100%;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  border-top-left-radius: 40px;\n  border-top-right-radius: 40px;\n}\n.dragDown {\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  bottom: -500px;\n}\n.dragUp {\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  bottom: 0px;\n}\n.dragUpIos {\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  bottom: 50px;\n}\n.displayType {\n  display: grid;\n}\n.semiCircle {\n  background: black;\n  width: 100%;\n  padding: 2%;\n  border-radius: 0px 0px 20px 18px;\n}\n.alertsStyle {\n  color: white;\n  font-size: 16px;\n  font-weight: 700;\n}\n.borderRight {\n  border-right: 1px solid #dedede;\n}\n.imgSize {\n  height: 30px;\n}\n.cardContentPad {\n  padding-top: 6px;\n  padding-bottom: 0px;\n}\n.cardMargin {\n  margin-top: 6px;\n  margin-bottom: 6px;\n  border-radius: 10px;\n}\n.running {\n  background-color: #1eb15d;\n}\n.towed {\n  background-color: #c200b8;\n}\n.yettotransmit {\n  background-color: #7d410f;\n}\n.online {\n  background-color: #00e1bc;\n}\n.idle {\n  background-color: #1f5baa;\n}\n.stop {\n  background-color: #ff0000;\n}\n.overspeed {\n  background-color: #f28918;\n}\n.notransmission {\n  background-color: #000000;\n}\n.all {\n  background-color: #989aa2;\n}\n/*******New Design ****/\n/*******Side Border****/\n.runningCardBorder {\n  border-left: 6px solid #1eb15d;\n}\n.towedCardBorder {\n  border-left: 6px solid #c200b8;\n}\n.yetToTransmitCardBorder {\n  border-left: 6px solid #7d410f;\n}\n.onlineCardBorder {\n  border-left: 6px solid #00e1bc;\n}\n.runningCardBorder {\n  border-left: 6px solid #1eb15d;\n}\n.idleCardBorder {\n  border-left: 6px solid #1f5baa;\n}\n.noTransCardBorder {\n  border-left: 6px solid #000000;\n}\n.powerFail {\n  border-left: 6px solid #724040;\n}\n.overspeedCardBorder {\n  border-left: 6px solid #f28918;\n}\n.stopCardBorder {\n  border-left: 6px solid red;\n}\n.doorOpen {\n  border-left: 6px solid #ff851b;\n}\n/*******driver bg****/\n.runningDriverBg {\n  background-color: #1eb15d;\n}\n.idleDriverBg {\n  background-color: #1f5baa;\n}\n.noTransDriverBg {\n  background-color: #000000;\n}\n.overspeedDriverBg {\n  background-color: #f28918;\n}\n.stopDriverBg {\n  background-color: red;\n}\n/*******Address broder****/\n.runningAddressBorder {\n  border: 2px solid #1eb15d;\n}\n.idleAddressBorder {\n  border: 2px solid #1f5baa;\n}\n.noTransAddressBorder {\n  border: 2px solid #000000;\n}\n.overspeedAddressBorder {\n  border: 2px solid #f28918;\n}\n.stopAddressBorder {\n  border: 2px solid red;\n}\n/*******text cooor****/\n.runningText {\n  color: #1eb15d;\n}\n.idleText {\n  color: #1f5baa;\n}\n.noTransText {\n  color: #000000;\n}\n.overspeedText {\n  color: #f28918;\n}\n.stopText {\n  color: red;\n}\n.selecedFabIcon {\n  color: #1d93ed;\n}\n.notSelecedFabIcon {\n  color: #000000;\n}\n.heading {\n  height: 22px;\n  background-color: #6c2a84;\n  color: white;\n  font-size: 12px;\n  font-weight: bold;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 100%;\n  border-top-left-radius: 12px;\n  border-top-right-radius: 12px;\n  padding: 6px;\n}\n.map {\n  width: 100%;\n  height: 48vh;\n}\n.cardDesign::-webkit-scrollbar {\n  width: 12px;\n  /* width of the entire scrollbar */\n}\n.cardDesign::-webkit-scrollbar-track {\n  background: white;\n  /* color of the tracking area */\n}\n.cardDesign::-webkit-scrollbar-thumb {\n  background-color: white;\n  /* color of the scroll thumb */\n  border-radius: 20px;\n  /* roundness of the scroll thumb */\n  border: 3px solid lightgray;\n  /* creates padding around scroll thumb */\n}\n.alertCardGreater {\n  height: 48vh;\n  overflow-y: scroll;\n}\n::-webkit-scrollbar {\n  width: 3px;\n}\n/* Track */\n::-webkit-scrollbar-track {\n  background: #ffffff;\n}\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: #cacaca;\n}\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: #cacaca;\n}\n.margin {\n  margin-top: -2px;\n}\ndiv.scroll {\n  margin: 4px, 4px;\n  padding: 4px;\n  background-color: green;\n  width: 500px;\n  height: 110px;\n  overflow-x: hidden;\n  overflow-y: auto;\n  text-align: justify;\n}\n.timediff {\n  text-align: center;\n  color: white;\n  position: relative;\n  font-size: 3vw;\n  bottom: 7px;\n}\n.col {\n  -webkit-box-flex: 1;\n  flex: 1;\n  display: block;\n  padding: 5px;\n  width: 100%;\n}\n.DashboardButtons {\n  color: #ffda44;\n  font-size: 3vw;\n  background-color: transparent;\n  text-align: center;\n}\n.imgbuttons {\n  width: 30%;\n  position: relative;\n}\n/*Start Scss*/\n.header-background-color {\n  --background: #f6b221;\n}\n.a.white {\n  color: white;\n}\n.a.red {\n  color: red;\n}\n.arrowNext::after {\n  content: \"\";\n  font: normal normal normal 17px/0 FontAwesome;\n  color: #6c2a84;\n  position: fixed;\n  top: 9.3%;\n  left: 20.1%;\n  font-size: 13px;\n  z-index: 33;\n}\n.arrowPrevious::after {\n  content: \"\";\n  font: normal normal normal 17px/0 FontAwesome;\n  color: #6c2a84;\n  right: 0px;\n  position: fixed;\n  top: 9.3%;\n  left: 0%;\n  font-size: 13px;\n}\n.emptyClear,\n.emptyClearleft {\n  height: 51px;\n  width: 23px;\n  display: block;\n  background-color: white;\n  position: fixed;\n  top: 5.8%;\n  left: 19.2%;\n  z-index: 1;\n}\n.emptyClearleft {\n  height: 70px;\n  left: 0%;\n}\n.statusBar {\n  font-size: 14px;\n  color: white;\n  font-weight: bold;\n  height: 22px;\n  border-radius: 9%;\n  text-align: center;\n  display: grid !important;\n  place-content: center;\n  cursor: pointer;\n  opacity: 0.7;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n.padding10 {\n  padding: 3px 21px;\n}\n.statusBar .status-head {\n  visibility: hidden;\n  font-size: xx-small;\n  place-content: center;\n  line-height: 0;\n  position: relative;\n  top: 7px;\n  left: 0px;\n  font-weight: bold;\n  z-index: 1;\n  color: black;\n}\n#filter-row {\n  line-height: 0;\n  -webkit-transform: scale(0.6);\n          transform: scale(0.6);\n  padding-left: 5px;\n  position: fixed;\n  z-index: 1;\n  top: 1px;\n  left: -27px;\n}\n.filter-btn {\n  box-shadow: none;\n  --background: white;\n}\n.filter-btn:hover {\n  --background-hover: lightgray;\n}\n.filter-icons {\n  vertical-align: middle;\n  font-size: 18px;\n  color: black;\n}\n.filter-fabs {\n  height: 28px;\n  width: 30px;\n  display: inline-block;\n  margin: 0;\n  vertical-align: middle;\n  --background: #f3f2f2;\n  --box-shadow: none;\n}\n.filter-fabs:hover {\n  --background-hover: lightgray;\n}\n.search-bar {\n  width: 20.9%;\n  position: fixed;\n  padding: 2px;\n  z-index: 3;\n  background: white;\n  border-top: 5px solid purple;\n}\n.statusBar:hover .status-head {\n  visibility: visible !important;\n}\n.statusBar:hover {\n  opacity: 1;\n}\n#status-row {\n  margin: 0;\n  padding: 0px;\n  position: fixed;\n  top: 68px;\n  background: white;\n  z-index: 1;\n  width: 21%;\n}\n.input-item {\n  height: 36px;\n  background-color: lightgray;\n  --padding-start: 10px;\n}\n.input-new {\n  width: 100%;\n  border: none;\n  outline: none;\n}\n.aggregate-score {\n  margin: 20px;\n}\n.bars {\n  position: relative;\n  height: 20px;\n  width: 22px;\n}\n.bar {\n  position: absolute;\n  bottom: 0;\n  width: 4px;\n  background: #3b85d2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JpZHZpZXctdGFiL3Z0c2dyaWQvdnRzZ3JpZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZ3JpZHZpZXctdGFiL3Z0c2dyaWQvRDpcXEFUUy1Gcm9udGVuZC1XZWItR2l0L3NyY1xcYXBwXFxncmlkdmlldy10YWJcXHZ0c2dyaWRcXHZ0c2dyaWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDV2hCO0VBQ0Usd0JBQUE7RUFDQSxrQkFBQTtBRFRGO0FDV0E7RUFDRSx1QkFBQTtBRFJGO0FDY0E7RUFDRSxnQ0FBQTtBRFhGO0FDY0E7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0FEWEY7QUNhQTtFQUNFLHVCQUFBO0FEVkY7QUNZQTtFQUNFLHVCQUFBO0FEVEY7QUNXQTtFQUNFLGVBQUE7QURSRjtBQ1VBO0VBQ0UsdUJBQUE7QURQRjtBQ1NBO0VBQ0UsdUJBQUE7QURORjtBQ1FBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FETEY7QUNPQTtFQUNFLHVCQUFBO0FESkY7QUNNQTtFQUNFLGVBQUE7QURIRjtBQ2tCQTtFQUNFLGVBQUE7QURmRjtBQ2lCQTtFQUNFLGdCQUFBO0FEZEY7QUNnQkE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBRGJGO0FDZUE7RUFDRSxjQUFBO0FEWkY7QUNjQTtFQUNFLGFBQUE7QURYRjtBQ2FBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FEVkY7QUNhQTtFQUNFLGdCQUFBO0FEVkY7QUNhQTtFQUNFLHlCQUFBO0FEVkY7QUNhQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBRFZGO0FDYUE7RUFDRSxtQkFBQTtBRFZGO0FDYUE7RUFDRSxTQUFBO0FEVkY7QUNhQTtFQUNFLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFFQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBRFhGO0FDY0E7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsY0FBQTtBRFhGO0FDY0E7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsV0FBQTtBRFhGO0FDYUE7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsWUFBQTtBRFZGO0FDWUE7RUFDRSxhQUFBO0FEVEY7QUNZQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtBRFRGO0FDWUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FEVEY7QUNZQTtFQUNFLCtCQUFBO0FEVEY7QUNZQTtFQUNFLFlBQUE7QURURjtBQ1lBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBRFRGO0FDWUE7RUFFRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBRFZGO0FDYUE7RUFDRSx5QkFBQTtBRFZGO0FDWUE7RUFDRSx5QkE3S007QURvS1I7QUNXQTtFQUNFLHlCQS9LVztBRHVLYjtBQ1VBO0VBQ0UseUJBakxPO0FEMEtUO0FDU0E7RUFDRSx5QkFBQTtBRE5GO0FDUUE7RUFDRSx5QkFBQTtBRExGO0FDT0E7RUFDRSx5QkFBQTtBREpGO0FDTUE7RUFDRSx5QkFBQTtBREhGO0FDS0E7RUFDRSx5QkFBQTtBREZGO0FDSUEsdUJBQUE7QUFDQSx1QkFBQTtBQUNBO0VBQ0UsOEJBQUE7QURERjtBQ0dBO0VBQ0UsOEJBQUE7QURBRjtBQ0VBO0VBQ0UsOEJBQUE7QURDRjtBQ0NBO0VBQ0UsOEJBQUE7QURFRjtBQ0FBO0VBQ0UsOEJBQUE7QURHRjtBQ0RBO0VBQ0UsOEJBQUE7QURJRjtBQ0ZBO0VBQ0UsOEJBQUE7QURLRjtBQ0hBO0VBQ0UsOEJBQUE7QURNRjtBQ0hBO0VBQ0UsOEJBQUE7QURNRjtBQ0pBO0VBQ0UsMEJBQUE7QURPRjtBQ0xBO0VBQ0UsOEJBQUE7QURRRjtBQ05BLHFCQUFBO0FBQ0E7RUFDRSx5QkFoUFE7QUR5UFY7QUNQQTtFQUNFLHlCQWxQSztBRDRQUDtBQ1JBO0VBQ0UseUJBblBlO0FEOFBqQjtBQ1RBO0VBQ0UseUJBdlBVO0FEbVFaO0FDVkE7RUFDRSxxQkE3UEs7QUQwUVA7QUNWQSwwQkFBQTtBQUNBO0VBQ0UseUJBQUE7QURhRjtBQ1hBO0VBQ0UseUJBQUE7QURjRjtBQ1pBO0VBQ0UseUJBQUE7QURlRjtBQ2JBO0VBQ0UseUJBQUE7QURnQkY7QUNkQTtFQUNFLHFCQUFBO0FEaUJGO0FDZEEsc0JBQUE7QUFDQTtFQUNFLGNBbFJRO0FEbVNWO0FDZkE7RUFDRSxjQXBSSztBRHNTUDtBQ2hCQTtFQUNFLGNBclJlO0FEd1NqQjtBQ2pCQTtFQUNFLGNBelJVO0FENlNaO0FDbEJBO0VBQ0UsVUEvUks7QURvVFA7QUNuQkE7RUFDRSxjQUFBO0FEc0JGO0FDcEJBO0VBQ0UsY0FBQTtBRHVCRjtBQ3BCQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0FEdUJGO0FDckJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUR3QkY7QUN0QkE7RUFDRSxXQUFBO0VBQWEsa0NBQUE7QUQwQmY7QUN4QkE7RUFDRSxpQkFBQTtFQUFnQywrQkFBQTtBRDRCbEM7QUMxQkE7RUFDRSx1QkFBQTtFQUF5Qiw4QkFBQTtFQUN6QixtQkFBQTtFQUFxQixrQ0FBQTtFQUNyQiwyQkFBQTtFQUFzQyx3Q0FBQTtBRGdDeEM7QUM3QkE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QURnQ0Y7QUM3QkE7RUFDRSxVQUFBO0FEZ0NGO0FDN0JBLFVBQUE7QUFDQTtFQUNFLG1CQUFBO0FEZ0NGO0FDN0JBLFdBQUE7QUFDQTtFQUNFLG1CQUFBO0FEZ0NGO0FDN0JBLG9CQUFBO0FBQ0E7RUFDRSxtQkFBQTtBRGdDRjtBQzVCQTtFQUNFLGdCQUFBO0FEK0JGO0FDN0JBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBRGdDRjtBQzNCQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUQ4QkY7QUMzQkE7RUFDRSxtQkFBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUQ4QkY7QUMzQkE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUQ4QkY7QUMzQkE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUQ4QkY7QUMzQkEsYUFBQTtBQUNBO0VBQ0UscUJBQUE7QUQ4QkY7QUMzQkE7RUFDRSxZQUFBO0FEOEJGO0FDNUJBO0VBQ0UsVUFBQTtBRCtCRjtBQzdCQTtFQUNFLFlBQUE7RUFDQSw2Q0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBRGdDRjtBQzlCQTtFQUNFLFlBQUE7RUFDQSw2Q0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtBRGlDRjtBQy9CQTs7RUFFRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QURrQ0Y7QUNoQ0E7RUFDRSxZQUFBO0VBQ0EsUUFBQTtBRG1DRjtBQ29CQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLCtHQUFBO0FEakJGO0FDb0JBO0VBQ0UsaUJBQUE7QURqQkY7QUNrQ0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUQvQkY7QUMrQ0E7RUFDRSxjQUFBO0VBQ0EsNkJBQUE7VUFBQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBRDVDRjtBQytDQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUQ1Q0Y7QUM4Q0E7RUFDRSw2QkFBQTtBRDNDRjtBQzZDQTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUQxQ0Y7QUM0Q0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBRHpDRjtBQzJDQTtFQUNFLDZCQUFBO0FEeENGO0FDMENBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7QUR2Q0Y7QUN5Q0E7RUFDRSw4QkFBQTtBRHRDRjtBQ3dDQTtFQUNFLFVBQUE7QURyQ0Y7QUN1Q0E7RUFDRSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBRHBDRjtBQ3VDQTtFQUNFLFlBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0FEcENGO0FDc0NBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FEbkNGO0FDc0NBO0VBQ0UsWUFBQTtBRG5DRjtBQ3NDQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QURuQ0Y7QUNzQ0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QURuQ0YiLCJmaWxlIjoic3JjL2FwcC9ncmlkdmlldy10YWIvdnRzZ3JpZC92dHNncmlkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuI2dyaWRWaWV3IHtcbiAgaGVpZ2h0OiAxMjR2aCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbiNhbGVydCB7XG4gIGhlaWdodDogNTN2aCAhaW1wb3J0YW50O1xufVxuXG4uYWN0aXZlIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjExLCAyMTEsIDIxMSk7XG59XG5cbi5ib3RtUm93IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAyMSU7XG4gIGJvdHRvbTogMHB4O1xuICByaWdodDogMDtcbn1cblxuLnZlaGljbGVJbmZvIHtcbiAgaGVpZ2h0OiA3NXZoICFpbXBvcnRhbnQ7XG59XG5cbi52ZWhpY2xlSW5mb1R0cyB7XG4gIGhlaWdodDogNzV2aCAhaW1wb3J0YW50O1xufVxuXG4jcHJldmVudGl2ZSB7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuI3llc3RlcmRheVN0YXR1cyB7XG4gIGhlaWdodDogMzN2aCAhaW1wb3J0YW50O1xufVxuXG4jZXhlY3V0aXZlU3VtbWFyeSB7XG4gIGhlaWdodDogMzN2aCAhaW1wb3J0YW50O1xufVxuXG4uZXhlY3V0aXZlR3JlYXRlciB7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgaGVpZ2h0OiAzMHZoO1xufVxuXG4jb2RvbWV0ZXIge1xuICBoZWlnaHQ6IDMzdmggIWltcG9ydGFudDtcbn1cblxuLmFkZHJlc3Mge1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5ncmlkdmlld01hcmdpbiB7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLmxpdmV0cmFja01hcmdpbiB7XG4gIG1hcmdpbi10b3A6IDg1cHg7XG59XG5cbi5jYXJkU3R5bGUge1xuICBoZWlnaHQ6IDM0MnB4O1xuICBtYXJnaW46IDBweDtcbn1cblxuLmJsb2NrRGlzcGxheSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubm9uZURpc3BsYXkge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc3RhdHVzTGFiZWwge1xuICBmb250LXNpemU6IDExcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZpbHRlclBhZCB7XG4gIHBhZGRpbmc6IDVweCAxcHg7XG59XG5cbi5maWx0ZXJQYWQgLmlvbi1hY3RpdmF0YWJsZSAuZ3JheUJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2FjYWNhO1xufVxuXG4uZmlsdGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTI7XG59XG5cbi5zZWFyY2hCYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogIzMyMzg0Yjtcbn1cblxuLmNhcmQge1xuICB0b3A6IDEwdmg7XG59XG5cbi5tb2RhbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogIzIwMjAyMDtcbiAgei1pbmRleDogMTI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDQwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0MHB4O1xufVxuXG4uZHJhZ0Rvd24ge1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBib3R0b206IC01MDBweDtcbn1cblxuLmRyYWdVcCB7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGJvdHRvbTogMHB4O1xufVxuXG4uZHJhZ1VwSW9zIHtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgYm90dG9tOiA1MHB4O1xufVxuXG4uZGlzcGxheVR5cGUge1xuICBkaXNwbGF5OiBncmlkO1xufVxuXG4uc2VtaUNpcmNsZSB7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMiU7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMjBweCAxOHB4O1xufVxuXG4uYWxlcnRzU3R5bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmJvcmRlclJpZ2h0IHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RlZGVkZTtcbn1cblxuLmltZ1NpemUge1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5jYXJkQ29udGVudFBhZCB7XG4gIHBhZGRpbmctdG9wOiA2cHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbi5jYXJkTWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5ydW5uaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlYjE1ZDtcbn1cblxuLnRvd2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MyMDBiODtcbn1cblxuLnlldHRvdHJhbnNtaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2Q0MTBmO1xufVxuXG4ub25saW5lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwZTFiYztcbn1cblxuLmlkbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWY1YmFhO1xufVxuXG4uc3RvcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XG59XG5cbi5vdmVyc3BlZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjI4OTE4O1xufVxuXG4ubm90cmFuc21pc3Npb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xufVxuXG4uYWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk4OWFhMjtcbn1cblxuLyoqKioqKipOZXcgRGVzaWduICoqKiovXG4vKioqKioqKlNpZGUgQm9yZGVyKioqKi9cbi5ydW5uaW5nQ2FyZEJvcmRlciB7XG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgIzFlYjE1ZDtcbn1cblxuLnRvd2VkQ2FyZEJvcmRlciB7XG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgI2MyMDBiODtcbn1cblxuLnlldFRvVHJhbnNtaXRDYXJkQm9yZGVyIHtcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAjN2Q0MTBmO1xufVxuXG4ub25saW5lQ2FyZEJvcmRlciB7XG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgIzAwZTFiYztcbn1cblxuLnJ1bm5pbmdDYXJkQm9yZGVyIHtcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAjMWViMTVkO1xufVxuXG4uaWRsZUNhcmRCb3JkZXIge1xuICBib3JkZXItbGVmdDogNnB4IHNvbGlkICMxZjViYWE7XG59XG5cbi5ub1RyYW5zQ2FyZEJvcmRlciB7XG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgIzAwMDAwMDtcbn1cblxuLnBvd2VyRmFpbCB7XG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgIzcyNDA0MDtcbn1cblxuLm92ZXJzcGVlZENhcmRCb3JkZXIge1xuICBib3JkZXItbGVmdDogNnB4IHNvbGlkICNmMjg5MTg7XG59XG5cbi5zdG9wQ2FyZEJvcmRlciB7XG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgcmVkO1xufVxuXG4uZG9vck9wZW4ge1xuICBib3JkZXItbGVmdDogNnB4IHNvbGlkICNmZjg1MWI7XG59XG5cbi8qKioqKioqZHJpdmVyIGJnKioqKi9cbi5ydW5uaW5nRHJpdmVyQmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWViMTVkO1xufVxuXG4uaWRsZURyaXZlckJnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFmNWJhYTtcbn1cblxuLm5vVHJhbnNEcml2ZXJCZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG59XG5cbi5vdmVyc3BlZWREcml2ZXJCZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMjg5MTg7XG59XG5cbi5zdG9wRHJpdmVyQmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi8qKioqKioqQWRkcmVzcyBicm9kZXIqKioqL1xuLnJ1bm5pbmdBZGRyZXNzQm9yZGVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzFlYjE1ZDtcbn1cblxuLmlkbGVBZGRyZXNzQm9yZGVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzFmNWJhYTtcbn1cblxuLm5vVHJhbnNBZGRyZXNzQm9yZGVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDAwMDtcbn1cblxuLm92ZXJzcGVlZEFkZHJlc3NCb3JkZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCAjZjI4OTE4O1xufVxuXG4uc3RvcEFkZHJlc3NCb3JkZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG59XG5cbi8qKioqKioqdGV4dCBjb29vcioqKiovXG4ucnVubmluZ1RleHQge1xuICBjb2xvcjogIzFlYjE1ZDtcbn1cblxuLmlkbGVUZXh0IHtcbiAgY29sb3I6ICMxZjViYWE7XG59XG5cbi5ub1RyYW5zVGV4dCB7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4ub3ZlcnNwZWVkVGV4dCB7XG4gIGNvbG9yOiAjZjI4OTE4O1xufVxuXG4uc3RvcFRleHQge1xuICBjb2xvcjogcmVkO1xufVxuXG4uc2VsZWNlZEZhYkljb24ge1xuICBjb2xvcjogIzFkOTNlZDtcbn1cblxuLm5vdFNlbGVjZWRGYWJJY29uIHtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5oZWFkaW5nIHtcbiAgaGVpZ2h0OiAyMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmMyYTg0O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTJweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDZweDtcbn1cblxuLm1hcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ4dmg7XG59XG5cbi5jYXJkRGVzaWduOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAxMnB4O1xuICAvKiB3aWR0aCBvZiB0aGUgZW50aXJlIHNjcm9sbGJhciAqL1xufVxuXG4uY2FyZERlc2lnbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLyogY29sb3Igb2YgdGhlIHRyYWNraW5nIGFyZWEgKi9cbn1cblxuLmNhcmREZXNpZ246Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC8qIGNvbG9yIG9mIHRoZSBzY3JvbGwgdGh1bWIgKi9cbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgLyogcm91bmRuZXNzIG9mIHRoZSBzY3JvbGwgdGh1bWIgKi9cbiAgYm9yZGVyOiAzcHggc29saWQgbGlnaHRncmF5O1xuICAvKiBjcmVhdGVzIHBhZGRpbmcgYXJvdW5kIHNjcm9sbCB0aHVtYiAqL1xufVxuXG4uYWxlcnRDYXJkR3JlYXRlciB7XG4gIGhlaWdodDogNDh2aDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDNweDtcbn1cblxuLyogVHJhY2sgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuXG4vKiBIYW5kbGUgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjY2FjYWNhO1xufVxuXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjY2FjYWNhO1xufVxuXG4ubWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogLTJweDtcbn1cblxuZGl2LnNjcm9sbCB7XG4gIG1hcmdpbjogNHB4LCA0cHg7XG4gIHBhZGRpbmc6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4udGltZWRpZmYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDN2dztcbiAgYm90dG9tOiA3cHg7XG59XG5cbi5jb2wge1xuICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogNXB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLkRhc2hib2FyZEJ1dHRvbnMge1xuICBjb2xvcjogI2ZmZGE0NDtcbiAgZm9udC1zaXplOiAzdnc7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbWdidXR0b25zIHtcbiAgd2lkdGg6IDMwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4vKlN0YXJ0IFNjc3MqL1xuLmhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjZiMjIxO1xufVxuXG4uYS53aGl0ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmEucmVkIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmFycm93TmV4dDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIu+BlFwiO1xuICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxN3B4LzAgRm9udEF3ZXNvbWU7XG4gIGNvbG9yOiAjNmMyYTg0O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogOS4zJTtcbiAgbGVmdDogMjAuMSU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgei1pbmRleDogMzM7XG59XG5cbi5hcnJvd1ByZXZpb3VzOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwi74GTXCI7XG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDE3cHgvMCBGb250QXdlc29tZTtcbiAgY29sb3I6ICM2YzJhODQ7XG4gIHJpZ2h0OiAwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA5LjMlO1xuICBsZWZ0OiAwJTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uZW1wdHlDbGVhcixcbi5lbXB0eUNsZWFybGVmdCB7XG4gIGhlaWdodDogNTFweDtcbiAgd2lkdGg6IDIzcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUuOCU7XG4gIGxlZnQ6IDE5LjIlO1xuICB6LWluZGV4OiAxO1xufVxuXG4uZW1wdHlDbGVhcmxlZnQge1xuICBoZWlnaHQ6IDcwcHg7XG4gIGxlZnQ6IDAlO1xufVxuXG4uc3RhdHVzQmFyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBoZWlnaHQ6IDIycHg7XG4gIGJvcmRlci1yYWRpdXM6IDklO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGdyaWQgIWltcG9ydGFudDtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDAuNztcbiAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ucGFkZGluZzEwIHtcbiAgcGFkZGluZzogM3B4IDIxcHg7XG59XG5cbi5zdGF0dXNCYXIgLnN0YXR1cy1oZWFkIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBmb250LXNpemU6IHh4LXNtYWxsO1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogN3B4O1xuICBsZWZ0OiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB6LWluZGV4OiAxO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbiNmaWx0ZXItcm93IHtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC42KTtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTtcbiAgdG9wOiAxcHg7XG4gIGxlZnQ6IC0yN3B4O1xufVxuXG4uZmlsdGVyLWJ0biB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5maWx0ZXItYnRuOmhvdmVyIHtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBsaWdodGdyYXk7XG59XG5cbi5maWx0ZXItaWNvbnMge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmZpbHRlci1mYWJzIHtcbiAgaGVpZ2h0OiAyOHB4O1xuICB3aWR0aDogMzBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDA7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIC0tYmFja2dyb3VuZDogI2YzZjJmMjtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuXG4uZmlsdGVyLWZhYnM6aG92ZXIge1xuICAtLWJhY2tncm91bmQtaG92ZXI6IGxpZ2h0Z3JheTtcbn1cblxuLnNlYXJjaC1iYXIge1xuICB3aWR0aDogMjAuOSU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcGFkZGluZzogMnB4O1xuICB6LWluZGV4OiAzO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHB1cnBsZTtcbn1cblxuLnN0YXR1c0Jhcjpob3ZlciAuc3RhdHVzLWhlYWQge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG59XG5cbi5zdGF0dXNCYXI6aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuXG4jc3RhdHVzLXJvdyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNjhweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAyMSU7XG59XG5cbi5pbnB1dC1pdGVtIHtcbiAgaGVpZ2h0OiAzNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbn1cblxuLmlucHV0LW5ldyB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5hZ2dyZWdhdGUtc2NvcmUge1xuICBtYXJnaW46IDIwcHg7XG59XG5cbi5iYXJzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMnB4O1xufVxuXG4uYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiA0cHg7XG4gIGJhY2tncm91bmQ6ICMzYjg1ZDI7XG59IiwiJHN0b3A6IHJlZDtcclxuJHJ1bm5pbmc6ICMxZWIxNWQ7XHJcbiRpZGxlOiAjMWY1YmFhO1xyXG4kb3ZlcnNwZWVkOiAjZjI4OTE4O1xyXG4kbm9UcmFuc21pc3Npb246ICMwMDAwMDA7XHJcbiRwb3dlckZhaWw6ICM3MjQwNDA7XHJcbiRkb29yT3BlbjogI2ZmODUxYjtcclxuJHRvd2VkOiAjYzIwMGI4O1xyXG4keWV0dG90cmFuczogIzdkNDEwZjtcclxuJG9ubGluZTogIzAwZTFiYztcclxuXHJcbiNncmlkVmlldyB7XHJcbiAgaGVpZ2h0OiAxMjR2aCAhaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG4jYWxlcnQge1xyXG4gIGhlaWdodDogNTN2aCAhaW1wb3J0YW50O1xyXG59XHJcbi8vICAgI21hcHZ7XHJcbi8vICAgICBoZWlnaHQ6IDMwdmggIWltcG9ydGFudDtcclxuLy8gICAgIH1cclxuXHJcbi5hY3RpdmUge1xyXG4gIC0tYmFja2dyb3VuZDogcmdiKDIxMSwgMjExLCAyMTEpO1xyXG59XHJcblxyXG4uYm90bVJvdyB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDIxJTtcclxuICBib3R0b206IDBweDtcclxuICByaWdodDogMDtcclxufVxyXG4udmVoaWNsZUluZm8ge1xyXG4gIGhlaWdodDogNzV2aCAhaW1wb3J0YW50O1xyXG59XHJcbi52ZWhpY2xlSW5mb1R0cyB7XHJcbiAgaGVpZ2h0OiA3NXZoICFpbXBvcnRhbnQ7XHJcbn1cclxuI3ByZXZlbnRpdmUge1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG4jeWVzdGVyZGF5U3RhdHVzIHtcclxuICBoZWlnaHQ6IDMzdmggIWltcG9ydGFudDtcclxufVxyXG4jZXhlY3V0aXZlU3VtbWFyeSB7XHJcbiAgaGVpZ2h0OiAzM3ZoICFpbXBvcnRhbnQ7XHJcbn1cclxuLmV4ZWN1dGl2ZUdyZWF0ZXIge1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBoZWlnaHQ6IDMwdmg7XHJcbn1cclxuI29kb21ldGVyIHtcclxuICBoZWlnaHQ6IDMzdmggIWltcG9ydGFudDtcclxufVxyXG4uYWRkcmVzcyB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcbi8vIC5zdGF0dXNCYXIge1xyXG4vLyAgIGZvbnQtc2l6ZTogMTRweDtcclxuLy8gICBjb2xvcjogd2hpdGU7XHJcbi8vICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbi8vICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgIGhlaWdodDogMjlweDtcclxuLy8gICB3aWR0aDogMjlweDtcclxuLy8gICBib3JkZXItcmFkaXVzOiA1NCU7XHJcbi8vICAgYm94LXNoYWRvdzogMCAwIDAgM3B4ICMwMDAwMDAyNDtcclxuLy8gICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XHJcbi8vIH1cclxuXHJcbi5ncmlkdmlld01hcmdpbiB7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG59XHJcbi5saXZldHJhY2tNYXJnaW4ge1xyXG4gIG1hcmdpbi10b3A6IDg1cHg7XHJcbn1cclxuLmNhcmRTdHlsZSB7XHJcbiAgaGVpZ2h0OiAzNDJweDtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG4uYmxvY2tEaXNwbGF5IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4ubm9uZURpc3BsYXkge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnN0YXR1c0xhYmVsIHtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZmlsdGVyUGFkIHtcclxuICBwYWRkaW5nOiA1cHggMXB4O1xyXG59XHJcblxyXG4uZmlsdGVyUGFkIC5pb24tYWN0aXZhdGFibGUgLmdyYXlCYWNrZ3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2FjYWNhO1xyXG59XHJcblxyXG4uZmlsdGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogMTI7XHJcbn1cclxuXHJcbi5zZWFyY2hCYWNrZ3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kOiAjMzIzODRiO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgdG9wOiAxMHZoO1xyXG59XHJcblxyXG4ubW9kYWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiByZ2IoMzIsIDMyLCAzMik7XHJcbiAgei1pbmRleDogMTI7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHJpZ2h0OiAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLy9ib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0MHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0MHB4O1xyXG59XHJcblxyXG4uZHJhZ0Rvd24ge1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgYm90dG9tOiAtNTAwcHg7XHJcbn1cclxuXHJcbi5kcmFnVXAge1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgYm90dG9tOiAwcHg7XHJcbn1cclxuLmRyYWdVcElvcyB7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICBib3R0b206IDUwcHg7XHJcbn1cclxuLmRpc3BsYXlUeXBlIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG59XHJcblxyXG4uc2VtaUNpcmNsZSB7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMiU7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAyMHB4IDE4cHg7XHJcbn1cclxuXHJcbi5hbGVydHNTdHlsZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uYm9yZGVyUmlnaHQge1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZWRlZGU7XHJcbn1cclxuXHJcbi5pbWdTaXplIHtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5jYXJkQ29udGVudFBhZCB7XHJcbiAgcGFkZGluZy10b3A6IDZweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4uY2FyZE1hcmdpbiB7XHJcbiAgLy8gYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAkc3RvcDtcclxuICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5ydW5uaW5nIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWViMTVkO1xyXG59XHJcbi50b3dlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHRvd2VkO1xyXG59XHJcbi55ZXR0b3RyYW5zbWl0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeWV0dG90cmFucztcclxufVxyXG4ub25saW5lIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkb25saW5lO1xyXG59XHJcbi5pZGxlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWY1YmFhO1xyXG59XHJcbi5zdG9wIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xyXG59XHJcbi5vdmVyc3BlZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMjg5MTg7XHJcbn1cclxuLm5vdHJhbnNtaXNzaW9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbi5hbGwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5ODlhYTI7XHJcbn1cclxuLyoqKioqKipOZXcgRGVzaWduICoqKiovXHJcbi8qKioqKioqU2lkZSBCb3JkZXIqKioqL1xyXG4ucnVubmluZ0NhcmRCb3JkZXIge1xyXG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgJHJ1bm5pbmc7XHJcbn1cclxuLnRvd2VkQ2FyZEJvcmRlciB7XHJcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAkdG93ZWQ7XHJcbn1cclxuLnlldFRvVHJhbnNtaXRDYXJkQm9yZGVyIHtcclxuICBib3JkZXItbGVmdDogNnB4IHNvbGlkICR5ZXR0b3RyYW5zO1xyXG59XHJcbi5vbmxpbmVDYXJkQm9yZGVyIHtcclxuICBib3JkZXItbGVmdDogNnB4IHNvbGlkICRvbmxpbmU7XHJcbn1cclxuLnJ1bm5pbmdDYXJkQm9yZGVyIHtcclxuICBib3JkZXItbGVmdDogNnB4IHNvbGlkICRydW5uaW5nO1xyXG59XHJcbi5pZGxlQ2FyZEJvcmRlciB7XHJcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAkaWRsZTtcclxufVxyXG4ubm9UcmFuc0NhcmRCb3JkZXIge1xyXG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgJG5vVHJhbnNtaXNzaW9uO1xyXG59XHJcbi5wb3dlckZhaWwge1xyXG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgJHBvd2VyRmFpbDtcclxuICAvLyAkcG93ZXJGYWlsOiM0MTI1MjU7XHJcbn1cclxuLm92ZXJzcGVlZENhcmRCb3JkZXIge1xyXG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgJG92ZXJzcGVlZDtcclxufVxyXG4uc3RvcENhcmRCb3JkZXIge1xyXG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgJHN0b3A7XHJcbn1cclxuLmRvb3JPcGVuIHtcclxuICBib3JkZXItbGVmdDogNnB4IHNvbGlkICRkb29yT3BlbjtcclxufVxyXG4vKioqKioqKmRyaXZlciBiZyoqKiovXHJcbi5ydW5uaW5nRHJpdmVyQmcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRydW5uaW5nO1xyXG59XHJcbi5pZGxlRHJpdmVyQmcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRpZGxlO1xyXG59XHJcbi5ub1RyYW5zRHJpdmVyQmcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRub1RyYW5zbWlzc2lvbjtcclxufVxyXG4ub3ZlcnNwZWVkRHJpdmVyQmcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRvdmVyc3BlZWQ7XHJcbn1cclxuLnN0b3BEcml2ZXJCZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHN0b3A7XHJcbn1cclxuXHJcbi8qKioqKioqQWRkcmVzcyBicm9kZXIqKioqL1xyXG4ucnVubmluZ0FkZHJlc3NCb3JkZXIge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICRydW5uaW5nO1xyXG59XHJcbi5pZGxlQWRkcmVzc0JvcmRlciB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgJGlkbGU7XHJcbn1cclxuLm5vVHJhbnNBZGRyZXNzQm9yZGVyIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAkbm9UcmFuc21pc3Npb247XHJcbn1cclxuLm92ZXJzcGVlZEFkZHJlc3NCb3JkZXIge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICRvdmVyc3BlZWQ7XHJcbn1cclxuLnN0b3BBZGRyZXNzQm9yZGVyIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAkc3RvcDtcclxufVxyXG5cclxuLyoqKioqKip0ZXh0IGNvb29yKioqKi9cclxuLnJ1bm5pbmdUZXh0IHtcclxuICBjb2xvcjogJHJ1bm5pbmc7XHJcbn1cclxuLmlkbGVUZXh0IHtcclxuICBjb2xvcjogJGlkbGU7XHJcbn1cclxuLm5vVHJhbnNUZXh0IHtcclxuICBjb2xvcjogJG5vVHJhbnNtaXNzaW9uO1xyXG59XHJcbi5vdmVyc3BlZWRUZXh0IHtcclxuICBjb2xvcjogJG92ZXJzcGVlZDtcclxufVxyXG4uc3RvcFRleHQge1xyXG4gIGNvbG9yOiAkc3RvcDtcclxufVxyXG4uc2VsZWNlZEZhYkljb24ge1xyXG4gIGNvbG9yOiAjMWQ5M2VkO1xyXG59XHJcbi5ub3RTZWxlY2VkRmFiSWNvbiB7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuXHJcbi5oZWFkaW5nIHtcclxuICBoZWlnaHQ6IDIycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZjMmE4NDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEycHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEycHg7XHJcbiAgcGFkZGluZzogNnB4O1xyXG59XHJcbi5tYXAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDh2aDtcclxufVxyXG4uY2FyZERlc2lnbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiAxMnB4OyAvKiB3aWR0aCBvZiB0aGUgZW50aXJlIHNjcm9sbGJhciAqL1xyXG59XHJcbi5jYXJkRGVzaWduOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpOyAvKiBjb2xvciBvZiB0aGUgdHJhY2tpbmcgYXJlYSAqL1xyXG59XHJcbi5jYXJkRGVzaWduOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IC8qIGNvbG9yIG9mIHRoZSBzY3JvbGwgdGh1bWIgKi9cclxuICBib3JkZXItcmFkaXVzOiAyMHB4OyAvKiByb3VuZG5lc3Mgb2YgdGhlIHNjcm9sbCB0aHVtYiAqL1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkIHJnYigyMTEsIDIxMSwgMjExKTsgLyogY3JlYXRlcyBwYWRkaW5nIGFyb3VuZCBzY3JvbGwgdGh1bWIgKi9cclxufVxyXG5cclxuLmFsZXJ0Q2FyZEdyZWF0ZXIge1xyXG4gIGhlaWdodDogNDh2aDtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiAzcHg7XHJcbn1cclxuXHJcbi8qIFRyYWNrICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi8qIEhhbmRsZSAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjAyLCAyMDIsIDIwMik7XHJcbn1cclxuXHJcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjAyLCAyMDIsIDIwMik7XHJcbn1cclxuLy8gbmV3IGNoYW5nZXNcclxuXHJcbi5tYXJnaW4ge1xyXG4gIG1hcmdpbi10b3A6IC0ycHg7XHJcbn1cclxuZGl2LnNjcm9sbCB7XHJcbiAgbWFyZ2luOiA0cHgsIDRweDtcclxuICBwYWRkaW5nOiA0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIGhlaWdodDogMTEwcHg7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuLy8gQXJtb3JvblxyXG5cclxuLnRpbWVkaWZmIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LXNpemU6IDN2dztcclxuICBib3R0b206IDdweDtcclxufVxyXG5cclxuLmNvbCB7XHJcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcclxuICBmbGV4OiAxO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLkRhc2hib2FyZEJ1dHRvbnMge1xyXG4gIGNvbG9yOiAjZmZkYTQ0O1xyXG4gIGZvbnQtc2l6ZTogM3Z3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmltZ2J1dHRvbnMge1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4vKlN0YXJ0IFNjc3MqL1xyXG4uaGVhZGVyLWJhY2tncm91bmQtY29sb3Ige1xyXG4gIC0tYmFja2dyb3VuZDogI2Y2YjIyMTtcclxufVxyXG5cclxuLmEud2hpdGUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uYS5yZWQge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuLmFycm93TmV4dDo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwi74GUXCI7XHJcbiAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTdweC8wIEZvbnRBd2Vzb21lO1xyXG4gIGNvbG9yOiAjNmMyYTg0O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDkuMyU7XHJcbiAgbGVmdDogMjAuMSU7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIHotaW5kZXg6IDMzO1xyXG59XHJcbi5hcnJvd1ByZXZpb3VzOjphZnRlciB7XHJcbiAgY29udGVudDogXCJcXGYwNTNcIjtcclxuICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxN3B4LzAgRm9udEF3ZXNvbWU7XHJcbiAgY29sb3I6ICM2YzJhODQ7XHJcbiAgcmlnaHQ6IDBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA5LjMlO1xyXG4gIGxlZnQ6IDAlO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG4uZW1wdHlDbGVhcixcclxuLmVtcHR5Q2xlYXJsZWZ0IHtcclxuICBoZWlnaHQ6IDUxcHg7XHJcbiAgd2lkdGg6IDIzcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogNS44JTtcclxuICBsZWZ0OiAxOS4yJTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcbi5lbXB0eUNsZWFybGVmdCB7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIGxlZnQ6IDAlO1xyXG59XHJcbi8vIC5zdGF0dXNCYXJ7XHJcbi8vICAgZm9udC1zaXplOiAxNHB4O1xyXG4vLyAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gICBmb250LXdlaWdodDogYm9sZDtcclxuLy8gICBoZWlnaHQ6IDI5cHg7XHJcbi8vICAgd2lkdGg6IDI5cHggIWltcG9ydGFudDtcclxuLy8gICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbi8vICAgbWFyZ2luOjRweCAxMnB4IDE2cHggN3B4O1xyXG4vLyAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCAjMDAwMDAwMjQ7XHJcbi8vICAgZGlzcGxheTogZ3JpZCAhaW1wb3J0YW50O1xyXG4vLyAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gfVxyXG4vLyAudG9vbHRpcCB7XHJcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuLy8gfVxyXG4vLyAudG9vbHRpcCAudG9vbHRpcHRleHRpbml0aWFsIHtcclxuLy8gICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbi8vICAgd2lkdGg6IDEyMHB4O1xyXG4vLyAgIGNvbG9yOiBibGFjaztcclxuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4vLyAgIHBhZGRpbmc6IDEzcHggMDtcclxuLy8gICBib3R0b206IDEwMCU7XHJcbi8vICAgZm9udC1zaXplOiAxMHB4O1xyXG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICB0b3A6IDIwcHg7XHJcbi8vICAgbGVmdDogLTQ3cHg7XHJcbi8vICAgei1pbmRleDogMTtcclxuLy8gfVxyXG4vLyAudG9vbHRpcCAudG9vbHRpcHRleHQge1xyXG4vLyAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuLy8gICB3aWR0aDogMTIwcHg7XHJcbi8vICAgY29sb3I6ICMxZDFjMWM7XHJcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuLy8gICBwYWRkaW5nOiAxM3B4IDA7XHJcbi8vICAgYm90dG9tOiAxMDAlO1xyXG4vLyAgIGZvbnQtc2l6ZTogMTBweDtcclxuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgdG9wOiAyMHB4O1xyXG4vLyAgIGxlZnQ6IC00NXB4O1xyXG4vLyAgIHotaW5kZXg6IDE7XHJcbi8vIH1cclxuXHJcbi8vIC50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XHJcbi8vICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuLy8gfVxyXG4vLyAudG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHRpbml0aWFsIHtcclxuLy8gICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4vLyB9XHJcblxyXG4vL0JhciAtdHlwZVxyXG4uc3RhdHVzQmFyIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGhlaWdodDogMjJweDtcclxuICBib3JkZXItcmFkaXVzOiA5JTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZ3JpZCAhaW1wb3J0YW50O1xyXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAgIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbn1cclxuLnBhZGRpbmcxMCB7XHJcbiAgcGFkZGluZzogM3B4IDIxcHg7XHJcbn1cclxuLy8gLnN0YXR1c0JhcntcclxuLy8gICBmb250LXNpemU6IDE0cHg7XHJcbi8vICAgY29sb3I6IHdoaXRlO1xyXG4vLyAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4vLyAgIGhlaWdodDogMjhweDtcclxuLy8gICB3aWR0aDogMzFweCAhaW1wb3J0YW50O1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgZGlzcGxheTogZ3JpZCAhaW1wb3J0YW50O1xyXG4vLyAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICBib3gtc2hhZG93OiAwIDAgMCAzcHggIzAwMDAwMDI0O1xyXG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gICBvcGFjaXR5OiAwLjg7XHJcbi8vIH1cclxuLy9CYXIqKioqXHJcbi5zdGF0dXNCYXIgLnN0YXR1cy1oZWFkIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgZm9udC1zaXplOiB4eC1zbWFsbDtcclxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogN3B4O1xyXG4gIGxlZnQ6IDBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB6LWluZGV4OiAxO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLy9DaXJjbGUgLW5ldyBiZWxvdyB0d29cclxuLy8gLnN0YXR1c0JhciAuc3RhdHVzLWhlYWR7XHJcbi8vICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4vLyAgIGZvbnQtc2l6ZTogeHgtc21hbGw7XHJcbi8vICAgcGxhY2UtY29udGVudDogY2VudGVyO1xyXG4vLyAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gICB0b3A6IDEzcHg7XHJcbi8vICAgbGVmdDogMHB4O1xyXG4vLyAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4vLyAgIHotaW5kZXg6IDE7XHJcbi8vICAgY29sb3I6YmxhY2s7XHJcbi8vIH1cclxuI2ZpbHRlci1yb3cge1xyXG4gIGxpbmUtaGVpZ2h0OiAwO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC42KTtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMTtcclxuICB0b3A6IDFweDtcclxuICBsZWZ0OiAtMjdweDtcclxufVxyXG5cclxuLmZpbHRlci1idG4ge1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG4uZmlsdGVyLWJ0bjpob3ZlciB7XHJcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBsaWdodGdyYXk7XHJcbn1cclxuLmZpbHRlci1pY29ucyB7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5maWx0ZXItZmFicyB7XHJcbiAgaGVpZ2h0OiAyOHB4O1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW46IDA7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAtLWJhY2tncm91bmQ6ICNmM2YyZjI7XHJcbiAgLS1ib3gtc2hhZG93OiBub25lO1xyXG59XHJcbi5maWx0ZXItZmFiczpob3ZlciB7XHJcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBsaWdodGdyYXk7XHJcbn1cclxuLnNlYXJjaC1iYXIge1xyXG4gIHdpZHRoOiAyMC45JTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcGFkZGluZzogMnB4O1xyXG4gIHotaW5kZXg6IDM7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHB1cnBsZTtcclxufVxyXG4uc3RhdHVzQmFyOmhvdmVyIC5zdGF0dXMtaGVhZCB7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG59XHJcbi5zdGF0dXNCYXI6aG92ZXIge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuI3N0YXR1cy1yb3cge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogNjhweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHdpZHRoOiAyMSU7XHJcbn1cclxuXHJcbi5pbnB1dC1pdGVtIHtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcclxufVxyXG4uaW5wdXQtbmV3IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmFnZ3JlZ2F0ZS1zY29yZSB7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG4uYmFycyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMjBweDtcclxuICB3aWR0aDogMjJweDtcclxufVxyXG5cclxuLmJhciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogNHB4O1xyXG4gIGJhY2tncm91bmQ6ICMzYjg1ZDI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/gridview-tab/vtsgrid/vtsgrid.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/gridview-tab/vtsgrid/vtsgrid.component.ts ***!
  \***********************************************************/
/*! exports provided: VtsgridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VtsgridComponent", function() { return VtsgridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_ajax_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var _services_websocket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/websocket.service */ "./src/app/services/websocket.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _action_mode_action_mode_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../action-mode/action-mode.page */ "./src/app/gridview-tab/action-mode/action-mode.page.ts");
/* harmony import */ var _alerts_modal_alerts_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../alerts-modal/alerts-modal.page */ "./src/app/gridview-tab/alerts-modal/alerts-modal.page.ts");
/* harmony import */ var _grid_filter_grid_filter_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../grid-filter/grid-filter.page */ "./src/app/gridview-tab/grid-filter/grid-filter.page.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "./node_modules/@ionic-native/clipboard/ngx/index.js");
/* harmony import */ var src_app_services_auth_map_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/auth-map.service */ "./src/app/services/auth-map.service.ts");
/* harmony import */ var src_app_services_google_map_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/google-map.service */ "./src/app/services/google-map.service.ts");
/* harmony import */ var src_app_services_openlayer_map_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/services/openlayer-map.service */ "./src/app/services/openlayer-map.service.ts");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var src_app_services_websocketlive_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/services/websocketlive.service */ "./src/app/services/websocketlive.service.ts");
/* harmony import */ var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/firebase-x/ngx */ "./node_modules/@ionic-native/firebase-x/ngx/index.js");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic-native/unique-device-id/ngx */ "./node_modules/@ionic-native/unique-device-id/ngx/index.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "./node_modules/@ionic-native/app-version/ngx/index.js");
/* harmony import */ var _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ionic-native/market/ngx */ "./node_modules/@ionic-native/market/ngx/index.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");


























let VtsgridComponent = class VtsgridComponent {
    constructor(websocketService, commonService, router, mapService, activatedRoute, ajaxService, modalController, socialSharing, clipboard, websocketliveService, platform, menuController, firebaseX, device, udid, network, alertController, appVersion, authenticationService, market) {
        this.websocketService = websocketService;
        this.commonService = commonService;
        this.router = router;
        this.mapService = mapService;
        this.activatedRoute = activatedRoute;
        this.ajaxService = ajaxService;
        this.modalController = modalController;
        this.socialSharing = socialSharing;
        this.clipboard = clipboard;
        this.websocketliveService = websocketliveService;
        this.platform = platform;
        this.menuController = menuController;
        this.firebaseX = firebaseX;
        this.device = device;
        this.udid = udid;
        this.network = network;
        this.alertController = alertController;
        this.appVersion = appVersion;
        this.authenticationService = authenticationService;
        this.market = market;
        this.communicationStatus = {
            gps: true,
            tower: true,
            battery: true,
        };
        this.gridView = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.currentPage = 1;
        this.displayCount = 15;
        this.sortIcon = "ios-arrow-round-back";
        // filterValue: string;
        this.pageSeleter = "gridview";
        this.selectedVin = { vin: "" };
        this.filterIconClose = false;
        this.alertTypes = ["ENGINE ON"];
        this.dashboardData = new Array();
        this.loadTempData = new Array();
        this.showSkeletonLoader = true;
        this.count = 20;
        this.showSwipeModal = "false";
        this.viewEnter = false;
        this.NoDataImage = false;
        this.state = "Vin";
        this.filterIcon = "md-funnel";
        this.statusBarVehicle = [
            "All",
            "Running",
            "Idle",
            "Overspeed",
            "No Transmission",
            "Stop",
            "Overspeed",
        ];
        this.statusBarOthers = [
            "All",
            "Door Open",
            "Geofence Voilation",
            "Power Fail",
            "No Trans, High Temp",
        ];
        this.tempratureRange = {
            Hours: ["00", "01", "02", "03", "04", "05"],
            temp1: ["20.89", "45.90", "67.98", "09.90", "23.90"],
            temp2: ["20.89", "45.90", "67.98", "09.90", "23.90"],
            temp3: ["20.89", "45.90", "67.98", "09.90", "23.90"],
            temp4: ["20.89", "45.90", "67.98", "09.90", "23.90"],
        };
        this.model = {
            AUTO: "M663.22 475.97c38.9,0 70.55,31.65 70.55,70.56 0,38.9 -31.65,70.56 -70.55,70.56 -38.91,0 -70.56,-31.65 -70.56,-70.56 0,-38.91 31.65,-70.56 70.56,-70.56zm-479.78 0c38.9,0 70.55,31.65 70.55,70.56 0,38.9 -31.65,70.56 -70.55,70.56 -38.91,0 -70.56,-31.65 -70.56,-70.56 0,-38.91 31.65,-70.56 70.56,-70.56zm0 112.89c23.34,0 42.33,-18.99 42.33,-42.33 0,-23.34 -18.99,-42.33 -42.33,-42.33 -23.34,0 -42.34,18.99 -42.34,42.33 0,23.34 19,42.33 42.34,42.33zm-169.34 -112.89l0 -84.67c0,-6.06 3.88,-11.47 9.65,-13.38l79.62 -26.55c29.98,-50.78 71.2,-99.11 162.29,-115.07 0.17,-0.03 0.34,-0.06 0.51,-0.09 168.22,-23.25 294.51,14.69 375.6,112.82 60.35,0.88 121.96,13.49 158.2,36.69 18.76,12.02 29.9,32.95 30.94,55.22l1.64 35.03c7.79,0 14.11,6.33 14.11,14.11l0 56.45c0,7.79 -6.32,14.11 -14.11,14.11l-56.44 0c-7.84,0 -14.1,-6.44 -14.11,-14.27 0,-0.07 -0.02,-0.14 -0.02,-0.22 -0.21,-54.37 -44.34,-98.4 -98.76,-98.4 -54.56,0 -98.78,44.22 -98.78,98.78 1.01,8.56 -5.74,14.11 -14.11,14.11l-254 0c-7.83,0 -14.1,-6.44 -14.11,-14.27 0,-0.07 -0.02,-0.14 -0.02,-0.22 -0.21,-54.38 -44.33,-98.4 -98.76,-98.4 -54.56,0 -98.78,44.22 -98.78,98.78 1.02,8.56 -5.74,14.11 -14.11,14.11l-56.44 0c-7.79,0 -14.11,-6.32 -14.11,-14.11l0 -56.45c-0.01,-7.78 6.31,-14.11 14.1,-14.11zm381 -134.05c0,3.89 3.16,7.05 7.06,7.05l184.02 0c6.52,0 9.49,-8.01 4.67,-12.4 -48.96,-44.64 -111.23,-70.16 -187.97,-76.95 -4.13,-0.37 -7.78,2.97 -7.78,7.11l0 75.19zm-169.53 0.07c0.05,3.86 3.19,6.98 7.06,6.98l127.2 0c3.89,0 7.05,-3.16 7.05,-7.05l0 -77.05c0,-3.91 -3.12,-7.13 -7.01,-7.13 -28.14,-0.03 -57.91,2.02 -89.56,6.4 -15.08,2.65 -28.51,6.29 -40.73,10.76 -2.81,1.03 -4.6,3.76 -4.57,6.75l0.56 60.34zm-73.64 6.98l38.36 0c3.93,0 7.1,-3.2 7.06,-7.12l-0.37 -38.24c-0.05,-5.83 -6.7,-8.99 -11.4,-5.55 -15.25,11.15 -27.94,24.43 -39.24,39.5 -3.53,4.7 -0.28,11.41 5.59,11.41zm511.29 239.89c23.34,0 42.33,-18.99 42.33,-42.33 0,-23.34 -18.99,-42.33 -42.33,-42.33 -23.34,0 -42.34,18.99 -42.34,42.33 0,23.34 19,42.33 42.34,42.33z",
            BIKE: "M724.48 438.73c-41.58,0 -78.36,20.9 -100.44,52.73l-31.81 -13.62 0 -19.94 99.62 -41.33 25.58 -58.97 11.76 0 58.93 69.99c2.27,2.7 5.53,4.1 8.8,4.1 2.62,0 5.24,-0.89 7.4,-2.71 4.86,-4.09 5.48,-11.34 1.39,-16.2l-46.45 -55.18 7.38 0c6.36,0 11.5,-5.15 11.5,-11.5 0,-6.35 -5.14,-11.5 -11.5,-11.5l-17.27 0 15.05 -7.13c7.13,-3.38 10.2,-11.88 6.88,-19.04l-8.67 -18.69c-2.34,-5.03 -7.36,-8.27 -12.91,-8.32l-159.52 -1.45c-0.04,0 -0.09,0 -0.13,0 -3.99,0 -7.8,1.66 -10.52,4.58 -0.3,0.32 -32.89,34.06 -93.01,41.89 -3.93,-7.3 -10.39,-17.58 -19.91,-27.79 -23.12,-24.8 -53.51,-37.91 -87.87,-37.91 -6.96,0 -14.18,0.54 -21.47,1.59 -0.04,0.01 -0.08,0.02 -0.12,0.02 -1.69,0.26 -41.82,6.51 -97.37,22.09 -0.6,0.03 -1.48,0.06 -2.55,0.06 -6.37,0 -21.85,-1.14 -27.87,-11.66 -0.44,-0.76 -0.86,-1.64 -1.25,-2.63l26.57 -4.83c7.42,-1.35 12.35,-8.46 11,-15.88 -1.35,-7.42 -8.46,-12.34 -15.88,-10.99l-21.41 3.89c3.28,-13.53 10.72,-32.01 25.51,-57.21 3.08,-5.26 2.52,-11.89 -1.41,-16.55 -2.79,-3.3 -6.84,-5.1 -10.99,-5.1 -1.71,0 -3.42,0.3 -5.08,0.92 -1.59,0.6 -39.42,15.14 -73.73,51.01 -21.97,22.96 -45.29,57.92 -52.61,106.84 1.95,-3.79 4.36,-7.48 7.41,-10.92 0,0 39.24,25.62 17.09,62.7l-25.99 0c0.63,7.54 1.6,15.3 2.99,23.33 0.54,3.13 2.1,5.99 4.44,8.14l32.1 29.49c-105.56,-14.16 -143.52,54.35 -143.52,54.35 -7.92,10.54 -3.93,21.9 8.84,15.87 -8.59,16.7 -13.47,35.61 -13.47,55.65 0,67.37 54.82,122.19 122.19,122.19 67.37,0 122.18,-54.82 122.18,-122.19 0,-5 -0.33,-9.92 -0.92,-14.77l149.3 0 -58.94 -43.93c0,0 -69.93,6.76 -119.83,-47.54 5.22,-0.26 10.92,-0.43 16.97,-0.43 40.46,0 96.79,7.28 135.34,41.97 0.49,0.44 1.02,0.86 1.58,1.23l132.24 89.13c2.45,1.65 5.25,2.46 8.03,2.46 3.71,0 7.39,-1.43 10.17,-4.21l53.28 -53.29 31.77 13.61c-0.67,5.17 -1.05,10.42 -1.05,15.77 0,67.37 54.81,122.19 122.18,122.19 67.37,0 122.18,-54.82 122.18,-122.19 0,-67.38 -54.81,-122.19 -122.18,-122.19zm-132.25 -29.63l90.04 -42.69 -12.17 28.05 -77.87 32.32 0 -17.68zm-470.05 216.51c-35.67,0 -64.68,-29.02 -64.68,-64.69 0,-35.67 29.01,-64.69 64.68,-64.69 1.5,0 2.99,0.07 4.47,0.17l-26.76 55.17 51.74 25.1 24.74 -51.01c6.63,10.15 10.49,22.26 10.49,35.26 0.01,35.67 -29.01,64.69 -64.68,64.69zm602.3 0c-32.73,0 -59.84,-24.44 -64.09,-56.03l48.94 20.96 22.64 -52.85 -52.99 -22.7c11.69,-11.59 27.77,-18.76 45.5,-18.76 35.67,0 64.69,29.02 64.69,64.69 0,35.67 -29.02,64.69 -64.69,64.69z",
            BOBCAT: "M203.22 382.43l273.99 98.6c21.69,18.68 -6.53,23.24 20.62,52.77 12.74,13.86 24.81,20.81 30.4,42.99 8.09,32.11 -0.97,34.73 13.7,65.32 56.23,13.1 145.13,-16.93 208.88,-16.93 -25.49,-38.07 -36.28,-10.31 -70.52,-31.1l-124.7 -112.4c-14.13,-39.66 32.02,-22.85 -114.61,-71.68 -26.03,-8.66 -50.38,-18.68 -79.03,-28.22l-158.73 -55.8 0 56.45zm56.45 -129.83l5.65 0c20.47,0 22.13,30.53 22.58,50.8l-50.81 0c1.66,-19.91 2.2,-50.8 22.58,-50.8zm107.26 0l73.39 0c0.57,25.46 6.4,29.82 11.29,50.8l-73.39 0c-0.84,-10.13 -8.23,-43.96 -11.29,-50.8zm-67.74 0l45.16 0c5.9,12.29 10.88,32.47 11.29,50.8l-45.16 0c-1.17,-14.04 -6.46,-40.73 -11.29,-50.8zm-33.87 -56.46c3.87,16.61 5.64,17.23 5.64,39.52l-22.58 0c12.7,-26.45 -5,-23.44 16.94,-39.52zm90.32 0l67.74 0c3.14,13.45 5.95,28.39 11.3,39.52l-73.39 0c-0.43,-19.24 -3.42,-22.12 -5.65,-39.52zm-67.74 0l45.16 0c3.87,16.61 5.65,17.23 5.65,39.52l-45.16 0c-0.43,-19.24 -3.42,-22.12 -5.65,-39.52zm-84.68 112.91c20.28,9.72 33.08,15.38 62.32,16.71 63.67,2.9 7.78,18.77 56.23,22.8l0 -22.58 39.52 0c14.56,30.34 -2.34,42.37 33.87,50.81 -1.17,-14.04 -6.46,-40.73 -11.29,-50.81l73.39 0c17.11,73.48 13.33,89.37 56.45,90.33l-50.07 -181.92c-22.6,-89.73 103.69,-77.76 -215.26,-77.76 -31.94,0 -20.61,101.25 -45.16,152.42zm400.81 112.9c0,18.07 -5.1,21.43 -12.16,33 -6.67,10.91 -10.32,18.24 -16.06,29.1 17.79,11.91 114.71,107.26 124.19,107.26 29.98,0 18.44,-13.93 46.9,9.28 23.73,19.35 20.84,13.84 20.84,52.81 52.35,0 36.91,3.08 67.74,5.65 22.03,-94.54 4.92,-43.18 3.75,-102.27 -0.2,-10.16 14.28,-51.59 -33.36,-88.28 -13.19,-10.16 -33.4,-12.68 -55.06,-12.68 0,-21.1 3.31,-73.39 -28.23,-73.39 -24.41,0 -22.75,11.3 -39.51,11.3 -32.95,0 -48.66,-10.62 -79.04,-11.3l0 39.52zm-171.9 149.51c19.71,0 35.69,15.98 35.69,35.69 0,19.71 -15.98,35.69 -35.69,35.69 -19.71,0 -35.69,-15.98 -35.69,-35.69 0,-19.71 15.98,-35.69 35.69,-35.69zm0 -47.73c-46.07,0 -83.42,37.35 -83.42,83.42 0,46.07 37.35,83.42 83.42,83.42 46.07,0 83.42,-37.35 83.42,-83.42 0,-46.07 -37.35,-83.42 -83.42,-83.42zm-251.1 47.73c19.71,0 35.69,15.98 35.69,35.69 0,19.71 -15.98,35.69 -35.69,35.69 -19.71,0 -35.69,-15.98 -35.69,-35.69 0,-19.71 15.98,-35.69 35.69,-35.69zm-90.71 -256.77l16.93 0 0 16.94 -16.93 0 0 -16.94zm-90.32 225.81c35.18,23.56 23.33,34.41 84.67,39.52 9.99,-42.89 49.42,-72.23 101.62,-73.39l0 -197.58c-43.81,-10.21 -69.97,-33.87 -124.2,-33.87 0,20.71 -3.9,47.45 -6.31,72.71 -8.5,88.95 -37.63,-25.54 -55.78,192.61zm181.03 -16.77c-46.07,0 -83.42,37.35 -83.42,83.42 0,46.07 37.35,83.42 83.42,83.42 46.07,0 83.42,-37.35 83.42,-83.42 0,-46.07 -37.35,-83.42 -83.42,-83.42zm22.19 -11.46c80.51,18.76 73.39,84.79 73.39,129.84l62.1 0c-10.42,-44.72 -7.98,-85.16 36.87,-115.54 43.46,-29.45 49.79,-14.3 98.61,-14.3 -2.32,-27.89 -4.47,-21.49 -57.2,-38.76 -36.67,-12.01 -191.44,-72.28 -213.77,-74.14l0 112.9z",
            BUS: "M819.35 131.57l-62.07 0 0 213.56 24.82 0 0 98.06 -47.18 0.01 0 -324.03c0.02,-65.82 -53.35,-119.17 -119.17,-119.17l-392.31 0c-65.81,0 -119.18,53.35 -119.18,119.17l0 317.82 -40.96 0 0 -104.31 26.07 0 0 -213.51 -62.06 0 0 213.51 26.07 0 0 114.27 50.88 0 0 233.4c0,45.08 25.09,84.38 62.08,104.6l0 61.69 104.27 0 0 -47.14 295.46 0 0 47.16 104.31 0 0 -60.51c38.32,-19.77 64.54,-59.72 64.54,-105.82l0 -227.23 57.11 0 0 -107.98 27.32 0 0 -213.55 0 0zm-536.3 -106.77l278.06 0 0 64.59 -278.06 0 0 -64.59zm29.78 650.55l-153.93 0 0 -69.48 153.93 0 0 69.48zm372.43 0l-153.93 0 0 -69.48 153.93 0 0 69.48zm0 -223.46c0,0 -29.8,94.37 -268.14,94.37 -238.38,0 -263.22,-94.37 -263.22,-94.37l0 -327.78 531.36 0 0 327.78z",
            CAR: "M663.22 475.97c38.9,0 70.55,31.65 70.55,70.56 0,38.9 -31.65,70.56 -70.55,70.56 -38.91,0 -70.56,-31.65 -70.56,-70.56 0,-38.91 31.65,-70.56 70.56,-70.56zm-479.78 0c38.9,0 70.55,31.65 70.55,70.56 0,38.9 -31.65,70.56 -70.55,70.56 -38.91,0 -70.56,-31.65 -70.56,-70.56 0,-38.91 31.65,-70.56 70.56,-70.56zm0 112.89c23.34,0 42.33,-18.99 42.33,-42.33 0,-23.34 -18.99,-42.33 -42.33,-42.33 -23.34,0 -42.34,18.99 -42.34,42.33 0,23.34 19,42.33 42.34,42.33zm-169.34 -112.89l0 -84.67c0,-6.06 3.88,-11.47 9.65,-13.38l79.62 -26.55c29.98,-50.78 71.2,-99.11 162.29,-115.07 0.17,-0.03 0.34,-0.06 0.51,-0.09 168.22,-23.25 294.51,14.69 375.6,112.82 60.35,0.88 121.96,13.49 158.2,36.69 18.76,12.02 29.9,32.95 30.94,55.22l1.64 35.03c7.79,0 14.11,6.33 14.11,14.11l0 56.45c0,7.79 -6.32,14.11 -14.11,14.11l-56.44 0c-7.84,0 -14.1,-6.44 -14.11,-14.27 0,-0.07 -0.02,-0.14 -0.02,-0.22 -0.21,-54.37 -44.34,-98.4 -98.76,-98.4 -54.56,0 -98.78,44.22 -98.78,98.78 1.01,8.56 -5.74,14.11 -14.11,14.11l-254 0c-7.83,0 -14.1,-6.44 -14.11,-14.27 0,-0.07 -0.02,-0.14 -0.02,-0.22 -0.21,-54.38 -44.33,-98.4 -98.76,-98.4 -54.56,0 -98.78,44.22 -98.78,98.78 1.02,8.56 -5.74,14.11 -14.11,14.11l-56.44 0c-7.79,0 -14.11,-6.32 -14.11,-14.11l0 -56.45c-0.01,-7.78 6.31,-14.11 14.1,-14.11zm381 -134.05c0,3.89 3.16,7.05 7.06,7.05l184.02 0c6.52,0 9.49,-8.01 4.67,-12.4 -48.96,-44.64 -111.23,-70.16 -187.97,-76.95 -4.13,-0.37 -7.78,2.97 -7.78,7.11l0 75.19zm-169.53 0.07c0.05,3.86 3.19,6.98 7.06,6.98l127.2 0c3.89,0 7.05,-3.16 7.05,-7.05l0 -77.05c0,-3.91 -3.12,-7.13 -7.01,-7.13 -28.14,-0.03 -57.91,2.02 -89.56,6.4 -15.08,2.65 -28.51,6.29 -40.73,10.76 -2.81,1.03 -4.6,3.76 -4.57,6.75l0.56 60.34zm-73.64 6.98l38.36 0c3.93,0 7.1,-3.2 7.06,-7.12l-0.37 -38.24c-0.05,-5.83 -6.7,-8.99 -11.4,-5.55 -15.25,11.15 -27.94,24.43 -39.24,39.5 -3.53,4.7 -0.28,11.41 5.59,11.41zm511.29 239.89c23.34,0 42.33,-18.99 42.33,-42.33 0,-23.34 -18.99,-42.33 -42.33,-42.33 -23.34,0 -42.34,18.99 -42.34,42.33 0,23.34 19,42.33 42.34,42.33z",
            COMPRESSORS: "M302.39 136.07c0,-16.7 -13.54,-30.24 -30.24,-30.24 -16.7,0 -30.24,13.54 -30.24,30.24 0,16.7 13.54,30.24 30.24,30.24 16.7,0 30.24,-13.54 30.24,-30.24zm531.31 204.21c-3.64,-21.84 -22.51,-37.86 -44.65,-37.9l-731.44 0c-22.1,0.04 -40.95,16.01 -44.63,37.8 -8.42,52.5 -12.75,105.57 -12.97,158.74 0.22,53.14 4.56,106.17 12.96,158.64 3.64,21.84 22.51,37.86 44.65,37.9l48.99 0c7.69,-85.7 79.51,-151.36 165.55,-151.36 86.04,0 157.85,65.66 165.54,151.36l106.58 0 0 -15.12c0,-8.35 6.77,-15.12 15.12,-15.12 8.35,0 15.12,6.77 15.12,15.12l0 105.83 120.95 0 0 -105.83c0,-8.35 6.77,-15.12 15.12,-15.12 8.35,0 15.12,6.77 15.12,15.12l0 15.12 63.34 0c22.1,-0.04 40.95,-16.01 44.63,-37.8 8.42,-52.5 12.75,-105.58 12.97,-158.75 -0.21,-53.13 -4.55,-106.16 -12.95,-158.63zm-667.38 37.69l-45.36 0c-8.35,0 -15.12,-6.77 -15.12,-15.12 0,-8.35 6.77,-15.12 15.12,-15.12l45.36 0c8.35,0 15.12,6.77 15.12,15.12 0,8.35 -6.77,15.12 -15.12,15.12zm559.39 0l-498.92 0c-8.35,0 -15.12,-6.77 -15.12,-15.12 0,-8.35 6.77,-15.12 15.12,-15.12l498.92 0c8.35,0 15.12,6.77 15.12,15.12 0,8.35 -6.77,15.12 -15.12,15.12zm-453.56 196.54c-55.03,0 -104.65,33.15 -125.71,84 -21.06,50.85 -9.42,109.37 29.5,148.29 38.92,38.92 97.44,50.56 148.29,29.5 50.85,-21.06 84,-70.68 84,-125.71 -0.09,-75.13 -60.96,-136 -136.08,-136.08zm0 211.66c-41.75,0 -75.59,-33.84 -75.59,-75.59 0,-41.75 33.84,-75.6 75.59,-75.6 41.75,0 75.59,33.84 75.59,75.59 -0.04,41.74 -33.86,75.55 -75.59,75.6zm302.37 45.36c0,8.35 6.77,15.12 15.12,15.12l90.71 0c8.35,0 15.12,-6.77 15.12,-15.12l0 -15.12 -120.95 0 0 15.12zm-257.02 -120.95c0,-25.05 -20.3,-45.35 -45.35,-45.35 -25.05,0 -45.35,20.3 -45.35,45.35 0,25.05 20.3,45.35 45.35,45.35 25.05,0 45.35,-20.3 45.35,-45.35zm-210.88 -559.39l-31.01 0 0 120.95 101.29 0c-40.08,-28.01 -65.79,-72.26 -70.28,-120.95zm467.9 120.95c75.15,0 136.07,-60.92 136.07,-136.07 0,-75.15 -60.92,-136.07 -136.07,-136.07 -75.15,0 -136.07,60.92 -136.07,136.07 0.08,75.11 60.96,135.99 136.07,136.07zm86.92 -166.1c3.95,-0.67 8.01,0.26 11.28,2.58 3.27,2.32 5.48,5.85 6.15,9.8 0.99,5.83 1.48,11.73 1.48,17.64 0,8.35 -6.77,15.12 -15.12,15.12 -8.35,0 -15.12,-6.77 -15.12,-15.12 0,-4.22 -0.34,-8.43 -1.04,-12.59 -1.4,-8.22 4.14,-16.03 12.37,-17.43zm-15.76 -41.14c5.9,5.9 5.9,15.47 0,21.38l-30.34 30.36c2.96,6.05 4.51,12.69 4.54,19.43 0,25.05 -20.31,45.36 -45.36,45.36 -25.05,0 -45.36,-20.31 -45.36,-45.36 0,-25.05 20.31,-45.36 45.36,-45.36 6.74,0.03 13.38,1.58 19.43,4.54l30.36 -30.36c5.9,-5.9 15.47,-5.89 21.37,0.01zm-176.99 71.17c0.01,-31.14 13.74,-60.7 37.53,-80.8 23.79,-20.1 55.22,-28.7 85.93,-23.52 7.63,1.42 12.95,8.39 12.3,16.12 -0.65,7.73 -7.05,13.73 -14.81,13.86 -0.85,0 -1.69,-0.07 -2.53,-0.21 -21.94,-3.67 -44.38,2.49 -61.36,16.85 -16.98,14.36 -26.8,35.46 -26.82,57.7 0,8.35 -6.77,15.12 -15.12,15.12 -8.35,0 -15.12,-6.77 -15.12,-15.12zm201.15 136.07l101.22 0 0 -120.95 -31.01 0c-4.47,48.68 -30.15,92.92 -70.21,120.95zm-84.74 -146.65l-0.11 -0.17c-5.99,-5.84 -15.58,-5.75 -21.46,0.2 -5.88,5.96 -5.85,15.54 0.07,21.46 5.92,5.92 15.51,5.95 21.46,0.07 5.96,-5.88 6.05,-15.47 0.2,-21.46l-0.16 -0.1zm-217.62 146.65l111.79 0c-24.28,-17.04 -43.58,-40.23 -55.93,-67.19 -12.34,26.95 -31.62,50.14 -55.86,67.19zm-95.33 0c75.15,0 136.07,-60.92 136.07,-136.07 0,-75.15 -60.92,-136.07 -136.07,-136.07 -75.15,0 -136.07,60.92 -136.07,136.07 0.08,75.11 60.96,135.99 136.07,136.07zm-104.2 -129.22l-0.01 -0.04c-1.81,-3.58 -2.12,-7.74 -0.86,-11.55 1.26,-3.81 3.98,-6.97 7.56,-8.77 12.95,-5.77 27.03,-8.54 41.2,-8.09 2.03,-5.21 4.78,-10.12 8.16,-14.58 -5.97,-5.86 -13.04,-10.48 -20.8,-13.61 -7.93,-2.65 -12.21,-11.23 -9.56,-19.16 2.65,-7.93 11.23,-12.21 19.16,-9.56 13.19,5.05 25.08,13.01 34.77,23.28 5.11,-2.22 10.5,-3.72 16.03,-4.44 -0.06,-8.36 -1.78,-16.63 -5.05,-24.33 -3.65,-7.46 -0.61,-16.47 6.82,-20.18 7.43,-3.71 16.46,-0.74 20.23,6.66 5.79,12.94 8.56,27.03 8.1,41.2 5.2,2.02 10.1,4.76 14.54,8.13 5.94,-5.8 10.57,-12.79 13.61,-20.52 1.64,-5.15 5.9,-9.03 11.18,-10.18 5.28,-1.15 10.77,0.6 14.41,4.59 3.64,3.99 4.87,9.62 3.23,14.77 -4.93,13.32 -12.95,25.27 -23.4,34.88 2.26,5.14 3.79,10.58 4.54,16.15 8.35,-0.01 16.62,-1.72 24.3,-5.02 7.46,-3.76 16.56,-0.75 20.32,6.71 3.76,7.46 0.75,16.56 -6.71,20.32 -11.96,5.44 -24.94,8.25 -38.07,8.27 -1.01,0 -2.1,-0.12 -3.15,-0.15 -2.02,5.21 -4.76,10.1 -8.15,14.54 5.97,5.86 13.04,10.48 20.8,13.61 7.01,2.38 11.27,9.48 10.06,16.78 -1.21,7.3 -7.53,12.66 -14.93,12.65 -1.61,0 -3.21,-0.26 -4.73,-0.77 -13.19,-5.05 -25.08,-13.01 -34.77,-23.28 -5.11,2.22 -10.5,3.72 -16.03,4.44 0.05,8.38 1.76,16.67 5.04,24.39 3.65,7.46 0.61,16.47 -6.82,20.18 -7.43,3.71 -16.46,0.74 -20.23,-6.66 -5.79,-12.94 -8.56,-27.03 -8.1,-41.2 -5.21,-2.03 -10.12,-4.78 -14.58,-8.16 -5.86,5.97 -10.48,13.04 -13.61,20.8 -2.65,7.93 -11.23,12.21 -19.16,9.56 -7.93,-2.65 -12.21,-11.23 -9.56,-19.16 5.05,-13.19 13.01,-25.08 23.28,-34.77 -2.22,-5.11 -3.72,-10.51 -4.44,-16.04 -8.35,0.02 -16.62,1.73 -24.3,5.02 -3.58,1.8 -7.73,2.11 -11.54,0.85 -3.82,-1.26 -6.98,-3.98 -8.78,-7.56z",
            CRANE: "M286.97 726.26l79.59 0 0 22.22 -79.59 0 0 -22.22zm-246.21 -420.23c0,62.9 -12.18,51.85 127.73,51.85 27.62,0 22.22,-26.04 22.22,-53.69 0,-12.96 -10.68,-20.36 -24.07,-20.36l-101.81 0c-14.94,0 -24.07,7.03 -24.07,22.2zm325.8 340.63l0 51.84 -64.78 0c5.19,-4.53 9.39,-8.25 15.05,-12.72 5.73,-4.55 10.58,-8.92 16.16,-13.47l24.7 -19.73c4.88,-4.34 2.16,-4.12 8.87,-5.92zm-79.59 25.92l0 -57.39 70.35 0c-3.11,4.63 -3.12,4.18 -7.38,7.44 -3.76,2.87 -5.34,4.63 -9.03,7.63 -6.12,4.99 -11.38,8.71 -17.4,14.07 -4.59,4.11 -31.05,26.78 -36.54,28.25zm79.59 -138.84l0 53.68 -64.78 0 64.78 -53.68zm-79.59 27.76l0 -59.24 72.19 0 -72.19 59.24zm79.59 -138.83l0 51.83 -64.78 0c8.58,-7.47 57.14,-49.79 64.78,-51.83zm-79.59 25.91l0 -57.38 70.35 0 -16.41 15.06c-7.08,5.78 -47.45,40.59 -53.94,42.32zm470.2 -172.15l16.66 0 0 96.25 -16.66 0 0 -96.25zm-390.61 33.31l0 53.69 -64.78 0c3.1,-4.64 3.12,-4.18 7.37,-7.44 14.99,-11.49 43.95,-37.23 57.41,-46.25zm-79.59 27.76l0 -61.07 74.04 0c-2.58,3.85 -12.98,11.92 -17.71,15.61 -15.08,11.78 -42.57,36.25 -56.33,45.46zm40.72 -233.24l35.18 125.88 -72.2 0c2.42,-10.4 33.27,-120.47 37.02,-125.88zm-72.19 125.88l-153.65 0c5.78,-8.63 128.79,-104.53 148.5,-121.76l49.46 -35.71c-1.5,3.66 -0.59,1.29 -1.8,5.62l-42.51 151.85zm94.42 -172.16l47.34 21.15c75.29,31.28 164.01,74 240.9,107.11l91.26 40.19c3.08,1.55 3.24,1.73 5.54,3.71l-336.93 0 -23.84 -85.37c-4.3,-14.77 -8.05,-27.97 -12.37,-43.16 -2.31,-8.11 -4.09,-14.59 -6.15,-21.64 -2.05,-7.06 -4.82,-14.62 -5.75,-21.99zm-309.16 186.97c0,12.52 -3.28,31.48 14.81,31.48l194.37 0 0 472.05 -85.14 0c-3.78,0 -9.48,4.81 -11.13,7.39 -3.19,5.01 -13.74,66.65 14.82,66.65l316.56 0c22.26,0 18.51,-29.39 18.51,-48.12 0,-14.05 -4.81,-25.92 -18.51,-25.92l-81.46 0 0 -472.05 338.77 0 0 94.41c0,11.37 -12.95,-4.83 -12.95,38.87 0,11.79 4.47,28.88 8.09,38.17 2.97,7.65 5.34,8.31 8.16,14.06 3.97,8.02 1.94,10.45 13.36,10.7l1.86 18.51c14.47,3.38 24.06,6.79 24.06,22.23 0,12.91 -6.58,21.6 -19.34,19.45 -21.77,-3.65 -11.11,-19.45 -23.24,-19.45 -17.23,0 0.02,33.31 20.36,33.31 11.14,0 21.08,1.13 29.75,-10.97 10.19,-14.21 9.33,-33.04 -2.44,-45.95 -8.71,-9.57 -15.88,-2.81 -16.2,-17.13 15.2,-0.33 6.02,-3.73 15.24,-14.38 14.79,-17.05 12.53,-43.07 12.53,-67.06 0,-8.86 -5.9,-14.78 -12.96,-16.67l0 -98.1c5.66,0 8.46,0.62 13.01,-3.65 4.7,-4.43 9.37,-38.13 -6.04,-42.2 -19.31,-5.11 1.2,9.54 -49.02,-12.08 -20.05,-8.63 -38.41,-16.72 -57.88,-25.4l-114.03 -50.75c-44.68,-18.56 -96.99,-44.34 -142.26,-63.21l-57.83 -25.48c-6.66,-3.12 -23.66,-11.79 -30.23,-12.34 -1.18,-14.1 -23.21,-29.3 -35.4,-2.07 -4.29,9.56 -42.25,37.25 -50.34,44.08 -6.1,5.16 -11.36,8.93 -17.5,13.95l-121.33 98.97c-11.6,9.81 -24.06,17.98 -34.96,27.98 -9.9,9.1 -8.61,5.61 -25.67,5.79 -11.43,0.14 -18.4,3.78 -18.4,14.93z",
            FOCKLIFTS: "M846.66 575.56c0,6.05 -4.9,10.95 -10.94,10.95l-156.76 0c-6.04,0 -10.94,-4.9 -10.94,-10.95l0 -156.76c0,-6.04 4.9,-10.94 10.94,-10.94l156.76 0c6.04,0 10.94,4.9 10.94,10.94l0 156.76zm-322.73 -105.01c-47.57,-77.73 -172.64,-286.04 -173.89,-288.12 -6.37,-10.66 -18.04,-17.28 -30.46,-17.28l-202.59 0c-19.56,0 -35.47,15.91 -35.47,35.47l0 195.22 -57.01 0c-13.52,0 -24.52,10.99 -24.52,24.51l0 226.17c0,13.51 11,24.51 24.52,24.51l25.67 0c3.33,0 6.02,-2.7 6.02,-6.02 0,-46.53 37.85,-84.38 84.37,-84.38 46.52,0 84.37,37.85 84.37,84.38 0,1.59 0.64,3.12 1.77,4.25 1.13,1.13 2.66,1.77 4.25,1.77l67.66 0c3.32,0 6.02,-2.7 6.02,-6.02 0,-46.53 37.84,-84.38 84.37,-84.38 46.52,0 84.37,37.85 84.37,84.38 0,3.32 2.7,6.02 6.02,6.02l18.36 0c17.55,0 31.83,-14.28 31.83,-31.82l0 -152.64c0,-6.24 -2.92,-11.54 -5.66,-16.02zm-201.3 -0.38l0 -32.98c0,-5.66 -4.59,-10.25 -10.26,-10.25l-58.13 0 0 -97.09c0,-5.67 -4.6,-10.26 -10.26,-10.26l-32.49 0c-5.67,0 -10.26,4.59 -10.26,10.26l0 140.32 -48.76 0 -0.01 -234.07 146.99 0 139.87 234.07 -116.69 0 0 0zm-129.29 194.83c0,-29.14 -23.62,-52.77 -52.77,-52.77 -29.14,0 -52.77,23.63 -52.77,52.77 0,29.15 23.63,52.78 52.77,52.78 29.15,0 52.77,-23.63 52.77,-52.78zm248.44 0c0,-29.14 -23.63,-52.77 -52.77,-52.77 -29.15,0 -52.77,23.63 -52.77,52.77 0,29.15 23.62,52.78 52.77,52.78 29.14,0 52.77,-23.63 52.77,-52.78zm381.89 3.57l-213.06 0c-12.7,0 -22.99,-10.3 -22.99,-23l0 -493.69c0,-12.7 10.29,-22.99 22.99,-22.99 12.7,0 22.99,10.29 22.99,22.99l0 470.7 190.07 0c12.7,0 23,10.3 23,22.99 -0.01,12.7 -10.3,23 -23,23zm22.99 -316.46c0,6.04 -4.9,10.94 -10.94,10.94l-156.76 0c-6.04,0 -10.94,-4.9 -10.94,-10.94l0 -156.76c0,-6.05 4.9,-10.94 10.94,-10.94l156.76 0c6.04,0 10.94,4.89 10.94,10.94l0 156.76z",
            LOADER: "M189.27 86.27c-21.49,3.86 -37.39,18.49 -43.74,36.1 -6.15,17.06 -3.42,128.66 -3.48,155.06 -0.13,49.87 24.4,56.03 63.01,95.55 18.39,18.83 22.31,22.57 56.79,22.49 26.42,-0.06 52.85,-0.01 79.27,-0.01 26,0 52.06,1.11 67.88,-13.21l18.89 -19.81c19.75,-19.75 49.4,-38.52 38.16,-77.83 -3.79,-13.26 -66.91,-136 -78.52,-159.29 -9.46,-18.97 -18.34,-32.86 -40.95,-38.25 -11.2,-2.67 -144.59,-3.09 -157.31,-0.8zm-157.45 507.38c14.29,-127.02 197.08,-204.05 300.17,-76.3 26.3,32.59 39.59,78.24 33.34,131.79l61.24 0c-3.92,-30.78 -3.2,-54.65 6.32,-82.64 11.37,-33.42 20.62,-38.05 34.07,-59.06 -29.44,-2.61 -39.75,-9.36 -54.5,-24.77 -14.15,-14.78 -19.19,-36.75 -15.55,-61.98 -33.16,4.16 -152.66,7.69 -179.73,-3.48 -22.42,-9.25 -56.01,-46.99 -75.76,-66.91 -14.79,-14.92 -14.11,-19.49 -20.5,-26.41 -51.3,9.51 -112.42,40.59 -119.18,89.91 -3.51,25.68 -0.65,75.04 -0.63,103.21 0.02,32.31 -0.09,54.72 30.71,76.64zm560.68 -292.25c-76.12,12.5 -60,10.12 -118.08,67.05 -10.25,10.04 -39.62,36.31 -45.65,47.73 -14.41,27.27 2.24,53.19 23.13,60.56 30.89,10.89 49.8,-16.74 61.77,-28.52 16.12,-15.85 31.03,-30.36 47.1,-46.27 16.08,-15.92 18.62,-11.38 50.4,-18.15 12.07,-2.57 10.4,-3.87 17.1,2.78 45.03,44.68 86.67,37.07 147.98,37.07 28.98,0 65.38,5.93 70.02,-23.36 2.36,-14.92 -6.33,-25.36 -15.11,-29.86 -13.88,-7.11 -25,-0.39 -34.74,-12.73 -5.95,-7.54 -54.03,-106.63 -62.71,-123.99 -11.75,-23.5 -17.82,-46.67 -51.8,-29.52 -32.63,16.48 -59.82,30.43 -77.65,61.57 -7.76,13.54 -7.19,20.69 -11.76,35.64zm-16.65 179.83c-72.53,9.22 -133.09,73.9 -122.56,158.05 8.94,71.5 75.14,131.82 158.07,121.42 70.84,-8.89 132.42,-75.3 121.47,-157.64 -9.49,-71.44 -74.14,-132.36 -156.98,-121.83zm5.83 84.93c-75.61,17.77 -47.47,125.41 23.96,109.62 26.69,-5.91 49.91,-33.63 42.15,-67.45 -6,-26.15 -33.24,-49.89 -66.11,-42.17zm-400.44 -84.93c-72.24,9.19 -133.17,73.93 -122.62,157.63 9.05,71.8 74.88,132.28 158.13,121.84 71.34,-8.95 131.9,-75.05 121.49,-157.66 -8.99,-71.36 -74.61,-132.28 -157,-121.81zm5.85 84.93c-27.59,6.49 -51.72,31.55 -43.51,67.5 16.35,71.6 126.44,47.7 109.71,-25.43 -5.98,-26.09 -33.17,-49.83 -66.2,-42.07zm11.39 -380.33l-0.05 96.89 204.29 -0.12 -69.73 -140.73 -134.49 -0.08 -0.02 44.04z",
            "SMALL TRUCK": "M828.17 422.84l-13.09 0 -83.27 -147.87c-3.16,-5.6 -9.14,-8.9 -16.16,-8.9l-97.92 0 19.41 -103.12c2.31,-12.32 -5.79,-22.3 -18.11,-22.3l-517.82 0.22c-13.31,0 -24.1,10.79 -24.1,24.1 0,13.31 10.79,24.1 24.1,24.1l285 0c11.34,1.95 19.98,11.82 19.98,23.72 0,12.62 -9.7,22.95 -22.05,23.99l-360.05 0.01c-13.3,0 -24.09,10.79 -24.09,24.1 0,13.31 10.79,24.09 24.09,24.09l361.07 0c11.86,1.51 21.03,11.62 21.03,23.89 0,12.32 -9.25,22.47 -21.19,23.9l-325.56 0c-13.31,0 -24.1,10.79 -24.1,24.1 0,13.31 10.79,24.1 24.1,24.1l75.47 0 -39.73 211.13c-2.32,12.31 5.79,22.3 18.11,22.3l35.55 0c-6.88,50.97 27.8,91.61 79.43,91.61 51.65,0 101.62,-40.64 113.92,-91.61l187.69 0 53.07 0c-6.88,50.97 27.79,91.61 79.43,91.61 51.64,0 101.61,-40.64 113.92,-91.61l15.82 0 19.74 0c12.31,0 24.18,-9.99 26.49,-22.3l7.18 -38.16c2.16,-11.45 -4.7,-20.87 -15.57,-22.14l16.31 -86.65c2.32,-12.32 -5.79,-22.31 -18.1,-22.31zm-529.45 186.35c-5.42,28.8 -33.26,52.22 -62.05,52.22 -28.8,0 -47.81,-23.42 -42.39,-52.22 5.41,-28.79 33.25,-52.21 62.04,-52.21 28.79,-0.01 47.82,23.42 42.4,52.21zm434.1 0c-5.42,28.8 -33.25,52.22 -62.04,52.22 -28.8,0 -47.82,-23.42 -42.4,-52.22 5.42,-28.79 33.25,-52.21 62.05,-52.21 28.79,-0.01 47.81,23.42 42.39,52.21zm-144.59 -186.35l21.1 -112.17 86.79 0 63.17 112.17 -171.06 0z",
            TANKER: "M12.08 480.26c-4.33,-50.92 -14.69,-187.71 10.72,-228.75 20.03,-32.34 54.54,-27.59 99.02,-30.02 96.67,-5.29 149.8,-4.78 246.17,-0.12 109.79,5.3 133.21,-2.21 113.32,258.87l-469.23 0.02zm233.8 133.26c-0.25,0.25 0.17,10.68 -12.67,4.84 -7,-3.18 -5.83,-5.72 -5.72,-14.51 -2.01,-45.37 -49.11,-82.79 -101.63,-78.61 -46.97,3.74 -82.25,42.46 -86.42,91.32 -39.17,0.21 -39.49,0.71 -39.02,-38.73 0.28,-22.34 -2.49,-50.81 3.27,-68.97 25.38,-6.45 811.45,-6.75 839.04,-0.1 4.17,14.07 7.08,91.52 -2.31,101.4 -6.01,6.45 4.36,3.3 -13.95,6.37 -2.03,0.35 -12.46,0.38 -15.1,0.36 -10.12,-0.06 -20.33,-0.32 -30.48,-0.4l-4.41 -11.78c-13.17,-44.1 -39.72,-79.57 -94.08,-79.78 -79.5,-0.31 -90.26,76.58 -98.48,91.66l-143.93 0.26c-4.99,-8.74 -5.66,-24.16 -12.59,-37.78 -41.62,-81.73 -166.11,-71.33 -181.52,34.45zm496.11 -216.86c4.61,2.76 5.59,0.45 1.65,3.38 -0.82,0.34 -2.03,0.03 -2.47,1.01l-32.25 1.53c-22.2,-0.27 -108.55,3.55 -122.02,-1.37 -11.78,3.11 -3.99,2.4 -3.45,-28.01 0.33,-18.72 -4.68,-74.12 4,-87.6l95.61 0.54c3.92,13.05 20.47,40.21 28.6,53.97 8.8,14.89 25.2,42.74 30.33,56.55zm-45.23 233.48c4.58,-28.8 -9.67,-32.73 -30.42,-18.31l0.84 19.52c15.45,7.64 15.84,7.59 29.58,-1.21zm-549.38 -24.62l-22.56 0.77c-6.91,26.81 6.42,35.08 27.72,25.86 3.2,-17.16 3.2,-14.48 -5.16,-26.63zm182.12 1.94c-11.19,33.6 17.08,35.75 27.09,23.14 9.48,-11.94 -1.2,-32.24 -27.09,-23.14zm1.52 -415.35l-146.56 -0.26c1.62,-41.3 14.94,-33.18 73.72,-33.22 42.26,-0.03 71.35,-11.49 72.84,33.48zm-22.92 442.44c18.72,46.41 92.05,15.79 68.09,-30.83 -21.39,-41.59 -86.4,-14.55 -68.09,30.83zm103.34 -3.79c-11.31,83.92 -151.49,73.13 -137.38,-21.87 12.32,-83.07 149.94,-71.34 137.38,21.87zm-264.1 -46.46c-47.39,-14.59 -62.16,59.01 -23.61,71.1 53.93,16.9 69.25,-57.05 23.61,-71.1zm59.53 46.46c-11.52,83.7 -151.62,73.66 -137.15,-21.85 13.21,-87.25 149.94,-71.04 137.15,21.85zm484.7 -45.3c-45.48,-17.47 -65.88,56.64 -22.54,70.22 43.3,13.58 78.03,-48.9 22.54,-70.22zm58.84 49.09c-16.85,88.36 -155.67,63.69 -136.19,-29.8 17.78,-85.35 154.02,-63.67 136.19,29.8zm-186.95 -210.41c45.78,7.59 145.43,4.09 187.13,4.08 14.72,0 20.89,-1.68 29.26,-6.57 1.03,-21.51 -44.05,-92.71 -59.97,-119.95 -26.87,-46 3.97,-41.57 -132.17,-41.24 -37.43,0.09 -29.06,10.38 -28.88,86.22l4.63 77.46zm-62.09 55.14c8.88,-286.22 -50.83,-263.94 165.89,-264.41 73.7,-0.15 62.54,-1.83 117.11,98.05 40.68,74.48 50.09,64.09 49.41,167.36l-332.41 -1z",
            TRUCK: "M698.49 547.49c-39.68,0 -71.97,32.29 -71.97,71.97 0,39.68 32.28,71.97 71.97,71.97 39.67,0 71.97,-32.28 71.97,-71.97 0,-39.68 -32.29,-71.97 -71.97,-71.97zm-524.91 0c-39.68,0 -71.97,32.29 -71.97,71.97 0,39.68 32.28,71.97 71.97,71.97 39.67,0 71.97,-32.28 71.97,-71.97 -0.01,-39.68 -32.3,-71.97 -71.97,-71.97zm0 93.13c-11.67,0 -21.17,-9.49 -21.17,-21.17 0,-11.67 9.49,-21.17 21.17,-21.17 11.68,0 21.17,9.49 21.17,21.17 -0.01,11.68 -9.5,21.17 -21.17,21.17zm-156.64 -28.21l43.36 0c8.38,0 15.81,-6.04 16.89,-14.35 6.65,-50.92 47.26,-82.5 96.39,-82.5 49.13,0 89.75,31.58 96.38,82.5 1.08,8.31 8.5,14.35 16.89,14.35l212.68 0c9.35,0 16.93,-7.59 16.93,-16.93l0 -423.32c0,-9.35 -7.59,-16.93 -16.93,-16.93l-482.59 0c-9.36,0 -16.93,7.59 -16.93,16.93l0 423.32c0,9.35 7.58,16.93 16.93,16.93zm674.66 -364.06l-124.34 0c-9.36,0 -16.93,7.59 -16.93,16.93l0 330.19c0,9.35 7.58,16.93 16.93,16.93l17.96 0c8.38,0 15.81,-6.04 16.89,-14.35 6.65,-50.92 47.26,-82.5 96.39,-82.5 49.13,0 89.75,31.58 96.39,82.5 1.08,8.31 8.5,14.35 16.88,14.35l17.95 0c9.35,0 16.93,-7.59 16.93,-16.93l0 -165.1c0,-3.98 -1.4,-7.81 -3.95,-10.85l-138.11 -165.1c-3.22,-3.84 -7.98,-6.07 -12.99,-6.07zm-107.4 135.47l0 -84.67c0,-9.35 7.58,-16.93 16.93,-16.93l74.59 0c5.02,0 9.79,2.24 13,6.1l70.55 84.67c9.19,11.03 1.35,27.77 -13.01,27.77l-145.13 -0.01c-9.36,0 -16.93,-7.58 -16.93,-16.93zm114.29 256.8c-11.67,0 -21.17,-9.49 -21.17,-21.17 0,-11.67 9.49,-21.17 21.17,-21.17 11.68,0 21.17,9.49 21.17,21.17 0,11.68 -9.49,21.17 -21.17,21.17z",
            BATTERY: "M-0 248.48l0 486.31 846.66 -0.01 0 -486.3 -846.66 0zm87.77 -55.22l205.61 0 0 -81.39 -205.61 0 0 81.39zm465.53 0l205.61 0 0 -81.39 -205.61 0 0 81.39zm-297.64 259.53l0 0 -37.49 0 0 37.48 -55.21 0.01 0 -37.48 -37.49 -0.01 0 -55.22 37.49 0 0 -37.48 55.21 0 0 37.48 37.49 0 0 55.22zm193.28 199.43l-51.22 -20.62 37.76 -93.8 -106.05 0 68.29 -169.63 51.22 20.62 -37.76 93.8 106.05 -0.01 -68.29 169.64zm272.25 -199.43l-130.19 0 0 -55.22 130.19 0 0 55.22z",
            "WELDING MACHINES": "M248.04 598.62l-28.11 0c-35.24,0 -64.7,29.59 -70.23,60.41 -5.04,28.08 5.6,109.06 -4.81,125.82 -9.58,15.44 -30.7,15.55 -41.07,0.98 -7.87,-11.06 -4.61,-43.24 -4.61,-61.54 0,-43.54 0,-87.09 0,-130.63 12.76,-1.07 27.31,-15.42 34.27,-23.61 8,-9.42 15.34,-25.57 15.34,-42.54l0 -127.33 -148.83 0 0 127.33c0,33.17 29.81,64.5 49.61,66.15 0,23.84 -2.15,183.51 1.93,198.17 9.06,32.61 37.49,52.44 67.29,54.84l12.15 0c16.28,-1.32 32.25,-8 44.99,-20.82 14.93,-15.03 22.59,-28.82 22.48,-56.9 -0.1,-24.8 0,-49.62 -0.01,-74.42 -0.01,-45.15 5.59,-46.3 49.61,-46.3l0 148.83 49.61 0 0 49.61 148.83 0 0 -49.61 198.44 0 0 49.61 148.83 0 0 -49.61 52.92 0 0 -545.71 -598.63 0 0 347.27zm4.96 -549.02c-26.45,0 -52.92,0.1 -79.38,0 -27.04,-0.1 -45.71,6.71 -62.78,16.59 -32.92,19.06 -61.24,60.19 -61.24,99.17l0 85.99 -49.61 0 0 99.22 148.83 0 0 -99.22 -49.61 0c0,-35.59 -4.86,-90.68 11.2,-116.14 6.83,-10.83 19,-22.85 31.29,-28.24 26.32,-11.56 79.76,-7.76 111.3,-7.76 1.73,20.73 35.27,49.61 64.5,49.61 29.99,0 37.56,-7.33 65.93,-16.74l134.64 -47.26c6.71,-2.66 20.46,-8.16 27.63,-8.76 -4.57,-6.24 -42.3,-16.7 -52.22,-20.54l-108.81 -38.36c-18.58,-6.13 -39.57,-15.7 -60.8,-17.17l-10.61 0c-12.41,0.92 -24.77,5.26 -36.65,15.35 -8.19,6.96 -22.54,21.51 -23.61,34.26zm143.87 570.51c0,41.55 49.61,31.68 49.61,6.62 0,-41.54 -49.61,-31.67 -49.61,-6.62zm0 -170.32l198.44 0 0 -49.61 -198.44 0 0 49.61z",
            "TOWED STREET SWEEPER": "M74.62 653.73c48.06,4.62 160.41,77.82 214.08,64.04 53.13,-13.64 33.11,-7.99 81.32,2.59 -14.6,-49.9 -26.48,-37.76 -14.8,-106.97l-23.65 -14.31c15.26,-40.71 38.05,-97.57 76.16,-99.65 -18.38,19.98 -63.22,61.31 -58.31,96.24l44.42 7.29c28.35,-39.38 22.81,-75.89 78.41,-92.51 75.1,-22.45 98.56,47.91 112.42,60.95 58.45,-25.58 -12.19,-34.22 99.1,-58.07 16.08,-3.43 48.06,-7.4 67.25,-15.21l12.95 -10.07c0.69,-0.69 1.45,-1.91 2.17,-2.59 13.1,-12.69 24.91,-15.37 39.51,-5.34l-25.51 5.16c-12.4,0.92 -8.32,3.71 -10.17,18.27 -19.58,2.05 -10.04,0.24 -17.23,7.06 -24.11,-1.57 -78.91,11.67 -103.01,20.09 -47.55,16.65 -2.59,24.55 -65.34,52.69l6.86 47.94c14.22,-2.73 11.02,-5.98 22.96,-8.13 36.94,-6.7 17.58,12.41 63.74,-19.94l5.35 -5.01c17.95,-13.02 -15.35,6.81 6.26,-4.09 19.62,9.84 13,11.56 31.14,23.8 27.65,-10.28 52.4,-29.28 62.28,-58.08 60.74,6.08 56.13,-26.39 17.82,-43.73l4.2 -11.84 4.58 -4.61c10.76,-26.22 -18.22,-17.49 9.28,-34.53 -18.77,-4.85 -12.62,-0.45 -20.08,-18.28 -4.26,-10.19 -6.43,-20.65 -8.57,-30.87l-144.02 24.88c-15.45,-28.78 -7.41,-35.48 -51.8,-35.28 -37.56,0.19 -105.66,20.04 -135.34,39.31 -20.01,13 -33.1,29.28 -49.56,39.24l-0.65 -160.82c-17.09,5.8 -170.81,80.96 -180.87,100.41 -41.65,80.49 -32.15,216.82 -34.7,232.45 -5.42,33.09 7.76,-22.36 -2.27,8.18l-3.8 7.36c-13.24,-64.98 5.2,-200.25 32.07,-251.16 -22,-3.6 -147.57,4.62 -161.86,12.52 -16.88,11.52 -26.87,67.03 -29.41,87.51 -1.11,1.46 -7.38,0.84 -10.55,25.8l4.57 65.17c0.22,-0.77 1.57,2.94 2.9,3.85 3.02,7.08 -12.75,11.73 11.16,4.45l1.63 -0.09 -0.95 0.46c-1.42,0.67 -3.27,2 -4.56,2.71 -1.58,0.89 -3.72,5.71 -4.96,4.31 -1.38,-1.56 -3.55,3.32 -5.16,5.16 36.98,9.1 14.42,12.85 52.54,21.29zm641.23 -376.28l0.95 -14c-10.51,1.8 -10.61,-0.66 -7.4,13.71l-19.62 -1.84 -1.49 24.75 46.39 1.61 0.68 -24.83 -19.51 0.6zm-83.31 -163.62l15.94 -3.04 -1.8 13.17 -32.6 112.64c-54.29,-2.59 -78.13,-11.58 -132.13,2.17 -36.63,9.33 -77.28,21.68 -113.53,27.76 4.51,-23.99 13.86,-70.01 26.52,-85.69 11.47,-11.92 209.98,-63.12 237.6,-67.01zm-4.38 562.69l3.4 -0.04c-30.89,-0.44 -7.24,3.91 -42.93,-1.59l-8.95 43.25c27.52,-8.93 9.97,-10.67 9.97,-10.68 4.35,22.56 16.56,16.3 34.35,14.09l1.37 -0.79 6.61 2.82 -3.82 -47.06zm32.78 45.36c8.5,2.82 1.82,1.24 3.57,-3.26l3.62 2.2 17.25 -2.28c4.32,-8.54 8.46,-0.57 0.4,-14.58 -1.02,-10.19 1.57,-9.31 -4.24,-10.22l1.23 5.49 -2.23 -10 1.39 -3.59 11.61 29.12 9.62 -5.01c11.75,-0.18 17.65,-2.69 28.58,-12.29l-10.7 -22.17c7.17,7.38 10.02,11.21 19.74,20.74 -0.31,-35.35 -42.65,-39.9 -28.24,-48.44 13.24,14.93 19.85,21.22 37.05,30.47 -11.23,-30.19 -34.22,-30.35 -33.9,-35.46l6.49 -3.97c5.77,6.54 9.81,10.02 17.2,15.98 10.73,8.68 11.01,8.87 19.71,9.07 -5.72,-20.43 -29.28,-21 -31.4,-35.09l-20.28 19.25c-12.13,5.15 -18.85,10.57 -31.83,13.22l5.73 -5.46c0.43,-2.05 1.86,-2.84 3.3,-3.65 11.61,-10.67 11.53,-7.29 19.32,-22.45l-0.17 -10.34 -3.06 -7.31c-7.66,1.17 -6.05,3.17 -6.55,-3.71l-7.63 1.54 -7.89 1.62c-0.04,7.73 1.5,4.68 -8.11,5.89 -32,40.28 -77.72,-10.07 -77.46,43.87 19.59,10.75 49.31,2.88 71.45,0.02 17.8,-0.4 6.55,-2.4 13.21,7.37 -18.81,-2.69 -8.28,-2.81 -11.75,4.05l-1.17 -1.15 -12.96 4.28 -8.73 -0.02 -0.74 -0.94 -14.21 1.85 32.78 45.36zm-20.68 1.22l6.54 -0.37 3.67 -0.6 10.47 -0.25 -20.68 1.22zm36.91 -46.98l1.46 1.45 0.17 3.89 -1.63 -5.34zm0 0l1.63 5.34 -1.63 -5.34zm5.6 23.14l2.61 19.28 -2.61 -19.28zm-636.31 -79.93c-5.94,2.65 -5.17,1.76 -2.99,0.16l2.99 -0.16zm459.94 -3.17c5.13,12.03 12.98,29.94 3.39,46.12 -5.97,10.08 -21.4,16.18 -34.09,8.02 -19.53,-12.56 -21.48,-66.63 30.7,-54.14zm-44.7 81.89c66.04,5.6 82.72,-103.8 13.28,-117.18 -25.84,37.74 -33.71,64.87 -13.28,117.18zm-392.56 -280.06c50.43,0.18 144.14,-2.39 184.61,-25.76 24.62,-14.22 45.36,-22.96 68.83,-35.94 17.28,-9.55 54.83,-25.67 67.74,-39.36 -42.98,0.34 -143.73,17.6 -179.59,32.04 -27.01,10.87 -126.61,55.84 -141.59,69.02zm736.51 62.13c6.79,10.93 4.68,2.02 3.93,19.58l-4.58 4.61 0.65 -24.19zm-541.78 -153.21c52.97,-5.99 93.06,-20.45 155.6,-21.22l0.04 153.49c56.28,-33.94 56.56,-43.47 147.32,-63.37l-16.19 -143.32c-57.31,-8.87 -253.07,48.9 -286.77,74.42zm214.79 241.59c77.29,-34.24 98.59,120.68 30.35,150.49 -73.05,31.89 -100.85,-119.26 -30.35,-150.49zm-112.93 44.75c-26.15,143.25 102.89,174.28 168.81,140.71 76.28,-38.85 54.21,-211.97 -10.58,-232.22 -72.54,-22.67 -103.11,47.06 -121.16,95.48l-37.07 -3.97zm278.56 -359.64l128.29 -0.63c4.69,23.34 13.22,113.62 9.42,133.24 -28.83,5.13 -99.61,19.02 -124.17,16.58 -5.82,-44.96 -20.16,-104.9 -13.54,-149.19zm26.15 -141.37c60.22,1.65 82.58,15.85 82.84,15.88l18.8 91.29 -126.08 -0.77 24.44 -106.4zm-296.46 60.41c-10.83,91.48 -9.76,48.56 -20.13,107.55 57.81,-9 148.7,-49.22 205.17,-36.64l19.09 148.94c41.62,10.87 58.52,-7.4 72.5,36.22 27.33,-2.62 130.33,-19.88 148.74,-29.89 3.39,-45.7 -4.79,-114.45 -12.19,-159.68l-24.38 -105.18c-6.33,-36.34 3.76,-3.94 5.85,-33.94 -29.42,-13.3 -70.18,-15.78 -107.14,-18.49 -84.18,-6.18 -38,13.3 -94.25,27.94 -36.15,9.43 -65.89,19.24 -98.89,30.22 -56.86,18.92 -64.02,12.82 -94.37,32.95z",
            COMPACTOR: "M231.47 322.89c-14.4,7.98 -72.87,34.17 -85.83,35.13 1.35,-49.39 6.9,-77.3 -10.49,-113.33 -7.35,-15.26 -7.62,-23.07 -25.48,-14.07 -10.02,19.68 10.78,27.04 11.57,56.96 0.67,25.61 -0.12,52.77 -0.1,78.59 -8.78,18.47 -47.01,12.49 -65.86,48.97 -15.94,30.82 -12.08,66.99 -11.85,105.06 10.93,-6.15 14.57,-12.41 29.17,-20.53 80.46,-44.82 179.39,-6.17 202.55,90.07l5.74 17.91c0.32,0.71 0.87,1.97 1.44,2.88l134.76 -0.06c-17.68,-67.8 -22.43,-107.37 9.24,-171.22 21.82,-44 64.44,-87.12 110.25,-102.48 -0.68,-0.68 -1.91,-2.48 -2.25,-1.81 -0.02,0.02 -12.42,-3.97 -15.33,-26.45 -25.71,-198.37 2.11,-190.6 -128.43,-190.59 -59.86,0.01 -128.14,-15.99 -139.48,41.71 -9.95,50.62 -10.26,110.82 -19.62,163.26zm-109.49 187.6c-151.21,27.64 -105.3,245.77 40.41,217.63 140.36,-27.12 102.22,-243.71 -40.41,-217.63zm467.82 -163.78c-30.96,5.79 -45.54,10.28 -69.87,25.72 -175.57,111.39 -72.88,395 141.94,354.38 92.37,-17.47 176.43,-110.52 151.97,-227.79 -19.29,-92.48 -108.44,-173.98 -224.04,-152.31zm-154.35 -26.48l58.08 -0.37c1.83,-22.55 -8.04,-78.67 -11.21,-104.86 -5.87,-48.47 4.05,-71.75 -46.4,-72.37l-0.47 177.6zm-262.36 82.36c-4.41,15.09 -5.34,39.84 2.08,52.42 21.13,3.68 21.85,-10.01 21.31,-29.23 -0.57,-20.54 -3.95,-26.44 -23.39,-23.19zm-43.97 -0.07c-16.32,8.07 -13.46,71.38 12.78,51.64 6.75,-5.09 11.43,-63.57 -12.78,-51.64zm258.92 162.53c6.87,-27.13 -9.5,-24.66 -34.7,-24.39 -15.6,0.17 -50.2,-5.62 -60.4,4.95 -30.81,31.92 82.51,21.58 95.1,19.44zm-130.22 -245.42l149.96 0.39 1.43 -177.29c-141.98,0.42 -129.26,-14.85 -138.28,59.15 -3.97,32.6 -13.98,88.69 -13.11,117.75z",
            GENERATOR: "M20.42 271.53l0 420.36c0.01,6.45 6.45,11.67 14.39,11.68l14.39 0 0 -443.71 -14.39 0c-7.94,0 -14.38,5.23 -14.39,11.67zm661.92 361.98c-15.88,-0.02 -28.76,-10.46 -28.78,-23.36l0 -35.03c0.02,-12.89 12.9,-23.33 28.78,-23.35l0 -140.12c-15.88,-0.01 -28.76,-10.46 -28.78,-23.35l0 -35.03c0.02,-12.89 12.9,-23.34 28.78,-23.35l0 -23.36 -244.62 0 0 350.3 244.62 0 0 -23.35 0 0zm-71.95 0l-129.5 0c-7.95,0 -14.39,-5.23 -14.39,-11.68 0,-6.45 6.44,-11.68 14.39,-11.68l129.5 0c7.95,0 14.39,5.23 14.39,11.68 0,6.45 -6.44,11.68 -14.39,11.68zm0 -46.71l-129.5 0c-7.95,0 -14.39,-5.23 -14.39,-11.67 0,-6.45 6.44,-11.68 14.39,-11.68l129.5 0c7.95,0 14.39,5.23 14.39,11.68 0,6.44 -6.44,11.67 -14.39,11.67zm0 -46.7l-129.5 0c-7.95,0 -14.39,-5.23 -14.39,-11.68 0,-6.45 6.44,-11.68 14.39,-11.68l129.5 0c7.95,0 14.39,5.23 14.39,11.68 0,6.45 -6.44,11.68 -14.39,11.68zm-345.35 -116.77l71.95 0c7.95,0 14.39,-5.23 14.39,-11.68l0 -46.7c0,-6.45 -6.44,-11.68 -14.39,-11.68l-71.95 0c-7.94,0 -14.39,5.23 -14.39,11.68l0 46.7c0,6.45 6.45,11.68 14.39,11.68zm546.81 -163.47l-14.39 0 0 443.71 14.39 0c7.94,-0.01 14.38,-5.23 14.39,-11.68l0 -420.36c-0.01,-6.44 -6.45,-11.67 -14.39,-11.67zm-733.87 443.71l690.7 0 0 -443.71 -690.7 0 0 443.71zm28.78 -128.44c0.02,-12.9 12.89,-23.34 28.78,-23.36l0 -140.12c-15.89,-0.01 -28.76,-10.46 -28.78,-23.35l0 -35.03c0.02,-12.89 12.89,-23.34 28.78,-23.35l0 -35.03c0,-3.1 1.51,-6.07 4.21,-8.26 2.7,-2.19 6.36,-3.42 10.18,-3.42l546.8 0c3.82,0 7.48,1.23 10.18,3.42 2.7,2.19 4.22,5.16 4.21,8.26l0 35.03c15.89,0.01 28.77,10.46 28.78,23.35l0 35.03c-0.01,12.89 -12.89,23.34 -28.78,23.35l0 140.12c15.89,0.02 28.77,10.46 28.78,23.36l0 35.03c-0.01,12.89 -12.89,23.33 -28.78,23.35l0 35.03c0.01,3.09 -1.51,6.07 -4.21,8.26 -2.7,2.19 -6.36,3.42 -10.18,3.41l-546.8 0c-3.82,0.01 -7.48,-1.22 -10.18,-3.41 -2.7,-2.19 -4.21,-5.16 -4.21,-8.26l0 -35.03c-15.89,-0.02 -28.76,-10.46 -28.78,-23.36l0 -35.02zm28.78 35.03l28.78 0 0 -35.03 -28.78 0 0 35.03zm57.56 -256.89l0 35.03c-0.02,12.89 -12.9,23.34 -28.78,23.35l0 140.12c15.88,0.02 28.76,10.47 28.78,23.36l0 35.03c-0.02,12.89 -12.9,23.34 -28.78,23.35l0 23.35 244.62 0 0 -350.3 -244.62 0 0 23.36c15.88,0.01 28.76,10.46 28.78,23.35zm28.78 11.68c0.02,-19.34 19.33,-35.01 43.16,-35.03l71.95 0c23.83,0.02 43.15,15.69 43.17,35.03l0 46.7c-0.02,19.34 -19.34,35.01 -43.17,35.03l-71.95 0c-23.83,-0.02 -43.14,-15.69 -43.16,-35.03l0 -46.7zm-86.34 23.35l28.78 0 0 -35.03 -28.78 0 0 35.03zm144.55 -198.5l38.12 0c-6.93,-14.92 -10.32,-30.77 -10,-46.71 -0.32,-15.94 3.07,-31.78 10,-46.7l-38.78 0c-3.51,1.48 -14.39,17.74 -14.39,46.7 0,28.66 10.63,44.83 15.05,46.71zm85.68 46.71l86.34 0 0 -23.36 -86.34 0 0 23.36zm-13.73 -46.71l81.28 0c-6.92,-14.92 -10.31,-30.77 -9.99,-46.71 -0.32,-15.94 3.07,-31.78 9.99,-46.7l-81.94 0c-3.51,1.48 -14.39,17.74 -14.39,46.7 0,28.66 10.63,44.83 15.05,46.71zm330.3 198.5l28.78 0 0 -35.03 -28.78 0 0 35.03zm-215.19 -198.5l38.12 0c-6.92,-14.92 -10.31,-30.77 -9.99,-46.71 -0.32,-15.94 3.07,-31.78 9.99,-46.7l-38.77 0c-3.51,1.48 -14.39,17.74 -14.39,46.7 0,28.66 10.63,44.83 15.04,46.71zm71.28 -0.32c6.97,-7.22 11.2,-15.93 12.19,-25.06 0.16,-0.41 0.35,-0.81 0.57,-1.2 0.48,-1.47 1.35,-2.83 2.55,-3.99 1.12,-1.17 2.53,-2.14 4.14,-2.83 1.62,-0.77 3.43,-1.23 5.29,-1.37 0.53,-0.11 1.07,-0.2 1.61,-0.26l95.84 0c8.22,-2.6 15.54,-6.79 21.32,-12.2 4.08,-3.38 7.69,-7.12 10.73,-11.15l-127.89 0c-0.56,-0.07 -1.12,-0.16 -1.67,-0.28 -0.9,-0.07 -1.8,-0.22 -2.66,-0.44 -0.91,-0.23 -1.78,-0.55 -2.61,-0.94 -0.77,-0.33 -1.49,-0.73 -2.17,-1.18 -0.7,-0.49 -1.35,-1.03 -1.92,-1.62 -1.2,-1.16 -2.07,-2.52 -2.55,-3.99 -0.22,-0.39 -0.42,-0.79 -0.58,-1.2 -0.99,-9.14 -5.22,-17.84 -12.18,-25.07 -4.74,3.11 -14.38,19.12 -14.38,46.39 0,27.28 9.64,43.29 14.37,46.39zm-433.12 560.79l621.65 0c2.22,-8.49 6.76,-16.47 13.28,-23.35l-648.21 0c6.52,6.88 11.07,14.86 13.28,23.35zm577.03 -140.11l28.78 0 0 -35.03 -28.78 0 0 35.03z",
            "HOOK LIFT": "M620.2 624.99c0,-50.67 76.21,-56.54 76.21,1.59 0,18.25 -17.19,34.93 -39.69,34.93 -18.1,0 -36.52,-18.42 -36.52,-36.52zm209.58 -84.14l0 68.52c-2.06,38.55 -14.49,36.28 -76.2,36.28 -1.49,17.75 -20.74,44.61 -32.4,53.34 -41,30.72 -85.19,29.94 -125.5,-0.24 -16.53,-12.39 -27.86,-32.61 -32.64,-53.1l-269.89 0c-2.44,5.05 -3.47,10.67 -5.89,16.35 -2.19,5.23 -4.65,9.97 -7.74,14.47 -26.29,38.4 -74.8,56.57 -118.62,37.92 -5.17,-2.2 -10.9,-4.26 -15.01,-7.23 -13.85,-9.94 -21.55,-15.94 -31.89,-31.63 -2.85,-4.33 -5.45,-9.35 -7.57,-14.65 -2.23,-5.62 -3.11,-10.46 -5.41,-15.23 -15.44,0 -24.62,1.67 -35.51,-4.19 -8.27,-4.47 -15.28,-12.42 -15.28,-24.4l0 -144.48c0,-19.2 16.74,-28.58 36.51,-28.58l152.42 0 0 -127.01c0,-3.64 -13.44,-17.55 -16.56,-21.56l-51.71 -57.83c0,17.46 0,34.93 0,52.4 0,8.41 1.01,18.5 -0.94,26.05 -4.94,18.98 -14.89,35.59 -30.78,47.03 -4.61,3.31 -11.23,7.15 -16.32,9.06 -30.68,11.63 -60.98,4.79 -84.14,-18.23 -7.38,-7.31 -9.63,-10.45 -14.46,-20.48 -3.88,-8.07 -6.69,-17.55 -7.37,-26.66l0 -8.19c1.23,-15.23 9.96,-27.63 31.76,-27.63 11.64,0 22.29,9.28 25.29,17.56 4.29,11.79 0.09,22.95 13.49,27.92 11.34,4.22 20.83,-1.9 23.59,-13.26 4.76,-19.52 -2.92,-147.7 3.25,-161.88 3.38,-7.74 14.69,-16.41 24.88,-16.41 13.66,0 45.44,24.47 57.78,32.71 18.24,12.15 36.03,23.24 53.35,35.55 24.2,17.17 61.04,38.99 81.23,53.75 8.25,6.03 17.21,13.3 17.21,27.22l0 169.89 100.02 0 0 -131.77c0,-21.74 13.2,-34.93 34.94,-34.93l131.77 0c27,0 32.27,13.34 41.8,31.22l77.27 137.07c14.21,0 28.18,5.11 38.11,9.53 5.57,2.47 9.75,5.24 14.97,8.85 9.17,6.38 12.46,10.61 18.79,17.73 13.26,14.88 23.4,37.85 23.4,59.15zm-671.59 82.56c0,-19.19 15.99,-38.1 34.93,-38.1l7.93 0c16.62,0 33.34,16.73 33.34,33.35 0,12.56 -0.18,22.61 -11.53,32.92 -24.14,21.92 -64.67,4.79 -64.67,-28.17zm350.87 -285.78l96.85 0c1.41,6.03 10.93,20.49 14.29,27 4.6,8.93 9.71,16.86 14.82,26.45l14.84 26.44c5.24,9.43 9.83,17.08 14.81,26.48l-155.61 0 0 -106.37z",
            PICKUP: "M33.7 369.66c-3.1,-3.19 -2.16,-12.38 -2.12,-18.1 0.09,-9.51 -0.14,-10.58 9.86,-10.58 45.87,0 42.83,-3.25 42.76,12.35 -0.09,20.21 4.51,20.41 -41.21,19.03 -7.31,-0.21 -5.93,1.19 -9.29,-2.7zm89.26 168.66c-4.94,-44.25 59.34,-48.61 65,-10.06 2.94,20.09 -10.49,35.9 -27.28,38.24 -19.49,2.72 -35.89,-11.72 -37.72,-28.18zm24 -22.81c-26.09,13.41 -6.63,47.84 17.67,37.24 21.75,-9.5 8.92,-50.91 -17.67,-37.24zm-117.48 22.49c6.75,2.79 2.84,-8.2 11.19,-2.46 -0.94,5.27 -1.9,4.95 -5.39,7.95 2.21,4.32 4.94,4.67 3.16,9.28 -0.41,0.14 1.39,2.79 -4.84,0.38l-0.13 -0.12 -3.99 -15.03zm2.79 13.88l-7.13 -6.78 7.13 6.78 -0.07 0.02 -0.07 0.02 -0.07 0.02 -0.01 0 -0.07 0.02 -0.01 0 -0.06 0.02 -0.02 0.01 -0.06 0.01 -0.02 0.01 -0.03 0.01 -0.04 0.01 -0.02 0 -0.07 0.02 -0.02 0 -0.07 0.01 -0.03 0.01 -0.04 0 -0.03 0.01 -0.03 0 -0.07 0.01 -0.04 0 -0.06 0 -0.05 0.01 -0.06 0 -0.05 0 -0.07 -0.01 -0.06 0 -0.06 -0.01 -0.06 -0.01 -0.07 -0.01 -0.07 -0.01 -0.06 -0.01 -0.08 -0.02 -0.06 -0.02 -0.08 -0.02 -0.06 -0.02 -0.1 -0.03 -0.05 -0.03 -0.11 -0.04 -0.05 -0.02 -0.11 -0.05 -0.06 -0.03 -0.12 -0.06 -0.05 -0.03 -0.13 -0.07 -0.05 -0.03 -0.14 -0.08 -0.05 -0.03 -0.15 -0.1 -0.04 -0.03 -0.17 -0.12 -0.03 -0.02 -0.19 -0.14 -0.03 -0.02 -0.19 -0.16 -0.03 -0.02 -0.21 -0.18 -0.01 -0.01 -0.23 -0.2 -0.01 -0.01 -0.25 -0.23 -0.09 -0.09 -0.02 -0.02 -0.07 -0.07 -0.04 -0.04 -0.04 -0.05 -0.07 -0.07 -0.01 -0.02 -0.09 -0.1 0 -0.01 -0.08 -0.09 -0.02 -0.04 -0.06 -0.07 -0.04 -0.06 -0.04 -0.04 -0.06 -0.1 -0.01 -0.01 -0.08 -0.11 -0.01 -0.02 -0.06 -0.1 -0.03 -0.04 0 -0.01 -0.05 -0.06 -0.04 -0.08 -0.03 -0.04 -0.06 -0.11 -0.01 -0.01 -0.07 -0.12 -0.01 -0.03 -0.06 -0.1 -0.03 -0.05 0 -0.01 -0.04 -0.06 -0.04 -0.1 -0.02 -0.03 -0.07 -0.13 -0.07 -0.13 -0.01 -0.04 -0.05 -0.09 -0.03 -0.07 -0.03 -0.07 -0.05 -0.11 -0.01 -0.02 -0.07 -0.14 0 -0.01 -0.06 -0.13 -0.01 -0.04 -0.04 -0.1 -0.04 -0.08 -0.02 -0.06 -0.05 -0.12 -0.01 -0.02 -0.06 -0.14 0 -0.02 -0.05 -0.12 -0.02 -0.06 -0.04 -0.08 -0.1 -0.28 -0.01 -0.01 -0.05 -0.14 -0.01 -0.03 -0.05 -0.12 -0.02 -0.07 -0.03 -0.07 -0.04 -0.11 -0.01 -0.04 -0.05 -0.14 -0.05 -0.14 -0.02 -0.05 -0.03 -0.1 -0.03 -0.08 7.13 6.78zm-10.71 -10.19l-0.12 -0.11 0.12 0.11zm-7.98 -1l0.25 -43.61c4.16,-2.08 6.14,-1.78 10.36,-3.76 15.79,-7.42 17.19,-4.73 40.99,-4.5 -4.62,26.21 -16.17,22.83 -5.4,76.06 -16.27,-0.02 -29.94,3.28 -37.86,-8.32 -3.39,-9.31 -0.23,-5.33 -7.4,-10.22l-0.94 -5.65zm8.34 15.87c7.65,2.73 5.96,4.24 13.06,1.35l-0.06 -0.23 -0.07 -0.23 -0.01 -0.05 -0.05 -0.17 -0.06 -0.21 -0.02 -0.09 -0.04 -0.12 -0.05 -0.21 -0.04 -0.13 -0.02 -0.07 -0.06 -0.19 -0.04 -0.16 -0.01 -0.02 -0.05 -0.19 -0.06 -0.17 0 -0.02 -0.05 -0.16 -0.05 -0.16 -0.01 -0.05 -0.03 -0.11 -0.05 -0.16 -0.02 -0.08 -0.03 -0.07 -0.04 -0.15 -0.04 -0.1 -0.01 -0.04 -0.04 -0.14 -0.04 -0.13 -0.01 0 -0.04 -0.13 -0.04 -0.12 0 -0.03 -0.04 -0.09 -0.04 -0.12 -0.01 -0.05 -0.03 -0.06 -0.04 -0.11 -0.02 -0.07 -0.01 -0.03 -0.04 -0.1 -0.03 -0.08 -0.01 -0.02 -0.03 -0.09 -0.04 -0.09 -0.03 -0.08 0 -0.01 -3.99 -15.02 -7.56 18.56zm54.19 -83.8c2.66,0.34 1.99,0.83 1.48,-1.91l1.93 -2.28c16.87,-14.95 23.93,-25.16 54.72,-32.51 27.79,-6.64 52.59,0.67 73.32,12.18 10.11,5.6 17.43,13.25 24.3,20.64 7.19,7.74 18.11,4.79 37.64,4.79 29.13,0 58.29,0.12 88.07,-0.03l-0.45 -140.4 -334.69 -0.01c-3.95,2.27 -3.19,-2.19 -3.61,7.99l0.91 132.44c5.35,1.11 50.46,2.64 56.38,-0.9zm-54.67 68.82l-0.31 -8.43c5.19,-3.95 4.1,-6.35 9.96,-6.97 0.49,-0.06 1.22,0.13 1.65,0.12 0.46,-0.01 1.18,0.14 1.78,0.25 0.67,10.83 -5.38,7.13 -5.04,11.45l-8.04 3.58zm46.33 0.19c3.81,46.14 44.92,84.17 96.4,79.86 45.03,-3.77 83.37,-45.02 79.15,-95.39 -3.94,-47.03 -44.28,-83.99 -96.57,-79.89 -10.72,0.84 -14.42,2.69 -23.64,5.98 -14.16,5.06 -25.17,13.87 -34.63,24.22 -12.46,13.6 -22.84,39.42 -20.71,65.22zm260.29 23.14l233.01 -0.11 18 -0.05 4.41 0.2c4.46,-1.44 2.07,0.56 4.19,-2.43l-1.76 -8.65 -0.43 -0.15c-0.95,-0.33 -1.65,-0.6 -2.16,-0.87 -0.35,-0.18 -0.61,-0.34 -0.8,-0.54 -0.65,-0.66 -0.52,-1.52 -0.3,-3.3l0.3 3.3c0.22,2.7 0.08,1.1 0.8,0.54 0.39,-0.31 1.05,-0.3 2.16,0.87l0.13 0.05 -1.43 -27.09c0.74,-16.65 6.16,-24.98 9.49,-37.9l-347.77 0.06c2.34,9.72 6.89,17.54 8.79,29.81 1.97,12.72 -0.92,25.4 -0.04,37.46 -2.66,2.92 -1.62,-0.06 -2.92,6.4 2.28,2.73 -4.48,1.99 5.62,2.27l13.88 -0.26 23.9 0.17 26.33 0.26 6.6 -0.04zm257.42 -11.19l0.13 0.14 -0.13 -0.14zm12.9 -34.19c-2.58,2.99 -1.75,0.77 -2.37,6.84 -0.26,2.52 -0.05,7.37 -0.1,10.07l-0.07 1.02 1.48 11.41 -0.06 1.95c0.39,1.56 1.25,5.88 1.73,7.13 2.74,7.19 0.27,1.42 2.9,4.39 0.01,17.1 24.31,39.3 35.72,46.68 56.77,36.64 142.07,-7.57 134.05,-84.35 -7.6,-72.66 -94.68,-102.09 -145.18,-57.86 -9.06,7.95 -30.06,32.15 -28.1,52.72zm161.67 -50.93l3.34 5.8 43.43 0.15c7.1,0.06 10.61,0.27 12.28,-1.71l-59.05 -4.24zm59.14 4.13c1.74,-2.24 1.32,-7.12 0.97,-17.62l-3.47 1.99c-7.27,-0.11 -43.94,1.59 -47.47,-2.15 -1.04,-1.12 -6.92,-25.85 3.41,-28.6l46.98 0.32c0.26,-30.39 1.97,-55.14 -20.46,-67.3 -16.18,-8.78 -117.6,-24.06 -135.42,-35.58l-37.84 -26.11c-5.76,-3.93 -6.91,-6.58 -12.78,-7.29 -2.47,-3.54 1.79,-0.31 -3.75,-3.84 -3.6,-2.28 1.15,-0.1 -4.11,-1.29 0.87,-2.96 1.19,-1.84 -2.31,-2.43 -1.87,-3.45 -33.95,-24.72 -37.76,-25.44 -1.58,-1.94 -0.76,-1.44 -2.97,-3.22 -2.15,-1.75 -1.28,-0.8 -4.18,-2.25 -2.09,-3.48 -22.04,-16.9 -26,-19.33 -12.28,-7.54 -21.55,-7.74 -37.93,-7.74 -30.52,0.02 -61.06,0 -91.58,-0.02 -14.6,0 -32.99,-2.98 -37.04,10.28 -1.95,6.36 -0.9,120.28 -0.87,132.18l-0.11 5.84 0.36 97.81c3.29,4.66 -1.88,1.77 6.52,3.01l221.36 0.03c5.86,0.02 10.1,1.48 10.72,-2.49 3.12,0.75 2.41,1.27 1.74,-1.92 2.72,0.49 1.73,0.93 2.41,-2.08 6.68,-3.39 28.3,-33.85 76.53,-33.77 38.39,0.07 54.83,16.31 75.91,34.88l59.14 4.13zm-143.74 42.68c-25.81,12.32 -7.09,48.87 17.72,37.17 23.9,-11.26 7.42,-49.18 -17.72,-37.17zm98.87 -26.62c9.27,34.62 13.46,35.23 5.53,76.06 16.03,0.05 38.49,2.87 44.81,-6.96l7.75 -14.72c1.18,-4.54 0.55,-39.98 -0.09,-46.13 -4.18,-2.24 -6.25,-1.92 -10.96,-4.46 -12.31,-6.63 -28.67,-3.85 -47.04,-3.79zm-58.84 54.7c-13.18,40.22 -76.08,23.85 -62.99,-19.61 12.26,-40.72 76.48,-21.56 62.99,19.61zm103.71 -70.76c-1.05,-7.65 0.69,-10.84 -2.5,-15.63l2.5 15.63zm-261.18 -200.41c-1.17,3.24 -0.57,1.06 1.35,1.53l4.94 4.28c1.5,1.24 2.87,2.38 4.61,3.95l15.59 12.1c1.54,1.38 2.99,2.83 4.47,4.12 5.23,4.62 6.99,5.64 12.23,8.67 2.3,8.21 17.81,7.32 16.35,21.47 -10.63,9.22 -55.09,4.84 -73.36,4.85 -71.12,0.06 -60.62,9.2 -60.8,-57.58 -0.03,-12.93 -2.92,-26.03 9.53,-28.66 27.16,-5.72 42.37,7.55 55.55,18.69 4.1,4.13 1.2,1.77 4.94,2.25 -0.75,3.38 -1.21,2.54 2.21,1.58 -0.98,3.27 -1.36,2.08 2.39,2.75zm209.44 113.96c-0.01,-11.49 1.49,-14.16 13.45,-14.16 21.5,0 23.64,-1.02 23.67,17.59 0.03,18.5 -1.93,23.62 -34.68,17.74 -3.29,-8.11 -2.44,-11.42 -2.44,-21.17zm-373.64 -138.88c6.72,-2.11 30.77,-0.77 39.82,-0.78 15.14,-0.04 27.73,-3.21 29.68,11.78 1.34,10.39 0.15,30.1 0.16,41.49 0.01,12.83 2.79,28.67 -7.92,32.42 -5.7,2 -32.94,0.97 -40.93,0.98 -14.9,0.04 -27.74,3.07 -29.59,-12.6 -1.27,-10.81 -0.11,-29.84 -0.12,-41.52 -0.01,-14.09 -3.12,-28.01 8.9,-31.77z",
            "STREET SWEEPER": "M393.7 482.28c0,9.75 2.94,12.7 12.69,12.7l440.27 0 0 -165.1c0,-6.79 -17.98,-33.17 -22.88,-40.62 -10,-15.19 -15.83,-26.59 -25.47,-42.26 -10.3,-16.74 -45.33,-68.44 -49.01,-82.23l-355.6 0 0 317.51zm-190.51 -254l71.97 0c0,-20.09 -4.74,-30.59 -8.46,-46.57l-67.74 0c-0.5,22.25 -18.04,46.57 4.23,46.57zm-16.92 452.96l42.33 0 0 -84.66 -42.33 0 0 84.66zm-63.5 0l42.33 0 0 -84.66 -42.33 0 0 84.66zm-122.77 0l42.33 0 0 -84.66 -42.33 0 0 84.66zm59.26 0l46.57 0 0 -84.66 -46.57 0 0 84.66zm186.27 0l46.57 0 0 -84.66 -46.57 0 0 84.66zm499.54 -80.43c7.22,0 101.59,-14.66 101.59,-33.87l0 -55.03 -143.93 0c8.7,12.98 19.37,20.33 28.03,35.47 9.45,16.51 9.82,34.17 14.31,53.43zm-745.07 -21.17l292.1 0 0 -33.86c0,-9.76 -2.95,-12.7 -12.7,-12.7l-279.4 0 0 46.56zm639.23 50.8c-44.57,0 -45.59,-63.5 0,-63.5 43.62,0 42.14,63.5 0,63.5zm-84.67 -38.1c0,94.29 104.53,112.4 147.1,62.43 55.16,-64.75 -2.27,-142.86 -62.43,-142.86 -41.87,0 -84.67,37.32 -84.67,80.43zm-397.93 -313.26l152.4 0 0 122.76 -211.67 0c2.98,-12.75 7.66,-19.36 12.14,-30.2l27.09 -66.04c4.62,-12.4 5.96,-26.52 20.04,-26.52zm-93.13 131.23l0 105.83 245.53 0 0 84.67 224.37 0c1.3,-58.49 32.6,-68.31 38.1,-88.9l-198.97 0 0 -266.71 -237.07 0c-12.33,0 -10.53,5.13 -14.89,14.75 -12.89,28.4 -57.07,133.49 -57.07,150.36z",
            REFRIGERATOR: "M566.92 617.44c88.1,-129.09 132.73,-236.02 132.73,-317.83 0,-165.21 -134.4,-299.61 -299.6,-299.61 -165.21,0 -299.69,134.4 -299.69,299.61 0,81.81 44.61,188.74 132.71,317.83 62.94,92.35 125.19,162.11 127.75,165.04 10.02,11.15 24.27,17.52 39.23,17.52 14.97,0 29.12,-6.37 39.13,-17.52 2.57,-2.93 64.81,-72.69 127.74,-165.04zm-283.11 -355.43l0 211.34c0,5.98 4.91,10.88 10.91,10.88l12.49 0 0 0.77c0,6.05 4.89,10.92 10.91,10.92 6.09,0 10.93,-4.87 10.93,-10.92l0 -0.77 141.91 0 0 0.77c0,6.05 4.85,10.92 10.93,10.92 6.03,0 10.91,-4.87 10.91,-10.92l0 -0.77 12.5 0c5.99,0 10.89,-4.9 10.89,-10.88l0 -211.34 -232.38 0zm232.38 -21.84l0 -106.01c0,-6.05 -4.9,-10.96 -10.89,-10.96l-210.58 0c-6,0 -10.91,4.91 -10.91,10.96l0 106.01 232.38 0zm-174.66 -46.8l23.39 0c6.03,0 10.93,4.91 10.93,10.94 0,6.05 -4.9,10.89 -10.93,10.89l-23.39 0c-6.04,0 -10.91,-4.84 -10.91,-10.89 0,-6.03 4.87,-10.94 10.91,-10.94l0 0zm23.39 115.41l-23.39 0c-6.04,0 -10.91,-4.89 -10.91,-10.9 0,-6.03 4.87,-10.9 10.91,-10.9l23.39 0c6.03,0 10.93,4.87 10.93,10.9 0,6.01 -4.9,10.93 -10.93,10.93l0 -0.03zm35.08 -242.29c131.89,0 238.8,106.93 238.8,238.8 0,131.89 -106.91,238.81 -238.8,238.81 -131.88,0 -238.8,-106.92 -238.8,-238.81 0,-131.87 106.92,-238.8 238.8,-238.8z",
        };
        this.vehicleModel = {
            BIKE: "M576.13 307.48c-21.1,0 -39.76,10.6 -50.96,26.75l-16.14 -6.91 0 -10.11 50.55 -20.97 12.98 -29.92 5.96 0 29.9 35.51c1.15,1.37 2.8,2.07 4.46,2.07 1.33,0 2.66,-0.45 3.76,-1.37 2.46,-2.07 2.78,-5.75 0.7,-8.21l-23.56 -28 3.75 0c3.22,0 5.83,-2.61 5.83,-5.84 0,-3.22 -2.61,-5.83 -5.83,-5.83l-8.77 0 7.64 -3.62c3.61,-1.71 5.17,-6.03 3.49,-9.66l-4.4 -9.48c-1.19,-2.56 -3.74,-4.2 -6.55,-4.23l-80.94 -0.73c-0.02,0 -0.05,0 -0.07,0 -2.02,0 -3.96,0.84 -5.34,2.32 -0.15,0.16 -16.68,17.28 -47.19,21.26 -1.99,-3.71 -5.27,-8.92 -10.1,-14.1 -11.73,-12.59 -27.15,-19.24 -44.58,-19.24 -3.53,0 -7.2,0.28 -10.89,0.81 -0.02,0 -0.04,0 -0.06,0.01 -0.86,0.13 -21.22,3.3 -49.41,11.2 -0.31,0.02 -0.75,0.03 -1.29,0.03 -3.23,0 -11.08,-0.58 -14.14,-5.91 -0.22,-0.39 -0.44,-0.84 -0.63,-1.34l13.48 -2.45c3.76,-0.68 6.26,-4.29 5.58,-8.06 -0.69,-3.76 -4.29,-6.26 -8.05,-5.58l-10.87 1.98c1.67,-6.87 5.44,-16.25 12.94,-29.03 1.56,-2.67 1.28,-6.03 -0.71,-8.4 -1.42,-1.67 -3.48,-2.59 -5.58,-2.59 -0.86,0 -1.74,0.15 -2.57,0.47 -0.81,0.31 -20.01,7.69 -37.42,25.89 -11.15,11.65 -22.98,29.38 -26.69,54.21 0.98,-1.93 2.21,-3.8 3.76,-5.54 0,0 19.91,13 8.67,31.81l-13.19 0.01c0.32,3.82 0.82,7.76 1.52,11.83 0.27,1.59 1.06,3.04 2.25,4.13l16.29 14.97c-53.56,-7.18 -72.83,27.57 -72.83,27.57 -4.01,5.35 -1.99,11.12 4.49,8.06 -4.35,8.47 -6.83,18.06 -6.83,28.22 0,34.19 27.81,62 61.99,62 34.19,0 62,-27.81 62,-62 0,-2.53 -0.17,-5.03 -0.46,-7.49l75.74 0 -29.9 -22.29c0,0 -35.49,3.43 -60.8,-24.12 2.65,-0.13 5.54,-0.22 8.61,-0.22 20.52,0 49.1,3.7 68.66,21.3 0.26,0.23 0.53,0.44 0.8,0.62l67.1 45.23c1.24,0.83 2.66,1.24 4.07,1.24 1.89,0 3.75,-0.73 5.16,-2.13l27.04 -27.04 16.12 6.91c-0.34,2.62 -0.53,5.28 -0.53,8 0,34.18 27.81,61.99 61.99,61.99 34.18,0 61.99,-27.81 61.99,-61.99 0,-34.19 -27.81,-62 -61.99,-62zm-152.81 -307.48c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm85.7 233.01l45.69 -21.66 -6.18 14.23 -39.51 16.39 0 -8.96zm-238.5 109.84c-18.09,0 -32.81,-14.72 -32.81,-32.82 0,-18.1 14.72,-32.82 32.81,-32.82 0.77,0 1.52,0.04 2.27,0.09l-13.58 27.99 26.25 12.73 12.56 -25.88c3.36,5.15 5.32,11.29 5.32,17.89 0.01,18.1 -14.72,32.82 -32.82,32.82zm305.6 0c-16.61,0 -30.36,-12.4 -32.51,-28.42l24.83 10.63 11.49 -26.81 -26.89 -11.52c5.93,-5.88 14.09,-9.52 23.09,-9.52 18.09,0 32.81,14.73 32.81,32.83 0,18.09 -14.72,32.81 -32.82,32.81z",
            AUTO: "M616.86 348.41c0,-7.3 7.37,-13.21 16.4,-13.21l0 26.43c-9.03,-0.01 -16.4,-5.94 -16.4,-13.22zm-193.54 -348.41c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm-127.32 318.34c25.7,0 46.6,20.91 46.6,46.62 0,25.73 -20.9,46.63 -46.6,46.63 -25.71,0 -46.63,-20.9 -46.63,-46.63 0,-25.7 20.93,-46.62 46.63,-46.62zm0 81.5c19.22,0 34.86,-15.64 34.86,-34.87 0,-19.24 -15.64,-34.88 -34.86,-34.88 -19.25,0 -34.9,15.64 -34.9,34.88 0.01,19.23 15.67,34.87 34.9,34.87zm264.56 -69.12c19.57,-16.79 44.61,-13.97 45.66,-13.86l-1.19 9.86c19.53,4.43 34.19,21.89 34.19,42.75 0,24.17 -19.7,43.85 -43.87,43.85 -23.16,0 -42.14,-18.07 -43.72,-40.81 -0.67,4.08 -1.11,8.4 -1.28,13.03l-11.72 -0.36c0.76,-24.29 8.15,-42.61 21.93,-54.46zm34.79 70.86c17.72,0 32.12,-14.39 32.12,-32.11 0,-17.71 -14.4,-32.11 -32.12,-32.11 -17.72,0 -32.09,14.41 -32.09,32.11 -0.02,17.7 14.37,32.11 32.09,32.11zm-317.44 -290.39l158.64 0 41.12 0 92.04 0 0 23.5 -21.57 0c16.96,10.48 41.16,46.99 41.16,46.99 0,0 47.73,93.33 17.61,133.19 -76.38,-1.97 -70.49,70.49 -70.49,70.49l-188.4 0c2.43,-6.34 3.79,-13.21 3.79,-20.39 0,-31.71 -25.79,-57.52 -57.52,-57.52 -31.71,0 -57.51,25.82 -57.51,57.52 0,2.53 0.21,5.02 0.54,7.47 -18.07,-12.77 -29.91,-33.79 -29.91,-57.59l0 -133.17c0,-38.94 31.55,-70.49 70.5,-70.49zm172.5 253.77l51.88 0c0,0 -8.91,-71.34 51.91,-89.21 0,0 -1.95,-92.97 -47,-128.78l-56.79 0 0 217.99 0 0zm-132.33 -89.21c60.82,17.88 51.9,89.21 51.9,89.21l51.89 0 0 -217.98 -103.79 0 0 128.77z",
            BOBCAT: "M303.39 269.89l149.29 53.73c11.81,10.17 -3.56,12.67 11.24,28.75 6.94,7.55 13.51,11.34 16.56,23.43 4.41,17.49 -0.53,18.92 7.47,35.58 30.63,7.14 79.07,-9.22 113.81,-9.22 -13.89,-20.74 -19.77,-5.62 -38.43,-16.94l-67.94 -61.25c-7.7,-21.6 17.45,-12.44 -62.45,-39.06 -14.18,-4.71 -27.45,-10.17 -43.06,-15.37l-86.49 -30.41 0 30.76zm119.93 -269.89c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm-89.19 139.71l3.08 0c11.15,0 12.06,16.63 12.31,27.68l-27.69 0c0.91,-10.85 1.21,-27.68 12.3,-27.68zm58.45 0l39.99 0c0.31,13.87 3.48,16.24 6.15,27.68l-39.99 0c-0.45,-5.52 -4.48,-23.95 -6.15,-27.68zm-36.91 0l24.61 0c3.21,6.69 5.93,17.69 6.15,27.68l-24.6 0c-0.65,-7.65 -3.53,-22.2 -6.16,-27.68zm-18.46 -30.77c2.11,9.05 3.08,9.39 3.08,21.54l-12.31 0c6.92,-14.42 -2.72,-12.78 9.23,-21.54zm49.22 0l36.91 0c1.7,7.33 3.24,15.47 6.15,21.54l-39.98 0c-0.24,-10.49 -1.86,-12.05 -3.08,-21.54zm-36.91 0l24.61 0c2.11,9.05 3.07,9.39 3.07,21.54l-24.6 0c-0.23,-10.49 -1.87,-12.05 -3.08,-21.54zm-46.14 61.52c11.04,5.3 18.02,8.38 33.95,9.11 34.7,1.58 4.24,10.23 30.65,12.42l0 -12.3 21.53 0c7.94,16.53 -1.28,23.09 18.46,27.69 -0.65,-7.65 -3.53,-22.19 -6.16,-27.69l39.99 0c9.32,40.04 7.26,48.69 30.75,49.22l-27.27 -99.13c-12.32,-48.89 56.49,-42.37 -117.3,-42.37 -17.4,0 -11.22,55.18 -24.6,83.05zm218.39 61.53c0,9.85 -2.78,11.68 -6.62,17.98 -3.64,5.95 -5.63,9.94 -8.75,15.86 9.69,6.48 62.5,58.43 67.67,58.43 16.34,0 10.04,-7.58 25.55,5.06 12.94,10.54 11.36,7.54 11.36,28.77 28.52,0 20.11,1.68 36.91,3.09 12,-51.52 2.68,-23.53 2.04,-55.72 -0.11,-5.54 7.78,-28.12 -18.18,-48.11 -7.18,-5.53 -18.2,-6.91 -30,-6.91 0,-11.49 1.81,-39.99 -15.38,-39.99 -13.3,0 -12.4,6.15 -21.53,6.15 -17.95,0 -26.51,-5.77 -43.07,-6.15l0 21.54zm-93.67 81.46c10.75,0 19.46,8.7 19.46,19.45 0,10.74 -8.71,19.45 -19.46,19.45 -10.73,0 -19.44,-8.71 -19.44,-19.45 0,-10.75 8.71,-19.45 19.44,-19.45zm0 -26c-25.09,0 -45.44,20.35 -45.44,45.45 0,25.1 20.35,45.45 45.44,45.45 25.11,0 45.46,-20.35 45.46,-45.45 0,-25.1 -20.35,-45.45 -45.46,-45.45zm-136.81 26c10.73,0 19.44,8.7 19.44,19.45 0,10.74 -8.71,19.45 -19.44,19.45 -10.74,0 -19.45,-8.71 -19.45,-19.45 0,-10.75 8.71,-19.45 19.45,-19.45zm-49.44 -139.91l9.24 0 0 9.23 -9.24 0 0 -9.23zm-49.21 123.05c19.17,12.83 12.71,18.75 46.14,21.53 5.44,-23.37 26.92,-39.36 55.38,-39.99l0 -107.67c-23.88,-5.56 -38.14,-18.45 -67.68,-18.45 0,11.28 -2.13,25.86 -3.44,39.62 -4.63,48.47 -20.51,-13.91 -30.4,104.96zm98.65 -9.14c-25.1,0 -45.46,20.35 -45.46,45.45 0,25.1 20.36,45.45 45.46,45.45 25.1,0 45.45,-20.35 45.45,-45.45 0,-25.1 -20.35,-45.45 -45.45,-45.45zm12.09 -6.25c43.87,10.22 39.99,46.2 39.99,70.74l33.83 0c-5.67,-24.36 -4.34,-46.39 20.1,-62.95 23.68,-16.05 27.12,-7.79 53.72,-7.79 -1.26,-15.19 -2.44,-11.7 -31.16,-21.12 -19.98,-6.54 -104.31,-39.39 -116.48,-40.39l0 61.51z",
            BUS: "M607.89 180.38l-28.93 0 0 99.52 11.57 0 0 45.7 -21.99 0.01 0 -151.01c0.01,-30.68 -24.86,-55.54 -55.54,-55.54l-182.83 0c-30.67,0 -55.54,24.86 -55.54,55.54l0 148.11 -19.09 0 0 -48.61 12.15 0 0 -99.5 -28.92 0 0 99.5 12.15 0 0 53.26 23.71 0 0 108.77c0,21.01 11.69,39.32 28.93,48.75l0 28.75 48.6 0 0 -21.97 137.69 0 0 21.97 48.61 0 0 -28.19c17.86,-9.22 30.08,-27.84 30.08,-49.32l0 -105.9 26.62 0 0 -50.32 12.73 0 0 -99.52 0 0zm-184.57 -180.38c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm-65.38 71.18l129.59 0 0 30.1 -129.59 0 0 -30.1zm13.88 303.18l-71.73 0 0 -32.38 71.73 0 0 32.38zm173.57 0l-71.74 0 0 -32.38 71.74 0 0 32.38zm0 -104.14c0,0 -13.89,43.98 -124.96,43.98 -111.1,0 -122.67,-43.98 -122.67,-43.98l0 -152.76 247.63 0 0 152.76z",
            CAR: "M589.12 448.77l0 -23.39 -59.43 0 0 23.39c0.17,41.39 59.43,41.87 59.43,0zm-165.8 -448.77c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm197.38 317.2l0 -82.04c-0.08,-28.59 -22.87,-43.7 -35.82,-45.36l-32.37 -83.55c-6.05,-16 -19.29,-29.6 -44.31,-29.73l-45.61 0 -77.98 0 -46.46 0c-24.9,0.13 -38.13,13.73 -44.31,29.73l-32.37 83.55c-12.83,1.66 -35.58,16.77 -35.54,45.36l0 82.04c0,13.44 10.93,24.37 24.37,24.37l346.03 0c13.45,0 24.37,-10.89 24.37,-24.37zm-328.56 -35.78c-0.05,0 -0.05,0 -0.09,0 -0.04,0 -0.04,0 -0.08,0 -15.1,0 -27.29,-12.59 -27.25,-28.1 -0.08,-15.56 12.06,-28.15 27.09,-28.15 0.08,0 0.16,0 0.24,0 0.09,0 0.16,0 0.25,0 14.98,0 27.13,12.59 27.09,28.15 0.04,15.51 -12.19,28.1 -27.25,28.1zm131.18 -92.39l-0.28 0 -101.3 0c-8.94,0 -14.98,-9.1 -11.49,-17.35l17.06 -40.33c2.56,-6.38 7.51,-16.04 18.32,-16.2l155.02 0c10.64,0.16 13.32,6.13 18.31,16.2l17.06 40.33c3.49,8.25 -2.56,17.35 -11.49,17.35l-101.21 0 0 0zm129.27 94.42c-0.04,0 -0.04,0 -0.08,0 -0.04,0 -0.04,0 -0.08,0 -15.19,0 -27.42,-12.59 -27.5,-28.1 0.08,-15.56 12.23,-28.15 27.38,-28.15 0.08,0 0.16,0 0.24,0 0.08,0 0.16,0 0.24,0 14.87,0 27.01,12.59 27.09,28.15 -0.12,15.51 -12.34,28.1 -27.29,28.1zm-235.92 105.88l0 -23.39 -59.18 0 0 23.39c-0.08,41.87 59.18,41.39 59.18,0z",
            CRANE: "M349.18 465.04l42.28 0 0 11.8 -42.28 0 0 -11.8zm74.14 -465.04c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm-204.95 182.34c0,33.42 -6.47,27.54 67.86,27.54 14.68,0 11.81,-13.83 11.81,-28.51 0,-6.9 -5.68,-10.83 -12.79,-10.83l-54.09 0c-7.93,0 -12.79,3.74 -12.79,11.8zm173.08 180.97l0 27.53 -34.4 0c2.76,-2.4 4.98,-4.38 7.99,-6.75 3.05,-2.42 5.62,-4.74 8.59,-7.16l13.12 -10.47c2.59,-2.31 1.14,-2.2 4.7,-3.15zm-42.28 13.77l0 -30.48 37.39 0c-1.65,2.45 -1.67,2.21 -3.93,3.93 -2,1.53 -2.84,2.48 -4.79,4.06 -3.25,2.66 -6.05,4.63 -9.25,7.48 -2.44,2.18 -16.49,14.23 -19.42,15.01zm42.28 -73.77l0 28.53 -34.4 0 34.4 -28.53zm-42.28 14.75l0 -31.47 38.37 0 -38.37 31.47zm42.28 -73.75l0 27.53 -34.4 0c4.55,-3.97 30.36,-26.45 34.4,-27.53zm-42.28 13.77l0 -30.49 37.39 0 -8.72 8c-3.77,3.07 -25.21,21.57 -28.67,22.49zm249.82 -91.47l8.84 0 0 51.14 -8.84 0 0 -51.14zm-207.54 17.7l0 28.53 -34.4 0c1.65,-2.47 1.65,-2.22 3.91,-3.96 7.97,-6.11 23.35,-19.78 30.49,-24.57zm-42.28 14.74l0 -32.44 39.34 0c-1.36,2.05 -6.88,6.34 -9.41,8.3 -8,6.25 -22.61,19.26 -29.93,24.14zm21.64 -123.91l18.69 66.88 -38.35 0c1.28,-5.52 17.67,-64.01 19.66,-66.88zm-38.35 66.88l-81.63 0c3.07,-4.58 68.43,-55.54 78.9,-64.69l26.27 -18.98c-0.8,1.95 -0.31,0.69 -0.95,2.99l-22.59 80.68zm50.16 -91.47l25.15 11.24c40.01,16.62 87.14,39.31 127.99,56.91l48.49 21.35c1.64,0.83 1.71,0.91 2.93,1.97l-178.99 0 -12.68 -45.35c-2.28,-7.86 -4.26,-14.86 -6.56,-22.94 -1.23,-4.31 -2.18,-7.75 -3.27,-11.49 -1.09,-3.76 -2.57,-7.77 -3.06,-11.69zm-164.25 99.34c0,6.64 -1.75,16.72 7.88,16.72l103.25 0 0 250.79 -45.22 0c-2.01,0 -5.05,2.55 -5.92,3.93 -1.69,2.65 -7.3,35.41 7.87,35.41l168.19 0c11.82,0 9.83,-15.61 9.83,-25.57 0,-7.47 -2.56,-13.77 -9.83,-13.77l-43.29 0 0 -250.79 179.99 0 0 50.16c0,6.04 -6.88,-2.57 -6.88,20.66 0,6.25 2.37,15.34 4.3,20.28 1.58,4.04 2.84,4.41 4.34,7.45 2.1,4.28 1.02,5.56 7.09,5.7l0.98 9.82c7.7,1.81 12.78,3.61 12.78,11.82 0,6.85 -3.49,11.47 -10.27,10.33 -11.56,-1.93 -5.9,-10.33 -12.34,-10.33 -9.16,0 0.01,17.7 10.82,17.7 5.91,0 11.19,0.6 15.8,-5.83 5.42,-7.55 4.96,-17.56 -1.29,-24.42 -4.63,-5.09 -8.43,-1.48 -8.62,-9.09 8.08,-0.18 3.21,-1.99 8.1,-7.65 7.87,-9.06 6.66,-22.88 6.66,-35.62 0,-4.71 -3.13,-7.86 -6.88,-8.86l0 -52.12c3,0 4.49,0.33 6.91,-1.94 2.5,-2.36 4.98,-20.25 -3.21,-22.42 -10.25,-2.71 0.64,5.07 -26.04,-6.42 -10.65,-4.58 -20.42,-8.88 -30.75,-13.49l-60.58 -26.97c-23.75,-9.85 -51.54,-23.55 -75.58,-33.57l-30.73 -13.54c-3.54,-1.67 -12.57,-6.27 -16.06,-6.56 -0.62,-7.48 -12.33,-15.56 -18.81,-1.09 -2.27,5.07 -22.44,19.77 -26.74,23.41 -3.23,2.74 -6.04,4.75 -9.3,7.41l-64.46 52.58c-6.17,5.22 -12.77,9.56 -18.57,14.87 -5.26,4.82 -4.58,2.98 -13.65,3.07 -6.07,0.08 -9.77,2.01 -9.77,7.94z",
            FOCKLIFTS: "M638.29 388.46c0,3.16 -2.56,5.73 -5.72,5.73l-82.05 0c-3.17,0 -5.73,-2.57 -5.73,-5.73l0 -82.04c0,-3.16 2.56,-5.73 5.73,-5.73l82.05 0c3.16,0 5.72,2.57 5.72,5.73l0 82.04zm-214.97 -388.46c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm46.05 274.06c-24.9,-40.69 -90.36,-149.72 -91.02,-150.8 -3.33,-5.58 -9.44,-9.05 -15.94,-9.05l-106.04 0c-10.23,0 -18.56,8.33 -18.56,18.56l0 102.19 -29.84 0c-7.07,0 -12.83,5.75 -12.83,12.82l0 118.38c0,7.07 5.76,12.83 12.83,12.83l13.43 0c1.75,0 3.16,-1.41 3.16,-3.15 0,-24.36 19.81,-44.17 44.16,-44.17 24.35,0 44.16,19.81 44.16,44.17 0,0.83 0.33,1.63 0.93,2.22 0.59,0.59 1.38,0.93 2.22,0.93l35.41 0c1.74,0 3.15,-1.41 3.15,-3.15 0,-24.36 19.81,-44.17 44.16,-44.17 24.35,0 44.16,19.81 44.16,44.17 0,1.74 1.41,3.15 3.15,3.15l9.61 0c9.19,0 16.66,-7.48 16.66,-16.66l0 -79.89c0,-3.27 -1.53,-6.04 -2.96,-8.38zm-105.36 -0.2l0 -17.26c0,-2.97 -2.41,-5.37 -5.37,-5.37l-30.42 0 0 -50.81c0,-2.97 -2.41,-5.37 -5.38,-5.37l-17 0c-2.97,0 -5.37,2.4 -5.37,5.37l0 73.44 -25.52 0 -0.01 -122.51 76.93 0 73.21 122.51 -61.07 0 0 0zm-67.67 101.97c0,-15.25 -12.36,-27.62 -27.62,-27.62 -15.25,0 -27.62,12.37 -27.62,27.62 0,15.26 12.37,27.63 27.62,27.63 15.26,0 27.62,-12.37 27.62,-27.63zm130.02 0c0,-15.25 -12.36,-27.62 -27.61,-27.62 -15.26,0 -27.62,12.37 -27.62,27.62 0,15.26 12.36,27.63 27.62,27.63 15.25,0 27.61,-12.37 27.61,-27.63zm199.89 1.87l-111.52 0c-6.64,0 -12.03,-5.39 -12.03,-12.04l0 -258.39c0,-6.65 5.39,-12.04 12.03,-12.04 6.65,0 12.04,5.39 12.04,12.04l0 246.35 99.48 0c6.65,0 12.04,5.4 12.04,12.04 -0.01,6.65 -5.39,12.04 -12.04,12.04zm12.03 -165.63c0,3.16 -2.56,5.72 -5.72,5.72l-82.05 0c-3.17,0 -5.73,-2.56 -5.73,-5.72l0 -82.05c0,-3.17 2.56,-5.73 5.73,-5.73l82.05 0c3.16,0 5.72,2.56 5.72,5.73l0 82.05z",
            LOADER: "M301.98 146.22c-11.14,1.99 -19.4,9.58 -22.69,18.71 -3.18,8.84 -1.77,66.71 -1.8,80.4 -0.07,25.86 12.66,29.05 32.67,49.55 9.54,9.76 11.57,11.7 29.45,11.66 13.7,-0.03 27.4,-0.01 41.1,-0.01 13.47,0 26.99,0.57 35.19,-6.85l9.8 -10.27c10.24,-10.24 25.62,-19.98 19.79,-40.36 -1.97,-6.88 -34.7,-70.51 -40.72,-82.59 -4.9,-9.84 -9.5,-17.04 -21.23,-19.83 -5.81,-1.39 -74.97,-1.6 -81.56,-0.41zm121.34 -146.22c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm-203 349.85c7.42,-65.86 102.19,-105.8 155.64,-39.56 13.64,16.9 20.53,40.57 17.29,68.33l31.75 0c-2.03,-15.95 -1.65,-28.33 3.28,-42.85 5.9,-17.32 10.7,-19.72 17.66,-30.62 -15.26,-1.36 -20.61,-4.85 -28.25,-12.85 -7.34,-7.65 -9.95,-19.05 -8.06,-32.13 -17.2,2.16 -79.16,3.99 -93.19,-1.81 -11.63,-4.78 -29.04,-24.36 -39.29,-34.69 -7.67,-7.73 -7.31,-10.1 -10.62,-13.69 -26.6,4.93 -58.29,21.05 -61.81,46.62 -1.81,13.32 -0.33,38.91 -0.32,53.51 0.01,16.76 -0.05,28.38 15.92,39.74zm290.72 -151.53c-39.47,6.48 -31.11,5.25 -61.22,34.76 -5.32,5.21 -20.55,18.83 -23.67,24.75 -7.48,14.14 1.16,27.58 11.99,31.41 16.01,5.65 25.81,-8.69 32.03,-14.8 8.35,-8.22 16.09,-15.74 24.42,-23.99 8.34,-8.25 9.66,-5.9 26.13,-9.41 6.26,-1.33 5.39,-2 8.86,1.45 23.36,23.16 44.94,19.22 76.74,19.22 15.03,0 33.9,3.07 36.3,-12.12 1.23,-7.73 -3.28,-13.14 -7.83,-15.48 -7.2,-3.69 -12.97,-0.2 -18.02,-6.59 -3.08,-3.92 -28.02,-55.3 -32.51,-64.3 -6.09,-12.19 -9.24,-24.2 -26.86,-15.31 -16.92,8.55 -31.01,15.78 -40.26,31.92 -4.03,7.03 -3.73,10.74 -6.1,18.49zm-8.63 93.24c-37.61,4.78 -69.01,38.32 -63.55,81.95 4.63,37.07 38.96,68.35 81.96,62.95 36.73,-4.6 68.66,-39.03 62.99,-81.73 -4.93,-37.04 -38.45,-68.63 -81.4,-63.17zm3.02 44.04c-39.2,9.21 -24.61,65.02 12.42,56.84 13.85,-3.06 25.88,-17.44 21.85,-34.97 -3.1,-13.57 -17.22,-25.87 -34.27,-21.87zm-207.63 -44.04c-37.45,4.77 -69.05,38.34 -63.58,81.73 4.7,37.23 38.83,68.59 82,63.17 36.98,-4.64 68.39,-38.91 62.98,-81.73 -4.66,-37.01 -38.69,-68.6 -81.4,-63.17zm3.03 44.04c-14.31,3.37 -26.82,16.35 -22.56,35 8.48,37.13 65.56,24.73 56.89,-13.19 -3.1,-13.53 -17.2,-25.83 -34.33,-21.81zm5.9 -197.2l-0.02 50.24 105.93 -0.07 -36.16 -72.97 -69.74 -0.04 -0.01 22.84z",
            "SMALL TRUCK": "M650.22 318.41l-7.34 0 -46.66 -82.87c-1.77,-3.14 -5.13,-4.99 -9.06,-4.99l-54.88 0 10.87 -57.8c1.3,-6.9 -3.24,-12.49 -10.14,-12.49l-290.23 0.12c-7.46,0 -13.5,6.04 -13.5,13.51 0,7.46 6.04,13.51 13.5,13.51l159.74 0c6.36,1.08 11.2,6.62 11.2,13.29 0,7.07 -5.44,12.86 -12.36,13.44l-201.8 0.01c-7.45,0 -13.5,6.05 -13.5,13.51 0,7.45 6.05,13.5 13.5,13.5l202.37 0c6.65,0.84 11.79,6.51 11.79,13.39 0,6.9 -5.19,12.59 -11.88,13.39l-182.46 0c-7.47,0 -13.51,6.05 -13.51,13.51 0,7.46 6.04,13.51 13.51,13.51l42.29 0 -22.26 118.33c-1.3,6.9 3.24,12.5 10.14,12.5l19.93 0c-3.85,28.56 15.58,51.34 44.52,51.34 28.95,0 56.95,-22.78 63.85,-51.34l105.19 0 29.74 0c-3.85,28.56 15.58,51.34 44.52,51.34 28.94,0 56.95,-22.78 63.85,-51.34l8.86 0 11.07 0c6.9,0 13.56,-5.6 14.85,-12.5l4.02 -21.39c1.21,-6.41 -2.63,-11.7 -8.72,-12.41l9.14 -48.56c1.3,-6.91 -3.25,-12.51 -10.15,-12.51zm-226.9 -318.41c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm-69.85 363.42c-3.03,16.13 -18.64,29.27 -34.77,29.27 -16.15,0 -26.8,-13.14 -23.76,-29.27 3.03,-16.14 18.63,-29.27 34.77,-29.27 16.14,0 26.8,13.13 23.76,29.27zm243.3 0c-3.04,16.13 -18.64,29.27 -34.77,29.27 -16.14,0 -26.8,-13.14 -23.76,-29.27 3.03,-16.14 18.63,-29.27 34.78,-29.27 16.13,0 26.79,13.13 23.75,29.27zm-81.04 -104.45l11.83 -62.87 48.64 0 35.41 62.87 -95.88 0z",
            TANKER: "M197.14 334.92c-2.38,-28 -8.08,-103.23 5.89,-125.81 11.02,-17.78 30,-15.17 54.46,-16.5 53.17,-2.92 82.39,-2.63 135.39,-0.07 60.39,2.91 73.28,-1.22 62.33,142.37l-258.07 0.01zm226.18 -334.92c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm-97.6 348.77c-0.14,0.15 0.1,5.89 -6.97,2.67 -3.85,-1.75 -3.21,-3.15 -3.15,-7.98 -1.11,-24.95 -27.01,-45.53 -55.9,-43.23 -25.83,2.05 -45.22,23.35 -47.52,50.22 -21.55,0.11 -21.72,0.4 -21.46,-21.3 0.15,-12.29 -1.37,-27.95 1.79,-37.94 13.96,-3.54 446.3,-3.71 461.47,-0.05 2.29,7.74 3.9,50.34 -1.26,55.77 -3.31,3.55 2.39,1.82 -7.68,3.51 -1.12,0.19 -6.85,0.21 -8.31,0.19 -5.56,-0.03 -11.18,-0.17 -16.76,-0.22l-2.43 -6.48c-7.23,-24.25 -21.84,-43.76 -51.73,-43.87 -43.73,-0.17 -49.65,42.11 -54.17,50.41l-79.16 0.14c-2.75,-4.81 -3.12,-13.29 -6.93,-20.78 -22.89,-44.95 -91.35,-39.23 -99.83,18.94zm272.86 -119.26c2.53,1.51 3.07,0.24 0.91,1.85 -0.46,0.19 -1.12,0.02 -1.37,0.56l-17.73 0.84c-12.21,-0.15 -59.71,1.96 -67.11,-0.75 -6.48,1.71 -2.2,1.32 -1.9,-15.4 0.18,-10.3 -2.58,-40.77 2.2,-48.18l52.59 0.29c2.15,7.18 11.25,22.11 15.72,29.69 4.85,8.18 13.86,23.5 16.69,31.1zm-24.88 128.41c2.52,-15.84 -5.32,-18 -16.73,-10.07l0.47 10.73c8.49,4.21 8.71,4.18 16.26,-0.66zm-302.15 -13.54l-12.41 0.42c-3.81,14.75 3.52,19.3 15.24,14.23 1.76,-9.44 1.76,-7.97 -2.83,-14.65zm100.16 1.06c-6.15,18.49 9.39,19.67 14.9,12.74 5.21,-6.58 -0.66,-17.74 -14.9,-12.74zm0.84 -228.44l-80.61 -0.14c0.89,-22.72 8.22,-18.24 40.54,-18.27 23.24,-0.01 39.25,-6.32 40.07,18.41zm-12.61 243.34c10.29,25.53 50.63,8.69 37.45,-16.95 -11.77,-22.88 -47.52,-8 -37.45,16.95zm56.83 -2.08c-6.22,46.16 -83.31,40.23 -75.56,-12.03 6.79,-45.68 82.47,-39.23 75.56,12.03zm-145.25 -25.56c-26.06,-8.02 -34.18,32.47 -12.98,39.11 29.66,9.3 38.08,-31.38 12.98,-39.11zm32.74 25.56c-6.34,46.03 -83.39,40.51 -75.43,-12.02 7.27,-47.98 82.47,-39.07 75.43,12.02zm266.59 -24.91c-25.02,-9.61 -36.24,31.14 -12.4,38.62 23.81,7.47 42.92,-26.89 12.4,-38.62zm32.35 26.99c-9.26,48.61 -85.61,35.03 -74.9,-16.38 9.78,-46.95 84.71,-35.02 74.9,16.38zm-102.82 -115.72c25.18,4.17 79.99,2.25 102.93,2.24 8.09,0 11.49,-0.92 16.09,-3.61 0.56,-11.83 -24.23,-50.99 -32.98,-65.97 -14.78,-25.3 2.18,-22.86 -72.7,-22.68 -20.58,0.05 -15.98,5.7 -15.88,47.42l2.54 42.6zm-34.14 30.32c4.88,-157.42 -27.96,-145.16 91.23,-145.41 40.54,-0.09 34.4,-1.02 64.41,53.92 22.38,40.96 27.55,35.25 27.18,92.05l-182.82 -0.56z",
            TRUCK: "M233.83 351.18l0 -177.4c0,-9.85 7.99,-17.84 17.85,-17.84l177.31 0c9.85,0 17.84,7.99 17.84,17.84l0 177.4c0,3.28 -2.66,5.96 -5.94,5.96l-201.11 0c-3.28,0 -5.95,-2.68 -5.95,-5.96zm189.49 -351.18c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm-46.32 352.51c0,20.46 -16.57,37.02 -37.03,37.02 -20.43,0 -37.01,-16.56 -37.01,-37.02 0,-20.43 16.58,-37.01 37.01,-37.01 20.46,0 37.03,16.58 37.03,37.01zm-18.5 0c0,-10.22 -8.3,-18.5 -18.53,-18.5 -10.21,0 -18.5,8.28 -18.5,18.5 0,10.23 8.29,18.52 18.5,18.52 10.23,0 18.53,-8.29 18.53,-18.52zm-50.4 -37.01l-82.96 0c-3.29,0 -5.95,2.67 -5.95,5.94l0 18.06c0,3.28 2.66,5.94 5.95,5.94l66.49 0c1.74,-11.9 7.74,-22.42 16.47,-29.94zm262.59 37.01c0,20.46 -16.56,37.02 -37.02,37.02 -20.43,0 -37.02,-16.56 -37.02,-37.02 0,-20.43 16.59,-37.01 37.02,-37.01 20.46,0 37.02,16.58 37.02,37.01zm-18.51 0c0,-10.22 -8.28,-18.5 -18.51,-18.5 -10.22,0 -18.5,8.28 -18.5,18.5 0,10.23 8.28,18.52 18.5,18.52 10.23,0 18.51,-8.29 18.51,-18.52zm83.96 -31.07l0 18.06c0,3.28 -2.66,5.94 -5.95,5.94l-48.17 0c-3.44,-23.62 -23.78,-41.85 -48.34,-41.85 -24.57,0 -44.9,18.23 -48.36,41.85l-96.99 0c-1.74,-11.9 -7.75,-22.42 -16.46,-29.94l91.96 0 0 -170.18c0,-6.58 5.34,-11.9 11.91,-11.9l56.17 0c15.82,0 30.59,7.85 39.44,20.96l36.21 53.64c5.31,7.86 8.15,17.13 8.15,26.62l0 80.86 14.48 0c3.29,0 5.95,2.67 5.95,5.94zm-60.36 -112.04l-28.95 -41.15c-1.12,-1.6 -2.92,-2.54 -4.87,-2.54l-45.17 0c-3.28,0 -5.94,2.67 -5.94,5.95l0 41.15c0,3.29 2.66,5.95 5.94,5.95l74.13 0c4.82,0 7.64,-5.43 4.86,-9.36z",
            COMPRESSORS: "M365.57 176.98c0,-7.96 -6.47,-14.44 -14.44,-14.44 -7.98,0 -14.44,6.48 -14.44,14.44 0,7.98 6.46,14.45 14.44,14.45 7.97,0 14.44,-6.47 14.44,-14.45zm57.75 -176.98c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm195.98 215.08c-1.74,-10.43 -10.74,-18.09 -21.32,-18.11l-349.32 0c-10.56,0.02 -19.56,7.65 -21.32,18.06 -4.02,25.07 -6.09,50.41 -6.19,75.81 0.1,25.38 2.17,50.71 6.19,75.76 1.74,10.43 10.74,18.09 21.32,18.1l23.39 0c3.68,-40.93 37.98,-72.29 79.07,-72.29 41.1,0 75.39,31.36 79.06,72.29l50.9 0 0 -7.22c0,-3.98 3.23,-7.22 7.22,-7.22 3.99,0 7.22,3.24 7.22,7.22l0 50.54 57.77 0 0 -50.54c0,-3.98 3.23,-7.22 7.21,-7.22 4,0 7.23,3.24 7.23,7.22l0 7.22 30.25 0c10.56,-0.01 19.56,-7.64 21.32,-18.05 4.02,-25.07 6.08,-50.43 6.19,-75.82 -0.1,-25.37 -2.17,-50.7 -6.19,-75.75zm-318.72 17.99l-21.67 0c-3.99,0 -7.22,-3.23 -7.22,-7.21 0,-3.99 3.23,-7.23 7.22,-7.23l21.67 0c3.98,0 7.21,3.24 7.21,7.23 0,3.98 -3.23,7.21 -7.21,7.21zm267.15 0l-238.28 0c-3.98,0 -7.21,-3.23 -7.21,-7.21 0,-3.99 3.23,-7.23 7.21,-7.23l238.28 0c3.99,0 7.22,3.24 7.22,7.23 0,3.98 -3.23,7.21 -7.22,7.21zm-216.61 93.87c-26.29,0 -49.99,15.83 -60.04,40.12 -10.05,24.29 -4.5,52.23 14.09,70.82 18.58,18.58 46.54,24.15 70.82,14.08 24.29,-10.05 40.11,-33.75 40.11,-60.04 -0.04,-35.88 -29.11,-64.95 -64.98,-64.98zm0 101.08c-19.94,0 -36.1,-16.16 -36.1,-36.1 0,-19.94 16.16,-36.11 36.1,-36.11 19.93,0 36.1,16.17 36.1,36.1 -0.02,19.95 -16.17,36.09 -36.1,36.11zm144.4 21.66c0,4 3.23,7.23 7.23,7.23l43.31 0c4,0 7.23,-3.23 7.23,-7.23l0 -7.21 -57.77 0 0 7.21zm-122.74 -57.76c0,-11.96 -9.7,-21.65 -21.66,-21.65 -11.96,0 -21.66,9.69 -21.66,21.65 0,11.97 9.7,21.66 21.66,21.66 11.96,0 21.66,-9.69 21.66,-21.66zm-100.72 -267.15l-14.81 0 0 57.76 48.38 0c-19.15,-13.37 -31.43,-34.51 -33.57,-57.76zm223.46 57.76c35.89,0 64.98,-29.09 64.98,-64.99 0,-35.89 -29.09,-64.98 -64.98,-64.98 -35.89,0 -64.98,29.09 -64.98,64.98 0.04,35.88 29.11,64.96 64.98,64.99zm41.51 -79.33c1.89,-0.32 3.83,0.13 5.39,1.23 1.57,1.12 2.62,2.8 2.94,4.69 0.47,2.78 0.7,5.6 0.7,8.42 0,3.99 -3.23,7.22 -7.21,7.22 -4,0 -7.23,-3.23 -7.23,-7.22 0,-2.02 -0.16,-4.02 -0.49,-6.01 -0.67,-3.93 1.97,-7.65 5.9,-8.33zm-7.53 -19.64c2.83,2.82 2.83,7.38 0,10.21l-14.48 14.5c1.42,2.89 2.15,6.05 2.17,9.27 0,11.97 -9.71,21.67 -21.67,21.67 -11.96,0 -21.66,-9.7 -21.66,-21.67 0,-11.96 9.7,-21.65 21.66,-21.65 3.22,0.01 6.4,0.75 9.28,2.16l14.51 -14.5c2.81,-2.82 7.38,-2.82 10.19,0.01zm-84.52 33.98c0.01,-14.86 6.56,-28.98 17.92,-38.58 11.37,-9.6 26.38,-13.7 41.05,-11.24 3.63,0.68 6.18,4.01 5.87,7.7 -0.32,3.7 -3.37,6.56 -7.07,6.62 -0.41,0 -0.81,-0.03 -1.22,-0.09 -10.47,-1.76 -21.19,1.19 -29.31,8.04 -8.1,6.86 -12.79,16.93 -12.8,27.55 0,4 -3.23,7.23 -7.22,7.23 -3.99,0 -7.22,-3.23 -7.22,-7.23zm96.06 64.99l48.35 0 0 -57.76 -14.81 0c-2.13,23.25 -14.4,44.38 -33.54,57.76zm-40.47 -70.04l-0.05 -0.08c-2.86,-2.79 -7.43,-2.75 -10.25,0.1 -2.81,2.84 -2.8,7.43 0.03,10.25 2.83,2.83 7.41,2.84 10.25,0.04 2.85,-2.82 2.9,-7.4 0.1,-10.26l-0.08 -0.05zm-103.92 70.04l53.38 0c-11.59,-8.13 -20.82,-19.21 -26.71,-32.08 -5.88,12.87 -15.1,23.94 -26.67,32.08zm-45.53 0c35.89,0 64.98,-29.09 64.98,-64.99 0,-35.89 -29.09,-64.98 -64.98,-64.98 -35.89,0 -64.98,29.09 -64.98,64.98 0.03,35.88 29.11,64.96 64.98,64.99zm-49.77 -61.71l0 -0.02c-0.87,-1.71 -1.01,-3.69 -0.41,-5.52 0.6,-1.82 1.9,-3.32 3.61,-4.19 6.18,-2.75 12.9,-4.07 19.67,-3.86 0.97,-2.49 2.28,-4.84 3.9,-6.97 -2.85,-2.79 -6.22,-5 -9.93,-6.49 -3.79,-1.27 -5.83,-5.36 -4.57,-9.15 1.27,-3.79 5.36,-5.84 9.15,-4.57 6.3,2.41 11.98,6.22 16.6,11.12 2.45,-1.06 5.03,-1.78 7.67,-2.12 -0.04,-3.99 -0.85,-7.94 -2.42,-11.62 -1.74,-3.56 -0.29,-7.86 3.26,-9.64 3.55,-1.77 7.86,-0.35 9.66,3.19 2.77,6.17 4.09,12.9 3.87,19.67 2.48,0.97 4.83,2.27 6.95,3.88 2.83,-2.77 5.04,-6.11 6.49,-9.8 0.79,-2.46 2.82,-4.31 5.34,-4.86 2.52,-0.55 5.15,0.29 6.89,2.2 1.73,1.9 2.32,4.58 1.54,7.05 -2.36,6.36 -6.18,12.06 -11.18,16.66 1.08,2.45 1.81,5.05 2.17,7.7 3.99,0 7.94,-0.82 11.61,-2.39 3.55,-1.8 7.91,-0.36 9.7,3.2 1.8,3.57 0.36,7.92 -3.2,9.71 -5.72,2.59 -11.92,3.94 -18.19,3.95 -0.48,0 -1,-0.06 -1.5,-0.07 -0.96,2.49 -2.27,4.82 -3.89,6.94 2.85,2.8 6.22,5 9.94,6.5 3.34,1.14 5.38,4.53 4.8,8.01 -0.58,3.5 -3.6,6.05 -7.13,6.05 -0.77,0 -1.54,-0.13 -2.26,-0.37 -6.3,-2.41 -11.98,-6.21 -16.61,-11.11 -2.44,1.06 -5.01,1.76 -7.66,2.11 0.03,4 0.84,7.96 2.42,11.65 1.73,3.56 0.28,7.86 -3.27,9.64 -3.54,1.77 -7.86,0.35 -9.66,-3.19 -2.76,-6.18 -4.08,-12.9 -3.86,-19.67 -2.49,-0.97 -4.84,-2.28 -6.97,-3.89 -2.8,2.84 -5.01,6.22 -6.5,9.93 -1.27,3.79 -5.36,5.83 -9.15,4.56 -3.79,-1.26 -5.83,-5.36 -4.56,-9.15 2.41,-6.29 6.21,-11.97 11.11,-16.6 -1.06,-2.44 -1.77,-5.02 -2.12,-7.66 -3.98,0.01 -7.93,0.83 -11.6,2.4 -1.72,0.85 -3.69,1 -5.52,0.4 -1.82,-0.6 -3.32,-1.9 -4.19,-3.61z",
            BATTERY: "M208.92 205.21l0 246.3 428.81 -0.01 0 -246.29 -428.81 0zm214.4 -205.21c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm-169.95 117.8l104.13 0 0 -41.22 -104.13 0 0 41.22zm235.77 0l104.13 0 0 -41.22 -104.13 0 0 41.22zm-150.74 131.45l0 0 -18.99 0 0 18.98 -27.96 0 0 -18.98 -18.99 0 0 -27.97 18.99 0 0 -18.99 27.96 0 0 18.99 18.99 0 0 27.97zm97.89 100.99l-25.94 -10.44 19.12 -47.5 -53.71 0 34.59 -85.91 25.94 10.44 -19.13 47.51 53.71 -0.01 -34.58 85.91zm137.89 -100.99l-65.95 0 0 -27.97 65.95 0 0 27.97z",
            "WELDING MACHINES": "M336.41 377.24l-12.79 0c-16.05,0 -29.47,13.47 -31.99,27.51 -2.29,12.78 2.55,49.66 -2.19,57.3 -4.36,7.03 -13.98,7.07 -18.7,0.44 -3.59,-5.04 -2.11,-19.69 -2.11,-28.02 0,-19.84 0,-39.67 0,-59.49 5.82,-0.49 12.44,-7.03 15.62,-10.76 3.64,-4.29 6.98,-11.64 6.98,-19.37l0 -57.99 -67.78 0 0 57.99c0,15.1 13.58,29.37 22.6,30.13 0,10.85 -0.99,83.57 0.88,90.24 4.12,14.86 17.06,23.88 30.63,24.98l5.54 0c7.41,-0.6 14.69,-3.65 20.49,-9.48 6.8,-6.85 10.28,-13.13 10.24,-25.91 -0.05,-11.3 0,-22.6 0,-33.9 -0.01,-20.56 2.54,-21.09 22.58,-21.09l0 67.78 22.6 0 0 22.6 67.78 0 0 -22.6 90.38 0 0 22.6 67.78 0 0 -22.6 24.1 0 0 -248.52 -272.64 0 0 158.16zm86.91 -377.24c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm-84.66 67.76c-12.04,0 -24.1,0.03 -36.15,0 -12.31,-0.05 -20.82,3.05 -28.58,7.55 -15,8.68 -27.89,27.41 -27.89,45.16l0 39.17 -22.6 0 0 45.18 67.78 0 0 -45.18 -22.6 0c0,-16.21 -2.21,-41.3 5.11,-52.9 3.11,-4.93 8.65,-10.4 14.25,-12.86 11.98,-5.27 36.33,-3.54 50.68,-3.54 0.8,9.45 16.07,22.6 29.39,22.6 13.65,0 17.1,-3.34 30.02,-7.63l61.32 -21.52c3.05,-1.21 9.32,-3.71 12.58,-3.98 -2.08,-2.85 -19.26,-7.61 -23.78,-9.36l-49.56 -17.47c-8.46,-2.79 -18.01,-7.15 -27.68,-7.82l-4.84 0c-5.65,0.42 -11.28,2.39 -16.69,6.99 -3.73,3.17 -10.27,9.79 -10.76,15.61zm65.53 259.82c0,18.92 22.59,14.43 22.59,3.01 0,-18.92 -22.59,-14.42 -22.59,-3.01zm0 -77.57l90.37 0 0 -22.59 -90.37 0 0 22.59z",
            "TOWED STREET SWEEPER": "M237.28 439.23c24.7,2.37 82.42,39.97 109.99,32.9 27.29,-7.02 17.01,-4.11 41.77,1.32 -7.49,-25.63 -13.6,-19.39 -7.6,-54.95l-12.15 -7.35c7.84,-20.91 19.55,-50.13 39.12,-51.2 -9.44,10.26 -32.47,31.5 -29.95,49.44l22.82 3.75c14.56,-20.24 11.72,-38.99 40.28,-47.53 38.59,-11.53 50.64,24.62 57.76,31.32 30.03,-13.15 -6.26,-17.58 50.91,-29.84 8.26,-1.76 24.69,-3.8 34.55,-7.81l6.65 -5.18c0.35,-0.35 0.75,-0.97 1.12,-1.32 6.73,-6.53 12.79,-7.9 20.3,-2.74l-13.11 2.64c-6.38,0.48 -4.28,1.91 -5.23,9.38 -10.05,1.06 -5.15,0.13 -8.85,3.63 -12.38,-0.8 -40.53,6 -52.92,10.33 -24.43,8.55 -1.33,12.61 -33.56,27.06l3.51 24.64c7.32,-1.41 5.67,-3.08 11.81,-4.18 18.97,-3.45 9.02,6.37 32.74,-10.25l2.75 -2.57c9.22,-6.69 -7.89,3.5 3.22,-2.11 10.08,5.06 6.68,5.95 16,12.24 14.2,-5.29 26.92,-15.05 31.99,-29.84 31.21,3.13 28.84,-13.56 9.16,-22.47l2.15 -6.08 2.36 -2.37c5.52,-13.47 -9.36,-8.99 4.76,-17.74 -9.65,-2.49 -6.48,-0.23 -10.32,-9.39 -2.18,-5.23 -3.3,-10.61 -4.39,-15.85l-73.99 12.77c-7.94,-14.78 -3.82,-18.22 -26.62,-18.12 -19.29,0.1 -54.28,10.29 -69.53,20.19 -10.28,6.68 -17.01,15.05 -25.46,20.16l-0.34 -82.61c-8.78,2.98 -87.74,41.59 -92.91,51.58 -21.4,41.35 -16.52,111.38 -17.83,119.42 -2.78,17 3.99,-11.49 -1.16,4.2l-1.95 3.78c-6.81,-33.38 2.66,-102.88 16.47,-129.03 -11.3,-1.85 -75.82,2.37 -83.15,6.43 -8.68,5.92 -13.81,34.44 -15.11,44.95 -0.58,0.76 -3.8,0.44 -5.43,13.26l2.36 33.48c0.1,-0.39 0.79,1.51 1.49,1.99 1.55,3.63 -6.56,6.02 5.73,2.28l0.83 -0.05 -0.48 0.24c-0.74,0.34 -1.69,1.02 -2.35,1.39 -0.81,0.46 -1.91,2.93 -2.54,2.22 -0.72,-0.81 -1.83,1.7 -2.66,2.65 19,4.67 7.41,6.59 26.99,10.94zm186.04 -439.23c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm143.38 186.47l0.49 -7.19c-5.4,0.92 -5.45,-0.34 -3.81,7.05l-10.07 -0.95 -0.77 12.72 23.83 0.82 0.35 -12.75 -10.02 0.3zm-42.8 -84.05l8.19 -1.56 -0.92 6.76 -16.76 57.87c-27.88,-1.33 -40.14,-5.95 -67.87,1.11 -18.83,4.79 -39.71,11.14 -58.33,14.26 2.31,-12.32 7.12,-35.97 13.63,-44.02 5.89,-6.12 107.87,-32.42 122.06,-34.42zm-2.25 289.07l1.75 -0.02c-15.88,-0.22 -3.72,2.01 -22.06,-0.81l-4.59 22.21c14.14,-4.58 5.12,-5.48 5.12,-5.48 2.23,11.58 8.51,8.37 17.64,7.24l0.7 -0.41 3.41 1.44 -1.97 -24.17zm16.84 23.31c4.36,1.44 0.94,0.64 1.84,-1.68l1.85 1.13 8.86 -1.17c2.23,-4.39 4.36,-0.29 0.21,-7.49 -0.53,-5.23 0.81,-4.79 -2.17,-5.25l0.63 2.82 -1.15 -5.14 0.72 -1.84 5.96 14.95 4.94 -2.57c6.04,-0.09 9.07,-1.38 14.68,-6.31l-5.49 -11.39c3.68,3.79 5.14,5.75 10.14,10.66 -0.16,-18.16 -21.91,-20.5 -14.51,-24.89 6.8,7.67 10.19,10.9 19.04,15.65 -5.77,-15.51 -17.59,-15.58 -17.42,-18.21l3.33 -2.05c2.97,3.36 5.05,5.15 8.84,8.21 5.52,4.46 5.66,4.56 10.13,4.67 -2.94,-10.5 -15.05,-10.79 -16.14,-18.03l-10.41 9.89c-6.24,2.64 -9.69,5.43 -16.36,6.79l2.95 -2.81c0.21,-1.05 0.95,-1.46 1.69,-1.87 5.97,-5.48 5.93,-3.75 9.93,-11.53l-0.09 -5.32 -1.57 -3.75c-3.93,0.6 -3.11,1.63 -3.37,-1.91l-3.92 0.79 -4.05 0.84c-0.02,3.97 0.77,2.4 -4.17,3.02 -16.43,20.69 -39.93,-5.18 -39.79,22.54 10.06,5.52 25.33,1.48 36.71,0.01 9.14,-0.2 3.36,-1.24 6.78,3.79 -9.67,-1.39 -4.26,-1.45 -6.04,2.08l-0.59 -0.59 -6.67 2.19 -4.47 -0.01 -0.39 -0.48 -7.3 0.95 16.84 23.31zm-10.62 0.63l3.36 -0.2 1.88 -0.31 5.38 -0.12 -10.62 0.63zm18.96 -24.14l0.75 0.74 0.08 2 -0.83 -2.74zm0 0l0.83 2.74 -0.83 -2.74zm2.88 11.88l1.33 9.91 -1.33 -9.91zm-326.9 -41.06c-3.06,1.36 -2.65,0.9 -1.54,0.09l1.54 -0.09zm236.28 -1.63c2.64,6.18 6.67,15.39 1.75,23.69 -3.07,5.18 -10.99,8.32 -17.52,4.13 -10.03,-6.45 -11.04,-34.23 15.77,-27.82zm-22.96 42.07c33.94,2.88 42.5,-53.32 6.83,-60.2 -13.28,19.39 -17.33,33.33 -6.83,60.2zm-201.67 -143.87c25.91,0.09 74.05,-1.23 94.85,-13.24 12.65,-7.3 23.3,-11.79 35.36,-18.46 8.87,-4.91 28.16,-13.19 34.79,-20.22 -22.07,0.17 -73.83,9.04 -92.25,16.46 -13.88,5.58 -65.06,28.69 -72.75,35.46zm378.38 31.92c3.48,5.6 2.4,1.03 2.02,10.05l-2.36 2.37 0.34 -12.42zm-278.34 -78.72c27.22,-3.07 47.81,-10.5 79.93,-10.9l0.02 78.85c28.92,-17.44 29.07,-22.33 75.69,-32.55l-8.32 -73.62c-29.44,-4.56 -130.01,25.12 -147.32,38.22zm110.35 124.12c39.7,-17.59 50.65,62 15.59,77.31 -37.54,16.38 -51.82,-61.27 -15.59,-77.31zm-58.02 22.99c-13.43,73.59 52.86,89.53 86.72,72.28 39.2,-19.95 27.85,-108.89 -5.43,-119.3 -37.27,-11.64 -52.97,24.18 -62.25,49.06l-19.04 -2.04zm143.11 -184.76l65.91 -0.33c2.41,11.99 6.79,58.38 4.84,68.46 -14.81,2.63 -51.18,9.76 -63.79,8.51 -2.99,-23.09 -10.37,-53.89 -6.96,-76.64zm13.43 -72.63c30.94,0.85 42.42,8.14 42.56,8.16l9.66 46.89 -64.77 -0.39 12.55 -54.66zm-152.3 31.04c-5.56,46.99 -5.01,24.94 -10.34,55.25 29.69,-4.63 76.39,-25.29 105.4,-18.83l9.81 76.53c21.38,5.57 30.07,-3.81 37.24,18.59 14.05,-1.34 66.96,-10.21 76.42,-15.35 1.74,-23.47 -2.46,-58.79 -6.26,-82.03l-12.53 -54.04c-3.25,-18.67 1.93,-2.03 3.01,-17.44 -15.12,-6.83 -36.05,-8.1 -55.04,-9.49 -43.25,-3.17 -19.53,6.83 -48.42,14.36 -18.58,4.84 -33.85,9.87 -50.81,15.52 -29.21,9.72 -32.89,6.59 -48.48,16.93z",
            COMPACTOR: "M316.51 237.37c-8.45,4.69 -42.76,20.05 -50.36,20.61 0.79,-28.98 4.05,-45.36 -6.16,-66.5 -4.32,-8.96 -4.47,-13.54 -14.96,-8.26 -5.87,11.55 6.33,15.87 6.8,33.43 0.39,15.03 -0.07,30.96 -0.06,46.12 -5.15,10.84 -27.59,7.33 -38.66,28.74 -9.35,18.09 -7.08,39.31 -6.95,61.65 6.41,-3.6 8.55,-7.28 17.12,-12.04 47.22,-26.3 105.28,-3.62 118.87,52.86l3.36 10.5c0.2,0.42 0.52,1.16 0.86,1.7l79.08 -0.04c-10.38,-39.79 -13.17,-63.01 5.42,-100.49 12.81,-25.82 37.82,-51.12 64.7,-60.13 -0.39,-0.4 -1.12,-1.46 -1.32,-1.07 -0.01,0.01 -7.29,-2.32 -9,-15.51 -15.08,-116.42 1.25,-111.86 -75.37,-111.86 -35.12,0.01 -75.2,-9.38 -81.85,24.48 -5.84,29.7 -6.03,65.03 -11.52,95.81zm106.81 -237.37c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm-171.07 288.03c-88.74,16.21 -61.8,144.23 23.72,127.71 82.37,-15.91 59.99,-143.02 -23.72,-127.71zm274.54 -96.12c-18.16,3.4 -26.73,6.03 -41,15.09 -103.03,65.37 -42.77,231.82 83.3,207.98 54.21,-10.25 103.54,-64.86 89.19,-133.69 -11.33,-54.27 -63.65,-102.09 -131.49,-89.38zm-90.57 -15.54l34.08 -0.22c1.07,-13.24 -4.72,-46.17 -6.58,-61.53 -3.45,-28.45 2.38,-42.11 -27.23,-42.48l-0.27 104.23zm-153.97 48.33c-2.59,8.86 -3.14,23.39 1.21,30.76 12.4,2.17 12.83,-5.86 12.51,-17.15 -0.34,-12.05 -2.32,-15.51 -13.72,-13.61zm-25.81 -0.04c-9.58,4.74 -7.9,41.9 7.49,30.31 3.97,-2.99 6.72,-37.31 -7.49,-30.31zm151.95 95.38c4.04,-15.91 -5.58,-14.46 -20.37,-14.31 -9.15,0.1 -29.46,-3.29 -35.44,2.91 -18.08,18.73 48.42,12.66 55.81,11.4zm-76.42 -144.02l88 0.23 0.84 -104.05c-83.32,0.24 -75.86,-8.71 -81.15,34.71 -2.33,19.14 -8.21,52.05 -7.69,69.11z",
            GENERATOR: "M206 206.15l0 226.74c0.01,3.48 3.48,6.3 7.77,6.31l7.76 0 0 -239.34 -7.76 0c-4.29,0 -7.76,2.83 -7.77,6.29zm217.32 -206.15c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm139.71 341.96c-8.57,0 -15.52,-5.64 -15.52,-12.59l0 -18.9c0,-6.95 6.95,-12.58 15.52,-12.59l0 -75.58c-8.57,-0.01 -15.52,-5.64 -15.52,-12.6l0 -18.89c0,-6.96 6.95,-12.59 15.52,-12.6l0 -12.6 -131.94 0 0 188.95 131.94 0 0 -12.6 0 0zm-38.81 0l-69.85 0c-4.29,0 -7.76,-2.81 -7.76,-6.29 0,-3.49 3.47,-6.3 7.76,-6.3l69.85 0c4.28,0 7.76,2.81 7.76,6.3 0,3.48 -3.48,6.29 -7.76,6.29zm0 -25.19l-69.85 0c-4.29,0 -7.76,-2.82 -7.76,-6.29 0,-3.48 3.47,-6.31 7.76,-6.31l69.85 0c4.28,0 7.76,2.83 7.76,6.31 0,3.47 -3.48,6.29 -7.76,6.29zm0 -25.18l-69.85 0c-4.29,0 -7.76,-2.83 -7.76,-6.31 0,-3.48 3.47,-6.3 7.76,-6.3l69.85 0c4.28,0 7.76,2.82 7.76,6.3 0,3.48 -3.48,6.31 -7.76,6.31zm-186.28 -62.99l38.81 0c4.29,0 7.76,-2.82 7.76,-6.3l0 -25.19c0,-3.48 -3.47,-6.3 -7.76,-6.3l-38.81 0c-4.28,0 -7.76,2.82 -7.76,6.3l0 25.19c0,3.48 3.48,6.3 7.76,6.3zm294.94 -88.18l-7.76 0 0 239.34 7.76 0c4.29,-0.01 7.76,-2.83 7.77,-6.31l0 -226.74c-0.01,-3.46 -3.48,-6.29 -7.77,-6.29zm-395.84 239.34l372.56 0 0 -239.34 -372.56 0 0 239.34zm15.52 -69.28c0.01,-6.96 6.96,-12.59 15.53,-12.6l0 -75.58c-8.57,-0.01 -15.52,-5.64 -15.53,-12.6l0 -18.89c0.01,-6.96 6.96,-12.59 15.53,-12.6l0 -18.89c0,-1.67 0.82,-3.28 2.27,-4.45 1.45,-1.19 3.43,-1.85 5.49,-1.85l294.94 0c2.06,0 4.04,0.66 5.49,1.85 1.45,1.17 2.27,2.78 2.27,4.45l0 18.89c8.57,0.01 15.52,5.64 15.53,12.6l0 18.89c-0.01,6.96 -6.96,12.59 -15.53,12.6l0 75.58c8.57,0.01 15.52,5.64 15.53,12.6l0 18.89c-0.01,6.95 -6.96,12.59 -15.53,12.59l0 18.9c0,1.67 -0.82,3.27 -2.27,4.46 -1.45,1.18 -3.43,1.84 -5.49,1.84l-294.94 0c-2.06,0 -4.04,-0.66 -5.49,-1.84 -1.45,-1.19 -2.27,-2.79 -2.27,-4.46l0 -18.9c-8.57,0 -15.52,-5.64 -15.53,-12.59l0 -18.89zm15.53 18.89l15.52 0 0 -18.89 -15.52 0 0 18.89zm31.04 -138.56l0 18.89c0,6.96 -6.95,12.59 -15.52,12.6l0 75.58c8.57,0.01 15.52,5.64 15.52,12.6l0 18.89c0,6.95 -6.95,12.59 -15.52,12.59l0 12.6 131.94 0 0 -188.95 -131.94 0 0 12.6c8.57,0.01 15.52,5.64 15.52,12.6zm15.53 6.3c0.01,-10.43 10.42,-18.89 23.28,-18.9l38.81 0c12.86,0.01 23.27,8.47 23.28,18.9l0 25.19c-0.01,10.43 -10.42,18.88 -23.28,18.89l-38.81 0c-12.86,-0.01 -23.27,-8.46 -23.28,-18.89l0 -25.19zm-46.57 12.59l15.52 0 0 -18.89 -15.52 0 0 18.89zm77.96 -107.06l20.57 0c-3.74,-8.05 -5.57,-16.6 -5.39,-25.21 -0.18,-8.59 1.65,-17.13 5.39,-25.18l-20.92 0c-1.89,0.8 -7.76,9.57 -7.76,25.18 0,15.46 5.73,24.19 8.11,25.21zm46.22 25.19l46.57 0 0 -12.6 -46.57 0 0 12.6zm-7.4 -25.19l43.84 0c-3.73,-8.05 -5.56,-16.6 -5.39,-25.21 -0.17,-8.59 1.66,-17.13 5.39,-25.18l-44.2 0c-1.89,0.8 -7.76,9.57 -7.76,25.18 0,15.46 5.73,24.19 8.12,25.21zm178.16 107.06l15.52 0 0 -18.89 -15.52 0 0 18.89zm-116.07 -107.06l20.56 0c-3.73,-8.05 -5.56,-16.6 -5.39,-25.21 -0.17,-8.59 1.66,-17.13 5.39,-25.18l-20.91 0c-1.9,0.8 -7.77,9.57 -7.77,25.18 0,15.46 5.74,24.19 8.12,25.21zm38.44 -0.18c3.77,-3.89 6.05,-8.59 6.58,-13.51 0.09,-0.22 0.19,-0.45 0.31,-0.66 0.25,-0.79 0.72,-1.52 1.37,-2.14 0.6,-0.64 1.37,-1.16 2.23,-1.53 0.88,-0.41 1.85,-0.66 2.86,-0.74 0.28,-0.06 0.58,-0.11 0.87,-0.14l51.7 0c4.42,-1.4 8.38,-3.66 11.49,-6.58 2.21,-1.82 4.15,-3.84 5.79,-6.02l-68.98 0c-0.3,-0.04 -0.61,-0.08 -0.9,-0.15 -0.49,-0.03 -0.98,-0.12 -1.44,-0.24 -0.49,-0.12 -0.96,-0.29 -1.4,-0.5 -0.42,-0.18 -0.81,-0.4 -1.17,-0.64 -0.38,-0.26 -0.74,-0.55 -1.04,-0.87 -0.65,-0.63 -1.12,-1.36 -1.37,-2.15 -0.12,-0.22 -0.23,-0.43 -0.32,-0.65 -0.53,-4.93 -2.81,-9.62 -6.57,-13.52 -2.56,1.67 -7.75,10.31 -7.75,25.01 0,14.73 5.19,23.36 7.74,25.03zm-233.62 302.48l335.31 0c1.2,-4.57 3.65,-8.88 7.17,-12.59l-349.64 0c3.52,3.71 5.98,8.02 7.16,12.59zm311.25 -75.57l15.52 0 0 -18.89 -15.52 0 0 18.89z",
            "HOOK LIFT": "M533.24 411.73c0,-28.29 42.56,-31.57 42.56,0.89 0,10.18 -9.6,19.5 -22.16,19.5 -10.11,0 -20.4,-10.28 -20.4,-20.39zm-109.92 -411.73c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm226.93 305.31l0 38.26c-1.15,21.52 -8.09,20.25 -42.54,20.25 -0.84,9.92 -11.58,24.91 -18.1,29.79 -22.89,17.15 -47.56,16.72 -70.06,-0.13 -9.24,-6.93 -15.56,-18.21 -18.23,-29.66l-150.69 0c-1.36,2.82 -1.94,5.96 -3.28,9.13 -1.23,2.92 -2.61,5.57 -4.33,8.09 -14.68,21.43 -41.77,31.58 -66.23,21.17 -2.89,-1.24 -6.08,-2.38 -8.37,-4.04 -7.74,-5.55 -12.04,-8.9 -17.81,-17.66 -1.6,-2.42 -3.05,-5.22 -4.23,-8.18 -1.25,-3.14 -1.74,-5.84 -3.02,-8.51 -8.62,0 -13.75,0.94 -19.83,-2.33 -4.61,-2.5 -8.53,-6.93 -8.53,-13.63l0 -80.67c0,-10.72 9.35,-15.95 20.39,-15.95l85.09 0 0 -70.91c0,-2.04 -7.49,-9.81 -9.24,-12.04l-28.87 -32.3c0,9.76 0,19.51 0,29.27 0,4.69 0.56,10.32 -0.53,14.54 -2.75,10.6 -8.31,19.87 -17.18,26.26 -2.57,1.84 -6.28,3.99 -9.12,5.06 -17.12,6.49 -34.04,2.67 -46.97,-10.19 -4.12,-4.07 -5.38,-5.83 -8.08,-11.42 -2.16,-4.52 -3.73,-9.81 -4.11,-14.89l0 -4.57c0.69,-8.51 5.57,-15.43 17.73,-15.43 6.5,0 12.45,5.17 14.12,9.8 2.39,6.58 0.05,12.82 7.54,15.59 6.33,2.35 11.63,-1.06 13.17,-7.4 2.65,-10.9 -1.63,-82.47 1.81,-90.39 1.89,-4.32 8.2,-9.16 13.89,-9.16 7.63,0 25.38,13.67 32.26,18.27 10.19,6.78 20.12,12.97 29.79,19.85 13.51,9.58 34.08,21.76 45.36,30.01 4.59,3.36 9.61,7.42 9.61,15.19l0 94.86 55.84 0 0 -73.57c0,-12.14 7.36,-19.51 19.51,-19.51l73.56 0c15.08,0 18.02,7.45 23.35,17.43l43.13 76.53c7.94,0 15.74,2.86 21.29,5.33 3.11,1.38 5.44,2.92 8.36,4.94 5.11,3.56 6.95,5.92 10.49,9.9 7.4,8.31 13.06,21.13 13.06,33.02zm-374.97 46.1c0,-10.72 8.92,-21.28 19.5,-21.28l4.43 0c9.28,0 18.62,9.35 18.62,18.62 0,7.02 -0.11,12.63 -6.44,18.39 -13.48,12.23 -36.11,2.67 -36.11,-15.73zm195.9 -159.56l54.08 0c0.78,3.36 6.1,11.44 7.97,15.07 2.57,4.99 5.42,9.42 8.27,14.77l8.29 14.76c2.93,5.27 5.49,9.54 8.28,14.79l-86.89 0 0 -59.39z",
            PICKUP: "M360 226.66c8.96,-2.49 14.2,-13.91 58.52,-9.51 0.35,3.17 0.62,34.21 0.11,35.64 -0.89,2.46 -1.67,1.91 -5.66,1.96l-27.24 0.52 -46.93 0.79 -13.71 0.09c3.85,-5.95 31.29,-24.97 34.91,-29.49zm63.32 -226.66c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm129.37 306.79c-6.59,-2.41 -12.34,-6.48 -11.21,-15.87 1.06,-8.75 7.66,-12.37 17.34,-12.05 6.4,2.64 12.13,6.99 10.46,16.82 -1.3,7.71 -8.13,11.82 -16.59,11.1zm-280.6 -27.62c5.88,2.99 10.73,6.54 9.6,15.58 -0.84,6.78 -5.86,10.6 -11.75,12.12 -22.55,0.51 -21.87,-30.78 2.15,-27.7zm1.95 47.57c7.78,0.7 16.95,-6.24 20.93,-11.14 4.72,-5.78 8.67,-14.59 8.06,-25.03 -1.15,-19.45 -14.83,-30.33 -33.1,-32.97 -22.02,-0.72 -39.23,16.1 -37.47,38.16 2.19,27.06 33.06,37.06 41.58,30.98zm298.7 -65.01c-23.09,-9.14 -43.26,-0.77 -50.67,19.27 -8.62,23.32 9.33,44.87 30.49,46.93 18.95,1.75 31.83,-10.54 36.4,-23.83 6.88,-20.05 -4.68,-34.71 -16.22,-42.37zm55.94 11.45c6.4,-0.97 21.32,-1.9 25.94,-4.61 3.72,-2.18 4.98,-6.43 4.88,-11.4 -0.16,-8.18 -2.89,-5.66 -9.53,-6.53 -0.32,-11.71 1.49,-45.91 -0.83,-54.56 -2.51,-1.7 -4.87,-2.84 -8.98,-2.53l-87.6 -0.12 -31.64 -0.76c-0.17,-0.05 -0.52,-0.18 -0.73,-0.33l-3.86 -18.53 -1.94 -14.07c-2.44,-9.68 -2.13,-13.19 -11.79,-15.19 -25.27,0.82 -51.82,0.09 -77.25,0.09 -23.44,0 -51.73,-2.63 -68.76,8.94 -8.58,3.47 -22.11,15.77 -29.31,22.29 -7.16,6.48 -20.31,20.55 -29.15,22.11 -16.89,1.07 -34.67,4.3 -50.98,7.14 -14.24,2.49 -34.59,4.63 -39.73,18.03l91.74 -1.61c9.85,2.02 15.12,5.86 19.21,12.34 2.66,4.22 6.08,19.69 6.68,25.58 -6.19,-9.6 -7.44,-22.18 -16.46,-28.35 -8.7,-5.96 -28.79,-3.19 -40.71,-2.79 -15.14,-0.02 -30.82,0.82 -45.95,1.32 -20.7,0.68 -23.12,-0.09 -26.91,20.3 -6.47,3.64 -7.76,1.01 -7.85,11.42 -0.05,5.75 -0.35,12.23 2.37,16.9 5.16,8.87 17.12,10.04 29.34,8.12 6.93,-7.09 12.1,-31.79 19.98,-37.3 8.23,-5.75 41.95,-4.2 54.26,-3.16 16.13,5.13 12.08,21.23 20.66,31.93 40.47,1.49 103.55,0.19 148.06,0.02l15.71 0.13c5.66,-0.47 2.91,0.85 5.08,-1.99 1.66,-0.86 12.93,-18.32 15.55,-21.69l-7.63 23.13 20.31 0.26c4.26,-5.14 8,-18.97 12.09,-25.07 6.14,-9.15 18.36,-7.13 31.71,-7.13 10.87,0 26.16,-2.47 33.38,4.4 6.44,6.12 7.5,17.83 12.5,26.32l28.14 -3.05zm-164.89 -78.96l-31.41 0.62 0.07 -37.36 67.51 0.01c1.89,6.81 1.8,19.96 5.01,24.37l0.81 11.58 -39.85 0.74 -2.14 0.04zm-68.09 12.42c3.82,-0.82 8.07,-0.98 12.06,-0.8 6.37,0.3 5.41,0.95 5.07,6.56l-18 -0.2 0.87 -5.56z",
            "STREET SWEEPER": "M407.31 336.31c0,5.26 1.6,6.86 6.87,6.86l237.85 0 0 -89.2c0,-3.67 -9.71,-17.91 -12.36,-21.94 -5.41,-8.21 -8.55,-14.37 -13.76,-22.83 -5.57,-9.05 -24.49,-36.98 -26.48,-44.43l-192.12 0 0 171.54zm16.01 -336.31c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -95.41,0 -178.67,-52.03 -222.95,-129.27l17.11 0 0 -45.73 -22.87 0 0 35.1c-17.96,-35.07 -28.1,-74.8 -28.1,-116.91 0,-141.83 114.98,-256.81 256.81,-256.81zm-118.93 139.64l38.87 0c0,-10.86 -2.55,-16.52 -4.57,-25.16l-36.59 0c-0.27,12.02 -9.75,25.16 2.29,25.16zm-9.15 244.71l22.88 0 0 -45.73 -22.88 0 0 45.73zm-34.3 0l22.86 0 0 -45.73 -22.86 0 0 45.73zm-34.32 0l25.16 0 0 -45.73 -25.16 0 0 45.73zm100.64 0l25.16 0 0 -45.73 -25.16 0 0 45.73zm269.88 -43.45c3.9,0 54.88,-7.92 54.88,-18.3l0 -29.73 -77.76 0c4.7,7.01 10.47,10.98 15.15,19.17 5.1,8.91 5.31,18.46 7.73,28.86zm-402.53 -11.44l157.81 0 0 -18.29c0,-5.27 -1.6,-6.86 -6.87,-6.86l-150.94 0 0 25.15zm345.35 27.45c-24.08,0 -24.63,-34.31 0,-34.31 23.56,0 22.76,34.31 0,34.31zm-45.75 -20.59c0,50.95 56.48,60.73 79.48,33.73 29.8,-34.98 -1.23,-77.18 -33.73,-77.18 -22.63,0 -45.75,20.17 -45.75,43.45zm-214.98 -169.23l82.33 0 0 66.32 -114.35 0c1.61,-6.89 4.13,-10.46 6.56,-16.32l14.63 -35.67c2.5,-6.71 3.22,-14.33 10.83,-14.33zm-50.31 70.89l0 57.18 132.64 0 0 45.74 121.23 0c0.69,-31.6 17.61,-36.91 20.58,-48.03l-107.5 0 0 -144.09 -128.07 0c-6.67,0 -5.7,2.78 -8.05,7.97 -6.96,15.35 -30.83,72.13 -30.83,81.23z",
            REFRIGERATOR: "M566.92 617.44c88.1,-129.09 132.73,-236.02 132.73,-317.83 0,-165.21 -134.4,-299.61 -299.6,-299.61 -165.21,0 -299.69,134.4 -299.69,299.61 0,81.81 44.61,188.74 132.71,317.83 62.94,92.35 125.19,162.11 127.75,165.04 10.02,11.15 24.27,17.52 39.23,17.52 14.97,0 29.12,-6.37 39.13,-17.52 2.57,-2.93 64.81,-72.69 127.74,-165.04zm-283.11 -355.43l0 211.34c0,5.98 4.91,10.88 10.91,10.88l12.49 0 0 0.77c0,6.05 4.89,10.92 10.91,10.92 6.09,0 10.93,-4.87 10.93,-10.92l0 -0.77 141.91 0 0 0.77c0,6.05 4.85,10.92 10.93,10.92 6.03,0 10.91,-4.87 10.91,-10.92l0 -0.77 12.5 0c5.99,0 10.89,-4.9 10.89,-10.88l0 -211.34 -232.38 0zm232.38 -21.84l0 -106.01c0,-6.05 -4.9,-10.96 -10.89,-10.96l-210.58 0c-6,0 -10.91,4.91 -10.91,10.96l0 106.01 232.38 0zm-174.66 -46.8l23.39 0c6.03,0 10.93,4.91 10.93,10.94 0,6.05 -4.9,10.89 -10.93,10.89l-23.39 0c-6.04,0 -10.91,-4.84 -10.91,-10.89 0,-6.03 4.87,-10.94 10.91,-10.94l0 0zm23.39 115.41l-23.39 0c-6.04,0 -10.91,-4.89 -10.91,-10.9 0,-6.03 4.87,-10.9 10.91,-10.9l23.39 0c6.03,0 10.93,4.87 10.93,10.9 0,6.01 -4.9,10.93 -10.93,10.93l0 -0.03zm35.08 -242.29c131.89,0 238.8,106.93 238.8,238.8 0,131.89 -106.91,238.81 -238.8,238.81 -131.88,0 -238.8,-106.92 -238.8,-238.81 0,-131.87 106.92,-238.8 238.8,-238.8z",
            undefined: "M589.12 448.77l0 -23.39 -59.43 0 0 23.39c0.17,41.39 59.43,41.87 59.43,0zm-165.8 -448.77c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm197.38 317.2l0 -82.04c-0.08,-28.59 -22.87,-43.7 -35.82,-45.36l-32.37 -83.55c-6.05,-16 -19.29,-29.6 -44.31,-29.73l-45.61 0 -77.98 0 -46.46 0c-24.9,0.13 -38.13,13.73 -44.31,29.73l-32.37 83.55c-12.83,1.66 -35.58,16.77 -35.54,45.36l0 82.04c0,13.44 10.93,24.37 24.37,24.37l346.03 0c13.45,0 24.37,-10.89 24.37,-24.37zm-328.56 -35.78c-0.05,0 -0.05,0 -0.09,0 -0.04,0 -0.04,0 -0.08,0 -15.1,0 -27.29,-12.59 -27.25,-28.1 -0.08,-15.56 12.06,-28.15 27.09,-28.15 0.08,0 0.16,0 0.24,0 0.09,0 0.16,0 0.25,0 14.98,0 27.13,12.59 27.09,28.15 0.04,15.51 -12.19,28.1 -27.25,28.1zm131.18 -92.39l-0.28 0 -101.3 0c-8.94,0 -14.98,-9.1 -11.49,-17.35l17.06 -40.33c2.56,-6.38 7.51,-16.04 18.32,-16.2l155.02 0c10.64,0.16 13.32,6.13 18.31,16.2l17.06 40.33c3.49,8.25 -2.56,17.35 -11.49,17.35l-101.21 0 0 0zm129.27 94.42c-0.04,0 -0.04,0 -0.08,0 -0.04,0 -0.04,0 -0.08,0 -15.19,0 -27.42,-12.59 -27.5,-28.1 0.08,-15.56 12.23,-28.15 27.38,-28.15 0.08,0 0.16,0 0.24,0 0.08,0 0.16,0 0.24,0 14.87,0 27.01,12.59 27.09,28.15 -0.12,15.51 -12.34,28.1 -27.29,28.1zm-235.92 105.88l0 -23.39 -59.18 0 0 23.39c-0.08,41.87 59.18,41.39 59.18,0z",
            null: "M589.12 448.77l0 -23.39 -59.43 0 0 23.39c0.17,41.39 59.43,41.87 59.43,0zm-165.8 -448.77c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm197.38 317.2l0 -82.04c-0.08,-28.59 -22.87,-43.7 -35.82,-45.36l-32.37 -83.55c-6.05,-16 -19.29,-29.6 -44.31,-29.73l-45.61 0 -77.98 0 -46.46 0c-24.9,0.13 -38.13,13.73 -44.31,29.73l-32.37 83.55c-12.83,1.66 -35.58,16.77 -35.54,45.36l0 82.04c0,13.44 10.93,24.37 24.37,24.37l346.03 0c13.45,0 24.37,-10.89 24.37,-24.37zm-328.56 -35.78c-0.05,0 -0.05,0 -0.09,0 -0.04,0 -0.04,0 -0.08,0 -15.1,0 -27.29,-12.59 -27.25,-28.1 -0.08,-15.56 12.06,-28.15 27.09,-28.15 0.08,0 0.16,0 0.24,0 0.09,0 0.16,0 0.25,0 14.98,0 27.13,12.59 27.09,28.15 0.04,15.51 -12.19,28.1 -27.25,28.1zm131.18 -92.39l-0.28 0 -101.3 0c-8.94,0 -14.98,-9.1 -11.49,-17.35l17.06 -40.33c2.56,-6.38 7.51,-16.04 18.32,-16.2l155.02 0c10.64,0.16 13.32,6.13 18.31,16.2l17.06 40.33c3.49,8.25 -2.56,17.35 -11.49,17.35l-101.21 0 0 0zm129.27 94.42c-0.04,0 -0.04,0 -0.08,0 -0.04,0 -0.04,0 -0.08,0 -15.19,0 -27.42,-12.59 -27.5,-28.1 0.08,-15.56 12.23,-28.15 27.38,-28.15 0.08,0 0.16,0 0.24,0 0.08,0 0.16,0 0.24,0 14.87,0 27.01,12.59 27.09,28.15 -0.12,15.51 -12.34,28.1 -27.29,28.1zm-235.92 105.88l0 -23.39 -59.18 0 0 23.39c-0.08,41.87 59.18,41.39 59.18,0z",
        };
        this.color = {
            Idle: "#1f5baa",
            Running: "#1eb15d",
            Stop: "#FF0000",
            Yet_to_transmit: "#7d410f",
            "No Transmission": "#000000",
            Online: "#00E1BC",
            Overspeed: "#f28918",
            DoorOpen: "#FF851B",
            HighTemp: "#FF0000",
            PowerFail: "#412525",
            Geofence: "#1f5baa",
            Good: "#1eb15d",
            Towed: "#c200b8",
        };
        this.paintingForVeh = {
            CAR: ["#4B4B4D", "#373435", "#1C353D", "#D2D3D5", "#efefef", "#17292F"],
            BIKE: ["#5A616D", "#4B4B4D", "#40454C", "#89AAA5", "#606062", "#977962"],
            AUTO: ["#54545C", "#A9ABAE", "#394754", "#363D42", "#ED3237", "#777F82"],
            TRUCK: ["#64616A", "#403E45", "#524242", "#707078", "#4C4B52", "#FEFEFE"],
        };
        this.vehicleColor = {
            Stop: "#ed3237",
            Running: "#00a859",
            Towed: "#ec268f",
            "No Transmission": "#272424",
            Overspeed: "#fe9308",
            Idle: "#0084fe",
            Yet_to_transmit: "#cca169",
            "No Data": "#cccccc",
            Online: "#3afff4",
        };
        this.modelForVeh = {
            CAR: [
                "M165.62 652.12c28.79,3.84 63.69,27.41 78.2,58.65 14.5,31.24 17,84 17.45,89.12 0,1.31 0,2.63 0,3.94 0,1.68 0,3.35 0,5.02 47.75,0.89 95.5,1.77 143.25,2.65 125.32,2.32 250.64,4.64 375.96,6.96 11.59,0.21 23.18,0.42 34.77,0.64 0,-10.36 0,-20.72 0,-31.08 0,0 -3.33,-54.63 29.31,-95.26 32.64,-40.64 74.05,-42.69 97.92,-36.88 23.88,5.8 66.19,30.73 80.09,77.51 0,0 13.3,34.15 6.65,85.71 0,0 13.91,1.71 22.67,-4.78 2.62,-0.33 5.23,-0.67 7.85,-1 21.15,-2.69 42.3,-5.37 63.46,-8.07 8.46,-1.07 16.93,-2.15 25.4,-3.23 0,0 2.92,-0.7 4.83,-2.85 1.63,-1.83 2.53,-4.71 0.31,-9.1 0,0 -2.14,-3.02 -6.15,-4.73 -1.21,-0.51 -2.59,-0.91 -4.13,-1.07 -1,-4.67 -2.01,-9.33 -3.02,-14 0,0 4.94,-3.1 8.25,-8.77 1.85,-3.17 2.9,-6.77 2.94,-10.57 0.02,-2.53 0.02,-13.39 -1.74,-27.33 -0.93,-7.41 -2.37,-15.68 -4.56,-24.04 -3.4,-12.98 -8.62,-26.15 -16.63,-36.58 -1.17,-1.52 -2.39,-2.98 -3.68,-4.37 0,0 4.54,-15.03 0.61,-26.3 -0.8,-2.27 -2.61,-5.31 -5.24,-8.85 -2.38,-3.19 -5.44,-6.78 -9.03,-10.54 -12.15,-12.74 -30.38,-27.51 -49.19,-35.93 0,0 -0.47,-0.19 -1.36,-0.56 -8.96,-3.64 -60.94,-24.46 -116.46,-39.92 -11.46,-3.2 -23.08,-6.16 -34.5,-8.7 0,0 -42,0.35 -64.67,-8.19 0,0 -26.9,-9.9 -50.47,-28 -23.57,-18.1 -153.23,-81.95 -169.85,-86.39 5.83,-0.94 11.67,-1.89 17.51,-2.83 1.21,-0.2 2.42,-0.4 3.64,-0.59 0,0 -47.45,-11.27 -76.46,-11.95 -22.61,-0.53 -81.19,-2.92 -127.26,-2.83 -13.06,0.03 -25.1,0.26 -35.04,0.79 0,0 -12.33,0.77 -29.89,1.96 -33.11,2.24 -84.8,5.94 -107.32,8.62 0,0 -52.09,7.66 -78.02,13.19 -5.98,1.28 -10.56,2.44 -12.8,3.37 0,0 -11.79,-3.33 -24.71,-1.28 0,0 -10.2,0.87 -17,0.3 0,0 -6.58,-0.81 -4.99,3.54 0.59,1.63 3.72,5.97 7.59,10.93 6.49,8.3 15.07,18.3 17.34,20.06 0,0 -47.19,41.18 -70.92,73.11 -0.16,0.21 -0.32,0.43 -0.48,0.64 0,0 -18.11,14.66 -30.68,36.48 -0.67,1.17 -1.33,2.35 -1.96,3.56 -4.04,7.66 -7.29,16.09 -8.84,25.01 0,0 -0.66,7.01 -0.79,14.93 -0.08,5.2 0.07,10.78 0.79,15.04 0,0 -8.81,8.67 -17.27,23.19 -8.06,13.82 -15.81,32.94 -15.37,54.92 0.07,3.25 6.07,4.82 6.2,7.8 0.36,7.72 0.94,14.53 1.63,20.48 0.64,5.46 0.97,10.31 1.13,14.53 0.44,11.85 -0.48,18.72 0.16,20.28 2.22,5.41 4.44,10.78 8.12,15.17 1.2,1.44 2.52,2.69 3.93,3.58 1.99,1.26 4.17,1.81 6.48,1.13 0,0 0.45,4.86 8.84,5.12 3.77,0 7.55,0 11.33,0 0,0 -9.89,-38.87 9.3,-77.59 0.97,-1.96 2.01,-3.91 3.13,-5.86 0.45,-0.78 0.91,-1.56 1.39,-2.34 25.16,-41.24 63.24,-49.43 92.03,-45.59z",
                "M59.78 783.51l208.76 0c0,0 0.09,-134.45 -100.6,-141.62 0,0 -125.17,-5.56 -116.1,135l7.94 6.63 -0 -0.01zm755.48 35.6l218.13 0.2c0,0 33.85,-164.17 -107.1,-173.87 0,0 -153.65,4.64 -111.04,173.67l0.01 0z",
                "M924.45 680.31c-50.49,0 -91.42,40.96 -91.42,91.5 0,50.54 40.93,91.5 91.42,91.5 50.5,0 91.43,-40.96 91.43,-91.5 0,-50.54 -40.93,-91.5 -91.43,-91.5zm-768.65 0c-50.49,0 -91.42,40.96 -91.42,91.5 0,50.54 40.93,91.5 91.42,91.5 50.49,0 91.42,-40.96 91.42,-91.5 0,-50.54 -40.93,-91.5 -91.42,-91.5z",
                "M956.48 565.82l8.61 14.6c0,0 1.13,2.31 8.84,6.4 7.71,4.1 33.32,19.98 33.32,19.98 0,0 18.36,9.99 13.82,23.05 0,0 86.13,34.57 100.87,26.89 0,0 -2.95,-29.45 -30.83,-43.02 0,0 -7.71,-3.92 -16.55,-10.54 0,0 -16.32,-12 -31.74,-17.38 0,0 -27.65,-13.57 -40.34,-9.99l-46.02 -9.99 0.02 -0zm-310.46 -163.98c0,0 53.8,20.49 117.56,54.98 63.77,34.48 120.59,70 127.54,72.73 0,0 -31.74,4.56 -81.6,-25.04l-99.5 -57.93 -89.69 -41.32 16.28 -5.52 9.42 2.11 -0.01 -0.01zm-566.3 197.02c15.41,-2.31 24.48,-3.84 26.3,-13.57 1.81,-9.73 -21.99,-2.3 -26.07,-2.05 -4.08,0.26 -1.13,-6.4 -1.13,-6.4 8.16,-18.19 34.68,-11.27 39.67,-13.06 4.99,-1.79 0.23,-17.16 -7.03,-24.07 -7.25,-6.92 -21.53,-2.31 -21.53,-2.31 -34.91,13.57 -44.5,45.83 -44.5,45.83 -0.31,1.36 -0.6,2.73 -0.84,4.11 0,0 -1.81,19.21 0,29.96 1.59,-4.87 19.72,-16.13 35.13,-18.44l0 0zm758.89 -39.19l0 0c0,0 -39.67,-5.38 -50.55,-7.17 -10.88,-1.79 -16.77,3.33 -16.77,3.33l-12.24 8.96c-5.9,7.17 -75.71,0 -75.71,0l-165.01 -16.9 -113.56 -9.99c-21.31,-1.28 -98.6,-8.71 -131.02,-16.39 -32.41,-7.69 -49.41,-49.94 -51.68,-61.46 -2.26,-11.52 9.52,-17.93 23.35,-24.33 13.82,-6.4 70.94,-22.54 113.33,-27.66 42.39,-5.13 111.75,-6.66 121.04,-6.15 9.3,0.52 70.04,-3.84 128.75,12.55 58.7,16.39 135.09,62.49 135.09,62.49 35.81,18.95 87.5,58.39 87.5,58.39 13.6,9.48 13.83,16.78 13.83,16.78 -0.46,7.81 -6.35,7.55 -6.35,7.55zm274.72 163.39c-13.6,-6.15 -31.73,29.2 -31.73,29.2 -8.16,15.62 -4.54,25.35 -4.54,25.35 2.72,12.55 12.24,13.32 12.24,13.32 53.27,3.58 54.17,-6.66 54.17,-6.66l-3.02 -14c0,0 3.75,-2.35 6.91,-6.72 -0.2,-27.12 -20.43,-34.35 -34.04,-40.49l0.01 0z",
                "M924.01 701.3c-38.56,0 -69.81,31.34 -69.81,70 0,38.66 31.26,70 69.81,70 38.56,0 69.81,-31.34 69.81,-70 0,-38.66 -31.26,-70 -69.81,-70zm-884.55 57.7c0,0 -0.01,-1.64 -0.04,-4.71 -0.04,-1.54 0.01,-3.43 0.11,-5.67 0.05,-1.11 0.07,-2.32 0.15,-3.6 0.11,-1.27 0.24,-2.63 0.36,-4.06 0.55,-5.72 1.49,-12.68 3.39,-20.44 1.85,-7.78 4.58,-16.41 8.61,-25.28 3.98,-8.89 9.31,-17.97 15.94,-26.64 3.35,-4.29 6.96,-8.56 10.98,-12.52 3.95,-4.05 8.32,-7.76 12.94,-11.23 9.24,-6.94 19.67,-12.68 30.84,-16.51 5.58,-1.96 11.35,-3.33 17.18,-4.39 5.88,-0.99 11.71,-1.43 17.78,-1.52 5.7,0.08 11.83,0.53 17.64,1.52 5.83,1.06 11.61,2.42 17.19,4.38 11.18,3.82 21.61,9.57 30.84,16.51 4.62,3.47 8.99,7.18 12.94,11.23 4.02,3.96 7.63,8.23 10.98,12.52 6.63,8.67 11.96,17.75 15.94,26.64 4.02,8.88 6.76,17.5 8.61,25.28 1.89,7.77 2.84,14.72 3.39,20.45 0.13,1.43 0.25,2.79 0.36,4.06 0.08,1.28 0.09,2.48 0.15,3.6 0.09,2.23 0.15,4.13 0.11,5.67 -0.03,3.07 -0.04,4.71 -0.04,4.71 0,0 -0.09,-1.63 -0.25,-4.7 -0.06,-1.53 -0.23,-3.41 -0.46,-5.62 -0.11,-1.1 -0.23,-2.29 -0.36,-3.55 -0.17,-1.26 -0.35,-2.59 -0.55,-4.01 -0.81,-5.63 -2.06,-12.44 -4.28,-19.95 -2.19,-7.52 -5.26,-15.78 -9.43,-24.26 -4.17,-8.48 -9.63,-17.05 -16.21,-25.25 -3.34,-4.04 -6.92,-8.06 -10.89,-11.74 -1.94,-1.91 -4.03,-3.65 -6.09,-5.47 -1.05,-0.89 -2.15,-1.7 -3.22,-2.57 -1.07,-0.87 -2.17,-1.7 -3.31,-2.49 -8.96,-6.54 -19.07,-11.7 -29.75,-15.35 -5.34,-1.84 -10.87,-3.11 -16.44,-4.09 -5.64,-0.92 -11.1,-1.28 -17,-1.36 -5.53,0.07 -11.3,0.44 -16.86,1.36 -5.57,0.98 -11.11,2.25 -16.44,4.09 -10.69,3.65 -20.8,8.82 -29.75,15.36 -4.49,3.24 -8.72,6.77 -12.63,10.52 -3.96,3.69 -7.54,7.7 -10.88,11.75 -6.57,8.2 -12.05,16.77 -16.21,25.25 -4.17,8.49 -7.24,16.74 -9.43,24.27 -2.22,7.52 -3.47,14.33 -4.28,19.95 -0.19,1.41 -0.38,2.75 -0.55,4.01 -0.13,1.26 -0.24,2.44 -0.36,3.55 -0.23,2.2 -0.41,4.09 -0.46,5.63 -0.16,3.07 -0.25,4.7 -0.25,4.7l-0 -0.04zm371.74 -180.98c0,0 -1.51,5.81 0,10.24l67.27 5.94c0,0 2.59,-5.77 0,-10.72l-67.27 -5.46zm382.37 206.24c0,0 -0.07,-1.84 -0.2,-5.28 0,-1.72 -0.02,-3.84 -0.03,-6.34 0.04,-2.5 0.19,-5.37 0.37,-8.6 0.5,-6.42 1.42,-14.21 3.28,-22.98 1.85,-8.76 4.71,-18.5 9.02,-28.52 4.31,-10 9.86,-20.46 17.2,-30.24 3.56,-4.99 7.67,-9.67 11.97,-14.33 4.4,-4.55 9.15,-8.87 14.24,-12.88 10.21,-7.94 21.73,-14.65 34.15,-19.17 12.41,-4.54 25.62,-7.07 38.88,-7.3 0.85,-0.02 1.59,-0.07 2.54,-0.04l2.44 0.08c1.63,0.07 3.22,0.04 4.89,0.2l5 0.44c1.66,0.14 3.29,0.45 4.93,0.67 6.54,1 13,2.49 19.26,4.59 3.15,0.94 6.19,2.24 9.26,3.41 3,1.37 6,2.67 8.87,4.25 2.93,1.44 5.7,3.19 8.51,4.82 2.7,1.82 5.46,3.5 8.02,5.48 10.46,7.54 19.43,16.71 26.98,26.24 7.48,9.63 13.46,19.75 18.02,29.63 4.56,9.89 7.67,19.52 9.79,28.2 2.17,8.69 3.23,16.46 3.88,22.86 0.15,1.6 0.29,3.12 0.41,4.55 0.11,1.43 0.13,2.78 0.18,4.02 0.11,2.5 0.19,4.62 0.15,6.35 -0.02,3.44 -0.03,5.28 -0.03,5.28 0,0 -0.09,-1.83 -0.27,-5.26 -0.05,-1.72 -0.25,-3.83 -0.5,-6.3 -0.19,-2.48 -0.56,-5.31 -1,-8.47 -0.91,-6.31 -2.29,-13.94 -4.77,-22.37 -2.46,-8.43 -5.9,-17.68 -10.59,-27.18 -4.76,-9.46 -10.86,-19.08 -18.28,-28.24 -7.53,-9.04 -16.39,-17.61 -26.54,-24.75 -2.5,-1.87 -5.17,-3.44 -7.8,-5.15 -2.72,-1.52 -5.41,-3.17 -8.25,-4.5 -5.6,-2.85 -11.47,-5.24 -17.49,-7.17 -6.01,-1.99 -12.22,-3.39 -18.51,-4.3 -1.57,-0.2 -3.15,-0.49 -4.71,-0.61l-4.7 -0.4c-1.56,-0.15 -3.22,-0.11 -4.84,-0.18l-2.44 -0.06c-0.67,-0.02 -1.56,0.04 -2.32,0.05 -12.72,0.15 -25.41,2.51 -37.35,6.8 -5.99,2.11 -11.73,4.83 -17.29,7.78 -5.56,2.99 -10.78,6.51 -15.78,10.21 -4.96,3.78 -9.57,7.91 -13.94,12.17 -4.25,4.38 -8.33,8.8 -11.89,13.54 -1.87,2.28 -3.46,4.77 -5.18,7.09 -1.55,2.46 -3.19,4.8 -4.6,7.24 -1.44,2.43 -2.86,4.82 -4.1,7.27 -1.33,2.4 -2.49,4.85 -3.61,7.26 -4.46,9.64 -7.66,19.01 -9.85,27.53 -2.19,8.52 -3.42,16.18 -4.18,22.52 -0.3,3.18 -0.57,6.01 -0.77,8.5 -0.13,2.49 -0.23,4.61 -0.32,6.33 -0.06,3.43 -0.1,5.27 -0.1,5.27l-0.01 -0.02zm-638.21 -82.97c-38.56,0 -69.81,31.34 -69.81,70 0,38.66 31.26,70 69.81,70 38.56,0 69.81,-31.34 69.81,-70 0,-38.66 -31.26,-70 -69.81,-70zm10.51 69.85c0,4.9 -3.96,8.87 -8.85,8.87 -4.88,0 -8.85,-3.97 -8.85,-8.87 0,-4.9 3.96,-8.87 8.85,-8.87 4.89,0 8.85,3.97 8.85,8.87zm-3.35 -42.87l0 0c2.59,-0.83 4.7,-9.14 5.24,-14.41 0.54,-5.26 3.53,-6.85 5.15,-6.74 1.62,0.12 11.64,1.68 16.56,6.15 4.91,4.47 7.22,3.73 7.22,3.73 0,0 1.72,-2.68 12.2,10.41 10.48,13.09 -2,14.64 -2,14.64 0,0 -31.36,16.09 -33.57,17.11 -2.22,1.02 -8.78,6.31 -9.83,-0.98 -1.06,-7.3 -3.56,-29.08 -0.96,-29.92l-0.01 0.01zm-61.41 7.56l0 0c0.61,-1.52 5.14,-10.61 10.88,-13.94 5.74,-3.33 5.74,-5.76 5.74,-5.76 0,0 -2.02,-2.46 13.6,-8.48 15.62,-6.03 13.3,6.36 13.3,6.36 0,0 5.74,34.85 6.05,37.27 0.3,2.43 3.32,10.3 -3.93,9.09 -7.25,-1.21 -28.71,-5.45 -28.71,-8.18 0,-2.73 -7.25,-7.28 -12.09,-9.4 -4.83,-2.12 -5.44,-5.46 -4.83,-6.97l-0.01 0.01zm26.41 64.69l0 0c-2.58,-0.85 -9.17,4.63 -12.69,8.56 -3.53,3.93 -6.87,3.46 -8.12,2.41 -1.24,-1.05 -8.43,-8.22 -9.78,-14.74 -1.35,-6.51 -3.65,-7.28 -3.65,-7.28 0,0 -2.96,1.15 -3.76,-15.61 -0.8,-16.76 10.2,-10.66 10.2,-10.66 0,0 34.8,5.49 37.19,5.96 2.39,0.48 10.8,0.07 7.37,6.6 -3.43,6.52 -14.19,25.61 -16.77,24.76l0.01 0zm52.11 32.65l0 0c-1.42,0.8 -10.63,5.04 -17.19,4.03 -6.56,-1.01 -8.07,0.88 -8.07,0.88 0,0 0.04,3.19 -15.9,-1.93 -15.94,-5.12 -6.39,-13.31 -6.39,-13.31 0,0 17.3,-30.77 18.58,-32.85 1.28,-2.08 3.84,-10.12 8.74,-4.62 4.9,5.5 18.97,22.29 17.27,24.42 -1.7,2.13 1.11,10.22 3.55,14.92 2.44,4.69 0.83,7.67 -0.59,8.47l0 -0.02zm37.59 -39.24l0 0c0,0 3.02,1.02 -7.05,14.42 -10.07,13.41 -14.65,1.67 -14.65,1.67 0,0 -23.28,-26.5 -24.82,-28.4 -1.54,-1.9 -8.27,-6.97 -1.48,-9.8 6.8,-2.83 27.24,-10.63 28.68,-8.32 1.44,2.32 9.99,2.32 15.22,1.55 5.22,-0.77 7.5,1.74 7.78,3.34 0.29,1.61 1.25,11.72 -1.86,17.61 -3.11,5.87 -1.83,7.93 -1.83,7.93l0.01 0zm717.3 -22.8c0,4.9 -3.96,8.87 -8.85,8.87 -4.88,0 -8.84,-3.97 -8.84,-8.87 0,-4.9 3.96,-8.87 8.84,-8.87 4.89,0 8.85,3.97 8.85,8.87zm-3.35 -42.87l0 0c2.59,-0.83 4.7,-9.14 5.24,-14.41 0.54,-5.26 3.53,-6.85 5.15,-6.74 1.62,0.12 11.64,1.68 16.56,6.15 4.91,4.47 7.22,3.73 7.22,3.73 0,0 1.72,-2.68 12.2,10.41 10.48,13.09 -2,14.64 -2,14.64 0,0 -31.36,16.09 -33.57,17.11 -2.21,1.02 -8.78,6.31 -9.83,-0.98 -1.06,-7.3 -3.56,-29.08 -0.96,-29.92l-0.01 0.01zm-61.41 7.56l0 0c0.6,-1.52 5.13,-10.61 10.88,-13.94 5.74,-3.33 5.74,-5.76 5.74,-5.76 0,0 -2.02,-2.46 13.6,-8.48 15.62,-6.03 13.3,6.36 13.3,6.36 0,0 5.74,34.85 6.04,37.27 0.3,2.43 3.32,10.3 -3.93,9.09 -7.25,-1.21 -28.71,-5.45 -28.71,-8.18 0,-2.73 -7.26,-7.28 -12.09,-9.4 -4.83,-2.12 -5.44,-5.46 -4.83,-6.97l0 0.01zm26.4 64.69l0 0c-2.58,-0.85 -9.17,4.63 -12.69,8.56 -3.53,3.93 -6.87,3.46 -8.12,2.41 -1.24,-1.05 -8.43,-8.22 -9.78,-14.74 -1.35,-6.51 -3.65,-7.28 -3.65,-7.28 0,0 -2.96,1.15 -3.76,-15.61 -0.8,-16.76 10.2,-10.66 10.2,-10.66 0,0 34.8,5.49 37.19,5.96 2.39,0.48 10.8,0.07 7.37,6.6 -3.43,6.52 -14.19,25.61 -16.77,24.76l0.01 0zm52.12 32.65l0 0c-1.42,0.8 -10.63,5.04 -17.19,4.03 -6.56,-1.01 -8.07,0.88 -8.07,0.88 0,0 0.04,3.19 -15.9,-1.93 -15.94,-5.12 -6.39,-13.31 -6.39,-13.31 0,0 17.3,-30.77 18.58,-32.85 1.28,-2.08 3.85,-10.12 8.74,-4.62 4.89,5.5 18.97,22.29 17.26,24.42 -1.7,2.13 1.11,10.22 3.56,14.92 2.44,4.69 0.83,7.67 -0.59,8.47l0 -0.02zm37.59 -39.24l0 0c0,0 3.02,1.02 -7.05,14.42 -10.07,13.41 -14.64,1.67 -14.64,1.67 0,0 -23.29,-26.5 -24.82,-28.4 -1.54,-1.9 -8.27,-6.97 -1.47,-9.8 6.79,-2.83 27.24,-10.63 28.67,-8.32 1.44,2.32 9.99,2.32 15.22,1.55 5.22,-0.77 7.49,1.74 7.78,3.34 0.29,1.61 1.25,11.72 -1.86,17.61 -3.11,5.87 -1.83,7.93 -1.83,7.93z",
                "M719.8 680.58c4.98,7 9.07,13.3 9.73,15.89 1.81,7.2 10.79,18.52 -16.46,17.49l-359.59 -21.94c0,0 -110.78,-90.05 -195.15,-105.04 0,0 -53.78,-26.89 -27.93,-25.06 0,0 319.6,22.24 404.28,35.7 84.68,13.46 130.52,17.58 164.51,55.64 0,0 11.72,14.8 20.61,27.32zm-561.63 -231.79l7.44 8.32 -47.14 54.8c0,0 -9.93,31.27 4.64,35.39 0,0 90.31,20.09 199.41,23.91 109.09,3.81 312.97,41.35 365,32.89 52.02,-8.45 83.89,-11.7 113.04,1.24 29.13,12.94 71.91,24.43 81.02,40.28 0,0 54.94,-32.79 116.26,12.63 0,0 28.52,-13.21 37.63,-34.82 0,0 7.28,-13.36 34.6,6.18 0,0 101.97,35.49 35.96,-25.46 -11.04,-10.2 -25.08,-19.97 -39.3,-26.33 0,0 -80.43,-33.26 -152.97,-49.38 0,0 -42.19,0.35 -64.95,-8.23 0,0 -27.01,-9.94 -50.68,-28.12 -23.68,-18.17 -153.89,-82.3 -170.58,-86.76l21.26 -3.43c0,0 -47.66,-11.32 -76.79,-12 -29.14,-0.68 -117.77,-4.46 -162.99,-2.06 0,0 -103.19,6.52 -137.8,10.63 0,0 -79.22,11.65 -91.21,16.63 0,0 -11.83,-3.34 -24.81,-1.29 0,0 -10.24,0.88 -17.07,0.31 0,0 -6.61,-0.82 -5.01,3.55 1.59,4.37 21.39,28.29 25.04,31.11zm684.04 111.63l0 0c0,0 -39.84,-5.4 -50.76,-7.2 -10.93,-1.8 -16.85,3.34 -16.85,3.34l-12.29 9c-5.92,7.2 -76.03,0 -76.03,0l-165.72 -16.98 -114.05 -10.03c-21.4,-1.29 -99.02,-8.74 -131.57,-16.46 -32.55,-7.72 -49.63,-50.15 -51.9,-61.72 -2.28,-11.58 9.56,-18 23.44,-24.44 13.88,-6.43 71.25,-22.63 113.81,-27.77 42.57,-5.15 112.22,-6.69 121.56,-6.17 9.33,0.51 70.33,-3.86 129.29,12.6 58.96,16.46 135.67,62.76 135.67,62.76 35.96,19.03 87.87,58.64 87.87,58.64 13.66,9.52 13.89,16.85 13.89,16.85 -0.46,7.85 -6.37,7.59 -6.37,7.59z",
                "M417.28 403.6l-14.07 0.77 21.53 135.29 18.93 1.67 -26.39 -137.72zm305.04 61.16l-11.37 -6.17 8.61 54.1c-2.22,0.46 -4.53,1.26 -6.49,2.58 0,0 -16.39,12.69 -16.09,16.8 0.3,4.12 -0.6,22.29 5.46,28.46 2.78,2.82 13.88,6.15 25.94,7.65l0.06 0.35 3.97 0.08c4.26,0.37 8.53,0.49 12.51,0.26l0.08 0 0 -0.01c8.25,-0.5 15.22,-2.52 18.14,-6.95 0,0 7.89,-18.52 0,-29.15 -5.87,-7.9 -22.14,-15.43 -30.1,-18.76l-10.73 -49.24z",
            ],
            BIKE: [
                "M1073.07 854.59c-69.43,0 -125.72,-56.29 -125.72,-125.7 0,-36.9 15.92,-70.09 41.25,-93.08l0.02 1.61 0 46.18 5.84 0 0 -46.18c0,-2.12 -0.11,-4.24 -0.33,-6.35 13.49,-10.9 29.27,-19.06 46.52,-23.65l27.99 72.79c1.15,2.46 4.14,3.48 6.59,2.26l7.94 -3.94c2.33,-1.13 3.35,-3.92 2.35,-6.31l-0.54 -1.69 -0.02 0.01 -22.33 -66.91c3.44,-0.29 6.92,-0.44 10.43,-0.44 69.42,0 125.69,56.29 125.69,125.7 0,69.41 -56.27,125.7 -125.69,125.7zm66.31 -304.64c-72.19,-18.68 -129.57,-0.38 -168.74,22.37l-55.37 -119 13.97 0 0 -8.43 -71.73 0.61 -1.89 0.01 0.81 8.42 52.43 -0.62 56.76 122.01c-20.37,12.51 -35.33,25.9 -44.34,35l-0.01 -0.01c-1.68,1.68 -3.12,3.22 -4.37,4.59l-0.07 0.07 -0.06 0.07 -0.06 0.07 -0.06 0.07 -0.06 0.06c-2,2.12 -0.23,5.53 2.65,5.22l10.6 -1.18c-23.28,30.38 -37.12,68.38 -37.12,109.61 0,99.61 80.72,180.35 180.37,180.35 99.61,0 180.35,-80.74 180.35,-180.35 0,-78.29 -49.87,-144.92 -119.57,-169.87l6.37 -4.73c1.64,-1.25 1.12,-3.8 -0.84,-4.35zm-952.33 53.24c38.87,0.03 73.61,17.7 96.65,45.44 -1.11,-0.26 -2.26,-0.39 -3.45,-0.39l-39.24 0 0 5.85 39.24 0c5.2,0 9.45,4.23 9.45,9.46l0 18.76 5.84 0 0 -16.78c10.88,18.61 17.12,40.25 17.12,63.36 0,67.24 -52.81,122.17 -119.23,125.54 -1.04,0.05 -2.08,0.09 -3.13,0.12l-0.1 0c-1.05,0.02 -2.1,0.04 -3.15,0.04l-0.1 0c-1.05,0 -2.1,-0.02 -3.15,-0.04l-0.1 0c-1.05,-0.03 -2.09,-0.07 -3.12,-0.12 -66.38,-3.37 -119.19,-58.3 -119.19,-125.54 0,-67.24 52.81,-122.17 119.19,-125.54 1.04,-0.06 2.07,-0.09 3.12,-0.12l0.1 0c1.05,-0.02 2.09,-0.04 3.15,-0.04l0.1 0zm-9.28 -54.44c-95.33,4.78 -171.19,83.6 -171.19,180.14 0,96.53 75.85,175.33 171.19,180.11 1.5,0.07 3.02,0.14 4.53,0.18l0.1 0c1.52,0.04 3.03,0.06 4.56,0.06l0.1 0c1.52,0 3.04,-0.02 4.56,-0.06l0.1 0c1.51,-0.04 3.02,-0.1 4.52,-0.18 95.37,-4.78 171.19,-83.59 171.19,-180.11 0,-96.54 -75.8,-175.36 -171.19,-180.14 -1.5,-0.07 -3.01,-0.14 -4.52,-0.18l-0.1 0c-1.51,-0.04 -3.04,-0.06 -4.56,-0.06l-0.1 0c-1.52,0 -3.04,0.02 -4.56,0.06l-0.1 0c-1.51,0.04 -3.02,0.1 -4.53,0.18zm673.32 -150.85c-3.84,-21.95 -23.35,-25.33 -23.35,-25.33 -15.13,-1.9 -39.17,-3.37 -59.4,-4.37 0.8,-0.05 1.4,-0.7 1.4,-1.49l0 -7.29c0,-0.85 -0.7,-1.56 -1.55,-1.48l-57.49 -0.87c-0.76,0.05 -1.35,0.71 -1.35,1.47l0 7.31c0,0.86 0.7,1.54 1.54,1.49l4.92 0.07c-147.87,9.19 -205.19,81.19 -213.43,94.52 -0.66,1.08 -1.16,2.22 -1.51,3.45 -7.05,-2.19 -17.08,0.06 -17.15,0.09l0 0c-18.54,-5.29 -32.56,-0.49 -32.64,-0.46 -15,-5.15 -32.2,-1.28 -32.24,-1.26l-0.03 0c-14.23,-5.2 -30.7,-2.15 -30.82,-2.12 -16.93,-5.89 -29.84,-3.17 -29.98,-3.15 -11.64,-7.1 -31.32,-5.13 -31.38,-5.11 -14.34,-7.84 -30.44,-8.25 -30.44,-8.25l-14.11 -13.39c-4.76,-4.57 -11.34,-6.81 -17.9,-6.09 -26.93,2.99 -97.96,15.47 -127.61,65.83l292.98 19.35 40.11 0 0 7.34 42.92 0 0 -7.15 319.75 0c26.03,0 27.14,-24.89 27.14,-24.89l-4.56 -47.99 74.33 -0.09 0 -8.43 -73.38 0.09 -1.75 0 -3.02 -31.79zm-432.25 274.31l62.52 -113.05 7.36 4.06 -62.55 113.05 -7.33 -4.06zm278.61 -103.3l108.58 0 0 -8.41 -108.58 0 0 8.41zm215.02 -229.5l-35.87 15.87 2.42 5.36 35.81 -15.88c4.76,-2.09 10.39,0.06 12.49,4.83l7.59 17.17 5.33 -2.36 -7.57 -17.19c-3.42,-7.7 -12.47,-11.19 -20.2,-7.81z",
                "M745.76 644.54l35.47 26.53 61.14 -81.66 1.75 1.3c1.37,1.07 3.39,0.76 4.43,-0.63l7.87 -10.51c1.07,-1.42 0.79,-3.38 -0.63,-4.46l-38.67 -28.93c-1.41,-1.06 -3.4,-0.76 -4.43,0.63l-7.87 10.52c-1.07,1.39 -0.77,3.39 0.62,4.44l1.49 1.12 -61.17 81.66zm137.02 -280.72l-8.4 3.96 37.17 78.69 8.37 -3.95 -37.14 -78.7zm-15.19 -10.42l8.4 -3.98 -1.44 -3.06 11.88 -5.61 0 -0 11.9 -5.62 88.64 187.74 5.53 -2.61c0.57,-0.25 1.26,-0.02 1.52,0.56l8.72 18.39c0.26,0.57 0,1.26 -0.6,1.52l-14.36 6.78 11.89 -5.61 19.4 41.04 -3.04 1.44 45.06 95.5 -17.2 8.13 20.29 -9.57 22.85 48.47c3.85,8.09 0.36,17.81 -7.77,21.62l-0.46 0.24c-4.98,2.35 -10.54,1.96 -14.98,-0.56l-54.51 14.7 -2.27 -8.45 50.11 -13.51 -18.33 -38.76 -26.75 -8.03 2.51 -8.39 20.81 6.25 1.93 -0.91 -45.11 -95.48 9.82 -4.65 -12.85 6.07 -19.37 -41.04 15.72 -7.43 -0 -0.01 -18.2 8.59c-0.6,0.26 -1.25,0.03 -1.54,-0.54l-8.69 -18.38c-0.26,-0.59 0,-1.27 0.56,-1.56l5.5 -2.59 -32.34 -68.53 -29.05 13.7 -3.09 -6.57 -0.81 0.38 -0.29 -0.6 -16.93 -35.87 -6.7 -14.2 -3.69 -7.83 -14.78 -31.32 -35.19 9.18c0.04,0.45 0.07,0.9 0.07,1.36 0.05,7.72 -6.18,13.98 -13.89,14.02 -7.71,0.02 -13.96,-6.19 -14,-13.88 -0.03,-6.94 4.98,-12.7 11.6,-13.82l-0.36 -1.37 44.2 -11.54 -3.28 -6.94 21.45 -10.12 1.54 3.26zm137.33 236.23l-0.5 0.23 -0 -0 0.5 -0.23 0 0zm-198.51 -188.55c-3.99,0.02 -7.23,-3.19 -7.23,-7.19 0,-3.78 2.9,-6.89 6.59,-7.2l-0.84 -3.19c-5.11,0.71 -9.06,5.1 -9.01,10.41 0.03,5.78 4.74,10.43 10.52,10.41 5.76,-0.01 10.44,-4.72 10.41,-10.5 0,-0.17 -0.01,-0.33 -0.01,-0.5l-3.24 0.85c-0.17,3.83 -3.31,6.87 -7.19,6.9zm167.96 -62.29c0,0 16.09,6.58 18.54,15.59l0 6.64 0 17.24 0 31.92 0 8.03 0 4.61 0 14.16 0 5.5c0,0 -4.62,11.95 -18.54,14.38l0 -12.75 0 -21.29 0 -4.61 0 -8.03 0 -31.92 0 -24.34 0 -15.13zm-77.52 -2.98l-20.83 9.81 -2.48 -5.28 -5.02 2.37 -9.64 -20.48 30.76 -14.52 9.69 20.46 -18.35 8.67 13.36 -6.3 2.51 5.28z",
                "M187.48 856.54c166.81,0 166.8,-253.63 0,-253.63 -70.05,0 -126.8,56.79 -126.8,126.82 0,70.02 56.75,126.81 126.8,126.81zm759.19 -126.81c0,70.02 56.75,126.81 126.8,126.81 70.04,0 126.81,-56.78 126.81,-126.81 0,-70.03 -56.78,-126.82 -126.81,-126.82 -70.05,0 -126.8,56.79 -126.8,126.82zm126.81 -58.46c32.28,0 58.46,26.17 58.46,58.46 0,32.29 -26.17,58.46 -58.46,58.46 -32.29,0 -58.46,-26.17 -58.46,-58.46 0,-32.28 26.17,-58.46 58.46,-58.46zm-886.84 0c32.29,0 58.46,26.17 58.46,58.46 0,32.29 -26.17,58.46 -58.46,58.46 -32.28,0 -58.46,-26.17 -58.46,-58.46 0,-32.28 26.18,-58.46 58.46,-58.46z",
                "M642 783.04l40.24 7.83 -4.62 12.25 -35.62 -20.09zm158.4 -404.05l36.02 -26.82c-0.29,-1.45 -0.45,-2.94 -0.46,-4.48 -0.07,-12.57 10.08,-22.82 22.68,-22.87 0.67,-0 1.33,0.03 1.99,0.08 4.2,-1.44 11.2,-3.24 17.67,-2.25 0,0 10.85,1.83 13.41,12.77 0,0 2.65,13.22 -6.21,21.84l-0.32 13c-0.04,0.94 -0.38,1.84 -1.02,2.54 -1.26,1.41 -3.64,4.07 -6.82,7.06l-30.43 27c-2.64,2.3 -3.18,4.78 -3.26,8.25 0,1.45 0.04,2.93 0.15,4.07 0.11,1.06 -1.14,2.98 -1.83,3.78 -0.76,0.77 -1.82,1.23 -3.29,-0.12 0,0 -5.7,-9.37 -0.21,-16.77l29.97 -26.5c0,0 7.41,-9.06 6.1,-15.5 -4.06,3.91 -9.57,6.31 -15.67,6.35 -2.56,0 -5.02,-0.41 -7.31,-1.18l-32 29.96 -2.37 -2.5c-1.81,1.51 -4.13,2.42 -6.66,2.42 -5.78,0.02 -10.49,-4.64 -10.53,-10.41 -0.02,-2.78 1.05,-5.3 2.8,-7.18l-2.39 -2.52zm14.53 15.31l-9.88 -10.41c-1.11,1.28 -1.79,2.94 -1.79,4.77 0,4 3.24,7.21 7.24,7.19 1.68,-0.01 3.21,-0.58 4.44,-1.55zm-151.71 218.74l81.72 0c1.12,10.57 10.07,18.8 20.94,18.8 11.61,0 21.05,-9.42 21.05,-21.05 0,-2.12 -0.31,-4.17 -0.9,-6.09l136.83 -121.34 40.65 86.02 18.8 -8.89 -47.01 -99.61 -17.1 8.06 -8.48 -9.56 -57.31 50.81 -46.95 -0 20.04 -20.2 -8.62 13.71 2 0 -2.7 4.28 18.44 0c16.35,0 22.88,-9.83 25.46,-17.16 1.22,-3.39 1.65,-6.98 1.41,-10.57l0 0.02 0.26 2.81 -0.27 -2.9 0 0.02 -0.06 -0.74 -1.41 -14.9 0.59 6.27 -0.59 -6.27 -0.7 -7.54 -0.1 -1.05 19.59 -24.02 -6.7 -13.46 -91.17 91.69 -348.65 -0.02c-12.85,0 -18.99,-0.93 -42.28,-2.5l-254.63 -16.84 -0.6 9c-0.29,4.67 3.21,8.67 7.83,8.96l162.3 10.73 86.28 106.62 -5.28 35.88 -168.1 0 -34.61 9.37c-13.9,0.63 -35.86,8.57 -45.57,26.71l242.96 0 -1.37 9.35 -246.73 0c-1.01,2.89 -2.02,5.81 -2.75,8.8l349.37 0 0 -8.8 -69.74 0 1.38 -9.35 38.67 0 9.41 11.63c-0.08,0.79 -0.12,1.59 -0.12,2.41 0,7.82 3.85,14.75 9.75,19l0 15.25 105.87 0 100.35 22.13 -0.02 0.09 -9.08 1.81 -0.52 7.11 -38.8 -5.96c-9.99,2.09 -1.78,10.52 -1.78,10.52l64.7 36.5 3.74 -3.82 20.59 -20.64 53.93 9.2 25.4 -148.87 -95.91 -16.38 -19.31 113.23 -22.33 -4.93 21.35 0 0 -122.63 -13.96 0c0.36,-0.67 0.56,-1.43 0.56,-2.23l0 -8.48zm120.28 -13.78c-0.64,-0.98 -1.37,-1.91 -2.16,-2.76l137.41 -121.88 1.56 3.3 -136.81 121.33zm-11.83 -8.74c-0.38,-0.11 -0.77,-0.2 -1.15,-0.3l0.22 -0.75 0.93 1.05zm-14.61 1.13c-3.55,1.64 -6.56,4.24 -8.7,7.46l0 -7.57 -72.39 0 92.89 -63.93 2.09 0 -18.64 62.62 4.75 1.41zm-96 -11c-0.76,-0.5 -1.67,-0.79 -2.64,-0.79l-10.89 0c-2.62,0 -4.76,2.15 -4.76,4.78l0 2.02 -10.41 0 0 -2.02c0,-2.63 -2.13,-4.78 -4.8,-4.78l-10.86 0c-2.65,0 -4.8,2.15 -4.8,4.78l0 2.3 -176.2 -58.21 0.17 -1.15 302.26 0.04 -77.04 53.03zm-49.17 24.67l0 9.17 -13.44 9.26 -122.19 0c-4.33,0 -7.8,3.47 -7.8,7.8l0 12.22 -37.2 -84.99 1.84 -12.53 178.79 59.08zm19.91 18.43c0.35,-0.65 0.54,-1.39 0.55,-2.18l0 0 0 2.18 -0.55 0zm10.96 0l0 -2.23c0,0.81 0.2,1.56 0.55,2.23l-0.55 0zm192.46 -115.79c0.01,0 0.02,0 0.03,0 -0.01,0 -0.02,0 -0.03,0zm-0.09 0c0.01,0 0.02,0 0.04,0 -0.02,0 -0.03,0 -0.04,0zm-0.09 0c0.02,0 0.03,0 0.05,0 -0.02,0 -0.03,0 -0.05,0zm-0.12 0c0.02,0 0.05,0 0.07,0 -0.02,0 -0.04,0 -0.07,0zm-0.19 0c0.02,0 0.04,0 0.06,0 -0.02,0 -0.04,0 -0.06,0zm-703.98 239.15l348.35 0 0 -8.68 -350.27 0c0.44,3.03 1.19,5.87 1.92,8.68zm431.07 19.36l-403.47 14.68c-3.97,-2.68 -8.77,-5.77 -11.91,-8.99l369.38 -12.9 1.95 0.3c1.18,0.18 2.31,-0.02 3.3,-0.51l40.42 -1.57 0.34 8.98zm-145.76 -104.47l4.16 0 -3.52 -4.35 -0.64 4.35zm26.6 0l14.74 0 -30.94 -70.67 -6.31 42.85 22.51 27.82zm330.87 -81.88l59.21 -52.5 -43.59 -0 -15.61 52.5zm-378.89 22.53l9.04 -61.36c-7.66,-2.35 -13.65,-8.53 -15.74,-16.3l-59.29 -3.92 66 81.58zm580.33 -223.92l0 35.51 0 24.2 0 15.56c0,0 -64.98,-4.41 -71.18,-57.47l-0 -0.02c-0.31,-0.81 -0.47,-1.67 -0.47,-2.56 0,0 -0.05,-0.31 0.1,-0.86 -0.06,-0.87 -0.1,-1.74 -0.1,-2.64 0,0 -0.02,-0.38 0.01,-1.05 -0.01,-0.4 -0.01,-0.8 -0.01,-1.2 0,0 -2.44,-47.27 71.65,-49.21l0 15.54 0 24.2zm-456.15 116.73c0,0 -11.98,-5.04 -1.99,-19.34 0,0 52.26,-69.7 157.96,-77.35 0,0 20.94,-0.96 21.72,18.12 0,0 1.58,35.99 -15.96,54.24 0,0 -8.4,11.56 -34.05,15.06 0,0 -80.15,9.4 -127.69,9.26z",
                "M463.8 752.01l-3.29 -11.14 36.09 -4.39 -32.8 15.52zm43.26 -46.06c0,8.89 -7.22,16.07 -16.06,16.07 -8.91,0 -16.12,-7.19 -16.12,-16.07 0,-8.89 7.2,-16.08 16.12,-16.08 8.85,0 16.06,7.19 16.06,16.08zm341.72 -45.72c-4.66,-10.57 -12.22,-19.39 -19.83,-23.71 -7.27,-4.14 -19.08,-6.59 -27.44,-7.09l-20.63 -1.24c-1.72,-4.57 -2.94,-7.49 -2.94,-7.49l-23.74 -11.63 -5.28 -8.98c-34.87,-14.75 -77.6,-17.91 -77.6,-17.91 -14.77,6.83 -42.21,35.89 -42.21,35.89 -5.84,18.99 -4.26,37.45 -4.26,37.45 3.7,11.64 23.25,45.41 23.25,45.41 51.73,15.83 111.37,10.03 111.37,10.03 18.98,-20.59 32.72,-40.64 32.72,-40.64 -0.07,-1.23 -0.2,-2.52 -0.38,-3.85 13.07,-0.39 27.26,3.32 27.26,3.32 2.68,1.43 5,3.07 7,4.88 4.09,12.75 1,26.88 -7.83,37.17l-49.99 62.2c-12.28,15.94 -30.46,20.82 -44.03,22.04l-0.06 0.01 -0.15 0.01 -0.93 0.07 -0.03 0 -0.13 0.01 -0.85 0.06 -0.12 0.01 -0.1 0.01 -0.87 0.05 -0.1 0.01 -0.07 0 -0.52 0.02 -0.1 0 -0.91 0.04 -0.47 0.02 -0.03 0 -0.49 0.01 -0.18 0 -0.63 0.01 -0.15 0 -0.47 0 -0.02 0 -0.44 0 -0.45 0 -0.44 -0 -0.44 -0 -0.06 0 -0.37 -0.01 -0.03 0 -0.81 -0.02 -0.4 -0.01 -0.09 -0 -0.31 -0.01 -0.39 -0.02 -0.1 -0 -0.28 -0.01 -0.37 -0.02 -0.11 -0 -0.25 -0.02 -0.35 -0.02 -0.12 -0.01 -0.22 -0.01 -0.33 -0.02 -0.13 -0.01 -0.19 -0.02 -0.31 -0.02 -0.13 -0.01 -0.17 -0.01 -0.29 -0.02 -0.14 -0.02 -0.14 -0.01 -0.27 -0.02 -0.14 -0.01 -0.12 -0.01 -0.25 -0.02 -0.14 -0.02 -0.1 -0.01 -0.22 -0.02 -0.14 -0.02 -0.08 -0.01 -0.2 -0.02 -0.13 -0.02 -0.06 -0.01 -0.18 -0.02 -0.12 -0.02 -0.04 -0 -0.15 -0.02 -0.11 -0.02 -0.03 -0 -0.13 -0.02 -0.09 -0.01 -0.02 -0 -0.1 -0.02 -0.08 -0.01 -0.01 0 -0.07 -0.01 -0.06 -0.01 -0.01 0 -0.05 -0.01 -0.04 -0.01 0 0 -0.02 0 -0.01 -0 -218.5 -23.63 -0.04 -0c-0.57,-0.05 -1.14,-0.1 -1.7,-0.15l-0.06 -0.01 -0.02 0 -0.02 -0c-0.58,-0.06 -1.17,-0.12 -1.74,-0.19l-0.04 -0c-0.57,-0.07 -1.13,-0.13 -1.69,-0.21l-0.01 0 -0.07 -0.01c-0.52,-0.07 -1.04,-0.14 -1.56,-0.22l-0.1 -0.02 -0.09 -0.01 -1.45 -0.22 -0.16 -0.02 -0.11 -0.02 -1.44 -0.24 -0.13 -0.02 -0.13 -0.02 -1.35 -0.25 -0.17 -0.03 -0.14 -0.03 -1.43 -0.29 -0.07 -0.02 -1.33 -0.28 -0.37 -0.08 -1.26 -0.29 -0.38 -0.09 -1.2 -0.3 -0.37 -0.09 -1.11 -0.29 -0.39 -0.11 -0.04 -0.01 -0.51 -0.14 -0.5 -0.14 -0.5 -0.14 -0.5 -0.14 -0.5 -0.15 -0.46 -0.14 -0.02 -0.01 -0.49 -0.15 -0.48 -0.15 -0.48 -0.15 -0 0 -0.48 -0.15 -0.22 -0.07 -0.73 -0.24 -0.47 -0.16 -0.03 -0.01 -1.37 -0.46 -0.46 -0.16 -0.46 -0.16 -0.45 -0.16 -0.04 -0.02 -0.86 -0.31 -0.44 -0.17 -0.04 -0.02c-0.72,-0.27 -1.43,-0.55 -2.13,-0.83l-0.43 -0.17 58.07 -27.46c0,0 7.8,-6.95 -0.92,-9.43l-34.74 2.81 0 -6.34 -26.7 -7.35 -41.84 11.83 -49.57 -51.39c-12.16,-12.03 -19.55,-16.09 -26.34,-17.68 -4.42,-1.03 -9.83,-0.47 -13.72,1.88l-0.04 0.02 -0.12 0.07 -0.02 0.01 -0.25 0.16 -0.01 0c-0.26,0.17 -0.52,0.35 -0.76,0.54l0.01 0c-1.42,1.1 -2.54,2.5 -3.21,4.2 -2.11,5.31 -1.3,10.83 0.75,15.87 -5.25,16.09 14.74,34.1 14.74,34.1l64.42 61.37c27.4,32.3 63.27,34.92 63.27,34.92 0,0 200.53,26.54 244.03,29.56 15.74,1.1 31.96,0.18 47.13,-4.43 13.9,-4.2 24.34,-12.74 34.87,-22.59 18.07,-16.96 32.58,-37.67 48.17,-56.9 36.03,-44.23 31.72,-64.32 31.72,-64.32 -0.75,-12.65 -6.71,-24.96 -14.28,-33.46zm-398.89 102.16l-0.93 -0.43 -0.11 -0.06 -0.83 -0.39 -0.47 -0.23 -0.65 -0.31 -0.21 -0.11 -0.06 -0.03 -0.15 -0.07 -0.73 -0.37 -0.13 -0.06 -0.29 -0.15 -0.63 -0.33 -0.12 -0.06 -0.5 -0.26 -0.51 -0.27 -0.1 -0.06 -0.6 -0.32 -0.28 -0.15 -0.31 -0.17 -0.57 -0.32 -0.07 -0.04 -0.5 -0.28 -0.42 -0.24 -0.13 -0.08 -0.55 -0.32 -0.21 -0.13 -0.11 -0.07 -0.67 -0.4 -0.06 -0.04 -0.02 -0.01 -0.5 -0.3 -0.34 -0.21 -0.16 -0.1 -0.49 -0.31 -0.16 -0.1 -0.33 -0.21 -0.45 -0.29 -0.02 -0.01 -0.46 -0.3 -0.27 -0.18 -0.18 -0.11 -0.44 -0.29 -0.11 -0.07 -0.69 -0.47 -0.04 -0.03 -0.41 -0.28 -0.21 -0.15 -0.19 -0.13 -0.38 -0.27 -0.06 -0.05 -0.31 -0.22 -0.3 -0.21 -0.07 -0.05 -0.35 -0.26 -0.15 -0.11 -0.19 -0.14 -0.33 -0.24 -0.03 -0.02 -0.28 -0.22 -0.23 -0.17 -0.08 -0.06 -0.3 -0.22 -0.11 -0.08 -0.18 -0.14 -0.27 -0.21 -0 -0 -0.26 -0.2 -0.17 -0.13 -0.08 -0.07 -0.24 -0.19 -0.07 -0.06 -0.16 -0.13 -0.2 -0.17 -0.01 -0.01 -0.2 -0.17 -0.11 -0.1 -0.08 -0.06 -0.18 -0.15 -0.04 -0.04 -0.13 -0.11 -0.14 -0.12 -0.02 -0.02 -0.15 -0.13 -0.07 -0.06 -0.06 -0.06 -0.12 -0.11 -0.02 -0.02 -0.09 -0.08 -0.08 -0.07 -0.02 -0.02 -0.09 -0.08 -0.04 -0.03 -0.04 -0.04 -0.06 -0.06 -0.01 -0.01 -0.05 -0.04 -0.03 -0.03 -0.01 -0.01 -0.03 -0.03 -0.01 -0.01 -0.01 -0.01 -0 -0.01 -9.88 -10.24 10.07 -2.24 22.49 26.03 0.52 1.11 -0.14 -0.06zm-127.88 -99.28c6.02,2.08 12.91,6.54 23.21,16.78l1.96 2.03c-6.37,-5.27 -11.35,-8.05 -15.88,-9.09 -5.77,-1.37 -11.78,0.98 -14.95,5.75 -1.4,-5.02 -0.89,-9.64 1.87,-12.78 1.03,-1.18 2.32,-2.07 3.79,-2.69zm462.51 -66.42c0,8.89 -7.2,16.07 -16.07,16.07 -8.91,0 -16.09,-7.19 -16.09,-16.07 0,-8.9 7.17,-16.09 16.09,-16.09 8.86,0 16.07,7.19 16.07,16.09z",
                "M187.93 899.87c-94.18,0 -170.59,-76.39 -170.59,-170.59 0,-94.21 76.41,-170.58 170.59,-170.58 94.24,0 170.59,76.37 170.59,170.58 0,94.2 -76.35,170.59 -170.59,170.59zm639.84 -382.62c0.03,0 0.06,0 0.09,0 -0.03,0 -0.06,0 -0.09,0zm-338.16 -18.04c-114.07,1.45 -290.7,-19.52 -341.06,-25.82 -4.93,5.25 -9.41,11.06 -13.19,17.48l292.35 19.31 59 0 -0.02 0.5c-0,6.46 13.35,6.57 13.35,6.57 0,0 -13.43,-0.12 -13.33,-6.65l294.22 0 56.03 -56.45 -144.81 -4.05c-7.18,28.57 -35.19,35.35 -65.43,38.26 -18.16,1.74 -37.04,2.38 -52.98,4.72 -7.98,0.79 -15.34,1.05 -21.97,1.4 -44.06,2.37 -55.94,-6.1 -3.72,-48.2 -10.48,-0.27 -21.82,-0.48 -32.3,-0.75 -8.74,6.84 -15.75,20.64 -18.99,27.18l0.27 -1 -7.41 27.5zm356.07 12.17l0 -0c3.96,-3.36 6.21,-7.62 7.5,-11.26 1.21,-3.37 1.65,-6.95 1.41,-10.52l0.26 2.8c0,0 -0.51,11.64 -9.17,18.98zm-657.75 343.32c-69.23,0 -125.38,-56.17 -125.38,-125.43 0,-69.26 56.15,-125.44 125.38,-125.44 69.3,0 125.45,56.17 125.45,125.44 0,69.26 -56.15,125.43 -125.45,125.43zm0 33.8c28.03,0 55.48,-7.32 79.52,-21.23l-3.28 -3.31c-23.13,13.12 -49.47,20.04 -76.25,20.04 -85.3,0 -154.7,-69.39 -154.7,-154.71 0,-26.75 6.93,-53.08 20.04,-76.23l-3.31 -3.3c-13.89,24.11 -21.26,51.54 -21.26,79.53 0,87.79 71.43,159.22 159.22,159.22zm884.12 11.37c-94.21,0 -170.61,-76.39 -170.61,-170.59 0,-94.21 76.41,-170.58 170.61,-170.58 15.8,0 31.1,2.15 45.62,6.18 1.15,0.32 5.39,1.65 5.84,1.73 69.06,21.83 119.13,86.4 119.13,162.67 0,94.2 -76.38,170.59 -170.59,170.59zm0 -11.37c27.98,0 55.4,-7.32 79.52,-21.23l-3.33 -3.31c-23.09,13.12 -49.46,20.04 -76.19,20.04 -85.34,0 -154.72,-69.39 -154.72,-154.71 0,-26.75 6.93,-53.08 20.05,-76.23l-3.31 -3.3c-13.91,24.11 -21.28,51.54 -21.28,79.53 0,87.79 71.45,159.22 159.26,159.22zm0 -33.8c-69.27,0 -125.45,-56.17 -125.45,-125.43 0,-69.26 56.18,-125.44 125.45,-125.44 69.27,0 125.42,56.17 125.42,125.44 0,69.26 -56.15,125.43 -125.42,125.43zm0 -263.74c-76.42,0 -138.32,61.93 -138.32,138.32 0,76.4 61.9,138.32 138.32,138.32 76.37,0 138.32,-61.93 138.32,-138.32 0,-76.39 -61.94,-138.32 -138.32,-138.32zm66.17 -40.2c-54.49,-14.13 -100.48,-7.13 -136.59,6.93 33.51,-10.25 74.23,-13.81 121.27,-1.65 0.59,0.15 1.06,0.5 1.37,0.94 -16.52,-5 -34.05,-7.7 -52.21,-7.7 -99.42,0 -179.98,80.59 -179.98,179.99 0,99.39 80.56,179.96 179.98,179.96 99.4,0 179.97,-80.57 179.97,-179.96 0,-78.12 -49.76,-144.61 -119.31,-169.5l6.35 -4.72c1.63,-1.25 1.11,-3.8 -0.83,-4.3zm-950.29 40.2c-76.39,0 -138.29,61.93 -138.29,138.32 0,76.4 61.91,138.32 138.29,138.32 76.41,0 138.35,-61.93 138.35,-138.32 0,-76.39 -61.94,-138.32 -138.35,-138.32zm0 -41.67c-99.37,0 -179.94,80.59 -179.94,179.99 0,99.39 80.56,179.96 179.94,179.96 99.43,0 179.98,-80.57 179.98,-179.96 0,-99.41 -80.55,-179.99 -179.98,-179.99z",
                "M1008.75 759.83c1.17,0.27 2.37,-0.52 2.61,-1.71l2.41 -11.42c0.26,-1.22 -0.51,-2.37 -1.71,-2.63l-6.12 -1.29 4.05 -19.19 6.11 1.3c1.22,0.26 2.4,-0.54 2.65,-1.72l2.4 -11.44c0.26,-1.19 -0.51,-2.38 -1.7,-2.63l-6.14 -1.3 2.41 -11.41 6.14 1.3c1.2,0.23 2.35,-0.52 2.63,-1.73l2.42 -11.42c0.28,-1.19 -0.52,-2.39 -1.74,-2.65l-15.47 -3.27 -0 0.01 -3.02 -0.64 0.03 -0.16c0.34,-1.46 -0.64,-2.88 -2.07,-3.18l-24.59 -5.22c-1.49,-0.31 -2.93,0.62 -3.21,2.08l-5.63 26.48c-0.29,1.46 0.63,2.9 2.13,3.22l4.28 0.9 -2.28 10.85 -0.56 -0.12c-1.49,-0.29 -2.93,0.62 -3.21,2.11l-7.68 36.41c-0.33,1.48 0.61,2.92 2.08,3.22l20.87 4.41c1.45,0.29 2.89,-0.63 3.22,-2.09l0.2 -0.98 2.97 0.63 -0 0.01 6.85 1.44 2.53 0.53 0 -0 6.14 1.29zm-650.17 -58.62c-5.85,6.66 -19.62,4.13 -30.76,-5.63 -11.17,-9.76 -15.48,-23.09 -9.61,-29.77 5.83,-6.67 19.59,-4.14 30.76,5.62 11.15,9.78 15.44,23.09 9.6,29.78zm-195.3 -34.61c-0.16,1.13 0.58,2.2 1.73,2.39l10.67 1.61c1.14,0.18 2.18,-0.59 2.37,-1.72l0.9 -5.73 17.96 2.76 -0.89 5.73c-0.2,1.12 0.57,2.19 1.72,2.35l10.66 1.64c1.14,0.18 2.23,-0.6 2.37,-1.72l0.88 -5.74 10.71 1.65 -0.88 5.73c-0.2,1.13 0.58,2.18 1.73,2.34l10.69 1.64c1.13,0.19 2.18,-0.6 2.37,-1.71l0.87 -5.74 0 0 1.78 -11.57 0.15 0.02c1.39,0.2 2.66,-0.74 2.83,-2.11l3.55 -23.04c0.23,-1.36 -0.74,-2.67 -2.11,-2.86l-24.78 -3.82c-1.4,-0.2 -2.65,0.74 -2.87,2.11l-0.63 4.03 -10.14 -1.56 0.08 -0.55c0.18,-1.36 -0.74,-2.63 -2.11,-2.85l-34.13 -5.23c-1.37,-0.22 -2.67,0.73 -2.84,2.12l-3 19.52c-0.22,1.36 0.72,2.66 2.11,2.85l0.88 0.14 -0.43 2.83 0 0 -2.22 14.47z",
            ],
            AUTO: [
                "M895.29 458.41l0.26 8.93 6.36 31.31c1.9,11.18 4.46,22.7 4.81,34.85l4.61 31.26c1.11,1.64 0.81,0.7 1.91,3.8 0.03,0.09 1.33,4.79 1.5,5.33l6.35 56.6 1.33 68.53 -0.57 17.27 -0.37 26.11 -4.69 143.01c0.78,12.42 -0.18,25.31 -2.32,37.6 -1.82,10.49 -5.2,11.8 -21.61,19.14 -74.46,33.33 -142.32,16.16 -218.81,10.81 38.91,-1.82 21.74,1.65 37.66,-13.06 6.13,-5.66 7.84,-4.41 9.04,-12.86 1.92,-13.46 -1.83,-31.52 2.27,-43.4 -2.43,-10.72 -0.09,-24.26 0.08,-35.69 0.09,-5.9 0.29,-11.4 0.59,-17.34 0.32,-6.28 1.95,-12.29 -2.5,-14.12l-45.99 0.56 -1.3 -17.36 0.07 -21.28c-0.91,-51.43 -2.22,-28.1 -6.92,-40.29l-0.83 -23.99 -0.33 -28.09 -6.08 -1.27 -0.9 28.42 0.5 17.75 0.15 12.5 -68.23 0.58c-16.31,0.48 -33.53,1.54 -49.73,1.52 -9.46,-0 -11.41,-1.62 -22.08,-1.32 -52.94,1.48 -21.19,4.28 -42.96,-28.65 -6.26,-9.45 -16.96,-16.47 -30.72,-17.15l-0.17 10.92 -218.27 -12.42c-19.81,-0.43 -56.16,4.76 -70.79,-5.02 -4.78,-4.4 -19.01,-17.04 -23.4,-19.09 0.39,13.24 -2.9,27.04 -2.51,40.39 -13.31,0.38 -14.27,-1.67 -16.31,10.31l13.65 2.44c0.51,2.98 0.67,4.69 0.26,8.15 -0.84,7.12 -0.28,4.94 -3.18,9.39 2.11,5.85 1.3,16.83 -2.13,21.13 0.52,17.67 -4.56,33.43 -4.06,50.52 -17.96,0.92 -13.31,18.12 -10.7,30.35 2.96,13.9 5.14,28.08 7.37,41.69 6.54,39.99 9.01,18.93 13.57,35.07 2.81,9.96 0.37,9.15 11.41,12.65 6.03,1.91 13.71,3.73 20.76,3.9 3.69,-4.03 11.07,-44.83 42.75,-70.26 23.25,-18.65 57.3,-25.39 93.03,-23.8 41.95,1.87 58.48,6.96 87.3,25.66 18.87,12.26 39.39,46.08 36.46,79.74l5.23 -0.79c-8.84,5.39 -8.5,4.11 -20.54,4.1 -8.11,-0 -14.25,-0.45 -22.22,-1.02l-4.31 1.01c0.83,6.86 2.87,10.8 3.7,18.27 0.81,7.2 0.2,13.56 0.7,20.37 2.77,-1.85 50.71,-10.08 57.68,-10.91 13.21,5.83 16.38,2.96 24.41,-7.82 5.78,-7.76 10.52,-13.88 16.35,-21.08 55.15,-1.61 98.6,0.81 156.32,-0.88 6.42,12.42 8.58,25.42 23.45,28.41 11.22,2.26 105.55,-2.75 128.76,-3.29 15.29,-0.36 61.37,-5.98 73.61,-9.54 15.64,-4.55 24.98,-7.6 39.36,-15.05 2.37,-1.22 -1.28,-0.77 2.81,-1.1 9.49,-0.78 -10.3,-1.49 4.26,1.01 4.96,0.85 7.75,-0.04 10.8,-0.74 8.93,-2.06 14.6,-3.74 21.55,-6.72 19.56,-8.4 16.78,-9.61 25.51,-20.81l2.56 -3.08c0.18,-0.21 0.58,-0.68 0.88,-1.02 1.1,-4.01 3.37,-7.48 5.3,-10.97 4.48,-8.12 0.85,-5.05 8.11,-9.26 -1.71,-5.88 12.71,-34.63 16.59,-44.61 19.86,-51.04 10.56,-35.32 12.77,-43.37 18.56,-37.72 24.12,-87.96 24.1,-132.66l-7.45 1.01 6.81 -3.96 -0.72 -23.91c-13.55,2.19 -31.78,3.15 -41.6,8.48 -1.34,7.41 0.11,14.43 1.19,21.16 16.68,2.04 19.98,-0.79 34.32,-1.76l-11.06 4.02c-10.61,2.16 -29.52,3.4 -38.77,1 -2.7,-9.7 -2.59,-21.82 -1.13,-31.84 17.91,-5.94 36.85,-4.2 56.62,-8.87l0.02 -14.47c-0.09,-8.28 -2.5,-16.37 -4.93,-23.22 -3.43,-9.67 -3.57,-14.54 -11.44,-18.78l-0.89 7.69c-10.04,2.53 -21.78,5.91 -33.4,5.47 -5.08,-0.19 -12.01,-1.17 -17.12,-2.08 -33.57,-6 -47.02,-88.04 -51.29,-110.92 -3.14,-16.81 -6.62,-47.62 -11.04,-61.6l9.07 -7.26c-0.89,-6.13 -1.95,-4.89 -3.56,-10.98 4.97,-0.56 5,-1 9.17,-2.11 -2.84,-9.51 -4.98,-4.6 -18.91,-10.53 3.17,17.31 5.79,45.44 1.98,62.83l-9.23 0.48zm-768.89 334.26c9.81,7.22 11.74,9.8 29.47,5.92l0.9 -17.76c-6.15,-0.28 -10.98,-0.01 -16.48,-1.2 -6.07,-1.31 -8,-3.9 -12,-4.52l-1.89 17.56z",
                "M595.35 616.49l2.21 10.78c0.73,5.79 1.33,6.85 1.94,13.17 0.96,9.96 2.35,15.1 2.66,25.72 -5.46,-1.28 -1.37,0.42 -4.83,-1.7l1.3 7.35 3.68 1.87 1.02 18.3c1.81,6.91 -0.17,2.24 3.4,3.94l-0.5 -16.95c9.88,2 33.79,25.18 45.8,31.43l6.91 2.81 0.9 -28.42c-0.18,0.6 -0.33,0.82 -0.35,1.83l-0.73 7.46c-0.65,7.72 1.9,3.59 -1.94,9.26 0.71,-1.78 -2.6,-2.93 -4.61,-10.74 -13.96,-54.13 5.71,-47.47 -31.71,-68.51 -3.3,-1.85 -10.65,-5.57 -12.87,-7.36 -4.42,-3.58 -2.32,-2.99 -4.55,-4.68 -4.43,-3.34 3.97,0.96 -3.69,-2.01 -0.47,-0.19 -3.64,-0.79 -4.93,-1.23l0.89 7.67zm431.6 250.8c4.89,1.43 3.2,0.13 5.26,4.96 2.33,5.43 1.21,5.38 1.41,9.61 1.54,1.79 2.64,3.75 3.76,7.52 1.41,4.72 0.94,1.63 0.97,5.7l-0.8 5.8c-18.18,6.5 -12.19,40.61 7.18,47.81 17.01,6.33 41.8,-0.32 40.91,-32.85 4.17,-1.51 2.62,-1.28 6.26,-3.08 8.55,-4.26 -2.96,-2.5 10.5,-3.44 1.96,-17.09 -3.85,-4.67 -9.04,-20.08 -2.95,-8.77 -4.53,-16.57 -7.65,-24.83 2.41,-3.15 -1.05,-1 4.17,-2.37l-29.93 -0.66 -15.2 1.28 -17.8 4.65zm-359.86 -129.16c4.7,12.19 6.01,-11.14 6.92,40.29 14,-5.64 57.04,-3.76 75.35,-5.27 24.61,-2.03 53.02,-6.28 71.79,-8.15 -4.46,-9.41 -31.3,-23.41 -41.77,-29.9 -7.76,-4.81 -8.27,-3.86 -20.11,-3.42 -31.29,1.16 -60.57,5.52 -92.19,6.44z",
                "M161.35 938.79l0.24 8.07c7.07,0.38 19.84,1.79 26.7,2.91 3.85,-2.88 14.24,-3.85 20.09,-7.24 9.05,-5.24 7.47,-5.42 13.18,-16.25 14.1,-26.7 62.29,-18.06 97.77,-18.29 16.82,-0.11 37.93,0.19 43.17,14.52l1.58 1.8 1.96 3.64 1.94 1.79 9.68 16.9 5.71 5.78c7.96,0.57 14.1,1.02 22.21,1.02 12.04,0.01 11.7,1.28 20.54,-4.11l-5.23 0.79c2.93,-33.66 -17.6,-67.48 -36.46,-79.73 -28.82,-18.71 -45.35,-23.8 -87.3,-25.67 -35.73,-1.59 -69.78,5.15 -93.03,23.8 -31.69,25.43 -39.06,66.24 -42.75,70.26zm872.27 -56.93c-18.79,3.03 -30.29,34.27 -20.13,58.57 3.81,9.1 10.65,17.23 21.29,22.54 9.22,4.61 18.73,5.95 27.59,4.81 17.44,-2.24 32.38,-14.1 37.81,-29.66 2.69,-7.71 1.92,-14.35 1.79,-20.86 -0.06,-2.65 0,-5.28 0.44,-7.95 -13.47,0.94 -1.96,-0.82 -10.5,3.44 -3.64,1.81 -2.1,1.57 -6.26,3.08 0.9,32.54 -23.89,39.19 -40.91,32.85 -9.55,-3.55 -15.85,-13.64 -17.6,-23.74 -1.8,-10.38 1.2,-20.78 10.42,-24.07l0.8 -5.8c-0.03,-4.07 0.44,-0.98 -0.97,-5.7 -1.13,-3.78 -2.22,-5.74 -3.76,-7.52zm-698.26 128.24c24.91,-34.3 -8.45,-89.72 -55.2,-75.08 -15,4.69 -20.46,8.63 -29.29,20.79 -0.39,0.53 -0.76,1.07 -1.11,1.62 -19.17,29.78 6.15,87.78 57.82,73.64 8.27,-2.26 13.69,-5.6 18.45,-10.45 1.09,-1.11 2.14,-2.29 3.19,-3.56 1.96,-2.37 4.19,-4.26 6.14,-6.96zm385.86 -193.6c-3.6,-5.24 -3.04,-3.25 -7.9,-7.57 -4.24,-3.78 -4.62,-4.93 -8.91,-7.66 -9.07,-5.79 -17.98,-0.72 -30.49,-1.56l1.3 17.36 45.99 -0.56zm-129.85 -72.45l68.23 -0.59 -0.15 -12.49c-5.21,-1.24 -9.22,-5.14 -13.68,-8.31 -4.84,-3.44 -8.25,-5.82 -12.93,-9.12 -8.31,-5.86 -17.7,-13.33 -26.11,-17.63 -3.57,-1.7 -1.59,2.97 -3.4,-3.94l-5.9 -1.99c-0.34,-8.03 -1.45,-10.69 1.2,-18.19l-1.3 -7.35 -1.51 -25.8 -7.38 0.21 1.32 40.72c0.04,2.3 0.11,4.65 -0.3,6.89 -1.61,8.73 -0.34,0.34 -1.88,5.41 -4.26,13.96 -1.07,40.62 3.79,52.17zm239.24 -73.5c-2.22,30.03 0.12,69.17 0.09,103.48 -0,9.82 -1.59,13.95 -1.17,25.81 0.68,19.34 3.89,56.18 -3.37,73.65l-0.95 2.23c-8.63,0.25 -13.57,-0.7 -21.07,2.44l-2.67 35.17 -7.55 -3.02c-0.93,-0.44 -2.93,-1.61 -3.8,-2.16l-19.3 -14.38c-12.06,10.7 -29.17,14.91 -47.79,7.06l0.01 -17.19c-4.1,11.88 -0.35,29.94 -2.27,43.4 -1.2,8.45 -2.91,7.2 -9.04,12.86 -15.93,14.71 1.25,11.23 -37.66,13.06 76.49,5.35 144.35,22.52 218.81,-10.81 16.4,-7.34 19.78,-8.65 21.61,-19.14 2.14,-12.28 3.1,-25.18 2.32,-37.6l4.69 -143.01c-5.7,1.37 -28.87,-6.39 -32.2,-11.93 -3.69,-7.87 -2.48,-20.55 -1.85,-30.13 11.43,4.17 21.62,12.19 34.42,15.94l0.57 -17.27 -7.6 -1.01c-0.81,-8.3 -0.48,-19.29 -2.99,-25.39 -12.04,-8.27 -20.85,-10.77 -38.71,-9.57 -9.44,0.63 -37.08,1.54 -42.51,7.5zm0.37 -11.27c15.39,-4.06 30.43,-9.39 45.31,-14.5 8.07,-2.78 15.47,-4.52 20.74,-9.13 9.63,-8.43 9.88,-8.35 24.06,-5.14l-6.35 -56.61 -29.66 -4.14c-0.31,-0.09 -0.92,-0.24 -1.33,-0.49 -3.92,0.11 -4.8,0.23 -8.59,-0.4 -0.21,-0.04 -3.57,-0.87 -4.33,-1.12 -4.6,-1.55 -1.79,-0.49 -3.8,-1.68 -5,-0.27 -5.04,-0.72 -9.28,-1.57 -1.47,-2.45 -1.07,-2.01 -2.01,-5.49 -1.94,-1.98 -1.75,3.28 -2.01,-5.48 -4.29,-6.34 -9.72,-77.56 -12.72,-93.81 -5.66,-2.25 -19.16,-1.44 -23.67,0.69 3.89,33.16 7.14,65.92 10.57,97.68 3.88,36.05 1.99,64.59 3.06,101.21zm183.54 151.95c-2.21,8.05 7.09,-7.68 -12.77,43.37 -3.89,9.98 -18.31,38.73 -16.59,44.61 10.67,-4.53 12.63,-9.7 19.64,-16.61 4.22,-4.17 3.83,-5.35 9.42,-9.04 4.03,-2.68 8.21,-4.6 12.72,-6.26l17.8 -4.65 15.2 -1.28 29.93 0.66 35.4 8.39 5.55 0.09c-0.61,-11.78 -10.87,-30.19 -15.89,-37.96 -12.9,-2.41 -24.21,-3.44 -36.43,-7.25 -5.77,-1.8 -10.68,-3.29 -15.98,-6 -6.16,-3.15 -7.88,-3.66 -10.09,-11.18 -9.94,0.29 -9.83,0.05 -17.55,2.63 0.3,-6.21 2,-15.06 2.83,-20.91l5.36 -68.51c0.98,-12.09 1.81,-72.38 -1.78,-83.17l-2.95 -6.43c-0.18,-0.31 -0.59,-0.9 -0.73,-1.15 -0.15,-0.25 -0.46,-0.79 -0.74,-1.15l-0.02 14.48c-19.76,4.67 -38.71,2.94 -56.62,8.87 -1.46,10.03 -1.58,22.15 1.12,31.85 9.26,2.4 28.16,1.16 38.77,-1l11.06 -4.02 7.45 -1.01c0.02,44.7 -5.55,94.94 -24.11,132.66z",
                "M1102.41 909.31c-1.51,9.22 1.56,17.96 -2.23,28.81 -8.19,23.47 -38.01,38.52 -65.39,24.85 -39.04,-19.48 -26.99,-76.95 -1.16,-81.11 -0.2,-4.23 0.92,-4.18 -1.41,-9.61 -2.07,-4.83 -0.37,-3.54 -5.26,-4.96 -4.51,1.66 -8.69,3.58 -12.72,6.26 -5.59,3.69 -5.19,4.87 -9.42,9.04 -7,6.92 -8.97,12.09 -19.64,16.61 -7.26,4.21 -3.63,1.15 -8.11,9.26 -1.93,3.49 -4.2,6.97 -5.3,10.98 -0.18,20.7 6.37,38.1 15.01,50.48 18.06,25.87 31.9,22.76 35.22,31.15 -12.15,0.36 -18.35,1.61 -27.62,2.66 5.35,6.87 16.36,4.52 27.83,4.73 40.78,0.76 39.93,0.72 79.35,-2.33 7.52,-0.58 8.5,-2.09 16.56,-2.33l-0.11 -3.69c-8.37,-0.44 -12.86,-1.46 -24.04,-1.14 3.2,-4.65 8.3,-6.26 13.7,-10.4 26.24,-20.09 38.44,-51.03 31.89,-83.6 -4.67,-23.24 -11.52,-24.9 -14.27,-34.56l-35.4 -8.39c-5.21,1.37 -1.76,-0.78 -4.17,2.37 3.11,8.26 4.69,16.06 7.65,24.83 5.19,15.41 11,2.99 9.04,20.08zm-914.11 40.46c2.74,6.25 5.48,8.7 10.37,13.09 7.67,6.87 4.68,3.14 4.52,15.88 -0.35,28.3 9.22,55.08 29.3,71.81l30.59 18.94c-16.85,0.49 -27.06,2.64 -42.39,3.09l0.11 3.69c14.01,-0.41 20.2,1.35 33.22,0.92l73.95 -2.17c15.38,-0.5 14.9,-2.33 31.22,-2.8l-0.11 -3.69c-13.37,0.39 -18.53,-1.3 -31.42,-0.93l2.31 -1.39c0.35,-0.19 1.95,-1.06 2.43,-1.3l14.89 -9.29c21.08,-15.16 32.47,-35.33 36.17,-63.53 -0.49,-6.82 0.11,-13.18 -0.7,-20.38 -0.84,-7.48 -2.87,-11.41 -3.7,-18.28 -0.82,-2.44 -0.69,-2.46 -1.39,-6.79l-9.68 -16.9 -1.94 -1.79 -1.96 -3.64c-2.47,0.07 -1.93,0.66 -1.58,-1.8 -5.24,-14.33 -26.35,-14.63 -43.17,-14.52 -35.48,0.23 -83.67,-8.41 -97.77,18.29 -5.71,10.83 -4.13,11.01 -13.18,16.25 -5.85,3.39 -16.24,4.37 -20.09,7.24zm91.87 -14.75c-15,4.69 -20.46,8.63 -29.29,20.79 -21.21,29.24 4.08,89.66 56.71,75.26 10.15,-2.78 16.02,-7.18 21.64,-14.01 1.96,-2.37 4.19,-4.26 6.14,-6.96 24.91,-34.3 -8.45,-89.72 -55.2,-75.08z",
                "M156.65 691.92c14.63,9.78 50.98,4.59 70.79,5.02l218.27 12.42 0.17 -10.92c2.96,-5.71 2.42,-112.57 2.21,-120.17l1.93 -59.2c0.52,-9.84 -0.89,-21.3 -0.88,-31.33 0.01,-10.28 1.41,-16.77 1.05,-29.52 9.16,-0.06 12.16,1.52 33.27,0.88 13.56,-0.41 22.5,0.19 33.36,0.77l68.24 -0.06c0.94,31.88 -0.17,57.24 0.76,88.63 0.88,30.15 1.76,60.29 2.65,90.44l7.38 -0.22 -0.48 -22.16 -0.88 -7.66c1.29,0.44 4.46,1.04 4.94,1.23 7.66,2.97 -0.74,-1.33 3.69,2.01 2.22,1.69 0.13,1.11 4.55,4.69 2.2,1.79 9.57,5.5 12.86,7.35 37.42,21.04 17.76,14.39 31.71,68.52 2.01,7.81 5.32,8.95 4.61,10.74 3.85,-5.68 1.3,-1.54 1.94,-9.26l0.73 -7.46c0.03,-1.01 0.18,-1.24 0.35,-1.83l6.08 1.27 0.33 28.09c5.11,-2.56 3.6,-1.95 11.13,-2.17 2.72,-13.41 -4.94,-40.44 -8.24,-55.94 -3.41,-15.97 -5.81,-171.78 -6.54,-196.65 13.7,-0.4 21.8,1.24 36.96,0.77 12.36,-0.39 28.56,-1.73 40.5,-1.09 18.17,0.97 71.37,-1.7 77.29,1.33 4.51,-2.13 18.01,-2.94 23.67,-0.69 13.97,-0.41 46.94,1.8 54.26,-1.3l9.23 -0.48c3.81,-17.39 1.18,-45.52 -1.98,-62.83 -0.8,-9.83 -6.41,-14.76 -15.1,-15.9l-11.48 -5.25c-29.31,-9.82 -147.3,-11 -183.54,-14.66l-68.08 -3.92c-91.16,-4.42 -181.87,-11.15 -270.34,-17.78l-97.85 -8.56c-15.81,-0.51 -19.92,2.6 -29.2,8.36 -7.73,4.78 -14.04,9.56 -23.04,14.17 -23.15,11.85 -27.84,8.08 -38.13,35.82 -9.4,25.37 -23.36,37.02 -25.81,47.43 -1.2,5.07 -0.83,28.67 -1.32,34.64 -0.93,11.28 -0.5,26.39 -0.83,31.7 -0.41,6.22 0.21,11.82 0.23,17.98 0.02,8.85 -1.23,8.45 -1.43,16.6 -0.15,5.98 0.7,12.49 0.56,18.46 -0.34,14.01 -2.92,33.52 -2.22,51.74 0.95,24.56 -2.31,46.1 -1.71,66.9 4.39,2.05 18.62,14.69 23.4,19.09zm895.79 116.2c2.21,7.52 3.93,8.03 10.09,11.18 5.3,2.7 10.22,4.2 15.98,6 12.22,3.81 23.53,4.84 36.43,7.25l5.48 -2.38c-1.32,-44.09 9.64,-49.98 -13.9,-45.55 -22.05,4.17 -36.37,6.41 -53.46,16.11l-0.63 7.4zm-221.45 -148.83c-20.71,1.37 -13.51,3.8 -24.43,5.89 -6.13,1.17 -8.93,-0.92 -10.96,3.17 -0.83,1.67 1.42,8.02 2.72,10.53 7.17,-2.14 10.52,-7.31 32.31,-8.33 5.42,-5.96 33.05,-6.87 42.5,-7.5 17.86,-1.19 26.67,1.31 38.71,9.57 2.51,6.1 2.19,17.1 2.99,25.39l7.6 1.02 -1.33 -68.52c-14.18,-3.21 -14.43,-3.3 -24.06,5.14 -5.27,4.62 -12.67,6.35 -20.74,9.13 -14.89,5.12 -29.92,10.45 -45.31,14.5zm90.5 83.12l0.37 -26.11c-12.8,-3.76 -22.99,-11.78 -34.42,-15.94 -0.63,9.58 -1.84,22.26 1.85,30.13 3.34,5.54 26.5,13.3 32.2,11.93zm-247.48 36.02l-0.08 21.28c5.39,0.36 10.09,-0.37 14.44,-0.86l0.03 -8.47c11.33,-4.56 46.15,-3.04 60.96,-4.26 19.92,-1.64 42.9,-5.07 58.08,-6.59 0.33,11.37 2.98,16.1 -8.47,16.69 -0.59,10.78 -2.26,25.45 -3.16,36.22 -1.11,13.41 -2.54,24.59 -2.13,38.64l-2.16 28.46 -6.11 -2.44c-0.75,-0.36 -2.37,-1.31 -3.08,-1.74l-15.61 -11.64c-9.76,8.66 -23.59,12.06 -38.67,5.71l0.01 -13.91c-1.97,-8.67 -0.08,-19.63 0.06,-28.88 0.07,-4.77 0.23,-9.22 0.48,-14.02 0.26,-5.07 1.59,-9.94 -2.02,-11.42 -2.92,-4.24 -2.46,-2.63 -6.39,-6.13l-0.06 -0.06c0.31,0.42 0.66,0.92 1.07,1.51 4.45,1.83 2.82,7.85 2.5,14.12 -0.3,5.94 -0.51,11.44 -0.59,17.34 -0.17,11.43 -2.51,24.97 -0.08,35.69l-0.01 17.19c18.63,7.85 35.73,3.65 47.79,-7.06l19.3 14.39c0.88,0.54 2.87,1.71 3.8,2.15l7.55 3.02 2.67 -35.18c-0.5,-17.35 1.26,-31.18 2.63,-47.75 1.1,-13.32 3.18,-31.44 3.9,-44.77 14.17,-0.73 10.89,-6.59 10.48,-20.63 -18.77,1.87 -47.17,6.12 -71.79,8.15 -18.31,1.51 -61.36,-0.37 -75.35,5.27zm39.95 31.05c1.04,0.9 1.8,1.46 2.4,1.91 -0.67,-0.62 -1.37,-1.2 -2.4,-1.91zm-91.27 -210.41c5.25,-3 12.38,-3.18 17.97,-6.07l-1.3 -44.29c-10.11,0.3 -10.88,-1.31 -20.3,-1.31 -6.74,-0.01 -14.02,0.46 -20.83,0.67l21.67 4.06 2.8 46.94z",
                "M157.82 778.13c-17.72,3.88 -19.65,1.3 -29.47,-5.92l-2.96 38.13c12.33,6.04 5.08,9.18 26.91,8.39l5.52 -40.6zm-34.81 -13.52c3.43,-4.29 7.61,-34.92 5.49,-40.76l-13.86 -1.19c-2.25,14.65 -8.16,40.85 8.37,41.94z",
                "M1020.51 587.43l-97.07 -157.26c-2.81,-4.8 -3.5,-7.74 -7.61,-11.44l-9.07 7.26c4.43,13.98 7.91,44.78 11.04,61.6 4.27,22.88 17.72,104.92 51.29,110.92 5.11,0.91 12.04,1.89 17.12,2.08 11.62,0.44 23.36,-2.94 33.4,-5.47l0.89 -7.69z",
            ],
            TRUCK: [
                "M41.31 708.32l910.26 0 0 -374.72 -910.26 0 0 374.72zm-46.29 123.92l20.47 0 0 -56.98 -20.47 0 0 56.98zm1241.83 -232.54c0,0 14.01,5.53 15.12,16.96l0 123.19 -15.13 16.57 0 4.83 -82.52 0c0,0 -20.19,-46.29 -84.36,-47.4l-97.93 -0.16 0 -248.06 0 -0.19 0 -40.2 191.79 0c0,0 36.05,6.43 45.26,40.39l-22.1 0 49.86 134.06 0 0.02 0.01 -0.02z",
                "M32.56 809.19l91.46 0c-2.31,5.7 -3.59,11.92 -3.59,18.44 0,27.09 21.96,49.06 49.05,49.06 27.09,0 49.06,-21.96 49.06,-49.06 0,-6.52 -1.28,-12.74 -3.59,-18.44l154.7 0c-2.31,5.7 -3.59,11.92 -3.59,18.44 0,27.09 21.96,49.06 49.05,49.06 27.09,0 49.06,-21.96 49.06,-49.06 0,-6.52 -1.28,-12.74 -3.59,-18.44l545.66 0c-2.31,5.7 -3.59,11.92 -3.59,18.44 0,27.09 21.96,49.06 49.06,49.06 27.09,0 49.05,-21.96 49.05,-49.06 0,-6.52 -1.28,-12.74 -3.59,-18.44l136.73 0 0 -101.8 -1218.59 0 0 30.24 0 71.55 0 40.2 17.24 0 0 -40.2z",
                "M1145.38 827.63c0,-51.74 -41.94,-93.68 -93.68,-93.68 -51.74,0 -93.69,41.94 -93.69,93.68 0,51.74 41.94,93.68 93.69,93.68 51.74,0 93.68,-41.94 93.68,-93.68zm-882.22 0c0,-51.74 -41.94,-93.68 -93.68,-93.68 -51.74,0 -93.68,41.94 -93.68,93.68 0,51.74 41.94,93.68 93.68,93.68 51.74,0 93.68,-41.94 93.68,-93.68zm245.64 0c0,-51.74 -41.94,-93.68 -93.69,-93.68 -51.73,0 -93.68,41.94 -93.68,93.68 0,51.74 41.94,93.68 93.68,93.68 51.74,0 93.69,-41.94 93.69,-93.68z",
                "M1236.66 599.46c0,0 14,5.53 15.11,16.95l0 123.11 -15.48 16.96 -28.02 -35.38 28.38 -121.63zm-204.75 -116.57c0,-2.44 -2.75,-4.41 -6.14,-4.41l-28 0c-3.38,0 -6.13,1.97 -6.13,4.41l0 78.24c0,2.44 2.75,4.43 6.13,4.43l28 0c3.39,0 6.14,-1.98 6.14,-4.43l0 -78.24zm-59.89 -17.41l236.9 0c-9.21,-33.93 -45.23,-40.36 -45.23,-40.36l-191.67 0 0 40.36z",
                "M629.11 830.58l130.39 0 13.65 0 45 0 13.65 0 28.58 0 0 -32.09 -28.58 0 0 -31.36 28.58 0 0 -27.66 -28.58 0 -13.65 0 -45 0 -13.65 0 -130.39 0 0 27.66 130.39 0 0 31.36 -130.39 0 0 32.09zm189.04 -32.09l-45 0 0 -31.36 45 0 0 31.36z",
                "M415.11 715.13c-60.79,0 -110.44,48.48 -112.4,108.81l18.91 0c1.96,-49.94 43.08,-89.99 93.49,-89.99 50.41,0 91.54,40.05 93.5,89.99l18.91 0c-1.96,-60.33 -51.61,-108.81 -112.41,-108.81zm636.59 0c-60.8,0 -110.45,48.48 -112.41,108.81l18.91 0c1.96,-49.94 43.09,-89.99 93.5,-89.99 50.41,0 91.53,40.05 93.49,89.99l18.91 0c-1.96,-60.33 -51.61,-108.81 -112.4,-108.81zm-882.23 0c-60.8,0 -110.45,48.48 -112.41,108.81l18.91 0c1.95,-50.02 43,-89.99 93.49,-89.99 50.49,0 91.54,39.98 93.5,89.99l18.91 0c-1.96,-60.33 -51.61,-108.81 -112.41,-108.81z",
                "M1116.44 636.58c0,-4.12 -3.71,-7.46 -8.3,-7.46l-30.26 0c-4.59,0 -8.3,3.35 -8.3,7.46 0,4.13 3.72,7.47 8.3,7.47l30.26 0c4.59,0 8.3,-3.34 8.3,-7.47zm-256.16 130.57l0 -27.66 -231.25 0 0 27.66 0 63.44 231.25 0 0 -63.44zm191.42 109.54c-27.09,0 -49.06,-21.96 -49.06,-49.06 0,-27.09 21.96,-49.06 49.06,-49.06 27.09,0 49.05,21.96 49.05,49.06 0,27.09 -21.96,49.06 -49.05,49.06zm20.47 -49.06c0,-11.31 -9.16,-20.47 -20.47,-20.47 -11.3,0 -20.48,9.17 -20.48,20.47 0,11.3 9.17,20.47 20.48,20.47 11.31,0 20.47,-9.17 20.47,-20.47zm-20.47 -61.22c-33.82,0 -61.23,27.41 -61.23,61.22 0,33.81 27.41,61.23 61.23,61.23 33.81,0 61.22,-27.41 61.22,-61.23 0,-33.81 -27.41,-61.22 -61.22,-61.22zm-616.12 61.22c0,-11.31 -9.17,-20.47 -20.48,-20.47 -11.3,0 -20.46,9.17 -20.46,20.47 0,11.3 9.16,20.47 20.46,20.47 11.31,0 20.48,-9.17 20.48,-20.47zm-20.48 49.06c-27.09,0 -49.05,-21.96 -49.05,-49.06 0,-27.09 21.96,-49.06 49.05,-49.06 27.09,0 49.06,21.96 49.06,49.06 0,27.09 -21.96,49.06 -49.06,49.06zm0 -110.28c-33.81,0 -61.22,27.41 -61.22,61.22 0,33.81 27.41,61.23 61.22,61.23 33.81,0 61.23,-27.41 61.23,-61.23 0,-33.81 -27.42,-61.22 -61.23,-61.22zm-245.63 110.28c-27.09,0 -49.05,-21.96 -49.05,-49.06 0,-27.09 21.96,-49.06 49.05,-49.06 27.09,0 49.06,21.96 49.06,49.06 0,27.09 -21.96,49.06 -49.06,49.06zm20.47 -49.06c0,-11.31 -9.17,-20.47 -20.47,-20.47 -11.31,0 -20.47,9.17 -20.47,20.47 0,11.3 9.17,20.47 20.47,20.47 11.3,0 20.47,-9.17 20.47,-20.47zm-20.47 -61.22c-33.81,0 -61.22,27.41 -61.22,61.22 0,33.81 27.41,61.23 61.22,61.23 33.81,0 61.23,-27.41 61.23,-61.23 0,-33.81 -27.41,-61.22 -61.23,-61.22zm897.72 -199.17l144.2 0 -33.21 -89.24 -111 0 0 89.24zm-1012.36 117.49c-1.78,0 -3.22,1.57 -3.22,3.51l0 8.79c0,1.94 1.44,3.52 3.22,3.52l3.76 0c1.78,0 3.22,-1.58 3.22,-3.52l0 -8.79c0,-1.94 -1.44,-3.51 -3.22,-3.51l-3.76 0zm851.38 -1.87l15.94 0 0 -325.67 -5.07 0 -10.87 0 -5.08 0 -30.63 0 -5.07 0 -10.88 0 -5.07 0 -30.63 0 -5.08 0 -10.87 0 -5.08 0 -30.63 0 -5.07 0 -10.87 0 -5.07 0 -30.63 0 -5.08 0 -10.87 0 -5.08 0 0 11.1 0 5.2 5.08 0 0 309.37 15.95 0 0 -309.37 30.63 0 5.07 0 0 309.37 15.95 0 0 -309.37 30.63 0 5.08 0 0 309.37 15.95 0 0 -309.37 30.63 0 5.07 0 0 309.37 15.95 0 0 -309.37 30.63 0 5.08 0 0 309.37zm-258.29 0l15.95 0 0 -309.37 0 -16.3 -5.07 0 -10.88 0 -5.07 0 -30.63 0 -5.08 0 -10.87 0 -5.07 0 -30.63 0 -5.07 0 -10.87 0 -5.07 0 -30.63 0 -5.08 0 -10.88 0 -5.07 0 -30.63 0 -5.07 0 -0 0 -10.87 0 -5.08 0 -30.63 0 -5.07 0 -10.88 0 -5.07 0 -30.63 0 -5.07 0 -10.87 0 -5.08 0 -30.63 0 -5.07 0 -10.87 0 -5.07 0 -30.63 0 -5.08 0 -10.87 0 -5.08 0 -30.63 0 -5.07 0 -10.87 0 -5.07 0 -30.63 0 -5.07 0 -10.88 0 -5.08 0 -30.63 0 -5.07 0 -10.88 0 -5.07 0 0 16.3 5.07 0 0 309.37 15.95 0 0 -309.37 30.63 0 5.08 0 0 309.37 15.95 0 0 -309.37 30.63 0 5.07 0 0 309.37 15.95 0 0 -309.37 30.63 0 5.08 0 0 309.37 15.95 0 0 -309.37 30.63 0 5.07 0 0 309.37 15.95 0 0 -309.37 30.63 0 5.08 0 0 309.37 15.95 0 0 -309.37 30.63 0 5.07 0 0 309.37 15.95 0 0 -309.37 30.63 0 5.08 0 0 309.37 15.95 0 0 -309.37 30.63 0 5.07 0 0 309.37 15.96 0 0 -309.37 30.63 0 5.07 0 0 309.37 15.95 0 0 -309.37 30.63 0 5.07 0 0 309.37 15.95 0 0 -309.37 30.63 0 5.07 0 0 309.37zm287.41 -345.06c-1.78,0 -3.22,1.57 -3.22,3.5l0 8.8c0,1.93 1.44,3.51 3.22,3.51l3.76 0c1.78,0 3.22,-1.58 3.22,-3.51l0 -8.8c0,-1.93 -1.44,-3.5 -3.22,-3.5l-3.76 0zm-880.5 0c-1.78,0 -3.22,1.57 -3.22,3.5l0 8.8c0,1.93 1.44,3.51 3.22,3.51l3.76 0c1.78,0 3.22,-1.58 3.22,-3.51l0 -8.8c0,-1.93 -1.44,-3.5 -3.22,-3.5l-3.76 0zm639.67 35.69l-30.63 0 30.63 0zm-30.63 -16.3l30.63 0 -30.63 0zm271.46 327.54c-1.78,0 -3.22,1.57 -3.22,3.51l0 8.79c0,1.94 1.44,3.52 3.22,3.52l3.76 0c1.78,0 3.22,-1.58 3.22,-3.52l0 -8.79c0,-1.94 -1.44,-3.51 -3.22,-3.51l-3.76 0z",
            ],
        };
        this.loader = false;
        this.manualFilter = [];
        this.headerValue = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.vehicleCount = { All: 0, Running: 0, Stop: 0, Idle: 0, NoTransmit: 0 };
        this.vehicleAlertCount = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.today = new Date();
        this.yesterday = new Date(this.today.setDate(this.today.getDate() - 1));
        this.format = { odometer: "" };
        this.resultedSummaryList = new Array();
        this.summary = new Array();
        this.exitPopup = false;
        this.watchFilter = false;
        this.batteryStatusFilter = false;
        this.gsmStatusFilter = false;
        this.transmissionFilter = false;
        this.gpsFilter = false;
        this.subscriptionFilter = false;
        // newchanges
        this.totalAlertCount = 0;
        this.app = {};
        this.vehicleActivity = [
            "Live Track",
            "Track History",
            "Reports",
            "Nearby",
            "Alerts",
            "GeoFence",
            "Detail View",
            "Immobilize",
            "Settings",
            "Share",
            "Link",
            "Navigation",
            "Trip",
        ];
        this.loginData = [];
        this.appName = "";
        this.slideOpts = {
            slidesPerView: 5,
            speed: 400,
        };
        this.serverTestcount = 0;
        this.updateCache = () => {
            if (this.cacheAddress && this.liveDatas) {
                Object.keys(this.cacheAddress).forEach((vin) => {
                    this.liveDatas[vin]["location"] = this.cacheAddress[vin];
                });
            }
            // let sorting = Object.values(this.liveDatas)
            // sorting.sort(function (a: any, b: any) {
            //   return new Date(b.timeStamp).getTime() - new Date(a.timeStamp).getTime();
            // });
            this.dashboardData = Object.values(this.liveDatas);
        };
        this.addressResult = (type) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // if (type == "websocketUpdate") {
            //   if (localStorage.gridData) {
            //     if (JSON.parse(localStorage.gridData).length == 0) {
            //       // this.router.navigateByUrl("members/dashboard");
            //       //console.log("grid data array is empty")
            //       return;
            //     }
            //   }
            //   await this.delay(1000);
            // }
            // let latLngData: Array<object> = new Array();
            // let items: Array<object>;
            // if (this.virtualScroll) {
            //   items = this.virtualScroll.items;
            // } else {
            //   if (localStorage.gridData) {
            //     items = JSON.parse(localStorage.gridData);
            //   }
            // }
            // if (type == "scrollDown") {
            //   if (items && items.length > 10) {
            //     latLngData = items.slice(this.count - 10);
            //   } else {
            //     latLngData = items;
            //   }
            // } else {
            //   if (this.filterValue == "Running" ||
            //     this.filterValue == "Overspeed" ||
            //     this.filterValue == "Towed") {
            //     latLngData = items;
            //   } else {
            //     for (let x of items) {
            //       if (!x.hasOwnProperty("location")) {
            //         latLngData.push(x)
            //       }
            //     }
            //   }
            // }
            // const array = new Array();
            // for (let obj of latLngData) {
            //   const json = {
            //     vin: obj["vin"],
            //     latitude: obj["latitude"].toString(),
            //     longitude: obj["longitude"].toString(),
            //     companyId: localStorage.corpId
            //   }
            //   array.push(json);
            // }
            // const body = {
            //   mode: "addressUpdate",
            //   latlngList: array
            // }
            // if (body.latlngList.length > 0) {
            //   // //console.log("Fetch " + array.length + " address in " + type);
            //   // this.websocketService.reSendRequest(body);
            // }
        });
        this.loadMoreData = (event) => {
            setTimeout(() => {
                //console.log("hit successfull!");
                this.count += 10;
                //Hide Infinite List Loader on Complete
                event.target.complete();
                //Rerender Virtual Scroll List After Adding New Data
                //this.virtualScroll.checkEnd();
                let len = JSON.parse(localStorage.maxLength);
                // App logic to determine if all data is loaded
                // and disable the infinite scroll
                let data = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["storageVariable"].upDatedJsonData;
                // if (len <= this.count && localStorage.statusChanger == "All") {
                //   event.target.disabled = true;
                // }
                if (localStorage.statusChanger != "All" &&
                    JSON.parse(localStorage.gridData).length > localStorage.maxLength) {
                    event.target.disabled = true;
                    setTimeout(() => {
                        event.target.disabled = false;
                    }, 2000);
                }
            }, 500);
        };
        this.loadMap = () => {
            if (localStorage.map === "GoogleMap") {
                this.map = this.mapService.loadMap(this.mapElement.nativeElement, { lat: -25.344, lng: 131.036 }, false, false);
            }
            else {
                this.map = this.mapService.loadMap(this.mapElement.nativeElement, { lat: -25.344, lng: 131.036 }, false, false);
            }
            this.mapService.setCenter(this.map, { lat: 17.786351, lng: 78.09082 });
        };
        this.getLiveTrackIcon = (color, path) => {
            if (path == undefined || path == null) {
                path = this.vehicleModel["CAR"];
            }
            const svg = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve"  width="8.4666mm" height="8.4666mm" version="1.1" viewBox="0 0 846.66 846.66"  xmlns:xlink="http://www.w3.org/1999/xlink"> <path class="fil0" d="' +
                path +
                '" fill="' +
                color +
                '"/> </svg>';
            const src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
            return src;
        };
        this.successCallback = (res, outputRouter) => {
            if (res) {
                let validation = false;
                if (res.length > 0) {
                    validation = true;
                }
                if (validation) {
                    localStorage.setItem("reportsData", JSON.stringify(res));
                    this.chartAndSummaryCard();
                }
                else {
                    this.commonService.presentToast("No data available");
                    this.executiveCard = res;
                    localStorage.removeItem("reportsData");
                }
            }
            else {
                localStorage.setItem("reportsData", JSON.stringify(res));
                this.chartAndSummaryCard();
                this.commonService.presentToast("No data available");
            }
        };
        this.dashboardData = [];
        if (localStorage.map == "GoogleMap") {
            this.mapService = new src_app_services_google_map_service__WEBPACK_IMPORTED_MODULE_14__["GoogleMapService"]();
        }
        else {
            this.mapService = new src_app_services_openlayer_map_service__WEBPACK_IMPORTED_MODULE_15__["OpenlayerMapService"]();
        }
    }
    bellRouter() {
        this.router.navigateByUrl("/tabs/alerts/All");
    }
    swipeNext() {
        this.slides.slideTo(9, 500);
    }
    swipePrevious() {
        this.slides.slideTo(0, 500);
    }
    wsResponse(res) {
        if (this.commonService.isLoading) {
            // this.commonService.dismissLoader();
            this.loader = false;
        }
        if (res.hasOwnProperty("mode")) {
            const latlngList = res.locations;
            if (this.cacheAddress) {
                Object.assign(this.cacheAddress, latlngList);
            }
            else {
                this.cacheAddress = latlngList;
            }
            this.updateCache();
            localStorage.setItem("cacheAddress", JSON.stringify(this.cacheAddress));
        }
        else {
            var data = res.liveDatas;
            if (data) {
                if (this.selectedVin.vin == Object.values(res["liveDatas"])[0]["vin"] &&
                    this.pageSeleter == "livetrack") {
                    this.liveTrackingChanges = res;
                }
                if (res.statusCount == null) {
                    Object.values(res["liveDatas"])[0]["odometer"] =
                        parseInt(Object.values(res["liveDatas"])[0]["odometer"]) / 1000;
                    if (Object.values(res["liveDatas"])[0]["status"] == null ||
                        Object.values(res["liveDatas"])[0]["status"] == "") {
                        Object.values(res["liveDatas"])[0]["status"] = "No Transmission";
                    }
                    this.updatedJsonData = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["storageVariable"].upDatedJsonData;
                    if (this.updatedJsonData["liveDatas"][Object.keys(res["liveDatas"])[0]]) {
                        this.updatedJsonData["liveDatas"][Object.keys(res["liveDatas"])[0]] = Object.values(res["liveDatas"])[0];
                    }
                    else {
                        return;
                    }
                    res.statusCount = this.updatedJsonData["statusCount"];
                }
                else {
                    this.updatedJsonData = res;
                    if (this.myPlatform == "desktop" &&
                        localStorage.gridData != "[]" &&
                        localStorage.inItPage == "gridView") {
                        if (this.pageSeleter == "gridview") {
                            this.selectedVin = JSON.parse(localStorage.gridData)[0];
                            localStorage.setItem("selectedVin", JSON.stringify(this.selectedVin));
                            this.addMarker();
                            this.todayAlerts();
                            if (this.gridCardOption[this.selectedVin.icon] == null) {
                                this.executiveSummary();
                            }
                        }
                    }
                    else if (this.myPlatform == "desktop" &&
                        localStorage.inItPage == "gridView") {
                        if (this.pageSeleter == "gridview") {
                            this.selectedVin = Object.values(res.liveDatas)[0];
                            localStorage.setItem("selectedVin", JSON.stringify(this.selectedVin));
                            this.addMarker();
                            this.todayAlerts();
                            if (this.gridCardOption[this.selectedVin.icon] == null) {
                                this.executiveSummary();
                            }
                        }
                    }
                    for (let i = 0; i < Object.keys(this.updatedJsonData.liveDatas).length; i++) {
                        Object.values(this.updatedJsonData.liveDatas)[i]["odometer"] =
                            parseInt(Object.values(this.updatedJsonData.liveDatas)[i]["odometer"]) / 1000;
                    }
                }
                // for (let i = 0; i < Object.keys(res.statusCount).length; i++) {
                //   res['statusCount'][Object.keys(res.statusCount)[i]] = 0;
                // }
                // //console.log("recieved websocket updated data");
                const data = Object.entries(this.updatedJsonData.liveDatas)
                    .map(([key, value]) => value["status"] || "No Transmission")
                    .sort();
                let current = null;
                let cnt = 0;
                for (let i = 0; i < data.length; i++) {
                    if (data[i] != current) {
                        if (cnt > 0) {
                            // //console.log(current + ' comes --> ' + cnt + ' times<br>');
                        }
                        current = data[i];
                        cnt = 1;
                    }
                    else {
                        cnt++;
                    }
                    res.statusCount[current] = cnt;
                }
                for (let i = 0; i < Object.keys(res.statusCount).length; i++) {
                    if (!data.includes(Object.keys(res.statusCount)[i]) &&
                        Object.keys(res.statusCount)[i] != "Total") {
                        res.statusCount[Object.keys(res.statusCount)[i]] = 0;
                    }
                }
                if (cnt > 0) {
                    // //console.log(current + ' comes --> ' + cnt + ' times');
                    res.statusCount[current] = cnt;
                }
                res["statusCount"]["Total"] = Object.keys(res.liveDatas).length;
                src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["storageVariable"].dashboardData = this.updatedJsonData;
                src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["storageVariable"].upDatedJsonData = this.updatedJsonData;
                // localStorage.setItem('dashboardData', JSON.stringify(this.updatedJsonData));
                // localStorage.setItem('upDatedJsonData', JSON.stringify(this.updatedJsonData));
                if (this.liveDatas) {
                    Object.assign(this.liveDatas, res.liveDatas);
                }
                else {
                    this.liveDatas = res.liveDatas;
                    this.initFilterRow();
                    this.showSkeletonLoader = false;
                }
                res["statusCount"]["Total"] = Object.keys(this.updatedJsonData.liveDatas).length;
                src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["storageVariable"].dashboardData = this.updatedJsonData;
                src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["storageVariable"].upDatedJsonData = this.updatedJsonData;
                // localStorage.setItem('dashboardData', JSON.stringify(this.updatedJsonData));
                // localStorage.setItem('upDatedJsonData', JSON.stringify(this.updatedJsonData));
                this.updateCache();
                this.addressResult("websocketUpdate");
                if (this.myPlatform != "desktop") {
                    this.headerValue.emit(JSON.stringify(res));
                }
                else {
                    let data = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["storageVariable"].upDatedJsonData;
                    this.vehicleCount = data.statusCount;
                    this.statusBarOthers = Object.keys(this.vehicleCount);
                }
                // this.filterPage(null);
                //  this.commonService.dismissLoader();
                // if (this.myPlatform == "desktop" && localStorage.gridData != '[]' && localStorage.inItPage == "gridView" && res.statusCount != null)  {
                //   if (this.pageSeleter == 'gridview') {
                //     this.selectedVin = JSON.parse(localStorage.gridData)[0]
                //     localStorage.setItem("selectedVin", JSON.stringify(this.selectedVin))
                //     this.addMarker();
                //     this.todayAlerts();
                //     if (this.gridCardOption[this.selectedVin.icon] == null) {
                //       this.executiveSummary();
                //     }
                //   }
                // }
            }
            else {
                //console.log(res)
            }
        }
        // if (res.hasOwnProperty("mode")) {
        //   const latlngList: object = res.locations;
        //   if (this.cacheAddress) {
        //     Object.assign(this.cacheAddress, latlngList);
        //   } else {
        //     this.cacheAddress = latlngList;
        //   }
        //   this.updateCache();
        //   localStorage.setItem("cacheAddress", JSON.stringify(this.cacheAddress));
        // } else {
        // for (let i = 0; i < Object.keys(res.statusCount).length; i++) {
        //   res['statusCount'][Object.keys(res.statusCount)[i]] = 0;
        // }
        // //console.log("recieved websocket updated data");
        // let data = [];
        // for (let i = 0; i < Object.keys(res.liveDatas).length; i++) {
        //   let currentCount: any = Object.values(res.liveDatas)[i];
        //   if (currentCount.status == "Yet_to_transmit" || currentCount.status == "Online" || currentCount.status == null) {
        //     currentCount.status = "No Transmission"
        //   } else if (currentCount.status == "Towed") {
        //     currentCount.status = "Running"
        //   }
        //   if (currentCount.status == "Overspeed") {
        //     data.push("Overspeed");
        //   } else {
        //     data.push(currentCount.status);
        //   }
        //   Object.values(res.liveDatas)[i]["odometer"] = parseInt(Object.values(res.liveDatas)[i]["odometer"]) / 1000
        // }
        // data.sort();
        // let current = null;
        // let cnt = 0;
        // for (let i = 0; i < data.length; i++) {
        //   if (data[i] != current) {
        //     if (cnt > 0) {
        //       //console.log(current + ' comes --> ' + cnt + ' times<br>');
        //     }
        //     current = data[i];
        //     cnt = 1;
        //   } else {
        //     cnt++;
        //   }
        //   res.statusCount[current] = cnt
        // }
        // if (cnt > 0) {
        //   //console.log(current + ' comes --> ' + cnt + ' times');
        //   res.statusCount[current] = cnt
        // }
        // res['statusCount']['Total'] = Object.keys(res.liveDatas).length;
        // localStorage.setItem('dashboardData', JSON.stringify(res));
        // localStorage.setItem('upDatedJsonData', JSON.stringify(res));
        // if (this.liveDatas) {
        //   Object.assign(this.liveDatas, res.liveDatas);
        // } else {
        //   this.liveDatas = res.liveDatas;
        //   this.initFilterRow();
        //   this.showSkeletonLoader = false;
        // }
        // res['statusCount']['Total'] = Object.keys(res.liveDatas).length;
        // localStorage.setItem('dashboardData', JSON.stringify(res));
        // localStorage.setItem('upDatedJsonData', JSON.stringify(res));
        // this.updateCache();
        // this.addressResult("websocketUpdate");
        // if (this.myPlatform != "desktop") {
        //   this.headerValue.emit(JSON.stringify(res));
        // } else {
        //   let data: any = JSON.parse(localStorage.upDatedJsonData);
        //   this.vehicleCount = data.statusCount;
        //   this.statusBarOthers = Object.keys(this.vehicleCount);
        // }
        // this.filterPage(null);
        //  this.commonService.dismissLoader();
        // }
        // if (this.myPlatform == "desktop" && localStorage.gridData != '[]') {
        //   if(this.pageSeleter =='gridview'){
        //   this.selectedVin = JSON.parse(localStorage.gridData)[0]
        //   localStorage.setItem("selectedVin", JSON.stringify(this.selectedVin))
        //   this.addMarker();
        //   this.todayAlerts();
        //   if(this.gridCardOption[this.selectedVin.icon] == null){
        //   this.executiveSummary();
        //   }
        //   }
        // }
    }
    wsOnError() {
        setTimeout(() => {
            this.websocketService.connectSocket(JSON.parse(localStorage.dashboardWebSocketData), "livetrack");
            this.gridCardIssueRecursion();
        }, 60000);
    }
    openActionModal(mode, selectedVin) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (selectedVin) {
                this.selectedVin = selectedVin;
                localStorage.setItem("selectedVin", JSON.stringify(selectedVin));
            }
            if (this.subscription) {
                this.subscription.unsubscribe();
            }
            const modal = yield this.modalController.create({
                component: _action_mode_action_mode_page__WEBPACK_IMPORTED_MODULE_7__["ActionModePage"],
                componentProps: {
                    mode: mode,
                    vin: this.selectedVin,
                },
            });
            return yield modal.present();
        });
    }
    itemHeightFn(item, index) {
        let size = item.icon == "REFRIGERATOR" && item.isTempSensor == false
            ? 90
            : item.icon == "REFRIGERATOR" && item.isTempSensor == true
                ? 140
                : item.icon != "REFRIGERATOR" && item.isTempSensor == true
                    ? 220
                    : 180;
        if (item.icon == "REFRIGERATOR" && item.isTempSensor == false) {
            if (item.location) {
                if (item.location.length >= 50 && item.location.length <= 60) {
                    size = 110;
                }
                else if (item.location.length >= 60 && item.location.length <= 110) {
                    size = 130;
                }
                else if (item.location.length >= 110 && item.location.length <= 160) {
                    size = 150;
                }
                else if (item.location.length >= 160 && item.location.length <= 280) {
                    size = 160;
                }
                else {
                    size = 103;
                }
            }
            else {
                size = 105;
            }
        }
        else if (item.icon == "REFRIGERATOR" && item.isTempSensor == true) {
            if (item.location) {
                if (item.location.length <= 50) {
                    if (item.temprature2Val) {
                        size = 180;
                    }
                    else {
                        size = 140;
                    }
                }
                else if (item.location.length >= 50 && item.location.length <= 140) {
                    if (item.temprature2Val) {
                        size = 203;
                    }
                    else {
                        size = 173;
                    }
                }
                else if (item.location.length >= 140 && item.location.length <= 210) {
                    if (item.temprature2Val) {
                        size = 200;
                    }
                    else {
                        size = 160;
                    }
                }
                else if (item.location.length >= 210 && item.location.length <= 280) {
                    if (item.temprature2Val) {
                        size = 215;
                    }
                    else {
                        size = 165;
                    }
                }
                else {
                    if (item.temprature2Val) {
                        size = 200;
                    }
                    else {
                        size = 150;
                    }
                }
            }
            else {
                if (item.temprature2Val) {
                    size = 200;
                }
                else {
                    size = 150;
                }
            }
        }
        else if (item.icon != "REFRIGERATOR" && item.isTempSensor == true) {
            if (item.location) {
                if (item.location.length <= 70) {
                    size = 170;
                }
                else if (item.location.length >= 70 && item.location.length <= 140) {
                    size = 170;
                }
                else if (item.location.length >= 140 && item.location.length <= 210) {
                    size = 170;
                }
                else if (item.location.length >= 210 && item.location.length <= 280) {
                    size = 170;
                }
                else {
                    size = 170;
                }
            }
        }
        else {
            if (item.location) {
                if (item.location.length >= 50 && item.location.length <= 60) {
                    size = 143;
                }
                else if (item.location.length >= 60 && item.location.length <= 100) {
                    size = 148;
                }
                else if (item.location.length >= 100 && item.location.length <= 160) {
                    size = 158;
                }
                else if (item.location.length >= 160 && item.location.length <= 280) {
                    size = 168;
                }
                else {
                    size = 143;
                }
            }
            else {
                size = 140;
            }
        }
        return size;
    }
    openAlertsModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.subscription) {
                this.subscription.unsubscribe();
            }
            const modal = yield this.modalController.create({
                component: _alerts_modal_alerts_modal_page__WEBPACK_IMPORTED_MODULE_8__["AlertsModalPage"],
            });
            return yield modal.present();
        });
    }
    filterRowUpdate(statusCount) {
        let backupData = this.dataFilter;
        let countNodata = 0;
        let countRunning = 0;
        for (let x in backupData) {
            for (let w in statusCount) {
                if (w == backupData[x]["type"]) {
                    this.dataFilter[x]["count"] = statusCount[w];
                }
            }
        }
        // else if ((w == "No Transmission" || w == "Yet_to_transmit") && backupData[x]["type"] == "NoData") {
        //   countNodata += statusCount[w];
        //   this.dataFilter[x]["count"] = countNodata;
        // } else if ((w == "Running" || w == "Towed") && backupData[x]["type"] == "Running") {
        //   countRunning += statusCount[w];
        //   this.dataFilter[x]["count"] = countRunning;
        // }
    }
    initFilterRow() {
        if (localStorage.dataFilter) {
            let filterData = localStorage.dataFilter != ""
                ? JSON.parse(localStorage.dataFilter)
                : {};
            if (filterData.dashboardFilter) {
                let result = filterData.dashboardFilter;
                let resultObj = [];
                let countRunning = 0;
                let countNodata = 0;
                this.dataFilter = resultObj;
            }
        }
    }
    showModal(data) {
        if (this.myPlatform != "desktop") {
            let gridCardOption = JSON.parse(JSON.parse(localStorage.getItem("loginData"))[1].cardmenu);
            if (gridCardOption[data.icon]) {
                this.vehicleActivity = gridCardOption[data.icon];
            }
            else {
                this.vehicleActivity = gridCardOption["ASSETS"];
            }
            this.selectedVin = data;
            this.plateNo = data.plateNo;
            if (this.showSwipeModal == "true" || this.showSwipeModal === "iOS") {
                this.showSwipeModal = "false";
            }
            else {
                localStorage.setItem("selectedVin", JSON.stringify(data));
                if (/(iPhone|iPad|iPod)/i.test(navigator.userAgent)) {
                    this.showSwipeModal = "iOS";
                }
                else {
                    this.showSwipeModal = "true";
                }
            }
        }
        else {
            if (this.appName != "Armoron") {
                if (this.selectedVin.vin != data.vin) {
                    this.selectedVin = data;
                    localStorage.setItem("selectedVin", JSON.stringify(this.selectedVin));
                    if (this.pageSeleter == "gridview") {
                        this.vehicleAlertCount.emit(0);
                        this.alertCount = 0;
                        this.alertData = [];
                        this.addMarker();
                        this.todayAlerts();
                        if (this.gridCardOption[this.selectedVin.icon] == null) {
                            this.executiveSummary();
                        }
                    }
                    else if (this.pageSeleter == "livetrack" ||
                        this.pageSeleter == "trackhistory" ||
                        this.pageSeleter == "nearby") {
                        this.liveChange = this.selectedVin;
                    }
                }
            }
            else {
                this.selectedVin = data;
                localStorage.setItem("selectedVin", JSON.stringify(this.selectedVin));
            }
        }
    }
    hideModal() {
        this.showSwipeModal = "false";
    }
    filterGrid(typeOfFilter) {
        this.showSkeletonLoader = true;
        if (typeOfFilter == localStorage.filterActive) {
            typeOfFilter = "All";
        }
    }
    checkSocket() {
        const checkSocket = this.websocketService.isAlive("livetrack")
            ? 1
            : 0;
        const checkStorage = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["storageVariable"].dashboardData ? 1 : 0;
        const check = checkSocket + "" + checkStorage;
        switch (check) {
            case "11":
                this.liveDatas = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["storageVariable"].dashboardData["liveDatas"];
                this.dashboardData = Object.values(this.liveDatas);
                this.initFilterRow();
                //this.addressResult("websocketUpdate");
                //this.gridArraySort();
                break;
            case "10":
                this.websocketService.reSendRequest(JSON.parse(localStorage.dashboardWebSocketData));
                break;
            case "01":
                this.showSkeletonLoader = false;
                this.liveDatas = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["storageVariable"].dashboardData["liveDatas"];
                this.dashboardData = Object.values(this.liveDatas);
                this.websocketService.connectSocket(JSON.parse(localStorage.dashboardWebSocketData), "livetrack");
                break;
            case "00":
                this.websocketService.connectSocket(JSON.parse(localStorage.dashboardWebSocketData), "livetrack");
                break;
        }
    }
    identify(index, vehicleData) {
        return vehicleData.vin;
    }
    // ngDoCheck() {
    //   //console.log("changes identified")
    // }
    delay(milliseconds) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                setTimeout(resolve, milliseconds);
            });
        });
    }
    ngDoCheck() {
        if (localStorage.updateGridData == "true") {
            localStorage.setItem("updateGridData", "false");
            this.addressResult("scrollDown");
        }
    }
    ngOnDestroy() {
        if (this.websocketService.isAlive("livetrack")) {
            // this.websocketService.disConnectSocket("livetrack");
        }
        if (this.websocketService.isAlive("alertsmanagerendpoint")) {
            this.websocketService.disConnectSocket("alertsmanagerendpoint");
        }
    }
    doRefresh($event) {
        this.loader = true;
        // this.commonService.presentLoader();
        // this.websocketService.reSendRequest(JSON.parse(localStorage.dashboardWebSocketData));
        this.gridCardIssueRecursion();
        // this.loader = true;
        // let data = {
        //   "companyID": localStorage.corpId,
        //   "branchID": localStorage.corpId,
        //   "emailId": localStorage.userName,
        //   "Check": "false",
        //   "entryPoint": app.entryPoint,
        //   "dashboardMode": "mobile"
        // }
        // const url = serverUrl.web + "/api/vts/company/dashboarddata/" + JSON.stringify(data);
        // this.ajaxService.ajaxGet(url)
        //   .subscribe(res => {
        //     for (let i = 0; i < Object.keys(res.statusCount).length; i++) {
        //       res['statusCount'][Object.keys(res.statusCount)[i]] = 0;
        //     }
        //     //console.log("recieved websocket updated data");
        //     let data = [];
        //     for (let i = 0; i < Object.keys(res.liveDatas).length; i++) {
        //       let currentCount: any = Object.values(res.liveDatas)[i];
        //       if (currentCount.status == "Yet_to_transmit" || currentCount.status == "Yet to Transmit" ||currentCount.status == "Online" || currentCount.status == null) {
        //         currentCount.status = "No Transmission"
        //       } else if (currentCount.status == "Towed") {
        //         currentCount.status = "Running"
        //       }
        //       if (currentCount.status == "Overspeed") {
        //         data.push("Overspeed");
        //       } else {
        //         data.push(currentCount.status);
        //       }
        //       Object.values(res.liveDatas)[i]["odometer"] = parseInt(Object.values(res.liveDatas)[i]["odometer"]) / 1000
        //     }
        //     data.sort();
        //     let current = null;
        //     let cnt = 0;
        //     for (let i = 0; i < data.length; i++) {
        //       if (data[i] != current) {
        //         if (cnt > 0) {
        //           // //console.log(current + ' comes --> ' + cnt + ' times<br>');
        //         }
        //         current = data[i];
        //         cnt = 1;
        //       } else {
        //         cnt++;
        //       }
        //       res.statusCount[current] = cnt
        //     }
        //     if (cnt > 0) {
        //       // //console.log(current + ' comes --> ' + cnt + ' times');
        //       res.statusCount[current] = cnt
        //     }
        //     localStorage.setItem('dashboardData', JSON.stringify(res));
        //     localStorage.setItem('upDatedJsonData', JSON.stringify(res));
        //     if (this.liveDatas) {
        //       Object.assign(this.liveDatas, res.liveDatas);
        //     } else {
        //       this.liveDatas = res.liveDatas;
        //       this.initFilterRow();
        //       this.showSkeletonLoader = false;
        //     }
        //     res['statusCount']['Total'] = Object.keys(res.liveDatas).length;
        //     res.liveDatas = this.liveDatas;
        //     localStorage.setItem('dashboardData', JSON.stringify(res));
        //     localStorage.setItem('upDatedJsonData', JSON.stringify(res));
        //     this.updateCache();
        //     this.addressResult("websocketUpdate");
        //     if (this.myPlatform != "desktop") {
        //       this.headerValue.emit(JSON.stringify(res));
        //     } else {
        //       let data: any = JSON.parse(localStorage.upDatedJsonData);
        //       this.vehicleCount = data.statusCount;
        //       this.statusBarOthers = Object.keys(this.vehicleCount);
        //     }
        //     if(this.commonService.isLoading){
        //     this.commonService.dismissLoader();
        //     }
        //     this.loader = false;
        if (this.myPlatform != "desktop")
            $event.target.complete();
        else if (this.myPlatform == "desktop")
            $event.target.complete();
        //   });
    }
    openModel() { }
    openGridModel() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _grid_filter_grid_filter_page__WEBPACK_IMPORTED_MODULE_9__["GridFilterPage"],
            });
            modal.onDidDismiss().then(() => this.filterPage(null));
            return yield modal.present();
        });
    }
    returnFilterAndSort() {
        if (localStorage.modalFilterData) {
            this.manualFilter = JSON.parse(localStorage.modalFilterData);
        }
    }
    filterPage(selected) {
        if (localStorage.modalFilterData) {
            this.manualFilter = JSON.parse(localStorage.modalFilterData);
        }
        else {
            if (selected == "lowAndHigh") {
                if (this.sortIcon == "ios-arrow-round-back") {
                    this.sortIcon = "ios-arrow-round-forward";
                }
                else {
                    this.sortIcon = "ios-arrow-round-back";
                }
            }
            if (selected == "watchMode") {
                this.watchFilter = !this.watchFilter;
                this.batteryStatusFilter = false;
                this.gsmStatusFilter = false;
                this.transmissionFilter = false;
                this.gpsFilter = false;
                this.subscriptionFilter = false;
            }
            else if (selected == "battery") {
                this.watchFilter = false;
                this.batteryStatusFilter = !this.batteryStatusFilter;
                this.gsmStatusFilter = false;
                this.transmissionFilter = false;
                this.gpsFilter = false;
                this.subscriptionFilter = false;
            }
            else if (selected == "gsm") {
                this.watchFilter = false;
                this.batteryStatusFilter = false;
                this.gsmStatusFilter = !this.gsmStatusFilter;
                this.transmissionFilter = false;
                this.gpsFilter = false;
                this.subscriptionFilter = false;
            }
            else if (selected == "gps") {
                this.watchFilter = false;
                this.batteryStatusFilter = false;
                this.gsmStatusFilter = false;
                this.transmissionFilter = false;
                this.gpsFilter = !this.gpsFilter;
                this.subscriptionFilter = false;
            }
            else if (selected == "transmission") {
                this.watchFilter = false;
                this.batteryStatusFilter = false;
                this.gsmStatusFilter = false;
                this.transmissionFilter = !this.transmissionFilter;
                this.gpsFilter = false;
                this.subscriptionFilter = false;
            }
            else if (selected == "subscription") {
                this.watchFilter = false;
                this.batteryStatusFilter = false;
                this.gsmStatusFilter = false;
                this.transmissionFilter = false;
                this.gpsFilter = false;
                this.subscriptionFilter = !this.subscriptionFilter;
            }
            else {
                this.watchFilter = false;
                this.batteryStatusFilter = false;
                this.gsmStatusFilter = false;
                this.transmissionFilter = false;
                this.gpsFilter = false;
                this.subscriptionFilter = false;
            }
            let filter = Object.values(src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["storageVariable"].upDatedJsonData["liveDatas"]);
            if (this.watchFilter == true ||
                this.batteryStatusFilter == true ||
                this.gsmStatusFilter == true ||
                this.transmissionFilter == true ||
                this.gpsFilter == true ||
                this.subscriptionFilter == true) {
                if (this.watchFilter == true) {
                    filter.sort(function (filter) {
                        if (filter.watchmode == "ON" || filter.watchmode == 1) {
                            return -1;
                        }
                        else {
                            return 1;
                        }
                    });
                }
                if (this.batteryStatusFilter == true) {
                    filter.sort(function (filterA) {
                        if (filterA.powerSupplyVoltage == "ON") {
                            return 1;
                        }
                    });
                    filter.sort(function (filterA) {
                        if (filterA.powerSupplyVoltage == "OFF") {
                            return -1;
                        }
                    });
                    filter.sort(function (filterA) {
                        if (filterA.powerSupplyVoltage == null) {
                            return -1;
                        }
                    });
                }
                if (this.gsmStatusFilter == true) {
                    filter.sort(function (filterA, filterB) {
                        return filterA.gsmSignalStrength - filterB.gsmSignalStrength;
                    });
                }
                if (this.gpsFilter == true) {
                    filter.sort(function (filterA, filterB) {
                        return filterA.gps - filterB.gps;
                    });
                }
                if (this.transmissionFilter == true) {
                    filter.sort(function (filterA, filterB) {
                        return (new Date(filterA.timeStamp).getTime() -
                            new Date(filterB.timeStamp).getTime());
                    });
                }
                if (this.subscriptionFilter == true) {
                    filter.sort(function (filterA, filterB) {
                        return (new Date(filterA.warrantyExpiryDate).getTime() -
                            new Date(filterB.warrantyExpiryDate).getTime());
                    });
                }
            }
            else {
                filter = [];
                if (localStorage.statusChanger)
                    this.filterValue = localStorage.statusChanger;
                else
                    this.filterValue = "All";
            }
            this.manualFilter = filter;
        }
    }
    loadExternalScript() {
        return new Promise((resolve) => {
            const scriptElement = document.createElement("script");
            scriptElement.src =
                "https://maps.googleapis.com/maps/api/js?key=" +
                    this.applicationSettings.GoogleMapKey;
            scriptElement.className = "googleMap";
            scriptElement.id = this.applicationSettings.GoogleMapKey;
            scriptElement.onload = resolve;
            document.body.appendChild(scriptElement);
        });
    }
    copyLinkClip() {
        const latlng = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["storageVariable"].upDatedJsonData["liveDatas"][this.selectedVin.vin];
        var copyText = "http://www.google.com/maps/place/" +
            latlng.latitude +
            "," +
            latlng.longitude;
        this.clipboard.copy(copyText);
        this.commonService.presentToast("Link copied");
    }
    navigateToGoogle() {
        const latlng = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["storageVariable"].upDatedJsonData["liveDatas"][this.selectedVin.vin];
        window.open("http://www.google.com/maps/place/" +
            latlng.latitude +
            "," +
            latlng.longitude);
        // window.open('geo://'+this.selectedVin.latitude+', '+this.selectedVin.longitude+'system');
    }
    shareLocation() {
        let company;
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["app"].appName == "Upcot-mvt") {
            company = "Upcot";
        }
        else {
            company = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["app"].appName;
        }
        var options = {
            message: company + " - Location Share",
            url: "http://www.google.com/maps/place/" +
                this.selectedVin.latitude +
                "," +
                this.selectedVin.longitude,
        };
        this.socialSharing.shareWithOptions(options);
    }
    addMarker() {
        if (this.map) {
            this.mapService.clearLayers(this.map, [1, 2]);
            const icon = this.getLiveTrackIcon(this.color[this.selectedVin.status], this.vehicleModel[this.selectedVin.icon.toUpperCase()]);
            const myLatlng = {
                lat: this.selectedVin.latitude,
                lng: this.selectedVin.longitude,
            };
            this.mapService.addMarker(this.map, myLatlng, "gridview", icon);
            this.mapService.setCenter(this.map, myLatlng);
        }
    }
    todayAlerts() {
        let localData = this.selectedVin;
        let date = new Date();
        let data = {
            address: "false",
            vin: localData.vin,
            userId: localStorage.userName,
            fromDate: date.toJSON().split("T")[0],
            toDate: date.toJSON().split("T")[0],
        };
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["serverUrl"].web + "/alert/mobileAlert";
        this.ajaxService.ajaxPostWithBody(url, data).subscribe((res) => {
            //console.log(res);
            if (res != "" && res != []) {
                this.alertData = res;
                this.alertCount = res.length;
                this.NoDataImage = false;
                this.vehicleAlertCount.emit(this.alertCount);
            }
            else {
                this.NoDataImage = true;
                // this.commonService.presentToast("No alerts for this vehicle");
                this.vehicleAlertCount.emit(0);
                this.alertCount = 0;
                this.alertData = [];
            }
        });
    }
    executiveSummary() {
        this.addMarker();
        const body = {};
        let mode;
        body["vin"] = this.selectedVin.vin;
        body["fromDate"] = this.yesterDayDate;
        body["toDate"] = this.yesterDayDate;
        body["companyId"] = localStorage.corpId;
        body["userId"] = localStorage.userName;
        mode = "/report/overallSummary";
        this.ajaxService.ajaxReportServices(mode, body, null, this.successCallback);
        this.vehicleInfo = this.selectedVin.vin;
    }
    chartAndSummaryCard() {
        this.format = JSON.parse(localStorage.reportsData);
        this.reportData = JSON.parse(localStorage.reportsData);
        let addition = 0;
        let datas;
        for (datas of Object.values(this.reportData[0].alertCount)) {
            addition += datas;
        }
        this.reportData[0]["totalCount"] = addition;
        this.format = {
            summary: [
                { duration: this.reportData[0]["stopDuration"], status: "Stop" },
                { duration: this.reportData[0]["runningDuration"], status: "Running" },
                { duration: this.reportData[0]["idleDuration"], status: "Idle" },
                { duration: this.reportData[0]["towedDuration"], status: "Towed" },
            ],
            odometer: this.reportData[0]["odometer"],
        };
        this.resultedSummaryList = this.format["summary"];
        this.statusColor = JSON.parse(localStorage.appSettings).statusColor;
        for (let i of this.format["summary"]) {
            const obj = {};
            obj["type"] = i.status;
            obj["value"] = this.commonService.timeConverter(i.duration, "display");
            obj["borderStyle"] = i.status + "Style";
            obj["partitionStyle"] = i.status + "PartitionLine";
            this.summary.push(obj);
        }
        for (let i = 0; i < this.reportData.length; i++) {
            let addition = 0, datas;
            for (datas of Object.values(this.reportData[i].alertCount)) {
                addition += parseInt(datas);
            }
            this.reportData[i]["totalCount"] = addition;
        }
        this.executiveCard = this.reportData[0];
        // this.plateNum =this.executiveCard.plateNo;
        const xAxis = new Array();
        const yAxis = new Array();
        for (const x in this.resultedSummaryList) {
            yAxis.push(this.commonService.timeConverter(this.resultedSummaryList[x]["duration"], "minutes"));
            xAxis.push(this.resultedSummaryList[x]["status"]);
        }
        if (this.barChart) {
            this.bars = new chart_js__WEBPACK_IMPORTED_MODULE_16__["Chart"](this.barChart.nativeElement, {
                type: "doughnut",
                data: {
                    datasets: [
                        {
                            label: "Status in days",
                            data: yAxis,
                            backgroundColor: ["#eb3636", "#36eb9d", "#36a2eb", "#eb368d"],
                            borderColor: ["#f7f7f7", "#f7f7f7", "#f7f7f7", "#f7f7f7"],
                            borderWidth: 5,
                        },
                    ],
                    labels: xAxis,
                },
                options: {
                    tooltips: {
                        callbacks: {
                            label: function (tooltipItem, data) {
                                var dataset = data.datasets[tooltipItem.datasetIndex];
                                var total = dataset.data.reduce(function (previousValue, currentValue, currentIndex, array) {
                                    return previousValue + currentValue;
                                });
                                var currentValue = dataset.data[tooltipItem.index];
                                var percentage = Math.floor((currentValue / total) * 100 + 0.5);
                                var labelIndex = tooltipItem.index;
                                var realLabel = data.labels[labelIndex];
                                return realLabel + " : " + percentage + "%";
                            },
                        },
                    },
                },
            });
        }
    }
    changeGridView(data) {
        this.manualFilter = [];
        if (data) {
            if (data.count > 0) {
                localStorage.removeItem("modalFilterData");
                if (data.type === "Notransmit") {
                    this.filterValue = "No Transmission";
                    localStorage.setItem("statusChanger", "No Transmission");
                }
                else {
                    this.filterValue = data.type;
                    localStorage.setItem("statusChanger", data.type);
                }
            }
            else if (data.count == 0) {
                this.commonService.presentToast("You didn't have any vehicle to show");
            }
        }
    }
    changeOtherStatusView(data) {
        //console.log(data)
    }
    openFilter(data) {
        if (data == "close") {
            this.filterIconClose = false;
        }
        else if (data == "funnel") {
            this.filterIconClose = true;
        }
        else {
            this.filterPage(null);
        }
    }
    armoronVehicleModal(data) {
        var icon = data.icon.toUpperCase();
        if (this.modelForVeh[icon]) {
            return this.modelForVeh[icon];
        }
        else {
            return this.modelForVeh["BIKE"];
        }
    }
    armoronVehiclePaint(data) {
        var icon = data.icon.toUpperCase();
        if (this.paintingForVeh[icon]) {
            return this.paintingForVeh[icon];
        }
        else {
            return this.paintingForVeh["BIKE"];
        }
    }
    eventEmmiter(data) {
        this.gridView.emit(data);
    }
    vehicleFunctionClick(event) {
        let currentPage = this.pageSeleter;
        this.pageSeleter = event;
        if (this.pageSeleter == "gridview" && currentPage != "gridview") {
            if (this.websocketliveService.isAlive("livetrack")) {
                // this.websocketliveService.disConnectSocket('livetrack');
            }
            this.checkSocket();
            this.selectedVin = JSON.parse(localStorage.selectedVin);
            localStorage.setItem("selectedVin", JSON.stringify(this.selectedVin));
            setTimeout(() => {
                this.loadMap();
                this.addMarker();
            });
            if (this.selectedVin.vin) {
                if (this.gridCardOption[this.selectedVin.icon] == null) {
                    this.executiveSummary();
                }
                this.todayAlerts();
            }
        }
    }
    livetrackWeb($event) {
        // this.traveVinData = $event;
    }
    vehicleAlert(event) {
        this.totalAlertCount = event;
    }
    restartApp() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: "Info",
                backdropDismiss: false,
                message: "Device notification enabled need to restart your application.",
                buttons: [
                    {
                        text: "Restart",
                        handler: (data) => {
                            document.location.href = "index.html";
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    pushNotificationConfig() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let pushDetails;
            this.platform.ready().then((res) => {
                if (this.platform.is("ios")) {
                    this.firebaseX.grantPermission().then((success) => {
                        if (success) {
                        }
                    });
                }
                if (this.network.type !== "none") {
                    if (/(android)/i.test(navigator.userAgent)) {
                        this.firebaseX
                            .getToken()
                            .then((token) => {
                            //alert("token is "+ token);
                            //   alert("uuid is "+ this.device.uuid);
                            localStorage.setItem("imeiNo", this.device.uuid);
                            localStorage.setItem("deviceToken", token);
                            localStorage.setItem("notificationStatus", "true");
                            pushDetails = {
                                imeiNo: this.device.uuid,
                                appName: src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["app"].appName,
                                deviceToken: token,
                                companyID: localStorage.getItem("corpId"),
                                userId: localStorage.getItem("userName"),
                                os: "ionic4",
                                pushStatus: "true",
                            };
                            //console.log(token);
                            const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["serverUrl"].web + "/alert/pushnotification";
                            this.ajaxService
                                .ajaxPostWithBody(url, pushDetails)
                                .subscribe((res) => {
                                localStorage.setItem("pushStatus", "persisted");
                                //console.log('push presisted');
                                // this.restartApp();
                            });
                        })
                            .catch((error) => {
                            //  alert("Token uuid as "+error);
                            this.commonService.presentToast("Something went wrong!!Push notification won't recieve");
                        });
                    }
                    else if (/(iPhone|iPad|iPod)/i.test(navigator.userAgent)) {
                        this.firebaseX
                            .getToken()
                            .then((token) => {
                            //alert("token is "+ token);
                            this.udid
                                .get()
                                .then((uuid) => {
                                // alert("uuid is "+ uuid);
                                localStorage.setItem("imeiNo", this.device.uuid);
                                localStorage.setItem("deviceToken", token);
                                localStorage.setItem("notificationStatus", "true");
                                pushDetails = {
                                    imeiNo: this.device.uuid,
                                    appName: src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["app"].appName,
                                    deviceToken: token,
                                    companyID: localStorage.getItem("corpId"),
                                    userId: localStorage.getItem("userName"),
                                    os: "ionic4ios",
                                    pushStatus: "true",
                                };
                                localStorage.setItem("device", "ionic4ios");
                                //console.log(uuid);
                                //console.log(token);
                                const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["serverUrl"].web + "/alert/pushnotification";
                                this.ajaxService
                                    .ajaxPostWithBody(url, pushDetails)
                                    .subscribe((res) => {
                                    localStorage.setItem("pushStatus", "persisted");
                                    //console.log('push presisted');
                                    // this.restartApp();
                                });
                            })
                                .catch((error) => {
                                //alert("Error uuid as "+error);
                                this.commonService.presentToast("Something went wrong!!Push notification won't recieve");
                            });
                        })
                            .catch((error) => {
                            //  alert("Token uuid as "+error);
                            this.commonService.presentToast("Something went wrong!!Push notification won't recieve");
                        });
                    }
                    this.network.onDisconnect().subscribe(() => {
                        //console.log('network was disconnected :-(');
                        this.commonService.presentToast("Poor network connection");
                    });
                }
            });
        });
    }
    armoronFunctionality(routerData, vehicle) {
        this.selectedVin = vehicle;
        localStorage.setItem("selectedVin", JSON.stringify(vehicle));
        if (routerData == "livetrack")
            this.router.navigateByUrl("/livetrack/vin");
        else if (routerData == "alerts")
            this.openAlertsModal();
        else if (routerData == "settings")
            this.router.navigateByUrl("settings/Vin");
        else if (routerData == "trackHistory")
            this.router.navigateByUrl("trackhistory");
        else if (routerData == "geofence")
            this.router.navigateByUrl("/geofence/vin/null");
    }
    showLocation(data) {
        // dt.location = "bhdsh"
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["serverUrl"].web +
            "/login/company/latlngtoaddress/" +
            data.latitude +
            "/" +
            data.longitude +
            "/" +
            localStorage.corpId;
        this.ajaxService.ajaxGetObject(url).subscribe((res) => {
            if (JSON.stringify(res) == "{}") {
                data.location = data.latitude + "," + data.longitude;
            }
            else {
                data.location = res;
            }
        });
    }
    backButtonExit() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        let thisKey = this;
        let alertController = this.alertController;
        let websocketService = this.websocketService;
        document.addEventListener("backbutton", function (event) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                event.stopImmediatePropagation();
                event.stopPropagation();
                event.preventDefault();
                if (window.location.hash == "#/tabs/gridview/All") {
                    event.stopImmediatePropagation();
                    event.stopPropagation();
                    event.preventDefault();
                    //console.log('hello');
                    if (thisKey.exitPopup === false) {
                        thisKey.exitPopup = true;
                        localStorage.setItem("exitPopup", "true");
                        const alert = yield thisKey.alertController.create({
                            header: "Exit",
                            backdropDismiss: false,
                            message: "Are you sure? You want to exit!",
                            buttons: [
                                {
                                    text: "Cancel",
                                    role: "cancel",
                                    handler: (data) => {
                                        thisKey.exitPopup = false;
                                        localStorage.setItem("exitPopup", "false");
                                    },
                                },
                                {
                                    text: "Ok",
                                    handler: (data) => {
                                        navigator["app"].exitApp();
                                        // thisKey.websocketService.disConnectSocket("livetrack");
                                    },
                                },
                            ],
                        });
                        yield alert.present();
                    }
                }
            });
        }, false);
    }
    gridCardIssueRecursion() {
        let data = {
            companyID: localStorage.corpId,
            branchID: localStorage.corpId,
            emailId: localStorage.userName,
            Check: "false",
            entryPoint: src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["app"].entryPoint,
            dashboardMode: "mobile",
        };
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["serverUrl"].web + "/Dashboarddata/dashboard";
        this.ajaxService.ajaxPostWithBody(url, data).subscribe((res) => {
            if (res != undefined) {
                this.updatedJsonData = res;
                let data = [];
                for (let i = 0; i < Object.keys(this.updatedJsonData.liveDatas).length; i++) {
                    let currentCount = Object.values(this.updatedJsonData.liveDatas)[i];
                    data.push(currentCount.status);
                    // }
                    Object.values(this.updatedJsonData.liveDatas)[i]["odometer"] =
                        parseInt(Object.values(this.updatedJsonData.liveDatas)[i]["odometer"]) / 1000;
                }
                data.sort();
                let current = null;
                let cnt = 0;
                for (let i = 0; i < data.length; i++) {
                    if (data[i] != current) {
                        if (cnt > 0) {
                        }
                        current = data[i];
                        cnt = 1;
                    }
                    else {
                        cnt++;
                    }
                    res.statusCount[current] = cnt;
                }
                for (let i = 0; i < Object.keys(res.statusCount).length; i++) {
                    if (!data.includes(Object.keys(res.statusCount)[i]) &&
                        Object.keys(res.statusCount)[i] != "Total") {
                        res.statusCount[Object.keys(res.statusCount)[i]] = 0;
                    }
                }
                if (cnt > 0) {
                    res.statusCount[current] = cnt;
                }
                res["statusCount"]["Total"] = Object.keys(res.liveDatas).length;
                src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["storageVariable"].dashboardData = this.updatedJsonData;
                src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["storageVariable"].upDatedJsonData = this.updatedJsonData;
                if (this.liveDatas) {
                    Object.assign(this.liveDatas, res.liveDatas);
                }
                else {
                    this.liveDatas = res.liveDatas;
                    this.initFilterRow();
                    this.showSkeletonLoader = false;
                }
                res["statusCount"]["Total"] = Object.keys(this.updatedJsonData.liveDatas).length;
                src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["storageVariable"].dashboardData = this.updatedJsonData;
                src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["storageVariable"].upDatedJsonData = this.updatedJsonData;
                this.updateCache();
                this.addressResult("websocketUpdate");
                if (this.myPlatform != "desktop") {
                    this.headerValue.emit(JSON.stringify(res));
                }
                else {
                    let data = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["storageVariable"].upDatedJsonData;
                    this.vehicleCount = data.statusCount;
                    this.statusBarOthers = Object.keys(this.vehicleCount);
                    if (Object.values(this.updatedJsonData.liveDatas)[0])
                        this.selectedVin = Object.values(this.updatedJsonData.liveDatas)[0];
                    localStorage.setItem("selectedVin", JSON.stringify(this.selectedVin));
                    this.addMarker();
                    this.todayAlerts();
                    if (this.gridCardOption[this.selectedVin.icon] == null) {
                        this.executiveSummary();
                    }
                }
            }
            else {
                this.commonService.dismissLoader();
                var data = navigator.onLine;
                if (data == false) {
                    this.commonService.networkChecker();
                }
                else if (data == true) {
                    // this.ajaxService.ajaxGetWithString(serverUrl.web + "/login/test")
                    //   .subscribe(res => {
                    //     if (res == '["Hi Web....!"]')
                    //       console.log("server run")
                    //     else {
                    //       this.commonService.dismissLoader();
                    //       setTimeout(()=>{
                    //         this.commonService.presentAlert("Server maintanance error", "Sorry for the inconvenience please try after some times");
                    //       },10000)
                    //     }
                    //   })
                    this.serverTest();
                }
            }
        });
    }
    serverTest() {
        this.ajaxService
            .ajaxGetWithString(src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["serverUrl"].web + "/login/test")
            .subscribe((res) => {
            if (res == '["Hi Web....!"]')
                console.log("server run");
            else {
                this.commonService.dismissLoader();
                setTimeout(() => {
                    if (this.serverTestcount == 3) {
                        this.serverTestcount = 0;
                        this.commonService.presentAlert("Server maintanance error", "Sorry for the inconvenience please try after some times");
                    }
                    else if (res != '["Hi Web....!"]') {
                        this.serverTestcount++;
                        this.serverTest();
                    }
                }, 10000);
            }
        });
    }
    appUpdate() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (/(android|iPhone|iPad|iPod)/i.test(navigator.userAgent)) {
                if (localStorage.appSettings) {
                    //console.log(this.appVersion.getAppName())
                    let currentVersion = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["app"].appVersion;
                    let appSettingsVersion = JSON.parse(localStorage.appSettings)["appComVersion"][src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["app"].appName];
                    if (appSettingsVersion > currentVersion) {
                        const alert = yield this.alertController.create({
                            header: "Update Alert",
                            backdropDismiss: false,
                            message: "A new update is now available. Please update from the appstore or playstore.",
                            buttons: [
                                {
                                    text: "Cancel",
                                    role: "cancel",
                                    handler: (data) => { },
                                },
                                {
                                    text: "update",
                                    handler: (data) => {
                                        //console.log("update that")
                                        this.authenticationService.logout();
                                        this.router.navigateByUrl("login");
                                        this.market.open(src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["app"].package);
                                    },
                                },
                            ],
                        });
                        yield alert.present();
                    }
                }
            }
        });
    }
    ngOnInit() {
        this.appUpdate();
        this.appName = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["app"].appName;
        this.entryPoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["app"].entryPoint;
        this.gridCardOption = JSON.parse(JSON.parse(localStorage.getItem("loginData"))[1].cardmenu);
        if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["storageVariable"].upDatedJsonData) {
            this.gridCardIssueRecursion();
            // this.commonService.presentLoader();
            // let data = {
            //   "companyID": localStorage.corpId,
            //   "branchID": localStorage.corpId,
            //   "emailId": localStorage.userName,
            //   "Check": "false",
            //   "entryPoint": app.entryPoint,
            //   "dashboardMode": "mobile"
            // }
            // const url = serverUrl.web + "/Dashboarddata/dashboard";
            // this.ajaxService.ajaxPostWithBody(url, data)
            //   .subscribe(res => {
            //     if (res != undefined) {
            //       // this.commonService.dismissLoader();
            //       this.updatedJsonData = res;
            //       let data = [];
            //       for (let i = 0; i < Object.keys(this.updatedJsonData.liveDatas).length; i++) {
            //         let currentCount: any = Object.values(this.updatedJsonData.liveDatas)[i];
            //         // if (currentCount.status == "Yet_to_transmit" || currentCount.status == "Yet to Transmit" || currentCount.status == "Online" || currentCount.status == null) {
            //         //   currentCount.status = "No Transmission"
            //         // } else if (currentCount.status == "Towed") {
            //         //   currentCount.status = "Running"
            //         // }
            //         // if (currentCount.status == "Overspeed") {
            //         //   data.push("Overspeed");
            //         // } else {
            //         data.push(currentCount.status);
            //         // }
            //         Object.values(this.updatedJsonData.liveDatas)[i]["odometer"] = parseInt(Object.values(this.updatedJsonData.liveDatas)[i]["odometer"]) / 1000
            //       }
            //       data.sort();
            //       let current = null;
            //       let cnt = 0;
            //       for (let i = 0; i < data.length; i++) {
            //         if (data[i] != current) {
            //           if (cnt > 0) {
            //             // //console.log(current + ' comes --> ' + cnt + ' times<br>');
            //           }
            //           current = data[i];
            //           cnt = 1;
            //         } else {
            //           cnt++;
            //         }
            //         res.statusCount[current] = cnt
            //       }
            //       for (let i = 0; i < Object.keys(res.statusCount).length; i++) {
            //         if (!data.includes(Object.keys(res.statusCount)[i]) && Object.keys(res.statusCount)[i] != 'Total') {
            //           res.statusCount[Object.keys(res.statusCount)[i]] = 0
            //         }
            //       }
            //       if (cnt > 0) {
            //         // //console.log(current + ' comes --> ' + cnt + ' times');
            //         res.statusCount[current] = cnt
            //       }
            //       res['statusCount']['Total'] = Object.keys(res.liveDatas).length;
            //       storageVariable.dashboardData = this.updatedJsonData;
            //       storageVariable.upDatedJsonData = this.updatedJsonData
            //       // localStorage.setItem('dashboardData', JSON.stringify(this.updatedJsonData));
            //       // localStorage.setItem('upDatedJsonData', JSON.stringify(this.updatedJsonData));
            //       if (this.liveDatas) {
            //         Object.assign(this.liveDatas, res.liveDatas);
            //       } else {
            //         this.liveDatas = res.liveDatas;
            //         this.initFilterRow();
            //         this.showSkeletonLoader = false;
            //       }
            //       res['statusCount']['Total'] = Object.keys(this.updatedJsonData.liveDatas).length;
            //       storageVariable.dashboardData = this.updatedJsonData;
            //       storageVariable.upDatedJsonData = this.updatedJsonData
            //       // localStorage.setItem('dashboardData', JSON.stringify(this.updatedJsonData));
            //       // localStorage.setItem('upDatedJsonData', JSON.stringify(this.updatedJsonData));
            //       this.updateCache();
            //       this.addressResult("websocketUpdate");
            //       if (this.myPlatform != "desktop") {
            //         this.headerValue.emit(JSON.stringify(res));
            //       } else {
            //         let data: any = storageVariable.upDatedJsonData;
            //         this.vehicleCount = data.statusCount;
            //         this.statusBarOthers = Object.keys(this.vehicleCount);
            //       }
            //     } else {
            //       this.commonService.dismissLoader();
            //       var data = navigator.onLine;
            //       if (data == false) {
            //         this.commonService.networkChecker()
            //       } else if (data == true) {
            //         this.ajaxService.ajaxGetWithString(serverUrl.web + "/login/test")
            //           .subscribe(res => {
            //             if (res == '["Hi Web....!"]')
            //               //console.log("server run")
            //             else {
            //               this.commonService.dismissLoader();
            //               this.commonService.presentAlert("Server maintanance error", "Sorry for the inconvenience please try after some time");
            //             }
            //           })
            //       }
            //     }
            //   })
        }
        this.menuController.enable(true);
        this.yesterDayDate = this.yesterday.toJSON().split("T")[0];
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == "tablet") {
            this.myPlatform = "desktop";
        }
        if (/(iPhone|iPad|iPod)/i.test(navigator.userAgent)) {
            this.isIosPlatform = true;
        }
        else {
            this.isIosPlatform = false;
        }
        this.applicationSettings = JSON.parse(localStorage.appSettings);
        this.websocketService.setProductService(this);
        this.filterValue = this.activatedRoute.snapshot.paramMap.get("type");
        if (this.filterValue === "Vin") {
            this.statusGrid = JSON.parse(localStorage.getItem("vinGridViewData")).data;
        }
        else {
            this.statusGrid = [];
        }
        // if (localStorage.inItPage != 'gridView') {
        this.checkSocket();
        // }
        this.router.events.subscribe((event) => {
            this.watchFilter = false;
            this.batteryStatusFilter = false;
            this.gsmStatusFilter = false;
            this.transmissionFilter = false;
            this.gpsFilter = false;
            this.subscriptionFilter = false;
            if (this.filterValue === "Vin") {
                this.statusGrid = JSON.parse(localStorage.getItem("vinGridViewData")).data;
            }
            else {
                this.statusGrid = [];
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationStart"]) {
                if (event.url.indexOf("gridview") !== -1) {
                    this.websocketService.setProductService(this);
                    this.checkSocket();
                    this.addressResult("websocketUpdate");
                }
                else {
                    if (this.subscription) {
                        this.subscription.unsubscribe();
                    }
                    if (this.websocketService.isAlive("livetrack")) {
                        // this.websocketService.disConnectSocket("livetrack");
                        //console.log("left from router");
                    }
                    if (this.websocketService.isAlive("alertsmanagerendpoint")) {
                        this.websocketService.disConnectSocket("alertsmanagerendpoint");
                    }
                }
            }
            if (this.myPlatform == "desktop" && localStorage.gridData != "[]") {
                // new changes by gokul
                // this.count = Object.values(JSON.parse(localStorage.dashboardData)["liveDatas"]).length
                let data = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["storageVariable"].upDatedJsonData;
                this.vehicleCount = data.statusCount;
                this.statusBarOthers = Object.keys(this.vehicleCount);
                // upto this
                this.gridCardOption = JSON.parse(JSON.parse(localStorage.getItem("loginData"))[1].cardmenu);
                if (this.pageSeleter == "gridview") {
                    this.selectedVin = JSON.parse(localStorage.gridData)[0];
                    localStorage.setItem("selectedVin", JSON.stringify(this.selectedVin));
                    if (this.map) {
                        this.addMarker();
                    }
                    if (this.selectedVin.vin != JSON.parse(localStorage.gridData)[0].vin) {
                        if (this.gridCardOption[this.selectedVin.icon] == null)
                            this.executiveSummary();
                        this.todayAlerts();
                    }
                }
            }
        });
        const ele = document.querySelector(".googleMap");
        if (ele === null) {
            this.loadExternalScript()
                .then(() => {
                console.warn("Init Map Loaded");
            })
                .catch(() => { });
        }
        else if (ele.id !== this.applicationSettings.GoogleMapKey) {
            document.body.removeChild(ele);
            this.loadExternalScript()
                .then(() => {
                console.warn("Map Key Changed");
            })
                .catch(() => { });
        }
        if (this.myPlatform == "desktop") {
            this.gridCardOption = JSON.parse(JSON.parse(localStorage.getItem("loginData"))[1].cardmenu);
            // this.count = Object.values(JSON.parse(localStorage.loginData)[0]["staticIODatas"]).length
            if (src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["storageVariable"].dashboardData) {
                // this.count = Object.values(JSON.parse(localStorage.dashboardData)["liveDatas"]).length
                let data = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["storageVariable"].upDatedJsonData;
                this.vehicleCount = data.statusCount;
                this.statusBarOthers = Object.keys(this.vehicleCount);
                setTimeout(() => {
                    this.selectedVin = JSON.parse(localStorage.gridData)[0];
                    localStorage.setItem("selectedVin", JSON.stringify(this.selectedVin));
                    this.loadMap();
                    if (this.selectedVin) {
                        this.addMarker();
                        if (this.gridCardOption[this.selectedVin.icon] == null) {
                            this.executiveSummary();
                        }
                        this.todayAlerts();
                    }
                }, 2000);
            }
            else {
                setTimeout(() => {
                    this.loadMap();
                    this.addMarker();
                }, 2000);
            }
        }
        this.loginData = Object.keys(JSON.parse(localStorage.loginData)[0]);
        // newchanges
        this.app["logo"] = localStorage.companyLogo;
        this.applicationSettings = JSON.parse(localStorage.appSettings);
        if (localStorage.inItPage == "gridView") {
            // this.backButtonExit()
        }
        if (!this.websocketService.isAlive("livetrack")) {
            this.gridCardIssueRecursion();
        }
        if (/(android|iPhone|iPad|iPod)/i.test(navigator.userAgent)) {
            if (localStorage.getItem("pushStatus") === null) {
                this.pushNotificationConfig();
            }
        }
    }
};
VtsgridComponent.ctorParameters = () => [
    { type: _services_websocket_service__WEBPACK_IMPORTED_MODULE_4__["WebsocketService"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_auth_map_service__WEBPACK_IMPORTED_MODULE_13__["AuthMapService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _services_ajax_service__WEBPACK_IMPORTED_MODULE_3__["AjaxService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_11__["SocialSharing"] },
    { type: _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_12__["Clipboard"] },
    { type: src_app_services_websocketlive_service__WEBPACK_IMPORTED_MODULE_17__["WebsocketliveService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"] },
    { type: _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_18__["FirebaseX"] },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_19__["Device"] },
    { type: _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_20__["UniqueDeviceID"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_21__["Network"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_22__["AppVersion"] },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_24__["AuthenticationService"] },
    { type: _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_23__["Market"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], VtsgridComponent.prototype, "gridView", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], VtsgridComponent.prototype, "displayCount", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], VtsgridComponent.prototype, "temperatureView", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("mapElement", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], VtsgridComponent.prototype, "mapElement", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], VtsgridComponent.prototype, "manualFilter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], VtsgridComponent.prototype, "searchTerm", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], VtsgridComponent.prototype, "filterValue", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("barChart", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], VtsgridComponent.prototype, "barChart", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], VtsgridComponent.prototype, "headerValue", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], VtsgridComponent.prototype, "vehicleAlertCount", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonInfiniteScroll"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonInfiniteScroll"])
], VtsgridComponent.prototype, "infiniteScroll", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonVirtualScroll"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonVirtualScroll"])
], VtsgridComponent.prototype, "virtualScroll", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("mySlider", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonSlides"])
], VtsgridComponent.prototype, "slides", void 0);
VtsgridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-vtsgrid",
        template: __webpack_require__(/*! raw-loader!./vtsgrid.component.html */ "./node_modules/raw-loader/index.js!./src/app/gridview-tab/vtsgrid/vtsgrid.component.html"),
        styles: [__webpack_require__(/*! ./vtsgrid.component.scss */ "./src/app/gridview-tab/vtsgrid/vtsgrid.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_websocket_service__WEBPACK_IMPORTED_MODULE_4__["WebsocketService"],
        _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        src_app_services_auth_map_service__WEBPACK_IMPORTED_MODULE_13__["AuthMapService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _services_ajax_service__WEBPACK_IMPORTED_MODULE_3__["AjaxService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_11__["SocialSharing"],
        _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_12__["Clipboard"],
        src_app_services_websocketlive_service__WEBPACK_IMPORTED_MODULE_17__["WebsocketliveService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"],
        _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_18__["FirebaseX"],
        _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_19__["Device"],
        _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_20__["UniqueDeviceID"],
        _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_21__["Network"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
        _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_22__["AppVersion"],
        src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_24__["AuthenticationService"],
        _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_23__["Market"]])
], VtsgridComponent);



/***/ }),

/***/ "./src/app/services/filter.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/services/filter.pipe.ts ***!
  \*****************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterPipe = class FilterPipe {
    transform(items, terms, count, statusGrid, manualFilter) {
        if (!items)
            return [];
        if (terms) {
            if (manualFilter.length > 0) {
                return manualFilter;
            }
            else {
                let data;
                if (terms !== "All" && terms !== "Vin") {
                    data = items.filter(it => {
                        return it.status === terms;
                    });
                }
                else if (terms === "All") {
                    data = items;
                }
                else {
                    let vinData = [];
                    for (let i = 0; i < statusGrid.length; i++) {
                        items.filter(it => {
                            if (it.vin === statusGrid[i]) {
                                vinData.push(it);
                            }
                            return vinData;
                        });
                    }
                    data = vinData;
                }
                // data.sort(function (a: any, b: any) {
                //   return new Date(b.timeStamp).getTime() - new Date(a.timeStamp).getTime();
                // });
                localStorage.setItem('maxLength', data.length.toString());
                let data1 = [];
                for (let i = 0; i < count; i++) {
                    if (data[i]) {
                        data1.push(data[i]);
                    }
                    else {
                        break;
                    }
                }
                if (localStorage.gridDataLength !== data1.length.toString()) {
                    localStorage.setItem('updateGridData', 'true');
                }
                localStorage.setItem('gridDataLength', data1.length.toString());
                localStorage.setItem('gridData', JSON.stringify(data1));
                return data1;
            }
        }
    }
};
FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'status'
    })
], FilterPipe);



/***/ }),

/***/ "./src/app/services/search.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/services/search.pipe.ts ***!
  \*****************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SearchPipe = class SearchPipe {
    transform(items, terms) {
        if (!items)
            return [];
        if (!terms)
            return items;
        terms = terms.toLowerCase();
        return items.filter(it => {
            if (it.plateNo != null)
                return it.plateNo.replace(/ /g, '').toLowerCase().includes(terms.replace(/ /g, ''));
            else
                return false;
        });
    }
};
SearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'search'
    })
], SearchPipe);



/***/ }),

/***/ "./src/app/services/websocketlive.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/websocketlive.service.ts ***!
  \***************************************************/
/*! exports provided: WebsocketliveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketliveService", function() { return WebsocketliveService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var queueing_subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! queueing-subject */ "./node_modules/queueing-subject/lib.es2015/index.js");
/* harmony import */ var _interfaces_webSocket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../interfaces/webSocket */ "./src/app/interfaces/webSocket.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_webSocket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/webSocket */ "./node_modules/rxjs/_esm2015/webSocket/index.js");






let WebsocketliveService = class WebsocketliveService {
    constructor(webSocketInstance) {
        this.webSocketInstance = webSocketInstance;
        this.input$ = new queueing_subject__WEBPACK_IMPORTED_MODULE_2__["QueueingSubject"]();
    }
    setProductService(ws) {
        this.webSocketInstance = ws;
    }
    isAlive(type) {
        let status = false;
        if (this.subject$ && this.subject$._socket && this.subject$._socket.url.indexOf(type) !== -1) {
            (this.subject$.closed == false) ? status = true : status = false;
        }
        return status;
    }
    // connectSocket(input: any,type: string){
    //   // queue up a request to be sent when the websocket connects
    //   this.input$.next(input);
    //   // create the websocket observable, does *not* open the websocket connection
    //   switch(type){
    //     case "dashboard":
    //     this.socket$ = makeWebSocketObservable('ws://' +serverUrl.websocket+ '/Web/dashboardendpoint');
    //    // this.socket$ = makeWebSocketObservable('ws://10.10.10.28:8080/dashboardendpoint');
    //     break;
    //     case "alert":
    //     this.socket$ = makeWebSocketObservable('wss://' +serverUrl.adminSocket+ '/fleettrackingadmin/alertsmanagerendpoint');
    //     break;
    //     case "livetrack":
    //     this.socket$ = makeWebSocketObservable('wss://' +serverUrl.adminSocket+ '/fleettrackingadmin/livetrackingendpoint');
    //     break;  
    //   }
    //   if(type !== 'addressUpdate'){
    //      this.messages$ =
    //     this.socket$.pipe(
    //       // the observable produces a value once the websocket has been opened
    //       switchMap((getResponses: GetWebSocketResponses) => {
    //         console.log('websocket opened');
    //         localStorage.setItem('DashboardWebSocket', 'created');
    //         return getResponses(this.input$);
    //       }),
    //       share(),
    //       ) 
    //       this.messagesSubscription = this.messages$.subscribe(
    //         (message: string) => {
    //           if(this.webSocketInstance){
    //             this.webSocketInstance.wsResponse(JSON.parse(message));
    //           }else{
    //             this.messagesSubscription.unsubscribe();
    //             console.log('Websocket closed');
    //           }
    //         },
    //         (error: Error) => {
    //           const { message } = error;
    //           if (message === normalClosureMessage) {
    //             console.log('server closed the websocket connection normally');
    //           } else {
    //             console.log('socket was disconnected due to error:', message);
    //           }
    //         },
    //         () => {
    //           // The clean termination only happens in response to the last
    //           // subscription to the observable being unsubscribed, any
    //           // other closure is considered an error.
    //           console.log('the connection was closed in response to the user');
    //           localStorage.removeItem('DashboardWebSocket');
    //         },
    //         );
    //       }
    //     }
    connectSocket(input, type) {
        switch (type) {
            case "dashboard":
                this.subject$ = Object(rxjs_webSocket__WEBPACK_IMPORTED_MODULE_5__["webSocket"])(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["serverUrl"].websocket + "/Web/dashboardendpoint");
                //this.subject$ = webSocket("ws://"+serverUrl.websocket+ "/dashboardendpoint");
                this.subject$.next(input);
                console.log("Dashboard websocket connected!");
                break;
            case "alert":
                this.subject$ = Object(rxjs_webSocket__WEBPACK_IMPORTED_MODULE_5__["webSocket"])(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["serverUrl"].adminSocket + '/fleettrackingadmin/alertsmanagerendpoint');
                this.subject$.next(input);
                console.log("Alerts websocket connected!");
                break;
            case "livetrack":
                // this.subject$ = app.appName !== 'GE' ? webSocket('ws://' +serverUrl.adminSocket+ '/Admin/livetrackingendpoint') : webSocket('ws://' +serverUrl.adminSocket+ '/fleettrackingadmin/livetrackingendpoint');
                this.subject$ = Object(rxjs_webSocket__WEBPACK_IMPORTED_MODULE_5__["webSocket"])(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["serverUrl"].adminSocket + '/Admin/livetrackingendpoint');
                // this.subject$ = webSocket('ws://' +"122.165.146.212:9090"+ '/fleettrackingadmin/livetrackingendpoint');
                this.subject$.next(input);
                console.log("Admin websocket connected!");
                break;
        }
        this.subject$.subscribe(res => {
            if (this.webSocketInstance) {
                this.webSocketInstance.wsResponse(res);
            }
            else {
                this.subject$.unsubscribe();
                console.log('Websocket closed');
            }
        }, err => {
            if (this.webSocketInstance) {
                this.webSocketInstance.wsOnError();
            }
            console.log(err);
        }, close => {
            console.log("Websocket closed");
        });
    }
    reSendRequest(input) {
        this.subject$.next(input);
    }
    ;
    disConnectSocket(type) {
        // let subject : any;
        // if(type = 'dashboard'){
        //   subject = webSocket("ws://"+serverUrl.websocket+ "/Web/dashboardendpoint");
        // }else{
        //   subject = webSocket("wss://"+serverUrl.websocket+"/fleettrackingadmin/livetrackingendpoint");
        // }
        // if(subject.closed == false){
        //   subject.unsubscribe();
        //   console.log("Websocket closed");
        // }
        this.subject$.unsubscribe();
        // this.subject$.complete();
    }
};
WebsocketliveService.ctorParameters = () => [
    { type: _interfaces_webSocket__WEBPACK_IMPORTED_MODULE_3__["websocket"] }
];
WebsocketliveService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_interfaces_webSocket__WEBPACK_IMPORTED_MODULE_3__["websocket"]])
], WebsocketliveService);



/***/ })

}]);
//# sourceMappingURL=gridview-tab-gridview-tab-module-es2015.js.map