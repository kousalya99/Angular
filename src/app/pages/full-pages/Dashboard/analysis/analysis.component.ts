
import { Component, ViewChild } from "@angular/core";

import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexXAxis,
  ApexFill,
  ChartComponent,

} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  
};

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [74],
      chart: {
        type: "radialBar",
        offsetY: -20
      },
      
      plotOptions: {
        radialBar: {
          startAngle: -100,
          endAngle: 100,
          track: {
            background: "#eff1f6",
            strokeWidth: "97%",
            margin: 5, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              opacity: 0.31,
              blur: 2
            }
          },
          dataLabels: {
            name: {
              show: true
            },
            value: {
              offsetY: -35,
              fontSize: "36px",
              fontWeight:"bold"
            }
          }
        }
      },
      fill: {
        type: "solid",
        colors: ['#5d75a2'],
        gradient: {
          shade: "light",
          shadeIntensity: 0.4,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 53, 91]
        }
      },
     
      labels: ["n=4,415%"],
    
    };
  }
}
