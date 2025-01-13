import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ClientService } from "src/Services/client.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
  loginForm !:FormGroup
  constructor(private clientService:ClientService,private fb: FormBuilder,private router:Router  ){}

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email:[null,Validators.required],
      password:[null,Validators.required]
    })
  }
  onlogin(): void {
    if (this.loginForm.valid) {
      this.clientService.login(this.loginForm.value).subscribe(
        (data) => {
          this.router.navigate(['/'])
        },
        (error) => {
          console.error('Login error:', error);
          if (error.status === 401) {
            if (error.error === 'Invalid password') {
              this.loginForm.controls['password'].setErrors({
                incorrectPassword: true,
              });
            } else if (error.error === 'Invalid email') {
              this.loginForm.controls['email'].setErrors({
                userNotFound: true,
              });
            }
          }
        }
      );
    }
  }
}
