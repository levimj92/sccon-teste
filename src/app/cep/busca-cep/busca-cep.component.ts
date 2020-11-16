import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Observable, Subject} from "rxjs";
import {filter, switchMap, takeUntil} from "rxjs/operators";
import {CepHttpService} from "../services/cep-http.service";
import {CepStateService} from "../services/cep-state.service";

@Component({
  selector: 'app-busca-cep',
  templateUrl: './busca-cep.component.html',
  styleUrls: ['./busca-cep.component.scss']
})
export class BuscaCepComponent implements OnInit, OnDestroy {

  private readonly buscarCep$: Subject<string>
  private readonly destroy$: Subject<void>;

  public readonly form: FormGroup;
  public readonly loading$: Observable<boolean>

  constructor(private formBuilder: FormBuilder, private cepHttpService: CepHttpService, private cepStateService: CepStateService, private matSnackBar: MatSnackBar) {
    this.buscarCep$ = new Subject<string>();
    this.destroy$ = new Subject<void>();
    this.loading$ = this.cepHttpService.loading$;

    this.form = this.formBuilder.group({cep: [null, Validators.required]})
  }

  private buscaCepListener() {
    this.buscarCep$
      .pipe(
        filter(cep => !!cep),
        switchMap(cep => this.cepHttpService.getAddressByCep(cep)),
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (endereco) => endereco.erro ? this.handleError() : this.cepStateService.adicionarNovoEndereco(endereco),
        error: (error) => this.handleError(error)
      })
  }

  private handleError(error: string = 'CEP não encontrado') {
    this.matSnackBar.open(error, 'Ok', {duration: 2000})
  }

  public ngOnInit(): void {
    this.buscaCepListener();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public buscarCep(value: { cep: string }) {
    this.buscarCep$.next(value.cep);
  }


}
