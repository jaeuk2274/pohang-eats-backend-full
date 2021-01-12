import { Inject, Injectable } from '@nestjs/common';
import { jwtModuleOprions } from './jwt-interfaces';
import * as jwt from 'jsonwebtoken';
import { CONFIG_OPTIONS } from 'src/common/common.constants';

@Injectable()
export class JwtService {
  constructor(
    @Inject(CONFIG_OPTIONS) private readonly options: jwtModuleOprions,
  ) {}

  // sign(payload: object): string {  object로 사용해 다른 프로젝트도 공유 가능한 jwt로 활용 가능
  sign(userId: number): string {
    return jwt.sign({ id: userId }, this.options.privateKey);
  }
  verify(token: string) {
    return jwt.verify(token, this.options.privateKey);
  }
}
