import { Injectable } from '@nestjs/common';
import { Request, Response } from 'express';
import { ConfigService } from '@nestjs/config';
import { User } from 'src/users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { TokenPayload } from './interfaces/token-payload.interface';
import { getJwt } from './jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  async login(user: User, response: Response) {
    const tokenPayload: TokenPayload = {
      ...user,
      _id: user._id.toHexString(),
    };

    const expires = new Date();
    expires.setSeconds(
      expires.getSeconds() + this.configService.get('JWT_EXPIRATION'),
    );
    const token = this.jwtService.sign(tokenPayload);

    response.cookie('Authentication', token, {
      httpOnly: true,
      expires,
    });
    return token;
  }

  verifyWs(request: Request, connectionParams: any = {}): TokenPayload {
    const cookies: string[] = request.headers.cookie?.split('; ');
    const authCookie = cookies?.find((cookie) =>
      cookie.includes('Authentication'),
    );
    const jwt = authCookie?.split('Authentication=')[1];
    return this.jwtService.verify(jwt || getJwt(connectionParams.token));
  }

  logout(response: Response) {
    response.cookie('Authentication', '', {
      httpOnly: true,
      expires: new Date(),
    });
  }
}
