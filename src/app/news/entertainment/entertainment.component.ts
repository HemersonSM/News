import {Component, OnInit} from '@angular/core';
import {NewService} from "../new.service";

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.scss']
})
export class EntertainmentComponent implements OnInit{
public entertNew:any;

public entertNotice = Math.round(Math.random()*19)

  constructor(private newService:NewService){}

  ngOnInit(): void {
    this.getTechnologyNews()
  }
public getTechnologyNews(){
    this.newService. getEntertainmentNews().subscribe(res=>{
      this.entertNew = res.articles;
      console.log(this.entertNew)
    })
  }
}
