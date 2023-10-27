import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private fs:Firestore) { }

  getNotes(){
    let notesCollection = collection(this.fs, 'notes');
    return collectionData(notesCollection,{idField: 'id'});
  }

  addNote(dosc: string){
    let data = {description:dosc};
    let notesCollection = collection(this.fs, 'notes');
    return addDoc(notesCollection,data);
  }

  deleteNote(id: string){
    let docRef = doc(this.fs, 'notes/'+id);
    return deleteDoc(docRef);
  }
}
