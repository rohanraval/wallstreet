import { UserActions } from './user/user.actions';
import { UserService } from './user/user.service';
import { CompanyDataService } from './services/companydata.service'

export const APP_PROVIDERS = [
  UserActions,
  UserService,
  CompanyDataService
];
