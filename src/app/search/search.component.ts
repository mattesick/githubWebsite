import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../service/search.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm;
  faSearch = faSearch;
  result:any = {"projects":[]};
  init:Function;
  query = this.route.snapshot.paramMap.get('query');
  constructor(private route: ActivatedRoute, private searchService: SearchService,private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      query: this.query
    });
   }

  
  searchResult: String[];
  ngOnInit(): void {
    this.search({"query":this.query});
  }
  async search({query}){
    console.log(query);
    this.result = await this.searchService.search(query)
    console.log(this.result);
  }
}
