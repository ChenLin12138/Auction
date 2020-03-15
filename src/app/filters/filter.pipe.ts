import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  //传入list和两个string，
  //filterByField表示位置，
  //filterValue表示值。
  //只有将filterByField对应的值与filterValue匹配时，才返回。
  transform(list: any[], filterByField : string, filterValue : string): any {
    
    //如果没有filterByField和filterValue那么不进行过滤
    if(!filterByField || !filterValue){
      return list;
    }

    return list.filter( item =>
      {
        const field = item[filterByField].toLowerCase();
        const filter = filterValue.toLocaleLowerCase();
        return field.indexOf(filter) >= 0;
      }
    );
  }

  

}
