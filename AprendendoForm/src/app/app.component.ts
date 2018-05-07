import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, AbstractControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit() {
    
  }

  meuForm: FormGroup;
  novoCampo: AbstractControl;

  constructor(fb: FormBuilder){
    this.meuForm = fb.group({
      'novoCampo' : ['Foi inicializado pelo formbuilder', Validators.required]
    });
    this.novoCampo = this.meuForm.controls['novoCampo'];
  }

  onSubmit(form: FormGroup): void{
    console.log("Valor submetido é válido: ", form.valid);
    console.log("Valor submetido: ", form.value);
    console.log("Valor submetido esta correto: ", form.dirty);
    console.log("Erros: ", form.errors);
  }

  onSubmit02(form: FormGroup): void{
    console.log("Valor submetido é válido: ", form.valid);
    console.log("Valor submetido: ", form.value);
    console.log("Valor submetido esta correto: ", form.dirty);
    console.log("Erros: ", form.errors);
  }  

  title = 'app';
}
