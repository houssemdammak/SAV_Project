import { Component, Inject, OnInit, } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-article-modal',
  templateUrl: './article-modal.component.html',
})
export class ArticleModalComponent implements OnInit{
  form !:FormGroup
  submitted: boolean = false;
  action="Add"

  constructor(
    public dialogRef: MatDialogRef<ArticleModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {}
  
  ngOnInit(): void {

    if(this.data){
      this.action="Edit"
    }
    this.form = this.fb.group({
      id: [this.data?.article?.id || '6'],
      nom: [this.data?.article?.nom || '', Validators.required],
      description: [this.data?.article?.description || '', Validators.required],
      dateFabrication:[this.data?.article?.dateFabrication || '',Validators.required]
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
