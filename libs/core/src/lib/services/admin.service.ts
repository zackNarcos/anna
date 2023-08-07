import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {coreConfig} from "../core.config";
import {Observable} from "rxjs";
import {Admin} from "../models/admin";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl = coreConfig.backend;

  constructor(
    private http: HttpClient,
  ) { }

  public login(email: string, password: string) {
    const url = `${this.baseUrl}/admin/login`;

    const body = {
      email: email.trim(),
      password: password,
    }

    return this.http.post(url, body);
  }

  public isAuthentified() : Observable<boolean> {
    if (!localStorage.getItem('admin-token')) {
      return new Observable<boolean>(
        observer => observer.next(false)
      );
    }
    return new Observable<boolean>(observer => observer.next(true));
  }

  public getMe(): Observable<Admin> {
    return this.http.get<Admin>(`${this.baseUrl}/admin/me`);
  }

}
