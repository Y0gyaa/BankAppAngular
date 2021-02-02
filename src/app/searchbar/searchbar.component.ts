import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService , Bank } from 'src/app/data.service';



@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  
  myControl = new FormControl();
  filteredOptions?: Observable<string[]>;
  allPosts?: Bank[];
  autoCompleteList?: any[];
 
  

  @ViewChild('autocompleteInput') autocompleteInput?: ElementRef;
  @Output() onSelectedOption = new EventEmitter();

  constructor(
      public dataService: DataService
  ) { }
 
  ngOnInit() {

      // get all the post
      this.dataService.getPosts().subscribe(posts => {
          this.allPosts = posts

      });

      // when user types something in input, the value changes will come through this
      this.myControl.valueChanges.subscribe((userInput:any) => {
          this.autoCompleteExpenseList(userInput);
      })
  }

  private autoCompleteExpenseList(input :any) {
      let categoryList = this.filterCategoryList(input)
      this.autoCompleteList = categoryList;
  }

  // this is where filtering the data happens according to you typed value
  filterCategoryList(val :any) {
      var categoryList = []
      if (typeof val != "string") {
          return [];
      }
      if (val === '' || val === null) {
          return [];
      }
      return val ? this.allPosts?.filter(s => s.name.toLowerCase().indexOf(val.toLowerCase()) != -1)
          : this.allPosts;
  }

  // after you clicked an autosuggest option, this function will show the field you want to show in input
  displayFn(post: Bank) {
      let k = post ? post.name : post;
      return k;
  }

  filterPostList(event :any) {
      var posts = event.source.value;
      if (!posts) {
          this.dataService.searchOption = []
      }
      else {

          this.dataService.searchOption.push(posts);
          this.onSelectedOption.emit(this.dataService.searchOption)
      }
      this.focusOnPlaceInput();
  }

  removeOption(option :any) {

      let index = this.dataService.searchOption.indexOf(option);
      if (index >= 0)
          this.dataService.searchOption.splice(index, 1);
      this.focusOnPlaceInput();

      this.onSelectedOption.emit(this.dataService.searchOption)
  }

  // focus the input field and remove any unwanted text.
  focusOnPlaceInput() {
      this.autocompleteInput?.nativeElement.focus();
      this.autocompleteInput?.nativeElement.value==='';
      
  }


}