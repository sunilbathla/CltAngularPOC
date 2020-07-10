import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/DataService';
import { ResponseModel } from 'src/app/model/responseModel';
import { RequestParams } from 'src/app/model/request-params';

@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.css']
})
export class AddRequestComponent implements OnInit {
  rqstId: number;
  responseModel: ResponseModel;
  requestParams: RequestParams;
  constructor(private router: Router, 
  private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.generateNewRequest().subscribe(resp=>{
      this.responseModel = resp;
      this.requestParams = this.responseModel.result;
      this.rqstId = this.requestParams.rqstId;
    });
  }
  runRequestNow(rqstId: number){
    this.dataService.runRequestNow(rqstId).subscribe(resp=>alert(resp.message));
  }
}
