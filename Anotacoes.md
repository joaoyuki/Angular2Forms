# Validações em Forms

## Quando trabalhamos com forms, temos duas opções de valição:
## * Desabilitar o botão que faz o submit enquanto o form for inválido
## * Validar após o click no botão, após o evento HTTP Post é executado pelo código

# Criando um react form

## No arquivo **app.component.ts** crie um formulário:
```
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  form: FormGroup;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(){

    //Criamos um ReactForm com dois campos
    this.form = this.formBuilder.group({
      email: [null, Validators.required, Validators.email],
      password: [null, Validators.required]
    });

  }
}
```

### No método **ngOnInit()** utilizamos o formBuilder para criar dois campos no form e podermos utilizamos no HTML
### Em cada campo, inicializamos eles com valor null e adicionamos **validators**
### Agora vamos olhar como vai ficar o arquivo .HTML
```
<form class="form-horizontal" [formGroup]="form">

  <div class="form-group">
    <div class="col-sm-12">
      <label for="email" class="control-label">Email</label>
      <input type="text" id="email" class="form-control" formControlName="email">
    </div>
  </div>

  <div class="form-group">
    <div class="col-sm-12">
      <label for="password" class="control-label">Password</label>
      <input type="password" id="password" class="form-control" formControlName="password">
    </div>
  </div>

  <button type="submit" class="btn btn-primary" [disabled]="!form.valid">
    Submit
  </button>

</form>
```

### Na tag **[formGroup]="form"** indicamos qual é o form que criamos no app.component.ts e fazemos o ligação do HTML com o TS
### Na tag **formControlName="email"** e **formControlName="password"** estamos indicando quais campos do form no HTML serão conectados ao atributos do form criado no arquivo app.component.ts

