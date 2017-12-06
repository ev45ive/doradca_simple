import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { SearchPageComponent } from './search-page/search-page.component';
import { SearchResultsPageComponent } from './search-results-page/search-results-page.component';
import { SearchAdvancedPageComponent } from './search-advanced-page/search-advanced-page.component';
import { JobDetailsPageComponent } from './job-details-page/job-details-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { SigninPageComponent } from './signin-page/signin-page.component';
import { JobTestPageComponent } from './job-test-page/job-test-page.component'
import { SessionModule } from "./session/session.module";

export const routes: Routes = [
  { path: '', redirectTo:'search', pathMatch: 'full' },
  { path: 'search', component: SearchPageComponent, pathMatch: 'full' },
  { path: 'search/results', component: SearchResultsPageComponent, pathMatch: 'full' },
  { path: 'search/advanced', component: SearchAdvancedPageComponent, pathMatch: 'full' },
  { path: 'job/details/:objectId', component: JobDetailsPageComponent, pathMatch: 'full' },
  { path: 'job/test', component: JobTestPageComponent, pathMatch: 'full' },
  { path: 'user/profile', component: ProfilePageComponent, pathMatch: 'full' },
  { path: 'user/signin', component: SigninPageComponent, pathMatch: 'full' },
  { path: 'user/signup', component: SignupPageComponent, pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    SearchResultsPageComponent,
    SearchAdvancedPageComponent,
    JobDetailsPageComponent,
    ProfilePageComponent,
    SignupPageComponent,
    SigninPageComponent,
    JobTestPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    SessionModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [
    { provide: 'API_URL', useValue: 'https://api.backendless.com/A055A2AD-8F3A-3AC5-FF6D-CB7F6FC7FC00/538D19D8-06B4-A162-FFC3-3489A8D80300/'},

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
