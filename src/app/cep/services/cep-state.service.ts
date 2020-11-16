import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {map} from "rxjs/operators";
import {CepModule} from "../cep.module";
import {Endereco} from "../endereco";

@Injectable({
  providedIn: "root"
})
export class CepStateService {

  private readonly enderecoStore = new BehaviorSubject<Endereco[]>([])

  constructor() {
  }

  public obterTodosEnderecos(): Observable<Endereco[]> {
    return this.enderecoStore.asObservable();
  }

  public obterEnderecosEspecificos(query: (endereco: Endereco) => boolean): Observable<Endereco[]> {
    return this.obterTodosEnderecos()
      .pipe(
        map(enderecoStore => enderecoStore.filter(query))
      );
  }

  public adicionarNovoEndereco(endereco: Endereco): void {
    this.enderecoStore.next([...this.enderecoStore.getValue(), endereco]);
  }

  public removerEndereco(enderecoRemover: Endereco): void {
    this.enderecoStore.next(this.enderecoStore.getValue().filter(endereco => !(endereco === enderecoRemover)));
  }
}
