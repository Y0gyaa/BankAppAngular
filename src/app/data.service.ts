import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';

export interface Bank {
  name:string;
  id :number;
  
}



@Injectable({
      providedIn: 'root'
    })
    export class DataService {
    
      searchOption=[] as any;
      public postsData?: Bank[];
      postUrl : string = "/api/banks/?format=json"; 
      
    
      constructor(
        private http: HttpClient
      ) {}
    
    
      getPosts(): Observable<Bank[]>{
        return this.http.get<Bank[]>(this.postUrl);
        
      }
    
      filteredListOptions() {
        let posts:any = this.postsData;
            let filteredPostsList = [];
            for (let post of posts) {
                for (let options of this.searchOption) {
                    if (options.title === post.title) {
                      filteredPostsList.push(post);
                    }
                }
            }
            console.log(filteredPostsList);
            return filteredPostsList;
      }
    }
    