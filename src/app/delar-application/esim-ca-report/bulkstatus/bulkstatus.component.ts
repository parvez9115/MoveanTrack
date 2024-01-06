import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AlertController, ModalController, Platform } from "@ionic/angular";
import { arrayMax } from "highcharts";
import { jqxGridComponent } from "jqwidgets-ng/jqxgrid";
import { AjaxService } from "src/app/services/ajax.service";
import { CommonService } from "src/app/services/common.service";
import { serverUrl } from "src/environments/environment";

@Component({
  selector: "app-bulkstatus",
  templateUrl: "./bulkstatus.component.html",
  styleUrls: ["./bulkstatus.component.scss"],
})
export class BulkstatusComponent implements OnInit {
  @ViewChild("myGrid", { static: false }) myGrid: jqxGridComponent;
  columns: any;
  source: { localdata: any };
  dataAdapter: any;
  renderer: (row: number, column: any, value: string) => string;
  myPlatform: any;
  button: boolean = false;
  selectedRow: any;
  tableData: any;
  bulkStatusform: FormGroup;
  @Input() value: any;
  maxDate;
  today = new Date();
  minDate: string;

  constructor(
    public platform: Platform,
    private formBuilder: FormBuilder,
    private modalController: ModalController,
    private ajaxService: AjaxService,
    private alertController: AlertController,
    private commonService: CommonService
  ) {}

  createForm() {
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear() + "-" + month + "-" + day;
    var endDate = now.getFullYear() + 1 + "-" + month + "-" + day;
    this.bulkStatusform = this.formBuilder.group({
      cardactivationdate: [today, Validators.required],
      cardenddate: [today],
      cardstatus: ["Active", Validators.required],
      comment: ["", Validators.required],
    });
  }
  cancelBtn() {
    this.modalController.dismiss();
  }

  // submit() {
  //   const url = serverUrl.web + "/esim/saveEsimBulkCAStatus";
  //   this.ajaxService.ajaxPostWithBody(url, this.value).subscribe((res) => {
  //     if (res.message == "Esim CA Status Saved Successfully") {
  //       this.commonService.showConfirm("CA Status Saved Successfully");
  //     }
  //   });
  // }

  submit() {
    this.button = true;
    var data = [];
    this.value.map((d) => {
      data.push({
        ...d,
        cardactivationdate: this.bulkStatusform.value.cardactivationdate,
        cardenddate: "",
        cardstatus: this.bulkStatusform.value.cardstatus,
        comment: this.bulkStatusform.value.comment,
      });
    });
    const url = serverUrl.web + "/esim/saveEsimBulkCAStatus";
    this.ajaxService
      .ajaxPostWithBody(url, JSON.stringify(data))
      .subscribe((res) => {
        if (res.message == "Esim CA Status Saved Successfully") {
          this.modalController.dismiss({
            data: "Esim CA Status Saved Successfully",
          });
          this.button = false;
        } else {
          this.commonService.showConfirm(res.message);
          this.button = false;
        }
      });
  }

  ngOnInit() {
    this.myPlatform = this.platform.platforms()[0];
    if (this.myPlatform == "tablet") {
      this.myPlatform = "desktop";
    }
    this.maxDate = this.today.getFullYear() + "-";
    this.maxDate +=
      (this.today.getMonth() + 1 < 10
        ? "0" + (this.today.getMonth() + 1).toString()
        : (this.today.getMonth() + 1).toString()) + "-";
    this.maxDate +=
      this.today.getDate() < 10
        ? "0" + this.today.getDate().toString()
        : this.today.getDate().toString();

    const today = new Date();
    const sevenDaysAgo = new Date(today);
    sevenDaysAgo.setDate(today.getDate() - 7);

    this.minDate = sevenDaysAgo.getFullYear() + "-";
    this.minDate +=
      (sevenDaysAgo.getMonth() + 1 < 10
        ? "0" + (sevenDaysAgo.getMonth() + 1).toString()
        : (sevenDaysAgo.getMonth() + 1).toString()) + "-";
    this.minDate +=
      sevenDaysAgo.getDate() < 10
        ? "0" + sevenDaysAgo.getDate().toString()
        : sevenDaysAgo.getDate().toString();
    this.createForm();
  }
}
