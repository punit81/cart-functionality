import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortList'
})
export class SortListPipe implements PipeTransform {

  transform(productList: any[], args: any[]): any {
    const sortAttribute = args[0];

    return productList.sort( (a,b) => 
    {
      if (sortAttribute === 'productPrice'){
        return a.productPrice - b.productPrice;
      }
      if (a[sortAttribute] < b[sortAttribute]){
        return -1;
      } else if (a[sortAttribute] > b[sortAttribute]){
        return 1;
      } else {
        return 0;
      }
    });
  }

}
