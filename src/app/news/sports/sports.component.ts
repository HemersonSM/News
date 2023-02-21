import {Component, OnInit} from '@angular/core';
import {NewService} from "../new.service";

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent  implements OnInit{
  public sportsNew:any;

  public sportsNotice = Math.round(Math.random()*19)

  constructor(private newService:NewService){}

  ngOnInit(): void {
    this.getTechnologyNews()
    console.log(this.sportsNotice)
  }
  public getTechnologyNews(){
    this.newService.getSportsNews().subscribe(res=>{
      this.sportsNew = res.articles;
      console.log(this.sportsNew)
    })
  }
}
