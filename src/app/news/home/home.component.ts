import {Component, Input, OnInit} from '@angular/core';
import {NewService} from "../new.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  @Input() searchT:string = '';
  public topNew:any;
  public topNotice = Math.round(Math.random()*19)

  constructor(private newService:NewService){
  }

  ngOnInit(): void {
    this.getTopNew()
  }
  public getTopNew(){
    this.newService.getTopNews().subscribe(res=>{
      this.topNew = res.articles;
    })
  }
}
