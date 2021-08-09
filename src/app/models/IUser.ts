
export interface IPersonInfo {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: number;
  website: string;
  company: ICompany
}

interface ILocation {
  lat: number;
  lng: number
}

interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: number;
  geo: ILocation
}

interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string
}
