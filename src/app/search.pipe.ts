import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
  pure: false,
  
})
export class SearchPipe implements PipeTransform {
  
  transform(array: any, search: string) {
    
    let res = array.filter((liste: any) => {
      if (search != ""){
        search = search.toLowerCase();
        if (liste.nom.toLowerCase().indexOf(search) >=0 || liste.description.toLowerCase().indexOf(search) >=0){
          return liste;
        }
        
        else{
          return null ;
        }

      }else{
        return liste;
      }
      
    })
    return res;
};
      }
    




