import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GithubApi } from './table-http-example';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private http: HttpClient) {}

  recipes$ = this.http.get<GithubApi>(`https://api.github.com/search/issues`);
  
  
  // getRepoIssues(sort: string, order: SortDirection, page: number): Observable<GithubApi> {
  //   const href = 'https://api.github.com/search/issues';
  //   const requestUrl = `${href}?q=repo:angular/components&sort=${sort}&order=${order}&page=${
  //     page + 1
  //   }`;

  //   return this._httpClient.get<GithubApi>(requestUrl);
  // }
}
