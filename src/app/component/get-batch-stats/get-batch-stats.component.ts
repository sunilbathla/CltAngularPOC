import { Component, OnInit, Input } from '@angular/core';
import { BatchStats } from 'src/app/model/batch-stats';
import { DataService } from 'src/app/service/DataService';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-get-batch-stats',
  templateUrl: './get-batch-stats.component.html',
  styleUrls: ['./get-batch-stats.component.css']
})
export class GetBatchStatsComponent implements OnInit {

  constructor(private dataService: DataService) { }
  batchStats: BatchStats[];
  envName: string;
  
  color: string = 'primary';

  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;
  bufferValue = 75;
  loading: boolean = false;
  ngOnInit(): void {

  }

  setEnv(envNm: string){
    this.envName = envNm;
    this.loading = true;
    
    this.dataService.getBatchStats(envNm).subscribe(
      res=>
      {        
        this.batchStats = res.result;
        this.loading = false;
      });
  }

}
