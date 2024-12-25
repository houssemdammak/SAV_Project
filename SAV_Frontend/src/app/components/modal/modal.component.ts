import { Component, Inject, } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EventService } from 'src/Services/event.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  id !:string ;
  form !:FormGroup
  check=new FormControl(false)
  constructor(public dialogRef: MatDialogRef<ModalComponent>,@Inject(MAT_DIALOG_DATA) data:any, private ES:EventService,private _formBuilder: FormBuilder) { 
    if(data && data.id ){
    this.id=data.id
    if(!!this.id){
      this.ES.getEvent(this.id).subscribe((evt)=>{
        this.initFormEdit(evt)
      })
    }
    }else{
      if(data.src){
        this.form=new FormGroup({
          title: new FormControl(null,[Validators.required]),
          dateDebut: new FormControl(data.dateDebut,[Validators.required]) ,
          dateFin: new FormControl(data.dateFin,[Validators.required]) ,
          lieu: new FormControl(null,[Validators.required]) 
        })
      }
      else{
        this.initForm()
      }
    }
  }
  onCheckboxChange(tempsDebut:any , tempsFin :any): void {
    this.check.setValue(this.check.value);   
    if(this.check.value==true && tempsDebut && tempsFin){
      this.form.addControl("tempsDebut", new FormControl(null,[Validators.required]) )
      this.form.addControl("tempsFin", new FormControl(null,[Validators.required]) )
    }
    
    if(this.check.value==false && !tempsDebut && !tempsFin){
      this.form.removeControl("tempsDebut")
      this.form.removeControl("tempsFin")
    }
  }
  initFormEdit(evt:any):void{
    this.form = this._formBuilder.group({
      id:[this.id],
      title: [evt.title || null, [Validators.required]],
      dateDebut: [evt.dateDebut || null, [Validators.required]],
      dateFin: [evt.dateFin || null, [Validators.required]],
      lieu: [evt.lieu || null, [Validators.required]],
    });
    // Extraire les temps de début et de fin si disponibles
    const tempsDebut = this.extractTime(evt.dateDebut);
    const tempsFin = this.extractTime(evt.dateFin);
    if (tempsDebut && tempsFin) {
      this.check.setValue(true); // Marquer la case comme activée
      this.form.addControl('tempsDebut', new FormControl(tempsDebut , [Validators.required]));
      this.form.addControl('tempsFin', new FormControl(tempsFin, [Validators.required]));
    }
    
  }
  initForm() {
    this.form=new FormGroup({
      title: new FormControl(null,[Validators.required]),
      dateDebut: new FormControl(null,[Validators.required]) ,
      dateFin: new FormControl(null,[Validators.required]) ,
      tempsDebut: new FormControl(null) ,
      tempsFin: new FormControl(null) ,
      lieu: new FormControl(null,[Validators.required]) 
    })
    
  }
  save() {
    this.form.patchValue({
      dateDebut: this.mergeDateAndTimeLocal(this.form.value.dateDebut, this.form.value.tempsDebut),
      dateFin: this.mergeDateAndTimeLocal(this.form.value.dateFin, this.form.value.tempsFin)
    });
    this.form.removeControl("tempsDebut")
    this.form.removeControl("tempsFin")
    this.dialogRef.close(this.form.value);
}
private mergeDateAndTimeLocal(date: string | Date, time: string): string {
  const parsedDate = new Date(date); // Convertir la date

  if (time) {
    const [hours, minutes] = time.split(':').map(Number); 
    parsedDate.setHours(hours, minutes, 0, 0); 
  }
  return parsedDate.toISOString();
}


extractTime(date: string): string | null {
  if (date) {
    const dateObj = new Date(date);
    const hours = dateObj.getHours(); // Correctement extraire les heures
    const minutes = dateObj.getMinutes(); // Extraire les minutes
    return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`; // Retourner au format "hh:mm"
  }
  return null;
}

close() {
    this.dialogRef.close();
}
}
