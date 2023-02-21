import {Component, OnInit} from '@angular/core';
import {NewService} from "../new.service";

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit{
  public tecNew:any;
  public date:any = new Date();
  public tecNotice = Math.round(Math.random()*19)

  constructor(private newService:NewService){}

  ngOnInit(): void {
    this.getTechnologyNews()
    console.log(this.tecNotice)
  }
  public getTechnologyNews(){
    this.newService.getTechnologyNews().subscribe(res=>{
      this.tecNew = res.articles;
      console.log(this.tecNew)
    })
  }
}
