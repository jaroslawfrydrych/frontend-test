import {Injectable} from '@angular/core';
import {Environment} from '../models/environment';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService implements Environment {

  get production(): boolean {
    return environment.production;
  }

  get apiBasePath(): string {
    return environment.apiBasePath;
  }
}
