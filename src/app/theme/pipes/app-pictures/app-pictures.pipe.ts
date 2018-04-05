import {Pipe, PipeTransform} from '@angular/core';
import {layoutPaths} from '../../theme.constants';

@Pipe({name: 'baAppPicture'})
export class AppPicturePipe implements PipeTransform {

  transform(input:string):string {
    return layoutPaths.images.root + input;
  }
}
