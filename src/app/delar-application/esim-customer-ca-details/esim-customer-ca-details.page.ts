import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {
  AlertController,
  IonContent,
  ModalController,
  Platform,
} from "@ionic/angular";
import { IonicSelectableComponent } from "ionic-selectable";
import { jqxGridComponent } from "jqwidgets-ng/jqxgrid";
import { AjaxService } from "src/app/services/ajax.service";
import { CommonService } from "src/app/services/common.service";
import { ExportExcelService } from "src/app/services/export-excel.service";
import { serverUrl } from "src/environments/environment";
import { AssignDealerComponent } from "./assign-dealer/assign-dealer.component";
import { CertificateCreationComponent } from "./certificate-creation/certificate-creation.component";
import { CommentComponent } from "./comment/comment.component";
import { CompanyCreationComponent } from "./company-creation/company-creation.component";
import { ConfirmPopupComponent } from "./confirm-popup/confirm-popup.component";
import { CustomerRenewalRequestComponent } from "./customer-renewal-request/customer-renewal-request.component";
import { DealerDetailsComponent } from "./dealer-details/dealer-details.component";
import { EndUserCreationComponent } from "./end-user-creation/end-user-creation.component";
import { EsimTopupPopupComponent } from "./esim-topup-popup/esim-topup-popup.component";
import { RequestPageComponent } from "./request-page/request-page.component";
import { StatusDetailsComponent } from "./status-details/status-details.component";
import { GenerateInvoiceComponent } from "./generate-invoice/generate-invoice.component";
import { CursorError } from "@angular/compiler/src/ml_parser/lexer";

@Component({
  selector: "app-esim-customer-ca-details",
  templateUrl: "./esim-customer-ca-details.page.html",
  styleUrls: ["./esim-customer-ca-details.page.scss"],
})
export class EsimCustomerCaDetailsPage implements OnInit {
  @ViewChild("myGrid", { static: false }) myGrid: any;
  columns: any;
  data: any = "";
  source: { localdata: any };
  dataAdapter: any;
  renderer: (row: number, column: any, value: string) => string;
  myPlatform: any;
  selectedRow: any = [];
  tableData: any;
  color;
  show: boolean = false;
  renewalbutton: boolean = true;
  rowColor;
  respone: any;
  companyId = localStorage.getItem("userName");
  result: any;
  TotalcertificateData: any = {};
  Apmlogo =
    "data:image/png;base64,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";
  panic: any;
  values: any;
  arrow = false;
  invoicedata: any[];
  currentdate: any;
  zohocount: any;
  imei: any;
  header: any;
  abnb: any;

  constructor(
    private platform: Platform,
    private formBuilder: FormBuilder,
    private modalController: ModalController,
    private ajaxService: AjaxService,
    private commonService: CommonService,
    private ete: ExportExcelService,
    private alertController: AlertController
  ) {}
  ngOnInit(): void {
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear() + "-" + month + "-" + day;
    this.currentdate = today;
  }

  @ViewChild(IonContent, { static: false }) content: any;

  scrollToTop() {
    this.content.scrollToTop(500);
  }

  scrollToBottom() {
    this.content.scrollToBottom(500);
  }

  logScrolling(ev) {
    if (ev.detail.scrollTop > 2) {
      this.arrow = true;
    }
    if (ev.detail.scrollTop < 2) {
      this.arrow = false;
    }
  }

  async assigndealer() {
    let selectdata = this.myGrid.getselectedrowindexes();
    let arr = [];
    for (let i = 0; i < selectdata.length; i++) {
      arr.push({
        imei: this.myGrid["attrSource"]["originaldata"][selectdata[i]].imei,
      });
    }

    const modal = await this.modalController.create({
      component: AssignDealerComponent,
      cssClass: "simupdateform",
      componentProps: {
        value: arr,
      },
    });
    modal.onDidDismiss().then((data) => {
      if (data.data == "Stock Assigned Successfully") {
        this.show = false;
        this.data = data.data.data;
        this.getdatas(1);
      }
    });
    await modal.present();
  }

  // Bulk Renewal Request

  async customerrenewalrequest() {
    const modal = await this.modalController.create({
      component: CustomerRenewalRequestComponent,
      cssClass: "renewalrequest",
      componentProps: {},
    });
    modal.onDidDismiss().then((data) => {
      if (data.data.data == "Renewal Request Saved Successfully") {
        this.show = false;
        this.imei = data.data.imei;
        this.bulkconfirmModel();
      }
    });
    return await modal.present();
  }

  async bulkconfirmModel() {
    if (this.companyId == "apm-sa") {
      const alert = await this.alertController.create({
        header: "Message",
        backdropDismiss: false,
        message: "Renewal Request Saved Successfully",
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
            handler: (data) => {
              this.getdatas();
              this.myGrid.clearselection();
              this.selectedRow = "";
            },
          },
          {
            text: "Ok",
            handler: (data) => {
              this.bukinvoicepop();
            },
          },
        ],
      });
      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: "Message",
        backdropDismiss: false,
        message: "Renewal Request Saved Successfully",
        buttons: [
          {
            text: "Ok",
            handler: (data) => {
              this.getdatas();
              this.myGrid.clearselection();
              this.selectedRow = "";
            },
          },
        ],
      });
      await alert.present();
    }
  }

  bukinvoicepop() {
    if (this.zohocount != 0) {
      let selectdata = this.imei;
      let arr = [];
      for (let i = 0; i < selectdata.length; i++) {
        arr.push({
          imei: selectdata[i].imei,
          renewalno: "1",
        });
      }
      var data;
      data = {
        headerid: "",
        dealerid: localStorage.getItem("companyId"),
        invoiceno: "",
        invoicedate: this.currentdate,
        invoiceamount: "",
        noofunits: selectdata.length,
        imeinos: arr,
        createdby: localStorage.getItem("userName"),
      };
      this.header = data;
      this.commonService.presentLoader();
      const url = serverUrl.web + "/esim/getrenewalzohobookproductdetails";
      this.ajaxService.ajaxPostWithBody(url, data).subscribe((res) => {
        this.commonService.dismissLoader();
        if (Array.isArray(res)) {
          this.invoicedata = res;
          this.bulkinvoice();
        } else if (res.message) {
          this.commonService.showConfirm(res.message);
        }
      });
    } else {
      this.getdatas();
      this.myGrid.clearselection();
      this.selectedRow = "";
    }
  }

  async bulkinvoice() {
    const modal = await this.modalController.create({
      component: GenerateInvoiceComponent,
      cssClass: "invoiceform",
      componentProps: {
        value: this.invoicedata,
        head: this.header,
        buttonname: "Renewal",
      },
      backdropDismiss: false,
    });

    modal.onDidDismiss().then((data) => {
      if (data.data.data == "Invoice Details Saved Successfully") {
        this.getdatas();
        this.commonService.showConfirm("Invoice Details Saved Successfully");
      }
    });
    return await modal.present();
  }

  // Extend For One Year

  async requestoneyearModel() {
    const alert = await this.alertController.create({
      header: "Confirm",
      backdropDismiss: false,
      message: "Are you sure you want to Extend 1 Year ?",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: (data) => {},
        },
        {
          text: "Ok",
          handler: (data) => {
            this.requestForoneyeartop();
          },
        },
      ],
    });
    await alert.present();
  }

  requestForoneyeartop() {
    this.commonService.presentLoader();
    let selectdata = this.myGrid.getselectedrowindexes();
    let arr = [];

    let isSameDealerId = true; // Assume all dealerids are the same initially

    if (selectdata.length > 1) {
      // Check dealerid equality only if there are multiple selected rows
      for (let i = 1; i < selectdata.length; i++) {
        if (
          this.myGrid["attrSource"]["originaldata"][selectdata[i]].dealerid !=
          this.myGrid["attrSource"]["originaldata"][selectdata[0]].dealerid
        ) {
          isSameDealerId = false; // Not all dealerids are the same
          break; // Exit the loop early as there's no need to check further
        }
      }
    }

    if (isSameDealerId && selectdata.length > 0) {
      // Continue and hit the API only when all dealerids are the same and at least one item is selected
      for (let i = 0; i < selectdata.length; i++) {
        arr.push({
          extendoneyearrequestid: "",
          iccidno1:
            this.myGrid["attrSource"]["originaldata"][selectdata[i]].iccidno1,
          iccidno2:
            this.myGrid["attrSource"]["originaldata"][selectdata[i]].iccidno2,
          vltdsno:
            this.myGrid["attrSource"]["originaldata"][selectdata[i]].vltdsno,
          imei: this.myGrid["attrSource"]["originaldata"][selectdata[i]].imei,
          extendoneyearrequestdate: "",
          extendoneyearvalidity: "1 Year",
          createdby: localStorage.getItem("userName"),
          createddate: "",
          updatedby: localStorage.getItem("userName"),
          updateddate: "",
        });
      }

      this.commonService.dismissLoader();
      const url =
        serverUrl.web +
        "/esim/saveEsimExtendOneYearRequest?companyid=apm&dealerid=" +
        localStorage.getItem("userName");
      this.ajaxService.ajaxPostWithBody(url, arr).subscribe((res) => {
        this.commonService.dismissLoader();
        if (res.message == "Extend One Year Request Saved Successfully") {
          this.extendconfirmModel();
        } else {
          this.commonService.showConfirm(res.message);
        }
      });
    } else {
      this.commonService.dismissLoader();
      this.commonService.showConfirm(
        "The Selected Imei has been different Dealer ID, Kindly Select the Same Dealer ID"
      );
    }
  }

  async extendconfirmModel() {
    if (this.companyId == "apm-sa") {
      const alert = await this.alertController.create({
        header: "Message",
        backdropDismiss: false,
        message: "Extend One Year Request Saved Successfully",
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
            handler: (data) => {
              this.getdatas();
              this.myGrid.clearselection();
              this.selectedRow = "";
            },
          },
          {
            text: "Ok",
            handler: (data) => {
              this.invoicepop();
            },
          },
        ],
      });
      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: "Message",
        backdropDismiss: false,
        message: "Extend One Year Request Saved Successfully",
        buttons: [
          {
            text: "Ok",
            handler: (data) => {
              this.getdatas();
              this.myGrid.clearselection();
              this.selectedRow = "";
            },
          },
        ],
      });
      await alert.present();
    }
  }

  invoicepop() {
    if (this.zohocount != 0) {
      let selectdata = this.myGrid.getselectedrowindexes();
      let arr = [];
      for (let i = 0; i < selectdata.length; i++) {
        arr.push({
          imei: this.myGrid["attrSource"]["originaldata"][selectdata[i]].imei,
        });
      }
      var data;
      data = {
        headerid: "",
        dealerid:
          this.myGrid["attrSource"]["originaldata"][selectdata[0]].dealerid,
        invoiceno: "",
        invoicedate: this.currentdate,
        invoiceamount: "",
        noofunits: selectdata.length,
        imeinos: arr,
        createdby: localStorage.getItem("userName"),
      };
      this.header = data;
      this.commonService.presentLoader();
      const url =
        serverUrl.web + "/esim/getextendoneyearzohobookproductdetails";
      this.ajaxService.ajaxPostWithBody(url, data).subscribe((res) => {
        this.commonService.dismissLoader();
        if (Array.isArray(res)) {
          this.invoicedata = res;
          this.invoice();
        } else if (res.message) {
          this.commonService.showConfirm(res.message);
        }
      });
    } else {
      this.getdatas();
      this.myGrid.clearselection();
      this.selectedRow = "";
    }
  }

  async invoice() {
    const modal = await this.modalController.create({
      component: GenerateInvoiceComponent,
      cssClass: "invoiceform",
      componentProps: {
        value: this.invoicedata,
        head: this.header,
        buttonname: "Extend",
      },
      backdropDismiss: false,
    });

    modal.onDidDismiss().then((data) => {
      if (data.data.data == "refresh") {
        this.getdatas();
      } else if (data.data.data == "Invoice Details Saved Successfully") {
        this.getdatas();
        this.commonService.showConfirm("Invoice Details Saved Successfully");
      }
    });
    return await modal.present();
  }

  // Topup Request

  TopupCheck() {
    let selectdata = this.myGrid.getselectedrowindexes();
    let arr = [];
    for (let i = 0; i < selectdata.length; i++) {
      arr.push({
        imei: this.myGrid["attrSource"]["originaldata"][selectdata[i]].imei,
      });
    }
    const url = serverUrl.web + "/esim/saveEsimTopupCheck";
    this.ajaxService.ajaxPostWithBody(url, arr).subscribe((res) => {
      if (res.message == "Success") {
        this.requestForTopUp();
      } else {
        this.commonService.showConfirm(res.message);
      }
    });
  }

  async requestForTopUp() {
    let selectdata = this.myGrid.getselectedrowindexes();
    let arr = [];
    for (let i = 0; i < selectdata.length; i++) {
      arr.push({
        topuprequestid: "",
        iccidno1:
          this.myGrid["attrSource"]["originaldata"][selectdata[i]].iccidno1,
        iccidno2:
          this.myGrid["attrSource"]["originaldata"][selectdata[i]].iccidno2,
        vltdsno:
          this.myGrid["attrSource"]["originaldata"][selectdata[i]].vltdsno,
        imei: this.myGrid["attrSource"]["originaldata"][selectdata[i]].imei,
        topuprequestdate: "",
        createdby: localStorage.getItem("userName").toString(),
        createddate: null,
        updatedby: localStorage.getItem("userName").toString(),
        updateddate: null,
      });
    }
    const modal = await this.modalController.create({
      component: EsimTopupPopupComponent,
      cssClass: "validityform",
      componentProps: {
        value: arr,
      },
    });
    modal.onDidDismiss().then((data) => {
      if (data.data.data == "Topup Request Saved Successfully") {
        this.show = false;
        this.data = data.data.data;
        this.topupconfirmModel();
      }
    });
    return await modal.present();
  }

  async topupconfirmModel() {
    if (this.companyId == "apm-sa") {
      const alert = await this.alertController.create({
        header: "Message",
        backdropDismiss: false,
        message: "Topup Request Saved Successfully",
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
            handler: (data) => {
              this.getdatas();
              this.myGrid.clearselection();
              this.selectedRow = "";
            },
          },
          {
            text: "Ok",
            handler: (data) => {
              this.topupinvoicepop();
            },
          },
        ],
      });
      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: "Message",
        backdropDismiss: false,
        message: "Topup Request Saved Successfully",
        buttons: [
          {
            text: "Ok",
            handler: (data) => {
              this.getdatas();
              this.myGrid.clearselection();
              this.selectedRow = "";
            },
          },
        ],
      });
      await alert.present();
    }
  }

  topupinvoicepop() {
    if (this.zohocount != 0) {
      let selectdata = this.myGrid.getselectedrowindexes();
      let arr = [];
      for (let i = 0; i < selectdata.length; i++) {
        arr.push({
          imei: this.myGrid["attrSource"]["originaldata"][selectdata[i]].imei,
        });
      }
      var data;
      data = {
        headerid: "",
        dealerid:
          this.myGrid["attrSource"]["originaldata"][selectdata[0]].dealerid,
        invoiceno: "",
        invoicedate: this.currentdate,
        invoiceamount: "",
        noofunits: selectdata.length,
        imeinos: arr,
        createdby: localStorage.getItem("userName"),
      };
      this.header = data;
      this.commonService.presentLoader();
      const url = serverUrl.web + "/esim/gettopupzohobookproductdetails";
      this.ajaxService.ajaxPostWithBody(url, data).subscribe((res) => {
        this.commonService.dismissLoader();
        if (Array.isArray(res)) {
          this.invoicedata = res;
          this.topupinvoice();
        } else if (res.message) {
          this.commonService.showConfirm(res.message);
        }
      });
    } else {
      this.getdatas();
      this.myGrid.clearselection();
      this.selectedRow = "";
    }
  }

  async topupinvoice() {
    const modal = await this.modalController.create({
      component: GenerateInvoiceComponent,
      cssClass: "invoiceform",
      componentProps: {
        value: this.invoicedata,
        head: this.header,
        buttonname: "Topup",
      },
      backdropDismiss: false,
    });
    modal.onDidDismiss().then((data) => {
      if (data.data.data == "refresh") {
        this.getdatas();
      } else if (data.data.data == "Invoice Details Saved Successfully") {
        this.getdatas();
        this.commonService.showConfirm("Invoice Details Saved Successfully");
      }
    });
    return await modal.present();
  }

  // Renewal Request

  async requestMethod() {
    let selectdata = this.myGrid.getselectedrowindexes();
    let arr = [];
    for (let i = 0; i < selectdata.length; i++) {
      arr.push({
        renewalrequestid: "",
        iccidno1:
          this.myGrid["attrSource"]["originaldata"][selectdata[i]].iccidno1,
        iccidno2:
          this.myGrid["attrSource"]["originaldata"][selectdata[i]].iccidno2,
        vltdsno:
          this.myGrid["attrSource"]["originaldata"][selectdata[i]].vltdsno,
        imei: this.myGrid["attrSource"]["originaldata"][selectdata[i]].imei,
        renewalrequestdate: "",
        createdby:
          this.myGrid["attrSource"]["originaldata"][selectdata[i]].createdby,
        createddate: null,
        updatedby:
          this.myGrid["attrSource"]["originaldata"][selectdata[i]].createdby,
        updateddate: null,
      });
    }
    const modal = await this.modalController.create({
      component: RequestPageComponent,
      cssClass: "validityform",
      componentProps: {
        value: arr,
      },
    });
    modal.onDidDismiss().then((data) => {
      if (data.data.data == "Renewal Request Saved Successfully") {
        this.show = false;
        this.renewalconfirmModel();
      }
    });
    return await modal.present();
  }

  async renewalconfirmModel() {
    if (this.companyId == "apm-sa") {
      const alert = await this.alertController.create({
        header: "Message",
        backdropDismiss: false,
        message: "Renewal Request Saved Successfully",
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
            handler: (data) => {
              this.getdatas();
              this.myGrid.clearselection();
              this.selectedRow = "";
            },
          },
          {
            text: "Ok",
            handler: (data) => {
              this.renewalinvoicepop();
            },
          },
        ],
      });
      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: "Message",
        backdropDismiss: false,
        message: "Renewal Request Saved Successfully",
        buttons: [
          {
            text: "Ok",
            handler: (data) => {
              this.getdatas();
              this.myGrid.clearselection();
              this.selectedRow = "";
            },
          },
        ],
      });
      await alert.present();
    }
  }

  renewalinvoicepop() {
    if (this.zohocount != 0) {
      let selectdata = this.myGrid.getselectedrowindexes();
      let arr = [];
      for (let i = 0; i < selectdata.length; i++) {
        arr.push({
          imei: this.myGrid["attrSource"]["originaldata"][selectdata[i]].imei,
          renewalno: "1",
        });
      }
      var data;
      data = {
        headerid: "",
        dealerid:
          this.myGrid["attrSource"]["originaldata"][selectdata[0]].dealerid,
        invoiceno: "",
        invoicedate: this.currentdate,
        invoiceamount: "",
        noofunits: selectdata.length,
        imeinos: arr,
        createdby: localStorage.getItem("userName"),
      };
      this.header = data;
      this.commonService.presentLoader();
      const url = serverUrl.web + "/esim/getrenewalzohobookproductdetails";
      this.ajaxService.ajaxPostWithBody(url, data).subscribe((res) => {
        this.commonService.dismissLoader();
        if (Array.isArray(res)) {
          this.invoicedata = res;
          this.renewalinvoice();
        } else if (res.message) {
          this.commonService.showConfirm(res.message);
        }
      });
    } else {
      this.getdatas();
      this.myGrid.clearselection();
      this.selectedRow = "";
    }
  }

  async renewalinvoice() {
    const modal = await this.modalController.create({
      component: GenerateInvoiceComponent,
      cssClass: "invoiceform",
      componentProps: {
        value: this.invoicedata,
        head: this.header,
        buttonname: "Renewal",
      },
      backdropDismiss: false,
    });
    modal.onDidDismiss().then((data) => {
      if (data.data.data == "refresh") {
        this.getdatas();
      } else if (data.data.data == "Invoice Details Saved Successfully") {
        this.getdatas();
        this.commonService.showConfirm("Invoice Details Saved Successfully");
      }
    });
    return await modal.present();
  }

  customFilter(c) {
    this.color = c;
    if (this.color != undefined) {
      this.getdatas();
    }
  }
  getdatas(d?) {
    this.commonService.presentLoader();
    var url =
      serverUrl.web +
      "/esim/getDealerCAStatusAll?companyid=" +
      localStorage.getItem("corpId") +
      "&invoiceno=" +
      "&serialno=" +
      "&dealer=" +
      localStorage.getItem("userName");
    this.ajaxService.ajaxGet(url).subscribe((res) => {
      if (d == 1) {
        this.commonService.showConfirm(this.data);
        this.data = undefined;
      }

      if (this.color != undefined) {
        var fData = res.filter((d) => {
          return d.rowcolor == this.color;
        });
        this.tableData = fData;
        this.color = undefined;
      } else {
        this.tableData = res;
      }

      this.commonService.dismissLoader();
      this.renderer = (row: number, column: any, value: string) => {
        const data = this.myGrid.getrowdata(row);

        this.rowColor = data.rowcolor;

        if (value == "" || null || undefined || value == ",") {
          if (this.rowColor == "orange") {
            var val = "background-color : orange";
            var col = "white;";
          }
          if (this.rowColor == null) {
            var col = "darkblue";
          }

          if (this.rowColor == "yellow") {
            var col = "darkblue;";
            var val = "background-color : yellow";
          }
          if (this.rowColor == "red") {
            var col = "white;";
            var val = "background-color : red";
          }
          if (this.rowColor == "blue") {
            var col = "white;";
            var val = "background-color : blue";
          }
          return (
            '<div style="height:100%;font-size:11px;color:' +
            col +
            "margin:auto;" +
            "padding:10px;" +
            "" +
            val +
            '">' +
            "--" +
            "</div>"
          );
        } else {
          if (this.rowColor == "orange") {
            var col = "white;";
            var val = "background-color : orange";
          }
          if (this.rowColor == null) {
            var col = "darkblue";
          }
          if (this.rowColor == "yellow") {
            var col = "darkblue;";
            var val = "background-color : yellow";
          }
          if (this.rowColor == "red") {
            var col = "white;";
            var val = "background-color : red";
          }
          if (this.rowColor == "blue") {
            var col = "white;";
            var val = "background-color : blue";
          }
          return (
            '<div style="height:100%;font-size:11px;color:' +
            col +
            ";margin:auto;" +
            "padding:10px;" +
            "" +
            val +
            '">' +
            value +
            "</div>"
          );
        }
      };

      //   if (value == "" || null || undefined) {
      //     return (
      //       '<span style="line-height:32px;font-size:11px;color:darkblue;margin:auto;">' +
      //       "--" +
      //       "</span>"
      //     );
      //   } else {
      //     return (
      //       '<span  style="line-height:32px;font-size:11px;color:darkblue;margin:auto;padding:0px 5px">' +
      //       value +
      //       "</span>"
      //     );
      //   }
      // };
      this.source = { localdata: this.tableData };
      this.dataAdapter = new jqx.dataAdapter(this.source);
      this.myGrid.horizontalscrollbarstep(["100"]);
      this.myGrid.pagesizeoptions(["100", "200", "500", "1000"]);
      this.myGrid.clearselection();
      this.columns = [
        {
          text: "VLTD No",
          datafield: "vltdsno",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 140,
        },
        {
          text: "Box No",
          datafield: "serialno",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 140,
        },
        {
          text: "Invoice No",
          datafield: "invoiceno",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 140,
        },
        {
          text: "ICCID No 1",
          datafield: "iccidno1",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 140,
        },
        {
          text: "ICCID No 2",
          datafield: "iccidno2",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 140,
        },

        {
          text: "IMEI No",
          datafield: "imei",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 140,
        },
        {
          text: "SIM 1",
          datafield: "sim1",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 120,
        },
        {
          text: "SIM 2",
          datafield: "sim2",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 120,
        },
        {
          text: "Plate No",
          datafield: "plateno",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 125,
        },
        {
          text: "Contact No",
          datafield: "contactno",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 125,
        },
        {
          text: "Slot No",
          datafield: "slotno",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 100,
        },
        {
          text: "Validity Requested",
          datafield: "validityperiod",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 155,
        },
        {
          text: "Card Requested Date",
          datafield: "carequestdate",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 155,
        },
        {
          text: "Card Requested by",
          datafield: "carequestby",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 155,
        },
        {
          text: "Current Dealer",
          datafield: "renewalmessage",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 155,
        },
        {
          text: "Card Activated Date",
          datafield: "cardactivationdate",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 155,
        },
        {
          text: "Card End Date",
          datafield: "cardenddate",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 150,
        },
        {
          text: "Card Status",
          datafield: "cardstatus",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 135,
        },
        {
          text: "Comment",
          datafield: "purcomment",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 120,
        },
        {
          text: "Created by",
          datafield: "createdby",
          cellsrenderer: this.renderer,
          cellsalign: "center",
          align: "center",
          width: 135,
        },

        {
          text: "",
          columntype: "button",
          cellsalign: "center",
          align: "center",
          width: 120,
          cellsrenderer: (): string => {
            return this.myPlatform == "desktop"
              ? "Vehicle"
              : "<button>Vehicle</button>";
          },
          buttonclick: (row): void => {
            this.checkvehicle();
          },
        },

        {
          text: "",
          columntype: "button",
          cellsalign: "center",
          align: "center",
          width: 120,
          cellsrenderer: (): string => {
            return this.myPlatform == "desktop"
              ? "Certificate"
              : "<button>Certificate</button>";
          },
          buttonclick: (row): void => {
            this.getmessage();
          },
        },

        {
          text: "",
          columntype: "button",
          cellsalign: "center",
          align: "center",
          width: 120,
          cellsrenderer: (): string => {
            return this.myPlatform == "desktop"
              ? "Comments"
              : "<button>Comments</button>";
          },
          buttonclick: (row): void => {
            this.CommentModel(row);
          },
        },
        {
          text: "",
          datafield: "history",
          columntype: "button",
          cellsalign: "center",
          align: "center",
          width: 120,
          cellsrenderer: (): string => {
            return this.myPlatform == "desktop"
              ? "Status History"
              : "<button>Status History</button>";
          },
          buttonclick: (row): void => {
            this.viewModel(row);
          },
        },
        {
          text: "",
          datafield: "status",
          columntype: "button",
          cellsalign: "center",
          align: "center",
          width: 120,
          cellsrenderer: (): string => {
            return this.myPlatform == "desktop"
              ? "Dealer Details"
              : "<button>Dealer Details</button>";
          },
          buttonclick: (row): void => {
            this.openModel(row);
          },
        },
      ];
    });
  }

  getmessage() {
    const url =
      serverUrl.web +
      "/global/getCertificateDetails?imei=" +
      this.selectedRow.imei;
    this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
      if (res.message == "Certificate Already generated") {
        this.TotalcertificateData = JSON.parse(res.certificatedetails);
        this.panic = this.TotalcertificateData.paniccount;
        var detailofqrcode = [];
        detailofqrcode.push(
          this.TotalcertificateData.CenterName,
          "Chassis:" + this.TotalcertificateData.ChassisNo,
          "EngineNo:" + this.TotalcertificateData.EngineNo,
          "Reg.No:" + this.TotalcertificateData.RegistraionNo
        );
        this.data = detailofqrcode.toString();
        this.values = this.data;
        this.show = true;
        this.certificateprintpage();
      } else if (res.message == "") {
        this.result = res;
        this.CertificateModel();
      } else {
        this.commonService.showConfirm(res.message);
      }
    });
  }

  clickToDownload() {
    // this.generatedcertificate();

    var printWindow = window.open("height=1000,width=900");
    printWindow.document.write("<html>");
    // printWindow.document.write("<body>");
    printWindow.document.write(
      '<body style="background-image: url(https://kingstrackimages.s3.amazonaws.com/Company/apmlogo_watermarker.svg);background-repeat: no-repeat;background-size: 100% 85%;">'
    );
    var divContents = document.getElementById("pdf3").innerHTML;
    printWindow.document.write(divContents);
    printWindow.document.write("</body></html>");
    printWindow.print();
    printWindow.document.close();
  }

  async certificateprintpage() {
    const alert = await this.alertController.create({
      header: "Certificate",
      message: "Certificate Already generated",
      backdropDismiss: false,
      buttons: [
        {
          text: "Re-Print",
          handler: (data) => {
            this.clickToDownload();
          },
        },
        {
          text: "Cancel",
          role: "cancel",
          handler: (data) => {},
        },
      ],
    });
    await alert.present();
  }

  async CertificateModel() {
    const isModalOpened = await this.modalController.getTop();
    const modal = await this.modalController.create({
      component: CertificateCreationComponent,
      cssClass: "certificateForm",
      componentProps: {
        value: this.result,
      },
    });
    modal.onDidDismiss().then((data) => {
      if (data.data.data == "Certificate Saved Successfully") {
        this.show = false;
        this.data = data.data.data;
        this.getdatas(1);
      }
    });
    return await modal.present();
  }

  checkvehicle() {
    const url =
      serverUrl.web +
      "/site/getvehiclevalidation?imei=" +
      this.selectedRow.imei;
    this.ajaxService.ajaxGetPerference(url).subscribe((res) => {
      if (res.message == "success") {
        this.confirm();
      } else {
        this.commonService.showConfirm(res.message);
      }
    });
  }

  async confirm() {
    const isModalOpened = await this.modalController.getTop();
    const modal = await this.modalController.create({
      component: ConfirmPopupComponent,
      cssClass: "vehiclecreation",
      componentProps: {
        value: this.selectedRow,
      },
    });
    modal.onDidDismiss().then((data) => {
      if (data.data.data == 1) {
        this.vehiclecreationModel();
      } else {
        this.enduserModel();
      }
    });
    return await modal.present();
  }

  async vehiclecreationModel() {
    const isModalOpened = await this.modalController.getTop();
    const modal = await this.modalController.create({
      component: CompanyCreationComponent,
      cssClass: "viewserialfrom",
      componentProps: {
        value: this.selectedRow,
      },
    });
    modal.onDidDismiss().then((data) => {
      if (data.data.data == "Successfully Presisted") {
        this.show = false;
        this.data = data.data.data;
        this.getdatas(1);
      }
    });
    return await modal.present();
  }

  async enduserModel() {
    const isModalOpened = await this.modalController.getTop();
    const modal = await this.modalController.create({
      component: EndUserCreationComponent,
      cssClass: "viewserialfrom",
      componentProps: {
        value: this.selectedRow,
      },
    });
    modal.onDidDismiss().then((data) => {
      if (data.data.data == "Added Successfully") {
        this.show = false;
        this.data = data.data.data;
        this.getdatas(1);
      }
    });
    return await modal.present();
  }

  async viewModel(row) {
    const isModalOpened = await this.modalController.getTop();
    const modal = await this.modalController.create({
      component: StatusDetailsComponent,
      cssClass: "viewserialfrom",
      componentProps: {
        value: this.selectedRow,
      },
    });
    modal.onDidDismiss().then(() => {
      this.selectedRow = undefined;
    });
    return await modal.present();
  }

  async CommentModel(row) {
    const isModalOpened = await this.modalController.getTop();
    const modal = await this.modalController.create({
      component: CommentComponent,
      cssClass: "simupdateform",
      componentProps: {
        value: this.selectedRow,
      },
    });
    modal.onDidDismiss().then(() => {});
    return await modal.present();
  }

  async openModel(row) {
    const modal = await this.modalController.create({
      component: DealerDetailsComponent,
      cssClass: "viewserialfrom",
      componentProps: {
        value: this.selectedRow,
      },
    });
    modal.onDidDismiss().then(() => {
      this.selectedRow = undefined;
    });
    return await modal.present();
  }

  myGridOnRowclick(event: any): void {
    this.selectedRow = event.args.row.bounddata;
  }

  a: boolean = true;
  myGridOnRowSelect(event: any): void {
    console.log(event);

    this.selectedRow = this.myGrid.getselectedrowindexes();

    let current = this.myGrid.getselectedrowindex();
    if (current != -1) {
      let currentrow = this.myGrid.getrowdata(current);
      // console.log(currentrow, event);

      if (currentrow.cardstatus == "") {
        if (this.a == true) {
          this.commonService.showConfirm(
            "Sorry, this action (Renewal, Topup, Extend 1Yr) is only available after the ICCID has been activated. Please activate the ICCID first to proceed."
          );
          this.a = false;
        } else {
          this.a = true;
        }
        this.myGrid.unselectrow(current);
        return null;
      }
    }

    let h = document.getElementsByClassName(
      "jqx-checkbox-default"
    ) as HTMLCollectionOf<HTMLElement>;
    h[0].style.display = "none";
    this.selectedRow = this.myGrid.getselectedrowindexes();

    // let current = this.myGrid.getselectedrowindex();
    // if (current != -1) {
    //   let currentrow = this.myGrid.getrowdata(current);
    //   // console.log(currentrow, event);
    //   if (currentrow.renewalmessage) {
    //     this.myGrid.unselectrow(current);
    //     this.commonService.showConfirm("Selected Data is Aleady Renewal");
    //     return null;
    //   }
    // }
    this.selectedRow = this.myGrid.getselectedrowindexes();
    if (this.selectedRow.length > 0) {
      this.renewalbutton = false;
    } else {
      this.renewalbutton = true;
    }
    if (event.type == "rowunselect") return null;
    // console.log(this.myGrid.getrowdata(this.selectedRow[]));
  }
  // myGridOnRowSelect(event: any) {

  //   let current = this.myGrid.getselectedrowindex();

  //   if (current != -1) {
  //     // let currentrow = this.myGrid.getrowdata(current);
  //     // console.log(currentrow, event);
  //     // if (currentrow.renewalmessage != '') {
  //     //   this.myGrid.unselectrow(current);
  //     //   this.commonService.showConfirm("Selected Data is Aleady Renewal");
  //     //   return null;
  //     // }
  //     let arr = ""
  //     let selectdata = this.myGrid.getselectedrowindexes();
  //     // var arr = [];
  //     for (let i = 0; i < selectdata.length; i++) {
  //       if (this.myGrid["attrSource"]["originaldata"][selectdata[i]].renewalmessage != '') {
  //         this.myGrid.unselectrow(selectdata[i])
  //         arr += this.myGrid["attrSource"]["originaldata"][selectdata[i]].iccidno1
  //       }
  //     }
  //     this.commonService.showConfirm(arr);

  //   }

  //   // console.log(this.myGrid.getrowdata(this.selectedRow[]));
  //   this.selectedRow = this.myGrid.getselectedrowindexes();
  //   if (this.selectedRow.length > 0) {
  //     this.renewalbutton = false;
  //   } else {
  //     this.renewalbutton = true;
  //   }
  //   if (event.type == "rowunselect") return null;
  // }

  newfunc() {
    let data = this.tableData;
    console.log(this.myGrid);

    let coloumnArray = [];

    this.myGrid.attrColumns.map((p) => {
      coloumnArray.push(p.datafield);
    });

    for (let i = 0; i < data.length; i++) {
      let k = Object.keys(data[i]);
      for (let j = 0; j < k.length; j++) {
        if (coloumnArray.includes(k[j]) == false) {
          delete data[i][k[j].toString()];
        }
      }
    }

    let forExcel = [];
    data.map((val) => {
      let newArray = Object.values(val);
      forExcel.push(newArray);
    });

    var Header = Object.keys(data[0]);

    let reportData = {
      title: "Customer CA Details",
      data: forExcel,
      headers: Header,
    };
    this.ete.exportExcel(reportData);
  }

  ionViewWillEnter() {
    this.myPlatform = this.platform.platforms()[0];
    if (this.myPlatform == "tablet") {
      this.myPlatform = "desktop";
    }
    this.zohocount = localStorage.getItem("zohoInvoice");
    this.getdatas();
    let h = document.getElementsByClassName(
      "jqx-checkbox-default"
    ) as HTMLCollectionOf<HTMLElement>;
    h[0].style.display = "none";
    this.selectedRow = this.myGrid.getselectedrowindexes();

    this.commonService.getData.subscribe((d) => {
      this.data = d;
      this.getdatas(1);
    });
  }
}
