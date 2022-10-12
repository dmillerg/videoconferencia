import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'videoconferencia'
})
export class VideoconferenciaPipe implements PipeTransform {
  transform(rows: any[], query: any): any {
    if (query == -1) return rows;
    return rows.filter(item => item.citado_por.usuario.indexOf(query)>-1);
  }
}
