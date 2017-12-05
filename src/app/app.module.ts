import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { SearchPageComponent } from './search-page/search-page.component';
import { SearchResultsPageComponent } from './search-results-page/search-results-page.component'

export const routes: Routes = [
  { path: '', component: SearchPageComponent, pathMatch: 'full' },
  { path: 'search/results', component: SearchResultsPageComponent, pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    SearchResultsPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [
    { provide: 'JOBS_URL', useValue: 'https://api.backendless.com/A055A2AD-8F3A-3AC5-FF6D-CB7F6FC7FC00/538D19D8-06B4-A162-FFC3-3489A8D80300/data/jobs'}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
