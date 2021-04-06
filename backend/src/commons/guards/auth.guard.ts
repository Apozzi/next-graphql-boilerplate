import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthGuard implements CanActivate {
  private readonly SECRET_TOKEN = "84c59318-feff-453d-b3e3-812cb5fb88cf ";

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.getArgs()[2].req;
    const authorization = req.headers['authorization'];
    return authorization != null && this.isValidToken(authorization);
  }

  isValidToken(token: string) {
    try {
      const result: any = jwt.verify(token, this.SECRET_TOKEN);
      return result.auth;
    } catch(err) {
      return false;
    }
  }
}