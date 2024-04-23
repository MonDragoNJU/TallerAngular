import { Component, OnInit } from '@angular/core';
import { Serie } from './series';
import { dataSeries } from './dataSeries';
import { SerieService } from './series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  constructor(private serieService: SerieService) { }
  series: Array<Serie> = [];
  average_seasons = 0;
  getSeriesList() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
    });
  }

  average(){
    let total: number=0;
    console.log(this.series.length);
    for(let index = 0; index< this.series.length; index++){
        let serie: Serie = this.series[index]
        total += serie.seasons;
    }
    this.average_seasons = total / this.series.length
  }

  ngOnInit() {
    this.getSeriesList();
    this.average();
  }

}
