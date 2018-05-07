import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit() {
    
  }

  onSubmit(form: FormGroup): void{
    console.log("Valor submetido é válido: ", form.valid);
    console.log("Valor submetido: ", form.value);
    console.log("Valor submetido esta correto: ", form.dirty);
    console.log("Erros: ", form.errors);
  }

  title = 'app';
}
