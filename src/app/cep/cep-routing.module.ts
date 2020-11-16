import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListaBuscasComponent} from "./lista-buscas/lista-buscas.component";

const routes: Routes = [
  {
    path: '',
    component: ListaBuscasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CepRoutingModule {
}
