import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../services/newsapiservices.service';


@Component({
  selector: 'app-technwes',
  templateUrl: './technwes.component.html',
  styleUrls: ['./technwes.component.css']
})
export class TechnwesComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }
  technewsDisplay :any =[];

  ngOnInit(): void {

    this._services.tecNews().subscribe((result)=>{
      this.technewsDisplay = result.articles;

    });
  }

}
