import { Injectable } from '@angular/core';
import { ProfileModel } from './profile.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PROFILES_API } from './profiles.config';

@Injectable()
export class ProfilesService {

  constructor(private httpClient: HttpClient) { }

  getMany(offset: number = 0, limit: number = 500): Observable<ProfileModel[]> {
    return this.httpClient.get<ProfileModel[]>(PROFILES_API.URL);
  }
}

