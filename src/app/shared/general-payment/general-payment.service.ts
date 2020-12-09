import { Injectable , Inject } from '@angular/core';

import { Observable , of } from 'rxjs';

import { catchError , delay , map , retry , tap } from 'rxjs/operators';

import { HttpClient , HttpErrorResponse } from '@angular/common/http';

import { Payment } from './payment';

import { General } from './general';

import { SearchQuery } from '../interfaces/search-query';

import { Api_Token , Api } from '../../configuration';

import { ErrorMessagesService } from '../services/error-messages.service';

import { AuthenticationService } from '../../authentication/authentication.service';

@Injectable()

export class GeneralPaymentService {

  constructor(private http : HttpClient , @Inject(Api_Token) private apiConfig : Api , 

              private ems : ErrorMessagesService , private as : AuthenticationService) { 

  }

  public $systemType : string;

  public $sa : string; 

  public getAllEntry(params : SearchQuery) : Observable<Payment[]> {

  	let	link = `${this.apiConfig.host}/${this.$sa}/entries`;

    let httpOptions = {'params' : params};

    return this.http.get<Payment[]>(link , httpOptions)

      .pipe(
              tap((value : Payment[]) => console.log(value)) ,

              catchError(this.handleError<Payment[]>(`${this.$systemType} Entries` , []))
        )

  }

  public getEntry(entry : string) : Observable<Payment> {

  	let	link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}`;

  	return this.http.get<Payment>(link)
       
       .pipe(

          tap((entry : Payment) => console.log(entry)) ,

          catchError(this.handleError<Payment>(`${this.$systemType} Entry` , null))
        )
  }
 
  public addEntry() : Observable<General> {

    let  link = `${this.apiConfig.host}/${this.$sa}/add`;

    return this.http.get<General>(link)

      .pipe(

          tap((entry : General) => console.log(entry)) ,

          map((entry : General) => { return { 'permitted' : true , '$data' : entry }; }) ,

          catchError(this.handleError<General>(`${this.$systemType} Entry` , null))
        )
  }

  public $addEntry(payment : Payment) : Observable<General> {

    let  link = `${this.apiConfig.host}/payment/create`;

    return this.http.post<Payment>(link , payment)

      .pipe(

          tap((entry : General) => console.log(entry)) ,

          map((entry : Payment) => { return {'created' : true , '$data' : entry}; }) ,

          catchError(this.handleError<Payment>(`${this.$systemType} Entry` , null))
        )
  }

  public $initializePayment(payment : General) : Observable<General> {

    let  link = `${this.apiConfig.host}/payment/initialize-transaction`;

    return this.http.post<General>(link , payment)

      .pipe(

          tap((entry : General) => console.log(entry)) ,

          retry(3) ,

          map((entry : General) => { return {'created' : true , '$data' : entry}; }) ,

          catchError(this.handleError<General>(`${this.$systemType} Entry` , null))
        )
  }

  public $verifyPayment(ref) : Observable<General> {

    let link = `${this.apiConfig.host}/payment/verify-transaction?reference=${ref}`;

    return this.http.get<General>(link)

      .pipe(

          tap((entry : General) => console.log(entry)) ,

          retry(3) ,

          map((entry : General) => { return {'verified' : true , '$data' : entry}; }) ,

          catchError(this.handleError<General>(`${this.$systemType} Entry` , null))
        )
  }

  public $refundEntry(entry : string , payment : Payment) : Observable<General> {

    let link = `${this.apiConfig.host}/payment/refund-transaction?reference=${entry}`;

    return this.http.post<Payment>(link , payment)

      .pipe(

          tap((entry : General) => console.log(entry)) ,

          map((entry : Payment) => { return {'created' : true , '$data' : entry}; }) ,

          catchError(this.handleError<Payment>(`${this.$systemType} Entry` , null))
        )
  }

  public $createRefund(entry : string , payment : Payment) : Observable<General> {

    let link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}/refund`;

    return this.http.put<Payment>(link , payment)

      .pipe(

          tap((entry : General) => console.log(entry)) ,

          map((entry : Payment) => { return {'updated' : true , '$data' : entry}; }) ,

          catchError(this.handleError<Payment>(`${this.$systemType} Entry` , null))
        )
  }

  public $updateEntry(entry : string , payment : Payment) : Observable<Payment> {

    let  link = `${this.apiConfig.host}/${this.$sa}/entry/${entry}`;

  return this.http.put<Payment>(link , payment)

      .pipe(

        map((entry : Payment) => { return { 'updated' : true , '$data' : entry }; }) ,

        catchError(this.handleError<Payment>(`${this.$systemType} Entry` , null))

        );
  }

  public $deleteManyEntry(arrayIdx : number[]) : Observable<any> {

    let link : string = `${this.apiConfig.host}/${this.$sa}/entry/many/delete`;

    let body = {'entries' : arrayIdx};

    return this.http.patch(link , body)

      .pipe(

        map((val) => { return {'manyDeleted' : true}; }) ,

        catchError(this.handleError<Payment[]>(`${this.$systemType} Entries Delete` , []))

        );
  }

  public $deleteAllPayment() : Observable<any> {

    let link : string = `${this.apiConfig.host}/${this.$sa}/delete/entry/all/`;

    return this.http.delete(link)

      .pipe(

        map((val) => { return {'allDeleted' : true}; }) ,

        catchError(this.handleError<Payment[]>(`${this.$systemType} Entry or Entries Delete` , []))

        );
  }

  public createPayment(data) {

      let newPayment = {

        'paymentReference' : data.reference , 'description' : data.metadata.description ,
  
        'fullName' : data.metadata.fullName , 'phoneNumber' : data.metadata.phoneNumber ,
        
        'emailAddress' : data.customer.email , 'department' : this.as.userDepartment ,

        'faculty' : this.as.userFaculty , 'amount' : data.amount / 100 , 'paymentType' : data.metadata.type ,

        'paidOn' : data.paid_at , 'status' : data.status , 'author' : this.as.userId };

        return newPayment;
  }

  private handleError<T>(operation = 'operation' , result? : T) {

      return (error : HttpErrorResponse) : Observable<T> => { this.ems.message = error;

                return of(result as T);

      }
  }

}
