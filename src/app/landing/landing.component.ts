import { Component, OnInit } from '@angular/core';
import { Constants } from '../constants/contants';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ISearch } from '../interfaces/ISearch';
import { DataProcessingServiceService } from '../data-processing-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  public selectCriteriaText: string = Constants.SelectCriteria;
  public criteriaDropdownValues: Array<string> = Constants.CriteriaDropDown;
  public searchForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private dps: DataProcessingServiceService) { }

  public ngOnInit(): void { 
    this.searchForm = this.fb.group({
      criteria: [''],
      textInput: ['']
    });
  }

  public submit(): void {
    let searchCriteria: ISearch = {
       criteria: this.searchForm.controls["criteria"].value,
       text: this.searchForm.controls["textInput"].value,
    }
    this.dps.getMoviesBasedOnSearch(searchCriteria);
    this.dps.moviesData.subscribe(val => {
      if (val != null && val.length > 0) {
        this.router.navigate(['/movielist']);
      } else {
        console.log("dont"); //refactor
      }
    });
  }
}
