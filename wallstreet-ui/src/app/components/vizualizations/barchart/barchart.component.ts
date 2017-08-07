import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../../../store/reducers';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../store/reducers/index';
import * as fromCompanyDataActions from '../../../store/actions/companydata.actions';
import * as _ from 'lodash';
import { Line } from '../../../store/models/line.model';
import { Point } from '../../../store/models/point.model';
import { CompanyDataService } from '../../../services/companydata.service';

@Component({
  selector: 'barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['barchart.component.scss']
})

export class BarChartComponent implements OnInit {  

  @Input() metrics: string[];
  data: any;
  options: any;
  year: number;
  lines: Line[];
  points: Point[];
  colors: string[] = ['#FF5733', '#900C3F', '#FFC300', '#3498DB', '#27AE60'];

  constructor(
    private store: Store<AppState>,
    private companyDataService: CompanyDataService
  ) {
    let me = this;    
    me.store.select(fromRoot.getYear).subscribe(y => {
      me.year = y;
      me.store.select(fromRoot.getCompanyData).subscribe(lines => me.lines = lines);
      let datasets = [];
      if(me.lines.length > 0) {
        me.points = me.companyDataService.pointsByYear(me.lines, me.year);  
        me.points = me.points.filter(p => me.metrics.includes(p.metric) );
        let pointMetrics = me.points.map(p => p.metric);
        let pointVals = me.points.map(p => p.value);
        let backgroundColors = me.colors.slice(0, me.metrics.length);
        me.data = {
          labels: pointMetrics,
          datasets: [
            {
              data: pointVals,
              backgroundColor: backgroundColors
            }
          ] 
        };
      } 
    });
    me.options = {
      legend: {
        display: false,
        position: 'bottom'
      },
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'USD (millions)'
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Year'
          }
        }]
      }
    };
  }

  ngOnInit() {
  }
}
