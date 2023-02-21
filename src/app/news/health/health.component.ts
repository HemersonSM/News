import {Component, OnInit} from '@angular/core';
import {NewService} from "../new.service";

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss']
})
export class HealthComponent implements OnInit{
public healthNew:any;

public healthNotice = Math.round(Math.random()*19)

  constructor(private newService:NewService){}

  ngOnInit(): void {
    this.getTechnologyNews()
  }
public getTechnologyNews(){
    this.newService.getHealthNews().subscribe(res=>{
      this.healthNew = res.articles;
    })
  }
}
