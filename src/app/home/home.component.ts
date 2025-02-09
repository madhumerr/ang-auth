import { Component } from '@angular/core';
import { signOut } from "firebase/auth";
import {auth} from "../firebase" ;
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router:Router){}

  onLogout(){
    signOut(auth).then(() => {
      alert("Log Out Successful")
      this.router.navigate(['/login'])
    }).catch((error) => {
      
      alert("An error occured")
    });
  }
}
