export class User {
  success: true|false;
  error: Error;
  results: string;
  token: string;
  OTP: string;
  data: UserData;
}

export class Error {
  code: number;
  message: string;
}

export class UserData {
  ref: number;
  firstName: string;
  lastName: string;
  emailAddress: string;
  url: Url;
  verified: true|false;
  creationDate: number;
  lastModified: number;
  accountStatus: UserStatus;
  roles = [];
}

export class Roles {
  group: string;
  role: string;
  role_id: number;
  store = [];
}

export class UserStatus {
  activeAccount: true|false;
  newAccount: true|false;
  inactiveAccount: true|false;
  passwordChange: true|false;
}

export class Url {
  profilePicture: string;
  profile: string;
}