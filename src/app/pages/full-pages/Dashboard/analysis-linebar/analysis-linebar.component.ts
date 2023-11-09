import {
  Component,
  ViewChild
} from "@angular/core";
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};
@Component({
  selector: 'app-analysis-linebar',
  templateUrl: './analysis-linebar.component.html',
  styleUrls: ['./analysis-linebar.component.scss']
})
export class AnalysisLinebarComponent {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial < ChartOptions > ;
  constructor() {
    this.chartOptions = {
      series: [{
          name: "Overall",
          data: [40, 42, 40, 43, 51, 52, 50, 45, 46, 62, 42, 43],
          
        },
        {
          name: "Employees",
          data: [61, 58, 65, 60, 62, 62, 60, 25, 45, 50, 60, 50]
        },
        {
          name: "Candidates",
          data: [81, 60, 70, 65, 74, 73, 72, 45, 61, 63, 81, 78]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: true,
        style: {
          colors: ['#72c2c9', '#1f8be1', '#5d75a2']
        },
        
        
      },
      stroke: {
        curve: "straight",
        width: 2,
        colors: ['#72c2c9', '#1f8be1', '#5d75a2']
      },
      title: {
        text: "MONTHLY AVG.SCORE",
        align: "left",
        style:{
          color: '#55698a'
        },
      },
      grid: {
        column: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ]
      },
      yaxis: {
        min: 0,
        max: 100,
        tickAmount: 6,
      },
    }
  }
}
