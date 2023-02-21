import {Component, OnInit} from '@angular/core';
import {NewService} from "../new.service";

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.scss']
})
export class ScienceComponent  implements OnInit{
  public scienceNew:any;

  public scienceNotice = Math.round(Math.random()*19)

  constructor(private newService:NewService){}

  ngOnInit(): void {
    this.getTechnologyNews()
    console.log(this.scienceNotice)
  }
  public getTechnologyNews(){
    this.newService.getScienceNews().subscribe(res=>{
      this.scienceNew = res.articles;
      console.log(this.scienceNew)
    })
  }
}
