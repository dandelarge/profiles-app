export interface ProfileModel {
  address: string;
  birthdate: string;
  email: string;
  email2?: string;
  first_name: string;
  gender?: string;
  last_name: string;
  localid: number,
  loyalty_member_id: string;
  modified: string;
  phone?: string;
  photo?: string;
  prefix?: string;
  suffix?: string;
};

export interface ProfileMapItem {
  key: string;
  value: string;
}