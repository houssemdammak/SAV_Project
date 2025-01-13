import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ClientService } from "src/Services/client.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
})
export class RegisterComponent implements OnInit {
  registerForm !:FormGroup
  
  constructor(private clientService:ClientService,private fb: FormBuilder,private router:Router  ){}
  signIn():void{
  }
  ngOnInit(): void {
    this.registerForm=this.fb.group({
          email:[null,Validators.required],
          password:[null,Validators.required],
          nom: [null,Validators.required],
          prenom: [null,Validators.required],
          adresse: [null,Validators.required],
          telephone: [null,Validators.required],
    })
  }
}
