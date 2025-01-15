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
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      nom: [null, Validators.required],
      prenom: [null, Validators.required],
      adresse: [null, Validators.required],
      telephone: [null, [Validators.required, Validators.pattern(/^\d{8}$/)]],
    });
  }
  
  getFieldError(field: string): string | null {
    const control = this.registerForm.get(field);
    if (control?.hasError('required')) {
      return `${field} est obligatoire.`;
    }
    if (control?.hasError('email')) {
      return `Email invalide.`;
    }
    if (control?.hasError('minlength')) {
      return `Le mot de passe doit contenir au moins 6 caractères.`;
    }
    if (control?.hasError('pattern')) {
      return `Numéro de téléphone invalide (8 chiffres requis).`;
    }
    if (control?.hasError('emailUsed')) {
      return `Email deja existe `;
    }
    return null;
  }
  
  signIn(): void {
    if (this.registerForm.valid) {
      this.clientService.register(this.registerForm.value).subscribe(
        (data) => {
          this.clientService.login({email:this.registerForm.value.email,password:this.registerForm.value.password}).subscribe(
            (data) =>{
              if (data.userType === 'Client') {
                this.router.navigate(['/']);
              } else if (data.userType === 'ResponsableSAV') {
                this.router.navigate(['/admin']);
              } 
            }
          )
          this.router.navigate(['/']);
        },
        (error) => {
            if (error.error === 'Invalid password') {
              this.registerForm.controls['password'].setErrors({
                incorrectPassword: true,
              });
            } else if (error.error.includes("already taken")) {
              this.registerForm.controls['email'].setErrors({ emailUsed: true });
            }
          
        }
      );
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
  
}
