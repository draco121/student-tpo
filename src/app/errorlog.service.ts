import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorlogService {

  constructor() { }

  errors:string[]=[];
  log(err:string){
    console.log(err)
  }
}
