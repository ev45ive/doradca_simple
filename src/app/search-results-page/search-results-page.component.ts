import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results-page',
  templateUrl: './search-results-page.component.html',
  styleUrls: ['./search-results-page.component.css']
})
export class SearchResultsPageComponent implements OnInit {

  constructor(@Inject('JOBS_URL') private jobs_url,
              private http:HttpClient,
              private route:ActivatedRoute) { }

  jobs

  ngOnInit() {
    let query = this.route.snapshot.queryParamMap.get('query')
    this.http.get(this.jobs_url,{
      params:{
        where: `name LIKE '%${query}%'`
        // AND salary > 6000 AND salary < 8000
        // AND education IN ('higher','medium')
        // AND sector.name != 'Medycyna'
      }
    })
      .subscribe(jobs => {
        this.jobs = jobs;
      })

  }

}
