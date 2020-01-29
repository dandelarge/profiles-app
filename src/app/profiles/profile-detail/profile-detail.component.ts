import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ProfilesService } from '../profiles.service';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ProfileModel } from '../profile.model';

interface ProfileMapItem {
  key: string;
  value: string;
}

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss']
})
export class ProfileDetailComponent implements OnInit {

  profile$: Observable<ProfileModel>;
  profileDetails: ProfileMapItem[];

  displayedColumns = ['key', 'value', 'edit'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private profilesService: ProfilesService
  ) { }

  ngOnInit() {
    //getting the parameters from the url
    this.route.paramMap.pipe(
      // getting the profile Information from the service
      switchMap( (params: ParamMap) => 
        this.profilesService.getProfile(parseInt(params.get('id')))
      )
    ).subscribe( profile => {
      // we model the profile data so we can feed it to the matTable.
      this.profileDetails = this.profilesService.buildDetailsArray(profile);
    });
  }
}