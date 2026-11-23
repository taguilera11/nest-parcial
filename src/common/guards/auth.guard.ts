import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Request } from 'express';

const ADMIN_TOKEN = 'admin-secret-token';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();

    if (request.headers.authorization !== ADMIN_TOKEN) {
      throw new ForbiddenException('Token de autorización inválido o ausente');
    }

    return true;
  }
}
