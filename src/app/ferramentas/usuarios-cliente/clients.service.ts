import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StoreService } from 'src/app/store.service';

@Injectable({
    providedIn: 'root'
})
export class ClientService {


    constructor(private store: StoreService) {

    }

    getUsers(id: string): any {
        return this.store.getUserData(id, 'users');
    }
    
    
}
