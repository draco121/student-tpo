import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ErrorlogService } from '../errorlog.service';

export interface control {
  collectionname: string;
  isactive: boolean;
  master_lock: boolean;
  secondary_lock: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AdmincontrolService {
  constructor(private afs: AngularFirestore, private er: ErrorlogService) {}

  async getallcontrollers(): Promise<control[]> {
    const array: control[] = [];
    await this.afs
      .collection('controller')
      .ref.get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          let s = JSON.stringify(doc.data());
          let p = JSON.parse(s);
          array.push(p);
        });
      })
      .catch((err) => {
        this.er.log(err);
      });
    return array;
  }

  async getactivecollections(): Promise<string[]> {
    let activecollections: string[] = [];
    await this.getallcontrollers()
      .then((a) => {
        a.forEach((control) => {
          if (control.isactive) {
            activecollections.push(control.collectionname);
          }
        });
      })
      .catch((err) => {
        this.er.log(err);
      });
    return activecollections;
  }

  async getmasterlock(collection: string): Promise<boolean> {
    let lock: boolean;
    await this.getallcontrollers()
      .then((a) => {
        a.forEach((control) => {
          if (control.collectionname === collection) lock = control.master_lock;
        });
      })
      .catch((err) => {
        this.er.log(err);
      });
    return lock;
  }

  async getsecondarylock(collection: string): Promise<boolean> {
    let lock: boolean;
    await this.getallcontrollers()
      .then((a) => {
        a.forEach((control) => {
          if (control.collectionname === collection)
            lock = control.secondary_lock;
        });
      })
      .catch((err) => {
        this.er.log(err);
      });
    return lock;
  }
}
