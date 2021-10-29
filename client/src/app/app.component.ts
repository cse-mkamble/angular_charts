import { Component, OnInit, ViewChild } from '@angular/core';

import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';

  ngOnInit() {
  }

  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart: any;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx, {
      type: 'bar',
      data: {
        datasets: [{
          label: 'A',
          data: [0, 90, 90, 90],
          backgroundColor: "mediumaquamarine",
          borderColor: "mediumaquamarine",
          fill: true,
        },
        {
          label: 'B',
          data: [0, 80, 80, 80],
          backgroundColor: "#f44336",
          borderColor: "#f44336",
          fill: true,
        },
        {
          label: 'C',
          data: [0, 98, 98, 98, 100],
          backgroundColor: "yellow",
          borderColor: "yellow",
          fill: true,
        }],
        labels: ['', 'August', 'September', 'October'],
      },
    });



  }

}
