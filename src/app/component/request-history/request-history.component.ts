import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/DataService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-history',
  templateUrl: './request-history.component.html',
  styleUrls: ['./request-history.component.css']
})
export class RequestHistoryComponent implements OnInit {

  constructor(private dataService: DataService, private router:Router) { }
  requests: any[];

  ngOnInit(): void {
    this.dataService.listAllRequests().subscribe(resp=>this.requests=resp.result);
  }

  addNewRequest(){
    this.router.navigate(['addNewRequest']);
  }

}
