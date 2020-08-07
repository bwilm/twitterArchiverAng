import {
  Component,
  OnInit
} from '@angular/core';
import {
  GetcovidstatsService
} from '../getcovidstats.service';
import {
  Title
} from '@angular/platform-browser';



@Component({
  selector: 'app-graph-component',
  templateUrl: './graph-component.component.html',
  styleUrls: ['./graph-component.component.css']
})
export class GraphComponentComponent implements OnInit {

  covidData = [];
  stateData;
  title: string;
  type: string;
  data = [];
  columnNames = [];
  options = {};
  width: any;
  height: any;
  gc = [];
  backgroundColor = '#2874A6';





  constructor(private covidService: GetcovidstatsService) {}

  ngOnInit() {

    this.covidService.dailyUsNumbers().subscribe((data: any[]) => {
      this.covidData = data;
      console.log(this.covidData[0]);
      this.initializeStatesGraphData();
    });


  }

  initializeStatesGraphData() {

    const statesPercentage = this.covidData[0].states / 50;
    console.log(statesPercentage)

    this.title = 'Percentage of States Infected';
    this.type = 'PieChart';
    this.data = [
      ['States', statesPercentage]
    ];
    this.columnNames = ['Browser', 'Percentage'];
    this.options = {
      backgroundColor:'#2874A6',
      colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],

    };

    this.width = 550;
    this.height = 400;

  }




}
