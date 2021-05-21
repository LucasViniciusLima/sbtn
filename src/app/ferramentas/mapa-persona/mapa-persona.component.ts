import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa-persona',
  templateUrl: './mapa-persona.component.html',
  styleUrls: ['./mapa-persona.component.css']
})
export class MapaPersonaComponent implements OnInit {

  avatar: string[] = ["../../../assets/avatar01.png","../../../assets/avatar02.png","../../../assets/avatar03.png","../../../assets/avatar04.png"];
  constructor() { }

  activeAvatar: string ="../../../assets/avatar01.png";
  handler: string = "";

  ngOnInit(): void {
  }
  mouseEnterChar(id){
    this.handler = this.activeAvatar;
    this.activeAvatar = this.avatar[id];
  }
  mouseLeaveChar(){
    this.activeAvatar = this.handler;
    this.handler = "";
  }
  setChar(id){
    this.handler = this.avatar[id];
  }


}
