import { Injectable } from '@angular/core';
import { ProfileModel, ProfileMapItem } from './profile.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PROFILES_API } from './profiles.config';

@Injectable()
export class ProfilesService {

  constructor(private httpClient: HttpClient) { }

  getMany(offset: number = 0, limit: number = 500): Observable<ProfileModel[]> {
    return this.httpClient.get<ProfileModel[]>(PROFILES_API.URL);
  }

  getProfile(id: number): Observable<ProfileModel> {
    return new Observable<ProfileModel>(subscriber => subscriber.next({
      address: 'address',
      first_name: 'first name',
      last_name: 'lastname',
      email: 'dohnjohn@email.clmo',
      localid: 78,
      loyalty_member_id: 'ksad',
      birthdate: 'yesterday',
      modified: 'tonight'
    }));
  }

  buildDetailsArray(profile: ProfileModel): ProfileMapItem[] {
    let result = [];
    // Making sure the order of the elements is correct for the details table
    const displayInfo = ['prefix', 'first_name', 'last_name', 'suffix', 'loyalty_member_id', 'phone', 'address', 'birthdate', 'language'];
    const displayAs = ['Prefix', 'First name', 'Last name', 'Suffix', 'Loyalty member ID', 'Phone', 'Address', 'Birthdate', 'Preffered language']
    displayInfo.forEach((key, index) => {
      console.log(key, profile[key]);
      result.push({key: displayAs[index], value: profile[key]});
    });

    return result;
  } 

}

