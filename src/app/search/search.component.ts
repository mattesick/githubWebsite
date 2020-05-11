import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../service/search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private route: ActivatedRoute, private searchService: SearchService) { }
  
  searchResult: String[];
  ngOnInit(): void {
    
  }
  search (): void {
    const query = this.route.snapshot.paramMap.get('query');
    // this.searchService.search(query).subscribe((data: any) => {
    //   this.searchResult = new Project(data);
    //   this.searchService.search(data.productOwners).subscribe((owners: any) => {
    //     owners.forEach(owner => {
    //       this.productOwners.push(new Employee(owner));
    //     });

    //   });

    // });
  }
}
