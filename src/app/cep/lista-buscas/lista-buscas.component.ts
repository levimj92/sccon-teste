import {animate, state, style, transition, trigger} from "@angular/animations";
import {Component, HostBinding} from '@angular/core';
import {Observable} from "rxjs";
import {FADE_ANIMATION} from "../animations/fade";
import {CepStateService} from "../services/cep-state.service";
import {Endereco} from "../endereco";

@Component({
  selector: 'app-lista-buscas',
  templateUrl: './lista-buscas.component.html',
  styleUrls: ['./lista-buscas.component.scss'],
  animations: [FADE_ANIMATION]
})
export class ListaBuscasComponent {

  public readonly listaEndereco$: Observable<Endereco[]>
  public readonly displayedColumns: string[];

  constructor(private cepStateService: CepStateService) {
    this.listaEndereco$ = this.cepStateService.obterTodosEnderecos();
    this.displayedColumns = ['cep', 'endereco', 'data', 'action',]
  }

  public removeEndereco(endereco: Endereco) {
    this.cepStateService.removerEndereco(endereco);
  }
}
