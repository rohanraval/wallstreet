import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../../../store/reducers';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../store/reducers/index';
import * as fromCompanyDataActions from '../../../store/actions/companydata.actions';
import * as _ from 'lodash';
import { Line } from '../../../store/models/line.model';
import { Point } from '../../../store/models/point.model';

@Component({
  selector: 'linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['linechart.component.scss']
})

export class LineChartComponent implements OnInit {  

  @Input() metrics: string[];
  data: any;
  options: any;
  years: number[];
  lines: Line[];
  line: Line;
  borderColors: string[];

  constructor(
    private store: Store<AppState>,
  ) {
    let me = this;
    me.borderColors = ['#FF5733', '#900C3F', '#FFC300', '#3498DB', '#27AE60'];
    
    me.store.select(fromRoot.getCompanyData).subscribe(x => {
      me.lines = x;
      let datasets = [];
      if(me.lines.length > 0) {
        let i = 0;        
        _.each(me.metrics, function(metric) {
          me.line = me.lines.find(l => l.metric === metric);
          me.years = me.line.points.map(p => p.year);
          let borderColor = me.borderColors[i];  
          datasets.push(Object.assign({}, {
            label: metric,
            data: me.line.points.map(p => p.value),
            fill: false,
            borderColor: borderColor,
          }))
          i++;
        });
        me.data = {
          labels: me.years,
          datasets: datasets
        }
      }
    });
    me.options = {
      legend: {
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
