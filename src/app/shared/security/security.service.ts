import {Observable} from 'rxjs';

interface User {
  username: string;
  email: string;
}

export class SecurityService {
  readonly $user: Observable<User>;
}
