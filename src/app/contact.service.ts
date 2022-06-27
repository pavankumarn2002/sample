import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  API_URL: string = "https://retoolapi.dev/FKnO9L/data";
  constructor(private http: HttpClient) { }
  getContacts(){    
   return this.http.get(this.API_URL)
  }
  getContact(contactId:any){
   return this.http.get(`${this.API_URL}/${contactId}`) 
  }

}
