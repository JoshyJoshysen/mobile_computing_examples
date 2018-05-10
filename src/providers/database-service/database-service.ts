import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { SimpsonInterface } from "../../interfaces/simpson.interface";


@Injectable()
export class DatabaseService {
  simpsons: AngularFireList<SimpsonInterface> = this.afDatabase.list<SimpsonInterface>('simpsons');

  constructor(private afDatabase: AngularFireDatabase) {
  
  }
  
  getSimpsons(){
    return this.simpsons;
  }
  
  addSimpsons(simpson: SimpsonInterface){
    return this.simpsons.push(simpson);
  }
  
  updateSimpsons(key: string, simpson: SimpsonInterface){
    return this.simpsons.update(key, simpson);
  }
  
  removeSimpsons(key: string){
    return this.simpsons.remove(key);
  }

}
