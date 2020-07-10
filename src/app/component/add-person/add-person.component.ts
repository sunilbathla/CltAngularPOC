import { Component, OnInit } from '@angular/core';
import { prsnModel } from 'src/app/model/prsnModel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/service/DataService';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {
  personForm: FormGroup;
  prsnModel: prsnModel = new prsnModel();
  constructor(private formBuilder: FormBuilder,  
    private router: Router, 
    private dataService: DataService,
    private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.personForm = this.formBuilder.group({
      ssNr: ['', Validators.required],
      fstNm: ['', [Validators.required]],
      midNm: [''],
      lastNm: ['', Validators.required],
      sexCd: ['', Validators.required],
      mrtlStatCd: ['', Validators.required],
      brthDt: ['', Validators.required]

    });
  }

  onSave(){
    this.prsnModel = this.personForm.value;
    this.dataService.savePersonDetails(this.personForm.value)
     .subscribe(
      data => {
        if (data.status === 200) {
          alert('User Added successfully.');
          this.router.navigate([{outlets: {mainPanel: ['listPersons']}}],
            {relativeTo: this.route.parent});
        } else {
          alert(data.message);
        }
      },
      error => {
        alert(error);
      });
  }
}


