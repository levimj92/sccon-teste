import {HttpClient} from "@angular/common/http";
import {Injectable} from '@angular/core';
import {Observable, Subject, throwError} from "rxjs";
import {map, mergeMap, tap} from "rxjs/operators";
import {CepModule} from "../cep.module";
import {Endereco} from "../endereco";

@Injectable({
  providedIn: "root"
})
export class CepHttpService {

  private readonly loading: Subject<boolean>;
  public readonly loading$: Observable<boolean>;

  constructor(private httpClient: HttpClient) {
    this.loading = new Subject<boolean>();
    this.loading$ = this.loading.asObservable();
  }

  private static buildURl(cep: string, type: 'json' | 'xml' | 'piped' | 'querty' = "json", isUnicode: boolean = false): string {
    return `http://viacep.com.br/ws/${cep}/${type}/${isUnicode || ''}`
  }

  public getAddressByCep(cep: string): Observable<Endereco> {
    this.loading.next(true);
    return this.httpClient.get(CepHttpService.buildURl(cep))
      .pipe(
        map(response => new Endereco(response)),
        tap(_ => this.loading.next(false))
      );
  }
}
