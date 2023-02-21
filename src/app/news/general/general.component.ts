import {Component, OnInit} from '@angular/core';
import {NewService} from "../new.service";

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent  implements OnInit{

  public generalNew:any;

  constructor(private newService:NewService){}

  ngOnInit(): void {
    this.getTopNew()
  }
  public getTopNew(){
    this.newService.getGeneralNews().subscribe(res=>{
      this.generalNew = res.articles;
    })
  }
}
