import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class ContactService {
  private readonly http = inject(HttpClient)

  private url = 'https://script.google.com/macros/s/AKfycbxcg5R9r38D0myTVNRBo7CO6kdY5eyjrpE2N8-P8yAO3taB5bOSw9eDMqugNjNsXI-0oQ/exec'
  
  async postContactForm(data: any): Promise<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
    let options = { headers: headers }
    const body = (`name=${data.name}&email=${data.email}&message=${data.message}`)
    const request =  this.http.post(this.url, body, options)
    return await lastValueFrom<any>(request)
  }
}