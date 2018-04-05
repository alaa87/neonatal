import {Pipe, PipeTransform} from '@angular/core';
import {layoutPaths} from '../../theme.constants';

@Pipe({name: 'systemSVG'})
export class SystemSVGPipe implements PipeTransform {

  transform(input:string, ext = 'svg'):string {
    return layoutPaths.images.root + input + '.' + ext;
  }
}
