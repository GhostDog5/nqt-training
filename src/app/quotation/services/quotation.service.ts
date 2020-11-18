import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable()
export class QuotationService {
    saveQuotation(id: number): Observable<boolean> {
        // perform some pre-save actions; save

        // return something meaningful
        return of(true);
    }

    createQuotation(): Observable<boolean> {
        // create quotation; maybe return created quotation

        // return something meaningful
        return of(true);
    }
}
