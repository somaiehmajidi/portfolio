import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })

export class ContactService {
  private readonly http = inject(HttpClient)

  private url = 'YOUR_GOOGLE_SCRIPT_URL_HERE'

  postContactForm(data: any) {
    return this.http.post(this.url, data)
  }
}