import { Injectable } from '@angular/core';
import { ProfileModel, ProfileMapItem } from './profile.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, TimeoutError } from 'rxjs';
import { PROFILES_API } from './profiles.config';
import { QuickFactsModel, Tier } from './quick-facts.model';

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
      modified: 'tonight',
      photo: 'https://robohash.org/nihilblanditiisexercitationem.bmp?size=50x50&set=set1'
    }));
  }

  getQuickFacts(id: number): Observable<QuickFactsModel> {
    return new Observable( subscriber => subscriber.next({
      id: "SH7489324",
      tier: Tier.Gold,
      points: 21345,
      room_type: 'Presidential suite',
      bed_type: 'King Bed',
      floor: 'Pent house',
      rfm_score: {
        score: 80,
        r: 70,
        f: 50,
        m: 90
      },
      total_stays: 24,
      nights: 32,
      average_stay: 1.33,
      last_visit: '2018-08-15',
      lifetime_value: 31528
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

