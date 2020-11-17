import {Observable} from 'rxjs';
import {Inject, Injectable} from '@angular/core';

interface User {
  username: string;
  email: string;
}

@Injectable()
export class SecurityService {
  readonly $user: Observable<User>;
}
