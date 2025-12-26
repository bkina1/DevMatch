import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class ProfilesGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const request = context.switchToHttp().getRequest();
    return authenticate(request);
  }
}

function authenticate(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _request: any,
): boolean | Promise<boolean> | Observable<boolean> {
  throw new Error('Function not implemented.');
}
