import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })

export class ContactService {
  private readonly http = inject(HttpClient)

  private url = 'https://script.google.com/macros/s/AKfycbxLm-Opb24aNi92Bh0RL_O1SeTwaxtfylaTeyxD9dn_XrMQRzFJu_xXdHgRytd4I4kPXg/exec'

  postContactForm(data: any) {
    return this.http.post(this.url, data)
  }
}