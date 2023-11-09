import { Component, OnInit,ViewChild } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ChartComponent
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [79],
      chart: {
        height: 100,
        type: "radialBar"
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "30%"
          },
          dataLabels: {
            name: {
              show: false,
            },

            value: {
              show: false,
              offsetY: -15, // Adjust this value to position the label
              fontSize: "14px",
            },
            total: {
              show: false,
              // The label text you want
              fontSize: "14px",
            },
          }
        }
      },
      // labels: ["Cricket"]
    };
  }



ngOnInit(): void {
  
}
}
