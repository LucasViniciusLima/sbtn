import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/store.service';

@Component({
  selector: 'sub-usuarios',
  templateUrl: './sub-usuarios.component.html',
  styleUrls: ['./sub-usuarios.component.css']
})
export class SubUsuariosComponent implements OnInit {

  email: string = 'lucaslimavzt@gmail.com';
  usuarios: Array<any> = new Array<any>();

  constructor(private router: Router, private store: StoreService) { 
    const nav = this.router.getCurrentNavigation();
    if(nav.extras.state != undefined) this.email = nav.extras.state.email;
    //else this.router.navigateByUrl('/login',{state:{redirect:'/businessmodel'}});
  }

  ngOnInit(): void {
    this.store.getAllSubItensBusinessModel(this.email).then(subitens => {
      var sub = subitens as any;
      if(sub == undefined) this.store.createNewUserBusinessModel(this.email);
      else {
        
       for(let i=0;i<sub.users.length;i++){
         this.usuarios[i] = sub.users[i];
       }
       
      }      
    });  
  }

}
