import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from "@agm/core";

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.scss']
})
export class Dashboard2Component implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }
  lat: number = 51.678418;
  lng: number = 7.809007;
}
