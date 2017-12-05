import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { SearchPageComponent } from './search-page/search-page.component';
import { SearchResultsPageComponent } from './search-results-page/search-results-page.component'

export const routes: Routes = [
  { path: '', component: SearchPageComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    SearchResultsPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
