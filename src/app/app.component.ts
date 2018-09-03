import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'api-data';
  public posts=[];
  constructor(private _postService: PostsService ){}

  ngOnInit(){
    this._postService.getPosts()
      .subscribe(data => this.posts = data);
  }
  
}
