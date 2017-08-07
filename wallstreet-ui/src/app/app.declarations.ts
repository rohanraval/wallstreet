import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFound404Component } from './not-found404.component';
import { LineChartComponent } from "./components/vizualizations/linechart/linechart.component";
import { BarChartComponent } from "./components/vizualizations/barchart/barchart.component";
import { PieChartComponent } from "./components/vizualizations/piechart/piechart.component";

export const APP_DECLARATIONS = [
  BarChartComponent,
  DashboardComponent,
  LineChartComponent,
  PieChartComponent,
  NotFound404Component
];
