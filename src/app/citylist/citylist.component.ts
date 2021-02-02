import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-citylist',
  templateUrl: './citylist.component.html',
  styleUrls: ['./citylist.component.css']
})
export class CitylistComponent implements OnInit {
readonly ROOT_URL = '/api/branches/?format=json'; 

  observable : any;
  branches: any;
  
  

  constructor(private http: HttpClient){}
  

  ngOnInit(): void {
    this.branches = null;
  }
  getCities() {
    
    this.observable = this.http.get(this.ROOT_URL);
    this.observable.subscribe( (data:any) => {
      console.log(data.results);
      this.branches = data.results;
      console.log(this.branches);
      console.log(this.branches[2]);

    });
  }

}