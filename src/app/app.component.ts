import { Component, OnInit } from '@angular/core';
import { DataService, Bank } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  post?: Bank[]
  constructor(
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.dataService.getPosts().subscribe(posts => {
      this.post = posts
      this.dataService.postsData = posts
    });
  }
  onSelectedFilter() {
    this.getFilteredExpenseList();
  }

  getFilteredExpenseList() {
    if (this.dataService.searchOption.length > 0)
      this.post = this.dataService.filteredListOptions();
    else {
      this.post = this.dataService.postsData;
    }

  }

}


