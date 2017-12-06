import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results-page',
  templateUrl: './search-results-page.component.html',
  styleUrls: ['./search-results-page.component.css']
})
export class SearchResultsPageComponent implements OnInit {

  constructor( @Inject('API_URL') private API_URL,
    private http: HttpClient,
    private route: ActivatedRoute) { }

  jobs

  ngOnInit() {
    let query = this.route.snapshot.queryParamMap.get('query')
    this.http.get(this.API_URL + 'data/jobs', {
      params: {
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

  like(job) {
    this.http.post(this.API_URL + 'data/favourite_jobs', {}, {
      headers: {
        'user-token': "6B34BBCA-C6F0-C536-FF39-A42FC7627200"
      }
    })
      .subscribe(like =>

        this.http.post(this.API_URL
          + 'data/favourite_jobs/' + like['objectId'] + '/job', [job['objectId']], {
            headers: {
              'user-token': "6B34BBCA-C6F0-C536-FF39-A42FC7627200"
            }
          })
          .subscribe(rel => console.log(rel)))

  }

}
