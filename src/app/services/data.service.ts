import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  dataItem :BehaviorSubject<any> = new BehaviorSubject<any>('');

  constructor() { }
}
