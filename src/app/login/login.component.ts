import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterEvent, RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { CommonModule } from '@angular/common';
import { signInWithEmailAndPassword } from "firebase/auth";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email:string=''
  password:string=''

  constructor(private router:Router){}

  onLogin(){
signInWithEmailAndPassword(auth, this.email, this.password)
  .then((userCredential) => {
    const user = userCredential.user;
    alert("Logged in Success")
    this.router.navigate(['/home'])
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("wrong credentials")
  });
  }
}
