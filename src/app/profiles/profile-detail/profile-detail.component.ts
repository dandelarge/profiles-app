import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ProfilesService } from '../profiles.service';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ProfileModel } from '../profile.model';
import { QuickFactsModel } from '../quick-facts.model';

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
  profile: ProfileModel;
  profileDetails: ProfileMapItem[];
  quickFacts: QuickFactsModel;

  displayedColumns = ['key', 'value', 'edit'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private profilesService: ProfilesService
  ) { }

  ngOnInit() {
    //getting the parameters from the url
    this.route.paramMap.pipe<ProfileModel, QuickFactsModel>(
      // getting the profile Information from the service
      switchMap( (params: ParamMap) => 
        this.profilesService.getProfile(parseInt(params.get('id')))
      ),
      // Now using the fetched profile data to fill the attributes of the component class, 
      // then, we fetch the quick facts
      switchMap( (profile: ProfileModel) => {
        this.profile = profile;
        this.profileDetails = this.profilesService.buildDetailsArray(profile);
        return this.profilesService.getQuickFacts(profile.localid);
      })
    ).subscribe( quickFacts => {
      this.quickFacts = quickFacts;
    });
  }
}