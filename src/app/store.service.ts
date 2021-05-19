import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private firestore: AngularFirestore) {

  }

  addSubItemBusinessModel(novoS: string[], userId: string, itemId: number) {
    switch (itemId) {
      case 0:
        this.firestore.collection('modeloNegocios').doc(userId).update({ "sub00": novoS });
        break;
      case 1:
        this.firestore.collection('modeloNegocios').doc(userId).update({ "sub01": novoS });
        break;
      case 2:
        this.firestore.collection('modeloNegocios').doc(userId).update({ "sub02": novoS });
        break;
      case 3:
        this.firestore.collection('modeloNegocios').doc(userId).update({ "sub03": novoS });
        break;
      case 4:
        this.firestore.collection('modeloNegocios').doc(userId).update({ "sub04": novoS });
        break;
      case 5:
        this.firestore.collection('modeloNegocios').doc(userId).update({ "sub05": novoS });
        break;
      case 6:
        this.firestore.collection('modeloNegocios').doc(userId).update({ "sub06": novoS });
        break;
      case 7:
        this.firestore.collection('modeloNegocios').doc(userId).update({ "sub07": novoS });
        break;
      case 8:
        this.firestore.collection('modeloNegocios').doc(userId).update({ "sub08": novoS });
        break;
    }
  }

  getAllSubItensBusinessModel(userId: string) {
    return this.firestore.collection('modeloNegocios').doc(userId).ref.get().then(function (doc) { return doc.data() });
  }
  
  createNewUser(userId: string){
    this.firestore.collection('modeloNegocios').doc(userId).set({"sub00": []});
  }

}
