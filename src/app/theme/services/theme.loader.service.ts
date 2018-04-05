import {Injectable} from '@angular/core';

@Injectable()
export class ThemePreloader {

  private static _loaders:Array<Promise<any>> = [];

  public static registerLoader(method:Promise<any>):void {
    ThemePreloader._loaders.push(method);
  }

  public static clear():void {
    ThemePreloader._loaders = [];
  }

  public static load():Promise<any> {
    return new Promise((resolve, reject) => {
      ThemePreloader._executeAll(resolve);
    });
  }

  private static _executeAll(done:Function):void {
    setTimeout(() => {
      Promise.all(ThemePreloader._loaders).then((values) => {
        done.call(null, values);

      }).catch((error) => {
        console.error(error);
      });
    });
  }
}
