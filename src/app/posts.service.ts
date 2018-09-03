import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iposts } from './posts';
import { Observable } from 'rxjs';


@Injectable()
export class PostsService {
  private api_url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

  getPosts(): Observable<Iposts[]>{
    return this.http.get<Iposts[]>(this.api_url);
  }
}
