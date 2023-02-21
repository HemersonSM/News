import {Component, OnInit} from '@angular/core';
import {NewService} from "../new.service";

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit{
  public busiNew:any;

  public busiNotice = Math.round(Math.random()*19)

  constructor(private newService:NewService){}

  ngOnInit(): void {
    this.getTechnologyNews()
    console.log(this.busiNotice)
  }
  public getTechnologyNews(){
    this.newService.getBusinessNews().subscribe(res=>{
      this.busiNew = res.articles;
      console.log(this.busiNew)
    })
  }
}
