import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-details-page',
  templateUrl: './job-details-page.component.html',
  styleUrls: ['./job-details-page.component.css']
})
export class JobDetailsPageComponent implements OnInit {

  constructor(@Inject('API_URL') private API_URL,
              private http:HttpClient,
              private route:ActivatedRoute) { }

  job

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('objectId')
    this.http.get(this.API_URL + 'data/jobs/' + id)
      .subscribe(job => {
        this.job = job;
      })

  }
}
