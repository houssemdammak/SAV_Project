import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-reclamation-modal',
  templateUrl: './reclamation-modal.component.html',
})
export class ReclamationModalComponent implements OnInit{
  form !:FormGroup
  submitted: boolean = false;
  action="Add"

  constructor(
    public dialogRef: MatDialogRef<ReclamationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {}
  
  ngOnInit(): void {
    if(this.data){
      this.action="Edit"
    }
    this.form = this.fb.group({
      id: [this.data?.tool?.id || '6'],
      source: [this.data?.tool?.source || '', Validators.required],
      date: [this.data?.tool?.date || '', Validators.required],
      member:[this.data?.tool?.member || '']
    });
  }
  shouldShowError(fieldName: string): boolean {
    const field = this.form.get(fieldName);
    return !!field && field.invalid && (this.submitted || field.touched );
  }
  onSubmit(): void {
    this.submitted = true;
    if (this.form.valid) {
      this.submitted = false;
      this.dialogRef.close(this.form.value);
    } else {
      console.log('Formulaire invalide');
    }
  }
}