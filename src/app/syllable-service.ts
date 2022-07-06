import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SyllableService {
  requestUrl: string = 'http://127.0.0.1:9000/simplesyllables';

  rythmclipline: string = 'http://127.0.0.1:9003/rhythmcliplines';

  instrumentid: string = 'http://127.0.0.1:9002/serversideinstruments';


  constructor(private httpClient: HttpClient) { }

  public createSyllable(argSyllable: string): Observable<any> {
    this.requestUrl = 'http://127.0.0.1:9000/simplesyllables';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token',
      }),
    };
    return this.httpClient
      .post<any>(this.requestUrl, { text: argSyllable }, httpOptions)
      .pipe();
  }

  public createRcline(
    argRcline: string,
    argInstrumentid: string
  ): Observable<any> {
    this.rythmclipline = 'http://127.0.0.1:9003/rhythmcliplines';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token',
      }),
    };
    return this.httpClient
      .post<any>(
        this.rythmclipline,
        { syllableText: argRcline, instrumentId: argInstrumentid },
        httpOptions
      )
      .pipe();
  }

  public getinstrumentid(
  ): Observable<any> {
    this.instrumentid = 'http://127.0.0.1:9002/serversideinstruments';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token',
      }),
    };
    return this.httpClient
      .get<instrument[]>(this.requestUrl, httpOptions)
      .pipe();
  }
}
