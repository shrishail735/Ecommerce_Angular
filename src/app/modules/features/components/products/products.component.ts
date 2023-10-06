import { Component } from '@angular/core';
import { filters, singleFilters } from './product-filter';
import { womenTops } from 'src/Data/Women/women_top';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  filterData:any;
  singleFilterData:any
  womenTops:any

  constructor(private router:Router ,private ActivatedRoutes:ActivatedRoute)
  {

  }
  ngOnInit()
  {
    this.filterData = filters;
    this.singleFilterData = singleFilters
    this.womenTops = womenTops
    console.log(this.router.url)
  }

  handleMultiselectFilter(value:string, sectionId:string)
  {
    console.log(value)
    const queryParams = {...this.ActivatedRoutes.snapshot.queryParams};
     const filterValue = queryParams[sectionId]?queryParams[sectionId].split(','):[];

     const valueIndex = filterValue.indexOf(value);

     if(valueIndex!=-1)
     {
      console.log(valueIndex,value)
      filterValue.splice(valueIndex,1);
     }
     else
     {
      filterValue.push(value);
     }

     if(filterValue.length>0)
     {
      queryParams[sectionId]=filterValue.join(",");
     }
     else
     {
      delete queryParams[sectionId];
     }

     console.log(queryParams,filterValue)
     this.router.navigate([],{queryParams})
  }

  handleSingleselectFilter(value:string, sectionId:string)
  {
    const queryParams = {...this.ActivatedRoutes.snapshot.queryParams};
    queryParams[sectionId] =value;
    this.router.navigate([],{queryParams})
  }
}
