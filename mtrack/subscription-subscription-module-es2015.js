(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subscription-subscription-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/subscription/subscription-report/subscription-report.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/subscription/subscription-report/subscription-report.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \r\n<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\"  >\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n     <ion-title style=\"margin-left: 1%;\">Subscription\r\n     <ion-row style=\"margin:0px ;padding:0;float:right\" *ngIf=\"myPlatform == 'desktop'\">\r\n      <ion-col style=\"margin:0px ;padding:0;\">\r\n        <div class=\"pdf-wrapper\" (click)=\"createPdf()\"></div>\r\n       </ion-col>\r\n       <ion-col style=\"margin:0px ;padding:0;\">\r\n        <div class=\"excel-wrapper\" (click)=\"exportToExcel()\"></div>\r\n       </ion-col>\r\n     </ion-row> \r\n    </ion-title>\r\n    \r\n  </ion-toolbar>\r\n  \r\n</ion-header> -->\r\n<!-- <ion-content> -->\r\n<ion-row>\r\n  <ion-col size=12>\r\n    <ion-row style=\"padding-left: 92%;\" *ngIf=\"myPlatform == 'desktop'\">\r\n      <div class=\"pdf-wrapper\" (click)=\"createPdf()\"></div>\r\n      <div class=\"excel-wrapper\" (click)=\"exportToExcel()\"></div>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"4\" *ngFor=\"let subcription of subcription\">\r\n        <!-- <ion-col size=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"4\" size-lx=\"4\" > -->\r\n        <!-- *virtualItem=\"let subcription;\"<ion-virtual-scroll [items]=\"subcription\" approxItemHeight=\"320px\" size=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"4\" size-lx=\"4\"> -->\r\n        <ion-card class=\"status\"\r\n          [ngClass]=\"{'validBorder' : subcription.status === 'Expired', 'inValidBorder' : subcription.status === 'Not Expired'}\"\r\n          class=\"card-wrapper\" (click)=\"updateSubscription(subcription.imeiNo)\">\r\n          <ion-row>\r\n            <ion-col size=\"12\">\r\n              <ion-row>\r\n                <ion-col size=6 style=\"align-self: center;\">\r\n                  <ion-row>\r\n                    <!-- <ion-col size=\"2\" class=\"icon_col\">\r\n                      <ion-icon name=\"car\" class=\"common-icon\"></ion-icon>\r\n                    </ion-col>  -->\r\n                    <ion-col size=\"12\" class=\"align-dataCol\">\r\n                      <ion-row>\r\n                        <ion-col size=\"12\">\r\n                          {{subcription.imeiNo}}\r\n                        </ion-col>\r\n                      </ion-row>\r\n                      <!-- <ion-row>\r\n         <ion-col size=\"12\" class=\"underline\">\r\n            Plate No\r\n              </ion-col>\r\n                </ion-row> -->\r\n                    </ion-col>\r\n                  </ion-row>\r\n\r\n                </ion-col>\r\n                <ion-col size=6>\r\n                  <!--PlateNo --->\r\n                  <ion-row>\r\n                    <ion-col size=\"12\" style=\"margin: 0 0px 0px 2px;left: 50%; font-size: 11px;\">\r\n                      Expiry on\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" style=\"margin: 0 0px 0px 2px;margin-top:0px\">\r\n                      <ion-label class=\"status\"\r\n                        [ngClass]=\"{'valid' : subcription.status == 'Expired', 'inValid' : subcription.status == 'Not Expired'}\">\r\n                        {{subcription.warrantyExpiryDate}}</ion-label>\r\n\r\n                    </ion-col>\r\n                  </ion-row>\r\n\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col size=12>\r\n                  <!--PlateNo --->\r\n                  <ion-row>\r\n                    <!-- <ion-col size=\"2\" class=\"icon_col\">\r\n                            <ion-icon name=\"barcode\" class=\"common-icon\"></ion-icon>\r\n                          </ion-col>  -->\r\n                    <ion-col size=\"12\" class=\"align-dataCol\">\r\n                      <ion-row>\r\n                        <ion-col size=\"12\" style=\"font-size:large;font-weight: bold;color: black;margin-top: -15px;\">\r\n                          {{subcription.plateNo}}\r\n                        </ion-col>\r\n                      </ion-row>\r\n                      <!-- <ion-row>\r\n               <ion-col size=\"12\" class=\"underline\">\r\n                  Plate No\r\n                    </ion-col>\r\n                      </ion-row> -->\r\n                    </ion-col>\r\n                  </ion-row>\r\n\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col size=6 style=\"margin-top: -10px;\">\r\n                  <!--PlateNo --->\r\n                  <ion-row>\r\n                    <ion-col size=\"2\" class=\"icon_col\">\r\n                      <ion-icon name=\"business\" class=\"common-icon\"></ion-icon>\r\n                    </ion-col>\r\n                    <ion-col size=\"10\" class=\"align-dataCol\">\r\n                      <ion-row>\r\n                        <ion-col size=\"12\">\r\n                          {{subcription.companyName}}\r\n                        </ion-col>\r\n                      </ion-row>\r\n                      <!-- <ion-row>\r\n                   <ion-col size=\"12\" class=\"underline\">\r\n                      Plate No\r\n                        </ion-col>\r\n                          </ion-row> -->\r\n                    </ion-col>\r\n                  </ion-row>\r\n\r\n                </ion-col>\r\n                <ion-col size=6 style=\"margin-top: -10px;\">\r\n                  <!--PlateNo --->\r\n                  <ion-row>\r\n                    <ion-col size=\"2\" class=\"icon_col\">\r\n                      <ion-icon name=\"call\" class=\"common-icon\"></ion-icon>\r\n                    </ion-col>\r\n                    <ion-col size=\"10\" class=\"align-dataCol\">\r\n                      <ion-row>\r\n                        <ion-col size=\"12\">\r\n                          {{subcription.contactNo}}\r\n                        </ion-col>\r\n                      </ion-row>\r\n                      <!-- <ion-row>\r\n                        <ion-col size=\"12\" class=\"underline\">\r\n                           Plate No\r\n                             </ion-col>\r\n                               </ion-row> -->\r\n                    </ion-col>\r\n                  </ion-row>\r\n\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col size=12 style=\"margin-top: -5px;\">\r\n                  <!--PlateNo --->\r\n                  <ion-row>\r\n                    <ion-col size=\"1\" class=\"icon_col\">\r\n                      <ion-icon name=\"mail\" class=\"common-icon\"></ion-icon>\r\n                    </ion-col>\r\n                    <ion-col size=\"11\" class=\"align-dataCol\">\r\n                      <ion-row>\r\n                        <ion-col size=\"12\">\r\n                          {{subcription.email}}\r\n                        </ion-col>\r\n                      </ion-row>\r\n                      <!-- <ion-row>\r\n                         <ion-col size=\"12\" class=\"underline\">\r\n                            Plate No\r\n                              </ion-col>\r\n                                </ion-row> -->\r\n                    </ion-col>\r\n                  </ion-row>\r\n\r\n                </ion-col>\r\n\r\n              </ion-row>\r\n            </ion-col>\r\n\r\n          </ion-row>\r\n\r\n        </ion-card>\r\n        <!-- </ion-virtual-scroll> -->\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-col>\r\n</ion-row>\r\n<ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"doInfinite($event)\">\r\n  <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\r\n  </ion-infinite-scroll-content>\r\n</ion-infinite-scroll>\r\n<!-- </ion-content> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delar-application/subscription/subscription.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delar-application/subscription/subscription.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\r\n  <ion-toolbar>\r\n   \r\n      <ion-row>\r\n        <ion-col size-sm=\"2\" size-md=\"2\" size-lg=\"2\">\r\n          <ion-menu-button></ion-menu-button>\r\n        </ion-col>\r\n         <ion-col size-sm=\"8\" size-md=\"8\" size-lg=\"8\" class=\"subscription-title\">Subscription</ion-col>\r\n        <ion-col size-sm=\"2\" size-md=\"2\"size-lg=\"2\" style=\"padding:0;margin: auto;\">\r\n          <ion-avatar title=\"PDF\" class=\"image-size\" (click)=\"createPdf()\">\r\n              <ion-img src=\"assets/company/pdf.svg\" class=\"download-wrapper\">\r\n              </ion-img>\r\n          </ion-avatar>\r\n          <ion-avatar title=\"Excel\" class=\"image-size\" (click)=\"exportToExcel()\">\r\n            <ion-img src=\"assets/company/excelNew.svg\" class=\"download-wrapper\">\r\n            </ion-img>\r\n        </ion-avatar>\r\n         </ion-col>\r\n    </ion-row> \r\n</ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-header>\r\n  <ion-toolbar class=\"dealerHeader\">\r\n    <ion-menu-button slot=\"start\"></ion-menu-button>\r\n\r\n    <ion-title>Subscription</ion-title>\r\n  </ion-toolbar>\r\n  <ion-row\r\n    style=\"margin: 0px; padding: 0; float: right\"\r\n    *ngIf=\"myPlatform == 'desktop'\"\r\n  >\r\n    <ion-col style=\"margin: 0px; padding: 0\">\r\n      <div class=\"pdf-wrapper\" (click)=\"createPdf()\"></div>\r\n    </ion-col>\r\n    <ion-col style=\"margin: 0px; padding: 0\">\r\n      <div class=\"excel-wrapper\" (click)=\"exportToExcel()\"></div>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-header>\r\n<ion-content>\r\n  <div class=\"padding25px\">\r\n    <ion-row>\r\n      <ion-col size=\"6\">\r\n        <ion-row class=\"reportInfo paddingBottom10px\"> From Date </ion-row>\r\n        <ion-row class=\"paddingBottom10px\">\r\n          <ion-datetime\r\n            class=\"datetime\"\r\n            [(ngModel)]=\"subscription.fromDate\"\r\n            displayFormat=\"D MMM YYYY\"\r\n            placeholder=\"From date\"\r\n          ></ion-datetime>\r\n        </ion-row>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-row class=\"reportInfo paddingBottom10px\"> To Date </ion-row>\r\n        <ion-row class=\"paddingBottom10px\">\r\n          <ion-datetime\r\n            class=\"datetime\"\r\n            [(ngModel)]=\"subscription.toDate\"\r\n            displayFormat=\"D MMM YYYY\"\r\n            placeholder=\"To date\"\r\n          ></ion-datetime>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row style=\"margin: 3px\">\r\n      <ion-button class=\"buttonWidth\" (click)=\"submit()\">Submit</ion-button>\r\n    </ion-row>\r\n    <ion-radio-group\r\n      (ionChange)=\"subscriptionData($event)\"\r\n      allow-empty-selection=\"false\"\r\n      name=\"radio-group\"\r\n    >\r\n      <ion-row>\r\n        <ion-col *ngFor=\"let items of subscriptionDays\">\r\n          <div class=\"radioGroup\">\r\n            <ion-radio id=\"{{items.days}}\" value=\"{{items.days}}\"></ion-radio>\r\n            <ion-label class=\"lable\"> {{items.days}} Days</ion-label>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-radio-group>\r\n  </div>\r\n\r\n  <ion-row *ngIf=\"reportData\" style=\"width: 100%; height: 100%\">\r\n    <app-subscription-report\r\n      style=\"width: 100%\"\r\n      [reportData]=\"reportData\"\r\n    ></app-subscription-report>\r\n  </ion-row>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/delar-application/subscription/subscription-report/subscription-report.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/delar-application/subscription/subscription-report/subscription-report.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".valid {\n  color: red;\n}\n\n.inValid {\n  color: orange;\n}\n\n.inValidBorder {\n  border-left: 3px solid #7c68f8;\n}\n\n.validBorder {\n  border-left: 3px solid #7c68f8;\n}\n\n* {\n  margin: 0;\n  padding: 0.9px;\n}\n\n.card-wrapper {\n  font-size: 11px;\n  font-weight: initial;\n  margin: 5px 10px;\n  padding: 1px 0px 1px 4px;\n}\n\n.item-native {\n  padding: 0px;\n}\n\n.svg-size1 {\n  width: 25px !important;\n}\n\n.svg-size2, .svg-size1 {\n  width: 21px;\n  border: 1px solid #f1f1f1;\n  padding: 2px;\n}\n\n.companyName {\n  background-color: #09d8c5;\n  text-align: center;\n  padding: 5px;\n}\n\nion-toolbar {\n  background-color: #7c68f8;\n}\n\n.common-icon {\n  color: #7c68f8;\n  font-weight: bold;\n}\n\n.icon_col {\n  margin: 2px 0px;\n  display: grid;\n  place-content: center;\n}\n\n.status {\n  padding: 3px 0px 3px 0px;\n  font-size: 12px;\n  margin: 5px 0;\n  background-color: #e2dddd;\n  border-radius: 11px;\n  float: right;\n  width: 65%;\n  text-align: center;\n}\n\n.header-company {\n  font-weight: bold;\n  padding: 8px 0px 8px 3px;\n  font-size: 13px;\n  color: black;\n}\n\n.align-dataCol {\n  padding-left: 5px;\n  font-family: sans-serif;\n  color: #848484;\n  font-size: 12px;\n}\n\n.underline {\n  font-size: 11px;\n  color: #656565;\n  position: relative;\n  font-weight: bold;\n}\n\n.underline:before {\n  margin: auto;\n  position: absolute;\n  content: \"\";\n  height: 2px;\n  bottom: 13px;\n  width: 13px;\n  left: 2px;\n}\n\n.image-size {\n  height: 35px;\n  width: 35px;\n  cursor: pointer;\n  display: inline-block;\n  margin: 5px;\n}\n\n.download-wrapper {\n  padding: 6px;\n  background: #eaeaea;\n}\n\n.download-wrapper:hover {\n  background-color: #f6f6f6;\n}\n\n.subscription-title {\n  font-size: 20px;\n}\n\n.pdf-wrapper, .excel-wrapper {\n  background: url('pdf.svg') no-repeat;\n  width: 30px;\n  height: 30px;\n}\n\n.excel-wrapper {\n  background: url('excelNew.svg') no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vc3Vic2NyaXB0aW9uL3N1YnNjcmlwdGlvbi1yZXBvcnQvRDpcXEFUUy1Gcm9udGVuZC1XZWItR2l0L3NyY1xcYXBwXFxkZWxhci1hcHBsaWNhdGlvblxcc3Vic2NyaXB0aW9uXFxzdWJzY3JpcHRpb24tcmVwb3J0XFxzdWJzY3JpcHRpb24tcmVwb3J0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9zdWJzY3JpcHRpb24vc3Vic2NyaXB0aW9uLXJlcG9ydC9zdWJzY3JpcHRpb24tcmVwb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csVUFBQTtBQ0NIOztBREVBO0VBQ0csYUFBQTtBQ0NIOztBREdBO0VBQ0csOEJBQUE7QUNBSDs7QURFQTtFQUNHLDhCQUFBO0FDQ0g7O0FEQ0E7RUFDRyxTQUFBO0VBQ0EsY0FBQTtBQ0VIOztBRENBO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQ0VGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBRENBO0VBQ0Usc0JBQUE7QUNFRjs7QURBQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNHRjs7QUREQTtFQUNFLHlCQUFBO0VBRUEsa0JBQUE7RUFDQSxZQUFBO0FDR0Y7O0FEREE7RUFDRSx5QkFBQTtBQ0lGOztBREZBO0VBRUUsY0FBQTtFQUdBLGlCQUFBO0FDRUY7O0FEQUE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FDR0Y7O0FERUE7RUFVRSx3QkFBQTtFQUNDLGVBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBRUEsa0JBQUE7QUNUSDs7QURXQTtFQUVFLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ1RGOztBRFdBO0VBQ0UsaUJBQUE7RUFDQSx1QkFBQTtFQUNDLGNBQUE7RUFDQSxlQUFBO0FDUkg7O0FEV0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNSRjs7QURXQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFFQSxTQUFBO0FDVEY7O0FEV0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUVBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUNURjs7QURXQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQ1JGOztBRFVBO0VBQ0MseUJBQUE7QUNQRDs7QURTQTtFQUNFLGVBQUE7QUNORjs7QURRQTtFQUNFLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNMRjs7QURRQTtFQUNFLHlDQUFBO0FDTEYiLCJmaWxlIjoic3JjL2FwcC9kZWxhci1hcHBsaWNhdGlvbi9zdWJzY3JpcHRpb24vc3Vic2NyaXB0aW9uLXJlcG9ydC9zdWJzY3JpcHRpb24tcmVwb3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZhbGlke1xyXG4gICBjb2xvcjogcmVkO1xyXG4gICBcclxufVxyXG4uaW5WYWxpZHtcclxuICAgY29sb3I6IG9yYW5nZTtcclxuICBcclxufVxyXG5cclxuLmluVmFsaWRCb3JkZXJ7XHJcbiAgIGJvcmRlci1sZWZ0OjNweCBzb2xpZCAjN2M2OGY4O1xyXG59XHJcbi52YWxpZEJvcmRlcntcclxuICAgYm9yZGVyLWxlZnQ6M3B4IHNvbGlkIzdjNjhmODtcclxufVxyXG4qeyBcclxuICAgbWFyZ2luOiAwO1xyXG4gICBwYWRkaW5nOiAwLjlweDtcclxufVxyXG5cclxuLmNhcmQtd3JhcHBlcntcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGluaXRpYWw7XHJcbiAgbWFyZ2luOjVweCAxMHB4O1xyXG4gIHBhZGRpbmc6IDFweCAwcHggMXB4IDRweDtcclxuXHJcbiAgLy8gY29sb3I6ICM3YzY4Zjg7XHJcbn1cclxuLml0ZW0tbmF0aXZlIHtcclxuICBwYWRkaW5nOjBweDtcclxufVxyXG4uc3ZnLXNpemUxe1xyXG4gIHdpZHRoOjI1cHggIWltcG9ydGFudDtcclxufVxyXG4uc3ZnLXNpemUyLC5zdmctc2l6ZTF7XHJcbiAgd2lkdGg6IDIxcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcclxuICBwYWRkaW5nOiAycHg7XHJcbn1cclxuLmNvbXBhbnlOYW1le1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwOWQ4YzU7XHJcbiAgLy8gY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuaW9uLXRvb2xiYXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojN2M2OGY4OyBcclxufVxyXG4uY29tbW9uLWljb257XHJcbiAgLy8gZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjN2M2OGY4O1xyXG4gIC8vIGJvcmRlcjoxcHggc29saWQgI2YxZjFmMTtcclxuICAvLyBwYWRkaW5nOiAycHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmljb25fY29se1xyXG4gIG1hcmdpbjoycHggMHB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xyXG4gIFxyXG59XHJcblxyXG5cclxuLnN0YXR1c3tcclxuICAvLyBwYWRkaW5nOiA0cHggMHB4IDRweCAzMHB4O1xyXG4gIC8vIGZvbnQtc2l6ZTogMTJweDtcclxuICAvLyBtYXJnaW46IDVweCAwO1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICAjYjNiM2IzO1xyXG4gIC8vIGJvcmRlci1yYWRpdXM6IDExcHg7XHJcbiAgXHJcbiAgLy8gZmxvYXQ6IHJpZ2h0O1xyXG4gIC8vIHdpZHRoOiA5OCU7XHJcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgI2IzYjNiMztcclxuICBwYWRkaW5nOiAzcHggMHB4IDNweCAwcHg7XHJcbiAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgbWFyZ2luOiA1cHggMDtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZGRkZDtcclxuICAgYm9yZGVyLXJhZGl1czogMTFweDtcclxuICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICB3aWR0aDogNjUlO1xyXG4gIC8vICBjb2xvcjogYmxhY2s7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaGVhZGVyLWNvbXBhbnl7XHJcbiAgLy9ib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y2ZjZmNjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nOiA4cHggMHB4IDhweCAzcHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4uYWxpZ24tZGF0YUNvbHtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgY29sb3I6ICM4NDg0ODQ7XHJcbiAgIGZvbnQtc2l6ZTogMTJweDtcclxuXHJcbn1cclxuLnVuZGVybGluZSB7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGNvbG9yOiAjNjU2NTY1O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufSAgIFxyXG5cclxuLnVuZGVybGluZTpiZWZvcmUge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBoZWlnaHQ6IDJweDtcclxuICBib3R0b206IDEzcHg7XHJcbiAgd2lkdGg6IDEzcHg7XHJcbiAgLy8gYmFja2dyb3VuZDojZmZkMzFhO1xyXG4gIGxlZnQ6IDJweDtcclxufVxyXG4uaW1hZ2Utc2l6ZSB7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIHdpZHRoOiAzNXB4O1xyXG4gIFxyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuLmRvd25sb2FkLXdyYXBwZXIge1xyXG4gIHBhZGRpbmc6IDZweDtcclxuICBiYWNrZ3JvdW5kOiAjZWFlYWVhO1xyXG59XHJcbi5kb3dubG9hZC13cmFwcGVyOmhvdmVye1xyXG4gYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxufVxyXG4uc3Vic2NyaXB0aW9uLXRpdGxle1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4ucGRmLXdyYXBwZXIsLmV4Y2VsLXdyYXBwZXJ7XHJcbiAgYmFja2dyb3VuZDp1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvcGRmLnN2Z1wiKW5vLXJlcGVhdDtcclxuICB3aWR0aDozMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuXHJcbn1cclxuLmV4Y2VsLXdyYXBwZXJ7XHJcbiAgYmFja2dyb3VuZDp1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvZXhjZWxOZXcuc3ZnXCIpbm8tcmVwZWF0O1xyXG59XHJcbiIsIi52YWxpZCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5pblZhbGlkIHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLmluVmFsaWRCb3JkZXIge1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICM3YzY4Zjg7XG59XG5cbi52YWxpZEJvcmRlciB7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzdjNjhmODtcbn1cblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMC45cHg7XG59XG5cbi5jYXJkLXdyYXBwZXIge1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiBpbml0aWFsO1xuICBtYXJnaW46IDVweCAxMHB4O1xuICBwYWRkaW5nOiAxcHggMHB4IDFweCA0cHg7XG59XG5cbi5pdGVtLW5hdGl2ZSB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLnN2Zy1zaXplMSB7XG4gIHdpZHRoOiAyNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zdmctc2l6ZTIsIC5zdmctc2l6ZTEge1xuICB3aWR0aDogMjFweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcbiAgcGFkZGluZzogMnB4O1xufVxuXG4uY29tcGFueU5hbWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDlkOGM1O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2M2OGY4O1xufVxuXG4uY29tbW9uLWljb24ge1xuICBjb2xvcjogIzdjNjhmODtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5pY29uX2NvbCB7XG4gIG1hcmdpbjogMnB4IDBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xufVxuXG4uc3RhdHVzIHtcbiAgcGFkZGluZzogM3B4IDBweCAzcHggMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbjogNXB4IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmRkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDExcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDY1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGVhZGVyLWNvbXBhbnkge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogOHB4IDBweCA4cHggM3B4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmFsaWduLWRhdGFDb2wge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjODQ4NDg0O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi51bmRlcmxpbmUge1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjNjU2NTY1O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udW5kZXJsaW5lOmJlZm9yZSB7XG4gIG1hcmdpbjogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDJweDtcbiAgYm90dG9tOiAxM3B4O1xuICB3aWR0aDogMTNweDtcbiAgbGVmdDogMnB4O1xufVxuXG4uaW1hZ2Utc2l6ZSB7XG4gIGhlaWdodDogMzVweDtcbiAgd2lkdGg6IDM1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDVweDtcbn1cblxuLmRvd25sb2FkLXdyYXBwZXIge1xuICBwYWRkaW5nOiA2cHg7XG4gIGJhY2tncm91bmQ6ICNlYWVhZWE7XG59XG5cbi5kb3dubG9hZC13cmFwcGVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbn1cblxuLnN1YnNjcmlwdGlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnBkZi13cmFwcGVyLCAuZXhjZWwtd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9wZGYuc3ZnXCIpIG5vLXJlcGVhdDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cblxuLmV4Y2VsLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvZXhjZWxOZXcuc3ZnXCIpIG5vLXJlcGVhdDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/delar-application/subscription/subscription-report/subscription-report.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/delar-application/subscription/subscription-report/subscription-report.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: SubscriptionReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionReportComponent", function() { return SubscriptionReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _renewal_renewal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../renewal/renewal.page */ "./src/app/delar-application/subscription/renewal/renewal.page.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
/* harmony import */ var _services_export_excel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/export-excel.service */ "./src/app/services/export-excel.service.ts");









let SubscriptionReportComponent = class SubscriptionReportComponent {
    constructor(ete, modalController, platform, commonService) {
        this.ete = ete;
        this.modalController = modalController;
        this.platform = platform;
        this.commonService = commonService;
        this.titles = 'jspdf-autotable-demo';
        this.title = 'angular-export-to-excel';
        this.head = ['SNo', 'Company ID', 'Vin', 'Plate No', 'Company Name', 'Initial Trans', 'Last Trans', 'Contact No', 'Email', 'Imei No', 'SimCard No', 'Status', 'Suffix', 'Warranty ExpiryDate'];
        this.subcription = [];
        this.count = 12;
        this.currentPage = 1;
        this.exportTitle = [];
        this.pdfdatas = [];
    }
    updateSubscription(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _renewal_renewal_page__WEBPACK_IMPORTED_MODULE_3__["RenewalPage"],
                cssClass: 'renewalPage',
                componentProps: {
                    value: data
                }
            });
            // modal.onDidDismiss().then(()=>{})
            return yield modal.present();
        });
    }
    exportToExcel() {
        let reportData = {
            title: 'Subscription',
            data: this.pdfdatas,
            headers: this.head
        };
        this.ete.exportExcel(reportData);
        console.log("Export Excel");
    }
    createPdf() {
        const doc = new jspdf__WEBPACK_IMPORTED_MODULE_6__["jsPDF"]('landscape', "px", 'a1');
        let imgdata = "data:image/png;base64, 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";
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        var currentToday = mm + '/' + dd + '/' + yyyy;
        doc.setFontSize(12);
        //let today = new Date().toTimeString;
        doc.text('Subscription List', 280, 20);
        doc.text(currentToday, 490, 20);
        doc.setFontSize(10);
        doc.addImage(imgdata, 'png', 30, 1, 55, 25);
        doc.setTextColor(100);
        //download Table------------->>>>>>>>>>
        doc.autoTable({
            head: [this.head],
            body: this.pdfdatas,
            theme: 'grid',
            didDrawCell: data => {
                console.log(this.exportTitle, "New Title");
            }
        });
        // Open PDF document in new tab
        // doc.output('dataurlnewwindow')
        //Download PDF document  
        doc.save('Subscription Report.pdf');
    }
    doInfinite(event) {
        var data = [];
        console.log("event trigger");
        setTimeout(() => {
            console.log(this.subcription);
            this.subcription.push(...this.showList.slice(this.currentPage * this.count, (this.currentPage + 1) * this.count));
            this.currentPage++;
            event.target.complete();
            // if (this.subcription.length == this.showList.length) {
            //   event.target.disabled = true;
            // }
            console.log("DISPLAY DATA----------------------\n");
        }, 500);
    }
    setDisplayData() {
        if (this.showList.length > this.count) {
            this.subcription = this.showList.slice(0, this.count);
        }
        else {
            this.subcription = this.showList;
        }
    }
    ionViewWillEnter() {
        this.showList = JSON.parse(localStorage.getItem('SubscriptionDatas'));
        this.setDisplayData();
        var resData = this.showList;
        this.pdfdatas = [];
        for (var i = 0; i < resData.length; i++) {
            this.pdfdatas.push([i + 1, this.showList[i]["companyId"], this.showList[i]["vin"], this.showList[i]["plateNo"], resData[i]["companyName"], resData[i]["initialTrans"], resData[i]["lastTrans"], resData[i]["contactNo"], resData[i]["email"], resData[i]["imeiNo"], resData[i]["simCardNo"], resData[i]["status"], resData[i]["suffix"], resData[i]["warrantyExpiryDate"]]);
        }
    }
    ngOnChanges() {
        // this.ionViewWillEnter()
        this.showList = JSON.parse(localStorage.getItem('SubscriptionDatas'));
        this.setDisplayData();
        var resData = this.showList;
        this.pdfdatas = [];
        for (var i = 0; i < resData.length; i++) {
            this.pdfdatas.push([i + 1, this.showList[i]["companyId"], this.showList[i]["vin"], this.showList[i]["plateNo"], resData[i]["companyName"], resData[i]["initialTrans"], resData[i]["lastTrans"], resData[i]["contactNo"], resData[i]["email"], resData[i]["imeiNo"], resData[i]["simCardNo"], resData[i]["status"], resData[i]["suffix"], resData[i]["warrantyExpiryDate"]]);
        }
    }
    ngOnInit() {
        this.myPlatform = this.platform.platforms()[0];
        if (this.myPlatform == 'tablet') {
            this.myPlatform = 'desktop';
        }
        this.showList = JSON.parse(localStorage.getItem('SubscriptionDatas'));
        this.setDisplayData();
        var resData = this.showList;
        this.pdfdatas = [];
        for (var i = 0; i < resData.length; i++) {
            this.pdfdatas.push([i + 1, this.showList[i]["companyId"], this.showList[i]["vin"], this.showList[i]["plateNo"], resData[i]["companyName"], resData[i]["initialTrans"], resData[i]["lastTrans"], resData[i]["contactNo"], resData[i]["email"], resData[i]["imeiNo"], resData[i]["simCardNo"], resData[i]["status"], resData[i]["suffix"], resData[i]["warrantyExpiryDate"]]);
        }
    }
};
SubscriptionReportComponent.ctorParameters = () => [
    { type: _services_export_excel_service__WEBPACK_IMPORTED_MODULE_7__["ExportExcelService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SubscriptionReportComponent.prototype, "reportData", void 0);
SubscriptionReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-subscription-report',
        template: __webpack_require__(/*! raw-loader!./subscription-report.component.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/subscription/subscription-report/subscription-report.component.html"),
        styles: [__webpack_require__(/*! ./subscription-report.component.scss */ "./src/app/delar-application/subscription/subscription-report/subscription-report.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_export_excel_service__WEBPACK_IMPORTED_MODULE_7__["ExportExcelService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]])
], SubscriptionReportComponent);



/***/ }),

/***/ "./src/app/delar-application/subscription/subscription-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/delar-application/subscription/subscription-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: SubscriptionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionPageRoutingModule", function() { return SubscriptionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _subscription_report_subscription_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subscription-report/subscription-report.component */ "./src/app/delar-application/subscription/subscription-report/subscription-report.component.ts");
/* harmony import */ var _subscription_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subscription.page */ "./src/app/delar-application/subscription/subscription.page.ts");





const routes = [
    {
        path: '',
        component: _subscription_page__WEBPACK_IMPORTED_MODULE_4__["SubscriptionPage"]
    },
    {
        path: 'renewal',
        loadChildren: () => Promise.all(/*! import() | renewal-renewal-module */[__webpack_require__.e("default~advanced-expense-maintenance-advanced-expense-maintenance-module~alerts-tab-alerts-tab-modul~e43080d9"), __webpack_require__.e("default~advanced-expense-maintenance-advanced-expense-maintenance-module~alerts-tab-alerts-tab-modul~63d3927b"), __webpack_require__.e("default~advanced-expense-maintenance-advanced-expense-maintenance-module~alerts-tab-alerts-tab-modul~df599c5c"), __webpack_require__.e("default~advanced-expense-maintenance-advanced-expense-maintenance-module~alerts-tab-alerts-tab-modul~32e20eb3"), __webpack_require__.e("default~advanced-expense-maintenance-advanced-expense-maintenance-module~alerts-tab-alerts-tab-modul~5433863e"), __webpack_require__.e("default~advanced-expense-maintenance-advanced-expense-maintenance-module~alerts-tab-alerts-tab-modul~5551ec55"), __webpack_require__.e("default~advanced-expense-maintenance-advanced-expense-maintenance-module~alerts-tab-alerts-tab-modul~d0083fca"), __webpack_require__.e("default~advanced-expense-maintenance-advanced-expense-maintenance-module~ais-dashboard-ais-dashboard~94cf38fc"), __webpack_require__.e("default~advanced-expense-maintenance-advanced-expense-maintenance-module~alerts-tab-alerts-tab-modul~f38f4418"), __webpack_require__.e("default~advanced-expense-maintenance-advanced-expense-maintenance-module~alerts-tab-alerts-tab-modul~d743b6f9"), __webpack_require__.e("common"), __webpack_require__.e("renewal-renewal-module")]).then(__webpack_require__.bind(null, /*! ./renewal/renewal.module */ "./src/app/delar-application/subscription/renewal/renewal.module.ts")).then(m => m.RenewalPageModule)
    }, {
        path: 'SusbscriptionReportComponent', component: _subscription_report_subscription_report_component__WEBPACK_IMPORTED_MODULE_3__["SubscriptionReportComponent"]
    }
];
let SubscriptionPageRoutingModule = class SubscriptionPageRoutingModule {
};
SubscriptionPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SubscriptionPageRoutingModule);



/***/ }),

/***/ "./src/app/delar-application/subscription/subscription.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/delar-application/subscription/subscription.module.ts ***!
  \***********************************************************************/
/*! exports provided: SubscriptionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionPageModule", function() { return SubscriptionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _subscription_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subscription-routing.module */ "./src/app/delar-application/subscription/subscription-routing.module.ts");
/* harmony import */ var _subscription_report_subscription_report_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subscription-report/subscription-report.component */ "./src/app/delar-application/subscription/subscription-report/subscription-report.component.ts");
/* harmony import */ var _subscription_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./subscription.page */ "./src/app/delar-application/subscription/subscription.page.ts");
/* harmony import */ var _subscription_renewal_renewal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../subscription/renewal/renewal.page */ "./src/app/delar-application/subscription/renewal/renewal.page.ts");









let SubscriptionPageModule = class SubscriptionPageModule {
};
SubscriptionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _subscription_routing_module__WEBPACK_IMPORTED_MODULE_5__["SubscriptionPageRoutingModule"]
        ],
        declarations: [_subscription_page__WEBPACK_IMPORTED_MODULE_7__["SubscriptionPage"], _subscription_report_subscription_report_component__WEBPACK_IMPORTED_MODULE_6__["SubscriptionReportComponent"], _subscription_renewal_renewal_page__WEBPACK_IMPORTED_MODULE_8__["RenewalPage"]],
        entryComponents: [_subscription_renewal_renewal_page__WEBPACK_IMPORTED_MODULE_8__["RenewalPage"]],
        exports: [_subscription_renewal_renewal_page__WEBPACK_IMPORTED_MODULE_8__["RenewalPage"]],
    })
], SubscriptionPageModule);



/***/ }),

/***/ "./src/app/delar-application/subscription/subscription.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/delar-application/subscription/subscription.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-size {\n  height: 35px;\n  width: 35px;\n  cursor: pointer;\n  display: inline-block;\n  margin: 5px;\n}\n\n.download-wrapper {\n  padding: 6px;\n  background: #eaeaea;\n}\n\n.download-wrapper:hover {\n  background-color: #f6f6f6;\n}\n\n.subscription-title {\n  font-size: 20px;\n}\n\n.lable {\n  margin-left: 3px;\n}\n\n.radioGroup {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-top: 20px;\n}\n\n.buttonWidth {\n  width: 34%;\n  margin: auto;\n  height: 30px;\n  --ion-color-primary: #7c68f8;\n}\n\n.reportInfo {\n  color: #000000;\n  font-size: 12px;\n  font-family: sans-serif;\n}\n\nion-radio {\n  --color-checked: #7c68f8;\n}\n\n.days {\n  font-size: 10px;\n  padding-left: 3px;\n}\n\n.desktopDays {\n  display: grid;\n  place-content: center;\n  font-size: 50px;\n}\n\n.radio-item {\n  display: inline-block !important;\n  width: 20%;\n}\n\n.paddingBottom10px {\n  padding-bottom: 4px;\n}\n\n.padding25px {\n  padding: 20px;\n}\n\n.buttonWidth {\n  width: 50%;\n  height: 30px;\n  --ion-color-primary: #7c68f8;\n}\n\n.datetime {\n  background-color: #e8e8e8;\n  color: #676464;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vc3Vic2NyaXB0aW9uL0Q6XFxBVFMtRnJvbnRlbmQtV2ViLUdpdC9zcmNcXGFwcFxcZGVsYXItYXBwbGljYXRpb25cXHN1YnNjcmlwdGlvblxcc3Vic2NyaXB0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vc3Vic2NyaXB0aW9uL3N1YnNjcmlwdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUVBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUNBSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQ0NKOztBRENBO0VBQ0kseUJBQUE7QUNFSjs7QURBQTtFQUNJLGVBQUE7QUNHSjs7QUREQTtFQUNJLGdCQUFBO0FDSUo7O0FERkE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGdCQUFBO0FDS0o7O0FESEE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtBQ01KOztBREpBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQ09KOztBRExBO0VBQ0ksd0JBQUE7QUNRSjs7QUROQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ1NKOztBREpBO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ09KOztBREhBO0VBQ0ksZ0NBQUE7RUFDQSxVQUFBO0FDTUo7O0FESkE7RUFDSSxtQkFBQTtBQ09KOztBREhBO0VBQ0ksYUFBQTtBQ01KOztBREhBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtBQ01KOztBREhBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ01KIiwiZmlsZSI6InNyYy9hcHAvZGVsYXItYXBwbGljYXRpb24vc3Vic2NyaXB0aW9uL3N1YnNjcmlwdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2Utc2l6ZSB7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB3aWR0aDogMzVweDtcclxuXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDVweDtcclxufVxyXG4uZG93bmxvYWQtd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWFlYWVhO1xyXG59XHJcbi5kb3dubG9hZC13cmFwcGVyOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbn1cclxuLnN1YnNjcmlwdGlvbi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLmxhYmxle1xyXG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcclxufVxyXG4ucmFkaW9Hcm91cHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5idXR0b25XaWR0aCB7XHJcbiAgICB3aWR0aDogMzQlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgLS1pb24tY29sb3ItcHJpbWFyeTogIzdjNjhmODtcclxufVxyXG4ucmVwb3J0SW5mbyB7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG59XHJcbmlvbi1yYWRpbyB7XHJcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICM3YzY4Zjg7XHJcbn1cclxuLmRheXMge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OjNweDtcclxuIFxyXG59XHJcblxyXG5cclxuLmRlc2t0b3BEYXlze1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuXHJcbn1cclxuXHJcbi5yYWRpby1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDIwJTtcclxufVxyXG4ucGFkZGluZ0JvdHRvbTEwcHgge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcclxufVxyXG5cclxuXHJcbi5wYWRkaW5nMjVweCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uV2lkdGgge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIC0taW9uLWNvbG9yLXByaW1hcnk6ICM3YzY4Zjg7XHJcbn1cclxuXHJcbi5kYXRldGltZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xyXG4gICAgY29sb3I6ICM2NzY0NjQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSIsIi5pbWFnZS1zaXplIHtcbiAgaGVpZ2h0OiAzNXB4O1xuICB3aWR0aDogMzVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uZG93bmxvYWQtd3JhcHBlciB7XG4gIHBhZGRpbmc6IDZweDtcbiAgYmFja2dyb3VuZDogI2VhZWFlYTtcbn1cblxuLmRvd25sb2FkLXdyYXBwZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xufVxuXG4uc3Vic2NyaXB0aW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ubGFibGUge1xuICBtYXJnaW4tbGVmdDogM3B4O1xufVxuXG4ucmFkaW9Hcm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uYnV0dG9uV2lkdGgge1xuICB3aWR0aDogMzQlO1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogMzBweDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeTogIzdjNjhmODtcbn1cblxuLnJlcG9ydEluZm8ge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cblxuaW9uLXJhZGlvIHtcbiAgLS1jb2xvci1jaGVja2VkOiAjN2M2OGY4O1xufVxuXG4uZGF5cyB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XG59XG5cbi5kZXNrdG9wRGF5cyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiA1MHB4O1xufVxuXG4ucmFkaW8taXRlbSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICB3aWR0aDogMjAlO1xufVxuXG4ucGFkZGluZ0JvdHRvbTEwcHgge1xuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xufVxuXG4ucGFkZGluZzI1cHgge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uYnV0dG9uV2lkdGgge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICM3YzY4Zjg7XG59XG5cbi5kYXRldGltZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XG4gIGNvbG9yOiAjNjc2NDY0O1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/delar-application/subscription/subscription.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/delar-application/subscription/subscription.page.ts ***!
  \*********************************************************************/
/*! exports provided: SubscriptionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionPage", function() { return SubscriptionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_export_excel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/export-excel.service */ "./src/app/services/export-excel.service.ts");
/* harmony import */ var _services_ajax_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/ajax.service */ "./src/app/services/ajax.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_countries_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/countries.service */ "./src/app/services/countries.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");










let SubscriptionPage = class SubscriptionPage {
    constructor(commonService, ajaxService, countries, router, modalController, ete, platform) {
        this.commonService = commonService;
        this.ajaxService = ajaxService;
        this.countries = countries;
        this.router = router;
        this.modalController = modalController;
        this.ete = ete;
        this.platform = platform;
        this.today = new Date();
        this.subscription = {
            fromDate: "",
            toDate: ""
        };
        this.subscriptionDays = [{ days: 45 }, { days: 30 }, { days: 15 }];
        this.exportTitle = [];
        this.pdfdatas = [];
    }
    getExpriyDates() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["serverUrl"].web + '/login/getPreferences?key=subcriptionDropdown&companyId=""';
        this.ajaxService.ajaxGet(url).subscribe(res => {
            console.log(res);
            this.subscriptionDates = res;
        });
    }
    closeModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.modalController.dismiss();
            this.router.navigateByUrl('/dashboard');
        });
    }
    submit() {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["serverUrl"].web + '/global/getExpiryList';
        let jsonData = {
            "fromExpiryDate": this.subscription.fromDate.split("T")[0],
            "toExpiryDate": this.subscription.toDate.split("T")[0],
            "suffix": localStorage.getItem('companySuffix')
        };
        this.ajaxService.ajaxPostWithBody(url, jsonData).subscribe(res => {
            localStorage.setItem('SubscriptionDatas', JSON.stringify(res));
            // if (res.length != 0)
            //   this.commonService.presentToast("Nodata found!")
            // else
            //   this.reportData = res
            if (res.length != 0)
                this.reportData = res;
            else
                this.commonService.presentToast("Nodata found!");
            if (this.commonService.isLoading)
                this.commonService.dismissLoader();
        });
    }
    addDays(dateObj, numDays) {
        dateObj.setDate(dateObj.getDate() + numDays);
        console.log(dateObj);
        var month = (dateObj.getMonth() + 1) + '';
        const date = dateObj.getDate() + '';
        const year = dateObj.getFullYear() + '';
        var expiryDate = year + '-' + month + '-' + date;
        return expiryDate;
    }
    subscriptionData(ev) {
        let data = Number(ev.detail.value);
        var t = new Date();
        let currentmonth = t.getMonth() + 1;
        let todayDate = t.getFullYear() + '-' + currentmonth + '-' + t.getDate();
        t.setDate(t.getDate() + data);
        var month = "0" + (t.getMonth() + 1);
        var date = "0" + t.getDate();
        month = month.slice(-2);
        date = date.slice(-2);
        var date = t.getFullYear() + '-' + month + '-' + date;
        //console.log(date);
        if (ev.detail.value) {
            this.subscription.fromDate = todayDate,
                this.subscription.toDate = date;
            if (this.reportData.length > 0) {
                this.submit();
            }
        }
    }
    ngOnInit() {
        // this.getExpriyDates();
        var today = new Date();
        var first_date = today.getFullYear() + "-";
        first_date += (today.getMonth() + 1 < 10 ? "0" + (today.getMonth() + 1).toString() : (today.getMonth() + 1).toString()) + "-";
        first_date += "01";
        console.log(first_date);
        var last_date = today.getFullYear() + "-";
        last_date += (today.getMonth() + 1 < 10 ? "0" + (today.getMonth() + 1).toString() : (today.getMonth() + 1).toString()) + "-";
        last_date += new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
        console.log("<br>" + last_date);
        this.subscription.fromDate = first_date;
        this.subscription.toDate = last_date;
        if (this.myPlatform == 'tablet') {
            this.myPlatform = 'desktop';
        }
    }
};
SubscriptionPage.ctorParameters = () => [
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
    { type: _services_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"] },
    { type: _services_countries_service__WEBPACK_IMPORTED_MODULE_8__["CountriesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _services_export_excel_service__WEBPACK_IMPORTED_MODULE_5__["ExportExcelService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
];
SubscriptionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-subscription',
        template: __webpack_require__(/*! raw-loader!./subscription.page.html */ "./node_modules/raw-loader/index.js!./src/app/delar-application/subscription/subscription.page.html"),
        styles: [__webpack_require__(/*! ./subscription.page.scss */ "./src/app/delar-application/subscription/subscription.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
        _services_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"],
        _services_countries_service__WEBPACK_IMPORTED_MODULE_8__["CountriesService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _services_export_excel_service__WEBPACK_IMPORTED_MODULE_5__["ExportExcelService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
], SubscriptionPage);



/***/ })

}]);
//# sourceMappingURL=subscription-subscription-module-es2015.js.map