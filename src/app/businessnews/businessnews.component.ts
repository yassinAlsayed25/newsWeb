import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../services/newsapiservices.service';


@Component({
  selector: 'app-businessnews',
  templateUrl: './businessnews.component.html',
  styleUrls: ['./businessnews.component.css']
})
export class BusinessnewsComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }

  busnessnwesDispaly :any =[];

  ngOnInit(): void {
    this._services.businssnews().subscribe((result)=>{
      this.busnessnwesDispaly = result.articles;

    });
  }

}
