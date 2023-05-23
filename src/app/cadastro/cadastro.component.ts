import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Cadastro} from '../cadastro';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

    estudantes : Cadastro[] = []
    formGroupEstudante : FormGroup;

    constructor (private serviceService: ServiceService, private formBuilder: FormBuilder){
      this.formGroupEstudante = this.formBuilder.group(
        {
          id: [],
          nome: [],
          idade: [],
          curso: [],
          email: []
        }
      );
    }

    ngOnInit(): void {
      this.loadCadastro();
    }

    loadCadastro(){
      this.serviceService.getCadastro().subscribe(
        {
          next: data => this.estudantes = data,
          error: msg => console.log("Erro ao chamar o endpoint" + msg)
        }
      )
    }
    save() {
      this.serviceService.save(this.formGroupEstudante.value).subscribe(
        {
          next : data => {
            this.estudantes.push(data);
            this.formGroupEstudante.reset();
          }
        }
      )
    }
}
