import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

export interface control{
  collectionname: string;
  isactive:boolean;
  isupdatable:boolean;
  isuploadable:boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AdmincontrolService {
  controllers:control[]=[];
  constructor(private afs:AngularFirestore) {
   this.getallcontrollers().then(a=>{
     this.controllers = a;
   })
  }

  async getallcontrollers(): Promise<control[]>{
    const array:control[] =[]
     await this.afs.collection('controller').ref.get().then(snapshot=>{
          snapshot.docs.forEach(doc=>{
            let s = JSON.stringify(doc.data());
            let p = JSON.parse(s);
            array.push(p);
          })
     })
    return array
  }

  async getactivecollections(): Promise<string[]>{
    let activecollections: string[]=[]
    await this.getallcontrollers().then(a=>{
          a.forEach(control=>{
            if(control.isactive)
            {
              activecollections.push(control.collectionname)
            }
          })
    })
    return activecollections
  }
}
