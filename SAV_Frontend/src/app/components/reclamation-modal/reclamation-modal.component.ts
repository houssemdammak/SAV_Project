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

  constructor(
    public dialogRef: MatDialogRef<ReclamationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {}
  
  ngOnInit(): void {
    this.form = this.fb.group({
      description: [null , Validators.required],
      articleId: [this.data?.articleId, Validators.required],
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
    }
  }
}