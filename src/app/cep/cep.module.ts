import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from "@angular/flex-layout";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from "@angular/material/table";
import {NgxMaskModule} from "ngx-mask";
import {BuscaCepComponent} from './busca-cep/busca-cep.component';
import {CepRoutingModule} from "./cep-routing.module";
import {ListaBuscasComponent} from './lista-buscas/lista-buscas.component';
import {TabelaBuscasComponent} from './tabela-buscas/tabela-buscas.component';


@NgModule({
  declarations: [BuscaCepComponent, ListaBuscasComponent, TabelaBuscasComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    CepRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    NgxMaskModule,
    MatSnackBarModule,
    FlexLayoutModule,
    MatTableModule,
    MatIconModule,
    MatProgressSpinnerModule
  ]
})
export class CepModule {
}
