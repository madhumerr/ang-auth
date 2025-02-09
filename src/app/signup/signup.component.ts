import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { Router } from '@angular/router';

@Component({
  standalone:true,
  selector: 'app-signup',
  imports: [RouterOutlet,RouterModule,CommonModule,FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  email:string=''
  password:string=''

  constructor(private router:Router){}
  
  onSignup(){
    createUserWithEmailAndPassword(auth, this.email, this.password)
    .then((userCredential) => {     
      const user = userCredential.user;    
      alert("Account created successfully")
      this.router.navigate(['/login'])
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;    
      alert("An account with this email id already exists ") 
    });
  }
  setEmail(event:any){
    console.log(event.target.value)
  }
}
