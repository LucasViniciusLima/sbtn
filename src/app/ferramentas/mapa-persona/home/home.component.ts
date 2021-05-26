import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomePersonaComponent implements OnInit {

  avatar: string[] = ["../../../assets/avatar01.png", "../../../assets/avatar02.png", "../../../assets/avatar03.png", "../../../assets/avatar04.png"];

  constructor(private route: Router) {
    const nav = this.route.getCurrentNavigation();
    if (nav.extras.state == undefined) this.route.navigateByUrl('/login', { state: { redirect: '/personamap' } });
  }

  activeAvatar: string = "../../../assets/avatar01.png";
  handler: string = "";

  personaG: string[] = ['', '', '', '', '', '', '', '', '', '', '', ''];

  ngOnInit(): void {
  }

  mouseEnterChar(id) {
    this.handler = this.activeAvatar;
    this.activeAvatar = this.avatar[id];
  }
  mouseLeaveChar() {
    this.activeAvatar = this.handler;
    this.handler = "";
  }
  setChar(id) {
    this.handler = this.avatar[id];
  }
  camposPreenchidos() {
    for (let i = 0; i < this.personaG.length; i++) {
      if (this.personaG[i] == "") return false;
    }
    return true;
  }
  btnConcluir() {
    if (this.camposPreenchidos()) this.route.navigateByUrl('/personamap/resultado', {
      state: {
        resultado: this.personaG,
        avatar: this.activeAvatar
      }
    });
  }

}
