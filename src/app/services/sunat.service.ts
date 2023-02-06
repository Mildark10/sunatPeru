import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SunatService {

  constructor(private http: HttpClient) { } //para conectarse a la api

  buscarRuc(_ruc: string): Observable<any> {
    let data = {
      ruc: _ruc
    };//creacion de json

    let url = "https://www.softwarelion.xyz/api/sunat/consulta-ruc";
    let token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozNDg4LCJjb3JyZW8iOiJkaW1pdHJpYTQ2NkBnbWFpbC5jb20iLCJpYXQiOjE2NzU2OTg1MTR9.kk_-eHVFAxzlexVvoYXGK0Jhi0VGjQboSJQsibnfBLs";
    let _headers = new HttpHeaders().set("Authorization", token);
    console.log(_headers)
    return this.http.post(url, data, { headers: _headers });

  }

}
