import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usuario'
})
export class UsuarioPipe implements PipeTransform {
  transform(rows: any[], query: any): any {
    if (query == -1) return rows;
    return rows.filter(item => item.usuario.indexOf(query)>-1);
  }
}
