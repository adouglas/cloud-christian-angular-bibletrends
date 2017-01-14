import { Component, OnInit } from '@angular/core';
import { D3Service, D3 } from 'd3-ng2-service';

@Component({
  selector: 'app-rating-count',
  templateUrl: './rating-count.component.html',
  styleUrls: ['./rating-count.component.css']
})
export class RatingCountComponent implements OnInit {
  private d3: D3;
  public ratingsCount: string;

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    maintainAspectRatio: false,
    scales: {
            xAxes: [{
                display: false
            }],
            yAxes: [{
                display: false
            }]
        }
  };
  public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012','2013'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = false;

  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40, 89]}
  ];

  constructor(d3Service: D3Service) {
    this.d3 = d3Service.getD3();
  }

  ngOnInit() {
    let d3 = this.d3;
    this.ratingsCount = d3.format(',')(2000000);
  }

}
