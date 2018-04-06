import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


@Injectable()
export class SharedService {

  public testArray = [1, 2, 3, 4, 5, 6, 7, 8];

  constructor() { }

  public getArray(): Observable<number[]> {
    return Observable.of(this.testArray);
  }

}
