import { Component, OnInit, ViewChild } from '@angular/core';
import { ProfilesService } from './profiles.service';
import { ProfileModel } from './profile.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {
  dataSource = new MatTableDataSource<ProfileModel>();
  displayColumns = ['photo','localId','email','name','phone','address','modified', 'view'];
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort : MatSort
  
  constructor(private profilesService: ProfilesService) { }

  ngOnInit(): void {
    this.getMany();
    this.dataSource.filterPredicate = filterPredicate;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getMany(): void {
    this.profilesService.getMany().subscribe( 
      profiles => this.dataSource.data = profiles,  
      error => {
        console.log(error);
      },
      () =>  console.log(this.dataSource.data));
  }

  filter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }
}

// changing the filter pradicate so it only checks for first name, last name and email.
function filterPredicate (data: ProfileModel, filter: string) {
  const filterKeys = ['first_name', 'last_name', 'email'];
  let testString = '';
  filterKeys.forEach( key => {
    testString += data[key].trim().toLowerCase();
  });
  return testString.includes(filter);
}