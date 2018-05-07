# Trabalhando com Forms no Angular 2

# FormControl
## Encapsula os **inputs** do form e cria objetos nos quais podemos trabalhar

# Validator
## Auxilia na validações dos **inputs**

# Observers
## Auxulia no monitoramento das alterações no **form**

# FormControl e FormGroup
## São os dois objetos fundamentais para trabalhar com forms no Angular

# FormControl
## Representa um **input**
## É a menor unidade em form Agular
## Encapsula o valor e o estado e se possui erros
```
let nomeControl = new FormControl("João");
let nome = nomeControl.value; //-> João

<input type="text" [formControl]="nomeControl" >
```
### <input type="text" [formControl]="nomeControl" > --> Vai criar um objeto no contexto do nosso **form**

# FormGroup
## Normalmente um **form** possui mais de um input, e podemos agrupar os **formControl** em um **formGroup**
## É comum iterarmos um array de formControl e validar as informações de cada um
```
let pessoaInfo = new FormGroup({
    nome: new FormControl("João"),
    cep: new FormControl("123456789")
})

pessoaInfo.value; //-> 
{
    nome: "João",
    cep: "123456789"
}
```

# Criando um form
## Para utilizarmos a biblioteca de forms, precisamos importar no **ngModule**
## Existem duas bibliotecas para trabalhar com forms:
* ### FormsModule
* ### ReactiveFormsModule

## No arquivo **.ts** adicione:
```
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```