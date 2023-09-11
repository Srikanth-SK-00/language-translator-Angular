import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslaterService {lang(targetlanguage: string, srclanguage: string, message: string) {
  const data = {
    targetlanguage,
    srclanguage,
    message,
  };

  return this.http.post('http://localhost:3000/translate', data);
}

  constructor(private http:HttpClient) { }

}
