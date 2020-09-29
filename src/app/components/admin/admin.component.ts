import { Component, OnInit } from '@angular/core';
import { adminUrl } from 'src/app/config/api';





@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

loading=false;

  constructor() { }
model:any={}
  ngOnInit(): void {}

    admin(){
      console.log(this.model);
    }
        
  }


